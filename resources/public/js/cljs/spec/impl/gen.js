// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__26391__auto__,writer__26392__auto__,opt__26393__auto__){
return cljs.core._write.call(null,writer__26392__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34301 = arguments.length;
var i__26861__auto___34302 = (0);
while(true){
if((i__26861__auto___34302 < len__26860__auto___34301)){
args__26867__auto__.push((arguments[i__26861__auto___34302]));

var G__34303 = (i__26861__auto___34302 + (1));
i__26861__auto___34302 = G__34303;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq34300){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34300));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34305 = arguments.length;
var i__26861__auto___34306 = (0);
while(true){
if((i__26861__auto___34306 < len__26860__auto___34305)){
args__26867__auto__.push((arguments[i__26861__auto___34306]));

var G__34307 = (i__26861__auto___34306 + (1));
i__26861__auto___34306 = G__34307;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq34304){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34304));
});

var g_QMARK__34308 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_34309 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__34308){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__34308))
,null));
var mkg_34310 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__34308,g_34309){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__34308,g_34309))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__34308,g_34309,mkg_34310){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__34308).call(null,x);
});})(g_QMARK__34308,g_34309,mkg_34310))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__34308,g_34309,mkg_34310){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_34310).call(null,gfn);
});})(g_QMARK__34308,g_34309,mkg_34310))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__34308,g_34309,mkg_34310){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_34309).call(null,generator);
});})(g_QMARK__34308,g_34309,mkg_34310))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__34272__auto___34329 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__34272__auto___34329){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34330 = arguments.length;
var i__26861__auto___34331 = (0);
while(true){
if((i__26861__auto___34331 < len__26860__auto___34330)){
args__26867__auto__.push((arguments[i__26861__auto___34331]));

var G__34332 = (i__26861__auto___34331 + (1));
i__26861__auto___34331 = G__34332;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34272__auto___34329))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34272__auto___34329){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34272__auto___34329),args);
});})(g__34272__auto___34329))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__34272__auto___34329){
return (function (seq34311){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34311));
});})(g__34272__auto___34329))
;


var g__34272__auto___34333 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__34272__auto___34333){
return (function cljs$spec$impl$gen$list(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34334 = arguments.length;
var i__26861__auto___34335 = (0);
while(true){
if((i__26861__auto___34335 < len__26860__auto___34334)){
args__26867__auto__.push((arguments[i__26861__auto___34335]));

var G__34336 = (i__26861__auto___34335 + (1));
i__26861__auto___34335 = G__34336;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34272__auto___34333))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34272__auto___34333){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34272__auto___34333),args);
});})(g__34272__auto___34333))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__34272__auto___34333){
return (function (seq34312){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34312));
});})(g__34272__auto___34333))
;


var g__34272__auto___34337 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__34272__auto___34337){
return (function cljs$spec$impl$gen$map(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34338 = arguments.length;
var i__26861__auto___34339 = (0);
while(true){
if((i__26861__auto___34339 < len__26860__auto___34338)){
args__26867__auto__.push((arguments[i__26861__auto___34339]));

var G__34340 = (i__26861__auto___34339 + (1));
i__26861__auto___34339 = G__34340;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34272__auto___34337))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34272__auto___34337){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34272__auto___34337),args);
});})(g__34272__auto___34337))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__34272__auto___34337){
return (function (seq34313){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34313));
});})(g__34272__auto___34337))
;


var g__34272__auto___34341 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__34272__auto___34341){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34342 = arguments.length;
var i__26861__auto___34343 = (0);
while(true){
if((i__26861__auto___34343 < len__26860__auto___34342)){
args__26867__auto__.push((arguments[i__26861__auto___34343]));

var G__34344 = (i__26861__auto___34343 + (1));
i__26861__auto___34343 = G__34344;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34272__auto___34341))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34272__auto___34341){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34272__auto___34341),args);
});})(g__34272__auto___34341))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__34272__auto___34341){
return (function (seq34314){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34314));
});})(g__34272__auto___34341))
;


