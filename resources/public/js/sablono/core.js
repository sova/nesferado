// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__28883__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__28880 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__28881 = cljs.core.seq(vec__28880);
var first__28882 = cljs.core.first(seq__28881);
var seq__28881__$1 = cljs.core.next(seq__28881);
var tag = first__28882;
var body = seq__28881__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__28883 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28884__i = 0, G__28884__a = new Array(arguments.length -  0);
while (G__28884__i < G__28884__a.length) {G__28884__a[G__28884__i] = arguments[G__28884__i + 0]; ++G__28884__i;}
  args = new cljs.core.IndexedSeq(G__28884__a,0);
} 
return G__28883__delegate.call(this,args);};
G__28883.cljs$lang$maxFixedArity = 0;
G__28883.cljs$lang$applyTo = (function (arglist__28885){
var args = cljs.core.seq(arglist__28885);
return G__28883__delegate(args);
});
G__28883.cljs$core$IFn$_invoke$arity$variadic = G__28883__delegate;
return G__28883;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7163__auto__ = (function sablono$core$update_arglists_$_iter__28892(s__28893){
return (new cljs.core.LazySeq(null,(function (){
var s__28893__$1 = s__28893;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__28893__$1);
if(temp__4657__auto__){
var s__28893__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28893__$2)){
var c__7161__auto__ = cljs.core.chunk_first(s__28893__$2);
var size__7162__auto__ = cljs.core.count(c__7161__auto__);
var b__28895 = cljs.core.chunk_buffer(size__7162__auto__);
if((function (){var i__28894 = (0);
while(true){
if((i__28894 < size__7162__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7161__auto__,i__28894);
cljs.core.chunk_append(b__28895,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__28898 = (i__28894 + (1));
i__28894 = G__28898;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28895),sablono$core$update_arglists_$_iter__28892(cljs.core.chunk_rest(s__28893__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28895),null);
}
} else {
var args = cljs.core.first(s__28893__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__28892(cljs.core.rest(s__28893__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7163__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__7461__auto__ = [];
var len__7454__auto___28906 = arguments.length;
var i__7455__auto___28907 = (0);
while(true){
if((i__7455__auto___28907 < len__7454__auto___28906)){
args__7461__auto__.push((arguments[i__7455__auto___28907]));

var G__28908 = (i__7455__auto___28907 + (1));
i__7455__auto___28907 = G__28908;
continue;
} else {
}
break;
}

var argseq__7462__auto__ = ((((0) < args__7461__auto__.length))?(new cljs.core.IndexedSeq(args__7461__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7462__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7163__auto__ = (function sablono$core$iter__28900(s__28901){
return (new cljs.core.LazySeq(null,(function (){
var s__28901__$1 = s__28901;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__28901__$1);
if(temp__4657__auto__){
var s__28901__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28901__$2)){
var c__7161__auto__ = cljs.core.chunk_first(s__28901__$2);
var size__7162__auto__ = cljs.core.count(c__7161__auto__);
var b__28903 = cljs.core.chunk_buffer(size__7162__auto__);
if((function (){var i__28902 = (0);
while(true){
if((i__28902 < size__7162__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7161__auto__,i__28902);
cljs.core.chunk_append(b__28903,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__28909 = (i__28902 + (1));
i__28902 = G__28909;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28903),sablono$core$iter__28900(cljs.core.chunk_rest(s__28901__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28903),null);
}
} else {
var style = cljs.core.first(s__28901__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__28900(cljs.core.rest(s__28901__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7163__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq28899){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28899));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__28914 = goog.dom.getDocument().body;
var G__28915 = (function (){var G__28916 = "script";
var G__28917 = ({"src": src});
return goog.dom.createDom(G__28916,G__28917);
})();
return goog.dom.appendChild(G__28914,G__28915);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to28918 = (function sablono$core$link_to28918(var_args){
var args__7461__auto__ = [];
var len__7454__auto___28921 = arguments.length;
var i__7455__auto___28922 = (0);
while(true){
if((i__7455__auto___28922 < len__7454__auto___28921)){
args__7461__auto__.push((arguments[i__7455__auto___28922]));

var G__28923 = (i__7455__auto___28922 + (1));
i__7455__auto___28922 = G__28923;
continue;
} else {
}
break;
}

var argseq__7462__auto__ = ((((1) < args__7461__auto__.length))?(new cljs.core.IndexedSeq(args__7461__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to28918.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7462__auto__);
});

sablono.core.link_to28918.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to28918.cljs$lang$maxFixedArity = (1);

sablono.core.link_to28918.cljs$lang$applyTo = (function (seq28919){
var G__28920 = cljs.core.first(seq28919);
var seq28919__$1 = cljs.core.next(seq28919);
return sablono.core.link_to28918.cljs$core$IFn$_invoke$arity$variadic(G__28920,seq28919__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to28918);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to28924 = (function sablono$core$mail_to28924(var_args){
var args__7461__auto__ = [];
var len__7454__auto___28931 = arguments.length;
var i__7455__auto___28932 = (0);
while(true){
if((i__7455__auto___28932 < len__7454__auto___28931)){
args__7461__auto__.push((arguments[i__7455__auto___28932]));

var G__28933 = (i__7455__auto___28932 + (1));
i__7455__auto___28932 = G__28933;
continue;
} else {
}
break;
}

var argseq__7462__auto__ = ((((1) < args__7461__auto__.length))?(new cljs.core.IndexedSeq(args__7461__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to28924.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7462__auto__);
});

sablono.core.mail_to28924.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__28927){
var vec__28928 = p__28927;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28928,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6383__auto__ = content;
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to28924.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to28924.cljs$lang$applyTo = (function (seq28925){
var G__28926 = cljs.core.first(seq28925);
var seq28925__$1 = cljs.core.next(seq28925);
return sablono.core.mail_to28924.cljs$core$IFn$_invoke$arity$variadic(G__28926,seq28925__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to28924);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list28934 = (function sablono$core$unordered_list28934(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__7163__auto__ = (function sablono$core$unordered_list28934_$_iter__28941(s__28942){
return (new cljs.core.LazySeq(null,(function (){
var s__28942__$1 = s__28942;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__28942__$1);
if(temp__4657__auto__){
var s__28942__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28942__$2)){
var c__7161__auto__ = cljs.core.chunk_first(s__28942__$2);
var size__7162__auto__ = cljs.core.count(c__7161__auto__);
var b__28944 = cljs.core.chunk_buffer(size__7162__auto__);
if((function (){var i__28943 = (0);
while(true){
if((i__28943 < size__7162__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7161__auto__,i__28943);
cljs.core.chunk_append(b__28944,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__28947 = (i__28943 + (1));
i__28943 = G__28947;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28944),sablono$core$unordered_list28934_$_iter__28941(cljs.core.chunk_rest(s__28942__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28944),null);
}
} else {
var x = cljs.core.first(s__28942__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list28934_$_iter__28941(cljs.core.rest(s__28942__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7163__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list28934);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list28948 = (function sablono$core$ordered_list28948(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__7163__auto__ = (function sablono$core$ordered_list28948_$_iter__28955(s__28956){
return (new cljs.core.LazySeq(null,(function (){
var s__28956__$1 = s__28956;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__28956__$1);
if(temp__4657__auto__){
var s__28956__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28956__$2)){
var c__7161__auto__ = cljs.core.chunk_first(s__28956__$2);
var size__7162__auto__ = cljs.core.count(c__7161__auto__);
var b__28958 = cljs.core.chunk_buffer(size__7162__auto__);
if((function (){var i__28957 = (0);
while(true){
if((i__28957 < size__7162__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7161__auto__,i__28957);
cljs.core.chunk_append(b__28958,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__28961 = (i__28957 + (1));
i__28957 = G__28961;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28958),sablono$core$ordered_list28948_$_iter__28955(cljs.core.chunk_rest(s__28956__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28958),null);
}
} else {
var x = cljs.core.first(s__28956__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list28948_$_iter__28955(cljs.core.rest(s__28956__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7163__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list28948);
/**
 * Create an image element.
 */
sablono.core.image28962 = (function sablono$core$image28962(var_args){
var args28963 = [];
var len__7454__auto___28966 = arguments.length;
var i__7455__auto___28967 = (0);
while(true){
if((i__7455__auto___28967 < len__7454__auto___28966)){
args28963.push((arguments[i__7455__auto___28967]));

var G__28968 = (i__7455__auto___28967 + (1));
i__7455__auto___28967 = G__28968;
continue;
} else {
}
break;
}

var G__28965 = args28963.length;
switch (G__28965) {
case 1:
return sablono.core.image28962.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image28962.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28963.length)].join('')));

}
});

sablono.core.image28962.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image28962.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image28962.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image28962);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__28970_SHARP_,p2__28971_SHARP_){
return [cljs.core.str(p1__28970_SHARP_),cljs.core.str("["),cljs.core.str(p2__28971_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__28972_SHARP_,p2__28973_SHARP_){
return [cljs.core.str(p1__28972_SHARP_),cljs.core.str("-"),cljs.core.str(p2__28973_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var args28974 = [];
var len__7454__auto___28977 = arguments.length;
var i__7455__auto___28978 = (0);
while(true){
if((i__7455__auto___28978 < len__7454__auto___28977)){
args28974.push((arguments[i__7455__auto___28978]));

var G__28979 = (i__7455__auto___28978 + (1));
i__7455__auto___28978 = G__28979;
continue;
} else {
}
break;
}

var G__28976 = args28974.length;
switch (G__28976) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28974.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__6383__auto__ = value;
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field28981 = (function sablono$core$color_field28981(var_args){
var args28982 = [];
var len__7454__auto___29049 = arguments.length;
var i__7455__auto___29050 = (0);
while(true){
if((i__7455__auto___29050 < len__7454__auto___29049)){
args28982.push((arguments[i__7455__auto___29050]));

var G__29051 = (i__7455__auto___29050 + (1));
i__7455__auto___29050 = G__29051;
continue;
} else {
}
break;
}

var G__28984 = args28982.length;
switch (G__28984) {
case 1:
return sablono.core.color_field28981.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field28981.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28982.length)].join('')));

}
});

sablono.core.color_field28981.cljs$core$IFn$_invoke$arity$1 = (function (name__28867__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__28867__auto__);
});

sablono.core.color_field28981.cljs$core$IFn$_invoke$arity$2 = (function (name__28867__auto__,value__28868__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__28867__auto__,value__28868__auto__);
});

sablono.core.color_field28981.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field28981);

/**
 * Creates a date input field.
 */
sablono.core.date_field28985 = (function sablono$core$date_field28985(var_args){
var args28986 = [];
var len__7454__auto___29053 = arguments.length;
var i__7455__auto___29054 = (0);
while(true){
if((i__7455__auto___29054 < len__7454__auto___29053)){
args28986.push((arguments[i__7455__auto___29054]));

var G__29055 = (i__7455__auto___29054 + (1));
i__7455__auto___29054 = G__29055;
continue;
} else {
}
break;
}

var G__28988 = args28986.length;
switch (G__28988) {
case 1:
return sablono.core.date_field28985.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field28985.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28986.length)].join('')));

}
});

sablono.core.date_field28985.cljs$core$IFn$_invoke$arity$1 = (function (name__28867__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__28867__auto__);
});

sablono.core.date_field28985.cljs$core$IFn$_invoke$arity$2 = (function (name__28867__auto__,value__28868__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__28867__auto__,value__28868__auto__);
});

sablono.core.date_field28985.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field28985);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field28989 = (function sablono$core$datetime_field28989(var_args){
var args28990 = [];
var len__7454__auto___29057 = arguments.length;
var i__7455__auto___29058 = (0);
while(true){
if((i__7455__auto___29058 < len__7454__auto___29057)){
args28990.push((arguments[i__7455__auto___29058]));

var G__29059 = (i__7455__auto___29058 + (1));
i__7455__auto___29058 = G__29059;
continue;
} else {
}
break;
}

var G__28992 = args28990.length;
switch (G__28992) {
case 1:
return sablono.core.datetime_field28989.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field28989.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28990.length)].join('')));

}
});

sablono.core.datetime_field28989.cljs$core$IFn$_invoke$arity$1 = (function (name__28867__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__28867__auto__);
});

sablono.core.datetime_field28989.cljs$core$IFn$_invoke$arity$2 = (function (name__28867__auto__,value__28868__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__28867__auto__,value__28868__auto__);
});

sablono.core.datetime_field28989.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field28989);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field28993 = (function sablono$core$datetime_local_field28993(var_args){
var args28994 = [];
var len__7454__auto___29061 = arguments.length;
var i__7455__auto___29062 = (0);
while(true){
if((i__7455__auto___29062 < len__7454__auto___29061)){
args28994.push((arguments[i__7455__auto___29062]));

var G__29063 = (i__7455__auto___29062 + (1));
i__7455__auto___29062 = G__29063;
continue;
} else {
}
break;
}

var G__28996 = args28994.length;
switch (G__28996) {
case 1:
return sablono.core.datetime_local_field28993.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field28993.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28994.length)].join('')));

}
});

sablono.core.datetime_local_field28993.cljs$core$IFn$_invoke$arity$1 = (function (name__28867__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__28867__auto__);
});

sablono.core.datetime_local_field28993.cljs$core$IFn$_invoke$arity$2 = (function (name__28867__auto__,value__28868__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__28867__auto__,value__28868__auto__);
});

sablono.core.datetime_local_field28993.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field28993);

/**
 * Creates a email input field.
 */
sablono.core.email_field28997 = (function sablono$core$email_field28997(var_args){
var args28998 = [];
var len__7454__auto___29065 = arguments.length;
var i__7455__auto___29066 = (0);
while(true){
if((i__7455__auto___29066 < len__7454__auto___29065)){
args28998.push((arguments[i__7455__auto___29066]));

var G__29067 = (i__7455__auto___29066 + (1));
i__7455__auto___29066 = G__29067;
continue;
} else {
}
break;
}

var G__29000 = args28998.length;
switch (G__29000) {
case 1:
return sablono.core.email_field28997.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field28997.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28998.length)].join('')));

}
});

sablono.core.email_field28997.cljs$core$IFn$_invoke$arity$1 = (function (name__28867__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__28867__auto__);
});

sablono.core.email_field28997.cljs$core$IFn$_invoke$arity$2 = (function (name__28867__auto__,value__28868__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__28867__auto__,value__28868__auto__);
});

sablono.core.email_field28997.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field28997);

/**
 * Creates a file input field.
 */
sablono.core.file_field29001 = (function sablono$core$file_field29001(var_args){
var args29002 = [];
var len__7454__auto___29069 = arguments.length;
var i__7455__auto___29070 = (0);
while(true){
if((i__7455__auto___29070 < len__7454__auto___29069)){
args29002.push((arguments[i__7455__auto___29070]));

var G__29071 = (i__7455__auto___29070 + (1));
i__7455__auto___29070 = G__29071;
continue;
} else {
}
break;
}

var G__29004 = args29002.length;
switch (G__29004) {
case 1:
return sablono.core.file_field29001.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field29001.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29002.length)].join('')));

}
});

sablono.core.file_field29001.cljs$core$IFn$_invoke$arity$1 = (function (name__28867__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__28867__auto__);
});

sablono.core.file_field29001.cljs$core$IFn$_invoke$arity$2 = (function (name__28867__auto__,value__28868__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__28867__auto__,value__28868__auto__);
});

sablono.core.file_field29001.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field29001);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field29005 = (function sablono$core$hidden_field29005(var_args){
var args29006 = [];
var len__7454__auto___29073 = arguments.length;
var i__7455__auto___29074 = (0);
while(true){
if((i__7455__auto___29074 < len__7454__auto___29073)){
args29006.push((arguments[i__7455__auto___29074]));

var G__29075 = (i__7455__auto___29074 + (1));
i__7455__auto___29074 = G__29075;
continue;
} else {
}
break;
}

var G__29008 = args29006.length;
switch (G__29008) {
case 1:
return sablono.core.hidden_field29005.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field29005.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29006.length)].join('')));

}
});

sablono.core.hidden_field29005.cljs$core$IFn$_invoke$arity$1 = (function (name__28867__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__28867__auto__);
});

sablono.core.hidden_field29005.cljs$core$IFn$_invoke$arity$2 = (function (name__28867__auto__,value__28868__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__28867__auto__,value__28868__auto__);
});

sablono.core.hidden_field29005.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field29005);

/**
 * Creates a month input field.
 */
sablono.core.month_field29009 = (function sablono$core$month_field29009(var_args){
var args29010 = [];
var len__7454__auto___29077 = arguments.length;
var i__7455__auto___29078 = (0);
while(true){
if((i__7455__auto___29078 < len__7454__auto___29077)){
args29010.push((arguments[i__7455__auto___29078]));

var G__29079 = (i__7455__auto___29078 + (1));
i__7455__auto___29078 = G__29079;
continue;
} else {
}
break;
}

var G__29012 = args29010.length;
switch (G__29012) {
case 1:
return sablono.core.month_field29009.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field29009.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29010.length)].join('')));

}
});

sablono.core.month_field29009.cljs$core$IFn$_invoke$arity$1 = (function (name__28867__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__28867__auto__);
});

sablono.core.month_field29009.cljs$core$IFn$_invoke$arity$2 = (function (name__28867__auto__,value__28868__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__28867__auto__,value__28868__auto__);
});

sablono.core.month_field29009.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field29009);

/**
 * Creates a number input field.
 */
sablono.core.number_field29013 = (function sablono$core$number_field29013(var_args){
var args29014 = [];
var len__7454__auto___29081 = arguments.length;
var i__7455__auto___29082 = (0);
while(true){
if((i__7455__auto___29082 < len__7454__auto___29081)){
args29014.push((arguments[i__7455__auto___29082]));

var G__29083 = (i__7455__auto___29082 + (1));
i__7455__auto___29082 = G__29083;
continue;
} else {
}
break;
}

var G__29016 = args29014.length;
switch (G__29016) {
case 1:
return sablono.core.number_field29013.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field29013.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29014.length)].join('')));

}
});

