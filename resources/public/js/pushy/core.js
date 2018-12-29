// Compiled by ClojureScript 1.9.229 {}
goog.provide('pushy.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('clojure.string');
goog.require('goog.History');
goog.require('goog.history.Html5History');
goog.require('goog.history.Html5History.TokenTransformer');
goog.require('goog.history.EventType');
goog.require('goog.Uri');
pushy.core.on_click = (function pushy$core$on_click(funk){
return goog.events.listen(document,"click",funk);
});
pushy.core.update_history_BANG_ = (function pushy$core$update_history_BANG_(h){
var G__7647 = h;
G__7647.setUseFragment(false);

G__7647.setPathPrefix("");

G__7647.setEnabled(true);

return G__7647;
});
pushy.core.set_retrieve_token_BANG_ = (function pushy$core$set_retrieve_token_BANG_(t){
t.retrieveToken = (function (path_prefix,location){
return [cljs.core.str(location.pathname),cljs.core.str(location.search)].join('');
});

return t;
});
pushy.core.set_create_url_BANG_ = (function pushy$core$set_create_url_BANG_(t){
t.createUrl = (function (token,path_prefix,location){
return [cljs.core.str(path_prefix),cljs.core.str(token)].join('');
});

return t;
});
pushy.core.new_history = (function pushy$core$new_history(var_args){
var args7648 = [];
var len__7458__auto___7651 = arguments.length;
var i__7459__auto___7652 = (0);
while(true){
if((i__7459__auto___7652 < len__7458__auto___7651)){
args7648.push((arguments[i__7459__auto___7652]));

var G__7653 = (i__7459__auto___7652 + (1));
i__7459__auto___7652 = G__7653;
continue;
} else {
}
break;
}

var G__7650 = args7648.length;
switch (G__7650) {
case 0:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7648.length)].join('')));

}
});

pushy.core.new_history.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.new_history.call(null,pushy.core.set_create_url_BANG_.call(null,pushy.core.set_retrieve_token_BANG_.call(null,(new goog.history.Html5History.TokenTransformer()))));
});

pushy.core.new_history.cljs$core$IFn$_invoke$arity$1 = (function (transformer){
return pushy.core.update_history_BANG_.call(null,(new goog.history.Html5History(window,transformer)));
});

pushy.core.new_history.cljs$lang$maxFixedArity = 1;


/**
 * @interface
 */
pushy.core.IHistory = function(){};

pushy.core.set_token_BANG_ = (function pushy$core$set_token_BANG_(var_args){
var args7655 = [];
var len__7458__auto___7661 = arguments.length;
var i__7459__auto___7662 = (0);
while(true){
if((i__7459__auto___7662 < len__7458__auto___7661)){
args7655.push((arguments[i__7459__auto___7662]));

var G__7663 = (i__7459__auto___7662 + (1));
i__7459__auto___7662 = G__7663;
continue;
} else {
}
break;
}

var G__7657 = args7655.length;
switch (G__7657) {
case 2:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7655.length)].join('')));

}
});

pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$set_token_BANG_$arity$2 == null)))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$2(this$,token);
} else {
var x__7046__auto__ = (((this$ == null))?null:this$);
var m__7047__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__7046__auto__)]);
if(!((m__7047__auto__ == null))){
return m__7047__auto__.call(null,this$,token);
} else {
var m__7047__auto____$1 = (pushy.core.set_token_BANG_["_"]);
if(!((m__7047__auto____$1 == null))){
return m__7047__auto____$1.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$set_token_BANG_$arity$3 == null)))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$3(this$,token,title);
} else {
var x__7046__auto__ = (((this$ == null))?null:this$);
var m__7047__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__7046__auto__)]);
if(!((m__7047__auto__ == null))){
return m__7047__auto__.call(null,this$,token,title);
} else {
var m__7047__auto____$1 = (pushy.core.set_token_BANG_["_"]);
if(!((m__7047__auto____$1 == null))){
return m__7047__auto____$1.call(null,this$,token,title);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$lang$maxFixedArity = 3;


pushy.core.replace_token_BANG_ = (function pushy$core$replace_token_BANG_(var_args){
var args7658 = [];
var len__7458__auto___7665 = arguments.length;
var i__7459__auto___7666 = (0);
while(true){
if((i__7459__auto___7666 < len__7458__auto___7665)){
args7658.push((arguments[i__7459__auto___7666]));

var G__7667 = (i__7459__auto___7666 + (1));
i__7459__auto___7666 = G__7667;
continue;
} else {
}
break;
}

var G__7660 = args7658.length;
switch (G__7660) {
case 2:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7658.length)].join('')));

}
});

pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$replace_token_BANG_$arity$2 == null)))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$2(this$,token);
} else {
var x__7046__auto__ = (((this$ == null))?null:this$);
var m__7047__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__7046__auto__)]);
if(!((m__7047__auto__ == null))){
return m__7047__auto__.call(null,this$,token);
} else {
var m__7047__auto____$1 = (pushy.core.replace_token_BANG_["_"]);
if(!((m__7047__auto____$1 == null))){
return m__7047__auto____$1.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.replace-token!",this$);
}
}
}
});

pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$replace_token_BANG_$arity$3 == null)))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$3(this$,token,title);
} else {
var x__7046__auto__ = (((this$ == null))?null:this$);
var m__7047__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__7046__auto__)]);
if(!((m__7047__auto__ == null))){
return m__7047__auto__.call(null,this$,token,title);
} else {
var m__7047__auto____$1 = (pushy.core.replace_token_BANG_["_"]);
if(!((m__7047__auto____$1 == null))){
return m__7047__auto____$1.call(null,this$,token,title);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.replace-token!",this$);
}
}
}
});

pushy.core.replace_token_BANG_.cljs$lang$maxFixedArity = 3;


pushy.core.get_token = (function pushy$core$get_token(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$get_token$arity$1 == null)))){
return this$.pushy$core$IHistory$get_token$arity$1(this$);
} else {
var x__7046__auto__ = (((this$ == null))?null:this$);
var m__7047__auto__ = (pushy.core.get_token[goog.typeOf(x__7046__auto__)]);
if(!((m__7047__auto__ == null))){
return m__7047__auto__.call(null,this$);
} else {
var m__7047__auto____$1 = (pushy.core.get_token["_"]);
if(!((m__7047__auto____$1 == null))){
return m__7047__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.get-token",this$);
}
}
}
});

pushy.core.start_BANG_ = (function pushy$core$start_BANG_(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$start_BANG_$arity$1 == null)))){
return this$.pushy$core$IHistory$start_BANG_$arity$1(this$);
} else {
var x__7046__auto__ = (((this$ == null))?null:this$);
var m__7047__auto__ = (pushy.core.start_BANG_[goog.typeOf(x__7046__auto__)]);
if(!((m__7047__auto__ == null))){
return m__7047__auto__.call(null,this$);
} else {
var m__7047__auto____$1 = (pushy.core.start_BANG_["_"]);
if(!((m__7047__auto____$1 == null))){
return m__7047__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.start!",this$);
}
}
}
});

pushy.core.stop_BANG_ = (function pushy$core$stop_BANG_(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$stop_BANG_$arity$1 == null)))){
return this$.pushy$core$IHistory$stop_BANG_$arity$1(this$);
} else {
var x__7046__auto__ = (((this$ == null))?null:this$);
var m__7047__auto__ = (pushy.core.stop_BANG_[goog.typeOf(x__7046__auto__)]);
if(!((m__7047__auto__ == null))){
return m__7047__auto__.call(null,this$);
} else {
var m__7047__auto____$1 = (pushy.core.stop_BANG_["_"]);
if(!((m__7047__auto____$1 == null))){
return m__7047__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.stop!",this$);
}
}
}
});

pushy.core.processable_url_QMARK_ = (function pushy$core$processable_url_QMARK_(uri){
return (!(clojure.string.blank_QMARK_.call(null,uri))) && (((cljs.core.not.call(null,uri.hasScheme())) && (cljs.core.not.call(null,uri.hasDomain()))) || (cljs.core.some_QMARK_.call(null,cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("^"),cljs.core.str(location.origin),cljs.core.str(".*$")].join('')),[cljs.core.str(uri)].join('')))));
});
pushy.core.get_token_from_uri = (function pushy$core$get_token_from_uri(uri){
var path = uri.getPath();
var query = uri.getQuery();
if(cljs.core.empty_QMARK_.call(null,query)){
return path;
} else {
return [cljs.core.str(path),cljs.core.str("?"),cljs.core.str(query)].join('');
}
});
/**
 * Takes in three functions:
 *  * dispatch-fn: the function that dispatches when a match is found
 *  * match-fn: the function used to check if a particular route exists
 *  * identity-fn: (optional) extract the route from value returned by match-fn
 */