var g__34272__auto___34345 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__34272__auto___34345){
return (function cljs$spec$impl$gen$set(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34346 = arguments.length;
var i__26861__auto___34347 = (0);
while(true){
if((i__26861__auto___34347 < len__26860__auto___34346)){
args__26867__auto__.push((arguments[i__26861__auto___34347]));

var G__34348 = (i__26861__auto___34347 + (1));
i__26861__auto___34347 = G__34348;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34272__auto___34345))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34272__auto___34345){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34272__auto___34345),args);
});})(g__34272__auto___34345))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__34272__auto___34345){
return (function (seq34315){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34315));
});})(g__34272__auto___34345))
;


var g__34272__auto___34349 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__34272__auto___34349){
return (function cljs$spec$impl$gen$vector(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34350 = arguments.length;
var i__26861__auto___34351 = (0);
while(true){
if((i__26861__auto___34351 < len__26860__auto___34350)){
args__26867__auto__.push((arguments[i__26861__auto___34351]));

var G__34352 = (i__26861__auto___34351 + (1));
i__26861__auto___34351 = G__34352;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34272__auto___34349))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34272__auto___34349){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34272__auto___34349),args);
});})(g__34272__auto___34349))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__34272__auto___34349){
return (function (seq34316){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34316));
});})(g__34272__auto___34349))
;


var g__34272__auto___34353 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__34272__auto___34353){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34354 = arguments.length;
var i__26861__auto___34355 = (0);
while(true){
if((i__26861__auto___34355 < len__26860__auto___34354)){
args__26867__auto__.push((arguments[i__26861__auto___34355]));

var G__34356 = (i__26861__auto___34355 + (1));
i__26861__auto___34355 = G__34356;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34272__auto___34353))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34272__auto___34353){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34272__auto___34353),args);
});})(g__34272__auto___34353))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__34272__auto___34353){
return (function (seq34317){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34317));
});})(g__34272__auto___34353))
;


var g__34272__auto___34357 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__34272__auto___34357){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34358 = arguments.length;
var i__26861__auto___34359 = (0);
while(true){
if((i__26861__auto___34359 < len__26860__auto___34358)){
args__26867__auto__.push((arguments[i__26861__auto___34359]));

var G__34360 = (i__26861__auto___34359 + (1));
i__26861__auto___34359 = G__34360;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34272__auto___34357))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34272__auto___34357){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34272__auto___34357),args);
});})(g__34272__auto___34357))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__34272__auto___34357){
return (function (seq34318){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34318));
});})(g__34272__auto___34357))
;


var g__34272__auto___34361 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__34272__auto___34361){
return (function cljs$spec$impl$gen$elements(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34362 = arguments.length;
var i__26861__auto___34363 = (0);
while(true){
if((i__26861__auto___34363 < len__26860__auto___34362)){
args__26867__auto__.push((arguments[i__26861__auto___34363]));

var G__34364 = (i__26861__auto___34363 + (1));
i__26861__auto___34363 = G__34364;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34272__auto___34361))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34272__auto___34361){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34272__auto___34361),args);
});})(g__34272__auto___34361))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__34272__auto___34361){
return (function (seq34319){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34319));
});})(g__34272__auto___34361))
;


var g__34272__auto___34365 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__34272__auto___34365){
return (function cljs$spec$impl$gen$bind(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34366 = arguments.length;
var i__26861__auto___34367 = (0);
while(true){
if((i__26861__auto___34367 < len__26860__auto___34366)){
args__26867__auto__.push((arguments[i__26861__auto___34367]));

var G__34368 = (i__26861__auto___34367 + (1));
i__26861__auto___34367 = G__34368;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34272__auto___34365))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34272__auto___34365){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34272__auto___34365),args);
});})(g__34272__auto___34365))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__34272__auto___34365){
return (function (seq34320){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34320));
});})(g__34272__auto___34365))
;


