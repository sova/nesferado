// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('rum.cursor');
goog.require('goog.object');
goog.require('rum.derived_atom');
goog.require('sablono.core');
goog.require('rum.util');
/**
 * Given React component, returns Rum state associated with it.
 */
rum.core.state = (function rum$core$state(comp){
var G__29217 = comp.state;
var G__29218 = ":rum/state";
return goog.object.get(G__29217,G__29218);
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__29237 = cljs.core.seq(props);
var chunk__29239 = null;
var count__29240 = (0);
var i__29241 = (0);
while(true){
if((i__29241 < count__29240)){
var vec__29243 = chunk__29239.cljs$core$IIndexed$_nth$arity$2(null,i__29241);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29243,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29243,(1),null);
if(cljs.core.some_QMARK_(v)){
var G__29246_29255 = obj;
var G__29247_29256 = cljs.core.name(k);
var G__29248_29257 = cljs.core.clj__GT_js(v);
goog.object.set(G__29246_29255,G__29247_29256,G__29248_29257);

var G__29258 = seq__29237;
var G__29259 = chunk__29239;
var G__29260 = count__29240;
var G__29261 = (i__29241 + (1));
seq__29237 = G__29258;
chunk__29239 = G__29259;
count__29240 = G__29260;
i__29241 = G__29261;
continue;
} else {
var G__29262 = seq__29237;
var G__29263 = chunk__29239;
var G__29264 = count__29240;
var G__29265 = (i__29241 + (1));
seq__29237 = G__29262;
chunk__29239 = G__29263;
count__29240 = G__29264;
i__29241 = G__29265;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq(seq__29237);
if(temp__4657__auto__){
var seq__29237__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29237__$1)){
var c__7194__auto__ = cljs.core.chunk_first(seq__29237__$1);
var G__29266 = cljs.core.chunk_rest(seq__29237__$1);
var G__29267 = c__7194__auto__;
var G__29268 = cljs.core.count(c__7194__auto__);
var G__29269 = (0);
seq__29237 = G__29266;
chunk__29239 = G__29267;
count__29240 = G__29268;
i__29241 = G__29269;
continue;
} else {
var vec__29249 = cljs.core.first(seq__29237__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29249,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29249,(1),null);
if(cljs.core.some_QMARK_(v)){
var G__29252_29270 = obj;
var G__29253_29271 = cljs.core.name(k);
var G__29254_29272 = cljs.core.clj__GT_js(v);
goog.object.set(G__29252_29270,G__29253_29271,G__29254_29272);

var G__29273 = cljs.core.next(seq__29237__$1);
var G__29274 = null;
var G__29275 = (0);
var G__29276 = (0);
seq__29237 = G__29273;
chunk__29239 = G__29274;
count__29240 = G__29275;
i__29241 = G__29276;
continue;
} else {
var G__29277 = cljs.core.next(seq__29237__$1);
var G__29278 = null;
var G__29279 = (0);
var G__29280 = (0);
seq__29237 = G__29277;
chunk__29239 = G__29278;
count__29240 = G__29279;
i__29241 = G__29280;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect(cljs.core.cst$kw$init,mixins);
var will_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$will_DASH_mount,cljs.core.cst$kw$before_DASH_render], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect(cljs.core.cst$kw$wrap_DASH_render,mixins);
var wrapped_render = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (init,will_mount,render__$1,wrap_render){
return (function (p1__29282_SHARP_,p2__29281_SHARP_){
return (p2__29281_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__29281_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__29282_SHARP_) : p2__29281_SHARP_.call(null,p1__29282_SHARP_));
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$did_DASH_mount,cljs.core.cst$kw$after_DASH_render], null),mixins);
var did_remount = rum.util.collect(cljs.core.cst$kw$did_DASH_remount,mixins);
var should_update = rum.util.collect(cljs.core.cst$kw$should_DASH_update,mixins);
var will_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$will_DASH_update,cljs.core.cst$kw$before_DASH_render], null),mixins);
var did_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$did_DASH_update,cljs.core.cst$kw$after_DASH_render], null),mixins);
var did_catch = rum.util.collect(cljs.core.cst$kw$did_DASH_catch,mixins);
var will_unmount = rum.util.collect(cljs.core.cst$kw$will_DASH_unmount,mixins);
var child_context = rum.util.collect(cljs.core.cst$kw$child_DASH_context,mixins);
var class_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(cljs.core.cst$kw$class_DASH_properties,mixins));
var static_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(cljs.core.cst$kw$static_DASH_properties,mixins));
var ctor = ((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props){
return (function (props){
var this$ = this;
var G__29328_29369 = this$;
var G__29329_29370 = "state";
var G__29330_29371 = ({":rum/state": cljs.core.volatile_BANG_(rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(goog.object.get(props,":rum/initial-state"),cljs.core.cst$kw$rum_SLASH_react_DASH_component,this$),init,cljs.core.array_seq([props], 0)))});
goog.object.set(G__29328_29369,G__29329_29370,G__29330_29371);

return React.Component.call(this$,props);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props))
;
var _ = goog.inherits(ctor,React.Component);
var prototype = goog.object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_(will_mount)){
} else {
var G__29331_29372 = prototype;
var G__29332_29373 = "componentWillMount";
var G__29333_29374 = ((function (G__29331_29372,G__29332_29373,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_mount));
});})(G__29331_29372,G__29332_29373,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__29331_29372,G__29332_29373,G__29333_29374);
}

