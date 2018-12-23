(ns nesferado.server
  "nonforum server based on sente"
  {:author "@_vaso"}

  (:require
   [clojure.string     :as str]
   [ring.middleware.defaults]
   [ring.util.response :refer [response redirect content-type]]
   [compojure.core     :as comp :refer (defroutes GET POST)]
   [compojure.response :refer [render]]
   [compojure.route    :as route]
   [hiccup.core        :as hiccup]
   [clojure.core.async :as async  :refer (<! <!! >! >!! put! chan go go-loop)]
   [taoensso.encore    :as encore :refer (have have?)]
   [taoensso.timbre    :as timbre :refer (tracef debugf infof warnf errorf)]
   [taoensso.sente     :as sente]
   [rum.core :as rum]
   [crypto.password.pbkdf2 :as password]
   [org.httpkit.server :as http-kit]
   [taoensso.sente.server-adapters.http-kit :refer (get-sch-adapter)]

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
  (let [user-map (first (filter #(= useremail (:username %)) @auth-db))
        username (:username user-map)
        hash-pass (:password user-map)
      check-pass-bool (password/check password hash-pass)]
    check-pass-bool))

(check-login-against-db "nelly" "18")



(defn username-not-taken [user-id]
  (let [user-map (first (filter #(= user-id (:username %)) @auth-db))]
    (if (empty? user-map)
      true
      false)))

(username-not-taken "vasx")



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

        valid? (< phase shift)]
      (and valid? (password/check (str user-email login-time) auth-key))))


(let [user "vas@nonform.com"
      auth-map (create-auth-token-map user)
      token (:auth-token auth-map)
      login-time (:login-time auth-map)]
     (println login-time)
  (is-good-auth-key token user login-time))




;;rum components



(rum/defc landing-page []
 [:html
  [:head [:link {:rel "stylesheet" :href "/css/nesferado.css"}]]
    [:h1 "Sente reference example"]
    [:p "An Ajax/WebSocket" [:strong " (random choice!)"] " has been configured for this example"]
    [:hr]
    [:p [:strong "Step 1: "] " try hitting the buttons:"]
    [:p
     [:button#btn1 {:type "button"} "chsk-send! (w/o reply)"]
     [:button#btn2 {:type "button"} "chsk-send! (with reply)"]]
  [:textarea#output]
  ;nf-login-input
  [:form#nflogin
   [:input.fullwidth {:place-holder "username" :name "username"}]
   [:input.fullwidth {:place-holder "password" :type "password" :name "password"}]
   [:button.fullwidth {:type "button"} "login"]]
    [:div#start]
    [:div#thread]
    [:div#inputs]
    [:div#footing]
    [:script {:src "js/nesferado.js" :type "text/javascript"}]])


(rum/render-html (landing-page))

;;;; Ring handlers

(defn landing-pg-handler [ring-req]
  [ring-req]
  (let [{:keys [session params]} ring-req
        {:keys [user-id password]} params
        lp (rum/render-html (landing-page))]
    {:status 200
     :session session
     :headers {"Content-Type" "text/html"}
     :body lp}))


(defn login-handler
  "Here's where you'll add your server-side login/auth procedure (Friend, etc.).
  In our simplified example we'll just always successfully authenticate the user
  with whatever user-id they provided in the auth request."
  [ring-req]
  (let [{:keys [session params]} ring-req
        {:keys [user-id password]} params
        login-time (quot (System/currentTimeMillis) 1)]
    (println "nf login req: %s" user-id)
    (if (check-login-against-db user-id password)
      (let [auth-map (create-auth-token-map user-id)]
        {:status 200
         :session (merge session  {:uid user-id
                                   :login-time (:login-time auth-map)
                                   :auth-token (:auth-token auth-map)})
         })
      ;else
      {:status 302 :session session})))


(defn create-account-handler
  "Here's where you'll add your server-side login/auth procedure (Friend, etc.).
  In our simplified example we'll just always successfully authenticate the user
  with whatever user-id they provided in the auth request."
  [ring-req]
  (let [{:keys [session params]} ring-req
        {:keys [user-id password password2]} params]
    (println "nf create account req: %s" user-id)
    (if (= password password2)
      (if (username-not-taken user-id)
        (do
          (add-user user-id password)
          (let [auth-map (create-auth-token-map user-id)]
            {:status 200
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
  (GET  "/chsk"  ring-req (ring-ajax-get-or-ws-handshake ring-req))
  (POST "/chsk"  ring-req (ring-ajax-post                ring-req))
  (POST "/login" ring-req (login-handler                 ring-req))
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
  (let [port (or port 3773) ; 0 => Choose any available port
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
  (start!)
  (test-fast-server>user-pushes);)
