// Compiled by ClojureScript 1.9.229 {}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('clojure.string');
if(cljs.core.vector_QMARK_.call(null,taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(79),(1)], null));
} else {
taoensso.encore.assert_min_encore_version.call(null,2.79);
}
/**
 * Useful for identifying client/server mismatch
 */
taoensso.sente.sente_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(11),(0)], null);
taoensso.sente.node_target_QMARK_ = cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs");
if(typeof taoensso.sente.debug_mode_QMARK__ !== 'undefined'){
} else {
taoensso.sente.debug_mode_QMARK__ = cljs.core.atom.call(null,false);
}
taoensso.sente.expected = (function taoensso$sente$expected(expected__$1,x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expected","expected",1583670997),expected__$1,new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null)], null);
});
/**
 * Returns nil if given argument is a valid [ev-id ?ev-data] form. Otherwise
 *   returns a map of validation errors like `{:wrong-type {:expected _ :actual _}}`.
 */
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915),taoensso.sente.expected.call(null,new cljs.core.Keyword(null,"vector","vector",1902966158),x)], null);
} else {
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281),taoensso.sente.expected.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__35411 = x;
var ev_id = cljs.core.nth.call(null,vec__35411,(0),null);
var _ = cljs.core.nth.call(null,vec__35411,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689),taoensso.sente.expected.call(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),ev_id)], null);
} else {
if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772),taoensso.sente.expected.call(null,new cljs.core.Keyword(null,"namespaced-keyword","namespaced-keyword",131372895),ev_id)], null);
} else {
return null;

}
}

}
}
});
/**
 * Returns given argument if it is a valid [ev-id ?ev-data] form. Otherwise
 *   throws a validation exception.
 */
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__4657__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var errs = temp__4657__auto__;
throw cljs.core.ex_info.call(null,"Invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"errors","errors",-908790718),errs], null));
} else {
return null;
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event.call(null,x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
var temp__4655__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var errs = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
} else {
return x;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
var and__8581__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__8581__auto__){
var and__8581__auto____$1 = taoensso.encore.ks_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__8581__auto____$1){
var map__35424 = x;
var map__35424__$1 = ((((!((map__35424 == null)))?((((map__35424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35424):map__35424);
var ch_recv = cljs.core.get.call(null,map__35424__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__35424__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__35424__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__35424__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__8581__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__8581__auto____$2){
var and__8581__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__8581__auto____$3){
var and__8581__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(and__8581__auto____$4){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__8581__auto____$4;
}
} else {
return and__8581__auto____$3;
}
} else {
return and__8581__auto____$2;
}
} else {
return and__8581__auto____$1;
}
} else {
return and__8581__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__8581__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__8581__auto__){
var and__8581__auto____$1 = taoensso.encore.ks_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__8581__auto____$1){
var map__35436 = x;
var map__35436__$1 = ((((!((map__35436 == null)))?((((map__35436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35436):map__35436);
var ch_recv = cljs.core.get.call(null,map__35436__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__35436__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__35436__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__35436__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__35436__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__35436__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__35436__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__8581__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__8581__auto____$2){
var and__8581__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__8581__auto____$3){
var and__8581__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(and__8581__auto____$4){
var and__8581__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__8581__auto____$5){
var and__8581__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(and__8581__auto____$6){
var and__8581__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__8581__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__8581__auto____$7;
}
} else {
return and__8581__auto____$6;
}
} else {
return and__8581__auto____$5;
}
} else {
return and__8581__auto____$4;
}
} else {
return and__8581__auto____$3;
}
} else {
return and__8581__auto____$2;
}
} else {
return and__8581__auto____$1;
}
} else {
return and__8581__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__35438){
var map__35444 = p__35438;
var map__35444__$1 = ((((!((map__35444 == null)))?((((map__35444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35444):map__35444);
var ev_msg = map__35444__$1;
var event = cljs.core.get.call(null,map__35444__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__35444__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__35446 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__35446,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__35446,(1),null);
var valid_event = vec__35446;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__35446,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__35444,map__35444__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__35446,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__35444,map__35444__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null,1470574955);
} else {
return cljs.core.async.put_BANG_.call(null,ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply_clj);
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not.call(null,taoensso.sente.cb_error_QMARK_.call(null,cb_reply_clj));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
if(typeof prefixed_pstr === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? prefixed-pstr)",prefixed_pstr,null,null);
}

var wrapped_QMARK_ = taoensso.encore.str_starts_with_QMARK_.call(null,prefixed_pstr,"+");
var pstr = cljs.core.subs.call(null,prefixed_pstr,(1));
var clj = (function (){try{return taoensso.sente.interfaces.unpack.call(null,packer,pstr);
}catch (e35456){var t = e35456;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",208,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t,wrapped_QMARK_,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t,wrapped_QMARK_,pstr))
,null)),null,126541461);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}})();
var vec__35453 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__35453,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__35453,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",214,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (wrapped_QMARK_,pstr,clj,vec__35453,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(wrapped_QMARK_,pstr,clj,vec__35453,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null,1094017885);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
taoensso.sente.with__QMARK_meta = (function taoensso$sente$with__QMARK_meta(x,_QMARK_m){
if(cljs.core.seq.call(null,_QMARK_m)){
return cljs.core.with_meta.call(null,x,_QMARK_m);
} else {
return x;
}
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var args35457 = [];
var len__9664__auto___35460 = arguments.length;
var i__9665__auto___35461 = (0);
while(true){
if((i__9665__auto___35461 < len__9664__auto___35460)){
args35457.push((arguments[i__9665__auto___35461]));

var G__35462 = (i__9665__auto___35461 + (1));
i__9665__auto___35461 = G__35462;
continue;
} else {
}
break;
}

var G__35459 = args35457.length;
switch (G__35459) {
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35457.length)].join('')));

}
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
var pstr = [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",224,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj], null),pstr], null);
});})(pstr))
,null)),null,-899460718);

return pstr;
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",234,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_uuid__$1,wrapped_clj,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj,_QMARK_cb_uuid__$1], null),pstr], null);
});})(_QMARK_cb_uuid__$1,wrapped_clj,pstr))
,null)),null,-475286744);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = 4;


/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.EdnPacker = (function (){
})
taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$ = true;

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return taoensso.encore.pr_edn.call(null,x);
});

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return taoensso.encore.read_edn.call(null,s);
});

taoensso.sente.EdnPacker.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.sente.EdnPacker.cljs$lang$type = true;

taoensso.sente.EdnPacker.cljs$lang$ctorStr = "taoensso.sente/EdnPacker";

taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__9199__auto__,writer__9200__auto__,opt__9201__auto__){
return cljs.core._write.call(null,writer__9200__auto__,"taoensso.sente/EdnPacker");
});

taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (p1__35464_SHARP_){
if(!((p1__35464_SHARP_ == null))){
if((false) || (p1__35464_SHARP_.taoensso$sente$interfaces$IPacker$)){
return true;
} else {
if((!p1__35464_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__35464_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__35464_SHARP_);
}
}).call(null,x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e35467){if((e35467 instanceof Error)){
var e = e35467;
return e;
} else {
throw e35467;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__35464#] (satisfies? interfaces/IPacker p1__35464#)) x)",x,e,null);
}
}
});
taoensso.sente.next_idx_BANG_ = taoensso.encore.idx_fn.call(null);


