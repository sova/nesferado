// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('clojure.string');
if(cljs.core.vector_QMARK_(taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(79),(1)], null));
} else {
taoensso.encore.assert_min_encore_version(2.79);
}
/**
 * Useful for identifying client/server mismatch
 */
taoensso.sente.sente_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(11),(0)], null);
taoensso.sente.node_target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs");
if(typeof taoensso.sente.debug_mode_QMARK__ !== 'undefined'){
} else {
taoensso.sente.debug_mode_QMARK__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
}
taoensso.sente.expected = (function taoensso$sente$expected(expected__$1,x){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$expected,expected__$1,cljs.core.cst$kw$actual,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.type(x),cljs.core.cst$kw$value,x], null)], null);
});
/**
 * Returns nil if given argument is a valid [ev-id ?ev-data] form. Otherwise
 *   returns a map of validation errors like `{:wrong-type {:expected _ :actual _}}`.
 */
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_(x))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrong_DASH_type,taoensso.sente.expected(cljs.core.cst$kw$vector,x)], null);
} else {
if(cljs.core.not(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count(x)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrong_DASH_length,taoensso.sente.expected(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__37155 = x;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37155,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37155,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrong_DASH_id_DASH_type,taoensso.sente.expected(cljs.core.cst$kw$keyword,ev_id)], null);
} else {
if(cljs.core.not(cljs.core.namespace(ev_id))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$unnamespaced_DASH_id,taoensso.sente.expected(cljs.core.cst$kw$namespaced_DASH_keyword,ev_id)], null);
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
var temp__4657__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__4657__auto__)){
var errs = temp__4657__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid event",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$errors,errs], null));
} else {
return null;
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event(x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
var temp__4655__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__4655__auto__)){
var errs = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_bad_DASH_event,x], null);
} else {
return x;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
var and__6371__auto__ = cljs.core.map_QMARK_(x);
if(and__6371__auto__){
var and__6371__auto____$1 = taoensso.encore.ks_EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$ch_DASH_recv,null,cljs.core.cst$kw$state,null,cljs.core.cst$kw$event,null,cljs.core.cst$kw$id,null,cljs.core.cst$kw$_QMARK_data,null,cljs.core.cst$kw$send_DASH_fn,null], null), null),x);
if(and__6371__auto____$1){
var map__37168 = x;
var map__37168__$1 = ((((!((map__37168 == null)))?((((map__37168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37168):map__37168);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37168__$1,cljs.core.cst$kw$ch_DASH_recv);
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37168__$1,cljs.core.cst$kw$send_DASH_fn);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37168__$1,cljs.core.cst$kw$state);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37168__$1,cljs.core.cst$kw$event);
var and__6371__auto____$2 = taoensso.encore.chan_QMARK_(ch_recv);
if(and__6371__auto____$2){
var and__6371__auto____$3 = cljs.core.ifn_QMARK_(send_fn);
if(and__6371__auto____$3){
var and__6371__auto____$4 = taoensso.encore.atom_QMARK_(state);
if(and__6371__auto____$4){
return taoensso.sente.event_QMARK_(event);
} else {
return and__6371__auto____$4;
}
} else {
return and__6371__auto____$3;
}
} else {
return and__6371__auto____$2;
}
} else {
return and__6371__auto____$1;
}
} else {
return and__6371__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__6371__auto__ = cljs.core.map_QMARK_(x);
if(and__6371__auto__){
var and__6371__auto____$1 = taoensso.encore.ks_EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$kw$_QMARK_reply_DASH_fn,null,cljs.core.cst$kw$ch_DASH_recv,null,cljs.core.cst$kw$client_DASH_id,null,cljs.core.cst$kw$connected_DASH_uids,null,cljs.core.cst$kw$uid,null,cljs.core.cst$kw$event,null,cljs.core.cst$kw$id,null,cljs.core.cst$kw$ring_DASH_req,null,cljs.core.cst$kw$_QMARK_data,null,cljs.core.cst$kw$send_DASH_fn,null], null), null),x);
if(and__6371__auto____$1){
var map__37180 = x;
var map__37180__$1 = ((((!((map__37180 == null)))?((((map__37180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37180):map__37180);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37180__$1,cljs.core.cst$kw$ch_DASH_recv);
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37180__$1,cljs.core.cst$kw$send_DASH_fn);
var connected_uids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37180__$1,cljs.core.cst$kw$connected_DASH_uids);
var ring_req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37180__$1,cljs.core.cst$kw$ring_DASH_req);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37180__$1,cljs.core.cst$kw$client_DASH_id);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37180__$1,cljs.core.cst$kw$event);
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37180__$1,cljs.core.cst$kw$_QMARK_reply_DASH_fn);
var and__6371__auto____$2 = taoensso.encore.chan_QMARK_(ch_recv);
if(and__6371__auto____$2){
var and__6371__auto____$3 = cljs.core.ifn_QMARK_(send_fn);
if(and__6371__auto____$3){
var and__6371__auto____$4 = taoensso.encore.atom_QMARK_(connected_uids);
if(and__6371__auto____$4){
var and__6371__auto____$5 = cljs.core.map_QMARK_(ring_req);
if(and__6371__auto____$5){
var and__6371__auto____$6 = taoensso.encore.nblank_str_QMARK_(client_id);
if(and__6371__auto____$6){
var and__6371__auto____$7 = taoensso.sente.event_QMARK_(event);
if(cljs.core.truth_(and__6371__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_(_QMARK_reply_fn));
} else {
return and__6371__auto____$7;
}
} else {
return and__6371__auto____$6;
}
} else {
return and__6371__auto____$5;
}
} else {
return and__6371__auto____$4;
}
} else {
return and__6371__auto____$3;
}
} else {
return and__6371__auto____$2;
}
} else {
return and__6371__auto____$1;
}
} else {
return and__6371__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__37182){
var map__37188 = p__37182;
var map__37188__$1 = ((((!((map__37188 == null)))?((((map__37188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37188):map__37188);
var ev_msg = map__37188__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37188__$1,cljs.core.cst$kw$event);
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37188__$1,cljs.core.cst$kw$_QMARK_reply_DASH_fn);
var vec__37190 = taoensso.sente.as_event(event);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37190,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37190,(1),null);
var valid_event = vec__37190;
var ev_msg_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ev_msg,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$event,valid_event,cljs.core.cst$kw$_QMARK_reply_DASH_fn,_QMARK_reply_fn,cljs.core.cst$kw$id,ev_id,cljs.core.cst$kw$_QMARK_data,ev__QMARK_data], null)], 0));
if(cljs.core.not(taoensso.sente.server_event_msg_QMARK_(ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",187,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__37190,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__37188,map__37188__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__37190,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__37188,map__37188__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null,-1938876261);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$chsk_SLASH_closed,null,cljs.core.cst$kw$chsk_SLASH_error,null,cljs.core.cst$kw$chsk_SLASH_timeout,null], null), null).call(null,cb_reply_clj);
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not(taoensso.sente.cb_error_QMARK_(cb_reply_clj));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
if(typeof prefixed_pstr === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",null,"(string? prefixed-pstr)",prefixed_pstr,null,null);
}

var wrapped_QMARK_ = taoensso.encore.str_starts_with_QMARK_(prefixed_pstr,"+");
var pstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(prefixed_pstr,(1));
var clj = (function (){try{return taoensso.sente.interfaces.unpack(packer,pstr);
}catch (e37200){var t = e37200;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",208,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (t,wrapped_QMARK_,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t,wrapped_QMARK_,pstr))
,null)),null,238292089);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_bad_DASH_package,pstr], null);
}})();
var vec__37197 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37197,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37197,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),_QMARK_cb_uuid))?cljs.core.cst$kw$ajax_DASH_cb:_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",214,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (wrapped_QMARK_,pstr,clj,vec__37197,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(wrapped_QMARK_,pstr,clj,vec__37197,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null,1207102550);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
taoensso.sente.with__QMARK_meta = (function taoensso$sente$with__QMARK_meta(x,_QMARK_m){
if(cljs.core.seq(_QMARK_m)){
return cljs.core.with_meta(x,_QMARK_m);
} else {
return x;
}
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var args37201 = [];
var len__7454__auto___37204 = arguments.length;
var i__7455__auto___37205 = (0);
while(true){
if((i__7455__auto___37205 < len__7454__auto___37204)){
args37201.push((arguments[i__7455__auto___37205]));

var G__37206 = (i__7455__auto___37205 + (1));
i__7455__auto___37205 = G__37206;
continue;
} else {
}
break;
}

var G__37203 = args37201.length;
switch (G__37203) {
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37201.length)].join('')));

}
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
var pstr = [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack(packer,taoensso.sente.with__QMARK_meta(clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",224,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj], null),pstr], null);
});})(pstr))
,null)),null,-1470991841);

return pstr;
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_cb_uuid,cljs.core.cst$kw$ajax_DASH_cb))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack(packer,taoensso.sente.with__QMARK_meta(wrapped_clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",234,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (_QMARK_cb_uuid__$1,wrapped_clj,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj,_QMARK_cb_uuid__$1], null),pstr], null);
});})(_QMARK_cb_uuid__$1,wrapped_clj,pstr))
,null)),null,215430144);

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
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1(x);
});

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1(s);
});

taoensso.sente.EdnPacker.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.sente.EdnPacker.cljs$lang$type = true;

taoensso.sente.EdnPacker.cljs$lang$ctorStr = "taoensso.sente/EdnPacker";

taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__6989__auto__,writer__6990__auto__,opt__6991__auto__){
return cljs.core._write(writer__6990__auto__,"taoensso.sente/EdnPacker");
});

taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.cst$kw$edn)){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (p1__37208_SHARP_){
if(!((p1__37208_SHARP_ == null))){
if((false) || (p1__37208_SHARP_.taoensso$sente$interfaces$IPacker$)){
return true;
} else {
if((!p1__37208_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__37208_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__37208_SHARP_);
}
}).call(null,x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e37211){if((e37211 instanceof Error)){
var e = e37211;
return e;
} else {
throw e37211;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",null,"((fn* [p1__37208#] (satisfies? interfaces/IPacker p1__37208#)) x)",x,e,null);
}
}
});
taoensso.sente.next_idx_BANG_ = taoensso.encore.idx_fn();


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
var args__7461__auto__ = [];
var len__7454__auto___37526 = arguments.length;
var i__7455__auto___37527 = (0);
while(true){
if((i__7455__auto___37527 < len__7454__auto___37526)){
args__7461__auto__.push((arguments[i__7455__auto___37527]));

var G__37528 = (i__7455__auto___37527 + (1));
i__7455__auto___37527 = G__37528;
continue;
} else {
}
break;
}

var argseq__7462__auto__ = ((((1) < args__7461__auto__.length))?(new cljs.core.IndexedSeq(args__7461__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7462__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__37216){
var vec__37217 = p__37216;
var map__37220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37217,(0),null);
var map__37220__$1 = ((((!((map__37220 == null)))?((((map__37220.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37220.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37220):map__37220);
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37220__$1,cljs.core.cst$kw$recv_DASH_buf_DASH_or_DASH_n,cljs.core.async.sliding_buffer((1000)));
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37220__$1,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$secs,(25)], 0)));
var lp_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37220__$1,cljs.core.cst$kw$lp_DASH_timeout_DASH_ms,taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$secs,(20)], 0)));
var send_buf_ms_ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37220__$1,cljs.core.cst$kw$send_DASH_buf_DASH_ms_DASH_ajax,(100));
var send_buf_ms_ws = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37220__$1,cljs.core.cst$kw$send_DASH_buf_DASH_ms_DASH_ws,(30));
var user_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37220__$1,cljs.core.cst$kw$user_DASH_id_DASH_fn,((function (vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,cljs.core.cst$kw$uid], null));
});})(vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37220__$1,cljs.core.cst$kw$csrf_DASH_token_DASH_fn,((function (vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__6383__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,cljs.core.cst$kw$csrf_DASH_token], null));
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
var or__6383__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,cljs.core.cst$kw$ring$middleware$anti_DASH_forgery_SLASH_anti_DASH_forgery_DASH_token], null));
if(cljs.core.truth_(or__6383__auto____$1)){
return or__6383__auto____$1;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,"__anti-forgery-token"], null));
}
}
});})(vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37220__$1,cljs.core.cst$kw$handshake_DASH_data_DASH_fn,((function (vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37220__$1,cljs.core.cst$kw$packer,cljs.core.cst$kw$edn);
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e37222){if((e37222 instanceof Error)){
var e = e37222;
return e;
} else {
throw e37222;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ajax)",send_buf_ms_ajax,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ws)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e37223){if((e37223 instanceof Error)){
var e = e37223;
return e;
} else {
throw e37223;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_37529 = (function (){try{if(((function (vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__37213_SHARP_){
if(!((p1__37213_SHARP_ == null))){
if((false) || (p1__37213_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)){
return true;
} else {
if((!p1__37213_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__37213_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__37213_SHARP_);
}
});})(vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e37224){if((e37224 instanceof Error)){
var e = e37224;
return e;
} else {
throw e37224;

}
}})();
if((e_37529 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",null,"((fn* [p1__37213#] (satisfies? interfaces/IServerChanAdapter p1__37213#)) web-server-ch-adapter)",web_server_ch_adapter,e_37529,null);
}

var max_ms_37530 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_37530)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str(":lp-timeout-ms must be < "),cljs.core.str(max_ms_37530)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lp_DASH_timeout_DASH_ms,lp_timeout_ms,cljs.core.cst$kw$default_DASH_client_DASH_side_DASH_ajax_DASH_timeout_DASH_ms,max_ms_37530], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var ch_recv = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(recv_buf_or_n);
var user_id_fn__$1 = ((function (packer__$1,ch_recv,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__6383__auto__ = (function (){var G__37227 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ring_req,cljs.core.cst$kw$client_DASH_id,client_id);
return (user_id_fn.cljs$core$IFn$_invoke$arity$1 ? user_id_fn.cljs$core$IFn$_invoke$arity$1(G__37227) : user_id_fn.call(null,G__37227));
})();
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
return cljs.core.cst$kw$taoensso$sente_SLASH_nil_DASH_uid;
}
});})(packer__$1,ch_recv,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var conns_ = (function (){var G__37228 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ajax,cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37228) : cljs.core.atom.call(null,G__37228));
})();
var send_buffers_ = (function (){var G__37229 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ajax,cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37229) : cljs.core.atom.call(null,G__37229));
})();
var connected_uids_ = (function (){var G__37230 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$ajax,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$any,cljs.core.PersistentHashSet.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37230) : cljs.core.atom.call(null,G__37230));
})();
var upd_conn_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var G__37531 = null;
var G__37531__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var vec__37231 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37231,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37231,(1),null);
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$init_QMARK_,(_QMARK_v == null),cljs.core.cst$kw$udt,new_udt,cljs.core.cst$kw$_QMARK_sch,_QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
var G__37531__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$init_QMARK_,(_QMARK_v == null),cljs.core.cst$kw$udt,new_udt,cljs.core.cst$kw$_QMARK_sch,new__QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
G__37531 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__37531__3.call(this,conn_type,uid,client_id);
case 4:
return G__37531__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37531.cljs$core$IFn$_invoke$arity$3 = G__37531__3;
G__37531.cljs$core$IFn$_invoke$arity$4 = G__37531__4;
return G__37531;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e37234){if((e37234 instanceof Error)){
var e = e37234;
return e;
} else {
throw e37234;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",null,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__37235){
var map__37236 = p__37235;
var map__37236__$1 = ((((!((map__37236 == null)))?((((map__37236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37236):map__37236);
var old_m = map__37236__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37236__$1,cljs.core.cst$kw$ws);
var ajax__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37236__$1,cljs.core.cst$kw$ajax);
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37236__$1,cljs.core.cst$kw$any);
var new_m = (function (){var G__37238 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__37238) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid),cljs.core.cst$kw$ajax,ajax__$1,cljs.core.cst$kw$any,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,ws,cljs.core.cst$kw$ajax,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax__$1,uid),cljs.core.cst$kw$any,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(conn_type)].join('')));

}
})();
return taoensso.encore.swapped(new_m,(function (){var old_any = cljs.core.cst$kw$any.cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = cljs.core.cst$kw$any.cljs$core$IFn$_invoke$arity$1(new_m);
if((!(cljs.core.contains_QMARK_(old_any,uid))) && (cljs.core.contains_QMARK_(new_any,uid))){
return cljs.core.cst$kw$newly_DASH_connected;
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e37239){if((e37239 instanceof Error)){
var e = e37239;
return e;
} else {
throw e37239;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",null,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__37240){
var map__37241 = p__37240;
var map__37241__$1 = ((((!((map__37241 == null)))?((((map__37241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37241):map__37241);
var old_m = map__37241__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37241__$1,cljs.core.cst$kw$ws);
var ajax__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37241__$1,cljs.core.cst$kw$ajax);
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37241__$1,cljs.core.cst$kw$any);
var conns_SINGLEQUOTE_ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(conns_) : cljs.core.deref.call(null,conns_));
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_(cljs.core.cst$kw$ws.cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_(cljs.core.cst$kw$ajax.cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = (any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_);
var new_m = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,((any_ws_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ws,uid)),cljs.core.cst$kw$ajax,((any_ajax_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax__$1,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ajax__$1,uid)),cljs.core.cst$kw$any,((any_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(any,uid))], null);
return taoensso.encore.swapped(new_m,(function (){var old_any = cljs.core.cst$kw$any.cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = cljs.core.cst$kw$any.cljs$core$IFn$_invoke$arity$1(new_m);
if((cljs.core.contains_QMARK_(old_any,uid)) && (!(cljs.core.contains_QMARK_(new_any,uid)))){
return cljs.core.cst$kw$newly_DASH_disconnected;
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__37533__delegate = function (user_id,ev,p__37243){
var vec__37244 = p__37243;
var map__37247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37244,(0),null);
var map__37247__$1 = ((((!((map__37247 == null)))?((((map__37247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37247):map__37247);
var opts = map__37247__$1;
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37247__$1,cljs.core.cst$kw$flush_QMARK_);
var uid_37534 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_id,cljs.core.cst$kw$sente_SLASH_all_DASH_users_DASH_without_DASH_uid))?cljs.core.cst$kw$taoensso$sente_SLASH_nil_DASH_uid:user_id);
var __37535 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",405,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (uid_37534,vec__37244,map__37247,map__37247__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_37534,ev], null);
});})(uid_37534,vec__37244,map__37247,map__37247__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1205630970);
var __37536__$1 = (cljs.core.truth_(uid_37534)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str("\n"),cljs.core.str("uid")].join('')))})());
var __37537__$2 = taoensso.sente.assert_event(ev);
var ev_uuid_37538 = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var flush_buffer_BANG__37539 = ((function (uid_37534,__37535,__37536__$1,__37537__$2,ev_uuid_37538,vec__37244,map__37247,map__37247__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type){
var temp__4657__auto__ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),((function (uid_37534,__37535,__37536__$1,__37537__$2,ev_uuid_37538,vec__37244,map__37247,map__37247__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__37249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_37534);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37249,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37249,(1),null);
if(cljs.core.contains_QMARK_(ev_uuids,ev_uuid_37538)){
return taoensso.encore.swapped(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,uid_37534),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_37534));
} else {
return taoensso.encore.swapped(m,null);
}
});})(uid_37534,__37535,__37536__$1,__37537__$2,ev_uuid_37538,vec__37244,map__37247,map__37247__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4657__auto__)){
var pulled = temp__4657__auto__;
var vec__37252 = pulled;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37252,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37252,(1),null);
if(cljs.core.vector_QMARK_(buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",null,"(vector? buffered-evs)",buffered_evs,null,null);
}

if(cljs.core.set_QMARK_(ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",null,"(set? ev-uuids)",ev_uuids,null,null);
}

var packer_metas = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.meta,buffered_evs);
var combined_packer_meta = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,packer_metas);
var buffered_evs_ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,combined_packer_meta,buffered_evs);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",441,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__37252,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_37534,__37535,__37536__$1,__37537__$2,ev_uuid_37538,vec__37244,map__37247,map__37247__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__37252,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_37534,__37535,__37536__$1,__37537__$2,ev_uuid_37538,vec__37244,map__37247,map__37247__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,526407454);

var G__37255 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__37255) {
case "ws":
return (taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4 ? taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4(conns_,uid_37534,buffered_evs_ppstr,upd_conn_BANG_) : taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_37534,buffered_evs_ppstr,upd_conn_BANG_));

break;
case "ajax":
return (taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,uid_37534,buffered_evs_ppstr) : taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_37534,buffered_evs_ppstr));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(conn_type)].join('')));

}
} else {
return null;
}
});})(uid_37534,__37535,__37536__$1,__37537__$2,ev_uuid_37538,vec__37244,map__37247,map__37247__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_close], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",452,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (uid_37534,__37535,__37536__$1,__37537__$2,ev_uuid_37538,flush_buffer_BANG__37539,vec__37244,map__37247,map__37247__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_37534], null);
});})(uid_37534,__37535,__37536__$1,__37537__$2,ev_uuid_37538,flush_buffer_BANG__37539,vec__37244,map__37247,map__37247__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,2134274017);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__37539(cljs.core.cst$kw$ws);

flush_buffer_BANG__37539(cljs.core.cst$kw$ajax);
} else {
}

var seq__37256_37541 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(conns_) : cljs.core.deref.call(null,conns_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,uid_37534], null))));
var chunk__37257_37542 = null;
var count__37258_37543 = (0);
var i__37259_37544 = (0);
while(true){
if((i__37259_37544 < count__37258_37543)){
var vec__37260_37545 = chunk__37257_37542.cljs$core$IIndexed$_nth$arity$2(null,i__37259_37544);
var _QMARK_sch_37546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37260_37545,(0),null);
var _udt_37547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37260_37545,(1),null);
var temp__4657__auto___37548 = _QMARK_sch_37546;
if(cljs.core.truth_(temp__4657__auto___37548)){
var sch_37549 = temp__4657__auto___37548;
taoensso.sente.interfaces.sch_close_BANG_(sch_37549);
} else {
}

