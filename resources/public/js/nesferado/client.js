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
var rand_chsk_type_43686 = (((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() >= 0.5))?cljs.core.cst$kw$ajax:cljs.core.cst$kw$auto);
var packer_43687 = cljs.core.cst$kw$edn;
var map__43684_43688 = taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic("/chsk",cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,rand_chsk_type_43686,cljs.core.cst$kw$packer,packer_43687], null)], 0));
var map__43684_43689__$1 = ((((!((map__43684_43688 == null)))?((((map__43684_43688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43684_43688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43684_43688):map__43684_43688);
var chsk_43690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43684_43689__$1,cljs.core.cst$kw$chsk);
var ch_recv_43691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43684_43689__$1,cljs.core.cst$kw$ch_DASH_recv);
var send_fn_43692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43684_43689__$1,cljs.core.cst$kw$send_DASH_fn);
var state_43693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43684_43689__$1,cljs.core.cst$kw$state);
nesferado.client.chsk = chsk_43690;

nesferado.client.ch_chsk = ch_recv_43691;

nesferado.client.chsk_send_BANG_ = send_fn_43692;

nesferado.client.chsk_state = state_43693;
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
var temp__4657__auto___43695 = document.getElementById("btn1");
if(cljs.core.truth_(temp__4657__auto___43695)){
var target_el_43696 = temp__4657__auto___43695;
target_el_43696.addEventListener("click",((function (target_el_43696,temp__4657__auto___43695){
return (function (ev){
nesferado.client.__GT_output_BANG_("Button 1 was clicked (won't receive any reply from server)");

var G__43694 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clientsent_SLASH_ping], null);
return (nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__43694) : nesferado.client.chsk_send_BANG_.call(null,G__43694));
});})(target_el_43696,temp__4657__auto___43695))
);
} else {
}
var temp__4657__auto___43700 = document.getElementById("btn2");
if(cljs.core.truth_(temp__4657__auto___43700)){
var target_el_43701 = temp__4657__auto___43700;
target_el_43701.addEventListener("click",((function (target_el_43701,temp__4657__auto___43700){
return (function (ev){
nesferado.client.__GT_output_BANG_("Button 2 was clicked (will receive reply from server)");

var G__43697 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example_SLASH_button2,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$had_DASH_a_DASH_callback_QMARK_,"indeed"], null)], null);
var G__43698 = (5000);
var G__43699 = ((function (G__43697,G__43698,target_el_43701,temp__4657__auto___43700){
return (function (cb_reply){
return nesferado.client.__GT_output_BANG_([cljs.core.str("Callback reply: "),cljs.core.str(cb_reply)].join(''));
});})(G__43697,G__43698,target_el_43701,temp__4657__auto___43700))
;
return (nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 ? nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(G__43697,G__43698,G__43699) : nesferado.client.chsk_send_BANG_.call(null,G__43697,G__43698,G__43699));
});})(target_el_43701,temp__4657__auto___43700))
);
} else {
}
var temp__4657__auto___43703 = document.getElementById("btn3");
if(cljs.core.truth_(temp__4657__auto___43703)){
var target_el_43704 = temp__4657__auto___43703;
target_el_43704.addEventListener("click",((function (target_el_43704,temp__4657__auto___43703){
return (function (ev){
nesferado.client.__GT_output_BANG_("Button 3 was clicked (will ask server to test rapid async push)");

var G__43702 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example_SLASH_test_DASH_rapid_DASH_push], null);
return (nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__43702) : nesferado.client.chsk_send_BANG_.call(null,G__43702));
});})(target_el_43704,temp__4657__auto___43703))
);
} else {
}
var temp__4657__auto___43708 = document.getElementById("btn4");
if(cljs.core.truth_(temp__4657__auto___43708)){
var target_el_43709 = temp__4657__auto___43708;
target_el_43709.addEventListener("click",((function (target_el_43709,temp__4657__auto___43708){
return (function (ev){
nesferado.client.__GT_output_BANG_("Button 4 was clicked (will toggle async broadcast loop)");

var G__43705 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example_SLASH_toggle_DASH_broadcast], null);
var G__43706 = (5000);
var G__43707 = ((function (G__43705,G__43706,target_el_43709,temp__4657__auto___43708){
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
});})(G__43705,G__43706,target_el_43709,temp__4657__auto___43708))
;
return (nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 ? nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(G__43705,G__43706,G__43707) : nesferado.client.chsk_send_BANG_.call(null,G__43705,G__43706,G__43707));
});})(target_el_43709,temp__4657__auto___43708))
);
} else {
}
var temp__4657__auto___43710 = document.getElementById("btn5");
if(cljs.core.truth_(temp__4657__auto___43710)){
var target_el_43711 = temp__4657__auto___43710;
target_el_43711.addEventListener("click",((function (target_el_43711,temp__4657__auto___43710){
return (function (ev){
nesferado.client.__GT_output_BANG_("Disconnecting");

return taoensso.sente.chsk_disconnect_BANG_(nesferado.client.chsk);
});})(target_el_43711,temp__4657__auto___43710))
);
} else {
}
var temp__4657__auto___43712 = document.getElementById("btn6");
if(cljs.core.truth_(temp__4657__auto___43712)){
var target_el_43713 = temp__4657__auto___43712;
target_el_43713.addEventListener("click",((function (target_el_43713,temp__4657__auto___43712){
return (function (ev){
nesferado.client.__GT_output_BANG_("Reconnecting");

return taoensso.sente.chsk_reconnect_BANG_(nesferado.client.chsk);
});})(target_el_43713,temp__4657__auto___43712))
);
} else {
}
nesferado.client.tv_state = (function (){var G__43714 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__43714) : cljs.core.atom.call(null,G__43714));
})();
nesferado.client.input_state = (function (){var G__43715 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inputs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$tv_DASH_curr_DASH_id,cljs.core.cst$kw$change_DASH_pass_DASH_old_DASH_pw,cljs.core.cst$kw$edit_DASH_display_DASH_name,cljs.core.cst$kw$tv_DASH_contents,cljs.core.cst$kw$set_DASH_email,cljs.core.cst$kw$selected_DASH_child,cljs.core.cst$kw$current_DASH_user,cljs.core.cst$kw$password_DASH_status,cljs.core.cst$kw$tv_DASH_comments,cljs.core.cst$kw$login_DASH_time,cljs.core.cst$kw$current_DASH_email,cljs.core.cst$kw$password,cljs.core.cst$kw$invite_DASH_friend_DASH_input,cljs.core.cst$kw$username,cljs.core.cst$kw$send_DASH_feedback_DASH_extra,cljs.core.cst$kw$tv_DASH_posted_DASH_by,cljs.core.cst$kw$title,cljs.core.cst$kw$create_DASH_password,cljs.core.cst$kw$create_DASH_password2,cljs.core.cst$kw$token,cljs.core.cst$kw$bio,cljs.core.cst$kw$send_DASH_feedback_DASH_input,cljs.core.cst$kw$change_DASH_pass_DASH_new_DASH_pw2,cljs.core.cst$kw$link,cljs.core.cst$kw$change_DASH_pass_DASH_new_DASH_pw,cljs.core.cst$kw$subtitle,cljs.core.cst$kw$comment,cljs.core.cst$kw$recovery_DASH_email,cljs.core.cst$kw$create_DASH_username,cljs.core.cst$kw$logged_DASH_in,cljs.core.cst$kw$contents,cljs.core.cst$kw$tv_DASH_title,cljs.core.cst$kw$recovery_DASH_email_DASH_status,cljs.core.cst$kw$tv_DASH_current,cljs.core.cst$kw$tv_DASH_priority,cljs.core.cst$kw$current_DASH_view,cljs.core.cst$kw$selected_DASH_parent,cljs.core.cst$kw$tv_DASH_timestamp,cljs.core.cst$kw$tv_DASH_link],["","","","","",cljs.core.PersistentVector.EMPTY,"","",cljs.core.PersistentVector.EMPTY,"","","","","","","","","","","","","","","","","","","","",false,"","","",cljs.core.PersistentArrayMap.EMPTY,(4),"/",(0),(808),""])], null)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__43715) : cljs.core.atom.call(null,G__43715));
})();
nesferado.client.posts = (function (){var G__43716 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__43716) : cljs.core.atom.call(null,G__43716));
})();
nesferado.client.ratings = (function (){var G__43717 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__43717) : cljs.core.atom.call(null,G__43717));
})();
nesferado.client.nf_comment = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1("") : cljs.core.atom.call(null,""));
nesferado.client.nf_chat_input = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1("") : cljs.core.atom.call(null,""));
nesferado.client.nf_chat_messages = (function (){var G__43718 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__43718) : cljs.core.atom.call(null,G__43718));
})();
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
var post = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__43719_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(post_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__43719_SHARP_));
}),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.posts) : cljs.core.deref.call(null,nesferado.client.posts))));
return post;
});
nesferado.client.sort_the_comments_of_BANG_ = (function nesferado$client$sort_the_comments_of_BANG_(post_id){
var sort_me_id = post_id;
var spot = cljs.core.first(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (sort_me_id){
return (function (p1__43720_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__43720_SHARP_)),sort_me_id);
});})(sort_me_id))
,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.posts) : cljs.core.deref.call(null,nesferado.client.posts))))));
var sorted_comments = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(((function (sort_me_id,spot){
return (function (p1__43721_SHARP_){
return nesferado.client.get_rating(cljs.core.cst$kw$ratings_DASH_total.cljs$core$IFn$_invoke$arity$1(p1__43721_SHARP_),cljs.core.cst$kw$number_DASH_of_DASH_ratings.cljs$core$IFn$_invoke$arity$1(p1__43721_SHARP_));
});})(sort_me_id,spot))
,cljs.core._LT_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(nesferado.client.get_post_by_id,cljs.core.cst$kw$comments.cljs$core$IFn$_invoke$arity$1(nesferado.client.get_post_by_id(sort_me_id)))));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.posts,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spot,cljs.core.cst$kw$comments], null),sorted_comments);
});
nesferado.client.return_comment_ids = (function nesferado$client$return_comment_ids(post_id){
var cids = cljs.core.cst$kw$comments.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__43722_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(post_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__43722_SHARP_));
}),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.posts) : cljs.core.deref.call(null,nesferado.client.posts)))));
var posts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(nesferado.client.get_post_by_id,cids);
var post_collection = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (cids,posts){
return (function (p1__43723_SHARP_){
return nesferado.client.get_rating(cljs.core.cst$kw$ratings_DASH_total.cljs$core$IFn$_invoke$arity$1(p1__43723_SHARP_),cljs.core.cst$kw$number_DASH_of_DASH_ratings.cljs$core$IFn$_invoke$arity$1(p1__43723_SHARP_));
});})(cids,posts))
,posts);
var spc = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,post_collection);
return spc;
});
nesferado.client.return_comment_ids_of_tv = (function nesferado$client$return_comment_ids_of_tv(tile_id){
var cids = cljs.core.cst$kw$comments.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__43724_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tile_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__43724_SHARP_));
}),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.tv_state) : cljs.core.deref.call(null,nesferado.client.tv_state)))));
var posts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(nesferado.client.get_post_by_id,cids);
var post_collection = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (cids,posts){
return (function (p1__43725_SHARP_){
return nesferado.client.get_rating(cljs.core.cst$kw$ratings_DASH_total.cljs$core$IFn$_invoke$arity$1(p1__43725_SHARP_),cljs.core.cst$kw$number_DASH_of_DASH_ratings.cljs$core$IFn$_invoke$arity$1(p1__43725_SHARP_));
});})(cids,posts))
,posts);
var spc = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,post_collection);
return spc;
});
nesferado.client.count_the_comments_of = (function nesferado$client$count_the_comments_of(tile_id){
var cids = cljs.core.cst$kw$comments.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__43726_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tile_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__43726_SHARP_));
}),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.tv_state) : cljs.core.deref.call(null,nesferado.client.tv_state)))));
var posts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(nesferado.client.get_post_by_id,cids);
var spc = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,posts);
var comm_res = cljs.core.map.cljs$core$IFn$_invoke$arity$2(nesferado.client.return_comment_ids,spc);
return cljs.core.count(comm_res);
});
accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$nav_DASH_handler,(function (path){
if((clojure.string.starts_with_QMARK_(path,"?nfid")) || (clojure.string.starts_with_QMARK_(path,"/?nfid"))){
var url_params = nesferado.client.get_url_params();
var nfid = cljs.reader.parse_int(cljs.core.get.cljs$core$IFn$_invoke$arity$2(url_params,"nfid"));
var td = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (url_params,nfid){
return (function (p1__43727_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nfid,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__43727_SHARP_));
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

var G__43733 = "/create-account";
var G__43734 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$headers,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$X_DASH_CSRF_DASH_Token,cljs.core.cst$kw$csrf_DASH_token.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.chsk_state) : cljs.core.deref.call(null,nesferado.client.chsk_state)))], null),cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$user_DASH_id,[cljs.core.str(user_id)].join(''),cljs.core.cst$kw$password,[cljs.core.str(pw)].join(''),cljs.core.cst$kw$password2,[cljs.core.str(pw2)].join('')], null),cljs.core.cst$kw$type,cljs.core.cst$kw$text], null);
var G__43735 = ((function (G__43733,G__43734){
return (function (ajax_resp){
nesferado.client.__GT_output_BANG_([cljs.core.str("Account creation response: "),cljs.core.str(ajax_resp)].join(''));

var map__43736 = ajax_resp;
var map__43736__$1 = ((((!((map__43736 == null)))?((((map__43736.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43736.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43736):map__43736);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43736__$1,cljs.core.cst$kw$success_QMARK_);
var _QMARK_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43736__$1,cljs.core.cst$kw$_QMARK_status);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43736__$1,cljs.core.cst$kw$_QMARK_error);
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43736__$1,cljs.core.cst$kw$_QMARK_content);
var _QMARK_content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43736__$1,cljs.core.cst$kw$_QMARK_content_DASH_type);
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

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/");

return taoensso.sente.chsk_reconnect_BANG_(nesferado.client.chsk);
}
});})(G__43733,G__43734))
;
return (taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__43733,G__43734,G__43735) : taoensso.sente.ajax_lite.call(null,G__43733,G__43734,G__43735));
});
nesferado.client.try_login = (function nesferado$client$try_login(username,pw){
if(clojure.string.blank_QMARK_(username)){
return nesferado.client.__GT_output_BANG_("Please enter a user-id first");
} else {
nesferado.client.__GT_output_BANG_([cljs.core.str("Logging in with username "),cljs.core.str(username)].join(''));

var G__43743 = "/login";
var G__43744 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$timeout_DASH_ms,(7000),cljs.core.cst$kw$headers,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$X_DASH_CSRF_DASH_Token,cljs.core.cst$kw$csrf_DASH_token.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.chsk_state) : cljs.core.deref.call(null,nesferado.client.chsk_state)))], null),cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$user_DASH_id,[cljs.core.str(username)].join(''),cljs.core.cst$kw$password,[cljs.core.str(pw)].join('')], null),cljs.core.cst$kw$resp_DASH_type,cljs.core.cst$kw$text], null);
var G__43745 = ((function (G__43743,G__43744){
return (function (ajax_resp){
var map__43746 = ajax_resp;
var map__43746__$1 = ((((!((map__43746 == null)))?((((map__43746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43746):map__43746);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43746__$1,cljs.core.cst$kw$success_QMARK_);
var _QMARK_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43746__$1,cljs.core.cst$kw$_QMARK_status);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43746__$1,cljs.core.cst$kw$_QMARK_error);
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43746__$1,cljs.core.cst$kw$_QMARK_content);
var _QMARK_content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43746__$1,cljs.core.cst$kw$_QMARK_content_DASH_type);
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

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/");

return taoensso.sente.chsk_reconnect_BANG_(nesferado.client.chsk);
}
});})(G__43743,G__43744))
;
return (taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__43743,G__43744,G__43745) : taoensso.sente.ajax_lite.call(null,G__43743,G__43744,G__43745));
}
});
nesferado.client.write_rating_BANG_ = (function nesferado$client$write_rating_BANG_(rating,pid){
var G__43749 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clientsent_SLASH_rating,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pid,pid,cljs.core.cst$kw$uid,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$current_DASH_user], null)),cljs.core.cst$kw$rating,rating], null)], null);
return (nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__43749) : nesferado.client.chsk_send_BANG_.call(null,G__43749));
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
var comp_43750 = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
var dom_node_43751 = ReactDOM.findDOMNode(comp_43750);
dom_node_43751.classList = "justMounted";

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
return (function (p1__43752_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pid,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__43752_SHARP_));
});})(post_coll,input_coll,cids,__,local_atom))
,post_coll));
var nor_nospost = cljs.core.cst$kw$number_DASH_of_DASH_ratings.cljs$core$IFn$_invoke$arity$1(noc_post);
var rating = nesferado.client.get_rating_com(cljs.core.cst$kw$ratings_DASH_total.cljs$core$IFn$_invoke$arity$1(noc_post),nor_nospost);
var G__43758 = "div";
var G__43759 = ({"id": pid, "className": "nocomments genpost"});
var G__43760 = (function (){var G__43761 = "div";
var G__43762 = ({"onClick": ((function (G__43761,G__43758,G__43759,noc_post,nor_nospost,rating,post_coll,input_coll,cids,__,local_atom){
return (function (e){
console.log("Freshly selected: ",pid);

e.stopPropagation();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$selected_DASH_parent], null),pid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$selected_DASH_child], null),nesferado.client.return_comment_ids(pid));
});})(G__43761,G__43758,G__43759,noc_post,nor_nospost,rating,post_coll,input_coll,cids,__,local_atom))
, "className": "padleft"});
var G__43763 = (function (){var G__43765 = "div";
var G__43766 = ({"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-contents","genpost",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pid,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(input_coll,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$selected_DASH_parent], null))))?"selectedParent":(cljs.core.truth_(cljs.core.some(((function (G__43765,G__43761,G__43762,G__43758,G__43759,noc_post,nor_nospost,rating,post_coll,input_coll,cids,__,local_atom){
return (function (p1__43753_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__43753_SHARP_,pid);
});})(G__43765,G__43761,G__43762,G__43758,G__43759,noc_post,nor_nospost,rating,post_coll,input_coll,cids,__,local_atom))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(input_coll,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$selected_DASH_child], null))))?"selectedChild":null))], null))});
var G__43767 = sablono.interpreter.interpret(cljs.core.cst$kw$contents.cljs$core$IFn$_invoke$arity$1(noc_post));
var G__43768 = (function (){var attrs43764 = cljs.core.cst$kw$author.cljs$core$IFn$_invoke$arity$1(noc_post);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs43764))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-author"], null)], null),attrs43764], 0))):({"className": "item-author"})),((cljs.core.map_QMARK_(attrs43764))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43764)], null)));
})();
var G__43769 = (function (){var G__43770 = "div";
var G__43771 = ({"className": "rate"});
var G__43772 = (function (){var G__43776 = "div";
var G__43777 = ({"onClick": ((function (G__43776,G__43770,G__43771,G__43765,G__43766,G__43767,G__43768,G__43761,G__43762,G__43758,G__43759,noc_post,nor_nospost,rating,post_coll,input_coll,cids,__,local_atom){
return (function (e){
return nesferado.client.rate(cljs.core.cst$kw$double_DASH_plus,pid);
});})(G__43776,G__43770,G__43771,G__43765,G__43766,G__43767,G__43768,G__43761,G__43762,G__43758,G__43759,noc_post,nor_nospost,rating,post_coll,input_coll,cids,__,local_atom))
, "className": "item-rate-doubleplus"});
var G__43778 = "";
return React.createElement(G__43776,G__43777,G__43778);
})();
var G__43773 = (function (){var G__43779 = "div";
var G__43780 = ({"onClick": ((function (G__43779,G__43770,G__43771,G__43772,G__43765,G__43766,G__43767,G__43768,G__43761,G__43762,G__43758,G__43759,noc_post,nor_nospost,rating,post_coll,input_coll,cids,__,local_atom){
return (function (e){
return nesferado.client.rate(cljs.core.cst$kw$plus,pid);
});})(G__43779,G__43770,G__43771,G__43772,G__43765,G__43766,G__43767,G__43768,G__43761,G__43762,G__43758,G__43759,noc_post,nor_nospost,rating,post_coll,input_coll,cids,__,local_atom))
, "className": "item-rate-plus"});
var G__43781 = "";
return React.createElement(G__43779,G__43780,G__43781);
})();
var G__43774 = (function (){var G__43782 = "div";
var G__43783 = ({"onClick": ((function (G__43782,G__43770,G__43771,G__43772,G__43773,G__43765,G__43766,G__43767,G__43768,G__43761,G__43762,G__43758,G__43759,noc_post,nor_nospost,rating,post_coll,input_coll,cids,__,local_atom){
return (function (e){
return nesferado.client.rate(cljs.core.cst$kw$minus,pid);
});})(G__43782,G__43770,G__43771,G__43772,G__43773,G__43765,G__43766,G__43767,G__43768,G__43761,G__43762,G__43758,G__43759,noc_post,nor_nospost,rating,post_coll,input_coll,cids,__,local_atom))
, "className": "item-rate-minus"});
var G__43784 = "";
return React.createElement(G__43782,G__43783,G__43784);
})();
var G__43775 = (function (){var G__43785 = "div";
var G__43786 = ({"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-rating",(((nor_nospost < (3)))?"rollthedice":"numerals")], null))});
var G__43787 = sablono.interpreter.interpret(rating);
return React.createElement(G__43785,G__43786,G__43787);
})();
return React.createElement(G__43770,G__43771,G__43772,G__43773,G__43774,G__43775);
})();
return React.createElement(G__43765,G__43766,G__43767,G__43768,G__43769);
})();
return React.createElement(G__43761,G__43762,G__43763);
})();
return React.createElement(G__43758,G__43759,G__43760);
} else {
var com_post = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (post_coll,input_coll,cids,__,local_atom){
return (function (p1__43754_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pid,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__43754_SHARP_));
});})(post_coll,input_coll,cids,__,local_atom))
,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (post_coll,input_coll,cids,__,local_atom){
return (function (p1__43755_SHARP_){
return nesferado.client.get_rating(cljs.core.cst$kw$ratings_DASH_total.cljs$core$IFn$_invoke$arity$1(p1__43755_SHARP_),cljs.core.cst$kw$number_DASH_of_DASH_ratings.cljs$core$IFn$_invoke$arity$1(p1__43755_SHARP_));
});})(post_coll,input_coll,cids,__,local_atom))
,post_coll)));
var nor_compost = cljs.core.cst$kw$number_DASH_of_DASH_ratings.cljs$core$IFn$_invoke$arity$1(com_post);
var com_rating = nesferado.client.get_rating_com(cljs.core.cst$kw$ratings_DASH_total.cljs$core$IFn$_invoke$arity$1(com_post),nor_compost);
var G__43788 = "div";
var G__43789 = ({"id": pid, "className": "hascomments"});
var G__43790 = (function (){var G__43791 = "div";
var G__43792 = ({"onClick": ((function (G__43791,G__43788,G__43789,com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom){
return (function (e){
console.log("Freshly selected: ",pid);

e.stopPropagation();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$selected_DASH_parent], null),pid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$selected_DASH_child], null),nesferado.client.return_comment_ids(pid));
});})(G__43791,G__43788,G__43789,com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom))
, "className": "padleft"});
var G__43793 = (function (){var G__43797 = "div";
var G__43798 = ({"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-contents","genpost",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pid,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(input_coll,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$selected_DASH_parent], null))))?"selectedParent":(cljs.core.truth_(cljs.core.some(((function (G__43797,G__43791,G__43792,G__43788,G__43789,com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom){
return (function (p1__43756_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__43756_SHARP_,pid);
});})(G__43797,G__43791,G__43792,G__43788,G__43789,com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(input_coll,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$selected_DASH_child], null))))?"selectedChild":null))], null))});
var G__43799 = sablono.interpreter.interpret(cljs.core.cst$kw$contents.cljs$core$IFn$_invoke$arity$1(com_post));
var G__43800 = (function (){var attrs43796 = cljs.core.cst$kw$author.cljs$core$IFn$_invoke$arity$1(com_post);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs43796))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-author"], null)], null),attrs43796], 0))):({"className": "item-author"})),((cljs.core.map_QMARK_(attrs43796))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43796)], null)));
})();
var G__43801 = (function (){var G__43802 = "div";
var G__43803 = ({"className": "rate"});
var G__43804 = (function (){var G__43808 = "div";
var G__43809 = ({"onClick": ((function (G__43808,G__43802,G__43803,G__43797,G__43798,G__43799,G__43800,G__43791,G__43792,G__43788,G__43789,com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom){
return (function (e){
return nesferado.client.rate(cljs.core.cst$kw$double_DASH_plus,pid);
});})(G__43808,G__43802,G__43803,G__43797,G__43798,G__43799,G__43800,G__43791,G__43792,G__43788,G__43789,com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom))
, "className": "item-rate-doubleplus"});
var G__43810 = "";
return React.createElement(G__43808,G__43809,G__43810);
})();
var G__43805 = (function (){var G__43811 = "div";
var G__43812 = ({"onClick": ((function (G__43811,G__43802,G__43803,G__43804,G__43797,G__43798,G__43799,G__43800,G__43791,G__43792,G__43788,G__43789,com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom){
return (function (e){
return nesferado.client.rate(cljs.core.cst$kw$plus,pid);
});})(G__43811,G__43802,G__43803,G__43804,G__43797,G__43798,G__43799,G__43800,G__43791,G__43792,G__43788,G__43789,com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom))
, "className": "item-rate-plus"});
var G__43813 = "";
return React.createElement(G__43811,G__43812,G__43813);
})();
var G__43806 = (function (){var G__43814 = "div";
var G__43815 = ({"onClick": ((function (G__43814,G__43802,G__43803,G__43804,G__43805,G__43797,G__43798,G__43799,G__43800,G__43791,G__43792,G__43788,G__43789,com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom){
return (function (e){
return nesferado.client.rate(cljs.core.cst$kw$minus,pid);
});})(G__43814,G__43802,G__43803,G__43804,G__43805,G__43797,G__43798,G__43799,G__43800,G__43791,G__43792,G__43788,G__43789,com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom))
, "className": "item-rate-minus"});
var G__43816 = "";
return React.createElement(G__43814,G__43815,G__43816);
})();
var G__43807 = (function (){var G__43817 = "div";
var G__43818 = ({"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-rating",(((nor_compost < (3)))?"rollthedice":"numerals")], null))});
var G__43819 = sablono.interpreter.interpret(com_rating);
return React.createElement(G__43817,G__43818,G__43819);
})();
return React.createElement(G__43802,G__43803,G__43804,G__43805,G__43806,G__43807);
})();
return React.createElement(G__43797,G__43798,G__43799,G__43800,G__43801);
})();
var G__43794 = (function (){var G__43820 = "button";
var G__43821 = ({"onClick": ((function (G__43820,G__43791,G__43792,G__43793,G__43788,G__43789,com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom){
return (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(local_atom,((function (G__43820,G__43791,G__43792,G__43793,G__43788,G__43789,com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom){
return (function (p1__43757_SHARP_){
return ((-1) * p1__43757_SHARP_);
});})(G__43820,G__43791,G__43792,G__43793,G__43788,G__43789,com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom))
);
});})(G__43820,G__43791,G__43792,G__43793,G__43788,G__43789,com_post,nor_compost,com_rating,post_coll,input_coll,cids,__,local_atom))
, "className": "commentog"});
var G__43822 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(local_atom) : cljs.core.deref.call(null,local_atom)),(-1)))?"hide":"show");
return React.createElement(G__43820,G__43821,G__43822);
})();
var G__43795 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(local_atom) : cljs.core.deref.call(null,local_atom)),(-1)))?sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(nesferado.client.render_item,cids)):null);
return React.createElement(G__43791,G__43792,G__43793,G__43794,G__43795);
})();
return React.createElement(G__43788,G__43789,G__43790);
}
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2((-1),cljs.core.cst$kw$nesferado$client_SLASH_hidecomments),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key_DASH_fn,(function (state,pid){
return [cljs.core.str(pid),cljs.core.str(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nesferado.client.y,cljs.core.inc))].join('');
})], null),nesferado.client.show_fresh], null),"render-item");
nesferado.client.send_feedback_fields = rum.core.build_defcs((function (state){
var G__43823 = "form";
var G__43824 = ({"id": "sendfeedbackform"});
var G__43825 = sablono.interpreter.create_element("textarea",({"id": "sendfeedbackinput", "placeholder": "Send us some feedback, suggestions, comments, concerns.", "name": "feedback", "value": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$send_DASH_feedback_DASH_input], null)), "onChange": ((function (G__43823,G__43824){
return (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$send_DASH_feedback_DASH_input], null),e.target.value);
});})(G__43823,G__43824))
, "className": "fullwidth"}));
var G__43826 = (function (){var G__43827 = "button";
var G__43828 = ({"id": "sfsubmit", "type": "button", "onClick": ((function (G__43827,G__43823,G__43824,G__43825){
return (function (e){
var feedback = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$send_DASH_feedback_DASH_input], null));
console.log("send feedback button pressed");

var G__43830_43831 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clientsent_SLASH_feedback,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$feedback,feedback], null)], null);
(nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__43830_43831) : nesferado.client.chsk_send_BANG_.call(null,G__43830_43831));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$send_DASH_feedback_DASH_input], null),"");
});})(G__43827,G__43823,G__43824,G__43825))
, "className": "fullwidth"});
var G__43829 = "send feedback";
return React.createElement(G__43827,G__43828,G__43829);
})();
return React.createElement(G__43823,G__43824,G__43825,G__43826);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,nesferado.client.show_fresh], null),"send-feedback-fields");
nesferado.client.nf_login_input = rum.core.build_defc((function (){
var G__43832 = "form";
var G__43833 = ({"id": "nflogin"});
var G__43834 = sablono.interpreter.create_element("input",({"placeholder": "username", "name": "username", "autoComplete": "username login", "onChange": ((function (G__43832,G__43833){
return (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$username], null),e.target.value);
});})(G__43832,G__43833))
, "className": "fullwidth"}));
var G__43835 = sablono.interpreter.create_element("input",({"placeholder": "password", "type": "password", "name": "password", "autoComplete": "password login", "onChange": ((function (G__43832,G__43833,G__43834){
return (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$password], null),e.target.value);
});})(G__43832,G__43833,G__43834))
, "className": "fullwidth"}));
var G__43836 = (function (){var G__43837 = "button";
var G__43838 = ({"id": "logsin", "type": "button", "onClick": ((function (G__43837,G__43832,G__43833,G__43834,G__43835){
return (function (e){
var username = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$username], null));
var password = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$password], null));
return nesferado.client.try_login(username,password);
});})(G__43837,G__43832,G__43833,G__43834,G__43835))
, "className": "fullwidth"});
var G__43839 = "login";
return React.createElement(G__43837,G__43838,G__43839);
})();
return React.createElement(G__43832,G__43833,G__43834,G__43835,G__43836);
}),null,"nf-login-input");
nesferado.client.create_account_fields = rum.core.build_defc((function (){
var G__43840 = "form";
var G__43841 = ({"id": "nfcreate"});
var G__43842 = sablono.interpreter.create_element("input",({"id": "cruser", "placeholder": "username", "name": "username", "autoComplete": "new-username", "onChange": ((function (G__43840,G__43841){
return (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$create_DASH_username], null),e.target.value);
});})(G__43840,G__43841))
, "className": "fullwidth"}));
var G__43843 = sablono.interpreter.create_element("input",({"id": "crpass", "placeholder": "password", "type": "password", "name": "password", "autoComplete": "new-password", "onChange": ((function (G__43840,G__43841,G__43842){
return (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$create_DASH_password], null),e.target.value);
});})(G__43840,G__43841,G__43842))
, "className": "fullwidth"}));
var G__43844 = sablono.interpreter.create_element("input",({"id": "crpass2", "placeholder": "pw confirm", "type": "password", "name": "password2", "autoComplete": "new-password-confirm", "onChange": ((function (G__43840,G__43841,G__43842,G__43843){
return (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$create_DASH_password2], null),e.target.value);
});})(G__43840,G__43841,G__43842,G__43843))
, "className": "fullwidth"}));
var G__43845 = (function (){var G__43846 = "button";
var G__43847 = ({"id": "crsubmit", "type": "button", "autoComplete": "new-user-account-create", "onClick": ((function (G__43846,G__43840,G__43841,G__43842,G__43843,G__43844){
return (function (e){
var username = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$create_DASH_username], null));
var password = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$create_DASH_password], null));
var password2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$create_DASH_password2], null));
return nesferado.client.create_user(username,password,password2);
});})(G__43846,G__43840,G__43841,G__43842,G__43843,G__43844))
, "className": "fullwidth"});
var G__43848 = "create account";
return React.createElement(G__43846,G__43847,G__43848);
})();
return React.createElement(G__43840,G__43841,G__43842,G__43843,G__43844,G__43845);
}),null,"create-account-fields");
nesferado.client.create_account_input = rum.core.build_defc((function (){
var attrs43849 = (nesferado.client.create_account_fields.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.create_account_fields.cljs$core$IFn$_invoke$arity$0() : nesferado.client.create_account_fields.call(null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs43849))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"create-account-contain"], null),attrs43849], 0))):({"id": "create-account-contain"})),((cljs.core.map_QMARK_(attrs43849))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43849)], null)));
}),null,"create-account-input");
nesferado.client.link = rum.core.build_defc((function (address){
var G__43850 = "a";
var G__43851 = ({"href": address});
var G__43852 = sablono.interpreter.interpret(address);
return React.createElement(G__43850,G__43851,G__43852);
}),null,"link");
nesferado.client.top_bar = rum.core.build_defc((function (){
var current_user = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rum.core.react(nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$current_DASH_user], null));
var G__43853 = "div";
var G__43854 = ({"id": "topbar"});
var G__43855 = (function (){var G__43857 = "ol";
var G__43858 = ({"className": "topbar"});
var G__43859 = (function (){var G__43866 = "li";
var G__43867 = null;
var G__43868 = (function (){var G__43869 = "div";
var G__43870 = ({"onClick": ((function (G__43869,G__43866,G__43867,G__43857,G__43858,G__43853,G__43854,current_user){
return (function (_){
accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_current], null),"");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_curr_DASH_id], null),"");
});})(G__43869,G__43866,G__43867,G__43857,G__43858,G__43853,G__43854,current_user))
, "onMouseOver": ((function (G__43869,G__43866,G__43867,G__43857,G__43858,G__43853,G__43854,current_user){
return (function (e){
return document.body.style.cursor = "pointer";
});})(G__43869,G__43866,G__43867,G__43857,G__43858,G__43853,G__43854,current_user))
, "onMouseOut": ((function (G__43869,G__43866,G__43867,G__43857,G__43858,G__43853,G__43854,current_user){
return (function (e){
return document.body.style.cursor = "auto";
});})(G__43869,G__43866,G__43867,G__43857,G__43858,G__43853,G__43854,current_user))
, "className": "sidebarbutton"});
var G__43871 = "n\u229Cnforum";
return React.createElement(G__43869,G__43870,G__43871);
})();
return React.createElement(G__43866,G__43867,G__43868);
})();
var G__43860 = ((!(cljs.core.empty_QMARK_(current_user)))?(function (){var G__43872 = "li";
var G__43873 = null;
var G__43874 = (function (){var G__43875 = "span";
var G__43876 = ({"onClick": ((function (G__43875,G__43872,G__43873,G__43857,G__43858,G__43859,G__43853,G__43854,current_user){
return (function (_){
accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/chat");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_current], null),"");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_curr_DASH_id], null),"");
});})(G__43875,G__43872,G__43873,G__43857,G__43858,G__43859,G__43853,G__43854,current_user))
, "onMouseOver": ((function (G__43875,G__43872,G__43873,G__43857,G__43858,G__43859,G__43853,G__43854,current_user){
return (function (e){
return document.body.style.cursor = "pointer";
});})(G__43875,G__43872,G__43873,G__43857,G__43858,G__43859,G__43853,G__43854,current_user))
, "onMouseOut": ((function (G__43875,G__43872,G__43873,G__43857,G__43858,G__43859,G__43853,G__43854,current_user){
return (function (e){
return document.body.style.cursor = "auto";
});})(G__43875,G__43872,G__43873,G__43857,G__43858,G__43859,G__43853,G__43854,current_user))
, "className": "sidebarbutton"});
var G__43877 = "\u2301 chat";
return React.createElement(G__43875,G__43876,G__43877);
})();
return React.createElement(G__43872,G__43873,G__43874);
})():null);
var G__43861 = ((!(cljs.core.empty_QMARK_(current_user)))?(function (){var G__43878 = "li";
var G__43879 = null;
var G__43880 = (function (){var G__43881 = "span";
var G__43882 = ({"onClick": ((function (G__43881,G__43878,G__43879,G__43857,G__43858,G__43859,G__43860,G__43853,G__43854,current_user){
return (function (e){
e.stopPropagation();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$show_DASH_sidebar], null),cljs.core.not);
});})(G__43881,G__43878,G__43879,G__43857,G__43858,G__43859,G__43860,G__43853,G__43854,current_user))
, "onMouseOver": ((function (G__43881,G__43878,G__43879,G__43857,G__43858,G__43859,G__43860,G__43853,G__43854,current_user){
return (function (e){
return document.body.style.cursor = "pointer";
});})(G__43881,G__43878,G__43879,G__43857,G__43858,G__43859,G__43860,G__43853,G__43854,current_user))
, "onMouseOut": ((function (G__43881,G__43878,G__43879,G__43857,G__43858,G__43859,G__43860,G__43853,G__43854,current_user){
return (function (e){
return document.body.style.cursor = "auto";
});})(G__43881,G__43878,G__43879,G__43857,G__43858,G__43859,G__43860,G__43853,G__43854,current_user))
, "className": "sidebarbutton"});
var G__43883 = " \u2234 preferences";
return React.createElement(G__43881,G__43882,G__43883);
})();
return React.createElement(G__43878,G__43879,G__43880);
})():null);
var G__43862 = ((!(cljs.core.empty_QMARK_(current_user)))?(function (){var G__43884 = "li";
var G__43885 = null;
var G__43886 = (function (){var G__43887 = "span";
var G__43888 = ({"onClick": ((function (G__43887,G__43884,G__43885,G__43857,G__43858,G__43859,G__43860,G__43861,G__43853,G__43854,current_user){
return (function (_){
accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/submit");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$current_DASH_view], null),"/submit");
});})(G__43887,G__43884,G__43885,G__43857,G__43858,G__43859,G__43860,G__43861,G__43853,G__43854,current_user))
, "onMouseOver": ((function (G__43887,G__43884,G__43885,G__43857,G__43858,G__43859,G__43860,G__43861,G__43853,G__43854,current_user){
return (function (e){
return document.body.style.cursor = "pointer";
});})(G__43887,G__43884,G__43885,G__43857,G__43858,G__43859,G__43860,G__43861,G__43853,G__43854,current_user))
, "onMouseOut": ((function (G__43887,G__43884,G__43885,G__43857,G__43858,G__43859,G__43860,G__43861,G__43853,G__43854,current_user){
return (function (e){
return document.body.style.cursor = "auto";
});})(G__43887,G__43884,G__43885,G__43857,G__43858,G__43859,G__43860,G__43861,G__43853,G__43854,current_user))
, "className": "sidebarbutton"});
var G__43889 = "\u2301 submit";
return React.createElement(G__43887,G__43888,G__43889);
})();
return React.createElement(G__43884,G__43885,G__43886);
})():null);
var G__43863 = (function (){var G__43890 = "li";
var G__43891 = null;
var G__43892 = (function (){var G__43893 = "span";
var G__43894 = ({"onClick": ((function (G__43893,G__43890,G__43891,G__43857,G__43858,G__43859,G__43860,G__43861,G__43862,G__43853,G__43854,current_user){
return (function (_){
accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/about");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$current_DASH_view], null),"/about");
});})(G__43893,G__43890,G__43891,G__43857,G__43858,G__43859,G__43860,G__43861,G__43862,G__43853,G__43854,current_user))
, "onMouseOver": ((function (G__43893,G__43890,G__43891,G__43857,G__43858,G__43859,G__43860,G__43861,G__43862,G__43853,G__43854,current_user){
return (function (e){
return document.body.style.cursor = "pointer";
});})(G__43893,G__43890,G__43891,G__43857,G__43858,G__43859,G__43860,G__43861,G__43862,G__43853,G__43854,current_user))
, "onMouseOut": ((function (G__43893,G__43890,G__43891,G__43857,G__43858,G__43859,G__43860,G__43861,G__43862,G__43853,G__43854,current_user){
return (function (e){
return document.body.style.cursor = "auto";
});})(G__43893,G__43890,G__43891,G__43857,G__43858,G__43859,G__43860,G__43861,G__43862,G__43853,G__43854,current_user))
, "className": "sidebarbutton"});
var G__43895 = "\u2301 about";
return React.createElement(G__43893,G__43894,G__43895);
})();
return React.createElement(G__43890,G__43891,G__43892);
})();
var G__43864 = (function (){var attrs43856 = ((cljs.core.empty_QMARK_(current_user))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$sidebarbutton,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (G__43857,G__43858,G__43859,G__43860,G__43861,G__43862,G__43863,G__43853,G__43854,current_user){
return (function (_){
accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/login");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$current_DASH_view], null),"/login");
});})(G__43857,G__43858,G__43859,G__43860,G__43861,G__43862,G__43863,G__43853,G__43854,current_user))
], null),"login"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$sidebarbutton,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (G__43857,G__43858,G__43859,G__43860,G__43861,G__43862,G__43863,G__43853,G__43854,current_user){
return (function (_){
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/profile");
});})(G__43857,G__43858,G__43859,G__43860,G__43861,G__43862,G__43863,G__43853,G__43854,current_user))
,cljs.core.cst$kw$onMouseOver,((function (G__43857,G__43858,G__43859,G__43860,G__43861,G__43862,G__43863,G__43853,G__43854,current_user){
return (function (e){
return document.body.style.cursor = "auto";
});})(G__43857,G__43858,G__43859,G__43860,G__43861,G__43862,G__43863,G__43853,G__43854,current_user))
], null),[cljs.core.str(" \u232C "),cljs.core.str(current_user)].join('')], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"li",((cljs.core.map_QMARK_(attrs43856))?sablono.interpreter.attributes(attrs43856):null),((cljs.core.map_QMARK_(attrs43856))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43856)], null)));
})();
var G__43865 = ((!(cljs.core.empty_QMARK_(current_user)))?(function (){var G__43896 = "li";
var G__43897 = null;
var G__43898 = (function (){var G__43899 = "span";
var G__43900 = ({"onClick": ((function (G__43899,G__43896,G__43897,G__43857,G__43858,G__43859,G__43860,G__43861,G__43862,G__43863,G__43864,G__43853,G__43854,current_user){
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
});})(G__43899,G__43896,G__43897,G__43857,G__43858,G__43859,G__43860,G__43861,G__43862,G__43863,G__43864,G__43853,G__43854,current_user))
, "onMouseOver": ((function (G__43899,G__43896,G__43897,G__43857,G__43858,G__43859,G__43860,G__43861,G__43862,G__43863,G__43864,G__43853,G__43854,current_user){
return (function (e){
return document.body.style.cursor = "pointer";
});})(G__43899,G__43896,G__43897,G__43857,G__43858,G__43859,G__43860,G__43861,G__43862,G__43863,G__43864,G__43853,G__43854,current_user))
, "onMouseOut": ((function (G__43899,G__43896,G__43897,G__43857,G__43858,G__43859,G__43860,G__43861,G__43862,G__43863,G__43864,G__43853,G__43854,current_user){
return (function (e){
return document.body.style.cursor = "auto";
});})(G__43899,G__43896,G__43897,G__43857,G__43858,G__43859,G__43860,G__43861,G__43862,G__43863,G__43864,G__43853,G__43854,current_user))
, "className": "sidebarbutton logout"});
var G__43901 = " \u21CF";
return React.createElement(G__43899,G__43900,G__43901);
})();
return React.createElement(G__43896,G__43897,G__43898);
})():null);
return React.createElement(G__43857,G__43858,G__43859,G__43860,G__43861,G__43862,G__43863,G__43864,G__43865);
})();
return React.createElement(G__43853,G__43854,G__43855);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"top-bar");
nesferado.client.side_bar = rum.core.build_defc((function (){
var G__43902 = "div";
var G__43903 = ({"id": "sidebar"});
var G__43904 = (function (){var G__43905 = "ol";
var G__43906 = ({"className": "sidebar"});
var G__43907 = (function (){var G__43914 = "li";
var G__43915 = null;
var G__43916 = (function (){var G__43917 = "div";
var G__43918 = ({"onClick": ((function (G__43917,G__43914,G__43915,G__43905,G__43906,G__43902,G__43903){
return (function (_){
accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/profile");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$show_DASH_sidebar], null),cljs.core.not);
});})(G__43917,G__43914,G__43915,G__43905,G__43906,G__43902,G__43903))
, "onMouseOver": ((function (G__43917,G__43914,G__43915,G__43905,G__43906,G__43902,G__43903){
return (function (e){
return document.body.style.cursor = "pointer";
});})(G__43917,G__43914,G__43915,G__43905,G__43906,G__43902,G__43903))
, "onMouseOut": ((function (G__43917,G__43914,G__43915,G__43905,G__43906,G__43902,G__43903){
return (function (e){
return document.body.style.cursor = "auto";
});})(G__43917,G__43914,G__43915,G__43905,G__43906,G__43902,G__43903))
, "className": "sidebarbutton bb"});
var G__43919 = "\u1403 edit profile";
return React.createElement(G__43917,G__43918,G__43919);
})();
return React.createElement(G__43914,G__43915,G__43916);
})();
var G__43908 = (function (){var G__43920 = "li";
var G__43921 = null;
var G__43922 = (function (){var G__43923 = "div";
var G__43924 = ({"onClick": ((function (G__43923,G__43920,G__43921,G__43905,G__43906,G__43907,G__43902,G__43903){
return (function (_){
accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/email-public");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$show_DASH_sidebar], null),cljs.core.not);
});})(G__43923,G__43920,G__43921,G__43905,G__43906,G__43907,G__43902,G__43903))
, "onMouseOver": ((function (G__43923,G__43920,G__43921,G__43905,G__43906,G__43907,G__43902,G__43903){
return (function (e){
return document.body.style.cursor = "pointer";
});})(G__43923,G__43920,G__43921,G__43905,G__43906,G__43907,G__43902,G__43903))
, "onMouseOut": ((function (G__43923,G__43920,G__43921,G__43905,G__43906,G__43907,G__43902,G__43903){
return (function (e){
return document.body.style.cursor = "auto";
});})(G__43923,G__43920,G__43921,G__43905,G__43906,G__43907,G__43902,G__43903))
, "className": "sidebarbutton bb"});
var G__43925 = "\u0ED1 set public email";
return React.createElement(G__43923,G__43924,G__43925);
})();
return React.createElement(G__43920,G__43921,G__43922);
})();
var G__43909 = (function (){var G__43926 = "li";
var G__43927 = null;
var G__43928 = (function (){var G__43929 = "div";
var G__43930 = ({"onClick": ((function (G__43929,G__43926,G__43927,G__43905,G__43906,G__43907,G__43908,G__43902,G__43903){
return (function (_){
accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/email-recovery");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$show_DASH_sidebar], null),cljs.core.not);
});})(G__43929,G__43926,G__43927,G__43905,G__43906,G__43907,G__43908,G__43902,G__43903))
, "onMouseOver": ((function (G__43929,G__43926,G__43927,G__43905,G__43906,G__43907,G__43908,G__43902,G__43903){
return (function (e){
return document.body.style.cursor = "pointer";
});})(G__43929,G__43926,G__43927,G__43905,G__43906,G__43907,G__43908,G__43902,G__43903))
, "onMouseOut": ((function (G__43929,G__43926,G__43927,G__43905,G__43906,G__43907,G__43908,G__43902,G__43903){
return (function (e){
return document.body.style.cursor = "auto";
});})(G__43929,G__43926,G__43927,G__43905,G__43906,G__43907,G__43908,G__43902,G__43903))
, "className": "sidebarbutton bb"});
var G__43931 = "\u0F00 set recovery e-mail";
return React.createElement(G__43929,G__43930,G__43931);
})();
return React.createElement(G__43926,G__43927,G__43928);
})();
var G__43910 = (function (){var G__43932 = "li";
var G__43933 = null;
var G__43934 = (function (){var G__43935 = "div";
var G__43936 = ({"onClick": ((function (G__43935,G__43932,G__43933,G__43905,G__43906,G__43907,G__43908,G__43909,G__43902,G__43903){
return (function (_){
accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/password-update");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$show_DASH_sidebar], null),cljs.core.not);
});})(G__43935,G__43932,G__43933,G__43905,G__43906,G__43907,G__43908,G__43909,G__43902,G__43903))
, "onMouseOver": ((function (G__43935,G__43932,G__43933,G__43905,G__43906,G__43907,G__43908,G__43909,G__43902,G__43903){
return (function (e){
return document.body.style.cursor = "pointer";
});})(G__43935,G__43932,G__43933,G__43905,G__43906,G__43907,G__43908,G__43909,G__43902,G__43903))
, "onMouseOut": ((function (G__43935,G__43932,G__43933,G__43905,G__43906,G__43907,G__43908,G__43909,G__43902,G__43903){
return (function (e){
return document.body.style.cursor = "auto";
});})(G__43935,G__43932,G__43933,G__43905,G__43906,G__43907,G__43908,G__43909,G__43902,G__43903))
, "className": "sidebarbutton bb"});
var G__43937 = "\u0F13 set password";
return React.createElement(G__43935,G__43936,G__43937);
})();
return React.createElement(G__43932,G__43933,G__43934);
})();
var G__43911 = (function (){var G__43938 = "li";
var G__43939 = null;
var G__43940 = (function (){var G__43941 = "div";
var G__43942 = ({"onClick": ((function (G__43941,G__43938,G__43939,G__43905,G__43906,G__43907,G__43908,G__43909,G__43910,G__43902,G__43903){
return (function (_){
accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/feedback");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$show_DASH_sidebar], null),cljs.core.not);
});})(G__43941,G__43938,G__43939,G__43905,G__43906,G__43907,G__43908,G__43909,G__43910,G__43902,G__43903))
, "onMouseOver": ((function (G__43941,G__43938,G__43939,G__43905,G__43906,G__43907,G__43908,G__43909,G__43910,G__43902,G__43903){
return (function (e){
return document.body.style.cursor = "pointer";
});})(G__43941,G__43938,G__43939,G__43905,G__43906,G__43907,G__43908,G__43909,G__43910,G__43902,G__43903))
, "onMouseOut": ((function (G__43941,G__43938,G__43939,G__43905,G__43906,G__43907,G__43908,G__43909,G__43910,G__43902,G__43903){
return (function (e){
return document.body.style.cursor = "auto";
});})(G__43941,G__43938,G__43939,G__43905,G__43906,G__43907,G__43908,G__43909,G__43910,G__43902,G__43903))
, "className": "sidebarbutton bb"});
var G__43943 = "\u0AEA give feedback";
return React.createElement(G__43941,G__43942,G__43943);
})();
return React.createElement(G__43938,G__43939,G__43940);
})();
var G__43912 = (function (){var G__43944 = "li";
var G__43945 = null;
var G__43946 = (function (){var G__43947 = "div";
var G__43948 = ({"onClick": ((function (G__43947,G__43944,G__43945,G__43905,G__43906,G__43907,G__43908,G__43909,G__43910,G__43911,G__43902,G__43903){
return (function (_){
accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/donate");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$show_DASH_sidebar], null),cljs.core.not);
});})(G__43947,G__43944,G__43945,G__43905,G__43906,G__43907,G__43908,G__43909,G__43910,G__43911,G__43902,G__43903))
, "onMouseOver": ((function (G__43947,G__43944,G__43945,G__43905,G__43906,G__43907,G__43908,G__43909,G__43910,G__43911,G__43902,G__43903){
return (function (e){
return document.body.style.cursor = "pointer";
});})(G__43947,G__43944,G__43945,G__43905,G__43906,G__43907,G__43908,G__43909,G__43910,G__43911,G__43902,G__43903))
, "onMouseOut": ((function (G__43947,G__43944,G__43945,G__43905,G__43906,G__43907,G__43908,G__43909,G__43910,G__43911,G__43902,G__43903){
return (function (e){
return document.body.style.cursor = "auto";
});})(G__43947,G__43944,G__43945,G__43905,G__43906,G__43907,G__43908,G__43909,G__43910,G__43911,G__43902,G__43903))
, "className": "sidebarbutton bb bd"});
var G__43949 = "\u17F7\u17F8\u17F8 support fusion research";
return React.createElement(G__43947,G__43948,G__43949);
})();
return React.createElement(G__43944,G__43945,G__43946);
})();
var G__43913 = (function (){var G__43950 = "li";
var G__43951 = null;
var G__43952 = (function (){var G__43953 = "div";
var G__43954 = ({"onClick": ((function (G__43953,G__43950,G__43951,G__43905,G__43906,G__43907,G__43908,G__43909,G__43910,G__43911,G__43912,G__43902,G__43903){
return (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$show_DASH_sidebar], null),cljs.core.not);
});})(G__43953,G__43950,G__43951,G__43905,G__43906,G__43907,G__43908,G__43909,G__43910,G__43911,G__43912,G__43902,G__43903))
, "onMouseOver": ((function (G__43953,G__43950,G__43951,G__43905,G__43906,G__43907,G__43908,G__43909,G__43910,G__43911,G__43912,G__43902,G__43903){
return (function (e){
return document.body.style.cursor = "pointer";
});})(G__43953,G__43950,G__43951,G__43905,G__43906,G__43907,G__43908,G__43909,G__43910,G__43911,G__43912,G__43902,G__43903))
, "onMouseOut": ((function (G__43953,G__43950,G__43951,G__43905,G__43906,G__43907,G__43908,G__43909,G__43910,G__43911,G__43912,G__43902,G__43903){
return (function (e){
return document.body.style.cursor = "auto";
});})(G__43953,G__43950,G__43951,G__43905,G__43906,G__43907,G__43908,G__43909,G__43910,G__43911,G__43912,G__43902,G__43903))
, "className": "sidebarbutton bb hideprefs"});
var G__43955 = "\u1409 hide preferences";
return React.createElement(G__43953,G__43954,G__43955);
})();
return React.createElement(G__43950,G__43951,G__43952);
})();
return React.createElement(G__43905,G__43906,G__43907,G__43908,G__43909,G__43910,G__43911,G__43912,G__43913);
})();
return React.createElement(G__43902,G__43903,G__43904);
}),null,"side-bar");
nesferado.client.login_bar = rum.core.build_defc((function (){
var G__43956 = "div";
var G__43957 = ({"id": "loginbar"});
var G__43958 = (function (){var G__43979 = "ol";
var G__43980 = ({"className": "loginbar"});
var G__43981 = (function (){var G__43993 = "li";
var G__43994 = ({"className": "nfnf"});
var G__43995 = "Nonforum Login:";
var G__43996 = sablono.interpreter.interpret((nesferado.client.nf_login_input.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.nf_login_input.cljs$core$IFn$_invoke$arity$0() : nesferado.client.nf_login_input.call(null)));
return React.createElement(G__43993,G__43994,G__43995,G__43996);
})();
var G__43982 = (function (){var G__43997 = "li";
var G__43998 = ({"className": "nfca"});
var G__43999 = "Create a Nonforum account:";
var G__44000 = sablono.interpreter.interpret((nesferado.client.create_account_input.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.create_account_input.cljs$core$IFn$_invoke$arity$0() : nesferado.client.create_account_input.call(null)));
return React.createElement(G__43997,G__43998,G__43999,G__44000);
})();
var G__43983 = (function (){var G__44001 = "li";
var G__44002 = ({"className": "terms"});
var G__44003 = "terms: ";
return React.createElement(G__44001,G__44002,G__44003);
})();
var G__43984 = (function (){var G__44004 = "li";
var G__44005 = ({"className": "terms"});
var G__44006 = "   ";
return React.createElement(G__44004,G__44005,G__44006);
})();
var G__43985 = (function (){var G__44007 = "li";
var G__44008 = ({"className": "terms"});
var G__44009 = "   ";
return React.createElement(G__44007,G__44008,G__44009);
})();
var G__43986 = (function (){var G__44010 = "li";
var G__44011 = ({"className": "terms"});
var G__44012 = "   ";
return React.createElement(G__44010,G__44011,G__44012);
})();
var G__43987 = (function (){var G__44013 = "li";
var G__44014 = ({"className": "terms"});
var G__44015 = "   ";
return React.createElement(G__44013,G__44014,G__44015);
})();
var G__43988 = (function (){var G__44016 = "li";
var G__44017 = ({"className": "terms"});
var G__44018 = "by participating here at nonforum you agree to: ";
return React.createElement(G__44016,G__44017,G__44018);
})();
var G__43989 = (function (){var G__44019 = "li";
var G__44020 = ({"className": "terms"});
var G__44021 = "abide kindly and virtuously,";
return React.createElement(G__44019,G__44020,G__44021);
})();
var G__43990 = (function (){var G__44022 = "li";
var G__44023 = ({"className": "terms"});
var G__44024 = "express yourself in ways that further the discussion and enhance morale,";
return React.createElement(G__44022,G__44023,G__44024);
})();
var G__43991 = (function (){var G__44025 = "li";
var G__44026 = ({"className": "terms"});
var G__44027 = "and, in short, participate in ways to help elevate humanity.";
return React.createElement(G__44025,G__44026,G__44027);
})();
var G__43992 = (function (){var G__44028 = "li";
var G__44029 = ({"className": "terms"});
var G__44030 = "There is currently no surcharge to create an account, you may have one.";
return React.createElement(G__44028,G__44029,G__44030);
})();
return React.createElement(G__43979,G__43980,G__43981,G__43982,G__43983,G__43984,G__43985,G__43986,G__43987,G__43988,G__43989,G__43990,G__43991,G__43992);
})();
return React.createElement(G__43956,G__43957,G__43958);
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
var G__44031 = "li";
var G__44032 = null;
var G__44033 = (function (){var G__44037 = "div";
var G__44038 = ({"onClick": ((function (G__44037,G__44031,G__44032,title,subtitle,comments,priority,id,posted_by,timestamp,n_ratings,ratings_t,link,long_description,cids,num_comments,tv_current){
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
});})(G__44037,G__44031,G__44032,title,subtitle,comments,priority,id,posted_by,timestamp,n_ratings,ratings_t,link,long_description,cids,num_comments,tv_current))
, "id": [cljs.core.str("tile"),cljs.core.str(id)].join(''), "className": "tile"});
var G__44039 = (function (){var attrs44034 = title;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs44034))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["heading"], null)], null),attrs44034], 0))):({"className": "heading"})),((cljs.core.map_QMARK_(attrs44034))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs44034)], null)));
})();
var G__44040 = (function (){var attrs44035 = subtitle;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs44035))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["contents"], null)], null),attrs44035], 0))):({"className": "contents"})),((cljs.core.map_QMARK_(attrs44035))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs44035)], null)));
})();
var G__44041 = (function (){var G__44045 = "div";
var G__44046 = ({"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tilelink",((cljs.core.empty_QMARK_(tv_current))?"hideme":null)], null))});
var G__44047 = (function (){var G__44048 = "a";
var G__44049 = ({"href": link});
var G__44050 = sablono.interpreter.interpret(link);
return React.createElement(G__44048,G__44049,G__44050);
})();
return React.createElement(G__44045,G__44046,G__44047);
})();
var G__44042 = (function (){var G__44051 = "div";
var G__44052 = ({"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["longdescription",((cljs.core.empty_QMARK_(tv_current))?"hideme":null)], null))});
var G__44053 = sablono.interpreter.interpret(long_description);
return React.createElement(G__44051,G__44052,G__44053);
})();
var G__44043 = (function (){var G__44054 = "div";
var G__44055 = ({"className": "tile-rate"});
var G__44056 = (function (){var G__44060 = "div";
var G__44061 = ({"onClick": ((function (G__44060,G__44054,G__44055,G__44037,G__44038,G__44039,G__44040,G__44041,G__44042,G__44031,G__44032,title,subtitle,comments,priority,id,posted_by,timestamp,n_ratings,ratings_t,link,long_description,cids,num_comments,tv_current){
return (function (e){
e.stopPropagation();

return nesferado.client.rate(cljs.core.cst$kw$double_DASH_plus,id);
});})(G__44060,G__44054,G__44055,G__44037,G__44038,G__44039,G__44040,G__44041,G__44042,G__44031,G__44032,title,subtitle,comments,priority,id,posted_by,timestamp,n_ratings,ratings_t,link,long_description,cids,num_comments,tv_current))
, "className": "tile-rate-doubleplus"});
var G__44062 = "";
return React.createElement(G__44060,G__44061,G__44062);
})();
var G__44057 = (function (){var G__44063 = "div";
var G__44064 = ({"onClick": ((function (G__44063,G__44054,G__44055,G__44056,G__44037,G__44038,G__44039,G__44040,G__44041,G__44042,G__44031,G__44032,title,subtitle,comments,priority,id,posted_by,timestamp,n_ratings,ratings_t,link,long_description,cids,num_comments,tv_current){
return (function (e){
e.stopPropagation();

return nesferado.client.rate(cljs.core.cst$kw$plus,id);
});})(G__44063,G__44054,G__44055,G__44056,G__44037,G__44038,G__44039,G__44040,G__44041,G__44042,G__44031,G__44032,title,subtitle,comments,priority,id,posted_by,timestamp,n_ratings,ratings_t,link,long_description,cids,num_comments,tv_current))
, "className": "tile-rate-plus"});
var G__44065 = "";
return React.createElement(G__44063,G__44064,G__44065);
})();
var G__44058 = (function (){var G__44066 = "div";
var G__44067 = ({"onClick": ((function (G__44066,G__44054,G__44055,G__44056,G__44057,G__44037,G__44038,G__44039,G__44040,G__44041,G__44042,G__44031,G__44032,title,subtitle,comments,priority,id,posted_by,timestamp,n_ratings,ratings_t,link,long_description,cids,num_comments,tv_current){
return (function (e){
e.stopPropagation();

return nesferado.client.rate(cljs.core.cst$kw$minus,id);
});})(G__44066,G__44054,G__44055,G__44056,G__44057,G__44037,G__44038,G__44039,G__44040,G__44041,G__44042,G__44031,G__44032,title,subtitle,comments,priority,id,posted_by,timestamp,n_ratings,ratings_t,link,long_description,cids,num_comments,tv_current))
, "className": "tile-rate-minus"});
var G__44068 = "";
return React.createElement(G__44066,G__44067,G__44068);
})();
var G__44059 = (function (){var G__44069 = "div";
var G__44070 = ({"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tile-rating",(((n_ratings < (6)))?"rollthedice":"numerals")], null))});
var G__44071 = sablono.interpreter.interpret(nesferado.client.get_rating(ratings_t,n_ratings));
return React.createElement(G__44069,G__44070,G__44071);
})();
return React.createElement(G__44054,G__44055,G__44056,G__44057,G__44058,G__44059);
})();
var G__44044 = (function (){var attrs44036 = id;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs44036))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tileid"], null)], null),attrs44036], 0))):({"className": "tileid"})),((cljs.core.map_QMARK_(attrs44036))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs44036)], null)));
})();
return React.createElement(G__44037,G__44038,G__44039,G__44040,G__44041,G__44042,G__44043,G__44044);
})();
return React.createElement(G__44031,G__44032,G__44033);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key_DASH_fn,(function (td){
return [cljs.core.str(cljs.core.uuid([cljs.core.str(cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(td))].join('')))].join('');
})], null)], null),"tv-cell");
nesferado.client.television = rum.core.build_defcs((function (state){
var G__44073 = "div";
var G__44074 = ({"id": "tv"});
var G__44075 = (function (){var attrs44072 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(nesferado.client.tv_cell,rum.core.react(nesferado.client.tv_state));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"ol",((cljs.core.map_QMARK_(attrs44072))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tv"], null)], null),attrs44072], 0))):({"className": "tv"})),((cljs.core.map_QMARK_(attrs44072))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs44072)], null)));
})();
return React.createElement(G__44073,G__44074,G__44075);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,nesferado.client.show_fresh], null),"television");
nesferado.client.post_input = rum.core.build_defcs((function (state){
var G__44076 = "form";
var G__44077 = ({"id": "postinput"});
var G__44078 = "Create new post";
var G__44079 = sablono.interpreter.create_element("input",({"placeholder": "title", "value": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$title], null)), "onChange": ((function (G__44076,G__44077,G__44078){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$title], null),e.target.value);

return console.log(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$title], null)));
});})(G__44076,G__44077,G__44078))
, "className": "reim kash"}));
var G__44080 = sablono.interpreter.create_element("input",({"placeholder": "subtitle", "value": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$subtitle], null)), "onChange": ((function (G__44076,G__44077,G__44078,G__44079){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$subtitle], null),e.target.value);

