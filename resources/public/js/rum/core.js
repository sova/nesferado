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
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return goog.object.get(comp.state,":rum/state");
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__28310 = cljs.core.seq.call(null,props);
var chunk__28312 = null;
var count__28313 = (0);
var i__28314 = (0);
while(true){
if((i__28314 < count__28313)){
var vec__28316 = cljs.core._nth.call(null,chunk__28312,i__28314);
var k = cljs.core.nth.call(null,vec__28316,(0),null);
var v = cljs.core.nth.call(null,vec__28316,(1),null);
if(cljs.core.some_QMARK_.call(null,v)){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));

var G__28322 = seq__28310;
var G__28323 = chunk__28312;
var G__28324 = count__28313;
var G__28325 = (i__28314 + (1));
seq__28310 = G__28322;
chunk__28312 = G__28323;
count__28313 = G__28324;
i__28314 = G__28325;
continue;
} else {
var G__28326 = seq__28310;
var G__28327 = chunk__28312;
var G__28328 = count__28313;
var G__28329 = (i__28314 + (1));
seq__28310 = G__28326;
chunk__28312 = G__28327;
count__28313 = G__28328;
i__28314 = G__28329;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28310);
if(temp__4657__auto__){
var seq__28310__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28310__$1)){
var c__9404__auto__ = cljs.core.chunk_first.call(null,seq__28310__$1);
var G__28330 = cljs.core.chunk_rest.call(null,seq__28310__$1);
var G__28331 = c__9404__auto__;
var G__28332 = cljs.core.count.call(null,c__9404__auto__);
var G__28333 = (0);
seq__28310 = G__28330;
chunk__28312 = G__28331;
count__28313 = G__28332;
i__28314 = G__28333;
continue;
} else {
var vec__28319 = cljs.core.first.call(null,seq__28310__$1);
var k = cljs.core.nth.call(null,vec__28319,(0),null);
var v = cljs.core.nth.call(null,vec__28319,(1),null);
if(cljs.core.some_QMARK_.call(null,v)){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));