/**
 * Takes a web server adapter[1] and returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req]) for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req]) for Ring GET + chsk URL.
 *  :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Common options:
 *  :user-id-fn        ; (fn [ring-req]) -> unique user-id for server>user push.
 *  :csrf-token-fn     ; (fn [ring-req]) -> CSRF token for Ajax POSTs.
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :ws-kalive-ms      ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to client's :ws-kalive-ms.
 *  :lp-timeout-ms     ; Timeout (repoll) long-polling Ajax conns after given msecs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation.
 * 
 *   [1] e.g. `(taoensso.sente.server-adapters.http-kit/get-sch-adapter)` or
 *         `(taoensso.sente.server-adapters.immutant/get-sch-adapter)`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__9671__auto__ = [];
var len__9664__auto___35775 = arguments.length;
var i__9665__auto___35776 = (0);
while(true){
if((i__9665__auto___35776 < len__9664__auto___35775)){
args__9671__auto__.push((arguments[i__9665__auto___35776]));

var G__35777 = (i__9665__auto___35776 + (1));
i__9665__auto___35776 = G__35777;
continue;
} else {
}
break;
}

var argseq__9672__auto__ = ((((1) < args__9671__auto__.length))?(new cljs.core.IndexedSeq(args__9671__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9672__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__35472){
var vec__35473 = p__35472;
var map__35476 = cljs.core.nth.call(null,vec__35473,(0),null);
var map__35476__$1 = ((((!((map__35476 == null)))?((((map__35476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35476):map__35476);
var recv_buf_or_n = cljs.core.get.call(null,map__35476__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var ws_kalive_ms = cljs.core.get.call(null,map__35476__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(25)));
var lp_timeout_ms = cljs.core.get.call(null,map__35476__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__35476__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__35476__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__35476__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__35476__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__8593__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__8593__auto__)){
return or__8593__auto__;
} else {
var or__8593__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__8593__auto____$1)){
return or__8593__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__35476__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__35476__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e35478){if((e35478 instanceof Error)){
var e = e35478;
return e;
} else {
throw e35478;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ajax)",send_buf_ms_ajax,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ws)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e35479){if((e35479 instanceof Error)){
var e = e35479;
return e;
} else {
throw e35479;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_35778 = (function (){try{if(((function (vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__35469_SHARP_){
if(!((p1__35469_SHARP_ == null))){
if((false) || (p1__35469_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)){
return true;
} else {
if((!p1__35469_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__35469_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__35469_SHARP_);
}
});})(vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e35480){if((e35480 instanceof Error)){
var e = e35480;
return e;
} else {
throw e35480;

}
}})();
if((e_35778 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__35469#] (satisfies? interfaces/IServerChanAdapter p1__35469#)) web-server-ch-adapter)",web_server_ch_adapter,e_35778,null);
}

var max_ms_35779 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_35779)){
throw cljs.core.ex_info.call(null,[cljs.core.str(":lp-timeout-ms must be < "),cljs.core.str(max_ms_35779)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_35779], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var user_id_fn__$1 = ((function (packer__$1,ch_recv,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__8593__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__8593__auto__)){
return or__8593__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var G__35780 = null;
var G__35780__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var vec__35482 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.call(null,vec__35482,(0),null);
var _udt = cljs.core.nth.call(null,vec__35482,(1),null);
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),_QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
var G__35780__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),new__QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
G__35780 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__35780__3.call(this,conn_type,uid,client_id);
case 4:
return G__35780__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35780.cljs$core$IFn$_invoke$arity$3 = G__35780__3;
G__35780.cljs$core$IFn$_invoke$arity$4 = G__35780__4;
return G__35780;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e35485){if((e35485 instanceof Error)){
var e = e35485;
return e;
} else {
throw e35485;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__35486){
var map__35487 = p__35486;
var map__35487__$1 = ((((!((map__35487 == null)))?((((map__35487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35487):map__35487);
var old_m = map__35487__$1;
var ws = cljs.core.get.call(null,map__35487__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__35487__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__35487__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__35489 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__35489) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.call(null,ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.call(null,ajax,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(conn_type)].join('')));

}
})();
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((!(cljs.core.contains_QMARK_.call(null,old_any,uid))) && (cljs.core.contains_QMARK_.call(null,new_any,uid))){
return new cljs.core.Keyword(null,"newly-connected","newly-connected",-2029862681);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e35490){if((e35490 instanceof Error)){
var e = e35490;
return e;
} else {
throw e35490;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__35491){
var map__35492 = p__35491;
var map__35492__$1 = ((((!((map__35492 == null)))?((((map__35492.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35492.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35492):map__35492);
var old_m = map__35492__$1;
var ws = cljs.core.get.call(null,map__35492__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__35492__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__35492__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref.call(null,conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = (any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_);
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.call(null,ws,uid):cljs.core.disj.call(null,ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.call(null,ajax,uid):cljs.core.disj.call(null,ajax,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.call(null,any,uid):cljs.core.disj.call(null,any,uid))], null);
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((cljs.core.contains_QMARK_.call(null,old_any,uid)) && (!(cljs.core.contains_QMARK_.call(null,new_any,uid)))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__35782__delegate = function (user_id,ev,p__35494){
var vec__35495 = p__35494;
var map__35498 = cljs.core.nth.call(null,vec__35495,(0),null);
var map__35498__$1 = ((((!((map__35498 == null)))?((((map__35498.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35498.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35498):map__35498);
var opts = map__35498__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__35498__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_35783 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __35784 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",405,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_35783,vec__35495,map__35498,map__35498__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_35783,ev], null);
});})(uid_35783,vec__35495,map__35498,map__35498__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1168762453);
var __35785__$1 = (cljs.core.truth_(uid_35783)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str("\n"),cljs.core.str("uid")].join('')))})());
var __35786__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_35787 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__35788 = ((function (uid_35783,__35784,__35785__$1,__35786__$2,ev_uuid_35787,vec__35495,map__35498,map__35498__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type){
var temp__4657__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),((function (uid_35783,__35784,__35785__$1,__35786__$2,ev_uuid_35787,vec__35495,map__35498,map__35498__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__35500 = cljs.core.get.call(null,m,uid_35783);
var ___$3 = cljs.core.nth.call(null,vec__35500,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35500,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_35787)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_35783),cljs.core.get.call(null,m,uid_35783));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_35783,__35784,__35785__$1,__35786__$2,ev_uuid_35787,vec__35495,map__35498,map__35498__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4657__auto__)){
var pulled = temp__4657__auto__;
var vec__35503 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__35503,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35503,(1),null);
if(cljs.core.vector_QMARK_.call(null,buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? buffered-evs)",buffered_evs,null,null);
}

if(cljs.core.set_QMARK_.call(null,ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(set? ev-uuids)",ev_uuids,null,null);
}

var packer_metas = cljs.core.mapv.call(null,cljs.core.meta,buffered_evs);
var combined_packer_meta = cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,packer_metas);
var buffered_evs_ppstr = taoensso.sente.pack.call(null,packer__$1,combined_packer_meta,buffered_evs);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",441,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__35503,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_35783,__35784,__35785__$1,__35786__$2,ev_uuid_35787,vec__35495,map__35498,map__35498__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__35503,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_35783,__35784,__35785__$1,__35786__$2,ev_uuid_35787,vec__35495,map__35498,map__35498__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1057139329);

var G__35506 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__35506) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_35783,buffered_evs_ppstr,upd_conn_BANG_);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_35783,buffered_evs_ppstr);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(conn_type)].join('')));

}
} else {
return null;
}
});})(uid_35783,__35784,__35785__$1,__35786__$2,ev_uuid_35787,vec__35495,map__35498,map__35498__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",452,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_35783,__35784,__35785__$1,__35786__$2,ev_uuid_35787,flush_buffer_BANG__35788,vec__35495,map__35498,map__35498__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_35783], null);
});})(uid_35783,__35784,__35785__$1,__35786__$2,ev_uuid_35787,flush_buffer_BANG__35788,vec__35495,map__35498,map__35498__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,431175663);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__35788.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__35788.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__35507_35790 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_35783], null))));
var chunk__35508_35791 = null;
var count__35509_35792 = (0);
var i__35510_35793 = (0);
while(true){
if((i__35510_35793 < count__35509_35792)){
var vec__35511_35794 = cljs.core._nth.call(null,chunk__35508_35791,i__35510_35793);
var _QMARK_sch_35795 = cljs.core.nth.call(null,vec__35511_35794,(0),null);
var _udt_35796 = cljs.core.nth.call(null,vec__35511_35794,(1),null);
var temp__4657__auto___35797 = _QMARK_sch_35795;
if(cljs.core.truth_(temp__4657__auto___35797)){
var sch_35798 = temp__4657__auto___35797;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_35798);
} else {
}

var G__35799 = seq__35507_35790;
var G__35800 = chunk__35508_35791;
var G__35801 = count__35509_35792;
var G__35802 = (i__35510_35793 + (1));
seq__35507_35790 = G__35799;
chunk__35508_35791 = G__35800;
count__35509_35792 = G__35801;
i__35510_35793 = G__35802;
continue;
} else {
var temp__4657__auto___35803 = cljs.core.seq.call(null,seq__35507_35790);
if(temp__4657__auto___35803){
var seq__35507_35804__$1 = temp__4657__auto___35803;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35507_35804__$1)){
var c__9404__auto___35805 = cljs.core.chunk_first.call(null,seq__35507_35804__$1);
var G__35806 = cljs.core.chunk_rest.call(null,seq__35507_35804__$1);
var G__35807 = c__9404__auto___35805;
var G__35808 = cljs.core.count.call(null,c__9404__auto___35805);
var G__35809 = (0);
seq__35507_35790 = G__35806;
chunk__35508_35791 = G__35807;
count__35509_35792 = G__35808;
i__35510_35793 = G__35809;
continue;
} else {
var vec__35514_35810 = cljs.core.first.call(null,seq__35507_35804__$1);
var _QMARK_sch_35811 = cljs.core.nth.call(null,vec__35514_35810,(0),null);
var _udt_35812 = cljs.core.nth.call(null,vec__35514_35810,(1),null);
var temp__4657__auto___35813__$1 = _QMARK_sch_35811;
if(cljs.core.truth_(temp__4657__auto___35813__$1)){
var sch_35814 = temp__4657__auto___35813__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_35814);
} else {
}

var G__35815 = cljs.core.next.call(null,seq__35507_35804__$1);
var G__35816 = null;
var G__35817 = (0);
var G__35818 = (0);
seq__35507_35790 = G__35815;
chunk__35508_35791 = G__35816;
count__35509_35792 = G__35817;
i__35510_35793 = G__35818;
continue;
}
} else {
}
}
break;
}

var seq__35517_35819 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_35783], null))));
var chunk__35518_35820 = null;
var count__35519_35821 = (0);
var i__35520_35822 = (0);
while(true){
if((i__35520_35822 < count__35519_35821)){
var vec__35521_35823 = cljs.core._nth.call(null,chunk__35518_35820,i__35520_35822);
var _QMARK_sch_35824 = cljs.core.nth.call(null,vec__35521_35823,(0),null);
var _udt_35825 = cljs.core.nth.call(null,vec__35521_35823,(1),null);
var temp__4657__auto___35826 = _QMARK_sch_35824;
if(cljs.core.truth_(temp__4657__auto___35826)){
var sch_35827 = temp__4657__auto___35826;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_35827);
} else {
}

var G__35828 = seq__35517_35819;
var G__35829 = chunk__35518_35820;
var G__35830 = count__35519_35821;
var G__35831 = (i__35520_35822 + (1));
seq__35517_35819 = G__35828;
chunk__35518_35820 = G__35829;
count__35519_35821 = G__35830;
i__35520_35822 = G__35831;
continue;
} else {
var temp__4657__auto___35832 = cljs.core.seq.call(null,seq__35517_35819);
if(temp__4657__auto___35832){
var seq__35517_35833__$1 = temp__4657__auto___35832;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35517_35833__$1)){
var c__9404__auto___35834 = cljs.core.chunk_first.call(null,seq__35517_35833__$1);
var G__35835 = cljs.core.chunk_rest.call(null,seq__35517_35833__$1);
var G__35836 = c__9404__auto___35834;
var G__35837 = cljs.core.count.call(null,c__9404__auto___35834);
var G__35838 = (0);
seq__35517_35819 = G__35835;
chunk__35518_35820 = G__35836;
count__35519_35821 = G__35837;
i__35520_35822 = G__35838;
continue;
} else {
var vec__35524_35839 = cljs.core.first.call(null,seq__35517_35833__$1);
var _QMARK_sch_35840 = cljs.core.nth.call(null,vec__35524_35839,(0),null);
var _udt_35841 = cljs.core.nth.call(null,vec__35524_35839,(1),null);
var temp__4657__auto___35842__$1 = _QMARK_sch_35840;
if(cljs.core.truth_(temp__4657__auto___35842__$1)){
var sch_35843 = temp__4657__auto___35842__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_35843);
} else {
}

var G__35844 = cljs.core.next.call(null,seq__35517_35833__$1);
var G__35845 = null;
var G__35846 = (0);
var G__35847 = (0);
seq__35517_35819 = G__35844;
chunk__35518_35820 = G__35845;
count__35519_35821 = G__35846;
i__35520_35822 = G__35847;
continue;
}
} else {
}
}
break;
}
} else {
var seq__35527_35848 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__35528_35849 = null;
var count__35529_35850 = (0);
var i__35530_35851 = (0);
while(true){
if((i__35530_35851 < count__35529_35850)){
var conn_type_35852 = cljs.core._nth.call(null,chunk__35528_35849,i__35530_35851);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_35852,uid_35783], null),((function (seq__35527_35848,chunk__35528_35849,count__35529_35850,i__35530_35851,conn_type_35852,uid_35783,__35784,__35785__$1,__35786__$2,ev_uuid_35787,flush_buffer_BANG__35788,vec__35495,map__35498,map__35498__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_35787], true)], null);
} else {
var vec__35531 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__35531,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35531,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_35787)], null);
}
});})(seq__35527_35848,chunk__35528_35849,count__35529_35850,i__35530_35851,conn_type_35852,uid_35783,__35784,__35785__$1,__35786__$2,ev_uuid_35787,flush_buffer_BANG__35788,vec__35495,map__35498,map__35498__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__35853 = seq__35527_35848;
var G__35854 = chunk__35528_35849;
var G__35855 = count__35529_35850;
var G__35856 = (i__35530_35851 + (1));
seq__35527_35848 = G__35853;
chunk__35528_35849 = G__35854;
count__35529_35850 = G__35855;
i__35530_35851 = G__35856;
continue;
} else {
var temp__4657__auto___35857 = cljs.core.seq.call(null,seq__35527_35848);
if(temp__4657__auto___35857){
var seq__35527_35858__$1 = temp__4657__auto___35857;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35527_35858__$1)){
var c__9404__auto___35859 = cljs.core.chunk_first.call(null,seq__35527_35858__$1);
var G__35860 = cljs.core.chunk_rest.call(null,seq__35527_35858__$1);
var G__35861 = c__9404__auto___35859;
var G__35862 = cljs.core.count.call(null,c__9404__auto___35859);
var G__35863 = (0);
seq__35527_35848 = G__35860;
chunk__35528_35849 = G__35861;
count__35529_35850 = G__35862;
i__35530_35851 = G__35863;
continue;
} else {
var conn_type_35864 = cljs.core.first.call(null,seq__35527_35858__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_35864,uid_35783], null),((function (seq__35527_35848,chunk__35528_35849,count__35529_35850,i__35530_35851,conn_type_35864,seq__35527_35858__$1,temp__4657__auto___35857,uid_35783,__35784,__35785__$1,__35786__$2,ev_uuid_35787,flush_buffer_BANG__35788,vec__35495,map__35498,map__35498__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_35787], true)], null);
} else {
var vec__35534 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__35534,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35534,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_35787)], null);
}
});})(seq__35527_35848,chunk__35528_35849,count__35529_35850,i__35530_35851,conn_type_35864,seq__35527_35858__$1,temp__4657__auto___35857,uid_35783,__35784,__35785__$1,__35786__$2,ev_uuid_35787,flush_buffer_BANG__35788,vec__35495,map__35498,map__35498__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__35865 = cljs.core.next.call(null,seq__35527_35858__$1);
var G__35866 = null;
var G__35867 = (0);
var G__35868 = (0);
seq__35527_35848 = G__35865;
chunk__35528_35849 = G__35866;
count__35529_35850 = G__35867;
i__35530_35851 = G__35868;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__35788.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__35788.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_35869 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var ajax_timeout_35870 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var c__32348__auto___35871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32348__auto___35871,ws_timeout_35869,ajax_timeout_35870,uid_35783,__35784,__35785__$1,__35786__$2,ev_uuid_35787,flush_buffer_BANG__35788,vec__35495,map__35498,map__35498__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__32349__auto__ = (function (){var switch__32236__auto__ = ((function (c__32348__auto___35871,ws_timeout_35869,ajax_timeout_35870,uid_35783,__35784,__35785__$1,__35786__$2,ev_uuid_35787,flush_buffer_BANG__35788,vec__35495,map__35498,map__35498__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35541){
var state_val_35542 = (state_35541[(1)]);
if((state_val_35542 === (1))){
var state_35541__$1 = state_35541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35541__$1,(2),ws_timeout_35869);
} else {
if((state_val_35542 === (2))){
var inst_35538 = (state_35541[(2)]);
var inst_35539 = flush_buffer_BANG__35788.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_35541__$1 = (function (){var statearr_35543 = state_35541;
(statearr_35543[(7)] = inst_35538);

return statearr_35543;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35541__$1,inst_35539);
} else {
return null;
}
}
});})(c__32348__auto___35871,ws_timeout_35869,ajax_timeout_35870,uid_35783,__35784,__35785__$1,__35786__$2,ev_uuid_35787,flush_buffer_BANG__35788,vec__35495,map__35498,map__35498__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__32236__auto__,c__32348__auto___35871,ws_timeout_35869,ajax_timeout_35870,uid_35783,__35784,__35785__$1,__35786__$2,ev_uuid_35787,flush_buffer_BANG__35788,vec__35495,map__35498,map__35498__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__32237__auto__ = null;
var taoensso$sente$state_machine__32237__auto____0 = (function (){
var statearr_35547 = [null,null,null,null,null,null,null,null];
(statearr_35547[(0)] = taoensso$sente$state_machine__32237__auto__);

(statearr_35547[(1)] = (1));

return statearr_35547;
});
var taoensso$sente$state_machine__32237__auto____1 = (function (state_35541){
while(true){
var ret_value__32238__auto__ = (function (){try{while(true){
var result__32239__auto__ = switch__32236__auto__.call(null,state_35541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32239__auto__;
}
break;
}
}catch (e35548){if((e35548 instanceof Object)){
var ex__32240__auto__ = e35548;
var statearr_35549_35872 = state_35541;
(statearr_35549_35872[(5)] = ex__32240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35873 = state_35541;
state_35541 = G__35873;
continue;
} else {
return ret_value__32238__auto__;
}
break;
}
});
taoensso$sente$state_machine__32237__auto__ = function(state_35541){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__32237__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__32237__auto____1.call(this,state_35541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__32237__auto____0;
taoensso$sente$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__32237__auto____1;
return taoensso$sente$state_machine__32237__auto__;
})()
;})(switch__32236__auto__,c__32348__auto___35871,ws_timeout_35869,ajax_timeout_35870,uid_35783,__35784,__35785__$1,__35786__$2,ev_uuid_35787,flush_buffer_BANG__35788,vec__35495,map__35498,map__35498__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__32350__auto__ = (function (){var statearr_35550 = f__32349__auto__.call(null);
(statearr_35550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32348__auto___35871);

return statearr_35550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32350__auto__);
});})(c__32348__auto___35871,ws_timeout_35869,ajax_timeout_35870,uid_35783,__35784,__35785__$1,__35786__$2,ev_uuid_35787,flush_buffer_BANG__35788,vec__35495,map__35498,map__35498__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__32348__auto___35874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32348__auto___35874,ws_timeout_35869,ajax_timeout_35870,uid_35783,__35784,__35785__$1,__35786__$2,ev_uuid_35787,flush_buffer_BANG__35788,vec__35495,map__35498,map__35498__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__32349__auto__ = (function (){var switch__32236__auto__ = ((function (c__32348__auto___35874,ws_timeout_35869,ajax_timeout_35870,uid_35783,__35784,__35785__$1,__35786__$2,ev_uuid_35787,flush_buffer_BANG__35788,vec__35495,map__35498,map__35498__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35555){
var state_val_35556 = (state_35555[(1)]);
if((state_val_35556 === (1))){
var state_35555__$1 = state_35555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35555__$1,(2),ajax_timeout_35870);
} else {
if((state_val_35556 === (2))){
var inst_35552 = (state_35555[(2)]);
var inst_35553 = flush_buffer_BANG__35788.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_35555__$1 = (function (){var statearr_35557 = state_35555;
(statearr_35557[(7)] = inst_35552);

return statearr_35557;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35555__$1,inst_35553);
} else {
return null;
}
}
});})(c__32348__auto___35874,ws_timeout_35869,ajax_timeout_35870,uid_35783,__35784,__35785__$1,__35786__$2,ev_uuid_35787,flush_buffer_BANG__35788,vec__35495,map__35498,map__35498__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__32236__auto__,c__32348__auto___35874,ws_timeout_35869,ajax_timeout_35870,uid_35783,__35784,__35785__$1,__35786__$2,ev_uuid_35787,flush_buffer_BANG__35788,vec__35495,map__35498,map__35498__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__32237__auto__ = null;
var taoensso$sente$state_machine__32237__auto____0 = (function (){
var statearr_35561 = [null,null,null,null,null,null,null,null];
(statearr_35561[(0)] = taoensso$sente$state_machine__32237__auto__);

(statearr_35561[(1)] = (1));

return statearr_35561;
});
var taoensso$sente$state_machine__32237__auto____1 = (function (state_35555){
while(true){
var ret_value__32238__auto__ = (function (){try{while(true){
var result__32239__auto__ = switch__32236__auto__.call(null,state_35555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32239__auto__;
}
break;
}
}catch (e35562){if((e35562 instanceof Object)){
var ex__32240__auto__ = e35562;
var statearr_35563_35875 = state_35555;
(statearr_35563_35875[(5)] = ex__32240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35876 = state_35555;
state_35555 = G__35876;
continue;
} else {
return ret_value__32238__auto__;
}
break;
}
});
taoensso$sente$state_machine__32237__auto__ = function(state_35555){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__32237__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__32237__auto____1.call(this,state_35555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__32237__auto____0;
taoensso$sente$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__32237__auto____1;
return taoensso$sente$state_machine__32237__auto__;
})()
;})(switch__32236__auto__,c__32348__auto___35874,ws_timeout_35869,ajax_timeout_35870,uid_35783,__35784,__35785__$1,__35786__$2,ev_uuid_35787,flush_buffer_BANG__35788,vec__35495,map__35498,map__35498__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__32350__auto__ = (function (){var statearr_35564 = f__32349__auto__.call(null);
(statearr_35564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32348__auto___35874);

return statearr_35564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32350__auto__);
});})(c__32348__auto___35874,ws_timeout_35869,ajax_timeout_35870,uid_35783,__35784,__35785__$1,__35786__$2,ev_uuid_35787,flush_buffer_BANG__35788,vec__35495,map__35498,map__35498__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}
}

return null;
};
var G__35782 = function (user_id,ev,var_args){
var p__35494 = null;
if (arguments.length > 2) {
var G__35877__i = 0, G__35877__a = new Array(arguments.length -  2);
while (G__35877__i < G__35877__a.length) {G__35877__a[G__35877__i] = arguments[G__35877__i + 2]; ++G__35877__i;}
  p__35494 = new cljs.core.IndexedSeq(G__35877__a,0);
} 
return G__35782__delegate.call(this,user_id,ev,p__35494);};
G__35782.cljs$lang$maxFixedArity = 2;
G__35782.cljs$lang$applyTo = (function (arglist__35878){
var user_id = cljs.core.first(arglist__35878);
arglist__35878 = cljs.core.next(arglist__35878);
var ev = cljs.core.first(arglist__35878);
var p__35494 = cljs.core.rest(arglist__35878);
return G__35782__delegate(user_id,ev,p__35494);
});
G__35782.cljs$core$IFn$_invoke$arity$variadic = G__35782__delegate;
return G__35782;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.not.call(null,websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__35565 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__35565,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__35565,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.call(null,false);
return ((function (replied_QMARK__,params,ppstr,client_id,vec__35565,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (resp_clj){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,replied_QMARK__,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",521,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (replied_QMARK__,params,ppstr,client_id,vec__35565,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
});})(replied_QMARK__,params,ppstr,client_id,vec__35565,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-391400510);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj));
} else {
return null;
}
});
;})(replied_QMARK__,params,ppstr,client_id,vec__35565,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__4657__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__32348__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32348__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__35565,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__32349__auto__ = (function (){var switch__32236__auto__ = ((function (c__32348__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__35565,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35573){
var state_val_35574 = (state_35573[(1)]);
if((state_val_35574 === (1))){
var inst_35568 = cljs.core.async.timeout.call(null,ms);
var state_35573__$1 = state_35573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35573__$1,(2),inst_35568);
} else {
if((state_val_35574 === (2))){
var inst_35570 = (state_35573[(2)]);
var inst_35571 = reply_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_35573__$1 = (function (){var statearr_35575 = state_35573;
(statearr_35575[(7)] = inst_35570);

return statearr_35575;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35573__$1,inst_35571);
} else {
return null;
}
}
});})(c__32348__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__35565,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__32236__auto__,c__32348__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__35565,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__32237__auto__ = null;
var taoensso$sente$state_machine__32237__auto____0 = (function (){
var statearr_35579 = [null,null,null,null,null,null,null,null];
(statearr_35579[(0)] = taoensso$sente$state_machine__32237__auto__);

(statearr_35579[(1)] = (1));

return statearr_35579;
});
var taoensso$sente$state_machine__32237__auto____1 = (function (state_35573){
while(true){
var ret_value__32238__auto__ = (function (){try{while(true){
var result__32239__auto__ = switch__32236__auto__.call(null,state_35573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32239__auto__;
}
break;
}
}catch (e35580){if((e35580 instanceof Object)){
var ex__32240__auto__ = e35580;
var statearr_35581_35879 = state_35573;
(statearr_35581_35879[(5)] = ex__32240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35880 = state_35573;
state_35573 = G__35880;
continue;
} else {
return ret_value__32238__auto__;
}
break;
}
});
taoensso$sente$state_machine__32237__auto__ = function(state_35573){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__32237__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__32237__auto____1.call(this,state_35573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__32237__auto____0;
taoensso$sente$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__32237__auto____1;
return taoensso$sente$state_machine__32237__auto__;
})()
;})(switch__32236__auto__,c__32348__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__35565,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__32350__auto__ = (function (){var statearr_35582 = f__32349__auto__.call(null);
(statearr_35582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32348__auto__);

return statearr_35582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32350__auto__);
});})(c__32348__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__35565,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__32348__auto__;
} else {
return null;
}
} else {
return reply_fn.call(null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.call(null,(6));
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var csrf_token = csrf_token_fn.call(null,ring_req);
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var receive_event_msg_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$self = null;
var taoensso$sente$self__1 = (function (event){
return taoensso$sente$self.call(null,event,null);
});
var taoensso$sente$self__2 = (function (event,_QMARK_reply_fn){
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)));
});
taoensso$sente$self = function(event,_QMARK_reply_fn){
switch(arguments.length){
case 1:
return taoensso$sente$self__1.call(this,event);
case 2:
return taoensso$sente$self__2.call(this,event,_QMARK_reply_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$self.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$self__1;
taoensso$sente$self.cljs$core$IFn$_invoke$arity$2 = taoensso$sente$self__2;
return taoensso$sente$self;
})()
;})(sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_handshake_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",566,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1016993283);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",577,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(err_msg),cljs.core.str(": %s")].join(''),ring_req], null);
});})(err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-564812867);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",586,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,2096504299);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

send_handshake_BANG_.call(null,server_ch,websocket_QMARK_);

var temp__4657__auto__ = ws_kalive_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__32348__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32348__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__32349__auto__ = (function (){var switch__32236__auto__ = ((function (c__32348__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35618){
var state_val_35619 = (state_35618[(1)]);
if((state_val_35619 === (7))){
var inst_35614 = (state_35618[(2)]);
var state_35618__$1 = state_35618;
var statearr_35620_35881 = state_35618__$1;
(statearr_35620_35881[(2)] = inst_35614);

(statearr_35620_35881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (1))){
var inst_35583 = udt_open;
var state_35618__$1 = (function (){var statearr_35621 = state_35618;
(statearr_35621[(7)] = inst_35583);

return statearr_35621;
})();
var statearr_35622_35882 = state_35618__$1;
(statearr_35622_35882[(2)] = null);

(statearr_35622_35882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (4))){
var inst_35592 = (state_35618[(8)]);
var inst_35587 = (state_35618[(2)]);
var inst_35588 = cljs.core.deref.call(null,conns_);
var inst_35589 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35590 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_35591 = (new cljs.core.PersistentVector(null,3,(5),inst_35589,inst_35590,null));
var inst_35592__$1 = cljs.core.get_in.call(null,inst_35588,inst_35591);
var state_35618__$1 = (function (){var statearr_35623 = state_35618;
(statearr_35623[(8)] = inst_35592__$1);

(statearr_35623[(9)] = inst_35587);

return statearr_35623;
})();
if(cljs.core.truth_(inst_35592__$1)){
var statearr_35624_35883 = state_35618__$1;
(statearr_35624_35883[(1)] = (5));

} else {
var statearr_35625_35884 = state_35618__$1;
(statearr_35625_35884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (13))){
var inst_35598 = (state_35618[(10)]);
var inst_35607 = (state_35618[(2)]);
var inst_35583 = inst_35598;
var state_35618__$1 = (function (){var statearr_35626 = state_35618;
(statearr_35626[(7)] = inst_35583);

(statearr_35626[(11)] = inst_35607);

return statearr_35626;
})();
var statearr_35627_35885 = state_35618__$1;
(statearr_35627_35885[(2)] = null);

(statearr_35627_35885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (6))){
var state_35618__$1 = state_35618;
var statearr_35628_35886 = state_35618__$1;
(statearr_35628_35886[(2)] = null);

(statearr_35628_35886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (3))){
var inst_35616 = (state_35618[(2)]);
var state_35618__$1 = state_35618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35618__$1,inst_35616);
} else {
if((state_val_35619 === (12))){
var state_35618__$1 = state_35618;
var statearr_35629_35887 = state_35618__$1;
(statearr_35629_35887[(2)] = null);

(statearr_35629_35887[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (2))){
var inst_35585 = cljs.core.async.timeout.call(null,ms);
var state_35618__$1 = state_35618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35618__$1,(4),inst_35585);
} else {
if((state_val_35619 === (11))){
var inst_35603 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_35604 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_35603);
var state_35618__$1 = state_35618;
var statearr_35630_35888 = state_35618__$1;
(statearr_35630_35888[(2)] = inst_35604);

(statearr_35630_35888[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (9))){
var state_35618__$1 = state_35618;
var statearr_35631_35889 = state_35618__$1;
(statearr_35631_35889[(2)] = null);

(statearr_35631_35889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (5))){
var inst_35592 = (state_35618[(8)]);
var inst_35597 = cljs.core.nth.call(null,inst_35592,(0),null);
var inst_35598 = cljs.core.nth.call(null,inst_35592,(1),null);
var inst_35599 = taoensso.sente.interfaces.sch_open_QMARK_.call(null,server_ch);
var state_35618__$1 = (function (){var statearr_35632 = state_35618;
(statearr_35632[(10)] = inst_35598);

(statearr_35632[(12)] = inst_35597);

return statearr_35632;
})();
if(cljs.core.truth_(inst_35599)){
var statearr_35633_35890 = state_35618__$1;
(statearr_35633_35890[(1)] = (8));

} else {
var statearr_35634_35891 = state_35618__$1;
(statearr_35634_35891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (10))){
var inst_35611 = (state_35618[(2)]);
var state_35618__$1 = state_35618;
var statearr_35635_35892 = state_35618__$1;
(statearr_35635_35892[(2)] = inst_35611);

(statearr_35635_35892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (8))){
var inst_35598 = (state_35618[(10)]);
var inst_35583 = (state_35618[(7)]);
var inst_35601 = cljs.core._EQ_.call(null,inst_35598,inst_35583);
var state_35618__$1 = state_35618;
if(inst_35601){
var statearr_35636_35893 = state_35618__$1;
(statearr_35636_35893[(1)] = (11));

} else {
var statearr_35637_35894 = state_35618__$1;
(statearr_35637_35894[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32348__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__32236__auto__,c__32348__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__32237__auto__ = null;
var taoensso$sente$state_machine__32237__auto____0 = (function (){
var statearr_35641 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35641[(0)] = taoensso$sente$state_machine__32237__auto__);

(statearr_35641[(1)] = (1));

return statearr_35641;
});
var taoensso$sente$state_machine__32237__auto____1 = (function (state_35618){
while(true){
var ret_value__32238__auto__ = (function (){try{while(true){
var result__32239__auto__ = switch__32236__auto__.call(null,state_35618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32239__auto__;
}
break;
}
}catch (e35642){if((e35642 instanceof Object)){
var ex__32240__auto__ = e35642;
var statearr_35643_35895 = state_35618;
(statearr_35643_35895[(5)] = ex__32240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35896 = state_35618;
state_35618 = G__35896;
continue;
} else {
return ret_value__32238__auto__;
}
break;
}
});
taoensso$sente$state_machine__32237__auto__ = function(state_35618){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__32237__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__32237__auto____1.call(this,state_35618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__32237__auto____0;
taoensso$sente$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__32237__auto____1;
return taoensso$sente$state_machine__32237__auto__;
})()
;})(switch__32236__auto__,c__32348__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__32350__auto__ = (function (){var statearr_35644 = f__32349__auto__.call(null);
(statearr_35644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32348__auto__);

return statearr_35644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32350__auto__);
});})(c__32348__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__32348__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",615,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-2107607833);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__8593__auto__ = new cljs.core.Keyword(null,"init?","init?",438181499).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__8593__auto__)){
return or__8593__auto__;
} else {
return new cljs.core.Keyword(null,"handshake?","handshake?",-423743093).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return send_handshake_BANG_.call(null,server_ch,websocket_QMARK_);
} else {
var temp__4657__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__32348__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32348__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__32349__auto__ = (function (){var switch__32236__auto__ = ((function (c__32348__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35670){
var state_val_35671 = (state_35670[(1)]);
if((state_val_35671 === (1))){
var inst_35645 = cljs.core.async.timeout.call(null,ms);
var state_35670__$1 = state_35670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35670__$1,(2),inst_35645);
} else {
if((state_val_35671 === (2))){
var inst_35652 = (state_35670[(7)]);
var inst_35647 = (state_35670[(2)]);
var inst_35648 = cljs.core.deref.call(null,conns_);
var inst_35649 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35650 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_35651 = (new cljs.core.PersistentVector(null,3,(5),inst_35649,inst_35650,null));
var inst_35652__$1 = cljs.core.get_in.call(null,inst_35648,inst_35651);
var state_35670__$1 = (function (){var statearr_35672 = state_35670;
(statearr_35672[(8)] = inst_35647);

(statearr_35672[(7)] = inst_35652__$1);

return statearr_35672;
})();
if(cljs.core.truth_(inst_35652__$1)){
var statearr_35673_35897 = state_35670__$1;
(statearr_35673_35897[(1)] = (3));

} else {
var statearr_35674_35898 = state_35670__$1;
(statearr_35674_35898[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (3))){
var inst_35652 = (state_35670[(7)]);
var inst_35657 = cljs.core.nth.call(null,inst_35652,(0),null);
var inst_35658 = cljs.core.nth.call(null,inst_35652,(1),null);
var inst_35659 = cljs.core._EQ_.call(null,inst_35658,udt_open);
var state_35670__$1 = (function (){var statearr_35675 = state_35670;
(statearr_35675[(9)] = inst_35657);

return statearr_35675;
})();
if(inst_35659){
var statearr_35676_35899 = state_35670__$1;
(statearr_35676_35899[(1)] = (6));

} else {
var statearr_35677_35900 = state_35670__$1;
(statearr_35677_35900[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (4))){
var state_35670__$1 = state_35670;
var statearr_35678_35901 = state_35670__$1;
(statearr_35678_35901[(2)] = null);

(statearr_35678_35901[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (5))){
var inst_35668 = (state_35670[(2)]);
var state_35670__$1 = state_35670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35670__$1,inst_35668);
} else {
if((state_val_35671 === (6))){
var inst_35661 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_35662 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_35661);
var state_35670__$1 = state_35670;
var statearr_35679_35902 = state_35670__$1;
(statearr_35679_35902[(2)] = inst_35662);

(statearr_35679_35902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (7))){
var state_35670__$1 = state_35670;
var statearr_35680_35903 = state_35670__$1;
(statearr_35680_35903[(2)] = null);

(statearr_35680_35903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (8))){
var inst_35665 = (state_35670[(2)]);
var state_35670__$1 = state_35670;
var statearr_35681_35904 = state_35670__$1;
(statearr_35681_35904[(2)] = inst_35665);

(statearr_35681_35904[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__32348__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__32236__auto__,c__32348__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__32237__auto__ = null;
var taoensso$sente$state_machine__32237__auto____0 = (function (){
var statearr_35685 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35685[(0)] = taoensso$sente$state_machine__32237__auto__);

(statearr_35685[(1)] = (1));

return statearr_35685;
});
var taoensso$sente$state_machine__32237__auto____1 = (function (state_35670){
while(true){
var ret_value__32238__auto__ = (function (){try{while(true){
var result__32239__auto__ = switch__32236__auto__.call(null,state_35670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32239__auto__;
}
break;
}
}catch (e35686){if((e35686 instanceof Object)){
var ex__32240__auto__ = e35686;
var statearr_35687_35905 = state_35670;
(statearr_35687_35905[(5)] = ex__32240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35906 = state_35670;
state_35670 = G__35906;
continue;
} else {
return ret_value__32238__auto__;
}
break;
}
});
taoensso$sente$state_machine__32237__auto__ = function(state_35670){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__32237__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__32237__auto____1.call(this,state_35670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__32237__auto____0;
taoensso$sente$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__32237__auto____1;
return taoensso$sente$state_machine__32237__auto__;
})()
;})(switch__32236__auto__,c__32348__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__32350__auto__ = (function (){var statearr_35688 = f__32349__auto__.call(null);
(statearr_35688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32348__auto__);

return statearr_35688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32350__auto__);
});})(c__32348__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__32348__auto__;
} else {
return null;
}
}
}
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

var vec__35689 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__35689,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__35689,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__35689,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",645,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__35689,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__35689,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,898117880);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__35689,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",654,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
});})(conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,661573271);
var updated_conn = upd_conn_BANG_.call(null,conn_type,uid,client_id,null);
var udt_close = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__32348__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32348__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__32349__auto__ = (function (){var switch__32236__auto__ = ((function (c__32348__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35743){
var state_val_35744 = (state_35743[(1)]);
if((state_val_35744 === (7))){
var state_35743__$1 = state_35743;
var statearr_35745_35907 = state_35743__$1;
(statearr_35745_35907[(2)] = null);

(statearr_35745_35907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (1))){
var inst_35692 = cljs.core.async.timeout.call(null,(5000));
var state_35743__$1 = state_35743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35743__$1,(2),inst_35692);
} else {
if((state_val_35744 === (4))){
var state_35743__$1 = state_35743;
var statearr_35746_35908 = state_35743__$1;
(statearr_35746_35908[(2)] = null);

(statearr_35746_35908[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (13))){
var state_35743__$1 = state_35743;
var statearr_35747_35909 = state_35743__$1;
(statearr_35747_35909[(2)] = null);

(statearr_35747_35909[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (6))){
var inst_35703 = (state_35743[(7)]);
var inst_35702 = (state_35743[(8)]);
var inst_35720 = (state_35743[(9)]);
var inst_35704 = (state_35743[(10)]);
var inst_35715 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35716 = [conn_type,uid,client_id];
var inst_35717 = (new cljs.core.PersistentVector(null,3,(5),inst_35715,inst_35716,null));
var inst_35719 = (function (){var vec__35695 = inst_35702;
var __QMARK_sch = inst_35703;
var udt_t1 = inst_35704;
return ((function (vec__35695,__QMARK_sch,udt_t1,inst_35703,inst_35702,inst_35720,inst_35704,inst_35715,inst_35716,inst_35717,state_val_35744,c__32348__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__35718){
var vec__35748 = p__35718;
var _sch = cljs.core.nth.call(null,vec__35748,(0),null);
var udt_t1__$1 = cljs.core.nth.call(null,vec__35748,(1),null);
if(cljs.core._EQ_.call(null,udt_t1__$1,udt_close)){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),true);
} else {
return taoensso.encore.swapped.call(null,udt_t1__$1,false);
}
});
;})(vec__35695,__QMARK_sch,udt_t1,inst_35703,inst_35702,inst_35720,inst_35704,inst_35715,inst_35716,inst_35717,state_val_35744,c__32348__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_35720__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_35717,inst_35719);
var state_35743__$1 = (function (){var statearr_35751 = state_35743;
(statearr_35751[(9)] = inst_35720__$1);

return statearr_35751;
})();
if(cljs.core.truth_(inst_35720__$1)){
var statearr_35752_35910 = state_35743__$1;
(statearr_35752_35910[(1)] = (9));

} else {
var statearr_35753_35911 = state_35743__$1;
(statearr_35753_35911[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (3))){
var inst_35703 = (state_35743[(7)]);
var inst_35702 = (state_35743[(8)]);
var inst_35704 = (state_35743[(10)]);
var inst_35707 = (function (){var vec__35695 = inst_35702;
var __QMARK_sch = inst_35703;
var udt_t1 = inst_35704;
return ((function (vec__35695,__QMARK_sch,udt_t1,inst_35703,inst_35702,inst_35704,state_val_35744,c__32348__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.call(null,udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
;})(vec__35695,__QMARK_sch,udt_t1,inst_35703,inst_35702,inst_35704,state_val_35744,c__32348__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_35708 = (new cljs.core.Delay(inst_35707,null));
var inst_35709 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",668,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_35708,null,461951017);
var state_35743__$1 = state_35743;
var statearr_35754_35912 = state_35743__$1;
(statearr_35754_35912[(2)] = inst_35709);

(statearr_35754_35912[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (12))){
var inst_35729 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35730 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_35731 = (new cljs.core.PersistentVector(null,2,(5),inst_35729,inst_35730,null));
var inst_35732 = receive_event_msg_BANG_.call(null,inst_35731);
var state_35743__$1 = state_35743;
var statearr_35755_35913 = state_35743__$1;
(statearr_35755_35913[(2)] = inst_35732);

(statearr_35755_35913[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (2))){
var inst_35702 = (state_35743[(8)]);
var inst_35694 = (state_35743[(2)]);
var inst_35698 = cljs.core.deref.call(null,conns_);
var inst_35699 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35700 = [conn_type,uid,client_id];
var inst_35701 = (new cljs.core.PersistentVector(null,3,(5),inst_35699,inst_35700,null));
var inst_35702__$1 = cljs.core.get_in.call(null,inst_35698,inst_35701);
var inst_35703 = cljs.core.nth.call(null,inst_35702__$1,(0),null);
var inst_35704 = cljs.core.nth.call(null,inst_35702__$1,(1),null);
var inst_35705 = cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__);
var state_35743__$1 = (function (){var statearr_35756 = state_35743;
(statearr_35756[(7)] = inst_35703);

(statearr_35756[(8)] = inst_35702__$1);

(statearr_35756[(11)] = inst_35694);

(statearr_35756[(10)] = inst_35704);

return statearr_35756;
})();
if(cljs.core.truth_(inst_35705)){
var statearr_35757_35914 = state_35743__$1;
(statearr_35757_35914[(1)] = (3));

} else {
var statearr_35758_35915 = state_35743__$1;
(statearr_35758_35915[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (11))){
var inst_35738 = (state_35743[(2)]);
var state_35743__$1 = state_35743;
var statearr_35759_35916 = state_35743__$1;
(statearr_35759_35916[(2)] = inst_35738);

(statearr_35759_35916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (9))){
var inst_35703 = (state_35743[(7)]);
var inst_35702 = (state_35743[(8)]);
var inst_35720 = (state_35743[(9)]);
var inst_35704 = (state_35743[(10)]);
var inst_35722 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35723 = [conn_type,uid];
var inst_35724 = (new cljs.core.PersistentVector(null,2,(5),inst_35722,inst_35723,null));
var inst_35725 = (function (){var vec__35695 = inst_35702;
var __QMARK_sch = inst_35703;
var udt_t1 = inst_35704;
var disconnect_QMARK_ = inst_35720;
return ((function (vec__35695,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_35703,inst_35702,inst_35720,inst_35704,inst_35722,inst_35723,inst_35724,state_val_35744,c__32348__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_.call(null,_QMARK_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return _QMARK_m;
}
});
;})(vec__35695,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_35703,inst_35702,inst_35720,inst_35704,inst_35722,inst_35723,inst_35724,state_val_35744,c__32348__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_35726 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_35724,inst_35725);
var inst_35727 = upd_connected_uid_BANG_.call(null,uid);
var state_35743__$1 = (function (){var statearr_35760 = state_35743;
(statearr_35760[(12)] = inst_35726);

return statearr_35760;
})();
if(cljs.core.truth_(inst_35727)){
var statearr_35761_35917 = state_35743__$1;
(statearr_35761_35917[(1)] = (12));

} else {
var statearr_35762_35918 = state_35743__$1;
(statearr_35762_35918[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (5))){
var inst_35704 = (state_35743[(10)]);
var inst_35712 = (state_35743[(2)]);
var inst_35713 = cljs.core._EQ_.call(null,inst_35704,udt_close);
var state_35743__$1 = (function (){var statearr_35763 = state_35743;
(statearr_35763[(13)] = inst_35712);

return statearr_35763;
})();
if(inst_35713){
var statearr_35764_35919 = state_35743__$1;
(statearr_35764_35919[(1)] = (6));

} else {
var statearr_35765_35920 = state_35743__$1;
(statearr_35765_35920[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (14))){
var inst_35735 = (state_35743[(2)]);
var state_35743__$1 = state_35743;
var statearr_35766_35921 = state_35743__$1;
(statearr_35766_35921[(2)] = inst_35735);

(statearr_35766_35921[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (10))){
var state_35743__$1 = state_35743;
var statearr_35767_35922 = state_35743__$1;
(statearr_35767_35922[(2)] = null);

(statearr_35767_35922[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (8))){
var inst_35741 = (state_35743[(2)]);
var state_35743__$1 = state_35743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35743__$1,inst_35741);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32348__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__32236__auto__,c__32348__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__32237__auto__ = null;
var taoensso$sente$state_machine__32237__auto____0 = (function (){
var statearr_35771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35771[(0)] = taoensso$sente$state_machine__32237__auto__);

(statearr_35771[(1)] = (1));

return statearr_35771;
});
var taoensso$sente$state_machine__32237__auto____1 = (function (state_35743){
while(true){
var ret_value__32238__auto__ = (function (){try{while(true){
var result__32239__auto__ = switch__32236__auto__.call(null,state_35743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32239__auto__;
}
break;
}
}catch (e35772){if((e35772 instanceof Object)){
var ex__32240__auto__ = e35772;
var statearr_35773_35923 = state_35743;
(statearr_35773_35923[(5)] = ex__32240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35924 = state_35743;
state_35743 = G__35924;
continue;
} else {
return ret_value__32238__auto__;
}
break;
}
});
taoensso$sente$state_machine__32237__auto__ = function(state_35743){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__32237__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__32237__auto____1.call(this,state_35743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__32237__auto____0;
taoensso$sente$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__32237__auto____1;
return taoensso$sente$state_machine__32237__auto__;
})()
;})(switch__32236__auto__,c__32348__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__32350__auto__ = (function (){var statearr_35774 = f__32349__auto__.call(null);
(statearr_35774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32348__auto__);

return statearr_35774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32350__auto__);
});})(c__32348__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__32348__auto__;
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",690,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,573825628);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35473,map__35476,map__35476__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq35470){
var G__35471 = cljs.core.first.call(null,seq35470);
var seq35470__$1 = cljs.core.next.call(null,seq35470);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35471,seq35470__$1);
});

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",696,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,483636170);

var seq__35941 = cljs.core.seq.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null)));
var chunk__35942 = null;
var count__35943 = (0);
var i__35944 = (0);
while(true){
if((i__35944 < count__35943)){
var vec__35945 = cljs.core._nth.call(null,chunk__35942,i__35944);
var client_id = cljs.core.nth.call(null,vec__35945,(0),null);
var vec__35948 = cljs.core.nth.call(null,vec__35945,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__35948,(0),null);
var _udt = cljs.core.nth.call(null,vec__35948,(1),null);
var temp__4657__auto___35957 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___35957)){
var sch_35958 = temp__4657__auto___35957;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_35958,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__35959 = seq__35941;
var G__35960 = chunk__35942;
var G__35961 = count__35943;
var G__35962 = (i__35944 + (1));
seq__35941 = G__35959;
chunk__35942 = G__35960;
count__35943 = G__35961;
i__35944 = G__35962;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35941);
if(temp__4657__auto__){
var seq__35941__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35941__$1)){
var c__9404__auto__ = cljs.core.chunk_first.call(null,seq__35941__$1);
var G__35963 = cljs.core.chunk_rest.call(null,seq__35941__$1);
var G__35964 = c__9404__auto__;
var G__35965 = cljs.core.count.call(null,c__9404__auto__);
var G__35966 = (0);
seq__35941 = G__35963;
chunk__35942 = G__35964;
count__35943 = G__35965;
i__35944 = G__35966;
continue;
} else {
var vec__35951 = cljs.core.first.call(null,seq__35941__$1);
var client_id = cljs.core.nth.call(null,vec__35951,(0),null);
var vec__35954 = cljs.core.nth.call(null,vec__35951,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__35954,(0),null);
var _udt = cljs.core.nth.call(null,vec__35954,(1),null);
var temp__4657__auto___35967__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___35967__$1)){
var sch_35968 = temp__4657__auto___35967__$1;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_35968,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__35969 = cljs.core.next.call(null,seq__35941__$1);
var G__35970 = null;
var G__35971 = (0);
var G__35972 = (0);
seq__35941 = G__35969;
chunk__35942 = G__35970;
count__35943 = G__35971;
i__35944 = G__35972;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",706,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,1924736274);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__32348__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32348__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (){
var f__32349__auto__ = (function (){var switch__32236__auto__ = ((function (c__32348__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (state_36103){
var state_val_36104 = (state_36103[(1)]);
if((state_val_36104 === (7))){
var inst_36059 = (state_36103[(7)]);
var inst_36058 = (state_36103[(8)]);
var inst_36065 = (state_36103[(9)]);
var inst_36075 = (function (){var n = inst_36058;
var client_ids_satisfied = inst_36059;
var _QMARK_pulled = inst_36065;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_36059,inst_36058,inst_36065,state_val_36104,c__32348__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (s,client_id,p__36074){
var vec__36105 = p__36074;
var _QMARK_sch = cljs.core.nth.call(null,vec__36105,(0),null);
var _udt = cljs.core.nth.call(null,vec__36105,(1),null);
var sent_QMARK_ = (function (){var temp__4657__auto__ = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto__)){
var sch = temp__4657__auto__;
return taoensso.sente.interfaces.sch_send_BANG_.call(null,_QMARK_sch,cljs.core.not.call(null,new cljs.core.Keyword(null,"websocket","websocket",-1714963101)),buffered_evs_pstr);
} else {
return null;
}
})();
if(cljs.core.truth_(sent_QMARK_)){
return cljs.core.conj.call(null,s,client_id);
} else {
return s;
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_36059,inst_36058,inst_36065,state_val_36104,c__32348__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_36076 = cljs.core.PersistentHashSet.EMPTY;
var inst_36077 = cljs.core.reduce_kv.call(null,inst_36075,inst_36076,inst_36065);
var state_36103__$1 = state_36103;
var statearr_36108_36141 = state_36103__$1;
(statearr_36108_36141[(2)] = inst_36077);

(statearr_36108_36141[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (1))){
var inst_36057 = cljs.core.PersistentHashSet.EMPTY;
var inst_36058 = (0);
var inst_36059 = inst_36057;
var state_36103__$1 = (function (){var statearr_36109 = state_36103;
(statearr_36109[(7)] = inst_36059);

(statearr_36109[(8)] = inst_36058);

return statearr_36109;
})();
var statearr_36110_36142 = state_36103__$1;
(statearr_36110_36142[(2)] = null);

(statearr_36110_36142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (4))){
var state_36103__$1 = state_36103;
var statearr_36111_36143 = state_36103__$1;
(statearr_36111_36143[(2)] = true);

(statearr_36111_36143[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (15))){
var inst_36096 = (state_36103[(2)]);
var state_36103__$1 = state_36103;
var statearr_36112_36144 = state_36103__$1;
(statearr_36112_36144[(2)] = inst_36096);

(statearr_36112_36144[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (13))){
var inst_36082 = (state_36103[(10)]);
var inst_36087 = cljs.core.rand_int.call(null,inst_36082);
var inst_36088 = (inst_36082 + inst_36087);
var inst_36089 = cljs.core.async.timeout.call(null,inst_36088);
var state_36103__$1 = state_36103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36103__$1,(16),inst_36089);
} else {
if((state_val_36104 === (6))){
var inst_36065 = (state_36103[(9)]);
var inst_36072 = (state_36103[(2)]);
var state_36103__$1 = (function (){var statearr_36113 = state_36103;
(statearr_36113[(11)] = inst_36072);

return statearr_36113;
})();
if(cljs.core.truth_(inst_36065)){
var statearr_36114_36145 = state_36103__$1;
(statearr_36114_36145[(1)] = (7));

} else {
var statearr_36115_36146 = state_36103__$1;
(statearr_36115_36146[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (3))){
var inst_36101 = (state_36103[(2)]);
var state_36103__$1 = state_36103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36103__$1,inst_36101);
} else {
if((state_val_36104 === (12))){
var inst_36099 = (state_36103[(2)]);
var state_36103__$1 = state_36103;
var statearr_36116_36147 = state_36103__$1;
(statearr_36116_36147[(2)] = inst_36099);

(statearr_36116_36147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (2))){
var inst_36059 = (state_36103[(7)]);
var inst_36058 = (state_36103[(8)]);
var inst_36065 = (state_36103[(9)]);
var inst_36061 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36062 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_36063 = (new cljs.core.PersistentVector(null,2,(5),inst_36061,inst_36062,null));
var inst_36064 = (function (){var n = inst_36058;
var client_ids_satisfied = inst_36059;
return ((function (n,client_ids_satisfied,inst_36059,inst_36058,inst_36065,inst_36061,inst_36062,inst_36063,state_val_36104,c__32348__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_36059,inst_36058,inst_36065,inst_36061,inst_36062,inst_36063,state_val_36104,c__32348__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m__$1,k){
var vec__36117 = cljs.core.get.call(null,m__$1,k);
var _QMARK_sch = cljs.core.nth.call(null,vec__36117,(0),null);
var udt = cljs.core.nth.call(null,vec__36117,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_36059,inst_36058,inst_36065,inst_36061,inst_36062,inst_36063,state_val_36104,c__32348__auto__,ms_backoffs,client_ids_unsatisfied))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_36059,inst_36058,inst_36065,inst_36061,inst_36062,inst_36063,state_val_36104,c__32348__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_36065__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_36063,inst_36064);
var inst_36066 = (function (){var n = inst_36058;
var client_ids_satisfied = inst_36059;
var _QMARK_pulled = inst_36065__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_36059,inst_36058,inst_36065,inst_36061,inst_36062,inst_36063,inst_36064,inst_36065__$1,state_val_36104,c__32348__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (x){
var or__8593__auto__ = (x == null);
if(or__8593__auto__){
return or__8593__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,x);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_36059,inst_36058,inst_36065,inst_36061,inst_36062,inst_36063,inst_36064,inst_36065__$1,state_val_36104,c__32348__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_36067 = inst_36066.call(null,inst_36065__$1);
var state_36103__$1 = (function (){var statearr_36120 = state_36103;
(statearr_36120[(9)] = inst_36065__$1);

return statearr_36120;
})();
if(cljs.core.truth_(inst_36067)){
var statearr_36121_36148 = state_36103__$1;
(statearr_36121_36148[(1)] = (4));

} else {
var statearr_36122_36149 = state_36103__$1;
(statearr_36122_36149[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (11))){
var state_36103__$1 = state_36103;
var statearr_36123_36150 = state_36103__$1;
(statearr_36123_36150[(2)] = null);

(statearr_36123_36150[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (9))){
var inst_36059 = (state_36103[(7)]);
var inst_36058 = (state_36103[(8)]);
var inst_36082 = (state_36103[(10)]);
var inst_36080 = (state_36103[(2)]);
var inst_36081 = cljs.core.into.call(null,inst_36059,inst_36080);
var inst_36082__$1 = cljs.core.get.call(null,ms_backoffs,inst_36058);
var state_36103__$1 = (function (){var statearr_36124 = state_36103;
(statearr_36124[(10)] = inst_36082__$1);

(statearr_36124[(12)] = inst_36081);

return statearr_36124;
})();
if(cljs.core.truth_(inst_36082__$1)){
var statearr_36125_36151 = state_36103__$1;
(statearr_36125_36151[(1)] = (10));

} else {
var statearr_36126_36152 = state_36103__$1;
(statearr_36126_36152[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (5))){
var inst_36065 = (state_36103[(9)]);
var inst_36070 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:or nil? map?] ?pulled)",inst_36065,null,null);
var state_36103__$1 = state_36103;
var statearr_36127_36153 = state_36103__$1;
(statearr_36127_36153[(2)] = inst_36070);

(statearr_36127_36153[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (14))){
var state_36103__$1 = state_36103;
var statearr_36128_36154 = state_36103__$1;
(statearr_36128_36154[(2)] = null);

(statearr_36128_36154[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (16))){
var inst_36058 = (state_36103[(8)]);
var inst_36081 = (state_36103[(12)]);
var inst_36091 = (state_36103[(2)]);
var inst_36092 = (inst_36058 + (1));
var inst_36058__$1 = inst_36092;
var inst_36059 = inst_36081;
var state_36103__$1 = (function (){var statearr_36129 = state_36103;
(statearr_36129[(7)] = inst_36059);

(statearr_36129[(13)] = inst_36091);

(statearr_36129[(8)] = inst_36058__$1);

return statearr_36129;
})();
var statearr_36130_36155 = state_36103__$1;
(statearr_36130_36155[(2)] = null);

(statearr_36130_36155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (10))){
var inst_36081 = (state_36103[(12)]);
var inst_36084 = cljs.core.complement.call(null,inst_36081);
var inst_36085 = taoensso.encore.rsome.call(null,inst_36084,client_ids_unsatisfied);
var state_36103__$1 = state_36103;
if(cljs.core.truth_(inst_36085)){
var statearr_36131_36156 = state_36103__$1;
(statearr_36131_36156[(1)] = (13));

} else {
var statearr_36132_36157 = state_36103__$1;
(statearr_36132_36157[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (8))){
var state_36103__$1 = state_36103;
var statearr_36133_36158 = state_36103__$1;
(statearr_36133_36158[(2)] = null);

(statearr_36133_36158[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32348__auto__,ms_backoffs,client_ids_unsatisfied))
;
return ((function (switch__32236__auto__,c__32348__auto__,ms_backoffs,client_ids_unsatisfied){
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__32237__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__32237__auto____0 = (function (){
var statearr_36137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36137[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__32237__auto__);

(statearr_36137[(1)] = (1));

return statearr_36137;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__32237__auto____1 = (function (state_36103){
while(true){
var ret_value__32238__auto__ = (function (){try{while(true){
var result__32239__auto__ = switch__32236__auto__.call(null,state_36103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32239__auto__;
}
break;
}
}catch (e36138){if((e36138 instanceof Object)){
var ex__32240__auto__ = e36138;
var statearr_36139_36159 = state_36103;
(statearr_36139_36159[(5)] = ex__32240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36160 = state_36103;
state_36103 = G__36160;
continue;
} else {
return ret_value__32238__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__32237__auto__ = function(state_36103){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__32237__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__32237__auto____1.call(this,state_36103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__32237__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__32237__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__32237__auto__;
})()
;})(switch__32236__auto__,c__32348__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var state__32350__auto__ = (function (){var statearr_36140 = f__32349__auto__.call(null);
(statearr_36140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32348__auto__);

return statearr_36140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32350__auto__);
});})(c__32348__auto__,ms_backoffs,client_ids_unsatisfied))
);

return c__32348__auto__;
}
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
var x__9256__auto__ = (((chsk == null))?null:chsk);
var m__9257__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__9256__auto__)]);
if(!((m__9257__auto__ == null))){
return m__9257__auto__.call(null,chsk);
} else {
var m__9257__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__9257__auto____$1 == null))){
return m__9257__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-connect!",chsk);
}
}
}
});

taoensso.sente._chsk_disconnect_BANG_ = (function taoensso$sente$_chsk_disconnect_BANG_(chsk,reason){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(chsk,reason);
} else {
var x__9256__auto__ = (((chsk == null))?null:chsk);
var m__9257__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__9256__auto__)]);
if(!((m__9257__auto__ == null))){
return m__9257__auto__.call(null,chsk,reason);
} else {
var m__9257__auto____$1 = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if(!((m__9257__auto____$1 == null))){
return m__9257__auto____$1.call(null,chsk,reason);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-disconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_reconnect_BANG_ = (function taoensso$sente$_chsk_reconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__9256__auto__ = (((chsk == null))?null:chsk);
var m__9257__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__9256__auto__)]);
if(!((m__9257__auto__ == null))){
return m__9257__auto__.call(null,chsk);
} else {
var m__9257__auto____$1 = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if(!((m__9257__auto____$1 == null))){
return m__9257__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-reconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
var x__9256__auto__ = (((chsk == null))?null:chsk);
var m__9257__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__9256__auto__)]);
if(!((m__9257__auto__ == null))){
return m__9257__auto__.call(null,chsk,ev,opts);
} else {
var m__9257__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__9257__auto____$1 == null))){
return m__9257__auto____$1.call(null,chsk,ev,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-send!",chsk);
}
}
}
});

taoensso.sente.chsk_connect_BANG_ = (function taoensso$sente$chsk_connect_BANG_(chsk){
return taoensso.sente._chsk_connect_BANG_.call(null,chsk);
});

taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_.call(null,chsk,new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641));
});

/**
 * Useful for reauthenticating after login/logout, etc.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
return taoensso.sente._chsk_reconnect_BANG_.call(null,chsk);
});

/**
 * Deprecated
 */
