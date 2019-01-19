// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('nesferado.client');
goog.require('cljs.core');
goog.require('taoensso.sente');
goog.require('ajax.core');
goog.require('cemerick.url');
goog.require('cljs.core.async');
goog.require('rum.core');
goog.require('alandipert.storage_atom');
goog.require('accountant.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_();
nesferado.client.output_el = document.getElementById("output");
nesferado.client.__GT_output_BANG_ = (function nesferado$client$__GT_output_BANG_(msg){
return (nesferado.client.output_el["value"] = msg);
});
nesferado.client.__GT_output_BANG_(" \u2022 Welcome to Nonforum \u2022");
var rand_chsk_type_31384 = (((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() >= 0.5))?cljs.core.cst$kw$ajax:cljs.core.cst$kw$auto);
var packer_31385 = cljs.core.cst$kw$edn;
var map__31382_31386 = taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic("/chsk",cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,rand_chsk_type_31384,cljs.core.cst$kw$packer,packer_31385], null)], 0));
var map__31382_31387__$1 = ((((!((map__31382_31386 == null)))?((((map__31382_31386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31382_31386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31382_31386):map__31382_31386);
var chsk_31388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31382_31387__$1,cljs.core.cst$kw$chsk);
var ch_recv_31389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31382_31387__$1,cljs.core.cst$kw$ch_DASH_recv);
var send_fn_31390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31382_31387__$1,cljs.core.cst$kw$send_DASH_fn);
var state_31391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31382_31387__$1,cljs.core.cst$kw$state);
nesferado.client.chsk = chsk_31388;

nesferado.client.ch_chsk = ch_recv_31389;

nesferado.client.chsk_send_BANG_ = send_fn_31390;

nesferado.client.chsk_state = state_31391;
nesferado.client.y = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((999)) : cljs.core.atom.call(null,(999)));
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
var temp__4657__auto___31393 = document.getElementById("btn1");
if(cljs.core.truth_(temp__4657__auto___31393)){
var target_el_31394 = temp__4657__auto___31393;
target_el_31394.addEventListener("click",((function (target_el_31394,temp__4657__auto___31393){
return (function (ev){
nesferado.client.__GT_output_BANG_("Button 1 was clicked (won't receive any reply from server)");

var G__31392 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clientsent_SLASH_ping], null);
return (nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__31392) : nesferado.client.chsk_send_BANG_.call(null,G__31392));
});})(target_el_31394,temp__4657__auto___31393))
);
} else {
}
var temp__4657__auto___31398 = document.getElementById("btn2");
if(cljs.core.truth_(temp__4657__auto___31398)){
var target_el_31399 = temp__4657__auto___31398;
target_el_31399.addEventListener("click",((function (target_el_31399,temp__4657__auto___31398){
return (function (ev){
nesferado.client.__GT_output_BANG_("Button 2 was clicked (will receive reply from server)");

var G__31395 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example_SLASH_button2,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$had_DASH_a_DASH_callback_QMARK_,"indeed"], null)], null);
var G__31396 = (5000);
var G__31397 = ((function (G__31395,G__31396,target_el_31399,temp__4657__auto___31398){
return (function (cb_reply){
return nesferado.client.__GT_output_BANG_([cljs.core.str("Callback reply: "),cljs.core.str(cb_reply)].join(''));
});})(G__31395,G__31396,target_el_31399,temp__4657__auto___31398))
;
return (nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 ? nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(G__31395,G__31396,G__31397) : nesferado.client.chsk_send_BANG_.call(null,G__31395,G__31396,G__31397));
});})(target_el_31399,temp__4657__auto___31398))
);
} else {
}
var temp__4657__auto___31401 = document.getElementById("btn3");
if(cljs.core.truth_(temp__4657__auto___31401)){
var target_el_31402 = temp__4657__auto___31401;
target_el_31402.addEventListener("click",((function (target_el_31402,temp__4657__auto___31401){
return (function (ev){
nesferado.client.__GT_output_BANG_("Button 3 was clicked (will ask server to test rapid async push)");

var G__31400 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example_SLASH_test_DASH_rapid_DASH_push], null);
return (nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__31400) : nesferado.client.chsk_send_BANG_.call(null,G__31400));
});})(target_el_31402,temp__4657__auto___31401))
);
} else {
}
var temp__4657__auto___31406 = document.getElementById("btn4");
if(cljs.core.truth_(temp__4657__auto___31406)){
var target_el_31407 = temp__4657__auto___31406;
target_el_31407.addEventListener("click",((function (target_el_31407,temp__4657__auto___31406){
return (function (ev){
nesferado.client.__GT_output_BANG_("Button 4 was clicked (will toggle async broadcast loop)");

var G__31403 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example_SLASH_toggle_DASH_broadcast], null);
var G__31404 = (5000);
var G__31405 = ((function (G__31403,G__31404,target_el_31407,temp__4657__auto___31406){
return (function (cb_reply){
if(cljs.core.truth_(taoensso.sente.cb_success_QMARK_(cb_reply))){
var loop_enabled_QMARK_ = cb_reply;
if(cljs.core.truth_(loop_enabled_QMARK_)){
return nesferado.client.__GT_output_BANG_("Async broadcast loop now enabled");
} else {
return nesferado.client.__GT_output_BANG_("Async broadcast loop now disabled");
}
} else {
return null;
}
});})(G__31403,G__31404,target_el_31407,temp__4657__auto___31406))
;
return (nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 ? nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(G__31403,G__31404,G__31405) : nesferado.client.chsk_send_BANG_.call(null,G__31403,G__31404,G__31405));
});})(target_el_31407,temp__4657__auto___31406))
);
} else {
}
var temp__4657__auto___31408 = document.getElementById("btn5");
if(cljs.core.truth_(temp__4657__auto___31408)){
var target_el_31409 = temp__4657__auto___31408;
target_el_31409.addEventListener("click",((function (target_el_31409,temp__4657__auto___31408){
return (function (ev){
nesferado.client.__GT_output_BANG_("Disconnecting");

return taoensso.sente.chsk_disconnect_BANG_(nesferado.client.chsk);
});})(target_el_31409,temp__4657__auto___31408))
);
} else {
}
var temp__4657__auto___31410 = document.getElementById("btn6");
if(cljs.core.truth_(temp__4657__auto___31410)){
var target_el_31411 = temp__4657__auto___31410;
target_el_31411.addEventListener("click",((function (target_el_31411,temp__4657__auto___31410){
return (function (ev){
nesferado.client.__GT_output_BANG_("Reconnecting");

return taoensso.sente.chsk_reconnect_BANG_(nesferado.client.chsk);
});})(target_el_31411,temp__4657__auto___31410))
);
} else {
}
nesferado.client.tv_state = (function (){var G__31412 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__31412) : cljs.core.atom.call(null,G__31412));
})();
nesferado.client.input_state = (function (){var G__31413 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inputs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$tv_DASH_curr_DASH_id,cljs.core.cst$kw$change_DASH_pass_DASH_old_DASH_pw,cljs.core.cst$kw$edit_DASH_display_DASH_name,cljs.core.cst$kw$tv_DASH_contents,cljs.core.cst$kw$set_DASH_email,cljs.core.cst$kw$selected_DASH_child,cljs.core.cst$kw$current_DASH_user,cljs.core.cst$kw$password_DASH_status,cljs.core.cst$kw$tv_DASH_comments,cljs.core.cst$kw$login_DASH_time,cljs.core.cst$kw$current_DASH_email,cljs.core.cst$kw$password,cljs.core.cst$kw$invite_DASH_friend_DASH_input,cljs.core.cst$kw$username,cljs.core.cst$kw$send_DASH_feedback_DASH_extra,cljs.core.cst$kw$tv_DASH_posted_DASH_by,cljs.core.cst$kw$title,cljs.core.cst$kw$create_DASH_password,cljs.core.cst$kw$create_DASH_password2,cljs.core.cst$kw$token,cljs.core.cst$kw$bio,cljs.core.cst$kw$send_DASH_feedback_DASH_input,cljs.core.cst$kw$change_DASH_pass_DASH_new_DASH_pw2,cljs.core.cst$kw$link,cljs.core.cst$kw$change_DASH_pass_DASH_new_DASH_pw,cljs.core.cst$kw$subtitle,cljs.core.cst$kw$comment,cljs.core.cst$kw$recovery_DASH_email,cljs.core.cst$kw$create_DASH_username,cljs.core.cst$kw$logged_DASH_in,cljs.core.cst$kw$contents,cljs.core.cst$kw$tv_DASH_title,cljs.core.cst$kw$recovery_DASH_email_DASH_status,cljs.core.cst$kw$tv_DASH_current,cljs.core.cst$kw$tv_DASH_priority,cljs.core.cst$kw$current_DASH_view,cljs.core.cst$kw$selected_DASH_parent,cljs.core.cst$kw$tv_DASH_timestamp,cljs.core.cst$kw$tv_DASH_link],["","","","","",cljs.core.PersistentVector.EMPTY,"","",cljs.core.PersistentVector.EMPTY,"","","","","","","","","","","","","","","","","","","","",false,"","","",cljs.core.PersistentArrayMap.EMPTY,(4),"/",(0),(808),""])], null)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__31413) : cljs.core.atom.call(null,G__31413));
})();
nesferado.client.posts = (function (){var G__31414 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__31414) : cljs.core.atom.call(null,G__31414));
})();
nesferado.client.ratings = (function (){var G__31415 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__31415) : cljs.core.atom.call(null,G__31415));
})();
nesferado.client.nf_comment = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1("") : cljs.core.atom.call(null,""));
nesferado.client.get_rating = (function nesferado$client$get_rating(ratings_total,number_of_ratings){
if((number_of_ratings < (6))){
return (number_of_ratings + (1));
} else {
return ((ratings_total / number_of_ratings) | (0));
}
});
nesferado.client.get_rating_com = (function nesferado$client$get_rating_com(ratings_total,number_of_ratings){
if((number_of_ratings < (3))){
return (number_of_ratings + (1));
} else {
return ((ratings_total / number_of_ratings) | (0));
}
});
nesferado.client.get_url_params = (function nesferado$client$get_url_params(){
return cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(cemerick.url.url.cljs$core$IFn$_invoke$arity$1(window.location.href));
});
nesferado.client.get_post_by_id = (function nesferado$client$get_post_by_id(post_id){
var post = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31416_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(post_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__31416_SHARP_));
}),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.posts) : cljs.core.deref.call(null,nesferado.client.posts))));
return post;
});
nesferado.client.sort_the_comments_of_BANG_ = (function nesferado$client$sort_the_comments_of_BANG_(post_id){
var sort_me_id = post_id;
var spot = cljs.core.first(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (sort_me_id){
return (function (p1__31417_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__31417_SHARP_)),sort_me_id);
});})(sort_me_id))
,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.posts) : cljs.core.deref.call(null,nesferado.client.posts))))));
var sorted_comments = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(((function (sort_me_id,spot){
return (function (p1__31418_SHARP_){
return nesferado.client.get_rating(cljs.core.cst$kw$ratings_DASH_total.cljs$core$IFn$_invoke$arity$1(p1__31418_SHARP_),cljs.core.cst$kw$number_DASH_of_DASH_ratings.cljs$core$IFn$_invoke$arity$1(p1__31418_SHARP_));
});})(sort_me_id,spot))
,cljs.core._LT_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(nesferado.client.get_post_by_id,cljs.core.cst$kw$comments.cljs$core$IFn$_invoke$arity$1(nesferado.client.get_post_by_id(sort_me_id)))));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.posts,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spot,cljs.core.cst$kw$comments], null),sorted_comments);
});
nesferado.client.return_comment_ids = (function nesferado$client$return_comment_ids(post_id){
var cids = cljs.core.cst$kw$comments.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31419_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(post_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__31419_SHARP_));
}),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.posts) : cljs.core.deref.call(null,nesferado.client.posts)))));
var posts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(nesferado.client.get_post_by_id,cids);
var post_collection = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (cids,posts){
return (function (p1__31420_SHARP_){
return nesferado.client.get_rating(cljs.core.cst$kw$ratings_DASH_total.cljs$core$IFn$_invoke$arity$1(p1__31420_SHARP_),cljs.core.cst$kw$number_DASH_of_DASH_ratings.cljs$core$IFn$_invoke$arity$1(p1__31420_SHARP_));
});})(cids,posts))
,posts);
var spc = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,post_collection);
return spc;
});
nesferado.client.return_comment_ids_of_tv = (function nesferado$client$return_comment_ids_of_tv(tile_id){
var cids = cljs.core.cst$kw$comments.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31421_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tile_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__31421_SHARP_));
}),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.tv_state) : cljs.core.deref.call(null,nesferado.client.tv_state)))));
var posts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(nesferado.client.get_post_by_id,cids);
var post_collection = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (cids,posts){
return (function (p1__31422_SHARP_){
return nesferado.client.get_rating(cljs.core.cst$kw$ratings_DASH_total.cljs$core$IFn$_invoke$arity$1(p1__31422_SHARP_),cljs.core.cst$kw$number_DASH_of_DASH_ratings.cljs$core$IFn$_invoke$arity$1(p1__31422_SHARP_));
});})(cids,posts))
,posts);
var spc = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,post_collection);
return spc;
});
nesferado.client.count_the_comments_of = (function nesferado$client$count_the_comments_of(tile_id){
var cids = cljs.core.cst$kw$comments.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31423_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tile_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__31423_SHARP_));
}),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.tv_state) : cljs.core.deref.call(null,nesferado.client.tv_state)))));
var posts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(nesferado.client.get_post_by_id,cids);
var spc = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,posts);
var comm_res = cljs.core.map.cljs$core$IFn$_invoke$arity$2(nesferado.client.return_comment_ids,spc);
return cljs.core.count(comm_res);
});
accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$nav_DASH_handler,(function (path){
console.log("ac: ",path);

if((clojure.string.starts_with_QMARK_(path,"?nfid")) || (clojure.string.starts_with_QMARK_(path,"/?nfid"))){
console.log("start swith nfid busted");

var url_params = nesferado.client.get_url_params();
var nfid = cljs.reader.parse_int(cljs.core.get.cljs$core$IFn$_invoke$arity$2(url_params,"nfid"));
var td = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (url_params,nfid){
return (function (p1__31424_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nfid,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__31424_SHARP_));
});})(url_params,nfid))
,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.tv_state) : cljs.core.deref.call(null,nesferado.client.tv_state))));
var title = cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(td);
var contents = cljs.core.cst$kw$contents.cljs$core$IFn$_invoke$arity$1(td);
var comments = cljs.core.cst$kw$comments.cljs$core$IFn$_invoke$arity$1(td);
var posted_by = cljs.core.cst$kw$posted_DASH_by.cljs$core$IFn$_invoke$arity$1(td);
var timestamp = cljs.core.cst$kw$timestamp.cljs$core$IFn$_invoke$arity$1(td);
var n_ratings = cljs.core.cst$kw$number_DASH_of_DASH_ratings.cljs$core$IFn$_invoke$arity$1(td);
var ratings_t = cljs.core.cst$kw$ratings_DASH_total.cljs$core$IFn$_invoke$arity$1(td);
var link = cljs.core.cst$kw$link.cljs$core$IFn$_invoke$arity$1(td);
var long_description = cljs.core.cst$kw$details.cljs$core$IFn$_invoke$arity$1(td);
var cids = nesferado.client.return_comment_ids_of_tv(nfid);
console.log(nfid,title,contents,posted_by,comments);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$current_DASH_view], null),"/");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_title], null),title);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_contents], null),contents);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_posted_DASH_by], null),posted_by);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_timestamp], null),timestamp);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_comments], null),comments);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$selected_DASH_parent], null),nfid);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$selected_DASH_child], null),cids);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_current], null),td);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_curr_DASH_id], null),nfid);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_current], null),cljs.core.PersistentArrayMap.EMPTY);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$current_DASH_view], null),path);
}
}),cljs.core.cst$kw$path_DASH_exists_QMARK_,(function (_){
return true;
}),cljs.core.cst$kw$reload_DASH_same_DASH_path_QMARK_,true], null));
nesferado.client.js_reload = (function nesferado$client$js_reload(){
return console.log("javascript reloaded ^_^;");
});
nesferado.client.create_user = (function nesferado$client$create_user(user_id,pw,pw2){
nesferado.client.__GT_output_BANG_([cljs.core.str("Creating account"),cljs.core.str(user_id)].join(''));

var G__31430 = "/create-account";
var G__31431 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$headers,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$X_DASH_CSRF_DASH_Token,cljs.core.cst$kw$csrf_DASH_token.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.chsk_state) : cljs.core.deref.call(null,nesferado.client.chsk_state)))], null),cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$user_DASH_id,[cljs.core.str(user_id)].join(''),cljs.core.cst$kw$password,[cljs.core.str(pw)].join(''),cljs.core.cst$kw$password2,[cljs.core.str(pw2)].join('')], null),cljs.core.cst$kw$type,cljs.core.cst$kw$text], null);
var G__31432 = ((function (G__31430,G__31431){
return (function (ajax_resp){
nesferado.client.__GT_output_BANG_([cljs.core.str("Account creation response: "),cljs.core.str(ajax_resp)].join(''));

var map__31433 = ajax_resp;
var map__31433__$1 = ((((!((map__31433 == null)))?((((map__31433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31433):map__31433);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31433__$1,cljs.core.cst$kw$success_QMARK_);
var _QMARK_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31433__$1,cljs.core.cst$kw$_QMARK_status);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31433__$1,cljs.core.cst$kw$_QMARK_error);
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31433__$1,cljs.core.cst$kw$_QMARK_content);
var _QMARK_content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31433__$1,cljs.core.cst$kw$_QMARK_content_DASH_type);
var http_status = cljs.core.cst$kw$_QMARK_status.cljs$core$IFn$_invoke$arity$1(ajax_resp);
var account_create_successful_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),http_status);
var stuff = cljs.reader.read_string(_QMARK_content);
if(!(account_create_successful_QMARK_)){
return nesferado.client.__GT_output_BANG_("Account Creation Failed.");
} else {
nesferado.client.__GT_output_BANG_("Account Creation Success!");

nesferado.client.__GT_output_BANG_([cljs.core.str("Now logged in as "),cljs.core.str(user_id)].join(''));

nesferado.client.set_item_BANG_(cljs.core.cst$kw$auth_DASH_key,cljs.core.cst$kw$auth_DASH_token.cljs$core$IFn$_invoke$arity$1(stuff));

nesferado.client.set_item_BANG_(cljs.core.cst$kw$login_DASH_time,cljs.core.cst$kw$login_DASH_time.cljs$core$IFn$_invoke$arity$1(stuff));

nesferado.client.set_item_BANG_(cljs.core.cst$kw$uid,cljs.core.cst$kw$uid.cljs$core$IFn$_invoke$arity$1(stuff));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$token], null),cljs.core.cst$kw$auth_DASH_token.cljs$core$IFn$_invoke$arity$1(stuff));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$login_DASH_time], null),cljs.core.cst$kw$login_DASH_time.cljs$core$IFn$_invoke$arity$1(stuff));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$logged_DASH_in], null),true);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$current_DASH_user], null),cljs.core.cst$kw$uid.cljs$core$IFn$_invoke$arity$1(stuff));