sablono.core.number_field29013.cljs$core$IFn$_invoke$arity$1 = (function (name__28867__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__28867__auto__);
});

sablono.core.number_field29013.cljs$core$IFn$_invoke$arity$2 = (function (name__28867__auto__,value__28868__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__28867__auto__,value__28868__auto__);
});

sablono.core.number_field29013.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field29013);

/**
 * Creates a password input field.
 */
sablono.core.password_field29017 = (function sablono$core$password_field29017(var_args){
var args29018 = [];
var len__7454__auto___29085 = arguments.length;
var i__7455__auto___29086 = (0);
while(true){
if((i__7455__auto___29086 < len__7454__auto___29085)){
args29018.push((arguments[i__7455__auto___29086]));

var G__29087 = (i__7455__auto___29086 + (1));
i__7455__auto___29086 = G__29087;
continue;
} else {
}
break;
}

var G__29020 = args29018.length;
switch (G__29020) {
case 1:
return sablono.core.password_field29017.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field29017.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29018.length)].join('')));

}
});

sablono.core.password_field29017.cljs$core$IFn$_invoke$arity$1 = (function (name__28867__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__28867__auto__);
});

sablono.core.password_field29017.cljs$core$IFn$_invoke$arity$2 = (function (name__28867__auto__,value__28868__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__28867__auto__,value__28868__auto__);
});

