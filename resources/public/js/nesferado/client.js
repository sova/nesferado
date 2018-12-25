// Compiled by ClojureScript 1.9.229 {}
goog.provide('nesferado.client');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('taoensso.sente');
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
var args__7465__auto__ = [];
var len__7458__auto___26184 = arguments.length;
var i__7459__auto___26185 = (0);
while(true){
if((i__7459__auto___26185 < len__7458__auto___26184)){
args__7465__auto__.push((arguments[i__7459__auto___26185]));

var G__26186 = (i__7459__auto___26185 + (1));
i__7459__auto___26185 = G__26186;
continue;
} else {
}
break;
}

var argseq__7466__auto__ = ((((1) < args__7465__auto__.length))?(new cljs.core.IndexedSeq(args__7465__auto__.slice((1)),(0),null)):null);
return nesferado.client.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7466__auto__);
});

nesferado.client.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var msg = cljs.core.apply.call(null,taoensso.encore.format,fmt,args);
(nesferado.client.output_el["value"] = [cljs.core.str("\u2014 "),cljs.core.str(nesferado.client.output_el.value),cljs.core.str("\n"),cljs.core.str(msg)].join(''));

return (nesferado.client.output_el["scrollTop"] = nesferado.client.output_el.scrollHeight);
});

nesferado.client.__GT_output_BANG_.cljs$lang$maxFixedArity = (1);

nesferado.client.__GT_output_BANG_.cljs$lang$applyTo = (function (seq26182){
var G__26183 = cljs.core.first.call(null,seq26182);
var seq26182__$1 = cljs.core.next.call(null,seq26182);
return nesferado.client.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26183,seq26182__$1);
});