return taoensso.sente.chsk_reconnect_BANG_(nesferado.client.chsk);
}
});})(G__31430,G__31431))
;
return (taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__31430,G__31431,G__31432) : taoensso.sente.ajax_lite.call(null,G__31430,G__31431,G__31432));
});
nesferado.client.try_login = (function nesferado$client$try_login(username,pw){
if(clojure.string.blank_QMARK_(username)){
return nesferado.client.__GT_output_BANG_("Please enter a user-id first");
} else {
nesferado.client.__GT_output_BANG_([cljs.core.str("Logging in with username "),cljs.core.str(username)].join(''));

var G__31440 = "/login";
var G__31441 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$timeout_DASH_ms,(7000),cljs.core.cst$kw$headers,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$X_DASH_CSRF_DASH_Token,cljs.core.cst$kw$csrf_DASH_token.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.chsk_state) : cljs.core.deref.call(null,nesferado.client.chsk_state)))], null),cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$user_DASH_id,[cljs.core.str(username)].join(''),cljs.core.cst$kw$password,[cljs.core.str(pw)].join('')], null),cljs.core.cst$kw$resp_DASH_type,cljs.core.cst$kw$text], null);
var G__31442 = ((function (G__31440,G__31441){
return (function (ajax_resp){
var map__31443 = ajax_resp;
var map__31443__$1 = ((((!((map__31443 == null)))?((((map__31443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31443):map__31443);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31443__$1,cljs.core.cst$kw$success_QMARK_);
var _QMARK_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31443__$1,cljs.core.cst$kw$_QMARK_status);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31443__$1,cljs.core.cst$kw$_QMARK_error);
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31443__$1,cljs.core.cst$kw$_QMARK_content);
var _QMARK_content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31443__$1,cljs.core.cst$kw$_QMARK_content_DASH_type);
var login_successful_QMARK_ = success_QMARK_;
var stuff = cljs.reader.read_string(_QMARK_content);
if(cljs.core.not(login_successful_QMARK_)){
return nesferado.client.__GT_output_BANG_("Login failed");
} else {
nesferado.client.__GT_output_BANG_("Login successful");

nesferado.client.set_item_BANG_(cljs.core.cst$kw$auth_DASH_key,cljs.core.cst$kw$auth_DASH_token.cljs$core$IFn$_invoke$arity$1(stuff));

nesferado.client.set_item_BANG_(cljs.core.cst$kw$login_DASH_time,cljs.core.cst$kw$login_DASH_time.cljs$core$IFn$_invoke$arity$1(stuff));

nesferado.client.set_item_BANG_(cljs.core.cst$kw$uid,cljs.core.cst$kw$uid.cljs$core$IFn$_invoke$arity$1(stuff));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$token], null),cljs.core.cst$kw$auth_DASH_token.cljs$core$IFn$_invoke$arity$1(stuff));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$login_DASH_time], null),cljs.core.cst$kw$login_DASH_time.cljs$core$IFn$_invoke$arity$1(stuff));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$logged_DASH_in], null),true);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$current_DASH_user], null),cljs.core.cst$kw$uid.cljs$core$IFn$_invoke$arity$1(stuff));

