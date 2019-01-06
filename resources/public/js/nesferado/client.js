// Compiled by ClojureScript 1.9.229 {}
goog.provide('nesferado.client');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('taoensso.sente');
goog.require('ajax.core');
goog.require('taoensso.sente.packers.transit');
goog.require('taoensso.timbre');
goog.require('cemerick.url');
goog.require('cljs.core.async');
goog.require('rum.core');
goog.require('alandipert.storage_atom');
goog.require('accountant.core');
goog.require('taoensso.encore');
goog.require('clojure.string');
nesferado.client.output_el = document.getElementById("output");
nesferado.client.__GT_output_BANG_ = (function nesferado$client$__GT_output_BANG_(var_args){
var args__7465__auto__ = [];
var len__7458__auto___34270 = arguments.length;
var i__7459__auto___34271 = (0);
while(true){
if((i__7459__auto___34271 < len__7458__auto___34270)){
args__7465__auto__.push((arguments[i__7459__auto___34271]));

var G__34272 = (i__7459__auto___34271 + (1));
i__7459__auto___34271 = G__34272;
continue;
} else {
}
break;
}

var argseq__7466__auto__ = ((((1) < args__7465__auto__.length))?(new cljs.core.IndexedSeq(args__7465__auto__.slice((1)),(0),null)):null);
return nesferado.client.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7466__auto__);
});

nesferado.client.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var msg = cljs.core.apply.call(null,taoensso.encore.format,fmt,args);
return (nesferado.client.output_el["value"] = msg);
});

nesferado.client.__GT_output_BANG_.cljs$lang$maxFixedArity = (1);

nesferado.client.__GT_output_BANG_.cljs$lang$applyTo = (function (seq34268){
var G__34269 = cljs.core.first.call(null,seq34268);
var seq34268__$1 = cljs.core.next.call(null,seq34268);
return nesferado.client.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34269,seq34268__$1);
});

nesferado.client.__GT_output_BANG_.call(null," \u2022 Welcome to Nonforum \u2022");
var rand_chsk_type_34275 = (((cljs.core.rand.call(null) >= 0.5))?new cljs.core.Keyword(null,"ajax","ajax",814345549):new cljs.core.Keyword(null,"auto","auto",-566279492));
var packer_34276 = new cljs.core.Keyword(null,"edn","edn",1317840885);
var map__34273_34277 = taoensso.sente.make_channel_socket_client_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),rand_chsk_type_34275,new cljs.core.Keyword(null,"packer","packer",66077544),packer_34276], null));
var map__34273_34278__$1 = ((((!((map__34273_34277 == null)))?((((map__34273_34277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34273_34277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34273_34277):map__34273_34277);
var chsk_34279 = cljs.core.get.call(null,map__34273_34278__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_34280 = cljs.core.get.call(null,map__34273_34278__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_34281 = cljs.core.get.call(null,map__34273_34278__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_34282 = cljs.core.get.call(null,map__34273_34278__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
nesferado.client.chsk = chsk_34279;

nesferado.client.ch_chsk = ch_recv_34280;

nesferado.client.chsk_send_BANG_ = send_fn_34281;

nesferado.client.chsk_state = state_34282;
nesferado.client.y = cljs.core.atom.call(null,(999));
/**
 * Set `key' in browser's localStorage to `val`.
 */
nesferado.client.set_item_BANG_ = (function nesferado$client$set_item_BANG_(key,val){
return window.localStorage.setItem(key,val);
});
/**
 * Returns value of `key' from browser's localStorage.
 */
nesferado.client.get_item = (function nesferado$client$get_item(key){
return window.localStorage.getItem(key);
});
/**
 * Remove the browser's localStorage value for the given `key`
 */
nesferado.client.remove_item_BANG_ = (function nesferado$client$remove_item_BANG_(key){
return window.localStorage.removeItem(key);
});
console.log(nesferado.client.get_item.call(null,new cljs.core.Keyword(null,"auth-key","auth-key",1408789427)));
console.log(nesferado.client.get_item.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400)));
nesferado.client.handler = (function nesferado$client$handler(response){
return console.log([cljs.core.str(response)].join(''));
});
nesferado.client.error_handler = (function nesferado$client$error_handler(p__34283){
var map__34286 = p__34283;
var map__34286__$1 = ((((!((map__34286 == null)))?((((map__34286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34286):map__34286);
var status = cljs.core.get.call(null,map__34286__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__34286__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
var temp__4657__auto___34288 = document.getElementById("btn1");
if(cljs.core.truth_(temp__4657__auto___34288)){
var target_el_34289 = temp__4657__auto___34288;
target_el_34289.addEventListener("click",((function (target_el_34289,temp__4657__auto___34288){
return (function (ev){
nesferado.client.__GT_output_BANG_.call(null,"Button 1 was clicked (won't receive any reply from server)");

return nesferado.client.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("clientsent","ping","clientsent/ping",1328045379)], null));
});})(target_el_34289,temp__4657__auto___34288))
);
} else {
}
var temp__4657__auto___34290 = document.getElementById("btn2");
if(cljs.core.truth_(temp__4657__auto___34290)){
var target_el_34291 = temp__4657__auto___34290;
target_el_34291.addEventListener("click",((function (target_el_34291,temp__4657__auto___34290){
return (function (ev){
nesferado.client.__GT_output_BANG_.call(null,"Button 2 was clicked (will receive reply from server)");

return nesferado.client.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","button2","example/button2",-675598425),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"had-a-callback?","had-a-callback?",-512946762),"indeed"], null)], null),(5000),((function (target_el_34291,temp__4657__auto___34290){
return (function (cb_reply){
return nesferado.client.__GT_output_BANG_.call(null,"Callback reply: %s",cb_reply);
});})(target_el_34291,temp__4657__auto___34290))
);
});})(target_el_34291,temp__4657__auto___34290))
);
} else {
}
var temp__4657__auto___34292 = document.getElementById("btn3");
if(cljs.core.truth_(temp__4657__auto___34292)){
var target_el_34293 = temp__4657__auto___34292;
target_el_34293.addEventListener("click",((function (target_el_34293,temp__4657__auto___34292){
return (function (ev){
nesferado.client.__GT_output_BANG_.call(null,"Button 3 was clicked (will ask server to test rapid async push)");

return nesferado.client.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","test-rapid-push","example/test-rapid-push",-93412097)], null));
});})(target_el_34293,temp__4657__auto___34292))
);
} else {
}
var temp__4657__auto___34294 = document.getElementById("btn4");
if(cljs.core.truth_(temp__4657__auto___34294)){
var target_el_34295 = temp__4657__auto___34294;
target_el_34295.addEventListener("click",((function (target_el_34295,temp__4657__auto___34294){
return (function (ev){
nesferado.client.__GT_output_BANG_.call(null,"Button 4 was clicked (will toggle async broadcast loop)");

return nesferado.client.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","toggle-broadcast","example/toggle-broadcast",-1640005413)], null),(5000),((function (target_el_34295,temp__4657__auto___34294){
return (function (cb_reply){
if(cljs.core.truth_(taoensso.sente.cb_success_QMARK_.call(null,cb_reply))){
var loop_enabled_QMARK_ = cb_reply;
if(cljs.core.truth_(loop_enabled_QMARK_)){
return nesferado.client.__GT_output_BANG_.call(null,"Async broadcast loop now enabled");
} else {
return nesferado.client.__GT_output_BANG_.call(null,"Async broadcast loop now disabled");
}
} else {
return null;
}
});})(target_el_34295,temp__4657__auto___34294))
);
});})(target_el_34295,temp__4657__auto___34294))
);
} else {
}
var temp__4657__auto___34296 = document.getElementById("btn5");
if(cljs.core.truth_(temp__4657__auto___34296)){
var target_el_34297 = temp__4657__auto___34296;
target_el_34297.addEventListener("click",((function (target_el_34297,temp__4657__auto___34296){
return (function (ev){
nesferado.client.__GT_output_BANG_.call(null,"Disconnecting");

return taoensso.sente.chsk_disconnect_BANG_.call(null,nesferado.client.chsk);
});})(target_el_34297,temp__4657__auto___34296))
);
} else {
}
var temp__4657__auto___34298 = document.getElementById("btn6");
if(cljs.core.truth_(temp__4657__auto___34298)){
var target_el_34299 = temp__4657__auto___34298;
target_el_34299.addEventListener("click",((function (target_el_34299,temp__4657__auto___34298){
return (function (ev){
nesferado.client.__GT_output_BANG_.call(null,"Reconnecting");

return taoensso.sente.chsk_reconnect_BANG_.call(null,nesferado.client.chsk);
});})(target_el_34299,temp__4657__auto___34298))
);
} else {
}
cljs.core.enable_console_print_BANG_.call(null);
nesferado.client.err0r = (function nesferado$client$err0r(){
return cljs.core.println.call(null,"err0r");
});
nesferado.client.message_sent_boomerang = (function nesferado$client$message_sent_boomerang(ok,result){
cljs.core.println.call(null,ok,result,"** **");

return console.log("hey the result!");
});
nesferado.client.nf_books = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [(8882882),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"The way of awesomeness.",new cljs.core.Keyword(null,"isbn","isbn",-1600638962),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10200000000002),(210500000000010),(200000000000000015)], null),new cljs.core.Keyword(null,"threads","threads",-1717798734),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(4),(5),(6)], null)], null)], null));
nesferado.client.nf_speeches = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
nesferado.client.nf_letters = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
nesferado.client.nf_topics = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
nesferado.client.nf_threads = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [(12121),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"cruise on through to the other side",new cljs.core.Keyword(null,"author","author",2111686192),"jimmorrison@nonforum.com",new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128),(2),new cljs.core.Keyword(null,"rating-total","rating-total",966088857),(98)], null)], null));
nesferado.client.nf_ratings = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [(33373),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"rid","rid",801761275),(33373),new cljs.core.Keyword(null,"author","author",2111686192),"jm@nf.com",new cljs.core.Keyword(null,"oid","oid",-768692334),"theThingyRated251215",new cljs.core.Keyword(null,"rating","rating",144173662),"++",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(121212121212)], null)], null));
nesferado.client.nf_qd = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [(12345777),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"contents","contents",-1567174023),"Hey this is a question about this site.  How does it all work, and what's it all about?",new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"author","author",2111686192),"x@nonforum.com",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(80808),new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128),(32),new cljs.core.Keyword(null,"rating-total","rating-total",966088857),(9700),new cljs.core.Keyword(null,"ratings","ratings",2118542621),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"oid","oid",-768692334),(123456),new cljs.core.Keyword(null,"rater","rater",-1025569865),"y@nonforum.com",new cljs.core.Keyword(null,"rating","rating",144173662),"++",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(6756421)], null)], null)], null)], null));
nesferado.client.nf_articles = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [(167641),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subtopics","subtopics",-1975155410),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"subtopic","subtopic",-131648208),"deciduous",new cljs.core.Keyword(null,"ratings","ratings",2118542621),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rater","rater",-1025569865),"bob@nf.com",new cljs.core.Keyword(null,"rating","rating",144173662),"++",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(28282)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"subtopic","subtopic",-131648208),"harmony",new cljs.core.Keyword(null,"ratings","ratings",2118542621),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rater","rater",-1025569865),"oion@nf.com",new cljs.core.Keyword(null,"rating","rating",144173662),"++",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(28282)], null)], null)], null)], null)], null)], null));
nesferado.client.tv_state = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
nesferado.client.input_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tv-curr-id","tv-curr-id",-111236576),new cljs.core.Keyword(null,"change-pass-old-pw","change-pass-old-pw",1553381089),new cljs.core.Keyword(null,"edit-display-name","edit-display-name",210290594),new cljs.core.Keyword(null,"tv-contents","tv-contents",1386118275),new cljs.core.Keyword(null,"set-email","set-email",585682052),new cljs.core.Keyword(null,"selected-child","selected-child",-1028326940),new cljs.core.Keyword(null,"current-user","current-user",-868792091),new cljs.core.Keyword(null,"tv-comments","tv-comments",209439077),new cljs.core.Keyword(null,"login-time","login-time",138500005),new cljs.core.Keyword(null,"current-email","current-email",-760615865),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"invite-friend-input","invite-friend-input",-2131196281),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"send-feedback-extra","send-feedback-extra",-1564432438),new cljs.core.Keyword(null,"tv-posted-by","tv-posted-by",-35895188),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"create-password","create-password",1870602480),new cljs.core.Keyword(null,"create-password2","create-password2",798530673),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"send-feedback-input","send-feedback-input",49565459),new cljs.core.Keyword(null,"change-pass-new-pw2","change-pass-new-pw2",1424562292),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"change-pass-new-pw","change-pass-new-pw",1793094004),new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"create-username","create-username",515996759),new cljs.core.Keyword(null,"logged-in","logged-in",627058423),new cljs.core.Keyword(null,"contents","contents",-1567174023),new cljs.core.Keyword(null,"tv-title","tv-title",1038509594),new cljs.core.Keyword(null,"tv-current","tv-current",-1070700452),new cljs.core.Keyword(null,"tv-priority","tv-priority",23309500),new cljs.core.Keyword(null,"current-view","current-view",-1037279042),new cljs.core.Keyword(null,"selected-parent","selected-parent",1600183774),new cljs.core.Keyword(null,"tv-timestamp","tv-timestamp",447467647),new cljs.core.Keyword(null,"tv-link","tv-link",1690495327)],["","","","","",cljs.core.PersistentVector.EMPTY,"",cljs.core.PersistentVector.EMPTY,"","","","","","","","","","","","","","","","","","",false,"","",cljs.core.PersistentArrayMap.EMPTY,(4),"/",(0),(808),""])], null)], null));
nesferado.client.posts = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
nesferado.client.ratings = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null));
nesferado.client.nf_comment = cljs.core.atom.call(null,"");
nesferado.client.get_rating = (function nesferado$client$get_rating(ratings_total,number_of_ratings){
if((number_of_ratings < (3))){
return (number_of_ratings + (1));
} else {
return ((ratings_total / number_of_ratings) | (0));
}
});
nesferado.client.get_url_params = (function nesferado$client$get_url_params(){
return new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(cemerick.url.url.call(null,window.location.href));
});
nesferado.client.get_post_by_id = (function nesferado$client$get_post_by_id(post_id){
var post = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__34300_SHARP_){
return cljs.core._EQ_.call(null,post_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__34300_SHARP_));
}),cljs.core.deref.call(null,nesferado.client.posts)));
return post;
});
nesferado.client.get_post_by_id.call(null,(77));
cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__34301_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__34301_SHARP_)),(88));
}),cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.deref.call(null,nesferado.client.posts)))));
nesferado.client.sort_the_comments_of_BANG_ = (function nesferado$client$sort_the_comments_of_BANG_(post_id){
var sort_me_id = post_id;
var spot = cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,((function (sort_me_id){
return (function (p1__34302_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__34302_SHARP_)),sort_me_id);
});})(sort_me_id))
,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.deref.call(null,nesferado.client.posts)))));
var sorted_comments = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128),cljs.core._GT_,cljs.core.map.call(null,nesferado.client.get_post_by_id,new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(nesferado.client.get_post_by_id.call(null,sort_me_id)))));
return cljs.core.swap_BANG_.call(null,nesferado.client.posts,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spot,new cljs.core.Keyword(null,"comments","comments",-293346423)], null),sorted_comments);
});
nesferado.client.return_comment_ids = (function nesferado$client$return_comment_ids(post_id){
var cids = new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__34303_SHARP_){
return cljs.core._EQ_.call(null,post_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__34303_SHARP_));
}),cljs.core.deref.call(null,nesferado.client.posts))));
var posts = cljs.core.map.call(null,nesferado.client.get_post_by_id,cids);
var post_collection = cljs.core.sort_by.call(null,((function (cids,posts){
return (function (p1__34304_SHARP_){
return nesferado.client.get_rating.call(null,new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318).cljs$core$IFn$_invoke$arity$1(p1__34304_SHARP_),new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128).cljs$core$IFn$_invoke$arity$1(p1__34304_SHARP_));
});})(cids,posts))
,posts);
var spc = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),post_collection);
return spc;
});
nesferado.client.return_comment_ids_of_tv = (function nesferado$client$return_comment_ids_of_tv(tile_id){
var cids = new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__34305_SHARP_){
return cljs.core._EQ_.call(null,tile_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__34305_SHARP_));
}),cljs.core.deref.call(null,nesferado.client.tv_state))));
var posts = cljs.core.map.call(null,nesferado.client.get_post_by_id,cids);
var post_collection = cljs.core.sort_by.call(null,((function (cids,posts){
return (function (p1__34306_SHARP_){
return nesferado.client.get_rating.call(null,new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318).cljs$core$IFn$_invoke$arity$1(p1__34306_SHARP_),new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128).cljs$core$IFn$_invoke$arity$1(p1__34306_SHARP_));
});})(cids,posts))
,posts);
var spc = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),post_collection);
return spc;
});
nesferado.client.return_comment_ids.call(null,(34));
nesferado.client.return_comment_ids.call(null,(53));
nesferado.client.return_comment_ids.call(null,(69));
nesferado.client.return_comment_ids.call(null,(77));
cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__34307_SHARP_){
return cljs.core._EQ_.call(null,(69),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__34307_SHARP_));
}),cljs.core.deref.call(null,nesferado.client.posts)));
accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
console.log("ac: ",path);

