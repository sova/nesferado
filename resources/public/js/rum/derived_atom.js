// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var args27137 = [];
var len__7454__auto___27168 = arguments.length;
var i__7455__auto___27169 = (0);
while(true){
if((i__7455__auto___27169 < len__7454__auto___27168)){
args27137.push((arguments[i__7455__auto___27169]));

var G__27170 = (i__7455__auto___27169 + (1));
i__7455__auto___27169 = G__27170;
continue;
} else {
}
break;
}

var G__27139 = args27137.length;
switch (G__27139) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27137.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4(refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__27140 = opts;
var map__27140__$1 = ((((!((map__27140 == null)))?((((map__27140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27140):map__27140);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27140__$1,cljs.core.cst$kw$ref);
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27140__$1,cljs.core.cst$kw$check_DASH_equals_QMARK_,true);
var recalc = (function (){var G__27142 = cljs.core.count(refs);
switch (G__27142) {
case (1):
var vec__27143 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27143,(0),null);
return ((function (vec__27143,a,G__27142,map__27140,map__27140__$1,ref,check_equals_QMARK_){
return (function (){
var G__27146 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27146) : f.call(null,G__27146));
});
;})(vec__27143,a,G__27142,map__27140,map__27140__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__27147 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27147,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27147,(1),null);
return ((function (vec__27147,a,b,G__27142,map__27140,map__27140__$1,ref,check_equals_QMARK_){
return (function (){
var G__27150 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));
var G__27151 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(b) : cljs.core.deref.call(null,b));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27150,G__27151) : f.call(null,G__27150,G__27151));
});
;})(vec__27147,a,b,G__27142,map__27140,map__27140__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__27152 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27152,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27152,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27152,(2),null);
return ((function (vec__27152,a,b,c,G__27142,map__27140,map__27140__$1,ref,check_equals_QMARK_){
return (function (){
var G__27155 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));
var G__27156 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(b) : cljs.core.deref.call(null,b));
var G__27157 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(c) : cljs.core.deref.call(null,c));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__27155,G__27156,G__27157) : f.call(null,G__27155,G__27156,G__27157));
});
;})(vec__27152,a,b,c,G__27142,map__27140,map__27140__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__27142,map__27140,map__27140__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});
;})(G__27142,map__27140,map__27140__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__27158 = ref;
var G__27159_27173 = G__27158;
var G__27160_27174 = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__27159_27173,G__27160_27174) : cljs.core.reset_BANG_.call(null,G__27159_27173,G__27160_27174));

return G__27158;
})():(function (){var G__27161 = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27161) : cljs.core.atom.call(null,G__27161));
})());
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__27140,map__27140__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(sink) : cljs.core.deref.call(null,sink)),new_val)){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(sink,new_val) : cljs.core.reset_BANG_.call(null,sink,new_val));
} else {
return null;
}
});})(map__27140,map__27140__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__27140,map__27140__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var G__27162 = sink;
var G__27163 = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__27162,G__27163) : cljs.core.reset_BANG_.call(null,G__27162,G__27163));
});})(map__27140,map__27140__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__27164_27175 = cljs.core.seq(refs);
var chunk__27165_27176 = null;
var count__27166_27177 = (0);
var i__27167_27178 = (0);
while(true){
if((i__27167_27178 < count__27166_27177)){
var ref_27179__$1 = chunk__27165_27176.cljs$core$IIndexed$_nth$arity$2(null,i__27167_27178);
cljs.core.add_watch(ref_27179__$1,key,watch);

var G__27180 = seq__27164_27175;
var G__27181 = chunk__27165_27176;
var G__27182 = count__27166_27177;
var G__27183 = (i__27167_27178 + (1));
seq__27164_27175 = G__27180;
chunk__27165_27176 = G__27181;
count__27166_27177 = G__27182;
i__27167_27178 = G__27183;
continue;
} else {
var temp__4657__auto___27184 = cljs.core.seq(seq__27164_27175);
if(temp__4657__auto___27184){
var seq__27164_27185__$1 = temp__4657__auto___27184;
if(cljs.core.chunked_seq_QMARK_(seq__27164_27185__$1)){
var c__7194__auto___27186 = cljs.core.chunk_first(seq__27164_27185__$1);
var G__27187 = cljs.core.chunk_rest(seq__27164_27185__$1);
var G__27188 = c__7194__auto___27186;
var G__27189 = cljs.core.count(c__7194__auto___27186);
var G__27190 = (0);
seq__27164_27175 = G__27187;
chunk__27165_27176 = G__27188;
count__27166_27177 = G__27189;
i__27167_27178 = G__27190;
continue;
} else {
var ref_27191__$1 = cljs.core.first(seq__27164_27185__$1);
cljs.core.add_watch(ref_27191__$1,key,watch);

var G__27192 = cljs.core.next(seq__27164_27185__$1);
var G__27193 = null;
var G__27194 = (0);
var G__27195 = (0);
seq__27164_27175 = G__27192;
chunk__27165_27176 = G__27193;
count__27166_27177 = G__27194;
i__27167_27178 = G__27195;
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

