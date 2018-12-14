(ns nesferado.client
  "nonforum client based on sente"
  {:author "@_vaso"}

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




 (def auth-db (atom [{:username "lopez"
                    :password "great"}
                   {:username "vas"
                    :password "haxor5"}]))




(defn err0r []
  (println "err0r"))

(defn message-sent-boomerang [ok result]
  (println ok result "** **")
  (.log js/console "hey the result!"))


; books, speeches, letters
; topic (autogenerated via tokens)
; question+responsese (votedriff)
; article->created+curated..ish [subtopics added on a ranked list]

(def nf-books (atom { 8882882 {:title "The way of awesomeness."
                               :isbn [10200000000002 210500000000010 200000000000000015]
                               :threads [2 3 4 5 6]
                               }}))
(def nf-speeches (atom {}))
(def nf-letters (atom {}))
(def nf-topics (atom {}))

(def nf-threads (atom { 12121 { :title "cruise on through to the other side"
                                :author "jimmorrison@nonforum.com"
                                :comments []
                                :number-of-ratings 2
                                :rating-total 98}

                               ; :ratings [{:oid 5175
                               ;            :rater "z@nf.com"
                               ;            :rating "+"
                               ;            :timestamp 564271}]}
;scrap this ratings idea on the client.. track in on the server.
                        }))


(def nf-ratings (atom { 33373 { :rid 33373
                                :author "jm@nf.com"
                                :oid "theThingyRated251215"
                                :rating "++"
                                :timestamp 121212121212}}))  ;;massive global rating object.  fill it however you choose from the server.  subscriptions.

(def nf-qd (atom { 12345777 {:contents "Hey this is a question about this site.  How does it all work, and what's it all about?"
                             :comments []
                             :author "x@nonforum.com"
                             :timestamp 80808
                             :number-of-ratings 32
                             :rating-total 9700

                             :ratings [{:oid 123456
                                        :rater "y@nonforum.com"
                                        :rating "++"
                                        :timestamp 6756421
                                        }] }


                   })); Questions and Discussions

(def nf-articles (atom {167641 {:subtopics [{:subtopic "deciduous" :ratings [{:rater "bob@nf.com" :rating "++" :timestamp 28282}]}
                                            {:subtopic "harmony" :ratings [{:rater "oion@nf.com" :rating "++" :timestamp 28282}]}]}}))

;in articles, each subtopic is an NF thread.


(defonce app-state (atom {:text "Hello world!"}))
(def     tv-state (atom
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
                           :parent nil}]}))

(def input-state (atom {:inputs
                       [ {:title ""
                          :contents ""
                          :comment "ur coment"
                          :selected-parent 77
                          :selected-child [33 53]
                          :username ""
                          :password ""
                          :token ""
                          :token-timestamp ""
                          :create-username ""
                          :create-password ""
                          :create-password2 ""
                          }]}))

(defn js-reload []
  (.log js/console "javascript reloaded ^_^;"))


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

(swap! posts conj {:id 88
                   :contents "fortunate are the African penguins"
                   :author "vv@nonforum.com"
                   :number-of-ratings 2
                   :ratings-total 184
                   :comments []})

(def ratings (atom [{}]))

;create painless index map {:thing} from id
;(defn idx-by-id [id-key coll]
;  (into {}
;        (map (fn [{id id-key :as item}]
;               [id item]))
;        coll))

;(def posts-sleek (atom (idx-by-id :id @posts)))

