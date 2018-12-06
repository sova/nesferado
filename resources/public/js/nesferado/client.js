// Compiled by ClojureScript 1.9.229 {}
<<<<<<< HEAD
=======
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
var args__26867__auto__ = [];
var len__26860__auto___40456 = arguments.length;
var i__26861__auto___40457 = (0);
while(true){
if((i__26861__auto___40457 < len__26860__auto___40456)){
args__26867__auto__.push((arguments[i__26861__auto___40457]));

var G__40458 = (i__26861__auto___40457 + (1));
i__26861__auto___40457 = G__40458;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((1) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((1)),(0),null)):null);
return nesferado.client.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26868__auto__);
});

nesferado.client.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var msg = cljs.core.apply.call(null,taoensso.encore.format,fmt,args);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"nesferado.client","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init4315193274353185829.clj",27,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (msg){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null);
});})(msg))
,null)),null,289753274);

(nesferado.client.output_el["value"] = [cljs.core.str("\u2022 "),cljs.core.str(nesferado.client.output_el.value),cljs.core.str("\n"),cljs.core.str(msg)].join(''));

return (nesferado.client.output_el["scrollTop"] = nesferado.client.output_el.scrollHeight);
});

nesferado.client.__GT_output_BANG_.cljs$lang$maxFixedArity = (1);

nesferado.client.__GT_output_BANG_.cljs$lang$applyTo = (function (seq40454){
var G__40455 = cljs.core.first.call(null,seq40454);
var seq40454__$1 = cljs.core.next.call(null,seq40454);
return nesferado.client.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40455,seq40454__$1);
});

