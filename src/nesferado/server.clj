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

(def nf-participation (duratom
                        :local-file
                        :file-path "data/participation.sova"
                        :init []))

(def nf-counter (duratom :local-file
                         :file-path "data/unique-id-current.sova"
                         :init 888888))


(def     tv-state (duratom :local-file
                           :file-path "data/tv-state.sova"
                           :init [
                          {:title "Fusion Power Imminent"
                           :subtitle "Horne Technologies has developed a working Plasma Containment Prototype for furthering Fusion"
                           :priority 1
                           :id 108
                           :posted-by "v@nonforum.com"
                           :timestamp 808080808
                           :comments [69]
                           :parent nil
                           :number-of-ratings 2
                           :link "http://hax.com"
                           :contents "Horne Technologies is on the brink of a fusion breakthrough. Their lab successfully contained plasma in 2017 with high-beta confinement and they need funding to continue research.  So far the fusion efficiency record is 67% (as of Dec. 2018), let's see how many teslas of magnetic field we need to reach 108% efficiency / break parity!"
                           :ratings-total 188}
                          {:title "Let's Put Sun Panels on the Roof"
                           :subtitle "Put a powerplant on your home and be free of your electric bill"
                           :priority 2
                           :id 109
                           :posted-by "v@nonforum.com"
                           :timestamp 808080808
                           :comments []
                           :parent nil
                           :number-of-ratings 2
                           :link "www.coloradosolar.energy"
                           :contents "Colorado Solar is a premier solar installer in Colorado specializing in high-end residential and commercial installations."
                           :ratings-total 188}
                          {:title "Tonsky/rum is excellent for cljs"
                           :subtitle "the best way to be the best"
                           :priority 3
                           :id 110
                           :posted-by "v@nonforum.com"
                           :timestamp 808080808
                           :comments []
                           :parent nil
                           :number-of-ratings 2
                           :ratings-total 188
                           :link "www.github.com/tonsky/rum"
                           :contents "rum is dope. the components are reusable and the rendering is truly fast.  it's great, and makes me look like a decent coder! hah"}
                          {:title "Server-only blurb.  If you are reading this then the server is succesfully sending blurbs to connected clients."
                           :subtitle "this is the post!"
                           :link "http://nonforum.com"
                           :priority 4
                           :id 111
                           :posted-by "v@nonforum.com"
                           :timestamp 808080808
                           :comments []
                           :parent nil
                           :number-of-ratings 2
                           :ratings-total 188
                           :contents "tip your postal carrier in the winter. tip your postal carrier in the winter. tip your postal carrier in the winter. tip your postal carrier in the winter. tip your postal carrier in the winter."}]))



(def posts (atom [ {:id 77
                    :contents "Seventy seven is the nicest number below one hundred"
                    :author "nonforum@nonforum.com"
                    :number-of-ratings 2
                    :ratings-total 98
                    :comments [33 53]}
                   {:id 33
                    :contents "Thirty three is awesome."
                    :author "monforum@nonforum.com"
                    :number-of-ratings 1
                    :ratings-total 99
                    :comments [34]}
                   {:id 34
                    :contents "fusion is coming soon to a powergrid near you."
                    :author "non@nonforum.com"
                    :number-of-ratings 3
                    :ratings-total 300
                    :comments [37]}
                   {:id 37
                    :contents "hello there to the galaxy"
                    :author "x@nonforum.com"
                    :number-of-ratings 5
                    :ratings-total 470
                    :comments []}
                   {:id 53
                    :contents "relax , don't do it."
                    :author "fool@nonforum.com"
                    :number-of-ratings 70
                    :ratings-total 6900
                    :comments [88 7777]}
                   {:id 69
                    :contents "the extraordinary world of bugs is glorious."
                    :author "fx@nonforum.com"
                    :number-of-ratings 4
                    :ratings-total 380
                    :comments [77]}
                   {:id 7777
                    :contents "Oh how I love the rain"
                    :author "rains@nonforum.com"
                    :number-of-ratings 2
                    :ratings-total 190
                    :comments []}]))