nesferado.client.__GT_output_BANG_.call(null," \u2022 Welcome to Nonforum \u2022");
var rand_chsk_type_26189 = (((cljs.core.rand.call(null) >= 0.5))?new cljs.core.Keyword(null,"ajax","ajax",814345549):new cljs.core.Keyword(null,"auto","auto",-566279492));
var packer_26190 = new cljs.core.Keyword(null,"edn","edn",1317840885);
var map__26187_26191 = taoensso.sente.make_channel_socket_client_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),rand_chsk_type_26189,new cljs.core.Keyword(null,"packer","packer",66077544),packer_26190], null));
var map__26187_26192__$1 = ((((!((map__26187_26191 == null)))?((((map__26187_26191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26187_26191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26187_26191):map__26187_26191);
var chsk_26193 = cljs.core.get.call(null,map__26187_26192__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_26194 = cljs.core.get.call(null,map__26187_26192__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_26195 = cljs.core.get.call(null,map__26187_26192__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_26196 = cljs.core.get.call(null,map__26187_26192__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
nesferado.client.chsk = chsk_26193;

nesferado.client.ch_chsk = ch_recv_26194;

nesferado.client.chsk_send_BANG_ = send_fn_26195;

nesferado.client.chsk_state = state_26196;
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
nesferado.client.event_msg_handler = (function nesferado$client$event_msg_handler(p__26197){
var map__26200 = p__26197;
var map__26200__$1 = ((((!((map__26200 == null)))?((((map__26200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26200):map__26200);
var ev_msg = map__26200__$1;
var id = cljs.core.get.call(null,map__26200__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__26200__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__26200__$1,new cljs.core.Keyword(null,"event","event",301435442));
return nesferado.client._event_msg_handler.call(null,ev_msg);
});
cljs.core._add_method.call(null,nesferado.client._event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__26202){
var map__26203 = p__26202;
var map__26203__$1 = ((((!((map__26203 == null)))?((((map__26203.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26203.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26203):map__26203);
var ev_msg = map__26203__$1;
var event = cljs.core.get.call(null,map__26203__$1,new cljs.core.Keyword(null,"event","event",301435442));
return console.log(".NF. unhandled:",event);
}));
cljs.core._add_method.call(null,nesferado.client._event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__26205){
var map__26206 = p__26205;
var map__26206__$1 = ((((!((map__26206 == null)))?((((map__26206.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26206.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26206):map__26206);
var ev_msg = map__26206__$1;
var _QMARK_data = cljs.core.get.call(null,map__26206__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__26208 = (function (){var e = (function (){try{if(cljs.core.vector_QMARK_.call(null,_QMARK_data)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e26211){if((e26211 instanceof Error)){
var e = e26211;
return e;
} else {
throw e26211;

}
}})();
if((e == null)){
return _QMARK_data;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"nesferado.client",null,"(vector? ?data)",_QMARK_data,e,null);
}
})();
var old_state_map = cljs.core.nth.call(null,vec__26208,(0),null);
var new_state_map = cljs.core.nth.call(null,vec__26208,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(new_state_map))){
return console.log(".NF. ",new_state_map);
} else {
return null;
}
}));
cljs.core._add_method.call(null,nesferado.client._event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__26212){
var map__26213 = p__26212;
var map__26213__$1 = ((((!((map__26213 == null)))?((((map__26213.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26213.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26213):map__26213);
var ev_msg = map__26213__$1;
var _QMARK_data = cljs.core.get.call(null,map__26213__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return console.log(".NF. push from serv: ",_QMARK_data);
}));
cljs.core._add_method.call(null,nesferado.client._event_msg_handler,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__26215){
var map__26216 = p__26215;
var map__26216__$1 = ((((!((map__26216 == null)))?((((map__26216.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26216.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26216):map__26216);
var ev_msg = map__26216__$1;
var _QMARK_data = cljs.core.get.call(null,map__26216__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__26218 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.call(null,vec__26218,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__26218,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__26218,(2),null);
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
var temp__4657__auto___26221 = document.getElementById("btn1");
if(cljs.core.truth_(temp__4657__auto___26221)){
var target_el_26222 = temp__4657__auto___26221;
target_el_26222.addEventListener("click",((function (target_el_26222,temp__4657__auto___26221){
return (function (ev){
nesferado.client.__GT_output_BANG_.call(null,"Button 1 was clicked (won't receive any reply from server)");

return nesferado.client.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("clientsent","ping","clientsent/ping",1328045379)], null));
});})(target_el_26222,temp__4657__auto___26221))
);
} else {
}
var temp__4657__auto___26223 = document.getElementById("btn2");
if(cljs.core.truth_(temp__4657__auto___26223)){
var target_el_26224 = temp__4657__auto___26223;
target_el_26224.addEventListener("click",((function (target_el_26224,temp__4657__auto___26223){
return (function (ev){
nesferado.client.__GT_output_BANG_.call(null,"Button 2 was clicked (will receive reply from server)");

return nesferado.client.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","button2","example/button2",-675598425),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"had-a-callback?","had-a-callback?",-512946762),"indeed"], null)], null),(5000),((function (target_el_26224,temp__4657__auto___26223){
return (function (cb_reply){
return nesferado.client.__GT_output_BANG_.call(null,"Callback reply: %s",cb_reply);
});})(target_el_26224,temp__4657__auto___26223))
);
});})(target_el_26224,temp__4657__auto___26223))
);
} else {
}
var temp__4657__auto___26225 = document.getElementById("btn3");
if(cljs.core.truth_(temp__4657__auto___26225)){
var target_el_26226 = temp__4657__auto___26225;
target_el_26226.addEventListener("click",((function (target_el_26226,temp__4657__auto___26225){
return (function (ev){
nesferado.client.__GT_output_BANG_.call(null,"Button 3 was clicked (will ask server to test rapid async push)");

return nesferado.client.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","test-rapid-push","example/test-rapid-push",-93412097)], null));
});})(target_el_26226,temp__4657__auto___26225))
);
} else {
}
var temp__4657__auto___26227 = document.getElementById("btn4");
if(cljs.core.truth_(temp__4657__auto___26227)){
var target_el_26228 = temp__4657__auto___26227;
target_el_26228.addEventListener("click",((function (target_el_26228,temp__4657__auto___26227){
return (function (ev){
nesferado.client.__GT_output_BANG_.call(null,"Button 4 was clicked (will toggle async broadcast loop)");

return nesferado.client.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","toggle-broadcast","example/toggle-broadcast",-1640005413)], null),(5000),((function (target_el_26228,temp__4657__auto___26227){
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
});})(target_el_26228,temp__4657__auto___26227))
);
});})(target_el_26228,temp__4657__auto___26227))
);
} else {
}
var temp__4657__auto___26229 = document.getElementById("btn5");
if(cljs.core.truth_(temp__4657__auto___26229)){
var target_el_26230 = temp__4657__auto___26229;
target_el_26230.addEventListener("click",((function (target_el_26230,temp__4657__auto___26229){
return (function (ev){
nesferado.client.__GT_output_BANG_.call(null,"Disconnecting");

return taoensso.sente.chsk_disconnect_BANG_.call(null,nesferado.client.chsk);
});})(target_el_26230,temp__4657__auto___26229))
);
} else {
}
var temp__4657__auto___26231 = document.getElementById("btn6");
if(cljs.core.truth_(temp__4657__auto___26231)){
var target_el_26232 = temp__4657__auto___26231;
target_el_26232.addEventListener("click",((function (target_el_26232,temp__4657__auto___26231){
return (function (ev){
nesferado.client.__GT_output_BANG_.call(null,"Reconnecting");

return taoensso.sente.chsk_reconnect_BANG_.call(null,nesferado.client.chsk);
});})(target_el_26232,temp__4657__auto___26231))
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
nesferado.client.input_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tv-curr-id","tv-curr-id",-111236576),new cljs.core.Keyword(null,"tv-contents","tv-contents",1386118275),new cljs.core.Keyword(null,"selected-child","selected-child",-1028326940),new cljs.core.Keyword(null,"current-user","current-user",-868792091),new cljs.core.Keyword(null,"tv-comments","tv-comments",209439077),new cljs.core.Keyword(null,"login-time","login-time",138500005),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"tv-posted-by","tv-posted-by",-35895188),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"create-password","create-password",1870602480),new cljs.core.Keyword(null,"create-password2","create-password2",798530673),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"create-username","create-username",515996759),new cljs.core.Keyword(null,"logged-in","logged-in",627058423),new cljs.core.Keyword(null,"contents","contents",-1567174023),new cljs.core.Keyword(null,"tv-title","tv-title",1038509594),new cljs.core.Keyword(null,"tv-current","tv-current",-1070700452),new cljs.core.Keyword(null,"tv-priority","tv-priority",23309500),new cljs.core.Keyword(null,"selected-parent","selected-parent",1600183774),new cljs.core.Keyword(null,"tv-timestamp","tv-timestamp",447467647),new cljs.core.Keyword(null,"tv-link","tv-link",1690495327)],[(0),"",cljs.core.PersistentVector.EMPTY,"",cljs.core.PersistentVector.EMPTY,"","","","","","","","","ur coment","",false,"","",cljs.core.PersistentArrayMap.EMPTY,(4),(0),(808),""])], null)], null));
nesferado.client.js_reload = (function nesferado$client$js_reload(){
return console.log("javascript reloaded ^_^;");
});
nesferado.client.posts = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(77),new cljs.core.Keyword(null,"contents","contents",-1567174023),"Seventy seven is the nicest number below one hundred",new cljs.core.Keyword(null,"author","author",2111686192),"nonforum@nonforum.com",new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128),(2),new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318),(98),new cljs.core.Keyword(null,"comments","comments",-293346423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(33),(53)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(33),new cljs.core.Keyword(null,"contents","contents",-1567174023),"Thirty three is awesome.",new cljs.core.Keyword(null,"author","author",2111686192),"monforum@nonforum.com",new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128),(1),new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318),(99),new cljs.core.Keyword(null,"comments","comments",-293346423),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(34)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(34),new cljs.core.Keyword(null,"contents","contents",-1567174023),"fusion is coming soon to a powergrid near you.",new cljs.core.Keyword(null,"author","author",2111686192),"non@nonforum.com",new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128),(3),new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318),(300),new cljs.core.Keyword(null,"comments","comments",-293346423),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(37)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(37),new cljs.core.Keyword(null,"contents","contents",-1567174023),"hello there to the galaxy",new cljs.core.Keyword(null,"author","author",2111686192),"x@nonforum.com",new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128),(5),new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318),(470),new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(53),new cljs.core.Keyword(null,"contents","contents",-1567174023),"relax , don't do it.",new cljs.core.Keyword(null,"author","author",2111686192),"fool@nonforum.com",new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128),(70),new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318),(6900),new cljs.core.Keyword(null,"comments","comments",-293346423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(88),(7777)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(69),new cljs.core.Keyword(null,"contents","contents",-1567174023),"the extraordinary world of bugs is glorious.",new cljs.core.Keyword(null,"author","author",2111686192),"fx@nonforum.com",new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128),(4),new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318),(380),new cljs.core.Keyword(null,"comments","comments",-293346423),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(77)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(7777),new cljs.core.Keyword(null,"contents","contents",-1567174023),"Oh how I love the rain",new cljs.core.Keyword(null,"author","author",2111686192),"rains@nonforum.com",new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128),(2),new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318),(190),new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.PersistentVector.EMPTY], null)], null));
cljs.core.swap_BANG_.call(null,nesferado.client.posts,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(88),new cljs.core.Keyword(null,"contents","contents",-1567174023),"fortunate are the African penguins",new cljs.core.Keyword(null,"author","author",2111686192),"vv@nonforum.com",new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128),(2),new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318),(184),new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.PersistentVector.EMPTY], null));
nesferado.client.ratings = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null));
nesferado.client.get_post_by_id = (function nesferado$client$get_post_by_id(post_id){
var post = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__26233_SHARP_){
return cljs.core._EQ_.call(null,post_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26233_SHARP_));
}),cljs.core.deref.call(null,nesferado.client.posts)));
return post;
});
nesferado.client.get_post_by_id.call(null,(77));
cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__26234_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__26234_SHARP_)),(88));
}),cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.deref.call(null,nesferado.client.posts)))));
nesferado.client.sort_the_comments_of_BANG_ = (function nesferado$client$sort_the_comments_of_BANG_(post_id){
var sort_me_id = post_id;
var spot = cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,((function (sort_me_id){
return (function (p1__26235_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__26235_SHARP_)),sort_me_id);
});})(sort_me_id))
,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.deref.call(null,nesferado.client.posts)))));
var sorted_comments = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128),cljs.core._GT_,cljs.core.map.call(null,nesferado.client.get_post_by_id,new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(nesferado.client.get_post_by_id.call(null,sort_me_id)))));
return cljs.core.swap_BANG_.call(null,nesferado.client.posts,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spot,new cljs.core.Keyword(null,"comments","comments",-293346423)], null),sorted_comments);
});
nesferado.client.return_comment_ids = (function nesferado$client$return_comment_ids(post_id){
var cids = new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__26236_SHARP_){
return cljs.core._EQ_.call(null,post_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26236_SHARP_));
}),cljs.core.deref.call(null,nesferado.client.posts))));
var posts = cljs.core.map.call(null,nesferado.client.get_post_by_id,cids);
var post_collection = cljs.core.sort_by.call(null,((function (cids,posts){
return (function (p1__26237_SHARP_){
return (new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318).cljs$core$IFn$_invoke$arity$1(p1__26237_SHARP_) / new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128).cljs$core$IFn$_invoke$arity$1(p1__26237_SHARP_));
});})(cids,posts))
,posts);
var spc = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),post_collection);
return spc;
});
nesferado.client.return_comment_ids_of_tv = (function nesferado$client$return_comment_ids_of_tv(tile_id){
var cids = new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__26238_SHARP_){
return cljs.core._EQ_.call(null,nesferado.client.post_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26238_SHARP_));
}),cljs.core.deref.call(null,nesferado.client.tv_state))));
var posts = cljs.core.map.call(null,nesferado.client.get_post_by_id,cids);
var post_collection = cljs.core.sort_by.call(null,((function (cids,posts){
return (function (p1__26239_SHARP_){
return (new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318).cljs$core$IFn$_invoke$arity$1(p1__26239_SHARP_) / new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128).cljs$core$IFn$_invoke$arity$1(p1__26239_SHARP_));
});})(cids,posts))
,posts);
var spc = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),post_collection);
return spc;
});
nesferado.client.return_comment_ids.call(null,(34));
nesferado.client.return_comment_ids.call(null,(53));
nesferado.client.return_comment_ids.call(null,(69));
nesferado.client.return_comment_ids.call(null,(77));
cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__26240_SHARP_){
return cljs.core._EQ_.call(null,(69),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26240_SHARP_));
}),cljs.core.deref.call(null,nesferado.client.posts)));
cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,nesferado.client.posts));
cljs.core.map.call(null,nesferado.client.sort_the_comments_of_BANG_,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,nesferado.client.posts)));
nesferado.client.try_login = (function nesferado$client$try_login(username,pw){
if(clojure.string.blank_QMARK_.call(null,username)){
return alert("Please enter a user-id first");
} else {
nesferado.client.__GT_output_BANG_.call(null,[cljs.core.str("Logging in with username "),cljs.core.str(username)].join(''));

return taoensso.sente.ajax_lite.call(null,"/login",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,nesferado.client.chsk_state))], null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),[cljs.core.str(username)].join(''),new cljs.core.Keyword(null,"password","password",417022471),[cljs.core.str(pw)].join('')], null),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697)], null),(function (ajax_resp){
var map__26243 = ajax_resp;
var map__26243__$1 = ((((!((map__26243 == null)))?((((map__26243.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26243.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26243):map__26243);
var success_QMARK_ = cljs.core.get.call(null,map__26243__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var _QMARK_status = cljs.core.get.call(null,map__26243__$1,new cljs.core.Keyword(null,"?status","?status",938730360));
var _QMARK_error = cljs.core.get.call(null,map__26243__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__26243__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
var _QMARK_content_type = cljs.core.get.call(null,map__26243__$1,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049));
var login_successful_QMARK_ = success_QMARK_;
var stuff = cljs.reader.read_string.call(null,_QMARK_content);
if(cljs.core.not.call(null,login_successful_QMARK_)){
return nesferado.client.__GT_output_BANG_.call(null,"Login failed");
} else {
nesferado.client.__GT_output_BANG_.call(null,"Login successful");

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
var comp_26245 = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var dom_node_26246 = ReactDOM.findDOMNode(comp_26245);
dom_node_26246.classList = "justMounted";

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
return (function (p1__26247_SHARP_){
return cljs.core._EQ_.call(null,pid,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26247_SHARP_));
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
return (function (p1__26248_SHARP_){
return cljs.core._EQ_.call(null,p1__26248_SHARP_,pid);
});})(noc_post,post_coll,input_coll,cids,__,local_atom))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"selected-child","selected-child",-1028326940)], null))))?"selectedChild":null))], null))}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"contents","contents",-1567174023).cljs$core$IFn$_invoke$arity$1(noc_post)),(function (){var attrs26253 = new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(noc_post);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26253))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-author"], null)], null),attrs26253)):({"className": "item-author"})),((cljs.core.map_QMARK_.call(null,attrs26253))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26253)], null)));
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
, "className": "item-rate-minus"}),"-"),(function (){var attrs26254 = (new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318).cljs$core$IFn$_invoke$arity$1(noc_post) / new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128).cljs$core$IFn$_invoke$arity$1(noc_post));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26254))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-rating"], null)], null),attrs26254)):({"className": "item-rating"})),((cljs.core.map_QMARK_.call(null,attrs26254))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26254)], null)));
})()))));
} else {
var com_post = cljs.core.first.call(null,cljs.core.filter.call(null,((function (post_coll,input_coll,cids,__,local_atom){
return (function (p1__26249_SHARP_){
return cljs.core._EQ_.call(null,pid,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26249_SHARP_));
});})(post_coll,input_coll,cids,__,local_atom))
,cljs.core.sort_by.call(null,((function (post_coll,input_coll,cids,__,local_atom){
return (function (p1__26250_SHARP_){
return (new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318).cljs$core$IFn$_invoke$arity$1(p1__26250_SHARP_) / new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128).cljs$core$IFn$_invoke$arity$1(p1__26250_SHARP_));
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
return (function (p1__26251_SHARP_){
return cljs.core._EQ_.call(null,p1__26251_SHARP_,pid);
});})(com_post,post_coll,input_coll,cids,__,local_atom))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"selected-child","selected-child",-1028326940)], null))))?"selectedChild":null))], null))}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"contents","contents",-1567174023).cljs$core$IFn$_invoke$arity$1(com_post)),(function (){var attrs26255 = new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(com_post);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26255))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-author"], null)], null),attrs26255)):({"className": "item-author"})),((cljs.core.map_QMARK_.call(null,attrs26255))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26255)], null)));
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
, "className": "item-rate-minus"}),"-"),(function (){var attrs26256 = (new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318).cljs$core$IFn$_invoke$arity$1(com_post) / new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128).cljs$core$IFn$_invoke$arity$1(com_post));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26256))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-rating"], null)], null),attrs26256)):({"className": "item-rating"})),((cljs.core.map_QMARK_.call(null,attrs26256))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26256)], null)));
})())),React.createElement("button",({"onClick": ((function (com_post,post_coll,input_coll,cids,__,local_atom){
return (function (_){
return cljs.core.swap_BANG_.call(null,local_atom,((function (com_post,post_coll,input_coll,cids,__,local_atom){
return (function (p1__26252_SHARP_){
return ((-1) * p1__26252_SHARP_);
});})(com_post,post_coll,input_coll,cids,__,local_atom))
);
});})(com_post,post_coll,input_coll,cids,__,local_atom))
, "className": "commentog"}),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,local_atom),(-1)))?"hide":"show")),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,local_atom),(-1)))?sablono.interpreter.interpret.call(null,cljs.core.map.call(null,nesferado.client.render_item,cids)):null)));
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.call(null,(-1),new cljs.core.Keyword("nesferado.client","hidecomments","nesferado.client/hidecomments",-2061490545)),nesferado.client.show_fresh], null),"render-item");
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
var attrs26257 = nesferado.client.create_account_fields.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26257))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"create-account-contain"], null),attrs26257)):({"id": "create-account-contain"})),((cljs.core.map_QMARK_.call(null,attrs26257))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26257)], null)));
}),null,"create-account-input");
nesferado.client.link = rum.core.build_defc.call(null,(function (address){
return React.createElement("a",({"href": address}),sablono.interpreter.interpret.call(null,address));
}),null,"link");
nesferado.client.top_bar = rum.core.build_defc.call(null,(function (){
var current_user = cljs.core.get_in.call(null,rum.core.react.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"current-user","current-user",-868792091)], null));
return React.createElement("div",({"id": "topbar"}),React.createElement("ol",({"className": "topbar"}),React.createElement("li",null,React.createElement("a",({"href": "/"}),"n\u229Cnforum")),React.createElement("li",null,React.createElement("span",({"onClick": ((function (current_user){
return (function (e){
e.stopPropagation();

return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"show-sidebar","show-sidebar",591507660)], null),cljs.core.not);
});})(current_user))
})," \u2234 preferences")),React.createElement("li",null,"\u03C8 ",sablono.interpreter.interpret.call(null,nesferado.client.link.call(null,"top"))),React.createElement("li",null,"\u0394 ",sablono.interpreter.interpret.call(null,nesferado.client.link.call(null,"latest"))),React.createElement("li",null,"\u039E ",sablono.interpreter.interpret.call(null,nesferado.client.link.call(null,"submit"))),React.createElement("li",null,"\u03E1 ",sablono.interpreter.interpret.call(null,nesferado.client.link.call(null,"feed"))),React.createElement("li",null,React.createElement("a",({"href": "/my/profile"}),sablono.interpreter.interpret.call(null,[cljs.core.str(" \u03DF "),cljs.core.str(current_user)].join('')))),React.createElement("li",null,React.createElement("span",({"onClick": ((function (current_user){
return (function (e){
e.stopPropagation();

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"logged-in","logged-in",627058423)], null),false);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"username","username",1605666410)], null),"");

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"auth-token","auth-token",30990976)], null),"");

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"login-time","login-time",138500005)], null),"");