taoensso.sente.chsk_destroy_BANG_ = taoensso.sente.chsk_disconnect_BANG_;
/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var args36161 = [];
var len__9664__auto___36164 = arguments.length;
var i__9665__auto___36165 = (0);
while(true){
if((i__9665__auto___36165 < len__9664__auto___36164)){
args36161.push((arguments[i__9665__auto___36165]));

var G__36166 = (i__9665__auto___36165 + (1));
i__9665__auto___36165 = G__36166;
continue;
} else {
}
break;
}

var G__36163 = args36161.length;
switch (G__36163) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36161.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",783,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,1127135570);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",788,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,-701632591);

if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
}

return false;
});
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null))) || (taoensso.encore.nat_int_QMARK_.call(null,_QMARK_timeout_ms))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("cb requires a timeout; timeout-ms should be a +ive integer: "),cljs.core.str(_QMARK_timeout_ms)].join('')),cljs.core.str("\n"),cljs.core.str("(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nat-int? ?timeout-ms)))")].join('')));
}

if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb)) || (taoensso.encore.chan_QMARK_.call(null,_QMARK_cb))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("cb should be nil, an ifn, or a channel: "),cljs.core.str(cljs.core.type.call(null,_QMARK_cb))].join('')),cljs.core.str("\n"),cljs.core.str("(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))")].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__4657__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto__)){
var cb_uuid = temp__4657__auto__;
return taoensso.encore.swap_in_BANG_.call(null,cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__4657__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
});})(cb_uuid,temp__4657__auto__))
);
} else {
return null;
}
});
/**
 * Atomically swaps the value of chk's :state_ atom.
 */
