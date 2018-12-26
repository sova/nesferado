// Compiled by ClojureScript 1.9.229 {}
goog.provide('nesferado.client');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('taoensso.sente');
goog.require('ajax.core');
goog.require('taoensso.sente.packers.transit');
goog.require('taoensso.timbre');
goog.require('cemerick.url');
goog.require('cljs.core.async');
goog.require('rum.core');
goog.require('alandipert.storage_atom');
goog.require('taoensso.encore');
goog.require('clojure.string');
nesferado.client.output_el = document.getElementById("output");
nesferado.client.__GT_output_BANG_ = (function nesferado$client$__GT_output_BANG_(var_args){
var args__7461__auto__ = [];
var len__7454__auto___33980 = arguments.length;
var i__7455__auto___33981 = (0);
while(true){
if((i__7455__auto___33981 < len__7454__auto___33980)){
args__7461__auto__.push((arguments[i__7455__auto___33981]));

var G__33982 = (i__7455__auto___33981 + (1));
i__7455__auto___33981 = G__33982;
continue;
} else {
}
break;
}

var argseq__7462__auto__ = ((((1) < args__7461__auto__.length))?(new cljs.core.IndexedSeq(args__7461__auto__.slice((1)),(0),null)):null);
return nesferado.client.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7462__auto__);
});

nesferado.client.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var msg = cljs.core.apply.call(null,taoensso.encore.format,fmt,args);
(nesferado.client.output_el["value"] = [cljs.core.str("\u2014 "),cljs.core.str(nesferado.client.output_el.value),cljs.core.str("\n"),cljs.core.str(msg)].join(''));

return (nesferado.client.output_el["scrollTop"] = nesferado.client.output_el.scrollHeight);
});

nesferado.client.__GT_output_BANG_.cljs$lang$maxFixedArity = (1);

nesferado.client.__GT_output_BANG_.cljs$lang$applyTo = (function (seq33978){
var G__33979 = cljs.core.first.call(null,seq33978);
var seq33978__$1 = cljs.core.next.call(null,seq33978);
return nesferado.client.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33979,seq33978__$1);
});

