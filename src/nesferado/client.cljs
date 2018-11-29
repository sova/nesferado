(ns nesferado.client
  "Official Sente reference example: client"
  {:author "Peter Taoussanis (@ptaoussanis)"}

  (:require
   [clojure.string  :as str]
   [cljs.core.async :as async  :refer (<! >! put! chan)]
   [taoensso.encore :as encore :refer-macros (have have?)]
   [taoensso.timbre :as timbre :refer-macros (tracef debugf infof warnf errorf)]
   [taoensso.sente  :as sente  :refer (cb-success?)]
   [rum.core :as rum]
   [alandipert.storage-atom :refer [local-storage]]

   ;; Optional, for Transit encoding:
   [taoensso.sente.packers.transit :as sente-transit])

  (:require-macros
   [cljs.core.async.macros :as asyncm :refer (go go-loop)]))

;; (timbre/set-level! :trace) ; Uncomment for more logging

;;;; Util for logging output to on-screen console

(def output-el (.getElementById js/document "output"))
(defn ->output! [fmt & args]
  (let [msg (apply encore/format fmt args)]
    (timbre/debug msg)
    (aset output-el "value" (str "• " (.-value output-el) "\n" msg))
    (aset output-el "scrollTop" (.-scrollHeight output-el))))

(->output! "ClojureScript appears to have loaded correctly.")

;;;; Define our Sente channel socket (chsk) client

(let [;; For this example, select a random protocol:
      rand-chsk-type (if (>= (rand) 0.5) :ajax :auto)
      _ (->output! "Randomly selected chsk type: %s" rand-chsk-type)

      ;; Serializtion format, must use same val for client + server:
      packer :edn ; Default packer, a good choice in most cases
      ;; (sente-transit/get-transit-packer) ; Needs Transit dep

      {:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket-client!
        "/chsk" ; Must match server Ring routing URL
        {:type   rand-chsk-type
         :packer packer})]

  (def chsk       chsk)
  (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def chsk-state state)   ; Watchable, read-only atom
  )

;;;; Sente event handlers

(defmulti -event-msg-handler
  "Multimethod to handle Sente `event-msg`s"
  :id ; Dispatch on event-id
  )

(defn event-msg-handler
  "Wraps `-event-msg-handler` with logging, error catching, etc."
  [{:as ev-msg :keys [id ?data event]}]
  (-event-msg-handler ev-msg))

(defmethod -event-msg-handler
  :default ; Default/fallback case (no other matching handler)
  [{:as ev-msg :keys [event]}]
  (->output! "Unhandled event: %s" event))

(defmethod -event-msg-handler :chsk/state
  [{:as ev-msg :keys [?data]}]
  (let [[old-state-map new-state-map] (have vector? ?data)]
    (if (:first-open? new-state-map)
      (->output! "Channel socket successfully established!: %s" new-state-map)
      (->output! "Channel socket state change: %s"              new-state-map))))

(defmethod -event-msg-handler :chsk/recv
  [{:as ev-msg :keys [?data]}]
  (->output! "Push event from server: %s" ?data))

(defmethod -event-msg-handler :chsk/handshake
  [{:as ev-msg :keys [?data]}]
  (let [[?uid ?csrf-token ?handshake-data] ?data]
    (->output! "Handshake: %s" ?data)))

;; TODO Add your (defmethod -event-msg-handler <event-id> [ev-msg] <body>)s here...

;;;; Sente event router (our `event-msg-handler` loop)

(defonce router_ (atom nil))
(defn  stop-router! [] (when-let [stop-f @router_] (stop-f)))
(defn start-router! []
  (stop-router!)
  (reset! router_
    (sente/start-client-chsk-router!
      ch-chsk event-msg-handler)))

;;;; UI events

(when-let [target-el (.getElementById js/document "btn1")]
  (.addEventListener target-el "click"
    (fn [ev]
      (->output! "Button 1 was clicked (won't receive any reply from server)")
      (chsk-send! [:example/button1 {:had-a-callback? "nope"}]))))

(when-let [target-el (.getElementById js/document "btn2")]
  (.addEventListener target-el "click"
    (fn [ev]
      (->output! "Button 2 was clicked (will receive reply from server)")
      (chsk-send! [:example/button2 {:had-a-callback? "indeed"}] 5000
        (fn [cb-reply] (->output! "Callback reply: %s" cb-reply))))))