return console.log(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$subtitle], null)));
});})(G__44076,G__44077,G__44078,G__44079))
, "className": "reim kash"}));
var G__44081 = sablono.interpreter.create_element("input",({"placeholder": "link", "value": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$link], null)), "onChange": ((function (G__44076,G__44077,G__44078,G__44079,G__44080){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$link], null),e.target.value);

return console.log(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$link], null)));
});})(G__44076,G__44077,G__44078,G__44079,G__44080))
, "className": "reim kash"}));
var G__44082 = sablono.interpreter.create_element("input",({"placeholder": "contents", "value": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$contents], null)), "onChange": ((function (G__44076,G__44077,G__44078,G__44079,G__44080,G__44081){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$contents], null),e.target.value);

return console.log(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$contents], null)));
});})(G__44076,G__44077,G__44078,G__44079,G__44080,G__44081))
, "className": "reim kash"}));
var G__44083 = (function (){var G__44084 = "button";
var G__44085 = ({"type": "button", "onClick": ((function (G__44084,G__44076,G__44077,G__44078,G__44079,G__44080,G__44081,G__44082){
return (function (e){
var potential_link = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$link], null));
var new_post_map = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$title,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$title], null)),cljs.core.cst$kw$subtitle,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$subtitle], null)),cljs.core.cst$kw$contents,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$contents], null)),cljs.core.cst$kw$link,((!(cljs.core.empty_QMARK_(potential_link)))?(((clojure.string.starts_with_QMARK_(potential_link,"http")) || (clojure.string.starts_with_QMARK_(potential_link,"https")))?potential_link:[cljs.core.str("http://"),cljs.core.str(potential_link)].join('')):[cljs.core.str("")].join('')),cljs.core.cst$kw$timestamp,(80008)], null);
var G__44087_44088 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clientsent_SLASH_new_DASH_post,new_post_map], null);
(nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__44087_44088) : nesferado.client.chsk_send_BANG_.call(null,G__44087_44088));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$title], null),"");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$subtitle], null),"");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$contents], null),"");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$link], null),"");

