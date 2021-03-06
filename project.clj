(defproject nesferado "0.0.0.0.0.0.0.1.11.0.9"
  :description "Nonforum Nesferado"
  :url "https://github.com/sova/nesferado"
  :license {:description "All rights reserved." }
  :min-lein-version "2.3.3"
  :global-vars {*warn-on-reflection* false
                *assert* false}

  :dependencies
  [[org.clojure/clojure       "1.8.0"]
   [org.clojure/clojurescript "1.9.229"]
   [org.clojure/core.async    "0.2.395"]
   [com.taoensso/sente        "1.11.0"] ; <--- Sente

   [rum "0.11.3"]; :exclusions [cljsjs/react cljsjs/react-dom sablono]]
   [alandipert/storage-atom "1.2.4"]
   [crypto-password "0.2.0"]
   [cljs-ajax "0.7.5"]
   [com.cemerick/url "0.1.1"]
   [duratom "0.3.3"] ;production server likes this one best
   [venantius/accountant "0.2.4"]

   [http-kit                             "2.2.0"] ; Default
   [ring                      "1.5.0"]
   [ring/ring-defaults        "0.2.1"] ; Includes `ring-anti-forgery`, etc.
   [compojure                 "1.5.1"]
   [com.cognitect/transit-clj  "0.8.290"]
   [com.cognitect/transit-cljs "0.8.239"]]

  :plugins
  [[lein-pprint         "1.1.2"]
   [lein-cljsbuild      "1.1.4"]]

  :cljsbuild
  {:builds
   [{:id :cljs-client
     :source-paths ["src"]
     :figwheel {:on-jsload nesferado.client/js-reload}


     :compiler {:output-to "resources/public/js/nesferado.js"
                :output-dir "resources/public/js/"
                :main nesferado.client
                :asset-path "js/"
                :optimizations :advanced
                :pretty-print true}}]}

  :main nesferado.server

  ;; Call `lein start-repl` to get a (headless) development repl that you can
  ;; connect to with Cider+emacs or your IDE of choice:
  :aliases
  {"start-repl" ["do" "clean," "cljsbuild" "once," "repl" ":headless"]
   "start"      ["do" "clean," "cljsbuild" "once," "run"]
   "nojs"       ["run"]
   "js"         ["do" "cljsbuild" "once," "run"]}

  :profiles {:dev {:dependecies []}}
  :repositories
  {"sonatype-oss-public" "https://oss.sonatype.org/content/groups/public/"})