(def ratings (duratom :local-file
                      :file-path "data/ratings.sova"
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
    ;(println (is-good-auth-key auth-token uid (int login-time)))
    (println (check-creds     uid auth-token login-time))

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
      {:status 302 :session {}})))


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
  (GET "/about" ring-req (landing-pg-handler            ring-req))
  (GET "/donate" ring-req (landing-pg-handler            ring-req))

  (GET "/fusion" ring-req (landing-pg-handler            ring-req))

  (GET "/email-recovery" ring-req (landing-pg-handler            ring-req))
  (GET "/email-public" ring-req (landing-pg-handler            ring-req))
  (GET "/password-update" ring-req (landing-pg-handler            ring-req))

  (GET "/support" ring-req (landing-pg-handler            ring-req))

  (GET "/invite" ring-req (landing-pg-handler            ring-req))

  (GET "/profile" ring-req (landing-pg-handler            ring-req))
  ;/phantomses (simply serve the javascript object and let the cljs client do the "routing")

  (GET  "/chsk"  ring-req (ring-ajax-get-or-ws-handshake ring-req))
  (POST "/chsk"  ring-req (ring-ajax-post                ring-req))
  (POST "/login" ring-req (login-handler                 ring-req))
  (POST "/check-login" ring-req (check-login-handler      ring-req))
  (POST "/create-account" ring-req (create-account-handler ring-req))
  (route/resources "/") ; Static files, notably public/main.js (our cljs target)
  (route/not-found "<h2>Nonforum Four-oh-four, resource not found.</h2>"))


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

(defn get-all-blurbs []
  @tv-state)

(defn get-all-comments []
  @nf-comments)


(defmethod -event-msg-handler :clientsent/req-all-blurbs
  [{:as ev-msg :keys [event id ?user-id ring-req ?reply-fn send-fn]}]
  ;  (println (str (:params ring-req)))
   ; (println (str (:uid (:params ring-req))))
   ; (println "sending blurbs to " ?user-id)
    (when ?reply-fn
      (?reply-fn (get-all-blurbs))))



(defmethod -event-msg-handler :clientsent/req-all-comments
  [{:as ev-msg :keys [event id ?user-id ring-req ?reply-fn send-fn]}]
  ;  (println (str (:params ring-req)))
   ; (println (str (:uid (:params ring-req))))
   ; (println "sending comments to " ?user-id)
    (when ?reply-fn
      (?reply-fn (get-all-comments))))



