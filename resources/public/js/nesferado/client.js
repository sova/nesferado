// Compiled by ClojureScript 1.9.229 {}
goog.provide('nesferado.client');
goog.require('cljs.core');
goog.require('taoensso.sente');
goog.require('taoensso.sente.packers.transit');
goog.require('taoensso.timbre');
goog.require('cljs.core.async');
goog.require('rum.core');
goog.require('alandipert.storage_atom');
goog.require('taoensso.encore');
goog.require('clojure.string');
nesferado.client.output_el = document.getElementById("output");
nesferado.client.__GT_output_BANG_ = (function nesferado$client$__GT_output_BANG_(var_args){
var args__9671__auto__ = [];
var len__9664__auto___30386 = arguments.length;
var i__9665__auto___30387 = (0);
while(true){
if((i__9665__auto___30387 < len__9664__auto___30386)){
args__9671__auto__.push((arguments[i__9665__auto___30387]));

var G__30388 = (i__9665__auto___30387 + (1));
i__9665__auto___30387 = G__30388;
continue;
} else {
}
break;
}

var argseq__9672__auto__ = ((((1) < args__9671__auto__.length))?(new cljs.core.IndexedSeq(args__9671__auto__.slice((1)),(0),null)):null);
return nesferado.client.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9672__auto__);
});

nesferado.client.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var msg = cljs.core.apply.call(null,taoensso.encore.format,fmt,args);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"nesferado.client","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init9103189383811843767.clj",27,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (msg){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null);
});})(msg))
,null)),null,-470202319);

(nesferado.client.output_el["value"] = [cljs.core.str("\u2022 "),cljs.core.str(nesferado.client.output_el.value),cljs.core.str("\n"),cljs.core.str(msg)].join(''));

return (nesferado.client.output_el["scrollTop"] = nesferado.client.output_el.scrollHeight);
});

nesferado.client.__GT_output_BANG_.cljs$lang$maxFixedArity = (1);

nesferado.client.__GT_output_BANG_.cljs$lang$applyTo = (function (seq30384){
var G__30385 = cljs.core.first.call(null,seq30384);
var seq30384__$1 = cljs.core.next.call(null,seq30384);
return nesferado.client.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30385,seq30384__$1);
});