if(cljs.core.empty_QMARK_(did_mount)){
} else {
var G__29334_29375 = prototype;
var G__29335_29376 = "componentDidMount";
var G__29336_29377 = ((function (G__29334_29375,G__29335_29376,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_mount));
});})(G__29334_29375,G__29335_29376,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__29334_29375,G__29335_29376,G__29336_29377);
}

var G__29337_29378 = prototype;
var G__29338_29379 = "componentWillReceiveProps";
var G__29339_29380 = ((function (G__29337_29378,G__29338_29379,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props){
var this$ = this;
var old_state = (function (){var G__29340 = rum.core.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29340) : cljs.core.deref.call(null,G__29340));
})();
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([old_state,goog.object.get(next_props,":rum/initial-state")], 0));
var next_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (old_state,state,this$,G__29337_29378,G__29338_29379,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__29284_SHARP_,p2__29283_SHARP_){
return (p2__29283_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__29283_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,p1__29284_SHARP_) : p2__29283_SHARP_.call(null,old_state,p1__29284_SHARP_));
});})(old_state,state,this$,G__29337_29378,G__29338_29379,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_(next_state)}));
});})(G__29337_29378,G__29338_29379,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__29337_29378,G__29338_29379,G__29339_29380);

if(cljs.core.empty_QMARK_(should_update)){
} else {
var G__29341_29381 = prototype;
var G__29342_29382 = "shouldComponentUpdate";
var G__29343_29383 = ((function (G__29341_29381,G__29342_29382,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props,next_state){
var this$ = this;
var old_state = (function (){var G__29344 = rum.core.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29344) : cljs.core.deref.call(null,G__29344));
})();
var new_state = (function (){var G__29345 = goog.object.get(next_state,":rum/state");
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29345) : cljs.core.deref.call(null,G__29345));
})();
var or__6383__auto__ = cljs.core.some(((function (old_state,new_state,this$,G__29341_29381,G__29342_29382,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__29285_SHARP_){
return (p1__29285_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__29285_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,new_state) : p1__29285_SHARP_.call(null,old_state,new_state));
});})(old_state,new_state,this$,G__29341_29381,G__29342_29382,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,should_update);
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
return false;
}
});})(G__29341_29381,G__29342_29382,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__29341_29381,G__29342_29382,G__29343_29383);
}

if(cljs.core.empty_QMARK_(will_update)){
} else {
var G__29346_29384 = prototype;
var G__29347_29385 = "componentWillUpdate";
var G__29348_29386 = ((function (G__29346_29384,G__29347_29385,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,next_state){
var this$ = this;
var new_state = goog.object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_(new_state,rum.util.call_all(cljs.core._deref(new_state),will_update));
});})(G__29346_29384,G__29347_29385,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__29346_29384,G__29347_29385,G__29348_29386);
}

var G__29349_29387 = prototype;
var G__29350_29388 = "render";
var G__29351_29389 = ((function (G__29349_29387,G__29350_29388,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = rum.core.state(this$);
var vec__29352 = (function (){var G__29355 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__29355) : wrapped_render.call(null,G__29355));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29352,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29352,(1),null);
cljs.core.vreset_BANG_(state,next_state);

return dom;
});})(G__29349_29387,G__29350_29388,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__29349_29387,G__29350_29388,G__29351_29389);