sablono.core.password_field29017.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field29017);

/**
 * Creates a range input field.
 */
sablono.core.range_field29021 = (function sablono$core$range_field29021(var_args){
var args29022 = [];
var len__7454__auto___29089 = arguments.length;
var i__7455__auto___29090 = (0);
while(true){
if((i__7455__auto___29090 < len__7454__auto___29089)){
args29022.push((arguments[i__7455__auto___29090]));

var G__29091 = (i__7455__auto___29090 + (1));
i__7455__auto___29090 = G__29091;
continue;
} else {
}
break;
}

var G__29024 = args29022.length;
switch (G__29024) {
case 1:
return sablono.core.range_field29021.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field29021.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29022.length)].join('')));

}
});

sablono.core.range_field29021.cljs$core$IFn$_invoke$arity$1 = (function (name__28867__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__28867__auto__);
});

sablono.core.range_field29021.cljs$core$IFn$_invoke$arity$2 = (function (name__28867__auto__,value__28868__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__28867__auto__,value__28868__auto__);
});

sablono.core.range_field29021.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field29021);

/**
 * Creates a search input field.
 */
sablono.core.search_field29025 = (function sablono$core$search_field29025(var_args){
var args29026 = [];
var len__7454__auto___29093 = arguments.length;
var i__7455__auto___29094 = (0);
while(true){
if((i__7455__auto___29094 < len__7454__auto___29093)){
args29026.push((arguments[i__7455__auto___29094]));

var G__29095 = (i__7455__auto___29094 + (1));
i__7455__auto___29094 = G__29095;
continue;
} else {
}
break;
}

var G__29028 = args29026.length;
switch (G__29028) {
case 1:
return sablono.core.search_field29025.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field29025.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29026.length)].join('')));

}
});

