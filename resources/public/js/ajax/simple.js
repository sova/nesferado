// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('ajax.simple');
goog.require('cljs.core');
goog.require('ajax.formats');
goog.require('ajax.protocols');
goog.require('ajax.interceptors');
goog.require('goog.net.XhrIo');
goog.require('ajax.util');
goog.require('clojure.string');
ajax.simple.normalize_method = (function ajax$simple$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case(cljs.core.name(method));
} else {
return method;
}
});
ajax.simple.process_response = (function ajax$simple$process_response(response,interceptor){
return ajax.protocols._process_response(interceptor,response);
});
ajax.simple.js_handler = (function ajax$simple$js_handler(var_args){
var args24898 = [];
var len__7454__auto___24901 = arguments.length;
var i__7455__auto___24902 = (0);
while(true){
if((i__7455__auto___24902 < len__7454__auto___24901)){
args24898.push((arguments[i__7455__auto___24902]));

var G__24903 = (i__7455__auto___24902 + (1));
i__7455__auto___24902 = G__24903;
continue;
} else {
}
break;
}

var G__24900 = args24898.length;
switch (G__24900) {
case 3:
return ajax.simple.js_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.simple.js_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.simple.js_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24898.length)].join('')));

}
});

ajax.simple.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (handler,interceptors,response){
var processed = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(ajax.simple.process_response,response,interceptors);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(processed) : handler.call(null,processed));
});

ajax.simple.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (handler,interceptors){
return (function (response){
var processed = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(ajax.simple.process_response,response,interceptors);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(processed) : handler.call(null,processed));
});
});

ajax.simple.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return (function (interceptors,response){
var processed = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(ajax.simple.process_response,response,interceptors);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(processed) : handler.call(null,processed));
});
});

ajax.simple.js_handler.cljs$lang$maxFixedArity = 3;

ajax.simple.base_handler = (function ajax$simple$base_handler(interceptors,p__24905){
var map__24908 = p__24905;
var map__24908__$1 = ((((!((map__24908 == null)))?((((map__24908.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24908.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24908):map__24908);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24908__$1,cljs.core.cst$kw$handler);
if(cljs.core.truth_(handler)){
return ajax.simple.js_handler.cljs$core$IFn$_invoke$arity$2(handler,interceptors);
} else {
return ajax.util.throw_error("No ajax handler provided.");
}
});
ajax.simple.default_interceptors = (function (){var G__24910 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24910) : cljs.core.atom.call(null,G__24910));
})();
ajax.simple.normalize_request = (function ajax$simple$normalize_request(request){
var response_format = ajax.interceptors.get_response_format(ajax.formats.detect_response_format,request);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$method,ajax.simple.normalize_method),cljs.core.cst$kw$interceptors,((function (response_format){
return (function (p1__24911_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response_format], null),(function (){var or__6383__auto__ = p1__24911_SHARP_;
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ajax.simple.default_interceptors) : cljs.core.deref.call(null,ajax.simple.default_interceptors));
}
})(),cljs.core.array_seq([ajax.interceptors.request_interceptors], 0));
});})(response_format))
);
});
ajax.simple.new_default_api = (function ajax$simple$new_default_api(){
return (new goog.net.XhrIo());
});
ajax.simple.process_request = (function ajax$simple$process_request(request,interceptor){

return ajax.protocols._process_request(interceptor,request);
});
ajax.simple.raw_ajax_request = (function ajax$simple$raw_ajax_request(p__24912){
var map__24915 = p__24912;
var map__24915__$1 = ((((!((map__24915 == null)))?((((map__24915.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24915.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24915):map__24915);
var request = map__24915__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24915__$1,cljs.core.cst$kw$interceptors);

var request__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(ajax.simple.process_request,request,interceptors);
var handler = ajax.simple.base_handler(cljs.core.reverse(interceptors),request__$1);
var api = (function (){var or__6383__auto__ = cljs.core.cst$kw$api.cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
return ajax.simple.new_default_api();
}
})();
return ajax.protocols._js_ajax_request(api,request__$1,handler);
});
ajax.simple.ajax_request = (function ajax$simple$ajax_request(request){
return ajax.simple.raw_ajax_request(ajax.simple.normalize_request(request));
});