if((clojure.string.starts_with_QMARK_.call(null,path,"?nfid")) || (clojure.string.starts_with_QMARK_.call(null,path,"/?nfid"))){
console.log("start swith nfid busted");

var url_params = nesferado.client.get_url_params.call(null);
var nfid = cljs.reader.parse_int.call(null,cljs.core.get.call(null,url_params,"nfid"));
var td = cljs.core.first.call(null,cljs.core.filter.call(null,((function (url_params,nfid){
return (function (p1__34308_SHARP_){
return cljs.core._EQ_.call(null,nfid,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__34308_SHARP_));
});})(url_params,nfid))
,cljs.core.deref.call(null,nesferado.client.tv_state)));
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(td);
var contents = new cljs.core.Keyword(null,"contents","contents",-1567174023).cljs$core$IFn$_invoke$arity$1(td);
var comments = new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(td);
var posted_by = new cljs.core.Keyword(null,"posted-by","posted-by",-66955024).cljs$core$IFn$_invoke$arity$1(td);
var timestamp = new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(td);
var n_ratings = new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128).cljs$core$IFn$_invoke$arity$1(td);
var ratings_t = new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318).cljs$core$IFn$_invoke$arity$1(td);
var link = new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(td);
var long_description = new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(td);
var cids = nesferado.client.return_comment_ids_of_tv.call(null,nfid);
console.log(nfid,title,contents,posted_by,comments);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"current-view","current-view",-1037279042)], null),"/");

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-title","tv-title",1038509594)], null),title);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-contents","tv-contents",1386118275)], null),contents);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-posted-by","tv-posted-by",-35895188)], null),posted_by);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-timestamp","tv-timestamp",447467647)], null),timestamp);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-comments","tv-comments",209439077)], null),comments);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"selected-parent","selected-parent",1600183774)], null),nfid);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"selected-child","selected-child",-1028326940)], null),cids);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-current","tv-current",-1070700452)], null),td);

return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-curr-id","tv-curr-id",-111236576)], null),nfid);
} else {
return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"current-view","current-view",-1037279042)], null),path);
}
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (_){
return true;
}),new cljs.core.Keyword(null,"reload-same-path?","reload-same-path?",1981904231),true], null));
nesferado.client.js_reload = (function nesferado$client$js_reload(){
return console.log("javascript reloaded ^_^;");
});
cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,nesferado.client.posts));
cljs.core.map.call(null,nesferado.client.sort_the_comments_of_BANG_,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,nesferado.client.posts)));
nesferado.client.create_user = (function nesferado$client$create_user(user_id,pw,pw2){
nesferado.client.__GT_output_BANG_.call(null,"Creating account",user_id);

return taoensso.sente.ajax_lite.call(null,"/create-account",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,nesferado.client.chsk_state))], null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),[cljs.core.str(user_id)].join(''),new cljs.core.Keyword(null,"password","password",417022471),[cljs.core.str(pw)].join(''),new cljs.core.Keyword(null,"password2","password2",557827521),[cljs.core.str(pw2)].join('')], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)], null),(function (ajax_resp){
nesferado.client.__GT_output_BANG_.call(null,"Account creation response: ",ajax_resp);

var map__34311 = ajax_resp;
var map__34311__$1 = ((((!((map__34311 == null)))?((((map__34311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34311):map__34311);
var success_QMARK_ = cljs.core.get.call(null,map__34311__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var _QMARK_status = cljs.core.get.call(null,map__34311__$1,new cljs.core.Keyword(null,"?status","?status",938730360));
var _QMARK_error = cljs.core.get.call(null,map__34311__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__34311__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
var _QMARK_content_type = cljs.core.get.call(null,map__34311__$1,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049));
var http_status = new cljs.core.Keyword(null,"?status","?status",938730360).cljs$core$IFn$_invoke$arity$1(ajax_resp);
var account_create_successful_QMARK_ = cljs.core._EQ_.call(null,(200),http_status);
var stuff = cljs.reader.read_string.call(null,_QMARK_content);
if(!(account_create_successful_QMARK_)){
return nesferado.client.__GT_output_BANG_.call(null,"Account Creation Failed.");
} else {
nesferado.client.__GT_output_BANG_.call(null,"Account Creation Success!");

nesferado.client.__GT_output_BANG_.call(null,[cljs.core.str("Now logged in as "),cljs.core.str(user_id)].join(''));

nesferado.client.set_item_BANG_.call(null,new cljs.core.Keyword(null,"auth-key","auth-key",1408789427),new cljs.core.Keyword(null,"auth-token","auth-token",30990976).cljs$core$IFn$_invoke$arity$1(stuff));

nesferado.client.set_item_BANG_.call(null,new cljs.core.Keyword(null,"login-time","login-time",138500005),new cljs.core.Keyword(null,"login-time","login-time",138500005).cljs$core$IFn$_invoke$arity$1(stuff));

nesferado.client.set_item_BANG_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(stuff));

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"token","token",-1211463215)], null),new cljs.core.Keyword(null,"auth-token","auth-token",30990976).cljs$core$IFn$_invoke$arity$1(stuff));

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"login-time","login-time",138500005)], null),new cljs.core.Keyword(null,"login-time","login-time",138500005).cljs$core$IFn$_invoke$arity$1(stuff));

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"logged-in","logged-in",627058423)], null),true);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"current-user","current-user",-868792091)], null),new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(stuff));

return taoensso.sente.chsk_reconnect_BANG_.call(null,nesferado.client.chsk);
}
}));
});
nesferado.client.try_login = (function nesferado$client$try_login(username,pw){
if(clojure.string.blank_QMARK_.call(null,username)){
return alert("Please enter a user-id first");
} else {
nesferado.client.__GT_output_BANG_.call(null,[cljs.core.str("Logging in with username "),cljs.core.str(username)].join(''));

return taoensso.sente.ajax_lite.call(null,"/login",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,nesferado.client.chsk_state))], null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),[cljs.core.str(username)].join(''),new cljs.core.Keyword(null,"password","password",417022471),[cljs.core.str(pw)].join('')], null),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697)], null),(function (ajax_resp){
var map__34315 = ajax_resp;
var map__34315__$1 = ((((!((map__34315 == null)))?((((map__34315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34315):map__34315);
var success_QMARK_ = cljs.core.get.call(null,map__34315__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var _QMARK_status = cljs.core.get.call(null,map__34315__$1,new cljs.core.Keyword(null,"?status","?status",938730360));
var _QMARK_error = cljs.core.get.call(null,map__34315__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__34315__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
var _QMARK_content_type = cljs.core.get.call(null,map__34315__$1,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049));
var login_successful_QMARK_ = success_QMARK_;
var stuff = cljs.reader.read_string.call(null,_QMARK_content);
if(cljs.core.not.call(null,login_successful_QMARK_)){
return nesferado.client.__GT_output_BANG_.call(null,"Login failed");
} else {
nesferado.client.__GT_output_BANG_.call(null,"Login successful");

nesferado.client.set_item_BANG_.call(null,new cljs.core.Keyword(null,"auth-key","auth-key",1408789427),new cljs.core.Keyword(null,"auth-token","auth-token",30990976).cljs$core$IFn$_invoke$arity$1(stuff));

nesferado.client.set_item_BANG_.call(null,new cljs.core.Keyword(null,"login-time","login-time",138500005),new cljs.core.Keyword(null,"login-time","login-time",138500005).cljs$core$IFn$_invoke$arity$1(stuff));

nesferado.client.set_item_BANG_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(stuff));

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"token","token",-1211463215)], null),new cljs.core.Keyword(null,"auth-token","auth-token",30990976).cljs$core$IFn$_invoke$arity$1(stuff));

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"login-time","login-time",138500005)], null),new cljs.core.Keyword(null,"login-time","login-time",138500005).cljs$core$IFn$_invoke$arity$1(stuff));

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"logged-in","logged-in",627058423)], null),true);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"current-user","current-user",-868792091)], null),new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(stuff));

