(ns nesferado.client
  "Nonforum Client built on Sente example using Rum, Cemerick/URL, and Venantius/Accountant"
  {:author "@_vaso"}

  (:require
   [clojure.string  :as str]
   [cljs.core.async :as async  :refer (<! >! put! chan)]
   [taoensso.sente  :as sente  :refer (cb-success?)]
   [rum.core :as rum]
   [alandipert.storage-atom :refer [local-storage]]
   [cemerick.url :as u]
   [ajax.core :refer [POST]]
   [accountant.core :as accountant])

  (:require-macros
   [cljs.core.async.macros :as asyncm :refer (go go-loop)]))

(enable-console-print!)

(def output-el (.getElementById js/document "output"))
(defn ->output! [msg]
  (aset output-el "value" msg))

(->output! " • Welcome to Nonforum •")
;;;; Define our Sente channel socket (chsk) client
(let [rand-chsk-type (if (>= (rand) 0.5) :ajax :auto)
      packer :edn
      {:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket-client!
        "/chsk"
        {:type   rand-chsk-type
         :packer packer})]

  (def chsk       chsk)
  (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def chsk-state state))   ; Watchable, read-only atom


(def y (atom 999))


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
        (fn [cb-reply] (->output! (str "Callback reply: " cb-reply)))))))

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



(def     tv-state (atom [ ;{:title "Fusion Power Imminent"
                          ; :subtitle "Horne Technologies has developed a working Plasma Containment Prototype for furthering Fusion"
                          ; :priority 1
                          ; :id 108
                          ; :posted-by "v@nonforum.com"
                          ; :timestamp 808080808
                          ; :comments [69]
                          ; :parent nil
                          ; :number-of-ratings 2
                          ; :link "http://hax.com"
                          ; :contents "Horne Technologies is on the brink of a fusion breakthrough. Their lab successfully contained plasma in 2017 with high-beta confinement and they need funding to continue research.  So far the fusion efficiency record is 67% (as of Dec. 2018), let's see how many teslas of magnetic field we need to reach 108% efficiency / break parity!"
                          ; :ratings-total 188}
                          ]))

(def input-state (atom {:inputs
                       [ {:title ""
                          :subtitle ""
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
                          :tv-curr-id ""
                          :logged-in false

                          :set-email ""
                          :current-email ""

                          :password-status ""
                          :recovery-email-status ""
                          :change-pass-old-pw ""
                          :change-pass-new-pw ""
                          :change-pass-new-pw2 ""
                          :invite-friend-input ""

                          :bio ""
                          :recovery-email ""

                          :edit-display-name ""
                          :send-feedback-input ""
                          :send-feedback-extra ""

                          :current-view "/"
                          }]}))


(def posts (atom [ ]))
                   ;{:id 33
                   ; :contents "Thirty three is awesome."
                   ; :author "monforum@nonforum.com"
                   ; :number-of-ratings 5
                   ; :ratings-total 540
                   ; :comments [34]}

(def ratings (atom [{}]))

(def nf-comment (atom ""))

(def nf-chat-input (atom ""))
(def nf-chat-messages (atom {}))

(defn get-rating [ratings-total number-of-ratings]
  (if (< number-of-ratings 6)
    (inc number-of-ratings)
    (int (/ ratings-total number-of-ratings))))


(defn get-rating-com [ratings-total number-of-ratings]
  (if (< number-of-ratings 3)
    (inc number-of-ratings)
    (int (/ ratings-total number-of-ratings))))

(defn get-url-params []
  (:query (u/url (-> js/window .-location .-href))))