var g__34272__auto___34369 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__34272__auto___34369){
return (function cljs$spec$impl$gen$choose(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34370 = arguments.length;
var i__26861__auto___34371 = (0);
while(true){
if((i__26861__auto___34371 < len__26860__auto___34370)){
args__26867__auto__.push((arguments[i__26861__auto___34371]));

var G__34372 = (i__26861__auto___34371 + (1));
i__26861__auto___34371 = G__34372;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34272__auto___34369))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34272__auto___34369){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34272__auto___34369),args);
});})(g__34272__auto___34369))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__34272__auto___34369){
return (function (seq34321){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34321));
});})(g__34272__auto___34369))
;


var g__34272__auto___34373 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__34272__auto___34373){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34374 = arguments.length;
var i__26861__auto___34375 = (0);
while(true){
if((i__26861__auto___34375 < len__26860__auto___34374)){
args__26867__auto__.push((arguments[i__26861__auto___34375]));

var G__34376 = (i__26861__auto___34375 + (1));
i__26861__auto___34375 = G__34376;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34272__auto___34373))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34272__auto___34373){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34272__auto___34373),args);
});})(g__34272__auto___34373))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__34272__auto___34373){
return (function (seq34322){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34322));
});})(g__34272__auto___34373))
;


var g__34272__auto___34377 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__34272__auto___34377){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34378 = arguments.length;
var i__26861__auto___34379 = (0);
while(true){
if((i__26861__auto___34379 < len__26860__auto___34378)){
args__26867__auto__.push((arguments[i__26861__auto___34379]));

var G__34380 = (i__26861__auto___34379 + (1));
i__26861__auto___34379 = G__34380;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34272__auto___34377))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34272__auto___34377){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34272__auto___34377),args);
});})(g__34272__auto___34377))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__34272__auto___34377){
return (function (seq34323){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34323));
});})(g__34272__auto___34377))
;


var g__34272__auto___34381 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__34272__auto___34381){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34382 = arguments.length;
var i__26861__auto___34383 = (0);
while(true){
if((i__26861__auto___34383 < len__26860__auto___34382)){
args__26867__auto__.push((arguments[i__26861__auto___34383]));

var G__34384 = (i__26861__auto___34383 + (1));
i__26861__auto___34383 = G__34384;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34272__auto___34381))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34272__auto___34381){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34272__auto___34381),args);
});})(g__34272__auto___34381))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__34272__auto___34381){
return (function (seq34324){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34324));
});})(g__34272__auto___34381))
;


var g__34272__auto___34385 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__34272__auto___34385){
return (function cljs$spec$impl$gen$sample(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34386 = arguments.length;
var i__26861__auto___34387 = (0);
while(true){
if((i__26861__auto___34387 < len__26860__auto___34386)){
args__26867__auto__.push((arguments[i__26861__auto___34387]));

var G__34388 = (i__26861__auto___34387 + (1));
i__26861__auto___34387 = G__34388;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34272__auto___34385))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34272__auto___34385){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34272__auto___34385),args);
});})(g__34272__auto___34385))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__34272__auto___34385){
return (function (seq34325){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34325));
});})(g__34272__auto___34385))
;


var g__34272__auto___34389 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__34272__auto___34389){
return (function cljs$spec$impl$gen$return(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34390 = arguments.length;
var i__26861__auto___34391 = (0);
while(true){
if((i__26861__auto___34391 < len__26860__auto___34390)){
args__26867__auto__.push((arguments[i__26861__auto___34391]));

var G__34392 = (i__26861__auto___34391 + (1));
i__26861__auto___34391 = G__34392;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34272__auto___34389))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34272__auto___34389){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34272__auto___34389),args);
});})(g__34272__auto___34389))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__34272__auto___34389){
return (function (seq34326){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34326));
});})(g__34272__auto___34389))
;


