// Compiled by ClojureScript 1.9.229 {}
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
var G__27630__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__27627 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__27628 = cljs.core.seq.call(null,vec__27627);
var first__27629 = cljs.core.first.call(null,seq__27628);
var seq__27628__$1 = cljs.core.next.call(null,seq__27628);
var tag = first__27629;
var body = seq__27628__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__27630 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27631__i = 0, G__27631__a = new Array(arguments.length -  0);
while (G__27631__i < G__27631__a.length) {G__27631__a[G__27631__i] = arguments[G__27631__i + 0]; ++G__27631__i;}
  args = new cljs.core.IndexedSeq(G__27631__a,0);
} 
return G__27630__delegate.call(this,args);};
G__27630.cljs$lang$maxFixedArity = 0;
G__27630.cljs$lang$applyTo = (function (arglist__27632){
var args = cljs.core.seq(arglist__27632);
return G__27630__delegate(args);
});
G__27630.cljs$core$IFn$_invoke$arity$variadic = G__27630__delegate;
return G__27630;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__9373__auto__ = (function sablono$core$update_arglists_$_iter__27637(s__27638){
return (new cljs.core.LazySeq(null,(function (){
var s__27638__$1 = s__27638;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27638__$1);
if(temp__4657__auto__){
var s__27638__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27638__$2)){
var c__9371__auto__ = cljs.core.chunk_first.call(null,s__27638__$2);
var size__9372__auto__ = cljs.core.count.call(null,c__9371__auto__);
var b__27640 = cljs.core.chunk_buffer.call(null,size__9372__auto__);
if((function (){var i__27639 = (0);
while(true){
if((i__27639 < size__9372__auto__)){
var args = cljs.core._nth.call(null,c__9371__auto__,i__27639);
cljs.core.chunk_append.call(null,b__27640,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__27641 = (i__27639 + (1));
i__27639 = G__27641;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27640),sablono$core$update_arglists_$_iter__27637.call(null,cljs.core.chunk_rest.call(null,s__27638__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27640),null);
}
} else {
var args = cljs.core.first.call(null,s__27638__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__27637.call(null,cljs.core.rest.call(null,s__27638__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9373__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__9671__auto__ = [];
var len__9664__auto___27647 = arguments.length;
var i__9665__auto___27648 = (0);
while(true){
if((i__9665__auto___27648 < len__9664__auto___27647)){
args__9671__auto__.push((arguments[i__9665__auto___27648]));

var G__27649 = (i__9665__auto___27648 + (1));
i__9665__auto___27648 = G__27649;
continue;
} else {
}
break;
}

var argseq__9672__auto__ = ((((0) < args__9671__auto__.length))?(new cljs.core.IndexedSeq(args__9671__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__9672__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__9373__auto__ = (function sablono$core$iter__27643(s__27644){
return (new cljs.core.LazySeq(null,(function (){
var s__27644__$1 = s__27644;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27644__$1);
if(temp__4657__auto__){
var s__27644__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27644__$2)){
var c__9371__auto__ = cljs.core.chunk_first.call(null,s__27644__$2);
var size__9372__auto__ = cljs.core.count.call(null,c__9371__auto__);
var b__27646 = cljs.core.chunk_buffer.call(null,size__9372__auto__);
if((function (){var i__27645 = (0);
while(true){
if((i__27645 < size__9372__auto__)){
var style = cljs.core._nth.call(null,c__9371__auto__,i__27645);
cljs.core.chunk_append.call(null,b__27646,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__27650 = (i__27645 + (1));
i__27645 = G__27650;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27646),sablono$core$iter__27643.call(null,cljs.core.chunk_rest.call(null,s__27644__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27646),null);
}
} else {
var style = cljs.core.first.call(null,s__27644__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__27643.call(null,cljs.core.rest.call(null,s__27644__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9373__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq27642){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27642));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to27651 = (function sablono$core$link_to27651(var_args){
var args__9671__auto__ = [];
var len__9664__auto___27654 = arguments.length;
var i__9665__auto___27655 = (0);
while(true){
if((i__9665__auto___27655 < len__9664__auto___27654)){
args__9671__auto__.push((arguments[i__9665__auto___27655]));

var G__27656 = (i__9665__auto___27655 + (1));
i__9665__auto___27655 = G__27656;
continue;
} else {
}
break;
}

var argseq__9672__auto__ = ((((1) < args__9671__auto__.length))?(new cljs.core.IndexedSeq(args__9671__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to27651.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9672__auto__);
});

sablono.core.link_to27651.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to27651.cljs$lang$maxFixedArity = (1);

sablono.core.link_to27651.cljs$lang$applyTo = (function (seq27652){
var G__27653 = cljs.core.first.call(null,seq27652);
var seq27652__$1 = cljs.core.next.call(null,seq27652);
return sablono.core.link_to27651.cljs$core$IFn$_invoke$arity$variadic(G__27653,seq27652__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to27651);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to27657 = (function sablono$core$mail_to27657(var_args){
var args__9671__auto__ = [];
var len__9664__auto___27664 = arguments.length;
var i__9665__auto___27665 = (0);
while(true){
if((i__9665__auto___27665 < len__9664__auto___27664)){
args__9671__auto__.push((arguments[i__9665__auto___27665]));

var G__27666 = (i__9665__auto___27665 + (1));
i__9665__auto___27665 = G__27666;
continue;
} else {
}
break;
}

var argseq__9672__auto__ = ((((1) < args__9671__auto__.length))?(new cljs.core.IndexedSeq(args__9671__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to27657.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9672__auto__);
});

sablono.core.mail_to27657.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__27660){
var vec__27661 = p__27660;
var content = cljs.core.nth.call(null,vec__27661,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__8593__auto__ = content;
if(cljs.core.truth_(or__8593__auto__)){
return or__8593__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to27657.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to27657.cljs$lang$applyTo = (function (seq27658){
var G__27659 = cljs.core.first.call(null,seq27658);
var seq27658__$1 = cljs.core.next.call(null,seq27658);
return sablono.core.mail_to27657.cljs$core$IFn$_invoke$arity$variadic(G__27659,seq27658__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to27657);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list27667 = (function sablono$core$unordered_list27667(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__9373__auto__ = (function sablono$core$unordered_list27667_$_iter__27672(s__27673){
return (new cljs.core.LazySeq(null,(function (){
var s__27673__$1 = s__27673;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27673__$1);
if(temp__4657__auto__){
var s__27673__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27673__$2)){
var c__9371__auto__ = cljs.core.chunk_first.call(null,s__27673__$2);
var size__9372__auto__ = cljs.core.count.call(null,c__9371__auto__);
var b__27675 = cljs.core.chunk_buffer.call(null,size__9372__auto__);
if((function (){var i__27674 = (0);
while(true){
if((i__27674 < size__9372__auto__)){
var x = cljs.core._nth.call(null,c__9371__auto__,i__27674);
cljs.core.chunk_append.call(null,b__27675,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__27676 = (i__27674 + (1));
i__27674 = G__27676;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27675),sablono$core$unordered_list27667_$_iter__27672.call(null,cljs.core.chunk_rest.call(null,s__27673__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27675),null);
}
} else {
var x = cljs.core.first.call(null,s__27673__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list27667_$_iter__27672.call(null,cljs.core.rest.call(null,s__27673__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9373__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list27667);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list27677 = (function sablono$core$ordered_list27677(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__9373__auto__ = (function sablono$core$ordered_list27677_$_iter__27682(s__27683){
return (new cljs.core.LazySeq(null,(function (){
var s__27683__$1 = s__27683;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27683__$1);
if(temp__4657__auto__){
var s__27683__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27683__$2)){
var c__9371__auto__ = cljs.core.chunk_first.call(null,s__27683__$2);
var size__9372__auto__ = cljs.core.count.call(null,c__9371__auto__);
var b__27685 = cljs.core.chunk_buffer.call(null,size__9372__auto__);
if((function (){var i__27684 = (0);
while(true){
if((i__27684 < size__9372__auto__)){
var x = cljs.core._nth.call(null,c__9371__auto__,i__27684);
cljs.core.chunk_append.call(null,b__27685,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__27686 = (i__27684 + (1));
i__27684 = G__27686;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27685),sablono$core$ordered_list27677_$_iter__27682.call(null,cljs.core.chunk_rest.call(null,s__27683__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27685),null);
}
} else {
var x = cljs.core.first.call(null,s__27683__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list27677_$_iter__27682.call(null,cljs.core.rest.call(null,s__27683__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9373__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list27677);
/**
 * Create an image element.
 */
sablono.core.image27687 = (function sablono$core$image27687(var_args){
var args27688 = [];
var len__9664__auto___27691 = arguments.length;
var i__9665__auto___27692 = (0);
while(true){
if((i__9665__auto___27692 < len__9664__auto___27691)){
args27688.push((arguments[i__9665__auto___27692]));

var G__27693 = (i__9665__auto___27692 + (1));
i__9665__auto___27692 = G__27693;
continue;
} else {
}
break;
}

var G__27690 = args27688.length;
switch (G__27690) {
case 1:
return sablono.core.image27687.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image27687.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27688.length)].join('')));

}
});

sablono.core.image27687.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image27687.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image27687.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image27687);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__27695_SHARP_,p2__27696_SHARP_){
return [cljs.core.str(p1__27695_SHARP_),cljs.core.str("["),cljs.core.str(p2__27696_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__27697_SHARP_,p2__27698_SHARP_){
return [cljs.core.str(p1__27697_SHARP_),cljs.core.str("-"),cljs.core.str(p2__27698_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var args27699 = [];
var len__9664__auto___27702 = arguments.length;
var i__9665__auto___27703 = (0);
while(true){
if((i__9665__auto___27703 < len__9664__auto___27702)){
args27699.push((arguments[i__9665__auto___27703]));

var G__27704 = (i__9665__auto___27703 + (1));
i__9665__auto___27703 = G__27704;
continue;
} else {
}
break;
}

var G__27701 = args27699.length;
switch (G__27701) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27699.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__8593__auto__ = value;
if(cljs.core.truth_(or__8593__auto__)){
return or__8593__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field27706 = (function sablono$core$color_field27706(var_args){
var args27707 = [];
var len__9664__auto___27774 = arguments.length;
var i__9665__auto___27775 = (0);
while(true){
if((i__9665__auto___27775 < len__9664__auto___27774)){
args27707.push((arguments[i__9665__auto___27775]));

var G__27776 = (i__9665__auto___27775 + (1));
i__9665__auto___27775 = G__27776;
continue;
} else {
}
break;
}

var G__27709 = args27707.length;
switch (G__27709) {
case 1:
return sablono.core.color_field27706.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field27706.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27707.length)].join('')));

}
});

sablono.core.color_field27706.cljs$core$IFn$_invoke$arity$1 = (function (name__27614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__27614__auto__);
});

sablono.core.color_field27706.cljs$core$IFn$_invoke$arity$2 = (function (name__27614__auto__,value__27615__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__27614__auto__,value__27615__auto__);
});

sablono.core.color_field27706.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field27706);

/**
 * Creates a date input field.
 */
sablono.core.date_field27710 = (function sablono$core$date_field27710(var_args){
var args27711 = [];
var len__9664__auto___27778 = arguments.length;
var i__9665__auto___27779 = (0);
while(true){
if((i__9665__auto___27779 < len__9664__auto___27778)){
args27711.push((arguments[i__9665__auto___27779]));

var G__27780 = (i__9665__auto___27779 + (1));
i__9665__auto___27779 = G__27780;
continue;
} else {
}
break;
}

var G__27713 = args27711.length;
switch (G__27713) {
case 1:
return sablono.core.date_field27710.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field27710.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27711.length)].join('')));

}
});

sablono.core.date_field27710.cljs$core$IFn$_invoke$arity$1 = (function (name__27614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__27614__auto__);
});

sablono.core.date_field27710.cljs$core$IFn$_invoke$arity$2 = (function (name__27614__auto__,value__27615__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__27614__auto__,value__27615__auto__);
});

sablono.core.date_field27710.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field27710);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field27714 = (function sablono$core$datetime_field27714(var_args){
var args27715 = [];
var len__9664__auto___27782 = arguments.length;
var i__9665__auto___27783 = (0);
while(true){
if((i__9665__auto___27783 < len__9664__auto___27782)){
args27715.push((arguments[i__9665__auto___27783]));

var G__27784 = (i__9665__auto___27783 + (1));
i__9665__auto___27783 = G__27784;
continue;
} else {
}
break;
}

var G__27717 = args27715.length;
switch (G__27717) {
case 1:
return sablono.core.datetime_field27714.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field27714.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27715.length)].join('')));

}
});

sablono.core.datetime_field27714.cljs$core$IFn$_invoke$arity$1 = (function (name__27614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__27614__auto__);
});

sablono.core.datetime_field27714.cljs$core$IFn$_invoke$arity$2 = (function (name__27614__auto__,value__27615__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__27614__auto__,value__27615__auto__);
});

sablono.core.datetime_field27714.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field27714);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field27718 = (function sablono$core$datetime_local_field27718(var_args){
var args27719 = [];
var len__9664__auto___27786 = arguments.length;
var i__9665__auto___27787 = (0);
while(true){
if((i__9665__auto___27787 < len__9664__auto___27786)){
args27719.push((arguments[i__9665__auto___27787]));

var G__27788 = (i__9665__auto___27787 + (1));
i__9665__auto___27787 = G__27788;
continue;
} else {
}
break;
}

var G__27721 = args27719.length;
switch (G__27721) {
case 1:
return sablono.core.datetime_local_field27718.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field27718.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27719.length)].join('')));

}
});

sablono.core.datetime_local_field27718.cljs$core$IFn$_invoke$arity$1 = (function (name__27614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__27614__auto__);
});

sablono.core.datetime_local_field27718.cljs$core$IFn$_invoke$arity$2 = (function (name__27614__auto__,value__27615__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__27614__auto__,value__27615__auto__);
});

sablono.core.datetime_local_field27718.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field27718);

/**
 * Creates a email input field.
 */
sablono.core.email_field27722 = (function sablono$core$email_field27722(var_args){
var args27723 = [];
var len__9664__auto___27790 = arguments.length;
var i__9665__auto___27791 = (0);
while(true){
if((i__9665__auto___27791 < len__9664__auto___27790)){
args27723.push((arguments[i__9665__auto___27791]));

var G__27792 = (i__9665__auto___27791 + (1));
i__9665__auto___27791 = G__27792;
continue;
} else {
}
break;
}

var G__27725 = args27723.length;
switch (G__27725) {
case 1:
return sablono.core.email_field27722.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field27722.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27723.length)].join('')));

}
});

sablono.core.email_field27722.cljs$core$IFn$_invoke$arity$1 = (function (name__27614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__27614__auto__);
});

sablono.core.email_field27722.cljs$core$IFn$_invoke$arity$2 = (function (name__27614__auto__,value__27615__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__27614__auto__,value__27615__auto__);
});

sablono.core.email_field27722.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field27722);

/**
 * Creates a file input field.
 */
sablono.core.file_field27726 = (function sablono$core$file_field27726(var_args){
var args27727 = [];
var len__9664__auto___27794 = arguments.length;
var i__9665__auto___27795 = (0);
while(true){
if((i__9665__auto___27795 < len__9664__auto___27794)){
args27727.push((arguments[i__9665__auto___27795]));

var G__27796 = (i__9665__auto___27795 + (1));
i__9665__auto___27795 = G__27796;
continue;
} else {
}
break;
}

var G__27729 = args27727.length;
switch (G__27729) {
case 1:
return sablono.core.file_field27726.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field27726.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27727.length)].join('')));

}
});

sablono.core.file_field27726.cljs$core$IFn$_invoke$arity$1 = (function (name__27614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__27614__auto__);
});

sablono.core.file_field27726.cljs$core$IFn$_invoke$arity$2 = (function (name__27614__auto__,value__27615__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__27614__auto__,value__27615__auto__);
});

sablono.core.file_field27726.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field27726);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field27730 = (function sablono$core$hidden_field27730(var_args){
var args27731 = [];
var len__9664__auto___27798 = arguments.length;
var i__9665__auto___27799 = (0);
while(true){
if((i__9665__auto___27799 < len__9664__auto___27798)){
args27731.push((arguments[i__9665__auto___27799]));

var G__27800 = (i__9665__auto___27799 + (1));
i__9665__auto___27799 = G__27800;
continue;
} else {
}
break;
}

var G__27733 = args27731.length;
switch (G__27733) {
case 1:
return sablono.core.hidden_field27730.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field27730.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27731.length)].join('')));

}
});

sablono.core.hidden_field27730.cljs$core$IFn$_invoke$arity$1 = (function (name__27614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__27614__auto__);
});

sablono.core.hidden_field27730.cljs$core$IFn$_invoke$arity$2 = (function (name__27614__auto__,value__27615__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__27614__auto__,value__27615__auto__);
});

sablono.core.hidden_field27730.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field27730);

/**
 * Creates a month input field.
 */
sablono.core.month_field27734 = (function sablono$core$month_field27734(var_args){
var args27735 = [];
var len__9664__auto___27802 = arguments.length;
var i__9665__auto___27803 = (0);
while(true){
if((i__9665__auto___27803 < len__9664__auto___27802)){
args27735.push((arguments[i__9665__auto___27803]));

var G__27804 = (i__9665__auto___27803 + (1));
i__9665__auto___27803 = G__27804;
continue;
} else {
}
break;
}

var G__27737 = args27735.length;
switch (G__27737) {
case 1:
return sablono.core.month_field27734.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field27734.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27735.length)].join('')));

}
});

sablono.core.month_field27734.cljs$core$IFn$_invoke$arity$1 = (function (name__27614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__27614__auto__);
});

sablono.core.month_field27734.cljs$core$IFn$_invoke$arity$2 = (function (name__27614__auto__,value__27615__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__27614__auto__,value__27615__auto__);
});

sablono.core.month_field27734.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field27734);

/**
 * Creates a number input field.
 */
sablono.core.number_field27738 = (function sablono$core$number_field27738(var_args){
var args27739 = [];
var len__9664__auto___27806 = arguments.length;
var i__9665__auto___27807 = (0);
while(true){
if((i__9665__auto___27807 < len__9664__auto___27806)){
args27739.push((arguments[i__9665__auto___27807]));

var G__27808 = (i__9665__auto___27807 + (1));
i__9665__auto___27807 = G__27808;
continue;
} else {
}
break;
}

var G__27741 = args27739.length;
switch (G__27741) {
case 1:
return sablono.core.number_field27738.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field27738.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27739.length)].join('')));

}
});

sablono.core.number_field27738.cljs$core$IFn$_invoke$arity$1 = (function (name__27614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__27614__auto__);
});