var G__37550 = seq__37256_37541;
var G__37551 = chunk__37257_37542;
var G__37552 = count__37258_37543;
var G__37553 = (i__37259_37544 + (1));
seq__37256_37541 = G__37550;
chunk__37257_37542 = G__37551;
count__37258_37543 = G__37552;
i__37259_37544 = G__37553;
continue;
} else {
var temp__4657__auto___37554 = cljs.core.seq(seq__37256_37541);
if(temp__4657__auto___37554){
var seq__37256_37555__$1 = temp__4657__auto___37554;
if(cljs.core.chunked_seq_QMARK_(seq__37256_37555__$1)){
var c__7194__auto___37556 = cljs.core.chunk_first(seq__37256_37555__$1);
var G__37557 = cljs.core.chunk_rest(seq__37256_37555__$1);
var G__37558 = c__7194__auto___37556;
var G__37559 = cljs.core.count(c__7194__auto___37556);
var G__37560 = (0);
seq__37256_37541 = G__37557;
chunk__37257_37542 = G__37558;
count__37258_37543 = G__37559;
i__37259_37544 = G__37560;
continue;
} else {
var vec__37263_37561 = cljs.core.first(seq__37256_37555__$1);
var _QMARK_sch_37562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37263_37561,(0),null);
var _udt_37563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37263_37561,(1),null);
var temp__4657__auto___37564__$1 = _QMARK_sch_37562;
if(cljs.core.truth_(temp__4657__auto___37564__$1)){
var sch_37565 = temp__4657__auto___37564__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_37565);
} else {
}

var G__37566 = cljs.core.next(seq__37256_37555__$1);
var G__37567 = null;
var G__37568 = (0);
var G__37569 = (0);
seq__37256_37541 = G__37566;
chunk__37257_37542 = G__37567;
count__37258_37543 = G__37568;
i__37259_37544 = G__37569;
continue;
}
} else {
}
}
break;
}

var seq__37266_37570 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(conns_) : cljs.core.deref.call(null,conns_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ajax,uid_37534], null))));
var chunk__37267_37571 = null;
var count__37268_37572 = (0);
var i__37269_37573 = (0);
while(true){
if((i__37269_37573 < count__37268_37572)){
var vec__37270_37574 = chunk__37267_37571.cljs$core$IIndexed$_nth$arity$2(null,i__37269_37573);
var _QMARK_sch_37575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37270_37574,(0),null);
var _udt_37576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37270_37574,(1),null);
var temp__4657__auto___37577 = _QMARK_sch_37575;
if(cljs.core.truth_(temp__4657__auto___37577)){
var sch_37578 = temp__4657__auto___37577;
taoensso.sente.interfaces.sch_close_BANG_(sch_37578);
} else {
}

var G__37579 = seq__37266_37570;
var G__37580 = chunk__37267_37571;
var G__37581 = count__37268_37572;
var G__37582 = (i__37269_37573 + (1));
seq__37266_37570 = G__37579;
chunk__37267_37571 = G__37580;
count__37268_37572 = G__37581;
i__37269_37573 = G__37582;
continue;
} else {
var temp__4657__auto___37583 = cljs.core.seq(seq__37266_37570);
if(temp__4657__auto___37583){
var seq__37266_37584__$1 = temp__4657__auto___37583;
if(cljs.core.chunked_seq_QMARK_(seq__37266_37584__$1)){
var c__7194__auto___37585 = cljs.core.chunk_first(seq__37266_37584__$1);
var G__37586 = cljs.core.chunk_rest(seq__37266_37584__$1);
var G__37587 = c__7194__auto___37585;
var G__37588 = cljs.core.count(c__7194__auto___37585);
var G__37589 = (0);
seq__37266_37570 = G__37586;
chunk__37267_37571 = G__37587;
count__37268_37572 = G__37588;
i__37269_37573 = G__37589;
continue;
} else {
var vec__37273_37590 = cljs.core.first(seq__37266_37584__$1);
var _QMARK_sch_37591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37273_37590,(0),null);
var _udt_37592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37273_37590,(1),null);
var temp__4657__auto___37593__$1 = _QMARK_sch_37591;
if(cljs.core.truth_(temp__4657__auto___37593__$1)){
var sch_37594 = temp__4657__auto___37593__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_37594);
} else {
}

var G__37595 = cljs.core.next(seq__37266_37584__$1);
var G__37596 = null;
var G__37597 = (0);
var G__37598 = (0);
seq__37266_37570 = G__37595;
chunk__37267_37571 = G__37596;
count__37268_37572 = G__37597;
i__37269_37573 = G__37598;
continue;
}
} else {
}
}
break;
}
} else {
var seq__37276_37599 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,cljs.core.cst$kw$ajax], null));
var chunk__37277_37600 = null;
var count__37278_37601 = (0);
var i__37279_37602 = (0);
while(true){
if((i__37279_37602 < count__37278_37601)){
var conn_type_37603 = chunk__37277_37600.cljs$core$IIndexed$_nth$arity$2(null,i__37279_37602);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_37603,uid_37534], null),((function (seq__37276_37599,chunk__37277_37600,count__37278_37601,i__37279_37602,conn_type_37603,uid_37534,__37535,__37536__$1,__37537__$2,ev_uuid_37538,flush_buffer_BANG__37539,vec__37244,map__37247,map__37247__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_37538], true)], null);
} else {
var vec__37280 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37280,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37280,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_37538)], null);
}
});})(seq__37276_37599,chunk__37277_37600,count__37278_37601,i__37279_37602,conn_type_37603,uid_37534,__37535,__37536__$1,__37537__$2,ev_uuid_37538,flush_buffer_BANG__37539,vec__37244,map__37247,map__37247__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__37604 = seq__37276_37599;
var G__37605 = chunk__37277_37600;
var G__37606 = count__37278_37601;
var G__37607 = (i__37279_37602 + (1));
seq__37276_37599 = G__37604;
chunk__37277_37600 = G__37605;
count__37278_37601 = G__37606;
i__37279_37602 = G__37607;
continue;
} else {
var temp__4657__auto___37608 = cljs.core.seq(seq__37276_37599);
if(temp__4657__auto___37608){
var seq__37276_37609__$1 = temp__4657__auto___37608;
if(cljs.core.chunked_seq_QMARK_(seq__37276_37609__$1)){
var c__7194__auto___37610 = cljs.core.chunk_first(seq__37276_37609__$1);
var G__37611 = cljs.core.chunk_rest(seq__37276_37609__$1);
var G__37612 = c__7194__auto___37610;
var G__37613 = cljs.core.count(c__7194__auto___37610);
var G__37614 = (0);
seq__37276_37599 = G__37611;
chunk__37277_37600 = G__37612;
count__37278_37601 = G__37613;
i__37279_37602 = G__37614;
continue;
} else {
var conn_type_37615 = cljs.core.first(seq__37276_37609__$1);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_37615,uid_37534], null),((function (seq__37276_37599,chunk__37277_37600,count__37278_37601,i__37279_37602,conn_type_37615,seq__37276_37609__$1,temp__4657__auto___37608,uid_37534,__37535,__37536__$1,__37537__$2,ev_uuid_37538,flush_buffer_BANG__37539,vec__37244,map__37247,map__37247__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_37538], true)], null);
} else {
var vec__37283 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37283,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37283,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_37538)], null);
}
});})(seq__37276_37599,chunk__37277_37600,count__37278_37601,i__37279_37602,conn_type_37615,seq__37276_37609__$1,temp__4657__auto___37608,uid_37534,__37535,__37536__$1,__37537__$2,ev_uuid_37538,flush_buffer_BANG__37539,vec__37244,map__37247,map__37247__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__37616 = cljs.core.next(seq__37276_37609__$1);
var G__37617 = null;
var G__37618 = (0);
var G__37619 = (0);
seq__37276_37599 = G__37616;
chunk__37277_37600 = G__37617;
count__37278_37601 = G__37618;
i__37279_37602 = G__37619;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__37539(cljs.core.cst$kw$ws);

flush_buffer_BANG__37539(cljs.core.cst$kw$ajax);
} else {
var ws_timeout_37620 = cljs.core.async.timeout(send_buf_ms_ws);
var ajax_timeout_37621 = cljs.core.async.timeout(send_buf_ms_ajax);
var c__34193__auto___37622 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34193__auto___37622,ws_timeout_37620,ajax_timeout_37621,uid_37534,__37535,__37536__$1,__37537__$2,ev_uuid_37538,flush_buffer_BANG__37539,vec__37244,map__37247,map__37247__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__34194__auto__ = (function (){var switch__34069__auto__ = ((function (c__34193__auto___37622,ws_timeout_37620,ajax_timeout_37621,uid_37534,__37535,__37536__$1,__37537__$2,ev_uuid_37538,flush_buffer_BANG__37539,vec__37244,map__37247,map__37247__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_37290){
var state_val_37291 = (state_37290[(1)]);
if((state_val_37291 === (1))){
var state_37290__$1 = state_37290;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37290__$1,(2),ws_timeout_37620);
} else {
if((state_val_37291 === (2))){
var inst_37287 = (state_37290[(2)]);
var inst_37288 = flush_buffer_BANG__37539(cljs.core.cst$kw$ws);
var state_37290__$1 = (function (){var statearr_37292 = state_37290;
(statearr_37292[(7)] = inst_37287);

return statearr_37292;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37290__$1,inst_37288);
} else {
return null;
}
}
});})(c__34193__auto___37622,ws_timeout_37620,ajax_timeout_37621,uid_37534,__37535,__37536__$1,__37537__$2,ev_uuid_37538,flush_buffer_BANG__37539,vec__37244,map__37247,map__37247__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__34069__auto__,c__34193__auto___37622,ws_timeout_37620,ajax_timeout_37621,uid_37534,__37535,__37536__$1,__37537__$2,ev_uuid_37538,flush_buffer_BANG__37539,vec__37244,map__37247,map__37247__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__34070__auto__ = null;
var taoensso$sente$state_machine__34070__auto____0 = (function (){
var statearr_37296 = [null,null,null,null,null,null,null,null];
(statearr_37296[(0)] = taoensso$sente$state_machine__34070__auto__);

(statearr_37296[(1)] = (1));

return statearr_37296;
});
var taoensso$sente$state_machine__34070__auto____1 = (function (state_37290){
while(true){
var ret_value__34071__auto__ = (function (){try{while(true){
var result__34072__auto__ = switch__34069__auto__(state_37290);
if(cljs.core.keyword_identical_QMARK_(result__34072__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34072__auto__;
}
break;
}
}catch (e37297){if((e37297 instanceof Object)){
var ex__34073__auto__ = e37297;
var statearr_37298_37623 = state_37290;
(statearr_37298_37623[(5)] = ex__34073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37290);

return cljs.core.cst$kw$recur;
} else {
throw e37297;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34071__auto__,cljs.core.cst$kw$recur)){
var G__37624 = state_37290;
state_37290 = G__37624;
continue;
} else {
return ret_value__34071__auto__;
}
break;
}
});
taoensso$sente$state_machine__34070__auto__ = function(state_37290){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__34070__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__34070__auto____1.call(this,state_37290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__34070__auto____0;
taoensso$sente$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__34070__auto____1;
return taoensso$sente$state_machine__34070__auto__;
})()
;})(switch__34069__auto__,c__34193__auto___37622,ws_timeout_37620,ajax_timeout_37621,uid_37534,__37535,__37536__$1,__37537__$2,ev_uuid_37538,flush_buffer_BANG__37539,vec__37244,map__37247,map__37247__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__34195__auto__ = (function (){var statearr_37299 = (f__34194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34194__auto__.cljs$core$IFn$_invoke$arity$0() : f__34194__auto__.call(null));
(statearr_37299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34193__auto___37622);

return statearr_37299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34195__auto__);
});})(c__34193__auto___37622,ws_timeout_37620,ajax_timeout_37621,uid_37534,__37535,__37536__$1,__37537__$2,ev_uuid_37538,flush_buffer_BANG__37539,vec__37244,map__37247,map__37247__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__34193__auto___37625 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34193__auto___37625,ws_timeout_37620,ajax_timeout_37621,uid_37534,__37535,__37536__$1,__37537__$2,ev_uuid_37538,flush_buffer_BANG__37539,vec__37244,map__37247,map__37247__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__34194__auto__ = (function (){var switch__34069__auto__ = ((function (c__34193__auto___37625,ws_timeout_37620,ajax_timeout_37621,uid_37534,__37535,__37536__$1,__37537__$2,ev_uuid_37538,flush_buffer_BANG__37539,vec__37244,map__37247,map__37247__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_37304){
var state_val_37305 = (state_37304[(1)]);
if((state_val_37305 === (1))){
var state_37304__$1 = state_37304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37304__$1,(2),ajax_timeout_37621);
} else {
if((state_val_37305 === (2))){
var inst_37301 = (state_37304[(2)]);
var inst_37302 = flush_buffer_BANG__37539(cljs.core.cst$kw$ajax);
var state_37304__$1 = (function (){var statearr_37306 = state_37304;
(statearr_37306[(7)] = inst_37301);

return statearr_37306;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37304__$1,inst_37302);
} else {
return null;
}
}
});})(c__34193__auto___37625,ws_timeout_37620,ajax_timeout_37621,uid_37534,__37535,__37536__$1,__37537__$2,ev_uuid_37538,flush_buffer_BANG__37539,vec__37244,map__37247,map__37247__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__34069__auto__,c__34193__auto___37625,ws_timeout_37620,ajax_timeout_37621,uid_37534,__37535,__37536__$1,__37537__$2,ev_uuid_37538,flush_buffer_BANG__37539,vec__37244,map__37247,map__37247__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__34070__auto__ = null;
var taoensso$sente$state_machine__34070__auto____0 = (function (){
var statearr_37310 = [null,null,null,null,null,null,null,null];
(statearr_37310[(0)] = taoensso$sente$state_machine__34070__auto__);

(statearr_37310[(1)] = (1));

return statearr_37310;
});
var taoensso$sente$state_machine__34070__auto____1 = (function (state_37304){
while(true){
var ret_value__34071__auto__ = (function (){try{while(true){
var result__34072__auto__ = switch__34069__auto__(state_37304);
if(cljs.core.keyword_identical_QMARK_(result__34072__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34072__auto__;
}
break;
}
}catch (e37311){if((e37311 instanceof Object)){
var ex__34073__auto__ = e37311;
var statearr_37312_37626 = state_37304;
(statearr_37312_37626[(5)] = ex__34073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37304);

return cljs.core.cst$kw$recur;
} else {
throw e37311;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34071__auto__,cljs.core.cst$kw$recur)){
var G__37627 = state_37304;
state_37304 = G__37627;
continue;
} else {
return ret_value__34071__auto__;
}
break;
}
});
taoensso$sente$state_machine__34070__auto__ = function(state_37304){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__34070__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__34070__auto____1.call(this,state_37304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__34070__auto____0;
taoensso$sente$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__34070__auto____1;
return taoensso$sente$state_machine__34070__auto__;
})()
;})(switch__34069__auto__,c__34193__auto___37625,ws_timeout_37620,ajax_timeout_37621,uid_37534,__37535,__37536__$1,__37537__$2,ev_uuid_37538,flush_buffer_BANG__37539,vec__37244,map__37247,map__37247__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__34195__auto__ = (function (){var statearr_37313 = (f__34194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34194__auto__.cljs$core$IFn$_invoke$arity$0() : f__34194__auto__.call(null));
(statearr_37313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34193__auto___37625);

return statearr_37313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34195__auto__);
});})(c__34193__auto___37625,ws_timeout_37620,ajax_timeout_37621,uid_37534,__37535,__37536__$1,__37537__$2,ev_uuid_37538,flush_buffer_BANG__37539,vec__37244,map__37247,map__37247__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}
}

return null;
};
var G__37533 = function (user_id,ev,var_args){
var p__37243 = null;
if (arguments.length > 2) {
var G__37628__i = 0, G__37628__a = new Array(arguments.length -  2);
while (G__37628__i < G__37628__a.length) {G__37628__a[G__37628__i] = arguments[G__37628__i + 2]; ++G__37628__i;}
  p__37243 = new cljs.core.IndexedSeq(G__37628__a,0);
} 
return G__37533__delegate.call(this,user_id,ev,p__37243);};
G__37533.cljs$lang$maxFixedArity = 2;
G__37533.cljs$lang$applyTo = (function (arglist__37629){
var user_id = cljs.core.first(arglist__37629);
arglist__37629 = cljs.core.next(arglist__37629);
var ev = cljs.core.first(arglist__37629);
var p__37243 = cljs.core.rest(arglist__37629);
return G__37533__delegate(user_id,ev,p__37243);
});
G__37533.cljs$core$IFn$_invoke$arity$variadic = G__37533__delegate;
return G__37533;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ch_DASH_recv,ch_recv,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$connected_DASH_uids,connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$ch_DASH_recv,ch_recv,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$connected_DASH_uids,connected_uids_,cljs.core.cst$kw$ajax_DASH_post_DASH_fn,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_open,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.not(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,cljs.core.cst$kw$params);
var ppstr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$ppstr);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$client_DASH_id);
var vec__37314 = taoensso.sente.unpack(packer__$1,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37314,(0),null);
var has_cb_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37314,(1),null);
var reply_fn = (function (){var replied_QMARK__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
return ((function (replied_QMARK__,params,ppstr,client_id,vec__37314,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (resp_clj){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_(replied_QMARK__,false,true))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",521,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (replied_QMARK__,params,ppstr,client_id,vec__37314,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
});})(replied_QMARK__,params,ppstr,client_id,vec__37314,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1864333532);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,cljs.core.meta(resp_clj),resp_clj));
} else {
return null;
}
});
;})(replied_QMARK__,params,ppstr,client_id,vec__37314,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$client_DASH_id,client_id,cljs.core.cst$kw$ring_DASH_req,ring_req,cljs.core.cst$kw$event,clj,cljs.core.cst$kw$uid,user_id_fn__$1(ring_req,client_id),cljs.core.cst$kw$_QMARK_reply_DASH_fn,(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)], 0)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__4657__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__34193__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34193__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__37314,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__34194__auto__ = (function (){var switch__34069__auto__ = ((function (c__34193__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__37314,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_37322){
var state_val_37323 = (state_37322[(1)]);
if((state_val_37323 === (1))){
var inst_37317 = cljs.core.async.timeout(ms);
var state_37322__$1 = state_37322;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37322__$1,(2),inst_37317);
} else {
if((state_val_37323 === (2))){
var inst_37319 = (state_37322[(2)]);
var inst_37320 = (function (){var G__37324 = cljs.core.cst$kw$chsk_SLASH_timeout;
return (reply_fn.cljs$core$IFn$_invoke$arity$1 ? reply_fn.cljs$core$IFn$_invoke$arity$1(G__37324) : reply_fn.call(null,G__37324));
})();
var state_37322__$1 = (function (){var statearr_37325 = state_37322;
(statearr_37325[(7)] = inst_37319);

return statearr_37325;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37322__$1,inst_37320);
} else {
return null;
}
}
});})(c__34193__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__37314,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__34069__auto__,c__34193__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__37314,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__34070__auto__ = null;
var taoensso$sente$state_machine__34070__auto____0 = (function (){
var statearr_37329 = [null,null,null,null,null,null,null,null];
(statearr_37329[(0)] = taoensso$sente$state_machine__34070__auto__);

(statearr_37329[(1)] = (1));

return statearr_37329;
});
var taoensso$sente$state_machine__34070__auto____1 = (function (state_37322){
while(true){
var ret_value__34071__auto__ = (function (){try{while(true){
var result__34072__auto__ = switch__34069__auto__(state_37322);
if(cljs.core.keyword_identical_QMARK_(result__34072__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34072__auto__;
}
break;
}
}catch (e37330){if((e37330 instanceof Object)){
var ex__34073__auto__ = e37330;
var statearr_37331_37630 = state_37322;
(statearr_37331_37630[(5)] = ex__34073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37322);

return cljs.core.cst$kw$recur;
} else {
throw e37330;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34071__auto__,cljs.core.cst$kw$recur)){
var G__37631 = state_37322;
state_37322 = G__37631;
continue;
} else {
return ret_value__34071__auto__;
}
break;
}
});
taoensso$sente$state_machine__34070__auto__ = function(state_37322){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__34070__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__34070__auto____1.call(this,state_37322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__34070__auto____0;
taoensso$sente$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__34070__auto____1;
return taoensso$sente$state_machine__34070__auto__;
})()
;})(switch__34069__auto__,c__34193__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__37314,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__34195__auto__ = (function (){var statearr_37332 = (f__34194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34194__auto__.cljs$core$IFn$_invoke$arity$0() : f__34194__auto__.call(null));
(statearr_37332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34193__auto__);

return statearr_37332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34195__auto__);
});})(c__34193__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__37314,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__34193__auto__;
} else {
return null;
}
} else {
var G__37333 = cljs.core.cst$kw$chsk_SLASH_dummy_DASH_cb_DASH_200;
return (reply_fn.cljs$core$IFn$_invoke$arity$1 ? reply_fn.cljs$core$IFn$_invoke$arity$1(G__37333) : reply_fn.call(null,G__37333));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,cljs.core.cst$kw$ajax_DASH_get_DASH_or_DASH_ws_DASH_handshake_DASH_fn,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,cljs.core.cst$kw$params);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$client_DASH_id);
var csrf_token = (csrf_token_fn.cljs$core$IFn$_invoke$arity$1 ? csrf_token_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : csrf_token_fn.call(null,ring_req));
var uid = user_id_fn__$1(ring_req,client_id);
var receive_event_msg_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$self = null;
var taoensso$sente$self__1 = (function (event){
return taoensso$sente$self.cljs$core$IFn$_invoke$arity$2(event,null);
});
var taoensso$sente$self__2 = (function (event,_QMARK_reply_fn){
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$client_DASH_id,client_id,cljs.core.cst$kw$ring_DASH_req,ring_req,cljs.core.cst$kw$event,event,cljs.core.cst$kw$_QMARK_reply_DASH_fn,_QMARK_reply_fn,cljs.core.cst$kw$uid,uid], null)], 0)));
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
;})(sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_handshake_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",566,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-924067746);

var _QMARK_handshake_data = (handshake_data_fn.cljs$core$IFn$_invoke$arity$1 ? handshake_data_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : handshake_data_fn.call(null,ring_req));
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_handshake,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_handshake,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,null,handshake_ev));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_(client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",577,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(err_msg),cljs.core.str(": %s")].join(''),ring_req], null);
});})(err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-700481328);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_msg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ring_DASH_req,ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_open,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",586,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1420974775);
var updated_conn = upd_conn_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$ws,uid,client_id,server_ch);
var udt_open = cljs.core.cst$kw$udt.cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(connect_uid_BANG_(cljs.core.cst$kw$ws,uid))){
receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_uidport_DASH_open,uid], null));
} else {
}