taoensso.sente.swap_chsk_state_BANG_ = (function taoensso$sente$swap_chsk_state_BANG_(chsk,f){
var vec__36171 = taoensso.encore.swap_in_BANG_.call(null,new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = f.call(null,old_state);
var new_state__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),false):new_state);
var new_state__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.call(null,new_state__$1,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)):new_state__$1);
return taoensso.encore.swapped.call(null,new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.call(null,vec__36171,(0),null);
var new_state = cljs.core.nth.call(null,vec__36171,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_36178 = (function (){try{if(cljs.core.map_QMARK_.call(null,state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36176){if((e36176 instanceof Error)){
var e = e36176;
return e;
} else {
throw e36176;

}
}})();
if((e_36178 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(map? state)",state,e_36178,null);
}

var e_36179 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),null,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),null], null), null)),x);
}).call(null,reason)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36177){if((e36177 instanceof Error)){
var e = e36177;
return e;
} else {
throw e36177;

}
}})();
if((e_36179 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_36179,null);
}

if(cljs.core.truth_((function (){var or__8593__auto__ = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__8593__auto__)){
return or__8593__auto__;
} else {
return cljs.core.not_EQ_.call(null,reason,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}
})())){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"last-close","last-close",-2054255782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null));
} else {
return state;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb))){
return _QMARK_cb;
} else {
var e_36188 = (function (){try{if(taoensso.encore.chan_QMARK_.call(null,_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36184){if((e36184 instanceof Error)){
var e = e36184;
return e;
} else {
throw e36184;

}
}})();
if((e_36188 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/chan? ?cb)",_QMARK_cb,e_36188,null);
}

taoensso.sente.assert_event.call(null,ev);

var vec__36185 = ev;
var ev_id = cljs.core.nth.call(null,vec__36185,(0),null);
var _ = cljs.core.nth.call(null,vec__36185,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__36185,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.as_qname.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__36185,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",868,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,335006323);

var buffered_evs = ((cljs.core.vector_QMARK_.call(null,clj))?clj:taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? clj)",clj,null,null));
var seq__36199 = cljs.core.seq.call(null,buffered_evs);
var chunk__36200 = null;
var count__36201 = (0);
var i__36202 = (0);
while(true){
if((i__36202 < count__36201)){
var ev = cljs.core._nth.call(null,chunk__36200,i__36202);
taoensso.sente.assert_event.call(null,ev);

var vec__36203_36209 = ev;
var id_36210 = cljs.core.nth.call(null,vec__36203_36209,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_36210),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__36211 = seq__36199;
var G__36212 = chunk__36200;
var G__36213 = count__36201;
var G__36214 = (i__36202 + (1));
seq__36199 = G__36211;
chunk__36200 = G__36212;
count__36201 = G__36213;
i__36202 = G__36214;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36199);
if(temp__4657__auto__){
var seq__36199__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36199__$1)){
var c__9404__auto__ = cljs.core.chunk_first.call(null,seq__36199__$1);
var G__36215 = cljs.core.chunk_rest.call(null,seq__36199__$1);
var G__36216 = c__9404__auto__;
var G__36217 = cljs.core.count.call(null,c__9404__auto__);
var G__36218 = (0);
seq__36199 = G__36215;
chunk__36200 = G__36216;
count__36201 = G__36217;
i__36202 = G__36218;
continue;
} else {
var ev = cljs.core.first.call(null,seq__36199__$1);
taoensso.sente.assert_event.call(null,ev);

var vec__36206_36219 = ev;
var id_36220 = cljs.core.nth.call(null,vec__36206_36219,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_36220),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__36221 = cljs.core.next.call(null,seq__36199__$1);
var G__36222 = null;
var G__36223 = (0);
var G__36224 = (0);
seq__36199 = G__36221;
chunk__36200 = G__36222;
count__36201 = G__36223;
i__36202 = G__36224;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handshake_QMARK_ = (function taoensso$sente$handshake_QMARK_(x){
var and__8581__auto__ = cljs.core.vector_QMARK_.call(null,x);
if(and__8581__auto__){
var vec__36234 = x;
var x1 = cljs.core.nth.call(null,vec__36234,(0),null);
return cljs.core._EQ_.call(null,x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return and__8581__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_36258 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null)),x);
}).call(null,chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36248){if((e36248 instanceof Error)){
var e = e36248;
return e;
} else {
throw e36248;

}
}})();
if((e_36258 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_36258,null);
}

var e_36259 = (function (){try{if(cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36249){if((e36249 instanceof Error)){
var e = e36249;
return e;
} else {
throw e36249;

}
}})();
if((e_36259 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(handshake? clj)",clj,e_36259,null);
}

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",885,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,1832266232);

var vec__36250 = clj;
var _ = cljs.core.nth.call(null,vec__36250,(0),null);
var vec__36253 = cljs.core.nth.call(null,vec__36250,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__36253,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__36253,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__36253,(2),null);
var map__36256 = chsk;
var map__36256__$1 = ((((!((map__36256 == null)))?((((map__36256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36256):map__36256);
var chs = cljs.core.get.call(null,map__36256__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.call(null,map__36256__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_.call(null,ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event.call(null,handshake_ev);

if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",904,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36250,_,vec__36253,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__36256,map__36256__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__36250,_,vec__36253,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__36256,map__36256__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
,null)),null,1709809698);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk,((function (vec__36250,_,vec__36253,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__36256,map__36256__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (p1__36237_SHARP_){
return cljs.core.merge.call(null,p1__36237_SHARP_,new_state);
});})(vec__36250,_,vec__36253,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__36256,map__36256__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
});
/**
 * nnil iff the websocket npm library[1] is available.
 *   Easiest way to install:
 *     1. Add the lein-npm[2] plugin to your `project.clj`,
 *     2. Add: `:npm {:dependencies [[websocket "1.0.23"]]}`
 * 
 *   [1] Ref. https://www.npmjs.com/package/websocket
 *   [2] Ref. https://github.com/RyanMcG/lein-npm
 */
taoensso.sente._QMARK_node_npm_websocket_ = (new cljs.core.Delay((function (){
if(cljs.core.truth_((function (){var and__8581__auto__ = taoensso.sente.node_target_QMARK_;
if(cljs.core.truth_(and__8581__auto__)){
return typeof require !== 'undefined';
} else {
return and__8581__auto__;
}
})())){
try{return require("websocket");
}catch (e36260){var e = e36260;
return null;
}} else {
return null;
}
}),null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.ws_kalive_ms = ws_kalive_ms;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.retry_count_ = retry_count_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.udt_last_comms_ = udt_last_comms_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9215__auto__,k__9216__auto__){
var self__ = this;
var this__9215__auto____$1 = this;
return cljs.core._lookup.call(null,this__9215__auto____$1,k__9216__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9217__auto__,k36267,else__9218__auto__){
var self__ = this;
var this__9217__auto____$1 = this;
var G__36269 = (((k36267 instanceof cljs.core.Keyword))?k36267.fqn:null);
switch (G__36269) {
case "ws-kalive-ms":
return self__.ws_kalive_ms;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "client-id":
return self__.client_id;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "udt-last-comms_":
return self__.udt_last_comms_;

break;
case "params":
return self__.params;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "socket_":
return self__.socket_;

break;
case "url":
return self__.url;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36267,else__9218__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9229__auto__,writer__9230__auto__,opts__9231__auto__){
var self__ = this;
var this__9229__auto____$1 = this;
var pr_pair__9232__auto__ = ((function (this__9229__auto____$1){
return (function (keyval__9233__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9230__auto__,cljs.core.pr_writer,""," ","",opts__9231__auto__,keyval__9233__auto__);
});})(this__9229__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9230__auto__,pr_pair__9232__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__9231__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36266){
var self__ = this;
var G__36266__$1 = this;
return (new cljs.core.RecordIter((0),G__36266__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9213__auto__){
var self__ = this;
var this__9213__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9209__auto__){
var self__ = this;
var this__9209__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9219__auto__){
var self__ = this;
var this__9219__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9210__auto__){
var self__ = this;
var this__9210__auto____$1 = this;
var h__9028__auto__ = self__.__hash;
if(!((h__9028__auto__ == null))){
return h__9028__auto__;
} else {
var h__9028__auto____$1 = cljs.core.hash_imap.call(null,this__9210__auto____$1);
self__.__hash = h__9028__auto____$1;

return h__9028__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__9211__auto__,other__9212__auto__){
var self__ = this;
var this__9211__auto____$1 = this;
if(cljs.core.truth_((function (){var and__8581__auto__ = other__9212__auto__;
if(cljs.core.truth_(and__8581__auto__)){
var and__8581__auto____$1 = (this__9211__auto____$1.constructor === other__9212__auto__.constructor);
if(and__8581__auto____$1){
return cljs.core.equiv_map.call(null,this__9211__auto____$1,other__9212__auto__);
} else {
return and__8581__auto____$1;
}
} else {
return and__8581__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9224__auto__,k__9225__auto__){
var self__ = this;
var this__9224__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__9225__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9224__auto____$1),self__.__meta),k__9225__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9225__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9222__auto__,k__9223__auto__,G__36266){
var self__ = this;
var this__9222__auto____$1 = this;
var pred__36270 = cljs.core.keyword_identical_QMARK_;
var expr__36271 = k__9223__auto__;
if(cljs.core.truth_(pred__36270.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__36271))){
return (new taoensso.sente.ChWebSocket(G__36266,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36270.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__36271))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__36266,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36270.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__36271))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__36266,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36270.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__36271))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__36266,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36270.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__36271))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__36266,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36270.call(null,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__36271))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__36266,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36270.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__36271))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,G__36266,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36270.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__36271))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__36266,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36270.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__36271))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__36266,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36270.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__36271))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__36266,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36270.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__36271))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__36266,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36270.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__36271))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__36266,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36270.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__36271))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__36266,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36270.call(null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__36271))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__36266,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9223__auto__,G__36266),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9227__auto__){
var self__ = this;
var this__9227__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9214__auto__,G__36266){
var self__ = this;
var this__9214__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__36266,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9220__auto__,entry__9221__auto__){
var self__ = this;
var this__9220__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9221__auto__)){
return cljs.core._assoc.call(null,this__9220__auto____$1,cljs.core._nth.call(null,entry__9221__auto__,(0)),cljs.core._nth.call(null,entry__9221__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9220__auto____$1,entry__9221__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (chsk__$1){
return (function (p1__36261_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__36261_SHARP_,reason);
});})(chsk__$1))
);