sablono.core.number_field27738.cljs$core$IFn$_invoke$arity$2 = (function (name__27614__auto__,value__27615__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__27614__auto__,value__27615__auto__);
});

sablono.core.number_field27738.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field27738);

/**
 * Creates a password input field.
 */
sablono.core.password_field27742 = (function sablono$core$password_field27742(var_args){
var args27743 = [];
var len__9664__auto___27810 = arguments.length;
var i__9665__auto___27811 = (0);
while(true){
if((i__9665__auto___27811 < len__9664__auto___27810)){
args27743.push((arguments[i__9665__auto___27811]));

var G__27812 = (i__9665__auto___27811 + (1));
i__9665__auto___27811 = G__27812;
continue;
} else {
}
break;
}

var G__27745 = args27743.length;
switch (G__27745) {
case 1:
return sablono.core.password_field27742.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field27742.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27743.length)].join('')));

}
});

sablono.core.password_field27742.cljs$core$IFn$_invoke$arity$1 = (function (name__27614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__27614__auto__);
});

sablono.core.password_field27742.cljs$core$IFn$_invoke$arity$2 = (function (name__27614__auto__,value__27615__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__27614__auto__,value__27615__auto__);
});

sablono.core.password_field27742.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field27742);

/**
 * Creates a range input field.
 */
