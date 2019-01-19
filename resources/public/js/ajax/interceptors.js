// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('ajax.interceptors');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.util');
goog.require('ajax.url');
goog.require('ajax.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7005__auto__,k__7006__auto__){
var self__ = this;
var this__7005__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7005__auto____$1,k__7006__auto__,null);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7007__auto__,k24598,else__7008__auto__){
var self__ = this;
var this__7007__auto____$1 = this;
var G__24600 = (((k24598 instanceof cljs.core.Keyword))?k24598.fqn:null);
switch (G__24600) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24598,else__7008__auto__);

}
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = true;

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__24601,opts){
var self__ = this;
var map__24602 = p__24601;
var map__24602__$1 = ((((!((map__24602 == null)))?((((map__24602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24602):map__24602);
var request__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24602__$1,cljs.core.cst$kw$request);
var map__24604 = this;
var map__24604__$1 = ((((!((map__24604 == null)))?((((map__24604.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24604.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24604):map__24604);
var request__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24604__$1,cljs.core.cst$kw$request);
return (request__$2.cljs$core$IFn$_invoke$arity$1 ? request__$2.cljs$core$IFn$_invoke$arity$1(opts) : request__$2.call(null,opts));
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__24606,xhrio){
var self__ = this;
var map__24607 = p__24606;
var map__24607__$1 = ((((!((map__24607 == null)))?((((map__24607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24607):map__24607);
var response__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24607__$1,cljs.core.cst$kw$response);
var map__24609 = this;
var map__24609__$1 = ((((!((map__24609 == null)))?((((map__24609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24609):map__24609);
var response__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24609__$1,cljs.core.cst$kw$response);
return (response__$2.cljs$core$IFn$_invoke$arity$1 ? response__$2.cljs$core$IFn$_invoke$arity$1(xhrio) : response__$2.call(null,xhrio));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7019__auto__,writer__7020__auto__,opts__7021__auto__){
var self__ = this;
var this__7019__auto____$1 = this;
var pr_pair__7022__auto__ = ((function (this__7019__auto____$1){
return (function (keyval__7023__auto__){
return cljs.core.pr_sequential_writer(writer__7020__auto__,cljs.core.pr_writer,""," ","",opts__7021__auto__,keyval__7023__auto__);
});})(this__7019__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7020__auto__,pr_pair__7022__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__7021__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request,self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response,self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$ = true;

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24597){
var self__ = this;
var G__24597__$1 = this;
return (new cljs.core.RecordIter((0),G__24597__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$request,cljs.core.cst$kw$response], null),cljs.core._iterator(self__.__extmap)));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7003__auto__){
var self__ = this;
var this__7003__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6999__auto__){
var self__ = this;
var this__6999__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7009__auto__){
var self__ = this;
var this__7009__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7000__auto__){
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

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7001__auto__,other__7002__auto__){
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

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7014__auto__,k__7015__auto__){
var self__ = this;
var this__7014__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$response,null,cljs.core.cst$kw$request,null,cljs.core.cst$kw$name,null], null), null),k__7015__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7014__auto____$1),self__.__meta),k__7015__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7015__auto__)),null));
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7012__auto__,k__7013__auto__,G__24597){
var self__ = this;
var this__7012__auto____$1 = this;
var pred__24611 = cljs.core.keyword_identical_QMARK_;
var expr__24612 = k__7013__auto__;
if(cljs.core.truth_((function (){var G__24614 = cljs.core.cst$kw$name;
var G__24615 = expr__24612;
return (pred__24611.cljs$core$IFn$_invoke$arity$2 ? pred__24611.cljs$core$IFn$_invoke$arity$2(G__24614,G__24615) : pred__24611.call(null,G__24614,G__24615));
})())){
return (new ajax.interceptors.StandardInterceptor(G__24597,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24616 = cljs.core.cst$kw$request;
var G__24617 = expr__24612;
return (pred__24611.cljs$core$IFn$_invoke$arity$2 ? pred__24611.cljs$core$IFn$_invoke$arity$2(G__24616,G__24617) : pred__24611.call(null,G__24616,G__24617));
})())){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__24597,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24618 = cljs.core.cst$kw$response;
var G__24619 = expr__24612;
return (pred__24611.cljs$core$IFn$_invoke$arity$2 ? pred__24611.cljs$core$IFn$_invoke$arity$2(G__24618,G__24619) : pred__24611.call(null,G__24618,G__24619));
})())){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__24597,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7013__auto__,G__24597),null));
}
}
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7017__auto__){
var self__ = this;
var this__7017__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request,self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response,self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7004__auto__,G__24597){
var self__ = this;
var this__7004__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__24597,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7010__auto__,entry__7011__auto__){
var self__ = this;
var this__7010__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7011__auto__)){
return cljs.core._assoc(this__7010__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7011__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7011__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7010__auto____$1,entry__7011__auto__);
}
});

ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$request,cljs.core.cst$sym$response], null);
});