(defn get-post-by-id [post-id]
  (let [post (first (filter #(= post-id (:id %)) @posts))]
    post))

;(first (first (filter #(= (:id (second %)) 88) (map-indexed vector @posts))))

(defn sort-the-comments-of! [post-id]
  (let [sort-me-id post-id
        spot  (first (first (filter #(= (:id (second %)) sort-me-id) (map-indexed vector @posts))))
        sorted-comments  (map :id
                         (sort-by #(get-rating (:ratings-total %) (:number-of-ratings %)) <
                           (map get-post-by-id
                             (:comments (get-post-by-id sort-me-id)))))]
      (swap! posts assoc-in [spot :comments] sorted-comments )))

(defn return-comment-ids [post-id]
  (let [cids (:comments (first (filter  #(= post-id (:id %)) @posts)))
        posts (map get-post-by-id cids)
        post-collection (sort-by #(get-rating (:ratings-total %) (:number-of-ratings %)) posts)
        spc  (map :id post-collection)]

    spc))

(defn return-comment-ids-of-tv [tile-id]
  (let [cids (:comments (first (filter  #(= tile-id (:id %)) @tv-state)))
        posts (map get-post-by-id cids)
        post-collection (sort-by #(get-rating (:ratings-total %) (:number-of-ratings %)) posts)
        spc  (map :id post-collection)]

    spc))



;;needs to recursively reduce to count comments
(defn count-the-comments-of [tile-id]
  (let [cids (:comments (first (filter  #(= tile-id (:id %)) @tv-state)))
        posts (map get-post-by-id cids)
        spc  (map :id posts)
        comm-res (map return-comment-ids spc)]
    (count comm-res)))

;;Accountant
(accountant/configure-navigation!
  {:nav-handler (fn [path]
                 ;; (.log js/console "ac: " path)
                  ;(.log js/console (get-url-params))
                  (if (or (str/starts-with? path "?nfid") (str/starts-with? path "/?nfid"))
                    (do
                     ;; (.log js/console "start swith nfid busted")
                      ;load it up
                      (let [url-params (get-url-params)
                            nfid (cljs.reader/parse-int (get url-params "nfid"))
                            td (first (filter  #(= nfid (:id %)) @tv-state))
                            title (:title td)
                            contents (:contents td)
                            comments (:comments td)

                            posted-by (:posted-by td)
                            timestamp (:timestamp td)
                            n-ratings (:number-of-ratings td)
                            ratings-t (:ratings-total td)
                            link (:link td)
                            long-description (:details td)
                            cids (return-comment-ids-of-tv nfid)]
                     ;;   (.log js/console nfid title contents posted-by comments)

                        (swap! input-state assoc-in [:inputs 0 :current-view] "/")

                        (swap! input-state assoc-in [:inputs 0 :tv-title] title)
                        (swap! input-state assoc-in [:inputs 0 :tv-contents] contents)
                        (swap! input-state assoc-in [:inputs 0 :tv-posted-by] posted-by)
                        (swap! input-state assoc-in [:inputs 0 :tv-timestamp] timestamp)
                        (swap! input-state assoc-in [:inputs 0 :tv-comments] comments)

                        (swap! input-state assoc-in [:inputs 0 :selected-parent] nfid)
                        (swap! input-state assoc-in [:inputs 0 :selected-child] cids)

                        (swap! input-state assoc-in [:inputs 0 :tv-current] td)
                        (swap! input-state assoc-in [:inputs 0 :tv-curr-id] nfid))


                      ; and dance


                      )
                    ;else
                    (do
                      (swap! input-state assoc-in [:inputs 0 :tv-current] {})
                      (swap! input-state assoc-in [:inputs 0 :current-view] path))))
   :path-exists? (fn [_] true)
   :reload-same-path? true})

(defn js-reload []
  (.log js/console "javascript reloaded ^_^;"))


(defn create-user [user-id pw pw2]
  (->output! (str "Creating account" user-id))
  (sente/ajax-lite "/create-account"
                   {:method :post
                    :headers {:X-CSRF-Token (:csrf-token @chsk-state)}
                    :params  {:user-id (str user-id)
                              :password (str pw)
                              :password2 (str pw2)}
                    :type :text}

                   (fn [ajax-resp]
                     (->output! (str "Account creation response: " ajax-resp))
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
                           (accountant/navigate! "/")

                           ;'log user in' on client
                           (sente/chsk-reconnect! chsk)
                           ))))))


(defn try-login [username pw]
  (if (str/blank? username)
        (->output! "Please enter a user-id first")
      (do
        (->output! (str "Logging in with username " username))
        (sente/ajax-lite "/login"
              {:method :post
               :timeout-ms 7000
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
                      (set-item! :auth-key (:auth-token stuff))
                      (set-item! :login-time (:login-time stuff))
                      (set-item! :uid (:uid stuff))

                      ;assoc auth hash
                      (swap! input-state assoc-in [:inputs 0 :token] (:auth-token stuff))
                      (swap! input-state assoc-in [:inputs 0 :login-time] (:login-time stuff))
                      (swap! input-state assoc-in [:inputs 0 :logged-in] true)
                      (swap! input-state assoc-in [:inputs 0 :current-user] (:uid stuff))
                      (accountant/navigate! "/");'log user in' on client
                      (sente/chsk-reconnect! chsk)))))))))

(defn write-rating! [rating pid]
  (chsk-send! [:clientsent/rating
                 { :pid pid
                   :uid (get-in @input-state [:inputs 0 :current-user])
                   :rating rating }]))


(defn rate [rating pid]
  (cond
    (= rating :double-plus) (do
                              (write-rating! rating pid)
                              (.log js/console "user rated " pid " ++"))
    (= rating :plus) (do (write-rating! rating pid)
                       (.log js/console (str "user rated " pid " +")))
    (= rating :minus) (do (write-rating! rating pid)
                        (.log js/console "user rated " pid " -"))))

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
                         { :key-fn (fn [state pid]
                           (str pid (swap! y inc))) }
                        show-fresh
                       [state pid]

  (let [post-coll   (rum/react posts) ;atom
        input-coll (rum/react input-state)
        cids (return-comment-ids pid)
        __ (rum/react tv-state)
        local-atom (::hidecomments state)
        ]
    ;(prn cids)
    (if (empty? (return-comment-ids pid))
      (let [noc-post  (first (filter  #(= pid (:id %)) post-coll))
            nor-nospost (:number-of-ratings noc-post)
            rating (get-rating-com (:ratings-total noc-post) nor-nospost)]
        [:div.nocomments {:id pid :class "genpost"}
         [:div.padleft {:on-click (fn [e] (do
                                         (.log js/console "Freshly selected: " pid)
                                         (.stopPropagation e)
                                         (swap! input-state assoc-in [:inputs 0 :selected-parent] pid)
                                         (swap! input-state assoc-in [:inputs 0 :selected-child] (return-comment-ids pid))))}
          [:div.item-contents.genpost {:class (cond (= pid (get-in input-coll [:inputs 0 :selected-parent])) "selectedParent"
                                            (some #(= % pid) (get-in input-coll [:inputs 0 :selected-child])) "selectedChild")} (:contents noc-post)
            [:div.item-author   (:author noc-post)]
            [:div.rate
               [:div.item-rate-doubleplus {:on-click (fn [e] (rate :double-plus pid))} ""] ;++
               [:div.item-rate-plus  {:on-click (fn [e] (rate :plus pid))} ""] ;+
               [:div.item-rate-minus {:on-click (fn [e] (rate :minus pid))} ""] ;-
              [:div.item-rating {:class (if (< nor-nospost 3)
                                          "rollthedice"
                                          "numerals") } rating ]]]]])
       ;lest the post has comments and needs more renders in pocket.
       (let [com-post (first (filter  #(= pid (:id %)) (sort-by #(get-rating (:ratings-total %) (:number-of-ratings %))  post-coll)))

            nor-compost (:number-of-ratings com-post)
             com-rating (get-rating-com (:ratings-total com-post) nor-compost)]
         [:div.hascomments {:id pid }
          [:div.padleft {:on-click (fn [e] (do
                                         (.log js/console "Freshly selected: " pid)
                                         (.stopPropagation e)
                                         (swap! input-state assoc-in [:inputs 0 :selected-parent] pid)
                                         (swap! input-state assoc-in [:inputs 0 :selected-child] (return-comment-ids pid))))}
           [:div.item-contents.genpost  {:class (cond (= pid (get-in input-coll [:inputs 0 :selected-parent])) "selectedParent"
                                              (some #(= % pid) (get-in input-coll [:inputs 0 :selected-child])) "selectedChild")} (:contents com-post)
             [:div.item-author (:author com-post)]
             [:div.rate
               [:div.item-rate-doubleplus {:on-click (fn [e] (rate :double-plus pid))} ""] ;++
               [:div.item-rate-plus  {:on-click (fn [e] (rate :plus pid))} ""] ;+
               [:div.item-rate-minus {:on-click (fn [e] (rate :minus pid))} ""] ;-
               [:div.item-rating  {:class (if (< nor-compost 3)
                                          "rollthedice"
                                          "numerals") } com-rating]]]

           [:button.commentog {:on-click (fn [_] (swap! local-atom #(* -1 %)))}
              (if (= @local-atom -1)
                "hide" ;hide comments
                "show")] ;show comments
           (if (= @local-atom -1)
             (map render-item cids))]]))))

;;; send-feedback inputs

(rum/defcs send-feedback-fields < rum/reactive
                                 show-fresh [state ]
  [:form#sendfeedbackform
   [:textarea#sendfeedbackinput.fullwidth {
                                            :placeholder "Send us some feedback, suggestions, comments, concerns." :name "feedback"
                                            :value (get-in @input-state [:inputs 0 :send-feedback-input])
                                            :on-change (fn [e] (do
                                              (swap! input-state assoc-in [:inputs 0 :send-feedback-input] (.-value (.-target e)))))}]

   [:button#sfsubmit.fullwidth {:type "button"
                       :on-click (fn [e] (let [feedback  (get-in @input-state [:inputs 0 :send-feedback-input])]
                                           (do
                                             (.log js/console "send feedback button pressed")
                                             (chsk-send! [:clientsent/feedback {:feedback feedback}])
                                             (swap! input-state assoc-in [:inputs 0 :send-feedback-input] ""))))} "send feedback"]])

;;login inputs & create account inputs ui

 (rum/defc nf-login-input []
  [:form#nflogin
   [:input.fullwidth {:placeholder "username" :name "username"
                      :auto-complete "username login"
                      :on-change (fn [e] (do
                                              (swap! input-state assoc-in [:inputs 0 :username] (.-value (.-target e)))))}]
   [:input.fullwidth {:placeholder "password" :type "password" :name "password"
                      :auto-complete "password login"
                      :on-change (fn [e] (do
                                              (swap! input-state assoc-in [:inputs 0 :password] (.-value (.-target e)))))}]
   [:button.fullwidth#logsin {:type "button"
                       :on-click (fn [e] (let [username (get-in @input-state [:inputs 0 :username])
                                               password (get-in @input-state [:inputs 0 :password])]
                                           (do
                                             ;(.log js/console "login button pressed")
                                             (try-login username password))))} "login"]])


 (rum/defc create-account-fields []
  [:form#nfcreate
   [:input#cruser.fullwidth {:placeholder "username" :name "username"
                             :auto-complete "new-username"
                             :on-change (fn [e] (do
                                              (swap! input-state assoc-in [:inputs 0 :create-username] (.-value (.-target e)))))}]
   [:input#crpass.fullwidth {:placeholder "password" :type "password" :name "password"
                             :auto-complete "new-password"
                      :on-change (fn [e] (do
                                              (swap! input-state assoc-in [:inputs 0 :create-password] (.-value (.-target e)))))}]
   [:input#crpass2.fullwidth {:placeholder "pw confirm" :type "password" :name "password2"
                              :auto-complete "new-password-confirm"
                      :on-change (fn [e] (do
                                              (swap! input-state assoc-in [:inputs 0 :create-password2] (.-value (.-target e)))))}]
   [:button#crsubmit.fullwidth {:type "button"
                                :auto-complete "new-user-account-create"
                       :on-click (fn [e] (let [username  (get-in @input-state [:inputs 0 :create-username])
                                               password  (get-in @input-state [:inputs 0 :create-password])
                                               password2 (get-in @input-state [:inputs 0 :create-password2])]
                                           (do
                                            (create-user username password password2))))} "create account"]])




(rum/defc create-account-input []
  [:div#create-account-contain
   (create-account-fields)])


(rum/defc link [address]
  [:a {:href address} address])

(rum/defc top-bar < rum/reactive []
  (let [current-user (get-in (rum/react input-state) [:inputs 0 :current-user])]
    [:div#topbar
     [:ol.topbar
      [:li [:div.sidebarbutton {:on-click (fn [_] (do
                                                    (accountant/navigate! "/")
                                                    (swap! input-state assoc-in [:inputs 0 :tv-current] "")
                                                    (swap! input-state assoc-in [:inputs 0 :tv-curr-id] "")
                                                    ))
                                 :onMouseOver (fn [e] (set! js/document.body.style.cursor "pointer"))
                                 :onMouseOut  (fn [e] (set! js/document.body.style.cursor "auto"))} "n⊜nforum"]]


      (if (not (empty? current-user)) [:li [:span.sidebarbutton {:on-click (fn [_] (do
                                                     (accountant/navigate! "/chat")
                                                     (swap! input-state assoc-in [:inputs 0 :tv-current] "")
                                                     (swap! input-state assoc-in [:inputs 0 :tv-curr-id] "")))
                                 :onMouseOver (fn [e] (set! js/document.body.style.cursor "pointer"))
                                 :onMouseOut  (fn [e] (set! js/document.body.style.cursor "auto"))} "⌁ chat"   ]])
      (if (not (empty? current-user)) [:li [:span.sidebarbutton {:on-click
                 (fn [e] (do
                           (.stopPropagation e)
                           (swap! input-state update-in [:inputs 0 :show-sidebar] not)))
                                 :onMouseOver (fn [e] (set! js/document.body.style.cursor "pointer"))
                                 :onMouseOut  (fn [e] (set! js/document.body.style.cursor "auto"))} " ∴ preferences"]])
      (if (not (empty? current-user)) [:li [:span.sidebarbutton {:on-click (fn [_] (do
                                                     (accountant/navigate! "/submit")
                                                     (swap! input-state assoc-in [:inputs 0 :current-view] "/submit")))
                                 :onMouseOver (fn [e] (set! js/document.body.style.cursor "pointer"))
                                 :onMouseOut  (fn [e] (set! js/document.body.style.cursor "auto"))} "⌁ submit"]])
      [:li [:span.sidebarbutton {:on-click (fn [_] (do
                                                     (accountant/navigate! "/about")
                                                     (swap! input-state assoc-in [:inputs 0 :current-view] "/about")))
                                 :onMouseOver (fn [e] (set! js/document.body.style.cursor "pointer"))
                                 :onMouseOut  (fn [e] (set! js/document.body.style.cursor "auto"))} "⌁ about"]]
      [:li (if (empty? current-user)
             [:span.sidebarbutton
              {:on-click (fn [_] (do
                                   (accountant/navigate! "/login")
                                   (swap! input-state assoc-in [:inputs 0 :current-view] "/login")))} "login"]
             ;else
             [:span.sidebarbutton
              {:on-click (fn [_] (do
                                  (accountant/navigate! "/profile")))
               :onMouseOver  (fn [e] (set! js/document.body.style.cursor "auto"))}(str " ⌬ " current-user) ])]


      (if (not (empty? current-user)) [:li [:span.sidebarbutton.logout {
              :on-click (fn [e] (do
                                  (.stopPropagation e)
                                  (swap! input-state assoc-in [:inputs 0 :logged-in] false)
                                  (swap! input-state assoc-in [:inputs 0 :current-user] "")
                                  (swap! input-state assoc-in [:inputs 0 :auth-token] "")
                                  (swap! input-state assoc-in [:inputs 0 :login-time] "")

                                  (swap! input-state assoc-in [:inputs 0 :tv-current] "")
                                  (swap! input-state assoc-in [:inputs 0 :tv-curr-id] "")
                                  ;(swap! input-state assoc-in [:inputs 0 :current-view] "/")
                                  (accountant/navigate! "/")
                                  (remove-item! :login-time)
                                  (remove-item! :uid)
                                  (remove-item! :auth-key)
                                  (->output! (str "Logout Successful"))))
              :onMouseOver (fn [e] (set! js/document.body.style.cursor "pointer"))
              :onMouseOut  (fn [e] (set! js/document.body.style.cursor "auto"))} " ⇏"]])]]))

(rum/defc side-bar []
  [:div#sidebar
   [:ol.sidebar
    [:li [:div.sidebarbutton.bb {:on-click (fn [_] (do
                                                 ; (swap! input-state assoc-in [:inputs 0 :current-view] "edit-profile")
                                                     (accountant/navigate! "/profile")
                                                  (swap! input-state update-in [:inputs 0 :show-sidebar] not)))
                                 :onMouseOver (fn [e] (set! js/document.body.style.cursor "pointer"))
                                 :onMouseOut  (fn [e] (set! js/document.body.style.cursor "auto"))} "ᐃ edit profile"]]

    [:li [:div.sidebarbutton.bb {:on-click (fn [_] (do
                                                  ;(swap! input-state assoc-in [:inputs 0 :current-view] "/email/public")
                                                     (accountant/navigate! "/email-public")
                                                  (swap! input-state update-in [:inputs 0 :show-sidebar] not)))
                                 :onMouseOver (fn [e] (set! js/document.body.style.cursor "pointer"))
                                 :onMouseOut  (fn [e] (set! js/document.body.style.cursor "auto"))} "໑ set public email"]]

    [:li [:div.sidebarbutton.bb {:on-click (fn [_] (do
                                                  ;(swap! input-state assoc-in [:inputs 0 :current-view] "/email/recovery")
                                                     (accountant/navigate! "/email-recovery")
                                                  (swap! input-state update-in [:inputs 0 :show-sidebar] not)))
                                 :onMouseOver (fn [e] (set! js/document.body.style.cursor "pointer"))
                                 :onMouseOut  (fn [e] (set! js/document.body.style.cursor "auto"))} "ༀ set recovery e-mail"]]

    [:li [:div.sidebarbutton.bb {:on-click (fn [_] (do
                                                  ;(swap! input-state assoc-in [:inputs 0 :current-view] "/password/update")
                                                     (accountant/navigate! "/password-update")
                                                  (swap! input-state update-in [:inputs 0 :show-sidebar] not)))
                                 :onMouseOver (fn [e] (set! js/document.body.style.cursor "pointer"))
                                 :onMouseOut  (fn [e] (set! js/document.body.style.cursor "auto"))} "༓ set password"]]

    [:li [:div.sidebarbutton.bb {:on-click (fn [_] (do
                                                  ;(swap! input-state assoc-in [:inputs 0 :current-view] "/feedback")
                                                  (accountant/navigate! "/feedback")
                                                  (swap! input-state update-in [:inputs 0 :show-sidebar] not)))
                                 :onMouseOver (fn [e] (set! js/document.body.style.cursor "pointer"))
                                 :onMouseOut  (fn [e] (set! js/document.body.style.cursor "auto"))} "૪ give feedback"]]

    [:li [:div.sidebarbutton.bb.bd {:on-click (fn [_] (do
                                                  ;(swap! input-state assoc-in [:inputs 0 :current-view] "/donate")
                                                     (accountant/navigate! "/donate")
                                                  (swap! input-state update-in [:inputs 0 :show-sidebar] not)))
                                 :onMouseOver (fn [e] (set! js/document.body.style.cursor "pointer"))
                                 :onMouseOut  (fn [e] (set! js/document.body.style.cursor "auto"))} "៷៸៸ support fusion research"]]

    [:li [:div.sidebarbutton.bb.hideprefs {:on-click (fn [_] (swap! input-state update-in [:inputs 0 :show-sidebar] not))
                                           :onMouseOver (fn [e] (set! js/document.body.style.cursor "pointer"))
                                           :onMouseOut  (fn [e] (set! js/document.body.style.cursor "auto"))} "ᐉ hide preferences"]]
    ]])

(rum/defc login-bar []
  [:div#loginbar
   [:ol.loginbar
    [:li.nfnf "Nonforum Login:" (nf-login-input)]
    [:li.nfca "Create a Nonforum account:" (create-account-input)]
    [:li.terms "terms: "]
    [:li.terms "   "]
    [:li.terms "   "]
    [:li.terms "   "]
    [:li.terms "   "]
    [:li.terms "by participating here at nonforum you agree to: "]
    [:li.terms "abide kindly and virtuously,"]
    [:li.terms "express yourself in ways that further the discussion and enhance morale,"]
    [:li.terms "and, in short, participate in ways to help elevate humanity."]
    [:li.terms "There is currently no surcharge to create an account, you may have one."]]])



(rum/defc tv-cell  < rum/reactive
                     { :key-fn (fn [td]
                        (str (uuid (str (:title td))))) }
                      [td]
  (if (not (empty? td))

  (let [title (:title td)
        subtitle (:subtitle td)
        comments (:comments td)
        priority (:priority td)
        id (:id td)
        posted-by (:posted-by td)

        timestamp (:timestamp td)
        n-ratings (:number-of-ratings td)  ;;maybe ask for the ratings from the atom instead of passing in
        ratings-t (:ratings-total td)
        link (:link td)
        long-description (:contents td)
        cids (return-comment-ids-of-tv id)
        num-comments (count-the-comments-of id)
        tv-current (get-in (rum/react input-state) [:inputs 0 :tv-current])]
    [:li [:div.tile {:on-click (fn [e] (do
                                         ;(.log js/console "link to post" id " + comments disp, " td)

                                         (swap! input-state assoc-in [:inputs 0 :tv-title] title)
                                         (swap! input-state assoc-in [:inputs 0 :tv-contents] long-description)
                                         (swap! input-state assoc-in [:inputs 0 :tv-posted-by] posted-by)
                                         (swap! input-state assoc-in [:inputs 0 :tv-timestamp] timestamp)
                                         (swap! input-state assoc-in [:inputs 0 :tv-comments] comments)

                                         (swap! input-state assoc-in [:inputs 0 :selected-parent] id)
                                         (swap! input-state assoc-in [:inputs 0 :selected-child] cids)

                                         (swap! input-state assoc-in [:inputs 0 :tv-current] td)
                                         (swap! input-state assoc-in [:inputs 0 :tv-curr-id] id)
                                         (.scrollTo js/window 0 0)
                                         (accountant/navigate! (str "?nfid=" id))))
                     :id (str "tile" id)}
        [:div.heading title]
        [:div.contents subtitle]
        [:div.tilelink            {:class (if (empty? tv-current) "hideme")} [:a {:href link} link]]
        [:div.longdescription {:class (if (empty? tv-current) "hideme")} long-description]
        ;[:div.numcomments num-comments " comments"]
        [:div.tile-rate
            [:div.tile-rate-doubleplus {:on-click (fn [e] (do
                                                            (.stopPropagation e)
                                                            (rate :double-plus id)))} ""]
            [:div.tile-rate-plus  {:on-click (fn [e] (do
                                                       (.stopPropagation e)
                                                       (rate :plus id)))} ""]
            [:div.tile-rate-minus {:on-click (fn [e] (do
                                                       (.stopPropagation e)
                                                       (rate :minus id)))} ""]
            [:div.tile-rating  {:class (if (< n-ratings 6)
                                          "rollthedice"
                                          "numerals") } (get-rating ratings-t n-ratings)]]
        [:div.tileid id]]])))


(rum/defcs television  < rum/reactive
                        show-fresh [state ]
  [:div#tv
   [:ol.tv
    (map tv-cell  (rum/react tv-state))]])

(rum/defcs post-input < rum/reactive
                       show-fresh [state ]
  [:form#postinput "Create new post"
   [:input.reim.kash {:placeholder "title"
                     :value (get-in @input-state [:inputs 0 :title])
                      :on-change (fn [e] (do
                                    (swap! input-state assoc-in [:inputs 0 :title] (.-value (.-target e)))
                                    (.log js/console (get-in @input-state [:inputs 0 :title]))))}]
   [:input.reim.kash {:placeholder "subtitle"
                     :value (get-in @input-state [:inputs 0 :subtitle])
                      :on-change (fn [e] (do
                                    (swap! input-state assoc-in [:inputs 0 :subtitle] (.-value (.-target e)))
                                    (.log js/console (get-in @input-state [:inputs 0 :subtitle]))))}]

   [:input.reim.kash {:placeholder "link"
                      :value (get-in @input-state [:inputs 0 :link])
                      :on-change (fn [e] (do
                                   (swap! input-state assoc-in [:inputs 0 :link] (.-value (.-target e)))
                                   (.log js/console (get-in @input-state [:inputs 0 :link]))))}]

   [:input.reim.kash {:placeholder "contents"
                      :value (get-in @input-state [:inputs 0 :contents])
                      :on-change (fn [e] (do
                                   (swap! input-state assoc-in [:inputs 0 :contents] (.-value (.-target e)))
                                   (.log js/console (get-in @input-state [:inputs 0 :contents]))))}]
   [:button.reim.kash {:type "button"
                       :on-click (fn [e]
                                     ;(.log js/console "sending..")
                                     ;(.log js/console (.getElementById js/document "aft"))
                                   ;submit to server here!

                                    (let [ potential-link (get-in @input-state [:inputs 0 :link])
                                           new-post-map {:title          (get-in @input-state [:inputs 0 :title])
                                                        :subtitle          (get-in @input-state [:inputs 0 :subtitle])
                                                        :contents       (get-in @input-state [:inputs 0 :contents])

                                                        ;verify that link has http:// in front.
                                                        :link (if (not (empty? potential-link))
                                                                (if (or (str/starts-with? potential-link "http") (str/starts-with? potential-link "https"))
                                                              potential-link
                                                            ;else
                                                             (str "http://" potential-link))
                                                               (str ""))


                                                       ; :number-of-ratings 0
                                                       ; :ratings-total 0

                                                        ;:posted-by      (get-in @input-state [:inputs 0 :current-user])

                                                        :timestamp 80008}]
                                       (chsk-send! [:clientsent/new-post new-post-map])
                                       ;clear input fields
                                       (swap! input-state assoc-in [:inputs 0 :title] "")
                                       (swap! input-state assoc-in [:inputs 0 :subtitle] "")
                                       (swap! input-state assoc-in [:inputs 0 :contents] "")
                                       (swap! input-state assoc-in [:inputs 0 :link] "")
                                      (accountant/navigate! "/")))} "submit new post"]])

(rum/defcs edit-profile < rum/reactive
                         show-fresh [state ]
  [:form#profileinput.profileinput "Edit Profile"
   [:textarea.profileinput{:placeholder "bio"
                           :value (get-in @input-state [:inputs 0  :bio])
                      :on-change (fn [e] (do
                                    (swap! input-state assoc-in [:inputs 0 :bio] (.-value (.-target e)))
                                    (.log js/console (get-in @input-state [:inputs 0 :bio]))))}]
   [:input.profileinput {:placeholder "public e-mail"
                         :value (get-in @input-state [:inputs 0  :public-email])
                      :on-change (fn [e] (do
                                   (swap! input-state assoc-in [:inputs 0 :public-email] (.-value (.-target e)))
                                   (.log js/console (get-in @input-state [:inputs 0 :public-email]))))}]

    [:button.profileinput {:type "button"
                       :on-click (fn [e]
                                     (.log js/console "updating bio")
                                   ;submit to server here!

                                    (let [new-bio-data {:bio (get-in @input-state [:inputs 0 :bio])
                                                        :public-email (get-in @input-state [:inputs 0 :public-email])}]
                                      (chsk-send! [:clientsent/bio new-bio-data])
                                      (swap! input-state assoc-in [:inputs 0 :bio] "")
                                      (swap! input-state assoc-in [:inputs 0 :public-email] "")))} "update bio"]])

(rum/defcs set-recovery-email < rum/reactive
                               show-fresh [state ]
  [:form#recoveryinput "Set Recovery Email"
   [:textarea#restatus
     { :readonly true
       :value (get-in @input-state [:inputs 0 :recovery-email-status])}]
   [:input.reim {:placeholder "recovery e-mail"
                 :value (get-in @input-state [:inputs 0 :recovery-email])
                 :on-change (fn [e] (do
                             (swap! input-state assoc-in [:inputs 0 :recovery-email] (.-value (.-target e)))
                             (.log js/console (get-in @input-state [:inputs 0 :recovery-email]))))}]
   [:div.labez "current nonforum password:"
    [:input.reim{     :placeholder ""
                      :type "password"
                      :value (get-in @input-state [:inputs 0 :password])
                      :auto-complete "Current Nonforum password"
                      :on-change (fn [e] (do
                                   (swap! input-state assoc-in [:inputs 0 :password] (.-value (.-target e)))
                                   (.log js/console (get-in @input-state [:inputs 0 :password]))))}]]

    [:button.reim {:type "button"
                   :on-click (fn [e]
                                (.log js/console "set recovery e-mail")
                                 (let [rec-email (get-in @input-state [:inputs 0 :recovery-email])
                                       user-as-stashed (get-in @input-state [:inputs 0 :current-user])
                                       pw (get-in @input-state [:inputs 0 :password])]


                                       (chsk-send! [:clientsent/recovery {:recovery-email rec-email
                                                                          :user-claim  user-as-stashed
                                                                          :password    pw}])

                                       ;clear input fields
                                       (swap! input-state assoc-in [:inputs 0 :recovery-email] "")
                                       (swap! input-state assoc-in [:inputs 0 :recovery-email-status] "")
                                       (swap! input-state assoc-in [:inputs 0 :password] "")))} "set recovery e-mail"]])

(rum/defcs set-password < rum/reactive
                       show-fresh [state ]
  [:form#setpasswordinput.si
   [:textarea#pwstatus
     { :readonly true
       :value (get-in @input-state [:inputs 0 :password-status])}]
   [:div.rezz "old password"
    [:input.reim
     {:placeholder ""
      :type "password"
      :value (get-in @input-state [:inputs 0 :change-pass-old-pw])
      :auto-complete "old-password"
      :on-change (fn [e] (do
                           (swap! input-state assoc-in [:inputs 0 :change-pass-old-pw] (.-value (.-target e)))
                           (.log js/console (get-in @input-state [:inputs 0 :change-pass-old-pw]))))}]
   [:div.rezz "new password:"
    [:input.reim
     {:placeholder ""
      :type "password"
      :value (get-in @input-state [:inputs 0 :change-pass-new-pw])
      :auto-complete "new password"
      :on-change (fn [e] (do
                           (swap! input-state assoc-in [:inputs 0 :change-pass-new-pw] (.-value (.-target e)))
                           (.log js/console (get-in @input-state [:inputs 0 :change-pass-new-pw]))))}]]

    [:div.rezz "new password confirm:"
     [:input.reim
      {:placeholder ""
       :type "password"
       :value (get-in @input-state [:inputs 0 :change-pass-new-pw2])
       :auto-complete "new password confirm"
       :on-change (fn [e] (do
                            (swap! input-state assoc-in [:inputs 0 :change-pass-new-pw2] (.-value (.-target e)))
                            (.log js/console (get-in @input-state [:inputs 0 :change-pass-new-pw2]))))}]]

    [:button.reim
      {:id "pwchang"
       :type "button"
       :on-click
         (fn [e]
           (.log js/console "update password")
           (swap! input-state assoc-in [:inputs 0 :password-status] "")
           (let [old-pw  (get-in @input-state [:inputs 0 :change-pass-old-pw])
                 new-pw  (get-in @input-state [:inputs 0 :change-pass-new-pw])
                 new-pw2 (get-in @input-state [:inputs 0 :change-pass-new-pw2])]
             (chsk-send! [:clientsent/password-change {:old old-pw
                                                     :new new-pw
                                                     :new2 new-pw2}])
             (swap! input-state assoc-in [:inputs 0 :change-pass-old-pw] "")
             (swap! input-state assoc-in [:inputs 0 :change-pass-new-pw] "")
             (swap! input-state assoc-in [:inputs 0 :change-pass-new-pw2] "")))} "set password"]]])


(rum/defcs support-nf < rum/reactive
                       show-fresh [state ]
  [:div
    [:div#supportnf "Thank you for participating in and contributing to Nonforum."]
    [:div#mission0 "Part of our mission at Nonforum is to further Humanity in significant ways."]
    [:div#mission1 "We are partnered with Horne Technologies to help them achieve parity-efficiency (100:100) with their new 5 Tesla reactor"]
    [:div#mission2 "In order to continue fusion research in 2019 we need to raise approximately $150,000."]
    [:div#mission3 "In order to create a power-generating reactor once we know how many Teslas of magnetic field we need and how to orient the field-generation devices, will require approximately $15 Million"]
    [:div#mission4 "Fusion will enable Humanity to harness the power of the stars."]
    [:div#mission5 "A fusion future would leave cities free of smog and free of adverse pollution in the air, water and earth."]
    [:div#mission6 "Our priority is funding fusion so that Humanity will become 100% green and sustainable as soon as possible."]
    [:div#mission7 "Please contribute whatever you can.  The suggested donation is $15.00"]])



(rum/defc post-comment-input < rum/reactive []
  [:form#postcommentinput
   [:textarea.fullwidth {:value (rum/react nf-comment)
                         :placeholder "let us be kind"
                         :on-change (fn [e] (do
                                              (reset! nf-comment (.-value (.-target e)))
                                              ;(.log js/console (get-in @input-state [:inputs 0 :comment]))
                                              ))
                         }]
   [:button.fullwidth {:type "button"
                       :class "replySelected"
                       :on-click (fn [e]
                                   (let [ parent-id (get-in @input-state [:inputs 0 :selected-parent])
                                          username (get-in @input-state [:inputs 0 :current-user])
                                          curr-tv (get-in @input-state [:inputs 0 :tv-curr-id])
                                          new-comment-map {
                                                          :id (swap! y inc);;;client does not provide canonical id
                                                          :contents @nf-comment
                                                          :author username
                                                          :comments []
                                                          :ratings-total 0
                                                          :number-of-ratings 0}
                                          submit-comment-map {
                                                          :contents @nf-comment
                                                          :parent-id parent-id
                                                          :curr-tv curr-tv
                                                          :author username}]

                                     (if (not (= "" @nf-comment))
                                       (chsk-send! [:clientsent/new-comment submit-comment-map]))
                                     (reset! nf-comment "")))} "Comment in reply to selected."]])


(rum/defc chat-area < rum/reactive []
  [:form {:id "chat_arena"}
   [:div.fullwidth {:id "chatchat"}
    (map (fn [chat-map] [:div {:class "msg"}
                         [:span {:class "msgauthor"} (get chat-map :author)]
                          (get chat-map :message)]) (rum/react nf-chat-messages))]
   [:input.fullwidth {:id "chatchatinput"
                      :value (rum/react nf-chat-input)
                      :on-change (fn [e] (reset! nf-chat-input (.-value (.-target e))))
                      :placeholder "chat chat"}]
   [:button.fullwidth {:id "chatchatsubmit"
                       :type "button"
                       :class "chatbutton"
                       :on-click (fn [e]
                                   (let [ username (get-in @input-state [:inputs 0 :current-user])
                                          new-chat-message-map {
                                                          :id (swap! y inc);;;client does not provide canonical id
                                                          :message @nf-chat-input
                                                          :author username}]

                                     (if (not (= "" @nf-chat-input))
                                       (chsk-send! [:clientsent/new-chat-message new-chat-message-map]))
                                     (reset! nf-chat-input "")))} "Send Message"]])

(rum/defc log-in-to-chat-pls []
  [:div {:id "pls"} "please log in to chat."])



(rum/defc footer []
  [:div#footer "Welcome to nonforum.  Here you will find real-time threads and discussion boards."
    [:div#foot1 "Nonforum is a place to start discussion threads based on questions or simply on a topic."]
    [:div#foot2 "Nonforum is also a place where you can share links and discuss them, voting contributions up or down."]
    [:div#foot3 "When you are logged in you can vote on entries with votes signifying double-plus (++), plus (+), and minus (-)"]
    [:div#foot4 "The more you participate, the greater your community trust rating."]
    [:div#foot5 "By providing insightful comments and furthering discussions, your community rating will increase."]
   ;[:div#foot6 "There are several media-types at nonforum: Articles, Topics, Questions+Discussions, as well as Books and Speeches."]
    [:div#foot7 "For complete information on how to use nonforum most effectively, please check out the "[:a {:href "/about"} "About Page"]]])


(rum/defcs about-fields < rum/reactive
                         show-fresh [state ]
  [:div#aboutnf
    [:div#about1.about "Nonforum is a realtime forum."]
    [:div#about2.about "Click on a news tile to see its details."]
    [:div#about3.about "To comment, click on the element you wish to comment on.  This can be another comment or the original news piece."]
    [:div#about4.about "A selected comment will be fig colored when selected."]
    [:div#about5.about "Voting is a natural right and you can vote on any submission or comment via trivote. There are three levels to the tri-vote, double-plus, plus, and minus.  These correlate roughly to the spectrum of 0-99 and eventually, after a threshold number of votes has been met, the dice will transform to a number likely landing between 30 and 99."]
    ;[:div#about6.about "Nonforum is built using ClojureScript (Rum for UI, Sente for Client/Server Sockets, and Accountant for page \"routing\")"]
    [:div#about6.about "We are helping to raise money for Fusion Research with Horne Technologies.  Fusion will bring us the pollution-free future rapidly into our presence.  Help humanity harness the power of the stars!  Donate today at "[:a {:href "/donate"} "nonforum.com/donate"]]
    [:img {:class "flyer" :src "nonforum_flyre.png"}]
]
  )

(rum/defc non-buzz-placeholder []
  [:div.nonbuzz "nonforum"])

(rum/defcs sponsored-message < rum/reactive
                              show-fresh [state ]
  [:div#spmsg "Help fund Horne Technologies in their next round of Fusion Research, a 5Tesla reactor " [:a {:href "donate"} "donate"]])

(rum/defc go-back-button []
  (let [active-state "all"]
    [:div.goback {:on-click (fn [e]
                              (do
                                (.stopPropagation e)
                                (accountant/navigate! "/")
                                (swap! input-state assoc-in [:inputs 0 :tv-current] "")
                                (swap! input-state assoc-in [:inputs 0 :tv-curr-id] "")))}
                                  "< Back to " active-state ]))

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

    (if-let [target-el (.getElementById js/document "output")]
       (if (= true logged-in)
         (set! (.-classList target-el) "hideMe")
         (set! (.-classList target-el) "justMounted")))
  [:div#maincontain



   (top-bar)

   (if (= true show-sidebar)
       (side-bar))

   (if  (= "/feedback" curr-view) (send-feedback-fields))

   (if  (= "/about" curr-view) (about-fields))

   (if  (= "/email-public" curr-view) (edit-profile))

   (if  (= "/profile" curr-view) (edit-profile))

   (if  (= "/email-recovery" curr-view) (set-recovery-email))

   (if  (= "/password-update" curr-view) (set-password))

   (if  (= "/submit" curr-view) (post-input))

   (if  (= "/donate" curr-view) (support-nf))

   (if  (= "/fusion" curr-view) (support-nf))

   (if  (= "/chat" curr-view)
     (if (= true logged-in)
       (chat-area)
       (log-in-to-chat-pls)))

   (if  (= "/login" curr-view)  (login-bar))

  ; top is currently pointing to "default"

   (if (= "/" curr-view)
     (if (not (empty? tv-current))
       (go-back-button)))

  (if (= "/" curr-view)
     (if (not (empty? tv-current))
       (sponsored-message)))

   (if (and (= "/" curr-view) (empty? tv-current))
      (television))

   ;active tv-cell
   (if (or (= "/" curr-view))
     (if (not (empty? tv-current))
       (tv-cell tv-current)))

   (if (or (= "/" curr-view))
    (if (not (empty? tv-current))
       (map render-item curr-comments)))

   (if (or (= "/" curr-view))
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


(defn swap-rating-fn
  [{v :blurbs :as nf} d]
  (assoc nf :blurbs
            (vec (for [entry v]
                   (if (= (:bid entry) (:bid d))
                     (merge entry d)
                     entry)))))

(defn swap-rating-active-blurb
  [{v :nf :as nf} d]
  (assoc nf :nf
            (vec (for [entry v]
                   (if (= (:active-blurb entry) (:bid d))
                     (merge entry d)
                     entry)))))


(defn ask-server-for-blurbs
  []

  ;;also ask for the specific current NFID
  (chsk-send! [:clientsent/req-all-blurbs  {:can-i-please-has-the "blurbs"}]
               3000 ;timeout
                (fn [blurb-core]
                  (if (sente/cb-success? blurb-core)
                    (do
                      (.log js/console "callback with blurbs rcevd")
                      (.log js/console ":cs/rab " blurb-core)
                      (reset! tv-state blurb-core)
                      (swap!  tv-state  vec)

                      (accountant/dispatch-current!)
                      (swap! tv-state #(sort-by :ratings-total %))))))) ;descending



(defn ask-server-for-comments
  []

  ;;also ask for the specific current NFID
  (chsk-send! [:clientsent/req-all-comments  {:can-i-please-has-the "comments"}]
               3000 ;timeout
                (fn [comments-core]
                  (if (sente/cb-success? comments-core)
                    (do
                      (.log js/console "callback with comments rcevd")
                      (.log js/console ":cs/rac " comments-core)

                      (reset! posts  comments-core)
                      (swap!  posts  vec))))))

(defn ask-server-for-chat-messages
  []

  ;;ask for /chat messages
  (chsk-send! [:clientsent/req-all-chat-messages  {:can-i-please-has-the "comments"}]
               3000 ;timeout
                (fn [chat-messages-core]
                  (if (sente/cb-success? chat-messages-core)
                    (do
                      (.log js/console "callback with chat messages rcevd")
                      (.log js/console ":cs/rac " chat-messages-core)

                      (reset! nf-chat-messages chat-messages-core)
                      (swap!  nf-chat-messages  vec))))))



(defn find-tv-item [pid]
  (swap! tv-state vec)
  (let [first-hit (->> @tv-state
                    (keep-indexed #(when (= pid (:id %2)) %1))
                     first)]
    (prn first-hit)
         first-hit))

(defn find-cm-item [pid]
  (swap! posts vec)
  (let [first-hit (->> @posts
                    (keep-indexed #(when (= pid (:id %2)) %1))
                     first)]
    (prn first-hit)
         first-hit))





(defn auto-login []
  (->output! "Attempting auto-login ...")
  (sente/ajax-lite "/check-login"
              {:method :post
               :timeout-ms 7000
               :headers {:X-CSRF-Token (:csrf-token @chsk-state)}
               :params {:uid           (get-item :uid)
                        :auth-token    (get-item :auth-key)
                        :login-time    (get-item :login-time)}
               :type :text}

              (fn [ajax-resp]
                (->output! (str "Auto-login response: " ajax-resp))
                (let [{:keys [success? ?status ?error ?content ?content-type]} ajax-resp
                      http-status (:?status ajax-resp)
                      auto-login-successful? (= 200 http-status)
                      stuff (cljs.reader/read-string ?content)]
                  (if-not auto-login-successful?
                    (do
                      (->output! "Auto-login failed")
                      (.log js/console "auto-login failed")
                      (swap! input-state assoc-in [:inputs 0 :logged-in] false))
                    (do
                       (->output! "Auto-login success!")
                       (.log js/console "auto-login success.")

                      ; (accountant/dispatch-current!)
                      ;assoc auth hash
                      (swap! input-state assoc-in [:inputs 0 :token] (get-item :auth-key))
                      (swap! input-state assoc-in [:inputs 0 :login-time] (get-item :login-time))
                      (swap! input-state assoc-in [:inputs 0 :logged-in] true)
                      (swap! input-state assoc-in [:inputs 0 :current-user] (get-item :uid)) ;'log user in' on client
                      (sente/chsk-reconnect! chsk)))))))



;;;; Sente event handlers

(defmulti -event-msg-handler
  "Multimethod to handle Sente `event-msg`s"
  :id ; Dispatch on event-id
  )



   ;;;    ;;;    ;;;        knowledge
  ;   ;  ;   ;  ;   ;     info
  ;   ;  ;   ;  ;   ; experience
  ;   ;   ;;;   ;   ;   forum
(defn event-msg-handler
  [{:keys [_ __ ?data]}]
  (.log js/console (str "&&" ?data ))
  (.log js/console (str "&! " (first ?data)))
  (let [event-title (first ?data)
        new-data (second ?data)]
    (cond
      (= false (:ever-opened? event-title))
        (do
          (auto-login)
          (.log js/console "Hey I'm trying to get new data yo, since :ever-opened? is false")
          (ask-server-for-blurbs)
          (ask-server-for-comments)
          (ask-server-for-chat-messages)
          )
      (= event-title :hello/client)
        (.log js/console (str "&# " new-data))

      (= event-title :serversent/blurb)
        (do
          (.log js/console (str "&# " new-data))
          (.log js/console "adding new blurb to atom ..")
          (swap! tv-state conj new-data)
          ;;Sort blurbs added to blurbset
         ; (swap! tv-state #(reverse (sort-by :number-of-ratings %))) ;descending
          (.log js/console "added new blurb to atom"))

      (= event-title :serversent/password-update-yes)
      (do
        (swap! input-state assoc-in [:inputs 0 :password-status] "Password changed successfully.")
        (.log js/console "password updated"))
        ;(set! (.-backgroundColor (.getElementById js/document "pwchang")) "green")

      (= event-title :serversent/password-update-no)
        (do
          (swap! input-state assoc-in [:inputs 0 :password-status] "Password not changed.")
          (.log js/console "password not affected."))
        ;(set! (.-backgroundColor (.getElementById js/document "pwchang")) "red")


      (= event-title :serversent/recovery-email-update-yes)
      (do
        (swap! input-state assoc-in [:inputs 0 :recovery-email-status] "Recovery email changed successfully.")
        (.log js/console "recovery email updated"))
        ;(set! (.-backgroundColor (.getElementById js/document "pwchang")) "green")

      (= event-title :serversent/recovery-email-update-no)
        (do
          (swap! input-state assoc-in [:inputs 0 :recovery-email-status] "Recovery email not changed.")
          (.log js/console "recovery email not affected."))
        ;(set! (.-backgroundColor (.getElementById js/document "pwchang")) "red")


      (= event-title :serversent/comment)
        (let [new-comment-map  new-data]
          (do
            (.log js/console (str "&# " new-comment-map))
            ;(swap! posts conj new-comment-map)
            (.log js/console (:parent-id new-comment-map) " parent-id is.")
            (.log js/console (str "pp z " (:parent-id new-comment-map)))


            (let [pid (:id new-comment-map)
                  parent-id (:parent-id new-comment-map)
                  seek-tv-state (find-tv-item parent-id)
                  seek-cm-state (find-cm-item parent-id)]

              ;add comment to posts atom
              (.log js/console "adding new comment to atom...")


              (swap! posts conj (assoc new-comment-map :ratings-total 0 :number-of-ratings 0 :comments [] :id pid))
              (.log js/console "added new comment to atom")

              ;check if the parent id is in tv-state or in comments atom
              ; and update the :comments [] vec accordingly

              (.log js/console "seek-tv " seek-tv-state)
              (.log js/console "seek-cm " seek-cm-state)
              (if (= nil seek-tv-state)
                (swap! posts update-in [seek-cm-state :comments] conj pid)
                ;        ;else
                (do
                  (swap! tv-state update-in [seek-tv-state :comments] conj pid)
                  (swap! input-state update-in [:inputs 0 :tv-comments] conj pid))))))

      (= event-title :serversent/new-chat-message)
        (let [new-chat-message-map  new-data]
          (do
            (.log js/console (str "&# " new-chat-message-map))

              ;add chat message to nf-chat atom
              (.log js/console "adding new chat message to atom...")


              (swap! nf-chat-messages conj new-chat-message-map)
              (swap! nf-chat-messages vec)
              (.log js/console "added new chat message to atom")))



      (= event-title :serversent/rating)
        (do
          (.log js/console (str "rating update.. " new-data))
          (let [ru-pid (:pid new-data)
                ru-ts  (:total-score new-data)
                ru-nor (:number-of-ratings new-data)
                ru-map {:pid ru-pid
                        :total-score ru-ts
                        :number-of-ratings ru-nor}]
            (.log js/console (str ru-pid  " " ru-ts " " ru-nor))
            ;seek map and update rating on clientside
            (let [seek-tv-state (find-tv-item ru-pid)
                  seek-cm-state (find-cm-item ru-pid)]
              (println "seek-tv " seek-tv-state)
              (println "seek-cm " seek-cm-state)
              (if (= nil seek-tv-state)
                (swap! posts    update seek-cm-state assoc :number-of-ratings ru-nor :ratings-total ru-ts)
                ;else
                (swap! tv-state update seek-tv-state assoc :number-of-ratings ru-nor :ratings-total ru-ts))))))))


;;;; Sente event loope

(defonce router_ (atom nil))
(defn  stop-router! [] (when-let [stop-f @router_] (stop-f)))
(defn start-router! []
  (stop-router!)
  (reset! router_
    (sente/start-client-chsk-router!
      ch-chsk event-msg-handler)))



(defn validate-email
  [email]
  (let [pattern #"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"]
    (and (string? email) (re-matches pattern email))))



;;;;;;;;;;;;;(if (not (empty? (get-item :auth-key)))


(.addEventListener
  js/window
  "DOMContentLoaded"
  (fn []
    (if (not (empty? (get-item :auth-key)))
      (do
        (swap! input-state assoc-in [:inputs 0 :token] (get-item :auth-key))
        (swap! input-state assoc-in [:inputs 0 :login-time] (get-item :login-time))
        (swap! input-state assoc-in [:inputs 0 :current-user] (get-item :uid))
        (swap! input-state assoc-in [:inputs 0 :logged-in] true)))))

(defn start! [] (start-router!))

(defonce _start-once (start!))
