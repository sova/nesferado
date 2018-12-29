(ns nesferado.server
  "Nonforum Nesferado Server"
  {:author "@_vaso"}

  (:require
   [clojure.string     :as str]
   [ring.middleware.defaults]
   [ring.util.response :refer [response redirect content-type]]
   [compojure.core     :as comp :refer (defroutes GET POST)]
   [compojure.response :refer [render]]
   [compojure.route    :as route]
   [clojure.core.async :as async  :refer (<! <!! >! >!! put! chan go go-loop)]
   [taoensso.encore    :as encore :refer (have have?)]
   [taoensso.timbre    :as timbre :refer (tracef debugf infof warnf errorf)]
   [taoensso.sente     :as sente]
   [rum.core :as rum]
   [crypto.password.pbkdf2 :as password]
   [org.httpkit.server :as http-kit]
   [taoensso.sente.server-adapters.http-kit :refer (get-sch-adapter)]
   [duratom.core :refer :all]


   ;; Optional, for Transit encoding:
   [taoensso.sente.packers.transit :as sente-transit]))

;; (timbre/set-level! :trace) ; Uncomment for more logging
(reset! sente/debug-mode?_ true) ; Uncomment for extra debug info

;;;; Define our Sente channel socket (chsk) server

(let [;; Serializtion format, must use same val for client + server:
      packer :edn ; Default packer, a good choice in most cases
      ;; (sente-transit/get-transit-packer) ; Needs Transit dep

      chsk-server
      (sente/make-channel-socket-server!
       (get-sch-adapter) {:packer packer})

      {:keys [ch-recv send-fn connected-uids
              ajax-post-fn ajax-get-or-ws-handshake-fn]}
      chsk-server]

  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv) ; ChannelSocket's receive channel
  (def chsk-send!                    send-fn) ; ChannelSocket's send API fn
  (def connected-uids                connected-uids) ; Watchable, read-only atom
  )

;; We can watch this atom for changes if we like
(add-watch connected-uids :connected-uids
  (fn [_ _ old new]
    (when (not= old new)
      (infof "Connected uids change: %s" new))))



(def auth-db (atom []))


(defn add-user [user-email pw]
  (swap! auth-db conj {:username user-email :password (password/encrypt pw)}))

(add-user "vas" "l337")
(add-user "nelly" "18")