nesferado.client.__GT_output_BANG_.call(null," \u2022 Welcome to Nonforum \u2022");
var rand_chsk_type_33985 = (((cljs.core.rand.call(null) >= 0.5))?new cljs.core.Keyword(null,"ajax","ajax",814345549):new cljs.core.Keyword(null,"auto","auto",-566279492));
var packer_33986 = new cljs.core.Keyword(null,"edn","edn",1317840885);
var map__33983_33987 = taoensso.sente.make_channel_socket_client_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),rand_chsk_type_33985,new cljs.core.Keyword(null,"packer","packer",66077544),packer_33986], null));
var map__33983_33988__$1 = ((((!((map__33983_33987 == null)))?((((map__33983_33987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33983_33987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33983_33987):map__33983_33987);
var chsk_33989 = cljs.core.get.call(null,map__33983_33988__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_33990 = cljs.core.get.call(null,map__33983_33988__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_33991 = cljs.core.get.call(null,map__33983_33988__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_33992 = cljs.core.get.call(null,map__33983_33988__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
nesferado.client.chsk = chsk_33989;

nesferado.client.ch_chsk = ch_recv_33990;

nesferado.client.chsk_send_BANG_ = send_fn_33991;

nesferado.client.chsk_state = state_33992;
/**
 * Set `key' in browser's localStorage to `val`.
 */
nesferado.client.set_item_BANG_ = (function nesferado$client$set_item_BANG_(key,val){
return window.localStorage.setItem(key,val);
});
/**
 * Returns value of `key' from browser's localStorage.
 */
nesferado.client.get_item = (function nesferado$client$get_item(key){
return window.localStorage.getItem(key);
});
/**
 * Remove the browser's localStorage value for the given `key`
 */
nesferado.client.remove_item_BANG_ = (function nesferado$client$remove_item_BANG_(key){
return window.localStorage.removeItem(key);
});
console.log(nesferado.client.get_item.call(null,new cljs.core.Keyword(null,"auth-key","auth-key",1408789427)));
console.log(nesferado.client.get_item.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400)));
nesferado.client.handler = (function nesferado$client$handler(response){
return console.log([cljs.core.str(response)].join(''));
});
nesferado.client.error_handler = (function nesferado$client$error_handler(p__33993){
var map__33996 = p__33993;
var map__33996__$1 = ((((!((map__33996 == null)))?((((map__33996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33996):map__33996);
var status = cljs.core.get.call(null,map__33996__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__33996__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
if(typeof nesferado.client._event_msg_handler !== 'undefined'){
} else {
/**
 * Multimethod to handle Sente `event-msg`s
 */
nesferado.client._event_msg_handler = (function (){var method_table__7308__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7309__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7310__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7311__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7312__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"nesferado.client","-event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7312__auto__,method_table__7308__auto__,prefer_table__7309__auto__,method_cache__7310__auto__,cached_hierarchy__7311__auto__));
})();
}
/**
 * Wraps `-event-msg-handler` with logging, error catching, etc.
 */
nesferado.client.event_msg_handler = (function nesferado$client$event_msg_handler(p__33998){
var map__34001 = p__33998;
var map__34001__$1 = ((((!((map__34001 == null)))?((((map__34001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34001):map__34001);
var ev_msg = map__34001__$1;
var id = cljs.core.get.call(null,map__34001__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__34001__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__34001__$1,new cljs.core.Keyword(null,"event","event",301435442));
return nesferado.client._event_msg_handler.call(null,ev_msg);
});
cljs.core._add_method.call(null,nesferado.client._event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__34003){
var map__34004 = p__34003;
var map__34004__$1 = ((((!((map__34004 == null)))?((((map__34004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34004):map__34004);
var ev_msg = map__34004__$1;
var event = cljs.core.get.call(null,map__34004__$1,new cljs.core.Keyword(null,"event","event",301435442));
return console.log(".NF. unhandled:",event);
}));
cljs.core._add_method.call(null,nesferado.client._event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__34006){
var map__34007 = p__34006;
var map__34007__$1 = ((((!((map__34007 == null)))?((((map__34007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34007):map__34007);
var ev_msg = map__34007__$1;
var _QMARK_data = cljs.core.get.call(null,map__34007__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__34009 = (function (){var e = (function (){try{if(cljs.core.vector_QMARK_.call(null,_QMARK_data)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e34012){if((e34012 instanceof Error)){
var e = e34012;
return e;
} else {
throw e34012;

}
}})();
if((e == null)){
return _QMARK_data;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"nesferado.client",null,"(vector? ?data)",_QMARK_data,e,null);
}
})();
var old_state_map = cljs.core.nth.call(null,vec__34009,(0),null);
var new_state_map = cljs.core.nth.call(null,vec__34009,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(new_state_map))){
return console.log(".NF. ",new_state_map);
} else {
return null;
}
}));
cljs.core._add_method.call(null,nesferado.client._event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__34013){
var map__34014 = p__34013;
var map__34014__$1 = ((((!((map__34014 == null)))?((((map__34014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34014):map__34014);
var ev_msg = map__34014__$1;
var _QMARK_data = cljs.core.get.call(null,map__34014__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return console.log(".NF. push from serv: ",_QMARK_data);
}));
cljs.core._add_method.call(null,nesferado.client._event_msg_handler,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__34016){
var map__34017 = p__34016;
var map__34017__$1 = ((((!((map__34017 == null)))?((((map__34017.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34017.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34017):map__34017);
var ev_msg = map__34017__$1;
var _QMARK_data = cljs.core.get.call(null,map__34017__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__34019 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.call(null,vec__34019,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__34019,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__34019,(2),null);
return console.log("Handshake: %s",_QMARK_data);
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
var temp__4657__auto___34022 = document.getElementById("btn1");
if(cljs.core.truth_(temp__4657__auto___34022)){
var target_el_34023 = temp__4657__auto___34022;
target_el_34023.addEventListener("click",((function (target_el_34023,temp__4657__auto___34022){
return (function (ev){
nesferado.client.__GT_output_BANG_.call(null,"Button 1 was clicked (won't receive any reply from server)");

return nesferado.client.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("clientsent","ping","clientsent/ping",1328045379)], null));
});})(target_el_34023,temp__4657__auto___34022))
);
} else {
}
var temp__4657__auto___34024 = document.getElementById("btn2");
if(cljs.core.truth_(temp__4657__auto___34024)){
var target_el_34025 = temp__4657__auto___34024;
target_el_34025.addEventListener("click",((function (target_el_34025,temp__4657__auto___34024){
return (function (ev){
nesferado.client.__GT_output_BANG_.call(null,"Button 2 was clicked (will receive reply from server)");

return nesferado.client.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","button2","example/button2",-675598425),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"had-a-callback?","had-a-callback?",-512946762),"indeed"], null)], null),(5000),((function (target_el_34025,temp__4657__auto___34024){
return (function (cb_reply){
return nesferado.client.__GT_output_BANG_.call(null,"Callback reply: %s",cb_reply);
});})(target_el_34025,temp__4657__auto___34024))
);
});})(target_el_34025,temp__4657__auto___34024))
);
} else {
}
var temp__4657__auto___34026 = document.getElementById("btn3");
if(cljs.core.truth_(temp__4657__auto___34026)){
var target_el_34027 = temp__4657__auto___34026;
target_el_34027.addEventListener("click",((function (target_el_34027,temp__4657__auto___34026){
return (function (ev){
nesferado.client.__GT_output_BANG_.call(null,"Button 3 was clicked (will ask server to test rapid async push)");

return nesferado.client.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","test-rapid-push","example/test-rapid-push",-93412097)], null));
});})(target_el_34027,temp__4657__auto___34026))
);
} else {
}
var temp__4657__auto___34028 = document.getElementById("btn4");
if(cljs.core.truth_(temp__4657__auto___34028)){
var target_el_34029 = temp__4657__auto___34028;
target_el_34029.addEventListener("click",((function (target_el_34029,temp__4657__auto___34028){
return (function (ev){
nesferado.client.__GT_output_BANG_.call(null,"Button 4 was clicked (will toggle async broadcast loop)");

return nesferado.client.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","toggle-broadcast","example/toggle-broadcast",-1640005413)], null),(5000),((function (target_el_34029,temp__4657__auto___34028){
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
});})(target_el_34029,temp__4657__auto___34028))
);
});})(target_el_34029,temp__4657__auto___34028))
);
} else {
}
var temp__4657__auto___34030 = document.getElementById("btn5");
if(cljs.core.truth_(temp__4657__auto___34030)){
var target_el_34031 = temp__4657__auto___34030;
target_el_34031.addEventListener("click",((function (target_el_34031,temp__4657__auto___34030){
return (function (ev){
nesferado.client.__GT_output_BANG_.call(null,"Disconnecting");

return taoensso.sente.chsk_disconnect_BANG_.call(null,nesferado.client.chsk);
});})(target_el_34031,temp__4657__auto___34030))
);
} else {
}
var temp__4657__auto___34032 = document.getElementById("btn6");
if(cljs.core.truth_(temp__4657__auto___34032)){
var target_el_34033 = temp__4657__auto___34032;
target_el_34033.addEventListener("click",((function (target_el_34033,temp__4657__auto___34032){
return (function (ev){
nesferado.client.__GT_output_BANG_.call(null,"Reconnecting");

return taoensso.sente.chsk_reconnect_BANG_.call(null,nesferado.client.chsk);
});})(target_el_34033,temp__4657__auto___34032))
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
nesferado.client.nf_books = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [(8882882),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"The way of awesomeness.",new cljs.core.Keyword(null,"isbn","isbn",-1600638962),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10200000000002),(210500000000010),(200000000000000015)], null),new cljs.core.Keyword(null,"threads","threads",-1717798734),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(4),(5),(6)], null)], null)], null));
nesferado.client.nf_speeches = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
nesferado.client.nf_letters = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
nesferado.client.nf_topics = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
nesferado.client.nf_threads = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [(12121),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"cruise on through to the other side",new cljs.core.Keyword(null,"author","author",2111686192),"jimmorrison@nonforum.com",new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128),(2),new cljs.core.Keyword(null,"rating-total","rating-total",966088857),(98)], null)], null));
nesferado.client.nf_ratings = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [(33373),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"rid","rid",801761275),(33373),new cljs.core.Keyword(null,"author","author",2111686192),"jm@nf.com",new cljs.core.Keyword(null,"oid","oid",-768692334),"theThingyRated251215",new cljs.core.Keyword(null,"rating","rating",144173662),"++",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(121212121212)], null)], null));
nesferado.client.nf_qd = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [(12345777),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"contents","contents",-1567174023),"Hey this is a question about this site.  How does it all work, and what's it all about?",new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"author","author",2111686192),"x@nonforum.com",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(80808),new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128),(32),new cljs.core.Keyword(null,"rating-total","rating-total",966088857),(9700),new cljs.core.Keyword(null,"ratings","ratings",2118542621),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"oid","oid",-768692334),(123456),new cljs.core.Keyword(null,"rater","rater",-1025569865),"y@nonforum.com",new cljs.core.Keyword(null,"rating","rating",144173662),"++",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(6756421)], null)], null)], null)], null));
nesferado.client.nf_articles = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [(167641),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subtopics","subtopics",-1975155410),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"subtopic","subtopic",-131648208),"deciduous",new cljs.core.Keyword(null,"ratings","ratings",2118542621),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rater","rater",-1025569865),"bob@nf.com",new cljs.core.Keyword(null,"rating","rating",144173662),"++",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(28282)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"subtopic","subtopic",-131648208),"harmony",new cljs.core.Keyword(null,"ratings","ratings",2118542621),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rater","rater",-1025569865),"oion@nf.com",new cljs.core.Keyword(null,"rating","rating",144173662),"++",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(28282)], null)], null)], null)], null)], null)], null));
if(typeof nesferado.client.app_state !== 'undefined'){
} else {
nesferado.client.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
nesferado.client.tv_state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"title","title",636505583),"Fusion Power Imminent",new cljs.core.Keyword(null,"contents","contents",-1567174023),"Horne Technologies has developed a working Plasma Containment Prototype for furthering Fusion",new cljs.core.Keyword(null,"priority","priority",1431093715),(1),new cljs.core.Keyword(null,"id","id",-1388402092),(108),new cljs.core.Keyword(null,"posted-by","posted-by",-66955024),"v@nonforum.com",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(808080808),new cljs.core.Keyword(null,"comments","comments",-293346423),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(69)], null),new cljs.core.Keyword(null,"parent","parent",-878878779),null], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"title","title",636505583),"Let's Put Sun Panels on the Roof",new cljs.core.Keyword(null,"contents","contents",-1567174023),"Put a powerplant on your home and be free of your electric bill",new cljs.core.Keyword(null,"priority","priority",1431093715),(2),new cljs.core.Keyword(null,"id","id",-1388402092),(109),new cljs.core.Keyword(null,"posted-by","posted-by",-66955024),"v@nonforum.com",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(808080808),new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"parent","parent",-878878779),null], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"title","title",636505583),"Tonsky/rum is excellent for cljs",new cljs.core.Keyword(null,"contents","contents",-1567174023),"the best way to be the best",new cljs.core.Keyword(null,"priority","priority",1431093715),(3),new cljs.core.Keyword(null,"id","id",-1388402092),(110),new cljs.core.Keyword(null,"posted-by","posted-by",-66955024),"v@nonforum.com",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(808080808),new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"parent","parent",-878878779),null], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"comments","comments",-293346423),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"posted-by","posted-by",-66955024),new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"contents","contents",-1567174023),new cljs.core.Keyword(null,"timestamp","timestamp",579478971)],[null,cljs.core.PersistentVector.EMPTY,"Postpostpost","v@nonforum.com",(4),"http://hysterical.com",(111),"this is the post!",(808080808)])], null));
nesferado.client.input_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tv-curr-id","tv-curr-id",-111236576),new cljs.core.Keyword(null,"change-pass-old-pw","change-pass-old-pw",1553381089),new cljs.core.Keyword(null,"invite-friends-input","invite-friends-input",406042850),new cljs.core.Keyword(null,"edit-display-name","edit-display-name",210290594),new cljs.core.Keyword(null,"tv-contents","tv-contents",1386118275),new cljs.core.Keyword(null,"set-email","set-email",585682052),new cljs.core.Keyword(null,"selected-child","selected-child",-1028326940),new cljs.core.Keyword(null,"current-user","current-user",-868792091),new cljs.core.Keyword(null,"tv-comments","tv-comments",209439077),new cljs.core.Keyword(null,"login-time","login-time",138500005),new cljs.core.Keyword(null,"current-email","current-email",-760615865),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"send-feedback-extra","send-feedback-extra",-1564432438),new cljs.core.Keyword(null,"tv-posted-by","tv-posted-by",-35895188),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"create-password","create-password",1870602480),new cljs.core.Keyword(null,"create-password2","create-password2",798530673),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"send-feedback-input","send-feedback-input",49565459),new cljs.core.Keyword(null,"change-pass-new-pw2","change-pass-new-pw2",1424562292),new cljs.core.Keyword(null,"change-pass-new-pw","change-pass-new-pw",1793094004),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"create-username","create-username",515996759),new cljs.core.Keyword(null,"logged-in","logged-in",627058423),new cljs.core.Keyword(null,"contents","contents",-1567174023),new cljs.core.Keyword(null,"tv-title","tv-title",1038509594),new cljs.core.Keyword(null,"tv-current","tv-current",-1070700452),new cljs.core.Keyword(null,"tv-priority","tv-priority",23309500),new cljs.core.Keyword(null,"current-view","current-view",-1037279042),new cljs.core.Keyword(null,"selected-parent","selected-parent",1600183774),new cljs.core.Keyword(null,"tv-timestamp","tv-timestamp",447467647),new cljs.core.Keyword(null,"tv-link","tv-link",1690495327)],[(0),"","","","","",cljs.core.PersistentVector.EMPTY,"",cljs.core.PersistentVector.EMPTY,"","","","","","","","","","","","","","","",false,"","",cljs.core.PersistentArrayMap.EMPTY,(4),"default",(0),(808),""])], null)], null));
nesferado.client.js_reload = (function nesferado$client$js_reload(){
return console.log("javascript reloaded ^_^;");
});
nesferado.client.posts = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(77),new cljs.core.Keyword(null,"contents","contents",-1567174023),"Seventy seven is the nicest number below one hundred",new cljs.core.Keyword(null,"author","author",2111686192),"nonforum@nonforum.com",new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128),(2),new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318),(98),new cljs.core.Keyword(null,"comments","comments",-293346423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(33),(53)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(33),new cljs.core.Keyword(null,"contents","contents",-1567174023),"Thirty three is awesome.",new cljs.core.Keyword(null,"author","author",2111686192),"monforum@nonforum.com",new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128),(1),new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318),(99),new cljs.core.Keyword(null,"comments","comments",-293346423),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(34)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(34),new cljs.core.Keyword(null,"contents","contents",-1567174023),"fusion is coming soon to a powergrid near you.",new cljs.core.Keyword(null,"author","author",2111686192),"non@nonforum.com",new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128),(3),new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318),(300),new cljs.core.Keyword(null,"comments","comments",-293346423),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(37)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(37),new cljs.core.Keyword(null,"contents","contents",-1567174023),"hello there to the galaxy",new cljs.core.Keyword(null,"author","author",2111686192),"x@nonforum.com",new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128),(5),new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318),(470),new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(53),new cljs.core.Keyword(null,"contents","contents",-1567174023),"relax , don't do it.",new cljs.core.Keyword(null,"author","author",2111686192),"fool@nonforum.com",new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128),(70),new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318),(6900),new cljs.core.Keyword(null,"comments","comments",-293346423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(88),(7777)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(69),new cljs.core.Keyword(null,"contents","contents",-1567174023),"the extraordinary world of bugs is glorious.",new cljs.core.Keyword(null,"author","author",2111686192),"fx@nonforum.com",new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128),(4),new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318),(380),new cljs.core.Keyword(null,"comments","comments",-293346423),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(77)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(7777),new cljs.core.Keyword(null,"contents","contents",-1567174023),"Oh how I love the rain",new cljs.core.Keyword(null,"author","author",2111686192),"rains@nonforum.com",new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128),(2),new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318),(190),new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.PersistentVector.EMPTY], null)], null));
cljs.core.swap_BANG_.call(null,nesferado.client.posts,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(88),new cljs.core.Keyword(null,"contents","contents",-1567174023),"fortunate are the African penguins",new cljs.core.Keyword(null,"author","author",2111686192),"vv@nonforum.com",new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128),(2),new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318),(184),new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.PersistentVector.EMPTY], null));
nesferado.client.ratings = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null));
nesferado.client.get_post_by_id = (function nesferado$client$get_post_by_id(post_id){
var post = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__34034_SHARP_){
return cljs.core._EQ_.call(null,post_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__34034_SHARP_));
}),cljs.core.deref.call(null,nesferado.client.posts)));
return post;
});
nesferado.client.get_post_by_id.call(null,(77));
cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__34035_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__34035_SHARP_)),(88));
}),cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.deref.call(null,nesferado.client.posts)))));
nesferado.client.sort_the_comments_of_BANG_ = (function nesferado$client$sort_the_comments_of_BANG_(post_id){
var sort_me_id = post_id;
var spot = cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,((function (sort_me_id){
return (function (p1__34036_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__34036_SHARP_)),sort_me_id);
});})(sort_me_id))
,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.deref.call(null,nesferado.client.posts)))));
var sorted_comments = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128),cljs.core._GT_,cljs.core.map.call(null,nesferado.client.get_post_by_id,new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(nesferado.client.get_post_by_id.call(null,sort_me_id)))));
return cljs.core.swap_BANG_.call(null,nesferado.client.posts,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spot,new cljs.core.Keyword(null,"comments","comments",-293346423)], null),sorted_comments);
});
nesferado.client.return_comment_ids = (function nesferado$client$return_comment_ids(post_id){
var cids = new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__34037_SHARP_){
return cljs.core._EQ_.call(null,post_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__34037_SHARP_));
}),cljs.core.deref.call(null,nesferado.client.posts))));
var posts = cljs.core.map.call(null,nesferado.client.get_post_by_id,cids);
var post_collection = cljs.core.sort_by.call(null,((function (cids,posts){
return (function (p1__34038_SHARP_){
return (new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318).cljs$core$IFn$_invoke$arity$1(p1__34038_SHARP_) / new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128).cljs$core$IFn$_invoke$arity$1(p1__34038_SHARP_));
});})(cids,posts))
,posts);
var spc = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),post_collection);
return spc;
});
nesferado.client.return_comment_ids_of_tv = (function nesferado$client$return_comment_ids_of_tv(tile_id){
var cids = new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__34039_SHARP_){
return cljs.core._EQ_.call(null,tile_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__34039_SHARP_));
}),cljs.core.deref.call(null,nesferado.client.tv_state))));
var posts = cljs.core.map.call(null,nesferado.client.get_post_by_id,cids);
var post_collection = cljs.core.sort_by.call(null,((function (cids,posts){
return (function (p1__34040_SHARP_){
return (new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318).cljs$core$IFn$_invoke$arity$1(p1__34040_SHARP_) / new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128).cljs$core$IFn$_invoke$arity$1(p1__34040_SHARP_));
});})(cids,posts))
,posts);
var spc = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),post_collection);
return spc;
});
nesferado.client.return_comment_ids.call(null,(34));
nesferado.client.return_comment_ids.call(null,(53));
nesferado.client.return_comment_ids.call(null,(69));
nesferado.client.return_comment_ids.call(null,(77));
cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__34041_SHARP_){
return cljs.core._EQ_.call(null,(69),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__34041_SHARP_));
}),cljs.core.deref.call(null,nesferado.client.posts)));
cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,nesferado.client.posts));
cljs.core.map.call(null,nesferado.client.sort_the_comments_of_BANG_,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,nesferado.client.posts)));
nesferado.client.try_login = (function nesferado$client$try_login(username,pw){
if(clojure.string.blank_QMARK_.call(null,username)){
return alert("Please enter a user-id first");
} else {
nesferado.client.__GT_output_BANG_.call(null,[cljs.core.str("Logging in with username "),cljs.core.str(username)].join(''));

return taoensso.sente.ajax_lite.call(null,"/login",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,nesferado.client.chsk_state))], null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),[cljs.core.str(username)].join(''),new cljs.core.Keyword(null,"password","password",417022471),[cljs.core.str(pw)].join('')], null),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697)], null),(function (ajax_resp){
var map__34044 = ajax_resp;
var map__34044__$1 = ((((!((map__34044 == null)))?((((map__34044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34044):map__34044);
var success_QMARK_ = cljs.core.get.call(null,map__34044__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var _QMARK_status = cljs.core.get.call(null,map__34044__$1,new cljs.core.Keyword(null,"?status","?status",938730360));
var _QMARK_error = cljs.core.get.call(null,map__34044__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__34044__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
var _QMARK_content_type = cljs.core.get.call(null,map__34044__$1,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049));
var login_successful_QMARK_ = success_QMARK_;
var stuff = cljs.reader.read_string.call(null,_QMARK_content);
if(cljs.core.not.call(null,login_successful_QMARK_)){
return nesferado.client.__GT_output_BANG_.call(null,"Login failed");
} else {
nesferado.client.__GT_output_BANG_.call(null,"Login successful");

nesferado.client.set_item_BANG_.call(null,new cljs.core.Keyword(null,"auth-key","auth-key",1408789427),new cljs.core.Keyword(null,"auth-token","auth-token",30990976).cljs$core$IFn$_invoke$arity$1(stuff));

nesferado.client.set_item_BANG_.call(null,new cljs.core.Keyword(null,"login-time","login-time",138500005),new cljs.core.Keyword(null,"login-time","login-time",138500005).cljs$core$IFn$_invoke$arity$1(stuff));

nesferado.client.set_item_BANG_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(stuff));

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"token","token",-1211463215)], null),new cljs.core.Keyword(null,"auth-token","auth-token",30990976).cljs$core$IFn$_invoke$arity$1(stuff));

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"login-time","login-time",138500005)], null),new cljs.core.Keyword(null,"login-time","login-time",138500005).cljs$core$IFn$_invoke$arity$1(stuff));

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"logged-in","logged-in",627058423)], null),true);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"current-user","current-user",-868792091)], null),new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(stuff));

