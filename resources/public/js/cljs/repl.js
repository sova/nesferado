// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36724){
var map__36749 = p__36724;
var map__36749__$1 = ((((!((map__36749 == null)))?((((map__36749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36749):map__36749);
var m = map__36749__$1;
var n = cljs.core.get.call(null,map__36749__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36749__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36751_36773 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36752_36774 = null;
var count__36753_36775 = (0);
var i__36754_36776 = (0);
while(true){
if((i__36754_36776 < count__36753_36775)){
var f_36777 = cljs.core._nth.call(null,chunk__36752_36774,i__36754_36776);
cljs.core.println.call(null,"  ",f_36777);

var G__36778 = seq__36751_36773;
var G__36779 = chunk__36752_36774;
var G__36780 = count__36753_36775;
var G__36781 = (i__36754_36776 + (1));
seq__36751_36773 = G__36778;
chunk__36752_36774 = G__36779;
count__36753_36775 = G__36780;
i__36754_36776 = G__36781;
continue;
} else {
var temp__4657__auto___36782 = cljs.core.seq.call(null,seq__36751_36773);
if(temp__4657__auto___36782){
var seq__36751_36783__$1 = temp__4657__auto___36782;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36751_36783__$1)){
var c__26596__auto___36784 = cljs.core.chunk_first.call(null,seq__36751_36783__$1);
var G__36785 = cljs.core.chunk_rest.call(null,seq__36751_36783__$1);
var G__36786 = c__26596__auto___36784;
var G__36787 = cljs.core.count.call(null,c__26596__auto___36784);
var G__36788 = (0);
seq__36751_36773 = G__36785;
chunk__36752_36774 = G__36786;
count__36753_36775 = G__36787;
i__36754_36776 = G__36788;
continue;
} else {
var f_36789 = cljs.core.first.call(null,seq__36751_36783__$1);
cljs.core.println.call(null,"  ",f_36789);

var G__36790 = cljs.core.next.call(null,seq__36751_36783__$1);
var G__36791 = null;
var G__36792 = (0);
var G__36793 = (0);
seq__36751_36773 = G__36790;
chunk__36752_36774 = G__36791;
count__36753_36775 = G__36792;
i__36754_36776 = G__36793;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36794 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25785__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25785__auto__)){
return or__25785__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36794);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36794)))?cljs.core.second.call(null,arglists_36794):arglists_36794));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36755_36795 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36756_36796 = null;
var count__36757_36797 = (0);
var i__36758_36798 = (0);
while(true){
if((i__36758_36798 < count__36757_36797)){
var vec__36759_36799 = cljs.core._nth.call(null,chunk__36756_36796,i__36758_36798);
var name_36800 = cljs.core.nth.call(null,vec__36759_36799,(0),null);
var map__36762_36801 = cljs.core.nth.call(null,vec__36759_36799,(1),null);
var map__36762_36802__$1 = ((((!((map__36762_36801 == null)))?((((map__36762_36801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36762_36801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36762_36801):map__36762_36801);
var doc_36803 = cljs.core.get.call(null,map__36762_36802__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36804 = cljs.core.get.call(null,map__36762_36802__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36800);

cljs.core.println.call(null," ",arglists_36804);

if(cljs.core.truth_(doc_36803)){
cljs.core.println.call(null," ",doc_36803);
} else {
}

var G__36805 = seq__36755_36795;
var G__36806 = chunk__36756_36796;
var G__36807 = count__36757_36797;
var G__36808 = (i__36758_36798 + (1));
seq__36755_36795 = G__36805;
chunk__36756_36796 = G__36806;
count__36757_36797 = G__36807;
i__36758_36798 = G__36808;
continue;
} else {
var temp__4657__auto___36809 = cljs.core.seq.call(null,seq__36755_36795);
if(temp__4657__auto___36809){
var seq__36755_36810__$1 = temp__4657__auto___36809;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36755_36810__$1)){
var c__26596__auto___36811 = cljs.core.chunk_first.call(null,seq__36755_36810__$1);
var G__36812 = cljs.core.chunk_rest.call(null,seq__36755_36810__$1);
var G__36813 = c__26596__auto___36811;
var G__36814 = cljs.core.count.call(null,c__26596__auto___36811);
var G__36815 = (0);
seq__36755_36795 = G__36812;
chunk__36756_36796 = G__36813;
count__36757_36797 = G__36814;
i__36758_36798 = G__36815;
continue;
} else {
var vec__36764_36816 = cljs.core.first.call(null,seq__36755_36810__$1);
var name_36817 = cljs.core.nth.call(null,vec__36764_36816,(0),null);
var map__36767_36818 = cljs.core.nth.call(null,vec__36764_36816,(1),null);
var map__36767_36819__$1 = ((((!((map__36767_36818 == null)))?((((map__36767_36818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36767_36818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36767_36818):map__36767_36818);
var doc_36820 = cljs.core.get.call(null,map__36767_36819__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36821 = cljs.core.get.call(null,map__36767_36819__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36817);

cljs.core.println.call(null," ",arglists_36821);

if(cljs.core.truth_(doc_36820)){
cljs.core.println.call(null," ",doc_36820);
} else {
}

var G__36822 = cljs.core.next.call(null,seq__36755_36810__$1);
var G__36823 = null;
var G__36824 = (0);
var G__36825 = (0);
seq__36755_36795 = G__36822;
chunk__36756_36796 = G__36823;
count__36757_36797 = G__36824;
i__36758_36798 = G__36825;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__36769 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36770 = null;
var count__36771 = (0);
var i__36772 = (0);
while(true){
if((i__36772 < count__36771)){
var role = cljs.core._nth.call(null,chunk__36770,i__36772);
var temp__4657__auto___36826__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36826__$1)){
var spec_36827 = temp__4657__auto___36826__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36827));
} else {
}

var G__36828 = seq__36769;
var G__36829 = chunk__36770;
var G__36830 = count__36771;
var G__36831 = (i__36772 + (1));
seq__36769 = G__36828;
chunk__36770 = G__36829;
count__36771 = G__36830;
i__36772 = G__36831;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36769);
if(temp__4657__auto____$1){
var seq__36769__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36769__$1)){
var c__26596__auto__ = cljs.core.chunk_first.call(null,seq__36769__$1);
var G__36832 = cljs.core.chunk_rest.call(null,seq__36769__$1);
var G__36833 = c__26596__auto__;
var G__36834 = cljs.core.count.call(null,c__26596__auto__);
var G__36835 = (0);
seq__36769 = G__36832;
chunk__36770 = G__36833;
count__36771 = G__36834;
i__36772 = G__36835;
continue;
} else {
var role = cljs.core.first.call(null,seq__36769__$1);
var temp__4657__auto___36836__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36836__$2)){
var spec_36837 = temp__4657__auto___36836__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36837));
} else {
}

var G__36838 = cljs.core.next.call(null,seq__36769__$1);
var G__36839 = null;
var G__36840 = (0);
var G__36841 = (0);
seq__36769 = G__36838;
chunk__36770 = G__36839;
count__36771 = G__36840;
i__36772 = G__36841;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1543549065936