sablono.core.range_field27746 = (function sablono$core$range_field27746(var_args){
var args27747 = [];
var len__9664__auto___27814 = arguments.length;
var i__9665__auto___27815 = (0);
while(true){
if((i__9665__auto___27815 < len__9664__auto___27814)){
args27747.push((arguments[i__9665__auto___27815]));

var G__27816 = (i__9665__auto___27815 + (1));
i__9665__auto___27815 = G__27816;
continue;
} else {
}
break;
}

var G__27749 = args27747.length;
switch (G__27749) {
case 1:
return sablono.core.range_field27746.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field27746.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27747.length)].join('')));

}
});

sablono.core.range_field27746.cljs$core$IFn$_invoke$arity$1 = (function (name__27614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__27614__auto__);
});

sablono.core.range_field27746.cljs$core$IFn$_invoke$arity$2 = (function (name__27614__auto__,value__27615__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__27614__auto__,value__27615__auto__);
});

sablono.core.range_field27746.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field27746);

/**
 * Creates a search input field.
 */
sablono.core.search_field27750 = (function sablono$core$search_field27750(var_args){
var args27751 = [];
var len__9664__auto___27818 = arguments.length;
var i__9665__auto___27819 = (0);
while(true){
if((i__9665__auto___27819 < len__9664__auto___27818)){
args27751.push((arguments[i__9665__auto___27819]));

var G__27820 = (i__9665__auto___27819 + (1));
i__9665__auto___27819 = G__27820;
continue;
} else {
}
break;
}

var G__27753 = args27751.length;
switch (G__27753) {
case 1:
return sablono.core.search_field27750.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field27750.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27751.length)].join('')));

}
});