return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/");
});})(G__44084,G__44076,G__44077,G__44078,G__44079,G__44080,G__44081,G__44082))
, "className": "reim kash"});
var G__44086 = "submit new post";
return React.createElement(G__44084,G__44085,G__44086);
})();
return React.createElement(G__44076,G__44077,G__44078,G__44079,G__44080,G__44081,G__44082,G__44083);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,nesferado.client.show_fresh], null),"post-input");
nesferado.client.edit_profile = rum.core.build_defcs((function (state){
var G__44089 = "form";
var G__44090 = ({"id": "profileinput", "className": "profileinput"});
var G__44091 = "Edit Profile";
var G__44092 = sablono.interpreter.create_element("textarea",({"placeholder": "bio", "value": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$bio], null)), "onChange": ((function (G__44089,G__44090,G__44091){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$bio], null),e.target.value);

return console.log(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$bio], null)));
});})(G__44089,G__44090,G__44091))
, "className": "profileinput"}));
var G__44093 = sablono.interpreter.create_element("input",({"placeholder": "public e-mail", "value": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$public_DASH_email], null)), "onChange": ((function (G__44089,G__44090,G__44091,G__44092){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$public_DASH_email], null),e.target.value);

return console.log(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$public_DASH_email], null)));
});})(G__44089,G__44090,G__44091,G__44092))
, "className": "profileinput"}));
var G__44094 = (function (){var G__44095 = "button";
var G__44096 = ({"type": "button", "onClick": ((function (G__44095,G__44089,G__44090,G__44091,G__44092,G__44093){
return (function (e){
console.log("updating bio");

var new_bio_data = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$bio,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$bio], null)),cljs.core.cst$kw$public_DASH_email,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$public_DASH_email], null))], null);
var G__44098_44099 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clientsent_SLASH_bio,new_bio_data], null);
(nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__44098_44099) : nesferado.client.chsk_send_BANG_.call(null,G__44098_44099));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$bio], null),"");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$public_DASH_email], null),"");
});})(G__44095,G__44089,G__44090,G__44091,G__44092,G__44093))
, "className": "profileinput"});
var G__44097 = "update bio";
return React.createElement(G__44095,G__44096,G__44097);
})();
return React.createElement(G__44089,G__44090,G__44091,G__44092,G__44093,G__44094);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,nesferado.client.show_fresh], null),"edit-profile");
nesferado.client.set_recovery_email = rum.core.build_defcs((function (state){
var G__44100 = "form";
var G__44101 = ({"id": "recoveryinput"});
var G__44102 = "Set Recovery Email";
var G__44103 = sablono.interpreter.create_element("textarea",({"id": "restatus", "readonly": true, "value": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$recovery_DASH_email_DASH_status], null))}));
var G__44104 = sablono.interpreter.create_element("input",({"placeholder": "recovery e-mail", "value": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$recovery_DASH_email], null)), "onChange": ((function (G__44100,G__44101,G__44102,G__44103){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$recovery_DASH_email], null),e.target.value);