return taoensso.sente.chsk_reconnect_BANG_.call(null,nesferado.client.chsk);
}
}));
}
});
nesferado.client.rate = (function nesferado$client$rate(rating,pid){
if(cljs.core._EQ_.call(null,rating,new cljs.core.Keyword(null,"double-plus","double-plus",759077853))){
return console.log("user rated ",pid," ++");
} else {
if(cljs.core._EQ_.call(null,rating,new cljs.core.Keyword(null,"plus","plus",211540661))){
return console.log([cljs.core.str("user rated "),cljs.core.str(pid),cljs.core.str(" +")].join(''));
} else {
if(cljs.core._EQ_.call(null,rating,new cljs.core.Keyword(null,"minus","minus",-1683561492))){
return console.log("user rated ",pid," -");
} else {
return null;
}
}
}
});
nesferado.client.rate.call(null,new cljs.core.Keyword(null,"plus","plus",211540661),(533));
nesferado.client.show_fresh = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var comp_34046 = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var dom_node_34047 = ReactDOM.findDOMNode(comp_34046);
dom_node_34047.classList = "justMounted";

return state;
})], null);
nesferado.client.render_item = rum.core.build_defcs.call(null,(function (state,pid){
var post_coll = rum.core.react.call(null,nesferado.client.posts);
var input_coll = rum.core.react.call(null,nesferado.client.input_state);
var cids = nesferado.client.return_comment_ids.call(null,pid);
var __ = rum.core.react.call(null,nesferado.client.tv_state);
var local_atom = new cljs.core.Keyword("nesferado.client","hidecomments","nesferado.client/hidecomments",-2061490545).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.empty_QMARK_.call(null,nesferado.client.return_comment_ids.call(null,pid))){
var noc_post = cljs.core.first.call(null,cljs.core.filter.call(null,((function (post_coll,input_coll,cids,__,local_atom){
return (function (p1__34048_SHARP_){
return cljs.core._EQ_.call(null,pid,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__34048_SHARP_));
});})(post_coll,input_coll,cids,__,local_atom))
,post_coll));
return React.createElement("div",({"id": pid, "className": "nocomments genpost"}),React.createElement("div",({"onClick": ((function (noc_post,post_coll,input_coll,cids,__,local_atom){
return (function (e){
console.log("Freshly selected: ",pid);

e.stopPropagation();

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"selected-parent","selected-parent",1600183774)], null),pid);

return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"selected-child","selected-child",-1028326940)], null),nesferado.client.return_comment_ids.call(null,pid));
});})(noc_post,post_coll,input_coll,cids,__,local_atom))
, "className": "padleft"}),React.createElement("div",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-contents","genpost",((cljs.core._EQ_.call(null,pid,cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"selected-parent","selected-parent",1600183774)], null))))?"selectedParent":(cljs.core.truth_(cljs.core.some.call(null,((function (noc_post,post_coll,input_coll,cids,__,local_atom){
return (function (p1__34049_SHARP_){
return cljs.core._EQ_.call(null,p1__34049_SHARP_,pid);
});})(noc_post,post_coll,input_coll,cids,__,local_atom))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"selected-child","selected-child",-1028326940)], null))))?"selectedChild":null))], null))}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"contents","contents",-1567174023).cljs$core$IFn$_invoke$arity$1(noc_post)),(function (){var attrs34054 = new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(noc_post);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34054))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-author"], null)], null),attrs34054)):({"className": "item-author"})),((cljs.core.map_QMARK_.call(null,attrs34054))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34054)], null)));
})(),React.createElement("div",({"className": "rate"}),React.createElement("div",({"onClick": ((function (noc_post,post_coll,input_coll,cids,__,local_atom){
return (function (e){
return nesferado.client.rate.call(null,new cljs.core.Keyword(null,"double-plus","double-plus",759077853),pid);
});})(noc_post,post_coll,input_coll,cids,__,local_atom))
, "className": "item-rate-doubleplus"}),"++"),React.createElement("div",({"onClick": ((function (noc_post,post_coll,input_coll,cids,__,local_atom){
return (function (e){
return nesferado.client.rate.call(null,new cljs.core.Keyword(null,"plus","plus",211540661),pid);
});})(noc_post,post_coll,input_coll,cids,__,local_atom))
, "className": "item-rate-plus"}),"+"),React.createElement("div",({"onClick": ((function (noc_post,post_coll,input_coll,cids,__,local_atom){
return (function (e){
return nesferado.client.rate.call(null,new cljs.core.Keyword(null,"minus","minus",-1683561492),pid);
});})(noc_post,post_coll,input_coll,cids,__,local_atom))
, "className": "item-rate-minus"}),"-"),(function (){var attrs34055 = (new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318).cljs$core$IFn$_invoke$arity$1(noc_post) / new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128).cljs$core$IFn$_invoke$arity$1(noc_post));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34055))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-rating"], null)], null),attrs34055)):({"className": "item-rating"})),((cljs.core.map_QMARK_.call(null,attrs34055))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34055)], null)));
})()))));
} else {
var com_post = cljs.core.first.call(null,cljs.core.filter.call(null,((function (post_coll,input_coll,cids,__,local_atom){
return (function (p1__34050_SHARP_){
return cljs.core._EQ_.call(null,pid,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__34050_SHARP_));
});})(post_coll,input_coll,cids,__,local_atom))
,cljs.core.sort_by.call(null,((function (post_coll,input_coll,cids,__,local_atom){
return (function (p1__34051_SHARP_){
return (new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318).cljs$core$IFn$_invoke$arity$1(p1__34051_SHARP_) / new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128).cljs$core$IFn$_invoke$arity$1(p1__34051_SHARP_));
});})(post_coll,input_coll,cids,__,local_atom))
,post_coll)));
return React.createElement("div",({"id": pid, "className": "hascomments"}),React.createElement("div",({"onClick": ((function (com_post,post_coll,input_coll,cids,__,local_atom){
return (function (e){
console.log("Freshly selected: ",pid);

e.stopPropagation();

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"selected-parent","selected-parent",1600183774)], null),pid);

return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"selected-child","selected-child",-1028326940)], null),nesferado.client.return_comment_ids.call(null,pid));
});})(com_post,post_coll,input_coll,cids,__,local_atom))
, "className": "padleft"}),React.createElement("div",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-contents","genpost",((cljs.core._EQ_.call(null,pid,cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"selected-parent","selected-parent",1600183774)], null))))?"selectedParent":(cljs.core.truth_(cljs.core.some.call(null,((function (com_post,post_coll,input_coll,cids,__,local_atom){
return (function (p1__34052_SHARP_){
return cljs.core._EQ_.call(null,p1__34052_SHARP_,pid);
});})(com_post,post_coll,input_coll,cids,__,local_atom))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"selected-child","selected-child",-1028326940)], null))))?"selectedChild":null))], null))}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"contents","contents",-1567174023).cljs$core$IFn$_invoke$arity$1(com_post)),(function (){var attrs34056 = new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(com_post);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34056))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-author"], null)], null),attrs34056)):({"className": "item-author"})),((cljs.core.map_QMARK_.call(null,attrs34056))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34056)], null)));
})(),React.createElement("div",({"className": "rate"}),React.createElement("div",({"onClick": ((function (com_post,post_coll,input_coll,cids,__,local_atom){
return (function (e){
return nesferado.client.rate.call(null,new cljs.core.Keyword(null,"double-plus","double-plus",759077853),pid);
});})(com_post,post_coll,input_coll,cids,__,local_atom))
, "className": "item-rate-doubleplus"}),"++"),React.createElement("div",({"onClick": ((function (com_post,post_coll,input_coll,cids,__,local_atom){
return (function (e){
return nesferado.client.rate.call(null,new cljs.core.Keyword(null,"plus","plus",211540661),pid);
});})(com_post,post_coll,input_coll,cids,__,local_atom))
, "className": "item-rate-plus"}),"+"),React.createElement("div",({"onClick": ((function (com_post,post_coll,input_coll,cids,__,local_atom){
return (function (e){
return nesferado.client.rate.call(null,new cljs.core.Keyword(null,"minus","minus",-1683561492),pid);
});})(com_post,post_coll,input_coll,cids,__,local_atom))
, "className": "item-rate-minus"}),"-"),(function (){var attrs34057 = (new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318).cljs$core$IFn$_invoke$arity$1(com_post) / new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128).cljs$core$IFn$_invoke$arity$1(com_post));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34057))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-rating"], null)], null),attrs34057)):({"className": "item-rating"})),((cljs.core.map_QMARK_.call(null,attrs34057))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34057)], null)));
})())),React.createElement("button",({"onClick": ((function (com_post,post_coll,input_coll,cids,__,local_atom){
return (function (_){
return cljs.core.swap_BANG_.call(null,local_atom,((function (com_post,post_coll,input_coll,cids,__,local_atom){
return (function (p1__34053_SHARP_){
return ((-1) * p1__34053_SHARP_);
});})(com_post,post_coll,input_coll,cids,__,local_atom))
);
});})(com_post,post_coll,input_coll,cids,__,local_atom))
, "className": "commentog"}),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,local_atom),(-1)))?"hide":"show")),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,local_atom),(-1)))?sablono.interpreter.interpret.call(null,cljs.core.map.call(null,nesferado.client.render_item,cids)):null)));
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.call(null,(-1),new cljs.core.Keyword("nesferado.client","hidecomments","nesferado.client/hidecomments",-2061490545)),nesferado.client.show_fresh], null),"render-item");
nesferado.client.send_feedback_fields = rum.core.build_defc.call(null,(function (){
return React.createElement("form",({"id": "sendfeedbackform"}),sablono.interpreter.create_element.call(null,"textarea",({"id": "sendfeedbackinput", "placeholder": "Send us some feedback, suggestions, comments, concerns.", "name": "feedback", "onChange": (function (e){
return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"send-feedback-input","send-feedback-input",49565459)], null),e.target.value);
}), "className": "fullwidth"})),React.createElement("button",({"id": "sfsubmit", "type": "button", "onClick": (function (e){
var feedback = cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"send-feedback-input","send-feedback-input",49565459)], null));
return console.log("send feedback button pressed");
}), "className": "fullwidth"}),"send feedback"));
}),null,"send-feedback-fields");
nesferado.client.nf_login_input = rum.core.build_defc.call(null,(function (){
return React.createElement("form",({"id": "nflogin"}),sablono.interpreter.create_element.call(null,"input",({"placeholder": "username", "name": "username", "autoComplete": "username login", "onChange": (function (e){
return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"username","username",1605666410)], null),e.target.value);
}), "className": "fullwidth"})),sablono.interpreter.create_element.call(null,"input",({"placeholder": "password", "type": "password", "name": "password", "autoComplete": "password login", "onChange": (function (e){
return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"password","password",417022471)], null),e.target.value);
}), "className": "fullwidth"})),React.createElement("button",({"id": "logsin", "type": "button", "onClick": (function (e){
var username = cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"username","username",1605666410)], null));
var password = cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"password","password",417022471)], null));
return nesferado.client.try_login.call(null,username,password);
}), "className": "fullwidth"}),"login"));
}),null,"nf-login-input");
nesferado.client.create_account_fields = rum.core.build_defc.call(null,(function (){
return React.createElement("form",({"id": "nfcreate"}),sablono.interpreter.create_element.call(null,"input",({"id": "cruser", "placeholder": "username", "name": "username", "onChange": (function (e){
return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"create-username","create-username",515996759)], null),e.target.value);
}), "className": "fullwidth"})),sablono.interpreter.create_element.call(null,"input",({"id": "crpass", "placeholder": "password", "type": "password", "name": "password", "onChange": (function (e){
return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"create-password","create-password",1870602480)], null),e.target.value);
}), "className": "fullwidth"})),sablono.interpreter.create_element.call(null,"input",({"id": "crpass2", "placeholder": "pw confirm", "type": "password", "name": "password2", "onChange": (function (e){
return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"create-password2","create-password2",798530673)], null),e.target.value);
}), "className": "fullwidth"})),React.createElement("button",({"id": "crsubmit", "type": "button", "onClick": (function (e){
var username = cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"create-username","create-username",515996759)], null));
var password = cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"create-password","create-password",1870602480)], null));
var password2 = cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"create-password2","create-password2",798530673)], null));
return null;
}), "className": "fullwidth"}),"create account"));
}),null,"create-account-fields");
nesferado.client.create_account_input = rum.core.build_defc.call(null,(function (){
var attrs34058 = nesferado.client.create_account_fields.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34058))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"create-account-contain"], null),attrs34058)):({"id": "create-account-contain"})),((cljs.core.map_QMARK_.call(null,attrs34058))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34058)], null)));
}),null,"create-account-input");
nesferado.client.link = rum.core.build_defc.call(null,(function (address){
return React.createElement("a",({"href": address}),sablono.interpreter.interpret.call(null,address));
}),null,"link");
nesferado.client.top_bar = rum.core.build_defc.call(null,(function (){
var current_user = cljs.core.get_in.call(null,rum.core.react.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"current-user","current-user",-868792091)], null));
return React.createElement("div",({"id": "topbar"}),React.createElement("ol",({"className": "topbar"}),React.createElement("li",null,React.createElement("div",({"onClick": ((function (current_user){
return (function (_){
return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"current-view","current-view",-1037279042)], null),"default");
});})(current_user))
, "className": "sidebarbutton"}),"n\u229Cnforum")),React.createElement("li",null,React.createElement("span",({"onClick": ((function (current_user){
return (function (e){
e.stopPropagation();

return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"show-sidebar","show-sidebar",591507660)], null),cljs.core.not);
});})(current_user))
, "className": "sidebarbutton"})," \u2234 preferences")),React.createElement("li",null,"\u03C8 ",React.createElement("span",({"onClick": ((function (current_user){
return (function (_){
return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"current-view","current-view",-1037279042)], null),"top");
});})(current_user))
, "className": "sidebarbutton"}),"top")),React.createElement("li",null,"\u0394 ",React.createElement("span",({"onClick": ((function (current_user){
return (function (_){
return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"current-view","current-view",-1037279042)], null),"submit");
});})(current_user))
, "className": "sidebarbutton"}),"submit")),React.createElement("li",null,React.createElement("a",({"href": "/my/profile"}),sablono.interpreter.interpret.call(null,[cljs.core.str(" \u03DF "),cljs.core.str(current_user)].join('')))),React.createElement("li",null,React.createElement("span",({"onClick": ((function (current_user){
return (function (e){
e.stopPropagation();

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"logged-in","logged-in",627058423)], null),false);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"current-user","current-user",-868792091)], null),"");

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"auth-token","auth-token",30990976)], null),"");

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"login-time","login-time",138500005)], null),"");