var G__28334 = cljs.core.next.call(null,seq__28310__$1);
var G__28335 = null;
var G__28336 = (0);
var G__28337 = (0);
seq__28310 = G__28334;
chunk__28312 = G__28335;
count__28313 = G__28336;
i__28314 = G__28337;
continue;
} else {
var G__28338 = cljs.core.next.call(null,seq__28310__$1);
var G__28339 = null;
var G__28340 = (0);
var G__28341 = (0);
seq__28310 = G__28338;
chunk__28312 = G__28339;
count__28313 = G__28340;
i__28314 = G__28341;
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
return (function (p1__28343_SHARP_,p2__28342_SHARP_){
return p2__28342_SHARP_.call(null,p1__28343_SHARP_);
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
return (function (p1__28345_SHARP_,p2__28344_SHARP_){
return p2__28344_SHARP_.call(null,old_state,p1__28345_SHARP_);
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
return (function (p1__28346_SHARP_){
return p1__28346_SHARP_.call(null,old_state,new_state);
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
var vec__28351 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__28351,(0),null);
var next_state = cljs.core.nth.call(null,vec__28351,(1),null);
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
return (function (p1__28347_SHARP_){
return p1__28347_SHARP_.call(null,state);
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
var G__28354__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__28354 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28355__i = 0, G__28355__a = new Array(arguments.length -  0);
while (G__28355__i < G__28355__a.length) {G__28355__a[G__28355__i] = arguments[G__28355__i + 0]; ++G__28355__i;}
  args = new cljs.core.IndexedSeq(G__28355__a,0);
} 
return G__28354__delegate.call(this,args);};
G__28354.cljs$lang$maxFixedArity = 0;
G__28354.cljs$lang$applyTo = (function (arglist__28356){
var args = cljs.core.seq(arglist__28356);
return G__28354__delegate(args);
});
G__28354.cljs$core$IFn$_invoke$arity$variadic = G__28354__delegate;
return G__28354;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__28357__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__28357 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28358__i = 0, G__28358__a = new Array(arguments.length -  0);
while (G__28358__i < G__28358__a.length) {G__28358__a[G__28358__i] = arguments[G__28358__i + 0]; ++G__28358__i;}
  args = new cljs.core.IndexedSeq(G__28358__a,0);
} 
return G__28357__delegate.call(this,args);};
G__28357.cljs$lang$maxFixedArity = 0;
G__28357.cljs$lang$applyTo = (function (arglist__28359){
var args = cljs.core.seq(arglist__28359);
return G__28357__delegate(args);
});
G__28357.cljs$core$IFn$_invoke$arity$variadic = G__28357__delegate;
return G__28357;
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
var G__28360__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__28360 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28361__i = 0, G__28361__a = new Array(arguments.length -  0);
while (G__28361__i < G__28361__a.length) {G__28361__a[G__28361__i] = arguments[G__28361__i + 0]; ++G__28361__i;}
  args = new cljs.core.IndexedSeq(G__28361__a,0);
} 
return G__28360__delegate.call(this,args);};
G__28360.cljs$lang$maxFixedArity = 0;
G__28360.cljs$lang$applyTo = (function (arglist__28362){
var args = cljs.core.seq(arglist__28362);
return G__28360__delegate(args);
});
G__28360.cljs$core$IFn$_invoke$arity$variadic = G__28360__delegate;
return G__28360;
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
return (function (p1__28363_SHARP_){
return setTimeout(p1__28363_SHARP_,(16));
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
var seq__28370 = cljs.core.seq.call(null,queue);
var chunk__28372 = null;
var count__28373 = (0);
var i__28374 = (0);
while(true){
if((i__28374 < count__28373)){
var comp = cljs.core._nth.call(null,chunk__28372,i__28374);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();

var G__28376 = seq__28370;
var G__28377 = chunk__28372;
var G__28378 = count__28373;
var G__28379 = (i__28374 + (1));
seq__28370 = G__28376;
chunk__28372 = G__28377;
count__28373 = G__28378;
i__28374 = G__28379;
continue;
} else {
var G__28380 = seq__28370;
var G__28381 = chunk__28372;
var G__28382 = count__28373;
var G__28383 = (i__28374 + (1));
seq__28370 = G__28380;
chunk__28372 = G__28381;
count__28373 = G__28382;
i__28374 = G__28383;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28370);
if(temp__4657__auto__){
var seq__28370__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28370__$1)){
var c__9404__auto__ = cljs.core.chunk_first.call(null,seq__28370__$1);
var G__28384 = cljs.core.chunk_rest.call(null,seq__28370__$1);
var G__28385 = c__9404__auto__;
var G__28386 = cljs.core.count.call(null,c__9404__auto__);
var G__28387 = (0);
seq__28370 = G__28384;
chunk__28372 = G__28385;
count__28373 = G__28386;
i__28374 = G__28387;
continue;
} else {
var comp = cljs.core.first.call(null,seq__28370__$1);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();

var G__28388 = cljs.core.next.call(null,seq__28370__$1);
var G__28389 = null;
var G__28390 = (0);
var G__28391 = (0);
seq__28370 = G__28388;
chunk__28372 = G__28389;
count__28373 = G__28390;
i__28374 = G__28391;
continue;
} else {
var G__28392 = cljs.core.next.call(null,seq__28370__$1);
var G__28393 = null;
var G__28394 = (0);
var G__28395 = (0);
seq__28370 = G__28392;
chunk__28372 = G__28393;
count__28373 = G__28394;
i__28374 = G__28395;
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
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Hydrates server rendered DOM tree with provided component.
 */
rum.core.hydrate = (function rum$core$hydrate(component,node){
return ReactDOM.hydrate(component,node);
});
/**
 * Render `component` in a DOM `node` that might be ouside of current DOM hierarchy
 */
rum.core.portal = (function rum$core$portal(component,node){
return ReactDOM.createPortal(component,node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var args28396 = [];
var len__9664__auto___28399 = arguments.length;
var i__9665__auto___28400 = (0);
while(true){
if((i__9665__auto___28400 < len__9664__auto___28399)){
args28396.push((arguments[i__9665__auto___28400]));

var G__28401 = (i__9665__auto___28400 + (1));
i__9665__auto___28400 = G__28401;
continue;
} else {
}
break;
}

var G__28398 = args28396.length;
switch (G__28398) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28396.length)].join('')));

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
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_28403 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__28404 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__28404,(0),null);
var next_state = cljs.core.nth.call(null,vec__28404,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__28407_28419 = cljs.core.seq.call(null,old_reactions);
var chunk__28408_28420 = null;
var count__28409_28421 = (0);
var i__28410_28422 = (0);
while(true){
if((i__28410_28422 < count__28409_28421)){
var ref_28423 = cljs.core._nth.call(null,chunk__28408_28420,i__28410_28422);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_28423)){
} else {
cljs.core.remove_watch.call(null,ref_28423,key);
}

var G__28424 = seq__28407_28419;
var G__28425 = chunk__28408_28420;
var G__28426 = count__28409_28421;
var G__28427 = (i__28410_28422 + (1));
seq__28407_28419 = G__28424;
chunk__28408_28420 = G__28425;
count__28409_28421 = G__28426;
i__28410_28422 = G__28427;
continue;
} else {
var temp__4657__auto___28428 = cljs.core.seq.call(null,seq__28407_28419);
if(temp__4657__auto___28428){
var seq__28407_28429__$1 = temp__4657__auto___28428;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28407_28429__$1)){
var c__9404__auto___28430 = cljs.core.chunk_first.call(null,seq__28407_28429__$1);
var G__28431 = cljs.core.chunk_rest.call(null,seq__28407_28429__$1);
var G__28432 = c__9404__auto___28430;
var G__28433 = cljs.core.count.call(null,c__9404__auto___28430);
var G__28434 = (0);
seq__28407_28419 = G__28431;
chunk__28408_28420 = G__28432;
count__28409_28421 = G__28433;
i__28410_28422 = G__28434;
continue;
} else {
var ref_28435 = cljs.core.first.call(null,seq__28407_28429__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_28435)){
} else {
cljs.core.remove_watch.call(null,ref_28435,key);
}

var G__28436 = cljs.core.next.call(null,seq__28407_28429__$1);
var G__28437 = null;
var G__28438 = (0);
var G__28439 = (0);
seq__28407_28419 = G__28436;
chunk__28408_28420 = G__28437;
count__28409_28421 = G__28438;
i__28410_28422 = G__28439;
continue;
}
} else {
}
}
break;
}