var g__34272__auto___34393 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__34272__auto___34393){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34394 = arguments.length;
var i__26861__auto___34395 = (0);
while(true){
if((i__26861__auto___34395 < len__26860__auto___34394)){
args__26867__auto__.push((arguments[i__26861__auto___34395]));

var G__34396 = (i__26861__auto___34395 + (1));
i__26861__auto___34395 = G__34396;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34272__auto___34393))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34272__auto___34393){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34272__auto___34393),args);
});})(g__34272__auto___34393))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__34272__auto___34393){
return (function (seq34327){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34327));
});})(g__34272__auto___34393))
;


var g__34272__auto___34397 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__34272__auto___34397){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34398 = arguments.length;
var i__26861__auto___34399 = (0);
while(true){
if((i__26861__auto___34399 < len__26860__auto___34398)){
args__26867__auto__.push((arguments[i__26861__auto___34399]));

var G__34400 = (i__26861__auto___34399 + (1));
i__26861__auto___34399 = G__34400;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34272__auto___34397))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34272__auto___34397){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34272__auto___34397),args);
});})(g__34272__auto___34397))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__34272__auto___34397){
return (function (seq34328){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34328));
});})(g__34272__auto___34397))
;

var g__34285__auto___34422 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__34285__auto___34422){
return (function cljs$spec$impl$gen$any(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34423 = arguments.length;
var i__26861__auto___34424 = (0);
while(true){
if((i__26861__auto___34424 < len__26860__auto___34423)){
args__26867__auto__.push((arguments[i__26861__auto___34424]));

var G__34425 = (i__26861__auto___34424 + (1));
i__26861__auto___34424 = G__34425;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34285__auto___34422))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34285__auto___34422){
return (function (args){
return cljs.core.deref.call(null,g__34285__auto___34422);
});})(g__34285__auto___34422))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__34285__auto___34422){
return (function (seq34401){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34401));
});})(g__34285__auto___34422))
;


var g__34285__auto___34426 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__34285__auto___34426){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34427 = arguments.length;
var i__26861__auto___34428 = (0);
while(true){
if((i__26861__auto___34428 < len__26860__auto___34427)){
args__26867__auto__.push((arguments[i__26861__auto___34428]));

var G__34429 = (i__26861__auto___34428 + (1));
i__26861__auto___34428 = G__34429;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34285__auto___34426))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34285__auto___34426){
return (function (args){
return cljs.core.deref.call(null,g__34285__auto___34426);
});})(g__34285__auto___34426))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__34285__auto___34426){
return (function (seq34402){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34402));
});})(g__34285__auto___34426))
;


var g__34285__auto___34430 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__34285__auto___34430){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34431 = arguments.length;
var i__26861__auto___34432 = (0);
while(true){
if((i__26861__auto___34432 < len__26860__auto___34431)){
args__26867__auto__.push((arguments[i__26861__auto___34432]));

var G__34433 = (i__26861__auto___34432 + (1));
i__26861__auto___34432 = G__34433;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34285__auto___34430))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34285__auto___34430){
return (function (args){
return cljs.core.deref.call(null,g__34285__auto___34430);
});})(g__34285__auto___34430))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__34285__auto___34430){
return (function (seq34403){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34403));
});})(g__34285__auto___34430))
;


var g__34285__auto___34434 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__34285__auto___34434){
return (function cljs$spec$impl$gen$char(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34435 = arguments.length;
var i__26861__auto___34436 = (0);
while(true){
if((i__26861__auto___34436 < len__26860__auto___34435)){
args__26867__auto__.push((arguments[i__26861__auto___34436]));

var G__34437 = (i__26861__auto___34436 + (1));
i__26861__auto___34436 = G__34437;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34285__auto___34434))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34285__auto___34434){
return (function (args){
return cljs.core.deref.call(null,g__34285__auto___34434);
});})(g__34285__auto___34434))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__34285__auto___34434){
return (function (seq34404){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34404));
});})(g__34285__auto___34434))
;