return taoensso.sente.chsk_reconnect_BANG_(nesferado.client.chsk);
}
});})(G__31440,G__31441))
;
return (taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__31440,G__31441,G__31442) : taoensso.sente.ajax_lite.call(null,G__31440,G__31441,G__31442));
}
});
nesferado.client.write_rating_BANG_ = (function nesferado$client$write_rating_BANG_(rating,pid){
var G__31446 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clientsent_SLASH_rating,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pid,pid,cljs.core.cst$kw$uid,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$current_DASH_user], null)),cljs.core.cst$kw$rating,rating], null)], null);
return (nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__31446) : nesferado.client.chsk_send_BANG_.call(null,G__31446));
});
nesferado.client.rate = (function nesferado$client$rate(rating,pid){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rating,cljs.core.cst$kw$double_DASH_plus)){
nesferado.client.write_rating_BANG_(rating,pid);

return console.log("user rated ",pid," ++");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rating,cljs.core.cst$kw$plus)){
nesferado.client.write_rating_BANG_(rating,pid);

return console.log([cljs.core.str("user rated "),cljs.core.str(pid),cljs.core.str(" +")].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rating,cljs.core.cst$kw$minus)){
nesferado.client.write_rating_BANG_(rating,pid);

return console.log("user rated ",pid," -");
} else {
return null;
}
}
}
});
nesferado.client.show_fresh = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$did_DASH_mount,(function (state){
var comp_31447 = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
var dom_node_31448 = ReactDOM.findDOMNode(comp_31447);
dom_node_31448.classList = "justMounted";

return state;
})], null);
nesferado.client.render_item = rum.core.build_defcs((function (state,pid){
var post_coll = rum.core.react(nesferado.client.posts);
var input_coll = rum.core.react(nesferado.client.input_state);
var cids = nesferado.client.return_comment_ids(pid);
var __ = rum.core.react(nesferado.client.tv_state);
var local_atom = cljs.core.cst$kw$nesferado$client_SLASH_hidecomments.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.empty_QMARK_(nesferado.client.return_comment_ids(pid))){
var noc_post = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (post_coll,input_coll,cids,__,local_atom){
return (function (p1__31449_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pid,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__31449_SHARP_));
});})(post_coll,input_coll,cids,__,local_atom))
,post_coll));
var nor_nospost = cljs.core.cst$kw$number_DASH_of_DASH_ratings.cljs$core$IFn$_invoke$arity$1(noc_post);
var rating = nesferado.client.get_rating_com(cljs.core.cst$kw$ratings_DASH_total.cljs$core$IFn$_invoke$arity$1(noc_post),nor_nospost);
var G__31455 = "div";
var G__31456 = ({"id": pid, "className": "nocomments genpost"});
var G__31457 = (function (){var G__31458 = "div";
var G__31459 = ({"onClick": ((function (G__31458,G__31455,G__31456,noc_post,nor_nospost,rating,post_coll,input_coll,cids,__,local_atom){
return (function (e){
console.log("Freshly selected: ",pid);

e.stopPropagation();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$selected_DASH_parent], null),pid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$selected_DASH_child], null),nesferado.client.return_comment_ids(pid));
});})(G__31458,G__31455,G__31456,noc_post,nor_nospost,rating,post_coll,input_coll,cids,__,local_atom))
, "className": "padleft"});
var G__31460 = (function (){var G__31462 = "div";
var G__31463 = ({"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-contents","genpost",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pid,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(input_coll,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$selected_DASH_parent], null))))?"selectedParent":(cljs.core.truth_(cljs.core.some(((function (G__31462,G__31458,G__31459,G__31455,G__31456,noc_post,nor_nospost,rating,post_coll,input_coll,cids,__,local_atom){
return (function (p1__31450_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__31450_SHARP_,pid);
});})(G__31462,G__31458,G__31459,G__31455,G__31456,noc_post,nor_nospost,rating,post_coll,input_coll,cids,__,local_atom))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(input_coll,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$selected_DASH_child], null))))?"selectedChild":null))], null))});
var G__31464 = sablono.interpreter.interpret(cljs.core.cst$kw$contents.cljs$core$IFn$_invoke$arity$1(noc_post));
var G__31465 = (function (){var attrs31461 = cljs.core.cst$kw$author.cljs$core$IFn$_invoke$arity$1(noc_post);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs31461))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-author"], null)], null),attrs31461], 0))):({"className": "item-author"})),((cljs.core.map_QMARK_(attrs31461))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs31461)], null)));
})();
var G__31466 = (function (){var G__31467 = "div";
var G__31468 = ({"className": "rate"});
var G__31469 = (function (){var G__31473 = "div";
var G__31474 = ({"onClick": ((function (G__31473,G__31467,G__31468,G__31462,G__31463,G__31464,G__31465,G__31458,G__31459,G__31455,G__31456,noc_post,nor_nospost,rating,post_coll,input_coll,cids,__,local_atom){
return (function (e){
return nesferado.client.rate(cljs.core.cst$kw$double_DASH_plus,pid);
});})(G__31473,G__31467,G__31468,G__31462,G__31463,G__31464,G__31465,G__31458,G__31459,G__31455,G__31456,noc_post,nor_nospost,rating,post_coll,input_coll,cids,__,local_atom))
, "className": "item-rate-doubleplus"});
var G__31475 = "";
return React.createElement(G__31473,G__31474,G__31475);
})();
var G__31470 = (function (){var G__31476 = "div";
var G__31477 = ({"onClick": ((function (G__31476,G__31467,G__31468,G__31469,G__31462,G__31463,G__31464,G__31465,G__31458,G__31459,G__31455,G__31456,noc_post,nor_nospost,rating,post_coll,input_coll,cids,__,local_atom){
return (function (e){
return nesferado.client.rate(cljs.core.cst$kw$plus,pid);
});})(G__31476,G__31467,G__31468,G__31469,G__31462,G__31463,G__31464,G__31465,G__31458,G__31459,G__31455,G__31456,noc_post,nor_nospost,rating,post_coll,input_coll,cids,__,local_atom))
, "className": "item-rate-plus"});
var G__31478 = "";
return React.createElement(G__31476,G__31477,G__31478);
})();
var G__31471 = (function (){var G__31479 = "div";
var G__31480 = ({"onClick": ((function (G__31479,G__31467,G__31468,G__31469,G__31470,G__31462,G__31463,G__31464,G__31465,G__31458,G__31459,G__31455,G__31456,noc_post,nor_nospost,rating,post_coll,input_coll,cids,__,local_atom){
return (function (e){
return nesferado.client.rate(cljs.core.cst$kw$minus,pid);
});})(G__31479,G__31467,G__31468,G__31469,G__31470,G__31462,G__31463,G__31464,G__31465,G__31458,G__31459,G__31455,G__31456,noc_post,nor_nospost,rating,post_coll,input_coll,cids,__,local_atom))
, "className": "item-rate-minus"});
var G__31481 = "";
return React.createElement(G__31479,G__31480,G__31481);
})();
var G__31472 = (function (){var G__31482 = "div";
var G__31483 = ({"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-rating",(((nor_nospost < (3)))?"rollthedice":"numerals")], null))});
var G__31484 = sablono.interpreter.interpret(rating);
return React.createElement(G__31482,G__31483,G__31484);
})();
return React.createElement(G__31467,G__31468,G__31469,G__31470,G__31471,G__31472);
})();
return React.createElement(G__31462,G__31463,G__31464,G__31465,G__31466);
})();
return React.createElement(G__31458,G__31459,G__31460);
})();
return React.createElement(G__31455,G__31456,G__31457);
} else {
var com_post = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (post_coll,input_coll,cids,__,local_atom){
return (function (p1__31451_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pid,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__31451_SHARP_));
});})(post_coll,input_coll,cids,__,local_atom))
,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (post_coll,input_coll,cids,__,local_atom){
return (function (p1__31452_SHARP_){
return nesferado.client.get_rating(cljs.core.cst$kw$ratings_DASH_total.cljs$core$IFn$_invoke$arity$1(p1__31452_SHARP_),cljs.core.cst$kw$number_DASH_of_DASH_ratings.cljs$core$IFn$_invoke$arity$1(p1__31452_SHARP_));
});})(post_coll,input_coll,cids,__,local_atom))
,post_coll)));
var nor_compost = cljs.core.cst$kw$number_DASH_of_DASH_ratings.cljs$core$IFn$_invoke$arity$1(com_post);
var com_rating = nesferado.client.get_rating_com(cljs.core.cst$kw$ratings_DASH_total.cljs$core$IFn$_invoke$arity$1(com_post),nor_compost);
var G__31485 = "div";
var G__31486 = ({"id": pid, "className": "hascomments"});
var G__31487 = (function (){var G__31488 = "div";
var G__31489 = ({"onClick": ((function (G__31488,G__31485,G__31486,com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom){
return (function (e){
console.log("Freshly selected: ",pid);

e.stopPropagation();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$selected_DASH_parent], null),pid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$selected_DASH_child], null),nesferado.client.return_comment_ids(pid));
});})(G__31488,G__31485,G__31486,com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom))
, "className": "padleft"});
var G__31490 = (function (){var G__31494 = "div";
var G__31495 = ({"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-contents","genpost",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pid,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(input_coll,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$selected_DASH_parent], null))))?"selectedParent":(cljs.core.truth_(cljs.core.some(((function (G__31494,G__31488,G__31489,G__31485,G__31486,com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom){
return (function (p1__31453_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__31453_SHARP_,pid);
});})(G__31494,G__31488,G__31489,G__31485,G__31486,com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(input_coll,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$selected_DASH_child], null))))?"selectedChild":null))], null))});
var G__31496 = sablono.interpreter.interpret(cljs.core.cst$kw$contents.cljs$core$IFn$_invoke$arity$1(com_post));
var G__31497 = (function (){var attrs31493 = cljs.core.cst$kw$author.cljs$core$IFn$_invoke$arity$1(com_post);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs31493))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-author"], null)], null),attrs31493], 0))):({"className": "item-author"})),((cljs.core.map_QMARK_(attrs31493))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs31493)], null)));
})();
var G__31498 = (function (){var G__31499 = "div";
var G__31500 = ({"className": "rate"});
var G__31501 = (function (){var G__31505 = "div";
var G__31506 = ({"onClick": ((function (G__31505,G__31499,G__31500,G__31494,G__31495,G__31496,G__31497,G__31488,G__31489,G__31485,G__31486,com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom){
return (function (e){
return nesferado.client.rate(cljs.core.cst$kw$double_DASH_plus,pid);
});})(G__31505,G__31499,G__31500,G__31494,G__31495,G__31496,G__31497,G__31488,G__31489,G__31485,G__31486,com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom))
, "className": "item-rate-doubleplus"});
var G__31507 = "";
return React.createElement(G__31505,G__31506,G__31507);
})();
var G__31502 = (function (){var G__31508 = "div";
var G__31509 = ({"onClick": ((function (G__31508,G__31499,G__31500,G__31501,G__31494,G__31495,G__31496,G__31497,G__31488,G__31489,G__31485,G__31486,com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom){
return (function (e){
return nesferado.client.rate(cljs.core.cst$kw$plus,pid);
});})(G__31508,G__31499,G__31500,G__31501,G__31494,G__31495,G__31496,G__31497,G__31488,G__31489,G__31485,G__31486,com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom))
, "className": "item-rate-plus"});
var G__31510 = "";
return React.createElement(G__31508,G__31509,G__31510);
})();
var G__31503 = (function (){var G__31511 = "div";
var G__31512 = ({"onClick": ((function (G__31511,G__31499,G__31500,G__31501,G__31502,G__31494,G__31495,G__31496,G__31497,G__31488,G__31489,G__31485,G__31486,com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom){
return (function (e){
return nesferado.client.rate(cljs.core.cst$kw$minus,pid);
});})(G__31511,G__31499,G__31500,G__31501,G__31502,G__31494,G__31495,G__31496,G__31497,G__31488,G__31489,G__31485,G__31486,com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom))
, "className": "item-rate-minus"});
var G__31513 = "";
return React.createElement(G__31511,G__31512,G__31513);
})();
var G__31504 = (function (){var G__31514 = "div";
var G__31515 = ({"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-rating",(((nor_compost < (3)))?"rollthedice":"numerals")], null))});
var G__31516 = sablono.interpreter.interpret(com_rating);
return React.createElement(G__31514,G__31515,G__31516);
})();
return React.createElement(G__31499,G__31500,G__31501,G__31502,G__31503,G__31504);
})();
return React.createElement(G__31494,G__31495,G__31496,G__31497,G__31498);
})();
var G__31491 = (function (){var G__31517 = "button";
var G__31518 = ({"onClick": ((function (G__31517,G__31488,G__31489,G__31490,G__31485,G__31486,com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom){
return (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(local_atom,((function (G__31517,G__31488,G__31489,G__31490,G__31485,G__31486,com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom){
return (function (p1__31454_SHARP_){
return ((-1) * p1__31454_SHARP_);
});})(G__31517,G__31488,G__31489,G__31490,G__31485,G__31486,com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom))
);
});})(G__31517,G__31488,G__31489,G__31490,G__31485,G__31486,com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom))
, "className": "commentog"});
var G__31519 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(local_atom) : cljs.core.deref.call(null,local_atom)),(-1)))?"hide":"show");
return React.createElement(G__31517,G__31518,G__31519);
})();
var G__31492 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(local_atom) : cljs.core.deref.call(null,local_atom)),(-1)))?sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(nesferado.client.render_item,cids)):null);
return React.createElement(G__31488,G__31489,G__31490,G__31491,G__31492);
})();
return React.createElement(G__31485,G__31486,G__31487);
}
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2((-1),cljs.core.cst$kw$nesferado$client_SLASH_hidecomments),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key_DASH_fn,(function (state,pid){
return [cljs.core.str(pid),cljs.core.str(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nesferado.client.y,cljs.core.inc))].join('');
})], null),nesferado.client.show_fresh], null),"render-item");
nesferado.client.send_feedback_fields = rum.core.build_defcs((function (state){
var G__31520 = "form";
var G__31521 = ({"id": "sendfeedbackform"});
var G__31522 = sablono.interpreter.create_element("textarea",({"id": "sendfeedbackinput", "placeholder": "Send us some feedback, suggestions, comments, concerns.", "name": "feedback", "value": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$send_DASH_feedback_DASH_input], null)), "onChange": ((function (G__31520,G__31521){
return (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$send_DASH_feedback_DASH_input], null),e.target.value);
});})(G__31520,G__31521))
, "className": "fullwidth"}));
var G__31523 = (function (){var G__31524 = "button";
var G__31525 = ({"id": "sfsubmit", "type": "button", "onClick": ((function (G__31524,G__31520,G__31521,G__31522){
return (function (e){
var feedback = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$send_DASH_feedback_DASH_input], null));
console.log("send feedback button pressed");

var G__31527_31528 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clientsent_SLASH_feedback,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$feedback,feedback], null)], null);
(nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__31527_31528) : nesferado.client.chsk_send_BANG_.call(null,G__31527_31528));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$send_DASH_feedback_DASH_input], null),"");
});})(G__31524,G__31520,G__31521,G__31522))
, "className": "fullwidth"});
var G__31526 = "send feedback";
return React.createElement(G__31524,G__31525,G__31526);
})();
return React.createElement(G__31520,G__31521,G__31522,G__31523);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,nesferado.client.show_fresh], null),"send-feedback-fields");
nesferado.client.nf_login_input = rum.core.build_defc((function (){
var G__31529 = "form";
var G__31530 = ({"id": "nflogin"});
var G__31531 = sablono.interpreter.create_element("input",({"placeholder": "username", "name": "username", "autoComplete": "username login", "onChange": ((function (G__31529,G__31530){
return (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$username], null),e.target.value);
});})(G__31529,G__31530))
, "className": "fullwidth"}));
var G__31532 = sablono.interpreter.create_element("input",({"placeholder": "password", "type": "password", "name": "password", "autoComplete": "password login", "onChange": ((function (G__31529,G__31530,G__31531){
return (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$password], null),e.target.value);
});})(G__31529,G__31530,G__31531))
, "className": "fullwidth"}));
var G__31533 = (function (){var G__31534 = "button";
var G__31535 = ({"id": "logsin", "type": "button", "onClick": ((function (G__31534,G__31529,G__31530,G__31531,G__31532){
return (function (e){
var username = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$username], null));
var password = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$password], null));
return nesferado.client.try_login(username,password);
});})(G__31534,G__31529,G__31530,G__31531,G__31532))
, "className": "fullwidth"});
var G__31536 = "login";
return React.createElement(G__31534,G__31535,G__31536);
})();
return React.createElement(G__31529,G__31530,G__31531,G__31532,G__31533);
}),null,"nf-login-input");
nesferado.client.create_account_fields = rum.core.build_defc((function (){
var G__31537 = "form";
var G__31538 = ({"id": "nfcreate"});
var G__31539 = sablono.interpreter.create_element("input",({"id": "cruser", "placeholder": "username", "name": "username", "autoComplete": "new-username", "onChange": ((function (G__31537,G__31538){
return (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$create_DASH_username], null),e.target.value);
});})(G__31537,G__31538))
, "className": "fullwidth"}));
var G__31540 = sablono.interpreter.create_element("input",({"id": "crpass", "placeholder": "password", "type": "password", "name": "password", "autoComplete": "new-password", "onChange": ((function (G__31537,G__31538,G__31539){
return (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$create_DASH_password], null),e.target.value);
});})(G__31537,G__31538,G__31539))
, "className": "fullwidth"}));
var G__31541 = sablono.interpreter.create_element("input",({"id": "crpass2", "placeholder": "pw confirm", "type": "password", "name": "password2", "autoComplete": "new-password-confirm", "onChange": ((function (G__31537,G__31538,G__31539,G__31540){
return (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$create_DASH_password2], null),e.target.value);
});})(G__31537,G__31538,G__31539,G__31540))
, "className": "fullwidth"}));
var G__31542 = (function (){var G__31543 = "button";
var G__31544 = ({"id": "crsubmit", "type": "button", "autoComplete": "new-user-account-create", "onClick": ((function (G__31543,G__31537,G__31538,G__31539,G__31540,G__31541){
return (function (e){
var username = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$create_DASH_username], null));
var password = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$create_DASH_password], null));
var password2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$create_DASH_password2], null));
return nesferado.client.create_user(username,password,password2);
});})(G__31543,G__31537,G__31538,G__31539,G__31540,G__31541))
, "className": "fullwidth"});
var G__31545 = "create account";
return React.createElement(G__31543,G__31544,G__31545);
})();
return React.createElement(G__31537,G__31538,G__31539,G__31540,G__31541,G__31542);
}),null,"create-account-fields");
nesferado.client.create_account_input = rum.core.build_defc((function (){
var attrs31546 = (nesferado.client.create_account_fields.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.create_account_fields.cljs$core$IFn$_invoke$arity$0() : nesferado.client.create_account_fields.call(null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs31546))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"create-account-contain"], null),attrs31546], 0))):({"id": "create-account-contain"})),((cljs.core.map_QMARK_(attrs31546))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs31546)], null)));
}),null,"create-account-input");
nesferado.client.link = rum.core.build_defc((function (address){
var G__31547 = "a";
var G__31548 = ({"href": address});
var G__31549 = sablono.interpreter.interpret(address);
return React.createElement(G__31547,G__31548,G__31549);
}),null,"link");
nesferado.client.top_bar = rum.core.build_defc((function (){
var current_user = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rum.core.react(nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$current_DASH_user], null));
var G__31550 = "div";
var G__31551 = ({"id": "topbar"});
var G__31552 = (function (){var G__31554 = "ol";
var G__31555 = ({"className": "topbar"});
var G__31556 = (function (){var G__31563 = "li";
var G__31564 = null;
var G__31565 = (function (){var G__31566 = "div";
var G__31567 = ({"onClick": ((function (G__31566,G__31563,G__31564,G__31554,G__31555,G__31550,G__31551,current_user){
return (function (_){
accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_current], null),"");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_curr_DASH_id], null),"");
});})(G__31566,G__31563,G__31564,G__31554,G__31555,G__31550,G__31551,current_user))
, "onMouseOver": ((function (G__31566,G__31563,G__31564,G__31554,G__31555,G__31550,G__31551,current_user){
return (function (e){
return document.body.style.cursor = "pointer";
});})(G__31566,G__31563,G__31564,G__31554,G__31555,G__31550,G__31551,current_user))
, "onMouseOut": ((function (G__31566,G__31563,G__31564,G__31554,G__31555,G__31550,G__31551,current_user){
return (function (e){
return document.body.style.cursor = "auto";
});})(G__31566,G__31563,G__31564,G__31554,G__31555,G__31550,G__31551,current_user))
, "className": "sidebarbutton"});
var G__31568 = "n\u229Cnforum";
return React.createElement(G__31566,G__31567,G__31568);
})();
return React.createElement(G__31563,G__31564,G__31565);
})();
var G__31557 = (function (){var G__31569 = "li";
var G__31570 = null;
var G__31571 = (function (){var G__31572 = "span";
var G__31573 = ({"onClick": ((function (G__31572,G__31569,G__31570,G__31554,G__31555,G__31556,G__31550,G__31551,current_user){
return (function (_){
accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_current], null),"");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_curr_DASH_id], null),"");
});})(G__31572,G__31569,G__31570,G__31554,G__31555,G__31556,G__31550,G__31551,current_user))
, "onMouseOver": ((function (G__31572,G__31569,G__31570,G__31554,G__31555,G__31556,G__31550,G__31551,current_user){
return (function (e){
return document.body.style.cursor = "pointer";
});})(G__31572,G__31569,G__31570,G__31554,G__31555,G__31556,G__31550,G__31551,current_user))
, "onMouseOut": ((function (G__31572,G__31569,G__31570,G__31554,G__31555,G__31556,G__31550,G__31551,current_user){
return (function (e){
return document.body.style.cursor = "auto";
});})(G__31572,G__31569,G__31570,G__31554,G__31555,G__31556,G__31550,G__31551,current_user))
, "className": "sidebarbutton"});
var G__31574 = "\u2301 top";
return React.createElement(G__31572,G__31573,G__31574);
})();
return React.createElement(G__31569,G__31570,G__31571);
})();
var G__31558 = (function (){var G__31575 = "li";
var G__31576 = null;
var G__31577 = (function (){var G__31578 = "span";
var G__31579 = ({"onClick": ((function (G__31578,G__31575,G__31576,G__31554,G__31555,G__31556,G__31557,G__31550,G__31551,current_user){
return (function (e){
e.stopPropagation();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$show_DASH_sidebar], null),cljs.core.not);
});})(G__31578,G__31575,G__31576,G__31554,G__31555,G__31556,G__31557,G__31550,G__31551,current_user))
, "onMouseOver": ((function (G__31578,G__31575,G__31576,G__31554,G__31555,G__31556,G__31557,G__31550,G__31551,current_user){
return (function (e){
return document.body.style.cursor = "pointer";
});})(G__31578,G__31575,G__31576,G__31554,G__31555,G__31556,G__31557,G__31550,G__31551,current_user))
, "onMouseOut": ((function (G__31578,G__31575,G__31576,G__31554,G__31555,G__31556,G__31557,G__31550,G__31551,current_user){
return (function (e){
return document.body.style.cursor = "auto";
});})(G__31578,G__31575,G__31576,G__31554,G__31555,G__31556,G__31557,G__31550,G__31551,current_user))
, "className": "sidebarbutton"});
var G__31580 = " \u2234 preferences";
return React.createElement(G__31578,G__31579,G__31580);
})();
return React.createElement(G__31575,G__31576,G__31577);
})();
var G__31559 = (function (){var G__31581 = "li";
var G__31582 = null;
var G__31583 = (function (){var G__31584 = "span";
var G__31585 = ({"onClick": ((function (G__31584,G__31581,G__31582,G__31554,G__31555,G__31556,G__31557,G__31558,G__31550,G__31551,current_user){
return (function (_){
accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/submit");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$current_DASH_view], null),"/submit");
});})(G__31584,G__31581,G__31582,G__31554,G__31555,G__31556,G__31557,G__31558,G__31550,G__31551,current_user))
, "onMouseOver": ((function (G__31584,G__31581,G__31582,G__31554,G__31555,G__31556,G__31557,G__31558,G__31550,G__31551,current_user){
return (function (e){
return document.body.style.cursor = "pointer";
});})(G__31584,G__31581,G__31582,G__31554,G__31555,G__31556,G__31557,G__31558,G__31550,G__31551,current_user))
, "onMouseOut": ((function (G__31584,G__31581,G__31582,G__31554,G__31555,G__31556,G__31557,G__31558,G__31550,G__31551,current_user){
return (function (e){
return document.body.style.cursor = "auto";
});})(G__31584,G__31581,G__31582,G__31554,G__31555,G__31556,G__31557,G__31558,G__31550,G__31551,current_user))
, "className": "sidebarbutton"});
var G__31586 = "\u2301 submit";
return React.createElement(G__31584,G__31585,G__31586);
})();
return React.createElement(G__31581,G__31582,G__31583);
})();
var G__31560 = (function (){var G__31587 = "li";
var G__31588 = null;
var G__31589 = (function (){var G__31590 = "span";
var G__31591 = ({"onClick": ((function (G__31590,G__31587,G__31588,G__31554,G__31555,G__31556,G__31557,G__31558,G__31559,G__31550,G__31551,current_user){
return (function (_){
accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/about");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$current_DASH_view], null),"/about");
});})(G__31590,G__31587,G__31588,G__31554,G__31555,G__31556,G__31557,G__31558,G__31559,G__31550,G__31551,current_user))
, "onMouseOver": ((function (G__31590,G__31587,G__31588,G__31554,G__31555,G__31556,G__31557,G__31558,G__31559,G__31550,G__31551,current_user){
return (function (e){
return document.body.style.cursor = "pointer";
});})(G__31590,G__31587,G__31588,G__31554,G__31555,G__31556,G__31557,G__31558,G__31559,G__31550,G__31551,current_user))
, "onMouseOut": ((function (G__31590,G__31587,G__31588,G__31554,G__31555,G__31556,G__31557,G__31558,G__31559,G__31550,G__31551,current_user){
return (function (e){
return document.body.style.cursor = "auto";
});})(G__31590,G__31587,G__31588,G__31554,G__31555,G__31556,G__31557,G__31558,G__31559,G__31550,G__31551,current_user))
, "className": "sidebarbutton"});
var G__31592 = "\u2301 about";
return React.createElement(G__31590,G__31591,G__31592);
})();
return React.createElement(G__31587,G__31588,G__31589);
})();
var G__31561 = (function (){var attrs31553 = ((cljs.core.empty_QMARK_(current_user))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$sidebarbutton,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (G__31554,G__31555,G__31556,G__31557,G__31558,G__31559,G__31560,G__31550,G__31551,current_user){
return (function (_){
accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/login");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$current_DASH_view], null),"/login");
});})(G__31554,G__31555,G__31556,G__31557,G__31558,G__31559,G__31560,G__31550,G__31551,current_user))
], null),"login"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$sidebarbutton,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (G__31554,G__31555,G__31556,G__31557,G__31558,G__31559,G__31560,G__31550,G__31551,current_user){
return (function (_){
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/profile");
});})(G__31554,G__31555,G__31556,G__31557,G__31558,G__31559,G__31560,G__31550,G__31551,current_user))
,cljs.core.cst$kw$onMouseOver,((function (G__31554,G__31555,G__31556,G__31557,G__31558,G__31559,G__31560,G__31550,G__31551,current_user){
return (function (e){
return document.body.style.cursor = "auto";
});})(G__31554,G__31555,G__31556,G__31557,G__31558,G__31559,G__31560,G__31550,G__31551,current_user))
], null),[cljs.core.str(" \u232C "),cljs.core.str(current_user)].join('')], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"li",((cljs.core.map_QMARK_(attrs31553))?sablono.interpreter.attributes(attrs31553):null),((cljs.core.map_QMARK_(attrs31553))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs31553)], null)));
})();
var G__31562 = (function (){var G__31593 = "li";
var G__31594 = null;
var G__31595 = (function (){var G__31596 = "span";
var G__31597 = ({"onClick": ((function (G__31596,G__31593,G__31594,G__31554,G__31555,G__31556,G__31557,G__31558,G__31559,G__31560,G__31561,G__31550,G__31551,current_user){
return (function (e){
e.stopPropagation();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$logged_DASH_in], null),false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$current_DASH_user], null),"");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$auth_DASH_token], null),"");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$login_DASH_time], null),"");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_current], null),"");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_curr_DASH_id], null),"");

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/");