return console.log(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$recovery_DASH_email], null)));
});})(G__44100,G__44101,G__44102,G__44103))
, "className": "reim"}));
var G__44105 = (function (){var G__44107 = "div";
var G__44108 = ({"className": "labez"});
var G__44109 = "current nonforum password:";
var G__44110 = sablono.interpreter.create_element("input",({"placeholder": "", "type": "password", "value": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$password], null)), "autoComplete": "Current Nonforum password", "onChange": ((function (G__44107,G__44108,G__44109,G__44100,G__44101,G__44102,G__44103,G__44104){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$password], null),e.target.value);

return console.log(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$password], null)));
});})(G__44107,G__44108,G__44109,G__44100,G__44101,G__44102,G__44103,G__44104))
, "className": "reim"}));
return React.createElement(G__44107,G__44108,G__44109,G__44110);
})();
var G__44106 = (function (){var G__44111 = "button";
var G__44112 = ({"type": "button", "onClick": ((function (G__44111,G__44100,G__44101,G__44102,G__44103,G__44104,G__44105){
return (function (e){
console.log("set recovery e-mail");

var rec_email = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$recovery_DASH_email], null));
var user_as_stashed = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$current_DASH_user], null));
var pw = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$password], null));
var G__44114_44115 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clientsent_SLASH_recovery,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$recovery_DASH_email,rec_email,cljs.core.cst$kw$user_DASH_claim,user_as_stashed,cljs.core.cst$kw$password,pw], null)], null);
(nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__44114_44115) : nesferado.client.chsk_send_BANG_.call(null,G__44114_44115));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$recovery_DASH_email], null),"");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$recovery_DASH_email_DASH_status], null),"");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$password], null),"");
});})(G__44111,G__44100,G__44101,G__44102,G__44103,G__44104,G__44105))
, "className": "reim"});
var G__44113 = "set recovery e-mail";
return React.createElement(G__44111,G__44112,G__44113);
})();
return React.createElement(G__44100,G__44101,G__44102,G__44103,G__44104,G__44105,G__44106);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,nesferado.client.show_fresh], null),"set-recovery-email");
nesferado.client.set_password = rum.core.build_defcs((function (state){
var G__44116 = "form";
var G__44117 = ({"id": "setpasswordinput", "className": "si"});
var G__44118 = sablono.interpreter.create_element("textarea",({"id": "pwstatus", "readonly": true, "value": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$password_DASH_status], null))}));
var G__44119 = (function (){var G__44120 = "div";
var G__44121 = ({"className": "rezz"});
var G__44122 = "old password";
var G__44123 = sablono.interpreter.create_element("input",({"placeholder": "", "type": "password", "value": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$change_DASH_pass_DASH_old_DASH_pw], null)), "autoComplete": "old-password", "onChange": ((function (G__44120,G__44121,G__44122,G__44116,G__44117,G__44118){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$change_DASH_pass_DASH_old_DASH_pw], null),e.target.value);

return console.log(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$change_DASH_pass_DASH_old_DASH_pw], null)));
});})(G__44120,G__44121,G__44122,G__44116,G__44117,G__44118))
, "className": "reim"}));
var G__44124 = (function (){var G__44127 = "div";
var G__44128 = ({"className": "rezz"});
var G__44129 = "new password:";
var G__44130 = sablono.interpreter.create_element("input",({"placeholder": "", "type": "password", "value": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$change_DASH_pass_DASH_new_DASH_pw], null)), "autoComplete": "new password", "onChange": ((function (G__44127,G__44128,G__44129,G__44120,G__44121,G__44122,G__44123,G__44116,G__44117,G__44118){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$change_DASH_pass_DASH_new_DASH_pw], null),e.target.value);

return console.log(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$change_DASH_pass_DASH_new_DASH_pw], null)));
});})(G__44127,G__44128,G__44129,G__44120,G__44121,G__44122,G__44123,G__44116,G__44117,G__44118))
, "className": "reim"}));
return React.createElement(G__44127,G__44128,G__44129,G__44130);
})();
var G__44125 = (function (){var G__44131 = "div";
var G__44132 = ({"className": "rezz"});
var G__44133 = "new password confirm:";
var G__44134 = sablono.interpreter.create_element("input",({"placeholder": "", "type": "password", "value": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$change_DASH_pass_DASH_new_DASH_pw2], null)), "autoComplete": "new password confirm", "onChange": ((function (G__44131,G__44132,G__44133,G__44120,G__44121,G__44122,G__44123,G__44124,G__44116,G__44117,G__44118){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$change_DASH_pass_DASH_new_DASH_pw2], null),e.target.value);

return console.log(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$change_DASH_pass_DASH_new_DASH_pw2], null)));
});})(G__44131,G__44132,G__44133,G__44120,G__44121,G__44122,G__44123,G__44124,G__44116,G__44117,G__44118))
, "className": "reim"}));
return React.createElement(G__44131,G__44132,G__44133,G__44134);
})();
var G__44126 = (function (){var G__44135 = "button";
var G__44136 = ({"id": "pwchang", "type": "button", "onClick": ((function (G__44135,G__44120,G__44121,G__44122,G__44123,G__44124,G__44125,G__44116,G__44117,G__44118){
return (function (e){
console.log("update password");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$password_DASH_status], null),"");

var old_pw = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$change_DASH_pass_DASH_old_DASH_pw], null));
var new_pw = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$change_DASH_pass_DASH_new_DASH_pw], null));
var new_pw2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$change_DASH_pass_DASH_new_DASH_pw2], null));
var G__44138_44139 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clientsent_SLASH_password_DASH_change,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$old,old_pw,cljs.core.cst$kw$new,new_pw,cljs.core.cst$kw$new2,new_pw2], null)], null);
(nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__44138_44139) : nesferado.client.chsk_send_BANG_.call(null,G__44138_44139));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$change_DASH_pass_DASH_old_DASH_pw], null),"");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$change_DASH_pass_DASH_new_DASH_pw], null),"");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$change_DASH_pass_DASH_new_DASH_pw2], null),"");
});})(G__44135,G__44120,G__44121,G__44122,G__44123,G__44124,G__44125,G__44116,G__44117,G__44118))
, "className": "reim"});
var G__44137 = "set password";
return React.createElement(G__44135,G__44136,G__44137);
})();
return React.createElement(G__44120,G__44121,G__44122,G__44123,G__44124,G__44125,G__44126);
})();
return React.createElement(G__44116,G__44117,G__44118,G__44119);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,nesferado.client.show_fresh], null),"set-password");
nesferado.client.support_nf = rum.core.build_defcs((function (state){
var G__44142 = "div";
var G__44143 = null;
var G__44144 = (function (){var G__44153 = "div";
var G__44154 = ({"id": "supportnf"});
var G__44155 = "Thank you for participating in and contributing to Nonforum.";
return React.createElement(G__44153,G__44154,G__44155);
})();
var G__44145 = (function (){var G__44156 = "div";
var G__44157 = ({"id": "mission0"});
var G__44158 = "Part of our mission at Nonforum is to further Humanity in significant ways.";
return React.createElement(G__44156,G__44157,G__44158);
})();
var G__44146 = (function (){var G__44159 = "div";
var G__44160 = ({"id": "mission1"});
var G__44161 = "We are partnered with Horne Technologies to help them achieve parity-efficiency (100:100) with their new 5 Tesla reactor";
return React.createElement(G__44159,G__44160,G__44161);
})();
var G__44147 = (function (){var G__44162 = "div";
var G__44163 = ({"id": "mission2"});
var G__44164 = "In order to continue fusion research in 2019 we need to raise approximately $150,000.";
return React.createElement(G__44162,G__44163,G__44164);
})();
var G__44148 = (function (){var G__44165 = "div";
var G__44166 = ({"id": "mission3"});
var G__44167 = "In order to create a power-generating reactor once we know how many Teslas of magnetic field we need and how to orient the field-generation devices, will require approximately $15 Million";
return React.createElement(G__44165,G__44166,G__44167);
})();
var G__44149 = (function (){var G__44168 = "div";
var G__44169 = ({"id": "mission4"});
var G__44170 = "Fusion will enable Humanity to harness the power of the stars.";
return React.createElement(G__44168,G__44169,G__44170);
})();
var G__44150 = (function (){var G__44171 = "div";
var G__44172 = ({"id": "mission5"});
var G__44173 = "A fusion future would leave cities free of smog and free of adverse pollution in the air, water and earth.";
return React.createElement(G__44171,G__44172,G__44173);
})();
var G__44151 = (function (){var G__44174 = "div";
var G__44175 = ({"id": "mission6"});
var G__44176 = "Our priority is funding fusion so that Humanity will become 100% green and sustainable as soon as possible.";
return React.createElement(G__44174,G__44175,G__44176);
})();
var G__44152 = (function (){var G__44177 = "div";
var G__44178 = ({"id": "mission7"});
var G__44179 = "Please contribute whatever you can.  The suggested donation is $15.00";
return React.createElement(G__44177,G__44178,G__44179);
})();
return React.createElement(G__44142,G__44143,G__44144,G__44145,G__44146,G__44147,G__44148,G__44149,G__44150,G__44151,G__44152);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,nesferado.client.show_fresh], null),"support-nf");
nesferado.client.post_comment_input = rum.core.build_defc((function (){
var G__44180 = "form";
var G__44181 = ({"id": "postcommentinput"});
var G__44182 = sablono.interpreter.create_element("textarea",({"value": rum.core.react(nesferado.client.nf_comment), "placeholder": "let us be kind", "onChange": ((function (G__44180,G__44181){
return (function (e){
var G__44184 = nesferado.client.nf_comment;
var G__44185 = e.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__44184,G__44185) : cljs.core.reset_BANG_.call(null,G__44184,G__44185));
});})(G__44180,G__44181))
, "className": "fullwidth"}));
var G__44183 = (function (){var G__44186 = "button";
var G__44187 = ({"type": "button", "onClick": ((function (G__44186,G__44180,G__44181,G__44182){
return (function (e){
var parent_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$selected_DASH_parent], null));
var username = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$current_DASH_user], null));
var curr_tv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_curr_DASH_id], null));
var new_comment_map = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nesferado.client.y,cljs.core.inc),cljs.core.cst$kw$contents,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.nf_comment) : cljs.core.deref.call(null,nesferado.client.nf_comment)),cljs.core.cst$kw$author,username,cljs.core.cst$kw$comments,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$ratings_DASH_total,(0),cljs.core.cst$kw$number_DASH_of_DASH_ratings,(0)], null);
var submit_comment_map = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$contents,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.nf_comment) : cljs.core.deref.call(null,nesferado.client.nf_comment)),cljs.core.cst$kw$parent_DASH_id,parent_id,cljs.core.cst$kw$curr_DASH_tv,curr_tv,cljs.core.cst$kw$author,username], null);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.nf_comment) : cljs.core.deref.call(null,nesferado.client.nf_comment))))){
var G__44189_44190 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clientsent_SLASH_new_DASH_comment,submit_comment_map], null);
(nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__44189_44190) : nesferado.client.chsk_send_BANG_.call(null,G__44189_44190));
} else {
}

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(nesferado.client.nf_comment,"") : cljs.core.reset_BANG_.call(null,nesferado.client.nf_comment,""));
});})(G__44186,G__44180,G__44181,G__44182))
, "className": "fullwidth replySelected"});
var G__44188 = "Comment in reply to selected.";
return React.createElement(G__44186,G__44187,G__44188);
})();
return React.createElement(G__44180,G__44181,G__44182,G__44183);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"post-comment-input");
nesferado.client.chat_area = rum.core.build_defc((function (){
var G__44191 = "form";
var G__44192 = ({"id": "chat_arena"});
var G__44193 = (function (){var G__44196 = "div";
var G__44197 = ({"id": "chatchat", "className": "fullwidth"});
var G__44198 = sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__44196,G__44197,G__44191,G__44192){
return (function (chat_map){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"msg"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"msgauthor"], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(chat_map,cljs.core.cst$kw$author)], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(chat_map,cljs.core.cst$kw$message)], null);
});})(G__44196,G__44197,G__44191,G__44192))
,rum.core.react(nesferado.client.nf_chat_messages)));
return React.createElement(G__44196,G__44197,G__44198);
})();
var G__44194 = sablono.interpreter.create_element("input",({"id": "chatchatinput", "value": rum.core.react(nesferado.client.nf_chat_input), "onChange": ((function (G__44191,G__44192,G__44193){
return (function (e){
var G__44199 = nesferado.client.nf_chat_input;
var G__44200 = e.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__44199,G__44200) : cljs.core.reset_BANG_.call(null,G__44199,G__44200));
});})(G__44191,G__44192,G__44193))
, "placeholder": "chat chat", "className": "fullwidth"}));
var G__44195 = (function (){var G__44201 = "button";
var G__44202 = ({"id": "chatchatsubmit", "type": "button", "onClick": ((function (G__44201,G__44191,G__44192,G__44193,G__44194){
return (function (e){
var username = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.input_state) : cljs.core.deref.call(null,nesferado.client.input_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$current_DASH_user], null));
var new_chat_message_map = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nesferado.client.y,cljs.core.inc),cljs.core.cst$kw$message,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.nf_chat_input) : cljs.core.deref.call(null,nesferado.client.nf_chat_input)),cljs.core.cst$kw$author,username], null);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.nf_chat_input) : cljs.core.deref.call(null,nesferado.client.nf_chat_input))))){
var G__44204_44205 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clientsent_SLASH_new_DASH_chat_DASH_message,new_chat_message_map], null);
(nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__44204_44205) : nesferado.client.chsk_send_BANG_.call(null,G__44204_44205));
} else {
}

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(nesferado.client.nf_chat_input,"") : cljs.core.reset_BANG_.call(null,nesferado.client.nf_chat_input,""));
});})(G__44201,G__44191,G__44192,G__44193,G__44194))
, "className": "fullwidth chatbutton"});
var G__44203 = "Send Message";
return React.createElement(G__44201,G__44202,G__44203);
})();
return React.createElement(G__44191,G__44192,G__44193,G__44194,G__44195);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"chat-area");
nesferado.client.log_in_to_chat_pls = rum.core.build_defc((function (){
var G__44208 = "div";
var G__44209 = ({"id": "pls"});
var G__44210 = "please log in to chat.";
return React.createElement(G__44208,G__44209,G__44210);
}),null,"log-in-to-chat-pls");
nesferado.client.footer = rum.core.build_defc((function (){
var G__44213 = "div";
var G__44214 = ({"id": "footer"});
var G__44215 = "Welcome to nonforum.  Here you will find real-time threads and discussion boards.";
var G__44216 = (function (){var G__44222 = "div";
var G__44223 = ({"id": "foot1"});
var G__44224 = "Nonforum is a place to start discussion threads based on questions or simply on a topic.";
return React.createElement(G__44222,G__44223,G__44224);
})();
var G__44217 = (function (){var G__44225 = "div";
var G__44226 = ({"id": "foot2"});
var G__44227 = "Nonforum is also a place where you can share links and discuss them, voting contributions up or down.";
return React.createElement(G__44225,G__44226,G__44227);
})();
var G__44218 = (function (){var G__44228 = "div";
var G__44229 = ({"id": "foot3"});
var G__44230 = "When you are logged in you can vote on entries with votes signifying double-plus (++), plus (+), and minus (-)";
return React.createElement(G__44228,G__44229,G__44230);
})();
var G__44219 = (function (){var G__44231 = "div";
var G__44232 = ({"id": "foot4"});
var G__44233 = "The more you participate, the greater your community trust rating.";
return React.createElement(G__44231,G__44232,G__44233);
})();
var G__44220 = (function (){var G__44234 = "div";
var G__44235 = ({"id": "foot5"});
var G__44236 = "By providing insightful comments and furthering discussions, your community rating will increase.";
return React.createElement(G__44234,G__44235,G__44236);
})();
var G__44221 = (function (){var G__44237 = "div";
var G__44238 = ({"id": "foot7"});
var G__44239 = "For complete information on how to use nonforum most effectively, please check out the ";
var G__44240 = (function (){var G__44241 = "a";
var G__44242 = ({"href": "/about"});
var G__44243 = "About Page";
return React.createElement(G__44241,G__44242,G__44243);
})();
return React.createElement(G__44237,G__44238,G__44239,G__44240);
})();
return React.createElement(G__44213,G__44214,G__44215,G__44216,G__44217,G__44218,G__44219,G__44220,G__44221);
}),null,"footer");
nesferado.client.about_fields = rum.core.build_defcs((function (state){
var G__44246 = "div";
var G__44247 = ({"id": "aboutnf"});
var G__44248 = (function (){var G__44255 = "div";
var G__44256 = ({"id": "about1", "className": "about"});
var G__44257 = "Nonforum is a realtime forum.";
return React.createElement(G__44255,G__44256,G__44257);
})();
var G__44249 = (function (){var G__44258 = "div";
var G__44259 = ({"id": "about2", "className": "about"});
var G__44260 = "Click on a news tile to see its details.";
return React.createElement(G__44258,G__44259,G__44260);
})();
var G__44250 = (function (){var G__44261 = "div";
var G__44262 = ({"id": "about3", "className": "about"});
var G__44263 = "To comment, click on the element you wish to comment on.  This can be another comment or the original news piece.";
return React.createElement(G__44261,G__44262,G__44263);
})();
var G__44251 = (function (){var G__44264 = "div";
var G__44265 = ({"id": "about4", "className": "about"});
var G__44266 = "A selected comment will be fig colored when selected.";
return React.createElement(G__44264,G__44265,G__44266);
})();
var G__44252 = (function (){var G__44267 = "div";
var G__44268 = ({"id": "about5", "className": "about"});
var G__44269 = "Voting is a natural right and you can vote on any submission or comment via trivote. There are three levels to the tri-vote, double-plus, plus, and minus.  These correlate roughly to the spectrum of 0-99 and eventually, after a threshold number of votes has been met, the dice will transform to a number likely landing between 30 and 99.";
return React.createElement(G__44267,G__44268,G__44269);
})();
var G__44253 = (function (){var G__44270 = "div";
var G__44271 = ({"id": "about6", "className": "about"});
var G__44272 = "We are helping to raise money for Fusion Research with Horne Technologies.  Fusion will bring us the pollution-free future rapidly into our presence.  Help humanity harness the power of the stars!  Donate today at ";
var G__44273 = (function (){var G__44274 = "a";
var G__44275 = ({"href": "/donate"});
var G__44276 = "nonforum.com/donate";
return React.createElement(G__44274,G__44275,G__44276);
})();
return React.createElement(G__44270,G__44271,G__44272,G__44273);
})();
var G__44254 = (function (){var G__44277 = "img";
var G__44278 = ({"src": "nonforum_flyre.png", "className": "flyer"});
return React.createElement(G__44277,G__44278);
})();
return React.createElement(G__44246,G__44247,G__44248,G__44249,G__44250,G__44251,G__44252,G__44253,G__44254);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,nesferado.client.show_fresh], null),"about-fields");
nesferado.client.non_buzz_placeholder = rum.core.build_defc((function (){
var G__44281 = "div";
var G__44282 = ({"className": "nonbuzz"});
var G__44283 = "nonforum";
return React.createElement(G__44281,G__44282,G__44283);
}),null,"non-buzz-placeholder");
nesferado.client.sponsored_message = rum.core.build_defcs((function (state){
var G__44286 = "div";
var G__44287 = ({"id": "spmsg"});
var G__44288 = "Help fund Horne Technologies in their next round of Fusion Research, a 5Tesla reactor ";
var G__44289 = (function (){var G__44290 = "a";
var G__44291 = ({"href": "donate"});
var G__44292 = "donate";
return React.createElement(G__44290,G__44291,G__44292);
})();
return React.createElement(G__44286,G__44287,G__44288,G__44289);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,nesferado.client.show_fresh], null),"sponsored-message");
nesferado.client.go_back_button = rum.core.build_defc((function (){
var active_state = "all";
var G__44293 = "div";
var G__44294 = ({"onClick": ((function (G__44293,active_state){
return (function (e){
e.stopPropagation();

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_current], null),"");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_curr_DASH_id], null),"");
});})(G__44293,active_state))
, "className": "goback"});
var G__44295 = "< Back to ";
var G__44296 = sablono.interpreter.interpret(active_state);
return React.createElement(G__44293,G__44294,G__44295,G__44296);
}),null,"go-back-button");
nesferado.client.input_fields = rum.core.build_defc((function (){
var attrs44297 = (nesferado.client.post_comment_input.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.post_comment_input.cljs$core$IFn$_invoke$arity$0() : nesferado.client.post_comment_input.call(null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs44297))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"inputs-contain"], null),attrs44297], 0))):({"id": "inputs-contain"})),((cljs.core.map_QMARK_(attrs44297))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs44297)], null)));
}),null,"input-fields");
nesferado.client.start = rum.core.build_defc((function (){
var logged_in = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rum.core.react(nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$logged_DASH_in], null));
var tv_current = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rum.core.react(nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_current], null));
var curr_comments = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rum.core.react(nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$tv_DASH_comments], null));
var show_sidebar = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rum.core.react(nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$show_DASH_sidebar], null));
var curr_view = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rum.core.react(nesferado.client.input_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$current_DASH_view], null));
var temp__4655__auto___44299 = document.getElementById("output");
if(cljs.core.truth_(temp__4655__auto___44299)){
var target_el_44300 = temp__4655__auto___44299;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,logged_in)){
target_el_44300.classList = "hideMe";
} else {
target_el_44300.classList = "justMounted";
}
} else {
}