return taoensso.sente.chsk_reconnect_BANG_.call(null,nesferado.client.chsk);
}
}));
}
});
nesferado.client.write_rating_BANG_ = (function nesferado$client$write_rating_BANG_(rating,pid){
return nesferado.client.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("clientsent","rating","clientsent/rating",-967056257),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pid","pid",1018387698),pid,new cljs.core.Keyword(null,"uid","uid",-1447769400),cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"current-user","current-user",-868792091)], null)),new cljs.core.Keyword(null,"rating","rating",144173662),rating], null)], null));
});
nesferado.client.rate = (function nesferado$client$rate(rating,pid){
if(cljs.core._EQ_.call(null,rating,new cljs.core.Keyword(null,"double-plus","double-plus",759077853))){
nesferado.client.write_rating_BANG_.call(null,rating,pid);

return console.log("user rated ",pid," ++");
} else {
if(cljs.core._EQ_.call(null,rating,new cljs.core.Keyword(null,"plus","plus",211540661))){
nesferado.client.write_rating_BANG_.call(null,rating,pid);

return console.log([cljs.core.str("user rated "),cljs.core.str(pid),cljs.core.str(" +")].join(''));
} else {
if(cljs.core._EQ_.call(null,rating,new cljs.core.Keyword(null,"minus","minus",-1683561492))){
nesferado.client.write_rating_BANG_.call(null,rating,pid);

return console.log("user rated ",pid," -");
} else {
return null;
}
}
}
});
nesferado.client.rate.call(null,new cljs.core.Keyword(null,"plus","plus",211540661),(533));
nesferado.client.show_fresh = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var comp_34317 = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var dom_node_34318 = ReactDOM.findDOMNode(comp_34317);
dom_node_34318.classList = "justMounted";

return state;
})], null);
nesferado.client.render_item = rum.core.build_defcs.call(null,(function (state,pid){
var post_coll = rum.core.react.call(null,nesferado.client.posts);
var input_coll = rum.core.react.call(null,nesferado.client.input_state);
var cids = nesferado.client.return_comment_ids.call(null,pid);
var __ = rum.core.react.call(null,nesferado.client.tv_state);
var local_atom = new cljs.core.Keyword("nesferado.client","hidecomments","nesferado.client/hidecomments",-2061490545).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.empty_QMARK_.call(null,nesferado.client.return_comment_ids.call(null,pid))){
var noc_post = cljs.core.first.call(null,cljs.core.filter.call(null,((function (post_coll,input_coll,cids,__,local_atom){
return (function (p1__34319_SHARP_){
return cljs.core._EQ_.call(null,pid,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__34319_SHARP_));
});})(post_coll,input_coll,cids,__,local_atom))
,post_coll));
var nor_nospost = new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128).cljs$core$IFn$_invoke$arity$1(noc_post);
var rating = nesferado.client.get_rating.call(null,new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318).cljs$core$IFn$_invoke$arity$1(noc_post),nor_nospost);
return React.createElement("div",({"id": pid, "className": "nocomments genpost"}),React.createElement("div",({"onClick": ((function (noc_post,nor_nospost,rating,post_coll,input_coll,cids,__,local_atom){
return (function (e){
console.log("Freshly selected: ",pid);

e.stopPropagation();

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"selected-parent","selected-parent",1600183774)], null),pid);

return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"selected-child","selected-child",-1028326940)], null),nesferado.client.return_comment_ids.call(null,pid));
});})(noc_post,nor_nospost,rating,post_coll,input_coll,cids,__,local_atom))
, "className": "padleft"}),React.createElement("div",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-contents","genpost",((cljs.core._EQ_.call(null,pid,cljs.core.get_in.call(null,input_coll,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"selected-parent","selected-parent",1600183774)], null))))?"selectedParent":(cljs.core.truth_(cljs.core.some.call(null,((function (noc_post,nor_nospost,rating,post_coll,input_coll,cids,__,local_atom){
return (function (p1__34320_SHARP_){
return cljs.core._EQ_.call(null,p1__34320_SHARP_,pid);
});})(noc_post,nor_nospost,rating,post_coll,input_coll,cids,__,local_atom))
,cljs.core.get_in.call(null,input_coll,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"selected-child","selected-child",-1028326940)], null))))?"selectedChild":null))], null))}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"contents","contents",-1567174023).cljs$core$IFn$_invoke$arity$1(noc_post)),(function (){var attrs34325 = new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(noc_post);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34325))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-author"], null)], null),attrs34325)):({"className": "item-author"})),((cljs.core.map_QMARK_.call(null,attrs34325))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34325)], null)));
})(),React.createElement("div",({"className": "rate"}),React.createElement("div",({"onClick": ((function (noc_post,nor_nospost,rating,post_coll,input_coll,cids,__,local_atom){
return (function (e){
return nesferado.client.rate.call(null,new cljs.core.Keyword(null,"double-plus","double-plus",759077853),pid);
});})(noc_post,nor_nospost,rating,post_coll,input_coll,cids,__,local_atom))
, "className": "item-rate-doubleplus"}),""),React.createElement("div",({"onClick": ((function (noc_post,nor_nospost,rating,post_coll,input_coll,cids,__,local_atom){
return (function (e){
return nesferado.client.rate.call(null,new cljs.core.Keyword(null,"plus","plus",211540661),pid);
});})(noc_post,nor_nospost,rating,post_coll,input_coll,cids,__,local_atom))
, "className": "item-rate-plus"}),""),React.createElement("div",({"onClick": ((function (noc_post,nor_nospost,rating,post_coll,input_coll,cids,__,local_atom){
return (function (e){
return nesferado.client.rate.call(null,new cljs.core.Keyword(null,"minus","minus",-1683561492),pid);
});})(noc_post,nor_nospost,rating,post_coll,input_coll,cids,__,local_atom))
, "className": "item-rate-minus"}),""),React.createElement("div",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-rating",(((nor_nospost < (3)))?"rollthedice":"numerals")], null))}),sablono.interpreter.interpret.call(null,rating))))));
} else {
var com_post = cljs.core.first.call(null,cljs.core.filter.call(null,((function (post_coll,input_coll,cids,__,local_atom){
return (function (p1__34321_SHARP_){
return cljs.core._EQ_.call(null,pid,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__34321_SHARP_));
});})(post_coll,input_coll,cids,__,local_atom))
,cljs.core.sort_by.call(null,((function (post_coll,input_coll,cids,__,local_atom){
return (function (p1__34322_SHARP_){
return nesferado.client.get_rating.call(null,new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318).cljs$core$IFn$_invoke$arity$1(p1__34322_SHARP_),new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128).cljs$core$IFn$_invoke$arity$1(p1__34322_SHARP_));
});})(post_coll,input_coll,cids,__,local_atom))
,post_coll)));
var nor_compost = new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128).cljs$core$IFn$_invoke$arity$1(com_post);
var com_rating = nesferado.client.get_rating.call(null,new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318).cljs$core$IFn$_invoke$arity$1(com_post),nor_compost);
return React.createElement("div",({"id": pid, "className": "hascomments"}),React.createElement("div",({"onClick": ((function (com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom){
return (function (e){
console.log("Freshly selected: ",pid);

e.stopPropagation();

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"selected-parent","selected-parent",1600183774)], null),pid);

return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"selected-child","selected-child",-1028326940)], null),nesferado.client.return_comment_ids.call(null,pid));
});})(com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom))
, "className": "padleft"}),React.createElement("div",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-contents","genpost",((cljs.core._EQ_.call(null,pid,cljs.core.get_in.call(null,input_coll,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"selected-parent","selected-parent",1600183774)], null))))?"selectedParent":(cljs.core.truth_(cljs.core.some.call(null,((function (com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom){
return (function (p1__34323_SHARP_){
return cljs.core._EQ_.call(null,p1__34323_SHARP_,pid);
});})(com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom))
,cljs.core.get_in.call(null,input_coll,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"selected-child","selected-child",-1028326940)], null))))?"selectedChild":null))], null))}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"contents","contents",-1567174023).cljs$core$IFn$_invoke$arity$1(com_post)),(function (){var attrs34326 = new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(com_post);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34326))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-author"], null)], null),attrs34326)):({"className": "item-author"})),((cljs.core.map_QMARK_.call(null,attrs34326))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34326)], null)));
})(),React.createElement("div",({"className": "rate"}),React.createElement("div",({"onClick": ((function (com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom){
return (function (e){
return nesferado.client.rate.call(null,new cljs.core.Keyword(null,"double-plus","double-plus",759077853),pid);
});})(com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom))
, "className": "item-rate-doubleplus"}),""),React.createElement("div",({"onClick": ((function (com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom){
return (function (e){
return nesferado.client.rate.call(null,new cljs.core.Keyword(null,"plus","plus",211540661),pid);
});})(com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom))
, "className": "item-rate-plus"}),""),React.createElement("div",({"onClick": ((function (com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom){
return (function (e){
return nesferado.client.rate.call(null,new cljs.core.Keyword(null,"minus","minus",-1683561492),pid);
});})(com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom))
, "className": "item-rate-minus"}),""),React.createElement("div",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-rating",(((nor_compost < (3)))?"rollthedice":"numerals")], null))}),sablono.interpreter.interpret.call(null,com_rating)))),React.createElement("button",({"onClick": ((function (com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom){
return (function (_){
return cljs.core.swap_BANG_.call(null,local_atom,((function (com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom){
return (function (p1__34324_SHARP_){
return ((-1) * p1__34324_SHARP_);
});})(com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom))
);
});})(com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom))
, "className": "commentog"}),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,local_atom),(-1)))?"hide":"show")),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,local_atom),(-1)))?sablono.interpreter.interpret.call(null,cljs.core.map.call(null,nesferado.client.render_item,cids)):null)));
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.call(null,(-1),new cljs.core.Keyword("nesferado.client","hidecomments","nesferado.client/hidecomments",-2061490545)),nesferado.client.show_fresh], null),"render-item");
nesferado.client.send_feedback_fields = rum.core.build_defcs.call(null,(function (state){
return React.createElement("form",({"id": "sendfeedbackform"}),sablono.interpreter.create_element.call(null,"textarea",({"id": "sendfeedbackinput", "placeholder": "Send us some feedback, suggestions, comments, concerns.", "name": "feedback", "onChange": (function (e){
return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"send-feedback-input","send-feedback-input",49565459)], null),e.target.value);
}), "className": "fullwidth"})),React.createElement("button",({"id": "sfsubmit", "type": "button", "onClick": (function (e){
var feedback = cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"send-feedback-input","send-feedback-input",49565459)], null));
return console.log("send feedback button pressed");
}), "className": "fullwidth"}),"send feedback"));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,nesferado.client.show_fresh], null),"send-feedback-fields");
nesferado.client.invite_fields = rum.core.build_defcs.call(null,(function (state){
return React.createElement("form",({"id": "invitefriendsform"}),sablono.interpreter.create_element.call(null,"input",({"id": "invitefriendsinput", "placeholder": "Enter a friend's email and invite them to join nonforum.", "name": "invite", "value": cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"invite-friend-input","invite-friend-input",-2131196281)], null)), "onChange": (function (e){
return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"invite-friend-input","invite-friend-input",-2131196281)], null),e.target.value);
}), "className": "reim"})),React.createElement("button",({"id": "sfsubmit", "type": "button", "onClick": (function (e){
var invite_friend = cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"invite-friend-input","invite-friend-input",-2131196281)], null));
return console.log("invite friend button pressed");
}), "className": "reim"}),"invite friend"));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,nesferado.client.show_fresh], null),"invite-fields");
nesferado.client.nf_login_input = rum.core.build_defc.call(null,(function (){
return React.createElement("form",({"id": "nflogin"}),sablono.interpreter.create_element.call(null,"input",({"placeholder": "username", "name": "username", "autoComplete": "username login", "onChange": (function (e){
return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"username","username",1605666410)], null),e.target.value);
}), "className": "fullwidth"})),sablono.interpreter.create_element.call(null,"input",({"placeholder": "password", "type": "password", "name": "password", "autoComplete": "password login", "onChange": (function (e){
return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"password","password",417022471)], null),e.target.value);
}), "className": "fullwidth"})),React.createElement("button",({"id": "logsin", "type": "button", "onClick": (function (e){
var username = cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"username","username",1605666410)], null));
var password = cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"password","password",417022471)], null));
return nesferado.client.try_login.call(null,username,password);
}), "className": "fullwidth"}),"login"));
}),null,"nf-login-input");
nesferado.client.create_account_fields = rum.core.build_defc.call(null,(function (){
return React.createElement("form",({"id": "nfcreate"}),sablono.interpreter.create_element.call(null,"input",({"id": "cruser", "placeholder": "username", "name": "username", "onChange": (function (e){
return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"create-username","create-username",515996759)], null),e.target.value);
}), "className": "fullwidth"})),sablono.interpreter.create_element.call(null,"input",({"id": "crpass", "placeholder": "password", "type": "password", "name": "password", "onChange": (function (e){
return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"create-password","create-password",1870602480)], null),e.target.value);
}), "className": "fullwidth"})),sablono.interpreter.create_element.call(null,"input",({"id": "crpass2", "placeholder": "pw confirm", "type": "password", "name": "password2", "onChange": (function (e){
return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"create-password2","create-password2",798530673)], null),e.target.value);
}), "className": "fullwidth"})),React.createElement("button",({"id": "crsubmit", "type": "button", "onClick": (function (e){
var username = cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"create-username","create-username",515996759)], null));
var password = cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"create-password","create-password",1870602480)], null));
var password2 = cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"create-password2","create-password2",798530673)], null));
return nesferado.client.create_user.call(null,username,password,password2);
}), "className": "fullwidth"}),"create account"));
}),null,"create-account-fields");
nesferado.client.create_account_input = rum.core.build_defc.call(null,(function (){
var attrs34327 = nesferado.client.create_account_fields.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34327))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"create-account-contain"], null),attrs34327)):({"id": "create-account-contain"})),((cljs.core.map_QMARK_.call(null,attrs34327))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34327)], null)));
}),null,"create-account-input");
nesferado.client.link = rum.core.build_defc.call(null,(function (address){
return React.createElement("a",({"href": address}),sablono.interpreter.interpret.call(null,address));
}),null,"link");
nesferado.client.top_bar = rum.core.build_defc.call(null,(function (){
var current_user = cljs.core.get_in.call(null,rum.core.react.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"current-user","current-user",-868792091)], null));
return React.createElement("div",({"id": "topbar"}),React.createElement("ol",({"className": "topbar"}),React.createElement("li",null,React.createElement("div",({"onClick": ((function (current_user){
return (function (_){
accountant.core.navigate_BANG_.call(null,"/");

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-current","tv-current",-1070700452)], null),"");

return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-curr-id","tv-curr-id",-111236576)], null),"");
});})(current_user))
, "onMouseOver": ((function (current_user){
return (function (e){
return document.body.style.cursor = "pointer";
});})(current_user))
, "onMouseOut": ((function (current_user){
return (function (e){
return document.body.style.cursor = "auto";
});})(current_user))
, "className": "sidebarbutton"}),"n\u229Cnforum")),React.createElement("li",null,React.createElement("span",({"onClick": ((function (current_user){
return (function (_){
accountant.core.navigate_BANG_.call(null,"/");

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-current","tv-current",-1070700452)], null),"");

return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-curr-id","tv-curr-id",-111236576)], null),"");
});})(current_user))
, "onMouseOver": ((function (current_user){
return (function (e){
return document.body.style.cursor = "pointer";
});})(current_user))
, "onMouseOut": ((function (current_user){
return (function (e){
return document.body.style.cursor = "auto";
});})(current_user))
, "className": "sidebarbutton"}),"\u2301 top")),React.createElement("li",null,React.createElement("span",({"onClick": ((function (current_user){
return (function (e){
e.stopPropagation();

return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"show-sidebar","show-sidebar",591507660)], null),cljs.core.not);
});})(current_user))
, "onMouseOver": ((function (current_user){
return (function (e){
return document.body.style.cursor = "pointer";
});})(current_user))
, "onMouseOut": ((function (current_user){
return (function (e){
return document.body.style.cursor = "auto";
});})(current_user))
, "className": "sidebarbutton"})," \u2234 preferences")),React.createElement("li",null,React.createElement("span",({"onClick": ((function (current_user){
return (function (_){
accountant.core.navigate_BANG_.call(null,"/submit");

return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"current-view","current-view",-1037279042)], null),"/submit");
});})(current_user))
, "onMouseOver": ((function (current_user){
return (function (e){
return document.body.style.cursor = "pointer";
});})(current_user))
, "onMouseOut": ((function (current_user){
return (function (e){
return document.body.style.cursor = "auto";
});})(current_user))
, "className": "sidebarbutton"}),"\u2301 submit")),React.createElement("li",null,React.createElement("span",({"onClick": ((function (current_user){
return (function (_){
accountant.core.navigate_BANG_.call(null,"/about");

return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"current-view","current-view",-1037279042)], null),"/about");
});})(current_user))
, "onMouseOver": ((function (current_user){
return (function (e){
return document.body.style.cursor = "pointer";
});})(current_user))
, "onMouseOut": ((function (current_user){
return (function (e){
return document.body.style.cursor = "auto";
});})(current_user))
, "className": "sidebarbutton"}),"\u2301 about")),React.createElement("li",null,React.createElement("span",({"onClick": ((function (current_user){
return (function (_){
return accountant.core.navigate_BANG_.call(null,"/profile");
});})(current_user))
, "onMouseOver": ((function (current_user){
return (function (e){
return document.body.style.cursor = "crosshair";
});})(current_user))
, "onMouseOut": ((function (current_user){
return (function (e){
return document.body.style.cursor = "auto";
});})(current_user))
, "className": "sidebarbutton"}),sablono.interpreter.interpret.call(null,[cljs.core.str(" \u232C "),cljs.core.str(((cljs.core.empty_QMARK_.call(null,current_user))?". . .":current_user))].join('')))),React.createElement("li",null,React.createElement("span",({"onClick": ((function (current_user){
return (function (e){
e.stopPropagation();

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"logged-in","logged-in",627058423)], null),false);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"current-user","current-user",-868792091)], null),"");

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"auth-token","auth-token",30990976)], null),"");

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"login-time","login-time",138500005)], null),"");

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-current","tv-current",-1070700452)], null),"");

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-curr-id","tv-curr-id",-111236576)], null),"");