nesferado.client.remove_item_BANG_(cljs.core.cst$kw$login_DASH_time);

nesferado.client.remove_item_BANG_(cljs.core.cst$kw$uid);

nesferado.client.remove_item_BANG_(cljs.core.cst$kw$auth_DASH_key);

return nesferado.client.__GT_output_BANG_([cljs.core.str("Logout Successful")].join(''));
});})(G__31596,G__31593,G__31594,G__31554,G__31555,G__31556,G__31557,G__31558,G__31559,G__31560,G__31561,G__31550,G__31551,current_user))
, "onMouseOver": ((function (G__31596,G__31593,G__31594,G__31554,G__31555,G__31556,G__31557,G__31558,G__31559,G__31560,G__31561,G__31550,G__31551,current_user){
return (function (e){
return document.body.style.cursor = "pointer";
});})(G__31596,G__31593,G__31594,G__31554,G__31555,G__31556,G__31557,G__31558,G__31559,G__31560,G__31561,G__31550,G__31551,current_user))
, "onMouseOut": ((function (G__31596,G__31593,G__31594,G__31554,G__31555,G__31556,G__31557,G__31558,G__31559,G__31560,G__31561,G__31550,G__31551,current_user){
return (function (e){
return document.body.style.cursor = "auto";
});})(G__31596,G__31593,G__31594,G__31554,G__31555,G__31556,G__31557,G__31558,G__31559,G__31560,G__31561,G__31550,G__31551,current_user))
, "className": "sidebarbutton logout"});
var G__31598 = " \u21CF";
return React.createElement(G__31596,G__31597,G__31598);
})();
return React.createElement(G__31593,G__31594,G__31595);
})();
return React.createElement(G__31554,G__31555,G__31556,G__31557,G__31558,G__31559,G__31560,G__31561,G__31562);
})();
return React.createElement(G__31550,G__31551,G__31552);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"top-bar");
nesferado.client.side_bar = rum.core.build_defc((function (){
var G__31599 = "div";
var G__31600 = ({"id": "sidebar"});
var G__31601 = (function (){var G__31602 = "ol";
var G__31603 = ({"className": "sidebar"});
var G__31604 = (function (){var G__31611 = "li";
var G__31612 = null;
var G__31613 = (function (){var G__31614 = "div";
var G__31615 = ({"onClick": ((function (G__31614,G__31611,G__31612,G__31602,G__31603,G__31599,G__31600){
return (function (_){
accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/profile");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$show_DASH_sidebar], null),cljs.core.not);
});})(G__31614,G__31611,G__31612,G__31602,G__31603,G__31599,G__31600))
, "onMouseOver": ((function (G__31614,G__31611,G__31612,G__31602,G__31603,G__31599,G__31600){
return (function (e){
return document.body.style.cursor = "pointer";
});})(G__31614,G__31611,G__31612,G__31602,G__31603,G__31599,G__31600))
, "onMouseOut": ((function (G__31614,G__31611,G__31612,G__31602,G__31603,G__31599,G__31600){
return (function (e){
return document.body.style.cursor = "auto";
});})(G__31614,G__31611,G__31612,G__31602,G__31603,G__31599,G__31600))
, "className": "sidebarbutton bb"});
var G__31616 = "\u1403 edit profile";
return React.createElement(G__31614,G__31615,G__31616);
})();
return React.createElement(G__31611,G__31612,G__31613);
})();
var G__31605 = (function (){var G__31617 = "li";
var G__31618 = null;
var G__31619 = (function (){var G__31620 = "div";
var G__31621 = ({"onClick": ((function (G__31620,G__31617,G__31618,G__31602,G__31603,G__31604,G__31599,G__31600){
return (function (_){
accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/email-public");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$show_DASH_sidebar], null),cljs.core.not);
});})(G__31620,G__31617,G__31618,G__31602,G__31603,G__31604,G__31599,G__31600))
, "onMouseOver": ((function (G__31620,G__31617,G__31618,G__31602,G__31603,G__31604,G__31599,G__31600){
return (function (e){
return document.body.style.cursor = "pointer";
});})(G__31620,G__31617,G__31618,G__31602,G__31603,G__31604,G__31599,G__31600))
, "onMouseOut": ((function (G__31620,G__31617,G__31618,G__31602,G__31603,G__31604,G__31599,G__31600){
return (function (e){
return document.body.style.cursor = "auto";
});})(G__31620,G__31617,G__31618,G__31602,G__31603,G__31604,G__31599,G__31600))
, "className": "sidebarbutton bb"});
var G__31622 = "\u0ED1 set public email";
return React.createElement(G__31620,G__31621,G__31622);
})();
return React.createElement(G__31617,G__31618,G__31619);
})();
var G__31606 = (function (){var G__31623 = "li";
var G__31624 = null;
var G__31625 = (function (){var G__31626 = "div";
var G__31627 = ({"onClick": ((function (G__31626,G__31623,G__31624,G__31602,G__31603,G__31604,G__31605,G__31599,G__31600){
return (function (_){
accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/email-recovery");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$show_DASH_sidebar], null),cljs.core.not);
});})(G__31626,G__31623,G__31624,G__31602,G__31603,G__31604,G__31605,G__31599,G__31600))
, "onMouseOver": ((function (G__31626,G__31623,G__31624,G__31602,G__31603,G__31604,G__31605,G__31599,G__31600){
return (function (e){
return document.body.style.cursor = "pointer";
});})(G__31626,G__31623,G__31624,G__31602,G__31603,G__31604,G__31605,G__31599,G__31600))
, "onMouseOut": ((function (G__31626,G__31623,G__31624,G__31602,G__31603,G__31604,G__31605,G__31599,G__31600){
return (function (e){
return document.body.style.cursor = "auto";
});})(G__31626,G__31623,G__31624,G__31602,G__31603,G__31604,G__31605,G__31599,G__31600))
, "className": "sidebarbutton bb"});
var G__31628 = "\u0F00 set recovery e-mail";
return React.createElement(G__31626,G__31627,G__31628);
})();
return React.createElement(G__31623,G__31624,G__31625);
})();
var G__31607 = (function (){var G__31629 = "li";
var G__31630 = null;
var G__31631 = (function (){var G__31632 = "div";
var G__31633 = ({"onClick": ((function (G__31632,G__31629,G__31630,G__31602,G__31603,G__31604,G__31605,G__31606,G__31599,G__31600){
return (function (_){
accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/password-update");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$show_DASH_sidebar], null),cljs.core.not);
});})(G__31632,G__31629,G__31630,G__31602,G__31603,G__31604,G__31605,G__31606,G__31599,G__31600))
, "onMouseOver": ((function (G__31632,G__31629,G__31630,G__31602,G__31603,G__31604,G__31605,G__31606,G__31599,G__31600){
return (function (e){
return document.body.style.cursor = "pointer";
});})(G__31632,G__31629,G__31630,G__31602,G__31603,G__31604,G__31605,G__31606,G__31599,G__31600))
, "onMouseOut": ((function (G__31632,G__31629,G__31630,G__31602,G__31603,G__31604,G__31605,G__31606,G__31599,G__31600){
return (function (e){
return document.body.style.cursor = "auto";
});})(G__31632,G__31629,G__31630,G__31602,G__31603,G__31604,G__31605,G__31606,G__31599,G__31600))
, "className": "sidebarbutton bb"});
var G__31634 = "\u0F13 set password";
return React.createElement(G__31632,G__31633,G__31634);
})();
return React.createElement(G__31629,G__31630,G__31631);
})();
var G__31608 = (function (){var G__31635 = "li";
var G__31636 = null;
var G__31637 = (function (){var G__31638 = "div";
var G__31639 = ({"onClick": ((function (G__31638,G__31635,G__31636,G__31602,G__31603,G__31604,G__31605,G__31606,G__31607,G__31599,G__31600){
return (function (_){
accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/feedback");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$show_DASH_sidebar], null),cljs.core.not);
});})(G__31638,G__31635,G__31636,G__31602,G__31603,G__31604,G__31605,G__31606,G__31607,G__31599,G__31600))
, "onMouseOver": ((function (G__31638,G__31635,G__31636,G__31602,G__31603,G__31604,G__31605,G__31606,G__31607,G__31599,G__31600){
return (function (e){
return document.body.style.cursor = "pointer";
});})(G__31638,G__31635,G__31636,G__31602,G__31603,G__31604,G__31605,G__31606,G__31607,G__31599,G__31600))
, "onMouseOut": ((function (G__31638,G__31635,G__31636,G__31602,G__31603,G__31604,G__31605,G__31606,G__31607,G__31599,G__31600){
return (function (e){
return document.body.style.cursor = "auto";
});})(G__31638,G__31635,G__31636,G__31602,G__31603,G__31604,G__31605,G__31606,G__31607,G__31599,G__31600))
, "className": "sidebarbutton bb"});
var G__31640 = "\u0AEA give feedback";
return React.createElement(G__31638,G__31639,G__31640);
})();
return React.createElement(G__31635,G__31636,G__31637);
})();
var G__31609 = (function (){var G__31641 = "li";
var G__31642 = null;
var G__31643 = (function (){var G__31644 = "div";
var G__31645 = ({"onClick": ((function (G__31644,G__31641,G__31642,G__31602,G__31603,G__31604,G__31605,G__31606,G__31607,G__31608,G__31599,G__31600){
return (function (_){
accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/donate");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$show_DASH_sidebar], null),cljs.core.not);
});})(G__31644,G__31641,G__31642,G__31602,G__31603,G__31604,G__31605,G__31606,G__31607,G__31608,G__31599,G__31600))
, "onMouseOver": ((function (G__31644,G__31641,G__31642,G__31602,G__31603,G__31604,G__31605,G__31606,G__31607,G__31608,G__31599,G__31600){
return (function (e){
return document.body.style.cursor = "pointer";
});})(G__31644,G__31641,G__31642,G__31602,G__31603,G__31604,G__31605,G__31606,G__31607,G__31608,G__31599,G__31600))
, "onMouseOut": ((function (G__31644,G__31641,G__31642,G__31602,G__31603,G__31604,G__31605,G__31606,G__31607,G__31608,G__31599,G__31600){
return (function (e){
return document.body.style.cursor = "auto";
});})(G__31644,G__31641,G__31642,G__31602,G__31603,G__31604,G__31605,G__31606,G__31607,G__31608,G__31599,G__31600))
, "className": "sidebarbutton bb bd"});
var G__31646 = "\u17F7\u17F8\u17F8 support fusion research";
return React.createElement(G__31644,G__31645,G__31646);
})();
return React.createElement(G__31641,G__31642,G__31643);
})();
var G__31610 = (function (){var G__31647 = "li";
var G__31648 = null;
var G__31649 = (function (){var G__31650 = "div";
var G__31651 = ({"onClick": ((function (G__31650,G__31647,G__31648,G__31602,G__31603,G__31604,G__31605,G__31606,G__31607,G__31608,G__31609,G__31599,G__31600){
return (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$show_DASH_sidebar], null),cljs.core.not);
});})(G__31650,G__31647,G__31648,G__31602,G__31603,G__31604,G__31605,G__31606,G__31607,G__31608,G__31609,G__31599,G__31600))
, "onMouseOver": ((function (G__31650,G__31647,G__31648,G__31602,G__31603,G__31604,G__31605,G__31606,G__31607,G__31608,G__31609,G__31599,G__31600){
return (function (e){
return document.body.style.cursor = "pointer";
});})(G__31650,G__31647,G__31648,G__31602,G__31603,G__31604,G__31605,G__31606,G__31607,G__31608,G__31609,G__31599,G__31600))
, "onMouseOut": ((function (G__31650,G__31647,G__31648,G__31602,G__31603,G__31604,G__31605,G__31606,G__31607,G__31608,G__31609,G__31599,G__31600){
return (function (e){
return document.body.style.cursor = "auto";
});})(G__31650,G__31647,G__31648,G__31602,G__31603,G__31604,G__31605,G__31606,G__31607,G__31608,G__31609,G__31599,G__31600))
, "className": "sidebarbutton bb hideprefs"});
var G__31652 = "\u1409 hide preferences";
return React.createElement(G__31650,G__31651,G__31652);
})();
return React.createElement(G__31647,G__31648,G__31649);
})();
return React.createElement(G__31602,G__31603,G__31604,G__31605,G__31606,G__31607,G__31608,G__31609,G__31610);
})();
return React.createElement(G__31599,G__31600,G__31601);
}),null,"side-bar");
nesferado.client.login_bar = rum.core.build_defc((function (){
var G__31653 = "div";
var G__31654 = ({"id": "loginbar"});
var G__31655 = (function (){var G__31676 = "ol";
var G__31677 = ({"className": "loginbar"});
var G__31678 = (function (){var G__31690 = "li";
var G__31691 = ({"className": "nfnf"});
var G__31692 = "Nonforum Login:";
var G__31693 = sablono.interpreter.interpret((nesferado.client.nf_login_input.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.nf_login_input.cljs$core$IFn$_invoke$arity$0() : nesferado.client.nf_login_input.call(null)));
return React.createElement(G__31690,G__31691,G__31692,G__31693);
})();
var G__31679 = (function (){var G__31694 = "li";
var G__31695 = ({"className": "nfca"});
var G__31696 = "Create a Nonforum account:";
var G__31697 = sablono.interpreter.interpret((nesferado.client.create_account_input.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.create_account_input.cljs$core$IFn$_invoke$arity$0() : nesferado.client.create_account_input.call(null)));
return React.createElement(G__31694,G__31695,G__31696,G__31697);
})();
var G__31680 = (function (){var G__31698 = "li";
var G__31699 = ({"className": "terms"});
var G__31700 = "terms: ";
return React.createElement(G__31698,G__31699,G__31700);
})();
var G__31681 = (function (){var G__31701 = "li";
var G__31702 = ({"className": "terms"});
var G__31703 = "   ";
return React.createElement(G__31701,G__31702,G__31703);
})();
var G__31682 = (function (){var G__31704 = "li";
var G__31705 = ({"className": "terms"});
var G__31706 = "   ";
return React.createElement(G__31704,G__31705,G__31706);
})();
var G__31683 = (function (){var G__31707 = "li";
var G__31708 = ({"className": "terms"});
var G__31709 = "   ";
return React.createElement(G__31707,G__31708,G__31709);
})();
var G__31684 = (function (){var G__31710 = "li";
var G__31711 = ({"className": "terms"});
var G__31712 = "   ";
return React.createElement(G__31710,G__31711,G__31712);
})();
var G__31685 = (function (){var G__31713 = "li";
var G__31714 = ({"className": "terms"});
var G__31715 = "by participating here at nonforum you agree to: ";
return React.createElement(G__31713,G__31714,G__31715);
})();
var G__31686 = (function (){var G__31716 = "li";
var G__31717 = ({"className": "terms"});
var G__31718 = "abide kindly and virtuously,";
return React.createElement(G__31716,G__31717,G__31718);
})();
var G__31687 = (function (){var G__31719 = "li";
var G__31720 = ({"className": "terms"});
var G__31721 = "express yourself in ways that further the discussion and enhance morale,";
return React.createElement(G__31719,G__31720,G__31721);
})();
var G__31688 = (function (){var G__31722 = "li";
var G__31723 = ({"className": "terms"});
var G__31724 = "and, in short, participate in ways to help elevate humanity.";
return React.createElement(G__31722,G__31723,G__31724);
})();
var G__31689 = (function (){var G__31725 = "li";
var G__31726 = ({"className": "terms"});
var G__31727 = "There is currently no surcharge to create an account, you may have one.";
return React.createElement(G__31725,G__31726,G__31727);
})();
return React.createElement(G__31676,G__31677,G__31678,G__31679,G__31680,G__31681,G__31682,G__31683,G__31684,G__31685,G__31686,G__31687,G__31688,G__31689);
})();
return React.createElement(G__31653,G__31654,G__31655);
}),null,"login-bar");
nesferado.client.tv_cell = rum.core.build_defc((function (td){
if(!(cljs.core.empty_QMARK_(td))){
var title = cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(td);
var subtitle = cljs.core.cst$kw$subtitle.cljs$core$IFn$_invoke$arity$1(td);
var comments = cljs.core.cst$kw$comments.cljs$core$IFn$_invoke$arity$1(td);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(td);
var id = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(td);
var posted_by = cljs.core.cst$kw$posted_DASH_by.cljs$core$IFn$_invoke$arity$1(td);
var timestamp = cljs.core.cst$kw$timestamp.cljs$core$IFn$_invoke$arity$1(td);
var n_ratings = cljs.core.cst$kw$number_DASH_of_DASH_ratings.cljs$core$IFn$_invoke$arity$1(td);
var ratings_t = cljs.core.cst$kw$ratings_DASH_total.cljs$core$IFn$_invoke$arity$1(td);
var link = cljs.core.cst$kw$link.cljs$core$IFn$_invoke$arity$1(td);
var long_description = cljs.core.cst$kw$contents.cljs$core$IFn$_invoke$arity$1(td);
var cids = nesferado.client.return_comment_ids_of_tv(id);
var num_comments = nesferado.client.count_the_comments_of(id);
var tv_current = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rum.core.react(nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_current], null));
var G__31728 = "li";
var G__31729 = null;
var G__31730 = (function (){var G__31734 = "div";
var G__31735 = ({"onClick": ((function (G__31734,G__31728,G__31729,title,subtitle,comments,priority,id,posted_by,timestamp,n_ratings,ratings_t,link,long_description,cids,num_comments,tv_current){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_title], null),title);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_contents], null),long_description);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_posted_DASH_by], null),posted_by);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_timestamp], null),timestamp);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_comments], null),comments);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$selected_DASH_parent], null),id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$selected_DASH_child], null),cids);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_current], null),td);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_curr_DASH_id], null),id);

