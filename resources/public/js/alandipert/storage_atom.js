// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('alandipert.storage_atom');
goog.require('cljs.core');
goog.require('tailrecursion.cljson');
goog.require('goog.Timer');

/**
 * Represents a storage resource.
 * @interface
 */
alandipert.storage_atom.IStorageBackend = function(){};

alandipert.storage_atom._get = (function alandipert$storage_atom$_get(this$,not_found){
if((!((this$ == null))) && (!((this$.alandipert$storage_atom$IStorageBackend$_get$arity$2 == null)))){
return this$.alandipert$storage_atom$IStorageBackend$_get$arity$2(this$,not_found);
} else {
var x__7046__auto__ = (((this$ == null))?null:this$);
var m__7047__auto__ = (alandipert.storage_atom._get[goog.typeOf(x__7046__auto__)]);
if(!((m__7047__auto__ == null))){
return (m__7047__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7047__auto__.cljs$core$IFn$_invoke$arity$2(this$,not_found) : m__7047__auto__.call(null,this$,not_found));
} else {
var m__7047__auto____$1 = (alandipert.storage_atom._get["_"]);
if(!((m__7047__auto____$1 == null))){
return (m__7047__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7047__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,not_found) : m__7047__auto____$1.call(null,this$,not_found));
} else {
throw cljs.core.missing_protocol("IStorageBackend.-get",this$);
}
}
}
});

/**
 * Commit value to storage at location.
 */
alandipert.storage_atom._commit_BANG_ = (function alandipert$storage_atom$_commit_BANG_(this$,value){
if((!((this$ == null))) && (!((this$.alandipert$storage_atom$IStorageBackend$_commit_BANG_$arity$2 == null)))){
return this$.alandipert$storage_atom$IStorageBackend$_commit_BANG_$arity$2(this$,value);
} else {
var x__7046__auto__ = (((this$ == null))?null:this$);
var m__7047__auto__ = (alandipert.storage_atom._commit_BANG_[goog.typeOf(x__7046__auto__)]);
if(!((m__7047__auto__ == null))){
return (m__7047__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7047__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__7047__auto__.call(null,this$,value));
} else {
var m__7047__auto____$1 = (alandipert.storage_atom._commit_BANG_["_"]);
if(!((m__7047__auto____$1 == null))){
return (m__7047__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7047__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,value) : m__7047__auto____$1.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("IStorageBackend.-commit!",this$);
}
}
}
});


/**
* @constructor
 * @implements {alandipert.storage_atom.IStorageBackend}
*/
alandipert.storage_atom.StorageBackend = (function (store,key){
this.store = store;
this.key = key;
})
alandipert.storage_atom.StorageBackend.prototype.alandipert$storage_atom$IStorageBackend$ = true;

alandipert.storage_atom.StorageBackend.prototype.alandipert$storage_atom$IStorageBackend$_get$arity$2 = (function (this$,not_found){
var self__ = this;
var this$__$1 = this;
var temp__4655__auto__ = self__.store.getItem(tailrecursion.cljson.clj__GT_cljson(self__.key));
if(cljs.core.truth_(temp__4655__auto__)){
var existing = temp__4655__auto__;
return tailrecursion.cljson.cljson__GT_clj(existing);
} else {
return not_found;
}
});

alandipert.storage_atom.StorageBackend.prototype.alandipert$storage_atom$IStorageBackend$_commit_BANG_$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return self__.store.setItem(tailrecursion.cljson.clj__GT_cljson(self__.key),tailrecursion.cljson.clj__GT_cljson(value));
});

alandipert.storage_atom.StorageBackend.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$store,cljs.core.cst$sym$key], null);
});

alandipert.storage_atom.StorageBackend.cljs$lang$type = true;

alandipert.storage_atom.StorageBackend.cljs$lang$ctorStr = "alandipert.storage-atom/StorageBackend";

alandipert.storage_atom.StorageBackend.cljs$lang$ctorPrWriter = (function (this__6989__auto__,writer__6990__auto__,opt__6991__auto__){
return cljs.core._write(writer__6990__auto__,"alandipert.storage-atom/StorageBackend");
});

alandipert.storage_atom.__GT_StorageBackend = (function alandipert$storage_atom$__GT_StorageBackend(store,key){
return (new alandipert.storage_atom.StorageBackend(store,key));
});

