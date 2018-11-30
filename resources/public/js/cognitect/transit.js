// Compiled by ClojureScript 1.9.229 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__35178_35182 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__35179_35183 = null;
var count__35180_35184 = (0);
var i__35181_35185 = (0);
while(true){
if((i__35181_35185 < count__35180_35184)){
var k_35186 = cljs.core._nth.call(null,chunk__35179_35183,i__35181_35185);
var v_35187 = (b[k_35186]);
(a[k_35186] = v_35187);

var G__35188 = seq__35178_35182;
var G__35189 = chunk__35179_35183;
var G__35190 = count__35180_35184;
var G__35191 = (i__35181_35185 + (1));
seq__35178_35182 = G__35188;
chunk__35179_35183 = G__35189;
count__35180_35184 = G__35190;
i__35181_35185 = G__35191;
continue;
} else {
var temp__4657__auto___35192 = cljs.core.seq.call(null,seq__35178_35182);
if(temp__4657__auto___35192){
var seq__35178_35193__$1 = temp__4657__auto___35192;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35178_35193__$1)){
var c__9404__auto___35194 = cljs.core.chunk_first.call(null,seq__35178_35193__$1);
var G__35195 = cljs.core.chunk_rest.call(null,seq__35178_35193__$1);
var G__35196 = c__9404__auto___35194;
var G__35197 = cljs.core.count.call(null,c__9404__auto___35194);
var G__35198 = (0);
seq__35178_35182 = G__35195;
chunk__35179_35183 = G__35196;
count__35180_35184 = G__35197;
i__35181_35185 = G__35198;
continue;
} else {
var k_35199 = cljs.core.first.call(null,seq__35178_35193__$1);
var v_35200 = (b[k_35199]);
(a[k_35199] = v_35200);

var G__35201 = cljs.core.next.call(null,seq__35178_35193__$1);
var G__35202 = null;
var G__35203 = (0);
var G__35204 = (0);
seq__35178_35182 = G__35201;
chunk__35179_35183 = G__35202;
count__35180_35184 = G__35203;
i__35181_35185 = G__35204;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__9199__auto__,writer__9200__auto__,opt__9201__auto__){
return cljs.core._write.call(null,writer__9200__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__9199__auto__,writer__9200__auto__,opt__9201__auto__){
return cljs.core._write.call(null,writer__9200__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args35205 = [];
var len__9664__auto___35208 = arguments.length;
var i__9665__auto___35209 = (0);
while(true){
if((i__9665__auto___35209 < len__9664__auto___35208)){
args35205.push((arguments[i__9665__auto___35209]));

var G__35210 = (i__9665__auto___35209 + (1));
i__9665__auto___35209 = G__35210;
continue;
} else {
}
break;
}

var G__35207 = args35205.length;
switch (G__35207) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35205.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__35212 = (i + (2));
var G__35213 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__35212;
ret = G__35213;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__9199__auto__,writer__9200__auto__,opt__9201__auto__){
return cljs.core._write.call(null,writer__9200__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__9199__auto__,writer__9200__auto__,opt__9201__auto__){
return cljs.core._write.call(null,writer__9200__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__35214_35218 = cljs.core.seq.call(null,v);
var chunk__35215_35219 = null;
var count__35216_35220 = (0);
var i__35217_35221 = (0);
while(true){
if((i__35217_35221 < count__35216_35220)){
var x_35222 = cljs.core._nth.call(null,chunk__35215_35219,i__35217_35221);
ret.push(x_35222);

var G__35223 = seq__35214_35218;
var G__35224 = chunk__35215_35219;
var G__35225 = count__35216_35220;
var G__35226 = (i__35217_35221 + (1));
seq__35214_35218 = G__35223;
chunk__35215_35219 = G__35224;
count__35216_35220 = G__35225;
i__35217_35221 = G__35226;
continue;
} else {
var temp__4657__auto___35227 = cljs.core.seq.call(null,seq__35214_35218);
if(temp__4657__auto___35227){
var seq__35214_35228__$1 = temp__4657__auto___35227;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35214_35228__$1)){
var c__9404__auto___35229 = cljs.core.chunk_first.call(null,seq__35214_35228__$1);
var G__35230 = cljs.core.chunk_rest.call(null,seq__35214_35228__$1);
var G__35231 = c__9404__auto___35229;
var G__35232 = cljs.core.count.call(null,c__9404__auto___35229);
var G__35233 = (0);
seq__35214_35218 = G__35230;
chunk__35215_35219 = G__35231;
count__35216_35220 = G__35232;
i__35217_35221 = G__35233;
continue;
} else {
var x_35234 = cljs.core.first.call(null,seq__35214_35228__$1);
ret.push(x_35234);

var G__35235 = cljs.core.next.call(null,seq__35214_35228__$1);
var G__35236 = null;
var G__35237 = (0);
var G__35238 = (0);
seq__35214_35218 = G__35235;
chunk__35215_35219 = G__35236;
count__35216_35220 = G__35237;
i__35217_35221 = G__35238;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__9199__auto__,writer__9200__auto__,opt__9201__auto__){
return cljs.core._write.call(null,writer__9200__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__9199__auto__,writer__9200__auto__,opt__9201__auto__){
return cljs.core._write.call(null,writer__9200__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__35239_35243 = cljs.core.seq.call(null,v);
var chunk__35240_35244 = null;
var count__35241_35245 = (0);
var i__35242_35246 = (0);
while(true){
if((i__35242_35246 < count__35241_35245)){
var x_35247 = cljs.core._nth.call(null,chunk__35240_35244,i__35242_35246);
ret.push(x_35247);

var G__35248 = seq__35239_35243;
var G__35249 = chunk__35240_35244;
var G__35250 = count__35241_35245;
var G__35251 = (i__35242_35246 + (1));
seq__35239_35243 = G__35248;
chunk__35240_35244 = G__35249;
count__35241_35245 = G__35250;
i__35242_35246 = G__35251;
continue;
} else {
var temp__4657__auto___35252 = cljs.core.seq.call(null,seq__35239_35243);
if(temp__4657__auto___35252){
var seq__35239_35253__$1 = temp__4657__auto___35252;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35239_35253__$1)){
var c__9404__auto___35254 = cljs.core.chunk_first.call(null,seq__35239_35253__$1);
var G__35255 = cljs.core.chunk_rest.call(null,seq__35239_35253__$1);
var G__35256 = c__9404__auto___35254;
var G__35257 = cljs.core.count.call(null,c__9404__auto___35254);
var G__35258 = (0);
seq__35239_35243 = G__35255;
chunk__35240_35244 = G__35256;
count__35241_35245 = G__35257;
i__35242_35246 = G__35258;
continue;
} else {
var x_35259 = cljs.core.first.call(null,seq__35239_35253__$1);
ret.push(x_35259);

var G__35260 = cljs.core.next.call(null,seq__35239_35253__$1);
var G__35261 = null;
var G__35262 = (0);
var G__35263 = (0);
seq__35239_35243 = G__35260;
chunk__35240_35244 = G__35261;
count__35241_35245 = G__35262;
i__35242_35246 = G__35263;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__9199__auto__,writer__9200__auto__,opt__9201__auto__){
return cljs.core._write.call(null,writer__9200__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__35264_35268 = cljs.core.seq.call(null,v);
var chunk__35265_35269 = null;
var count__35266_35270 = (0);
var i__35267_35271 = (0);
while(true){
if((i__35267_35271 < count__35266_35270)){
var x_35272 = cljs.core._nth.call(null,chunk__35265_35269,i__35267_35271);
ret.push(x_35272);

var G__35273 = seq__35264_35268;
var G__35274 = chunk__35265_35269;
var G__35275 = count__35266_35270;
var G__35276 = (i__35267_35271 + (1));
seq__35264_35268 = G__35273;
chunk__35265_35269 = G__35274;
count__35266_35270 = G__35275;
i__35267_35271 = G__35276;
continue;
} else {
var temp__4657__auto___35277 = cljs.core.seq.call(null,seq__35264_35268);
if(temp__4657__auto___35277){
var seq__35264_35278__$1 = temp__4657__auto___35277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35264_35278__$1)){
var c__9404__auto___35279 = cljs.core.chunk_first.call(null,seq__35264_35278__$1);
var G__35280 = cljs.core.chunk_rest.call(null,seq__35264_35278__$1);
var G__35281 = c__9404__auto___35279;
var G__35282 = cljs.core.count.call(null,c__9404__auto___35279);
var G__35283 = (0);
seq__35264_35268 = G__35280;
chunk__35265_35269 = G__35281;
count__35266_35270 = G__35282;
i__35267_35271 = G__35283;
continue;
} else {
var x_35284 = cljs.core.first.call(null,seq__35264_35278__$1);
ret.push(x_35284);

var G__35285 = cljs.core.next.call(null,seq__35264_35278__$1);
var G__35286 = null;
var G__35287 = (0);
var G__35288 = (0);
seq__35264_35268 = G__35285;
chunk__35265_35269 = G__35286;
count__35266_35270 = G__35287;
i__35267_35271 = G__35288;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__9199__auto__,writer__9200__auto__,opt__9201__auto__){
return cljs.core._write.call(null,writer__9200__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__9199__auto__,writer__9200__auto__,opt__9201__auto__){
return cljs.core._write.call(null,writer__9200__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args35289 = [];
var len__9664__auto___35304 = arguments.length;
var i__9665__auto___35305 = (0);
while(true){
if((i__9665__auto___35305 < len__9664__auto___35304)){
args35289.push((arguments[i__9665__auto___35305]));

var G__35306 = (i__9665__auto___35305 + (1));
i__9665__auto___35305 = G__35306;
continue;
} else {
}
break;
}

var G__35291 = args35289.length;
switch (G__35291) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35289.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__35292 = obj;
G__35292.push(kfn.call(null,k),vfn.call(null,v));

return G__35292;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x35293 = cljs.core.clone.call(null,handlers);
x35293.forEach = ((function (x35293,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__35294 = cljs.core.seq.call(null,coll);
var chunk__35295 = null;
var count__35296 = (0);
var i__35297 = (0);
while(true){
if((i__35297 < count__35296)){
var vec__35298 = cljs.core._nth.call(null,chunk__35295,i__35297);
var k = cljs.core.nth.call(null,vec__35298,(0),null);
var v = cljs.core.nth.call(null,vec__35298,(1),null);
f.call(null,v,k);

var G__35308 = seq__35294;
var G__35309 = chunk__35295;
var G__35310 = count__35296;
var G__35311 = (i__35297 + (1));
seq__35294 = G__35308;
chunk__35295 = G__35309;
count__35296 = G__35310;
i__35297 = G__35311;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35294);
if(temp__4657__auto__){
var seq__35294__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35294__$1)){
var c__9404__auto__ = cljs.core.chunk_first.call(null,seq__35294__$1);
var G__35312 = cljs.core.chunk_rest.call(null,seq__35294__$1);
var G__35313 = c__9404__auto__;
var G__35314 = cljs.core.count.call(null,c__9404__auto__);
var G__35315 = (0);
seq__35294 = G__35312;
chunk__35295 = G__35313;
count__35296 = G__35314;
i__35297 = G__35315;
continue;
} else {
var vec__35301 = cljs.core.first.call(null,seq__35294__$1);
var k = cljs.core.nth.call(null,vec__35301,(0),null);
var v = cljs.core.nth.call(null,vec__35301,(1),null);
f.call(null,v,k);

var G__35316 = cljs.core.next.call(null,seq__35294__$1);
var G__35317 = null;
var G__35318 = (0);
var G__35319 = (0);
seq__35294 = G__35316;
chunk__35295 = G__35317;
count__35296 = G__35318;
i__35297 = G__35319;
continue;
}
} else {
return null;
}
}
break;
}
});})(x35293,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x35293;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args35320 = [];
var len__9664__auto___35326 = arguments.length;
var i__9665__auto___35327 = (0);
while(true){
if((i__9665__auto___35327 < len__9664__auto___35326)){
args35320.push((arguments[i__9665__auto___35327]));

var G__35328 = (i__9665__auto___35327 + (1));
i__9665__auto___35327 = G__35328;
continue;
} else {
}
break;
}

var G__35322 = args35320.length;
switch (G__35322) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35320.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit35323 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit35323 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta35324){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta35324 = meta35324;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit35323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35325,meta35324__$1){
var self__ = this;
var _35325__$1 = this;
return (new cognitect.transit.t_cognitect$transit35323(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta35324__$1));
});

cognitect.transit.t_cognitect$transit35323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35325){
var self__ = this;
var _35325__$1 = this;
return self__.meta35324;
});

cognitect.transit.t_cognitect$transit35323.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit35323.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit35323.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit35323.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit35323.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta35324","meta35324",-273253239,null)], null);
});

cognitect.transit.t_cognitect$transit35323.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit35323.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit35323";

cognitect.transit.t_cognitect$transit35323.cljs$lang$ctorPrWriter = (function (this__9199__auto__,writer__9200__auto__,opt__9201__auto__){
return cljs.core._write.call(null,writer__9200__auto__,"cognitect.transit/t_cognitect$transit35323");
});

cognitect.transit.__GT_t_cognitect$transit35323 = (function cognitect$transit$__GT_t_cognitect$transit35323(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta35324){
return (new cognitect.transit.t_cognitect$transit35323(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta35324));
});

}

return (new cognitect.transit.t_cognitect$transit35323(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__8593__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__8593__auto__)){
return or__8593__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map