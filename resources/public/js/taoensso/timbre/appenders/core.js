// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.timbre.appenders.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.encore');
/**
 * Returns a simple `println` appender for Clojure/Script.
 *   Use with ClojureScript requires that `cljs.core/*print-fn*` be set.
 * 
 *   :stream (clj only) - e/o #{:auto :*out* :*err* :std-err :std-out <io-stream>}.
 */
taoensso.timbre.appenders.core.println_appender = (function taoensso$timbre$appenders$core$println_appender(var_args){
var args__7461__auto__ = [];
var len__7454__auto___33143 = arguments.length;
var i__7455__auto___33144 = (0);
while(true){
if((i__7455__auto___33144 < len__7454__auto___33143)){
args__7461__auto__.push((arguments[i__7455__auto___33144]));

var G__33145 = (i__7455__auto___33144 + (1));
i__7455__auto___33144 = G__33145;
continue;
} else {
}
break;
}

var argseq__7462__auto__ = ((((0) < args__7461__auto__.length))?(new cljs.core.IndexedSeq(args__7461__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__7462__auto__);
});

taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__33137){
var vec__33138 = p__33137;
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33138,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$enabled_QMARK_,true,cljs.core.cst$kw$async_QMARK_,false,cljs.core.cst$kw$min_DASH_level,null,cljs.core.cst$kw$rate_DASH_limit,null,cljs.core.cst$kw$output_DASH_fn,cljs.core.cst$kw$inherit,cljs.core.cst$kw$fn,((function (vec__33138,_opts){
return (function (data){
var map__33141 = data;
var map__33141__$1 = ((((!((map__33141 == null)))?((((map__33141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33141):map__33141);
var output_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33141__$1,cljs.core.cst$kw$output_);
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.force(output_)], 0));
});})(vec__33138,_opts))
], null);
});

taoensso.timbre.appenders.core.println_appender.cljs$lang$maxFixedArity = (0);

taoensso.timbre.appenders.core.println_appender.cljs$lang$applyTo = (function (seq33136){
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33136));
});

/**
 * Returns a simple js/console appender for ClojureScript.
 * 
 *   For accurate line numbers in Chrome, add these Blackbox[1] patterns:
 *  `/taoensso/timbre/appenders/core\.js$`
 *  `/taoensso/timbre\.js$`
 *  `/cljs/core\.js$`
 * 
 *   [1] Ref. https://goo.gl/ZejSvR
 */
taoensso.timbre.appenders.core.console_appender = (function taoensso$timbre$appenders$core$console_appender(var_args){
var args__7461__auto__ = [];
var len__7454__auto___33153 = arguments.length;
var i__7455__auto___33154 = (0);
while(true){
if((i__7455__auto___33154 < len__7454__auto___33153)){
args__7461__auto__.push((arguments[i__7455__auto___33154]));

var G__33155 = (i__7455__auto___33154 + (1));
i__7455__auto___33154 = G__33155;
continue;
} else {
}
break;
}

var argseq__7462__auto__ = ((((0) < args__7461__auto__.length))?(new cljs.core.IndexedSeq(args__7461__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__7462__auto__);
});

taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__33147){
var vec__33148 = p__33147;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33148,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$enabled_QMARK_,true,cljs.core.cst$kw$async_QMARK_,false,cljs.core.cst$kw$min_DASH_level,null,cljs.core.cst$kw$rate_DASH_limit,null,cljs.core.cst$kw$output_DASH_fn,cljs.core.cst$kw$inherit,cljs.core.cst$kw$fn,((typeof console !== 'undefined')?(function (){var level__GT_logger = ((function (vec__33148,opts){
return (function (level){
var or__6383__auto__ = (function (){var G__33152 = (((level instanceof cljs.core.Keyword))?level.fqn:null);
switch (G__33152) {
case "trace":
return console.trace;

break;
case "debug":
return console.debug;

break;
case "info":
return console.info;

break;
case "warn":
return console.warn;

break;
case "error":
return console.error;

break;
case "fatal":
return console.error;

break;
case "report":
return console.info;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(level)].join('')));

}
})();
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
return console.log;
}
});})(vec__33148,opts))
;
return ((function (level__GT_logger,vec__33148,opts){
return (function (data){
var temp__4657__auto__ = level__GT_logger(cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(temp__4657__auto__)){
var logger = temp__4657__auto__;
if(cljs.core.truth_((function (){var or__6383__auto__ = cljs.core.cst$kw$raw_DASH_console_QMARK_.cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_QMARK_meta,cljs.core.cst$kw$raw_DASH_console_QMARK_], null));
}
})())){
var output = cljs.core.cst$kw$output_DASH_fn.cljs$core$IFn$_invoke$arity$1(data).call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.cst$kw$msg_,"",cljs.core.array_seq([cljs.core.cst$kw$_QMARK_err,null], 0)));
var args = cljs.core.cons(output,cljs.core.cons(cljs.core.cst$kw$_QMARK_err.cljs$core$IFn$_invoke$arity$1(data),cljs.core.cst$kw$vargs.cljs$core$IFn$_invoke$arity$1(data)));
return logger.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
} else {
return logger.call(console,cljs.core.force(cljs.core.cst$kw$output_.cljs$core$IFn$_invoke$arity$1(data)));
}
} else {
return null;
}
});
;})(level__GT_logger,vec__33148,opts))
})():((function (vec__33148,opts){
return (function (data){
return null;
});})(vec__33148,opts))
)], null);
});

taoensso.timbre.appenders.core.console_appender.cljs$lang$maxFixedArity = (0);

taoensso.timbre.appenders.core.console_appender.cljs$lang$applyTo = (function (seq33146){
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33146));
});

/**
 * DEPRECATED
 */
taoensso.timbre.appenders.core.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;