return nesferado.client.__GT_output_BANG_.call(null,[cljs.core.str("Logout Successful")].join(''));
});})(current_user))
}),"\u21CF logout"))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"top-bar");
nesferado.client.side_bar = rum.core.build_defc.call(null,(function (){
return React.createElement("div",({"id": "sidebar"}),React.createElement("ol",({"className": "sidebar"}),(function (){var attrs26260 = nesferado.client.link.call(null,"edit profile");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs26260))?sablono.interpreter.attributes.call(null,attrs26260):null),((cljs.core.map_QMARK_.call(null,attrs26260))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26260)], null)));
})(),(function (){var attrs26261 = nesferado.client.link.call(null,"view profile");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs26261))?sablono.interpreter.attributes.call(null,attrs26261):null),((cljs.core.map_QMARK_.call(null,attrs26261))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26261)], null)));
})(),(function (){var attrs26262 = nesferado.client.link.call(null,"stats");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs26262))?sablono.interpreter.attributes.call(null,attrs26262):null),((cljs.core.map_QMARK_.call(null,attrs26262))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26262)], null)));
})(),(function (){var attrs26263 = nesferado.client.link.call(null,"set password");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs26263))?sablono.interpreter.attributes.call(null,attrs26263):null),((cljs.core.map_QMARK_.call(null,attrs26263))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26263)], null)));
})(),(function (){var attrs26264 = nesferado.client.link.call(null,"set email");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs26264))?sablono.interpreter.attributes.call(null,attrs26264):null),((cljs.core.map_QMARK_.call(null,attrs26264))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26264)], null)));
})(),(function (){var attrs26265 = nesferado.client.link.call(null,"invite friends");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs26265))?sablono.interpreter.attributes.call(null,attrs26265):null),((cljs.core.map_QMARK_.call(null,attrs26265))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26265)], null)));
})(),(function (){var attrs26266 = nesferado.client.link.call(null,"give feedback");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs26266))?sablono.interpreter.attributes.call(null,attrs26266):null),((cljs.core.map_QMARK_.call(null,attrs26266))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26266)], null)));
})(),(function (){var attrs26267 = nesferado.client.link.call(null,"$upport nonforum");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs26267))?sablono.interpreter.attributes.call(null,attrs26267):null),((cljs.core.map_QMARK_.call(null,attrs26267))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26267)], null)));
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
, "id": [cljs.core.str("tile"),cljs.core.str(id)].join(''), "className": "tile"}),(function (){var attrs26268 = title;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26268))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["heading"], null)], null),attrs26268)):({"className": "heading"})),((cljs.core.map_QMARK_.call(null,attrs26268))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26268)], null)));
})(),(function (){var attrs26269 = contents;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26269))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["contents"], null)], null),attrs26269)):({"className": "contents"})),((cljs.core.map_QMARK_.call(null,attrs26269))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26269)], null)));
})(),(function (){var attrs26270 = id;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26270))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["priority"], null)], null),attrs26270)):({"className": "priority"})),((cljs.core.map_QMARK_.call(null,attrs26270))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26270)], null)));
})()));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),(function (td){
return [cljs.core.str(nesferado.client.uuid.call(null,[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(td))].join('')))].join('');
})], null)], null),"tv-cell");
nesferado.client.television = rum.core.build_defc.call(null,(function (){
return React.createElement("div",({"id": "tv"}),(function (){var attrs26271 = cljs.core.map.call(null,nesferado.client.tv_cell,rum.core.react.call(null,nesferado.client.tv_state));
return cljs.core.apply.call(null,React.createElement,"ol",((cljs.core.map_QMARK_.call(null,attrs26271))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tv"], null)], null),attrs26271)):({"className": "tv"})),((cljs.core.map_QMARK_.call(null,attrs26271))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26271)], null)));
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

var new_post_map = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"title","title",636505583)], null)),new cljs.core.Keyword(null,"contents","contents",-1567174023),cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"contents","contents",-1567174023)], null)),new cljs.core.Keyword(null,"priority","priority",1431093715),(10),new cljs.core.Keyword(null,"posted-by","posted-by",-66955024),"x@nonforum.com",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(80008),new cljs.core.Keyword(null,"parent","parent",-878878779),null], null);
return cljs.core.swap_BANG_.call(null,nesferado.client.tv_state,cljs.core.update,new cljs.core.Keyword(null,"tiles","tiles",178505240),cljs.core.conj,new_post_map);
}), "className": "fullwidth"}),"post new"));
}),null,"post-input");
nesferado.client.y = cljs.core.atom.call(null,(999));
nesferado.client.post_comment_input = rum.core.build_defc.call(null,(function (){
return React.createElement("form",({"id": "postcommentinput"}),sablono.interpreter.create_element.call(null,"textarea",({"value": cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"comment","comment",532206069)], null)), "placeholder": "your comment", "onChange": (function (e){
return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"comment","comment",532206069)], null),e.target.value);
}), "className": "fullwidth"})),sablono.interpreter.create_element.call(null,"input",({"value": cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"username","username",1605666410)], null)), "placeholder": "username", "onChange": (function (e){
return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"username","username",1605666410)], null),e.target.value);
}), "className": "fullwidth"})),React.createElement("button",({"type": "button", "onClick": (function (e){
var parent_id = cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"selected-parent","selected-parent",1600183774)], null));
var username = cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"username","username",1605666410)], null));
var curr_tv = cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-curr-id","tv-curr-id",-111236576)], null));
var new_comment_map = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.swap_BANG_.call(null,nesferado.client.y,cljs.core.inc),new cljs.core.Keyword(null,"contents","contents",-1567174023),cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"comment","comment",532206069)], null)),new cljs.core.Keyword(null,"author","author",2111686192),username,new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.PersistentVector.EMPTY], null);
var first_hit = cljs.core.first.call(null,cljs.core.keep_indexed.call(null,((function (parent_id,username,curr_tv,new_comment_map){
return (function (p1__26273_SHARP_,p2__26272_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__26272_SHARP_),parent_id)){
return p1__26273_SHARP_;
} else {
return null;
}
});})(parent_id,username,curr_tv,new_comment_map))
,cljs.core.deref.call(null,nesferado.client.posts)));
var second_hit = cljs.core.first.call(null,cljs.core.keep_indexed.call(null,((function (first_hit,parent_id,username,curr_tv,new_comment_map){
return (function (p1__26275_SHARP_,p2__26274_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__26274_SHARP_),curr_tv)){
return p1__26275_SHARP_;
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

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-comments","tv-comments",209439077)], null),cljs.core.conj,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_comment_map));
} else {
cljs.core.swap_BANG_.call(null,nesferado.client.posts,cljs.core.conj,new_comment_map);

cljs.core.swap_BANG_.call(null,nesferado.client.posts,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_hit,new cljs.core.Keyword(null,"comments","comments",-293346423)], null),cljs.core.conj,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_comment_map));
}

return console.log(cljs.core.deref.call(null,nesferado.client.posts));
}), "className": "fullwidth replySelected"}),((cljs.core._EQ_.call(null,nesferado.client.parent_id,nesferado.client.curr_tv))?"Reply to the original post.":"Reply to Plum-highlighted Comment")));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"post-comment-input");
nesferado.client.footer = rum.core.build_defc.call(null,(function (){
return React.createElement("div",({"id": "footer"}),"Welcome to nonforum.  Here you will find real-time threads and discussion boards.",React.createElement("div",({"id": "foot1"}),"Nonforum is a place to start discussion threads based on questions or simply on a topic."),React.createElement("div",({"id": "foot2"}),"Nonforum is also a place where you can share links and discuss them, voting contributions up or down."),React.createElement("div",({"id": "foot3"}),"When you are logged in you can vote on entries with votes signifying double-plus (++), plus (+), and minus (-)"),React.createElement("div",({"id": "foot4"}),"The more you participate, the greater your community trust rating."),React.createElement("div",({"id": "foot5"}),"By providing insightful comments and furthering discussions, your community rating will increase."),React.createElement("div",({"id": "foot6"}),"There are several media-types at nonforum: Articles, Topics, Questions+Discussions, as well as Books and Speeches."),React.createElement("div",({"id": "foot7"}),"For complete information on how to use nonforum most effectively, please check out the ",React.createElement("a",({"href": "/faq"}),"F.A.Q")));
}),null,"footer");
nesferado.client.non_buzz_placeholder = rum.core.build_defc.call(null,(function (){
return React.createElement("div",({"className": "nonbuzz"}),"nonforum");
}),null,"non-buzz-placeholder");
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
var attrs26280 = nesferado.client.post_comment_input.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26280))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"inputs-contain"], null),attrs26280)):({"id": "inputs-contain"})),((cljs.core.map_QMARK_.call(null,attrs26280))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26280)], null)));
}),null,"input-fields");
nesferado.client.start = rum.core.build_defc.call(null,(function (){
var logged_in = cljs.core.get_in.call(null,rum.core.react.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"logged-in","logged-in",627058423)], null));
var tv_current = cljs.core.get_in.call(null,rum.core.react.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-current","tv-current",-1070700452)], null));
var curr_comments = cljs.core.get_in.call(null,rum.core.react.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-comments","tv-comments",209439077)], null));
var show_sidebar = cljs.core.get_in.call(null,rum.core.react.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"show-sidebar","show-sidebar",591507660)], null));
var curr_view = cljs.core.get_in.call(null,rum.core.react.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"current-view","current-view",-1037279042)], null));
var temp__4657__auto___26282 = document.getElementById("output");
if(cljs.core.truth_(temp__4657__auto___26282)){
var target_el_26283 = temp__4657__auto___26282;
if(cljs.core._EQ_.call(null,true,logged_in)){
target_el_26283.classList = "hideMe";
} else {
target_el_26283.classList = "justMounted";
}
} else {
}