var g__34285__auto___34438 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__34285__auto___34438){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34439 = arguments.length;
var i__26861__auto___34440 = (0);
while(true){
if((i__26861__auto___34440 < len__26860__auto___34439)){
args__26867__auto__.push((arguments[i__26861__auto___34440]));

var G__34441 = (i__26861__auto___34440 + (1));
i__26861__auto___34440 = G__34441;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34285__auto___34438))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34285__auto___34438){
return (function (args){
return cljs.core.deref.call(null,g__34285__auto___34438);
});})(g__34285__auto___34438))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__34285__auto___34438){
return (function (seq34405){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34405));
});})(g__34285__auto___34438))
;


var g__34285__auto___34442 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__34285__auto___34442){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34443 = arguments.length;
var i__26861__auto___34444 = (0);
while(true){
if((i__26861__auto___34444 < len__26860__auto___34443)){
args__26867__auto__.push((arguments[i__26861__auto___34444]));

var G__34445 = (i__26861__auto___34444 + (1));
i__26861__auto___34444 = G__34445;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34285__auto___34442))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34285__auto___34442){
return (function (args){
return cljs.core.deref.call(null,g__34285__auto___34442);
});})(g__34285__auto___34442))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__34285__auto___34442){
return (function (seq34406){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34406));
});})(g__34285__auto___34442))
;


var g__34285__auto___34446 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__34285__auto___34446){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34447 = arguments.length;
var i__26861__auto___34448 = (0);
while(true){
if((i__26861__auto___34448 < len__26860__auto___34447)){
args__26867__auto__.push((arguments[i__26861__auto___34448]));

var G__34449 = (i__26861__auto___34448 + (1));
i__26861__auto___34448 = G__34449;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34285__auto___34446))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34285__auto___34446){
return (function (args){
return cljs.core.deref.call(null,g__34285__auto___34446);
});})(g__34285__auto___34446))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__34285__auto___34446){
return (function (seq34407){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34407));
});})(g__34285__auto___34446))
;


var g__34285__auto___34450 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__34285__auto___34450){
return (function cljs$spec$impl$gen$double(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34451 = arguments.length;
var i__26861__auto___34452 = (0);
while(true){
if((i__26861__auto___34452 < len__26860__auto___34451)){
args__26867__auto__.push((arguments[i__26861__auto___34452]));

var G__34453 = (i__26861__auto___34452 + (1));
i__26861__auto___34452 = G__34453;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34285__auto___34450))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34285__auto___34450){
return (function (args){
return cljs.core.deref.call(null,g__34285__auto___34450);
});})(g__34285__auto___34450))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__34285__auto___34450){
return (function (seq34408){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34408));
});})(g__34285__auto___34450))
;


var g__34285__auto___34454 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__34285__auto___34454){
return (function cljs$spec$impl$gen$int(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34455 = arguments.length;
var i__26861__auto___34456 = (0);
while(true){
if((i__26861__auto___34456 < len__26860__auto___34455)){
args__26867__auto__.push((arguments[i__26861__auto___34456]));

var G__34457 = (i__26861__auto___34456 + (1));
i__26861__auto___34456 = G__34457;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34285__auto___34454))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34285__auto___34454){
return (function (args){
return cljs.core.deref.call(null,g__34285__auto___34454);
});})(g__34285__auto___34454))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__34285__auto___34454){
return (function (seq34409){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34409));
});})(g__34285__auto___34454))
;


var g__34285__auto___34458 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__34285__auto___34458){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34459 = arguments.length;
var i__26861__auto___34460 = (0);
while(true){
if((i__26861__auto___34460 < len__26860__auto___34459)){
args__26867__auto__.push((arguments[i__26861__auto___34460]));

var G__34461 = (i__26861__auto___34460 + (1));
i__26861__auto___34460 = G__34461;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34285__auto___34458))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34285__auto___34458){
return (function (args){
return cljs.core.deref.call(null,g__34285__auto___34458);
});})(g__34285__auto___34458))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__34285__auto___34458){
return (function (seq34410){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34410));
});})(g__34285__auto___34458))
;