accountant.core.navigate_BANG_.call(null,"/");

nesferado.client.remove_item_BANG_.call(null,new cljs.core.Keyword(null,"login-time","login-time",138500005));

nesferado.client.remove_item_BANG_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400));

nesferado.client.remove_item_BANG_.call(null,new cljs.core.Keyword(null,"auth-key","auth-key",1408789427));

return nesferado.client.__GT_output_BANG_.call(null,[cljs.core.str("Logout Successful")].join(''));
});})(current_user))
, "onMouseOver": ((function (current_user){
return (function (e){
return document.body.style.cursor = "pointer";
});})(current_user))
, "onMouseOut": ((function (current_user){
return (function (e){
return document.body.style.cursor = "auto";
});})(current_user))
, "className": "sidebarbutton logout"})," \u21CF"))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"top-bar");
nesferado.client.side_bar = rum.core.build_defc.call(null,(function (){
return React.createElement("div",({"id": "sidebar"}),React.createElement("ol",({"className": "sidebar"}),React.createElement("li",null,React.createElement("div",({"onClick": (function (_){
accountant.core.navigate_BANG_.call(null,"/profile");

return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"show-sidebar","show-sidebar",591507660)], null),cljs.core.not);
}), "onMouseOver": (function (e){
return document.body.style.cursor = "pointer";
}), "onMouseOut": (function (e){
return document.body.style.cursor = "auto";
}), "className": "sidebarbutton bb"}),"\u1403 edit profile")),React.createElement("li",null,React.createElement("div",({"onClick": (function (_){
accountant.core.navigate_BANG_.call(null,"/email-public");

return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"show-sidebar","show-sidebar",591507660)], null),cljs.core.not);
}), "onMouseOver": (function (e){
return document.body.style.cursor = "pointer";
}), "onMouseOut": (function (e){
return document.body.style.cursor = "auto";
}), "className": "sidebarbutton bb"}),"\u0ED1 set public email")),React.createElement("li",null,React.createElement("div",({"onClick": (function (_){
accountant.core.navigate_BANG_.call(null,"/email-recovery");

return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"show-sidebar","show-sidebar",591507660)], null),cljs.core.not);
}), "onMouseOver": (function (e){
return document.body.style.cursor = "pointer";
}), "onMouseOut": (function (e){
return document.body.style.cursor = "auto";
}), "className": "sidebarbutton bb"}),"\u0F00 set recovery e-mail")),React.createElement("li",null,React.createElement("div",({"onClick": (function (_){
accountant.core.navigate_BANG_.call(null,"/password-update");

return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"show-sidebar","show-sidebar",591507660)], null),cljs.core.not);
}), "onMouseOver": (function (e){
return document.body.style.cursor = "pointer";
}), "onMouseOut": (function (e){
return document.body.style.cursor = "auto";
}), "className": "sidebarbutton bb"}),"\u0F13 set password")),React.createElement("li",null,React.createElement("div",({"onClick": (function (_){
accountant.core.navigate_BANG_.call(null,"/invite");

return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"show-sidebar","show-sidebar",591507660)], null),cljs.core.not);
}), "onMouseOver": (function (e){
return document.body.style.cursor = "pointer";
}), "onMouseOut": (function (e){
return document.body.style.cursor = "auto";
}), "className": "sidebarbutton bb"}),"\u1040 invite friends")),React.createElement("li",null,React.createElement("div",({"onClick": (function (_){
accountant.core.navigate_BANG_.call(null,"/feedback");

return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"show-sidebar","show-sidebar",591507660)], null),cljs.core.not);
}), "onMouseOver": (function (e){
return document.body.style.cursor = "pointer";
}), "onMouseOut": (function (e){
return document.body.style.cursor = "auto";
}), "className": "sidebarbutton bb"}),"\u0AEA give feedback")),React.createElement("li",null,React.createElement("div",({"onClick": (function (_){
accountant.core.navigate_BANG_.call(null,"/donate");

return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"show-sidebar","show-sidebar",591507660)], null),cljs.core.not);
}), "onMouseOver": (function (e){
return document.body.style.cursor = "pointer";
}), "onMouseOut": (function (e){
return document.body.style.cursor = "auto";
}), "className": "sidebarbutton bb bd"}),"\u17F7\u17F8\u17F8 support fusion research")),React.createElement("li",null,React.createElement("div",({"onClick": (function (_){
return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"show-sidebar","show-sidebar",591507660)], null),cljs.core.not);
}), "onMouseOver": (function (e){
return document.body.style.cursor = "pointer";
}), "onMouseOut": (function (e){
return document.body.style.cursor = "auto";
}), "className": "sidebarbutton bb hideprefs"}),"\u1409 hide preferences"))));
}),null,"side-bar");
nesferado.client.login_bar = rum.core.build_defc.call(null,(function (){
return React.createElement("div",({"id": "loginbar"}),React.createElement("ol",({"className": "loginbar"}),React.createElement("li",({"className": "nfnf"}),"Nonforum Login:",sablono.interpreter.interpret.call(null,nesferado.client.nf_login_input.call(null))),React.createElement("li",({"className": "nfca"}),"Create a Nonforum account:",sablono.interpreter.interpret.call(null,nesferado.client.create_account_input.call(null))),React.createElement("li",({"className": "terms"}),"terms: "),React.createElement("li",({"className": "terms"}),"   "),React.createElement("li",({"className": "terms"}),"   "),React.createElement("li",({"className": "terms"}),"   "),React.createElement("li",({"className": "terms"}),"   "),React.createElement("li",({"className": "terms"}),"by participating here at nonforum you agree to: "),React.createElement("li",({"className": "terms"}),"abide kindly and virtuously,"),React.createElement("li",({"className": "terms"}),"express yourself in ways that further the discussion and enhance morale,"),React.createElement("li",({"className": "terms"}),"and, in short, participate in ways to help elevate humanity."),React.createElement("li",({"className": "terms"}),"There is currently no surcharge to create an account, you may have one.")));
}),null,"login-bar");
nesferado.client.check_if_showing = (function nesferado$client$check_if_showing(id){
var showsters = cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"showing","showing",798009604)], null));
if(cljs.core.contains_QMARK_.call(null,showsters,id)){
return "showing";
} else {
return "notshowing";
}
});
nesferado.client.tv_cell = rum.core.build_defc.call(null,(function (td){
if(!(cljs.core.empty_QMARK_.call(null,td))){
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(td);
var subtitle = new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363).cljs$core$IFn$_invoke$arity$1(td);
var comments = new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(td);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(td);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(td);
var posted_by = new cljs.core.Keyword(null,"posted-by","posted-by",-66955024).cljs$core$IFn$_invoke$arity$1(td);
var timestamp = new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(td);
var n_ratings = new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128).cljs$core$IFn$_invoke$arity$1(td);
var ratings_t = new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318).cljs$core$IFn$_invoke$arity$1(td);
var link = new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(td);
var long_description = new cljs.core.Keyword(null,"contents","contents",-1567174023).cljs$core$IFn$_invoke$arity$1(td);
var cids = nesferado.client.return_comment_ids_of_tv.call(null,id);
var tv_current = cljs.core.get_in.call(null,rum.core.react.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-current","tv-current",-1070700452)], null));
return React.createElement("li",null,React.createElement("div",({"onClick": ((function (title,subtitle,comments,priority,id,posted_by,timestamp,n_ratings,ratings_t,link,long_description,cids,tv_current){
return (function (e){
console.log("link to post",id," + comments disp, ",td);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-title","tv-title",1038509594)], null),title);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-contents","tv-contents",1386118275)], null),nesferado.client.contents);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-posted-by","tv-posted-by",-35895188)], null),posted_by);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-timestamp","tv-timestamp",447467647)], null),timestamp);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-comments","tv-comments",209439077)], null),comments);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"selected-parent","selected-parent",1600183774)], null),id);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"selected-child","selected-child",-1028326940)], null),cids);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-current","tv-current",-1070700452)], null),td);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-curr-id","tv-curr-id",-111236576)], null),id);