nesferado.client.__GT_output_BANG_.call(null,"ClojureScript appears to have loaded correctly.");
var rand_chsk_type_40461 = (((cljs.core.rand.call(null) >= 0.5))?new cljs.core.Keyword(null,"ajax","ajax",814345549):new cljs.core.Keyword(null,"auto","auto",-566279492));
var __40462 = nesferado.client.__GT_output_BANG_.call(null,"Randomly selected chsk type: %s",rand_chsk_type_40461);
var packer_40463 = new cljs.core.Keyword(null,"edn","edn",1317840885);
var map__40459_40464 = taoensso.sente.make_channel_socket_client_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),rand_chsk_type_40461,new cljs.core.Keyword(null,"packer","packer",66077544),packer_40463], null));
var map__40459_40465__$1 = ((((!((map__40459_40464 == null)))?((((map__40459_40464.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40459_40464.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40459_40464):map__40459_40464);
var chsk_40466 = cljs.core.get.call(null,map__40459_40465__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_40467 = cljs.core.get.call(null,map__40459_40465__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_40468 = cljs.core.get.call(null,map__40459_40465__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_40469 = cljs.core.get.call(null,map__40459_40465__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
nesferado.client.chsk = chsk_40466;

nesferado.client.ch_chsk = ch_recv_40467;

nesferado.client.chsk_send_BANG_ = send_fn_40468;

nesferado.client.chsk_state = state_40469;
if(typeof nesferado.client._event_msg_handler !== 'undefined'){
} else {
/**
 * Multimethod to handle Sente `event-msg`s
 */
nesferado.client._event_msg_handler = (function (){var method_table__26710__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26711__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26712__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26713__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26714__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"nesferado.client","-event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26714__auto__,method_table__26710__auto__,prefer_table__26711__auto__,method_cache__26712__auto__,cached_hierarchy__26713__auto__));
})();
}
/**
 * Wraps `-event-msg-handler` with logging, error catching, etc.
 */
nesferado.client.event_msg_handler = (function nesferado$client$event_msg_handler(p__40470){
var map__40473 = p__40470;
var map__40473__$1 = ((((!((map__40473 == null)))?((((map__40473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40473):map__40473);
var ev_msg = map__40473__$1;
var id = cljs.core.get.call(null,map__40473__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__40473__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__40473__$1,new cljs.core.Keyword(null,"event","event",301435442));
return nesferado.client._event_msg_handler.call(null,ev_msg);
});
cljs.core._add_method.call(null,nesferado.client._event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__40475){
var map__40476 = p__40475;
var map__40476__$1 = ((((!((map__40476 == null)))?((((map__40476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40476):map__40476);
var ev_msg = map__40476__$1;
var event = cljs.core.get.call(null,map__40476__$1,new cljs.core.Keyword(null,"event","event",301435442));
return nesferado.client.__GT_output_BANG_.call(null,"Unhandled event: %s",event);
}));
cljs.core._add_method.call(null,nesferado.client._event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__40478){
var map__40479 = p__40478;
var map__40479__$1 = ((((!((map__40479 == null)))?((((map__40479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40479):map__40479);
var ev_msg = map__40479__$1;
var _QMARK_data = cljs.core.get.call(null,map__40479__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__40481 = (function (){var e = (function (){try{if(cljs.core.vector_QMARK_.call(null,_QMARK_data)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e40484){if((e40484 instanceof Error)){
var e = e40484;
return e;
} else {
throw e40484;

}
}})();
if((e == null)){
return _QMARK_data;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"nesferado.client",null,"(vector? ?data)",_QMARK_data,e,null);
}
})();
var old_state_map = cljs.core.nth.call(null,vec__40481,(0),null);
var new_state_map = cljs.core.nth.call(null,vec__40481,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(new_state_map))){
return nesferado.client.__GT_output_BANG_.call(null,"Channel socket successfully established!: %s",new_state_map);
} else {
return nesferado.client.__GT_output_BANG_.call(null,"Channel socket state change: %s",new_state_map);
}
}));
cljs.core._add_method.call(null,nesferado.client._event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__40485){
var map__40486 = p__40485;
var map__40486__$1 = ((((!((map__40486 == null)))?((((map__40486.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40486.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40486):map__40486);
var ev_msg = map__40486__$1;
var _QMARK_data = cljs.core.get.call(null,map__40486__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return nesferado.client.__GT_output_BANG_.call(null,"Push event from server: %s",_QMARK_data);
}));
cljs.core._add_method.call(null,nesferado.client._event_msg_handler,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__40488){
var map__40489 = p__40488;
var map__40489__$1 = ((((!((map__40489 == null)))?((((map__40489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40489):map__40489);
var ev_msg = map__40489__$1;
var _QMARK_data = cljs.core.get.call(null,map__40489__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__40491 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.call(null,vec__40491,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__40491,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__40491,(2),null);
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
var temp__4657__auto___40494 = document.getElementById("btn1");
if(cljs.core.truth_(temp__4657__auto___40494)){
var target_el_40495 = temp__4657__auto___40494;
target_el_40495.addEventListener("click",((function (target_el_40495,temp__4657__auto___40494){
return (function (ev){
nesferado.client.__GT_output_BANG_.call(null,"Button 1 was clicked (won't receive any reply from server)");

return nesferado.client.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","button1","example/button1",-349884645),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"had-a-callback?","had-a-callback?",-512946762),"nope"], null)], null));
});})(target_el_40495,temp__4657__auto___40494))
);
} else {
}
var temp__4657__auto___40496 = document.getElementById("btn2");
if(cljs.core.truth_(temp__4657__auto___40496)){
var target_el_40497 = temp__4657__auto___40496;
target_el_40497.addEventListener("click",((function (target_el_40497,temp__4657__auto___40496){
return (function (ev){
nesferado.client.__GT_output_BANG_.call(null,"Button 2 was clicked (will receive reply from server)");

return nesferado.client.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","button2","example/button2",-675598425),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"had-a-callback?","had-a-callback?",-512946762),"indeed"], null)], null),(5000),((function (target_el_40497,temp__4657__auto___40496){
return (function (cb_reply){
return nesferado.client.__GT_output_BANG_.call(null,"Callback reply: %s",cb_reply);
});})(target_el_40497,temp__4657__auto___40496))
);
});})(target_el_40497,temp__4657__auto___40496))
);
} else {
}
var temp__4657__auto___40498 = document.getElementById("btn3");
if(cljs.core.truth_(temp__4657__auto___40498)){
var target_el_40499 = temp__4657__auto___40498;
target_el_40499.addEventListener("click",((function (target_el_40499,temp__4657__auto___40498){
return (function (ev){
nesferado.client.__GT_output_BANG_.call(null,"Button 3 was clicked (will ask server to test rapid async push)");

return nesferado.client.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","test-rapid-push","example/test-rapid-push",-93412097)], null));
});})(target_el_40499,temp__4657__auto___40498))
);
} else {
}
var temp__4657__auto___40500 = document.getElementById("btn4");
if(cljs.core.truth_(temp__4657__auto___40500)){
var target_el_40501 = temp__4657__auto___40500;
target_el_40501.addEventListener("click",((function (target_el_40501,temp__4657__auto___40500){
return (function (ev){
nesferado.client.__GT_output_BANG_.call(null,"Button 4 was clicked (will toggle async broadcast loop)");

return nesferado.client.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","toggle-broadcast","example/toggle-broadcast",-1640005413)], null),(5000),((function (target_el_40501,temp__4657__auto___40500){
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
});})(target_el_40501,temp__4657__auto___40500))
);
});})(target_el_40501,temp__4657__auto___40500))
);
} else {
}
var temp__4657__auto___40502 = document.getElementById("btn5");
if(cljs.core.truth_(temp__4657__auto___40502)){
var target_el_40503 = temp__4657__auto___40502;
target_el_40503.addEventListener("click",((function (target_el_40503,temp__4657__auto___40502){
return (function (ev){
nesferado.client.__GT_output_BANG_.call(null,"Disconnecting");

return taoensso.sente.chsk_disconnect_BANG_.call(null,nesferado.client.chsk);
});})(target_el_40503,temp__4657__auto___40502))
);
} else {
}
var temp__4657__auto___40504 = document.getElementById("btn6");
if(cljs.core.truth_(temp__4657__auto___40504)){
var target_el_40505 = temp__4657__auto___40504;
target_el_40505.addEventListener("click",((function (target_el_40505,temp__4657__auto___40504){
return (function (ev){
nesferado.client.__GT_output_BANG_.call(null,"Reconnecting");

return taoensso.sente.chsk_reconnect_BANG_.call(null,nesferado.client.chsk);
});})(target_el_40505,temp__4657__auto___40504))
);
} else {
}
var temp__4657__auto___40506 = document.getElementById("btn-login");
if(cljs.core.truth_(temp__4657__auto___40506)){
var target_el_40507 = temp__4657__auto___40506;
target_el_40507.addEventListener("click",((function (target_el_40507,temp__4657__auto___40506){
return (function (ev){
var user_id = document.getElementById("input-login").value;
if(clojure.string.blank_QMARK_.call(null,user_id)){
return alert("Please enter a user-id first");
} else {
nesferado.client.__GT_output_BANG_.call(null,"Logging in with user-id %s",user_id);

return taoensso.sente.ajax_lite.call(null,"/login",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,nesferado.client.chsk_state))], null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),[cljs.core.str(user_id)].join('')], null)], null),((function (user_id,target_el_40507,temp__4657__auto___40506){
return (function (ajax_resp){
nesferado.client.__GT_output_BANG_.call(null,"Ajax login response: %s",ajax_resp);

var login_successful_QMARK_ = true;
if(!(login_successful_QMARK_)){
return nesferado.client.__GT_output_BANG_.call(null,"Login failed");
} else {
nesferado.client.__GT_output_BANG_.call(null,"Login successful");

return taoensso.sente.chsk_reconnect_BANG_.call(null,nesferado.client.chsk);
}
});})(user_id,target_el_40507,temp__4657__auto___40506))
);
}
});})(target_el_40507,temp__4657__auto___40506))
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
return React.createElement("div",null,(function (){var attrs40508 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,nesferado.client.app_state));
return cljs.core.apply.call(null,React.createElement,"h1",((cljs.core.map_QMARK_.call(null,attrs40508))?sablono.interpreter.attributes.call(null,attrs40508):null),((cljs.core.map_QMARK_.call(null,attrs40508))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40508)], null)));
})(),React.createElement("h3",null,"Edit this and watch it change!"),React.createElement("h4",null,"Nonforum lives again!"));
}),null,"hello-world");
nesferado.client.top_bar = rum.core.build_defc.call(null,(function (){
return React.createElement("div",({"id": "topbar"}),React.createElement("ol",({"className": "topbar"}),React.createElement("li",null,React.createElement("a",({"href": "/"}),"nonforum")),(function (){var attrs40515 = nesferado.client.link.call(null,"top");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs40515))?sablono.interpreter.attributes.call(null,attrs40515):null),((cljs.core.map_QMARK_.call(null,attrs40515))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40515)], null)));
})(),(function (){var attrs40516 = nesferado.client.link.call(null,"latest");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs40516))?sablono.interpreter.attributes.call(null,attrs40516):null),((cljs.core.map_QMARK_.call(null,attrs40516))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40516)], null)));
})(),(function (){var attrs40517 = nesferado.client.link.call(null,"submit");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs40517))?sablono.interpreter.attributes.call(null,attrs40517):null),((cljs.core.map_QMARK_.call(null,attrs40517))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40517)], null)));
})(),(function (){var attrs40518 = nesferado.client.link.call(null,"feed");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs40518))?sablono.interpreter.attributes.call(null,attrs40518):null),((cljs.core.map_QMARK_.call(null,attrs40518))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40518)], null)));
})()));
}),null,"top-bar");
nesferado.client.side_bar = rum.core.build_defc.call(null,(function (){
return React.createElement("div",({"id": "sidebar"}),React.createElement("ol",({"className": "sidebar"}),(function (){var attrs40519 = nesferado.client.link.call(null,"profile");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs40519))?sablono.interpreter.attributes.call(null,attrs40519):null),((cljs.core.map_QMARK_.call(null,attrs40519))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40519)], null)));
})(),(function (){var attrs40520 = nesferado.client.link.call(null,"settings & pls omg no moar hax");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs40520))?sablono.interpreter.attributes.call(null,attrs40520):null),((cljs.core.map_QMARK_.call(null,attrs40520))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40520)], null)));
})(),(function (){var attrs40521 = nesferado.client.link.call(null,"feedback & hax");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs40521))?sablono.interpreter.attributes.call(null,attrs40521):null),((cljs.core.map_QMARK_.call(null,attrs40521))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40521)], null)));
})(),(function (){var attrs40522 = nesferado.client.link.call(null,"logout");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs40522))?sablono.interpreter.attributes.call(null,attrs40522):null),((cljs.core.map_QMARK_.call(null,attrs40522))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40522)], null)));
})()));
}),null,"side-bar");
nesferado.client.login_bar = rum.core.build_defc.call(null,(function (){
return React.createElement("div",({"id": "loginbar"}),React.createElement("ol",({"className": "loginbar"}),React.createElement("li",({"className": "fbfb"}),React.createElement("a",({"href": "/facebook"}),"Continue with Facebook as ___")),React.createElement("li",({"className": "gogo"}),React.createElement("a",({"href": "/gogole"}),"Google Login")),React.createElement("li",({"className": "twtw"}),React.createElement("a",({"href": "/twitter"}),"Twitter Login")),React.createElement("li",({"className": "nfnf"}),React.createElement("a",({"href": "/nflogin"}),"Nonforum Login"))),sablono.interpreter.interpret.call(null,nesferado.client.fb_sdk.call(null,(1417763311691300))));
}),null,"login-bar");
nesferado.client.tv_cell = rum.core.build_defc.call(null,(function (td){
return React.createElement("li",null,React.createElement("div",({"id": [cljs.core.str("tile"),cljs.core.str(new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(td))].join(''), "className": "tile"}),(function (){var attrs40525 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(td);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs40525))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["heading"], null)], null),attrs40525)):({"className": "heading"})),((cljs.core.map_QMARK_.call(null,attrs40525))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40525)], null)));
})(),(function (){var attrs40526 = new cljs.core.Keyword(null,"contents","contents",-1567174023).cljs$core$IFn$_invoke$arity$1(td);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs40526))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["contents"], null)], null),attrs40526)):({"className": "contents"})),((cljs.core.map_QMARK_.call(null,attrs40526))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40526)], null)));
})(),(function (){var attrs40527 = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(td);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs40527))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["priority"], null)], null),attrs40527)):({"className": "priority"})),((cljs.core.map_QMARK_.call(null,attrs40527))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40527)], null)));
})()));
}),null,"tv-cell");
nesferado.client.television = rum.core.build_defc.call(null,(function (){
return React.createElement("div",({"id": "tv"}),(function (){var attrs40528 = cljs.core.map.call(null,nesferado.client.tv_cell,new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,nesferado.client.tv_state)));
return cljs.core.apply.call(null,React.createElement,"ol",((cljs.core.map_QMARK_.call(null,attrs40528))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tv"], null)], null),attrs40528)):({"className": "tv"})),((cljs.core.map_QMARK_.call(null,attrs40528))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40528)], null)));
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
var iter__26565__auto__ = (function nesferado$client$nest_$_iter__40547(s__40548){
return (new cljs.core.LazySeq(null,(function (){
var s__40548__$1 = s__40548;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40548__$1);
if(temp__4657__auto__){
var s__40548__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40548__$2)){
var c__26563__auto__ = cljs.core.chunk_first.call(null,s__40548__$2);
var size__26564__auto__ = cljs.core.count.call(null,c__26563__auto__);
var b__40550 = cljs.core.chunk_buffer.call(null,size__26564__auto__);
if((function (){var i__40549 = (0);
while(true){
if((i__40549 < size__26564__auto__)){
var vec__40557 = cljs.core._nth.call(null,c__26563__auto__,i__40549);
var k = cljs.core.nth.call(null,vec__40557,(0),null);
var v = cljs.core.nth.call(null,vec__40557,(1),null);
cljs.core.chunk_append.call(null,b__40550,cljs.core.list_STAR_.call(null,[cljs.core.str(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),k,nesferado$client$nest.call(null,v)], null))].join('')));

var G__40563 = (i__40549 + (1));
i__40549 = G__40563;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40550),nesferado$client$nest_$_iter__40547.call(null,cljs.core.chunk_rest.call(null,s__40548__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40550),null);
}
} else {
var vec__40560 = cljs.core.first.call(null,s__40548__$2);
var k = cljs.core.nth.call(null,vec__40560,(0),null);
var v = cljs.core.nth.call(null,vec__40560,(1),null);
return cljs.core.cons.call(null,cljs.core.list_STAR_.call(null,[cljs.core.str(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),k,nesferado$client$nest.call(null,v)], null))].join('')),nesferado$client$nest_$_iter__40547.call(null,cljs.core.rest.call(null,s__40548__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26565__auto__.call(null,m);
});
nesferado.client.nestit = rum.core.build_defc.call(null,(function (){
var attrs40564 = nesferado.client.nest.call(null,cljs.core.deref.call(null,nesferado.client.ant));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs40564))?sablono.interpreter.attributes.call(null,attrs40564):null),((cljs.core.map_QMARK_.call(null,attrs40564))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40564)], null)));
}),null,"nestit");
nesferado.client.nf_login_input = rum.core.build_defc.call(null,(function (){
return React.createElement("form",({"id": "nflogin"}),sablono.interpreter.create_element.call(null,"input",({"placeHolder": "username", "className": "fullwidth"})),sablono.interpreter.create_element.call(null,"input",({"placeHolder": "password", "type": "password", "className": "fullwidth"})),React.createElement("button",({"type": "submit", "className": "fullwidth"}),"login"));
}),null,"nf-login-input");
nesferado.client.input_fields = rum.core.build_defc.call(null,(function (){
var attrs40567 = nesferado.client.post_input.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs40567))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"inputs-contain"], null),attrs40567)):({"id": "inputs-contain"})),((cljs.core.map_QMARK_.call(null,attrs40567))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,nesferado.client.post_comment_input.call(null)),sablono.interpreter.interpret.call(null,nesferado.client.nf_login_input.call(null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40567),sablono.interpreter.interpret.call(null,nesferado.client.post_comment_input.call(null)),sablono.interpreter.interpret.call(null,nesferado.client.nf_login_input.call(null))], null)));
}),null,"input-fields");
nesferado.client.start = rum.core.build_defc.call(null,(function (){
var attrs40568 = nesferado.client.top_bar.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs40568))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"maincontain"], null),attrs40568)):({"id": "maincontain"})),((cljs.core.map_QMARK_.call(null,attrs40568))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,nesferado.client.side_bar.call(null)),sablono.interpreter.interpret.call(null,nesferado.client.login_bar.call(null)),sablono.interpreter.interpret.call(null,nesferado.client.television.call(null)),sablono.interpreter.interpret.call(null,nesferado.client.hello_world.call(null))], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40568),sablono.interpreter.interpret.call(null,nesferado.client.side_bar.call(null)),sablono.interpreter.interpret.call(null,nesferado.client.login_bar.call(null)),sablono.interpreter.interpret.call(null,nesferado.client.television.call(null)),sablono.interpreter.interpret.call(null,nesferado.client.hello_world.call(null))], null)));
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

//# sourceMappingURL=client.js.map?rel=1543593398528
>>>>>>> parent of 5f49b26... working on the serverside.  buddy-auth