sablono.core.search_field29025.cljs$core$IFn$_invoke$arity$1 = (function (name__28867__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__28867__auto__);
});

sablono.core.search_field29025.cljs$core$IFn$_invoke$arity$2 = (function (name__28867__auto__,value__28868__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__28867__auto__,value__28868__auto__);
});

sablono.core.search_field29025.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field29025);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field29029 = (function sablono$core$tel_field29029(var_args){
var args29030 = [];
var len__7454__auto___29097 = arguments.length;
var i__7455__auto___29098 = (0);
while(true){
if((i__7455__auto___29098 < len__7454__auto___29097)){
args29030.push((arguments[i__7455__auto___29098]));

var G__29099 = (i__7455__auto___29098 + (1));
i__7455__auto___29098 = G__29099;
continue;
} else {
}
break;
}

var G__29032 = args29030.length;
switch (G__29032) {
case 1:
return sablono.core.tel_field29029.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field29029.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29030.length)].join('')));

}
});

sablono.core.tel_field29029.cljs$core$IFn$_invoke$arity$1 = (function (name__28867__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__28867__auto__);
});

sablono.core.tel_field29029.cljs$core$IFn$_invoke$arity$2 = (function (name__28867__auto__,value__28868__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__28867__auto__,value__28868__auto__);
});