window.scrollTo((0),(0));

return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1([cljs.core.str("?nfid="),cljs.core.str(id)].join(''));
});})(G__31734,G__31728,G__31729,title,subtitle,comments,priority,id,posted_by,timestamp,n_ratings,ratings_t,link,long_description,cids,num_comments,tv_current))
, "id": [cljs.core.str("tile"),cljs.core.str(id)].join(''), "className": "tile"});
var G__31736 = (function (){var attrs31731 = title;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs31731))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["heading"], null)], null),attrs31731], 0))):({"className": "heading"})),((cljs.core.map_QMARK_(attrs31731))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs31731)], null)));
})();
var G__31737 = (function (){var attrs31732 = subtitle;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs31732))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["contents"], null)], null),attrs31732], 0))):({"className": "contents"})),((cljs.core.map_QMARK_(attrs31732))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs31732)], null)));
})();
var G__31738 = (function (){var G__31742 = "div";
var G__31743 = ({"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tilelink",((cljs.core.empty_QMARK_(tv_current))?"hideme":null)], null))});
var G__31744 = (function (){var G__31745 = "a";
var G__31746 = ({"href": link});
var G__31747 = sablono.interpreter.interpret(link);
return React.createElement(G__31745,G__31746,G__31747);
})();
return React.createElement(G__31742,G__31743,G__31744);
})();
var G__31739 = (function (){var G__31748 = "div";
var G__31749 = ({"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["longdescription",((cljs.core.empty_QMARK_(tv_current))?"hideme":null)], null))});
var G__31750 = sablono.interpreter.interpret(long_description);
return React.createElement(G__31748,G__31749,G__31750);
})();
var G__31740 = (function (){var G__31751 = "div";
var G__31752 = ({"className": "tile-rate"});
var G__31753 = (function (){var G__31757 = "div";
var G__31758 = ({"onClick": ((function (G__31757,G__31751,G__31752,G__31734,G__31735,G__31736,G__31737,G__31738,G__31739,G__31728,G__31729,title,subtitle,comments,priority,id,posted_by,timestamp,n_ratings,ratings_t,link,long_description,cids,num_comments,tv_current){
return (function (e){
e.stopPropagation();

return nesferado.client.rate(cljs.core.cst$kw$double_DASH_plus,id);
});})(G__31757,G__31751,G__31752,G__31734,G__31735,G__31736,G__31737,G__31738,G__31739,G__31728,G__31729,title,subtitle,comments,priority,id,posted_by,timestamp,n_ratings,ratings_t,link,long_description,cids,num_comments,tv_current))
, "className": "tile-rate-doubleplus"});
var G__31759 = "";
return React.createElement(G__31757,G__31758,G__31759);
})();
var G__31754 = (function (){var G__31760 = "div";
var G__31761 = ({"onClick": ((function (G__31760,G__31751,G__31752,G__31753,G__31734,G__31735,G__31736,G__31737,G__31738,G__31739,G__31728,G__31729,title,subtitle,comments,priority,id,posted_by,timestamp,n_ratings,ratings_t,link,long_description,cids,num_comments,tv_current){
return (function (e){
e.stopPropagation();

return nesferado.client.rate(cljs.core.cst$kw$plus,id);
});})(G__31760,G__31751,G__31752,G__31753,G__31734,G__31735,G__31736,G__31737,G__31738,G__31739,G__31728,G__31729,title,subtitle,comments,priority,id,posted_by,timestamp,n_ratings,ratings_t,link,long_description,cids,num_comments,tv_current))
, "className": "tile-rate-plus"});
var G__31762 = "";
return React.createElement(G__31760,G__31761,G__31762);
})();
var G__31755 = (function (){var G__31763 = "div";
var G__31764 = ({"onClick": ((function (G__31763,G__31751,G__31752,G__31753,G__31754,G__31734,G__31735,G__31736,G__31737,G__31738,G__31739,G__31728,G__31729,title,subtitle,comments,priority,id,posted_by,timestamp,n_ratings,ratings_t,link,long_description,cids,num_comments,tv_current){
return (function (e){
e.stopPropagation();

return nesferado.client.rate(cljs.core.cst$kw$minus,id);
});})(G__31763,G__31751,G__31752,G__31753,G__31754,G__31734,G__31735,G__31736,G__31737,G__31738,G__31739,G__31728,G__31729,title,subtitle,comments,priority,id,posted_by,timestamp,n_ratings,ratings_t,link,long_description,cids,num_comments,tv_current))
, "className": "tile-rate-minus"});
var G__31765 = "";
return React.createElement(G__31763,G__31764,G__31765);
})();
var G__31756 = (function (){var G__31766 = "div";
var G__31767 = ({"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tile-rating",(((n_ratings < (6)))?"rollthedice":"numerals")], null))});
var G__31768 = sablono.interpreter.interpret(nesferado.client.get_rating(ratings_t,n_ratings));
return React.createElement(G__31766,G__31767,G__31768);
})();
return React.createElement(G__31751,G__31752,G__31753,G__31754,G__31755,G__31756);
})();
var G__31741 = (function (){var attrs31733 = id;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs31733))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tileid"], null)], null),attrs31733], 0))):({"className": "tileid"})),((cljs.core.map_QMARK_(attrs31733))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs31733)], null)));
})();
return React.createElement(G__31734,G__31735,G__31736,G__31737,G__31738,G__31739,G__31740,G__31741);
})();
return React.createElement(G__31728,G__31729,G__31730);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key_DASH_fn,(function (td){
return [cljs.core.str(cljs.core.uuid([cljs.core.str(cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(td))].join('')))].join('');
})], null)], null),"tv-cell");
nesferado.client.television = rum.core.build_defcs((function (state){
var G__31770 = "div";
var G__31771 = ({"id": "tv"});
var G__31772 = (function (){var attrs31769 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(nesferado.client.tv_cell,rum.core.react(nesferado.client.tv_state));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"ol",((cljs.core.map_QMARK_(attrs31769))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tv"], null)], null),attrs31769], 0))):({"className": "tv"})),((cljs.core.map_QMARK_(attrs31769))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs31769)], null)));
})();
return React.createElement(G__31770,G__31771,G__31772);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,nesferado.client.show_fresh], null),"television");
nesferado.client.post_input = rum.core.build_defcs((function (state){
var G__31773 = "form";
var G__31774 = ({"id": "postinput"});
var G__31775 = "Create new post";
var G__31776 = sablono.interpreter.create_element("input",({"placeholder": "title", "value": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$title], null)), "onChange": ((function (G__31773,G__31774,G__31775){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$title], null),e.target.value);

return console.log(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$title], null)));
});})(G__31773,G__31774,G__31775))
, "className": "reim kash"}));
var G__31777 = sablono.interpreter.create_element("input",({"placeholder": "subtitle", "value": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$subtitle], null)), "onChange": ((function (G__31773,G__31774,G__31775,G__31776){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$subtitle], null),e.target.value);

return console.log(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$subtitle], null)));
});})(G__31773,G__31774,G__31775,G__31776))
, "className": "reim kash"}));
var G__31778 = sablono.interpreter.create_element("input",({"placeholder": "link", "value": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$link], null)), "onChange": ((function (G__31773,G__31774,G__31775,G__31776,G__31777){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$link], null),e.target.value);

return console.log(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$link], null)));
});})(G__31773,G__31774,G__31775,G__31776,G__31777))
, "className": "reim kash"}));
var G__31779 = sablono.interpreter.create_element("input",({"placeholder": "contents", "value": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$contents], null)), "onChange": ((function (G__31773,G__31774,G__31775,G__31776,G__31777,G__31778){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$contents], null),e.target.value);

return console.log(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$contents], null)));
});})(G__31773,G__31774,G__31775,G__31776,G__31777,G__31778))
, "className": "reim kash"}));
var G__31780 = (function (){var G__31781 = "button";
var G__31782 = ({"type": "button", "onClick": ((function (G__31781,G__31773,G__31774,G__31775,G__31776,G__31777,G__31778,G__31779){
return (function (e){
var potential_link = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$link], null));
var new_post_map = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$title,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$title], null)),cljs.core.cst$kw$subtitle,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$subtitle], null)),cljs.core.cst$kw$contents,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$contents], null)),cljs.core.cst$kw$link,((!(cljs.core.empty_QMARK_(potential_link)))?(((clojure.string.starts_with_QMARK_(potential_link,"http")) || (clojure.string.starts_with_QMARK_(potential_link,"https")))?potential_link:[cljs.core.str("http://"),cljs.core.str(potential_link)].join('')):[cljs.core.str("")].join('')),cljs.core.cst$kw$timestamp,(80008)], null);
var G__31784_31785 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clientsent_SLASH_new_DASH_post,new_post_map], null);
(nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__31784_31785) : nesferado.client.chsk_send_BANG_.call(null,G__31784_31785));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$title], null),"");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$subtitle], null),"");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$contents], null),"");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$link], null),"");

return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/");
});})(G__31781,G__31773,G__31774,G__31775,G__31776,G__31777,G__31778,G__31779))
, "className": "reim kash"});
var G__31783 = "submit new post";
return React.createElement(G__31781,G__31782,G__31783);
})();
return React.createElement(G__31773,G__31774,G__31775,G__31776,G__31777,G__31778,G__31779,G__31780);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,nesferado.client.show_fresh], null),"post-input");
nesferado.client.edit_profile = rum.core.build_defcs((function (state){
var G__31786 = "form";
var G__31787 = ({"id": "profileinput", "className": "profileinput"});
var G__31788 = "Edit Profile";
var G__31789 = sablono.interpreter.create_element("textarea",({"placeholder": "bio", "value": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$bio], null)), "onChange": ((function (G__31786,G__31787,G__31788){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$bio], null),e.target.value);

return console.log(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$bio], null)));
});})(G__31786,G__31787,G__31788))
, "className": "profileinput"}));
var G__31790 = sablono.interpreter.create_element("input",({"placeholder": "public e-mail", "value": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$public_DASH_email], null)), "onChange": ((function (G__31786,G__31787,G__31788,G__31789){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$public_DASH_email], null),e.target.value);