(when-let [target-el (.getElementById js/document "btn3")]
  (.addEventListener target-el "click"
    (fn [ev]
      (->output! "Button 3 was clicked (will ask server to test rapid async push)")
      (chsk-send! [:example/test-rapid-push]))))

(when-let [target-el (.getElementById js/document "btn4")]
  (.addEventListener target-el "click"
    (fn [ev]
      (->output! "Button 4 was clicked (will toggle async broadcast loop)")
      (chsk-send! [:example/toggle-broadcast] 5000
        (fn [cb-reply]
          (when (cb-success? cb-reply)
            (let [loop-enabled? cb-reply]
              (if loop-enabled?
                (->output! "Async broadcast loop now enabled")
                (->output! "Async broadcast loop now disabled")))))))))

(when-let [target-el (.getElementById js/document "btn5")]
  (.addEventListener target-el "click"
                     (fn [ev]
                       (->output! "Disconnecting")
                       (sente/chsk-disconnect! chsk))))

(when-let [target-el (.getElementById js/document "btn6")]
  (.addEventListener target-el "click"
                     (fn [ev]
                       (->output! "Reconnecting")
                       (sente/chsk-reconnect! chsk))))

(when-let [target-el (.getElementById js/document "btn-login")]
  (.addEventListener target-el "click"
    (fn [ev]
      (let [user-id (.-value (.getElementById js/document "input-login"))]
        (if (str/blank? user-id)
          (js/alert "Please enter a user-id first")
          (do
            (->output! "Logging in with user-id %s" user-id)

            ;;; Use any login procedure you'd like. Here we'll trigger an Ajax
            ;;; POST request that resets our server-side session. Then we ask
            ;;; our channel socket to reconnect, thereby picking up the new
            ;;; session.

            (sente/ajax-lite "/login"
              {:method :post
               :headers {:X-CSRF-Token (:csrf-token @chsk-state)}
               :params  {:user-id (str user-id)}}

              (fn [ajax-resp]
                (->output! "Ajax login response: %s" ajax-resp)
                (let [login-successful? true ; Your logic here
                      ]
                  (if-not login-successful?
                    (->output! "Login failed")
                    (do
                      (->output! "Login successful")
                      (sente/chsk-reconnect! chsk))))))))))))


 ;define your app data so that it doesn't get over-written on reload

(defn err0r []
  (println "err0r"))

(defn message-sent-boomerang [ok result]
  (println ok result "** **")
  (.log js/console "hey the result!"))

(defonce app-state (atom {:text "Hello world!"}))
(def     tv-state (local-storage (atom
                    {:tiles
                        [ {:title "Fusion Power Imminent"
                           :contents "Horne Technologies has developed a working Plasma Containment Prototype for furthering Fusion"
                           :priority 1
                           :posted-by "v@nonforum.com"
                           :timestamp 808080808
                           :parent nil}
                          {:title "Let's Put Sun Panels on the Roof"
                           :contents "Put a powerplant on your home and be free of your electric bill"
                           :priority 2
                           :posted-by "v@nonforum.com"
                           :timestamp 808080808
                           :parent nil}
                          {:title "Tonsky/rum is excellent for cljs"
                           :contents "the best way to be the best"
                           :priority 3
                           :posted-by "v@nonforum.com"
                           :timestamp 808080808
                           :parent nil}
                          {:title "Postpostpost"
                           :contents "this is the post!"
                           :link "http://hysterical.com"
                           :priority 4
                           :posted-by "v@nonforum.com"
                           :timestamp 808080808
                           :parent nil}]}) :tv))

(def input-state (atom {:inputs
                       [ {:title ""
                          :contents ""
                          :comment "ur coment"
                          }]}))

(rum/defc link [address]
  [:a {:href address} address])

(rum/defc hello-world []
  [:div
   [:h1 (:text @app-state)]
   [:h3 "Edit this and watch it change!"]
   [:h4 "Nonforum lives again!"]])

(rum/defc top-bar []
  [:div#topbar
   [:ol.topbar
    [:li [:a {:href "/"} "nonforum"]]
    [:li (link "top")]
    [:li (link "latest")]
    [:li (link "submit")]
    [:li (link "feed")]]])

