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
var len__9664__auto___28218 = arguments.length;
var i__9665__auto___28219 = (0);
while(true){
if((i__9665__auto___28219 < len__9664__auto___28218)){
args__9671__auto__.push((arguments[i__9665__auto___28219]));

var G__28220 = (i__9665__auto___28219 + (1));
i__9665__auto___28219 = G__28220;
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"nesferado.client","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init6140436242180601141.clj",27,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (msg){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null);
});})(msg))
,null)),null,618333521);

(nesferado.client.output_el["value"] = [cljs.core.str("\u2022 "),cljs.core.str(nesferado.client.output_el.value),cljs.core.str("\n"),cljs.core.str(msg)].join(''));

return (nesferado.client.output_el["scrollTop"] = nesferado.client.output_el.scrollHeight);
});

nesferado.client.__GT_output_BANG_.cljs$lang$maxFixedArity = (1);

nesferado.client.__GT_output_BANG_.cljs$lang$applyTo = (function (seq28216){
var G__28217 = cljs.core.first.call(null,seq28216);
var seq28216__$1 = cljs.core.next.call(null,seq28216);
return nesferado.client.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28217,seq28216__$1);
});

nesferado.client.__GT_output_BANG_.call(null,"Welcome to Nonforum");
var rand_chsk_type_28223 = (((cljs.core.rand.call(null) >= 0.5))?new cljs.core.Keyword(null,"ajax","ajax",814345549):new cljs.core.Keyword(null,"auto","auto",-566279492));
var packer_28224 = new cljs.core.Keyword(null,"edn","edn",1317840885);
var map__28221_28225 = taoensso.sente.make_channel_socket_client_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),rand_chsk_type_28223,new cljs.core.Keyword(null,"packer","packer",66077544),packer_28224], null));
var map__28221_28226__$1 = ((((!((map__28221_28225 == null)))?((((map__28221_28225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28221_28225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28221_28225):map__28221_28225);
var chsk_28227 = cljs.core.get.call(null,map__28221_28226__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_28228 = cljs.core.get.call(null,map__28221_28226__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_28229 = cljs.core.get.call(null,map__28221_28226__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_28230 = cljs.core.get.call(null,map__28221_28226__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
nesferado.client.chsk = chsk_28227;

nesferado.client.ch_chsk = ch_recv_28228;

nesferado.client.chsk_send_BANG_ = send_fn_28229;

nesferado.client.chsk_state = state_28230;
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
nesferado.client.event_msg_handler = (function nesferado$client$event_msg_handler(p__28231){
var map__28234 = p__28231;
var map__28234__$1 = ((((!((map__28234 == null)))?((((map__28234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28234):map__28234);
var ev_msg = map__28234__$1;
var id = cljs.core.get.call(null,map__28234__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__28234__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__28234__$1,new cljs.core.Keyword(null,"event","event",301435442));
return nesferado.client._event_msg_handler.call(null,ev_msg);
});
cljs.core._add_method.call(null,nesferado.client._event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__28236){
var map__28237 = p__28236;
var map__28237__$1 = ((((!((map__28237 == null)))?((((map__28237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28237):map__28237);
var ev_msg = map__28237__$1;
var event = cljs.core.get.call(null,map__28237__$1,new cljs.core.Keyword(null,"event","event",301435442));
return nesferado.client.__GT_output_BANG_.call(null,"Unhandled event: %s",event);
}));
cljs.core._add_method.call(null,nesferado.client._event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__28239){
var map__28240 = p__28239;
var map__28240__$1 = ((((!((map__28240 == null)))?((((map__28240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28240):map__28240);
var ev_msg = map__28240__$1;
var _QMARK_data = cljs.core.get.call(null,map__28240__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__28242 = (function (){var e = (function (){try{if(cljs.core.vector_QMARK_.call(null,_QMARK_data)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e28245){if((e28245 instanceof Error)){
var e = e28245;
return e;
} else {
throw e28245;

}
}})();
if((e == null)){
return _QMARK_data;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"nesferado.client",null,"(vector? ?data)",_QMARK_data,e,null);
}
})();
var old_state_map = cljs.core.nth.call(null,vec__28242,(0),null);
var new_state_map = cljs.core.nth.call(null,vec__28242,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(new_state_map))){
return nesferado.client.__GT_output_BANG_.call(null,"Channel socket successfully established!: %s",new_state_map);
} else {
return nesferado.client.__GT_output_BANG_.call(null,"Channel socket state change: %s",new_state_map);
}
}));