return console.log(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$public_DASH_email], null)));
});})(G__31786,G__31787,G__31788,G__31789))
, "className": "profileinput"}));
var G__31791 = (function (){var G__31792 = "button";
var G__31793 = ({"type": "button", "onClick": ((function (G__31792,G__31786,G__31787,G__31788,G__31789,G__31790){
return (function (e){
console.log("updating bio");

var new_bio_data = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$bio,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$bio], null)),cljs.core.cst$kw$public_DASH_email,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$public_DASH_email], null))], null);
var G__31795_31796 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clientsent_SLASH_bio,new_bio_data], null);
(nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__31795_31796) : nesferado.client.chsk_send_BANG_.call(null,G__31795_31796));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$bio], null),"");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$public_DASH_email], null),"");
});})(G__31792,G__31786,G__31787,G__31788,G__31789,G__31790))
, "className": "profileinput"});
var G__31794 = "update bio";
return React.createElement(G__31792,G__31793,G__31794);
})();
return React.createElement(G__31786,G__31787,G__31788,G__31789,G__31790,G__31791);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,nesferado.client.show_fresh], null),"edit-profile");
nesferado.client.set_recovery_email = rum.core.build_defcs((function (state){
var G__31797 = "form";
var G__31798 = ({"id": "recoveryinput"});
var G__31799 = "Set Recovery Email";
var G__31800 = sablono.interpreter.create_element("textarea",({"id": "restatus", "readonly": true, "value": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$recovery_DASH_email_DASH_status], null))}));
var G__31801 = sablono.interpreter.create_element("input",({"placeholder": "recovery e-mail", "value": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$recovery_DASH_email], null)), "onChange": ((function (G__31797,G__31798,G__31799,G__31800){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$recovery_DASH_email], null),e.target.value);

return console.log(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$recovery_DASH_email], null)));
});})(G__31797,G__31798,G__31799,G__31800))
, "className": "reim"}));
var G__31802 = (function (){var G__31804 = "div";
var G__31805 = ({"className": "labez"});
var G__31806 = "current nonforum password:";
var G__31807 = sablono.interpreter.create_element("input",({"placeholder": "", "type": "password", "value": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$password], null)), "autoComplete": "Current Nonforum password", "onChange": ((function (G__31804,G__31805,G__31806,G__31797,G__31798,G__31799,G__31800,G__31801){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$password], null),e.target.value);

return console.log(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$password], null)));
});})(G__31804,G__31805,G__31806,G__31797,G__31798,G__31799,G__31800,G__31801))
, "className": "reim"}));
return React.createElement(G__31804,G__31805,G__31806,G__31807);
})();
var G__31803 = (function (){var G__31808 = "button";
var G__31809 = ({"type": "button", "onClick": ((function (G__31808,G__31797,G__31798,G__31799,G__31800,G__31801,G__31802){
return (function (e){
console.log("set recovery e-mail");

var rec_email = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$recovery_DASH_email], null));
var user_as_stashed = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$current_DASH_user], null));
var pw = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$password], null));
var G__31811_31812 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clientsent_SLASH_recovery,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$recovery_DASH_email,rec_email,cljs.core.cst$kw$user_DASH_claim,user_as_stashed,cljs.core.cst$kw$password,pw], null)], null);
(nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__31811_31812) : nesferado.client.chsk_send_BANG_.call(null,G__31811_31812));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$recovery_DASH_email], null),"");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$recovery_DASH_email_DASH_status], null),"");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$password], null),"");
});})(G__31808,G__31797,G__31798,G__31799,G__31800,G__31801,G__31802))
, "className": "reim"});
var G__31810 = "set recovery e-mail";
return React.createElement(G__31808,G__31809,G__31810);
})();
return React.createElement(G__31797,G__31798,G__31799,G__31800,G__31801,G__31802,G__31803);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,nesferado.client.show_fresh], null),"set-recovery-email");
nesferado.client.set_password = rum.core.build_defcs((function (state){
var G__31813 = "form";
var G__31814 = ({"id": "setpasswordinput", "className": "si"});
var G__31815 = sablono.interpreter.create_element("textarea",({"id": "pwstatus", "readonly": true, "value": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$password_DASH_status], null))}));
var G__31816 = (function (){var G__31817 = "div";
var G__31818 = ({"className": "rezz"});
var G__31819 = "old password";
var G__31820 = sablono.interpreter.create_element("input",({"placeholder": "", "type": "password", "value": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$change_DASH_pass_DASH_old_DASH_pw], null)), "autoComplete": "old-password", "onChange": ((function (G__31817,G__31818,G__31819,G__31813,G__31814,G__31815){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$change_DASH_pass_DASH_old_DASH_pw], null),e.target.value);

return console.log(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$change_DASH_pass_DASH_old_DASH_pw], null)));
});})(G__31817,G__31818,G__31819,G__31813,G__31814,G__31815))
, "className": "reim"}));
var G__31821 = (function (){var G__31824 = "div";
var G__31825 = ({"className": "rezz"});
var G__31826 = "new password:";
var G__31827 = sablono.interpreter.create_element("input",({"placeholder": "", "type": "password", "value": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$change_DASH_pass_DASH_new_DASH_pw], null)), "autoComplete": "new password", "onChange": ((function (G__31824,G__31825,G__31826,G__31817,G__31818,G__31819,G__31820,G__31813,G__31814,G__31815){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$change_DASH_pass_DASH_new_DASH_pw], null),e.target.value);

return console.log(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$change_DASH_pass_DASH_new_DASH_pw], null)));
});})(G__31824,G__31825,G__31826,G__31817,G__31818,G__31819,G__31820,G__31813,G__31814,G__31815))
, "className": "reim"}));
return React.createElement(G__31824,G__31825,G__31826,G__31827);
})();
var G__31822 = (function (){var G__31828 = "div";
var G__31829 = ({"className": "rezz"});
var G__31830 = "new password confirm:";
var G__31831 = sablono.interpreter.create_element("input",({"placeholder": "", "type": "password", "value": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$change_DASH_pass_DASH_new_DASH_pw2], null)), "autoComplete": "new password confirm", "onChange": ((function (G__31828,G__31829,G__31830,G__31817,G__31818,G__31819,G__31820,G__31821,G__31813,G__31814,G__31815){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$change_DASH_pass_DASH_new_DASH_pw2], null),e.target.value);

return console.log(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$change_DASH_pass_DASH_new_DASH_pw2], null)));
});})(G__31828,G__31829,G__31830,G__31817,G__31818,G__31819,G__31820,G__31821,G__31813,G__31814,G__31815))
, "className": "reim"}));
return React.createElement(G__31828,G__31829,G__31830,G__31831);
})();
var G__31823 = (function (){var G__31832 = "button";
var G__31833 = ({"id": "pwchang", "type": "button", "onClick": ((function (G__31832,G__31817,G__31818,G__31819,G__31820,G__31821,G__31822,G__31813,G__31814,G__31815){
return (function (e){
console.log("update password");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$password_DASH_status], null),"");

var old_pw = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$change_DASH_pass_DASH_old_DASH_pw], null));
var new_pw = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$change_DASH_pass_DASH_new_DASH_pw], null));
var new_pw2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$change_DASH_pass_DASH_new_DASH_pw2], null));
var G__31835_31836 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clientsent_SLASH_password_DASH_change,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$old,old_pw,cljs.core.cst$kw$new,new_pw,cljs.core.cst$kw$new2,new_pw2], null)], null);
(nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__31835_31836) : nesferado.client.chsk_send_BANG_.call(null,G__31835_31836));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$change_DASH_pass_DASH_old_DASH_pw], null),"");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$change_DASH_pass_DASH_new_DASH_pw], null),"");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$change_DASH_pass_DASH_new_DASH_pw2], null),"");
});})(G__31832,G__31817,G__31818,G__31819,G__31820,G__31821,G__31822,G__31813,G__31814,G__31815))
, "className": "reim"});
var G__31834 = "set password";
return React.createElement(G__31832,G__31833,G__31834);
})();
return React.createElement(G__31817,G__31818,G__31819,G__31820,G__31821,G__31822,G__31823);
})();
return React.createElement(G__31813,G__31814,G__31815,G__31816);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,nesferado.client.show_fresh], null),"set-password");
nesferado.client.support_nf = rum.core.build_defcs((function (state){
var G__31839 = "div";
var G__31840 = null;
var G__31841 = (function (){var G__31850 = "div";
var G__31851 = ({"id": "supportnf"});
var G__31852 = "Thank you for participating in and contributing to Nonforum.";
return React.createElement(G__31850,G__31851,G__31852);
})();
var G__31842 = (function (){var G__31853 = "div";
var G__31854 = ({"id": "mission0"});
var G__31855 = "Part of our mission at Nonforum is to further Humanity in significant ways.";
return React.createElement(G__31853,G__31854,G__31855);
})();
var G__31843 = (function (){var G__31856 = "div";
var G__31857 = ({"id": "mission1"});
var G__31858 = "We are partnered with Horne Technologies to help them achieve parity-efficiency (100:100) with their new 5 Tesla reactor";
return React.createElement(G__31856,G__31857,G__31858);
})();
var G__31844 = (function (){var G__31859 = "div";
var G__31860 = ({"id": "mission2"});
var G__31861 = "In order to continue fusion research in 2019 we need to raise approximately $150,000.";
return React.createElement(G__31859,G__31860,G__31861);
})();
var G__31845 = (function (){var G__31862 = "div";
var G__31863 = ({"id": "mission3"});
var G__31864 = "In order to create a power-generating reactor once we know how many Teslas of magnetic field we need and how to orient the field-generation devices, will require approximately $15 Million";
return React.createElement(G__31862,G__31863,G__31864);
})();
var G__31846 = (function (){var G__31865 = "div";
var G__31866 = ({"id": "mission4"});
var G__31867 = "Fusion will enable Humanity to harness the power of the stars.";
return React.createElement(G__31865,G__31866,G__31867);
})();
var G__31847 = (function (){var G__31868 = "div";
var G__31869 = ({"id": "mission5"});
var G__31870 = "A fusion future would leave cities free of smog and free of adverse pollution in the air, water and earth.";
return React.createElement(G__31868,G__31869,G__31870);
})();
var G__31848 = (function (){var G__31871 = "div";
var G__31872 = ({"id": "mission6"});
var G__31873 = "Our priority is funding fusion so that Humanity will become 100% green and sustainable as soon as possible.";
return React.createElement(G__31871,G__31872,G__31873);
})();
var G__31849 = (function (){var G__31874 = "div";
var G__31875 = ({"id": "mission7"});
var G__31876 = "Please contribute whatever you can.  The suggested donation is $15.00";
return React.createElement(G__31874,G__31875,G__31876);
})();
return React.createElement(G__31839,G__31840,G__31841,G__31842,G__31843,G__31844,G__31845,G__31846,G__31847,G__31848,G__31849);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,nesferado.client.show_fresh], null),"support-nf");
nesferado.client.post_comment_input = rum.core.build_defc((function (){
var G__31877 = "form";
var G__31878 = ({"id": "postcommentinput"});
var G__31879 = sablono.interpreter.create_element("textarea",({"value": rum.core.react(nesferado.client.nf_comment), "placeholder": "let us be kind", "onChange": ((function (G__31877,G__31878){
return (function (e){
var G__31881 = nesferado.client.nf_comment;
var G__31882 = e.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__31881,G__31882) : cljs.core.reset_BANG_.call(null,G__31881,G__31882));
});})(G__31877,G__31878))
, "className": "fullwidth"}));
var G__31880 = (function (){var G__31883 = "button";
var G__31884 = ({"type": "button", "onClick": ((function (G__31883,G__31877,G__31878,G__31879){
return (function (e){
var parent_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$selected_DASH_parent], null));
var username = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$current_DASH_user], null));
var curr_tv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_curr_DASH_id], null));
var new_comment_map = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nesferado.client.y,cljs.core.inc),cljs.core.cst$kw$contents,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.nf_comment) : cljs.core.deref.call(null,nesferado.client.nf_comment)),cljs.core.cst$kw$author,username,cljs.core.cst$kw$comments,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$ratings_DASH_total,(0),cljs.core.cst$kw$number_DASH_of_DASH_ratings,(0)], null);
var submit_comment_map = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$contents,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.nf_comment) : cljs.core.deref.call(null,nesferado.client.nf_comment)),cljs.core.cst$kw$parent_DASH_id,parent_id,cljs.core.cst$kw$curr_DASH_tv,curr_tv,cljs.core.cst$kw$author,username], null);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.nf_comment) : cljs.core.deref.call(null,nesferado.client.nf_comment))))){
var G__31886_31887 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clientsent_SLASH_new_DASH_comment,submit_comment_map], null);
(nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__31886_31887) : nesferado.client.chsk_send_BANG_.call(null,G__31886_31887));
} else {
}

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(nesferado.client.nf_comment,"") : cljs.core.reset_BANG_.call(null,nesferado.client.nf_comment,""));
});})(G__31883,G__31877,G__31878,G__31879))
, "className": "fullwidth replySelected"});
var G__31885 = "Comment in reply to selected.";
return React.createElement(G__31883,G__31884,G__31885);
})();
return React.createElement(G__31877,G__31878,G__31879,G__31880);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"post-comment-input");
nesferado.client.footer = rum.core.build_defc((function (){
var G__31890 = "div";
var G__31891 = ({"id": "footer"});
var G__31892 = "Welcome to nonforum.  Here you will find real-time threads and discussion boards.";
var G__31893 = (function (){var G__31899 = "div";
var G__31900 = ({"id": "foot1"});
var G__31901 = "Nonforum is a place to start discussion threads based on questions or simply on a topic.";
return React.createElement(G__31899,G__31900,G__31901);
})();
var G__31894 = (function (){var G__31902 = "div";
var G__31903 = ({"id": "foot2"});
var G__31904 = "Nonforum is also a place where you can share links and discuss them, voting contributions up or down.";
return React.createElement(G__31902,G__31903,G__31904);
})();
var G__31895 = (function (){var G__31905 = "div";
var G__31906 = ({"id": "foot3"});
var G__31907 = "When you are logged in you can vote on entries with votes signifying double-plus (++), plus (+), and minus (-)";
return React.createElement(G__31905,G__31906,G__31907);
})();
var G__31896 = (function (){var G__31908 = "div";
var G__31909 = ({"id": "foot4"});
var G__31910 = "The more you participate, the greater your community trust rating.";
return React.createElement(G__31908,G__31909,G__31910);
})();
var G__31897 = (function (){var G__31911 = "div";
var G__31912 = ({"id": "foot5"});
var G__31913 = "By providing insightful comments and furthering discussions, your community rating will increase.";
return React.createElement(G__31911,G__31912,G__31913);
})();
var G__31898 = (function (){var G__31914 = "div";
var G__31915 = ({"id": "foot7"});
var G__31916 = "For complete information on how to use nonforum most effectively, please check out the ";
var G__31917 = (function (){var G__31918 = "a";
var G__31919 = ({"href": "/about"});
var G__31920 = "About Page";
return React.createElement(G__31918,G__31919,G__31920);
})();
return React.createElement(G__31914,G__31915,G__31916,G__31917);
})();
return React.createElement(G__31890,G__31891,G__31892,G__31893,G__31894,G__31895,G__31896,G__31897,G__31898);
}),null,"footer");
nesferado.client.about_fields = rum.core.build_defcs((function (state){
var G__31923 = "div";
var G__31924 = ({"id": "aboutnf"});
var G__31925 = (function (){var G__31932 = "div";
var G__31933 = ({"id": "about1", "className": "about"});
var G__31934 = "Nonforum is a realtime forum.";
return React.createElement(G__31932,G__31933,G__31934);
})();
var G__31926 = (function (){var G__31935 = "div";
var G__31936 = ({"id": "about2", "className": "about"});
var G__31937 = "Click on a news tile to see its details.";
return React.createElement(G__31935,G__31936,G__31937);
})();
var G__31927 = (function (){var G__31938 = "div";
var G__31939 = ({"id": "about3", "className": "about"});
var G__31940 = "To comment, click on the element you wish to comment on.  This can be another comment or the original news piece.";
return React.createElement(G__31938,G__31939,G__31940);
})();
var G__31928 = (function (){var G__31941 = "div";
var G__31942 = ({"id": "about4", "className": "about"});
var G__31943 = "A selected comment will be fig colored when selected.";
return React.createElement(G__31941,G__31942,G__31943);
})();
var G__31929 = (function (){var G__31944 = "div";
var G__31945 = ({"id": "about5", "className": "about"});
var G__31946 = "Voting is a natural right and you can vote on any submission or comment via trivote. There are three levels to the tri-vote, double-plus, plus, and minus.  These correlate roughly to the spectrum of 0-99 and eventually, after a threshold number of votes has been met, the dice will transform to a number likely landing between 30 and 99.";
return React.createElement(G__31944,G__31945,G__31946);
})();
var G__31930 = (function (){var G__31947 = "div";
var G__31948 = ({"id": "about6", "className": "about"});
var G__31949 = "We are helping to raise money for Fusion Research with Horne Technologies.  Fusion will bring us the pollution-free future rapidly into our presence.  Help humanity harness the power of the stars!  Donate today at ";
var G__31950 = (function (){var G__31951 = "a";
var G__31952 = ({"href": "/donate"});
var G__31953 = "nonforum.com/donate";
return React.createElement(G__31951,G__31952,G__31953);
})();
return React.createElement(G__31947,G__31948,G__31949,G__31950);
})();
var G__31931 = (function (){var G__31954 = "img";
var G__31955 = ({"src": "nonforum_flyre.png", "className": "flyer"});
return React.createElement(G__31954,G__31955);
})();
return React.createElement(G__31923,G__31924,G__31925,G__31926,G__31927,G__31928,G__31929,G__31930,G__31931);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,nesferado.client.show_fresh], null),"about-fields");
nesferado.client.non_buzz_placeholder = rum.core.build_defc((function (){
var G__31958 = "div";
var G__31959 = ({"className": "nonbuzz"});
var G__31960 = "nonforum";
return React.createElement(G__31958,G__31959,G__31960);
}),null,"non-buzz-placeholder");
nesferado.client.sponsored_message = rum.core.build_defcs((function (state){
var G__31963 = "div";
var G__31964 = ({"id": "spmsg"});
var G__31965 = "Help fund Horne Technologies in their next round of Fusion Research, a 5Tesla reactor ";
var G__31966 = (function (){var G__31967 = "a";
var G__31968 = ({"href": "donate"});
var G__31969 = "donate";
return React.createElement(G__31967,G__31968,G__31969);
})();
return React.createElement(G__31963,G__31964,G__31965,G__31966);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,nesferado.client.show_fresh], null),"sponsored-message");
nesferado.client.go_back_button = rum.core.build_defc((function (){
var active_state = "all";
var G__31970 = "div";
var G__31971 = ({"onClick": ((function (G__31970,active_state){
return (function (e){
e.stopPropagation();

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_current], null),"");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_curr_DASH_id], null),"");
});})(G__31970,active_state))
, "className": "goback"});
var G__31972 = "< Back to ";
var G__31973 = sablono.interpreter.interpret(active_state);
return React.createElement(G__31970,G__31971,G__31972,G__31973);
}),null,"go-back-button");
nesferado.client.input_fields = rum.core.build_defc((function (){
var attrs31974 = (nesferado.client.post_comment_input.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.post_comment_input.cljs$core$IFn$_invoke$arity$0() : nesferado.client.post_comment_input.call(null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs31974))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"inputs-contain"], null),attrs31974], 0))):({"id": "inputs-contain"})),((cljs.core.map_QMARK_(attrs31974))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs31974)], null)));
}),null,"input-fields");
nesferado.client.start = rum.core.build_defc((function (){
var logged_in = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rum.core.react(nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$logged_DASH_in], null));
var tv_current = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rum.core.react(nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_current], null));
var curr_comments = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rum.core.react(nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_comments], null));
var show_sidebar = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rum.core.react(nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$show_DASH_sidebar], null));
var curr_view = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rum.core.react(nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$current_DASH_view], null));
var temp__4655__auto___31976 = document.getElementById("output");
if(cljs.core.truth_(temp__4655__auto___31976)){
var target_el_31977 = temp__4655__auto___31976;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,logged_in)){
target_el_31977.classList = "hideMe";
} else {
target_el_31977.classList = "justMounted";
}
} else {
}