var temp__4657__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4657__auto__)){
var s = temp__4657__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente._chsk_disconnect_BANG_.call(null,chsk__$1,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__36273 = opts;
var map__36273__$1 = ((((!((map__36273 == null)))?((((map__36273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36273):map__36273);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__36273__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__36273__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__36273__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4657__auto___36364 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___36364)){
var cb_uuid_36365 = temp__4657__auto___36364;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_36365], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36275){if((e36275 instanceof Error)){
var e = e36275;
return e;
} else {
throw e36275;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__4657__auto___36366__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4657__auto___36366__$1)){
var timeout_ms_36367 = temp__4657__auto___36366__$1;
var c__32348__auto___36368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32348__auto___36368,timeout_ms_36367,temp__4657__auto___36366__$1,cb_uuid_36365,temp__4657__auto___36364,_QMARK_cb_uuid,ppstr,map__36273,map__36273__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
var f__32349__auto__ = (function (){var switch__32236__auto__ = ((function (c__32348__auto___36368,timeout_ms_36367,temp__4657__auto___36366__$1,cb_uuid_36365,temp__4657__auto___36364,_QMARK_cb_uuid,ppstr,map__36273,map__36273__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (state_36286){
var state_val_36287 = (state_36286[(1)]);
if((state_val_36287 === (1))){
var inst_36276 = cljs.core.async.timeout.call(null,timeout_ms_36367);
var state_36286__$1 = state_36286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36286__$1,(2),inst_36276);
} else {
if((state_val_36287 === (2))){
var inst_36279 = (state_36286[(7)]);
var inst_36278 = (state_36286[(2)]);
var inst_36279__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_36286__$1 = (function (){var statearr_36288 = state_36286;
(statearr_36288[(8)] = inst_36278);

(statearr_36288[(7)] = inst_36279__$1);

return statearr_36288;
})();
if(cljs.core.truth_(inst_36279__$1)){
var statearr_36289_36369 = state_36286__$1;
(statearr_36289_36369[(1)] = (3));

} else {
var statearr_36290_36370 = state_36286__$1;
(statearr_36290_36370[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (3))){
var inst_36279 = (state_36286[(7)]);
var inst_36281 = inst_36279.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_36286__$1 = state_36286;
var statearr_36291_36371 = state_36286__$1;
(statearr_36291_36371[(2)] = inst_36281);

(statearr_36291_36371[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (4))){
var state_36286__$1 = state_36286;
var statearr_36292_36372 = state_36286__$1;
(statearr_36292_36372[(2)] = null);

(statearr_36292_36372[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (5))){
var inst_36284 = (state_36286[(2)]);
var state_36286__$1 = state_36286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36286__$1,inst_36284);
} else {
return null;
}
}
}
}
}
});})(c__32348__auto___36368,timeout_ms_36367,temp__4657__auto___36366__$1,cb_uuid_36365,temp__4657__auto___36364,_QMARK_cb_uuid,ppstr,map__36273,map__36273__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
return ((function (switch__32236__auto__,c__32348__auto___36368,timeout_ms_36367,temp__4657__auto___36366__$1,cb_uuid_36365,temp__4657__auto___36364,_QMARK_cb_uuid,ppstr,map__36273,map__36273__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function() {
var taoensso$sente$state_machine__32237__auto__ = null;
var taoensso$sente$state_machine__32237__auto____0 = (function (){
var statearr_36296 = [null,null,null,null,null,null,null,null,null];
(statearr_36296[(0)] = taoensso$sente$state_machine__32237__auto__);

(statearr_36296[(1)] = (1));

return statearr_36296;
});
var taoensso$sente$state_machine__32237__auto____1 = (function (state_36286){
while(true){
var ret_value__32238__auto__ = (function (){try{while(true){
var result__32239__auto__ = switch__32236__auto__.call(null,state_36286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32239__auto__;
}
break;
}
}catch (e36297){if((e36297 instanceof Object)){
var ex__32240__auto__ = e36297;
var statearr_36298_36373 = state_36286;
(statearr_36298_36373[(5)] = ex__32240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36374 = state_36286;
state_36286 = G__36374;
continue;
} else {
return ret_value__32238__auto__;
}
break;
}
});
taoensso$sente$state_machine__32237__auto__ = function(state_36286){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__32237__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__32237__auto____1.call(this,state_36286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__32237__auto____0;
taoensso$sente$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__32237__auto____1;
return taoensso$sente$state_machine__32237__auto__;
})()
;})(switch__32236__auto__,c__32348__auto___36368,timeout_ms_36367,temp__4657__auto___36366__$1,cb_uuid_36365,temp__4657__auto___36364,_QMARK_cb_uuid,ppstr,map__36273,map__36273__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
})();
var state__32350__auto__ = (function (){var statearr_36299 = f__32349__auto__.call(null);
(statearr_36299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32348__auto___36368);

return statearr_36299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32350__auto__);
});})(c__32348__auto___36368,timeout_ms_36367,temp__4657__auto___36366__$1,cb_uuid_36365,temp__4657__auto___36364,_QMARK_cb_uuid,ppstr,map__36273,map__36273__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e36300){var e = e36300;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",986,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,map__36273,map__36273__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,map__36273,map__36273__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,442084282);

var temp__4657__auto___36375 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___36375)){
var cb_uuid_36376 = temp__4657__auto___36375;
var cb_fn_STAR__36377 = (function (){var or__8593__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_36376);
if(cljs.core.truth_(or__8593__auto__)){
return or__8593__auto__;
} else {
var e__$1 = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36301){if((e36301 instanceof Error)){
var e__$1 = e36301;
return e__$1;
} else {
throw e36301;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
cb_fn_STAR__36377.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = (function (){var or__8593__auto__ = taoensso.encore.oget.call(null,goog.global,"WebSocket");
if(cljs.core.truth_(or__8593__auto__)){
return or__8593__auto__;
} else {
var or__8593__auto____$1 = taoensso.encore.oget.call(null,goog.global,"MozWebSocket");
if(cljs.core.truth_(or__8593__auto____$1)){
return or__8593__auto____$1;
} else {
return taoensso.encore.oget.call(null,cljs.core.deref.call(null,taoensso.sente._QMARK_node_npm_websocket_),"w3cwebsocket");
}
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var WebSocket = temp__4657__auto__;
var instance_handle = cljs.core.reset_BANG_.call(null,self__.instance_handle_,taoensso.encore.uuid_str.call(null));
var have_handle_QMARK_ = ((function (instance_handle,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.instance_handle_),instance_handle);
});})(instance_handle,WebSocket,temp__4657__auto__,chsk__$1))
;
var connect_fn = ((function (instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function taoensso$sente$connect_fn(){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_count_STAR_ = cljs.core.swap_BANG_.call(null,self__.retry_count_,cljs.core.inc);
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
var udt_next_reconnect = (taoensso.encore.now_udt.call(null) + backoff_ms);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",1011,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,806707849);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__36262_SHARP_){
return cljs.core.assoc.call(null,p1__36262_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null)))));
}catch (e36308){var e = e36308;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",1025,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket error"], null);
});})(e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,684579172);

return null;
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__36309 = _QMARK_socket;
(G__36309["onerror"] = ((function (G__36309,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",1035,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__36309,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.call(null,ws_ev);
}catch (e36310){var _ = e36310;
return ws_ev;
}})()], null);
});})(G__36309,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,525068198);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null);
return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (last_ws_error,G__36309,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__36263_SHARP_){
return cljs.core.assoc.call(null,p1__36263_SHARP_,new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),last_ws_error);
});})(last_ws_error,G__36309,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
});})(G__36309,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__36309["onmessage"] = ((function (G__36309,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__36311 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__36311,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__36311,(1),null);
cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

var or__8593__auto__ = (cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))?(function (){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),chsk__$1,clj);

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

return new cljs.core.Keyword(null,"handshake","handshake",68079331);
})()
:null);
if(cljs.core.truth_(or__8593__auto__)){
return or__8593__auto__;
} else {
var or__8593__auto____$1 = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)))?(function (){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__8593__auto____$1)){
return or__8593__auto____$1;
} else {
var temp__4655__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4655__auto__)){
var cb_uuid = temp__4655__auto__;
var temp__4655__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4655__auto____$1)){
var cb_fn = temp__4655__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",1071,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__8593__auto____$1,or__8593__auto__,ppstr,vec__36311,clj,_QMARK_cb_uuid,G__36309,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__8593__auto____$1,or__8593__auto__,ppstr,vec__36311,clj,_QMARK_cb_uuid,G__36309,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-103822137);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(G__36309,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__36309["onclose"] = ((function (G__36309,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.call(null,ws_ev,"wasClean");
var code = taoensso.encore.oget.call(null,ws_ev,"code");
var reason = taoensso.encore.oget.call(null,ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev,new cljs.core.Keyword(null,"clean?","clean?",-1675631009),clean_QMARK_,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",1093,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (clean_QMARK_,code,reason,last_ws_close,G__36309,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
});})(clean_QMARK_,code,reason,last_ws_close,G__36309,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-900869014);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__36309,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__36264_SHARP_){
return cljs.core.assoc.call(null,p1__36264_SHARP_,new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__36309,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__36309,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__36265_SHARP_){
return cljs.core.assoc.call(null,taoensso.sente.chsk_state__GT_closed.call(null,p1__36265_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424)),new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__36309,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

return retry_fn.call(null);
}
});})(G__36309,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

return G__36309;
})());
}
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
;
var temp__4657__auto___36378__$1 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__4657__auto___36378__$1)){
var ms_36379 = temp__4657__auto___36378__$1;
var c__32348__auto___36380 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32348__auto___36380,ms_36379,temp__4657__auto___36378__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
var f__32349__auto__ = (function (){var switch__32236__auto__ = ((function (c__32348__auto___36380,ms_36379,temp__4657__auto___36378__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function (state_36341){
var state_val_36342 = (state_36341[(1)]);
if((state_val_36342 === (7))){
var inst_36337 = (state_36341[(2)]);
var state_36341__$1 = state_36341;
var statearr_36343_36381 = state_36341__$1;
(statearr_36343_36381[(2)] = inst_36337);

(statearr_36343_36381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (1))){
var state_36341__$1 = state_36341;
var statearr_36344_36382 = state_36341__$1;
(statearr_36344_36382[(2)] = null);

(statearr_36344_36382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (4))){
var inst_36318 = (state_36341[(2)]);
var inst_36319 = have_handle_QMARK_.call(null);
var state_36341__$1 = (function (){var statearr_36345 = state_36341;
(statearr_36345[(7)] = inst_36318);

return statearr_36345;
})();
if(cljs.core.truth_(inst_36319)){
var statearr_36346_36383 = state_36341__$1;
(statearr_36346_36383[(1)] = (5));

} else {
var statearr_36347_36384 = state_36341__$1;
(statearr_36347_36384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (6))){
var state_36341__$1 = state_36341;
var statearr_36348_36385 = state_36341__$1;
(statearr_36348_36385[(2)] = null);

(statearr_36348_36385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (3))){
var inst_36339 = (state_36341[(2)]);
var state_36341__$1 = state_36341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36341__$1,inst_36339);
} else {
if((state_val_36342 === (2))){
var inst_36315 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_36316 = cljs.core.async.timeout.call(null,ms_36379);
var state_36341__$1 = (function (){var statearr_36349 = state_36341;
(statearr_36349[(8)] = inst_36315);

return statearr_36349;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36341__$1,(4),inst_36316);
} else {
if((state_val_36342 === (9))){
var state_36341__$1 = state_36341;
var statearr_36350_36386 = state_36341__$1;
(statearr_36350_36386[(2)] = null);

(statearr_36350_36386[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (5))){
var inst_36315 = (state_36341[(8)]);
var inst_36321 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_36322 = cljs.core._EQ_.call(null,inst_36315,inst_36321);
var state_36341__$1 = state_36341;
if(inst_36322){
var statearr_36351_36387 = state_36341__$1;
(statearr_36351_36387[(1)] = (8));

} else {
var statearr_36352_36388 = state_36341__$1;
(statearr_36352_36388[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (10))){
var inst_36333 = (state_36341[(2)]);
var state_36341__$1 = (function (){var statearr_36353 = state_36341;
(statearr_36353[(9)] = inst_36333);

return statearr_36353;
})();
var statearr_36354_36389 = state_36341__$1;
(statearr_36354_36389[(2)] = null);

(statearr_36354_36389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (8))){
var inst_36324 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36325 = [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)];
var inst_36326 = (new cljs.core.PersistentVector(null,1,(5),inst_36324,inst_36325,null));
var inst_36327 = [new cljs.core.Keyword(null,"flush?","flush?",-108887231)];
var inst_36328 = [true];
var inst_36329 = cljs.core.PersistentHashMap.fromArrays(inst_36327,inst_36328);
var inst_36330 = taoensso.sente._chsk_send_BANG_.call(null,chsk__$1,inst_36326,inst_36329);
var state_36341__$1 = state_36341;
var statearr_36355_36390 = state_36341__$1;
(statearr_36355_36390[(2)] = inst_36330);

(statearr_36355_36390[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__32348__auto___36380,ms_36379,temp__4657__auto___36378__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
;
return ((function (switch__32236__auto__,c__32348__auto___36380,ms_36379,temp__4657__auto___36378__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function() {
var taoensso$sente$state_machine__32237__auto__ = null;
var taoensso$sente$state_machine__32237__auto____0 = (function (){
var statearr_36359 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36359[(0)] = taoensso$sente$state_machine__32237__auto__);

(statearr_36359[(1)] = (1));

return statearr_36359;
});
var taoensso$sente$state_machine__32237__auto____1 = (function (state_36341){
while(true){
var ret_value__32238__auto__ = (function (){try{while(true){
var result__32239__auto__ = switch__32236__auto__.call(null,state_36341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32239__auto__;
}
break;
}
}catch (e36360){if((e36360 instanceof Object)){
var ex__32240__auto__ = e36360;
var statearr_36361_36391 = state_36341;
(statearr_36361_36391[(5)] = ex__32240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36392 = state_36341;
state_36341 = G__36392;
continue;
} else {
return ret_value__32238__auto__;
}
break;
}
});
taoensso$sente$state_machine__32237__auto__ = function(state_36341){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__32237__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__32237__auto____1.call(this,state_36341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__32237__auto____0;
taoensso$sente$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__32237__auto____1;
return taoensso$sente$state_machine__32237__auto__;
})()
;})(switch__32236__auto__,c__32348__auto___36380,ms_36379,temp__4657__auto___36378__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
})();
var state__32350__auto__ = (function (){var statearr_36362 = f__32349__auto__.call(null);
(statearr_36362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32348__auto___36380);

return statearr_36362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32350__auto__);
});})(c__32348__auto___36380,ms_36379,temp__4657__auto___36378__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
);

} else {
}

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

connect_fn.call(null);

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"ws-kalive-ms","ws-kalive-ms",-1212255801,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"retry-count_","retry-count_",1660769620,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"udt-last-comms_","udt-last-comms_",1494731888,null)], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__9249__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__9249__auto__,writer__9250__auto__){
return cljs.core._write.call(null,writer__9250__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__36268){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__36268),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__36268),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__36268),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__36268),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__36268),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968).cljs$core$IFn$_invoke$arity$1(G__36268),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__36268),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__36268),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__36268),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__36268),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__36268),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__36268),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__36268),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639).cljs$core$IFn$_invoke$arity$1(G__36268),null,cljs.core.dissoc.call(null,G__36268,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)),null));
});