window.scrollTo((0),(0));

return accountant.core.navigate_BANG_.call(null,[cljs.core.str("?nfid="),cljs.core.str(id)].join(''));
});})(title,subtitle,comments,priority,id,posted_by,timestamp,n_ratings,ratings_t,link,long_description,cids,tv_current))
, "id": [cljs.core.str("tile"),cljs.core.str(id)].join(''), "className": "tile"}),(function (){var attrs34348 = title;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34348))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["heading"], null)], null),attrs34348)):({"className": "heading"})),((cljs.core.map_QMARK_.call(null,attrs34348))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34348)], null)));
})(),(function (){var attrs34349 = subtitle;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34349))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["contents"], null)], null),attrs34349)):({"className": "contents"})),((cljs.core.map_QMARK_.call(null,attrs34349))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34349)], null)));
})(),React.createElement("div",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tilelink",((cljs.core.empty_QMARK_.call(null,tv_current))?"hideme":null)], null))}),React.createElement("a",({"href": link}),sablono.interpreter.interpret.call(null,link))),React.createElement("div",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["longdescription",((cljs.core.empty_QMARK_.call(null,tv_current))?"hideme":null)], null))}),sablono.interpreter.interpret.call(null,long_description)),React.createElement("div",({"className": "tile-rate"}),React.createElement("div",({"onClick": ((function (title,subtitle,comments,priority,id,posted_by,timestamp,n_ratings,ratings_t,link,long_description,cids,tv_current){
return (function (e){
e.stopPropagation();

return nesferado.client.rate.call(null,new cljs.core.Keyword(null,"double-plus","double-plus",759077853),id);
});})(title,subtitle,comments,priority,id,posted_by,timestamp,n_ratings,ratings_t,link,long_description,cids,tv_current))
, "className": "tile-rate-doubleplus"}),""),React.createElement("div",({"onClick": ((function (title,subtitle,comments,priority,id,posted_by,timestamp,n_ratings,ratings_t,link,long_description,cids,tv_current){
return (function (e){
e.stopPropagation();

return nesferado.client.rate.call(null,new cljs.core.Keyword(null,"plus","plus",211540661),id);
});})(title,subtitle,comments,priority,id,posted_by,timestamp,n_ratings,ratings_t,link,long_description,cids,tv_current))
, "className": "tile-rate-plus"}),""),React.createElement("div",({"onClick": ((function (title,subtitle,comments,priority,id,posted_by,timestamp,n_ratings,ratings_t,link,long_description,cids,tv_current){
return (function (e){
e.stopPropagation();

return nesferado.client.rate.call(null,new cljs.core.Keyword(null,"minus","minus",-1683561492),id);
});})(title,subtitle,comments,priority,id,posted_by,timestamp,n_ratings,ratings_t,link,long_description,cids,tv_current))
, "className": "tile-rate-minus"}),""),React.createElement("div",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tile-rating",(((n_ratings < (6)))?"rollthedice":"numerals")], null))}),sablono.interpreter.interpret.call(null,nesferado.client.get_rating.call(null,ratings_t,n_ratings)))),(function (){var attrs34350 = id;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34350))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tileid"], null)], null),attrs34350)):({"className": "tileid"})),((cljs.core.map_QMARK_.call(null,attrs34350))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34350)], null)));
})()));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),(function (td){
return [cljs.core.str(cljs.core.uuid.call(null,[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(td))].join('')))].join('');
})], null)], null),"tv-cell");
nesferado.client.television = rum.core.build_defcs.call(null,(function (state){
return React.createElement("div",({"id": "tv"}),(function (){var attrs34351 = cljs.core.map.call(null,nesferado.client.tv_cell,rum.core.react.call(null,nesferado.client.tv_state));
return cljs.core.apply.call(null,React.createElement,"ol",((cljs.core.map_QMARK_.call(null,attrs34351))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tv"], null)], null),attrs34351)):({"className": "tv"})),((cljs.core.map_QMARK_.call(null,attrs34351))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34351)], null)));
})());
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,nesferado.client.show_fresh], null),"television");
nesferado.client.post_input = rum.core.build_defcs.call(null,(function (state){
return React.createElement("form",({"id": "postinput"}),"Create new post",sablono.interpreter.create_element.call(null,"input",({"placeholder": "title", "value": cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"title","title",636505583)], null)), "onChange": (function (e){
cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"title","title",636505583)], null),e.target.value);

return console.log(cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"title","title",636505583)], null)));
}), "className": "reim kash"})),sablono.interpreter.create_element.call(null,"input",({"placeholder": "link", "value": cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"link","link",-1769163468)], null)), "onChange": (function (e){
cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"link","link",-1769163468)], null),e.target.value);

return console.log(cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"link","link",-1769163468)], null)));
}), "className": "reim kash"})),sablono.interpreter.create_element.call(null,"input",({"placeholder": "contents", "value": cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"contents","contents",-1567174023)], null)), "onChange": (function (e){
cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"contents","contents",-1567174023)], null),e.target.value);

return console.log(cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"contents","contents",-1567174023)], null)));
}), "className": "reim kash"})),React.createElement("button",({"type": "button", "onClick": (function (e){
console.log("sending..");

console.log(document.getElementById("aft"));

var potential_link = cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"link","link",-1769163468)], null));
var new_post_map = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"title","title",636505583)], null)),new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"title","title",636505583)], null)),new cljs.core.Keyword(null,"contents","contents",-1567174023),cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"contents","contents",-1567174023)], null)),new cljs.core.Keyword(null,"link","link",-1769163468),(((clojure.string.starts_with_QMARK_.call(null,potential_link,"http")) || (clojure.string.starts_with_QMARK_.call(null,potential_link,"https")))?potential_link:[cljs.core.str("http://"),cljs.core.str(potential_link)].join('')),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(80008)], null);
nesferado.client.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("clientsent","new-post","clientsent/new-post",1443193366),new_post_map], null));

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"title","title",636505583)], null),"");

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363)], null),"");

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"contents","contents",-1567174023)], null),"");

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"link","link",-1769163468)], null),"");