sablono.core.search_field27750.cljs$core$IFn$_invoke$arity$1 = (function (name__27614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__27614__auto__);
});

sablono.core.search_field27750.cljs$core$IFn$_invoke$arity$2 = (function (name__27614__auto__,value__27615__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__27614__auto__,value__27615__auto__);
});

sablono.core.search_field27750.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field27750);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field27754 = (function sablono$core$tel_field27754(var_args){
var args27755 = [];
var len__9664__auto___27822 = arguments.length;
var i__9665__auto___27823 = (0);
while(true){
if((i__9665__auto___27823 < len__9664__auto___27822)){
args27755.push((arguments[i__9665__auto___27823]));

var G__27824 = (i__9665__auto___27823 + (1));
i__9665__auto___27823 = G__27824;
continue;
} else {
}
break;
}

var G__27757 = args27755.length;
switch (G__27757) {
case 1:
return sablono.core.tel_field27754.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field27754.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27755.length)].join('')));

}
});

sablono.core.tel_field27754.cljs$core$IFn$_invoke$arity$1 = (function (name__27614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__27614__auto__);
});

sablono.core.tel_field27754.cljs$core$IFn$_invoke$arity$2 = (function (name__27614__auto__,value__27615__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__27614__auto__,value__27615__auto__);
});

