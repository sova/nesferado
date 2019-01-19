// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null).call(null,e.target.readyState);
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str(current),cljs.core.str(", "),cljs.core.str(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = true;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__24783,handler){
var map__24784 = p__24783;
var map__24784__$1 = ((((!((map__24784 == null)))?((((map__24784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24784):map__24784);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24784__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24784__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24784__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24784__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24784__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24784__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24784__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__24784,map__24784__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__24782_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__24782_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__24784,map__24784__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___24796 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___24796)){
var response_type_24797 = temp__4657__auto___24796;
this$__$1.responseType = cljs.core.name(response_type_24797);
} else {
}

var seq__24786_24798 = cljs.core.seq(headers);
var chunk__24787_24799 = null;
var count__24788_24800 = (0);
var i__24789_24801 = (0);
while(true){
if((i__24789_24801 < count__24788_24800)){
var vec__24790_24802 = chunk__24787_24799.cljs$core$IIndexed$_nth$arity$2(null,i__24789_24801);
var k_24803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24790_24802,(0),null);
var v_24804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24790_24802,(1),null);
this$__$1.setRequestHeader(k_24803,v_24804);

var G__24805 = seq__24786_24798;
var G__24806 = chunk__24787_24799;
var G__24807 = count__24788_24800;
var G__24808 = (i__24789_24801 + (1));
seq__24786_24798 = G__24805;
chunk__24787_24799 = G__24806;
count__24788_24800 = G__24807;
i__24789_24801 = G__24808;
continue;
} else {
var temp__4657__auto___24809 = cljs.core.seq(seq__24786_24798);
if(temp__4657__auto___24809){
var seq__24786_24810__$1 = temp__4657__auto___24809;
if(cljs.core.chunked_seq_QMARK_(seq__24786_24810__$1)){
var c__7194__auto___24811 = cljs.core.chunk_first(seq__24786_24810__$1);
var G__24812 = cljs.core.chunk_rest(seq__24786_24810__$1);
var G__24813 = c__7194__auto___24811;
var G__24814 = cljs.core.count(c__7194__auto___24811);
var G__24815 = (0);
seq__24786_24798 = G__24812;
chunk__24787_24799 = G__24813;
count__24788_24800 = G__24814;
i__24789_24801 = G__24815;
continue;
} else {
var vec__24793_24816 = cljs.core.first(seq__24786_24810__$1);
var k_24817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24793_24816,(0),null);
var v_24818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24793_24816,(1),null);
this$__$1.setRequestHeader(k_24817,v_24818);

var G__24819 = cljs.core.next(seq__24786_24810__$1);
var G__24820 = null;
var G__24821 = (0);
var G__24822 = (0);
seq__24786_24798 = G__24819;
chunk__24787_24799 = G__24820;
count__24788_24800 = G__24821;
i__24789_24801 = G__24822;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__6383__auto__ = body;
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = true;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = true;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