ajax.interceptors.StandardInterceptor.cljs$lang$type = true;

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__7039__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__7039__auto__,writer__7040__auto__){
return cljs.core._write(writer__7040__auto__,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__24599){
return (new ajax.interceptors.StandardInterceptor(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__24599),cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(G__24599),cljs.core.cst$kw$response.cljs$core$IFn$_invoke$arity$1(G__24599),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24599,cljs.core.cst$kw$name,cljs.core.array_seq([cljs.core.cst$kw$request,cljs.core.cst$kw$response], 0)),null));
});

ajax.interceptors.to_interceptor = (function ajax$interceptors$to_interceptor(m){

return ajax.interceptors.map__GT_StandardInterceptor(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$request,cljs.core.identity,cljs.core.cst$kw$response,cljs.core.identity], null),m], 0)));
});
ajax.interceptors.exception_message = (function ajax$interceptors$exception_message(e){
return e.message;
});
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__24621,xhrio){
var map__24624 = p__24621;
var map__24624__$1 = ((((!((map__24624 == null)))?((((map__24624.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24624.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24624):map__24624);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24624__$1,cljs.core.cst$kw$description);
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,status,cljs.core.cst$kw$failure,cljs.core.cst$kw$error,cljs.core.cst$kw$response,null], null);
var status_text = [cljs.core.str(ajax.interceptors.exception_message(e)),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.cst$kw$status_DASH_text,status_text,cljs.core.array_seq([cljs.core.cst$kw$failure,cljs.core.cst$kw$parse,cljs.core.cst$kw$original_DASH_text,ajax.protocols._body(xhrio)], 0));
if(cljs.core.truth_(ajax.util.success_QMARK_(status))){
return parse_error;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.cst$kw$status_DASH_text,ajax.protocols._status_text(xhrio),cljs.core.array_seq([cljs.core.cst$kw$parse_DASH_error,parse_error], 0));
}
});
ajax.interceptors.fail = (function ajax$interceptors$fail(var_args){
var args__7461__auto__ = [];
var len__7454__auto___24630 = arguments.length;
var i__7455__auto___24631 = (0);
while(true){
if((i__7455__auto___24631 < len__7454__auto___24630)){
args__7461__auto__.push((arguments[i__7455__auto___24631]));

var G__24632 = (i__7455__auto___24631 + (1));
i__7455__auto___24631 = G__24632;
continue;
} else {
}
break;
}

var argseq__7462__auto__ = ((((3) < args__7461__auto__.length))?(new cljs.core.IndexedSeq(args__7461__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7462__auto__);
});

ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,status,cljs.core.cst$kw$status_DASH_text,status_text,cljs.core.cst$kw$failure,failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,response,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),params)))], null);
});

ajax.interceptors.fail.cljs$lang$maxFixedArity = (3);

ajax.interceptors.fail.cljs$lang$applyTo = (function (seq24626){
var G__24627 = cljs.core.first(seq24626);
var seq24626__$1 = cljs.core.next(seq24626);
var G__24628 = cljs.core.first(seq24626__$1);
var seq24626__$2 = cljs.core.next(seq24626__$1);
var G__24629 = cljs.core.first(seq24626__$2);
var seq24626__$3 = cljs.core.next(seq24626__$2);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic(G__24627,G__24628,G__24629,seq24626__$3);
});