nesferado.client.remove_item_BANG_.call(null,new cljs.core.Keyword(null,"login-time","login-time",138500005));

nesferado.client.remove_item_BANG_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400));

nesferado.client.remove_item_BANG_.call(null,new cljs.core.Keyword(null,"auth-key","auth-key",1408789427));

return nesferado.client.__GT_output_BANG_.call(null,[cljs.core.str("Logout Successful")].join(''));
});})(current_user))
}),"\u21CF logout"))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"top-bar");
nesferado.client.side_bar = rum.core.build_defc.call(null,(function (){
return React.createElement("div",({"id": "sidebar"}),React.createElement("ol",({"className": "sidebar"}),(function (){var attrs34059 = nesferado.client.link.call(null,"edit profile");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs34059))?sablono.interpreter.attributes.call(null,attrs34059):null),((cljs.core.map_QMARK_.call(null,attrs34059))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34059)], null)));
})(),(function (){var attrs34060 = nesferado.client.link.call(null,"view profile");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs34060))?sablono.interpreter.attributes.call(null,attrs34060):null),((cljs.core.map_QMARK_.call(null,attrs34060))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34060)], null)));
})(),(function (){var attrs34061 = nesferado.client.link.call(null,"stats");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs34061))?sablono.interpreter.attributes.call(null,attrs34061):null),((cljs.core.map_QMARK_.call(null,attrs34061))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34061)], null)));
})(),(function (){var attrs34062 = nesferado.client.link.call(null,"set password");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs34062))?sablono.interpreter.attributes.call(null,attrs34062):null),((cljs.core.map_QMARK_.call(null,attrs34062))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34062)], null)));
})(),(function (){var attrs34063 = nesferado.client.link.call(null,"set email");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs34063))?sablono.interpreter.attributes.call(null,attrs34063):null),((cljs.core.map_QMARK_.call(null,attrs34063))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34063)], null)));
})(),(function (){var attrs34064 = nesferado.client.link.call(null,"invite friends");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs34064))?sablono.interpreter.attributes.call(null,attrs34064):null),((cljs.core.map_QMARK_.call(null,attrs34064))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34064)], null)));
})(),React.createElement("li",null,React.createElement("div",({"onClick": (function (_){
cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"current-view","current-view",-1037279042)], null),"send-feedback");

return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"show-sidebar","show-sidebar",591507660)], null),cljs.core.not);
}), "className": "sidebarbutton"}),"give feedback")),(function (){var attrs34065 = nesferado.client.link.call(null,"Support nf");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs34065))?sablono.interpreter.attributes.call(null,attrs34065):null),((cljs.core.map_QMARK_.call(null,attrs34065))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34065)], null)));
})()));
}),null,"side-bar");
nesferado.client.login_bar = rum.core.build_defc.call(null,(function (){
return React.createElement("div",({"id": "loginbar"}),React.createElement("ol",({"className": "loginbar"}),React.createElement("li",({"className": "nfnf"}),"Nonforum Login:",sablono.interpreter.interpret.call(null,nesferado.client.nf_login_input.call(null))),React.createElement("li",({"className": "nfca"}),"Create a Nonforum account:",sablono.interpreter.interpret.call(null,nesferado.client.create_account_input.call(null)))));
}),null,"login-bar");
nesferado.client.check_if_showing = (function nesferado$client$check_if_showing(id){
var showsters = cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"showing","showing",798009604)], null));
if(cljs.core.contains_QMARK_.call(null,showsters,id)){
return "showing";
} else {
return "notshowing";
}
});
nesferado.client.uuid = (function nesferado$client$uuid(s){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

return (new cljs.core.UUID(s.toLowerCase(),null));
});
nesferado.client.tv_cell = rum.core.build_defc.call(null,(function (td){
if(!(cljs.core.empty_QMARK_.call(null,td))){
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(td);
var contents = new cljs.core.Keyword(null,"contents","contents",-1567174023).cljs$core$IFn$_invoke$arity$1(td);
var comments = new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(td);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(td);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(td);
var posted_by = new cljs.core.Keyword(null,"posted-by","posted-by",-66955024).cljs$core$IFn$_invoke$arity$1(td);
var timestamp = new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(td);
var cids = nesferado.client.return_comment_ids_of_tv.call(null,id);
return React.createElement("li",null,React.createElement("div",({"onClick": ((function (title,contents,comments,priority,id,posted_by,timestamp,cids){
return (function (e){
console.log("link to post",id," + comments disp, ",td);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-title","tv-title",1038509594)], null),title);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-contents","tv-contents",1386118275)], null),contents);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-posted-by","tv-posted-by",-35895188)], null),posted_by);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-timestamp","tv-timestamp",447467647)], null),timestamp);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-comments","tv-comments",209439077)], null),comments);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"selected-parent","selected-parent",1600183774)], null),id);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"selected-child","selected-child",-1028326940)], null),cids);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-current","tv-current",-1070700452)], null),td);

return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-curr-id","tv-curr-id",-111236576)], null),id);
});})(title,contents,comments,priority,id,posted_by,timestamp,cids))
, "id": [cljs.core.str("tile"),cljs.core.str(id)].join(''), "className": "tile"}),(function (){var attrs34066 = title;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34066))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["heading"], null)], null),attrs34066)):({"className": "heading"})),((cljs.core.map_QMARK_.call(null,attrs34066))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34066)], null)));
})(),(function (){var attrs34067 = contents;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34067))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["contents"], null)], null),attrs34067)):({"className": "contents"})),((cljs.core.map_QMARK_.call(null,attrs34067))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34067)], null)));
})(),(function (){var attrs34068 = id;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34068))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["priority"], null)], null),attrs34068)):({"className": "priority"})),((cljs.core.map_QMARK_.call(null,attrs34068))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34068)], null)));
})()));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),(function (td){
return [cljs.core.str(nesferado.client.uuid.call(null,[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(td))].join('')))].join('');
})], null)], null),"tv-cell");
nesferado.client.television = rum.core.build_defc.call(null,(function (){
return React.createElement("div",({"id": "tv"}),(function (){var attrs34069 = cljs.core.map.call(null,nesferado.client.tv_cell,rum.core.react.call(null,nesferado.client.tv_state));
return cljs.core.apply.call(null,React.createElement,"ol",((cljs.core.map_QMARK_.call(null,attrs34069))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tv"], null)], null),attrs34069)):({"className": "tv"})),((cljs.core.map_QMARK_.call(null,attrs34069))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34069)], null)));
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"television");
nesferado.client.post_input = rum.core.build_defc.call(null,(function (){
return React.createElement("form",({"id": "postinput"}),"Create new post",sablono.interpreter.create_element.call(null,"input",({"placeholder": "title", "onChange": (function (e){
cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"title","title",636505583)], null),e.target.value);

return console.log(cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"title","title",636505583)], null)));
}), "className": "fullwidth"})),sablono.interpreter.create_element.call(null,"input",({"placeholder": "contents", "onChange": (function (e){
cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"contents","contents",-1567174023)], null),e.target.value);

return console.log(cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"contents","contents",-1567174023)], null)));
}), "className": "fullwidth"})),React.createElement("button",({"type": "button", "onClick": (function (e){
console.log("sending..");

console.log(document.getElementById("aft"));

var new_post_map = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"title","title",636505583)], null)),new cljs.core.Keyword(null,"contents","contents",-1567174023),cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"contents","contents",-1567174023)], null)),new cljs.core.Keyword(null,"priority","priority",1431093715),(10),new cljs.core.Keyword(null,"posted-by","posted-by",-66955024),cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"current-user","current-user",-868792091)], null)),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(80008),new cljs.core.Keyword(null,"parent","parent",-878878779),null], null);
return cljs.core.swap_BANG_.call(null,nesferado.client.tv_state,cljs.core.update,new cljs.core.Keyword(null,"tiles","tiles",178505240),cljs.core.conj,new_post_map);
}), "className": "fullwidth"}),"post new"));
}),null,"post-input");
nesferado.client.y = cljs.core.atom.call(null,(999));
nesferado.client.post_comment_input = rum.core.build_defc.call(null,(function (){
return React.createElement("form",({"id": "postcommentinput"}),sablono.interpreter.create_element.call(null,"textarea",({"value": cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"comment","comment",532206069)], null)), "placeholder": "let us be kind", "onChange": (function (e){
return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"comment","comment",532206069)], null),e.target.value);
}), "className": "fullwidth"})),React.createElement("button",({"type": "button", "onClick": (function (e){
var parent_id = cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"selected-parent","selected-parent",1600183774)], null));
var username = cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"current-user","current-user",-868792091)], null));
var curr_tv = cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-curr-id","tv-curr-id",-111236576)], null));
var new_comment_map = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.swap_BANG_.call(null,nesferado.client.y,cljs.core.inc),new cljs.core.Keyword(null,"contents","contents",-1567174023),cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"comment","comment",532206069)], null)),new cljs.core.Keyword(null,"author","author",2111686192),username,new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.PersistentVector.EMPTY], null);
var first_hit = cljs.core.first.call(null,cljs.core.keep_indexed.call(null,((function (parent_id,username,curr_tv,new_comment_map){
return (function (p1__34071_SHARP_,p2__34070_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__34070_SHARP_),parent_id)){
return p1__34071_SHARP_;
} else {
return null;
}
});})(parent_id,username,curr_tv,new_comment_map))
,cljs.core.deref.call(null,nesferado.client.posts)));
var second_hit = cljs.core.first.call(null,cljs.core.keep_indexed.call(null,((function (first_hit,parent_id,username,curr_tv,new_comment_map){
return (function (p1__34073_SHARP_,p2__34072_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__34072_SHARP_),curr_tv)){
return p1__34073_SHARP_;
} else {
return null;
}
});})(first_hit,parent_id,username,curr_tv,new_comment_map))
,cljs.core.deref.call(null,nesferado.client.tv_state)));
console.log(">< ",cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.posts),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_hit,new cljs.core.Keyword(null,"comments","comments",-293346423)], null)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_comment_map));