var g__34285__auto___34462 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__34285__auto___34462){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34463 = arguments.length;
var i__26861__auto___34464 = (0);
while(true){
if((i__26861__auto___34464 < len__26860__auto___34463)){
args__26867__auto__.push((arguments[i__26861__auto___34464]));

var G__34465 = (i__26861__auto___34464 + (1));
i__26861__auto___34464 = G__34465;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34285__auto___34462))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34285__auto___34462){
return (function (args){
return cljs.core.deref.call(null,g__34285__auto___34462);
});})(g__34285__auto___34462))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__34285__auto___34462){
return (function (seq34411){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34411));
});})(g__34285__auto___34462))
;


var g__34285__auto___34466 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__34285__auto___34466){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34467 = arguments.length;
var i__26861__auto___34468 = (0);
while(true){
if((i__26861__auto___34468 < len__26860__auto___34467)){
args__26867__auto__.push((arguments[i__26861__auto___34468]));

var G__34469 = (i__26861__auto___34468 + (1));
i__26861__auto___34468 = G__34469;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34285__auto___34466))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34285__auto___34466){
return (function (args){
return cljs.core.deref.call(null,g__34285__auto___34466);
});})(g__34285__auto___34466))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__34285__auto___34466){
return (function (seq34412){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34412));
});})(g__34285__auto___34466))
;


var g__34285__auto___34470 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__34285__auto___34470){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34471 = arguments.length;
var i__26861__auto___34472 = (0);
while(true){
if((i__26861__auto___34472 < len__26860__auto___34471)){
args__26867__auto__.push((arguments[i__26861__auto___34472]));

var G__34473 = (i__26861__auto___34472 + (1));
i__26861__auto___34472 = G__34473;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34285__auto___34470))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34285__auto___34470){
return (function (args){
return cljs.core.deref.call(null,g__34285__auto___34470);
});})(g__34285__auto___34470))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__34285__auto___34470){
return (function (seq34413){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34413));
});})(g__34285__auto___34470))
;


var g__34285__auto___34474 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__34285__auto___34474){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34475 = arguments.length;
var i__26861__auto___34476 = (0);
while(true){
if((i__26861__auto___34476 < len__26860__auto___34475)){
args__26867__auto__.push((arguments[i__26861__auto___34476]));

var G__34477 = (i__26861__auto___34476 + (1));
i__26861__auto___34476 = G__34477;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34285__auto___34474))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34285__auto___34474){
return (function (args){
return cljs.core.deref.call(null,g__34285__auto___34474);
});})(g__34285__auto___34474))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__34285__auto___34474){
return (function (seq34414){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34414));
});})(g__34285__auto___34474))
;


var g__34285__auto___34478 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__34285__auto___34478){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34479 = arguments.length;
var i__26861__auto___34480 = (0);
while(true){
if((i__26861__auto___34480 < len__26860__auto___34479)){
args__26867__auto__.push((arguments[i__26861__auto___34480]));

var G__34481 = (i__26861__auto___34480 + (1));
i__26861__auto___34480 = G__34481;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34285__auto___34478))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34285__auto___34478){
return (function (args){
return cljs.core.deref.call(null,g__34285__auto___34478);
});})(g__34285__auto___34478))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__34285__auto___34478){
return (function (seq34415){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34415));
});})(g__34285__auto___34478))
;


var g__34285__auto___34482 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__34285__auto___34482){
return (function cljs$spec$impl$gen$string(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34483 = arguments.length;
var i__26861__auto___34484 = (0);
while(true){
if((i__26861__auto___34484 < len__26860__auto___34483)){
args__26867__auto__.push((arguments[i__26861__auto___34484]));

var G__34485 = (i__26861__auto___34484 + (1));
i__26861__auto___34484 = G__34485;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34285__auto___34482))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34285__auto___34482){
return (function (args){
return cljs.core.deref.call(null,g__34285__auto___34482);
});})(g__34285__auto___34482))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__34285__auto___34482){
return (function (seq34416){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34416));
});})(g__34285__auto___34482))
;