send_handshake_BANG_(server_ch,websocket_QMARK_);

var temp__4657__auto__ = ws_kalive_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__34193__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34193__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__34194__auto__ = (function (){var switch__34069__auto__ = ((function (c__34193__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_37369){
var state_val_37370 = (state_37369[(1)]);
if((state_val_37370 === (7))){
var inst_37365 = (state_37369[(2)]);
var state_37369__$1 = state_37369;
var statearr_37371_37632 = state_37369__$1;
(statearr_37371_37632[(2)] = inst_37365);

(statearr_37371_37632[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_37370 === (1))){
var inst_37334 = udt_open;
var state_37369__$1 = (function (){var statearr_37372 = state_37369;
(statearr_37372[(7)] = inst_37334);

return statearr_37372;
})();
var statearr_37373_37633 = state_37369__$1;
(statearr_37373_37633[(2)] = null);

(statearr_37373_37633[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_37370 === (4))){
var inst_37343 = (state_37369[(8)]);
var inst_37338 = (state_37369[(2)]);
var inst_37339 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(conns_) : cljs.core.deref.call(null,conns_));
var inst_37340 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37341 = [cljs.core.cst$kw$ws,uid,client_id];
var inst_37342 = (new cljs.core.PersistentVector(null,3,(5),inst_37340,inst_37341,null));
var inst_37343__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_37339,inst_37342);
var state_37369__$1 = (function (){var statearr_37374 = state_37369;
(statearr_37374[(9)] = inst_37338);

(statearr_37374[(8)] = inst_37343__$1);

return statearr_37374;
})();
if(cljs.core.truth_(inst_37343__$1)){
var statearr_37375_37634 = state_37369__$1;
(statearr_37375_37634[(1)] = (5));

} else {
var statearr_37376_37635 = state_37369__$1;
(statearr_37376_37635[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_37370 === (13))){
var inst_37349 = (state_37369[(10)]);
var inst_37358 = (state_37369[(2)]);
var inst_37334 = inst_37349;
var state_37369__$1 = (function (){var statearr_37377 = state_37369;
(statearr_37377[(7)] = inst_37334);

(statearr_37377[(11)] = inst_37358);

return statearr_37377;
})();
var statearr_37378_37636 = state_37369__$1;
(statearr_37378_37636[(2)] = null);

(statearr_37378_37636[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_37370 === (6))){
var state_37369__$1 = state_37369;
var statearr_37379_37637 = state_37369__$1;
(statearr_37379_37637[(2)] = null);

(statearr_37379_37637[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_37370 === (3))){
var inst_37367 = (state_37369[(2)]);
var state_37369__$1 = state_37369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37369__$1,inst_37367);
} else {
if((state_val_37370 === (12))){
var state_37369__$1 = state_37369;
var statearr_37380_37638 = state_37369__$1;
(statearr_37380_37638[(2)] = null);

(statearr_37380_37638[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_37370 === (2))){
var inst_37336 = cljs.core.async.timeout(ms);
var state_37369__$1 = state_37369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37369__$1,(4),inst_37336);
} else {
if((state_val_37370 === (11))){
var inst_37354 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,null,cljs.core.cst$kw$chsk_SLASH_ws_DASH_ping);
var inst_37355 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_37354);
var state_37369__$1 = state_37369;
var statearr_37381_37639 = state_37369__$1;
(statearr_37381_37639[(2)] = inst_37355);

(statearr_37381_37639[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_37370 === (9))){
var state_37369__$1 = state_37369;
var statearr_37382_37640 = state_37369__$1;
(statearr_37382_37640[(2)] = null);

(statearr_37382_37640[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_37370 === (5))){
var inst_37343 = (state_37369[(8)]);
var inst_37348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37343,(0),null);
var inst_37349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37343,(1),null);
var inst_37350 = taoensso.sente.interfaces.sch_open_QMARK_(server_ch);
var state_37369__$1 = (function (){var statearr_37383 = state_37369;
(statearr_37383[(10)] = inst_37349);

(statearr_37383[(12)] = inst_37348);

return statearr_37383;
})();
if(cljs.core.truth_(inst_37350)){
var statearr_37384_37641 = state_37369__$1;
(statearr_37384_37641[(1)] = (8));

} else {
var statearr_37385_37642 = state_37369__$1;
(statearr_37385_37642[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_37370 === (10))){
var inst_37362 = (state_37369[(2)]);
var state_37369__$1 = state_37369;
var statearr_37386_37643 = state_37369__$1;
(statearr_37386_37643[(2)] = inst_37362);

(statearr_37386_37643[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_37370 === (8))){
var inst_37334 = (state_37369[(7)]);
var inst_37349 = (state_37369[(10)]);
var inst_37352 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37349,inst_37334);
var state_37369__$1 = state_37369;
if(inst_37352){
var statearr_37387_37644 = state_37369__$1;
(statearr_37387_37644[(1)] = (11));

} else {
var statearr_37388_37645 = state_37369__$1;
(statearr_37388_37645[(1)] = (12));

}

return cljs.core.cst$kw$recur;
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
});})(c__34193__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__34069__auto__,c__34193__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__34070__auto__ = null;
var taoensso$sente$state_machine__34070__auto____0 = (function (){
var statearr_37392 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37392[(0)] = taoensso$sente$state_machine__34070__auto__);

(statearr_37392[(1)] = (1));

return statearr_37392;
});
var taoensso$sente$state_machine__34070__auto____1 = (function (state_37369){
while(true){
var ret_value__34071__auto__ = (function (){try{while(true){
var result__34072__auto__ = switch__34069__auto__(state_37369);
if(cljs.core.keyword_identical_QMARK_(result__34072__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34072__auto__;
}
break;
}
}catch (e37393){if((e37393 instanceof Object)){
var ex__34073__auto__ = e37393;
var statearr_37394_37646 = state_37369;
(statearr_37394_37646[(5)] = ex__34073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37369);

return cljs.core.cst$kw$recur;
} else {
throw e37393;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34071__auto__,cljs.core.cst$kw$recur)){
var G__37647 = state_37369;
state_37369 = G__37647;
continue;
} else {
return ret_value__34071__auto__;
}
break;
}
});
taoensso$sente$state_machine__34070__auto__ = function(state_37369){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__34070__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__34070__auto____1.call(this,state_37369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__34070__auto____0;
taoensso$sente$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__34070__auto____1;
return taoensso$sente$state_machine__34070__auto__;
})()
;})(switch__34069__auto__,c__34193__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__34195__auto__ = (function (){var statearr_37395 = (f__34194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34194__auto__.cljs$core$IFn$_invoke$arity$0() : f__34194__auto__.call(null));
(statearr_37395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34193__auto__);

return statearr_37395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34195__auto__);
});})(c__34193__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__34193__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",615,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-394853911);
var updated_conn = upd_conn_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$ajax,uid,client_id,server_ch);
var udt_open = cljs.core.cst$kw$udt.cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__6383__auto__ = cljs.core.cst$kw$init_QMARK_.cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
return cljs.core.cst$kw$handshake_QMARK_.cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_(cljs.core.cst$kw$ajax,uid))){
receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_uidport_DASH_open,uid], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return send_handshake_BANG_(server_ch,websocket_QMARK_);
} else {
var temp__4657__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__34193__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34193__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__34194__auto__ = (function (){var switch__34069__auto__ = ((function (c__34193__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_37421){
var state_val_37422 = (state_37421[(1)]);
if((state_val_37422 === (1))){
var inst_37396 = cljs.core.async.timeout(ms);
var state_37421__$1 = state_37421;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37421__$1,(2),inst_37396);
} else {
if((state_val_37422 === (2))){
var inst_37403 = (state_37421[(7)]);
var inst_37398 = (state_37421[(2)]);
var inst_37399 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(conns_) : cljs.core.deref.call(null,conns_));
var inst_37400 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37401 = [cljs.core.cst$kw$ajax,uid,client_id];
var inst_37402 = (new cljs.core.PersistentVector(null,3,(5),inst_37400,inst_37401,null));
var inst_37403__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_37399,inst_37402);
var state_37421__$1 = (function (){var statearr_37423 = state_37421;
(statearr_37423[(8)] = inst_37398);

(statearr_37423[(7)] = inst_37403__$1);

return statearr_37423;
})();
if(cljs.core.truth_(inst_37403__$1)){
var statearr_37424_37648 = state_37421__$1;
(statearr_37424_37648[(1)] = (3));

} else {
var statearr_37425_37649 = state_37421__$1;
(statearr_37425_37649[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_37422 === (3))){
var inst_37403 = (state_37421[(7)]);
var inst_37408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37403,(0),null);
var inst_37409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37403,(1),null);
var inst_37410 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37409,udt_open);
var state_37421__$1 = (function (){var statearr_37426 = state_37421;
(statearr_37426[(9)] = inst_37408);

return statearr_37426;
})();
if(inst_37410){
var statearr_37427_37650 = state_37421__$1;
(statearr_37427_37650[(1)] = (6));

} else {
var statearr_37428_37651 = state_37421__$1;
(statearr_37428_37651[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_37422 === (4))){
var state_37421__$1 = state_37421;
var statearr_37429_37652 = state_37421__$1;
(statearr_37429_37652[(2)] = null);

(statearr_37429_37652[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_37422 === (5))){
var inst_37419 = (state_37421[(2)]);
var state_37421__$1 = state_37421;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37421__$1,inst_37419);
} else {
if((state_val_37422 === (6))){
var inst_37412 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,null,cljs.core.cst$kw$chsk_SLASH_timeout);
var inst_37413 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_37412);
var state_37421__$1 = state_37421;
var statearr_37430_37653 = state_37421__$1;
(statearr_37430_37653[(2)] = inst_37413);

(statearr_37430_37653[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_37422 === (7))){
var state_37421__$1 = state_37421;
var statearr_37431_37654 = state_37421__$1;
(statearr_37431_37654[(2)] = null);

(statearr_37431_37654[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_37422 === (8))){
var inst_37416 = (state_37421[(2)]);
var state_37421__$1 = state_37421;
var statearr_37432_37655 = state_37421__$1;
(statearr_37432_37655[(2)] = inst_37416);

(statearr_37432_37655[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__34193__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__34069__auto__,c__34193__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__34070__auto__ = null;
var taoensso$sente$state_machine__34070__auto____0 = (function (){
var statearr_37436 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37436[(0)] = taoensso$sente$state_machine__34070__auto__);

(statearr_37436[(1)] = (1));

return statearr_37436;
});
var taoensso$sente$state_machine__34070__auto____1 = (function (state_37421){
while(true){
var ret_value__34071__auto__ = (function (){try{while(true){
var result__34072__auto__ = switch__34069__auto__(state_37421);
if(cljs.core.keyword_identical_QMARK_(result__34072__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34072__auto__;
}
break;
}
}catch (e37437){if((e37437 instanceof Object)){
var ex__34073__auto__ = e37437;
var statearr_37438_37656 = state_37421;
(statearr_37438_37656[(5)] = ex__34073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37421);

return cljs.core.cst$kw$recur;
} else {
throw e37437;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34071__auto__,cljs.core.cst$kw$recur)){
var G__37657 = state_37421;
state_37421 = G__37657;
continue;
} else {
return ret_value__34071__auto__;
}
break;
}
});
taoensso$sente$state_machine__34070__auto__ = function(state_37421){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__34070__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__34070__auto____1.call(this,state_37421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__34070__auto____0;
taoensso$sente$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__34070__auto____1;
return taoensso$sente$state_machine__34070__auto__;
})()
;})(switch__34069__auto__,c__34193__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__34195__auto__ = (function (){var statearr_37439 = (f__34194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34194__auto__.cljs$core$IFn$_invoke$arity$0() : f__34194__auto__.call(null));
(statearr_37439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34193__auto__);

return statearr_37439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34195__auto__);
});})(c__34193__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__34193__auto__;
} else {
return null;
}
}
}
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,cljs.core.cst$kw$on_DASH_msg,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$ws,uid,client_id);

var vec__37440 = taoensso.sente.unpack(packer__$1,req_ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37440,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37440,(1),null);
return receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$2(clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__37440,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",645,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__37440,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__37440,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1052333148);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4(packer__$1,cljs.core.meta(resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__37440,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,cljs.core.cst$kw$on_DASH_close,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?cljs.core.cst$kw$ws:cljs.core.cst$kw$ajax);
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",654,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
});})(conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1447076624);
var updated_conn = upd_conn_BANG_.cljs$core$IFn$_invoke$arity$4(conn_type,uid,client_id,null);
var udt_close = cljs.core.cst$kw$udt.cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__34193__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34193__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__34194__auto__ = (function (){var switch__34069__auto__ = ((function (c__34193__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_37494){
var state_val_37495 = (state_37494[(1)]);
if((state_val_37495 === (7))){
var state_37494__$1 = state_37494;
var statearr_37496_37658 = state_37494__$1;
(statearr_37496_37658[(2)] = null);

(statearr_37496_37658[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_37495 === (1))){
var inst_37443 = cljs.core.async.timeout((5000));
var state_37494__$1 = state_37494;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37494__$1,(2),inst_37443);
} else {
if((state_val_37495 === (4))){
var state_37494__$1 = state_37494;
var statearr_37497_37659 = state_37494__$1;
(statearr_37497_37659[(2)] = null);

(statearr_37497_37659[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_37495 === (13))){
var state_37494__$1 = state_37494;
var statearr_37498_37660 = state_37494__$1;
(statearr_37498_37660[(2)] = null);

(statearr_37498_37660[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_37495 === (6))){
var inst_37453 = (state_37494[(7)]);
var inst_37454 = (state_37494[(8)]);
var inst_37455 = (state_37494[(9)]);
var inst_37471 = (state_37494[(10)]);
var inst_37466 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37467 = [conn_type,uid,client_id];
var inst_37468 = (new cljs.core.PersistentVector(null,3,(5),inst_37466,inst_37467,null));
var inst_37470 = (function (){var vec__37446 = inst_37453;
var __QMARK_sch = inst_37454;
var udt_t1 = inst_37455;
return ((function (vec__37446,__QMARK_sch,udt_t1,inst_37453,inst_37454,inst_37455,inst_37471,inst_37466,inst_37467,inst_37468,state_val_37495,c__34193__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__37469){
var vec__37499 = p__37469;
var _sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37499,(0),null);
var udt_t1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37499,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1__$1,udt_close)){
return taoensso.encore.swapped(cljs.core.cst$kw$swap_SLASH_dissoc,true);
} else {
return taoensso.encore.swapped(udt_t1__$1,false);
}
});
;})(vec__37446,__QMARK_sch,udt_t1,inst_37453,inst_37454,inst_37455,inst_37471,inst_37466,inst_37467,inst_37468,state_val_37495,c__34193__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_37471__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_37468,inst_37470);
var state_37494__$1 = (function (){var statearr_37502 = state_37494;
(statearr_37502[(10)] = inst_37471__$1);

return statearr_37502;
})();
if(cljs.core.truth_(inst_37471__$1)){
var statearr_37503_37661 = state_37494__$1;
(statearr_37503_37661[(1)] = (9));

} else {
var statearr_37504_37662 = state_37494__$1;
(statearr_37504_37662[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_37495 === (3))){
var inst_37453 = (state_37494[(7)]);
var inst_37454 = (state_37494[(8)]);
var inst_37455 = (state_37494[(9)]);
var inst_37458 = (function (){var vec__37446 = inst_37453;
var __QMARK_sch = inst_37454;
var udt_t1 = inst_37455;
return ((function (vec__37446,__QMARK_sch,udt_t1,inst_37453,inst_37454,inst_37455,state_val_37495,c__34193__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
;})(vec__37446,__QMARK_sch,udt_t1,inst_37453,inst_37454,inst_37455,state_val_37495,c__34193__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_37459 = (new cljs.core.Delay(inst_37458,null));
var inst_37460 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",668,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,inst_37459,null,559883297);
var state_37494__$1 = state_37494;
var statearr_37505_37663 = state_37494__$1;
(statearr_37505_37663[(2)] = inst_37460);

(statearr_37505_37663[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_37495 === (12))){
var inst_37480 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37481 = [cljs.core.cst$kw$chsk_SLASH_uidport_DASH_close,uid];
var inst_37482 = (new cljs.core.PersistentVector(null,2,(5),inst_37480,inst_37481,null));
var inst_37483 = receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$1(inst_37482);
var state_37494__$1 = state_37494;
var statearr_37506_37664 = state_37494__$1;
(statearr_37506_37664[(2)] = inst_37483);

(statearr_37506_37664[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_37495 === (2))){
var inst_37453 = (state_37494[(7)]);
var inst_37445 = (state_37494[(2)]);
var inst_37449 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(conns_) : cljs.core.deref.call(null,conns_));
var inst_37450 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37451 = [conn_type,uid,client_id];
var inst_37452 = (new cljs.core.PersistentVector(null,3,(5),inst_37450,inst_37451,null));
var inst_37453__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_37449,inst_37452);
var inst_37454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37453__$1,(0),null);
var inst_37455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37453__$1,(1),null);
var inst_37456 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(taoensso.sente.debug_mode_QMARK__) : cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__));
var state_37494__$1 = (function (){var statearr_37507 = state_37494;
(statearr_37507[(11)] = inst_37445);

(statearr_37507[(7)] = inst_37453__$1);

(statearr_37507[(8)] = inst_37454);

(statearr_37507[(9)] = inst_37455);

return statearr_37507;
})();
if(cljs.core.truth_(inst_37456)){
var statearr_37508_37665 = state_37494__$1;
(statearr_37508_37665[(1)] = (3));

} else {
var statearr_37509_37666 = state_37494__$1;
(statearr_37509_37666[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_37495 === (11))){
var inst_37489 = (state_37494[(2)]);
var state_37494__$1 = state_37494;
var statearr_37510_37667 = state_37494__$1;
(statearr_37510_37667[(2)] = inst_37489);

(statearr_37510_37667[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_37495 === (9))){
var inst_37453 = (state_37494[(7)]);
var inst_37454 = (state_37494[(8)]);
var inst_37455 = (state_37494[(9)]);
var inst_37471 = (state_37494[(10)]);
var inst_37473 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37474 = [conn_type,uid];
var inst_37475 = (new cljs.core.PersistentVector(null,2,(5),inst_37473,inst_37474,null));
var inst_37476 = (function (){var vec__37446 = inst_37453;
var __QMARK_sch = inst_37454;
var udt_t1 = inst_37455;
var disconnect_QMARK_ = inst_37471;
return ((function (vec__37446,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_37453,inst_37454,inst_37455,inst_37471,inst_37473,inst_37474,inst_37475,state_val_37495,c__34193__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_(_QMARK_m)){
return cljs.core.cst$kw$swap_SLASH_dissoc;
} else {
return _QMARK_m;
}
});
;})(vec__37446,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_37453,inst_37454,inst_37455,inst_37471,inst_37473,inst_37474,inst_37475,state_val_37495,c__34193__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_37477 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_37475,inst_37476);
var inst_37478 = upd_connected_uid_BANG_(uid);
var state_37494__$1 = (function (){var statearr_37511 = state_37494;
(statearr_37511[(12)] = inst_37477);

return statearr_37511;
})();
if(cljs.core.truth_(inst_37478)){
var statearr_37512_37668 = state_37494__$1;
(statearr_37512_37668[(1)] = (12));

} else {
var statearr_37513_37669 = state_37494__$1;
(statearr_37513_37669[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_37495 === (5))){
var inst_37455 = (state_37494[(9)]);
var inst_37463 = (state_37494[(2)]);
var inst_37464 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37455,udt_close);
var state_37494__$1 = (function (){var statearr_37514 = state_37494;
(statearr_37514[(13)] = inst_37463);

return statearr_37514;
})();
if(inst_37464){
var statearr_37515_37670 = state_37494__$1;
(statearr_37515_37670[(1)] = (6));

} else {
var statearr_37516_37671 = state_37494__$1;
(statearr_37516_37671[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_37495 === (14))){
var inst_37486 = (state_37494[(2)]);
var state_37494__$1 = state_37494;
var statearr_37517_37672 = state_37494__$1;
(statearr_37517_37672[(2)] = inst_37486);

(statearr_37517_37672[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_37495 === (10))){
var state_37494__$1 = state_37494;
var statearr_37518_37673 = state_37494__$1;
(statearr_37518_37673[(2)] = null);

(statearr_37518_37673[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_37495 === (8))){
var inst_37492 = (state_37494[(2)]);
var state_37494__$1 = state_37494;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37494__$1,inst_37492);
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
});})(c__34193__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__34069__auto__,c__34193__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__34070__auto__ = null;
var taoensso$sente$state_machine__34070__auto____0 = (function (){
var statearr_37522 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37522[(0)] = taoensso$sente$state_machine__34070__auto__);

(statearr_37522[(1)] = (1));

return statearr_37522;
});
var taoensso$sente$state_machine__34070__auto____1 = (function (state_37494){
while(true){
var ret_value__34071__auto__ = (function (){try{while(true){
var result__34072__auto__ = switch__34069__auto__(state_37494);
if(cljs.core.keyword_identical_QMARK_(result__34072__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34072__auto__;
}
break;
}
}catch (e37523){if((e37523 instanceof Object)){
var ex__34073__auto__ = e37523;
var statearr_37524_37674 = state_37494;
(statearr_37524_37674[(5)] = ex__34073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37494);

return cljs.core.cst$kw$recur;
} else {
throw e37523;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34071__auto__,cljs.core.cst$kw$recur)){
var G__37675 = state_37494;
state_37494 = G__37675;
continue;
} else {
return ret_value__34071__auto__;
}
break;
}
});
taoensso$sente$state_machine__34070__auto__ = function(state_37494){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__34070__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__34070__auto____1.call(this,state_37494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__34070__auto____0;
taoensso$sente$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__34070__auto____1;
return taoensso$sente$state_machine__34070__auto__;
})()
;})(switch__34069__auto__,c__34193__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__34195__auto__ = (function (){var statearr_37525 = (f__34194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34194__auto__.cljs$core$IFn$_invoke$arity$0() : f__34194__auto__.call(null));
(statearr_37525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34193__auto__);

return statearr_37525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34195__auto__);
});})(c__34193__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__34193__auto__;
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,cljs.core.cst$kw$on_DASH_error,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",690,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1713732201);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__37217,map__37220,map__37220__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq37214){
var G__37215 = cljs.core.first(seq37214);
var seq37214__$1 = cljs.core.next(seq37214);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37215,seq37214__$1);
});

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",696,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,1765035505);

var seq__37698 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(conns_) : cljs.core.deref.call(null,conns_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,uid], null)));
var chunk__37699 = null;
var count__37700 = (0);
var i__37701 = (0);
while(true){
if((i__37701 < count__37700)){
var vec__37702 = chunk__37699.cljs$core$IIndexed$_nth$arity$2(null,i__37701);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37702,(0),null);
var vec__37705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37702,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37705,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37705,(1),null);
var temp__4657__auto___37720 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___37720)){
var sch_37721 = temp__4657__auto___37720;
var G__37708_37722 = cljs.core.cst$kw$ws;
var G__37709_37723 = uid;
var G__37710_37724 = client_id;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(G__37708_37722,G__37709_37723,G__37710_37724) : upd_conn_BANG_.call(null,G__37708_37722,G__37709_37723,G__37710_37724));

taoensso.sente.interfaces.sch_send_BANG_(sch_37721,cljs.core.cst$kw$websocket,buffered_evs_pstr);
} else {
}

var G__37725 = seq__37698;
var G__37726 = chunk__37699;
var G__37727 = count__37700;
var G__37728 = (i__37701 + (1));
seq__37698 = G__37725;
chunk__37699 = G__37726;
count__37700 = G__37727;
i__37701 = G__37728;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__37698);
if(temp__4657__auto__){
var seq__37698__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37698__$1)){
var c__7194__auto__ = cljs.core.chunk_first(seq__37698__$1);
var G__37729 = cljs.core.chunk_rest(seq__37698__$1);
var G__37730 = c__7194__auto__;
var G__37731 = cljs.core.count(c__7194__auto__);
var G__37732 = (0);
seq__37698 = G__37729;
chunk__37699 = G__37730;
count__37700 = G__37731;
i__37701 = G__37732;
continue;
} else {
var vec__37711 = cljs.core.first(seq__37698__$1);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37711,(0),null);
var vec__37714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37711,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37714,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37714,(1),null);
var temp__4657__auto___37733__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___37733__$1)){
var sch_37734 = temp__4657__auto___37733__$1;
var G__37717_37735 = cljs.core.cst$kw$ws;
var G__37718_37736 = uid;
var G__37719_37737 = client_id;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(G__37717_37735,G__37718_37736,G__37719_37737) : upd_conn_BANG_.call(null,G__37717_37735,G__37718_37736,G__37719_37737));

taoensso.sente.interfaces.sch_send_BANG_(sch_37734,cljs.core.cst$kw$websocket,buffered_evs_pstr);
} else {
}

var G__37738 = cljs.core.next(seq__37698__$1);
var G__37739 = null;
var G__37740 = (0);
var G__37741 = (0);
seq__37698 = G__37738;
chunk__37699 = G__37739;
count__37700 = G__37740;
i__37701 = G__37741;
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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",706,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,-787117721);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(conns_) : cljs.core.deref.call(null,conns_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ajax,uid], null)));
if(cljs.core.empty_QMARK_(client_ids_unsatisfied)){
return null;
} else {
var c__34193__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34193__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (){
var f__34194__auto__ = (function (){var switch__34069__auto__ = ((function (c__34193__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (state_37872){
var state_val_37873 = (state_37872[(1)]);
if((state_val_37873 === (7))){
var inst_37834 = (state_37872[(7)]);
var inst_37828 = (state_37872[(8)]);
var inst_37827 = (state_37872[(9)]);
var inst_37844 = (function (){var n = inst_37827;
var client_ids_satisfied = inst_37828;
var _QMARK_pulled = inst_37834;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_37834,inst_37828,inst_37827,state_val_37873,c__34193__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (s,client_id,p__37843){
var vec__37874 = p__37843;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37874,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37874,(1),null);
var sent_QMARK_ = (function (){var temp__4657__auto__ = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto__)){
var sch = temp__4657__auto__;
return taoensso.sente.interfaces.sch_send_BANG_(_QMARK_sch,cljs.core.not(cljs.core.cst$kw$websocket),buffered_evs_pstr);
} else {
return null;
}
})();
if(cljs.core.truth_(sent_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,client_id);
} else {
return s;
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_37834,inst_37828,inst_37827,state_val_37873,c__34193__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_37845 = cljs.core.PersistentHashSet.EMPTY;
var inst_37846 = cljs.core.reduce_kv(inst_37844,inst_37845,inst_37834);
var state_37872__$1 = state_37872;
var statearr_37877_37910 = state_37872__$1;
(statearr_37877_37910[(2)] = inst_37846);

(statearr_37877_37910[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_37873 === (1))){
var inst_37826 = cljs.core.PersistentHashSet.EMPTY;
var inst_37827 = (0);
var inst_37828 = inst_37826;
var state_37872__$1 = (function (){var statearr_37878 = state_37872;
(statearr_37878[(8)] = inst_37828);

(statearr_37878[(9)] = inst_37827);

return statearr_37878;
})();
var statearr_37879_37911 = state_37872__$1;
(statearr_37879_37911[(2)] = null);

(statearr_37879_37911[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_37873 === (4))){
var state_37872__$1 = state_37872;
var statearr_37880_37912 = state_37872__$1;
(statearr_37880_37912[(2)] = true);

(statearr_37880_37912[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_37873 === (15))){
var inst_37865 = (state_37872[(2)]);
var state_37872__$1 = state_37872;
var statearr_37881_37913 = state_37872__$1;
(statearr_37881_37913[(2)] = inst_37865);

(statearr_37881_37913[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_37873 === (13))){
var inst_37851 = (state_37872[(10)]);
var inst_37856 = cljs.core.rand_int(inst_37851);
var inst_37857 = (inst_37851 + inst_37856);
var inst_37858 = cljs.core.async.timeout(inst_37857);
var state_37872__$1 = state_37872;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37872__$1,(16),inst_37858);
} else {
if((state_val_37873 === (6))){
var inst_37834 = (state_37872[(7)]);
var inst_37841 = (state_37872[(2)]);
var state_37872__$1 = (function (){var statearr_37882 = state_37872;
(statearr_37882[(11)] = inst_37841);

return statearr_37882;
})();
if(cljs.core.truth_(inst_37834)){
var statearr_37883_37914 = state_37872__$1;
(statearr_37883_37914[(1)] = (7));

} else {
var statearr_37884_37915 = state_37872__$1;
(statearr_37884_37915[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_37873 === (3))){
var inst_37870 = (state_37872[(2)]);
var state_37872__$1 = state_37872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37872__$1,inst_37870);
} else {
if((state_val_37873 === (12))){
var inst_37868 = (state_37872[(2)]);
var state_37872__$1 = state_37872;
var statearr_37885_37916 = state_37872__$1;
(statearr_37885_37916[(2)] = inst_37868);

(statearr_37885_37916[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_37873 === (2))){
var inst_37834 = (state_37872[(7)]);
var inst_37828 = (state_37872[(8)]);
var inst_37827 = (state_37872[(9)]);
var inst_37830 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37831 = [cljs.core.cst$kw$ajax,uid];
var inst_37832 = (new cljs.core.PersistentVector(null,2,(5),inst_37830,inst_37831,null));
var inst_37833 = (function (){var n = inst_37827;
var client_ids_satisfied = inst_37828;
return ((function (n,client_ids_satisfied,inst_37834,inst_37828,inst_37827,inst_37830,inst_37831,inst_37832,state_val_37873,c__34193__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m){
var ks_to_pull = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(client_ids_satisfied,cljs.core.keys(m));
if(cljs.core.empty_QMARK_(ks_to_pull)){
return taoensso.encore.swapped(m,null);
} else {
return taoensso.encore.swapped(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks_to_pull,n,client_ids_satisfied,inst_37834,inst_37828,inst_37827,inst_37830,inst_37831,inst_37832,state_val_37873,c__34193__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m__$1,k){
var vec__37886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37886,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37886,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_37834,inst_37828,inst_37827,inst_37830,inst_37831,inst_37832,state_val_37873,c__34193__auto__,ms_backoffs,client_ids_unsatisfied))
,m,ks_to_pull),cljs.core.select_keys(m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_37834,inst_37828,inst_37827,inst_37830,inst_37831,inst_37832,state_val_37873,c__34193__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_37834__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_37832,inst_37833);
var inst_37835 = (function (){var n = inst_37827;
var client_ids_satisfied = inst_37828;
var _QMARK_pulled = inst_37834__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_37834,inst_37828,inst_37827,inst_37830,inst_37831,inst_37832,inst_37833,inst_37834__$1,state_val_37873,c__34193__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (x){
var or__6383__auto__ = (x == null);
if(or__6383__auto__){
return or__6383__auto__;
} else {
return taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_).call(null,x);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_37834,inst_37828,inst_37827,inst_37830,inst_37831,inst_37832,inst_37833,inst_37834__$1,state_val_37873,c__34193__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_37836 = (inst_37835.cljs$core$IFn$_invoke$arity$1 ? inst_37835.cljs$core$IFn$_invoke$arity$1(inst_37834__$1) : inst_37835.call(null,inst_37834__$1));
var state_37872__$1 = (function (){var statearr_37889 = state_37872;
(statearr_37889[(7)] = inst_37834__$1);

return statearr_37889;
})();
if(cljs.core.truth_(inst_37836)){
var statearr_37890_37917 = state_37872__$1;
(statearr_37890_37917[(1)] = (4));

} else {
var statearr_37891_37918 = state_37872__$1;
(statearr_37891_37918[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_37873 === (11))){
var state_37872__$1 = state_37872;
var statearr_37892_37919 = state_37872__$1;
(statearr_37892_37919[(2)] = null);

(statearr_37892_37919[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_37873 === (9))){
var inst_37851 = (state_37872[(10)]);
var inst_37828 = (state_37872[(8)]);
var inst_37827 = (state_37872[(9)]);
var inst_37849 = (state_37872[(2)]);
var inst_37850 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_37828,inst_37849);
var inst_37851__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms_backoffs,inst_37827);
var state_37872__$1 = (function (){var statearr_37893 = state_37872;
(statearr_37893[(10)] = inst_37851__$1);

(statearr_37893[(12)] = inst_37850);

return statearr_37893;
})();
if(cljs.core.truth_(inst_37851__$1)){
var statearr_37894_37920 = state_37872__$1;
(statearr_37894_37920[(1)] = (10));

} else {
var statearr_37895_37921 = state_37872__$1;
(statearr_37895_37921[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_37873 === (5))){
var inst_37834 = (state_37872[(7)]);
var inst_37839 = taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",null,"([:or nil? map?] ?pulled)",inst_37834,null,null);
var state_37872__$1 = state_37872;
var statearr_37896_37922 = state_37872__$1;
(statearr_37896_37922[(2)] = inst_37839);

(statearr_37896_37922[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_37873 === (14))){
var state_37872__$1 = state_37872;
var statearr_37897_37923 = state_37872__$1;
(statearr_37897_37923[(2)] = null);

(statearr_37897_37923[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_37873 === (16))){
var inst_37850 = (state_37872[(12)]);
var inst_37827 = (state_37872[(9)]);
var inst_37860 = (state_37872[(2)]);
var inst_37861 = (inst_37827 + (1));
var inst_37827__$1 = inst_37861;
var inst_37828 = inst_37850;
var state_37872__$1 = (function (){var statearr_37898 = state_37872;
(statearr_37898[(13)] = inst_37860);

(statearr_37898[(8)] = inst_37828);

(statearr_37898[(9)] = inst_37827__$1);

return statearr_37898;
})();
var statearr_37899_37924 = state_37872__$1;
(statearr_37899_37924[(2)] = null);

(statearr_37899_37924[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_37873 === (10))){
var inst_37850 = (state_37872[(12)]);
var inst_37853 = cljs.core.complement(inst_37850);
var inst_37854 = taoensso.encore.rsome(inst_37853,client_ids_unsatisfied);
var state_37872__$1 = state_37872;
if(cljs.core.truth_(inst_37854)){
var statearr_37900_37925 = state_37872__$1;
(statearr_37900_37925[(1)] = (13));

} else {
var statearr_37901_37926 = state_37872__$1;
(statearr_37901_37926[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_37873 === (8))){
var state_37872__$1 = state_37872;
var statearr_37902_37927 = state_37872__$1;
(statearr_37902_37927[(2)] = null);

(statearr_37902_37927[(1)] = (9));


return cljs.core.cst$kw$recur;
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
});})(c__34193__auto__,ms_backoffs,client_ids_unsatisfied))
;
return ((function (switch__34069__auto__,c__34193__auto__,ms_backoffs,client_ids_unsatisfied){
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__34070__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__34070__auto____0 = (function (){
var statearr_37906 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37906[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__34070__auto__);

(statearr_37906[(1)] = (1));

return statearr_37906;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__34070__auto____1 = (function (state_37872){
while(true){
var ret_value__34071__auto__ = (function (){try{while(true){
var result__34072__auto__ = switch__34069__auto__(state_37872);
if(cljs.core.keyword_identical_QMARK_(result__34072__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34072__auto__;
}
break;
}
}catch (e37907){if((e37907 instanceof Object)){
var ex__34073__auto__ = e37907;
var statearr_37908_37928 = state_37872;
(statearr_37908_37928[(5)] = ex__34073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37872);

return cljs.core.cst$kw$recur;
} else {
throw e37907;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34071__auto__,cljs.core.cst$kw$recur)){
var G__37929 = state_37872;
state_37872 = G__37929;
continue;
} else {
return ret_value__34071__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__34070__auto__ = function(state_37872){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__34070__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__34070__auto____1.call(this,state_37872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__34070__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__34070__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__34070__auto__;
})()
;})(switch__34069__auto__,c__34193__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var state__34195__auto__ = (function (){var statearr_37909 = (f__34194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34194__auto__.cljs$core$IFn$_invoke$arity$0() : f__34194__auto__.call(null));
(statearr_37909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34193__auto__);

return statearr_37909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34195__auto__);
});})(c__34193__auto__,ms_backoffs,client_ids_unsatisfied))
);

return c__34193__auto__;
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
var x__7046__auto__ = (((chsk == null))?null:chsk);
var m__7047__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__7046__auto__)]);
if(!((m__7047__auto__ == null))){
return (m__7047__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7047__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__7047__auto__.call(null,chsk));
} else {
var m__7047__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__7047__auto____$1 == null))){
return (m__7047__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7047__auto____$1.cljs$core$IFn$_invoke$arity$1(chsk) : m__7047__auto____$1.call(null,chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-connect!",chsk);
}
}
}
});

taoensso.sente._chsk_disconnect_BANG_ = (function taoensso$sente$_chsk_disconnect_BANG_(chsk,reason){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(chsk,reason);
} else {
var x__7046__auto__ = (((chsk == null))?null:chsk);
var m__7047__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__7046__auto__)]);
if(!((m__7047__auto__ == null))){
return (m__7047__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7047__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__7047__auto__.call(null,chsk,reason));
} else {
var m__7047__auto____$1 = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if(!((m__7047__auto____$1 == null))){
return (m__7047__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7047__auto____$1.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__7047__auto____$1.call(null,chsk,reason));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-disconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_reconnect_BANG_ = (function taoensso$sente$_chsk_reconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__7046__auto__ = (((chsk == null))?null:chsk);
var m__7047__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__7046__auto__)]);
if(!((m__7047__auto__ == null))){
return (m__7047__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7047__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__7047__auto__.call(null,chsk));
} else {
var m__7047__auto____$1 = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if(!((m__7047__auto____$1 == null))){
return (m__7047__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7047__auto____$1.cljs$core$IFn$_invoke$arity$1(chsk) : m__7047__auto____$1.call(null,chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-reconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
var x__7046__auto__ = (((chsk == null))?null:chsk);
var m__7047__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__7046__auto__)]);
if(!((m__7047__auto__ == null))){
return (m__7047__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7047__auto__.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__7047__auto__.call(null,chsk,ev,opts));
} else {
var m__7047__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__7047__auto____$1 == null))){
return (m__7047__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7047__auto____$1.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__7047__auto____$1.call(null,chsk,ev,opts));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-send!",chsk);
}
}
}
});

taoensso.sente.chsk_connect_BANG_ = (function taoensso$sente$chsk_connect_BANG_(chsk){
return taoensso.sente._chsk_connect_BANG_(chsk);
});

taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_(chsk,cljs.core.cst$kw$requested_DASH_disconnect);
});

/**
 * Useful for reauthenticating after login/logout, etc.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
return taoensso.sente._chsk_reconnect_BANG_(chsk);
});

/**
 * Deprecated
 */
taoensso.sente.chsk_destroy_BANG_ = taoensso.sente.chsk_disconnect_BANG_;
/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var args37930 = [];
var len__7454__auto___37933 = arguments.length;
var i__7455__auto___37934 = (0);
while(true){
if((i__7455__auto___37934 < len__7454__auto___37933)){
args37930.push((arguments[i__7455__auto___37934]));

var G__37935 = (i__7455__auto___37934 + (1));
i__7455__auto___37934 = G__37935;
continue;
} else {
}
break;
}

var G__37932 = args37930.length;
switch (G__37932) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37930.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$timeout_DASH_ms,_QMARK_timeout_ms,cljs.core.cst$kw$cb,_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",783,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$cb,cljs.core.boolean$(cljs.core.cst$kw$cb.cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,-766427054);

return taoensso.sente._chsk_send_BANG_(chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",788,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,891866073);

if(cljs.core.truth_(_QMARK_cb_fn)){
var G__37938_37939 = cljs.core.cst$kw$chsk_SLASH_closed;
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__37938_37939) : _QMARK_cb_fn.call(null,G__37938_37939));
} else {
}

return false;
});
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event(x);

if((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null))) || (taoensso.encore.nat_int_QMARK_(_QMARK_timeout_ms))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("cb requires a timeout; timeout-ms should be a +ive integer: "),cljs.core.str(_QMARK_timeout_ms)].join('')),cljs.core.str("\n"),cljs.core.str("(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nat-int? ?timeout-ms)))")].join('')));
}

if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_(_QMARK_cb)) || (taoensso.encore.chan_QMARK_(_QMARK_cb))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("cb should be nil, an ifn, or a channel: "),cljs.core.str(cljs.core.type(_QMARK_cb))].join('')),cljs.core.str("\n"),cljs.core.str("(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))")].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__4657__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto__)){
var cb_uuid = temp__4657__auto__;
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__4657__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped(cljs.core.cst$kw$swap_SLASH_dissoc,_QMARK_f);
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
var vec__37943 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_state) : f.call(null,old_state));
var new_state__$1 = (cljs.core.truth_(cljs.core.cst$kw$first_DASH_open_QMARK_.cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,cljs.core.cst$kw$first_DASH_open_QMARK_,false):new_state);
var new_state__$2 = (cljs.core.truth_(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_state__$1,cljs.core.cst$kw$udt_DASH_next_DASH_reconnect):new_state__$1);
return taoensso.encore.swapped(new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37943,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37943,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chs,cljs.core.cst$kw$state], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_state,output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_37952 = (function (){try{if(cljs.core.map_QMARK_(state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e37949){if((e37949 instanceof Error)){
var e = e37949;
return e;
} else {
throw e37949;

}
}})();
if((e_37952 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",null,"(map? state)",state,e_37952,null);
}

var e_37953 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__37951 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$requested_DASH_disconnect,null,cljs.core.cst$kw$downgrading_DASH_ws_DASH_to_DASH_ajax,null,cljs.core.cst$kw$unexpected,null,cljs.core.cst$kw$requested_DASH_reconnect,null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__37951) : taoensso.truss.impl.set_STAR_.call(null,G__37951));
})(),x);
}).call(null,reason)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e37950){if((e37950 instanceof Error)){
var e = e37950;
return e;
} else {
throw e37950;

}
}})();
if((e_37953 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",null,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_37953,null);
}

if(cljs.core.truth_((function (){var or__6383__auto__ = cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(reason,cljs.core.cst$kw$unexpected);
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$udt_DASH_next_DASH_reconnect),cljs.core.cst$kw$open_QMARK_,false,cljs.core.array_seq([cljs.core.cst$kw$last_DASH_close,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$reason,reason], null)], 0));
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
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_(_QMARK_cb))){
return _QMARK_cb;
} else {
var e_37962 = (function (){try{if(taoensso.encore.chan_QMARK_(_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e37958){if((e37958 instanceof Error)){
var e = e37958;
return e;
} else {
throw e37958;

}
}})();
if((e_37962 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",null,"(enc/chan? ?cb)",_QMARK_cb,e_37962,null);
}

taoensso.sente.assert_event(ev);

var vec__37959 = ev;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37959,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37959,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__37959,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str(taoensso.encore.as_qname(ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__37959,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",868,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,1676078904);

var buffered_evs = ((cljs.core.vector_QMARK_(clj))?clj:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",null,"(vector? clj)",clj,null,null));
var seq__37973 = cljs.core.seq(buffered_evs);
var chunk__37974 = null;
var count__37975 = (0);
var i__37976 = (0);
while(true){
if((i__37976 < count__37975)){
var ev = chunk__37974.cljs$core$IIndexed$_nth$arity$2(null,i__37976);
taoensso.sente.assert_event(ev);

var vec__37977_37983 = ev;
var id_37984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37977_37983,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_37984),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__37985 = seq__37973;
var G__37986 = chunk__37974;
var G__37987 = count__37975;
var G__37988 = (i__37976 + (1));
seq__37973 = G__37985;
chunk__37974 = G__37986;
count__37975 = G__37987;
i__37976 = G__37988;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__37973);
if(temp__4657__auto__){
var seq__37973__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37973__$1)){
var c__7194__auto__ = cljs.core.chunk_first(seq__37973__$1);
var G__37989 = cljs.core.chunk_rest(seq__37973__$1);
var G__37990 = c__7194__auto__;
var G__37991 = cljs.core.count(c__7194__auto__);
var G__37992 = (0);
seq__37973 = G__37989;
chunk__37974 = G__37990;
count__37975 = G__37991;
i__37976 = G__37992;
continue;
} else {
var ev = cljs.core.first(seq__37973__$1);
taoensso.sente.assert_event(ev);

var vec__37980_37993 = ev;
var id_37994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37980_37993,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_37994),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__37995 = cljs.core.next(seq__37973__$1);
var G__37996 = null;
var G__37997 = (0);
var G__37998 = (0);
seq__37973 = G__37995;
chunk__37974 = G__37996;
count__37975 = G__37997;
i__37976 = G__37998;
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
var and__6371__auto__ = cljs.core.vector_QMARK_(x);
if(and__6371__auto__){
var vec__38008 = x;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38008,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,cljs.core.cst$kw$chsk_SLASH_handshake);
} else {
return and__6371__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_38034 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__38024 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws,null,cljs.core.cst$kw$ajax,null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__38024) : taoensso.truss.impl.set_STAR_.call(null,G__38024));
})(),x);
}).call(null,chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e38023){if((e38023 instanceof Error)){
var e = e38023;
return e;
} else {
throw e38023;

}
}})();
if((e_38034 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",null,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_38034,null);
}

var e_38035 = (function (){try{if(cljs.core.truth_(taoensso.sente.handshake_QMARK_(clj))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e38025){if((e38025 instanceof Error)){
var e = e38025;
return e;
} else {
throw e38025;

}
}})();
if((e_38035 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",null,"(handshake? clj)",clj,e_38035,null);
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",885,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,-236273239);

var vec__38026 = clj;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38026,(0),null);
var vec__38029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38026,(1),null);
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38029,(0),null);
var _QMARK_csrf_token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38029,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38029,(2),null);
var map__38032 = chsk;
var map__38032__$1 = ((((!((map__38032 == null)))?((((map__38032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38032):map__38032);
var chs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38032__$1,cljs.core.cst$kw$chs);
var ever_opened_QMARK__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38032__$1,cljs.core.cst$kw$ever_DASH_opened_QMARK__);
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_(ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,chsk_type,cljs.core.cst$kw$open_QMARK_,true,cljs.core.cst$kw$ever_DASH_opened_QMARK_,true,cljs.core.cst$kw$uid,_QMARK_uid,cljs.core.cst$kw$csrf_DASH_token,_QMARK_csrf_token,cljs.core.cst$kw$handshake_DASH_data,_QMARK_handshake_data,cljs.core.cst$kw$first_DASH_open_QMARK_,first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_handshake,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event(handshake_ev);

if(clojure.string.blank_QMARK_(_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",904,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__38026,_,vec__38029,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__38032,map__38032__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__38026,_,vec__38029,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__38032,map__38032__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
,null)),null,1987458383);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk,((function (vec__38026,_,vec__38029,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__38032,map__38032__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (p1__38011_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__38011_SHARP_,new_state], 0));
});})(vec__38026,_,vec__38029,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__38032,map__38032__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
);

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$internal.cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return cljs.core.cst$kw$handled;
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
if(cljs.core.truth_((function (){var and__6371__auto__ = taoensso.sente.node_target_QMARK_;
if(cljs.core.truth_(and__6371__auto__)){
return typeof require !== 'undefined';
} else {
return and__6371__auto__;
}
})())){
try{return require("websocket");
}catch (e38036){var e = e38036;
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
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7005__auto__,k__7006__auto__){
var self__ = this;
var this__7005__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7005__auto____$1,k__7006__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7007__auto__,k38043,else__7008__auto__){
var self__ = this;
var this__7007__auto____$1 = this;
var G__38045 = (((k38043 instanceof cljs.core.Keyword))?k38043.fqn:null);
switch (G__38045) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38043,else__7008__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7019__auto__,writer__7020__auto__,opts__7021__auto__){
var self__ = this;
var this__7019__auto____$1 = this;
var pr_pair__7022__auto__ = ((function (this__7019__auto____$1){
return (function (keyval__7023__auto__){
return cljs.core.pr_sequential_writer(writer__7020__auto__,cljs.core.pr_writer,""," ","",opts__7021__auto__,keyval__7023__auto__);
});})(this__7019__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7020__auto__,pr_pair__7022__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__7021__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$client_DASH_id,self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$chs,self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$packer,self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$instance_DASH_handle_,self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$retry_DASH_count_,self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ever_DASH_opened_QMARK__,self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$cbs_DASH_waiting_,self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$socket_,self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$udt_DASH_last_DASH_comms_,self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38042){
var self__ = this;
var G__38042__$1 = this;
return (new cljs.core.RecordIter((0),G__38042__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$client_DASH_id,cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$retry_DASH_count_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$cbs_DASH_waiting_,cljs.core.cst$kw$socket_,cljs.core.cst$kw$udt_DASH_last_DASH_comms_], null),cljs.core._iterator(self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7003__auto__){
var self__ = this;
var this__7003__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6999__auto__){
var self__ = this;
var this__6999__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7009__auto__){
var self__ = this;
var this__7009__auto____$1 = this;
return (14 + cljs.core.count(self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7000__auto__){
var self__ = this;
var this__7000__auto____$1 = this;
var h__6818__auto__ = self__.__hash;
if(!((h__6818__auto__ == null))){
return h__6818__auto__;
} else {
var h__6818__auto____$1 = cljs.core.hash_imap(this__7000__auto____$1);
self__.__hash = h__6818__auto____$1;

return h__6818__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7001__auto__,other__7002__auto__){
var self__ = this;
var this__7001__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6371__auto__ = other__7002__auto__;
if(cljs.core.truth_(and__6371__auto__)){
var and__6371__auto____$1 = (this__7001__auto____$1.constructor === other__7002__auto__.constructor);
if(and__6371__auto____$1){
return cljs.core.equiv_map(this__7001__auto____$1,other__7002__auto__);
} else {
return and__6371__auto____$1;
}
} else {
return and__6371__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7014__auto__,k__7015__auto__){
var self__ = this;
var this__7014__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,null,cljs.core.cst$kw$ever_DASH_opened_QMARK__,null,cljs.core.cst$kw$client_DASH_id,null,cljs.core.cst$kw$packer,null,cljs.core.cst$kw$chs,null,cljs.core.cst$kw$udt_DASH_last_DASH_comms_,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$retry_DASH_count_,null,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,null,cljs.core.cst$kw$socket_,null,cljs.core.cst$kw$url,null,cljs.core.cst$kw$instance_DASH_handle_,null,cljs.core.cst$kw$cbs_DASH_waiting_,null,cljs.core.cst$kw$state_,null], null), null),k__7015__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7014__auto____$1),self__.__meta),k__7015__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7015__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7012__auto__,k__7013__auto__,G__38042){
var self__ = this;
var this__7012__auto____$1 = this;
var pred__38046 = cljs.core.keyword_identical_QMARK_;
var expr__38047 = k__7013__auto__;
if(cljs.core.truth_((function (){var G__38049 = cljs.core.cst$kw$client_DASH_id;
var G__38050 = expr__38047;
return (pred__38046.cljs$core$IFn$_invoke$arity$2 ? pred__38046.cljs$core$IFn$_invoke$arity$2(G__38049,G__38050) : pred__38046.call(null,G__38049,G__38050));
})())){
return (new taoensso.sente.ChWebSocket(G__38042,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38051 = cljs.core.cst$kw$chs;
var G__38052 = expr__38047;
return (pred__38046.cljs$core$IFn$_invoke$arity$2 ? pred__38046.cljs$core$IFn$_invoke$arity$2(G__38051,G__38052) : pred__38046.call(null,G__38051,G__38052));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__38042,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38053 = cljs.core.cst$kw$params;
var G__38054 = expr__38047;
return (pred__38046.cljs$core$IFn$_invoke$arity$2 ? pred__38046.cljs$core$IFn$_invoke$arity$2(G__38053,G__38054) : pred__38046.call(null,G__38053,G__38054));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__38042,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38055 = cljs.core.cst$kw$packer;
var G__38056 = expr__38047;
return (pred__38046.cljs$core$IFn$_invoke$arity$2 ? pred__38046.cljs$core$IFn$_invoke$arity$2(G__38055,G__38056) : pred__38046.call(null,G__38055,G__38056));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__38042,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38057 = cljs.core.cst$kw$url;
var G__38058 = expr__38047;
return (pred__38046.cljs$core$IFn$_invoke$arity$2 ? pred__38046.cljs$core$IFn$_invoke$arity$2(G__38057,G__38058) : pred__38046.call(null,G__38057,G__38058));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__38042,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38059 = cljs.core.cst$kw$ws_DASH_kalive_DASH_ms;
var G__38060 = expr__38047;
return (pred__38046.cljs$core$IFn$_invoke$arity$2 ? pred__38046.cljs$core$IFn$_invoke$arity$2(G__38059,G__38060) : pred__38046.call(null,G__38059,G__38060));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__38042,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38061 = cljs.core.cst$kw$state_;
var G__38062 = expr__38047;
return (pred__38046.cljs$core$IFn$_invoke$arity$2 ? pred__38046.cljs$core$IFn$_invoke$arity$2(G__38061,G__38062) : pred__38046.call(null,G__38061,G__38062));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,G__38042,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38063 = cljs.core.cst$kw$instance_DASH_handle_;
var G__38064 = expr__38047;
return (pred__38046.cljs$core$IFn$_invoke$arity$2 ? pred__38046.cljs$core$IFn$_invoke$arity$2(G__38063,G__38064) : pred__38046.call(null,G__38063,G__38064));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__38042,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38065 = cljs.core.cst$kw$retry_DASH_count_;
var G__38066 = expr__38047;
return (pred__38046.cljs$core$IFn$_invoke$arity$2 ? pred__38046.cljs$core$IFn$_invoke$arity$2(G__38065,G__38066) : pred__38046.call(null,G__38065,G__38066));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__38042,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38067 = cljs.core.cst$kw$ever_DASH_opened_QMARK__;
var G__38068 = expr__38047;
return (pred__38046.cljs$core$IFn$_invoke$arity$2 ? pred__38046.cljs$core$IFn$_invoke$arity$2(G__38067,G__38068) : pred__38046.call(null,G__38067,G__38068));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__38042,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38069 = cljs.core.cst$kw$backoff_DASH_ms_DASH_fn;
var G__38070 = expr__38047;
return (pred__38046.cljs$core$IFn$_invoke$arity$2 ? pred__38046.cljs$core$IFn$_invoke$arity$2(G__38069,G__38070) : pred__38046.call(null,G__38069,G__38070));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__38042,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38071 = cljs.core.cst$kw$cbs_DASH_waiting_;
var G__38072 = expr__38047;
return (pred__38046.cljs$core$IFn$_invoke$arity$2 ? pred__38046.cljs$core$IFn$_invoke$arity$2(G__38071,G__38072) : pred__38046.call(null,G__38071,G__38072));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__38042,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38073 = cljs.core.cst$kw$socket_;
var G__38074 = expr__38047;
return (pred__38046.cljs$core$IFn$_invoke$arity$2 ? pred__38046.cljs$core$IFn$_invoke$arity$2(G__38073,G__38074) : pred__38046.call(null,G__38073,G__38074));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__38042,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38075 = cljs.core.cst$kw$udt_DASH_last_DASH_comms_;
var G__38076 = expr__38047;
return (pred__38046.cljs$core$IFn$_invoke$arity$2 ? pred__38046.cljs$core$IFn$_invoke$arity$2(G__38075,G__38076) : pred__38046.call(null,G__38075,G__38076));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__38042,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7013__auto__,G__38042),null));
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

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7017__auto__){
var self__ = this;
var this__7017__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$client_DASH_id,self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$chs,self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$packer,self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$instance_DASH_handle_,self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$retry_DASH_count_,self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ever_DASH_opened_QMARK__,self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$cbs_DASH_waiting_,self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$socket_,self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$udt_DASH_last_DASH_comms_,self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7004__auto__,G__38042){
var self__ = this;
var this__7004__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__38042,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7010__auto__,entry__7011__auto__){
var self__ = this;
var this__7010__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7011__auto__)){
return cljs.core._assoc(this__7010__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7011__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7011__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7010__auto____$1,entry__7011__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.instance_handle_,null) : cljs.core.reset_BANG_.call(null,self__.instance_handle_,null));

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (chsk__$1){
return (function (p1__38037_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__38037_SHARP_,reason);
});})(chsk__$1))
);