console.log(">< ",first_hit," | ",second_hit);

console.log(">< ",parent_id," || ",curr_tv);

if(cljs.core._EQ_.call(null,parent_id,curr_tv)){
cljs.core.swap_BANG_.call(null,nesferado.client.posts,cljs.core.conj,new_comment_map);

cljs.core.swap_BANG_.call(null,nesferado.client.tv_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [second_hit,new cljs.core.Keyword(null,"comments","comments",-293346423)], null),cljs.core.conj,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_comment_map));

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-current","tv-current",-1070700452),new cljs.core.Keyword(null,"comments","comments",-293346423)], null),cljs.core.conj,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_comment_map));

console.log(cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-current","tv-current",-1070700452),new cljs.core.Keyword(null,"comments","comments",-293346423)], null)));

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-comments","tv-comments",209439077)], null),cljs.core.conj,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_comment_map));
} else {
cljs.core.swap_BANG_.call(null,nesferado.client.posts,cljs.core.conj,new_comment_map);

cljs.core.swap_BANG_.call(null,nesferado.client.posts,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_hit,new cljs.core.Keyword(null,"comments","comments",-293346423)], null),cljs.core.conj,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_comment_map));
}

return console.log(cljs.core.deref.call(null,nesferado.client.posts));
}), "className": "fullwidth replySelected"}),"Post a comment."));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"post-comment-input");
nesferado.client.footer = rum.core.build_defc.call(null,(function (){
return React.createElement("div",({"id": "footer"}),"Welcome to nonforum.  Here you will find real-time threads and discussion boards.",React.createElement("div",({"id": "foot1"}),"Nonforum is a place to start discussion threads based on questions or simply on a topic."),React.createElement("div",({"id": "foot2"}),"Nonforum is also a place where you can share links and discuss them, voting contributions up or down."),React.createElement("div",({"id": "foot3"}),"When you are logged in you can vote on entries with votes signifying double-plus (++), plus (+), and minus (-)"),React.createElement("div",({"id": "foot4"}),"The more you participate, the greater your community trust rating."),React.createElement("div",({"id": "foot5"}),"By providing insightful comments and furthering discussions, your community rating will increase."),React.createElement("div",({"id": "foot6"}),"There are several media-types at nonforum: Articles, Topics, Questions+Discussions, as well as Books and Speeches."),React.createElement("div",({"id": "foot7"}),"For complete information on how to use nonforum most effectively, please check out the ",React.createElement("a",({"href": "/faq"}),"F.A.Q")));
}),null,"footer");
nesferado.client.non_buzz_placeholder = rum.core.build_defc.call(null,(function (){
return React.createElement("div",({"className": "nonbuzz"}),"nonforum");
}),null,"non-buzz-placeholder");
nesferado.client.sponsored_message = rum.core.build_defc.call(null,(function (){
return React.createElement("div",({"id": "spmsg"}),"Help fund Horne Technologies in their next round of Fusion Research, a 5Tesla reactor [details]");
}),null,"sponsored-message");
nesferado.client.go_back_button = rum.core.build_defc.call(null,(function (){
var active_state = "all";
return React.createElement("div",({"onClick": ((function (active_state){
return (function (e){
e.stopPropagation();

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-current","tv-current",-1070700452)], null),"");

return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-curr-id","tv-curr-id",-111236576)], null),"");
});})(active_state))
, "className": "goback"}),"< back to ",sablono.interpreter.interpret.call(null,active_state));
}),null,"go-back-button");
nesferado.client.input_fields = rum.core.build_defc.call(null,(function (){
var attrs34080 = nesferado.client.post_comment_input.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34080))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"inputs-contain"], null),attrs34080)):({"id": "inputs-contain"})),((cljs.core.map_QMARK_.call(null,attrs34080))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34080)], null)));
}),null,"input-fields");
nesferado.client.start = rum.core.build_defc.call(null,(function (){
var logged_in = cljs.core.get_in.call(null,rum.core.react.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"logged-in","logged-in",627058423)], null));
var tv_current = cljs.core.get_in.call(null,rum.core.react.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-current","tv-current",-1070700452)], null));
var curr_comments = cljs.core.get_in.call(null,rum.core.react.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-comments","tv-comments",209439077)], null));
var show_sidebar = cljs.core.get_in.call(null,rum.core.react.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"show-sidebar","show-sidebar",591507660)], null));
var curr_view = cljs.core.get_in.call(null,rum.core.react.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"current-view","current-view",-1037279042)], null));
var temp__4657__auto___34082 = document.getElementById("output");
if(cljs.core.truth_(temp__4657__auto___34082)){
var target_el_34083 = temp__4657__auto___34082;
if(cljs.core._EQ_.call(null,true,logged_in)){
target_el_34083.classList = "hideMe";
} else {
target_el_34083.classList = "justMounted";
}
} else {
}