nesferado.client.__GT_output_BANG_.call(null,"ClojureScript appears to have loaded correctly.");
var rand_chsk_type_30391 = (((cljs.core.rand.call(null) >= 0.5))?new cljs.core.Keyword(null,"ajax","ajax",814345549):new cljs.core.Keyword(null,"auto","auto",-566279492));
var __30392 = nesferado.client.__GT_output_BANG_.call(null,"Randomly selected chsk type: %s",rand_chsk_type_30391);
var packer_30393 = new cljs.core.Keyword(null,"edn","edn",1317840885);
var map__30389_30394 = taoensso.sente.make_channel_socket_client_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),rand_chsk_type_30391,new cljs.core.Keyword(null,"packer","packer",66077544),packer_30393], null));
var map__30389_30395__$1 = ((((!((map__30389_30394 == null)))?((((map__30389_30394.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30389_30394.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30389_30394):map__30389_30394);
var chsk_30396 = cljs.core.get.call(null,map__30389_30395__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_30397 = cljs.core.get.call(null,map__30389_30395__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_30398 = cljs.core.get.call(null,map__30389_30395__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_30399 = cljs.core.get.call(null,map__30389_30395__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
nesferado.client.chsk = chsk_30396;

nesferado.client.ch_chsk = ch_recv_30397;

nesferado.client.chsk_send_BANG_ = send_fn_30398;

nesferado.client.chsk_state = state_30399;
if(typeof nesferado.client._event_msg_handler !== 'undefined'){
} else {
/**
 * Multimethod to handle Sente `event-msg`s
 */
nesferado.client._event_msg_handler = (function (){var method_table__9518__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9519__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9520__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9521__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9522__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"nesferado.client","-event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9522__auto__,method_table__9518__auto__,prefer_table__9519__auto__,method_cache__9520__auto__,cached_hierarchy__9521__auto__));
})();
}
/**
 * Wraps `-event-msg-handler` with logging, error catching, etc.
 */
nesferado.client.event_msg_handler = (function nesferado$client$event_msg_handler(p__30400){
var map__30403 = p__30400;
var map__30403__$1 = ((((!((map__30403 == null)))?((((map__30403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30403):map__30403);
var ev_msg = map__30403__$1;
var id = cljs.core.get.call(null,map__30403__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__30403__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__30403__$1,new cljs.core.Keyword(null,"event","event",301435442));
return nesferado.client._event_msg_handler.call(null,ev_msg);
});
cljs.core._add_method.call(null,nesferado.client._event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__30405){
var map__30406 = p__30405;
var map__30406__$1 = ((((!((map__30406 == null)))?((((map__30406.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30406.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30406):map__30406);
var ev_msg = map__30406__$1;
var event = cljs.core.get.call(null,map__30406__$1,new cljs.core.Keyword(null,"event","event",301435442));
return nesferado.client.__GT_output_BANG_.call(null,"Unhandled event: %s",event);
}));
cljs.core._add_method.call(null,nesferado.client._event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__30408){
var map__30409 = p__30408;
var map__30409__$1 = ((((!((map__30409 == null)))?((((map__30409.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30409.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30409):map__30409);
var ev_msg = map__30409__$1;
var _QMARK_data = cljs.core.get.call(null,map__30409__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__30411 = (function (){var e = (function (){try{if(cljs.core.vector_QMARK_.call(null,_QMARK_data)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e30414){if((e30414 instanceof Error)){
var e = e30414;
return e;
} else {
throw e30414;

}
}})();
if((e == null)){
return _QMARK_data;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"nesferado.client",null,"(vector? ?data)",_QMARK_data,e,null);
}
})();
var old_state_map = cljs.core.nth.call(null,vec__30411,(0),null);
var new_state_map = cljs.core.nth.call(null,vec__30411,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(new_state_map))){
return nesferado.client.__GT_output_BANG_.call(null,"Channel socket successfully established!: %s",new_state_map);
} else {
return nesferado.client.__GT_output_BANG_.call(null,"Channel socket state change: %s",new_state_map);
}
}));
cljs.core._add_method.call(null,nesferado.client._event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__30415){
var map__30416 = p__30415;
var map__30416__$1 = ((((!((map__30416 == null)))?((((map__30416.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30416.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30416):map__30416);
var ev_msg = map__30416__$1;
var _QMARK_data = cljs.core.get.call(null,map__30416__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return nesferado.client.__GT_output_BANG_.call(null,"Push event from server: %s",_QMARK_data);
}));
cljs.core._add_method.call(null,nesferado.client._event_msg_handler,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__30418){
var map__30419 = p__30418;
var map__30419__$1 = ((((!((map__30419 == null)))?((((map__30419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30419):map__30419);
var ev_msg = map__30419__$1;
var _QMARK_data = cljs.core.get.call(null,map__30419__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__30421 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.call(null,vec__30421,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__30421,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__30421,(2),null);
return nesferado.client.__GT_output_BANG_.call(null,"Handshake: %s",_QMARK_data);
}));
if(typeof nesferado.client.router_ !== 'undefined'){
} else {
nesferado.client.router_ = cljs.core.atom.call(null,null);
}
nesferado.client.stop_router_BANG_ = (function nesferado$client$stop_router_BANG_(){
var temp__4657__auto__ = cljs.core.deref.call(null,nesferado.client.router_);
if(cljs.core.truth_(temp__4657__auto__)){
var stop_f = temp__4657__auto__;
return stop_f.call(null);
} else {
return null;
}
});
nesferado.client.start_router_BANG_ = (function nesferado$client$start_router_BANG_(){
nesferado.client.stop_router_BANG_.call(null);

return cljs.core.reset_BANG_.call(null,nesferado.client.router_,taoensso.sente.start_client_chsk_router_BANG_.call(null,nesferado.client.ch_chsk,nesferado.client.event_msg_handler));
});
var temp__4657__auto___30424 = document.getElementById("btn1");
if(cljs.core.truth_(temp__4657__auto___30424)){
var target_el_30425 = temp__4657__auto___30424;
target_el_30425.addEventListener("click",((function (target_el_30425,temp__4657__auto___30424){
return (function (ev){
nesferado.client.__GT_output_BANG_.call(null,"Button 1 was clicked (won't receive any reply from server)");

return nesferado.client.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","button1","example/button1",-349884645),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"had-a-callback?","had-a-callback?",-512946762),"nope"], null)], null));
});})(target_el_30425,temp__4657__auto___30424))
);
} else {
}
var temp__4657__auto___30426 = document.getElementById("btn2");
if(cljs.core.truth_(temp__4657__auto___30426)){
var target_el_30427 = temp__4657__auto___30426;
target_el_30427.addEventListener("click",((function (target_el_30427,temp__4657__auto___30426){
return (function (ev){
nesferado.client.__GT_output_BANG_.call(null,"Button 2 was clicked (will receive reply from server)");

return nesferado.client.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","button2","example/button2",-675598425),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"had-a-callback?","had-a-callback?",-512946762),"indeed"], null)], null),(5000),((function (target_el_30427,temp__4657__auto___30426){
return (function (cb_reply){
return nesferado.client.__GT_output_BANG_.call(null,"Callback reply: %s",cb_reply);
});})(target_el_30427,temp__4657__auto___30426))
);
});})(target_el_30427,temp__4657__auto___30426))
);
} else {
}
var temp__4657__auto___30428 = document.getElementById("btn3");
if(cljs.core.truth_(temp__4657__auto___30428)){
var target_el_30429 = temp__4657__auto___30428;
target_el_30429.addEventListener("click",((function (target_el_30429,temp__4657__auto___30428){
return (function (ev){
nesferado.client.__GT_output_BANG_.call(null,"Button 3 was clicked (will ask server to test rapid async push)");

return nesferado.client.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","test-rapid-push","example/test-rapid-push",-93412097)], null));
});})(target_el_30429,temp__4657__auto___30428))
);
} else {
}
var temp__4657__auto___30430 = document.getElementById("btn4");
if(cljs.core.truth_(temp__4657__auto___30430)){
var target_el_30431 = temp__4657__auto___30430;
target_el_30431.addEventListener("click",((function (target_el_30431,temp__4657__auto___30430){
return (function (ev){
nesferado.client.__GT_output_BANG_.call(null,"Button 4 was clicked (will toggle async broadcast loop)");

return nesferado.client.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","toggle-broadcast","example/toggle-broadcast",-1640005413)], null),(5000),((function (target_el_30431,temp__4657__auto___30430){
return (function (cb_reply){
if(cljs.core.truth_(taoensso.sente.cb_success_QMARK_.call(null,cb_reply))){
var loop_enabled_QMARK_ = cb_reply;
if(cljs.core.truth_(loop_enabled_QMARK_)){
return nesferado.client.__GT_output_BANG_.call(null,"Async broadcast loop now enabled");
} else {
return nesferado.client.__GT_output_BANG_.call(null,"Async broadcast loop now disabled");
}
} else {
return null;
}
});})(target_el_30431,temp__4657__auto___30430))
);
});})(target_el_30431,temp__4657__auto___30430))
);
} else {
}
var temp__4657__auto___30432 = document.getElementById("btn5");
if(cljs.core.truth_(temp__4657__auto___30432)){
var target_el_30433 = temp__4657__auto___30432;
target_el_30433.addEventListener("click",((function (target_el_30433,temp__4657__auto___30432){
return (function (ev){
nesferado.client.__GT_output_BANG_.call(null,"Disconnecting");

return taoensso.sente.chsk_disconnect_BANG_.call(null,nesferado.client.chsk);
});})(target_el_30433,temp__4657__auto___30432))
);
} else {
}
var temp__4657__auto___30434 = document.getElementById("btn6");
if(cljs.core.truth_(temp__4657__auto___30434)){
var target_el_30435 = temp__4657__auto___30434;
target_el_30435.addEventListener("click",((function (target_el_30435,temp__4657__auto___30434){
return (function (ev){
nesferado.client.__GT_output_BANG_.call(null,"Reconnecting");

return taoensso.sente.chsk_reconnect_BANG_.call(null,nesferado.client.chsk);
});})(target_el_30435,temp__4657__auto___30434))
);
} else {
}
var temp__4657__auto___30436 = document.getElementById("btn-login");
if(cljs.core.truth_(temp__4657__auto___30436)){
var target_el_30437 = temp__4657__auto___30436;
target_el_30437.addEventListener("click",((function (target_el_30437,temp__4657__auto___30436){
return (function (ev){
var user_id = document.getElementById("input-login").value;
if(clojure.string.blank_QMARK_.call(null,user_id)){
return alert("Please enter a user-id first");
} else {
nesferado.client.__GT_output_BANG_.call(null,"Logging in with user-id %s",user_id);

return taoensso.sente.ajax_lite.call(null,"/login",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,nesferado.client.chsk_state))], null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),[cljs.core.str(user_id)].join('')], null)], null),((function (user_id,target_el_30437,temp__4657__auto___30436){
return (function (ajax_resp){
nesferado.client.__GT_output_BANG_.call(null,"Ajax login response: %s",ajax_resp);

var login_successful_QMARK_ = true;
if(!(login_successful_QMARK_)){
return nesferado.client.__GT_output_BANG_.call(null,"Login failed");
} else {
nesferado.client.__GT_output_BANG_.call(null,"Login successful");

return taoensso.sente.chsk_reconnect_BANG_.call(null,nesferado.client.chsk);
}
});})(user_id,target_el_30437,temp__4657__auto___30436))
);
}
});})(target_el_30437,temp__4657__auto___30436))
);
} else {
}
nesferado.client.err0r = (function nesferado$client$err0r(){
return cljs.core.println.call(null,"err0r");
});
nesferado.client.message_sent_boomerang = (function nesferado$client$message_sent_boomerang(ok,result){
cljs.core.println.call(null,ok,result,"** **");

return console.log("hey the result!");
});
if(typeof nesferado.client.app_state !== 'undefined'){
} else {
nesferado.client.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
nesferado.client.tv_state = alandipert.storage_atom.local_storage.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tiles","tiles",178505240),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),"Fusion Power Imminent",new cljs.core.Keyword(null,"contents","contents",-1567174023),"Horne Technologies has developed a working Plasma Containment Prototype for furthering Fusion",new cljs.core.Keyword(null,"priority","priority",1431093715),(1),new cljs.core.Keyword(null,"posted-by","posted-by",-66955024),"v@nonforum.com",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(808080808),new cljs.core.Keyword(null,"parent","parent",-878878779),null], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),"Let's Put Sun Panels on the Roof",new cljs.core.Keyword(null,"contents","contents",-1567174023),"Put a powerplant on your home and be free of your electric bill",new cljs.core.Keyword(null,"priority","priority",1431093715),(2),new cljs.core.Keyword(null,"posted-by","posted-by",-66955024),"v@nonforum.com",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(808080808),new cljs.core.Keyword(null,"parent","parent",-878878779),null], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),"Tonsky/rum is excellent for cljs",new cljs.core.Keyword(null,"contents","contents",-1567174023),"the best way to be the best",new cljs.core.Keyword(null,"priority","priority",1431093715),(3),new cljs.core.Keyword(null,"posted-by","posted-by",-66955024),"v@nonforum.com",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(808080808),new cljs.core.Keyword(null,"parent","parent",-878878779),null], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",636505583),"Postpostpost",new cljs.core.Keyword(null,"contents","contents",-1567174023),"this is the post!",new cljs.core.Keyword(null,"link","link",-1769163468),"http://hysterical.com",new cljs.core.Keyword(null,"priority","priority",1431093715),(4),new cljs.core.Keyword(null,"posted-by","posted-by",-66955024),"v@nonforum.com",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(808080808),new cljs.core.Keyword(null,"parent","parent",-878878779),null], null)], null)], null)),new cljs.core.Keyword(null,"tv","tv",-1805207359));
nesferado.client.input_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"contents","contents",-1567174023),"",new cljs.core.Keyword(null,"comment","comment",532206069),"ur coment"], null)], null)], null));
nesferado.client.js_reload = (function nesferado$client$js_reload(){
return console.log("javascript reloaded ^_^;");
});
nesferado.client.fb_sdk = rum.core.build_defc.call(null,(function (app_id){
return React.createElement("script",({"type": "text/javascript"}),sablono.interpreter.interpret.call(null,[cljs.core.str("window.fbAsyncInit = function() {\n    FB.init({\n      appId      : '"),cljs.core.str(app_id),cljs.core.str("',\n      cookie     : true,\n      xfbml      : true,\n      version    : '3.2'\n    });\n\n    FB.AppEvents.logPageView();\n\n  };\n\n  (function(d, s, id){\n     var js, fjs = d.getElementsByTagName(s)[0];\n     if (d.getElementById(id)) {return;}\n     js = d.createElement(s); js.id = id;\n     js.src = 'https://connect.facebook.net/en_US/sdk.js';\n     fjs.parentNode.insertBefore(js, fjs);\n   }(document, 'script', 'facebook-jssdk'));")].join('')));
}),null,"fb-sdk");
nesferado.client.link = rum.core.build_defc.call(null,(function (address){
return React.createElement("a",({"href": address}),sablono.interpreter.interpret.call(null,address));
}),null,"link");
nesferado.client.hello_world = rum.core.build_defc.call(null,(function (){
return React.createElement("div",null,(function (){var attrs30438 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,nesferado.client.app_state));
return cljs.core.apply.call(null,React.createElement,"h1",((cljs.core.map_QMARK_.call(null,attrs30438))?sablono.interpreter.attributes.call(null,attrs30438):null),((cljs.core.map_QMARK_.call(null,attrs30438))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30438)], null)));
})(),React.createElement("h3",null,"Edit this and watch it change!"),React.createElement("h4",null,"Nonforum lives again!"));
}),null,"hello-world");
nesferado.client.top_bar = rum.core.build_defc.call(null,(function (){
return React.createElement("div",({"id": "topbar"}),React.createElement("ol",({"className": "topbar"}),React.createElement("li",null,React.createElement("a",({"href": "/"}),"nonforum")),(function (){var attrs30445 = nesferado.client.link.call(null,"top");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs30445))?sablono.interpreter.attributes.call(null,attrs30445):null),((cljs.core.map_QMARK_.call(null,attrs30445))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30445)], null)));
})(),(function (){var attrs30446 = nesferado.client.link.call(null,"latest");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs30446))?sablono.interpreter.attributes.call(null,attrs30446):null),((cljs.core.map_QMARK_.call(null,attrs30446))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30446)], null)));
})(),(function (){var attrs30447 = nesferado.client.link.call(null,"submit");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs30447))?sablono.interpreter.attributes.call(null,attrs30447):null),((cljs.core.map_QMARK_.call(null,attrs30447))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30447)], null)));
})(),(function (){var attrs30448 = nesferado.client.link.call(null,"feed");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs30448))?sablono.interpreter.attributes.call(null,attrs30448):null),((cljs.core.map_QMARK_.call(null,attrs30448))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30448)], null)));
})()));
}),null,"top-bar");
nesferado.client.side_bar = rum.core.build_defc.call(null,(function (){
return React.createElement("div",({"id": "sidebar"}),React.createElement("ol",({"className": "sidebar"}),(function (){var attrs30449 = nesferado.client.link.call(null,"profile");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs30449))?sablono.interpreter.attributes.call(null,attrs30449):null),((cljs.core.map_QMARK_.call(null,attrs30449))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30449)], null)));
})(),(function (){var attrs30450 = nesferado.client.link.call(null,"settings & pls omg no moar hax");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs30450))?sablono.interpreter.attributes.call(null,attrs30450):null),((cljs.core.map_QMARK_.call(null,attrs30450))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30450)], null)));
})(),(function (){var attrs30451 = nesferado.client.link.call(null,"feedback & hax");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs30451))?sablono.interpreter.attributes.call(null,attrs30451):null),((cljs.core.map_QMARK_.call(null,attrs30451))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30451)], null)));
})(),(function (){var attrs30452 = nesferado.client.link.call(null,"logout");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs30452))?sablono.interpreter.attributes.call(null,attrs30452):null),((cljs.core.map_QMARK_.call(null,attrs30452))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30452)], null)));
})()));
}),null,"side-bar");
nesferado.client.login_bar = rum.core.build_defc.call(null,(function (){
return React.createElement("div",({"id": "loginbar"}),React.createElement("ol",({"className": "loginbar"}),React.createElement("li",({"className": "fbfb"}),React.createElement("a",({"href": "/facebook"}),"Continue with Facebook as ___")),React.createElement("li",({"className": "gogo"}),React.createElement("a",({"href": "/gogole"}),"Google Login")),React.createElement("li",({"className": "twtw"}),React.createElement("a",({"href": "/twitter"}),"Twitter Login")),React.createElement("li",({"className": "nfnf"}),React.createElement("a",({"href": "/nflogin"}),"Nonforum Login"))),sablono.interpreter.interpret.call(null,nesferado.client.fb_sdk.call(null,(1417763311691300))));
}),null,"login-bar");
nesferado.client.tv_cell = rum.core.build_defc.call(null,(function (td){
return React.createElement("li",null,React.createElement("div",({"id": [cljs.core.str("tile"),cljs.core.str(new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(td))].join(''), "className": "tile"}),(function (){var attrs30455 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(td);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs30455))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["heading"], null)], null),attrs30455)):({"className": "heading"})),((cljs.core.map_QMARK_.call(null,attrs30455))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30455)], null)));
})(),(function (){var attrs30456 = new cljs.core.Keyword(null,"contents","contents",-1567174023).cljs$core$IFn$_invoke$arity$1(td);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs30456))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["contents"], null)], null),attrs30456)):({"className": "contents"})),((cljs.core.map_QMARK_.call(null,attrs30456))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30456)], null)));
})(),(function (){var attrs30457 = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(td);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs30457))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["priority"], null)], null),attrs30457)):({"className": "priority"})),((cljs.core.map_QMARK_.call(null,attrs30457))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30457)], null)));
})()));
}),null,"tv-cell");
nesferado.client.television = rum.core.build_defc.call(null,(function (){
return React.createElement("div",({"id": "tv"}),(function (){var attrs30458 = cljs.core.map.call(null,nesferado.client.tv_cell,new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,nesferado.client.tv_state)));
return cljs.core.apply.call(null,React.createElement,"ol",((cljs.core.map_QMARK_.call(null,attrs30458))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tv"], null)], null),attrs30458)):({"className": "tv"})),((cljs.core.map_QMARK_.call(null,attrs30458))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30458)], null)));
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"television");
nesferado.client.post_input = rum.core.build_defc.call(null,(function (){
return React.createElement("form",({"id": "postinput"}),sablono.interpreter.create_element.call(null,"input",({"placeHolder": "title", "onChange": (function (e){
cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"title","title",636505583)], null),e.target.value);

return console.log(cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"title","title",636505583)], null)));
}), "className": "fullwidth"})),sablono.interpreter.create_element.call(null,"input",({"placeHolder": "contents", "onChange": (function (e){
cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"contents","contents",-1567174023)], null),e.target.value);

return console.log(cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"contents","contents",-1567174023)], null)));
}), "className": "fullwidth"})),React.createElement("button",({"type": "button", "onClick": (function (e){
console.log("sending..");

console.log(document.getElementById("aft"));

var new_post_map = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"title","title",636505583)], null)),new cljs.core.Keyword(null,"contents","contents",-1567174023),cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"contents","contents",-1567174023)], null)),new cljs.core.Keyword(null,"priority","priority",1431093715),(10),new cljs.core.Keyword(null,"posted-by","posted-by",-66955024),"x@nonforum.com",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(80008),new cljs.core.Keyword(null,"parent","parent",-878878779),null], null);
return cljs.core.swap_BANG_.call(null,nesferado.client.tv_state,cljs.core.update,new cljs.core.Keyword(null,"tiles","tiles",178505240),cljs.core.conj,new_post_map);
}), "className": "fullwidth"}),"post new"));
}),null,"post-input");
nesferado.client.post_comment_input = rum.core.build_defc.call(null,(function (){
return React.createElement("form",({"id": "postcommentinput"}),sablono.interpreter.create_element.call(null,"textarea",({"value": cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"comment","comment",532206069)], null)), "placeHolder": "your comment", "onChange": (function (e){
cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"comment","comment",532206069)], null),e.target.value);

return console.log(cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"comment","comment",532206069)], null)));
}), "className": "fullwidth"})),React.createElement("button",({"type": "submit", "className": "fullwidth"}),"post comment"));
}),null,"post-comment-input");
nesferado.client.ps = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"posts","posts",760043164),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),(777),new cljs.core.Keyword(null,"this-id","this-id",898574567),(555),new cljs.core.Keyword(null,"child-id","child-id",1325542429),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(444),(333),(222),(8888)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),(334),new cljs.core.Keyword(null,"this-id","this-id",898574567),(5353),new cljs.core.Keyword(null,"child-id","child-id",1325542429),(225)], null)], null)], null));
nesferado.client.ant = cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tid","tid",-901350880),(7),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tid","tid",-901350880),(8),new cljs.core.Keyword(null,"contents","contents",-1567174023),"challenges-accepted"], null),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tid","tid",-901350880),(9),new cljs.core.Keyword(null,"contents","contents",-1567174023),"howdyrowdydoo"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tid","tid",-901350880),(10),new cljs.core.Keyword(null,"contents","contents",-1567174023),"supercreativeom"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tid","tid",-901350880),(8),new cljs.core.Keyword(null,"contents","contents",-1567174023),"befreeyo",new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tid","tid",-901350880),(3),new cljs.core.Keyword(null,"contents","contents",-1567174023),"capturelove?"], null)], null)], true, false);
nesferado.client.nest = (function nesferado$client$nest(m){
var iter__9373__auto__ = (function nesferado$client$nest_$_iter__30477(s__30478){
return (new cljs.core.LazySeq(null,(function (){
var s__30478__$1 = s__30478;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30478__$1);
if(temp__4657__auto__){
var s__30478__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30478__$2)){
var c__9371__auto__ = cljs.core.chunk_first.call(null,s__30478__$2);
var size__9372__auto__ = cljs.core.count.call(null,c__9371__auto__);
var b__30480 = cljs.core.chunk_buffer.call(null,size__9372__auto__);
if((function (){var i__30479 = (0);
while(true){
if((i__30479 < size__9372__auto__)){
var vec__30487 = cljs.core._nth.call(null,c__9371__auto__,i__30479);
var k = cljs.core.nth.call(null,vec__30487,(0),null);
var v = cljs.core.nth.call(null,vec__30487,(1),null);
cljs.core.chunk_append.call(null,b__30480,cljs.core.list_STAR_.call(null,[cljs.core.str(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),k,nesferado$client$nest.call(null,v)], null))].join('')));

var G__30493 = (i__30479 + (1));
i__30479 = G__30493;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30480),nesferado$client$nest_$_iter__30477.call(null,cljs.core.chunk_rest.call(null,s__30478__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30480),null);
}
} else {
var vec__30490 = cljs.core.first.call(null,s__30478__$2);
var k = cljs.core.nth.call(null,vec__30490,(0),null);
var v = cljs.core.nth.call(null,vec__30490,(1),null);
return cljs.core.cons.call(null,cljs.core.list_STAR_.call(null,[cljs.core.str(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),k,nesferado$client$nest.call(null,v)], null))].join('')),nesferado$client$nest_$_iter__30477.call(null,cljs.core.rest.call(null,s__30478__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9373__auto__.call(null,m);
});
nesferado.client.nestit = rum.core.build_defc.call(null,(function (){
var attrs30494 = nesferado.client.nest.call(null,cljs.core.deref.call(null,nesferado.client.ant));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs30494))?sablono.interpreter.attributes.call(null,attrs30494):null),((cljs.core.map_QMARK_.call(null,attrs30494))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30494)], null)));
}),null,"nestit");
nesferado.client.nf_login_input = rum.core.build_defc.call(null,(function (){
return React.createElement("form",({"id": "nflogin"}),sablono.interpreter.create_element.call(null,"input",({"placeHolder": "username", "className": "fullwidth"})),sablono.interpreter.create_element.call(null,"input",({"placeHolder": "password", "type": "password", "className": "fullwidth"})),React.createElement("button",({"type": "submit", "className": "fullwidth"}),"login"));
}),null,"nf-login-input");
nesferado.client.input_fields = rum.core.build_defc.call(null,(function (){
var attrs30497 = nesferado.client.post_input.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs30497))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"inputs-contain"], null),attrs30497)):({"id": "inputs-contain"})),((cljs.core.map_QMARK_.call(null,attrs30497))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,nesferado.client.post_comment_input.call(null)),sablono.interpreter.interpret.call(null,nesferado.client.nf_login_input.call(null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30497),sablono.interpreter.interpret.call(null,nesferado.client.post_comment_input.call(null)),sablono.interpreter.interpret.call(null,nesferado.client.nf_login_input.call(null))], null)));
}),null,"input-fields");
nesferado.client.start = rum.core.build_defc.call(null,(function (){
var attrs30498 = nesferado.client.top_bar.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs30498))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"maincontain"], null),attrs30498)):({"id": "maincontain"})),((cljs.core.map_QMARK_.call(null,attrs30498))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,nesferado.client.side_bar.call(null)),sablono.interpreter.interpret.call(null,nesferado.client.login_bar.call(null)),sablono.interpreter.interpret.call(null,nesferado.client.television.call(null)),sablono.interpreter.interpret.call(null,nesferado.client.hello_world.call(null))], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30498),sablono.interpreter.interpret.call(null,nesferado.client.side_bar.call(null)),sablono.interpreter.interpret.call(null,nesferado.client.login_bar.call(null)),sablono.interpreter.interpret.call(null,nesferado.client.television.call(null)),sablono.interpreter.interpret.call(null,nesferado.client.hello_world.call(null))], null)));
}),null,"start");
rum.core.mount.call(null,nesferado.client.start.call(null),document.getElementById("start"));
rum.core.mount.call(null,nesferado.client.input_fields.call(null),document.getElementById("inputs"));
nesferado.client.on_js_reload = (function nesferado$client$on_js_reload(){
return null;
});
nesferado.client.start_BANG_ = (function nesferado$client$start_BANG_(){
return nesferado.client.start_router_BANG_.call(null);
});
if(typeof nesferado.client._start_once !== 'undefined'){
} else {
nesferado.client._start_once = nesferado.client.start_BANG_.call(null);
}

//# sourceMappingURL=client.js.map