var attrs26281 = ((cljs.core._EQ_.call(null,false,logged_in))?nesferado.client.non_buzz_placeholder.call(null):null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26281))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"maincontain"], null),attrs26281)):({"id": "maincontain"})),((cljs.core.map_QMARK_.call(null,attrs26281))?new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,false,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.login_bar.call(null)):null),((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.top_bar.call(null)):null),((cljs.core._EQ_.call(null,true,show_sidebar))?((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.side_bar.call(null)):null):null),((cljs.core._EQ_.call(null,true,logged_in))?((!(cljs.core.empty_QMARK_.call(null,tv_current)))?sablono.interpreter.interpret.call(null,nesferado.client.go_back_button.call(null)):null):null),((cljs.core.empty_QMARK_.call(null,tv_current))?((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.television.call(null)):null):null),((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.tv_cell.call(null,tv_current)):null),((!(cljs.core.empty_QMARK_.call(null,tv_current)))?((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,cljs.core.map.call(null,nesferado.client.render_item,curr_comments)):null):null),((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.input_fields.call(null)):null)], null):new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26281),((cljs.core._EQ_.call(null,false,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.login_bar.call(null)):null),((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.top_bar.call(null)):null),((cljs.core._EQ_.call(null,true,show_sidebar))?((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.side_bar.call(null)):null):null),((cljs.core._EQ_.call(null,true,logged_in))?((!(cljs.core.empty_QMARK_.call(null,tv_current)))?sablono.interpreter.interpret.call(null,nesferado.client.go_back_button.call(null)):null):null),((cljs.core.empty_QMARK_.call(null,tv_current))?((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.television.call(null)):null):null),((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.tv_cell.call(null,tv_current)):null),((!(cljs.core.empty_QMARK_.call(null,tv_current)))?((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,cljs.core.map.call(null,nesferado.client.render_item,curr_comments)):null):null),((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.input_fields.call(null)):null)], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"start");
rum.core.mount.call(null,nesferado.client.start.call(null),document.getElementById("start"));
rum.core.mount.call(null,nesferado.client.footer.call(null),document.getElementById("footing"));
var temp__4657__auto___26286 = document.getElementById("crsubmit");
if(cljs.core.truth_(temp__4657__auto___26286)){
var target_el_26287 = temp__4657__auto___26286;
target_el_26287.addEventListener("click",((function (target_el_26287,temp__4657__auto___26286){
return (function (ev){
var user_id = document.getElementById("cruser").value;
var pw = document.getElementById("crpass").value;
var pw2 = document.getElementById("crpass2").value;
if(clojure.string.blank_QMARK_.call(null,user_id)){
return alert("Please enter a user-id first");
} else {
nesferado.client.__GT_output_BANG_.call(null,"Creating account",user_id);

return taoensso.sente.ajax_lite.call(null,"/create-account",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,nesferado.client.chsk_state))], null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),[cljs.core.str(user_id)].join(''),new cljs.core.Keyword(null,"password","password",417022471),[cljs.core.str(pw)].join(''),new cljs.core.Keyword(null,"password2","password2",557827521),[cljs.core.str(pw2)].join('')], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)], null),((function (user_id,pw,pw2,target_el_26287,temp__4657__auto___26286){
return (function (ajax_resp){
nesferado.client.__GT_output_BANG_.call(null,"Account creation response: ",ajax_resp);

var map__26284 = ajax_resp;
var map__26284__$1 = ((((!((map__26284 == null)))?((((map__26284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26284):map__26284);
var success_QMARK_ = cljs.core.get.call(null,map__26284__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var _QMARK_status = cljs.core.get.call(null,map__26284__$1,new cljs.core.Keyword(null,"?status","?status",938730360));
var _QMARK_error = cljs.core.get.call(null,map__26284__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__26284__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
var _QMARK_content_type = cljs.core.get.call(null,map__26284__$1,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049));
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
});})(user_id,pw,pw2,target_el_26287,temp__4657__auto___26286))
);
}
});})(target_el_26287,temp__4657__auto___26286))
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
console.log(nesferado.client.get_url_params.call(null));
nesferado.client.start_BANG_ = (function nesferado$client$start_BANG_(){
return nesferado.client.start_router_BANG_.call(null);
});
if(typeof nesferado.client._start_once !== 'undefined'){
} else {
nesferado.client._start_once = nesferado.client.start_BANG_.call(null);
}

//# sourceMappingURL=client.js.map