var attrs34081 = ((cljs.core._EQ_.call(null,false,logged_in))?nesferado.client.non_buzz_placeholder.call(null):null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34081))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"maincontain"], null),attrs34081)):({"id": "maincontain"})),((cljs.core.map_QMARK_.call(null,attrs34081))?new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,false,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.login_bar.call(null)):null),((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.top_bar.call(null)):null),((cljs.core._EQ_.call(null,true,show_sidebar))?((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.side_bar.call(null)):null):null),((cljs.core._EQ_.call(null,"send-feedback",curr_view))?sablono.interpreter.interpret.call(null,nesferado.client.send_feedback_fields.call(null)):null),((cljs.core._EQ_.call(null,"submit",curr_view))?sablono.interpreter.interpret.call(null,nesferado.client.post_input.call(null)):null),((cljs.core._EQ_.call(null,"feed",curr_view))?sablono.interpreter.interpret.call(null,nesferado.client.post_input.call(null)):null),((cljs.core._EQ_.call(null,"latest",curr_view))?sablono.interpreter.interpret.call(null,nesferado.client.post_input.call(null)):null),((cljs.core._EQ_.call(null,"top",curr_view))?sablono.interpreter.interpret.call(null,nesferado.client.post_input.call(null)):null),((cljs.core._EQ_.call(null,"default",curr_view))?((cljs.core._EQ_.call(null,true,logged_in))?((!(cljs.core.empty_QMARK_.call(null,tv_current)))?sablono.interpreter.interpret.call(null,nesferado.client.go_back_button.call(null)):null):null):null),((cljs.core._EQ_.call(null,"default",curr_view))?((cljs.core._EQ_.call(null,true,logged_in))?((!(cljs.core.empty_QMARK_.call(null,tv_current)))?sablono.interpreter.interpret.call(null,nesferado.client.sponsored_message.call(null)):null):null):null),((cljs.core._EQ_.call(null,"default",curr_view))?((cljs.core.empty_QMARK_.call(null,tv_current))?((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.television.call(null)):null):null):null),((cljs.core._EQ_.call(null,"default",curr_view))?((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.tv_cell.call(null,tv_current)):null):null),((cljs.core._EQ_.call(null,"default",curr_view))?((!(cljs.core.empty_QMARK_.call(null,tv_current)))?((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,cljs.core.map.call(null,nesferado.client.render_item,curr_comments)):null):null):null),((cljs.core._EQ_.call(null,"default",curr_view))?((!(cljs.core.empty_QMARK_.call(null,tv_current)))?((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.input_fields.call(null)):null):null):null)], null):new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34081),((cljs.core._EQ_.call(null,false,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.login_bar.call(null)):null),((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.top_bar.call(null)):null),((cljs.core._EQ_.call(null,true,show_sidebar))?((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.side_bar.call(null)):null):null),((cljs.core._EQ_.call(null,"send-feedback",curr_view))?sablono.interpreter.interpret.call(null,nesferado.client.send_feedback_fields.call(null)):null),((cljs.core._EQ_.call(null,"submit",curr_view))?sablono.interpreter.interpret.call(null,nesferado.client.post_input.call(null)):null),((cljs.core._EQ_.call(null,"feed",curr_view))?sablono.interpreter.interpret.call(null,nesferado.client.post_input.call(null)):null),((cljs.core._EQ_.call(null,"latest",curr_view))?sablono.interpreter.interpret.call(null,nesferado.client.post_input.call(null)):null),((cljs.core._EQ_.call(null,"top",curr_view))?sablono.interpreter.interpret.call(null,nesferado.client.post_input.call(null)):null),((cljs.core._EQ_.call(null,"default",curr_view))?((cljs.core._EQ_.call(null,true,logged_in))?((!(cljs.core.empty_QMARK_.call(null,tv_current)))?sablono.interpreter.interpret.call(null,nesferado.client.go_back_button.call(null)):null):null):null),((cljs.core._EQ_.call(null,"default",curr_view))?((cljs.core._EQ_.call(null,true,logged_in))?((!(cljs.core.empty_QMARK_.call(null,tv_current)))?sablono.interpreter.interpret.call(null,nesferado.client.sponsored_message.call(null)):null):null):null),((cljs.core._EQ_.call(null,"default",curr_view))?((cljs.core.empty_QMARK_.call(null,tv_current))?((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.television.call(null)):null):null):null),((cljs.core._EQ_.call(null,"default",curr_view))?((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.tv_cell.call(null,tv_current)):null):null),((cljs.core._EQ_.call(null,"default",curr_view))?((!(cljs.core.empty_QMARK_.call(null,tv_current)))?((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,cljs.core.map.call(null,nesferado.client.render_item,curr_comments)):null):null):null),((cljs.core._EQ_.call(null,"default",curr_view))?((!(cljs.core.empty_QMARK_.call(null,tv_current)))?((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.input_fields.call(null)):null):null):null)], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"start");
rum.core.mount.call(null,nesferado.client.start.call(null),document.getElementById("start"));
rum.core.mount.call(null,nesferado.client.footer.call(null),document.getElementById("footing"));
var temp__4657__auto___34086 = document.getElementById("crsubmit");
if(cljs.core.truth_(temp__4657__auto___34086)){
var target_el_34087 = temp__4657__auto___34086;
target_el_34087.addEventListener("click",((function (target_el_34087,temp__4657__auto___34086){
return (function (ev){
var user_id = document.getElementById("cruser").value;
var pw = document.getElementById("crpass").value;
var pw2 = document.getElementById("crpass2").value;
if(clojure.string.blank_QMARK_.call(null,user_id)){
return alert("Please enter a user-id first");
} else {
nesferado.client.__GT_output_BANG_.call(null,"Creating account",user_id);

return taoensso.sente.ajax_lite.call(null,"/create-account",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,nesferado.client.chsk_state))], null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),[cljs.core.str(user_id)].join(''),new cljs.core.Keyword(null,"password","password",417022471),[cljs.core.str(pw)].join(''),new cljs.core.Keyword(null,"password2","password2",557827521),[cljs.core.str(pw2)].join('')], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)], null),((function (user_id,pw,pw2,target_el_34087,temp__4657__auto___34086){
return (function (ajax_resp){
nesferado.client.__GT_output_BANG_.call(null,"Account creation response: ",ajax_resp);

var map__34084 = ajax_resp;
var map__34084__$1 = ((((!((map__34084 == null)))?((((map__34084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34084):map__34084);
var success_QMARK_ = cljs.core.get.call(null,map__34084__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var _QMARK_status = cljs.core.get.call(null,map__34084__$1,new cljs.core.Keyword(null,"?status","?status",938730360));
var _QMARK_error = cljs.core.get.call(null,map__34084__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__34084__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
var _QMARK_content_type = cljs.core.get.call(null,map__34084__$1,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049));
var http_status = new cljs.core.Keyword(null,"?status","?status",938730360).cljs$core$IFn$_invoke$arity$1(ajax_resp);
var account_create_successful_QMARK_ = cljs.core._EQ_.call(null,(200),http_status);
var stuff = cljs.reader.read_string.call(null,_QMARK_content);
if(!(account_create_successful_QMARK_)){
return nesferado.client.__GT_output_BANG_.call(null,"Account Creation Failed.");
} else {
nesferado.client.__GT_output_BANG_.call(null,"Account Creation Success!");

nesferado.client.__GT_output_BANG_.call(null,[cljs.core.str("Now logged in as "),cljs.core.str(user_id)].join(''));

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"token","token",-1211463215)], null),new cljs.core.Keyword(null,"auth-token","auth-token",30990976).cljs$core$IFn$_invoke$arity$1(stuff));

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"login-time","login-time",138500005)], null),new cljs.core.Keyword(null,"login-time","login-time",138500005).cljs$core$IFn$_invoke$arity$1(stuff));

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"logged-in","logged-in",627058423)], null),true);

return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"current-user","current-user",-868792091)], null),new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(stuff));
}
});})(user_id,pw,pw2,target_el_34087,temp__4657__auto___34086))
);
}
});})(target_el_34087,temp__4657__auto___34086))
);
} else {
}
nesferado.client.on_js_reload = (function nesferado$client$on_js_reload(){
return null;
});
nesferado.client.hax = (function nesferado$client$hax(){
return null;
});
nesferado.client.get_url_params = (function nesferado$client$get_url_params(){
return new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(cemerick.url.url.call(null,window.location.href));
});
console.log([cljs.core.str(nesferado.client.get_url_params.call(null))].join(''));
console.log("sup ninja!!!  ",cljs.core.get.call(null,nesferado.client.get_url_params.call(null),"v"));
nesferado.client.auto_login = (function nesferado$client$auto_login(){
return taoensso.sente.ajax_lite.call(null,"/check-login",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,nesferado.client.chsk_state))], null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uid","uid",-1447769400),nesferado.client.get_item.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400)),new cljs.core.Keyword(null,"auth-token","auth-token",30990976),nesferado.client.get_item.call(null,new cljs.core.Keyword(null,"auth-key","auth-key",1408789427)),new cljs.core.Keyword(null,"login-time","login-time",138500005),nesferado.client.get_item.call(null,new cljs.core.Keyword(null,"login-time","login-time",138500005))], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)], null),(function (ajax_resp){
nesferado.client.__GT_output_BANG_.call(null,"Auto-login response: ",ajax_resp);