var temp__4657__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.socket_) : cljs.core.deref.call(null,self__.socket_));
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
taoensso.sente._chsk_disconnect_BANG_(chsk__$1,cljs.core.cst$kw$requested_DASH_reconnect);

return taoensso.sente._chsk_connect_BANG_(chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__38077 = opts;
var map__38077__$1 = ((((!((map__38077 == null)))?((((map__38077.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38077.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38077):map__38077);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38077__$1,cljs.core.cst$kw$timeout_DASH_ms);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38077__$1,cljs.core.cst$kw$cb);
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38077__$1,cljs.core.cst$kw$flush_QMARK_);
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state_) : cljs.core.deref.call(null,self__.state_))))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6)):null);
var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4(self__.packer,cljs.core.meta(ev),ev,_QMARK_cb_uuid);
var temp__4657__auto___38182 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___38182)){
var cb_uuid_38183 = temp__4657__auto___38182;
taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_38183], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e38079){if((e38079 instanceof Error)){
var e = e38079;
return e;
} else {
throw e38079;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",null,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__4657__auto___38184__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4657__auto___38184__$1)){
var timeout_ms_38185 = temp__4657__auto___38184__$1;
var c__34193__auto___38186 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34193__auto___38186,timeout_ms_38185,temp__4657__auto___38184__$1,cb_uuid_38183,temp__4657__auto___38182,_QMARK_cb_uuid,ppstr,map__38077,map__38077__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
var f__34194__auto__ = (function (){var switch__34069__auto__ = ((function (c__34193__auto___38186,timeout_ms_38185,temp__4657__auto___38184__$1,cb_uuid_38183,temp__4657__auto___38182,_QMARK_cb_uuid,ppstr,map__38077,map__38077__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (state_38090){
var state_val_38091 = (state_38090[(1)]);
if((state_val_38091 === (1))){
var inst_38080 = cljs.core.async.timeout(timeout_ms_38185);
var state_38090__$1 = state_38090;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38090__$1,(2),inst_38080);
} else {
if((state_val_38091 === (2))){
var inst_38083 = (state_38090[(7)]);
var inst_38082 = (state_38090[(2)]);
var inst_38083__$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,_QMARK_cb_uuid);
var state_38090__$1 = (function (){var statearr_38092 = state_38090;
(statearr_38092[(7)] = inst_38083__$1);

(statearr_38092[(8)] = inst_38082);

return statearr_38092;
})();
if(cljs.core.truth_(inst_38083__$1)){
var statearr_38093_38187 = state_38090__$1;
(statearr_38093_38187[(1)] = (3));

} else {
var statearr_38094_38188 = state_38090__$1;
(statearr_38094_38188[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_38091 === (3))){
var inst_38083 = (state_38090[(7)]);
var inst_38085 = (function (){var G__38095 = cljs.core.cst$kw$chsk_SLASH_timeout;
return (inst_38083.cljs$core$IFn$_invoke$arity$1 ? inst_38083.cljs$core$IFn$_invoke$arity$1(G__38095) : inst_38083.call(null,G__38095));
})();
var state_38090__$1 = state_38090;
var statearr_38096_38189 = state_38090__$1;
(statearr_38096_38189[(2)] = inst_38085);

(statearr_38096_38189[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38091 === (4))){
var state_38090__$1 = state_38090;
var statearr_38097_38190 = state_38090__$1;
(statearr_38097_38190[(2)] = null);

(statearr_38097_38190[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38091 === (5))){
var inst_38088 = (state_38090[(2)]);
var state_38090__$1 = state_38090;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38090__$1,inst_38088);
} else {
return null;
}
}
}
}
}
});})(c__34193__auto___38186,timeout_ms_38185,temp__4657__auto___38184__$1,cb_uuid_38183,temp__4657__auto___38182,_QMARK_cb_uuid,ppstr,map__38077,map__38077__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
return ((function (switch__34069__auto__,c__34193__auto___38186,timeout_ms_38185,temp__4657__auto___38184__$1,cb_uuid_38183,temp__4657__auto___38182,_QMARK_cb_uuid,ppstr,map__38077,map__38077__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function() {
var taoensso$sente$state_machine__34070__auto__ = null;
var taoensso$sente$state_machine__34070__auto____0 = (function (){
var statearr_38101 = [null,null,null,null,null,null,null,null,null];
(statearr_38101[(0)] = taoensso$sente$state_machine__34070__auto__);

(statearr_38101[(1)] = (1));

return statearr_38101;
});
var taoensso$sente$state_machine__34070__auto____1 = (function (state_38090){
while(true){
var ret_value__34071__auto__ = (function (){try{while(true){
var result__34072__auto__ = switch__34069__auto__(state_38090);
if(cljs.core.keyword_identical_QMARK_(result__34072__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34072__auto__;
}
break;
}
}catch (e38102){if((e38102 instanceof Object)){
var ex__34073__auto__ = e38102;
var statearr_38103_38191 = state_38090;
(statearr_38103_38191[(5)] = ex__34073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38090);

return cljs.core.cst$kw$recur;
} else {
throw e38102;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34071__auto__,cljs.core.cst$kw$recur)){
var G__38192 = state_38090;
state_38090 = G__38192;
continue;
} else {
return ret_value__34071__auto__;
}
break;
}
});
taoensso$sente$state_machine__34070__auto__ = function(state_38090){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__34070__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__34070__auto____1.call(this,state_38090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__34070__auto____0;
taoensso$sente$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__34070__auto____1;
return taoensso$sente$state_machine__34070__auto__;
})()
;})(switch__34069__auto__,c__34193__auto___38186,timeout_ms_38185,temp__4657__auto___38184__$1,cb_uuid_38183,temp__4657__auto___38182,_QMARK_cb_uuid,ppstr,map__38077,map__38077__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
})();
var state__34195__auto__ = (function (){var statearr_38104 = (f__34194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34194__auto__.cljs$core$IFn$_invoke$arity$0() : f__34194__auto__.call(null));
(statearr_38104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34193__auto___38186);

return statearr_38104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34195__auto__);
});})(c__34193__auto___38186,timeout_ms_38185,temp__4657__auto___38184__$1,cb_uuid_38183,temp__4657__auto___38182,_QMARK_cb_uuid,ppstr,map__38077,map__38077__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

} else {
}
} else {
}

try{(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.socket_) : cljs.core.deref.call(null,self__.socket_)).send(ppstr);

var G__38108_38193 = self__.udt_last_comms_;
var G__38109_38194 = taoensso.encore.now_udt();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__38108_38193,G__38109_38194) : cljs.core.reset_BANG_.call(null,G__38108_38193,G__38109_38194));

return cljs.core.cst$kw$apparent_DASH_success;
}catch (e38105){var e = e38105;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",986,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,map__38077,map__38077__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,map__38077,map__38077__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,-1994086967);

var temp__4657__auto___38195 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___38195)){
var cb_uuid_38196 = temp__4657__auto___38195;
var cb_fn_STAR__38197 = (function (){var or__6383__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid_38196);
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
var e__$1 = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e38106){if((e38106 instanceof Error)){
var e__$1 = e38106;
return e__$1;
} else {
throw e38106;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",null,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
var G__38107_38198 = cljs.core.cst$kw$chsk_SLASH_error;
(cb_fn_STAR__38197.cljs$core$IFn$_invoke$arity$1 ? cb_fn_STAR__38197.cljs$core$IFn$_invoke$arity$1(G__38107_38198) : cb_fn_STAR__38197.call(null,G__38107_38198));
} else {
}

return false;
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = (function (){var or__6383__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(goog.global,"WebSocket");
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
var or__6383__auto____$1 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(goog.global,"MozWebSocket");
if(cljs.core.truth_(or__6383__auto____$1)){
return or__6383__auto____$1;
} else {
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(taoensso.sente._QMARK_node_npm_websocket_) : cljs.core.deref.call(null,taoensso.sente._QMARK_node_npm_websocket_)),"w3cwebsocket");
}
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var WebSocket = temp__4657__auto__;
var instance_handle = (function (){var G__38110 = self__.instance_handle_;
var G__38111 = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__38110,G__38111) : cljs.core.reset_BANG_.call(null,G__38110,G__38111));
})();
var have_handle_QMARK_ = ((function (instance_handle,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.instance_handle_) : cljs.core.deref.call(null,self__.instance_handle_)),instance_handle);
});})(instance_handle,WebSocket,temp__4657__auto__,chsk__$1))
;
var connect_fn = ((function (instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function taoensso$sente$connect_fn(){
if(cljs.core.truth_(have_handle_QMARK_())){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_())){
var retry_count_STAR_ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.retry_count_,cljs.core.inc);
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",1011,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-794321412);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__38038_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38038_SHARP_,cljs.core.cst$kw$udt_DASH_next_DASH_reconnect,udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string(self__.url,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$client_DASH_id,self__.client_id], null)], 0)))));
}catch (e38122){var e = e38122;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",1025,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket error"], null);
});})(e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,1843052408);