sablono.core.tel_field29029.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field29029);

/**
 * Creates a text input field.
 */
sablono.core.text_field29033 = (function sablono$core$text_field29033(var_args){
var args29034 = [];
var len__7454__auto___29101 = arguments.length;
var i__7455__auto___29102 = (0);
while(true){
if((i__7455__auto___29102 < len__7454__auto___29101)){
args29034.push((arguments[i__7455__auto___29102]));

var G__29103 = (i__7455__auto___29102 + (1));
i__7455__auto___29102 = G__29103;
continue;
} else {
}
break;
}

var G__29036 = args29034.length;
switch (G__29036) {
case 1:
return sablono.core.text_field29033.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field29033.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29034.length)].join('')));

}
});

sablono.core.text_field29033.cljs$core$IFn$_invoke$arity$1 = (function (name__28867__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__28867__auto__);
});

sablono.core.text_field29033.cljs$core$IFn$_invoke$arity$2 = (function (name__28867__auto__,value__28868__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__28867__auto__,value__28868__auto__);
});

sablono.core.text_field29033.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field29033);

/**
 * Creates a time input field.
 */
sablono.core.time_field29037 = (function sablono$core$time_field29037(var_args){
var args29038 = [];
var len__7454__auto___29105 = arguments.length;
var i__7455__auto___29106 = (0);
while(true){
if((i__7455__auto___29106 < len__7454__auto___29105)){
args29038.push((arguments[i__7455__auto___29106]));

var G__29107 = (i__7455__auto___29106 + (1));
i__7455__auto___29106 = G__29107;
continue;
} else {
}
break;
}

var G__29040 = args29038.length;
switch (G__29040) {
case 1:
return sablono.core.time_field29037.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field29037.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29038.length)].join('')));

}
});