taoensso.sente.new_ChWebSocket = (function taoensso$sente$new_ChWebSocket(opts){
return taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),cljs.core.atom.call(null,(0)),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"socket_","socket_",-361048908),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),cljs.core.atom.call(null,null)], null),opts));
});
/**
 * We must set *some* client-side timeout otherwise an unpredictable (and
 *   probably too short) browser default will be used. Must be > server's
 *   :lp-timeout-ms.
 */
taoensso.sente.default_client_side_ajax_timeout_ms = taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(60));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9215__auto__,k__9216__auto__){
var self__ = this;
var this__9215__auto____$1 = this;
return cljs.core._lookup.call(null,this__9215__auto____$1,k__9216__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9217__auto__,k36400,else__9218__auto__){
var self__ = this;
var this__9217__auto____$1 = this;
var G__36402 = (((k36400 instanceof cljs.core.Keyword))?k36400.fqn:null);
switch (G__36402) {
case "curr-xhr_":
return self__.curr_xhr_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "client-id":
return self__.client_id;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "url":
return self__.url;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36400,else__9218__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9229__auto__,writer__9230__auto__,opts__9231__auto__){
var self__ = this;
var this__9229__auto____$1 = this;
var pr_pair__9232__auto__ = ((function (this__9229__auto____$1){
return (function (keyval__9233__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9230__auto__,cljs.core.pr_writer,""," ","",opts__9231__auto__,keyval__9233__auto__);
});})(this__9229__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9230__auto__,pr_pair__9232__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__9231__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36399){
var self__ = this;
var G__36399__$1 = this;
return (new cljs.core.RecordIter((0),G__36399__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9213__auto__){
var self__ = this;
var this__9213__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9209__auto__){
var self__ = this;
var this__9209__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9219__auto__){
var self__ = this;
var this__9219__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9210__auto__){
var self__ = this;
var this__9210__auto____$1 = this;
var h__9028__auto__ = self__.__hash;
if(!((h__9028__auto__ == null))){
return h__9028__auto__;
} else {
var h__9028__auto____$1 = cljs.core.hash_imap.call(null,this__9210__auto____$1);
self__.__hash = h__9028__auto____$1;

return h__9028__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__9211__auto__,other__9212__auto__){
var self__ = this;
var this__9211__auto____$1 = this;
if(cljs.core.truth_((function (){var and__8581__auto__ = other__9212__auto__;
if(cljs.core.truth_(and__8581__auto__)){
var and__8581__auto____$1 = (this__9211__auto____$1.constructor === other__9212__auto__.constructor);
if(and__8581__auto____$1){
return cljs.core.equiv_map.call(null,this__9211__auto____$1,other__9212__auto__);
} else {
return and__8581__auto____$1;
}
} else {
return and__8581__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9224__auto__,k__9225__auto__){
var self__ = this;
var this__9224__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__9225__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9224__auto____$1),self__.__meta),k__9225__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9225__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9222__auto__,k__9223__auto__,G__36399){
var self__ = this;
var this__9222__auto____$1 = this;
var pred__36403 = cljs.core.keyword_identical_QMARK_;
var expr__36404 = k__9223__auto__;
if(cljs.core.truth_(pred__36403.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__36404))){
return (new taoensso.sente.ChAjaxSocket(G__36399,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36403.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__36404))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__36399,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36403.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__36404))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__36399,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36403.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__36404))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__36399,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36403.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__36404))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__36399,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36403.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__36404))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__36399,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36403.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__36404))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__36399,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36403.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__36404))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__36399,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36403.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__36404))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__36399,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36403.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__36404))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__36399,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36403.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__36404))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__36399,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9223__auto__,G__36399),null));
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9227__auto__){
var self__ = this;
var this__9227__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9214__auto__,G__36399){
var self__ = this;
var this__9214__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__36399,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9220__auto__,entry__9221__auto__){
var self__ = this;
var this__9220__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9221__auto__)){
return cljs.core._assoc.call(null,this__9220__auto____$1,cljs.core._nth.call(null,entry__9221__auto__,(0)),cljs.core._nth.call(null,entry__9221__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9220__auto____$1,entry__9221__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (chsk__$1){
return (function (p1__36393_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__36393_SHARP_,reason);
});})(chsk__$1))
);