/**
 * Return a function that will always store a future call into the
 *   same atom. If recalled before the time is elapsed, the call is
 *   replaced without being executed.
 */
alandipert.storage_atom.debounce_factory = (function alandipert$storage_atom$debounce_factory(){
var f = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
return ((function (f){
return (function (func,ttime){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(f) : cljs.core.deref.call(null,f)))){
var G__33164_33167 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(f) : cljs.core.deref.call(null,f));
goog.Timer.clear(G__33164_33167);
} else {
}

var G__33165 = f;
var G__33166 = goog.Timer.callOnce(func,ttime);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33165,G__33166) : cljs.core.reset_BANG_.call(null,G__33165,G__33166));
});
;})(f))
});
/**
 * Delay in ms before a change is committed to the local storage. If a
 * new change occurs before the time is elapsed, the old change is
 * discarded an only the new one is committed.
 */
alandipert.storage_atom.storage_delay = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((10)) : cljs.core.atom.call(null,(10)));
alandipert.storage_atom._STAR_storage_delay_STAR_ = null;
alandipert.storage_atom._STAR_watch_active_STAR_ = true;
alandipert.storage_atom.store = (function alandipert$storage_atom$store(atom,backend){
var existing = alandipert.storage_atom._get(backend,cljs.core.cst$kw$alandipert$storage_DASH_atom_SLASH_none);
var debounce = alandipert.storage_atom.debounce_factory();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$alandipert$storage_DASH_atom_SLASH_none,existing)){
alandipert.storage_atom._commit_BANG_(backend,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom)));
} else {
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom,existing) : cljs.core.reset_BANG_.call(null,atom,existing));
}

var G__33175 = atom;
cljs.core.add_watch(G__33175,cljs.core.cst$kw$alandipert$storage_DASH_atom_SLASH_storage_DASH_watch,((function (G__33175,existing,debounce){
return (function (p1__33170_SHARP_,p2__33171_SHARP_,p3__33168_SHARP_,p4__33169_SHARP_){
if(cljs.core.truth_((function (){var and__6371__auto__ = alandipert.storage_atom._STAR_watch_active_STAR_;
if(cljs.core.truth_(and__6371__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p3__33168_SHARP_,p4__33169_SHARP_);
} else {
return and__6371__auto__;
}
})())){
var G__33176 = ((function (G__33175,existing,debounce){
return (function (){
return alandipert.storage_atom._commit_BANG_(backend,p4__33169_SHARP_);
});})(G__33175,existing,debounce))
;
var G__33177 = (function (){var or__6383__auto__ = alandipert.storage_atom._STAR_storage_delay_STAR_;
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(alandipert.storage_atom.storage_delay) : cljs.core.deref.call(null,alandipert.storage_atom.storage_delay));
}
})();
return (debounce.cljs$core$IFn$_invoke$arity$2 ? debounce.cljs$core$IFn$_invoke$arity$2(G__33176,G__33177) : debounce.call(null,G__33176,G__33177));
} else {
return null;
}
});})(G__33175,existing,debounce))
);

return G__33175;
});
alandipert.storage_atom.maybe_update_backend = (function alandipert$storage_atom$maybe_update_backend(atom,storage,k,default$,e){
if((storage === e.storageArea)){
if(cljs.core.empty_QMARK_(e.key)){
var _STAR_watch_active_STAR_33182 = alandipert.storage_atom._STAR_watch_active_STAR_;
alandipert.storage_atom._STAR_watch_active_STAR_ = false;

try{return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom,default$) : cljs.core.reset_BANG_.call(null,atom,default$));
}finally {alandipert.storage_atom._STAR_watch_active_STAR_ = _STAR_watch_active_STAR_33182;
}} else {
var temp__4657__auto__ = tailrecursion.cljson.cljson__GT_clj(e.key);
if(cljs.core.truth_(temp__4657__auto__)){
var sk = temp__4657__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sk,k)){
var _STAR_watch_active_STAR_33183 = alandipert.storage_atom._STAR_watch_active_STAR_;
alandipert.storage_atom._STAR_watch_active_STAR_ = false;

try{var G__33184 = atom;
var G__33185 = (function (){var temp__4655__auto__ = e.newValue;
if(cljs.core.truth_(temp__4655__auto__)){
var value = temp__4655__auto__;
return tailrecursion.cljson.cljson__GT_clj(value);
} else {
return default$;
}
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33184,G__33185) : cljs.core.reset_BANG_.call(null,G__33184,G__33185));
}finally {alandipert.storage_atom._STAR_watch_active_STAR_ = _STAR_watch_active_STAR_33183;
}} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
});
alandipert.storage_atom.link_storage = (function alandipert$storage_atom$link_storage(atom,storage,k){
var default$ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
return window.addEventListener("storage",((function (default$){
return (function (p1__33186_SHARP_){
return alandipert.storage_atom.maybe_update_backend(atom,storage,k,default$,p1__33186_SHARP_);
});})(default$))
);
});
/**
 * Create and dispatch a synthetic StorageEvent. Expects key to be a string.
 *   An empty key indicates that all storage is being cleared.
 */