sablono.core.time_field29037.cljs$core$IFn$_invoke$arity$1 = (function (name__28867__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__28867__auto__);
});

sablono.core.time_field29037.cljs$core$IFn$_invoke$arity$2 = (function (name__28867__auto__,value__28868__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__28867__auto__,value__28868__auto__);
});

sablono.core.time_field29037.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field29037);

/**
 * Creates a url input field.
 */
sablono.core.url_field29041 = (function sablono$core$url_field29041(var_args){
var args29042 = [];
var len__7454__auto___29109 = arguments.length;
var i__7455__auto___29110 = (0);
while(true){
if((i__7455__auto___29110 < len__7454__auto___29109)){
args29042.push((arguments[i__7455__auto___29110]));

var G__29111 = (i__7455__auto___29110 + (1));
i__7455__auto___29110 = G__29111;
continue;
} else {
}
break;
}

var G__29044 = args29042.length;
switch (G__29044) {
case 1:
return sablono.core.url_field29041.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field29041.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29042.length)].join('')));

}
});

sablono.core.url_field29041.cljs$core$IFn$_invoke$arity$1 = (function (name__28867__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__28867__auto__);
});

sablono.core.url_field29041.cljs$core$IFn$_invoke$arity$2 = (function (name__28867__auto__,value__28868__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__28867__auto__,value__28868__auto__);
});