var temp__4657__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4657__auto__)){
var x = temp__4657__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente._chsk_disconnect_BANG_.call(null,chsk__$1,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__36406 = opts;
var map__36406__$1 = ((((!((map__36406 == null)))?((((map__36406.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36406.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36406):map__36406);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__36406__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__36406__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__36406__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_));
taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__8593__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__8593__auto__)){
return or__8593__auto__;
} else {
var or__8593__auto____$1 = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__8593__auto____$1)){
return or__8593__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null));
})()], null)),((function (csrf_token,map__36406,map__36406__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function taoensso$sente$ajax_cb(p__36408){
var map__36414 = p__36408;
var map__36414__$1 = ((((!((map__36414 == null)))?((((map__36414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36414):map__36414);
var _QMARK_error = cljs.core.get.call(null,map__36414__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__36414__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (map__36414,map__36414__$1,_QMARK_error,_QMARK_content,csrf_token,map__36406,map__36406__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__36394_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__36394_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__36414,map__36414__$1,_QMARK_error,_QMARK_content,csrf_token,map__36406,map__36406__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__36416 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__36416,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__36416,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",1213,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__36416,resp_clj,___$1,map__36414,map__36414__$1,_QMARK_error,_QMARK_content,csrf_token,map__36406,map__36406__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__36416,resp_clj,___$1,map__36414,map__36414__$1,_QMARK_error,_QMARK_content,csrf_token,map__36406,map__36406__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,502854179);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (content,resp_ppstr,vec__36416,resp_clj,___$1,map__36414,map__36414__$1,_QMARK_error,_QMARK_content,csrf_token,map__36406,map__36406__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__36395_SHARP_){
return cljs.core.assoc.call(null,p1__36395_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,resp_ppstr,vec__36416,resp_clj,___$1,map__36414,map__36414__$1,_QMARK_error,_QMARK_content,csrf_token,map__36406,map__36406__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);
}
});})(csrf_token,map__36406,map__36406__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var instance_handle = cljs.core.reset_BANG_.call(null,self__.instance_handle_,taoensso.encore.uuid_str.call(null));
var have_handle_QMARK_ = ((function (instance_handle,chsk__$1){
return (function (){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.instance_handle_),instance_handle);
});})(instance_handle,chsk__$1))
;
var poll_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",1223,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,1500992393);

if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
var udt_next_reconnect = (taoensso.encore.now_udt.call(null) + backoff_ms);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",1231,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,423010658);

goog.global.setTimeout(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return taoensso$sente$poll_fn.call(null,retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__36396_SHARP_){
return cljs.core.assoc.call(null,p1__36396_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__8593__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__8593__auto__)){
return or__8593__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__36430){
var map__36436 = p__36430;
var map__36436__$1 = ((((!((map__36436 == null)))?((((map__36436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36436):map__36436);
var _QMARK_error = cljs.core.get.call(null,map__36436__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__36436__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn.call(null,(0));
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (map__36436,map__36436__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__36397_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__36397_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__36436,map__36436__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

return retry_fn.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__36438 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__36438,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_.call(null,clj);
if(cljs.core.truth_(handshake_QMARK_)){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (content,ppstr,vec__36438,clj,handshake_QMARK_,map__36436,map__36436__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__36398_SHARP_){
return cljs.core.assoc.call(null,p1__36398_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,ppstr,vec__36438,clj,handshake_QMARK_,map__36436,map__36436__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

taoensso$sente$poll_fn.call(null,(0));

if(cljs.core.truth_(handshake_QMARK_)){
return null;
} else {
var or__8593__auto__ = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)))?(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("debug","timeout","debug/timeout",309499949)], null)], null));
} else {
}

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__8593__auto__)){
return or__8593__auto__;
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
));
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
poll_fn.call(null,(0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null)], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__9249__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__9249__auto__,writer__9250__auto__){
return cljs.core._write.call(null,writer__9250__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__36401){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__36401),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__36401),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__36401),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__36401),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__36401),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__36401),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__36401),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__36401),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__36401),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__36401),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__36401),null,cljs.core.dissoc.call(null,G__36401,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)),null));
});

taoensso.sente.new_ChAjaxSocket = (function taoensso$sente$new_ChAjaxSocket(opts){
return taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.call(null,null)], null),opts));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAutoSocket = (function (ws_chsk_opts,ajax_chsk_opts,state_,impl_,__meta,__extmap,__hash){
this.ws_chsk_opts = ws_chsk_opts;
this.ajax_chsk_opts = ajax_chsk_opts;
this.state_ = state_;
this.impl_ = impl_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9215__auto__,k__9216__auto__){
var self__ = this;
var this__9215__auto____$1 = this;
return cljs.core._lookup.call(null,this__9215__auto____$1,k__9216__auto__,null);
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9217__auto__,k36443,else__9218__auto__){
var self__ = this;
var this__9217__auto____$1 = this;
var G__36445 = (((k36443 instanceof cljs.core.Keyword))?k36443.fqn:null);
switch (G__36445) {
case "ws-chsk-opts":
return self__.ws_chsk_opts;

break;
case "ajax-chsk-opts":
return self__.ajax_chsk_opts;

break;
case "state_":
return self__.state_;

break;
case "impl_":
return self__.impl_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36443,else__9218__auto__);

}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9229__auto__,writer__9230__auto__,opts__9231__auto__){
var self__ = this;
var this__9229__auto____$1 = this;
var pr_pair__9232__auto__ = ((function (this__9229__auto____$1){
return (function (keyval__9233__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9230__auto__,cljs.core.pr_writer,""," ","",opts__9231__auto__,keyval__9233__auto__);
});})(this__9229__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9230__auto__,pr_pair__9232__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__9231__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36442){
var self__ = this;
var G__36442__$1 = this;
return (new cljs.core.RecordIter((0),G__36442__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9213__auto__){
var self__ = this;
var this__9213__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9209__auto__){
var self__ = this;
var this__9209__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9219__auto__){
var self__ = this;
var this__9219__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9210__auto__){
var self__ = this;
var this__9210__auto____$1 = this;
var h__9028__auto__ = self__.__hash;
if(!((h__9028__auto__ == null))){
return h__9028__auto__;
} else {
var h__9028__auto____$1 = cljs.core.hash_imap.call(null,this__9210__auto____$1);
self__.__hash = h__9028__auto____$1;

return h__9028__auto____$1;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__9211__auto__,other__9212__auto__){
var self__ = this;
var this__9211__auto____$1 = this;
if(cljs.core.truth_((function (){var and__8581__auto__ = other__9212__auto__;
if(cljs.core.truth_(and__8581__auto__)){
var and__8581__auto____$1 = (this__9211__auto____$1.constructor === other__9212__auto__.constructor);
if(and__8581__auto____$1){
return cljs.core.equiv_map.call(null,this__9211__auto____$1,other__9212__auto__);
} else {
return and__8581__auto____$1;
}
} else {
return and__8581__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9224__auto__,k__9225__auto__){
var self__ = this;
var this__9224__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl_","impl_",1218818179),null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),null,new cljs.core.Keyword(null,"state_","state_",957667102),null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),null], null), null),k__9225__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9224__auto____$1),self__.__meta),k__9225__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9225__auto__)),null));
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9222__auto__,k__9223__auto__,G__36442){
var self__ = this;
var this__9222__auto____$1 = this;
var pred__36446 = cljs.core.keyword_identical_QMARK_;
var expr__36447 = k__9223__auto__;
if(cljs.core.truth_(pred__36446.call(null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__36447))){
return (new taoensso.sente.ChAutoSocket(G__36442,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36446.call(null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__36447))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__36442,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36446.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__36447))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__36442,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36446.call(null,new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__36447))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__36442,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9223__auto__,G__36442),null));
}
}
}
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9227__auto__){
var self__ = this;
var this__9227__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9214__auto__,G__36442){
var self__ = this;
var this__9214__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__36442,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9220__auto__,entry__9221__auto__){
var self__ = this;
var this__9220__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9221__auto__)){
return cljs.core._assoc.call(null,this__9220__auto____$1,cljs.core._nth.call(null,entry__9221__auto__,(0)),cljs.core._nth.call(null,entry__9221__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9220__auto____$1,entry__9221__auto__);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4657__auto__)){
var impl = temp__4657__auto__;
return taoensso.sente._chsk_disconnect_BANG_.call(null,impl,reason);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4657__auto__)){
var impl = temp__4657__auto__;
taoensso.sente._chsk_disconnect_BANG_.call(null,impl,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var temp__4655__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4655__auto__)){
var impl = temp__4655__auto__;
return taoensso.sente._chsk_send_BANG_.call(null,impl,ev,opts);
} else {
var map__36449 = opts;
var map__36449__$1 = ((((!((map__36449 == null)))?((((map__36449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36449):map__36449);
var _QMARK_cb = cljs.core.get.call(null,map__36449__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var ajax_chsk_opts__$1 = cljs.core.assoc.call(null,self__.ajax_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ws_chsk_opts__$1 = cljs.core.assoc.call(null,self__.ws_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ajax_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1){
return (function (){
cljs.core.remove_watch.call(null,self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080));

return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChAjaxSocket.call(null,ajax_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1))
;
var ws_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
var downgraded_QMARK___36452 = cljs.core.atom.call(null,false);
cljs.core.add_watch.call(null,self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080),((function (downgraded_QMARK___36452,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (_,___$1,old_state,new_state){
var temp__4657__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4657__auto__)){
var impl = temp__4657__auto__;
var temp__4657__auto____$1 = new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(impl);
if(cljs.core.truth_(temp__4657__auto____$1)){
var ever_opened_QMARK__ = temp__4657__auto____$1;
if(cljs.core.truth_(cljs.core.deref.call(null,ever_opened_QMARK__))){
return null;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"last-error","last-error",1848699973).cljs$core$IFn$_invoke$arity$1(new_state))){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,downgraded_QMARK___36452,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",1359,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (ever_opened_QMARK__,temp__4657__auto____$1,impl,temp__4657__auto__,downgraded_QMARK___36452,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
});})(ever_opened_QMARK__,temp__4657__auto____$1,impl,temp__4657__auto__,downgraded_QMARK___36452,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
,null)),null,-2043864856);

taoensso.sente._chsk_disconnect_BANG_.call(null,impl,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720));

return cljs.core.reset_BANG_.call(null,self__.impl_,ajax_conn_BANG_.call(null));
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});})(downgraded_QMARK___36452,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
);

return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.impl_,(function (){var or__8593__auto__ = ws_conn_BANG_.call(null);
if(cljs.core.truth_(or__8593__auto__)){
return or__8593__auto__;
} else {
return ajax_conn_BANG_.call(null);
}
})());

return chsk__$1;
});

taoensso.sente.ChAutoSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ws-chsk-opts","ws-chsk-opts",-349638577,null),new cljs.core.Symbol(null,"ajax-chsk-opts","ajax-chsk-opts",-1051844442,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"impl_","impl_",-1435617590,null)], null);
});