ajax.interceptors.content_type_to_request_header = (function ajax$interceptors$content_type_to_request_header(content_type){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7005__auto__,k__7006__auto__){
var self__ = this;
var this__7005__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7005__auto____$1,k__7006__auto__,null);
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7007__auto__,k24635,else__7008__auto__){
var self__ = this;
var this__7007__auto____$1 = this;
var G__24637 = (((k24635 instanceof cljs.core.Keyword))?k24635.fqn:null);
switch (G__24637) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24635,else__7008__auto__);

}
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__24638,request){
var self__ = this;
var map__24639 = p__24638;
var map__24639__$1 = ((((!((map__24639 == null)))?((((map__24639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24639):map__24639);
var content_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24639__$1,cljs.core.cst$kw$content_DASH_type);
var map__24641 = this;
var map__24641__$1 = ((((!((map__24641 == null)))?((((map__24641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24641):map__24641);
var content_type__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24641__$1,cljs.core.cst$kw$content_DASH_type);

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$headers,((function (map__24641,map__24641__$1,content_type__$2,map__24639,map__24639__$1,content_type__$1){
return (function (p1__24633_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header(content_type__$2)], null),(function (){var or__6383__auto__ = p1__24633_SHARP_;
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], 0));
});})(map__24641,map__24641__$1,content_type__$2,map__24639,map__24639__$1,content_type__$1))
);
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__24643,xhrio){
var self__ = this;
var map__24644 = p__24643;
var map__24644__$1 = ((((!((map__24644 == null)))?((((map__24644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24644):map__24644);
var format = map__24644__$1;
var read__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24644__$1,cljs.core.cst$kw$read);
var map__24646 = this;
var map__24646__$1 = ((((!((map__24646 == null)))?((((map__24646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24646):map__24646);
var format__$1 = map__24646__$1;
var read__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24646__$1,cljs.core.cst$kw$read);

try{var status = ajax.protocols._status(xhrio);
var fail = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ajax.interceptors.fail,status);
var G__24649 = status;
switch (G__24649) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
var G__24650 = "Request failed.";
var G__24651 = cljs.core.cst$kw$failed;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__24650,G__24651) : fail.call(null,G__24650,G__24651));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted(xhrio))){
var G__24652 = "Request aborted by client.";
var G__24653 = cljs.core.cst$kw$aborted;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__24652,G__24653) : fail.call(null,G__24652,G__24653));
} else {
var G__24654 = "Request timed out.";
var G__24655 = cljs.core.cst$kw$timeout;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__24654,G__24655) : fail.call(null,G__24654,G__24655));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = (read__$2.cljs$core$IFn$_invoke$arity$1 ? read__$2.cljs$core$IFn$_invoke$arity$1(xhrio) : read__$2.call(null,xhrio));
if(cljs.core.truth_(ajax.util.success_QMARK_(status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
var G__24657 = ajax.protocols._status_text(xhrio);
var G__24658 = cljs.core.cst$kw$error;
var G__24659 = cljs.core.cst$kw$response;
var G__24660 = response;
return (fail.cljs$core$IFn$_invoke$arity$4 ? fail.cljs$core$IFn$_invoke$arity$4(G__24657,G__24658,G__24659,G__24660) : fail.call(null,G__24657,G__24658,G__24659,G__24660));
}
}catch (e24656){if((e24656 instanceof Object)){
var e = e24656;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response(e,status,format__$1,xhrio)], null);
} else {
throw e24656;

}
}
}
}catch (e24648){if((e24648 instanceof Object)){
var e = e24648;
var message = e.message;
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((0),message,cljs.core.cst$kw$exception,cljs.core.array_seq([cljs.core.cst$kw$exception,e], 0));
} else {
throw e24648;

}
}});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7019__auto__,writer__7020__auto__,opts__7021__auto__){
var self__ = this;
var this__7019__auto____$1 = this;
var pr_pair__7022__auto__ = ((function (this__7019__auto____$1){
return (function (keyval__7023__auto__){
return cljs.core.pr_sequential_writer(writer__7020__auto__,cljs.core.pr_writer,""," ","",opts__7021__auto__,keyval__7023__auto__);
});})(this__7019__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7020__auto__,pr_pair__7022__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__7021__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$read,self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$description,self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$content_DASH_type,self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$ = true;

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24634){
var self__ = this;
var G__24634__$1 = this;
return (new cljs.core.RecordIter((0),G__24634__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read,cljs.core.cst$kw$description,cljs.core.cst$kw$content_DASH_type], null),cljs.core._iterator(self__.__extmap)));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7003__auto__){
var self__ = this;
var this__7003__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6999__auto__){
var self__ = this;
var this__6999__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7009__auto__){
var self__ = this;
var this__7009__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7000__auto__){
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

ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7001__auto__,other__7002__auto__){
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

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7014__auto__,k__7015__auto__){
var self__ = this;
var this__7014__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$description,null,cljs.core.cst$kw$read,null,cljs.core.cst$kw$content_DASH_type,null], null), null),k__7015__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7014__auto____$1),self__.__meta),k__7015__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7015__auto__)),null));
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7012__auto__,k__7013__auto__,G__24634){
var self__ = this;
var this__7012__auto____$1 = this;
var pred__24661 = cljs.core.keyword_identical_QMARK_;
var expr__24662 = k__7013__auto__;
if(cljs.core.truth_((function (){var G__24664 = cljs.core.cst$kw$read;
var G__24665 = expr__24662;
return (pred__24661.cljs$core$IFn$_invoke$arity$2 ? pred__24661.cljs$core$IFn$_invoke$arity$2(G__24664,G__24665) : pred__24661.call(null,G__24664,G__24665));
})())){
return (new ajax.interceptors.ResponseFormat(G__24634,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24666 = cljs.core.cst$kw$description;
var G__24667 = expr__24662;
return (pred__24661.cljs$core$IFn$_invoke$arity$2 ? pred__24661.cljs$core$IFn$_invoke$arity$2(G__24666,G__24667) : pred__24661.call(null,G__24666,G__24667));
})())){
return (new ajax.interceptors.ResponseFormat(self__.read,G__24634,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24668 = cljs.core.cst$kw$content_DASH_type;
var G__24669 = expr__24662;
return (pred__24661.cljs$core$IFn$_invoke$arity$2 ? pred__24661.cljs$core$IFn$_invoke$arity$2(G__24668,G__24669) : pred__24661.call(null,G__24668,G__24669));
})())){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__24634,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7013__auto__,G__24634),null));
}
}
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7017__auto__){
var self__ = this;
var this__7017__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$read,self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$description,self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$content_DASH_type,self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7004__auto__,G__24634){
var self__ = this;
var this__7004__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__24634,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7010__auto__,entry__7011__auto__){
var self__ = this;
var this__7010__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7011__auto__)){
return cljs.core._assoc(this__7010__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7011__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7011__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7010__auto____$1,entry__7011__auto__);
}
});

ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$read,cljs.core.cst$sym$description,cljs.core.cst$sym$content_DASH_type], null);
});