sablono.core.tel_field27754.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field27754);

/**
 * Creates a text input field.
 */
sablono.core.text_field27758 = (function sablono$core$text_field27758(var_args){
var args27759 = [];
var len__9664__auto___27826 = arguments.length;
var i__9665__auto___27827 = (0);
while(true){
if((i__9665__auto___27827 < len__9664__auto___27826)){
args27759.push((arguments[i__9665__auto___27827]));

var G__27828 = (i__9665__auto___27827 + (1));
i__9665__auto___27827 = G__27828;
continue;
} else {
}
break;
}

var G__27761 = args27759.length;
switch (G__27761) {
case 1:
return sablono.core.text_field27758.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field27758.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27759.length)].join('')));

}
});

sablono.core.text_field27758.cljs$core$IFn$_invoke$arity$1 = (function (name__27614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__27614__auto__);
});

sablono.core.text_field27758.cljs$core$IFn$_invoke$arity$2 = (function (name__27614__auto__,value__27615__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__27614__auto__,value__27615__auto__);
});

sablono.core.text_field27758.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field27758);

/**
 * Creates a time input field.
 */
sablono.core.time_field27762 = (function sablono$core$time_field27762(var_args){
var args27763 = [];
var len__9664__auto___27830 = arguments.length;
var i__9665__auto___27831 = (0);
while(true){
if((i__9665__auto___27831 < len__9664__auto___27830)){
args27763.push((arguments[i__9665__auto___27831]));

var G__27832 = (i__9665__auto___27831 + (1));
i__9665__auto___27831 = G__27832;
continue;
} else {
}
break;
}

var G__27765 = args27763.length;
switch (G__27765) {
case 1:
return sablono.core.time_field27762.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field27762.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27763.length)].join('')));

}
});