if(cljs.core.empty_QMARK_(did_update)){
} else {
var G__29356_29390 = prototype;
var G__29357_29391 = "componentDidUpdate";
var G__29358_29392 = ((function (G__29356_29390,G__29357_29391,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_update));
});})(G__29356_29390,G__29357_29391,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__29356_29390,G__29357_29391,G__29358_29392);
}

if(cljs.core.empty_QMARK_(did_catch)){
} else {
var G__29359_29393 = prototype;
var G__29360_29394 = "componentDidCatch";
var G__29361_29395 = ((function (G__29359_29393,G__29360_29394,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (error,info){
var this$ = this;
cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core._deref(rum.core.state(this$)),did_catch,cljs.core.array_seq([error,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_component_DASH_stack,goog.object.get(info,"componentStack")], null)], 0)));

return this$.forceUpdate();
});})(G__29359_29393,G__29360_29394,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__29359_29393,G__29360_29394,G__29361_29395);
}

var G__29362_29396 = prototype;
var G__29363_29397 = "componentWillUnmount";
var G__29364_29398 = ((function (G__29362_29396,G__29363_29397,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
if(cljs.core.empty_QMARK_(will_unmount)){
} else {
cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_unmount));
}

return goog.object.set(this$,":rum/unmounted?",true);
});})(G__29362_29396,G__29363_29397,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__29362_29396,G__29363_29397,G__29364_29398);

if(cljs.core.empty_QMARK_(child_context)){
} else {
var G__29365_29399 = prototype;
var G__29366_29400 = "getChildContext";
var G__29367_29401 = ((function (G__29365_29399,G__29366_29400,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = (function (){var G__29368 = rum.core.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29368) : cljs.core.deref.call(null,G__29368));
})();
return cljs.core.clj__GT_js(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (state,this$,G__29365_29399,G__29366_29400,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__29286_SHARP_){
return (p1__29286_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__29286_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__29286_SHARP_.call(null,state));
});})(state,this$,G__29365_29399,G__29366_29400,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(G__29365_29399,G__29366_29400,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__29365_29399,G__29366_29400,G__29367_29401);
}

rum.core.extend_BANG_(prototype,class_props);

goog.object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_(ctor,static_props);