ajax.interceptors.ResponseFormat.cljs$lang$type = true;

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__7039__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__7039__auto__,writer__7040__auto__){
return cljs.core._write(writer__7040__auto__,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__24636){
return (new ajax.interceptors.ResponseFormat(cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(G__24636),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(G__24636),cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(G__24636),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24636,cljs.core.cst$kw$read,cljs.core.array_seq([cljs.core.cst$kw$description,cljs.core.cst$kw$content_DASH_type], 0)),null));
});

ajax.interceptors.get_request_format = (function ajax$interceptors$get_request_format(format){

if(cljs.core.map_QMARK_(format)){
return format;
} else {
if((format instanceof cljs.core.Keyword)){
return ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as request formats in ajax calls: ",format], null));
} else {
if(cljs.core.ifn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,format,cljs.core.cst$kw$content_DASH_type,"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
ajax.interceptors.apply_request_format = (function ajax$interceptors$apply_request_format(write,params){
return (write.cljs$core$IFn$_invoke$arity$1 ? write.cljs$core$IFn$_invoke$arity$1(params) : write.call(null,params));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7005__auto__,k__7006__auto__){
var self__ = this;
var this__7005__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7005__auto____$1,k__7006__auto__,null);
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7007__auto__,k24673,else__7008__auto__){
var self__ = this;
var this__7007__auto____$1 = this;
var G__24675 = k24673;
switch (G__24675) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24673,else__7008__auto__);

}
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__24676){
var self__ = this;
var map__24677 = p__24676;
var map__24677__$1 = ((((!((map__24677 == null)))?((((map__24677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24677):map__24677);
var request = map__24677__$1;
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24677__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24677__$1,cljs.core.cst$kw$method);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24677__$1,cljs.core.cst$kw$format);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24677__$1,cljs.core.cst$kw$params);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24677__$1,cljs.core.cst$kw$headers);
var ___$1 = this;
var map__24679 = ajax.interceptors.get_request_format(format);
var map__24679__$1 = ((((!((map__24679 == null)))?((((map__24679.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24679.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24679):map__24679);
var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24679__$1,cljs.core.cst$kw$write);
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24679__$1,cljs.core.cst$kw$content_DASH_type);
var body = ((!((write == null)))?ajax.interceptors.apply_request_format(write,params):ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__6383__auto__ = headers;
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$body,body,cljs.core.array_seq([cljs.core.cst$kw$headers,(cljs.core.truth_(content_type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(headers__$1,"Content-Type",ajax.interceptors.content_type_to_request_header(content_type)):headers__$1)], 0));
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7019__auto__,writer__7020__auto__,opts__7021__auto__){
var self__ = this;
var this__7019__auto____$1 = this;
var pr_pair__7022__auto__ = ((function (this__7019__auto____$1){
return (function (keyval__7023__auto__){
return cljs.core.pr_sequential_writer(writer__7020__auto__,cljs.core.pr_writer,""," ","",opts__7021__auto__,keyval__7023__auto__);
});})(this__7019__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7020__auto__,pr_pair__7022__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__7021__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$ = true;

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24672){
var self__ = this;
var G__24672__$1 = this;
return (new cljs.core.RecordIter((0),G__24672__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator(self__.__extmap)));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7003__auto__){
var self__ = this;
var this__7003__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6999__auto__){
var self__ = this;
var this__6999__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7009__auto__){
var self__ = this;
var this__7009__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7000__auto__){
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

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7001__auto__,other__7002__auto__){
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

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7014__auto__,k__7015__auto__){
var self__ = this;
var this__7014__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__7015__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7014__auto____$1),self__.__meta),k__7015__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7015__auto__)),null));
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7012__auto__,k__7013__auto__,G__24672){
var self__ = this;
var this__7012__auto____$1 = this;
var pred__24681 = cljs.core.keyword_identical_QMARK_;
var expr__24682 = k__7013__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7013__auto__,G__24672),null));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7017__auto__){
var self__ = this;
var this__7017__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7004__auto__,G__24672){
var self__ = this;
var this__7004__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__24672,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7010__auto__,entry__7011__auto__){
var self__ = this;
var this__7010__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7011__auto__)){
return cljs.core._assoc(this__7010__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7011__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7011__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7010__auto____$1,entry__7011__auto__);
}
});

ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true;

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__7039__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__7039__auto__,writer__7040__auto__){
return cljs.core._write(writer__7040__auto__,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__24674){
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__24674),null));
});

ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(var_args){
var args24685 = [];
var len__7454__auto___24694 = arguments.length;
var i__7455__auto___24695 = (0);
while(true){
if((i__7455__auto___24695 < len__7454__auto___24694)){
args24685.push((arguments[i__7455__auto___24695]));

var G__24696 = (i__7455__auto___24695 + (1));
i__7455__auto___24695 = G__24696;
continue;
} else {
}
break;
}

var G__24687 = args24685.length;
switch (G__24687) {
case 2:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24685.length)].join('')));

}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (p__24688,uri){
var map__24689 = p__24688;
var map__24689__$1 = ((((!((map__24689 == null)))?((((map__24689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24689):map__24689);
var vec_strategy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24689__$1,cljs.core.cst$kw$vec_DASH_strategy);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24689__$1,cljs.core.cst$kw$params);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24689__$1,cljs.core.cst$kw$method);
var url_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24689__$1,cljs.core.cst$kw$url_DASH_params);

var temp__4655__auto__ = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET")) && ((url_params == null)))?params:url_params);
if(cljs.core.truth_(temp__4655__auto__)){
var final_url_params = temp__4655__auto__;
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find(/\?/,uri))?"&":"?")),cljs.core.str(ajax.url.params_to_str.cljs$core$IFn$_invoke$arity$2(vec_strategy,final_url_params))].join('');
} else {
return uri;
}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (p__24691){
var map__24692 = p__24691;
var map__24692__$1 = ((((!((map__24692 == null)))?((((map__24692.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24692.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24692):map__24692);
var vec_strategy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24692__$1,cljs.core.cst$kw$vec_DASH_strategy);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24692__$1,cljs.core.cst$kw$params);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24692__$1,cljs.core.cst$kw$method);
var url_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24692__$1,cljs.core.cst$kw$url_DASH_params);
return ((function (map__24692,map__24692__$1,vec_strategy,params,method,url_params){
return (function (uri){

var temp__4655__auto__ = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET")) && ((url_params == null)))?params:url_params);
if(cljs.core.truth_(temp__4655__auto__)){
var final_url_params = temp__4655__auto__;
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find(/\?/,uri))?"&":"?")),cljs.core.str(ajax.url.params_to_str.cljs$core$IFn$_invoke$arity$2(vec_strategy,final_url_params))].join('');
} else {
return uri;
}
});
;})(map__24692,map__24692__$1,vec_strategy,params,method,url_params))
});