var attrs44298 = (nesferado.client.top_bar.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.top_bar.cljs$core$IFn$_invoke$arity$0() : nesferado.client.top_bar.call(null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs44298))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"maincontain"], null),attrs44298], 0))):({"id": "maincontain"})),((cljs.core.map_QMARK_(attrs44298))?new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,show_sidebar))?sablono.interpreter.interpret((nesferado.client.side_bar.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.side_bar.cljs$core$IFn$_invoke$arity$0() : nesferado.client.side_bar.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/feedback",curr_view))?sablono.interpreter.interpret((nesferado.client.send_feedback_fields.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.send_feedback_fields.cljs$core$IFn$_invoke$arity$0() : nesferado.client.send_feedback_fields.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/about",curr_view))?sablono.interpreter.interpret((nesferado.client.about_fields.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.about_fields.cljs$core$IFn$_invoke$arity$0() : nesferado.client.about_fields.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/email-public",curr_view))?sablono.interpreter.interpret((nesferado.client.edit_profile.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.edit_profile.cljs$core$IFn$_invoke$arity$0() : nesferado.client.edit_profile.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/profile",curr_view))?sablono.interpreter.interpret((nesferado.client.edit_profile.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.edit_profile.cljs$core$IFn$_invoke$arity$0() : nesferado.client.edit_profile.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/email-recovery",curr_view))?sablono.interpreter.interpret((nesferado.client.set_recovery_email.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.set_recovery_email.cljs$core$IFn$_invoke$arity$0() : nesferado.client.set_recovery_email.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/password-update",curr_view))?sablono.interpreter.interpret((nesferado.client.set_password.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.set_password.cljs$core$IFn$_invoke$arity$0() : nesferado.client.set_password.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/submit",curr_view))?sablono.interpreter.interpret((nesferado.client.post_input.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.post_input.cljs$core$IFn$_invoke$arity$0() : nesferado.client.post_input.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/donate",curr_view))?sablono.interpreter.interpret((nesferado.client.support_nf.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.support_nf.cljs$core$IFn$_invoke$arity$0() : nesferado.client.support_nf.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/fusion",curr_view))?sablono.interpreter.interpret((nesferado.client.support_nf.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.support_nf.cljs$core$IFn$_invoke$arity$0() : nesferado.client.support_nf.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/chat",curr_view))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,logged_in))?sablono.interpreter.interpret((nesferado.client.chat_area.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.chat_area.cljs$core$IFn$_invoke$arity$0() : nesferado.client.chat_area.call(null))):sablono.interpreter.interpret((nesferado.client.log_in_to_chat_pls.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.log_in_to_chat_pls.cljs$core$IFn$_invoke$arity$0() : nesferado.client.log_in_to_chat_pls.call(null)))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/login",curr_view))?sablono.interpreter.interpret((nesferado.client.login_bar.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.login_bar.cljs$core$IFn$_invoke$arity$0() : nesferado.client.login_bar.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",curr_view))?((!(cljs.core.empty_QMARK_(tv_current)))?sablono.interpreter.interpret((nesferado.client.go_back_button.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.go_back_button.cljs$core$IFn$_invoke$arity$0() : nesferado.client.go_back_button.call(null))):null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",curr_view))?((!(cljs.core.empty_QMARK_(tv_current)))?sablono.interpreter.interpret((nesferado.client.sponsored_message.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.sponsored_message.cljs$core$IFn$_invoke$arity$0() : nesferado.client.sponsored_message.call(null))):null):null),(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",curr_view)) && (cljs.core.empty_QMARK_(tv_current)))?sablono.interpreter.interpret((nesferado.client.television.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.television.cljs$core$IFn$_invoke$arity$0() : nesferado.client.television.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",curr_view))?((!(cljs.core.empty_QMARK_(tv_current)))?sablono.interpreter.interpret((nesferado.client.tv_cell.cljs$core$IFn$_invoke$arity$1 ? nesferado.client.tv_cell.cljs$core$IFn$_invoke$arity$1(tv_current) : nesferado.client.tv_cell.call(null,tv_current))):null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",curr_view))?((!(cljs.core.empty_QMARK_(tv_current)))?sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(nesferado.client.render_item,curr_comments)):null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",curr_view))?((!(cljs.core.empty_QMARK_(tv_current)))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,logged_in))?sablono.interpreter.interpret((nesferado.client.input_fields.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.input_fields.cljs$core$IFn$_invoke$arity$0() : nesferado.client.input_fields.call(null))):null):null):null)], null):new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs44298),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,show_sidebar))?sablono.interpreter.interpret((nesferado.client.side_bar.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.side_bar.cljs$core$IFn$_invoke$arity$0() : nesferado.client.side_bar.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/feedback",curr_view))?sablono.interpreter.interpret((nesferado.client.send_feedback_fields.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.send_feedback_fields.cljs$core$IFn$_invoke$arity$0() : nesferado.client.send_feedback_fields.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/about",curr_view))?sablono.interpreter.interpret((nesferado.client.about_fields.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.about_fields.cljs$core$IFn$_invoke$arity$0() : nesferado.client.about_fields.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/email-public",curr_view))?sablono.interpreter.interpret((nesferado.client.edit_profile.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.edit_profile.cljs$core$IFn$_invoke$arity$0() : nesferado.client.edit_profile.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/profile",curr_view))?sablono.interpreter.interpret((nesferado.client.edit_profile.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.edit_profile.cljs$core$IFn$_invoke$arity$0() : nesferado.client.edit_profile.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/email-recovery",curr_view))?sablono.interpreter.interpret((nesferado.client.set_recovery_email.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.set_recovery_email.cljs$core$IFn$_invoke$arity$0() : nesferado.client.set_recovery_email.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/password-update",curr_view))?sablono.interpreter.interpret((nesferado.client.set_password.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.set_password.cljs$core$IFn$_invoke$arity$0() : nesferado.client.set_password.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/submit",curr_view))?sablono.interpreter.interpret((nesferado.client.post_input.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.post_input.cljs$core$IFn$_invoke$arity$0() : nesferado.client.post_input.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/donate",curr_view))?sablono.interpreter.interpret((nesferado.client.support_nf.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.support_nf.cljs$core$IFn$_invoke$arity$0() : nesferado.client.support_nf.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/fusion",curr_view))?sablono.interpreter.interpret((nesferado.client.support_nf.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.support_nf.cljs$core$IFn$_invoke$arity$0() : nesferado.client.support_nf.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/chat",curr_view))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,logged_in))?sablono.interpreter.interpret((nesferado.client.chat_area.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.chat_area.cljs$core$IFn$_invoke$arity$0() : nesferado.client.chat_area.call(null))):sablono.interpreter.interpret((nesferado.client.log_in_to_chat_pls.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.log_in_to_chat_pls.cljs$core$IFn$_invoke$arity$0() : nesferado.client.log_in_to_chat_pls.call(null)))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/login",curr_view))?sablono.interpreter.interpret((nesferado.client.login_bar.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.login_bar.cljs$core$IFn$_invoke$arity$0() : nesferado.client.login_bar.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",curr_view))?((!(cljs.core.empty_QMARK_(tv_current)))?sablono.interpreter.interpret((nesferado.client.go_back_button.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.go_back_button.cljs$core$IFn$_invoke$arity$0() : nesferado.client.go_back_button.call(null))):null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",curr_view))?((!(cljs.core.empty_QMARK_(tv_current)))?sablono.interpreter.interpret((nesferado.client.sponsored_message.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.sponsored_message.cljs$core$IFn$_invoke$arity$0() : nesferado.client.sponsored_message.call(null))):null):null),(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",curr_view)) && (cljs.core.empty_QMARK_(tv_current)))?sablono.interpreter.interpret((nesferado.client.television.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.television.cljs$core$IFn$_invoke$arity$0() : nesferado.client.television.call(null))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",curr_view))?((!(cljs.core.empty_QMARK_(tv_current)))?sablono.interpreter.interpret((nesferado.client.tv_cell.cljs$core$IFn$_invoke$arity$1 ? nesferado.client.tv_cell.cljs$core$IFn$_invoke$arity$1(tv_current) : nesferado.client.tv_cell.call(null,tv_current))):null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",curr_view))?((!(cljs.core.empty_QMARK_(tv_current)))?sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(nesferado.client.render_item,curr_comments)):null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",curr_view))?((!(cljs.core.empty_QMARK_(tv_current)))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,logged_in))?sablono.interpreter.interpret((nesferado.client.input_fields.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.input_fields.cljs$core$IFn$_invoke$arity$0() : nesferado.client.input_fields.call(null))):null):null):null)], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"start");
rum.core.mount((nesferado.client.start.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.start.cljs$core$IFn$_invoke$arity$0() : nesferado.client.start.call(null)),document.getElementById("start"));
rum.core.mount((nesferado.client.footer.cljs$core$IFn$_invoke$arity$0 ? nesferado.client.footer.cljs$core$IFn$_invoke$arity$0() : nesferado.client.footer.call(null)),document.getElementById("footing"));
nesferado.client.swap_rating_fn = (function nesferado$client$swap_rating_fn(p__44301,d){
var map__44310 = p__44301;
var map__44310__$1 = ((((!((map__44310 == null)))?((((map__44310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44310):map__44310);
var nf = map__44310__$1;
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44310__$1,cljs.core.cst$kw$blurbs);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nf,cljs.core.cst$kw$blurbs,cljs.core.vec((function (){var iter__7163__auto__ = ((function (map__44310,map__44310__$1,nf,v){
return (function nesferado$client$swap_rating_fn_$_iter__44312(s__44313){
return (new cljs.core.LazySeq(null,((function (map__44310,map__44310__$1,nf,v){
return (function (){
var s__44313__$1 = s__44313;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__44313__$1);
if(temp__4657__auto__){
var s__44313__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44313__$2)){
var c__7161__auto__ = cljs.core.chunk_first(s__44313__$2);
var size__7162__auto__ = cljs.core.count(c__7161__auto__);
var b__44315 = cljs.core.chunk_buffer(size__7162__auto__);
if((function (){var i__44314 = (0);
while(true){
if((i__44314 < size__7162__auto__)){
var entry = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7161__auto__,i__44314);
cljs.core.chunk_append(b__44315,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$bid.cljs$core$IFn$_invoke$arity$1(entry),cljs.core.cst$kw$bid.cljs$core$IFn$_invoke$arity$1(d)))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([entry,d], 0)):entry));

var G__44318 = (i__44314 + (1));
i__44314 = G__44318;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44315),nesferado$client$swap_rating_fn_$_iter__44312(cljs.core.chunk_rest(s__44313__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44315),null);
}
} else {
var entry = cljs.core.first(s__44313__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$bid.cljs$core$IFn$_invoke$arity$1(entry),cljs.core.cst$kw$bid.cljs$core$IFn$_invoke$arity$1(d)))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([entry,d], 0)):entry),nesferado$client$swap_rating_fn_$_iter__44312(cljs.core.rest(s__44313__$2)));
}
} else {
return null;
}
break;
}
});})(map__44310,map__44310__$1,nf,v))
,null,null));
});})(map__44310,map__44310__$1,nf,v))
;
return iter__7163__auto__(v);
})()));
});
nesferado.client.swap_rating_active_blurb = (function nesferado$client$swap_rating_active_blurb(p__44319,d){
var map__44328 = p__44319;
var map__44328__$1 = ((((!((map__44328 == null)))?((((map__44328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44328):map__44328);
var nf = map__44328__$1;
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44328__$1,cljs.core.cst$kw$nf);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nf,cljs.core.cst$kw$nf,cljs.core.vec((function (){var iter__7163__auto__ = ((function (map__44328,map__44328__$1,nf,v){
return (function nesferado$client$swap_rating_active_blurb_$_iter__44330(s__44331){
return (new cljs.core.LazySeq(null,((function (map__44328,map__44328__$1,nf,v){
return (function (){
var s__44331__$1 = s__44331;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__44331__$1);
if(temp__4657__auto__){
var s__44331__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44331__$2)){
var c__7161__auto__ = cljs.core.chunk_first(s__44331__$2);
var size__7162__auto__ = cljs.core.count(c__7161__auto__);
var b__44333 = cljs.core.chunk_buffer(size__7162__auto__);
if((function (){var i__44332 = (0);
while(true){
if((i__44332 < size__7162__auto__)){
var entry = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7161__auto__,i__44332);
cljs.core.chunk_append(b__44333,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$active_DASH_blurb.cljs$core$IFn$_invoke$arity$1(entry),cljs.core.cst$kw$bid.cljs$core$IFn$_invoke$arity$1(d)))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([entry,d], 0)):entry));

var G__44336 = (i__44332 + (1));
i__44332 = G__44336;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44333),nesferado$client$swap_rating_active_blurb_$_iter__44330(cljs.core.chunk_rest(s__44331__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44333),null);
}
} else {
var entry = cljs.core.first(s__44331__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$active_DASH_blurb.cljs$core$IFn$_invoke$arity$1(entry),cljs.core.cst$kw$bid.cljs$core$IFn$_invoke$arity$1(d)))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([entry,d], 0)):entry),nesferado$client$swap_rating_active_blurb_$_iter__44330(cljs.core.rest(s__44331__$2)));
}
} else {
return null;
}
break;
}
});})(map__44328,map__44328__$1,nf,v))
,null,null));
});})(map__44328,map__44328__$1,nf,v))
;
return iter__7163__auto__(v);
})()));
});
nesferado.client.ask_server_for_blurbs = (function nesferado$client$ask_server_for_blurbs(){
var G__44341 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clientsent_SLASH_req_DASH_all_DASH_blurbs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$can_DASH_i_DASH_please_DASH_has_DASH_the,"blurbs"], null)], null);
var G__44342 = (3000);
var G__44343 = ((function (G__44341,G__44342){
return (function (blurb_core){
if(cljs.core.truth_(taoensso.sente.cb_success_QMARK_(blurb_core))){
console.log("callback with blurbs rcevd");

console.log(":cs/rab ",blurb_core);

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(nesferado.client.tv_state,blurb_core) : cljs.core.reset_BANG_.call(null,nesferado.client.tv_state,blurb_core));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nesferado.client.tv_state,cljs.core.vec);

accountant.core.dispatch_current_BANG_();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nesferado.client.tv_state,((function (G__44341,G__44342){
return (function (p1__44337_SHARP_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ratings_DASH_total,p1__44337_SHARP_);
});})(G__44341,G__44342))
);
} else {
return null;
}
});})(G__44341,G__44342))
;
return (nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 ? nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(G__44341,G__44342,G__44343) : nesferado.client.chsk_send_BANG_.call(null,G__44341,G__44342,G__44343));
});
nesferado.client.ask_server_for_comments = (function nesferado$client$ask_server_for_comments(){
var G__44347 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clientsent_SLASH_req_DASH_all_DASH_comments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$can_DASH_i_DASH_please_DASH_has_DASH_the,"comments"], null)], null);
var G__44348 = (3000);
var G__44349 = ((function (G__44347,G__44348){
return (function (comments_core){
if(cljs.core.truth_(taoensso.sente.cb_success_QMARK_(comments_core))){
console.log("callback with comments rcevd");

console.log(":cs/rac ",comments_core);

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(nesferado.client.posts,comments_core) : cljs.core.reset_BANG_.call(null,nesferado.client.posts,comments_core));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nesferado.client.posts,cljs.core.vec);
} else {
return null;
}
});})(G__44347,G__44348))
;
return (nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 ? nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(G__44347,G__44348,G__44349) : nesferado.client.chsk_send_BANG_.call(null,G__44347,G__44348,G__44349));
});
nesferado.client.ask_server_for_chat_messages = (function nesferado$client$ask_server_for_chat_messages(){
var G__44353 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clientsent_SLASH_req_DASH_all_DASH_chat_DASH_messages,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$can_DASH_i_DASH_please_DASH_has_DASH_the,"comments"], null)], null);
var G__44354 = (3000);
var G__44355 = ((function (G__44353,G__44354){
return (function (chat_messages_core){
if(cljs.core.truth_(taoensso.sente.cb_success_QMARK_(chat_messages_core))){
console.log("callback with chat messages rcevd");

console.log(":cs/rac ",chat_messages_core);

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(nesferado.client.nf_chat_messages,chat_messages_core) : cljs.core.reset_BANG_.call(null,nesferado.client.nf_chat_messages,chat_messages_core));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nesferado.client.nf_chat_messages,cljs.core.vec);
} else {
return null;
}
});})(G__44353,G__44354))
;
return (nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 ? nesferado.client.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(G__44353,G__44354,G__44355) : nesferado.client.chsk_send_BANG_.call(null,G__44353,G__44354,G__44355));
});
nesferado.client.find_tv_item = (function nesferado$client$find_tv_item(pid){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nesferado.client.tv_state,cljs.core.vec);

var first_hit = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__44357_SHARP_,p2__44356_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pid,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p2__44356_SHARP_))){
return p1__44357_SHARP_;
} else {
return null;
}
}),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.tv_state) : cljs.core.deref.call(null,nesferado.client.tv_state))));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([first_hit], 0));