return accountant.core.navigate_BANG_.call(null,"/");
}), "className": "reim kash"}),"post new"));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,nesferado.client.show_fresh], null),"post-input");
nesferado.client.edit_profile = rum.core.build_defcs.call(null,(function (state){
return React.createElement("form",({"id": "profileinput", "className": "profileinput"}),"Edit Profile",sablono.interpreter.create_element.call(null,"textarea",({"placeholder": "bio", "onChange": (function (e){
cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"bio","bio",-331851886)], null),e.target.value);

return console.log(cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"bio","bio",-331851886)], null)));
}), "className": "profileinput"})),sablono.interpreter.create_element.call(null,"input",({"placeholder": "public e-mail", "onChange": (function (e){
cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"link","link",-1769163468)], null),e.target.value);

return console.log(cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"link","link",-1769163468)], null)));
}), "className": "profileinput"})),React.createElement("button",({"type": "button", "onClick": (function (e){
console.log("updating bio");

var new_bio_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bio","bio",-331851886),cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"bio","bio",-331851886)], null)),new cljs.core.Keyword(null,"public-email","public-email",-1512328112),cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"public-email","public-email",-1512328112)], null))], null);
return null;
}), "className": "profileinput"}),"update bio"));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,nesferado.client.show_fresh], null),"edit-profile");
nesferado.client.set_recovery_email = rum.core.build_defcs.call(null,(function (state){
return React.createElement("form",({"id": "profileinput"}),"Set Recovery Email",sablono.interpreter.create_element.call(null,"input",({"placeholder": "recovery e-mail", "onChange": (function (e){
cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"bio","bio",-331851886)], null),e.target.value);

return console.log(cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"bio","bio",-331851886)], null)));
}), "className": "reim"})),React.createElement("div",({"className": "labez"}),"current nonforum password:",sablono.interpreter.create_element.call(null,"input",({"placeholder": "", "type": "password", "autoComplete": "Current Nonforum password", "onChange": (function (e){
cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"password","password",417022471)], null),e.target.value);

return console.log(cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"link","link",-1769163468)], null)));
}), "className": "reim"}))),React.createElement("button",({"type": "button", "onClick": (function (e){
return console.log("set recovery e-mail");
}), "className": "reim"}),"set recovery e-mail"));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,nesferado.client.show_fresh], null),"set-recovery-email");
nesferado.client.set_password = rum.core.build_defcs.call(null,(function (state){
return React.createElement("form",({"id": "setpasswordinput", "className": "si"}),React.createElement("div",({"className": "rezz"}),"old password",sablono.interpreter.create_element.call(null,"input",({"placeholder": "", "autoComplete": "old-password", "onChange": (function (e){
cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"change-pass-old-pw","change-pass-old-pw",1553381089)], null),e.target.value);

return console.log(cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"change-pass-old-pw","change-pass-old-pw",1553381089)], null)));
}), "className": "reim"})),React.createElement("div",({"className": "rezz"}),"new password:",sablono.interpreter.create_element.call(null,"input",({"placeholder": "", "type": "password", "autoComplete": "new password", "onChange": (function (e){
cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"change-pass-new-pw","change-pass-new-pw",1793094004)], null),e.target.value);

return console.log(cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"change-pass-new-pw","change-pass-new-pw",1793094004)], null)));
}), "className": "reim"}))),React.createElement("div",({"className": "rezz"}),"new password confirm:",sablono.interpreter.create_element.call(null,"input",({"placeholder": "", "type": "password", "autoComplete": "new password confirm", "onChange": (function (e){
cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"change-pass-new-pw2","change-pass-new-pw2",1424562292)], null),e.target.value);

return console.log(cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"change-pass-new-pw2","change-pass-new-pw2",1424562292)], null)));
}), "className": "reim"}))),React.createElement("button",({"type": "button", "onClick": (function (e){
return console.log("set recovery e-mail");
}), "className": "reim"}),"set password")));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,nesferado.client.show_fresh], null),"set-password");
nesferado.client.support_nf = rum.core.build_defcs.call(null,(function (state){
return React.createElement("div",null,React.createElement("div",({"id": "supportnf"}),"Thank you for participating in and contributing to Nonforum."),React.createElement("div",({"id": "mission0"}),"Part of our mission at Nonforum is to further Humanity in significant ways."),React.createElement("div",({"id": "mission1"}),"We are partnered with Horne Technologies to help them achieve parity-efficiency (100:100) with their new 5 Tesla reactor"),React.createElement("div",({"id": "mission2"}),"In order to continue fusion research in 2019 we need to raise approximately $150,000."),React.createElement("div",({"id": "mission3"}),"In order to create a power-generating reactor once we know how many Teslas of magnetic field we need and how to orient the field-generation devices, will require approximately $15 Million"),React.createElement("div",({"id": "mission4"}),"Fusion will enable Humanity to harness the power of the stars."),React.createElement("div",({"id": "mission5"}),"A fusion future would leave cities free of smog and free of adverse pollution in the air, water and earth."),React.createElement("div",({"id": "mission6"}),"Our priority is funding fusion so that Humanity will become 100% green and sustainable as soon as possible."),React.createElement("div",({"id": "mission7"}),"Please contribute whatever you can.  The suggested donation is $15.00"));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,nesferado.client.show_fresh], null),"support-nf");
nesferado.client.scan_idx = (function nesferado$client$scan_idx(k,v,coll){
return cljs.core.reduce_kv.call(null,(function (_,idx,m){
if(cljs.core._EQ_.call(null,v,k.call(null,m))){
return cljs.core.reduced.call(null,idx);
} else {
return null;
}
}),null,coll);
});
nesferado.client.post_comment_input = rum.core.build_defc.call(null,(function (){
return React.createElement("form",({"id": "postcommentinput"}),sablono.interpreter.create_element.call(null,"textarea",({"value": rum.core.react.call(null,nesferado.client.nf_comment), "placeholder": "let us be kind", "onChange": (function (e){
return cljs.core.reset_BANG_.call(null,nesferado.client.nf_comment,e.target.value);
}), "className": "fullwidth"})),React.createElement("button",({"type": "button", "onClick": (function (e){
var parent_id = cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"selected-parent","selected-parent",1600183774)], null));
var username = cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"current-user","current-user",-868792091)], null));
var curr_tv = cljs.core.get_in.call(null,cljs.core.deref.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-curr-id","tv-curr-id",-111236576)], null));
var new_comment_map = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.swap_BANG_.call(null,nesferado.client.y,cljs.core.inc),new cljs.core.Keyword(null,"contents","contents",-1567174023),cljs.core.deref.call(null,nesferado.client.nf_comment),new cljs.core.Keyword(null,"author","author",2111686192),username,new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318),(0),new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128),(0)], null);
var submit_comment_map = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"contents","contents",-1567174023),cljs.core.deref.call(null,nesferado.client.nf_comment),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),parent_id,new cljs.core.Keyword(null,"curr-tv","curr-tv",-434005167),curr_tv,new cljs.core.Keyword(null,"author","author",2111686192),username], null);
if(!(cljs.core._EQ_.call(null,"",cljs.core.deref.call(null,nesferado.client.nf_comment)))){
nesferado.client.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("clientsent","new-comment","clientsent/new-comment",-1645792346),submit_comment_map], null));
} else {
}

return cljs.core.reset_BANG_.call(null,nesferado.client.nf_comment,"");
}), "className": "fullwidth replySelected"}),"Comment in reply to selected."));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"post-comment-input");
nesferado.client.footer = rum.core.build_defc.call(null,(function (){
return React.createElement("div",({"id": "footer"}),"Welcome to nonforum.  Here you will find real-time threads and discussion boards.",React.createElement("div",({"id": "foot1"}),"Nonforum is a place to start discussion threads based on questions or simply on a topic."),React.createElement("div",({"id": "foot2"}),"Nonforum is also a place where you can share links and discuss them, voting contributions up or down."),React.createElement("div",({"id": "foot3"}),"When you are logged in you can vote on entries with votes signifying double-plus (++), plus (+), and minus (-)"),React.createElement("div",({"id": "foot4"}),"The more you participate, the greater your community trust rating."),React.createElement("div",({"id": "foot5"}),"By providing insightful comments and furthering discussions, your community rating will increase."),React.createElement("div",({"id": "foot7"}),"For complete information on how to use nonforum most effectively, please check out the ",React.createElement("a",({"href": "/about"}),"About Page")));
}),null,"footer");
nesferado.client.about_fields = rum.core.build_defcs.call(null,(function (state){
return React.createElement("div",({"id": "aboutnf"}),React.createElement("div",({"id": "about1", "className": "about"}),"Nonforum is a realtime forum."),React.createElement("div",({"id": "about2", "className": "about"}),"Click on a news tile to see its details."),React.createElement("div",({"id": "about3", "className": "about"}),"To comment, click on the element you wish to comment on.  This can be another comment or the original news piece."),React.createElement("div",({"id": "about4", "className": "about"}),"A selected comment will be fig colored when selected."),React.createElement("div",({"id": "about5", "className": "about"}),"Voting is a natural right and you can vote on any submission or comment via trivote. There are three levels to the tri-vote, double-plus, plus, and minus.  These correlate roughly to the spectrum of 0-99 and eventually, after a threshold number of votes has been met, the dice will transform to a number likely landing between 30 and 99."),React.createElement("div",({"id": "about6", "className": "about"}),"We are helping to raise money for Fusion Research with Horne Technologies.  Fusion will bring us the pollution-free future rapidly into our presence.  Help humanity harness the power of the stars!  Donate today at ",React.createElement("a",({"href": "/donate"}),"nonforum.com/donate")));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,nesferado.client.show_fresh], null),"about-fields");
nesferado.client.non_buzz_placeholder = rum.core.build_defc.call(null,(function (){
return React.createElement("div",({"className": "nonbuzz"}),"nonforum");
}),null,"non-buzz-placeholder");
nesferado.client.sponsored_message = rum.core.build_defcs.call(null,(function (state){
return React.createElement("div",({"id": "spmsg"}),"Help fund Horne Technologies in their next round of Fusion Research, a 5Tesla reactor ",React.createElement("a",({"href": "donate"}),"donate"));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,nesferado.client.show_fresh], null),"sponsored-message");
nesferado.client.go_back_button = rum.core.build_defc.call(null,(function (){
var active_state = "all";
return React.createElement("div",({"onClick": ((function (active_state){
return (function (e){
e.stopPropagation();

accountant.core.navigate_BANG_.call(null,"/");

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-current","tv-current",-1070700452)], null),"");

return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-curr-id","tv-curr-id",-111236576)], null),"");
});})(active_state))
, "className": "goback"}),"< Back to ",sablono.interpreter.interpret.call(null,active_state));
}),null,"go-back-button");
nesferado.client.input_fields = rum.core.build_defc.call(null,(function (){
var attrs34362 = nesferado.client.post_comment_input.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34362))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"inputs-contain"], null),attrs34362)):({"id": "inputs-contain"})),((cljs.core.map_QMARK_.call(null,attrs34362))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34362)], null)));
}),null,"input-fields");
nesferado.client.start = rum.core.build_defc.call(null,(function (){
var logged_in = cljs.core.get_in.call(null,rum.core.react.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"logged-in","logged-in",627058423)], null));
var tv_current = cljs.core.get_in.call(null,rum.core.react.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-current","tv-current",-1070700452)], null));
var curr_comments = cljs.core.get_in.call(null,rum.core.react.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-comments","tv-comments",209439077)], null));
var show_sidebar = cljs.core.get_in.call(null,rum.core.react.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"show-sidebar","show-sidebar",591507660)], null));
var curr_view = cljs.core.get_in.call(null,rum.core.react.call(null,nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"current-view","current-view",-1037279042)], null));
var temp__4655__auto___34364 = document.getElementById("output");
if(cljs.core.truth_(temp__4655__auto___34364)){
var target_el_34365 = temp__4655__auto___34364;
if(cljs.core._EQ_.call(null,true,logged_in)){
target_el_34365.classList = "hideMe";
} else {
target_el_34365.classList = "justMounted";
}
} else {
}