ajax.interceptors.uri_with_params.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ProcessUrlParameters = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7005__auto__,k__7006__auto__){
var self__ = this;
var this__7005__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7005__auto____$1,k__7006__auto__,null);
});

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7007__auto__,k24699,else__7008__auto__){
var self__ = this;
var this__7007__auto____$1 = this;
var G__24701 = k24699;
switch (G__24701) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24699,else__7008__auto__);

}
});

ajax.interceptors.ProcessUrlParameters.prototype.ajax$protocols$Interceptor$ = true;

ajax.interceptors.ProcessUrlParameters.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__24702){
var self__ = this;
var map__24703 = p__24702;
var map__24703__$1 = ((((!((map__24703 == null)))?((((map__24703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24703):map__24703);
var request = map__24703__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24703__$1,cljs.core.cst$kw$method);
var ___$1 = this;
var if_get_reduce = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET"))?cljs.core.reduced:cljs.core.identity);
var G__24705 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$uri,ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1(request));
return (if_get_reduce.cljs$core$IFn$_invoke$arity$1 ? if_get_reduce.cljs$core$IFn$_invoke$arity$1(G__24705) : if_get_reduce.call(null,G__24705));
});

ajax.interceptors.ProcessUrlParameters.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7019__auto__,writer__7020__auto__,opts__7021__auto__){
var self__ = this;
var this__7019__auto____$1 = this;
var pr_pair__7022__auto__ = ((function (this__7019__auto____$1){
return (function (keyval__7023__auto__){
return cljs.core.pr_sequential_writer(writer__7020__auto__,cljs.core.pr_writer,""," ","",opts__7021__auto__,keyval__7023__auto__);
});})(this__7019__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7020__auto__,pr_pair__7022__auto__,"#ajax.interceptors.ProcessUrlParameters{",", ","}",opts__7021__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IIterable$ = true;

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24698){
var self__ = this;
var G__24698__$1 = this;
return (new cljs.core.RecordIter((0),G__24698__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator(self__.__extmap)));
});

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7003__auto__){
var self__ = this;
var this__7003__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6999__auto__){
var self__ = this;
var this__6999__auto____$1 = this;
return (new ajax.interceptors.ProcessUrlParameters(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7009__auto__){
var self__ = this;
var this__7009__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7000__auto__){
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

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7001__auto__,other__7002__auto__){
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

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7014__auto__,k__7015__auto__){
var self__ = this;
var this__7014__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__7015__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7014__auto____$1),self__.__meta),k__7015__auto__);
} else {
return (new ajax.interceptors.ProcessUrlParameters(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7015__auto__)),null));
}
});

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7012__auto__,k__7013__auto__,G__24698){
var self__ = this;
var this__7012__auto____$1 = this;
var pred__24706 = cljs.core.keyword_identical_QMARK_;
var expr__24707 = k__7013__auto__;
return (new ajax.interceptors.ProcessUrlParameters(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7013__auto__,G__24698),null));
});

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7017__auto__){
var self__ = this;
var this__7017__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7004__auto__,G__24698){
var self__ = this;
var this__7004__auto____$1 = this;
return (new ajax.interceptors.ProcessUrlParameters(G__24698,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7010__auto__,entry__7011__auto__){
var self__ = this;
var this__7010__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7011__auto__)){
return cljs.core._assoc(this__7010__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7011__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7011__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7010__auto____$1,entry__7011__auto__);
}
});

