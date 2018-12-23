// Compiled by ClojureScript 1.9.229 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('rum.cursor');
goog.require('goog.object');
goog.require('cljsjs.react');
goog.require('rum.derived_atom');
goog.require('sablono.core');
goog.require('cljsjs.react.dom');
goog.require('rum.util');
/**
 * Given React component, returns Rum state associated with it.
 */
rum.core.state = (function rum$core$state(comp){
return goog.object.get(comp.state,":rum/state");
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__26438 = cljs.core.seq.call(null,props);
var chunk__26440 = null;
var count__26441 = (0);
var i__26442 = (0);
while(true){
if((i__26442 < count__26441)){
var vec__26444 = cljs.core._nth.call(null,chunk__26440,i__26442);
var k = cljs.core.nth.call(null,vec__26444,(0),null);
var v = cljs.core.nth.call(null,vec__26444,(1),null);
if(cljs.core.some_QMARK_.call(null,v)){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));

var G__26450 = seq__26438;
var G__26451 = chunk__26440;
var G__26452 = count__26441;
var G__26453 = (i__26442 + (1));
seq__26438 = G__26450;
chunk__26440 = G__26451;
count__26441 = G__26452;
i__26442 = G__26453;
continue;
} else {
var G__26454 = seq__26438;
var G__26455 = chunk__26440;
var G__26456 = count__26441;
var G__26457 = (i__26442 + (1));
seq__26438 = G__26454;
chunk__26440 = G__26455;
count__26441 = G__26456;
i__26442 = G__26457;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26438);
if(temp__4657__auto__){
var seq__26438__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26438__$1)){
var c__9404__auto__ = cljs.core.chunk_first.call(null,seq__26438__$1);
var G__26458 = cljs.core.chunk_rest.call(null,seq__26438__$1);
var G__26459 = c__9404__auto__;
var G__26460 = cljs.core.count.call(null,c__9404__auto__);
var G__26461 = (0);
seq__26438 = G__26458;
chunk__26440 = G__26459;
count__26441 = G__26460;
i__26442 = G__26461;
continue;
} else {
var vec__26447 = cljs.core.first.call(null,seq__26438__$1);
var k = cljs.core.nth.call(null,vec__26447,(0),null);
var v = cljs.core.nth.call(null,vec__26447,(1),null);
if(cljs.core.some_QMARK_.call(null,v)){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));

var G__26462 = cljs.core.next.call(null,seq__26438__$1);
var G__26463 = null;
var G__26464 = (0);
var G__26465 = (0);
seq__26438 = G__26462;
chunk__26440 = G__26463;
count__26441 = G__26464;
i__26442 = G__26465;
continue;
} else {
var G__26466 = cljs.core.next.call(null,seq__26438__$1);
var G__26467 = null;
var G__26468 = (0);
var G__26469 = (0);
seq__26438 = G__26466;
chunk__26440 = G__26467;
count__26441 = G__26468;
i__26442 = G__26469;
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
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__26471_SHARP_,p2__26470_SHARP_){
return p2__26470_SHARP_.call(null,p1__26471_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_catch = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-catch","did-catch",2139522313),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
var static_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"static-properties","static-properties",-577838503),mixins));
var ctor = ((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props){
return (function (props){
var this$ = this;
goog.object.set(this$,"state",({":rum/state": cljs.core.volatile_BANG_.call(null,rum.util.call_all.call(null,cljs.core.assoc.call(null,goog.object.get(props,":rum/initial-state"),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props))}));

return React.Component.call(this$,props);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props))
;
var _ = goog.inherits(ctor,React.Component);
var prototype = goog.object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_.call(null,will_mount)){
} else {
goog.object.set(prototype,"componentWillMount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,did_mount)){
} else {
goog.object.set(prototype,"componentDidMount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"componentWillReceiveProps",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,goog.object.get(next_props,":rum/initial-state"));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__26473_SHARP_,p2__26472_SHARP_){
return p2__26472_SHARP_.call(null,old_state,p1__26473_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,should_update)){
} else {
goog.object.set(prototype,"shouldComponentUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,goog.object.get(next_state,":rum/state"));
var or__8593__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__26474_SHARP_){
return p1__26474_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,should_update);
if(cljs.core.truth_(or__8593__auto__)){
return or__8593__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,will_update)){
} else {
goog.object.set(prototype,"componentWillUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,next_state){
var this$ = this;
var new_state = goog.object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"render",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__26479 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__26479,(0),null);
var next_state = cljs.core.nth.call(null,vec__26479,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,did_update)){
} else {
goog.object.set(prototype,"componentDidUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,did_catch)){
} else {
goog.object.set(prototype,"componentDidCatch",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (error,info){
var this$ = this;
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_catch,error,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","component-stack","rum/component-stack",2037541138),goog.object.get(info,"componentStack")], null)));

return this$.forceUpdate();
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"componentWillUnmount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
if(cljs.core.empty_QMARK_.call(null,will_unmount)){
} else {
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
}

return goog.object.set(this$,":rum/unmounted?",true);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,child_context)){
} else {
goog.object.set(prototype,"getChildContext",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__26475_SHARP_){
return p1__26475_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

rum.core.extend_BANG_.call(null,prototype,class_props);

goog.object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_.call(null,ctor,static_props);

return ctor;
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((cljs.core.some_QMARK_.call(null,key_fn))?((function (class$,key_fn){
return (function() { 
var G__26482__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__26482 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26483__i = 0, G__26483__a = new Array(arguments.length -  0);
while (G__26483__i < G__26483__a.length) {G__26483__a[G__26483__i] = arguments[G__26483__i + 0]; ++G__26483__i;}
  args = new cljs.core.IndexedSeq(G__26483__a,0);
} 
return G__26482__delegate.call(this,args);};
G__26482.cljs$lang$maxFixedArity = 0;
G__26482.cljs$lang$applyTo = (function (arglist__26484){
var args = cljs.core.seq(arglist__26484);
return G__26482__delegate(args);
});
G__26482.cljs$core$IFn$_invoke$arity$variadic = G__26482__delegate;
return G__26482;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__26485__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__26485 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26486__i = 0, G__26486__a = new Array(arguments.length -  0);
while (G__26486__i < G__26486__a.length) {G__26486__a[G__26486__i] = arguments[G__26486__i + 0]; ++G__26486__i;}
  args = new cljs.core.IndexedSeq(G__26486__a,0);
} 
return G__26485__delegate.call(this,args);};
G__26485.cljs$lang$maxFixedArity = 0;
G__26485.cljs$lang$applyTo = (function (arglist__26487){
var args = cljs.core.seq(arglist__26487);
return G__26485__delegate(args);
});
G__26485.cljs$core$IFn$_invoke$arity$variadic = G__26485__delegate;
return G__26485;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__26488__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__26488 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26489__i = 0, G__26489__a = new Array(arguments.length -  0);
while (G__26489__i < G__26489__a.length) {G__26489__a[G__26489__i] = arguments[G__26489__i + 0]; ++G__26489__i;}
  args = new cljs.core.IndexedSeq(G__26489__a,0);
} 
return G__26488__delegate.call(this,args);};
G__26488.cljs$lang$maxFixedArity = 0;
G__26488.cljs$lang$applyTo = (function (arglist__26490){
var args = cljs.core.seq(arglist__26490);
return G__26488__delegate(args);
});
G__26488.cljs$core$IFn$_invoke$arity$variadic = G__26488__delegate;
return G__26488;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__8593__auto__ = (function (){var and__8581__auto__ = typeof window !== 'undefined';
if(and__8581__auto__){
var or__8593__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__8593__auto__)){
return or__8593__auto__;
} else {
var or__8593__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__8593__auto____$1)){
return or__8593__auto____$1;
} else {
var or__8593__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__8593__auto____$2)){
return or__8593__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__8581__auto__;
}
})();
if(cljs.core.truth_(or__8593__auto__)){
return or__8593__auto__;
} else {
return ((function (or__8593__auto__){
return (function (p1__26491_SHARP_){
return setTimeout(p1__26491_SHARP_,(16));
});
;})(or__8593__auto__))
}
})();
rum.core.batch = (function (){var or__8593__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__8593__auto__)){
return or__8593__auto__;
} else {
var or__8593__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__8593__auto____$1)){
return or__8593__auto____$1;
} else {
return ((function (or__8593__auto____$1,or__8593__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__8593__auto____$1,or__8593__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__26498 = cljs.core.seq.call(null,queue);
var chunk__26500 = null;
var count__26501 = (0);
var i__26502 = (0);
while(true){
if((i__26502 < count__26501)){
var comp = cljs.core._nth.call(null,chunk__26500,i__26502);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();

var G__26504 = seq__26498;
var G__26505 = chunk__26500;
var G__26506 = count__26501;
var G__26507 = (i__26502 + (1));
seq__26498 = G__26504;
chunk__26500 = G__26505;
count__26501 = G__26506;
i__26502 = G__26507;
continue;
} else {
var G__26508 = seq__26498;
var G__26509 = chunk__26500;
var G__26510 = count__26501;
var G__26511 = (i__26502 + (1));
seq__26498 = G__26508;
chunk__26500 = G__26509;
count__26501 = G__26510;
i__26502 = G__26511;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26498);
if(temp__4657__auto__){
var seq__26498__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26498__$1)){
var c__9404__auto__ = cljs.core.chunk_first.call(null,seq__26498__$1);
var G__26512 = cljs.core.chunk_rest.call(null,seq__26498__$1);
var G__26513 = c__9404__auto__;
var G__26514 = cljs.core.count.call(null,c__9404__auto__);
var G__26515 = (0);
seq__26498 = G__26512;
chunk__26500 = G__26513;
count__26501 = G__26514;
i__26502 = G__26515;
continue;
} else {
var comp = cljs.core.first.call(null,seq__26498__$1);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();

var G__26516 = cljs.core.next.call(null,seq__26498__$1);
var G__26517 = null;
var G__26518 = (0);
var G__26519 = (0);
seq__26498 = G__26516;
chunk__26500 = G__26517;
count__26501 = G__26518;
i__26502 = G__26519;
continue;
} else {
var G__26520 = cljs.core.next.call(null,seq__26498__$1);
var G__26521 = null;
var G__26522 = (0);
var G__26523 = (0);
seq__26498 = G__26520;
chunk__26500 = G__26521;
count__26501 = G__26522;
i__26502 = G__26523;
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
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame.
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
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
return React.cloneElement(element,({"key": key}),null);
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
return React.cloneElement(element,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node of component. Call it during lifecycle callbacks. Can’t be called during render.
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component.
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref.
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
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
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
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
var args26524 = [];
var len__9664__auto___26527 = arguments.length;
var i__9665__auto___26528 = (0);
while(true){
if((i__9665__auto___26528 < len__9664__auto___26527)){
args26524.push((arguments[i__9665__auto___26528]));

var G__26529 = (i__9665__auto___26528 + (1));
i__9665__auto___26528 = G__26529;
continue;
} else {
}
break;
}

var G__26526 = args26524.length;
switch (G__26526) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26524.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
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
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_26531 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__26532 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__26532,(0),null);
var next_state = cljs.core.nth.call(null,vec__26532,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__26535_26547 = cljs.core.seq.call(null,old_reactions);
var chunk__26536_26548 = null;
var count__26537_26549 = (0);
var i__26538_26550 = (0);
while(true){
if((i__26538_26550 < count__26537_26549)){
var ref_26551 = cljs.core._nth.call(null,chunk__26536_26548,i__26538_26550);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_26551)){
} else {
cljs.core.remove_watch.call(null,ref_26551,key);
}

var G__26552 = seq__26535_26547;
var G__26553 = chunk__26536_26548;
var G__26554 = count__26537_26549;
var G__26555 = (i__26538_26550 + (1));
seq__26535_26547 = G__26552;
chunk__26536_26548 = G__26553;
count__26537_26549 = G__26554;
i__26538_26550 = G__26555;
continue;
} else {
var temp__4657__auto___26556 = cljs.core.seq.call(null,seq__26535_26547);
if(temp__4657__auto___26556){
var seq__26535_26557__$1 = temp__4657__auto___26556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26535_26557__$1)){
var c__9404__auto___26558 = cljs.core.chunk_first.call(null,seq__26535_26557__$1);
var G__26559 = cljs.core.chunk_rest.call(null,seq__26535_26557__$1);
var G__26560 = c__9404__auto___26558;
var G__26561 = cljs.core.count.call(null,c__9404__auto___26558);
var G__26562 = (0);
seq__26535_26547 = G__26559;
chunk__26536_26548 = G__26560;
count__26537_26549 = G__26561;
i__26538_26550 = G__26562;
continue;
} else {
var ref_26563 = cljs.core.first.call(null,seq__26535_26557__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_26563)){
} else {
cljs.core.remove_watch.call(null,ref_26563,key);
}

var G__26564 = cljs.core.next.call(null,seq__26535_26557__$1);
var G__26565 = null;
var G__26566 = (0);
var G__26567 = (0);
seq__26535_26547 = G__26564;
chunk__26536_26548 = G__26565;
count__26537_26549 = G__26566;
i__26538_26550 = G__26567;
continue;
}
} else {
}
}
break;
}

var seq__26539_26568 = cljs.core.seq.call(null,new_reactions);
var chunk__26540_26569 = null;
var count__26541_26570 = (0);
var i__26542_26571 = (0);
while(true){
if((i__26542_26571 < count__26541_26570)){
var ref_26572 = cljs.core._nth.call(null,chunk__26540_26569,i__26542_26571);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_26572)){
} else {
cljs.core.add_watch.call(null,ref_26572,key,((function (seq__26539_26568,chunk__26540_26569,count__26541_26570,i__26542_26571,ref_26572,comp,old_reactions,vec__26532,dom,next_state,new_reactions,key,_STAR_reactions_STAR_26531){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__26539_26568,chunk__26540_26569,count__26541_26570,i__26542_26571,ref_26572,comp,old_reactions,vec__26532,dom,next_state,new_reactions,key,_STAR_reactions_STAR_26531))
);
}

var G__26573 = seq__26539_26568;
var G__26574 = chunk__26540_26569;
var G__26575 = count__26541_26570;
var G__26576 = (i__26542_26571 + (1));
seq__26539_26568 = G__26573;
chunk__26540_26569 = G__26574;
count__26541_26570 = G__26575;
i__26542_26571 = G__26576;
continue;
} else {
var temp__4657__auto___26577 = cljs.core.seq.call(null,seq__26539_26568);
if(temp__4657__auto___26577){
var seq__26539_26578__$1 = temp__4657__auto___26577;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26539_26578__$1)){
var c__9404__auto___26579 = cljs.core.chunk_first.call(null,seq__26539_26578__$1);
var G__26580 = cljs.core.chunk_rest.call(null,seq__26539_26578__$1);
var G__26581 = c__9404__auto___26579;
var G__26582 = cljs.core.count.call(null,c__9404__auto___26579);
var G__26583 = (0);
seq__26539_26568 = G__26580;
chunk__26540_26569 = G__26581;
count__26541_26570 = G__26582;
i__26542_26571 = G__26583;
continue;
} else {
var ref_26584 = cljs.core.first.call(null,seq__26539_26578__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_26584)){
} else {
cljs.core.add_watch.call(null,ref_26584,key,((function (seq__26539_26568,chunk__26540_26569,count__26541_26570,i__26542_26571,ref_26584,seq__26539_26578__$1,temp__4657__auto___26577,comp,old_reactions,vec__26532,dom,next_state,new_reactions,key,_STAR_reactions_STAR_26531){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__26539_26568,chunk__26540_26569,count__26541_26570,i__26542_26571,ref_26584,seq__26539_26578__$1,temp__4657__auto___26577,comp,old_reactions,vec__26532,dom,next_state,new_reactions,key,_STAR_reactions_STAR_26531))
);
}

var G__26585 = cljs.core.next.call(null,seq__26539_26578__$1);
var G__26586 = null;
var G__26587 = (0);
var G__26588 = (0);
seq__26539_26568 = G__26585;
chunk__26540_26569 = G__26586;
count__26541_26570 = G__26587;
i__26542_26571 = G__26588;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_26531;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_26589 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__26543_26590 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__26544_26591 = null;
var count__26545_26592 = (0);
var i__26546_26593 = (0);
while(true){
if((i__26546_26593 < count__26545_26592)){
var ref_26594 = cljs.core._nth.call(null,chunk__26544_26591,i__26546_26593);
cljs.core.remove_watch.call(null,ref_26594,key_26589);

var G__26595 = seq__26543_26590;
var G__26596 = chunk__26544_26591;
var G__26597 = count__26545_26592;
var G__26598 = (i__26546_26593 + (1));
seq__26543_26590 = G__26595;
chunk__26544_26591 = G__26596;
count__26545_26592 = G__26597;
i__26546_26593 = G__26598;
continue;
} else {
var temp__4657__auto___26599 = cljs.core.seq.call(null,seq__26543_26590);
if(temp__4657__auto___26599){
var seq__26543_26600__$1 = temp__4657__auto___26599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26543_26600__$1)){
var c__9404__auto___26601 = cljs.core.chunk_first.call(null,seq__26543_26600__$1);
var G__26602 = cljs.core.chunk_rest.call(null,seq__26543_26600__$1);
var G__26603 = c__9404__auto___26601;
var G__26604 = cljs.core.count.call(null,c__9404__auto___26601);
var G__26605 = (0);
seq__26543_26590 = G__26602;
chunk__26544_26591 = G__26603;
count__26545_26592 = G__26604;
i__26546_26593 = G__26605;
continue;
} else {
var ref_26606 = cljs.core.first.call(null,seq__26543_26600__$1);
cljs.core.remove_watch.call(null,ref_26606,key_26589);

var G__26607 = cljs.core.next.call(null,seq__26543_26600__$1);
var G__26608 = null;
var G__26609 = (0);
var G__26610 = (0);
seq__26543_26590 = G__26607;
chunk__26544_26591 = G__26608;
count__26545_26592 = G__26609;
i__26546_26593 = G__26610;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with [[reactive]] mixin. Use this function instead of `deref` inside render, and your component will subscribe to changes happening to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("rum.core/react is only supported in conjunction with rum.core/reactive"),cljs.core.str("\n"),cljs.core.str("*reactions*")].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
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
var args__9671__auto__ = [];
var len__9664__auto___26617 = arguments.length;
var i__9665__auto___26618 = (0);
while(true){
if((i__9665__auto___26618 < len__9664__auto___26617)){
args__9671__auto__.push((arguments[i__9665__auto___26618]));

var G__26619 = (i__9665__auto___26618 + (1));
i__9665__auto___26618 = G__26619;
continue;
} else {
}
break;
}

var argseq__9672__auto__ = ((((2) < args__9671__auto__.length))?(new cljs.core.IndexedSeq(args__9671__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9672__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__26614){
var map__26615 = p__26614;
var map__26615__$1 = ((((!((map__26615 == null)))?((((map__26615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26615):map__26615);
var options = map__26615__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq26611){
var G__26612 = cljs.core.first.call(null,seq26611);
var seq26611__$1 = cljs.core.next.call(null,seq26611);
var G__26613 = cljs.core.first.call(null,seq26611__$1);
var seq26611__$2 = cljs.core.next.call(null,seq26611__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__26612,G__26613,seq26611__$2);
});

/**
 * Same as [[cursor-in]] but accepts single key instead of path vector.
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__9671__auto__ = [];
var len__9664__auto___26623 = arguments.length;
var i__9665__auto___26624 = (0);
while(true){
if((i__9665__auto___26624 < len__9664__auto___26623)){
args__9671__auto__.push((arguments[i__9665__auto___26624]));

var G__26625 = (i__9665__auto___26624 + (1));
i__9665__auto___26624 = G__26625;
continue;
} else {
}
break;
}

var argseq__9672__auto__ = ((((2) < args__9671__auto__.length))?(new cljs.core.IndexedSeq(args__9671__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9672__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq26620){
var G__26621 = cljs.core.first.call(null,seq26620);
var seq26620__$1 = cljs.core.next.call(null,seq26620);
var G__26622 = cljs.core.first.call(null,seq26620__$1);
var seq26620__$2 = cljs.core.next.call(null,seq26620__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__26621,G__26622,seq26620__$2);
});


//# sourceMappingURL=core.js.map