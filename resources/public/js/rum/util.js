// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('rum.util');
goog.require('cljs.core');
rum.util.collect = (function rum$util$collect(key,mixins){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
}),mixins));
});
rum.util.collect_STAR_ = (function rum$util$collect_STAR_(keys,mixins){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (m){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
}),keys);
}),cljs.core.array_seq([mixins], 0)));
});
rum.util.call_all = (function rum$util$call_all(var_args){
var args__7461__auto__ = [];
var len__7454__auto___29210 = arguments.length;
var i__7455__auto___29211 = (0);
while(true){
if((i__7455__auto___29211 < len__7454__auto___29210)){
args__7461__auto__.push((arguments[i__7455__auto___29211]));

var G__29212 = (i__7455__auto___29211 + (1));
i__7455__auto___29211 = G__29212;
continue;
} else {
}
break;
}

var argseq__7462__auto__ = ((((2) < args__7461__auto__.length))?(new cljs.core.IndexedSeq(args__7461__auto__.slice((2)),(0),null)):null);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7462__auto__);
});

rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,fn){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fn,state__$1,args);
}),state,fns);
});

rum.util.call_all.cljs$lang$maxFixedArity = (2);

rum.util.call_all.cljs$lang$applyTo = (function (seq29207){
var G__29208 = cljs.core.first(seq29207);
var seq29207__$1 = cljs.core.next(seq29207);
var G__29209 = cljs.core.first(seq29207__$1);
var seq29207__$2 = cljs.core.next(seq29207__$1);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(G__29208,G__29209,seq29207__$2);
});