sablono.core.time_field27762.cljs$core$IFn$_invoke$arity$1 = (function (name__27614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__27614__auto__);
});

sablono.core.time_field27762.cljs$core$IFn$_invoke$arity$2 = (function (name__27614__auto__,value__27615__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__27614__auto__,value__27615__auto__);
});

sablono.core.time_field27762.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field27762);

/**
 * Creates a url input field.
 */
sablono.core.url_field27766 = (function sablono$core$url_field27766(var_args){
var args27767 = [];
var len__9664__auto___27834 = arguments.length;
var i__9665__auto___27835 = (0);
while(true){
if((i__9665__auto___27835 < len__9664__auto___27834)){
args27767.push((arguments[i__9665__auto___27835]));

var G__27836 = (i__9665__auto___27835 + (1));
i__9665__auto___27835 = G__27836;
continue;
} else {
}
break;
}

var G__27769 = args27767.length;
switch (G__27769) {
case 1:
return sablono.core.url_field27766.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field27766.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27767.length)].join('')));

}
});

sablono.core.url_field27766.cljs$core$IFn$_invoke$arity$1 = (function (name__27614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__27614__auto__);
});

sablono.core.url_field27766.cljs$core$IFn$_invoke$arity$2 = (function (name__27614__auto__,value__27615__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__27614__auto__,value__27615__auto__);
});