pushy.core.pushy = (function pushy$core$pushy(var_args){
var args__7465__auto__ = [];
var len__7458__auto___7683 = arguments.length;
var i__7459__auto___7684 = (0);
while(true){
if((i__7459__auto___7684 < len__7458__auto___7683)){
args__7465__auto__.push((arguments[i__7459__auto___7684]));

var G__7685 = (i__7459__auto___7684 + (1));
i__7459__auto___7684 = G__7685;
continue;
} else {
}
break;
}

var argseq__7466__auto__ = ((((2) < args__7465__auto__.length))?(new cljs.core.IndexedSeq(args__7465__auto__.slice((2)),(0),null)):null);
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7466__auto__);
});

pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic = (function (dispatch_fn,match_fn,p__7672){
var map__7673 = p__7672;
var map__7673__$1 = ((((!((map__7673 == null)))?((((map__7673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7673):map__7673);
var processable_url_QMARK_ = cljs.core.get.call(null,map__7673__$1,new cljs.core.Keyword(null,"processable-url?","processable-url?",1865408336),pushy.core.processable_url_QMARK_);
var identity_fn = cljs.core.get.call(null,map__7673__$1,new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),cljs.core.identity);
var prevent_default_when_no_match_QMARK_ = cljs.core.get.call(null,map__7673__$1,new cljs.core.Keyword(null,"prevent-default-when-no-match?","prevent-default-when-no-match?",-358623618),cljs.core.constantly.call(null,false));
var history = pushy.core.new_history.call(null);
var event_keys = cljs.core.atom.call(null,null);
if(typeof pushy.core.t_pushy$core7675 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {pushy.core.IHistory}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
pushy.core.t_pushy$core7675 = (function (dispatch_fn,match_fn,p__7672,map__7673,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_,history,event_keys,meta7676){
this.dispatch_fn = dispatch_fn;
this.match_fn = match_fn;
this.p__7672 = p__7672;
this.map__7673 = map__7673;
this.processable_url_QMARK_ = processable_url_QMARK_;
this.identity_fn = identity_fn;
this.prevent_default_when_no_match_QMARK_ = prevent_default_when_no_match_QMARK_;
this.history = history;
this.event_keys = event_keys;
this.meta7676 = meta7676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
pushy.core.t_pushy$core7675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (history,event_keys,map__7673,map__7673__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_7677,meta7676__$1){
var self__ = this;
var _7677__$1 = this;
return (new pushy.core.t_pushy$core7675(self__.dispatch_fn,self__.match_fn,self__.p__7672,self__.map__7673,self__.processable_url_QMARK_,self__.identity_fn,self__.prevent_default_when_no_match_QMARK_,self__.history,self__.event_keys,meta7676__$1));
});})(history,event_keys,map__7673,map__7673__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core7675.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (history,event_keys,map__7673,map__7673__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_7677){
var self__ = this;
var _7677__$1 = this;
return self__.meta7676;
});})(history,event_keys,map__7673,map__7673__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core7675.prototype.pushy$core$IHistory$ = true;

pushy.core.t_pushy$core7675.prototype.pushy$core$IHistory$set_token_BANG_$arity$2 = ((function (history,event_keys,map__7673,map__7673__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token);
});})(history,event_keys,map__7673,map__7673__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core7675.prototype.pushy$core$IHistory$set_token_BANG_$arity$3 = ((function (history,event_keys,map__7673,map__7673__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token,title);
});})(history,event_keys,map__7673,map__7673__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core7675.prototype.pushy$core$IHistory$replace_token_BANG_$arity$2 = ((function (history,event_keys,map__7673,map__7673__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token);
});})(history,event_keys,map__7673,map__7673__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core7675.prototype.pushy$core$IHistory$replace_token_BANG_$arity$3 = ((function (history,event_keys,map__7673,map__7673__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token,title);
});})(history,event_keys,map__7673,map__7673__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core7675.prototype.pushy$core$IHistory$get_token$arity$1 = ((function (history,event_keys,map__7673,map__7673__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.history.getToken();
});})(history,event_keys,map__7673,map__7673__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core7675.prototype.pushy$core$IHistory$start_BANG_$arity$1 = ((function (history,event_keys,map__7673,map__7673__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
pushy.core.stop_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,goog.events.listen(self__.history,goog.history.EventType.NAVIGATE,((function (this$__$1,history,event_keys,map__7673,map__7673__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (e){
var temp__4657__auto__ = self__.identity_fn.call(null,self__.match_fn.call(null,e.token));
if(cljs.core.truth_(temp__4657__auto__)){
var match = temp__4657__auto__;
return self__.dispatch_fn.call(null,match);
} else {
return null;
}
});})(this$__$1,history,event_keys,map__7673,map__7673__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
));

var temp__4657__auto___7686 = self__.identity_fn.call(null,self__.match_fn.call(null,pushy.core.get_token.call(null,this$__$1)));
if(cljs.core.truth_(temp__4657__auto___7686)){
var match_7687 = temp__4657__auto___7686;
self__.dispatch_fn.call(null,match_7687);
} else {
}

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,pushy.core.on_click.call(null,((function (this$__$1,history,event_keys,map__7673,map__7673__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (e){
var temp__4657__auto__ = (function (){var G__7678 = e;
var G__7678__$1 = (((G__7678 == null))?null:G__7678.target);
if((G__7678__$1 == null)){
return null;
} else {
return G__7678__$1.closest("a");
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var el = temp__4657__auto__;
var uri = goog.Uri.parse(el.href);
if(cljs.core.truth_((function (){var and__6371__auto__ = self__.processable_url_QMARK_.call(null,uri);
if(cljs.core.truth_(and__6371__auto__)){
return (cljs.core.not.call(null,e.altKey)) && (cljs.core.not.call(null,e.ctrlKey)) && (cljs.core.not.call(null,e.metaKey)) && (cljs.core.not.call(null,e.shiftKey)) && (cljs.core.not.call(null,cljs.core.get.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["_self",null,"_blank",null], null), null),el.getAttribute("target")))) && ((cljs.core.not.call(null,el.hasAttribute("data-pushy-ignore"))) || (cljs.core._EQ_.call(null,el.getAttribute("data-pushy-ignore"),"false"))) && (cljs.core._EQ_.call(null,(0),e.button));
} else {
return and__6371__auto__;
}
})())){
var next_token = pushy.core.get_token_from_uri.call(null,uri);
if(cljs.core.truth_(self__.identity_fn.call(null,self__.match_fn.call(null,next_token)))){
var temp__4655__auto___7688 = el.title;
if(cljs.core.truth_(temp__4655__auto___7688)){
var title_7689 = temp__4655__auto___7688;
pushy.core.set_token_BANG_.call(null,this$__$1,next_token,title_7689);
} else {
pushy.core.set_token_BANG_.call(null,this$__$1,next_token);
}

return e.preventDefault();
} else {
if(cljs.core.truth_(self__.prevent_default_when_no_match_QMARK_.call(null,next_token))){
return e.preventDefault();
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
});})(this$__$1,history,event_keys,map__7673,map__7673__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
));

return null;
});})(history,event_keys,map__7673,map__7673__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core7675.prototype.pushy$core$IHistory$stop_BANG_$arity$1 = ((function (history,event_keys,map__7673,map__7673__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__7679_7690 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.event_keys));
var chunk__7680_7691 = null;
var count__7681_7692 = (0);
var i__7682_7693 = (0);
while(true){
if((i__7682_7693 < count__7681_7692)){
var key_7694 = cljs.core._nth.call(null,chunk__7680_7691,i__7682_7693);
goog.events.unlistenByKey(key_7694);

var G__7695 = seq__7679_7690;
var G__7696 = chunk__7680_7691;
var G__7697 = count__7681_7692;
var G__7698 = (i__7682_7693 + (1));
seq__7679_7690 = G__7695;
chunk__7680_7691 = G__7696;
count__7681_7692 = G__7697;
i__7682_7693 = G__7698;
continue;
} else {
var temp__4657__auto___7699 = cljs.core.seq.call(null,seq__7679_7690);
if(temp__4657__auto___7699){
var seq__7679_7700__$1 = temp__4657__auto___7699;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7679_7700__$1)){
var c__7194__auto___7701 = cljs.core.chunk_first.call(null,seq__7679_7700__$1);
var G__7702 = cljs.core.chunk_rest.call(null,seq__7679_7700__$1);
var G__7703 = c__7194__auto___7701;
var G__7704 = cljs.core.count.call(null,c__7194__auto___7701);
var G__7705 = (0);
seq__7679_7690 = G__7702;
chunk__7680_7691 = G__7703;
count__7681_7692 = G__7704;
i__7682_7693 = G__7705;
continue;
} else {
var key_7706 = cljs.core.first.call(null,seq__7679_7700__$1);
goog.events.unlistenByKey(key_7706);

var G__7707 = cljs.core.next.call(null,seq__7679_7700__$1);
var G__7708 = null;
var G__7709 = (0);
var G__7710 = (0);
seq__7679_7690 = G__7707;
chunk__7680_7691 = G__7708;
count__7681_7692 = G__7709;
i__7682_7693 = G__7710;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,self__.event_keys,null);
});})(history,event_keys,map__7673,map__7673__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core7675.getBasis = ((function (history,event_keys,map__7673,map__7673__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatch-fn","dispatch-fn",-1401088155,null),new cljs.core.Symbol(null,"match-fn","match-fn",-795226853,null),new cljs.core.Symbol(null,"p__7672","p__7672",543695120,null),new cljs.core.Symbol(null,"map__7673","map__7673",-511068569,null),new cljs.core.Symbol(null,"processable-url?","processable-url?",-789027433,null),new cljs.core.Symbol(null,"identity-fn","identity-fn",756348900,null),new cljs.core.Symbol(null,"prevent-default-when-no-match?","prevent-default-when-no-match?",1281907909,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"event-keys","event-keys",804564896,null),new cljs.core.Symbol(null,"meta7676","meta7676",-813071431,null)], null);
});})(history,event_keys,map__7673,map__7673__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core7675.cljs$lang$type = true;

pushy.core.t_pushy$core7675.cljs$lang$ctorStr = "pushy.core/t_pushy$core7675";

pushy.core.t_pushy$core7675.cljs$lang$ctorPrWriter = ((function (history,event_keys,map__7673,map__7673__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (this__6989__auto__,writer__6990__auto__,opt__6991__auto__){
return cljs.core._write.call(null,writer__6990__auto__,"pushy.core/t_pushy$core7675");
});})(history,event_keys,map__7673,map__7673__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.__GT_t_pushy$core7675 = ((function (history,event_keys,map__7673,map__7673__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function pushy$core$__GT_t_pushy$core7675(dispatch_fn__$1,match_fn__$1,p__7672__$1,map__7673__$2,processable_url_QMARK___$1,identity_fn__$1,prevent_default_when_no_match_QMARK___$1,history__$1,event_keys__$1,meta7676){
return (new pushy.core.t_pushy$core7675(dispatch_fn__$1,match_fn__$1,p__7672__$1,map__7673__$2,processable_url_QMARK___$1,identity_fn__$1,prevent_default_when_no_match_QMARK___$1,history__$1,event_keys__$1,meta7676));
});})(history,event_keys,map__7673,map__7673__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

}

return (new pushy.core.t_pushy$core7675(dispatch_fn,match_fn,p__7672,map__7673__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_,history,event_keys,cljs.core.PersistentArrayMap.EMPTY));
});

pushy.core.pushy.cljs$lang$maxFixedArity = (2);

pushy.core.pushy.cljs$lang$applyTo = (function (seq7669){
var G__7670 = cljs.core.first.call(null,seq7669);
var seq7669__$1 = cljs.core.next.call(null,seq7669);
var G__7671 = cljs.core.first.call(null,seq7669__$1);
var seq7669__$2 = cljs.core.next.call(null,seq7669__$1);
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic(G__7670,G__7671,seq7669__$2);
});

/**
 * Returns whether Html5History is supported
 */
pushy.core.supported_QMARK_ = (function pushy$core$supported_QMARK_(var_args){
var args7711 = [];
var len__7458__auto___7714 = arguments.length;
var i__7459__auto___7715 = (0);
while(true){
if((i__7459__auto___7715 < len__7458__auto___7714)){
args7711.push((arguments[i__7459__auto___7715]));

var G__7716 = (i__7459__auto___7715 + (1));
i__7459__auto___7715 = G__7716;
continue;
} else {
}
break;
}

var G__7713 = args7711.length;
switch (G__7713) {
case 0:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7711.length)].join('')));

}
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.supported_QMARK_.call(null,window);
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (window){
return goog.history.Html5History.isSupported(window);
});

pushy.core.supported_QMARK_.cljs$lang$maxFixedArity = 1;

pushy.core.push_state_BANG_ = (function pushy$core$push_state_BANG_(var_args){
var args7718 = [];
var len__7458__auto___7721 = arguments.length;
var i__7459__auto___7722 = (0);
while(true){
if((i__7459__auto___7722 < len__7458__auto___7721)){
args7718.push((arguments[i__7459__auto___7722]));

var G__7723 = (i__7459__auto___7722 + (1));
i__7459__auto___7722 = G__7723;
continue;
} else {
}
break;
}

var G__7720 = args7718.length;
switch (G__7720) {
case 2:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7718.length)].join('')));

}
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (dispatch_fn,match_fn){
return pushy.core.push_state_BANG_.call(null,dispatch_fn,match_fn,cljs.core.identity);
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dispatch_fn,match_fn,identity_fn){
var h = pushy.core.pushy.call(null,dispatch_fn,match_fn,new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),identity_fn);
pushy.core.start_BANG_.call(null,h);

return h;
});

pushy.core.push_state_BANG_.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map