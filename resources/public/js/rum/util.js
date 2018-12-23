// Compiled by ClojureScript 1.9.229 {}
goog.provide('rum.util');
goog.require('cljs.core');
rum.util.collect = (function rum$util$collect(key,mixins){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (m){
return cljs.core.get.call(null,m,key);
}),mixins));
});
rum.util.collect_STAR_ = (function rum$util$collect_STAR_(keys,mixins){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.mapcat.call(null,(function (m){
return cljs.core.map.call(null,(function (k){
return cljs.core.get.call(null,m,k);
}),keys);
}),mixins));
});
rum.util.call_all = (function rum$util$call_all(var_args){
var args__9671__auto__ = [];
var len__9664__auto___24899 = arguments.length;
var i__9665__auto___24900 = (0);
while(true){
if((i__9665__auto___24900 < len__9664__auto___24899)){
args__9671__auto__.push((arguments[i__9665__auto___24900]));

var G__24901 = (i__9665__auto___24900 + (1));
i__9665__auto___24900 = G__24901;
continue;
} else {
}
break;
}

var argseq__9672__auto__ = ((((2) < args__9671__auto__.length))?(new cljs.core.IndexedSeq(args__9671__auto__.slice((2)),(0),null)):null);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9672__auto__);
});

rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.call(null,(function (state__$1,fn){
return cljs.core.apply.call(null,fn,state__$1,args);
}),state,fns);
});

rum.util.call_all.cljs$lang$maxFixedArity = (2);

rum.util.call_all.cljs$lang$applyTo = (function (seq24896){
var G__24897 = cljs.core.first.call(null,seq24896);
var seq24896__$1 = cljs.core.next.call(null,seq24896);
var G__24898 = cljs.core.first.call(null,seq24896__$1);
var seq24896__$2 = cljs.core.next.call(null,seq24896__$1);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(G__24897,G__24898,seq24896__$2);
});


//# sourceMappingURL=util.js.map