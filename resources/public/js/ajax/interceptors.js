// Compiled by ClojureScript 1.9.229 {}
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
return cljs.core._lookup.call(null,this__7005__auto____$1,k__7006__auto__,null);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7007__auto__,k22256,else__7008__auto__){
var self__ = this;
var this__7007__auto____$1 = this;
var G__22258 = (((k22256 instanceof cljs.core.Keyword))?k22256.fqn:null);
switch (G__22258) {
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
return cljs.core.get.call(null,self__.__extmap,k22256,else__7008__auto__);

}
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = true;

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__22259,opts){
var self__ = this;
var map__22260 = p__22259;
var map__22260__$1 = ((((!((map__22260 == null)))?((((map__22260.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22260.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22260):map__22260);
var request__$1 = cljs.core.get.call(null,map__22260__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__22262 = this;
var map__22262__$1 = ((((!((map__22262 == null)))?((((map__22262.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22262.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22262):map__22262);
var request__$2 = cljs.core.get.call(null,map__22262__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__22264,xhrio){
var self__ = this;
var map__22265 = p__22264;
var map__22265__$1 = ((((!((map__22265 == null)))?((((map__22265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22265):map__22265);
var response__$1 = cljs.core.get.call(null,map__22265__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__22267 = this;
var map__22267__$1 = ((((!((map__22267 == null)))?((((map__22267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22267):map__22267);
var response__$2 = cljs.core.get.call(null,map__22267__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7019__auto__,writer__7020__auto__,opts__7021__auto__){
var self__ = this;
var this__7019__auto____$1 = this;
var pr_pair__7022__auto__ = ((function (this__7019__auto____$1){
return (function (keyval__7023__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7020__auto__,cljs.core.pr_writer,""," ","",opts__7021__auto__,keyval__7023__auto__);
});})(this__7019__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7020__auto__,pr_pair__7022__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__7021__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$ = true;

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22255){
var self__ = this;
var G__22255__$1 = this;
return (new cljs.core.RecordIter((0),G__22255__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),cljs.core._iterator.call(null,self__.__extmap)));
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
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7000__auto__){
var self__ = this;
var this__7000__auto____$1 = this;
var h__6818__auto__ = self__.__hash;
if(!((h__6818__auto__ == null))){
return h__6818__auto__;
} else {
var h__6818__auto____$1 = cljs.core.hash_imap.call(null,this__7000__auto____$1);
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
return cljs.core.equiv_map.call(null,this__7001__auto____$1,other__7002__auto__);
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
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__7015__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7014__auto____$1),self__.__meta),k__7015__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7015__auto__)),null));
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7012__auto__,k__7013__auto__,G__22255){
var self__ = this;
var this__7012__auto____$1 = this;
var pred__22269 = cljs.core.keyword_identical_QMARK_;
var expr__22270 = k__7013__auto__;
if(cljs.core.truth_(pred__22269.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__22270))){
return (new ajax.interceptors.StandardInterceptor(G__22255,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22269.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__22270))){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__22255,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22269.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__22270))){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__22255,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7013__auto__,G__22255),null));
}
}
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7017__auto__){
var self__ = this;
var this__7017__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7004__auto__,G__22255){
var self__ = this;
var this__7004__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__22255,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7010__auto__,entry__7011__auto__){
var self__ = this;
var this__7010__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7011__auto__)){
return cljs.core._assoc.call(null,this__7010__auto____$1,cljs.core._nth.call(null,entry__7011__auto__,(0)),cljs.core._nth.call(null,entry__7011__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7010__auto____$1,entry__7011__auto__);
}
});

ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.interceptors.StandardInterceptor.cljs$lang$type = true;

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__7039__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__7039__auto__,writer__7040__auto__){
return cljs.core._write.call(null,writer__7040__auto__,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__22257){
return (new ajax.interceptors.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__22257),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__22257),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__22257),null,cljs.core.dissoc.call(null,G__22257,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)),null));
});

ajax.interceptors.to_interceptor = (function ajax$interceptors$to_interceptor(m){

return ajax.interceptors.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.interceptors.exception_message = (function ajax$interceptors$exception_message(e){
return e.message;
});
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__22273,xhrio){
var map__22276 = p__22273;
var map__22276__$1 = ((((!((map__22276 == null)))?((((map__22276.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22276.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22276):map__22276);
var description = cljs.core.get.call(null,map__22276__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str(ajax.interceptors.exception_message.call(null,e)),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.util.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.interceptors.fail = (function ajax$interceptors$fail(var_args){
var args__7461__auto__ = [];
var len__7454__auto___22282 = arguments.length;
var i__7455__auto___22283 = (0);
while(true){
if((i__7455__auto___22283 < len__7454__auto___22282)){
args__7461__auto__.push((arguments[i__7455__auto___22283]));

var G__22284 = (i__7455__auto___22283 + (1));
i__7455__auto___22283 = G__22284;
continue;
} else {
}
break;
}

var argseq__7462__auto__ = ((((3) < args__7461__auto__.length))?(new cljs.core.IndexedSeq(args__7461__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7462__auto__);
});

ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.interceptors.fail.cljs$lang$maxFixedArity = (3);

ajax.interceptors.fail.cljs$lang$applyTo = (function (seq22278){
var G__22279 = cljs.core.first.call(null,seq22278);
var seq22278__$1 = cljs.core.next.call(null,seq22278);
var G__22280 = cljs.core.first.call(null,seq22278__$1);
var seq22278__$2 = cljs.core.next.call(null,seq22278__$1);
var G__22281 = cljs.core.first.call(null,seq22278__$2);
var seq22278__$3 = cljs.core.next.call(null,seq22278__$2);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic(G__22279,G__22280,G__22281,seq22278__$3);
});

ajax.interceptors.content_type_to_request_header = (function ajax$interceptors$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
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
return cljs.core._lookup.call(null,this__7005__auto____$1,k__7006__auto__,null);
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7007__auto__,k22287,else__7008__auto__){
var self__ = this;
var this__7007__auto____$1 = this;
var G__22289 = (((k22287 instanceof cljs.core.Keyword))?k22287.fqn:null);
switch (G__22289) {
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
return cljs.core.get.call(null,self__.__extmap,k22287,else__7008__auto__);

}
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__22290,request){
var self__ = this;
var map__22291 = p__22290;
var map__22291__$1 = ((((!((map__22291 == null)))?((((map__22291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22291):map__22291);
var content_type__$1 = cljs.core.get.call(null,map__22291__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__22293 = this;
var map__22293__$1 = ((((!((map__22293 == null)))?((((map__22293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22293):map__22293);
var content_type__$2 = cljs.core.get.call(null,map__22293__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__22293,map__22293__$1,content_type__$2,map__22291,map__22291__$1,content_type__$1){
return (function (p1__22285_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__6383__auto__ = p1__22285_SHARP_;
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__22293,map__22293__$1,content_type__$2,map__22291,map__22291__$1,content_type__$1))
);
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__22295,xhrio){
var self__ = this;
var map__22296 = p__22295;
var map__22296__$1 = ((((!((map__22296 == null)))?((((map__22296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22296):map__22296);
var format = map__22296__$1;
var read__$1 = cljs.core.get.call(null,map__22296__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__22298 = this;
var map__22298__$1 = ((((!((map__22298 == null)))?((((map__22298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22298):map__22298);
var format__$1 = map__22298__$1;
var read__$2 = cljs.core.get.call(null,map__22298__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.interceptors.fail,status);
var G__22301 = status;
switch (G__22301) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.util.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e22302){if((e22302 instanceof Object)){
var e = e22302;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e22302;

}
}
}
}catch (e22300){if((e22300 instanceof Object)){
var e = e22300;
var message = e.message;
return ajax.interceptors.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e22300;

}
}});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7019__auto__,writer__7020__auto__,opts__7021__auto__){
var self__ = this;
var this__7019__auto____$1 = this;
var pr_pair__7022__auto__ = ((function (this__7019__auto____$1){
return (function (keyval__7023__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7020__auto__,cljs.core.pr_writer,""," ","",opts__7021__auto__,keyval__7023__auto__);
});})(this__7019__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7020__auto__,pr_pair__7022__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__7021__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$ = true;

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22286){
var self__ = this;
var G__22286__$1 = this;
return (new cljs.core.RecordIter((0),G__22286__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),cljs.core._iterator.call(null,self__.__extmap)));
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
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7000__auto__){
var self__ = this;
var this__7000__auto____$1 = this;
var h__6818__auto__ = self__.__hash;
if(!((h__6818__auto__ == null))){
return h__6818__auto__;
} else {
var h__6818__auto____$1 = cljs.core.hash_imap.call(null,this__7000__auto____$1);
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
return cljs.core.equiv_map.call(null,this__7001__auto____$1,other__7002__auto__);
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
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__7015__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7014__auto____$1),self__.__meta),k__7015__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7015__auto__)),null));
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7012__auto__,k__7013__auto__,G__22286){
var self__ = this;
var this__7012__auto____$1 = this;
var pred__22303 = cljs.core.keyword_identical_QMARK_;
var expr__22304 = k__7013__auto__;
if(cljs.core.truth_(pred__22303.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__22304))){
return (new ajax.interceptors.ResponseFormat(G__22286,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22303.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__22304))){
return (new ajax.interceptors.ResponseFormat(self__.read,G__22286,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22303.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__22304))){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__22286,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7013__auto__,G__22286),null));
}
}
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7017__auto__){
var self__ = this;
var this__7017__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7004__auto__,G__22286){
var self__ = this;
var this__7004__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__22286,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7010__auto__,entry__7011__auto__){
var self__ = this;
var this__7010__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7011__auto__)){
return cljs.core._assoc.call(null,this__7010__auto____$1,cljs.core._nth.call(null,entry__7011__auto__,(0)),cljs.core._nth.call(null,entry__7011__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7010__auto____$1,entry__7011__auto__);
}
});

ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.interceptors.ResponseFormat.cljs$lang$type = true;

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__7039__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__7039__auto__,writer__7040__auto__){
return cljs.core._write.call(null,writer__7040__auto__,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__22288){
return (new ajax.interceptors.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__22288),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__22288),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__22288),null,cljs.core.dissoc.call(null,G__22288,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)),null));
});

ajax.interceptors.get_request_format = (function ajax$interceptors$get_request_format(format){

if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if((format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as request formats in ajax calls: ",format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
ajax.interceptors.apply_request_format = (function ajax$interceptors$apply_request_format(write,params){
return write.call(null,params);
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
return cljs.core._lookup.call(null,this__7005__auto____$1,k__7006__auto__,null);
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7007__auto__,k22309,else__7008__auto__){
var self__ = this;
var this__7007__auto____$1 = this;
var G__22311 = k22309;
switch (G__22311) {
default:
return cljs.core.get.call(null,self__.__extmap,k22309,else__7008__auto__);

}
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__22312){
var self__ = this;
var map__22313 = p__22312;
var map__22313__$1 = ((((!((map__22313 == null)))?((((map__22313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22313):map__22313);
var request = map__22313__$1;
var uri = cljs.core.get.call(null,map__22313__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__22313__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__22313__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__22313__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__22313__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__22315 = ajax.interceptors.get_request_format.call(null,format);
var map__22315__$1 = ((((!((map__22315 == null)))?((((map__22315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22315):map__22315);
var write = cljs.core.get.call(null,map__22315__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__22315__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.interceptors.apply_request_format.call(null,write,params):ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__6383__auto__ = headers;
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.interceptors.content_type_to_request_header.call(null,content_type)):headers__$1));
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
return cljs.core.pr_sequential_writer.call(null,writer__7020__auto__,cljs.core.pr_writer,""," ","",opts__7021__auto__,keyval__7023__auto__);
});})(this__7019__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7020__auto__,pr_pair__7022__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__7021__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$ = true;

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22308){
var self__ = this;
var G__22308__$1 = this;
return (new cljs.core.RecordIter((0),G__22308__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
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
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7000__auto__){
var self__ = this;
var this__7000__auto____$1 = this;
var h__6818__auto__ = self__.__hash;
if(!((h__6818__auto__ == null))){
return h__6818__auto__;
} else {
var h__6818__auto____$1 = cljs.core.hash_imap.call(null,this__7000__auto____$1);
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
return cljs.core.equiv_map.call(null,this__7001__auto____$1,other__7002__auto__);
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
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__7015__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7014__auto____$1),self__.__meta),k__7015__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7015__auto__)),null));
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7012__auto__,k__7013__auto__,G__22308){
var self__ = this;
var this__7012__auto____$1 = this;
var pred__22317 = cljs.core.keyword_identical_QMARK_;
var expr__22318 = k__7013__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7013__auto__,G__22308),null));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7017__auto__){
var self__ = this;
var this__7017__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7004__auto__,G__22308){
var self__ = this;
var this__7004__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__22308,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7010__auto__,entry__7011__auto__){
var self__ = this;
var this__7010__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7011__auto__)){
return cljs.core._assoc.call(null,this__7010__auto____$1,cljs.core._nth.call(null,entry__7011__auto__,(0)),cljs.core._nth.call(null,entry__7011__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7010__auto____$1,entry__7011__auto__);
}
});

ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true;

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__7039__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__7039__auto__,writer__7040__auto__){
return cljs.core._write.call(null,writer__7040__auto__,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__22310){
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.dissoc.call(null,G__22310),null));
});

ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(var_args){
var args22321 = [];
var len__7454__auto___22330 = arguments.length;
var i__7455__auto___22331 = (0);
while(true){
if((i__7455__auto___22331 < len__7454__auto___22330)){
args22321.push((arguments[i__7455__auto___22331]));

var G__22332 = (i__7455__auto___22331 + (1));
i__7455__auto___22331 = G__22332;
continue;
} else {
}
break;
}

var G__22323 = args22321.length;
switch (G__22323) {
case 2:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22321.length)].join('')));

}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (p__22324,uri){
var map__22325 = p__22324;
var map__22325__$1 = ((((!((map__22325 == null)))?((((map__22325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22325):map__22325);
var vec_strategy = cljs.core.get.call(null,map__22325__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__22325__$1,new cljs.core.Keyword(null,"params","params",710516235));
var method = cljs.core.get.call(null,map__22325__$1,new cljs.core.Keyword(null,"method","method",55703592));
var url_params = cljs.core.get.call(null,map__22325__$1,new cljs.core.Keyword(null,"url-params","url-params",-697567619));

var temp__4655__auto__ = (((cljs.core._EQ_.call(null,method,"GET")) && ((url_params == null)))?params:url_params);
if(cljs.core.truth_(temp__4655__auto__)){
var final_url_params = temp__4655__auto__;
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(ajax.url.params_to_str.call(null,vec_strategy,final_url_params))].join('');
} else {
return uri;
}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (p__22327){
var map__22328 = p__22327;
var map__22328__$1 = ((((!((map__22328 == null)))?((((map__22328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22328):map__22328);
var vec_strategy = cljs.core.get.call(null,map__22328__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__22328__$1,new cljs.core.Keyword(null,"params","params",710516235));
var method = cljs.core.get.call(null,map__22328__$1,new cljs.core.Keyword(null,"method","method",55703592));
var url_params = cljs.core.get.call(null,map__22328__$1,new cljs.core.Keyword(null,"url-params","url-params",-697567619));
return ((function (map__22328,map__22328__$1,vec_strategy,params,method,url_params){
return (function (uri){

var temp__4655__auto__ = (((cljs.core._EQ_.call(null,method,"GET")) && ((url_params == null)))?params:url_params);
if(cljs.core.truth_(temp__4655__auto__)){
var final_url_params = temp__4655__auto__;
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(ajax.url.params_to_str.call(null,vec_strategy,final_url_params))].join('');
} else {
return uri;
}
});
;})(map__22328,map__22328__$1,vec_strategy,params,method,url_params))
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
return cljs.core._lookup.call(null,this__7005__auto____$1,k__7006__auto__,null);
});

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7007__auto__,k22335,else__7008__auto__){
var self__ = this;
var this__7007__auto____$1 = this;
var G__22337 = k22335;
switch (G__22337) {
default:
return cljs.core.get.call(null,self__.__extmap,k22335,else__7008__auto__);

}
});

ajax.interceptors.ProcessUrlParameters.prototype.ajax$protocols$Interceptor$ = true;

ajax.interceptors.ProcessUrlParameters.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__22338){
var self__ = this;
var map__22339 = p__22338;
var map__22339__$1 = ((((!((map__22339 == null)))?((((map__22339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22339):map__22339);
var request = map__22339__$1;
var method = cljs.core.get.call(null,map__22339__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
var if_get_reduce = ((cljs.core._EQ_.call(null,method,"GET"))?cljs.core.reduced:cljs.core.identity);
return if_get_reduce.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),ajax.interceptors.uri_with_params.call(null,request)));
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
return cljs.core.pr_sequential_writer.call(null,writer__7020__auto__,cljs.core.pr_writer,""," ","",opts__7021__auto__,keyval__7023__auto__);
});})(this__7019__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7020__auto__,pr_pair__7022__auto__,"#ajax.interceptors.ProcessUrlParameters{",", ","}",opts__7021__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IIterable$ = true;

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22334){
var self__ = this;
var G__22334__$1 = this;
return (new cljs.core.RecordIter((0),G__22334__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
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
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7000__auto__){
var self__ = this;
var this__7000__auto____$1 = this;
var h__6818__auto__ = self__.__hash;
if(!((h__6818__auto__ == null))){
return h__6818__auto__;
} else {
var h__6818__auto____$1 = cljs.core.hash_imap.call(null,this__7000__auto____$1);
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
return cljs.core.equiv_map.call(null,this__7001__auto____$1,other__7002__auto__);
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
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__7015__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7014__auto____$1),self__.__meta),k__7015__auto__);
} else {
return (new ajax.interceptors.ProcessUrlParameters(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7015__auto__)),null));
}
});

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7012__auto__,k__7013__auto__,G__22334){
var self__ = this;
var this__7012__auto____$1 = this;
var pred__22341 = cljs.core.keyword_identical_QMARK_;
var expr__22342 = k__7013__auto__;
return (new ajax.interceptors.ProcessUrlParameters(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7013__auto__,G__22334),null));
});

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7017__auto__){
var self__ = this;
var this__7017__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7004__auto__,G__22334){
var self__ = this;
var this__7004__auto____$1 = this;
return (new ajax.interceptors.ProcessUrlParameters(G__22334,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7010__auto__,entry__7011__auto__){
var self__ = this;
var this__7010__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7011__auto__)){
return cljs.core._assoc.call(null,this__7010__auto____$1,cljs.core._nth.call(null,entry__7011__auto__,(0)),cljs.core._nth.call(null,entry__7011__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7010__auto____$1,entry__7011__auto__);
}
});

ajax.interceptors.ProcessUrlParameters.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ProcessUrlParameters.cljs$lang$type = true;

ajax.interceptors.ProcessUrlParameters.cljs$lang$ctorPrSeq = (function (this__7039__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ProcessUrlParameters");
});

ajax.interceptors.ProcessUrlParameters.cljs$lang$ctorPrWriter = (function (this__7039__auto__,writer__7040__auto__){
return cljs.core._write.call(null,writer__7040__auto__,"ajax.interceptors/ProcessUrlParameters");
});

ajax.interceptors.__GT_ProcessUrlParameters = (function ajax$interceptors$__GT_ProcessUrlParameters(){
return (new ajax.interceptors.ProcessUrlParameters(null,null,null));
});

ajax.interceptors.map__GT_ProcessUrlParameters = (function ajax$interceptors$map__GT_ProcessUrlParameters(G__22336){
return (new ajax.interceptors.ProcessUrlParameters(null,cljs.core.dissoc.call(null,G__22336),null));
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
return cljs.core._lookup.call(null,this__7005__auto____$1,k__7006__auto__,null);
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7007__auto__,k22346,else__7008__auto__){
var self__ = this;
var this__7007__auto____$1 = this;
var G__22348 = k22346;
switch (G__22348) {
default:
return cljs.core.get.call(null,self__.__extmap,k22346,else__7008__auto__);

}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = true;

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__22349){
var self__ = this;
var map__22350 = p__22349;
var map__22350__$1 = ((((!((map__22350 == null)))?((((map__22350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22350):map__22350);
var request = map__22350__$1;
var body = cljs.core.get.call(null,map__22350__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
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
return cljs.core.pr_sequential_writer.call(null,writer__7020__auto__,cljs.core.pr_writer,""," ","",opts__7021__auto__,keyval__7023__auto__);
});})(this__7019__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7020__auto__,pr_pair__7022__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__7021__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$ = true;

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22345){
var self__ = this;
var G__22345__$1 = this;
return (new cljs.core.RecordIter((0),G__22345__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
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
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7000__auto__){
var self__ = this;
var this__7000__auto____$1 = this;
var h__6818__auto__ = self__.__hash;
if(!((h__6818__auto__ == null))){
return h__6818__auto__;
} else {
var h__6818__auto____$1 = cljs.core.hash_imap.call(null,this__7000__auto____$1);
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
return cljs.core.equiv_map.call(null,this__7001__auto____$1,other__7002__auto__);
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
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__7015__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7014__auto____$1),self__.__meta),k__7015__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7015__auto__)),null));
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7012__auto__,k__7013__auto__,G__22345){
var self__ = this;
var this__7012__auto____$1 = this;
var pred__22352 = cljs.core.keyword_identical_QMARK_;
var expr__22353 = k__7013__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7013__auto__,G__22345),null));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7017__auto__){
var self__ = this;
var this__7017__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7004__auto__,G__22345){
var self__ = this;
var this__7004__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__22345,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7010__auto__,entry__7011__auto__){
var self__ = this;
var this__7010__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7011__auto__)){
return cljs.core._assoc.call(null,this__7010__auto____$1,cljs.core._nth.call(null,entry__7011__auto__,(0)),cljs.core._nth.call(null,entry__7011__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7010__auto____$1,entry__7011__auto__);
}
});

ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.DirectSubmission.cljs$lang$type = true;

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__7039__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__7039__auto__,writer__7040__auto__){
return cljs.core._write.call(null,writer__7040__auto__,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__22347){
return (new ajax.interceptors.DirectSubmission(null,cljs.core.dissoc.call(null,G__22347),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessUrlParameters(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__22356){
var map__22359 = p__22356;
var map__22359__$1 = ((((!((map__22359 == null)))?((((map__22359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22359):map__22359);
var opts = map__22359__$1;
var response_format = cljs.core.get.call(null,map__22359__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.truth_(ajax.interceptors.is_response_format_QMARK_.call(null,response_format))){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return interpret_vector.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,response_format);
} else {
if((response_format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as response formats in ajax calls: ",response_format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
}
});

//# sourceMappingURL=interceptors.js.map