taoensso.sente.ChAutoSocket.cljs$lang$type = true;

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__9249__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__9249__auto__,writer__9250__auto__){
return cljs.core._write.call(null,writer__9250__auto__,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__36444){
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__36444),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__36444),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__36444),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__36444),null,cljs.core.dissoc.call(null,G__36444,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts){
return taoensso.sente.map__GT_ChAutoSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.call(null,null)], null),opts));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__36457 = (((protocol instanceof cljs.core.Keyword))?protocol.fqn:null);
switch (G__36457) {
case "http":
return "http:";

break;
case "https":
return "https:";

break;
default:
return protocol;

}
})();
var protocol__$2 = (function (){var e = (function (){try{if(((function (protocol__$1){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null)),x);
});})(protocol__$1))
.call(null,protocol__$1)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36458){if((e36458 instanceof Error)){
var e = e36458;
return e;
} else {
throw e36458;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__36459 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36459) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__36460 = protocol__$2;
switch (G__36460) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(protocol__$2)].join('')));

}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
return [cljs.core.str(protocol__$3),cljs.core.str("//"),cljs.core.str(taoensso.encore.path.call(null,host,path))].join('');
});
/**
 * Returns nil on failure, or a map with keys:
 *     :ch-recv ; core.async channel to receive `event-msg`s (internal or from
 *              ; clients). May `put!` (inject) arbitrary `event`s to this channel.
 *     :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *     :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *     :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *     :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
 *     :protocol       ; Server protocol, e/o #{:http :https}.
 *     :host           ; Server host (defaults to current page's host).
 *     :params         ; Map of any params to incl. in chsk Ring requests (handy
 *                     ; for application-level auth, etc.).
 *     :packer         ; :edn (default), or an IPacker implementation.
 *     :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`.
 *     :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 *     :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to server's :ws-kalive-ms.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__9671__auto__ = [];
var len__9664__auto___36481 = arguments.length;
var i__9665__auto___36482 = (0);
while(true){
if((i__9665__auto___36482 < len__9664__auto___36481)){
args__9671__auto__.push((arguments[i__9665__auto___36482]));

var G__36483 = (i__9665__auto___36482 + (1));
i__9665__auto___36482 = G__36483;
continue;
} else {
}
break;
}

var argseq__9672__auto__ = ((((1) < args__9671__auto__.length))?(new cljs.core.IndexedSeq(args__9671__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9672__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__36466){
var vec__36467 = p__36466;
var map__36470 = cljs.core.nth.call(null,vec__36467,(0),null);
var map__36470__$1 = ((((!((map__36470 == null)))?((((map__36470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36470):map__36470);
var opts = map__36470__$1;
var ajax_opts = cljs.core.get.call(null,map__36470__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__36470__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var client_id = cljs.core.get.call(null,map__36470__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__8593__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8593__auto__)){
return or__8593__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var protocol = cljs.core.get.call(null,map__36470__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var packer = cljs.core.get.call(null,map__36470__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__36470__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__36470__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__36470__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__36470__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__36470__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__36470__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__36467,(1),null);
var e_36484 = (function (){try{if(((function (vec__36467,map__36470,map__36470__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),x);
});})(vec__36467,map__36470,map__36470__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36472){if((e36472 instanceof Error)){
var e = e36472;
return e;
} else {
throw e36472;

}
}})();
if((e_36484 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:in #{:ws :ajax :auto}] type)",type,e_36484,null);
}

var e_36485 = (function (){try{if(taoensso.encore.nblank_str_QMARK_.call(null,client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36473){if((e36473 instanceof Error)){
var e = e36473;
return e;
} else {
throw e36473;

}
}})();
if((e_36485 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/nblank-str? client-id)",client_id,e_36485,null);
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",1424,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36467,map__36470,map__36470__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__36467,map__36470,map__36470__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,14652940);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",1425,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36467,map__36470,map__36470__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__36467,map__36470,map__36470__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-1372704900);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var vec__36474 = (function (){var win_loc = taoensso.encore.get_win_loc.call(null);
var path__$1 = (function (){var or__8593__auto__ = path;
if(cljs.core.truth_(or__8593__auto__)){
return or__8593__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var temp__4655__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443)),f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
} else {
var protocol__$1 = (function (){var or__8593__auto__ = protocol;
if(cljs.core.truth_(or__8593__auto__)){
return or__8593__auto__;
} else {
var or__8593__auto____$1 = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_loc);
if(cljs.core.truth_(or__8593__auto____$1)){
return or__8593__auto____$1;
} else {
return new cljs.core.Keyword(null,"http","http",382524695);
}
}
})();
var host__$1 = (function (){var or__8593__auto__ = host;
if(cljs.core.truth_(or__8593__auto__)){
return or__8593__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443)),taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
}
})();
var ws_url = cljs.core.nth.call(null,vec__36474,(0),null);
var ajax_url = cljs.core.nth.call(null,vec__36474,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),(function (){var buf = cljs.core.async.sliding_buffer.call(null,(512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.call(null,buf,cljs.core.map.call(null,((function (buf,packer__$1,vec__36474,ws_url,ajax_url,vec__36467,map__36470,map__36470__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(buf,packer__$1,vec__36474,ws_url,ajax_url,vec__36467,map__36470,map__36470__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
} else {
return cljs.core.async.chan.call(null,buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var ajax_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_.call(null,(function (){var G__36477 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36477) {
case "ws":
return taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts);

break;
case "ajax":
return taoensso.sente.new_ChAjaxSocket.call(null,ajax_chsk_opts);

break;
case "auto":
return taoensso.sente.new_ChAutoSocket.call(null,auto_chsk_opts);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})());
var temp__4655__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__4655__auto__)){
var chsk = temp__4655__auto__;
var chsk_state_ = new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.call(null,(1),cljs.core.map.call(null,((function (chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,vec__36474,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__36467,map__36470,map__36470__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__36478 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__36478,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__36478,(1),null);
var ev__$1 = vec__36478;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),internal_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),chsk_state_,new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,vec__36474,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__36467,map__36470,map__36470__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
cljs.core.async.pipe.call(null,ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",1513,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto__,packer__$1,vec__36474,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__36467,map__36470,map__36470__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
});})(temp__4655__auto__,packer__$1,vec__36474,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__36467,map__36470,map__36470__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-308962435);
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq36464){
var G__36465 = cljs.core.first.call(null,seq36464);
var seq36464__$1 = cljs.core.next.call(null,seq36464);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36465,seq36464__$1);
});

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__36566 = opts;
var map__36566__$1 = ((((!((map__36566 == null)))?((((map__36566.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36566.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36566):map__36566);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__36566__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__36566__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__36566__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
var ch_ctrl = cljs.core.async.chan.call(null);
var execute1 = ((function (map__36566,map__36566__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl){
return (function (f){
return f.call(null);
});})(map__36566,map__36566__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl))
;
var c__32348__auto___36645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32348__auto___36645,map__36566,map__36566__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
var f__32349__auto__ = (function (){var switch__32236__auto__ = ((function (c__32348__auto___36645,map__36566,map__36566__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (state_36612){
var state_val_36613 = (state_36612[(1)]);
if((state_val_36613 === (7))){
var inst_36608 = (state_36612[(2)]);
var state_36612__$1 = state_36612;
var statearr_36614_36646 = state_36612__$1;
(statearr_36614_36646[(2)] = inst_36608);

(statearr_36614_36646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36613 === (1))){
var state_36612__$1 = state_36612;
var statearr_36615_36647 = state_36612__$1;
(statearr_36615_36647[(2)] = null);

(statearr_36615_36647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36613 === (4))){
var inst_36576 = (state_36612[(7)]);
var inst_36579 = (state_36612[(8)]);
var inst_36578 = (state_36612[(9)]);
var inst_36576__$1 = (state_36612[(2)]);
var inst_36577 = cljs.core.nth.call(null,inst_36576__$1,(0),null);
var inst_36578__$1 = cljs.core.nth.call(null,inst_36576__$1,(1),null);
var inst_36579__$1 = cljs.core._EQ_.call(null,inst_36578__$1,ch_ctrl);
var state_36612__$1 = (function (){var statearr_36616 = state_36612;
(statearr_36616[(10)] = inst_36577);

(statearr_36616[(7)] = inst_36576__$1);

(statearr_36616[(8)] = inst_36579__$1);

(statearr_36616[(9)] = inst_36578__$1);

return statearr_36616;
})();
if(inst_36579__$1){
var statearr_36617_36648 = state_36612__$1;
(statearr_36617_36648[(1)] = (5));

} else {
var statearr_36618_36649 = state_36612__$1;
(statearr_36618_36649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36613 === (15))){
var inst_36577 = (state_36612[(10)]);
var state_36612__$1 = state_36612;
var statearr_36619_36650 = state_36612__$1;
(statearr_36619_36650[(2)] = inst_36577);

(statearr_36619_36650[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36613 === (13))){
var inst_36594 = (state_36612[(2)]);
var state_36612__$1 = state_36612;
var statearr_36620_36651 = state_36612__$1;
(statearr_36620_36651[(2)] = inst_36594);

(statearr_36620_36651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36613 === (6))){
var inst_36577 = (state_36612[(10)]);
var inst_36584 = (inst_36577 == null);
var inst_36585 = cljs.core.not.call(null,inst_36584);
var state_36612__$1 = state_36612;
if(inst_36585){
var statearr_36621_36652 = state_36612__$1;
(statearr_36621_36652[(1)] = (8));

} else {
var statearr_36622_36653 = state_36612__$1;
(statearr_36622_36653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36613 === (3))){
var inst_36610 = (state_36612[(2)]);
var state_36612__$1 = state_36612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36612__$1,inst_36610);
} else {
if((state_val_36613 === (12))){
var state_36612__$1 = state_36612;
var statearr_36623_36654 = state_36612__$1;
(statearr_36623_36654[(2)] = false);

(statearr_36623_36654[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36613 === (2))){
var inst_36572 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36573 = [ch_recv,ch_ctrl];
var inst_36574 = (new cljs.core.PersistentVector(null,2,(5),inst_36572,inst_36573,null));
var state_36612__$1 = state_36612;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36612__$1,(4),inst_36574);
} else {
if((state_val_36613 === (11))){
var state_36612__$1 = state_36612;
var statearr_36624_36655 = state_36612__$1;
(statearr_36624_36655[(2)] = true);

(statearr_36624_36655[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36613 === (9))){
var state_36612__$1 = state_36612;
var statearr_36625_36656 = state_36612__$1;
(statearr_36625_36656[(2)] = false);

(statearr_36625_36656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36613 === (5))){
var state_36612__$1 = state_36612;
var statearr_36626_36657 = state_36612__$1;
(statearr_36626_36657[(2)] = null);

(statearr_36626_36657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36613 === (14))){
var inst_36577 = (state_36612[(10)]);
var inst_36599 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36577);
var state_36612__$1 = state_36612;
var statearr_36627_36658 = state_36612__$1;
(statearr_36627_36658[(2)] = inst_36599);

(statearr_36627_36658[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36613 === (16))){
var inst_36577 = (state_36612[(10)]);
var inst_36576 = (state_36612[(7)]);
var inst_36579 = (state_36612[(8)]);
var inst_36578 = (state_36612[(9)]);
var inst_36602 = (state_36612[(2)]);
var inst_36603 = cljs.core.get.call(null,inst_36602,new cljs.core.Keyword(null,"event","event",301435442));
var inst_36604 = (function (){var vec__36569 = inst_36576;
var v = inst_36577;
var p = inst_36578;
var stop_QMARK_ = inst_36579;
var map__36582 = inst_36602;
var event_msg = inst_36602;
var event = inst_36603;
return ((function (vec__36569,v,p,stop_QMARK_,map__36582,event_msg,event,inst_36577,inst_36576,inst_36579,inst_36578,inst_36602,inst_36603,state_val_36613,c__32348__auto___36645,map__36566,map__36566__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",1540,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36569,v,p,stop_QMARK_,map__36582,event_msg,event,inst_36577,inst_36576,inst_36579,inst_36578,inst_36602,inst_36603,state_val_36613,c__32348__auto___36645,map__36566,map__36566__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});})(vec__36569,v,p,stop_QMARK_,map__36582,event_msg,event,inst_36577,inst_36576,inst_36579,inst_36578,inst_36602,inst_36603,state_val_36613,c__32348__auto___36645,map__36566,map__36566__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,1759123539);
} else {
}

return event_msg_handler.call(null,(cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.server_event_msg_QMARK_.call(null,event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36630){if((e36630 instanceof Error)){
var e = e36630;
return e;
} else {
throw e36630;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,"(server-event-msg? event-msg)",event_msg,e,null);
}
})():(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.client_event_msg_QMARK_.call(null,event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36631){if((e36631 instanceof Error)){
var e = e36631;
return e;
} else {
throw e36631;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,"(client-event-msg? event-msg)",event_msg,e,null);
}
})()));
}catch (e36628){if((e36628 instanceof Error)){
var e1 = e36628;
try{var temp__4655__auto__ = error_handler;
if(cljs.core.truth_(temp__4655__auto__)){
var eh = temp__4655__auto__;
return error_handler.call(null,e1,event_msg);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",1549,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto__,e1,vec__36569,v,p,stop_QMARK_,map__36582,event_msg,event,inst_36577,inst_36576,inst_36579,inst_36578,inst_36602,inst_36603,state_val_36613,c__32348__auto___36645,map__36566,map__36566__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
});})(temp__4655__auto__,e1,vec__36569,v,p,stop_QMARK_,map__36582,event_msg,event,inst_36577,inst_36576,inst_36579,inst_36578,inst_36602,inst_36603,state_val_36613,c__32348__auto___36645,map__36566,map__36566__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-93385084);
}
}catch (e36629){if((e36629 instanceof Error)){
var e2 = e36629;
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init5352438986425258875.clj",1550,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e2,e1,vec__36569,v,p,stop_QMARK_,map__36582,event_msg,event,inst_36577,inst_36576,inst_36579,inst_36578,inst_36602,inst_36603,state_val_36613,c__32348__auto___36645,map__36566,map__36566__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});})(e2,e1,vec__36569,v,p,stop_QMARK_,map__36582,event_msg,event,inst_36577,inst_36576,inst_36579,inst_36578,inst_36602,inst_36603,state_val_36613,c__32348__auto___36645,map__36566,map__36566__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-1406269721);
} else {
throw e36629;

}
}} else {
throw e36628;

}
}});
;})(vec__36569,v,p,stop_QMARK_,map__36582,event_msg,event,inst_36577,inst_36576,inst_36579,inst_36578,inst_36602,inst_36603,state_val_36613,c__32348__auto___36645,map__36566,map__36566__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var inst_36605 = execute1.call(null,inst_36604);
var state_36612__$1 = (function (){var statearr_36632 = state_36612;
(statearr_36632[(11)] = inst_36605);

return statearr_36632;
})();
var statearr_36633_36659 = state_36612__$1;
(statearr_36633_36659[(2)] = null);

(statearr_36633_36659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36613 === (10))){
var inst_36597 = (state_36612[(2)]);
var state_36612__$1 = state_36612;
if(cljs.core.truth_(inst_36597)){
var statearr_36634_36660 = state_36612__$1;
(statearr_36634_36660[(1)] = (14));

} else {
var statearr_36635_36661 = state_36612__$1;
(statearr_36635_36661[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36613 === (8))){
var inst_36577 = (state_36612[(10)]);
var inst_36587 = inst_36577.cljs$lang$protocol_mask$partition0$;
var inst_36588 = (inst_36587 & (64));
var inst_36589 = inst_36577.cljs$core$ISeq$;
var inst_36590 = (inst_36588) || (inst_36589);
var state_36612__$1 = state_36612;
if(cljs.core.truth_(inst_36590)){
var statearr_36636_36662 = state_36612__$1;
(statearr_36636_36662[(1)] = (11));

} else {
var statearr_36637_36663 = state_36612__$1;
(statearr_36637_36663[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32348__auto___36645,map__36566,map__36566__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
;
return ((function (switch__32236__auto__,c__32348__auto___36645,map__36566,map__36566__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__32237__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__32237__auto____0 = (function (){
var statearr_36641 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36641[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__32237__auto__);

(statearr_36641[(1)] = (1));

return statearr_36641;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__32237__auto____1 = (function (state_36612){
while(true){
var ret_value__32238__auto__ = (function (){try{while(true){
var result__32239__auto__ = switch__32236__auto__.call(null,state_36612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32239__auto__;
}
break;
}
}catch (e36642){if((e36642 instanceof Object)){
var ex__32240__auto__ = e36642;
var statearr_36643_36664 = state_36612;
(statearr_36643_36664[(5)] = ex__32240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36665 = state_36612;
state_36612 = G__36665;
continue;
} else {
return ret_value__32238__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__32237__auto__ = function(state_36612){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__32237__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__32237__auto____1.call(this,state_36612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__32237__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__32237__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__32237__auto__;
})()
;})(switch__32236__auto__,c__32348__auto___36645,map__36566,map__36566__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var state__32350__auto__ = (function (){var statearr_36644 = f__32349__auto__.call(null);
(statearr_36644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32348__auto___36645);

return statearr_36644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32350__auto__);
});})(c__32348__auto___36645,map__36566,map__36566__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
);


return ((function (map__36566,map__36566__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__36566,map__36566__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
});
/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 * 
 *   Or for simple automatic future-based threading of every request, enable
 *   the `:simple-auto-threading?` opt (disabled by default).
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__9671__auto__ = [];
var len__9664__auto___36675 = arguments.length;
var i__9665__auto___36676 = (0);
while(true){
if((i__9665__auto___36676 < len__9664__auto___36675)){
args__9671__auto__.push((arguments[i__9665__auto___36676]));

var G__36677 = (i__9665__auto___36676 + (1));
i__9665__auto___36676 = G__36677;
continue;
} else {
}
break;
}

var argseq__9672__auto__ = ((((2) < args__9671__auto__.length))?(new cljs.core.IndexedSeq(args__9671__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9672__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__36669){
var vec__36670 = p__36669;
var map__36673 = cljs.core.nth.call(null,vec__36670,(0),null);
var map__36673__$1 = ((((!((map__36673 == null)))?((((map__36673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36673):map__36673);
var opts = map__36673__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__36673__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__36673__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__36673__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq36666){
var G__36667 = cljs.core.first.call(null,seq36666);
var seq36666__$1 = cljs.core.next.call(null,seq36666);
var G__36668 = cljs.core.first.call(null,seq36666__$1);
var seq36666__$2 = cljs.core.next.call(null,seq36666__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36667,G__36668,seq36666__$2);
});

/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__9671__auto__ = [];
var len__9664__auto___36687 = arguments.length;
var i__9665__auto___36688 = (0);
while(true){
if((i__9665__auto___36688 < len__9664__auto___36687)){
args__9671__auto__.push((arguments[i__9665__auto___36688]));

var G__36689 = (i__9665__auto___36688 + (1));
i__9665__auto___36688 = G__36689;
continue;
} else {
}
break;
}

var argseq__9672__auto__ = ((((2) < args__9671__auto__.length))?(new cljs.core.IndexedSeq(args__9671__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9672__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__36681){
var vec__36682 = p__36681;
var map__36685 = cljs.core.nth.call(null,vec__36682,(0),null);
var map__36685__$1 = ((((!((map__36685 == null)))?((((map__36685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36685):map__36685);
var opts = map__36685__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__36685__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__36685__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq36678){
var G__36679 = cljs.core.first.call(null,seq36678);
var seq36678__$1 = cljs.core.next.call(null,seq36678);
var G__36680 = cljs.core.first.call(null,seq36678__$1);
var seq36678__$2 = cljs.core.next.call(null,seq36678__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36679,G__36680,seq36678__$2);
});

taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
/**
 * Platform-specific alias for `make-channel-socket-server!` or
 *   `make-channel-socket-client!`. Please see the appropriate aliased fn
 * docstring for details.
 */
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
/**
 * Platform-specific alias for `start-server-chsk-router!` or
 *   `start-client-chsk-router!`. Please see the appropriate aliased fn
 *   docstring for details.
 */
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_.call(null,ch_recv,(function (ev_msg){
return event_handler.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg));
}));
});

/**
 * DEPRECATED. Please use `timbre/set-level!` instead
 */
taoensso.sente.set_logging_level_BANG_ = taoensso.timbre.set_level_BANG_;

/**
 * DEPRECATED: Please use `ajax-lite` instead
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;

/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__36690,websocket_QMARK_){
var map__36693 = p__36690;
var map__36693__$1 = ((((!((map__36693 == null)))?((((map__36693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36693):map__36693);
var location = map__36693__$1;
var protocol = cljs.core.get.call(null,map__36693__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.call(null,map__36693__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__36693__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.call(null,protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str(protocol__$1),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__8593__auto__ = path;
if(cljs.core.truth_(or__8593__auto__)){
return or__8593__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map