sablono.core.url_field29041.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field29041);

/**
 * Creates a week input field.
 */
sablono.core.week_field29045 = (function sablono$core$week_field29045(var_args){
var args29046 = [];
var len__7454__auto___29113 = arguments.length;
var i__7455__auto___29114 = (0);
while(true){
if((i__7455__auto___29114 < len__7454__auto___29113)){
args29046.push((arguments[i__7455__auto___29114]));

var G__29115 = (i__7455__auto___29114 + (1));
i__7455__auto___29114 = G__29115;
continue;
} else {
}
break;
}

var G__29048 = args29046.length;
switch (G__29048) {
case 1:
return sablono.core.week_field29045.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field29045.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29046.length)].join('')));

}
});

sablono.core.week_field29045.cljs$core$IFn$_invoke$arity$1 = (function (name__28867__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__28867__auto__);
});

sablono.core.week_field29045.cljs$core$IFn$_invoke$arity$2 = (function (name__28867__auto__,value__28868__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__28867__auto__,value__28868__auto__);
});

sablono.core.week_field29045.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field29045);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box29117 = (function sablono$core$check_box29117(var_args){
var args29118 = [];
var len__7454__auto___29121 = arguments.length;
var i__7455__auto___29122 = (0);
while(true){
if((i__7455__auto___29122 < len__7454__auto___29121)){
args29118.push((arguments[i__7455__auto___29122]));

var G__29123 = (i__7455__auto___29122 + (1));
i__7455__auto___29122 = G__29123;
continue;
} else {
}
break;
}

var G__29120 = args29118.length;
switch (G__29120) {
case 1:
return sablono.core.check_box29117.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box29117.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box29117.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29118.length)].join('')));

}
});

sablono.core.check_box29117.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
});

sablono.core.check_box29117.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box29117.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box29117.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box29117);
/**
 * Creates a radio button.
 */
sablono.core.radio_button29125 = (function sablono$core$radio_button29125(var_args){
var args29126 = [];
var len__7454__auto___29129 = arguments.length;
var i__7455__auto___29130 = (0);
while(true){
if((i__7455__auto___29130 < len__7454__auto___29129)){
args29126.push((arguments[i__7455__auto___29130]));

var G__29131 = (i__7455__auto___29130 + (1));
i__7455__auto___29130 = G__29131;
continue;
} else {
}
break;
}

var G__29128 = args29126.length;
switch (G__29128) {
case 1:
return sablono.core.radio_button29125.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button29125.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button29125.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29126.length)].join('')));

}
});

sablono.core.radio_button29125.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0)))], null)], null);
});