return null;
}})();
if(cljs.core.not(_QMARK_socket)){
return retry_fn();
} else {
var G__38123 = self__.socket_;
var G__38124 = (function (){var G__38125 = _QMARK_socket;
(G__38125["onerror"] = ((function (G__38125,G__38123,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",1035,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (G__38125,G__38123,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(ws_ev);
}catch (e38126){var _ = e38126;
return ws_ev;
}})()], null);
});})(G__38125,G__38123,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,514422560);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$ev,ws_ev], null);
return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (last_ws_error,G__38125,G__38123,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__38039_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38039_SHARP_,cljs.core.cst$kw$last_DASH_ws_DASH_error,last_ws_error);
});})(last_ws_error,G__38125,G__38123,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
});})(G__38125,G__38123,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__38125["onmessage"] = ((function (G__38125,G__38123,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"data");
var vec__38127 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38127,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38127,(1),null);
var G__38130_38199 = self__.udt_last_comms_;
var G__38131_38200 = taoensso.encore.now_udt();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__38130_38199,G__38131_38200) : cljs.core.reset_BANG_.call(null,G__38130_38199,G__38131_38200));

var or__6383__auto__ = (cljs.core.truth_(taoensso.sente.handshake_QMARK_(clj))?(function (){
taoensso.sente.receive_handshake_BANG_(cljs.core.cst$kw$ws,chsk__$1,clj);

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.retry_count_,(0)) : cljs.core.reset_BANG_.call(null,self__.retry_count_,(0)));

return cljs.core.cst$kw$handshake;
})()
:null);
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
var or__6383__auto____$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,cljs.core.cst$kw$chsk_SLASH_ws_DASH_ping))?(function (){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_ws_DASH_ping], null));