(defn check-if-rating-exists [rm]
  (let [uid (:uid rm)
        pid (:pid rm)
        rating (:rating rm)
        elements-pid (filter #(and (= pid (:pid %1)) (= uid (:uid %1))) @ratings)
        first-hit (->> @ratings
                    (keep-indexed #(when (and (= pid (:pid %2)) (= uid (:uid %2))) %1))
                     first)]
    (prn first-hit)
         first-hit))

(defmethod -event-msg-handler :clientsent/rating
  [{:as ev-msg :keys [event id ?user-id ring-req ?reply-fn send-fn]}]

  ;;see if there is a rating in the rating db already
  ;;[over]write the rating in the ratings db
  ;; and invoke a recalculate on ratings-total and number-of-ratings

  (let [rating-map (second (:event ev-msg))
        rating (:rating rating-map)
        pid (:pid rating-map)
        uid (:uid (:session ring-req))
        pid-filt (filter #(= (:pid %1) pid) @ratings)
        uid-filt (filter #(= (:uid %1) uid) @ratings)
        cheqq (check-if-rating-exists rating-map)
        ]
    (println (str "params rr " (:params ring-req)))
    (println (str "session rr " (:session ring-req)))
    (println (str "uid " uid))
    (println (str rating-map))

    (if (= nil cheqq)
      (do
        (swap! ratings conj rating-map)
        (prn "rating added"))
      ;else
      (do
        (swap! ratings update-in [cheqq] assoc :rating rating)
        (prn "rating updated")))))


(defn find-tv-item [pid]
  (let [first-hit (->> @tv-state
                    (keep-indexed #(when (= pid (:id %2)) %1))
                     first)]
    (prn first-hit)
         first-hit))

(defn find-cm-item [pid]
  (let [first-hit (->> @nf-comments
                    (keep-indexed #(when (= pid (:id %2)) %1))
                     first)]
    (prn first-hit)
         first-hit))


(defmethod -event-msg-handler :clientsent/new-comment
  [{:as ev-msg :keys [event id ?user-id ring-req ?reply-fn send-fn]}]
  (let [comment-map (second (:event ev-msg))
        contents (:contents comment-map)
        parent-id (:parent-id comment-map)
        pid (swap! nf-counter inc)
        user (:author comment-map)
        uid (:uid (:session ring-req))]
    (println (str "params rr " (:params ring-req)))
    (println (str "session rr " (:session ring-req)))
    (println (str "pp z " parent-id))
    (println (str comment-map))
    ;add comment to posts atom
      (swap! nf-comments conj (assoc comment-map :ratings-total 0 :number-of-ratings 0 :comments [] :id pid))

    ;check if the parent id is in tv-state or in comments atom
    ; and update the :comments [] vec accordingly

       (let [seek-tv-state (find-tv-item parent-id)
             seek-cm-state (find-cm-item parent-id)]
         (println "seek-tv " seek-tv-state)
         (println "seek-cm " seek-cm-state)
         (if (= nil seek-tv-state)
           (swap! nf-comments update-in [seek-cm-state :comments] conj pid)
          ;else
           (swap! tv-state update-in [seek-tv-state :comments] conj pid)))

    (doseq [uid (:any @connected-uids)]
      (chsk-send! uid [:serversent/comment {:contents contents
                                            :author uid
                                            :parent-id parent-id
                                            :id pid}]))



    ; broadcast comment to all peers and
    ; broadcast alongside the comment it's updated parent id
    ; server can hold onto up-to-date parent ids while clients update their own

    ))

(defn broadcast-blurb!
  "Broadcasts a given blurb-map (typically a fresh dbsave!) to all connected browsings"
  [ blurb-map  ]
  (doseq [uid (:any @connected-uids)]
    (chsk-send! uid [:serversent/blurb {  :id (:id blurb-map)
                                          :posted-by (:posted-by blurb-map)
                                          :link (:link blurb-map)
                                          :title (:title blurb-map)
                                          :subtitle (:subtitle blurb-map)
                                          :contents (:contents blurb-map)
                                          :ratngs-total (:ratings-total blurb-map)
                                          :number-of-ratings (:number-of-ratings blurb-map)
                                          :timestamp (:timestamp blurb-map)
                                          }])))


(defn add-to-tv-and-send-to-peers [datum]
  (swap! tv-state conj datum)
  (broadcast-blurb! datum))

(defmethod -event-msg-handler :clientsent/new-post
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (let [session (:session ring-req)
        uid     (:uid     session)
        auth-token (:auth-token session)
        login-time (:login-time session)
        auth-ok? (check-creds uid auth-token login-time) ;(is-good-auth-key auth-token uid (int login-time))
        datum (second event)
        now (quot (System/currentTimeMillis) 1000)
        counter (swap! nf-counter inc)
        ]
    (println datum)
    (println "by " uid)
    (if auth-ok?
      (add-to-tv-and-send-to-peers
             (merge datum {:posted-by uid
                           :timestamp now
                           :number-of-ratings 0
                           :ratings-total 0
                           :id counter})))))







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
  (start!)
  (test-fast-server>user-pushes);)

