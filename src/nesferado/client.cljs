(ns nesferado.client
  "nonforum client based on sente"
  {:author "@_vaso"}

  (:require
   [clojure.string  :as str]
   [cognitect.transit :as t]
   [cljs.core.async :as async  :refer (<! >! put! chan)]
   [taoensso.encore :as encore :refer-macros (have have?)]
   [taoensso.timbre :as timbre :refer-macros (tracef debugf infof warnf errorf)]
   [taoensso.sente  :as sente  :refer (cb-success?)]
   [rum.core :as rum]
   [alandipert.storage-atom :refer [local-storage]]
   [cemerick.url :as u]
   [alandipert.storage-atom :refer [local-storage]]
   [ajax.core :refer [POST]]

   ;; Optional, for Transit encoding:
   [taoensso.sente.packers.transit :as sente-transit])

  (:require-macros
   [cljs.core.async.macros :as asyncm :refer (go go-loop)]))

;; (timbre/set-level! :trace) ; Uncomment for more logging

;;;; Util for logging output to on-screen console

(def output-el (.getElementById js/document "output"))
(defn ->output! [fmt & args]
  (let [msg (apply encore/format fmt args)]
    ;(timbre/debug msg)
    (aset output-el "value" (str "— " (.-value output-el) "\n" msg))
    (aset output-el "scrollTop" (.-scrollHeight output-el))))

(->output! " • Welcome to Nonforum •")



;;;; Define our Sente channel socket (chsk) client

(let [;; For this example, select a random protocol:
      rand-chsk-type (if (>= (rand) 0.5) :ajax :auto)
      ;_ (->output! "Randomly selected chsk type: %s" rand-chsk-type)

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



;;js localStorage interaction
(defn set-item!
  "Set `key' in browser's localStorage to `val`."
  [key val]
  (.setItem (.-localStorage js/window) key val))

(defn get-item
  "Returns value of `key' from browser's localStorage."
  [key]
  (.getItem (.-localStorage js/window) key))

(defn remove-item!
  "Remove the browser's localStorage value for the given `key`"
  [key]
  (.removeItem (.-localStorage js/window) key))


(.log js/console (get-item :auth-key))
(.log js/console (get-item :uid))


(defn handler [response]
  (.log js/console (str response)))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))


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
  (.log js/console ".NF. unhandled:" event)
  ;(->output! "Unhandled event: %s" event)
  )

(defmethod -event-msg-handler :chsk/state
  [{:as ev-msg :keys [?data]}]
  (let [[old-state-map new-state-map] (have vector? ?data)]
    (if (:first-open? new-state-map)
      (.log js/console ".NF. " new-state-map)
      ;(->output! "Channel socket successfully established!: %s" new-state-map)
      ;(->output! "Channel socket state change: %s"              new-state-map)
      )
    ))

(defmethod -event-msg-handler :chsk/recv
  [{:as ev-msg :keys [?data]}]
    (.log js/console ".NF. push from serv: " ?data)
    ;(->output! "Push event from server: %s" ?data)
  )

(defmethod -event-msg-handler :chsk/handshake
  [{:as ev-msg :keys [?data]}]
  (let [[?uid ?csrf-token ?handshake-data] ?data]
    (.log js/console "Handshake: %s" ?data)
    ;(->output! "Handshake: %s" ?data)
    ))

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
      (chsk-send! [:clientsent/ping]))))

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
(def     tv-state (atom [ {:title "Fusion Power Imminent"
                           :contents "Horne Technologies has developed a working Plasma Containment Prototype for furthering Fusion"
                           :priority 1
                           :id 108
                           :posted-by "v@nonforum.com"
                           :timestamp 808080808
                           :comments [69]
                           :parent nil}
                          {:title "Let's Put Sun Panels on the Roof"
                           :contents "Put a powerplant on your home and be free of your electric bill"
                           :priority 2
                           :id 109
                           :posted-by "v@nonforum.com"
                           :timestamp 808080808
                           :comments []
                           :parent nil}
                          {:title "Tonsky/rum is excellent for cljs"
                           :contents "the best way to be the best"
                           :priority 3
                           :id 110
                           :posted-by "v@nonforum.com"
                           :timestamp 808080808
                           :comments []
                           :parent nil}
                          {:title "Postpostpost"
                           :contents "this is the post!"
                           :link "http://hysterical.com"
                           :priority 4
                           :id 111
                           :posted-by "v@nonforum.com"
                           :timestamp 808080808
                           :comments []
                           :parent nil}]))