sablono.core.url_field27766.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field27766);

/**
 * Creates a week input field.
 */
sablono.core.week_field27770 = (function sablono$core$week_field27770(var_args){
var args27771 = [];
var len__9664__auto___27838 = arguments.length;
var i__9665__auto___27839 = (0);
while(true){
if((i__9665__auto___27839 < len__9664__auto___27838)){
args27771.push((arguments[i__9665__auto___27839]));

var G__27840 = (i__9665__auto___27839 + (1));
i__9665__auto___27839 = G__27840;
continue;
} else {
}
break;
}

var G__27773 = args27771.length;
switch (G__27773) {
case 1:
return sablono.core.week_field27770.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field27770.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27771.length)].join('')));

}
});

sablono.core.week_field27770.cljs$core$IFn$_invoke$arity$1 = (function (name__27614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__27614__auto__);
});

sablono.core.week_field27770.cljs$core$IFn$_invoke$arity$2 = (function (name__27614__auto__,value__27615__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__27614__auto__,value__27615__auto__);
});

sablono.core.week_field27770.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field27770);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box27842 = (function sablono$core$check_box27842(var_args){
var args27843 = [];
var len__9664__auto___27846 = arguments.length;
var i__9665__auto___27847 = (0);
while(true){
if((i__9665__auto___27847 < len__9664__auto___27846)){
args27843.push((arguments[i__9665__auto___27847]));

var G__27848 = (i__9665__auto___27847 + (1));
i__9665__auto___27847 = G__27848;
continue;
} else {
}
break;
}

var G__27845 = args27843.length;
switch (G__27845) {
case 1:
return sablono.core.check_box27842.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box27842.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box27842.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27843.length)].join('')));

}
});

sablono.core.check_box27842.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box27842.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box27842.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box27842.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box27842);
/**
 * Creates a radio button.
 */
sablono.core.radio_button27850 = (function sablono$core$radio_button27850(var_args){
var args27851 = [];
var len__9664__auto___27854 = arguments.length;
var i__9665__auto___27855 = (0);
while(true){
if((i__9665__auto___27855 < len__9664__auto___27854)){
args27851.push((arguments[i__9665__auto___27855]));

var G__27856 = (i__9665__auto___27855 + (1));
i__9665__auto___27855 = G__27856;
continue;
} else {
}
break;
}

var G__27853 = args27851.length;
switch (G__27853) {
case 1:
return sablono.core.radio_button27850.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button27850.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button27850.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27851.length)].join('')));

}
});