sablono.core.radio_button29125.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button29125.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button29125.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button29125);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__29134 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__29134);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options29135 = (function sablono$core$select_options29135(coll){
var iter__7163__auto__ = (function sablono$core$select_options29135_$_iter__29154(s__29155){
return (new cljs.core.LazySeq(null,(function (){
var s__29155__$1 = s__29155;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__29155__$1);
if(temp__4657__auto__){
var s__29155__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29155__$2)){
var c__7161__auto__ = cljs.core.chunk_first(s__29155__$2);
var size__7162__auto__ = cljs.core.count(c__7161__auto__);
var b__29157 = cljs.core.chunk_buffer(size__7162__auto__);
if((function (){var i__29156 = (0);
while(true){
if((i__29156 < size__7162__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7161__auto__,i__29156);
cljs.core.chunk_append(b__29157,((cljs.core.sequential_QMARK_(x))?(function (){var vec__29166 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29166,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29166,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29166,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options29135(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__29172 = (i__29156 + (1));
i__29156 = G__29172;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29157),sablono$core$select_options29135_$_iter__29154(cljs.core.chunk_rest(s__29155__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29157),null);
}
} else {
var x = cljs.core.first(s__29155__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__29169 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29169,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29169,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29169,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options29135(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options29135_$_iter__29154(cljs.core.rest(s__29155__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7163__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options29135);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down29173 = (function sablono$core$drop_down29173(var_args){
var args29174 = [];
var len__7454__auto___29177 = arguments.length;
var i__7455__auto___29178 = (0);
while(true){
if((i__7455__auto___29178 < len__7454__auto___29177)){
args29174.push((arguments[i__7455__auto___29178]));

var G__29179 = (i__7455__auto___29178 + (1));
i__7455__auto___29178 = G__29179;
continue;
} else {
}
break;
}

var G__29176 = args29174.length;
switch (G__29176) {
case 2:
return sablono.core.drop_down29173.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down29173.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29174.length)].join('')));

}
});

sablono.core.drop_down29173.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down29173.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down29173.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down29173.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down29173);
/**
 * Creates a text area element.
 */
sablono.core.text_area29181 = (function sablono$core$text_area29181(var_args){
var args29182 = [];
var len__7454__auto___29185 = arguments.length;
var i__7455__auto___29186 = (0);
while(true){
if((i__7455__auto___29186 < len__7454__auto___29185)){
args29182.push((arguments[i__7455__auto___29186]));

var G__29187 = (i__7455__auto___29186 + (1));
i__7455__auto___29186 = G__29187;
continue;
} else {
}
break;
}

var G__29184 = args29182.length;
switch (G__29184) {
case 1:
return sablono.core.text_area29181.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area29181.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29182.length)].join('')));

}
});

sablono.core.text_area29181.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
});

sablono.core.text_area29181.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__6383__auto__ = value;
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area29181.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area29181);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label29189 = (function sablono$core$label29189(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label29189);
/**
 * Creates a submit button.
 */
sablono.core.submit_button29190 = (function sablono$core$submit_button29190(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button29190);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button29191 = (function sablono$core$reset_button29191(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button29191);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to29192 = (function sablono$core$form_to29192(var_args){
var args__7461__auto__ = [];
var len__7454__auto___29202 = arguments.length;
var i__7455__auto___29203 = (0);
while(true){
if((i__7455__auto___29203 < len__7454__auto___29202)){
args__7461__auto__.push((arguments[i__7455__auto___29203]));

var G__29204 = (i__7455__auto___29203 + (1));
i__7455__auto___29203 = G__29204;
continue;
} else {
}
break;
}

var argseq__7462__auto__ = ((((1) < args__7461__auto__.length))?(new cljs.core.IndexedSeq(args__7461__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to29192.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7462__auto__);
});

sablono.core.form_to29192.cljs$core$IFn$_invoke$arity$variadic = (function (p__29195,body){
var vec__29196 = p__29195;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29196,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29196,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__29199 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__29200 = "_method";
var G__29201 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__29199,G__29200,G__29201) : sablono.core.hidden_field.call(null,G__29199,G__29200,G__29201));
})()], null)),body));
});

sablono.core.form_to29192.cljs$lang$maxFixedArity = (1);

sablono.core.form_to29192.cljs$lang$applyTo = (function (seq29193){
var G__29194 = cljs.core.first(seq29193);
var seq29193__$1 = cljs.core.next(seq29193);
return sablono.core.form_to29192.cljs$core$IFn$_invoke$arity$variadic(G__29194,seq29193__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to29192);