var map__34090 = ajax_resp;
var map__34090__$1 = ((((!((map__34090 == null)))?((((map__34090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34090):map__34090);
var success_QMARK_ = cljs.core.get.call(null,map__34090__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var _QMARK_status = cljs.core.get.call(null,map__34090__$1,new cljs.core.Keyword(null,"?status","?status",938730360));
var _QMARK_error = cljs.core.get.call(null,map__34090__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__34090__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
var _QMARK_content_type = cljs.core.get.call(null,map__34090__$1,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049));
var http_status = new cljs.core.Keyword(null,"?status","?status",938730360).cljs$core$IFn$_invoke$arity$1(ajax_resp);
var auto_login_successful_QMARK_ = cljs.core._EQ_.call(null,(200),http_status);
var stuff = cljs.reader.read_string.call(null,_QMARK_content);
if(!(auto_login_successful_QMARK_)){
return nesferado.client.__GT_output_BANG_.call(null,"Auto-login failed");
} else {
nesferado.client.__GT_output_BANG_.call(null,"Auto-login success!");

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"token","token",-1211463215)], null),nesferado.client.get_item.call(null,new cljs.core.Keyword(null,"auth-key","auth-key",1408789427)));

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"login-time","login-time",138500005)], null),nesferado.client.get_item.call(null,new cljs.core.Keyword(null,"login-time","login-time",138500005)));

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"logged-in","logged-in",627058423)], null),true);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"current-user","current-user",-868792091)], null),nesferado.client.get_item.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400)));

return taoensso.sente.chsk_reconnect_BANG_.call(null,nesferado.client.chsk);
}
}));
});
window.onload = ((!(cljs.core.empty_QMARK_.call(null,nesferado.client.get_item.call(null,new cljs.core.Keyword(null,"auth-key","auth-key",1408789427)))))?nesferado.client.auto_login:null);
console.log("auto login?",nesferado.client.get_item.call(null,new cljs.core.Keyword(null,"login-time","login-time",138500005)));
console.log(nesferado.client.get_url_params.call(null));
nesferado.client.start_BANG_ = (function nesferado$client$start_BANG_(){
return nesferado.client.start_router_BANG_.call(null);
});
if(typeof nesferado.client._start_once !== 'undefined'){
} else {
nesferado.client._start_once = nesferado.client.start_BANG_.call(null);
}

//# sourceMappingURL=client.js.map