(defn check-login-against-db [useremail password]
  (let [user-map (first (filter #(= useremail (:username %)) @auth-db))]
    (if (not (empty? user-map))
      (let [ username (:username user-map)
             hash-pass (:password user-map)
             check-pass-bool (password/check password hash-pass)]
         check-pass-bool)
      ;user not found in db
      false)))

(defn check-creds [uid auth-token login-time]
  (password/check (str uid login-time) auth-token))

;(check-login-against-db "nelly" "18")




(defn username-not-taken [user-id]
  (let [user-map (first (filter #(= user-id (:username %)) @auth-db))]
    (if (empty? user-map)
      true
      false)))

(username-not-taken "vasx")

;(def users-db (e/file-atom
;                {}
 ;               "users-db.sova"));

;submsiions
;comments
;ratings
;participation


(def nf-users-db (duratom :local-file
                           :file-path "data/pasona.sova"
                           :init []))
(def nf-submissions (duratom :local-file
                      :file-path "data/submissions.sova"
                      :init []))
(def nf-comments (duratom :local-file
                    :file-path "data/comments.sova"
                    :init []))
(def nf-ratings (duratom :local-file
                    :file-path "data/ratings.sova"
                    :init []))
(def nf-participation (duratom :local-file
                    :file-path "data/participation.sova"
                    :init []))


(defn create-auth-token-map [user-email]
  (let [login-time  (quot (System/currentTimeMillis) 1000)
        encrypted (password/encrypt (str user-email login-time))]
    {:auth-token  encrypted
     :login-time login-time}))

(defn create-old-auth-token-map [user-email]
  (let [login-time  (+ (quot (System/currentTimeMillis) 1000) 1400000)
        encrypted (password/encrypt (str user-email login-time))]
    {:auth-token  encrypted
     :login-time login-time}))

(defn is-good-auth-key [auth-key user-email login-time]
  (let [now (quot (System/currentTimeMillis) 1000)
        phase (- login-time now)
        shift 1300000 ;1.3 mil seconds = 2 weeks
        ;doesn't actually work because time is not an int? huh?

        valid? (< phase shift)]
      (and valid? (password/check (str user-email login-time) auth-key))))


(let [user "vas@nonform.com"
      auth-map (create-auth-token-map user)
      token (:auth-token auth-map)
      login-time (:login-time auth-map)]
     (println login-time)
  (is-good-auth-key token user login-time))




;;rum components


(rum/defc nf-login-input []
  [:form#nflogin
   [:input.fullwidth {:place-holder "username" :name "username"}]
   ;                   :on-change (fn [e] (do
   ;                                           (swap! input-state assoc-in [:inputs 0 :username] (.-value (.-target e)))
   ;                                           (.log js/console (get-in @input-state [:inputs 0 :username]))))}]
   [:input.fullwidth {:place-holder "password" :type "password" :name "password"}]
   ;                   :on-change (fn [e] (do
   ;                                           (swap! input-state assoc-in [:inputs 0 :password] (.-value (.-target e)))
   ;                                           (.log js/console (get-in @input-state [:inputs 0 :password]))))}]
   [:button.fullwidth {:type "button"} "login"]
   ;                    :on-click (fn [e] (let [username (get-in @input-state [:inputs 0 :username])
   ;                                            password (get-in @input-state [:inputs 0 :password])]
   ;                                        (do
   ;                                          (.log js/console "login button pressed")
   ;                                          (try-login username password))))} "login"]])
   ])


 (rum/defc create-account-fields []
  [:form#nfcreate
   [:input#cruser.fullwidth {:place-holder "username" :name "username"}]
   ;                   :on-change (fn [e] (do
   ;                                           (swap! input-state assoc-in [:inputs 0 :create-username] (.-value (.-target e)))
   ;                                           (.log js/console (get-in @input-state [:inputs 0 :create-username]))))}]
   [:input#crpass.fullwidth {:place-holder "password" :type "password" :name "password"}]
   ;                   :on-change (fn [e] (do
   ;                                           (swap! input-state assoc-in [:inputs 0 :create-password] (.-value (.-target e)))
   ;                                           (.log js/console (get-in @input-state [:inputs 0 :create-password]))))}]
   [:input#crpass2.fullwidth {:place-holder "pw confirm" :type "password" :name "password2"}]
   ;                   :on-change (fn [e] (do
   ;                                           (swap! input-state assoc-in [:inputs 0 :create-password2] (.-value (.-target e)))
   ;                                           (.log js/console (get-in @input-state [:inputs 0 :create-password2]))))}]
   [:button#crsubmit.fullwidth {:type "button"} "create account"]
   ;                    :on-click (fn [e] (let [username  (get-in @input-state [:inputs 0 :create-username])
   ;                                            password  (get-in @input-state [:inputs 0 :create-password])
   ;                                            password2 (get-in @input-state [:inputs 0 :create-password2])]
   ;                                        (do
   ;                                          (.log js/console "create account button pressed")
   ;                                          (create-user username password password2))))} "create account"]])
   ])


(rum/defc create-account-input []
  [:div#create-account-contain
   (create-account-fields)])