(rum/defc side-bar []
  [:div#sidebar
   [:ol.sidebar
    [:li (link "profile")]
    [:li (link  "settings")]
    [:li (link "feedback")]
    [:li (link "logout")]]])

(rum/defc login-bar []
  [:div#loginbar
   [:ol.loginbar
    [:li.fbfb [:a {:href "/facebook"} "fb login"]]
    [:li.gogo [:a {:href "/gogole"} "gogole loign"]]
    [:li.nfnf [:a {:href "/nflogin"} "nonforum login"]]]])

(rum/defc tv-cell [td]
  [:li [:div.tile {:id (str "tile" (:priority td))}
        [:div.heading (:title td)]
        [:div.contents (:contents td)]
        [:div.priority (:priority td)]]])

(rum/defc television  < rum/reactive []
  [:div#tv
   [:ol.tv
    (map tv-cell (:tiles (rum/react tv-state)))]])

(rum/defc post-input []
  [:form#postinput
   [:input.fullwidth {:place-holder "title"
                      :on-change (fn [e] (do
                                    (swap! input-state assoc-in [:inputs 0 :title] (.-value (.-target e)))
                                    (.log js/console (get-in @input-state [:inputs 0 :title]))))}]
   [:input.fullwidth {:place-holder "contents"
                      :on-change (fn [e] (do
                                   (swap! input-state assoc-in [:inputs 0 :contents] (.-value (.-target e)))
                                   (.log js/console (get-in @input-state [:inputs 0 :contents]))))}]
   [:button.fullwidth {:type "button"
                       :on-click (fn [e]
                                     ;(.preventDefault e)
                                     ;(.stopPropagation e)
                                     (.log js/console "sending..")
                                     (.log js/console (.getElementById js/document "aft"))
                                   ;submit to server here!

                                   ; (let [new-post-map {:title (get-in @input-state [:inputs 0 :title])
                                     ;                                            :contents (get-in @input-state [:inputs 0 :contents])
                                      ;                                           :priority 10
                                       ;                                          :posted-by "x@nonforum.com"
                                        ;                                         :timestamp 80008
                                   ;                                              :parent nil}]
                                    ;   (POST "/send-message"
                                     ;   {:body {:title (:title new-post-map)
                                      ;            :posted-by "x@nonforum.com"
                                       ;           :timestamp 80008
                                        ;          :parent nil
                                   ;               :priority 11
                                    ;              :contents (:contents new-post-map)
                                     ;             :handler message-sent-boomerang
                                      ;            :error-handler err0r }
                                       ;  :headers {"x-csrf-token" (.-value (.getElementById js/document "aft"))}
                                       ;;  })
                                       ;(.log js/console (.-value (.getElementById js/document "aft"))) ;new-post-map)

                                       (swap! tv-state update :tiles conj new-post-map))) ;thanks @Marc O'Morain
                       } "post new"]])

;; https://github.com/tonsky/grumpy/blob/master/src/grumpy/editor.cljc#L257
;; thank you, @tonsky
;; rum is awesome. 25 nov 2018

(rum/defc post-comment-input []
  [:form#postcommentinput
   [:textarea.fullwidth {:value (get-in @input-state [:inputs 0 :comment])
                         :place-holder "your comment"
                         :on-change (fn [e] (do
                                              (swap! input-state assoc-in [:inputs 0 :comment] (.-value (.-target e)))
                                              (.log js/console (get-in @input-state [:inputs 0 :comment]))))
                         }]
   [:button.fullwidth {:type "submit"} "post comment"]])


(rum/defc nf-login-input []
  [:form#nflogin
   [:input.fullwidth {:place-holder "username"}]
   [:input.fullwidth {:place-holder "password" :type "password"}]
   [:button.fullwidth {:type "submit"} "login"]])

(rum/defc input-fields []
  [:div#inputs-contain
   (post-input)
   (post-comment-input)
   (nf-login-input)])

(rum/defc start []
  [:div#maincontain
   (top-bar)
   (side-bar)
   (login-bar)
   (television)
   (hello-world)])

(rum/mount (start)
           (. js/document (getElementById "start")))

(rum/mount (input-fields)
           (. js/document (getElementById "inputs")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)


;;;; Init stuff

(defn start! [] (start-router!))

(defonce _start-once (start!))
