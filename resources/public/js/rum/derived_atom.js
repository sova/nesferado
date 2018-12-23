// Compiled by ClojureScript 1.9.229 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var args24848 = [];
var len__9664__auto___24868 = arguments.length;
var i__9665__auto___24869 = (0);
while(true){
if((i__9665__auto___24869 < len__9664__auto___24868)){
args24848.push((arguments[i__9665__auto___24869]));

var G__24870 = (i__9665__auto___24869 + (1));
i__9665__auto___24869 = G__24870;
continue;
} else {
}
break;
}

var G__24850 = args24848.length;
switch (G__24850) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24848.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__24851 = opts;
var map__24851__$1 = ((((!((map__24851 == null)))?((((map__24851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24851):map__24851);
var ref = cljs.core.get.call(null,map__24851__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__24851__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__24853 = cljs.core.count.call(null,refs);
switch (G__24853) {
case (1):
var vec__24854 = refs;
var a = cljs.core.nth.call(null,vec__24854,(0),null);
return ((function (vec__24854,a,G__24853,map__24851,map__24851__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__24854,a,G__24853,map__24851,map__24851__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__24857 = refs;
var a = cljs.core.nth.call(null,vec__24857,(0),null);
var b = cljs.core.nth.call(null,vec__24857,(1),null);
return ((function (vec__24857,a,b,G__24853,map__24851,map__24851__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__24857,a,b,G__24853,map__24851,map__24851__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__24860 = refs;
var a = cljs.core.nth.call(null,vec__24860,(0),null);
var b = cljs.core.nth.call(null,vec__24860,(1),null);
var c = cljs.core.nth.call(null,vec__24860,(2),null);
return ((function (vec__24860,a,b,c,G__24853,map__24851,map__24851__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__24860,a,b,c,G__24853,map__24851,map__24851__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__24853,map__24851,map__24851__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__24853,map__24851,map__24851__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__24863 = ref;
cljs.core.reset_BANG_.call(null,G__24863,recalc.call(null));

return G__24863;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__24851,map__24851__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__24851,map__24851__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__24851,map__24851__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__24851,map__24851__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__24864_24873 = cljs.core.seq.call(null,refs);
var chunk__24865_24874 = null;
var count__24866_24875 = (0);
var i__24867_24876 = (0);
while(true){
if((i__24867_24876 < count__24866_24875)){
var ref_24877__$1 = cljs.core._nth.call(null,chunk__24865_24874,i__24867_24876);
cljs.core.add_watch.call(null,ref_24877__$1,key,watch);

var G__24878 = seq__24864_24873;
var G__24879 = chunk__24865_24874;
var G__24880 = count__24866_24875;
var G__24881 = (i__24867_24876 + (1));
seq__24864_24873 = G__24878;
chunk__24865_24874 = G__24879;
count__24866_24875 = G__24880;
i__24867_24876 = G__24881;
continue;
} else {
var temp__4657__auto___24882 = cljs.core.seq.call(null,seq__24864_24873);
if(temp__4657__auto___24882){
var seq__24864_24883__$1 = temp__4657__auto___24882;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24864_24883__$1)){
var c__9404__auto___24884 = cljs.core.chunk_first.call(null,seq__24864_24883__$1);
var G__24885 = cljs.core.chunk_rest.call(null,seq__24864_24883__$1);
var G__24886 = c__9404__auto___24884;
var G__24887 = cljs.core.count.call(null,c__9404__auto___24884);
var G__24888 = (0);
seq__24864_24873 = G__24885;
chunk__24865_24874 = G__24886;
count__24866_24875 = G__24887;
i__24867_24876 = G__24888;
continue;
} else {
var ref_24889__$1 = cljs.core.first.call(null,seq__24864_24883__$1);
cljs.core.add_watch.call(null,ref_24889__$1,key,watch);

var G__24890 = cljs.core.next.call(null,seq__24864_24883__$1);
var G__24891 = null;
var G__24892 = (0);
var G__24893 = (0);
seq__24864_24873 = G__24890;
chunk__24865_24874 = G__24891;
count__24866_24875 = G__24892;
i__24867_24876 = G__24893;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=derived_atom.js.map