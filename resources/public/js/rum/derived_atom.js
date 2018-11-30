// Compiled by ClojureScript 1.9.229 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var args25928 = [];
var len__9664__auto___25948 = arguments.length;
var i__9665__auto___25949 = (0);
while(true){
if((i__9665__auto___25949 < len__9664__auto___25948)){
args25928.push((arguments[i__9665__auto___25949]));

var G__25950 = (i__9665__auto___25949 + (1));
i__9665__auto___25949 = G__25950;
continue;
} else {
}
break;
}

var G__25930 = args25928.length;
switch (G__25930) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25928.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__25931 = opts;
var map__25931__$1 = ((((!((map__25931 == null)))?((((map__25931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25931):map__25931);
var ref = cljs.core.get.call(null,map__25931__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__25931__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__25933 = cljs.core.count.call(null,refs);
switch (G__25933) {
case (1):
var vec__25934 = refs;
var a = cljs.core.nth.call(null,vec__25934,(0),null);
return ((function (vec__25934,a,G__25933,map__25931,map__25931__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__25934,a,G__25933,map__25931,map__25931__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__25937 = refs;
var a = cljs.core.nth.call(null,vec__25937,(0),null);
var b = cljs.core.nth.call(null,vec__25937,(1),null);
return ((function (vec__25937,a,b,G__25933,map__25931,map__25931__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__25937,a,b,G__25933,map__25931,map__25931__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__25940 = refs;
var a = cljs.core.nth.call(null,vec__25940,(0),null);
var b = cljs.core.nth.call(null,vec__25940,(1),null);
var c = cljs.core.nth.call(null,vec__25940,(2),null);
return ((function (vec__25940,a,b,c,G__25933,map__25931,map__25931__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__25940,a,b,c,G__25933,map__25931,map__25931__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__25933,map__25931,map__25931__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__25933,map__25931,map__25931__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__25943 = ref;
cljs.core.reset_BANG_.call(null,G__25943,recalc.call(null));

return G__25943;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__25931,map__25931__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__25931,map__25931__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__25931,map__25931__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__25931,map__25931__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__25944_25953 = cljs.core.seq.call(null,refs);
var chunk__25945_25954 = null;
var count__25946_25955 = (0);
var i__25947_25956 = (0);
while(true){
if((i__25947_25956 < count__25946_25955)){
var ref_25957__$1 = cljs.core._nth.call(null,chunk__25945_25954,i__25947_25956);
cljs.core.add_watch.call(null,ref_25957__$1,key,watch);

var G__25958 = seq__25944_25953;
var G__25959 = chunk__25945_25954;
var G__25960 = count__25946_25955;
var G__25961 = (i__25947_25956 + (1));
seq__25944_25953 = G__25958;
chunk__25945_25954 = G__25959;
count__25946_25955 = G__25960;
i__25947_25956 = G__25961;
continue;
} else {
var temp__4657__auto___25962 = cljs.core.seq.call(null,seq__25944_25953);
if(temp__4657__auto___25962){
var seq__25944_25963__$1 = temp__4657__auto___25962;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25944_25963__$1)){
var c__9404__auto___25964 = cljs.core.chunk_first.call(null,seq__25944_25963__$1);
var G__25965 = cljs.core.chunk_rest.call(null,seq__25944_25963__$1);
var G__25966 = c__9404__auto___25964;
var G__25967 = cljs.core.count.call(null,c__9404__auto___25964);
var G__25968 = (0);
seq__25944_25953 = G__25965;
chunk__25945_25954 = G__25966;
count__25946_25955 = G__25967;
i__25947_25956 = G__25968;
continue;
} else {
var ref_25969__$1 = cljs.core.first.call(null,seq__25944_25963__$1);
cljs.core.add_watch.call(null,ref_25969__$1,key,watch);

var G__25970 = cljs.core.next.call(null,seq__25944_25963__$1);
var G__25971 = null;
var G__25972 = (0);
var G__25973 = (0);
seq__25944_25953 = G__25970;
chunk__25945_25954 = G__25971;
count__25946_25955 = G__25972;
i__25947_25956 = G__25973;
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