return cljs.core.cst$kw$noop;
})()
:null);
if(cljs.core.truth_(or__6383__auto____$1)){
return or__6383__auto____$1;
} else {
var temp__4655__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4655__auto__)){
var cb_uuid = temp__4655__auto__;
var temp__4655__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4655__auto____$1)){
var cb_fn = temp__4655__auto____$1;
return (cb_fn.cljs$core$IFn$_invoke$arity$1 ? cb_fn.cljs$core$IFn$_invoke$arity$1(clj) : cb_fn.call(null,clj));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",1071,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__6383__auto____$1,or__6383__auto__,ppstr,vec__38127,clj,_QMARK_cb_uuid,G__38125,G__38123,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__6383__auto____$1,or__6383__auto__,ppstr,vec__38127,clj,_QMARK_cb_uuid,G__38125,G__38123,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,317746406);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});})(G__38125,G__38123,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__38125["onclose"] = ((function (G__38125,G__38123,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"wasClean");
var code = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"code");
var reason = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$ev,ws_ev,cljs.core.cst$kw$clean_QMARK_,clean_QMARK_,cljs.core.cst$kw$code,code,cljs.core.cst$kw$reason,reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",1093,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (clean_QMARK_,code,reason,last_ws_close,G__38125,G__38123,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
});})(clean_QMARK_,code,reason,last_ws_close,G__38125,G__38123,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-2027621680);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__38125,G__38123,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__38040_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38040_SHARP_,cljs.core.cst$kw$last_DASH_ws_DASH_close,last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__38125,G__38123,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__38125,G__38123,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__38041_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(taoensso.sente.chsk_state__GT_closed(p1__38041_SHARP_,cljs.core.cst$kw$unexpected),cljs.core.cst$kw$last_DASH_ws_DASH_close,last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__38125,G__38123,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

return retry_fn();
}
});})(G__38125,G__38123,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

return G__38125;
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__38123,G__38124) : cljs.core.reset_BANG_.call(null,G__38123,G__38124));
}
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
;
var temp__4657__auto___38201__$1 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__4657__auto___38201__$1)){
var ms_38202 = temp__4657__auto___38201__$1;
var c__34193__auto___38203 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34193__auto___38203,ms_38202,temp__4657__auto___38201__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
var f__34194__auto__ = (function (){var switch__34069__auto__ = ((function (c__34193__auto___38203,ms_38202,temp__4657__auto___38201__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function (state_38159){
var state_val_38160 = (state_38159[(1)]);
if((state_val_38160 === (7))){
var inst_38155 = (state_38159[(2)]);
var state_38159__$1 = state_38159;
var statearr_38161_38204 = state_38159__$1;
(statearr_38161_38204[(2)] = inst_38155);

(statearr_38161_38204[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38160 === (1))){
var state_38159__$1 = state_38159;
var statearr_38162_38205 = state_38159__$1;
(statearr_38162_38205[(2)] = null);

(statearr_38162_38205[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38160 === (4))){
var inst_38136 = (state_38159[(2)]);
var inst_38137 = have_handle_QMARK_();
var state_38159__$1 = (function (){var statearr_38163 = state_38159;
(statearr_38163[(7)] = inst_38136);

return statearr_38163;
})();
if(cljs.core.truth_(inst_38137)){
var statearr_38164_38206 = state_38159__$1;
(statearr_38164_38206[(1)] = (5));

} else {
var statearr_38165_38207 = state_38159__$1;
(statearr_38165_38207[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_38160 === (6))){
var state_38159__$1 = state_38159;
var statearr_38166_38208 = state_38159__$1;
(statearr_38166_38208[(2)] = null);

(statearr_38166_38208[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38160 === (3))){
var inst_38157 = (state_38159[(2)]);
var state_38159__$1 = state_38159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38159__$1,inst_38157);
} else {
if((state_val_38160 === (2))){
var inst_38133 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.udt_last_comms_) : cljs.core.deref.call(null,self__.udt_last_comms_));
var inst_38134 = cljs.core.async.timeout(ms_38202);
var state_38159__$1 = (function (){var statearr_38167 = state_38159;
(statearr_38167[(8)] = inst_38133);

return statearr_38167;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38159__$1,(4),inst_38134);
} else {
if((state_val_38160 === (9))){
var state_38159__$1 = state_38159;
var statearr_38168_38209 = state_38159__$1;
(statearr_38168_38209[(2)] = null);

(statearr_38168_38209[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38160 === (5))){
var inst_38133 = (state_38159[(8)]);
var inst_38139 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.udt_last_comms_) : cljs.core.deref.call(null,self__.udt_last_comms_));
var inst_38140 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38133,inst_38139);
var state_38159__$1 = state_38159;
if(inst_38140){
var statearr_38169_38210 = state_38159__$1;
(statearr_38169_38210[(1)] = (8));

} else {
var statearr_38170_38211 = state_38159__$1;
(statearr_38170_38211[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_38160 === (10))){
var inst_38151 = (state_38159[(2)]);
var state_38159__$1 = (function (){var statearr_38171 = state_38159;
(statearr_38171[(9)] = inst_38151);

return statearr_38171;
})();
var statearr_38172_38212 = state_38159__$1;
(statearr_38172_38212[(2)] = null);

(statearr_38172_38212[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38160 === (8))){
var inst_38142 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38143 = [cljs.core.cst$kw$chsk_SLASH_ws_DASH_ping];
var inst_38144 = (new cljs.core.PersistentVector(null,1,(5),inst_38142,inst_38143,null));
var inst_38145 = [cljs.core.cst$kw$flush_QMARK_];
var inst_38146 = [true];
var inst_38147 = cljs.core.PersistentHashMap.fromArrays(inst_38145,inst_38146);
var inst_38148 = taoensso.sente._chsk_send_BANG_(chsk__$1,inst_38144,inst_38147);
var state_38159__$1 = state_38159;
var statearr_38173_38213 = state_38159__$1;
(statearr_38173_38213[(2)] = inst_38148);

(statearr_38173_38213[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__34193__auto___38203,ms_38202,temp__4657__auto___38201__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
;
return ((function (switch__34069__auto__,c__34193__auto___38203,ms_38202,temp__4657__auto___38201__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function() {
var taoensso$sente$state_machine__34070__auto__ = null;
var taoensso$sente$state_machine__34070__auto____0 = (function (){
var statearr_38177 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38177[(0)] = taoensso$sente$state_machine__34070__auto__);

(statearr_38177[(1)] = (1));

return statearr_38177;
});
var taoensso$sente$state_machine__34070__auto____1 = (function (state_38159){
while(true){
var ret_value__34071__auto__ = (function (){try{while(true){
var result__34072__auto__ = switch__34069__auto__(state_38159);
if(cljs.core.keyword_identical_QMARK_(result__34072__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34072__auto__;
}
break;
}
}catch (e38178){if((e38178 instanceof Object)){
var ex__34073__auto__ = e38178;
var statearr_38179_38214 = state_38159;
(statearr_38179_38214[(5)] = ex__34073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38159);

return cljs.core.cst$kw$recur;
} else {
throw e38178;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34071__auto__,cljs.core.cst$kw$recur)){
var G__38215 = state_38159;
state_38159 = G__38215;
continue;
} else {
return ret_value__34071__auto__;
}
break;
}
});
taoensso$sente$state_machine__34070__auto__ = function(state_38159){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__34070__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__34070__auto____1.call(this,state_38159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__34070__auto____0;
taoensso$sente$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__34070__auto____1;
return taoensso$sente$state_machine__34070__auto__;
})()
;})(switch__34069__auto__,c__34193__auto___38203,ms_38202,temp__4657__auto___38201__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
})();
var state__34195__auto__ = (function (){var statearr_38180 = (f__34194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34194__auto__.cljs$core$IFn$_invoke$arity$0() : f__34194__auto__.call(null));
(statearr_38180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34193__auto___38203);

return statearr_38180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34195__auto__);
});})(c__34193__auto___38203,ms_38202,temp__4657__auto___38201__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
);

} else {
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.retry_count_,(0)) : cljs.core.reset_BANG_.call(null,self__.retry_count_,(0)));

connect_fn();

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$client_DASH_id,cljs.core.cst$sym$chs,cljs.core.cst$sym$params,cljs.core.cst$sym$packer,cljs.core.cst$sym$url,cljs.core.cst$sym$ws_DASH_kalive_DASH_ms,cljs.core.cst$sym$state_,cljs.core.cst$sym$instance_DASH_handle_,cljs.core.cst$sym$retry_DASH_count_,cljs.core.cst$sym$ever_DASH_opened_QMARK__,cljs.core.cst$sym$backoff_DASH_ms_DASH_fn,cljs.core.cst$sym$cbs_DASH_waiting_,cljs.core.cst$sym$socket_,cljs.core.cst$sym$udt_DASH_last_DASH_comms_], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__7039__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__7039__auto__,writer__7040__auto__){
return cljs.core._write(writer__7040__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__38044){
return (new taoensso.sente.ChWebSocket(cljs.core.cst$kw$client_DASH_id.cljs$core$IFn$_invoke$arity$1(G__38044),cljs.core.cst$kw$chs.cljs$core$IFn$_invoke$arity$1(G__38044),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__38044),cljs.core.cst$kw$packer.cljs$core$IFn$_invoke$arity$1(G__38044),cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__38044),cljs.core.cst$kw$ws_DASH_kalive_DASH_ms.cljs$core$IFn$_invoke$arity$1(G__38044),cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(G__38044),cljs.core.cst$kw$instance_DASH_handle_.cljs$core$IFn$_invoke$arity$1(G__38044),cljs.core.cst$kw$retry_DASH_count_.cljs$core$IFn$_invoke$arity$1(G__38044),cljs.core.cst$kw$ever_DASH_opened_QMARK__.cljs$core$IFn$_invoke$arity$1(G__38044),cljs.core.cst$kw$backoff_DASH_ms_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__38044),cljs.core.cst$kw$cbs_DASH_waiting_.cljs$core$IFn$_invoke$arity$1(G__38044),cljs.core.cst$kw$socket_.cljs$core$IFn$_invoke$arity$1(G__38044),cljs.core.cst$kw$udt_DASH_last_DASH_comms_.cljs$core$IFn$_invoke$arity$1(G__38044),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38044,cljs.core.cst$kw$client_DASH_id,cljs.core.array_seq([cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$retry_DASH_count_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$cbs_DASH_waiting_,cljs.core.cst$kw$socket_,cljs.core.cst$kw$udt_DASH_last_DASH_comms_], 0)),null));
});

taoensso.sente.new_ChWebSocket = (function taoensso$sente$new_ChWebSocket(opts){
return taoensso.sente.map__GT_ChWebSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$state_,(function (){var G__38218 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$ws,cljs.core.cst$kw$open_QMARK_,false,cljs.core.cst$kw$ever_DASH_opened_QMARK_,false], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38218) : cljs.core.atom.call(null,G__38218));
})(),cljs.core.cst$kw$instance_DASH_handle_,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null)),cljs.core.cst$kw$retry_DASH_count_,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),cljs.core.cst$kw$ever_DASH_opened_QMARK__,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false)),cljs.core.cst$kw$cbs_DASH_waiting_,(function (){var G__38219 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38219) : cljs.core.atom.call(null,G__38219));
})(),cljs.core.cst$kw$socket_,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null)),cljs.core.cst$kw$udt_DASH_last_DASH_comms_,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null))], null),opts], 0)));
});
/**
 * We must set *some* client-side timeout otherwise an unpredictable (and
 *   probably too short) browser default will be used. Must be > server's
 *   :lp-timeout-ms.
 */
taoensso.sente.default_client_side_ajax_timeout_ms = taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$secs,(60)], 0));

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
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7005__auto__,k__7006__auto__){
var self__ = this;
var this__7005__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7005__auto____$1,k__7006__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7007__auto__,k38227,else__7008__auto__){
var self__ = this;
var this__7007__auto____$1 = this;
var G__38229 = (((k38227 instanceof cljs.core.Keyword))?k38227.fqn:null);
switch (G__38229) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38227,else__7008__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7019__auto__,writer__7020__auto__,opts__7021__auto__){
var self__ = this;
var this__7019__auto____$1 = this;
var pr_pair__7022__auto__ = ((function (this__7019__auto____$1){
return (function (keyval__7023__auto__){
return cljs.core.pr_sequential_writer(writer__7020__auto__,cljs.core.pr_writer,""," ","",opts__7021__auto__,keyval__7023__auto__);
});})(this__7019__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7020__auto__,pr_pair__7022__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__7021__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$client_DASH_id,self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$chs,self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$packer,self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$instance_DASH_handle_,self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ever_DASH_opened_QMARK__,self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ajax_DASH_opts,self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$curr_DASH_xhr_,self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38226){
var self__ = this;
var G__38226__$1 = this;
return (new cljs.core.RecordIter((0),G__38226__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$client_DASH_id,cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$ajax_DASH_opts,cljs.core.cst$kw$curr_DASH_xhr_], null),cljs.core._iterator(self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7003__auto__){
var self__ = this;
var this__7003__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6999__auto__){
var self__ = this;
var this__6999__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7009__auto__){
var self__ = this;
var this__7009__auto____$1 = this;
return (11 + cljs.core.count(self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7000__auto__){
var self__ = this;
var this__7000__auto____$1 = this;
var h__6818__auto__ = self__.__hash;
if(!((h__6818__auto__ == null))){
return h__6818__auto__;
} else {
var h__6818__auto____$1 = cljs.core.hash_imap(this__7000__auto____$1);
self__.__hash = h__6818__auto____$1;

return h__6818__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7001__auto__,other__7002__auto__){
var self__ = this;
var this__7001__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6371__auto__ = other__7002__auto__;
if(cljs.core.truth_(and__6371__auto__)){
var and__6371__auto____$1 = (this__7001__auto____$1.constructor === other__7002__auto__.constructor);
if(and__6371__auto____$1){
return cljs.core.equiv_map(this__7001__auto____$1,other__7002__auto__);
} else {
return and__6371__auto____$1;
}
} else {
return and__6371__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7014__auto__,k__7015__auto__){
var self__ = this;
var this__7014__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.cst$kw$curr_DASH_xhr_,null,cljs.core.cst$kw$ever_DASH_opened_QMARK__,null,cljs.core.cst$kw$client_DASH_id,null,cljs.core.cst$kw$packer,null,cljs.core.cst$kw$chs,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,null,cljs.core.cst$kw$url,null,cljs.core.cst$kw$instance_DASH_handle_,null,cljs.core.cst$kw$ajax_DASH_opts,null,cljs.core.cst$kw$state_,null], null), null),k__7015__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7014__auto____$1),self__.__meta),k__7015__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7015__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7012__auto__,k__7013__auto__,G__38226){
var self__ = this;
var this__7012__auto____$1 = this;
var pred__38230 = cljs.core.keyword_identical_QMARK_;
var expr__38231 = k__7013__auto__;
if(cljs.core.truth_((function (){var G__38233 = cljs.core.cst$kw$client_DASH_id;
var G__38234 = expr__38231;
return (pred__38230.cljs$core$IFn$_invoke$arity$2 ? pred__38230.cljs$core$IFn$_invoke$arity$2(G__38233,G__38234) : pred__38230.call(null,G__38233,G__38234));
})())){
return (new taoensso.sente.ChAjaxSocket(G__38226,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38235 = cljs.core.cst$kw$chs;
var G__38236 = expr__38231;
return (pred__38230.cljs$core$IFn$_invoke$arity$2 ? pred__38230.cljs$core$IFn$_invoke$arity$2(G__38235,G__38236) : pred__38230.call(null,G__38235,G__38236));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__38226,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38237 = cljs.core.cst$kw$params;
var G__38238 = expr__38231;
return (pred__38230.cljs$core$IFn$_invoke$arity$2 ? pred__38230.cljs$core$IFn$_invoke$arity$2(G__38237,G__38238) : pred__38230.call(null,G__38237,G__38238));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__38226,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38239 = cljs.core.cst$kw$packer;
var G__38240 = expr__38231;
return (pred__38230.cljs$core$IFn$_invoke$arity$2 ? pred__38230.cljs$core$IFn$_invoke$arity$2(G__38239,G__38240) : pred__38230.call(null,G__38239,G__38240));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__38226,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38241 = cljs.core.cst$kw$url;
var G__38242 = expr__38231;
return (pred__38230.cljs$core$IFn$_invoke$arity$2 ? pred__38230.cljs$core$IFn$_invoke$arity$2(G__38241,G__38242) : pred__38230.call(null,G__38241,G__38242));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__38226,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38243 = cljs.core.cst$kw$state_;
var G__38244 = expr__38231;
return (pred__38230.cljs$core$IFn$_invoke$arity$2 ? pred__38230.cljs$core$IFn$_invoke$arity$2(G__38243,G__38244) : pred__38230.call(null,G__38243,G__38244));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__38226,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38245 = cljs.core.cst$kw$instance_DASH_handle_;
var G__38246 = expr__38231;
return (pred__38230.cljs$core$IFn$_invoke$arity$2 ? pred__38230.cljs$core$IFn$_invoke$arity$2(G__38245,G__38246) : pred__38230.call(null,G__38245,G__38246));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__38226,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38247 = cljs.core.cst$kw$ever_DASH_opened_QMARK__;
var G__38248 = expr__38231;
return (pred__38230.cljs$core$IFn$_invoke$arity$2 ? pred__38230.cljs$core$IFn$_invoke$arity$2(G__38247,G__38248) : pred__38230.call(null,G__38247,G__38248));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__38226,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38249 = cljs.core.cst$kw$backoff_DASH_ms_DASH_fn;
var G__38250 = expr__38231;
return (pred__38230.cljs$core$IFn$_invoke$arity$2 ? pred__38230.cljs$core$IFn$_invoke$arity$2(G__38249,G__38250) : pred__38230.call(null,G__38249,G__38250));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__38226,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38251 = cljs.core.cst$kw$ajax_DASH_opts;
var G__38252 = expr__38231;
return (pred__38230.cljs$core$IFn$_invoke$arity$2 ? pred__38230.cljs$core$IFn$_invoke$arity$2(G__38251,G__38252) : pred__38230.call(null,G__38251,G__38252));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__38226,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38253 = cljs.core.cst$kw$curr_DASH_xhr_;
var G__38254 = expr__38231;
return (pred__38230.cljs$core$IFn$_invoke$arity$2 ? pred__38230.cljs$core$IFn$_invoke$arity$2(G__38253,G__38254) : pred__38230.call(null,G__38253,G__38254));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__38226,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7013__auto__,G__38226),null));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7017__auto__){
var self__ = this;
var this__7017__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$client_DASH_id,self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$chs,self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$packer,self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$instance_DASH_handle_,self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ever_DASH_opened_QMARK__,self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ajax_DASH_opts,self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$curr_DASH_xhr_,self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7004__auto__,G__38226){
var self__ = this;
var this__7004__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__38226,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7010__auto__,entry__7011__auto__){
var self__ = this;
var this__7010__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7011__auto__)){
return cljs.core._assoc(this__7010__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7011__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7011__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7010__auto____$1,entry__7011__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.instance_handle_,null) : cljs.core.reset_BANG_.call(null,self__.instance_handle_,null));

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (chsk__$1){
return (function (p1__38220_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__38220_SHARP_,reason);
});})(chsk__$1))
);