return ctor;
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class(render,mixins,display_name);
var key_fn = cljs.core.first(rum.util.collect(cljs.core.cst$kw$key_DASH_fn,mixins));
var ctor = ((cljs.core.some_QMARK_(key_fn))?((function (class$,key_fn){
return (function() { 
var G__29402__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_args,args], null), "key": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(key_fn,args)});
return React.createElement(class$,props);
};
var G__29402 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29403__i = 0, G__29403__a = new Array(arguments.length -  0);
while (G__29403__i < G__29403__a.length) {G__29403__a[G__29403__i] = arguments[G__29403__i + 0]; ++G__29403__i;}
  args = new cljs.core.IndexedSeq(G__29403__a,0);
} 
return G__29402__delegate.call(this,args);};
G__29402.cljs$lang$maxFixedArity = 0;
G__29402.cljs$lang$applyTo = (function (arglist__29404){
var args = cljs.core.seq(arglist__29404);
return G__29402__delegate(args);
});
G__29402.cljs$core$IFn$_invoke$arity$variadic = G__29402__delegate;
return G__29402;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__29405__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_args,args], null)});
return React.createElement(class$,props);
};
var G__29405 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29406__i = 0, G__29406__a = new Array(arguments.length -  0);
while (G__29406__i < G__29406__a.length) {G__29406__a[G__29406__i] = arguments[G__29406__i + 0]; ++G__29406__i;}
  args = new cljs.core.IndexedSeq(G__29406__a,0);
} 
return G__29405__delegate.call(this,args);};
G__29405.cljs$lang$maxFixedArity = 0;
G__29405.cljs$lang$applyTo = (function (arglist__29407){
var args = cljs.core.seq(arglist__29407);
return G__29405__delegate(args);
});
G__29405.cljs$core$IFn$_invoke$arity$variadic = G__29405__delegate;
return G__29405;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_(mixins)){
var class$ = (function (props){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__29412__delegate = function (args){
var G__29410 = class$;
var G__29411 = ({":rum/args": args});
return React.createElement(G__29410,G__29411);
};
var G__29412 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29413__i = 0, G__29413__a = new Array(arguments.length -  0);
while (G__29413__i < G__29413__a.length) {G__29413__a[G__29413__i] = arguments[G__29413__i + 0]; ++G__29413__i;}
  args = new cljs.core.IndexedSeq(G__29413__a,0);
} 
return G__29412__delegate.call(this,args);};
G__29412.cljs$lang$maxFixedArity = 0;
G__29412.cljs$lang$applyTo = (function (arglist__29414){
var args = cljs.core.seq(arglist__29414);
return G__29412__delegate(args);
});
G__29412.cljs$core$IFn$_invoke$arity$variadic = G__29412__delegate;
return G__29412;
})()
;})(class$,_))
;
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,state,cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.schedule = (function (){var or__6383__auto__ = (function (){var and__6371__auto__ = typeof window !== 'undefined';
if(and__6371__auto__){
var or__6383__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
var or__6383__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__6383__auto____$1)){
return or__6383__auto____$1;
} else {
var or__6383__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__6383__auto____$2)){
return or__6383__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__6371__auto__;
}
})();
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
return ((function (or__6383__auto__){
return (function (p1__29415_SHARP_){
return setTimeout(p1__29415_SHARP_,(16));
});
;})(or__6383__auto__))
}
})();
rum.core.batch = (function (){var or__6383__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
var or__6383__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__6383__auto____$1)){
return or__6383__auto____$1;
} else {
return ((function (or__6383__auto____$1,or__6383__auto__){
return (function (f,a){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a));
});
;})(or__6383__auto____$1,or__6383__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_(rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__29422 = cljs.core.seq(queue);
var chunk__29424 = null;
var count__29425 = (0);
var i__29426 = (0);
while(true){
if((i__29426 < count__29425)){
var comp = chunk__29424.cljs$core$IIndexed$_nth$arity$2(null,i__29426);
if(cljs.core.not(goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();

var G__29428 = seq__29422;
var G__29429 = chunk__29424;
var G__29430 = count__29425;
var G__29431 = (i__29426 + (1));
seq__29422 = G__29428;
chunk__29424 = G__29429;
count__29425 = G__29430;
i__29426 = G__29431;
continue;
} else {
var G__29432 = seq__29422;
var G__29433 = chunk__29424;
var G__29434 = count__29425;
var G__29435 = (i__29426 + (1));
seq__29422 = G__29432;
chunk__29424 = G__29433;
count__29425 = G__29434;
i__29426 = G__29435;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq(seq__29422);
if(temp__4657__auto__){
var seq__29422__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29422__$1)){
var c__7194__auto__ = cljs.core.chunk_first(seq__29422__$1);
var G__29436 = cljs.core.chunk_rest(seq__29422__$1);
var G__29437 = c__7194__auto__;
var G__29438 = cljs.core.count(c__7194__auto__);
var G__29439 = (0);
seq__29422 = G__29436;
chunk__29424 = G__29437;
count__29425 = G__29438;
i__29426 = G__29439;
continue;
} else {
var comp = cljs.core.first(seq__29422__$1);
if(cljs.core.not(goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();

var G__29440 = cljs.core.next(seq__29422__$1);
var G__29441 = null;
var G__29442 = (0);
var G__29443 = (0);
seq__29422 = G__29440;
chunk__29424 = G__29441;
count__29425 = G__29442;
i__29426 = G__29443;
continue;
} else {
var G__29444 = cljs.core.next(seq__29422__$1);
var G__29445 = null;
var G__29446 = (0);
var G__29447 = (0);
seq__29422 = G__29444;
chunk__29424 = G__29445;
count__29425 = G__29446;
i__29426 = G__29447;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rum.core.render_queue) : cljs.core.deref.call(null,rum.core.render_queue));
cljs.core.vreset_BANG_(rum.core.render_queue,rum.core.empty_queue);

return (rum.core.batch.cljs$core$IFn$_invoke$arity$2 ? rum.core.batch.cljs$core$IFn$_invoke$arity$2(rum.core.render_all,queue) : rum.core.batch.call(null,rum.core.render_all,queue));
});
/**
 * Schedules react component to be rendered on next animation frame.
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rum.core.render_queue) : cljs.core.deref.call(null,rum.core.render_queue)))){
(rum.core.schedule.cljs$core$IFn$_invoke$arity$1 ? rum.core.schedule.cljs$core$IFn$_invoke$arity$1(rum.core.render) : rum.core.schedule.call(null,rum.core.render));
} else {
}

return cljs.core._vreset_BANG_(rum.core.render_queue,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core.render_queue),component));
});
/**
 * Add element to the DOM tree. Idempotent. Subsequent mounts will just update element.
 */
rum.core.mount = (function rum$core$mount(element,node){
ReactDOM.render(element,node);

return null;
});
/**
 * Removes component from the DOM tree.
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Same as [[mount]] but must be called on DOM tree already rendered by a server via [[render-html]].
 */
rum.core.hydrate = (function rum$core$hydrate(element,node){
return ReactDOM.hydrate(element,node);
});
/**
 * Render `element` in a DOM `node` that is ouside of current DOM hierarchy.
 */
rum.core.portal = (function rum$core$portal(element,node){
return ReactDOM.createPortal(element,node);
});
/**
 * Adds React key to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-key "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_key = (function rum$core$with_key(element,key){
var G__29451 = element;
var G__29452 = ({"key": key});
var G__29453 = null;
return React.cloneElement(G__29451,G__29452,G__29453);
});
/**
 * Adds React ref (string or callback) to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-ref "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_ref = (function rum$core$with_ref(element,ref){
var G__29457 = element;
var G__29458 = ({"ref": ref});
var G__29459 = null;
return React.cloneElement(G__29457,G__29458,G__29459);
});
/**
 * Given state, returns top-level DOM node of component. Call it during lifecycle callbacks. Can’t be called during render.
 */
rum.core.dom_node = (function rum$core$dom_node(state){
var G__29461 = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
return ReactDOM.findDOMNode(G__29461);
});
/**
 * Given state and ref handle, returns React component.
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name(key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref.
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
var G__29463 = rum.core.ref(state,cljs.core.name(key));
return ReactDOM.findDOMNode(G__29463);
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed. Does equality check (`=`) on all arguments.
 *   
 * ```
 * (rum/defc label < rum/static
 *   [text]
 *   [:div text])
 *   
 * (rum/mount (label "abc") js/document.body)
 * 
 * ;; def != abc, will re-render
 * (rum/mount (label "def") js/document.body)
 * 
 * ;; def == def, won’t re-render
 * (rum/mount (label "def") js/document.body)
 * ```
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$should_DASH_update,(function (old_state,new_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(old_state),cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff during component’s lifecycle. Component will be re-rendered if atom’s value changes. Atom is stored under user-provided key or under `:rum/local` by default.
 *   
 * ```
 * (rum/defcs counter < (rum/local 0 :cnt)
 *   [state label]
 *   (let [*cnt (:cnt state)]
 *     [:div {:on-click (fn [_] (swap! *cnt inc))}
 *       label @*cnt]))
 * 
 * (rum/mount (counter "Click count: "))
 * ```
 */
rum.core.local = (function rum$core$local(var_args){
var args29464 = [];
var len__7454__auto___29467 = arguments.length;
var i__7455__auto___29468 = (0);
while(true){
if((i__7455__auto___29468 < len__7454__auto___29467)){
args29464.push((arguments[i__7455__auto___29468]));

var G__29469 = (i__7455__auto___29468 + (1));
i__7455__auto___29468 = G__29469;
continue;
} else {
}
break;
}

var G__29466 = args29464.length;
switch (G__29466) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29464.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.cljs$core$IFn$_invoke$arity$2(initial,cljs.core.cst$kw$rum_SLASH_local);
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$will_DASH_mount,(function (state){
var local_state = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial) : cljs.core.atom.call(null,initial));
var component = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch(local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(component);
});})(local_state,component))
);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with [[react]].
 *   
 * ```
 * (rum/defc comp < rum/reactive
 *   [*counter]
 *   [:div (rum/react counter)])
 * 
 * (def *counter (atom 0))
 * (rum/mount (comp *counter) js/document.body)
 * (swap! *counter inc) ;; will force comp to re-render
 * ```
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$init,(function (state,props){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$rum$reactive_SLASH_key,cljs.core.random_uuid());
}),cljs.core.cst$kw$wrap_DASH_render,(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_29471 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);