return first_hit;
});
nesferado.client.find_cm_item = (function nesferado$client$find_cm_item(pid){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nesferado.client.posts,cljs.core.vec);

var first_hit = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__44359_SHARP_,p2__44358_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pid,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p2__44358_SHARP_))){
return p1__44359_SHARP_;
} else {
return null;
}
}),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.posts) : cljs.core.deref.call(null,nesferado.client.posts))));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([first_hit], 0));

return first_hit;
});
nesferado.client.auto_login = (function nesferado$client$auto_login(){
nesferado.client.__GT_output_BANG_("Attempting auto-login ...");

var G__44365 = "/check-login";
var G__44366 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$timeout_DASH_ms,(7000),cljs.core.cst$kw$headers,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$X_DASH_CSRF_DASH_Token,cljs.core.cst$kw$csrf_DASH_token.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nesferado.client.chsk_state) : cljs.core.deref.call(null,nesferado.client.chsk_state)))], null),cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$uid,nesferado.client.get_item(cljs.core.cst$kw$uid),cljs.core.cst$kw$auth_DASH_token,nesferado.client.get_item(cljs.core.cst$kw$auth_DASH_key),cljs.core.cst$kw$login_DASH_time,nesferado.client.get_item(cljs.core.cst$kw$login_DASH_time)], null),cljs.core.cst$kw$type,cljs.core.cst$kw$text], null);
var G__44367 = ((function (G__44365,G__44366){
return (function (ajax_resp){
nesferado.client.__GT_output_BANG_([cljs.core.str("Auto-login response: "),cljs.core.str(ajax_resp)].join(''));

var map__44368 = ajax_resp;
var map__44368__$1 = ((((!((map__44368 == null)))?((((map__44368.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44368.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44368):map__44368);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44368__$1,cljs.core.cst$kw$success_QMARK_);
var _QMARK_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44368__$1,cljs.core.cst$kw$_QMARK_status);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44368__$1,cljs.core.cst$kw$_QMARK_error);
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44368__$1,cljs.core.cst$kw$_QMARK_content);
var _QMARK_content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44368__$1,cljs.core.cst$kw$_QMARK_content_DASH_type);
var http_status = cljs.core.cst$kw$_QMARK_status.cljs$core$IFn$_invoke$arity$1(ajax_resp);
var auto_login_successful_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),http_status);
var stuff = cljs.reader.read_string(_QMARK_content);
if(!(auto_login_successful_QMARK_)){
nesferado.client.__GT_output_BANG_("Auto-login failed");

console.log("auto-login failed");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$logged_DASH_in], null),false);
} else {
nesferado.client.__GT_output_BANG_("Auto-login success!");

console.log("auto-login success.");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$token], null),nesferado.client.get_item(cljs.core.cst$kw$auth_DASH_key));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$login_DASH_time], null),nesferado.client.get_item(cljs.core.cst$kw$login_DASH_time));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$logged_DASH_in], null),true);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$current_DASH_user], null),nesferado.client.get_item(cljs.core.cst$kw$uid));