(rum/defc landing-page []
  [:div
    [:textarea#output]
    [:div#start]
    [:div#thread]
    [:div#inputs]
    [:div#footing]
    [:link {:rel "stylesheet" :href "/css/nesferado.css"}]
    [:script {:src "js/nesferado.js" :type "text/javascript"}]])


(rum/render-html (landing-page))

;;;; Ring handlers

(defn landing-pg-handler [ring-req]
  [ring-req]
  (let [{:keys [session params]} ring-req
        {:keys [user-id password]} params
        lp (rum/render-html (landing-page))]
    lp))


(defn login-handler
  "Generates auth-map (login-time, uid, auth-token)"
  [ring-req]
  (let [{:keys [session params]} ring-req
        {:keys [user-id password]} params
        login-time (quot (System/currentTimeMillis) 1)]
    (println "nf login req: " user-id)
    (if (check-login-against-db user-id password)
      (let [auth-map (create-auth-token-map user-id)]
        {:status 200
         ;:headers {"Content-Type" "application/transit+json"}
         :body (prn-str {:uid user-id
                :login-time (:login-time auth-map)
                :auth-token (:auth-token auth-map)})

         :session (merge session  {:uid user-id
                                   :login-time (:login-time auth-map)
                                   :auth-token (:auth-token auth-map)})
         })
      ;else
      {:status 302 :session session})))


(defn check-login-handler
  "Reassures client that they are logged in."
  [ring-req]
  (let [{:keys [session params]} ring-req
        {:keys [uid auth-token login-time]} params]
    (println "nf re-auth req: " uid)
    (println uid)
    (println auth-token)
    (println login-time)
    ;(println (is-good-auth-key auth-token uid login-time))
    (println (check-creds uid auth-token login-time))

    (if (check-creds uid auth-token login-time)
      {:status 200
         ;:headers {"Content-Type" "application/transit+json"}
         :body (prn-str {:uid uid
                :login-time login-time
                :auth-token auth-token})

         :session (merge session  {:uid uid
                                   :login-time login-time
                                   :auth-token auth-token})
         }
      ;else
      {:status 302 :session session})))


(defn create-account-handler
  "Here's where you'll add your server-side login/auth procedure (Friend, etc.).
  In our simplified example we'll just always successfully authenticate the user
  with whatever user-id they provided in the auth request."
  [ring-req]
  (let [{:keys [session params]} ring-req
        {:keys [user-id password password2]} params]
    (println "nf create account request: " user-id)
    (if (= password password2)
      (if (username-not-taken user-id)
        (do
          (add-user user-id password)
          (let [auth-map (create-auth-token-map user-id)]
            {:status 200
             :body (prn-str {:uid user-id
                             :login-time (:login-time auth-map)
                             :auth-token (:auth-token auth-map)})
             :session (merge session  {:uid user-id
                                       :login-time (:login-time auth-map)
                                       :auth-token (:auth-token auth-map)})}))
        ;else
        {:status 302 :session session}))))



(password/encrypt "userpass")
(quot (System/currentTimeMillis) 1)

(let [login-time (System/currentTimeMillis)
      user-email "stan@southpark.co.us"
      encrypted (password/encrypt (str user-email login-time))]

  (password/check (str user-email login-time) encrypted))



(defn logout
  [request]
  (-> (redirect "/login")
      (assoc :session {})))

(defroutes ring-routes
  (GET  "/"      ring-req (landing-pg-handler            ring-req))

  ;phantom routes
  (GET "/top"     ring-req (landing-pg-handler            ring-req))
  (GET "/submit"  ring-req (landing-pg-handler            ring-req))
  (GET "/feedback" ring-req (landing-pg-handler            ring-req))

  (GET "/email-recovery" ring-req (landing-pg-handler            ring-req))
  (GET "/email-public" ring-req (landing-pg-handler            ring-req))
  (GET "/password-update" ring-req (landing-pg-handler            ring-req))

  (GET "/support" ring-req (landing-pg-handler            ring-req))

  (GET "/invite" ring-req (landing-pg-handler            ring-req))

  (GET "/profile" ring-req (landing-pg-handler            ring-req))
  ;/phantomses

  (GET  "/chsk"  ring-req (ring-ajax-get-or-ws-handshake ring-req))
  (POST "/chsk"  ring-req (ring-ajax-post                ring-req))
  (POST "/login" ring-req (login-handler                 ring-req))
  (POST "/check-login" ring-req (check-login-handler      ring-req))
  (POST "/create-account" ring-req (create-account-handler ring-req))
  (route/resources "/") ; Static files, notably public/main.js (our cljs target)
  (route/not-found "<h1>Page not found</h1>"))

;; User defined unauthorized handler
;;
;; This function is responsible for handling
;; unauthorized requests (when unauthorized exception
;; is raised by some handler)
;;buudy auth provided unauth handler
;(defn unauthorized-handler
;  [request metadata]
;  (cond
;    ;; If request is authenticated, raise 403 instead
;    ;; of 401 (because user is authenticated but permission
;    ;; denied is raised).
;    (authenticated? request)
;    (-> (render (slurp (io/resource "error.html")) request)
;        (assoc :status 403))
;    ;; In other cases, redirect the user to login page.
;    :else
;    (let [current-url (:uri request)]
;      (redirect (format "/login?next=%s" current-url)))))


(def main-ring-handler
  "**NB**: Sente requires the Ring `wrap-params` + `wrap-keyword-params`
  middleware to work. These are included with
  `ring.middleware.defaults/wrap-defaults` - but you'll need to ensure
  that they're included yourself if you're not using `wrap-defaults`."
  (ring.middleware.defaults/wrap-defaults
    ring-routes ring.middleware.defaults/site-defaults))

;;;; Some server>user async push examples

(defn test-fast-server>user-pushes
  "Quickly pushes 100 events to all connected users. Note that this'll be
  fast+reliable even over Ajax!"
  []
  (doseq [uid (:any @connected-uids)]
    (doseq [i (range 100)]
      (chsk-send! uid [:fast-push/is-fast (str "hello " i "!!")]))))

(comment (test-fast-server>user-pushes))

(defonce broadcast-enabled?_ (atom false))

(defn start-example-broadcaster!
  "As an example of server>user async pushes, setup a loop to broadcast an
  event to all connected users every 10 seconds"
  []
  (let [broadcast!
        (fn [i]
          (let [uids (:any @connected-uids)]
            (debugf "Broadcasting server>user: %s uids" (count uids))
            (doseq [uid uids]
              (chsk-send! uid
                [:some/broadcast
                 {:what-is-this "An async broadcast pushed from server"
                  :how-often "Every 10 seconds"
                  :to-whom uid
                  :i i}]))))]

    (go-loop [i 0]
      (<! (async/timeout 10000))
      (when @broadcast-enabled?_ (broadcast! i))
      (recur (inc i)))))

;;;; Sente event handlers

(defmulti -event-msg-handler
  "Multimethod to handle Sente `event-msg`s"
  :id ; Dispatch on event-id
  )

(defn event-msg-handler
  "Wraps `-event-msg-handler` with logging, error catching, etc."
  [{:as ev-msg :keys [id ?data event]}]
  (-event-msg-handler ev-msg) ; Handle event-msgs on a single thread
  ;; (future (-event-msg-handler ev-msg)) ; Handle event-msgs on a thread pool
  )

(defmethod -event-msg-handler
  :default ; Default/fallback case (no other matching handler)
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (let [session (:session ring-req)
        uid     (:uid     session)]
    (debugf "Unhandled event: %s" event)
    (when ?reply-fn
      (?reply-fn {:umatched-event-as-echoed-from-from-server event}))))

(defmethod -event-msg-handler :example/test-rapid-push
  [ev-msg] (test-fast-server>user-pushes))

(defmethod -event-msg-handler :example/toggle-broadcast
  [{:as ev-msg :keys [?reply-fn]}]
  (let [loop-enabled? (swap! broadcast-enabled?_ not)]
    (?reply-fn loop-enabled?)))

(defmethod -event-msg-handler
  :clientsent/ping ; Default/fallback case (no other matching handler)
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (let [session (:session ring-req)
        uid     (:uid     session)
        auth-token (:auth-token session)
        login-time (:login-time session)]
    ;(println  session)
    (println uid)
    (println auth-token)
    (println login-time)
    (println (is-good-auth-key auth-token uid login-time))))

(defmethod -event-msg-handler
  :clientsent/newpost ; Default/fallback case (no other matching handler)
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (let [session (:session ring-req)
        uid     (:uid     session)
        auth-token (:auth-token session)
        login-time (:login-time session)]
    ;(println  session)
    (println uid)
    (println auth-token)
    (println (is-good-auth-key auth-token uid login-time))))

   ; (when ?reply-fn
    ;  (?reply-fn {:umatched-event-as-echoed-from-from-server event}))))

;; TODO Add your (defmethod -event-msg-handler <event-id> [ev-msg] <body>)s here...

;;;; Sente event router (our `event-msg-handler` loop)

(defonce router_ (atom nil))
(defn  stop-router! [] (when-let [stop-fn @router_] (stop-fn)))
(defn start-router! []
  (stop-router!)
  (reset! router_
    (sente/start-server-chsk-router!
      ch-chsk event-msg-handler)))

;;;; Init stuff

(defonce    web-server_ (atom nil)) ; (fn stop [])
(defn  stop-web-server! [] (when-let [stop-fn @web-server_] (stop-fn)))
(defn start-web-server! [& [port]]
  (stop-web-server!)
  (let [port (or port 10288) ; 0 => Choose any available port
        ring-handler (var main-ring-handler)

        [port stop-fn]
        (let [stop-fn (http-kit/run-server ring-handler {:port port})]
          [(:local-port (meta stop-fn)) (fn [] (stop-fn :timeout 100))])

        uri (format "http://localhost:%s/" port)]

    (infof "Web server is running at `%s`" uri)
    (try
      (.browse (java.awt.Desktop/getDesktop) (java.net.URI. uri))
      (catch java.awt.HeadlessException _))

    (reset! web-server_ stop-fn)))

(defn stop!  []  (stop-router!)  (stop-web-server!))
(defn start! [] (start-router!) (start-web-server!) (start-example-broadcaster!))

(defn -main "For `lein run`, etc." [] (start!))

;(comment
;  (start!)
;  (test-fast-server>user-pushes);)


(def     tv-state (atom [ {:title "Fusion Power Imminent"
                           :contents "Horne Technologies has developed a working Plasma Containment Prototype for furthering Fusion"
                           :priority 1
                           :id 108
                           :posted-by "v@nonforum.com"
                           :timestamp 808080808
                           :comments [69]
                           :parent nil
                           :number-of-ratings 2
                           :link "http://hax.com"
                           :details "Horne Technologies is on the brink of a fusion breakthrough. Their lab successfully contained plasma in 2017 with high-beta confinement and they need funding to continue research.  So far the fusion efficiency record is 67% (as of Dec. 2018), let's see how many teslas of magnetic field we need to reach 108% efficiency / break parity!"
                           :ratings-total 188}]))

(filter  #(= 108 (:id %)) @tv-state)