var attrs31975 = (nesferado.client.top_bar.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.top_bar.cljs$core$IFn$_invoke$arity$0() : nesferado.client.top_bar.call(null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs31975))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"maincontain"], null),attrs31975], 0))):({"id": "maincontain"})),((cljs.core.map_QMARK_(attrs31975))?new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,show_sidebar))?sablono.interpreter.interpret((nesferado.client.side_bar.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.side_bar.cljs$core$IFn$_invoke$arity$0() : nesferado.client.side_bar.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/feedback",curr_view))?sablono.interpreter.interpret((nesferado.client.send_feedback_fields.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.send_feedback_fields.cljs$core$IFn$_invoke$arity$0() : nesferado.client.send_feedback_fields.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/about",curr_view))?sablono.interpreter.interpret((nesferado.client.about_fields.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.about_fields.cljs$core$IFn$_invoke$arity$0() : nesferado.client.about_fields.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/email-public",curr_view))?sablono.interpreter.interpret((nesferado.client.edit_profile.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.edit_profile.cljs$core$IFn$_invoke$arity$0() : nesferado.client.edit_profile.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/profile",curr_view))?sablono.interpreter.interpret((nesferado.client.edit_profile.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.edit_profile.cljs$core$IFn$_invoke$arity$0() : nesferado.client.edit_profile.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/email-recovery",curr_view))?sablono.interpreter.interpret((nesferado.client.set_recovery_email.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.set_recovery_email.cljs$core$IFn$_invoke$arity$0() : nesferado.client.set_recovery_email.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/password-update",curr_view))?sablono.interpreter.interpret((nesferado.client.set_password.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.set_password.cljs$core$IFn$_invoke$arity$0() : nesferado.client.set_password.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/submit",curr_view))?sablono.interpreter.interpret((nesferado.client.post_input.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.post_input.cljs$core$IFn$_invoke$arity$0() : nesferado.client.post_input.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/donate",curr_view))?sablono.interpreter.interpret((nesferado.client.support_nf.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.support_nf.cljs$core$IFn$_invoke$arity$0() : nesferado.client.support_nf.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/fusion",curr_view))?sablono.interpreter.interpret((nesferado.client.support_nf.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.support_nf.cljs$core$IFn$_invoke$arity$0() : nesferado.client.support_nf.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/login",curr_view))?sablono.interpreter.interpret((nesferado.client.login_bar.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.login_bar.cljs$core$IFn$_invoke$arity$0() : nesferado.client.login_bar.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",curr_view))?((!(cljs.core.empty_QMARK_(tv_current)))?sablono.interpreter.interpret((nesferado.client.go_back_button.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.go_back_button.cljs$core$IFn$_invoke$arity$0() : nesferado.client.go_back_button.call(null))):null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",curr_view))?((!(cljs.core.empty_QMARK_(tv_current)))?sablono.interpreter.interpret((nesferado.client.sponsored_message.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.sponsored_message.cljs$core$IFn$_invoke$arity$0() : nesferado.client.sponsored_message.call(null))):null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",curr_view))?sablono.interpreter.interpret((nesferado.client.television.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.television.cljs$core$IFn$_invoke$arity$0() : nesferado.client.television.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",curr_view))?sablono.interpreter.interpret((nesferado.client.tv_cell.cljs$core$IFn$_invoke$arity$1 ? nesferado.client.tv_cell.cljs$core$IFn$_invoke$arity$1(tv_current) : nesferado.client.tv_cell.call(null,tv_current))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",curr_view))?((!(cljs.core.empty_QMARK_(tv_current)))?sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(nesferado.client.render_item,curr_comments)):null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",curr_view))?((!(cljs.core.empty_QMARK_(tv_current)))?sablono.interpreter.interpret((nesferado.client.input_fields.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.input_fields.cljs$core$IFn$_invoke$arity$0() : nesferado.client.input_fields.call(null))):null):null)], null):new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs31975),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,show_sidebar))?sablono.interpreter.interpret((nesferado.client.side_bar.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.side_bar.cljs$core$IFn$_invoke$arity$0() : nesferado.client.side_bar.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/feedback",curr_view))?sablono.interpreter.interpret((nesferado.client.send_feedback_fields.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.send_feedback_fields.cljs$core$IFn$_invoke$arity$0() : nesferado.client.send_feedback_fields.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/about",curr_view))?sablono.interpreter.interpret((nesferado.client.about_fields.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.about_fields.cljs$core$IFn$_invoke$arity$0() : nesferado.client.about_fields.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/email-public",curr_view))?sablono.interpreter.interpret((nesferado.client.edit_profile.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.edit_profile.cljs$core$IFn$_invoke$arity$0() : nesferado.client.edit_profile.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/profile",curr_view))?sablono.interpreter.interpret((nesferado.client.edit_profile.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.edit_profile.cljs$core$IFn$_invoke$arity$0() : nesferado.client.edit_profile.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/email-recovery",curr_view))?sablono.interpreter.interpret((nesferado.client.set_recovery_email.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.set_recovery_email.cljs$core$IFn$_invoke$arity$0() : nesferado.client.set_recovery_email.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/password-update",curr_view))?sablono.interpreter.interpret((nesferado.client.set_password.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.set_password.cljs$core$IFn$_invoke$arity$0() : nesferado.client.set_password.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/submit",curr_view))?sablono.interpreter.interpret((nesferado.client.post_input.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.post_input.cljs$core$IFn$_invoke$arity$0() : nesferado.client.post_input.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/donate",curr_view))?sablono.interpreter.interpret((nesferado.client.support_nf.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.support_nf.cljs$core$IFn$_invoke$arity$0() : nesferado.client.support_nf.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/fusion",curr_view))?sablono.interpreter.interpret((nesferado.client.support_nf.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.support_nf.cljs$core$IFn$_invoke$arity$0() : nesferado.client.support_nf.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/login",curr_view))?sablono.interpreter.interpret((nesferado.client.login_bar.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.login_bar.cljs$core$IFn$_invoke$arity$0() : nesferado.client.login_bar.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",curr_view))?((!(cljs.core.empty_QMARK_(tv_current)))?sablono.interpreter.interpret((nesferado.client.go_back_button.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.go_back_button.cljs$core$IFn$_invoke$arity$0() : nesferado.client.go_back_button.call(null))):null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",curr_view))?((!(cljs.core.empty_QMARK_(tv_current)))?sablono.interpreter.interpret((nesferado.client.sponsored_message.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.sponsored_message.cljs$core$IFn$_invoke$arity$0() : nesferado.client.sponsored_message.call(null))):null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",curr_view))?sablono.interpreter.interpret((nesferado.client.television.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.television.cljs$core$IFn$_invoke$arity$0() : nesferado.client.television.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",curr_view))?sablono.interpreter.interpret((nesferado.client.tv_cell.cljs$core$IFn$_invoke$arity$1 ? nesferado.client.tv_cell.cljs$core$IFn$_invoke$arity$1(tv_current) : nesferado.client.tv_cell.call(null,tv_current))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",curr_view))?((!(cljs.core.empty_QMARK_(tv_current)))?sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(nesferado.client.render_item,curr_comments)):null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",curr_view))?((!(cljs.core.empty_QMARK_(tv_current)))?sablono.interpreter.interpret((nesferado.client.input_fields.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.input_fields.cljs$core$IFn$_invoke$arity$0() : nesferado.client.input_fields.call(null))):null):null)], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"start");
rum.core.mount((nesferado.client.start.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.start.cljs$core$IFn$_invoke$arity$0() : nesferado.client.start.call(null)),document.getElementById("start"));
rum.core.mount((nesferado.client.footer.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.footer.cljs$core$IFn$_invoke$arity$0() : nesferado.client.footer.call(null)),document.getElementById("footing"));
nesferado.client.swap_rating_fn = (function nesferado$client$swap_rating_fn(p__31978,d){
var map__31987 = p__31978;
var map__31987__$1 = ((((!((map__31987 == null)))?((((map__31987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31987):map__31987);
var nf = map__31987__$1;
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31987__$1,cljs.core.cst$kw$blurbs);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nf,cljs.core.cst$kw$blurbs,cljs.core.vec((function (){var iter__7163__auto__ = ((function (map__31987,map__31987__$1,nf,v){
return (function nesferado$client$swap_rating_fn_$_iter__31989(s__31990){
return (new cljs.core.LazySeq(null,((function (map__31987,map__31987__$1,nf,v){
return (function (){
var s__31990__$1 = s__31990;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__31990__$1);
if(temp__4657__auto__){
var s__31990__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31990__$2)){
var c__7161__auto__ = cljs.core.chunk_first(s__31990__$2);
var size__7162__auto__ = cljs.core.count(c__7161__auto__);
var b__31992 = cljs.core.chunk_buffer(size__7162__auto__);
if((function (){var i__31991 = (0);
while(true){
if((i__31991 < size__7162__auto__)){
var entry = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7161__auto__,i__31991);
cljs.core.chunk_append(b__31992,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$bid.cljs$core$IFn$_invoke$arity$1(entry),cljs.core.cst$kw$bid.cljs$core$IFn$_invoke$arity$1(d)))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([entry,d], 0)):entry));

var G__31995 = (i__31991 + (1));
i__31991 = G__31995;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31992),nesferado$client$swap_rating_fn_$_iter__31989(cljs.core.chunk_rest(s__31990__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31992),null);
}
} else {
var entry = cljs.core.first(s__31990__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$bid.cljs$core$IFn$_invoke$arity$1(entry),cljs.core.cst$kw$bid.cljs$core$IFn$_invoke$arity$1(d)))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([entry,d], 0)):entry),nesferado$client$swap_rating_fn_$_iter__31989(cljs.core.rest(s__31990__$2)));
}
} else {
return null;
}
break;
}
});})(map__31987,map__31987__$1,nf,v))
,null,null));
});})(map__31987,map__31987__$1,nf,v))
;
return iter__7163__auto__(v);
})()));
});
nesferado.client.swap_rating_active_blurb = (function nesferado$client$swap_rating_active_blurb(p__31996,d){
var map__32005 = p__31996;
var map__32005__$1 = ((((!((map__32005 == null)))?((((map__32005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32005):map__32005);
var nf = map__32005__$1;
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32005__$1,cljs.core.cst$kw$nf);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nf,cljs.core.cst$kw$nf,cljs.core.vec((function (){var iter__7163__auto__ = ((function (map__32005,map__32005__$1,nf,v){
return (function nesferado$client$swap_rating_active_blurb_$_iter__32007(s__32008){
return (new cljs.core.LazySeq(null,((function (map__32005,map__32005__$1,nf,v){
return (function (){
var s__32008__$1 = s__32008;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__32008__$1);
if(temp__4657__auto__){
var s__32008__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32008__$2)){
var c__7161__auto__ = cljs.core.chunk_first(s__32008__$2);
var size__7162__auto__ = cljs.core.count(c__7161__auto__);
var b__32010 = cljs.core.chunk_buffer(size__7162__auto__);
if((function (){var i__32009 = (0);
while(true){
if((i__32009 < size__7162__auto__)){
var entry = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7161__auto__,i__32009);
cljs.core.chunk_append(b__32010,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$active_DASH_blurb.cljs$core$IFn$_invoke$arity$1(entry),cljs.core.cst$kw$bid.cljs$core$IFn$_invoke$arity$1(d)))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([entry,d], 0)):entry));

var G__32013 = (i__32009 + (1));
i__32009 = G__32013;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32010),nesferado$client$swap_rating_active_blurb_$_iter__32007(cljs.core.chunk_rest(s__32008__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32010),null);
}
} else {
var entry = cljs.core.first(s__32008__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$active_DASH_blurb.cljs$core$IFn$_invoke$arity$1(entry),cljs.core.cst$kw$bid.cljs$core$IFn$_invoke$arity$1(d)))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([entry,d], 0)):entry),nesferado$client$swap_rating_active_blurb_$_iter__32007(cljs.core.rest(s__32008__$2)));
}
} else {
return null;
}
break;
}
});})(map__32005,map__32005__$1,nf,v))
,null,null));
});})(map__32005,map__32005__$1,nf,v))
;
return iter__7163__auto__(v);
})()));
});
nesferado.client.ask_server_for_blurbs = (function nesferado$client$ask_server_for_blurbs(){
var G__32018 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clientsent_SLASH_req_DASH_all_DASH_blurbs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$can_DASH_i_DASH_please_DASH_has_DASH_the,"blurbs"], null)], null);
var G__32019 = (3000);
var G__32020 = ((function (G__32018,G__32019){
return (function (blurb_core){
if(cljs.core.truth_(taoensso.sente.cb_success_QMARK_(blurb_core))){
console.log("callback with blurbs rcevd");

console.log(":cs/rab ",blurb_core);

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(nesferado.client.tv_state,blurb_core) : cljs.core.reset_BANG_.call(null,nesferado.client.tv_state,blurb_core));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nesferado.client.tv_state,cljs.core.vec);

accountant.core.dispatch_current_BANG_();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nesferado.client.tv_state,((function (G__32018,G__32019){
return (function (p1__32014_SHARP_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ratings_DASH_total,p1__32014_SHARP_);
});})(G__32018,G__32019))
);
} else {
return null;
}
});})(G__32018,G__32019))
;
return (nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 ? nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(G__32018,G__32019,G__32020) : nesferado.client.chsk_send_BANG_.call(null,G__32018,G__32019,G__32020));
});
nesferado.client.ask_server_for_comments = (function nesferado$client$ask_server_for_comments(){
var G__32024 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clientsent_SLASH_req_DASH_all_DASH_comments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$can_DASH_i_DASH_please_DASH_has_DASH_the,"comments"], null)], null);
var G__32025 = (3000);
var G__32026 = ((function (G__32024,G__32025){
return (function (comments_core){
if(cljs.core.truth_(taoensso.sente.cb_success_QMARK_(comments_core))){
console.log("callback with comments rcevd");

console.log(":cs/rac ",comments_core);

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(nesferado.client.posts,comments_core) : cljs.core.reset_BANG_.call(null,nesferado.client.posts,comments_core));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nesferado.client.posts,cljs.core.vec);
} else {
return null;
}
});})(G__32024,G__32025))
;
return (nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 ? nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(G__32024,G__32025,G__32026) : nesferado.client.chsk_send_BANG_.call(null,G__32024,G__32025,G__32026));
});
nesferado.client.find_tv_item = (function nesferado$client$find_tv_item(pid){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nesferado.client.tv_state,cljs.core.vec);

var first_hit = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__32028_SHARP_,p2__32027_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pid,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p2__32027_SHARP_))){
return p1__32028_SHARP_;
} else {
return null;
}
}),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.tv_state) : cljs.core.deref.call(null,nesferado.client.tv_state))));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([first_hit], 0));