return taoensso.sente.chsk_reconnect_BANG_(nesferado.client.chsk);
}
});})(G__44365,G__44366))
;
return (taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__44365,G__44366,G__44367) : taoensso.sente.ajax_lite.call(null,G__44365,G__44366,G__44367));
});
if(typeof nesferado.client._event_msg_handler !== 'undefined'){
} else {
/**
 * Multimethod to handle Sente `event-msg`s
 */
nesferado.client._event_msg_handler = (function (){var method_table__7308__auto__ = (function (){var G__44370 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__44370) : cljs.core.atom.call(null,G__44370));
})();
var prefer_table__7309__auto__ = (function (){var G__44371 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__44371) : cljs.core.atom.call(null,G__44371));
})();
var method_cache__7310__auto__ = (function (){var G__44372 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__44372) : cljs.core.atom.call(null,G__44372));
})();
var cached_hierarchy__7311__auto__ = (function (){var G__44373 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__44373) : cljs.core.atom.call(null,G__44373));
})();
var hierarchy__7312__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("nesferado.client","-event-msg-handler"),cljs.core.cst$kw$id,cljs.core.cst$kw$default,hierarchy__7312__auto__,method_table__7308__auto__,prefer_table__7309__auto__,method_cache__7310__auto__,cached_hierarchy__7311__auto__));
})();
}
nesferado.client.event_msg_handler = (function nesferado$client$event_msg_handler(p__44374){
var map__44377 = p__44374;
var map__44377__$1 = ((((!((map__44377 == null)))?((((map__44377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44377):map__44377);
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44377__$1,cljs.core.cst$kw$_);
var __ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44377__$1,cljs.core.cst$kw$__);
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44377__$1,cljs.core.cst$kw$_QMARK_data);
console.log([cljs.core.str("&&"),cljs.core.str(_QMARK_data)].join(''));

console.log([cljs.core.str("&! "),cljs.core.str(cljs.core.first(_QMARK_data))].join(''));

var event_title = cljs.core.first(_QMARK_data);
var new_data = cljs.core.second(_QMARK_data);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,cljs.core.cst$kw$ever_DASH_opened_QMARK_.cljs$core$IFn$_invoke$arity$1(event_title))){
nesferado.client.auto_login();

console.log("Hey I'm trying to get new data yo, since :ever-opened? is false");

nesferado.client.ask_server_for_blurbs();

nesferado.client.ask_server_for_comments();

return nesferado.client.ask_server_for_chat_messages();
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event_title,cljs.core.cst$kw$serversent_SLASH_new_DASH_chat_DASH_message)){
var new_chat_message_map = new_data;
console.log([cljs.core.str("&# "),cljs.core.str(new_chat_message_map)].join(''));

console.log("adding new chat message to atom...");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(nesferado.client.nf_chat_messages,cljs.core.conj,new_chat_message_map);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nesferado.client.nf_chat_messages,cljs.core.vec);

return console.log("added new chat message to atom");
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

var G__44381 = nesferado.client.router_;
var G__44382 = taoensso.sente.start_client_chsk_router_BANG_(nesferado.client.ch_chsk,nesferado.client.event_msg_handler);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__44381,G__44382) : cljs.core.reset_BANG_.call(null,G__44381,G__44382));
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
window.addEventListener("DOMContentLoaded",(function (){
if(!(cljs.core.empty_QMARK_(nesferado.client.get_item(cljs.core.cst$kw$auth_DASH_key)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$token], null),nesferado.client.get_item(cljs.core.cst$kw$auth_DASH_key));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$login_DASH_time], null),nesferado.client.get_item(cljs.core.cst$kw$login_DASH_time));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$current_DASH_user], null),nesferado.client.get_item(cljs.core.cst$kw$uid));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nesferado.client.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs,(0),cljs.core.cst$kw$logged_DASH_in], null),true);
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