alandipert.storage_atom.dispatch_remove_event_BANG_ = (function alandipert$storage_atom$dispatch_remove_event_BANG_(storage,key){
var event = (new StorageEvent("storage"));
event.initStorageEvent("storage",false,false,key,null,null,window.location.href,storage);

window.dispatchEvent(event);

return null;
});
alandipert.storage_atom.load_html_storage = (function alandipert$storage_atom$load_html_storage(storage,k){
return (new alandipert.storage_atom.StorageBackend(storage,k)).alandipert$storage_atom$IStorageBackend$_get$arity$2(null,null);
});
alandipert.storage_atom.load_local_storage = (function alandipert$storage_atom$load_local_storage(k){
return alandipert.storage_atom.load_html_storage(localStorage,k);
});
alandipert.storage_atom.load_session_storage = (function alandipert$storage_atom$load_session_storage(k){
return alandipert.storage_atom.load_html_storage(sessionStorage,k);
});
alandipert.storage_atom.html_storage = (function alandipert$storage_atom$html_storage(atom,storage,k){
alandipert.storage_atom.link_storage(atom,storage,k);

return alandipert.storage_atom.store(atom,(new alandipert.storage_atom.StorageBackend(storage,k)));
});
alandipert.storage_atom.local_storage = (function alandipert$storage_atom$local_storage(atom,k){
return alandipert.storage_atom.html_storage(atom,localStorage,k);
});
alandipert.storage_atom.session_storage = (function alandipert$storage_atom$session_storage(atom,k){
return alandipert.storage_atom.html_storage(atom,sessionStorage,k);
});
/**
 * Clear storage and also trigger an event on the current window
 *   so its atoms will be cleared as well.
 */
alandipert.storage_atom.clear_html_storage_BANG_ = (function alandipert$storage_atom$clear_html_storage_BANG_(storage){
storage.clear();

return alandipert.storage_atom.dispatch_remove_event_BANG_(storage,"");
});
alandipert.storage_atom.clear_local_storage_BANG_ = (function alandipert$storage_atom$clear_local_storage_BANG_(){
return alandipert.storage_atom.clear_html_storage_BANG_(localStorage);
});
alandipert.storage_atom.clear_session_storage_BANG_ = (function alandipert$storage_atom$clear_session_storage_BANG_(){
return alandipert.storage_atom.clear_html_storage_BANG_(sessionStorage);
});
/**
 * Remove key from storage and also trigger an event on the current
 *   window so its atoms will be cleared as well.
 */
alandipert.storage_atom.remove_html_storage_BANG_ = (function alandipert$storage_atom$remove_html_storage_BANG_(storage,k){
var key = tailrecursion.cljson.clj__GT_cljson(k);
storage.removeItem(key);

return alandipert.storage_atom.dispatch_remove_event_BANG_(storage,key);
});
alandipert.storage_atom.remove_local_storage_BANG_ = (function alandipert$storage_atom$remove_local_storage_BANG_(k){
return alandipert.storage_atom.remove_html_storage_BANG_(localStorage,k);
});
alandipert.storage_atom.remove_session_storage_BANG_ = (function alandipert$storage_atom$remove_session_storage_BANG_(k){
return alandipert.storage_atom.remove_html_storage_BANG_(sessionStorage,k);
});