var attrs34363 = ((cljs.core._EQ_.call(null,false,logged_in))?nesferado.client.non_buzz_placeholder.call(null):null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34363))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"maincontain"], null),attrs34363)):({"id": "maincontain"})),((cljs.core.map_QMARK_.call(null,attrs34363))?new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,false,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.login_bar.call(null)):null),((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.top_bar.call(null)):null),((cljs.core._EQ_.call(null,true,show_sidebar))?((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.side_bar.call(null)):null):null),(cljs.core.truth_((function (){var and__6371__auto__ = logged_in;
if(cljs.core.truth_(and__6371__auto__)){
return cljs.core._EQ_.call(null,"/feedback",curr_view);
} else {
return and__6371__auto__;
}
})())?sablono.interpreter.interpret.call(null,nesferado.client.send_feedback_fields.call(null)):null),(cljs.core.truth_((function (){var and__6371__auto__ = logged_in;
if(cljs.core.truth_(and__6371__auto__)){
return cljs.core._EQ_.call(null,"/about",curr_view);
} else {
return and__6371__auto__;
}
})())?sablono.interpreter.interpret.call(null,nesferado.client.about_fields.call(null)):null),(cljs.core.truth_((function (){var and__6371__auto__ = logged_in;
if(cljs.core.truth_(and__6371__auto__)){
return cljs.core._EQ_.call(null,"/email-public",curr_view);
} else {
return and__6371__auto__;
}
})())?sablono.interpreter.interpret.call(null,nesferado.client.edit_profile.call(null)):null),(cljs.core.truth_((function (){var and__6371__auto__ = logged_in;
if(cljs.core.truth_(and__6371__auto__)){
return cljs.core._EQ_.call(null,"/profile",curr_view);
} else {
return and__6371__auto__;
}
})())?sablono.interpreter.interpret.call(null,nesferado.client.edit_profile.call(null)):null),(cljs.core.truth_((function (){var and__6371__auto__ = logged_in;
if(cljs.core.truth_(and__6371__auto__)){
return cljs.core._EQ_.call(null,"/email-recovery",curr_view);
} else {
return and__6371__auto__;
}
})())?sablono.interpreter.interpret.call(null,nesferado.client.set_recovery_email.call(null)):null),(cljs.core.truth_((function (){var and__6371__auto__ = logged_in;
if(cljs.core.truth_(and__6371__auto__)){
return cljs.core._EQ_.call(null,"/password-update",curr_view);
} else {
return and__6371__auto__;
}
})())?sablono.interpreter.interpret.call(null,nesferado.client.set_password.call(null)):null),(cljs.core.truth_((function (){var and__6371__auto__ = logged_in;
if(cljs.core.truth_(and__6371__auto__)){
return cljs.core._EQ_.call(null,"/invite",curr_view);
} else {
return and__6371__auto__;
}
})())?sablono.interpreter.interpret.call(null,nesferado.client.invite_fields.call(null)):null),(cljs.core.truth_((function (){var and__6371__auto__ = logged_in;
if(cljs.core.truth_(and__6371__auto__)){
return cljs.core._EQ_.call(null,"/submit",curr_view);
} else {
return and__6371__auto__;
}
})())?sablono.interpreter.interpret.call(null,nesferado.client.post_input.call(null)):null),(cljs.core.truth_((function (){var and__6371__auto__ = logged_in;
if(cljs.core.truth_(and__6371__auto__)){
return cljs.core._EQ_.call(null,"/donate",curr_view);
} else {
return and__6371__auto__;
}
})())?sablono.interpreter.interpret.call(null,nesferado.client.support_nf.call(null)):null),(cljs.core.truth_((function (){var and__6371__auto__ = logged_in;
if(cljs.core.truth_(and__6371__auto__)){
return cljs.core._EQ_.call(null,"/fusion",curr_view);
} else {
return and__6371__auto__;
}
})())?sablono.interpreter.interpret.call(null,nesferado.client.support_nf.call(null)):null),((cljs.core._EQ_.call(null,"/",curr_view))?((cljs.core._EQ_.call(null,true,logged_in))?((!(cljs.core.empty_QMARK_.call(null,tv_current)))?sablono.interpreter.interpret.call(null,nesferado.client.go_back_button.call(null)):null):null):null),((cljs.core._EQ_.call(null,"/",curr_view))?((cljs.core._EQ_.call(null,true,logged_in))?((!(cljs.core.empty_QMARK_.call(null,tv_current)))?sablono.interpreter.interpret.call(null,nesferado.client.sponsored_message.call(null)):null):null):null),((cljs.core._EQ_.call(null,"/",curr_view))?((cljs.core.empty_QMARK_.call(null,tv_current))?((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.television.call(null)):null):null):null),((cljs.core._EQ_.call(null,"/",curr_view))?((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.tv_cell.call(null,tv_current)):null):null),((cljs.core._EQ_.call(null,"/",curr_view))?((!(cljs.core.empty_QMARK_.call(null,tv_current)))?((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,cljs.core.map.call(null,nesferado.client.render_item,curr_comments)):null):null):null),((cljs.core._EQ_.call(null,"/",curr_view))?((!(cljs.core.empty_QMARK_.call(null,tv_current)))?((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.input_fields.call(null)):null):null):null)], null):new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34363),((cljs.core._EQ_.call(null,false,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.login_bar.call(null)):null),((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.top_bar.call(null)):null),((cljs.core._EQ_.call(null,true,show_sidebar))?((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.side_bar.call(null)):null):null),(cljs.core.truth_((function (){var and__6371__auto__ = logged_in;
if(cljs.core.truth_(and__6371__auto__)){
return cljs.core._EQ_.call(null,"/feedback",curr_view);
} else {
return and__6371__auto__;
}
})())?sablono.interpreter.interpret.call(null,nesferado.client.send_feedback_fields.call(null)):null),(cljs.core.truth_((function (){var and__6371__auto__ = logged_in;
if(cljs.core.truth_(and__6371__auto__)){
return cljs.core._EQ_.call(null,"/about",curr_view);
} else {
return and__6371__auto__;
}
})())?sablono.interpreter.interpret.call(null,nesferado.client.about_fields.call(null)):null),(cljs.core.truth_((function (){var and__6371__auto__ = logged_in;
if(cljs.core.truth_(and__6371__auto__)){
return cljs.core._EQ_.call(null,"/email-public",curr_view);
} else {
return and__6371__auto__;
}
})())?sablono.interpreter.interpret.call(null,nesferado.client.edit_profile.call(null)):null),(cljs.core.truth_((function (){var and__6371__auto__ = logged_in;
if(cljs.core.truth_(and__6371__auto__)){
return cljs.core._EQ_.call(null,"/profile",curr_view);
} else {
return and__6371__auto__;
}
})())?sablono.interpreter.interpret.call(null,nesferado.client.edit_profile.call(null)):null),(cljs.core.truth_((function (){var and__6371__auto__ = logged_in;
if(cljs.core.truth_(and__6371__auto__)){
return cljs.core._EQ_.call(null,"/email-recovery",curr_view);
} else {
return and__6371__auto__;
}
})())?sablono.interpreter.interpret.call(null,nesferado.client.set_recovery_email.call(null)):null),(cljs.core.truth_((function (){var and__6371__auto__ = logged_in;
if(cljs.core.truth_(and__6371__auto__)){
return cljs.core._EQ_.call(null,"/password-update",curr_view);
} else {
return and__6371__auto__;
}
})())?sablono.interpreter.interpret.call(null,nesferado.client.set_password.call(null)):null),(cljs.core.truth_((function (){var and__6371__auto__ = logged_in;
if(cljs.core.truth_(and__6371__auto__)){
return cljs.core._EQ_.call(null,"/invite",curr_view);
} else {
return and__6371__auto__;
}
})())?sablono.interpreter.interpret.call(null,nesferado.client.invite_fields.call(null)):null),(cljs.core.truth_((function (){var and__6371__auto__ = logged_in;
if(cljs.core.truth_(and__6371__auto__)){
return cljs.core._EQ_.call(null,"/submit",curr_view);
} else {
return and__6371__auto__;
}
})())?sablono.interpreter.interpret.call(null,nesferado.client.post_input.call(null)):null),(cljs.core.truth_((function (){var and__6371__auto__ = logged_in;
if(cljs.core.truth_(and__6371__auto__)){
return cljs.core._EQ_.call(null,"/donate",curr_view);
} else {
return and__6371__auto__;
}
})())?sablono.interpreter.interpret.call(null,nesferado.client.support_nf.call(null)):null),(cljs.core.truth_((function (){var and__6371__auto__ = logged_in;
if(cljs.core.truth_(and__6371__auto__)){
return cljs.core._EQ_.call(null,"/fusion",curr_view);
} else {
return and__6371__auto__;
}
})())?sablono.interpreter.interpret.call(null,nesferado.client.support_nf.call(null)):null),((cljs.core._EQ_.call(null,"/",curr_view))?((cljs.core._EQ_.call(null,true,logged_in))?((!(cljs.core.empty_QMARK_.call(null,tv_current)))?sablono.interpreter.interpret.call(null,nesferado.client.go_back_button.call(null)):null):null):null),((cljs.core._EQ_.call(null,"/",curr_view))?((cljs.core._EQ_.call(null,true,logged_in))?((!(cljs.core.empty_QMARK_.call(null,tv_current)))?sablono.interpreter.interpret.call(null,nesferado.client.sponsored_message.call(null)):null):null):null),((cljs.core._EQ_.call(null,"/",curr_view))?((cljs.core.empty_QMARK_.call(null,tv_current))?((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.television.call(null)):null):null):null),((cljs.core._EQ_.call(null,"/",curr_view))?((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.tv_cell.call(null,tv_current)):null):null),((cljs.core._EQ_.call(null,"/",curr_view))?((!(cljs.core.empty_QMARK_.call(null,tv_current)))?((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,cljs.core.map.call(null,nesferado.client.render_item,curr_comments)):null):null):null),((cljs.core._EQ_.call(null,"/",curr_view))?((!(cljs.core.empty_QMARK_.call(null,tv_current)))?((cljs.core._EQ_.call(null,true,logged_in))?sablono.interpreter.interpret.call(null,nesferado.client.input_fields.call(null)):null):null):null)], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"start");
rum.core.mount.call(null,nesferado.client.start.call(null),document.getElementById("start"));
rum.core.mount.call(null,nesferado.client.footer.call(null),document.getElementById("footing"));
nesferado.client.swap_rating_fn = (function nesferado$client$swap_rating_fn(p__34366,d){
var map__34373 = p__34366;
var map__34373__$1 = ((((!((map__34373 == null)))?((((map__34373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34373):map__34373);
var nf = map__34373__$1;
var v = cljs.core.get.call(null,map__34373__$1,new cljs.core.Keyword(null,"blurbs","blurbs",-918747977));
return cljs.core.assoc.call(null,nf,new cljs.core.Keyword(null,"blurbs","blurbs",-918747977),cljs.core.vec.call(null,(function (){var iter__7163__auto__ = ((function (map__34373,map__34373__$1,nf,v){
return (function nesferado$client$swap_rating_fn_$_iter__34375(s__34376){
return (new cljs.core.LazySeq(null,((function (map__34373,map__34373__$1,nf,v){
return (function (){
var s__34376__$1 = s__34376;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34376__$1);
if(temp__4657__auto__){
var s__34376__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34376__$2)){
var c__7161__auto__ = cljs.core.chunk_first.call(null,s__34376__$2);
var size__7162__auto__ = cljs.core.count.call(null,c__7161__auto__);
var b__34378 = cljs.core.chunk_buffer.call(null,size__7162__auto__);
if((function (){var i__34377 = (0);
while(true){
if((i__34377 < size__7162__auto__)){
var entry = cljs.core._nth.call(null,c__7161__auto__,i__34377);
cljs.core.chunk_append.call(null,b__34378,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"bid","bid",-1944960257).cljs$core$IFn$_invoke$arity$1(entry),new cljs.core.Keyword(null,"bid","bid",-1944960257).cljs$core$IFn$_invoke$arity$1(d)))?cljs.core.merge.call(null,entry,d):entry));

var G__34379 = (i__34377 + (1));
i__34377 = G__34379;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34378),nesferado$client$swap_rating_fn_$_iter__34375.call(null,cljs.core.chunk_rest.call(null,s__34376__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34378),null);
}
} else {
var entry = cljs.core.first.call(null,s__34376__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"bid","bid",-1944960257).cljs$core$IFn$_invoke$arity$1(entry),new cljs.core.Keyword(null,"bid","bid",-1944960257).cljs$core$IFn$_invoke$arity$1(d)))?cljs.core.merge.call(null,entry,d):entry),nesferado$client$swap_rating_fn_$_iter__34375.call(null,cljs.core.rest.call(null,s__34376__$2)));
}
} else {
return null;
}
break;
}
});})(map__34373,map__34373__$1,nf,v))
,null,null));
});})(map__34373,map__34373__$1,nf,v))
;
return iter__7163__auto__.call(null,v);
})()));
});
nesferado.client.swap_rating_active_blurb = (function nesferado$client$swap_rating_active_blurb(p__34380,d){
var map__34387 = p__34380;
var map__34387__$1 = ((((!((map__34387 == null)))?((((map__34387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34387):map__34387);
var nf = map__34387__$1;
var v = cljs.core.get.call(null,map__34387__$1,new cljs.core.Keyword(null,"nf","nf",76757951));
return cljs.core.assoc.call(null,nf,new cljs.core.Keyword(null,"nf","nf",76757951),cljs.core.vec.call(null,(function (){var iter__7163__auto__ = ((function (map__34387,map__34387__$1,nf,v){
return (function nesferado$client$swap_rating_active_blurb_$_iter__34389(s__34390){
return (new cljs.core.LazySeq(null,((function (map__34387,map__34387__$1,nf,v){
return (function (){
var s__34390__$1 = s__34390;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34390__$1);
if(temp__4657__auto__){
var s__34390__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34390__$2)){
var c__7161__auto__ = cljs.core.chunk_first.call(null,s__34390__$2);
var size__7162__auto__ = cljs.core.count.call(null,c__7161__auto__);
var b__34392 = cljs.core.chunk_buffer.call(null,size__7162__auto__);
if((function (){var i__34391 = (0);
while(true){
if((i__34391 < size__7162__auto__)){
var entry = cljs.core._nth.call(null,c__7161__auto__,i__34391);
cljs.core.chunk_append.call(null,b__34392,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active-blurb","active-blurb",900382765).cljs$core$IFn$_invoke$arity$1(entry),new cljs.core.Keyword(null,"bid","bid",-1944960257).cljs$core$IFn$_invoke$arity$1(d)))?cljs.core.merge.call(null,entry,d):entry));

var G__34393 = (i__34391 + (1));
i__34391 = G__34393;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34392),nesferado$client$swap_rating_active_blurb_$_iter__34389.call(null,cljs.core.chunk_rest.call(null,s__34390__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34392),null);
}
} else {
var entry = cljs.core.first.call(null,s__34390__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active-blurb","active-blurb",900382765).cljs$core$IFn$_invoke$arity$1(entry),new cljs.core.Keyword(null,"bid","bid",-1944960257).cljs$core$IFn$_invoke$arity$1(d)))?cljs.core.merge.call(null,entry,d):entry),nesferado$client$swap_rating_active_blurb_$_iter__34389.call(null,cljs.core.rest.call(null,s__34390__$2)));
}
} else {
return null;
}
break;
}
});})(map__34387,map__34387__$1,nf,v))
,null,null));
});})(map__34387,map__34387__$1,nf,v))
;
return iter__7163__auto__.call(null,v);
})()));
});
nesferado.client.ask_server_for_blurbs = (function nesferado$client$ask_server_for_blurbs(){
return nesferado.client.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("clientsent","req-all-blurbs","clientsent/req-all-blurbs",1023042050),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"can-i-please-has-the","can-i-please-has-the",-1759022707),"blurbs"], null)], null),(3000),(function (blurb_core){
if(cljs.core.truth_(taoensso.sente.cb_success_QMARK_.call(null,blurb_core))){
console.log("callback with blurbs rcevd");

console.log(":cs/rab ",blurb_core);

cljs.core.reset_BANG_.call(null,nesferado.client.tv_state,blurb_core);

cljs.core.swap_BANG_.call(null,nesferado.client.tv_state,cljs.core.vec);

accountant.core.dispatch_current_BANG_.call(null);

return cljs.core.swap_BANG_.call(null,nesferado.client.tv_state,(function (p1__34394_SHARP_){
return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318),p1__34394_SHARP_);
}));
} else {
return null;
}
}));
});
nesferado.client.ask_server_for_comments = (function nesferado$client$ask_server_for_comments(){
return nesferado.client.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("clientsent","req-all-comments","clientsent/req-all-comments",-1091062488),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"can-i-please-has-the","can-i-please-has-the",-1759022707),"comments"], null)], null),(3000),(function (comments_core){
if(cljs.core.truth_(taoensso.sente.cb_success_QMARK_.call(null,comments_core))){
console.log("callback with comments rcevd");

console.log(":cs/rac ",comments_core);

cljs.core.reset_BANG_.call(null,nesferado.client.posts,comments_core);

return cljs.core.swap_BANG_.call(null,nesferado.client.posts,cljs.core.vec);
} else {
return null;
}
}));
});
nesferado.client.find_tv_item = (function nesferado$client$find_tv_item(pid){
cljs.core.swap_BANG_.call(null,nesferado.client.tv_state,cljs.core.vec);

var first_hit = cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__34396_SHARP_,p2__34395_SHARP_){
if(cljs.core._EQ_.call(null,pid,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__34395_SHARP_))){
return p1__34396_SHARP_;
} else {
return null;
}
}),cljs.core.deref.call(null,nesferado.client.tv_state)));
cljs.core.prn.call(null,first_hit);