var temp__4657__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.curr_xhr_) : cljs.core.deref.call(null,self__.curr_xhr_));
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
taoensso.sente._chsk_disconnect_BANG_(chsk__$1,cljs.core.cst$kw$requested_DASH_reconnect);

return taoensso.sente._chsk_connect_BANG_(chsk__$1);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__38255 = opts;
var map__38255__$1 = ((((!((map__38255 == null)))?((((map__38255.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38255.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38255):map__38255);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38255__$1,cljs.core.cst$kw$timeout_DASH_ms);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38255__$1,cljs.core.cst$kw$cb);
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38255__$1,cljs.core.cst$kw$flush_QMARK_);
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state_) : cljs.core.deref.call(null,self__.state_))))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var csrf_token = cljs.core.cst$kw$csrf_DASH_token.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state_) : cljs.core.deref.call(null,self__.state_)));
var G__38257_38310 = self__.url;
var G__38258_38311 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$timeout_DASH_ms,(function (){var or__6383__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
var or__6383__auto____$1 = cljs.core.cst$kw$timeout_DASH_ms.cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__6383__auto____$1)){
return or__6383__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),cljs.core.cst$kw$resp_DASH_type,cljs.core.cst$kw$text,cljs.core.cst$kw$headers,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$X_DASH_CSRF_DASH_Token,csrf_token], null)], 0)),cljs.core.cst$kw$params,(function (){var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4(self__.packer,cljs.core.meta(ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?cljs.core.cst$kw$ajax_DASH_cb:null));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.params,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$csrf_DASH_token,csrf_token,cljs.core.cst$kw$client_DASH_id,self__.client_id,cljs.core.cst$kw$ppstr,ppstr], null)], 0));
})()], null)], 0));
var G__38259_38312 = ((function (G__38257_38310,G__38258_38311,csrf_token,map__38255,map__38255__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function taoensso$sente$ajax_cb(p__38260){
var map__38268 = p__38260;
var map__38268__$1 = ((((!((map__38268 == null)))?((((map__38268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38268):map__38268);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38268__$1,cljs.core.cst$kw$_QMARK_error);
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38268__$1,cljs.core.cst$kw$_QMARK_content);
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,cljs.core.cst$kw$timeout)){
if(cljs.core.truth_(_QMARK_cb_fn)){
var G__38270 = cljs.core.cst$kw$chsk_SLASH_timeout;
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__38270) : _QMARK_cb_fn.call(null,G__38270));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (map__38268,map__38268__$1,_QMARK_error,_QMARK_content,G__38257_38310,G__38258_38311,csrf_token,map__38255,map__38255__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__38221_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__38221_SHARP_,cljs.core.cst$kw$unexpected);
});})(map__38268,map__38268__$1,_QMARK_error,_QMARK_content,G__38257_38310,G__38258_38311,csrf_token,map__38255,map__38255__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

if(cljs.core.truth_(_QMARK_cb_fn)){
var G__38271 = cljs.core.cst$kw$chsk_SLASH_error;
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__38271) : _QMARK_cb_fn.call(null,G__38271));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__38272 = taoensso.sente.unpack(self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38272,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38272,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(resp_clj) : _QMARK_cb_fn.call(null,resp_clj));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_clj,cljs.core.cst$kw$chsk_SLASH_dummy_DASH_cb_DASH_200)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",1213,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (content,resp_ppstr,vec__38272,resp_clj,___$1,map__38268,map__38268__$1,_QMARK_error,_QMARK_content,G__38257_38310,G__38258_38311,csrf_token,map__38255,map__38255__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__38272,resp_clj,___$1,map__38268,map__38268__$1,_QMARK_error,_QMARK_content,G__38257_38310,G__38258_38311,csrf_token,map__38255,map__38255__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,204987624);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (content,resp_ppstr,vec__38272,resp_clj,___$1,map__38268,map__38268__$1,_QMARK_error,_QMARK_content,G__38257_38310,G__38258_38311,csrf_token,map__38255,map__38255__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__38222_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38222_SHARP_,cljs.core.cst$kw$open_QMARK_,true);
});})(content,resp_ppstr,vec__38272,resp_clj,___$1,map__38268,map__38268__$1,_QMARK_error,_QMARK_content,G__38257_38310,G__38258_38311,csrf_token,map__38255,map__38255__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);
}
});})(G__38257_38310,G__38258_38311,csrf_token,map__38255,map__38255__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
(taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__38257_38310,G__38258_38311,G__38259_38312) : taoensso.sente.ajax_lite.call(null,G__38257_38310,G__38258_38311,G__38259_38312));

return cljs.core.cst$kw$apparent_DASH_success;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var instance_handle = (function (){var G__38275 = self__.instance_handle_;
var G__38276 = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__38275,G__38276) : cljs.core.reset_BANG_.call(null,G__38275,G__38276));
})();
var have_handle_QMARK_ = ((function (instance_handle,chsk__$1){
return (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.instance_handle_) : cljs.core.deref.call(null,self__.instance_handle_)),instance_handle);
});})(instance_handle,chsk__$1))
;
var poll_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",1223,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,1678552484);

if(cljs.core.truth_(have_handle_QMARK_())){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_())){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",1231,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,199392976);

goog.global.setTimeout(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return taoensso$sente$poll_fn(retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__38223_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38223_SHARP_,cljs.core.cst$kw$udt_DASH_next_DASH_reconnect,udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
var G__38293 = self__.curr_xhr_;
var G__38294 = (function (){var G__38295 = self__.url;
var G__38296 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$timeout_DASH_ms,(function (){var or__6383__auto__ = cljs.core.cst$kw$timeout_DASH_ms.cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),cljs.core.cst$kw$resp_DASH_type,cljs.core.cst$kw$text,cljs.core.cst$kw$params,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.params,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$client_DASH_id,self__.client_id], null),(cljs.core.truth_(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state_) : cljs.core.deref.call(null,self__.state_))))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handshake_QMARK_,true], null))], 0))], null)], 0));
var G__38297 = ((function (G__38295,G__38296,G__38293,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__38298){
var map__38304 = p__38298;
var map__38304__$1 = ((((!((map__38304 == null)))?((((map__38304.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38304.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38304):map__38304);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38304__$1,cljs.core.cst$kw$_QMARK_error);
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38304__$1,cljs.core.cst$kw$_QMARK_content);
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,cljs.core.cst$kw$timeout)){
return taoensso$sente$poll_fn((0));
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (map__38304,map__38304__$1,_QMARK_error,_QMARK_content,G__38295,G__38296,G__38293,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__38224_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__38224_SHARP_,cljs.core.cst$kw$unexpected);
});})(map__38304,map__38304__$1,_QMARK_error,_QMARK_content,G__38295,G__38296,G__38293,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

return retry_fn();

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__38306 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38306,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_(clj);
if(cljs.core.truth_(handshake_QMARK_)){
taoensso.sente.receive_handshake_BANG_(cljs.core.cst$kw$ajax,chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (content,ppstr,vec__38306,clj,handshake_QMARK_,map__38304,map__38304__$1,_QMARK_error,_QMARK_content,G__38295,G__38296,G__38293,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__38225_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38225_SHARP_,cljs.core.cst$kw$open_QMARK_,true);
});})(content,ppstr,vec__38306,clj,handshake_QMARK_,map__38304,map__38304__$1,_QMARK_error,_QMARK_content,G__38295,G__38296,G__38293,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

taoensso$sente$poll_fn((0));

if(cljs.core.truth_(handshake_QMARK_)){
return null;
} else {
var or__6383__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,cljs.core.cst$kw$chsk_SLASH_timeout))?(function (){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(taoensso.sente.debug_mode_QMARK__) : cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__)))){
taoensso.sente.receive_buffered_evs_BANG_(self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$debug_SLASH_timeout], null)], null));
} else {
}

return cljs.core.cst$kw$noop;
})()
:null);
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});})(G__38295,G__38296,G__38293,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
;
return (taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__38295,G__38296,G__38297) : taoensso.sente.ajax_lite.call(null,G__38295,G__38296,G__38297));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__38293,G__38294) : cljs.core.reset_BANG_.call(null,G__38293,G__38294));
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
poll_fn((0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$client_DASH_id,cljs.core.cst$sym$chs,cljs.core.cst$sym$params,cljs.core.cst$sym$packer,cljs.core.cst$sym$url,cljs.core.cst$sym$state_,cljs.core.cst$sym$instance_DASH_handle_,cljs.core.cst$sym$ever_DASH_opened_QMARK__,cljs.core.cst$sym$backoff_DASH_ms_DASH_fn,cljs.core.cst$sym$ajax_DASH_opts,cljs.core.cst$sym$curr_DASH_xhr_], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__7039__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__7039__auto__,writer__7040__auto__){
return cljs.core._write(writer__7040__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__38228){
return (new taoensso.sente.ChAjaxSocket(cljs.core.cst$kw$client_DASH_id.cljs$core$IFn$_invoke$arity$1(G__38228),cljs.core.cst$kw$chs.cljs$core$IFn$_invoke$arity$1(G__38228),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__38228),cljs.core.cst$kw$packer.cljs$core$IFn$_invoke$arity$1(G__38228),cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__38228),cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(G__38228),cljs.core.cst$kw$instance_DASH_handle_.cljs$core$IFn$_invoke$arity$1(G__38228),cljs.core.cst$kw$ever_DASH_opened_QMARK__.cljs$core$IFn$_invoke$arity$1(G__38228),cljs.core.cst$kw$backoff_DASH_ms_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__38228),cljs.core.cst$kw$ajax_DASH_opts.cljs$core$IFn$_invoke$arity$1(G__38228),cljs.core.cst$kw$curr_DASH_xhr_.cljs$core$IFn$_invoke$arity$1(G__38228),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38228,cljs.core.cst$kw$client_DASH_id,cljs.core.array_seq([cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$ajax_DASH_opts,cljs.core.cst$kw$curr_DASH_xhr_], 0)),null));
});

taoensso.sente.new_ChAjaxSocket = (function taoensso$sente$new_ChAjaxSocket(opts){
return taoensso.sente.map__GT_ChAjaxSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_,(function (){var G__38314 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$ajax,cljs.core.cst$kw$open_QMARK_,false,cljs.core.cst$kw$ever_DASH_opened_QMARK_,false], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38314) : cljs.core.atom.call(null,G__38314));
})(),cljs.core.cst$kw$instance_DASH_handle_,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null)),cljs.core.cst$kw$ever_DASH_opened_QMARK__,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false)),cljs.core.cst$kw$curr_DASH_xhr_,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null))], null),opts], 0)));
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
taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7005__auto__,k__7006__auto__){
var self__ = this;
var this__7005__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7005__auto____$1,k__7006__auto__,null);
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7007__auto__,k38316,else__7008__auto__){
var self__ = this;
var this__7007__auto____$1 = this;
var G__38318 = (((k38316 instanceof cljs.core.Keyword))?k38316.fqn:null);
switch (G__38318) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38316,else__7008__auto__);

}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7019__auto__,writer__7020__auto__,opts__7021__auto__){
var self__ = this;
var this__7019__auto____$1 = this;
var pr_pair__7022__auto__ = ((function (this__7019__auto____$1){
return (function (keyval__7023__auto__){
return cljs.core.pr_sequential_writer(writer__7020__auto__,cljs.core.pr_writer,""," ","",opts__7021__auto__,keyval__7023__auto__);
});})(this__7019__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7020__auto__,pr_pair__7022__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__7021__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$impl_,self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38315){
var self__ = this;
var G__38315__$1 = this;
return (new cljs.core.RecordIter((0),G__38315__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,cljs.core.cst$kw$state_,cljs.core.cst$kw$impl_], null),cljs.core._iterator(self__.__extmap)));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7003__auto__){
var self__ = this;
var this__7003__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6999__auto__){
var self__ = this;
var this__6999__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7009__auto__){
var self__ = this;
var this__7009__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7000__auto__){
var self__ = this;
var this__7000__auto____$1 = this;
var h__6818__auto__ = self__.__hash;
if(!((h__6818__auto__ == null))){
return h__6818__auto__;
} else {
var h__6818__auto____$1 = cljs.core.hash_imap(this__7000__auto____$1);
self__.__hash = h__6818__auto____$1;

return h__6818__auto____$1;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7001__auto__,other__7002__auto__){
var self__ = this;
var this__7001__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6371__auto__ = other__7002__auto__;
if(cljs.core.truth_(and__6371__auto__)){
var and__6371__auto____$1 = (this__7001__auto____$1.constructor === other__7002__auto__.constructor);
if(and__6371__auto____$1){
return cljs.core.equiv_map(this__7001__auto____$1,other__7002__auto__);
} else {
return and__6371__auto____$1;
}
} else {
return and__6371__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7014__auto__,k__7015__auto__){
var self__ = this;
var this__7014__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$impl_,null,cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,null,cljs.core.cst$kw$state_,null,cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,null], null), null),k__7015__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7014__auto____$1),self__.__meta),k__7015__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7015__auto__)),null));
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7012__auto__,k__7013__auto__,G__38315){
var self__ = this;
var this__7012__auto____$1 = this;
var pred__38319 = cljs.core.keyword_identical_QMARK_;
var expr__38320 = k__7013__auto__;
if(cljs.core.truth_((function (){var G__38322 = cljs.core.cst$kw$ws_DASH_chsk_DASH_opts;
var G__38323 = expr__38320;
return (pred__38319.cljs$core$IFn$_invoke$arity$2 ? pred__38319.cljs$core$IFn$_invoke$arity$2(G__38322,G__38323) : pred__38319.call(null,G__38322,G__38323));
})())){
return (new taoensso.sente.ChAutoSocket(G__38315,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38324 = cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts;
var G__38325 = expr__38320;
return (pred__38319.cljs$core$IFn$_invoke$arity$2 ? pred__38319.cljs$core$IFn$_invoke$arity$2(G__38324,G__38325) : pred__38319.call(null,G__38324,G__38325));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__38315,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38326 = cljs.core.cst$kw$state_;
var G__38327 = expr__38320;
return (pred__38319.cljs$core$IFn$_invoke$arity$2 ? pred__38319.cljs$core$IFn$_invoke$arity$2(G__38326,G__38327) : pred__38319.call(null,G__38326,G__38327));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__38315,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38328 = cljs.core.cst$kw$impl_;
var G__38329 = expr__38320;
return (pred__38319.cljs$core$IFn$_invoke$arity$2 ? pred__38319.cljs$core$IFn$_invoke$arity$2(G__38328,G__38329) : pred__38319.call(null,G__38328,G__38329));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__38315,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7013__auto__,G__38315),null));
}
}
}
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7017__auto__){
var self__ = this;
var this__7017__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$impl_,self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7004__auto__,G__38315){
var self__ = this;
var this__7004__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__38315,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7010__auto__,entry__7011__auto__){
var self__ = this;
var this__7010__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7011__auto__)){
return cljs.core._assoc(this__7010__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7011__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7011__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7010__auto____$1,entry__7011__auto__);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.impl_) : cljs.core.deref.call(null,self__.impl_));
if(cljs.core.truth_(temp__4657__auto__)){
var impl = temp__4657__auto__;
return taoensso.sente._chsk_disconnect_BANG_(impl,reason);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.impl_) : cljs.core.deref.call(null,self__.impl_));
if(cljs.core.truth_(temp__4657__auto__)){
var impl = temp__4657__auto__;
taoensso.sente._chsk_disconnect_BANG_(impl,cljs.core.cst$kw$requested_DASH_reconnect);

return taoensso.sente._chsk_connect_BANG_(chsk__$1);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var temp__4655__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.impl_) : cljs.core.deref.call(null,self__.impl_));
if(cljs.core.truth_(temp__4655__auto__)){
var impl = temp__4655__auto__;
return taoensso.sente._chsk_send_BANG_(impl,ev,opts);
} else {
var map__38330 = opts;
var map__38330__$1 = ((((!((map__38330 == null)))?((((map__38330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38330):map__38330);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38330__$1,cljs.core.cst$kw$cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var ajax_chsk_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ajax_chsk_opts,cljs.core.cst$kw$state_,self__.state_);
var ws_chsk_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ws_chsk_opts,cljs.core.cst$kw$state_,self__.state_);
var ajax_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1){
return (function (){
cljs.core.remove_watch(self__.state_,cljs.core.cst$kw$chsk_SLASH_auto_DASH_ajax_DASH_downgrade);

return taoensso.sente._chsk_connect_BANG_(taoensso.sente.new_ChAjaxSocket(ajax_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1))
;
var ws_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
var downgraded_QMARK___38337 = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
cljs.core.add_watch(self__.state_,cljs.core.cst$kw$chsk_SLASH_auto_DASH_ajax_DASH_downgrade,((function (downgraded_QMARK___38337,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (_,___$1,old_state,new_state){
var temp__4657__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.impl_) : cljs.core.deref.call(null,self__.impl_));
if(cljs.core.truth_(temp__4657__auto__)){
var impl = temp__4657__auto__;
var temp__4657__auto____$1 = cljs.core.cst$kw$ever_DASH_opened_QMARK__.cljs$core$IFn$_invoke$arity$1(impl);
if(cljs.core.truth_(temp__4657__auto____$1)){
var ever_opened_QMARK__ = temp__4657__auto____$1;
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ever_opened_QMARK__) : cljs.core.deref.call(null,ever_opened_QMARK__)))){
return null;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$last_DASH_error.cljs$core$IFn$_invoke$arity$1(new_state))){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_(downgraded_QMARK___38337,false,true))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",1359,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (ever_opened_QMARK__,temp__4657__auto____$1,impl,temp__4657__auto__,downgraded_QMARK___38337,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
});})(ever_opened_QMARK__,temp__4657__auto____$1,impl,temp__4657__auto__,downgraded_QMARK___38337,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
,null)),null,-73301185);

taoensso.sente._chsk_disconnect_BANG_(impl,cljs.core.cst$kw$downgrading_DASH_ws_DASH_to_DASH_ajax);

var G__38332 = self__.impl_;
var G__38333 = ajax_conn_BANG_();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__38332,G__38333) : cljs.core.reset_BANG_.call(null,G__38332,G__38333));
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
});})(downgraded_QMARK___38337,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
);

return taoensso.sente._chsk_connect_BANG_(taoensso.sente.new_ChWebSocket(ws_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
;
var G__38334_38338 = self__.impl_;
var G__38335_38339 = (function (){var or__6383__auto__ = ws_conn_BANG_();
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
return ajax_conn_BANG_();
}
})();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__38334_38338,G__38335_38339) : cljs.core.reset_BANG_.call(null,G__38334_38338,G__38335_38339));

return chsk__$1;
});

taoensso.sente.ChAutoSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ws_DASH_chsk_DASH_opts,cljs.core.cst$sym$ajax_DASH_chsk_DASH_opts,cljs.core.cst$sym$state_,cljs.core.cst$sym$impl_], null);
});