sablono.core.radio_button27850.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button27850.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button27850.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button27850.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button27850);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options27858 = (function sablono$core$select_options27858(coll){
var iter__9373__auto__ = (function sablono$core$select_options27858_$_iter__27875(s__27876){
return (new cljs.core.LazySeq(null,(function (){
var s__27876__$1 = s__27876;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27876__$1);
if(temp__4657__auto__){
var s__27876__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27876__$2)){
var c__9371__auto__ = cljs.core.chunk_first.call(null,s__27876__$2);
var size__9372__auto__ = cljs.core.count.call(null,c__9371__auto__);
var b__27878 = cljs.core.chunk_buffer.call(null,size__9372__auto__);
if((function (){var i__27877 = (0);
while(true){
if((i__27877 < size__9372__auto__)){
var x = cljs.core._nth.call(null,c__9371__auto__,i__27877);
cljs.core.chunk_append.call(null,b__27878,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__27885 = x;
var text = cljs.core.nth.call(null,vec__27885,(0),null);
var val = cljs.core.nth.call(null,vec__27885,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__27885,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options27858.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__27891 = (i__27877 + (1));
i__27877 = G__27891;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27878),sablono$core$select_options27858_$_iter__27875.call(null,cljs.core.chunk_rest.call(null,s__27876__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27878),null);
}
} else {
var x = cljs.core.first.call(null,s__27876__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__27888 = x;
var text = cljs.core.nth.call(null,vec__27888,(0),null);
var val = cljs.core.nth.call(null,vec__27888,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__27888,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options27858.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options27858_$_iter__27875.call(null,cljs.core.rest.call(null,s__27876__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9373__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options27858);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down27892 = (function sablono$core$drop_down27892(var_args){
var args27893 = [];
var len__9664__auto___27896 = arguments.length;
var i__9665__auto___27897 = (0);
while(true){
if((i__9665__auto___27897 < len__9664__auto___27896)){
args27893.push((arguments[i__9665__auto___27897]));

var G__27898 = (i__9665__auto___27897 + (1));
i__9665__auto___27897 = G__27898;
continue;
} else {
}
break;
}

var G__27895 = args27893.length;
switch (G__27895) {
case 2:
return sablono.core.drop_down27892.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down27892.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27893.length)].join('')));

}
});

sablono.core.drop_down27892.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down27892.call(null,name,options,null);
});

sablono.core.drop_down27892.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down27892.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down27892);
/**
 * Creates a text area element.
 */
sablono.core.text_area27900 = (function sablono$core$text_area27900(var_args){
var args27901 = [];
var len__9664__auto___27904 = arguments.length;
var i__9665__auto___27905 = (0);
while(true){
if((i__9665__auto___27905 < len__9664__auto___27904)){
args27901.push((arguments[i__9665__auto___27905]));

var G__27906 = (i__9665__auto___27905 + (1));
i__9665__auto___27905 = G__27906;
continue;
} else {
}
break;
}

var G__27903 = args27901.length;
switch (G__27903) {
case 1:
return sablono.core.text_area27900.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area27900.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27901.length)].join('')));

}
});

sablono.core.text_area27900.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area27900.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__8593__auto__ = value;
if(cljs.core.truth_(or__8593__auto__)){
return or__8593__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area27900.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area27900);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label27908 = (function sablono$core$label27908(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label27908);
/**
 * Creates a submit button.
 */
sablono.core.submit_button27909 = (function sablono$core$submit_button27909(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button27909);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button27910 = (function sablono$core$reset_button27910(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button27910);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to27911 = (function sablono$core$form_to27911(var_args){
var args__9671__auto__ = [];
var len__9664__auto___27918 = arguments.length;
var i__9665__auto___27919 = (0);
while(true){
if((i__9665__auto___27919 < len__9664__auto___27918)){
args__9671__auto__.push((arguments[i__9665__auto___27919]));

var G__27920 = (i__9665__auto___27919 + (1));
i__9665__auto___27919 = G__27920;
continue;
} else {
}
break;
}

var argseq__9672__auto__ = ((((1) < args__9671__auto__.length))?(new cljs.core.IndexedSeq(args__9671__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to27911.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9672__auto__);
});

sablono.core.form_to27911.cljs$core$IFn$_invoke$arity$variadic = (function (p__27914,body){
var vec__27915 = p__27914;
var method = cljs.core.nth.call(null,vec__27915,(0),null);
var action = cljs.core.nth.call(null,vec__27915,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to27911.cljs$lang$maxFixedArity = (1);

sablono.core.form_to27911.cljs$lang$applyTo = (function (seq27912){
var G__27913 = cljs.core.first.call(null,seq27912);
var seq27912__$1 = cljs.core.next.call(null,seq27912);
return sablono.core.form_to27911.cljs$core$IFn$_invoke$arity$variadic(G__27913,seq27912__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to27911);

//# sourceMappingURL=core.js.map