return first_hit;
});
nesferado.client.find_cm_item = (function nesferado$client$find_cm_item(pid){
cljs.core.swap_BANG_.call(null,nesferado.client.posts,cljs.core.vec);

var first_hit = cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__34398_SHARP_,p2__34397_SHARP_){
if(cljs.core._EQ_.call(null,pid,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__34397_SHARP_))){
return p1__34398_SHARP_;
} else {
return null;
}
}),cljs.core.deref.call(null,nesferado.client.posts)));
cljs.core.prn.call(null,first_hit);

return first_hit;
});
if(typeof nesferado.client._event_msg_handler !== 'undefined'){
} else {
/**
 * Multimethod to handle Sente `event-msg`s
 */
nesferado.client._event_msg_handler = (function (){var method_table__7308__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7309__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7310__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7311__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7312__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"nesferado.client","-event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7312__auto__,method_table__7308__auto__,prefer_table__7309__auto__,method_cache__7310__auto__,cached_hierarchy__7311__auto__));
})();
}
nesferado.client.event_msg_handler = (function nesferado$client$event_msg_handler(p__34399){
var map__34402 = p__34399;
var map__34402__$1 = ((((!((map__34402 == null)))?((((map__34402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34402):map__34402);
var _ = cljs.core.get.call(null,map__34402__$1,new cljs.core.Keyword(null,"_","_",1453416199));
var _QMARK_data = cljs.core.get.call(null,map__34402__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
console.log([cljs.core.str("&&"),cljs.core.str(_QMARK_data)].join(''));

console.log([cljs.core.str("&! "),cljs.core.str(cljs.core.first.call(null,_QMARK_data))].join(''));

var event_title = cljs.core.first.call(null,_QMARK_data);
var new_data = cljs.core.second.call(null,_QMARK_data);
if(cljs.core._EQ_.call(null,false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732).cljs$core$IFn$_invoke$arity$1(event_title))){
console.log("Hey I'm trying to get new data yo, since :ever-opened? is false");

nesferado.client.ask_server_for_blurbs.call(null);

return nesferado.client.ask_server_for_comments.call(null);
} else {
if(cljs.core._EQ_.call(null,event_title,new cljs.core.Keyword("hello","client","hello/client",-951541607))){
return console.log([cljs.core.str("&# "),cljs.core.str(new_data)].join(''));
} else {
if(cljs.core._EQ_.call(null,event_title,new cljs.core.Keyword("serversent","blurb","serversent/blurb",1030052733))){
console.log([cljs.core.str("&# "),cljs.core.str(new_data)].join(''));

console.log("adding new blurb to atom...");

cljs.core.swap_BANG_.call(null,nesferado.client.tv_state,cljs.core.conj,new_data);

return console.log("added new blurb to atom");
} else {
if(cljs.core._EQ_.call(null,event_title,new cljs.core.Keyword("serversent","comment","serversent/comment",-860750766))){
var new_comment_map = new_data;
console.log([cljs.core.str("&# "),cljs.core.str(new_comment_map)].join(''));

console.log(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(new_comment_map)," parent-id is.");

console.log([cljs.core.str("pp z "),cljs.core.str(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(new_comment_map))].join(''));

var pid = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_comment_map);
var parent_id = new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(new_comment_map);
var seek_tv_state = nesferado.client.find_tv_item.call(null,parent_id);
var seek_cm_state = nesferado.client.find_cm_item.call(null,parent_id);
console.log("adding new comment to atom...");

cljs.core.swap_BANG_.call(null,nesferado.client.posts,cljs.core.conj,cljs.core.assoc.call(null,new_comment_map,new cljs.core.Keyword(null,"ratings-total","ratings-total",1788444318),(0),new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128),(0),new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092),pid));

console.log("added new comment to atom");

console.log("seek-tv ",seek_tv_state);

console.log("seek-cm ",seek_cm_state);

if(cljs.core._EQ_.call(null,null,seek_tv_state)){
return cljs.core.swap_BANG_.call(null,nesferado.client.posts,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seek_cm_state,new cljs.core.Keyword(null,"comments","comments",-293346423)], null),cljs.core.conj,pid);
} else {
cljs.core.swap_BANG_.call(null,nesferado.client.tv_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seek_tv_state,new cljs.core.Keyword(null,"comments","comments",-293346423)], null),cljs.core.conj,pid);

return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"tv-comments","tv-comments",209439077)], null),cljs.core.conj,pid);
}
} else {
if(cljs.core._EQ_.call(null,event_title,new cljs.core.Keyword("serversent","rating-update","serversent/rating-update",149742579))){
var ru_bid = new cljs.core.Keyword(null,"bid","bid",-1944960257).cljs$core$IFn$_invoke$arity$1(new_data);
var ru_ts = new cljs.core.Keyword(null,"total-score","total-score",-59381847).cljs$core$IFn$_invoke$arity$1(new_data);
var ru_nor = new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128).cljs$core$IFn$_invoke$arity$1(new_data);
var ru_map = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bid","bid",-1944960257),ru_bid,new cljs.core.Keyword(null,"total-score","total-score",-59381847),ru_ts,new cljs.core.Keyword(null,"number-of-ratings","number-of-ratings",-130471128),ru_nor], null);
return ((function (ru_bid,ru_ts,ru_nor,ru_map,event_title,new_data,map__34402,map__34402__$1,_,_QMARK_data){
return (function (){
return null;
});
;})(ru_bid,ru_ts,ru_nor,ru_map,event_title,new_data,map__34402,map__34402__$1,_,_QMARK_data))
} else {
return null;
}
}
}
}
}
});
if(typeof nesferado.client.router_ !== 'undefined'){
} else {
nesferado.client.router_ = cljs.core.atom.call(null,null);
}
nesferado.client.stop_router_BANG_ = (function nesferado$client$stop_router_BANG_(){
var temp__4657__auto__ = cljs.core.deref.call(null,nesferado.client.router_);
if(cljs.core.truth_(temp__4657__auto__)){
var stop_f = temp__4657__auto__;
return stop_f.call(null);
} else {
return null;
}
});
nesferado.client.start_router_BANG_ = (function nesferado$client$start_router_BANG_(){
nesferado.client.stop_router_BANG_.call(null);

return cljs.core.reset_BANG_.call(null,nesferado.client.router_,taoensso.sente.start_client_chsk_router_BANG_.call(null,nesferado.client.ch_chsk,nesferado.client.event_msg_handler));
});
nesferado.client.validate_email = (function nesferado$client$validate_email(email){
var pattern = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
var and__6371__auto__ = typeof email === 'string';
if(and__6371__auto__){
return cljs.core.re_matches.call(null,pattern,email);
} else {
return and__6371__auto__;
}
});
nesferado.client.on_js_reload = (function nesferado$client$on_js_reload(){
return null;
});
nesferado.client.auto_login = (function nesferado$client$auto_login(){
nesferado.client.__GT_output_BANG_.call(null,"Attempting auto-login ...");

return taoensso.sente.ajax_lite.call(null,"/check-login",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,nesferado.client.chsk_state))], null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uid","uid",-1447769400),nesferado.client.get_item.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400)),new cljs.core.Keyword(null,"auth-token","auth-token",30990976),nesferado.client.get_item.call(null,new cljs.core.Keyword(null,"auth-key","auth-key",1408789427)),new cljs.core.Keyword(null,"login-time","login-time",138500005),nesferado.client.get_item.call(null,new cljs.core.Keyword(null,"login-time","login-time",138500005))], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)], null),(function (ajax_resp){
nesferado.client.__GT_output_BANG_.call(null,"Auto-login response: ",ajax_resp);

var map__34406 = ajax_resp;
var map__34406__$1 = ((((!((map__34406 == null)))?((((map__34406.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34406.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34406):map__34406);
var success_QMARK_ = cljs.core.get.call(null,map__34406__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var _QMARK_status = cljs.core.get.call(null,map__34406__$1,new cljs.core.Keyword(null,"?status","?status",938730360));
var _QMARK_error = cljs.core.get.call(null,map__34406__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__34406__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
var _QMARK_content_type = cljs.core.get.call(null,map__34406__$1,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049));
var http_status = new cljs.core.Keyword(null,"?status","?status",938730360).cljs$core$IFn$_invoke$arity$1(ajax_resp);
var auto_login_successful_QMARK_ = cljs.core._EQ_.call(null,(200),http_status);
var stuff = cljs.reader.read_string.call(null,_QMARK_content);
if(!(auto_login_successful_QMARK_)){
nesferado.client.__GT_output_BANG_.call(null,"Auto-login failed");

return cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"logged-in","logged-in",627058423)], null),false);
} else {
nesferado.client.__GT_output_BANG_.call(null,"Auto-login success!");

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"token","token",-1211463215)], null),nesferado.client.get_item.call(null,new cljs.core.Keyword(null,"auth-key","auth-key",1408789427)));

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"login-time","login-time",138500005)], null),nesferado.client.get_item.call(null,new cljs.core.Keyword(null,"login-time","login-time",138500005)));

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"logged-in","logged-in",627058423)], null),true);

cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"current-user","current-user",-868792091)], null),nesferado.client.get_item.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400)));

return taoensso.sente.chsk_reconnect_BANG_.call(null,nesferado.client.chsk);
}
}));
});
if(!(cljs.core.empty_QMARK_.call(null,nesferado.client.get_item.call(null,new cljs.core.Keyword(null,"auth-key","auth-key",1408789427))))){
cljs.core.swap_BANG_.call(null,nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),(0),new cljs.core.Keyword(null,"logged-in","logged-in",627058423)], null),true);
} else {
}
window.onload = ((!(cljs.core.empty_QMARK_.call(null,nesferado.client.get_item.call(null,new cljs.core.Keyword(null,"auth-key","auth-key",1408789427)))))?nesferado.client.auto_login:null);
nesferado.client.start_BANG_ = (function nesferado$client$start_BANG_(){
return nesferado.client.start_router_BANG_.call(null);
});
if(typeof nesferado.client._start_once !== 'undefined'){
} else {
nesferado.client._start_once = nesferado.client.start_BANG_.call(null);
}

//# sourceMappingURL=client.js.map