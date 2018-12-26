// Compiled by ClojureScript 1.9.229 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
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
return cljs.core.reduce.call(null,(function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.call(null,headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = true;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__22418,handler){
var map__22419 = p__22418;
var map__22419__$1 = ((((!((map__22419 == null)))?((((map__22419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22419):map__22419);
var uri = cljs.core.get.call(null,map__22419__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__22419__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__22419__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__22419__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__22419__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__22419__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__22419__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__22419,map__22419__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__22417_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__22417_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__22419,map__22419__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___22431 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___22431)){
var response_type_22432 = temp__4657__auto___22431;
this$__$1.responseType = cljs.core.name.call(null,response_type_22432);
} else {
}

var seq__22421_22433 = cljs.core.seq.call(null,headers);
var chunk__22422_22434 = null;
var count__22423_22435 = (0);
var i__22424_22436 = (0);
while(true){
if((i__22424_22436 < count__22423_22435)){
var vec__22425_22437 = cljs.core._nth.call(null,chunk__22422_22434,i__22424_22436);
var k_22438 = cljs.core.nth.call(null,vec__22425_22437,(0),null);
var v_22439 = cljs.core.nth.call(null,vec__22425_22437,(1),null);
this$__$1.setRequestHeader(k_22438,v_22439);

var G__22440 = seq__22421_22433;
var G__22441 = chunk__22422_22434;
var G__22442 = count__22423_22435;
var G__22443 = (i__22424_22436 + (1));
seq__22421_22433 = G__22440;
chunk__22422_22434 = G__22441;
count__22423_22435 = G__22442;
i__22424_22436 = G__22443;
continue;
} else {
var temp__4657__auto___22444 = cljs.core.seq.call(null,seq__22421_22433);
if(temp__4657__auto___22444){
var seq__22421_22445__$1 = temp__4657__auto___22444;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22421_22445__$1)){
var c__7194__auto___22446 = cljs.core.chunk_first.call(null,seq__22421_22445__$1);
var G__22447 = cljs.core.chunk_rest.call(null,seq__22421_22445__$1);
var G__22448 = c__7194__auto___22446;
var G__22449 = cljs.core.count.call(null,c__7194__auto___22446);
var G__22450 = (0);
seq__22421_22433 = G__22447;
chunk__22422_22434 = G__22448;
count__22423_22435 = G__22449;
i__22424_22436 = G__22450;
continue;
} else {
var vec__22428_22451 = cljs.core.first.call(null,seq__22421_22445__$1);
var k_22452 = cljs.core.nth.call(null,vec__22428_22451,(0),null);
var v_22453 = cljs.core.nth.call(null,vec__22428_22451,(1),null);
this$__$1.setRequestHeader(k_22452,v_22453);

var G__22454 = cljs.core.next.call(null,seq__22421_22445__$1);
var G__22455 = null;
var G__22456 = (0);
var G__22457 = (0);
seq__22421_22433 = G__22454;
chunk__22422_22434 = G__22455;
count__22423_22435 = G__22456;
i__22424_22436 = G__22457;
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
return ajax.xml_http_request.process_headers.call(null,this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map