var seq__28411_28440 = cljs.core.seq.call(null,new_reactions);
var chunk__28412_28441 = null;
var count__28413_28442 = (0);
var i__28414_28443 = (0);
while(true){
if((i__28414_28443 < count__28413_28442)){
var ref_28444 = cljs.core._nth.call(null,chunk__28412_28441,i__28414_28443);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_28444)){
} else {
cljs.core.add_watch.call(null,ref_28444,key,((function (seq__28411_28440,chunk__28412_28441,count__28413_28442,i__28414_28443,ref_28444,comp,old_reactions,vec__28404,dom,next_state,new_reactions,key,_STAR_reactions_STAR_28403){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__28411_28440,chunk__28412_28441,count__28413_28442,i__28414_28443,ref_28444,comp,old_reactions,vec__28404,dom,next_state,new_reactions,key,_STAR_reactions_STAR_28403))
);
}

var G__28445 = seq__28411_28440;
var G__28446 = chunk__28412_28441;
var G__28447 = count__28413_28442;
var G__28448 = (i__28414_28443 + (1));
seq__28411_28440 = G__28445;
chunk__28412_28441 = G__28446;
count__28413_28442 = G__28447;
i__28414_28443 = G__28448;
continue;
} else {
var temp__4657__auto___28449 = cljs.core.seq.call(null,seq__28411_28440);
if(temp__4657__auto___28449){
var seq__28411_28450__$1 = temp__4657__auto___28449;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28411_28450__$1)){
var c__9404__auto___28451 = cljs.core.chunk_first.call(null,seq__28411_28450__$1);
var G__28452 = cljs.core.chunk_rest.call(null,seq__28411_28450__$1);
var G__28453 = c__9404__auto___28451;
var G__28454 = cljs.core.count.call(null,c__9404__auto___28451);
var G__28455 = (0);
seq__28411_28440 = G__28452;
chunk__28412_28441 = G__28453;
count__28413_28442 = G__28454;
i__28414_28443 = G__28455;
continue;
} else {
var ref_28456 = cljs.core.first.call(null,seq__28411_28450__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_28456)){
} else {
cljs.core.add_watch.call(null,ref_28456,key,((function (seq__28411_28440,chunk__28412_28441,count__28413_28442,i__28414_28443,ref_28456,seq__28411_28450__$1,temp__4657__auto___28449,comp,old_reactions,vec__28404,dom,next_state,new_reactions,key,_STAR_reactions_STAR_28403){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__28411_28440,chunk__28412_28441,count__28413_28442,i__28414_28443,ref_28456,seq__28411_28450__$1,temp__4657__auto___28449,comp,old_reactions,vec__28404,dom,next_state,new_reactions,key,_STAR_reactions_STAR_28403))
);
}

var G__28457 = cljs.core.next.call(null,seq__28411_28450__$1);
var G__28458 = null;
var G__28459 = (0);
var G__28460 = (0);
seq__28411_28440 = G__28457;
chunk__28412_28441 = G__28458;
count__28413_28442 = G__28459;
i__28414_28443 = G__28460;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_28403;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_28461 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__28415_28462 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__28416_28463 = null;
var count__28417_28464 = (0);
var i__28418_28465 = (0);
while(true){
if((i__28418_28465 < count__28417_28464)){
var ref_28466 = cljs.core._nth.call(null,chunk__28416_28463,i__28418_28465);
cljs.core.remove_watch.call(null,ref_28466,key_28461);

var G__28467 = seq__28415_28462;
var G__28468 = chunk__28416_28463;
var G__28469 = count__28417_28464;
var G__28470 = (i__28418_28465 + (1));
seq__28415_28462 = G__28467;
chunk__28416_28463 = G__28468;
count__28417_28464 = G__28469;
i__28418_28465 = G__28470;
continue;
} else {
var temp__4657__auto___28471 = cljs.core.seq.call(null,seq__28415_28462);
if(temp__4657__auto___28471){
var seq__28415_28472__$1 = temp__4657__auto___28471;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28415_28472__$1)){
var c__9404__auto___28473 = cljs.core.chunk_first.call(null,seq__28415_28472__$1);
var G__28474 = cljs.core.chunk_rest.call(null,seq__28415_28472__$1);
var G__28475 = c__9404__auto___28473;
var G__28476 = cljs.core.count.call(null,c__9404__auto___28473);
var G__28477 = (0);
seq__28415_28462 = G__28474;
chunk__28416_28463 = G__28475;
count__28417_28464 = G__28476;
i__28418_28465 = G__28477;
continue;
} else {
var ref_28478 = cljs.core.first.call(null,seq__28415_28472__$1);
cljs.core.remove_watch.call(null,ref_28478,key_28461);

var G__28479 = cljs.core.next.call(null,seq__28415_28472__$1);
var G__28480 = null;
var G__28481 = (0);
var G__28482 = (0);
seq__28415_28462 = G__28479;
chunk__28416_28463 = G__28480;
count__28417_28464 = G__28481;
i__28418_28465 = G__28482;
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
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
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
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__9671__auto__ = [];
var len__9664__auto___28489 = arguments.length;
var i__9665__auto___28490 = (0);
while(true){
if((i__9665__auto___28490 < len__9664__auto___28489)){
args__9671__auto__.push((arguments[i__9665__auto___28490]));

var G__28491 = (i__9665__auto___28490 + (1));
i__9665__auto___28490 = G__28491;
continue;
} else {
}
break;
}

var argseq__9672__auto__ = ((((2) < args__9671__auto__.length))?(new cljs.core.IndexedSeq(args__9671__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9672__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__28486){
var map__28487 = p__28486;
var map__28487__$1 = ((((!((map__28487 == null)))?((((map__28487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28487):map__28487);
var options = map__28487__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq28483){
var G__28484 = cljs.core.first.call(null,seq28483);
var seq28483__$1 = cljs.core.next.call(null,seq28483);
var G__28485 = cljs.core.first.call(null,seq28483__$1);
var seq28483__$2 = cljs.core.next.call(null,seq28483__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__28484,G__28485,seq28483__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__9671__auto__ = [];
var len__9664__auto___28495 = arguments.length;
var i__9665__auto___28496 = (0);
while(true){
if((i__9665__auto___28496 < len__9664__auto___28495)){
args__9671__auto__.push((arguments[i__9665__auto___28496]));

var G__28497 = (i__9665__auto___28496 + (1));
i__9665__auto___28496 = G__28497;
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

rum.core.cursor.cljs$lang$applyTo = (function (seq28492){
var G__28493 = cljs.core.first.call(null,seq28492);
var seq28492__$1 = cljs.core.next.call(null,seq28492);
var G__28494 = cljs.core.first.call(null,seq28492__$1);
var seq28492__$2 = cljs.core.next.call(null,seq28492__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__28493,G__28494,seq28492__$2);
});


//# sourceMappingURL=core.js.map