(def input-state (atom {:inputs
                       [ {:title ""
                          :contents ""
                          :link ""
                          :comment ""
                          :selected-parent 0
                          :selected-child []
                          :username "" ;input/mutable
                          :password "" ;input/mutable

                          :current-user ""
                          :token ""
                          :login-time ""
                          :create-username ""
                          :create-password ""
                          :create-password2 ""

                          :tv-title ""
                          :tv-contents ""
                          :tv-link ""
                          :tv-priority 4
                          :tv-posted-by ""
                          :tv-timestamp 808
                          :tv-comments []
                          :tv-current {}
                          :tv-curr-id 0
                          :logged-in false

                          :set-email ""
                          :current-email ""

                          :change-pass-old-pw ""
                          :change-pass-new-pw ""
                          :change-pass-new-pw2 ""

                          :edit-display-name ""
                          :invite-friends-input ""
                          :send-feedback-input ""
                          :send-feedback-extra ""

                          :current-view "default"
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

(defn return-comment-ids-of-tv [tile-id]
  (let [cids (:comments (first (filter  #(= tile-id (:id %)) @tv-state)))
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




(defn create-user [user-id pw pw2]
  (->output! "Creating account" user-id)

  ;;; Use any login procedure you'd like. Here we'll trigger an Ajax
  ;;; POST request that resets our server-side session. Then we ask
  ;;; our channel socket to reconnect, thereby picking up the new
  ;;; session.

  (sente/ajax-lite "/create-account"
                   {:method :post
                    :headers {:X-CSRF-Token (:csrf-token @chsk-state)}
                    :params  {:user-id (str user-id)
                              :password (str pw)
                              :password2 (str pw2)}
                    :type :text}

                   (fn [ajax-resp]
                     (->output! "Account creation response: " ajax-resp)
                     (let [{:keys [success? ?status ?error ?content ?content-type]} ajax-resp
                           http-status (:?status ajax-resp)
                           account-create-successful? (= 200 http-status)
                           stuff (cljs.reader/read-string ?content)]
                       (if-not account-create-successful?
                         (->output! "Account Creation Failed.")
                         (do
                           (->output! "Account Creation Success!")
                           (->output! (str "Now logged in as " user-id))
                           (set-item! :auth-key (:auth-token stuff))
                           (set-item! :login-time (:login-time stuff))
                           (set-item! :uid (:uid stuff))

                           (swap! input-state assoc-in [:inputs 0 :token] (:auth-token stuff))
                           (swap! input-state assoc-in [:inputs 0 :login-time] (:login-time stuff))
                           (swap! input-state assoc-in [:inputs 0 :logged-in] true)
                           (swap! input-state assoc-in [:inputs 0 :current-user] (:uid stuff))

                           ;'log user in' on client
                           (sente/chsk-reconnect! chsk)
                           ))))))



(defn try-login [username pw]
  (if (str/blank? username)
        (js/alert "Please enter a user-id first")
      (do
        (->output! (str "Logging in with username " username))

            ;;; Use any login procedure you'd like. Here we'll trigger an Ajax
            ;;; POST request that resets our server-side session. Then we ask
            ;;; our channel socket to reconnect, thereby picking up the new
            ;;; session.

            (sente/ajax-lite "/login"
              {:method :post
               :headers {:X-CSRF-Token (:csrf-token @chsk-state)}
               :params  {:user-id (str username)
                         :password (str pw)}
               :resp-type :text}

              (fn [ajax-resp]
                ;(->output! (str "Ajax login response: " ajax-resp))
                ;(.log js/console (first ajax-resp))
                ;(.log js/console (:success? ajax-resp))
                (let [{:keys [success? ?status ?error ?content ?content-type]} ajax-resp
                      login-successful? success?
                      stuff (cljs.reader/read-string ?content)]
                  (if-not login-successful?
                    (->output! "Login failed")
                    (do
                      (->output! "Login successful")
                      ;(js/alert ajax-resp)
                     ; (->output! (str "uid is " username))
                      ;(->output! (str "auth token is" (:auth-token stuff)))

                      ;(->output! (str "login time is" (:login-time stuff)))

                      (set-item! :auth-key (:auth-token stuff))
                      (set-item! :login-time (:login-time stuff))
                      (set-item! :uid (:uid stuff))

                      ;assoc auth hash
                      (swap! input-state assoc-in [:inputs 0 :token] (:auth-token stuff))
                      (swap! input-state assoc-in [:inputs 0 :login-time] (:login-time stuff))
                      (swap! input-state assoc-in [:inputs 0 :logged-in] true)
                      (swap! input-state assoc-in [:inputs 0 :current-user] (:uid stuff)) ;'log user in' on client
                      (sente/chsk-reconnect! chsk)))))))))
;(filter #(= "vas" (:username %)) @auth-db)
;(create-user "hap" "5" "5")
;(filter #(= "hap" (:username %)) @auth-db)

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

 (rum/defcs render-item < rum/reactive
                         (rum/local -1 ::hidecomments)
                         show-fresh [state pid]

  (let [post-coll   (rum/react posts) ;atom
        input-coll (rum/react input-state)
        cids (return-comment-ids pid)
        __ (rum/react tv-state)
        local-atom (::hidecomments state)]
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

           [:button.commentog {:on-click (fn [_] (swap! local-atom #(* -1 %)))}
              (if (= @local-atom -1)
                "hide" ;hide comments
                "show")] ;show comments
           (if (= @local-atom -1)
             (map render-item cids))]]))))

;;; send-feedback inputs

(rum/defc send-feedback-fields []
  [:form#sendfeedbackform
   [:textarea#sendfeedbackinput.fullwidth {:placeholder "Send us some feedback, suggestions, comments, concerns." :name "feedback"
                      :on-change (fn [e] (do
                                              (swap! input-state assoc-in [:inputs 0 :send-feedback-input] (.-value (.-target e)))
                                           ))}]

   [:button#sfsubmit.fullwidth {:type "button"
                       :on-click (fn [e] (let [feedback  (get-in @input-state [:inputs 0 :send-feedback-input])]
                                           (do
                                             (.log js/console "send feedback button pressed")

                                             ;(create-user username password password2)
                                             )))} "send feedback"]])






















;;login inputs & create account inputs ui

 (rum/defc nf-login-input []
  [:form#nflogin
   [:input.fullwidth {:placeholder "username" :name "username"
                      :auto-complete "username login"
                      :on-change (fn [e] (do
                                              (swap! input-state assoc-in [:inputs 0 :username] (.-value (.-target e)))
                                              ;(.log js/console (get-in @input-state [:inputs 0 :username]))
                                           ))}]
   [:input.fullwidth {:placeholder "password" :type "password" :name "password"
                      :auto-complete "password login"
                      :on-change (fn [e] (do
                                              (swap! input-state assoc-in [:inputs 0 :password] (.-value (.-target e)))
                                              ;(.log js/console (get-in @input-state [:inputs 0 :password]))
                                           ))}]
   [:button.fullwidth#logsin {:type "button"
                       :on-click (fn [e] (let [username (get-in @input-state [:inputs 0 :username])
                                               password (get-in @input-state [:inputs 0 :password])]
                                           (do
                                             ;(.log js/console "login button pressed")
                                             (try-login username password))))} "login"]])


 (rum/defc create-account-fields []
  [:form#nfcreate
   [:input#cruser.fullwidth {:placeholder "username" :name "username"
                      :on-change (fn [e] (do
                                              (swap! input-state assoc-in [:inputs 0 :create-username] (.-value (.-target e)))
                                             ; (.log js/console (get-in @input-state [:inputs 0 :create-username]))
                                           ))}]
   [:input#crpass.fullwidth {:placeholder "password" :type "password" :name "password"
                      :on-change (fn [e] (do
                                              (swap! input-state assoc-in [:inputs 0 :create-password] (.-value (.-target e)))
                                              ;(.log js/console (get-in @input-state [:inputs 0 :create-password]))
                                           ))}]
   [:input#crpass2.fullwidth {:placeholder "pw confirm" :type "password" :name "password2"
                      :on-change (fn [e] (do
                                              (swap! input-state assoc-in [:inputs 0 :create-password2] (.-value (.-target e)))
                                             ; (.log js/console (get-in @input-state [:inputs 0 :create-password2]))
                                           ))}]
   [:button#crsubmit.fullwidth {:type "button"
                       :on-click (fn [e] (let [username  (get-in @input-state [:inputs 0 :create-username])
                                               password  (get-in @input-state [:inputs 0 :create-password])
                                               password2 (get-in @input-state [:inputs 0 :create-password2])]
                                           (do
                                         ;    (.log js/console "create account button pressed")

                                             (create-user username password password2)
                                             )))} "create account"]])




(rum/defc create-account-input []
  [:div#create-account-contain
   (create-account-fields)])


(rum/defc link [address]
  [:a {:href address} address])

(rum/defc top-bar < rum/reactive []
  (let [current-user (get-in (rum/react input-state) [:inputs 0 :current-user])]
    [:div#topbar
     [:ol.topbar
      [:li [:div.sidebarbutton {:on-click (fn [_] (swap! input-state assoc-in [:inputs 0 :current-view] "default"))} "n⊜nforum"]]
      [:li [:span.sidebarbutton {:on-click
                 (fn [e] (do
                           (.stopPropagation e)
                           (swap! input-state update-in [:inputs 0 :show-sidebar] not)))} " ∴ preferences"]]

      [:li [:span.sidebarbutton {:on-click (fn [_] (swap! input-state assoc-in [:inputs 0 :current-view] "default"))} "⌁ top"   ]]
      [:li [:span.sidebarbutton {:on-click (fn [_] (swap! input-state assoc-in [:inputs 0 :current-view] "submit"))} "⌁ submit"]]
      [:li [:span.sidebarbutton {:on-click (fn [_] (swap! input-state assoc-in [:inputs 0 :current-view] "edit-profile"))} (str " ⌬ " (if (empty? current-user) "....." current-user))]]
      [:li [:span.sidebarbutton {
              :on-click (fn [e] (do
                                  (.stopPropagation e)
                                  (swap! input-state assoc-in [:inputs 0 :logged-in] false)
                                  (swap! input-state assoc-in [:inputs 0 :current-user] "")
                                  (swap! input-state assoc-in [:inputs 0 :auth-token] "")
                                  (swap! input-state assoc-in [:inputs 0 :login-time] "")
                                  (remove-item! :login-time)
                                  (remove-item! :uid)
                                  (remove-item! :auth-key)
                                  (->output! (str "Logout Successful"))))} "⇏ logout"]]]]))

(rum/defc side-bar []
  [:div#sidebar
   [:ol.sidebar
    [:li [:div.sidebarbutton {:on-click (fn [_] (do
                                                  (swap! input-state assoc-in [:inputs 0 :current-view] "edit-profile")
                                                  (swap! input-state update-in [:inputs 0 :show-sidebar] not)))} "ᐃ edit profile"]]

    [:li [:div.sidebarbutton {:on-click (fn [_] (do
                                                  (swap! input-state assoc-in [:inputs 0 :current-view] "set-public-email")
                                                  (swap! input-state update-in [:inputs 0 :show-sidebar] not)))} "໑ set public email"]]

    [:li [:div.sidebarbutton {:on-click (fn [_] (do
                                                  (swap! input-state assoc-in [:inputs 0 :current-view] "set-recovery-email")
                                                  (swap! input-state update-in [:inputs 0 :show-sidebar] not)))} "ༀ set recovery e-mail"]]

    [:li [:div.sidebarbutton {:on-click (fn [_] (do
                                                  (swap! input-state assoc-in [:inputs 0 :current-view] "set password")
                                                  (swap! input-state update-in [:inputs 0 :show-sidebar] not)))} "༓ set password"]]

    [:li [:div.sidebarbutton {:on-click (fn [_] (do
                                                  (swap! input-state assoc-in [:inputs 0 :current-view] "invite-friends")
                                                  (swap! input-state update-in [:inputs 0 :show-sidebar] not)))} "၀ invite friends"]]

    [:li [:div.sidebarbutton {:on-click (fn [_] (do
                                                  (swap! input-state assoc-in [:inputs 0 :current-view] "send-feedback")
                                                  (swap! input-state update-in [:inputs 0 :show-sidebar] not)))} "૪ give feedback"]]

    [:li [:div.sidebarbutton {:on-click (fn [_] (do
                                                  (swap! input-state assoc-in [:inputs 0 :current-view] "support-nf")
                                                  (swap! input-state update-in [:inputs 0 :show-sidebar] not)))} "៷៸៸ support nf"]]

    [:li [:div.sidebarbutton {:on-click (fn [_] (swap! input-state update-in [:inputs 0 :show-sidebar] not))} "ᐉ hide preferences"]]
    ]])

(rum/defc login-bar []
  [:div#loginbar
   [:ol.loginbar
    ;[:li.fbfb [:a {:href "/facebook"} "Continue with Facebook as Vaso Veneliciukuosoeus"]]
    ;[:li.gogo [:a {:href "/gogole"} "Google Login"]]
    ;[:li.twtw [:a {:href "/twitter"} "Twitter Login"]]
    [:li.nfnf "Nonforum Login:" (nf-login-input)]
    [:li.nfca "Create a Nonforum account:" (create-account-input)]]])

(defn check-if-showing [id]
  (let [showsters (get-in @input-state [:inputs 0 :showing])]
    (if (contains? showsters id)
      "showing"
      "notshowing")))

(defn uuid [s]
  (assert (string? s))
  (UUID. (.toLowerCase s) nil))

(rum/defc tv-cell  < rum/reactive
                    { :key-fn (fn [td]
                                    (str (uuid (str (:title td))))) } [td]
  (if (not (empty? td))

  (let [title (:title td)
        contents (:contents td)
        comments (:comments td)
        priority (:priority td)
        id (:id td)
        posted-by (:posted-by td)
        timestamp (:timestamp td)
        cids (return-comment-ids-of-tv id) ]
    [:li [:div.tile {:on-click (fn [e] (do
                                         (.log js/console "link to post" id " + comments disp, " td)
                                         (swap! input-state assoc-in [:inputs 0 :tv-title] title)
                                         (swap! input-state assoc-in [:inputs 0 :tv-contents] contents)
                                         (swap! input-state assoc-in [:inputs 0 :tv-posted-by] posted-by)
                                         (swap! input-state assoc-in [:inputs 0 :tv-timestamp] timestamp)
                                         (swap! input-state assoc-in [:inputs 0 :tv-comments] comments)

                                         (swap! input-state assoc-in [:inputs 0 :selected-parent] id)
                                         (swap! input-state assoc-in [:inputs 0 :selected-child] cids)

                                         (swap! input-state assoc-in [:inputs 0 :tv-current] td)
                                         (swap! input-state assoc-in [:inputs 0 :tv-curr-id] id)))
                     :id (str "tile" id)}
        [:div.heading title]
        [:div.contents contents]
        [:div.priority id]]])))


(rum/defc television  < rum/reactive []
  [:div#tv
   [:ol.tv
    (map tv-cell  (rum/react tv-state))]])

(rum/defc post-input []
  [:form#postinput "Create new post"
   [:input.postinput{:placeholder "title"
                      :on-change (fn [e] (do
                                    (swap! input-state assoc-in [:inputs 0 :title] (.-value (.-target e)))
                                    (.log js/console (get-in @input-state [:inputs 0 :title]))))}]
   [:input.postinput {:placeholder "link"
                      :on-change (fn [e] (do
                                   (swap! input-state assoc-in [:inputs 0 :link] (.-value (.-target e)))
                                   (.log js/console (get-in @input-state [:inputs 0 :link]))))}]

   [:input.postinput {:placeholder "contents"
                      :on-change (fn [e] (do
                                   (swap! input-state assoc-in [:inputs 0 :contents] (.-value (.-target e)))
                                   (.log js/console (get-in @input-state [:inputs 0 :contents]))))}]
   [:button.postinput {:type "button"
                       :on-click (fn [e]
                                     ;(.preventDefault e)
                                     ;(.stopPropagation e)
                                     (.log js/console "sending..")
                                     (.log js/console (.getElementById js/document "aft"))
                                   ;submit to server here!

                                    (let [new-post-map {:title (get-in @input-state [:inputs 0 :title])
                                                        :contents (get-in @input-state [:inputs 0 :contents])
                                                        :priority 10
                                                        :posted-by (get-in @input-state [:inputs 0 :current-user])

                                                        :timestamp 80008
                                                        :parent nil}]

                                       (swap! tv-state update :tiles conj new-post-map))) ;thanks @Marc O'Morain
                       } "post new"]])

;; https://github.com/tonsky/grumpy/blob/master/src/grumpy/editor.cljc#L257
;; thank you, @tonsky
;; rum is awesome. 25 nov 2018


(def y (atom 999))

(rum/defc post-comment-input < rum/reactive []
  [:form#postcommentinput
   [:textarea.fullwidth {:value (get-in @input-state [:inputs 0 :comment])
                         :placeholder "let us be kind"
                         :on-change (fn [e] (do
                                              (swap! input-state assoc-in [:inputs 0 :comment] (.-value (.-target e)))
                                              ;(.log js/console (get-in @input-state [:inputs 0 :comment]))
                                              ))
                         }]
   ;[:input.fullwidth {:value (get-in @input-state [:inputs 0 :current-user])
    ;                     :placeholder "username"
    ;                     :readonly "readonly"
                         ;:on-change (fn [e] (do
                         ;                     (swap! input-state assoc-in [:inputs 0 :username] (.-value (.-target e)))
                         ;                     ;(.log js/console (get-in @input-state [:inputs 0 :username]))
                         ;                     ))
     ;                    }]
   [:button.fullwidth {:type "button"
                       :class "replySelected"
                       :on-click (fn [e]
                                   (let [ parent-id (get-in @input-state [:inputs 0 :selected-parent])
                                          username (get-in @input-state [:inputs 0 :current-user])
                                          curr-tv (get-in @input-state [:inputs 0 :tv-curr-id])
                                          new-comment-map {:id (swap! y inc)
                                                          :contents (get-in @input-state [:inputs 0 :comment])
                                                          :author username
                                                          :comments []}]

                                      (let [first-hit (->> @posts
                                                          (keep-indexed #(when (= (:id %2) parent-id) %1))
                                                           first)
                                            second-hit (->> @tv-state
                                                            (keep-indexed #(when (= (:id %2) curr-tv) %1))
                                                           first)
                                            ]
                                        (.log js/console ">< " (get-in @posts [first-hit :comments]) (:id new-comment-map))

                                         (.log js/console ">< "  first-hit " | " second-hit)
                                        (.log js/console ">< "  parent-id " || " curr-tv)

                                        (if (= parent-id curr-tv)
                                          (do
                                            (swap! posts conj new-comment-map) ;add new comment
                                            (swap! tv-state update-in [second-hit :comments] conj (:id new-comment-map))
                                            ;alse need to update the [td] object in the atom
                                            (swap! input-state update-in [:inputs 0 :tv-current :comments] conj (:id new-comment-map))
                                            (.log js/console (get-in @input-state [:inputs 0 :tv-current :comments]))
                                            (swap! input-state update-in [:inputs 0 :tv-comments] conj (:id new-comment-map)))
                                          ;else
                                          (do
                                            (swap! posts conj new-comment-map) ;add new comment
                                            (swap! posts update-in [first-hit :comments] conj (:id new-comment-map)))) ;add comment id to parent
                                     (.log js/console @posts))
                                     ))} "Post a comment."]])


(rum/defc footer []
  [:div#footer "Welcome to nonforum.  Here you will find real-time threads and discussion boards."
    [:div#foot1 "Nonforum is a place to start discussion threads based on questions or simply on a topic."]
    [:div#foot2 "Nonforum is also a place where you can share links and discuss them, voting contributions up or down."]
    [:div#foot3 "When you are logged in you can vote on entries with votes signifying double-plus (++), plus (+), and minus (-)"]
    [:div#foot4 "The more you participate, the greater your community trust rating."]
    [:div#foot5 "By providing insightful comments and furthering discussions, your community rating will increase."]
    [:div#foot6 "There are several media-types at nonforum: Articles, Topics, Questions+Discussions, as well as Books and Speeches."]
    [:div#foot7 "For complete information on how to use nonforum most effectively, please check out the "[:a {:href "/faq"} "F.A.Q"]]])


(rum/defc non-buzz-placeholder []
  [:div.nonbuzz "nonforum"])

(rum/defc sponsored-message []
  [:div#spmsg "Help fund Horne Technologies in their next round of Fusion Research, a 5Tesla reactor [details]"])

(rum/defc go-back-button []
  (let [active-state "all"]
    [:div.goback {:on-click (fn [e]
                              (do
                                (.stopPropagation e)
                                (swap! input-state assoc-in [:inputs 0 :tv-current] "")
                                (swap! input-state assoc-in [:inputs 0 :tv-curr-id] "")))}
                                  "< back to " active-state ]))

(rum/defc input-fields []
  [:div#inputs-contain
   (post-comment-input)])

(rum/defc start < rum/reactive []
  (let [logged-in (get-in (rum/react input-state) [:inputs 0 :logged-in])
        tv-current (get-in (rum/react input-state) [:inputs 0 :tv-current])
        curr-comments (get-in (rum/react input-state) [:inputs 0 :tv-comments])
        show-sidebar (get-in (rum/react input-state) [:inputs 0 :show-sidebar])
        curr-view (get-in (rum/react input-state) [:inputs 0 :current-view])]
    ;(.log js/console "curr comments " curr-comments)

    (when-let [target-el (.getElementById js/document "output")]
       (if (= true logged-in)
         (set! (.-classList target-el) "hideMe")
         (set! (.-classList target-el) "justMounted")))
  [:div#maincontain



   (if (= false logged-in)
     (non-buzz-placeholder))
   (if (= false logged-in)
     (login-bar))











   (if (= true logged-in)
     (top-bar))
   (if (= true show-sidebar)
     (if (= true logged-in)
       (side-bar)))

   (if (= "send-feedback" curr-view) (send-feedback-fields))

   (if (= "submit" curr-view) (post-input))

   (if (= "feed" curr-view) (post-input))

   (if (= "latest" curr-view) (post-input))

   (if (= "top" curr-view) (post-input))

   (if (= "default" curr-view)
    (if (= true logged-in)
     (if (not (empty? tv-current))
       (go-back-button))))

  (if (= "default" curr-view)
    (if (= true logged-in)
     (if (not (empty? tv-current))
       (sponsored-message))))

   (if (= "default" curr-view)
    (if  (empty? tv-current)
     (if (= true logged-in)
      (television))))

   ;active tv-cell
   (if (= "default" curr-view)
    (if (= true logged-in)
     (tv-cell tv-current)))

   (if (= "default" curr-view)
    (if (not (empty? tv-current))
     (if (= true logged-in)
       (map render-item curr-comments))))

   (if (= "default" curr-view)
     (if (not (empty? tv-current))
      (if (= true logged-in)
       (input-fields))))
   ]))


;hydrate server-mounted component ^_^
;(rum/hydrate (login-bar)
;             (. js/document (getElementById "loginbar")))

(rum/mount (start)
           (. js/document (getElementById "start")))

(rum/mount (footer)
           (. js/document (getElementById "footing")))




(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)





;hax
(defn hax [] )

(defn get-url-params []
  (:query (u/url (-> js/window .-location .-href))))

(.log js/console (str (get-url-params)))

(.log js/console "sup ninja!!!  " (get (get-url-params) "v"))


(defn auto-login []
  (->output! "Attempting auto-login ...")
  (sente/ajax-lite "/check-login"
              {:method :post
               :headers {:X-CSRF-Token (:csrf-token @chsk-state)}
               :params {:uid           (get-item :uid)
                        :auth-token    (get-item :auth-key)
                        :login-time    (get-item :login-time)}
               :type :text}

              (fn [ajax-resp]
                (->output! "Auto-login response: " ajax-resp)
                (let [{:keys [success? ?status ?error ?content ?content-type]} ajax-resp
                      http-status (:?status ajax-resp)
                      auto-login-successful? (= 200 http-status)
                      stuff (cljs.reader/read-string ?content)]
                  (if-not auto-login-successful?
                    (do
                      (->output! "Auto-login failed")
                      (swap! input-state assoc-in [:inputs 0 :logged-in] false))
                    (do
                       (->output! "Auto-login success!")
                      ;assoc auth hash
                      (swap! input-state assoc-in [:inputs 0 :token] (get-item :auth-key))
                      (swap! input-state assoc-in [:inputs 0 :login-time] (get-item :login-time))
                      (swap! input-state assoc-in [:inputs 0 :logged-in] true)
                      (swap! input-state assoc-in [:inputs 0 :current-user] (get-item :uid)) ;'log user in' on client
                      (sente/chsk-reconnect! chsk)))))))

(if (not (empty? (get-item :auth-key)))
  (swap! input-state assoc-in [:inputs 0 :logged-in] true))

(set! (.-onload js/window)
        (if (not (empty? (get-item :auth-key)))
          auto-login))

;(.log js/console "auto login?" (get-item :login-time))
;;get params works! woo!

(.log js/console (get-url-params))

;;;; Init stuff

(defn start! [] (start-router!))

(defonce _start-once (start!))