(defn get-post-by-id [post-id]
  (let [post (first (filter #(= post-id (:id %)) @posts))]
    post))

(get-post-by-id 77)


(first (first (filter #(= (:id (second %)) 88) (map-indexed vector @posts))))

(defn sort-the-comments-of! [post-id]
  (let [sort-me-id post-id
        spot  (first (first (filter #(= (:id (second %)) sort-me-id) (map-indexed vector @posts))))
        sorted-comments  (map :id
                         (sort-by :number-of-ratings >
                           (map get-post-by-id
                             (:comments (get-post-by-id sort-me-id)))))]
      (swap! posts assoc-in [spot :comments] sorted-comments )))

(defn return-comment-ids [post-id]
  (let [cids (:comments (first (filter  #(= post-id (:id %)) @posts)))
        posts (map get-post-by-id cids)
        post-collection (sort-by #(/ (:ratings-total %) (:number-of-ratings %)) posts)
        spc  (map :id post-collection)]

    spc))

(return-comment-ids 34)
(return-comment-ids 53)

(return-comment-ids 69)
(return-comment-ids 77)

(first (filter #(= 69 (:id %)) @posts))



(map :id @posts)
(map sort-the-comments-of! (map :id @posts))


(defn create-user [username password password2]
  (if (not (= password password2))
    (.log js/console "passwords do not match")
  ;else
    (if (not (empty? (filter #(= username (:username %)) @auth-db)))
      (.log js/console "username in use")
    ;else
      (do
        (swap! auth-db conj {:username username :password password})
        (.log js/console "n<>n user added to db" username)))))





(defn try-login [username password]
  (let [results (first (filter #(= username (:username %)) @auth-db))
        stored-pw (:password results)]
    (if (empty? results)
      (.log js/console "<user not found")
    ;else
      (if (= password stored-pw)
        (do
          (.log js/console "passwords match")
          (.log js/console "generating login token")
          (swap! input-state assoc-in [:inputs 0 :token] "hash-this--shiz")
          (swap! input-state assoc-in [:inputs 0 :username] username))
      ;else
        (.log js/console stored-pw)))))


(try-login "vas" "haxor5")

(filter #(= "vas" (:username %)) @auth-db)

(try-login "vas" "haxor5")

(create-user "hap" "5" "5")
(try-login "hap" "5")

(filter #(= "hap" (:username %)) @auth-db)

;(sort-by :number-of-ratings > @posts)


(defn rate [rating pid]
  (cond
    (= rating :double-plus) (.log js/console "user rated " pid " ++")
    (= rating :plus) (.log js/console (str "user rated " pid " +"))
    (= rating :minus) (.log js/console "user rated " pid " -")))

(rate :plus 533)



(def show-fresh
  {:did-mount (fn [state]
                (let [comp     (:rum/react-component state)
                      dom-node (js/ReactDOM.findDOMNode comp)]
                ;  (set! (.-backgroundColor (.-style dom-node)) "green")
                 ; (set! (.-transition (.-style dom-node)) "background-color 0.5s ease")
                  (set! (.-classList dom-node) "justMounted")
                  )
                state) })

 (rum/defc render-item < rum/reactive show-fresh [pid]

  (let [post-coll   (rum/react posts) ;atom
        input-coll (rum/react input-state)
        cids (return-comment-ids pid)]
    ;(prn cids)
    (if (empty? (return-comment-ids pid))
      (let [noc-post  (first (filter  #(= pid (:id %)) post-coll))]
        [:div.nocomments {:id pid :class "genpost"}
         [:div.padleft {:on-click (fn [e] (do
                                         (.log js/console "Freshly selected: " pid)
                                         (.stopPropagation e)
                                         (swap! input-state assoc-in [:inputs 0 :selected-parent] pid)
                                         (swap! input-state assoc-in [:inputs 0 :selected-child] (return-comment-ids pid))))}
          [:div.item-contents.genpost {:class (cond (= pid (get-in @input-state [:inputs 0 :selected-parent])) "selectedParent"
                                            (some #(= % pid) (get-in @input-state [:inputs 0 :selected-child])) "selectedChild")} (:contents noc-post)
            [:div.item-author   (:author noc-post)]
            [:div.rate
               [:div.item-rate-doubleplus {:on-click (fn [e] (rate :double-plus pid))} "++"]
               [:div.item-rate-plus  {:on-click (fn [e] (rate :plus pid))} "+"]
               [:div.item-rate-minus {:on-click (fn [e] (rate :minus pid))} "-"]
              [:div.item-rating   (/ (:ratings-total noc-post) (:number-of-ratings noc-post))]]]]])
       ;lest the post has comments and needs more renders in pocket.
       (let [com-post (first (filter  #(= pid (:id %)) (sort-by #(/ (:ratings-total %) (:number-of-ratings %))  post-coll)))]
         [:div.hascomments {:id pid }
          [:div.padleft {:on-click (fn [e] (do
                                         (.log js/console "Freshly selected: " pid)
                                         (.stopPropagation e)
                                         (swap! input-state assoc-in [:inputs 0 :selected-parent] pid)
                                         (swap! input-state assoc-in [:inputs 0 :selected-child] (return-comment-ids pid))))}
           [:div.item-contents.genpost  {:class (cond (= pid (get-in @input-state [:inputs 0 :selected-parent])) "selectedParent"
                                              (some #(= % pid) (get-in @input-state [:inputs 0 :selected-child])) "selectedChild")} (:contents com-post)
             [:div.item-author (:author com-post)]
             [:div.rate
               [:div.item-rate-doubleplus {:on-click (fn [e] (rate :double-plus pid))} "++"]
               [:div.item-rate-plus  {:on-click (fn [e] (rate :plus pid))} "+"]
               [:div.item-rate-minus {:on-click (fn [e] (rate :minus pid))} "-"]
               [:div.item-rating   (/ (:ratings-total com-post) (:number-of-ratings com-post))]]]
           (map render-item cids)]]))))



 (rum/defc nf-login-input []
  [:form#nflogin
   [:input.fullwidth {:place-holder "username" :name "username"
                      :on-change (fn [e] (do
                                              (swap! input-state assoc-in [:inputs 0 :username] (.-value (.-target e)))
                                              (.log js/console (get-in @input-state [:inputs 0 :username]))))}]
   [:input.fullwidth {:place-holder "password" :type "password" :name "password"
                      :on-change (fn [e] (do
                                              (swap! input-state assoc-in [:inputs 0 :password] (.-value (.-target e)))
                                              (.log js/console (get-in @input-state [:inputs 0 :password]))))}]
   [:button.fullwidth {:type "button"
                       :on-click (fn [e] (let [username (get-in @input-state [:inputs 0 :username])
                                               password (get-in @input-state [:inputs 0 :password])]
                                           (do
                                             (.log js/console "login button pressed")
                                             (try-login username password))))} "login"]])


 (rum/defc create-account-fields []
  [:form#nfcreate
   [:input.fullwidth {:place-holder "username" :name "username"
                      :on-change (fn [e] (do
                                              (swap! input-state assoc-in [:inputs 0 :create-username] (.-value (.-target e)))
                                              (.log js/console (get-in @input-state [:inputs 0 :create-username]))))}]
   [:input.fullwidth {:place-holder "password" :type "password" :name "password"
                      :on-change (fn [e] (do
                                              (swap! input-state assoc-in [:inputs 0 :create-password] (.-value (.-target e)))
                                              (.log js/console (get-in @input-state [:inputs 0 :create-password]))))}]
   [:input.fullwidth {:place-holder "pw confirm" :type "password" :name "password2"
                      :on-change (fn [e] (do
                                              (swap! input-state assoc-in [:inputs 0 :create-password2] (.-value (.-target e)))
                                              (.log js/console (get-in @input-state [:inputs 0 :create-password2]))))}]
   [:button.fullwidth {:type "button"
                       :on-click (fn [e] (let [username  (get-in @input-state [:inputs 0 :create-username])
                                               password  (get-in @input-state [:inputs 0 :create-password])
                                               password2 (get-in @input-state [:inputs 0 :create-password2])]
                                           (do
                                             (.log js/console "create account button pressed")
                                             (create-user username password password2))))} "create account"]])




(rum/defc create-account-input []
  [:div#create-account-contain
   (create-account-fields)])

(rum/defc fb-sdk [app-id]
  [:script {:type "text/javascript"}
   (str "window.fbAsyncInit = function() {
    FB.init({
      appId      : '" app-id "',
      cookie     : true,
      xfbml      : true,
      version    : '3.2'
    });

    FB.AppEvents.logPageView();

  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = 'https://connect.facebook.net/en_US/sdk.js';
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));")])

(rum/defc link [address]
  [:a {:href address} address])

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
    [:li (link  "settings & pls omg no moar hax")]
    [:li (link "feedback & hax")]
    [:li (link "logout")]]])

(rum/defc login-bar []
  [:div#loginbar
   [:ol.loginbar
    [:li.fbfb [:a {:href "/facebook"} "Continue with Facebook as Vaso Veneliciukuosoeus"]]
    [:li.gogo [:a {:href "/gogole"} "Google Login"]]
    [:li.twtw [:a {:href "/twitter"} "Twitter Login"]]
    [:li.nfnf "Nonforum Login:" (nf-login-input)]
    [:li.nfca "Create a Nonforum account:" (create-account-input)]]]
   ;(fb-sdk 1417763311691300) ;nonforum app id
   )

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
  [:form#postinput "Create new post"
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

                                    (let [new-post-map {:title (get-in @input-state [:inputs 0 :title])
                                                        :contents (get-in @input-state [:inputs 0 :contents])
                                                        :priority 10
                                                        :posted-by "x@nonforum.com"

                                                        :timestamp 80008
                                                        :parent nil}]

                                       (swap! tv-state update :tiles conj new-post-map))) ;thanks @Marc O'Morain
                       } "post new"]])

;; https://github.com/tonsky/grumpy/blob/master/src/grumpy/editor.cljc#L257
;; thank you, @tonsky
;; rum is awesome. 25 nov 2018


(def y (atom 999))

(rum/defc post-comment-input []
  [:form#postcommentinput
   [:textarea.fullwidth {:value (get-in @input-state [:inputs 0 :comment])
                         :place-holder "your comment"
                         :on-change (fn [e] (do
                                              (swap! input-state assoc-in [:inputs 0 :comment] (.-value (.-target e)))
                                              (.log js/console (get-in @input-state [:inputs 0 :comment]))))
                         }]
   [:input.fullwidth {:value (get-in @input-state [:inputs 0 :username])
                         :place-holder "username"
                         :on-change (fn [e] (do
                                              (swap! input-state assoc-in [:inputs 0 :username] (.-value (.-target e)))
                                              (.log js/console (get-in @input-state [:inputs 0 :username]))))
                         }]
   [:button.fullwidth {:type "button"
                       :class "replySelected"
                       :on-click (fn [e]
                                   (let [ parent-id (get-in @input-state [:inputs 0 :selected-parent])
                                          username (get-in @input-state [:inputs 0 :username])
                                          new-comment-map {:id (swap! y inc)
                                                          :contents (get-in @input-state [:inputs 0 :comment])
                                                          :author username
                                                          :comments []}]

                                      (let [first-hit (->> @posts
                                                          (keep-indexed #(when (= (:id %2) parent-id) %1))
                                                           first)]
                                        (.log js/console ">< " (get-in @posts [first-hit :comments]) (:id new-comment-map))
                                        (swap! posts conj new-comment-map) ;add new comment
                                        (swap! posts update-in [first-hit :comments] conj (:id new-comment-map))) ;add comment id to parent
                                     (prn posts)
                                     ))} "Reply to Plum-highlighted Comment"]])


(rum/defc footer []
  [:div#footer "Welcome to nonforum.  Here you will find real-time threads and discussion boards."
    [:div#foot1 "Nonforum is a place to start discussion threads based on questions or simply on a topic."]
    [:div#foot2 "Nonforum is also a place where you can share links and discuss them, voting contributions up or down."]
    [:div#foot3 "When you are logged in you can vote on entries with votes signifying double-plus (++), plus (+), and minus (-)"]
    [:div#foot4 "The more you participate, the greater your community trust rating."]
    [:div#foot5 "By providing insightful comments and furthering discussions, your community rating will increase."]
    [:div#foot6 "There are several media-types at nonforum: Articles, Topics, Questions+Discussions, as well as Books and Speeches."]
    [:div#foot7 "For complete information on how to use nonforum most effectively, please check out the "[:a {:href "/faq"} "F.A.Q"]]])


(rum/defc input-fields []
  [:div#inputs-contain
   (post-comment-input)])

(rum/defc start []
  [:div#maincontain
   (top-bar)
   (side-bar)
   (login-bar)
   (post-input)
   (television)])

(rum/mount (render-item 69)
           (. js/document (getElementById "thread")))

(rum/mount (start)
           (. js/document (getElementById "start")))

(rum/mount (input-fields)
           (. js/document (getElementById "inputs")))

(rum/mount (footer)
           (. js/document (getElementById "footing")))
(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)



;;;; Init stuff

(defn start! [] (start-router!))

(defonce _start-once (start!))