return first_hit;
});
nesferado.client.find_cm_item = (function nesferado$client$find_cm_item(pid){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nesferado.client.posts,cljs.core.vec);

var first_hit = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__32030_SHARP_,p2__32029_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pid,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p2__32029_SHARP_))){
return p1__32030_SHARP_;
} else {
return null;
}
}),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.posts) : cljs.core.deref.call(null,nesferado.client.posts))));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([first_hit], 0));

return first_hit;
});
if(typeof nesferado.client._event_msg_handler !== 'undefined'){
} else {
/**
 * Multimethod to handle Sente `event-msg`s
 */
nesferado.client._event_msg_handler = (function (){var method_table__7308__auto__ = (function (){var G__32031 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32031) : cljs.core.atom.call(null,G__32031));
})();
var prefer_table__7309__auto__ = (function (){var G__32032 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32032) : cljs.core.atom.call(null,G__32032));
})();
var method_cache__7310__auto__ = (function (){var G__32033 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32033) : cljs.core.atom.call(null,G__32033));
})();
var cached_hierarchy__7311__auto__ = (function (){var G__32034 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32034) : cljs.core.atom.call(null,G__32034));
})();
var hierarchy__7312__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("nesferado.client","-event-msg-handler"),cljs.core.cst$kw$id,cljs.core.cst$kw$default,hierarchy__7312__auto__,method_table__7308__auto__,prefer_table__7309__auto__,method_cache__7310__auto__,cached_hierarchy__7311__auto__));
})();
}
nesferado.client.event_msg_handler = (function nesferado$client$event_msg_handler(p__32035){
var map__32038 = p__32035;
var map__32038__$1 = ((((!((map__32038 == null)))?((((map__32038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32038):map__32038);
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32038__$1,cljs.core.cst$kw$_);
var __ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32038__$1,cljs.core.cst$kw$__);
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32038__$1,cljs.core.cst$kw$_QMARK_data);
console.log([cljs.core.str("&&"),cljs.core.str(_QMARK_data)].join(''));

console.log([cljs.core.str("&! "),cljs.core.str(cljs.core.first(_QMARK_data))].join(''));

var event_title = cljs.core.first(_QMARK_data);
var new_data = cljs.core.second(_QMARK_data);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,cljs.core.cst$kw$ever_DASH_opened_QMARK_.cljs$core$IFn$_invoke$arity$1(event_title))){
console.log("Hey I'm trying to get new data yo, since :ever-opened? is false");

nesferado.client.ask_server_for_blurbs();

return nesferado.client.ask_server_for_comments();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event_title,cljs.core.cst$kw$hello_SLASH_client)){
return console.log([cljs.core.str("&# "),cljs.core.str(new_data)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event_title,cljs.core.cst$kw$serversent_SLASH_blurb)){
console.log([cljs.core.str("&# "),cljs.core.str(new_data)].join(''));

console.log("adding new blurb to atom ..");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(nesferado.client.tv_state,cljs.core.conj,new_data);

return console.log("added new blurb to atom");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event_title,cljs.core.cst$kw$serversent_SLASH_password_DASH_update_DASH_yes)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$password_DASH_status], null),"Password changed successfully.");

return console.log("password updated");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event_title,cljs.core.cst$kw$serversent_SLASH_password_DASH_update_DASH_no)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$password_DASH_status], null),"Password not changed.");

return console.log("password not affected.");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event_title,cljs.core.cst$kw$serversent_SLASH_recovery_DASH_email_DASH_update_DASH_yes)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$recovery_DASH_email_DASH_status], null),"Recovery email changed successfully.");

return console.log("recovery email updated");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event_title,cljs.core.cst$kw$serversent_SLASH_recovery_DASH_email_DASH_update_DASH_no)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$recovery_DASH_email_DASH_status], null),"Recovery email not changed.");

return console.log("recovery email not affected.");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event_title,cljs.core.cst$kw$serversent_SLASH_comment)){
var new_comment_map = new_data;
console.log([cljs.core.str("&# "),cljs.core.str(new_comment_map)].join(''));

console.log(cljs.core.cst$kw$parent_DASH_id.cljs$core$IFn$_invoke$arity$1(new_comment_map)," parent-id is.");

console.log([cljs.core.str("pp z "),cljs.core.str(cljs.core.cst$kw$parent_DASH_id.cljs$core$IFn$_invoke$arity$1(new_comment_map))].join(''));

var pid = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(new_comment_map);
var parent_id = cljs.core.cst$kw$parent_DASH_id.cljs$core$IFn$_invoke$arity$1(new_comment_map);
var seek_tv_state = nesferado.client.find_tv_item(parent_id);
var seek_cm_state = nesferado.client.find_cm_item(parent_id);
console.log("adding new comment to atom...");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(nesferado.client.posts,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new_comment_map,cljs.core.cst$kw$ratings_DASH_total,(0),cljs.core.array_seq([cljs.core.cst$kw$number_DASH_of_DASH_ratings,(0),cljs.core.cst$kw$comments,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$id,pid], 0)));

console.log("added new comment to atom");

console.log("seek-tv ",seek_tv_state);

console.log("seek-cm ",seek_cm_state);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,seek_tv_state)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(nesferado.client.posts,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seek_cm_state,cljs.core.cst$kw$comments], null),cljs.core.conj,cljs.core.array_seq([pid], 0));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(nesferado.client.tv_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seek_tv_state,cljs.core.cst$kw$comments], null),cljs.core.conj,cljs.core.array_seq([pid], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_comments], null),cljs.core.conj,cljs.core.array_seq([pid], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event_title,cljs.core.cst$kw$serversent_SLASH_rating)){
console.log([cljs.core.str("rating update.. "),cljs.core.str(new_data)].join(''));

var ru_pid = cljs.core.cst$kw$pid.cljs$core$IFn$_invoke$arity$1(new_data);
var ru_ts = cljs.core.cst$kw$total_DASH_score.cljs$core$IFn$_invoke$arity$1(new_data);
var ru_nor = cljs.core.cst$kw$number_DASH_of_DASH_ratings.cljs$core$IFn$_invoke$arity$1(new_data);
var ru_map = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pid,ru_pid,cljs.core.cst$kw$total_DASH_score,ru_ts,cljs.core.cst$kw$number_DASH_of_DASH_ratings,ru_nor], null);
console.log([cljs.core.str(ru_pid),cljs.core.str(" "),cljs.core.str(ru_ts),cljs.core.str(" "),cljs.core.str(ru_nor)].join(''));

var seek_tv_state = nesferado.client.find_tv_item(ru_pid);
var seek_cm_state = nesferado.client.find_cm_item(ru_pid);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["seek-tv ",seek_tv_state], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["seek-cm ",seek_cm_state], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,seek_tv_state)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(nesferado.client.posts,cljs.core.update,seek_cm_state,cljs.core.assoc,cljs.core.array_seq([cljs.core.cst$kw$number_DASH_of_DASH_ratings,ru_nor,cljs.core.cst$kw$ratings_DASH_total,ru_ts], 0));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(nesferado.client.tv_state,cljs.core.update,seek_tv_state,cljs.core.assoc,cljs.core.array_seq([cljs.core.cst$kw$number_DASH_of_DASH_ratings,ru_nor,cljs.core.cst$kw$ratings_DASH_total,ru_ts], 0));
}
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
});
if(typeof nesferado.client.router_ !== 'undefined'){
} else {
nesferado.client.router_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
nesferado.client.stop_router_BANG_ = (function nesferado$client$stop_router_BANG_(){
var temp__4657__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.router_) : cljs.core.deref.call(null,nesferado.client.router_));
if(cljs.core.truth_(temp__4657__auto__)){
var stop_f = temp__4657__auto__;
return (stop_f.cljs$core$IFn$_invoke$arity$0 ? stop_f.cljs$core$IFn$_invoke$arity$0() : stop_f.call(null));
} else {
return null;
}
});
nesferado.client.start_router_BANG_ = (function nesferado$client$start_router_BANG_(){
nesferado.client.stop_router_BANG_();

var G__32042 = nesferado.client.router_;
var G__32043 = taoensso.sente.start_client_chsk_router_BANG_(nesferado.client.ch_chsk,nesferado.client.event_msg_handler);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32042,G__32043) : cljs.core.reset_BANG_.call(null,G__32042,G__32043));
});
nesferado.client.validate_email = (function nesferado$client$validate_email(email){
var pattern = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
var and__6371__auto__ = typeof email === 'string';
if(and__6371__auto__){
return cljs.core.re_matches(pattern,email);
} else {
return and__6371__auto__;
}
});
nesferado.client.auto_login = (function nesferado$client$auto_login(){
nesferado.client.__GT_output_BANG_("Attempting auto-login ...");

var G__32049 = "/check-login";
var G__32050 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$timeout_DASH_ms,(7000),cljs.core.cst$kw$headers,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$X_DASH_CSRF_DASH_Token,cljs.core.cst$kw$csrf_DASH_token.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.chsk_state) : cljs.core.deref.call(null,nesferado.client.chsk_state)))], null),cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$uid,nesferado.client.get_item(cljs.core.cst$kw$uid),cljs.core.cst$kw$auth_DASH_token,nesferado.client.get_item(cljs.core.cst$kw$auth_DASH_key),cljs.core.cst$kw$login_DASH_time,nesferado.client.get_item(cljs.core.cst$kw$login_DASH_time)], null),cljs.core.cst$kw$type,cljs.core.cst$kw$text], null);
var G__32051 = ((function (G__32049,G__32050){
return (function (ajax_resp){
nesferado.client.__GT_output_BANG_([cljs.core.str("Auto-login response: "),cljs.core.str(ajax_resp)].join(''));

var map__32052 = ajax_resp;
var map__32052__$1 = ((((!((map__32052 == null)))?((((map__32052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32052):map__32052);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32052__$1,cljs.core.cst$kw$success_QMARK_);
var _QMARK_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32052__$1,cljs.core.cst$kw$_QMARK_status);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32052__$1,cljs.core.cst$kw$_QMARK_error);
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32052__$1,cljs.core.cst$kw$_QMARK_content);
var _QMARK_content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32052__$1,cljs.core.cst$kw$_QMARK_content_DASH_type);
var http_status = cljs.core.cst$kw$_QMARK_status.cljs$core$IFn$_invoke$arity$1(ajax_resp);
var auto_login_successful_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),http_status);
var stuff = cljs.reader.read_string(_QMARK_content);
if(!(auto_login_successful_QMARK_)){
nesferado.client.__GT_output_BANG_("Auto-login failed");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$logged_DASH_in], null),false);
} else {
nesferado.client.__GT_output_BANG_("Auto-login success!");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$token], null),nesferado.client.get_item(cljs.core.cst$kw$auth_DASH_key));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$login_DASH_time], null),nesferado.client.get_item(cljs.core.cst$kw$login_DASH_time));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$logged_DASH_in], null),true);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$current_DASH_user], null),nesferado.client.get_item(cljs.core.cst$kw$uid));

return taoensso.sente.chsk_reconnect_BANG_(nesferado.client.chsk);
}
});})(G__32049,G__32050))
;
return (taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__32049,G__32050,G__32051) : taoensso.sente.ajax_lite.call(null,G__32049,G__32050,G__32051));
});
window.addEventListener("DOMContentLoaded",(function (){
if(!(cljs.core.empty_QMARK_(nesferado.client.get_item(cljs.core.cst$kw$auth_DASH_key)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$token], null),nesferado.client.get_item(cljs.core.cst$kw$auth_DASH_key));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$login_DASH_time], null),nesferado.client.get_item(cljs.core.cst$kw$login_DASH_time));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$current_DASH_user], null),nesferado.client.get_item(cljs.core.cst$kw$uid));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$logged_DASH_in], null),true);

return nesferado.client.auto_login;
} else {
return null;
}
}));
nesferado.client.start_BANG_ = (function nesferado$client$start_BANG_(){
return nesferado.client.start_router_BANG_();
});
if(typeof nesferado.client._start_once !== 'undefined'){
} else {
nesferado.client._start_once = nesferado.client.start_BANG_();
}