ajax.interceptors.ProcessUrlParameters.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ProcessUrlParameters.cljs$lang$type = true;

ajax.interceptors.ProcessUrlParameters.cljs$lang$ctorPrSeq = (function (this__7039__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.interceptors/ProcessUrlParameters");
});

ajax.interceptors.ProcessUrlParameters.cljs$lang$ctorPrWriter = (function (this__7039__auto__,writer__7040__auto__){
return cljs.core._write(writer__7040__auto__,"ajax.interceptors/ProcessUrlParameters");
});

ajax.interceptors.__GT_ProcessUrlParameters = (function ajax$interceptors$__GT_ProcessUrlParameters(){
return (new ajax.interceptors.ProcessUrlParameters(null,null,null));
});

ajax.interceptors.map__GT_ProcessUrlParameters = (function ajax$interceptors$map__GT_ProcessUrlParameters(G__24700){
return (new ajax.interceptors.ProcessUrlParameters(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__24700),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7005__auto__,k__7006__auto__){
var self__ = this;
var this__7005__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7005__auto____$1,k__7006__auto__,null);
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7007__auto__,k24711,else__7008__auto__){
var self__ = this;
var this__7007__auto____$1 = this;
var G__24713 = k24711;
switch (G__24713) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24711,else__7008__auto__);

}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = true;

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__24714){
var self__ = this;
var map__24715 = p__24714;
var map__24715__$1 = ((((!((map__24715 == null)))?((((map__24715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24715):map__24715);
var request = map__24715__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24715__$1,cljs.core.cst$kw$body);
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced(request);
}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7019__auto__,writer__7020__auto__,opts__7021__auto__){
var self__ = this;
var this__7019__auto____$1 = this;
var pr_pair__7022__auto__ = ((function (this__7019__auto____$1){
return (function (keyval__7023__auto__){
return cljs.core.pr_sequential_writer(writer__7020__auto__,cljs.core.pr_writer,""," ","",opts__7021__auto__,keyval__7023__auto__);
});})(this__7019__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7020__auto__,pr_pair__7022__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__7021__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$ = true;

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24710){
var self__ = this;
var G__24710__$1 = this;
return (new cljs.core.RecordIter((0),G__24710__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator(self__.__extmap)));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7003__auto__){
var self__ = this;
var this__7003__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6999__auto__){
var self__ = this;
var this__6999__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7009__auto__){
var self__ = this;
var this__7009__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7000__auto__){
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

ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7001__auto__,other__7002__auto__){
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

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7014__auto__,k__7015__auto__){
var self__ = this;
var this__7014__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__7015__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7014__auto____$1),self__.__meta),k__7015__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7015__auto__)),null));
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7012__auto__,k__7013__auto__,G__24710){
var self__ = this;
var this__7012__auto____$1 = this;
var pred__24717 = cljs.core.keyword_identical_QMARK_;
var expr__24718 = k__7013__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7013__auto__,G__24710),null));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7017__auto__){
var self__ = this;
var this__7017__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7004__auto__,G__24710){
var self__ = this;
var this__7004__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__24710,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7010__auto__,entry__7011__auto__){
var self__ = this;
var this__7010__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7011__auto__)){
return cljs.core._assoc(this__7010__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7011__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7011__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7010__auto____$1,entry__7011__auto__);
}
});

ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.DirectSubmission.cljs$lang$type = true;

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__7039__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__7039__auto__,writer__7040__auto__){
return cljs.core._write(writer__7040__auto__,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__24712){
return (new ajax.interceptors.DirectSubmission(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__24712),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessUrlParameters(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__24721){
var map__24724 = p__24721;
var map__24724__$1 = ((((!((map__24724 == null)))?((((map__24724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24724):map__24724);
var opts = map__24724__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24724__$1,cljs.core.cst$kw$response_DASH_format);
if(cljs.core.truth_(ajax.interceptors.is_response_format_QMARK_(response_format))){
return response_format;
} else {
if(cljs.core.vector_QMARK_(response_format)){
return (interpret_vector.cljs$core$IFn$_invoke$arity$1 ? interpret_vector.cljs$core$IFn$_invoke$arity$1(opts) : interpret_vector.call(null,opts));
} else {
if(cljs.core.map_QMARK_(response_format)){
return ajax.interceptors.map__GT_ResponseFormat(response_format);
} else {
if((response_format instanceof cljs.core.Keyword)){
return ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as response formats in ajax calls: ",response_format], null));
} else {
if(cljs.core.ifn_QMARK_(response_format)){
return ajax.interceptors.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,response_format,cljs.core.cst$kw$description,"custom",cljs.core.cst$kw$content_DASH_type,"*/*"], null));
} else {
return ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
}
});