try{var comp = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = cljs.core.cst$kw$rum$reactive_SLASH_refs.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__29472 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29472,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29472,(1),null);
var new_reactions = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rum.core._STAR_reactions_STAR_) : cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_));
var key = cljs.core.cst$kw$rum$reactive_SLASH_key.cljs$core$IFn$_invoke$arity$1(state);
var seq__29475_29487 = cljs.core.seq(old_reactions);
var chunk__29476_29488 = null;
var count__29477_29489 = (0);
var i__29478_29490 = (0);
while(true){
if((i__29478_29490 < count__29477_29489)){
var ref_29491 = chunk__29476_29488.cljs$core$IIndexed$_nth$arity$2(null,i__29478_29490);
if(cljs.core.contains_QMARK_(new_reactions,ref_29491)){
} else {
cljs.core.remove_watch(ref_29491,key);
}

var G__29492 = seq__29475_29487;
var G__29493 = chunk__29476_29488;
var G__29494 = count__29477_29489;
var G__29495 = (i__29478_29490 + (1));
seq__29475_29487 = G__29492;
chunk__29476_29488 = G__29493;
count__29477_29489 = G__29494;
i__29478_29490 = G__29495;
continue;
} else {
var temp__4657__auto___29496 = cljs.core.seq(seq__29475_29487);
if(temp__4657__auto___29496){
var seq__29475_29497__$1 = temp__4657__auto___29496;
if(cljs.core.chunked_seq_QMARK_(seq__29475_29497__$1)){
var c__7194__auto___29498 = cljs.core.chunk_first(seq__29475_29497__$1);
var G__29499 = cljs.core.chunk_rest(seq__29475_29497__$1);
var G__29500 = c__7194__auto___29498;
var G__29501 = cljs.core.count(c__7194__auto___29498);
var G__29502 = (0);
seq__29475_29487 = G__29499;
chunk__29476_29488 = G__29500;
count__29477_29489 = G__29501;
i__29478_29490 = G__29502;
continue;
} else {
var ref_29503 = cljs.core.first(seq__29475_29497__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_29503)){
} else {
cljs.core.remove_watch(ref_29503,key);
}

var G__29504 = cljs.core.next(seq__29475_29497__$1);
var G__29505 = null;
var G__29506 = (0);
var G__29507 = (0);
seq__29475_29487 = G__29504;
chunk__29476_29488 = G__29505;
count__29477_29489 = G__29506;
i__29478_29490 = G__29507;
continue;
}
} else {
}
}
break;
}