taoensso.sente.ChAutoSocket.cljs$lang$type = true;

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__7039__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__7039__auto__,writer__7040__auto__){
return cljs.core._write(writer__7040__auto__,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__38317){
return (new taoensso.sente.ChAutoSocket(cljs.core.cst$kw$ws_DASH_chsk_DASH_opts.cljs$core$IFn$_invoke$arity$1(G__38317),cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts.cljs$core$IFn$_invoke$arity$1(G__38317),cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(G__38317),cljs.core.cst$kw$impl_.cljs$core$IFn$_invoke$arity$1(G__38317),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38317,cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,cljs.core.array_seq([cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,cljs.core.cst$kw$state_,cljs.core.cst$kw$impl_], 0)),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts){
return taoensso.sente.map__GT_ChAutoSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state_,(function (){var G__38341 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$auto,cljs.core.cst$kw$open_QMARK_,false,cljs.core.cst$kw$ever_DASH_opened_QMARK_,false], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38341) : cljs.core.atom.call(null,G__38341));
})(),cljs.core.cst$kw$impl_,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null))], null),opts], 0)));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__38347 = (((protocol instanceof cljs.core.Keyword))?protocol.fqn:null);
switch (G__38347) {
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
return cljs.core.contains_QMARK_((function (){var G__38349 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__38349) : taoensso.truss.impl.set_STAR_.call(null,G__38349));
})(),x);
});})(protocol__$1))
.call(null,protocol__$1)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e38348){if((e38348 instanceof Error)){
var e = e38348;
return e;
} else {
throw e38348;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",null,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__38350 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__38350) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__38351 = protocol__$2;
switch (G__38351) {
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
return [cljs.core.str(protocol__$3),cljs.core.str("//"),cljs.core.str(taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([host,path], 0)))].join('');
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
var args__7461__auto__ = [];
var len__7454__auto___38379 = arguments.length;
var i__7455__auto___38380 = (0);
while(true){
if((i__7455__auto___38380 < len__7454__auto___38379)){
args__7461__auto__.push((arguments[i__7455__auto___38380]));

var G__38381 = (i__7455__auto___38380 + (1));
i__7455__auto___38380 = G__38381;
continue;
} else {
}
break;
}

var argseq__7462__auto__ = ((((1) < args__7461__auto__.length))?(new cljs.core.IndexedSeq(args__7461__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7462__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__38357){
var vec__38358 = p__38357;
var map__38361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38358,(0),null);
var map__38361__$1 = ((((!((map__38361 == null)))?((((map__38361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38361):map__38361);
var opts = map__38361__$1;
var ajax_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38361__$1,cljs.core.cst$kw$ajax_DASH_opts);
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38361__$1,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$secs,(20)], 0)));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38361__$1,cljs.core.cst$kw$client_DASH_id,(function (){var or__6383__auto__ = cljs.core.cst$kw$client_DASH_uuid.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
}
})());
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38361__$1,cljs.core.cst$kw$protocol);
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38361__$1,cljs.core.cst$kw$packer,cljs.core.cst$kw$edn);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38361__$1,cljs.core.cst$kw$params);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38361__$1,cljs.core.cst$kw$type,cljs.core.cst$kw$auto);
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38361__$1,cljs.core.cst$kw$host);
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38361__$1,cljs.core.cst$kw$recv_DASH_buf_DASH_or_DASH_n,cljs.core.async.sliding_buffer((2048)));
var backoff_ms_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38361__$1,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38361__$1,cljs.core.cst$kw$wrap_DASH_recv_DASH_evs_QMARK_,true);
var _deprecated_more_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38358,(1),null);
var e_38382 = (function (){try{if(((function (vec__38358,map__38361,map__38361__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (x){
return cljs.core.contains_QMARK_((function (){var G__38364 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,null,cljs.core.cst$kw$ajax,null,cljs.core.cst$kw$auto,null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__38364) : taoensso.truss.impl.set_STAR_.call(null,G__38364));
})(),x);
});})(vec__38358,map__38361,map__38361__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e38363){if((e38363 instanceof Error)){
var e = e38363;
return e;
} else {
throw e38363;

}
}})();
if((e_38382 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",null,"([:in #{:ws :ajax :auto}] type)",type,e_38382,null);
}

var e_38383 = (function (){try{if(taoensso.encore.nblank_str_QMARK_(client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e38365){if((e38365 instanceof Error)){
var e = e38365;
return e;
} else {
throw e38365;

}
}})();
if((e_38383 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",null,"(enc/nblank-str? client-id)",client_id,e_38383,null);
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",1424,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__38358,map__38361,map__38361__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__38358,map__38361,map__38361__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,394142795);
} else {
}

if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$lp_DASH_timeout)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",1425,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__38358,map__38361,map__38361__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__38358,map__38361,map__38361__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,903508254);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var vec__38366 = (function (){var win_loc = taoensso.encore.get_win_loc();
var path__$1 = (function (){var or__6383__auto__ = path;
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
return cljs.core.cst$kw$pathname.cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var temp__4655__auto__ = cljs.core.cst$kw$chsk_DASH_url_DASH_fn.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38369 = path__$1;
var G__38370 = win_loc;
var G__38371 = cljs.core.cst$kw$ws;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__38369,G__38370,G__38371) : f.call(null,G__38369,G__38370,G__38371));
})(),(function (){var G__38372 = path__$1;
var G__38373 = win_loc;
var G__38374 = cljs.core.cst$kw$ajax;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__38372,G__38373,G__38374) : f.call(null,G__38372,G__38373,G__38374));
})()], null);
} else {
var protocol__$1 = (function (){var or__6383__auto__ = protocol;
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
var or__6383__auto____$1 = cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(win_loc);
if(cljs.core.truth_(or__6383__auto____$1)){
return or__6383__auto____$1;
} else {
return cljs.core.cst$kw$http;
}
}
})();
var host__$1 = (function (){var or__6383__auto__ = host;
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
return cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url(protocol__$1,host__$1,path__$1,cljs.core.cst$kw$ws),taoensso.sente.get_chsk_url(protocol__$1,host__$1,path__$1,cljs.core.cst$kw$ajax)], null);
}
})();
var ws_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38366,(0),null);
var ajax_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38366,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$internal,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((128))),cljs.core.cst$kw$state,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((10))),cljs.core.cst$kw$_LT_server,(function (){var buf = cljs.core.async.sliding_buffer((512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (buf,packer__$1,vec__38366,ws_url,ajax_url,vec__38358,map__38361,map__38361__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_recv,ev], null);
});})(buf,packer__$1,vec__38366,ws_url,ajax_url,vec__38358,map__38361,map__38361__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$client_DASH_id,client_id,cljs.core.cst$kw$chs,private_chs,cljs.core.cst$kw$params,params,cljs.core.cst$kw$packer,packer__$1,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,ws_url,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,backoff_ms_fn], null)], 0));
var ajax_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$url,ajax_url,cljs.core.cst$kw$ajax_DASH_opts,ajax_opts,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,backoff_ms_fn], null)], 0));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,ws_chsk_opts,cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_((function (){var G__38375 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__38375) {
case "ws":
return taoensso.sente.new_ChWebSocket(ws_chsk_opts);

break;
case "ajax":
return taoensso.sente.new_ChAjaxSocket(ajax_chsk_opts);

break;
case "auto":
return taoensso.sente.new_ChAutoSocket(auto_chsk_opts);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})());
var temp__4655__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__4655__auto__)){
var chsk = temp__4655__auto__;
var chsk_state_ = cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = cljs.core.cst$kw$internal.cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal.cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,vec__38366,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__38358,map__38361,map__38361__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__38376 = taoensso.sente.as_event(ev);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38376,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38376,(1),null);
var ev__$1 = vec__38376;
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$ch_DASH_recv,internal_ch,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$state,chsk_state_,cljs.core.cst$kw$event,ev__$1,cljs.core.cst$kw$id,ev_id,cljs.core.cst$kw$_QMARK_data,ev__QMARK_data], null);
});})(chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,vec__38366,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__38358,map__38361,map__38361__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2(ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$chsk,chsk,cljs.core.cst$kw$ch_DASH_recv,ev_msg_ch,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$state,cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",1513,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (temp__4655__auto__,packer__$1,vec__38366,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__38358,map__38361,map__38361__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
});})(temp__4655__auto__,packer__$1,vec__38366,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__38358,map__38361,map__38361__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-1761924684);
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq38355){
var G__38356 = cljs.core.first(seq38355);
var seq38355__$1 = cljs.core.next(seq38355);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38356,seq38355__$1);
});

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__38465 = opts;
var map__38465__$1 = ((((!((map__38465 == null)))?((((map__38465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38465):map__38465);
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38465__$1,cljs.core.cst$kw$trace_DASH_evs_QMARK_);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38465__$1,cljs.core.cst$kw$error_DASH_handler);
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38465__$1,cljs.core.cst$kw$simple_DASH_auto_DASH_threading_QMARK_);
var ch_ctrl = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var execute1 = ((function (map__38465,map__38465__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl){
return (function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});})(map__38465,map__38465__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl))
;
var c__34193__auto___38545 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34193__auto___38545,map__38465,map__38465__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
var f__34194__auto__ = (function (){var switch__34069__auto__ = ((function (c__34193__auto___38545,map__38465,map__38465__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (state_38511){
var state_val_38512 = (state_38511[(1)]);
if((state_val_38512 === (7))){
var inst_38507 = (state_38511[(2)]);
var state_38511__$1 = state_38511;
var statearr_38513_38546 = state_38511__$1;
(statearr_38513_38546[(2)] = inst_38507);

(statearr_38513_38546[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38512 === (1))){
var state_38511__$1 = state_38511;
var statearr_38514_38547 = state_38511__$1;
(statearr_38514_38547[(2)] = null);

(statearr_38514_38547[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38512 === (4))){
var inst_38477 = (state_38511[(7)]);
var inst_38478 = (state_38511[(8)]);
var inst_38475 = (state_38511[(9)]);
var inst_38475__$1 = (state_38511[(2)]);
var inst_38476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38475__$1,(0),null);
var inst_38477__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38475__$1,(1),null);
var inst_38478__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38477__$1,ch_ctrl);
var state_38511__$1 = (function (){var statearr_38515 = state_38511;
(statearr_38515[(10)] = inst_38476);

(statearr_38515[(7)] = inst_38477__$1);

(statearr_38515[(8)] = inst_38478__$1);

(statearr_38515[(9)] = inst_38475__$1);

return statearr_38515;
})();
if(inst_38478__$1){
var statearr_38516_38548 = state_38511__$1;
(statearr_38516_38548[(1)] = (5));

} else {
var statearr_38517_38549 = state_38511__$1;
(statearr_38517_38549[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_38512 === (15))){
var inst_38476 = (state_38511[(10)]);
var state_38511__$1 = state_38511;
var statearr_38518_38550 = state_38511__$1;
(statearr_38518_38550[(2)] = inst_38476);

(statearr_38518_38550[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38512 === (13))){
var inst_38493 = (state_38511[(2)]);
var state_38511__$1 = state_38511;
var statearr_38519_38551 = state_38511__$1;
(statearr_38519_38551[(2)] = inst_38493);

(statearr_38519_38551[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38512 === (6))){
var inst_38476 = (state_38511[(10)]);
var inst_38483 = (inst_38476 == null);
var inst_38484 = cljs.core.not(inst_38483);
var state_38511__$1 = state_38511;
if(inst_38484){
var statearr_38520_38552 = state_38511__$1;
(statearr_38520_38552[(1)] = (8));

} else {
var statearr_38521_38553 = state_38511__$1;
(statearr_38521_38553[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_38512 === (3))){
var inst_38509 = (state_38511[(2)]);
var state_38511__$1 = state_38511;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38511__$1,inst_38509);
} else {
if((state_val_38512 === (12))){
var state_38511__$1 = state_38511;
var statearr_38522_38554 = state_38511__$1;
(statearr_38522_38554[(2)] = false);

(statearr_38522_38554[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38512 === (2))){
var inst_38471 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38472 = [ch_recv,ch_ctrl];
var inst_38473 = (new cljs.core.PersistentVector(null,2,(5),inst_38471,inst_38472,null));
var state_38511__$1 = state_38511;
return cljs.core.async.ioc_alts_BANG_(state_38511__$1,(4),inst_38473);
} else {
if((state_val_38512 === (11))){
var state_38511__$1 = state_38511;
var statearr_38523_38555 = state_38511__$1;
(statearr_38523_38555[(2)] = true);

(statearr_38523_38555[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38512 === (9))){
var state_38511__$1 = state_38511;
var statearr_38524_38556 = state_38511__$1;
(statearr_38524_38556[(2)] = false);

(statearr_38524_38556[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38512 === (5))){
var state_38511__$1 = state_38511;
var statearr_38525_38557 = state_38511__$1;
(statearr_38525_38557[(2)] = null);

(statearr_38525_38557[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38512 === (14))){
var inst_38476 = (state_38511[(10)]);
var inst_38498 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_38476);
var state_38511__$1 = state_38511;
var statearr_38526_38558 = state_38511__$1;
(statearr_38526_38558[(2)] = inst_38498);

(statearr_38526_38558[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38512 === (16))){
var inst_38476 = (state_38511[(10)]);
var inst_38477 = (state_38511[(7)]);
var inst_38478 = (state_38511[(8)]);
var inst_38475 = (state_38511[(9)]);
var inst_38501 = (state_38511[(2)]);
var inst_38502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38501,cljs.core.cst$kw$event);
var inst_38503 = (function (){var vec__38468 = inst_38475;
var v = inst_38476;
var p = inst_38477;
var stop_QMARK_ = inst_38478;
var map__38481 = inst_38501;
var event_msg = inst_38501;
var event = inst_38502;
return ((function (vec__38468,v,p,stop_QMARK_,map__38481,event_msg,event,inst_38476,inst_38477,inst_38478,inst_38475,inst_38501,inst_38502,state_val_38512,c__34193__auto___38545,map__38465,map__38465__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",1540,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__38468,v,p,stop_QMARK_,map__38481,event_msg,event,inst_38476,inst_38477,inst_38478,inst_38475,inst_38501,inst_38502,state_val_38512,c__34193__auto___38545,map__38465,map__38465__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});})(vec__38468,v,p,stop_QMARK_,map__38481,event_msg,event,inst_38476,inst_38477,inst_38478,inst_38475,inst_38501,inst_38502,state_val_38512,c__34193__auto___38545,map__38465,map__38465__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,1224244171);
} else {
}

var G__38529 = (cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.server_event_msg_QMARK_(event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e38530){if((e38530 instanceof Error)){
var e = e38530;
return e;
} else {
throw e38530;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",null,"(server-event-msg? event-msg)",event_msg,e,null);
}
})():(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.client_event_msg_QMARK_(event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e38531){if((e38531 instanceof Error)){
var e = e38531;
return e;
} else {
throw e38531;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",null,"(client-event-msg? event-msg)",event_msg,e,null);
}
})());
return (event_msg_handler.cljs$core$IFn$_invoke$arity$1 ? event_msg_handler.cljs$core$IFn$_invoke$arity$1(G__38529) : event_msg_handler.call(null,G__38529));
}catch (e38527){if((e38527 instanceof Error)){
var e1 = e38527;
try{var temp__4655__auto__ = error_handler;
if(cljs.core.truth_(temp__4655__auto__)){
var eh = temp__4655__auto__;
return (error_handler.cljs$core$IFn$_invoke$arity$2 ? error_handler.cljs$core$IFn$_invoke$arity$2(e1,event_msg) : error_handler.call(null,e1,event_msg));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",1549,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (temp__4655__auto__,e1,vec__38468,v,p,stop_QMARK_,map__38481,event_msg,event,inst_38476,inst_38477,inst_38478,inst_38475,inst_38501,inst_38502,state_val_38512,c__34193__auto___38545,map__38465,map__38465__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
});})(temp__4655__auto__,e1,vec__38468,v,p,stop_QMARK_,map__38481,event_msg,event,inst_38476,inst_38477,inst_38478,inst_38475,inst_38501,inst_38502,state_val_38512,c__34193__auto___38545,map__38465,map__38465__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,1723753933);
}
}catch (e38528){if((e38528 instanceof Error)){
var e2 = e38528;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/private/var/folders/qc/zrv4w6ds5yq3lrj24703h18r0000gp/T/form-init937181100500165544.clj",1550,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e2,e1,vec__38468,v,p,stop_QMARK_,map__38481,event_msg,event,inst_38476,inst_38477,inst_38478,inst_38475,inst_38501,inst_38502,state_val_38512,c__34193__auto___38545,map__38465,map__38465__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});})(e2,e1,vec__38468,v,p,stop_QMARK_,map__38481,event_msg,event,inst_38476,inst_38477,inst_38478,inst_38475,inst_38501,inst_38502,state_val_38512,c__34193__auto___38545,map__38465,map__38465__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,330823499);
} else {
throw e38528;

}
}} else {
throw e38527;

}
}});
;})(vec__38468,v,p,stop_QMARK_,map__38481,event_msg,event,inst_38476,inst_38477,inst_38478,inst_38475,inst_38501,inst_38502,state_val_38512,c__34193__auto___38545,map__38465,map__38465__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var inst_38504 = execute1(inst_38503);
var state_38511__$1 = (function (){var statearr_38532 = state_38511;
(statearr_38532[(11)] = inst_38504);

return statearr_38532;
})();
var statearr_38533_38559 = state_38511__$1;
(statearr_38533_38559[(2)] = null);

(statearr_38533_38559[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38512 === (10))){
var inst_38496 = (state_38511[(2)]);
var state_38511__$1 = state_38511;
if(cljs.core.truth_(inst_38496)){
var statearr_38534_38560 = state_38511__$1;
(statearr_38534_38560[(1)] = (14));

} else {
var statearr_38535_38561 = state_38511__$1;
(statearr_38535_38561[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_38512 === (8))){
var inst_38476 = (state_38511[(10)]);
var inst_38486 = inst_38476.cljs$lang$protocol_mask$partition0$;
var inst_38487 = (inst_38486 & (64));
var inst_38488 = inst_38476.cljs$core$ISeq$;
var inst_38489 = (inst_38487) || (inst_38488);
var state_38511__$1 = state_38511;
if(cljs.core.truth_(inst_38489)){
var statearr_38536_38562 = state_38511__$1;
(statearr_38536_38562[(1)] = (11));

} else {
var statearr_38537_38563 = state_38511__$1;
(statearr_38537_38563[(1)] = (12));

}

return cljs.core.cst$kw$recur;
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
});})(c__34193__auto___38545,map__38465,map__38465__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
;
return ((function (switch__34069__auto__,c__34193__auto___38545,map__38465,map__38465__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__34070__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__34070__auto____0 = (function (){
var statearr_38541 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38541[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__34070__auto__);

(statearr_38541[(1)] = (1));

return statearr_38541;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__34070__auto____1 = (function (state_38511){
while(true){
var ret_value__34071__auto__ = (function (){try{while(true){
var result__34072__auto__ = switch__34069__auto__(state_38511);
if(cljs.core.keyword_identical_QMARK_(result__34072__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34072__auto__;
}
break;
}
}catch (e38542){if((e38542 instanceof Object)){
var ex__34073__auto__ = e38542;
var statearr_38543_38564 = state_38511;
(statearr_38543_38564[(5)] = ex__34073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38511);

return cljs.core.cst$kw$recur;
} else {
throw e38542;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34071__auto__,cljs.core.cst$kw$recur)){
var G__38565 = state_38511;
state_38511 = G__38565;
continue;
} else {
return ret_value__34071__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__34070__auto__ = function(state_38511){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__34070__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__34070__auto____1.call(this,state_38511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__34070__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__34070__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__34070__auto__;
})()
;})(switch__34069__auto__,c__34193__auto___38545,map__38465,map__38465__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var state__34195__auto__ = (function (){var statearr_38544 = (f__34194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34194__auto__.cljs$core$IFn$_invoke$arity$0() : f__34194__auto__.call(null));
(statearr_38544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34193__auto___38545);

return statearr_38544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34195__auto__);
});})(c__34193__auto___38545,map__38465,map__38465__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
);


return ((function (map__38465,map__38465__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_(ch_ctrl);
});
;})(map__38465,map__38465__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
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
var args__7461__auto__ = [];
var len__7454__auto___38575 = arguments.length;
var i__7455__auto___38576 = (0);
while(true){
if((i__7455__auto___38576 < len__7454__auto___38575)){
args__7461__auto__.push((arguments[i__7455__auto___38576]));

var G__38577 = (i__7455__auto___38576 + (1));
i__7455__auto___38576 = G__38577;
continue;
} else {
}
break;
}

var argseq__7462__auto__ = ((((2) < args__7461__auto__.length))?(new cljs.core.IndexedSeq(args__7461__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7462__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__38569){
var vec__38570 = p__38569;
var map__38573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38570,(0),null);
var map__38573__$1 = ((((!((map__38573 == null)))?((((map__38573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38573):map__38573);
var opts = map__38573__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38573__$1,cljs.core.cst$kw$trace_DASH_evs_QMARK_);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38573__$1,cljs.core.cst$kw$error_DASH_handler);
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38573__$1,cljs.core.cst$kw$simple_DASH_auto_DASH_threading_QMARK_);
return taoensso.sente._start_chsk_router_BANG_(cljs.core.cst$kw$server,ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq38566){
var G__38567 = cljs.core.first(seq38566);
var seq38566__$1 = cljs.core.next(seq38566);
var G__38568 = cljs.core.first(seq38566__$1);
var seq38566__$2 = cljs.core.next(seq38566__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38567,G__38568,seq38566__$2);
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
var args__7461__auto__ = [];
var len__7454__auto___38587 = arguments.length;
var i__7455__auto___38588 = (0);
while(true){
if((i__7455__auto___38588 < len__7454__auto___38587)){
args__7461__auto__.push((arguments[i__7455__auto___38588]));

var G__38589 = (i__7455__auto___38588 + (1));
i__7455__auto___38588 = G__38589;
continue;
} else {
}
break;
}

var argseq__7462__auto__ = ((((2) < args__7461__auto__.length))?(new cljs.core.IndexedSeq(args__7461__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7462__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__38581){
var vec__38582 = p__38581;
var map__38585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38582,(0),null);
var map__38585__$1 = ((((!((map__38585 == null)))?((((map__38585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38585):map__38585);
var opts = map__38585__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38585__$1,cljs.core.cst$kw$trace_DASH_evs_QMARK_);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38585__$1,cljs.core.cst$kw$error_DASH_handler);
return taoensso.sente._start_chsk_router_BANG_(cljs.core.not(cljs.core.cst$kw$server),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq38578){
var G__38579 = cljs.core.first(seq38578);
var seq38578__$1 = cljs.core.next(seq38578);
var G__38580 = cljs.core.first(seq38578__$1);
var seq38578__$2 = cljs.core.next(seq38578__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38579,G__38580,seq38578__$2);
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
return taoensso.sente.start_client_chsk_router_BANG_(ch_recv,(function (ev_msg){
var G__38592 = cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(ev_msg);
var G__38593 = cljs.core.cst$kw$ch_DASH_recv.cljs$core$IFn$_invoke$arity$1(ev_msg);
return (event_handler.cljs$core$IFn$_invoke$arity$2 ? event_handler.cljs$core$IFn$_invoke$arity$2(G__38592,G__38593) : event_handler.call(null,G__38592,G__38593));
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
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__38594,websocket_QMARK_){
var map__38597 = p__38594;
var map__38597__$1 = ((((!((map__38597 == null)))?((((map__38597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38597):map__38597);
var location = map__38597__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38597__$1,cljs.core.cst$kw$protocol);
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38597__$1,cljs.core.cst$kw$host);
var pathname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38597__$1,cljs.core.cst$kw$pathname);
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str(protocol__$1),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__6383__auto__ = path;
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
return pathname;
}
})())].join('');
});