var g__34285__auto___34486 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__34285__auto___34486){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34487 = arguments.length;
var i__26861__auto___34488 = (0);
while(true){
if((i__26861__auto___34488 < len__26860__auto___34487)){
args__26867__auto__.push((arguments[i__26861__auto___34488]));

var G__34489 = (i__26861__auto___34488 + (1));
i__26861__auto___34488 = G__34489;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34285__auto___34486))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34285__auto___34486){
return (function (args){
return cljs.core.deref.call(null,g__34285__auto___34486);
});})(g__34285__auto___34486))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__34285__auto___34486){
return (function (seq34417){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34417));
});})(g__34285__auto___34486))
;


var g__34285__auto___34490 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__34285__auto___34490){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34491 = arguments.length;
var i__26861__auto___34492 = (0);
while(true){
if((i__26861__auto___34492 < len__26860__auto___34491)){
args__26867__auto__.push((arguments[i__26861__auto___34492]));

var G__34493 = (i__26861__auto___34492 + (1));
i__26861__auto___34492 = G__34493;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34285__auto___34490))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34285__auto___34490){
return (function (args){
return cljs.core.deref.call(null,g__34285__auto___34490);
});})(g__34285__auto___34490))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__34285__auto___34490){
return (function (seq34418){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34418));
});})(g__34285__auto___34490))
;


var g__34285__auto___34494 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__34285__auto___34494){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34495 = arguments.length;
var i__26861__auto___34496 = (0);
while(true){
if((i__26861__auto___34496 < len__26860__auto___34495)){
args__26867__auto__.push((arguments[i__26861__auto___34496]));

var G__34497 = (i__26861__auto___34496 + (1));
i__26861__auto___34496 = G__34497;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34285__auto___34494))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34285__auto___34494){
return (function (args){
return cljs.core.deref.call(null,g__34285__auto___34494);
});})(g__34285__auto___34494))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__34285__auto___34494){
return (function (seq34419){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34419));
});})(g__34285__auto___34494))
;


var g__34285__auto___34498 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__34285__auto___34498){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34499 = arguments.length;
var i__26861__auto___34500 = (0);
while(true){
if((i__26861__auto___34500 < len__26860__auto___34499)){
args__26867__auto__.push((arguments[i__26861__auto___34500]));

var G__34501 = (i__26861__auto___34500 + (1));
i__26861__auto___34500 = G__34501;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34285__auto___34498))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34285__auto___34498){
return (function (args){
return cljs.core.deref.call(null,g__34285__auto___34498);
});})(g__34285__auto___34498))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__34285__auto___34498){
return (function (seq34420){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34420));
});})(g__34285__auto___34498))
;


var g__34285__auto___34502 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__34285__auto___34502){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34503 = arguments.length;
var i__26861__auto___34504 = (0);
while(true){
if((i__26861__auto___34504 < len__26860__auto___34503)){
args__26867__auto__.push((arguments[i__26861__auto___34504]));

var G__34505 = (i__26861__auto___34504 + (1));
i__26861__auto___34504 = G__34505;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});})(g__34285__auto___34502))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34285__auto___34502){
return (function (args){
return cljs.core.deref.call(null,g__34285__auto___34502);
});})(g__34285__auto___34502))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__34285__auto___34502){
return (function (seq34421){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34421));
});})(g__34285__auto___34502))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__26867__auto__ = [];
var len__26860__auto___34508 = arguments.length;
var i__26861__auto___34509 = (0);
while(true){
if((i__26861__auto___34509 < len__26860__auto___34508)){
args__26867__auto__.push((arguments[i__26861__auto___34509]));

var G__34510 = (i__26861__auto___34509 + (1));
i__26861__auto___34509 = G__34510;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__34506_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__34506_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq34507){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34507));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__34511_SHARP_){
return (new Date(p1__34511_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1543549045229