var seq__29479_29508 = cljs.core.seq(new_reactions);
var chunk__29480_29509 = null;
var count__29481_29510 = (0);
var i__29482_29511 = (0);
while(true){
if((i__29482_29511 < count__29481_29510)){
var ref_29512 = chunk__29480_29509.cljs$core$IIndexed$_nth$arity$2(null,i__29482_29511);
if(cljs.core.contains_QMARK_(old_reactions,ref_29512)){
} else {
cljs.core.add_watch(ref_29512,key,((function (seq__29479_29508,chunk__29480_29509,count__29481_29510,i__29482_29511,ref_29512,comp,old_reactions,vec__29472,dom,next_state,new_reactions,key,_STAR_reactions_STAR_29471){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__29479_29508,chunk__29480_29509,count__29481_29510,i__29482_29511,ref_29512,comp,old_reactions,vec__29472,dom,next_state,new_reactions,key,_STAR_reactions_STAR_29471))
);
}

var G__29513 = seq__29479_29508;
var G__29514 = chunk__29480_29509;
var G__29515 = count__29481_29510;
var G__29516 = (i__29482_29511 + (1));
seq__29479_29508 = G__29513;
chunk__29480_29509 = G__29514;
count__29481_29510 = G__29515;
i__29482_29511 = G__29516;
continue;
} else {
var temp__4657__auto___29517 = cljs.core.seq(seq__29479_29508);
if(temp__4657__auto___29517){
var seq__29479_29518__$1 = temp__4657__auto___29517;
if(cljs.core.chunked_seq_QMARK_(seq__29479_29518__$1)){
var c__7194__auto___29519 = cljs.core.chunk_first(seq__29479_29518__$1);
var G__29520 = cljs.core.chunk_rest(seq__29479_29518__$1);
var G__29521 = c__7194__auto___29519;
var G__29522 = cljs.core.count(c__7194__auto___29519);
var G__29523 = (0);
seq__29479_29508 = G__29520;
chunk__29480_29509 = G__29521;
count__29481_29510 = G__29522;
i__29482_29511 = G__29523;
continue;
} else {
var ref_29524 = cljs.core.first(seq__29479_29518__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_29524)){
} else {
cljs.core.add_watch(ref_29524,key,((function (seq__29479_29508,chunk__29480_29509,count__29481_29510,i__29482_29511,ref_29524,seq__29479_29518__$1,temp__4657__auto___29517,comp,old_reactions,vec__29472,dom,next_state,new_reactions,key,_STAR_reactions_STAR_29471){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__29479_29508,chunk__29480_29509,count__29481_29510,i__29482_29511,ref_29524,seq__29479_29518__$1,temp__4657__auto___29517,comp,old_reactions,vec__29472,dom,next_state,new_reactions,key,_STAR_reactions_STAR_29471))
);
}

var G__29525 = cljs.core.next(seq__29479_29518__$1);
var G__29526 = null;
var G__29527 = (0);
var G__29528 = (0);
seq__29479_29508 = G__29525;
chunk__29480_29509 = G__29526;
count__29481_29510 = G__29527;
i__29482_29511 = G__29528;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,cljs.core.cst$kw$rum$reactive_SLASH_refs,new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_29471;
}});
}),cljs.core.cst$kw$will_DASH_unmount,(function (state){
var key_29529 = cljs.core.cst$kw$rum$reactive_SLASH_key.cljs$core$IFn$_invoke$arity$1(state);
var seq__29483_29530 = cljs.core.seq(cljs.core.cst$kw$rum$reactive_SLASH_refs.cljs$core$IFn$_invoke$arity$1(state));
var chunk__29484_29531 = null;
var count__29485_29532 = (0);
var i__29486_29533 = (0);
while(true){
if((i__29486_29533 < count__29485_29532)){
var ref_29534 = chunk__29484_29531.cljs$core$IIndexed$_nth$arity$2(null,i__29486_29533);
cljs.core.remove_watch(ref_29534,key_29529);

var G__29535 = seq__29483_29530;
var G__29536 = chunk__29484_29531;
var G__29537 = count__29485_29532;
var G__29538 = (i__29486_29533 + (1));
seq__29483_29530 = G__29535;
chunk__29484_29531 = G__29536;
count__29485_29532 = G__29537;
i__29486_29533 = G__29538;
continue;
} else {
var temp__4657__auto___29539 = cljs.core.seq(seq__29483_29530);
if(temp__4657__auto___29539){
var seq__29483_29540__$1 = temp__4657__auto___29539;
if(cljs.core.chunked_seq_QMARK_(seq__29483_29540__$1)){
var c__7194__auto___29541 = cljs.core.chunk_first(seq__29483_29540__$1);
var G__29542 = cljs.core.chunk_rest(seq__29483_29540__$1);
var G__29543 = c__7194__auto___29541;
var G__29544 = cljs.core.count(c__7194__auto___29541);
var G__29545 = (0);
seq__29483_29530 = G__29542;
chunk__29484_29531 = G__29543;
count__29485_29532 = G__29544;
i__29486_29533 = G__29545;
continue;
} else {
var ref_29546 = cljs.core.first(seq__29483_29540__$1);
cljs.core.remove_watch(ref_29546,key_29529);

var G__29547 = cljs.core.next(seq__29483_29540__$1);
var G__29548 = null;
var G__29549 = (0);
var G__29550 = (0);
seq__29483_29530 = G__29547;
chunk__29484_29531 = G__29548;
count__29485_29532 = G__29549;
i__29486_29533 = G__29550;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$rum$reactive_SLASH_refs,cljs.core.array_seq([cljs.core.cst$kw$rum$reactive_SLASH_key], 0));
})], null);
/**
 * Works in conjunction with [[reactive]] mixin. Use this function instead of `deref` inside render, and your component will subscribe to changes happening to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("rum.core/react is only supported in conjunction with rum.core/reactive"),cljs.core.str("\n"),cljs.core.str("*reactions*")].join('')));
}

cljs.core._vreset_BANG_(rum.core._STAR_reactions_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core._STAR_reactions_STAR_),ref));

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ref) : cljs.core.deref.call(null,ref));
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * 
 *           [[derived-atom]] will:
 *        
 *           - Take N “source” refs.
 *           - Set up a watch on each of them.
 *           - Create “sink” atom.
 *           - When any of source refs changes:
 *              - re-run function `f`, passing N dereferenced values of source refs.
 *              - `reset!` result of `f` to the sink atom.
 *           - Return sink atom.
 * 
 *           Example:
 * 
 *           ```
 *           (def *a (atom 0))
 *           (def *b (atom 1))
 *           (def *x (derived-atom [*a *b] ::key
 *                     (fn [a b]
 *                       (str a ":" b))))
 *           
 *           (type *x) ;; => clojure.lang.Atom
 *           (deref *x) ;; => "0:1"
 *           
 *           (swap! *a inc)
 *           (deref *x) ;; => "1:1"
 *           
 *           (reset! *b 7)
 *           (deref *x) ;; => "1:7"
 *           ```
 * 
 *           Arguments:
 *        
 *           - `refs` - sequence of source refs,
 *           - `key`  - unique key to register watcher, same as in `clojure.core/add-watch`,
 *           - `f`    - function that must accept N arguments (same as number of source refs) and return a value to be written to the sink ref. Note: `f` will be called with already dereferenced values,
 *           - `opts` - optional. Map of:
 *             - `:ref` - use this as sink ref. By default creates new atom,
 *             - `:check-equals?` - Defaults to `true`. If equality check should be run on each source update: `(= @sink (f new-vals))`. When result of recalculating `f` equals to the old value, `reset!` won’t be called. Set to `false` if checking for equality can be expensive.
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 * ```
 * (def db (atom { :users { "Ivan" { :age 30 }}}))
 * 
 * (def ivan (rum/cursor db [:users "Ivan"]))
 * (deref ivan) ;; => { :age 30 }
 * 
 * (swap! ivan update :age inc) ;; => { :age 31 }
 * (deref db) ;; => { :users { "Ivan" { :age 31 }}}
 * 
 * (swap! db update-in [:users "Ivan" :age] inc)
 * ;; => { :users { "Ivan" { :age 32 }}}
 * 
 * (deref ivan) ;; => { :age 32 }
 * ```
 *   
 * Returned value supports `deref`, `swap!`, `reset!`, watches and metadata.
 *   
 * The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__7461__auto__ = [];
var len__7454__auto___29557 = arguments.length;
var i__7455__auto___29558 = (0);
while(true){
if((i__7455__auto___29558 < len__7454__auto___29557)){
args__7461__auto__.push((arguments[i__7455__auto___29558]));

var G__29559 = (i__7455__auto___29558 + (1));
i__7455__auto___29558 = G__29559;
continue;
} else {
}
break;
}

var argseq__7462__auto__ = ((((2) < args__7461__auto__.length))?(new cljs.core.IndexedSeq(args__7461__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7462__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__29554){
var map__29555 = p__29554;
var map__29555__$1 = ((((!((map__29555 == null)))?((((map__29555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29555):map__29555);
var options = map__29555__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref.path,path),cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq29551){
var G__29552 = cljs.core.first(seq29551);
var seq29551__$1 = cljs.core.next(seq29551);
var G__29553 = cljs.core.first(seq29551__$1);
var seq29551__$2 = cljs.core.next(seq29551__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__29552,G__29553,seq29551__$2);
});

/**
 * Same as [[cursor-in]] but accepts single key instead of path vector.
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__7461__auto__ = [];
var len__7454__auto___29563 = arguments.length;
var i__7455__auto___29564 = (0);
while(true){
if((i__7455__auto___29564 < len__7454__auto___29563)){
args__7461__auto__.push((arguments[i__7455__auto___29564]));

var G__29565 = (i__7455__auto___29564 + (1));
i__7455__auto___29564 = G__29565;
continue;
} else {
}
break;
}

var argseq__7462__auto__ = ((((2) < args__7461__auto__.length))?(new cljs.core.IndexedSeq(args__7461__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7462__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq29560){
var G__29561 = cljs.core.first(seq29560);
var seq29560__$1 = cljs.core.next(seq29560);
var G__29562 = cljs.core.first(seq29560__$1);
var seq29560__$2 = cljs.core.next(seq29560__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__29561,G__29562,seq29560__$2);
});

