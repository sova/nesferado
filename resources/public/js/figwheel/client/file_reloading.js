// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25785__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25785__auto__){
return or__25785__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__25785__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__25785__auto__)){
return or__25785__auto__;
} else {
var or__25785__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__25785__auto____$1)){
return or__25785__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34593_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34593_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34598 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34599 = null;
var count__34600 = (0);
var i__34601 = (0);
while(true){
if((i__34601 < count__34600)){
var n = cljs.core._nth.call(null,chunk__34599,i__34601);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34602 = seq__34598;
var G__34603 = chunk__34599;
var G__34604 = count__34600;
var G__34605 = (i__34601 + (1));
seq__34598 = G__34602;
chunk__34599 = G__34603;
count__34600 = G__34604;
i__34601 = G__34605;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34598);
if(temp__4657__auto__){
var seq__34598__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34598__$1)){
var c__26596__auto__ = cljs.core.chunk_first.call(null,seq__34598__$1);
var G__34606 = cljs.core.chunk_rest.call(null,seq__34598__$1);
var G__34607 = c__26596__auto__;
var G__34608 = cljs.core.count.call(null,c__26596__auto__);
var G__34609 = (0);
seq__34598 = G__34606;
chunk__34599 = G__34607;
count__34600 = G__34608;
i__34601 = G__34609;
continue;
} else {
var n = cljs.core.first.call(null,seq__34598__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34610 = cljs.core.next.call(null,seq__34598__$1);
var G__34611 = null;
var G__34612 = (0);
var G__34613 = (0);
seq__34598 = G__34610;
chunk__34599 = G__34611;
count__34600 = G__34612;
i__34601 = G__34613;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__34622){
var vec__34623 = p__34622;
var _ = cljs.core.nth.call(null,vec__34623,(0),null);
var v = cljs.core.nth.call(null,vec__34623,(1),null);
var and__25773__auto__ = v;
if(cljs.core.truth_(and__25773__auto__)){
return v.call(null,dep);
} else {
return and__25773__auto__;
}
}),cljs.core.filter.call(null,(function (p__34626){
var vec__34627 = p__34626;
var k = cljs.core.nth.call(null,vec__34627,(0),null);
var v = cljs.core.nth.call(null,vec__34627,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34680_34691 = cljs.core.seq.call(null,deps);
var chunk__34681_34692 = null;
var count__34682_34693 = (0);
var i__34683_34694 = (0);
while(true){
if((i__34683_34694 < count__34682_34693)){
var dep_34695 = cljs.core._nth.call(null,chunk__34681_34692,i__34683_34694);
if(cljs.core.truth_((function (){var and__25773__auto__ = dep_34695;
if(cljs.core.truth_(and__25773__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34695));
} else {
return and__25773__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34695,(depth + (1)),state);
} else {
}

var G__34696 = seq__34680_34691;
var G__34697 = chunk__34681_34692;
var G__34698 = count__34682_34693;
var G__34699 = (i__34683_34694 + (1));
seq__34680_34691 = G__34696;
chunk__34681_34692 = G__34697;
count__34682_34693 = G__34698;
i__34683_34694 = G__34699;
continue;
} else {
var temp__4657__auto___34700 = cljs.core.seq.call(null,seq__34680_34691);
if(temp__4657__auto___34700){
var seq__34680_34701__$1 = temp__4657__auto___34700;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34680_34701__$1)){
var c__26596__auto___34702 = cljs.core.chunk_first.call(null,seq__34680_34701__$1);
var G__34703 = cljs.core.chunk_rest.call(null,seq__34680_34701__$1);
var G__34704 = c__26596__auto___34702;
var G__34705 = cljs.core.count.call(null,c__26596__auto___34702);
var G__34706 = (0);
seq__34680_34691 = G__34703;
chunk__34681_34692 = G__34704;
count__34682_34693 = G__34705;
i__34683_34694 = G__34706;
continue;
} else {
var dep_34707 = cljs.core.first.call(null,seq__34680_34701__$1);
if(cljs.core.truth_((function (){var and__25773__auto__ = dep_34707;
if(cljs.core.truth_(and__25773__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34707));
} else {
return and__25773__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34707,(depth + (1)),state);
} else {
}

var G__34708 = cljs.core.next.call(null,seq__34680_34701__$1);
var G__34709 = null;
var G__34710 = (0);
var G__34711 = (0);
seq__34680_34691 = G__34708;
chunk__34681_34692 = G__34709;
count__34682_34693 = G__34710;
i__34683_34694 = G__34711;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34684){
var vec__34688 = p__34684;
var seq__34689 = cljs.core.seq.call(null,vec__34688);
var first__34690 = cljs.core.first.call(null,seq__34689);
var seq__34689__$1 = cljs.core.next.call(null,seq__34689);
var x = first__34690;
var xs = seq__34689__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34688,seq__34689,first__34690,seq__34689__$1,x,xs,get_deps__$1){
return (function (p1__34630_SHARP_){
return clojure.set.difference.call(null,p1__34630_SHARP_,x);
});})(vec__34688,seq__34689,first__34690,seq__34689__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34724 = cljs.core.seq.call(null,provides);
var chunk__34725 = null;
var count__34726 = (0);
var i__34727 = (0);
while(true){
if((i__34727 < count__34726)){
var prov = cljs.core._nth.call(null,chunk__34725,i__34727);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34728_34736 = cljs.core.seq.call(null,requires);
var chunk__34729_34737 = null;
var count__34730_34738 = (0);
var i__34731_34739 = (0);
while(true){
if((i__34731_34739 < count__34730_34738)){
var req_34740 = cljs.core._nth.call(null,chunk__34729_34737,i__34731_34739);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34740,prov);

var G__34741 = seq__34728_34736;
var G__34742 = chunk__34729_34737;
var G__34743 = count__34730_34738;
var G__34744 = (i__34731_34739 + (1));
seq__34728_34736 = G__34741;
chunk__34729_34737 = G__34742;
count__34730_34738 = G__34743;
i__34731_34739 = G__34744;
continue;
} else {
var temp__4657__auto___34745 = cljs.core.seq.call(null,seq__34728_34736);
if(temp__4657__auto___34745){
var seq__34728_34746__$1 = temp__4657__auto___34745;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34728_34746__$1)){
var c__26596__auto___34747 = cljs.core.chunk_first.call(null,seq__34728_34746__$1);
var G__34748 = cljs.core.chunk_rest.call(null,seq__34728_34746__$1);
var G__34749 = c__26596__auto___34747;
var G__34750 = cljs.core.count.call(null,c__26596__auto___34747);
var G__34751 = (0);
seq__34728_34736 = G__34748;
chunk__34729_34737 = G__34749;
count__34730_34738 = G__34750;
i__34731_34739 = G__34751;
continue;
} else {
var req_34752 = cljs.core.first.call(null,seq__34728_34746__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34752,prov);

var G__34753 = cljs.core.next.call(null,seq__34728_34746__$1);
var G__34754 = null;
var G__34755 = (0);
var G__34756 = (0);
seq__34728_34736 = G__34753;
chunk__34729_34737 = G__34754;
count__34730_34738 = G__34755;
i__34731_34739 = G__34756;
continue;
}
} else {
}
}
break;
}

var G__34757 = seq__34724;
var G__34758 = chunk__34725;
var G__34759 = count__34726;
var G__34760 = (i__34727 + (1));
seq__34724 = G__34757;
chunk__34725 = G__34758;
count__34726 = G__34759;
i__34727 = G__34760;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34724);
if(temp__4657__auto__){
var seq__34724__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34724__$1)){
var c__26596__auto__ = cljs.core.chunk_first.call(null,seq__34724__$1);
var G__34761 = cljs.core.chunk_rest.call(null,seq__34724__$1);
var G__34762 = c__26596__auto__;
var G__34763 = cljs.core.count.call(null,c__26596__auto__);
var G__34764 = (0);
seq__34724 = G__34761;
chunk__34725 = G__34762;
count__34726 = G__34763;
i__34727 = G__34764;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34724__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34732_34765 = cljs.core.seq.call(null,requires);
var chunk__34733_34766 = null;
var count__34734_34767 = (0);
var i__34735_34768 = (0);
while(true){
if((i__34735_34768 < count__34734_34767)){
var req_34769 = cljs.core._nth.call(null,chunk__34733_34766,i__34735_34768);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34769,prov);

var G__34770 = seq__34732_34765;
var G__34771 = chunk__34733_34766;
var G__34772 = count__34734_34767;
var G__34773 = (i__34735_34768 + (1));
seq__34732_34765 = G__34770;
chunk__34733_34766 = G__34771;
count__34734_34767 = G__34772;
i__34735_34768 = G__34773;
continue;
} else {
var temp__4657__auto___34774__$1 = cljs.core.seq.call(null,seq__34732_34765);
if(temp__4657__auto___34774__$1){
var seq__34732_34775__$1 = temp__4657__auto___34774__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34732_34775__$1)){
var c__26596__auto___34776 = cljs.core.chunk_first.call(null,seq__34732_34775__$1);
var G__34777 = cljs.core.chunk_rest.call(null,seq__34732_34775__$1);
var G__34778 = c__26596__auto___34776;
var G__34779 = cljs.core.count.call(null,c__26596__auto___34776);
var G__34780 = (0);
seq__34732_34765 = G__34777;
chunk__34733_34766 = G__34778;
count__34734_34767 = G__34779;
i__34735_34768 = G__34780;
continue;
} else {
var req_34781 = cljs.core.first.call(null,seq__34732_34775__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34781,prov);

var G__34782 = cljs.core.next.call(null,seq__34732_34775__$1);
var G__34783 = null;
var G__34784 = (0);
var G__34785 = (0);
seq__34732_34765 = G__34782;
chunk__34733_34766 = G__34783;
count__34734_34767 = G__34784;
i__34735_34768 = G__34785;
continue;
}
} else {
}
}
break;
}

var G__34786 = cljs.core.next.call(null,seq__34724__$1);
var G__34787 = null;
var G__34788 = (0);
var G__34789 = (0);
seq__34724 = G__34786;
chunk__34725 = G__34787;
count__34726 = G__34788;
i__34727 = G__34789;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34794_34798 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34795_34799 = null;
var count__34796_34800 = (0);
var i__34797_34801 = (0);
while(true){
if((i__34797_34801 < count__34796_34800)){
var ns_34802 = cljs.core._nth.call(null,chunk__34795_34799,i__34797_34801);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34802);

var G__34803 = seq__34794_34798;
var G__34804 = chunk__34795_34799;
var G__34805 = count__34796_34800;
var G__34806 = (i__34797_34801 + (1));
seq__34794_34798 = G__34803;
chunk__34795_34799 = G__34804;
count__34796_34800 = G__34805;
i__34797_34801 = G__34806;
continue;
} else {
var temp__4657__auto___34807 = cljs.core.seq.call(null,seq__34794_34798);
if(temp__4657__auto___34807){
var seq__34794_34808__$1 = temp__4657__auto___34807;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34794_34808__$1)){
var c__26596__auto___34809 = cljs.core.chunk_first.call(null,seq__34794_34808__$1);
var G__34810 = cljs.core.chunk_rest.call(null,seq__34794_34808__$1);
var G__34811 = c__26596__auto___34809;
var G__34812 = cljs.core.count.call(null,c__26596__auto___34809);
var G__34813 = (0);
seq__34794_34798 = G__34810;
chunk__34795_34799 = G__34811;
count__34796_34800 = G__34812;
i__34797_34801 = G__34813;
continue;
} else {
var ns_34814 = cljs.core.first.call(null,seq__34794_34808__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34814);

var G__34815 = cljs.core.next.call(null,seq__34794_34808__$1);
var G__34816 = null;
var G__34817 = (0);
var G__34818 = (0);
seq__34794_34798 = G__34815;
chunk__34795_34799 = G__34816;
count__34796_34800 = G__34817;
i__34797_34801 = G__34818;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__25785__auto__ = goog.require__;
if(cljs.core.truth_(or__25785__auto__)){
return or__25785__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__34819__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34819 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34820__i = 0, G__34820__a = new Array(arguments.length -  0);
while (G__34820__i < G__34820__a.length) {G__34820__a[G__34820__i] = arguments[G__34820__i + 0]; ++G__34820__i;}
  args = new cljs.core.IndexedSeq(G__34820__a,0);
} 
return G__34819__delegate.call(this,args);};
G__34819.cljs$lang$maxFixedArity = 0;
G__34819.cljs$lang$applyTo = (function (arglist__34821){
var args = cljs.core.seq(arglist__34821);
return G__34819__delegate(args);
});
G__34819.cljs$core$IFn$_invoke$arity$variadic = G__34819__delegate;
return G__34819;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__34822_SHARP_,p2__34823_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str(p1__34822_SHARP_)].join('')),p2__34823_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__34824_SHARP_,p2__34825_SHARP_){
return goog.net.jsloader.load([cljs.core.str(p1__34824_SHARP_)].join(''),p2__34825_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__34827 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__34827.addCallback(((function (G__34827){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__34827))
);

G__34827.addErrback(((function (G__34827){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__34827))
);

return G__34827;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34829){if((e34829 instanceof Error)){
var e = e34829;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34829;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34831){if((e34831 instanceof Error)){
var e = e34831;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34831;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34832 = cljs.core._EQ_;
var expr__34833 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34832.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34833))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__34832.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34833))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__34832.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34833))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__34832,expr__34833){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34832,expr__34833))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34835,callback){
var map__34838 = p__34835;
var map__34838__$1 = ((((!((map__34838 == null)))?((((map__34838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34838):map__34838);
var file_msg = map__34838__$1;
var request_url = cljs.core.get.call(null,map__34838__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return (function (){var or__25785__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__25785__auto__)){
return or__25785__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__34838,map__34838__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34838,map__34838__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__30529__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30529__auto__){
return (function (){
var f__30530__auto__ = (function (){var switch__30508__auto__ = ((function (c__30529__auto__){
return (function (state_34876){
var state_val_34877 = (state_34876[(1)]);
if((state_val_34877 === (7))){
var inst_34872 = (state_34876[(2)]);
var state_34876__$1 = state_34876;
var statearr_34878_34907 = state_34876__$1;
(statearr_34878_34907[(2)] = inst_34872);

(statearr_34878_34907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (1))){
var state_34876__$1 = state_34876;
var statearr_34879_34908 = state_34876__$1;
(statearr_34879_34908[(2)] = null);

(statearr_34879_34908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (4))){
var inst_34842 = (state_34876[(7)]);
var inst_34842__$1 = (state_34876[(2)]);
var state_34876__$1 = (function (){var statearr_34880 = state_34876;
(statearr_34880[(7)] = inst_34842__$1);

return statearr_34880;
})();
if(cljs.core.truth_(inst_34842__$1)){
var statearr_34881_34909 = state_34876__$1;
(statearr_34881_34909[(1)] = (5));

} else {
var statearr_34882_34910 = state_34876__$1;
(statearr_34882_34910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (15))){
var inst_34857 = (state_34876[(8)]);
var inst_34855 = (state_34876[(9)]);
var inst_34859 = inst_34857.call(null,inst_34855);
var state_34876__$1 = state_34876;
var statearr_34883_34911 = state_34876__$1;
(statearr_34883_34911[(2)] = inst_34859);

(statearr_34883_34911[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (13))){
var inst_34866 = (state_34876[(2)]);
var state_34876__$1 = state_34876;
var statearr_34884_34912 = state_34876__$1;
(statearr_34884_34912[(2)] = inst_34866);

(statearr_34884_34912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (6))){
var state_34876__$1 = state_34876;
var statearr_34885_34913 = state_34876__$1;
(statearr_34885_34913[(2)] = null);

(statearr_34885_34913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (17))){
var inst_34863 = (state_34876[(2)]);
var state_34876__$1 = state_34876;
var statearr_34886_34914 = state_34876__$1;
(statearr_34886_34914[(2)] = inst_34863);

(statearr_34886_34914[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (3))){
var inst_34874 = (state_34876[(2)]);
var state_34876__$1 = state_34876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34876__$1,inst_34874);
} else {
if((state_val_34877 === (12))){
var state_34876__$1 = state_34876;
var statearr_34887_34915 = state_34876__$1;
(statearr_34887_34915[(2)] = null);

(statearr_34887_34915[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (2))){
var state_34876__$1 = state_34876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34876__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34877 === (11))){
var inst_34847 = (state_34876[(10)]);
var inst_34853 = figwheel.client.file_reloading.blocking_load.call(null,inst_34847);
var state_34876__$1 = state_34876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34876__$1,(14),inst_34853);
} else {
if((state_val_34877 === (9))){
var inst_34847 = (state_34876[(10)]);
var state_34876__$1 = state_34876;
if(cljs.core.truth_(inst_34847)){
var statearr_34888_34916 = state_34876__$1;
(statearr_34888_34916[(1)] = (11));

} else {
var statearr_34889_34917 = state_34876__$1;
(statearr_34889_34917[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (5))){
var inst_34848 = (state_34876[(11)]);
var inst_34842 = (state_34876[(7)]);
var inst_34847 = cljs.core.nth.call(null,inst_34842,(0),null);
var inst_34848__$1 = cljs.core.nth.call(null,inst_34842,(1),null);
var state_34876__$1 = (function (){var statearr_34890 = state_34876;
(statearr_34890[(11)] = inst_34848__$1);

(statearr_34890[(10)] = inst_34847);

return statearr_34890;
})();
if(cljs.core.truth_(inst_34848__$1)){
var statearr_34891_34918 = state_34876__$1;
(statearr_34891_34918[(1)] = (8));

} else {
var statearr_34892_34919 = state_34876__$1;
(statearr_34892_34919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (14))){
var inst_34857 = (state_34876[(8)]);
var inst_34847 = (state_34876[(10)]);
var inst_34855 = (state_34876[(2)]);
var inst_34856 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34857__$1 = cljs.core.get.call(null,inst_34856,inst_34847);
var state_34876__$1 = (function (){var statearr_34893 = state_34876;
(statearr_34893[(8)] = inst_34857__$1);

(statearr_34893[(9)] = inst_34855);

return statearr_34893;
})();
if(cljs.core.truth_(inst_34857__$1)){
var statearr_34894_34920 = state_34876__$1;
(statearr_34894_34920[(1)] = (15));

} else {
var statearr_34895_34921 = state_34876__$1;
(statearr_34895_34921[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (16))){
var inst_34855 = (state_34876[(9)]);
var inst_34861 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34855);
var state_34876__$1 = state_34876;
var statearr_34896_34922 = state_34876__$1;
(statearr_34896_34922[(2)] = inst_34861);

(statearr_34896_34922[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (10))){
var inst_34868 = (state_34876[(2)]);
var state_34876__$1 = (function (){var statearr_34897 = state_34876;
(statearr_34897[(12)] = inst_34868);

return statearr_34897;
})();
var statearr_34898_34923 = state_34876__$1;
(statearr_34898_34923[(2)] = null);

(statearr_34898_34923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (8))){
var inst_34848 = (state_34876[(11)]);
var inst_34850 = eval(inst_34848);
var state_34876__$1 = state_34876;
var statearr_34899_34924 = state_34876__$1;
(statearr_34899_34924[(2)] = inst_34850);

(statearr_34899_34924[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
});})(c__30529__auto__))
;
return ((function (switch__30508__auto__,c__30529__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30509__auto__ = null;
var figwheel$client$file_reloading$state_machine__30509__auto____0 = (function (){
var statearr_34903 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34903[(0)] = figwheel$client$file_reloading$state_machine__30509__auto__);

(statearr_34903[(1)] = (1));

return statearr_34903;
});
var figwheel$client$file_reloading$state_machine__30509__auto____1 = (function (state_34876){
while(true){
var ret_value__30510__auto__ = (function (){try{while(true){
var result__30511__auto__ = switch__30508__auto__.call(null,state_34876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30511__auto__;
}
break;
}
}catch (e34904){if((e34904 instanceof Object)){
var ex__30512__auto__ = e34904;
var statearr_34905_34925 = state_34876;
(statearr_34905_34925[(5)] = ex__30512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34926 = state_34876;
state_34876 = G__34926;
continue;
} else {
return ret_value__30510__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30509__auto__ = function(state_34876){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30509__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30509__auto____1.call(this,state_34876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30509__auto____0;
figwheel$client$file_reloading$state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30509__auto____1;
return figwheel$client$file_reloading$state_machine__30509__auto__;
})()
;})(switch__30508__auto__,c__30529__auto__))
})();
var state__30531__auto__ = (function (){var statearr_34906 = f__30530__auto__.call(null);
(statearr_34906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30529__auto__);

return statearr_34906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30531__auto__);
});})(c__30529__auto__))
);

return c__30529__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var args34927 = [];
var len__26860__auto___34930 = arguments.length;
var i__26861__auto___34931 = (0);
while(true){
if((i__26861__auto___34931 < len__26860__auto___34930)){
args34927.push((arguments[i__26861__auto___34931]));

var G__34932 = (i__26861__auto___34931 + (1));
i__26861__auto___34931 = G__34932;
continue;
} else {
}
break;
}

var G__34929 = args34927.length;
switch (G__34929) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34927.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34934,callback){
var map__34937 = p__34934;
var map__34937__$1 = ((((!((map__34937 == null)))?((((map__34937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34937):map__34937);
var file_msg = map__34937__$1;
var namespace = cljs.core.get.call(null,map__34937__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34937,map__34937__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34937,map__34937__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34939){
var map__34942 = p__34939;
var map__34942__$1 = ((((!((map__34942 == null)))?((((map__34942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34942):map__34942);
var file_msg = map__34942__$1;
var namespace = cljs.core.get.call(null,map__34942__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return cljs.core.some_QMARK_.call(null,cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34944){
var map__34947 = p__34944;
var map__34947__$1 = ((((!((map__34947 == null)))?((((map__34947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34947):map__34947);
var file_msg = map__34947__$1;
var namespace = cljs.core.get.call(null,map__34947__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25773__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__25773__auto__){
var or__25785__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25785__auto__)){
return or__25785__auto__;
} else {
var or__25785__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25785__auto____$1)){
return or__25785__auto____$1;
} else {
var or__25785__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__25785__auto____$2)){
return or__25785__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__25773__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34949,callback){
var map__34952 = p__34949;
var map__34952__$1 = ((((!((map__34952 == null)))?((((map__34952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34952):map__34952);
var file_msg = map__34952__$1;
var request_url = cljs.core.get.call(null,map__34952__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34952__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__30529__auto___35056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30529__auto___35056,out){
return (function (){
var f__30530__auto__ = (function (){var switch__30508__auto__ = ((function (c__30529__auto___35056,out){
return (function (state_35038){
var state_val_35039 = (state_35038[(1)]);
if((state_val_35039 === (1))){
var inst_35012 = cljs.core.seq.call(null,files);
var inst_35013 = cljs.core.first.call(null,inst_35012);
var inst_35014 = cljs.core.next.call(null,inst_35012);
var inst_35015 = files;
var state_35038__$1 = (function (){var statearr_35040 = state_35038;
(statearr_35040[(7)] = inst_35013);

(statearr_35040[(8)] = inst_35015);

(statearr_35040[(9)] = inst_35014);

return statearr_35040;
})();
var statearr_35041_35057 = state_35038__$1;
(statearr_35041_35057[(2)] = null);

(statearr_35041_35057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (2))){
var inst_35015 = (state_35038[(8)]);
var inst_35021 = (state_35038[(10)]);
var inst_35020 = cljs.core.seq.call(null,inst_35015);
var inst_35021__$1 = cljs.core.first.call(null,inst_35020);
var inst_35022 = cljs.core.next.call(null,inst_35020);
var inst_35023 = (inst_35021__$1 == null);
var inst_35024 = cljs.core.not.call(null,inst_35023);
var state_35038__$1 = (function (){var statearr_35042 = state_35038;
(statearr_35042[(10)] = inst_35021__$1);

(statearr_35042[(11)] = inst_35022);

return statearr_35042;
})();
if(inst_35024){
var statearr_35043_35058 = state_35038__$1;
(statearr_35043_35058[(1)] = (4));

} else {
var statearr_35044_35059 = state_35038__$1;
(statearr_35044_35059[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (3))){
var inst_35036 = (state_35038[(2)]);
var state_35038__$1 = state_35038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35038__$1,inst_35036);
} else {
if((state_val_35039 === (4))){
var inst_35021 = (state_35038[(10)]);
var inst_35026 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35021);
var state_35038__$1 = state_35038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35038__$1,(7),inst_35026);
} else {
if((state_val_35039 === (5))){
var inst_35032 = cljs.core.async.close_BANG_.call(null,out);
var state_35038__$1 = state_35038;
var statearr_35045_35060 = state_35038__$1;
(statearr_35045_35060[(2)] = inst_35032);

(statearr_35045_35060[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (6))){
var inst_35034 = (state_35038[(2)]);
var state_35038__$1 = state_35038;
var statearr_35046_35061 = state_35038__$1;
(statearr_35046_35061[(2)] = inst_35034);

(statearr_35046_35061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (7))){
var inst_35022 = (state_35038[(11)]);
var inst_35028 = (state_35038[(2)]);
var inst_35029 = cljs.core.async.put_BANG_.call(null,out,inst_35028);
var inst_35015 = inst_35022;
var state_35038__$1 = (function (){var statearr_35047 = state_35038;
(statearr_35047[(8)] = inst_35015);

(statearr_35047[(12)] = inst_35029);

return statearr_35047;
})();
var statearr_35048_35062 = state_35038__$1;
(statearr_35048_35062[(2)] = null);

(statearr_35048_35062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__30529__auto___35056,out))
;
return ((function (switch__30508__auto__,c__30529__auto___35056,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30509__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30509__auto____0 = (function (){
var statearr_35052 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35052[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30509__auto__);

(statearr_35052[(1)] = (1));

return statearr_35052;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30509__auto____1 = (function (state_35038){
while(true){
var ret_value__30510__auto__ = (function (){try{while(true){
var result__30511__auto__ = switch__30508__auto__.call(null,state_35038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30511__auto__;
}
break;
}
}catch (e35053){if((e35053 instanceof Object)){
var ex__30512__auto__ = e35053;
var statearr_35054_35063 = state_35038;
(statearr_35054_35063[(5)] = ex__30512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35064 = state_35038;
state_35038 = G__35064;
continue;
} else {
return ret_value__30510__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30509__auto__ = function(state_35038){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30509__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30509__auto____1.call(this,state_35038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30509__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30509__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30509__auto__;
})()
;})(switch__30508__auto__,c__30529__auto___35056,out))
})();
var state__30531__auto__ = (function (){var statearr_35055 = f__30530__auto__.call(null);
(statearr_35055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30529__auto___35056);

return statearr_35055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30531__auto__);
});})(c__30529__auto___35056,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35065,opts){
var map__35069 = p__35065;
var map__35069__$1 = ((((!((map__35069 == null)))?((((map__35069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35069):map__35069);
var eval_body__$1 = cljs.core.get.call(null,map__35069__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35069__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25773__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25773__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25773__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35071){var e = e35071;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__35072_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35072_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__35081){
var vec__35082 = p__35081;
var k = cljs.core.nth.call(null,vec__35082,(0),null);
var v = cljs.core.nth.call(null,vec__35082,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35085){
var vec__35086 = p__35085;
var k = cljs.core.nth.call(null,vec__35086,(0),null);
var v = cljs.core.nth.call(null,vec__35086,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35092,p__35093){
var map__35340 = p__35092;
var map__35340__$1 = ((((!((map__35340 == null)))?((((map__35340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35340):map__35340);
var opts = map__35340__$1;
var before_jsload = cljs.core.get.call(null,map__35340__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35340__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35340__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35341 = p__35093;
var map__35341__$1 = ((((!((map__35341 == null)))?((((map__35341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35341):map__35341);
var msg = map__35341__$1;
var files = cljs.core.get.call(null,map__35341__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35341__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35341__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30529__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30529__auto__,map__35340,map__35340__$1,opts,before_jsload,on_jsload,reload_dependents,map__35341,map__35341__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30530__auto__ = (function (){var switch__30508__auto__ = ((function (c__30529__auto__,map__35340,map__35340__$1,opts,before_jsload,on_jsload,reload_dependents,map__35341,map__35341__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35494){
var state_val_35495 = (state_35494[(1)]);
if((state_val_35495 === (7))){
var inst_35355 = (state_35494[(7)]);
var inst_35356 = (state_35494[(8)]);
var inst_35357 = (state_35494[(9)]);
var inst_35358 = (state_35494[(10)]);
var inst_35363 = cljs.core._nth.call(null,inst_35356,inst_35358);
var inst_35364 = figwheel.client.file_reloading.eval_body.call(null,inst_35363,opts);
var inst_35365 = (inst_35358 + (1));
var tmp35496 = inst_35355;
var tmp35497 = inst_35356;
var tmp35498 = inst_35357;
var inst_35355__$1 = tmp35496;
var inst_35356__$1 = tmp35497;
var inst_35357__$1 = tmp35498;
var inst_35358__$1 = inst_35365;
var state_35494__$1 = (function (){var statearr_35499 = state_35494;
(statearr_35499[(7)] = inst_35355__$1);

(statearr_35499[(8)] = inst_35356__$1);

(statearr_35499[(9)] = inst_35357__$1);

(statearr_35499[(11)] = inst_35364);

(statearr_35499[(10)] = inst_35358__$1);

return statearr_35499;
})();
var statearr_35500_35586 = state_35494__$1;
(statearr_35500_35586[(2)] = null);

(statearr_35500_35586[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (20))){
var inst_35398 = (state_35494[(12)]);
var inst_35406 = figwheel.client.file_reloading.sort_files.call(null,inst_35398);
var state_35494__$1 = state_35494;
var statearr_35501_35587 = state_35494__$1;
(statearr_35501_35587[(2)] = inst_35406);

(statearr_35501_35587[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (27))){
var state_35494__$1 = state_35494;
var statearr_35502_35588 = state_35494__$1;
(statearr_35502_35588[(2)] = null);

(statearr_35502_35588[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (1))){
var inst_35347 = (state_35494[(13)]);
var inst_35344 = before_jsload.call(null,files);
var inst_35345 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35346 = (function (){return ((function (inst_35347,inst_35344,inst_35345,state_val_35495,c__30529__auto__,map__35340,map__35340__$1,opts,before_jsload,on_jsload,reload_dependents,map__35341,map__35341__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35089_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35089_SHARP_);
});
;})(inst_35347,inst_35344,inst_35345,state_val_35495,c__30529__auto__,map__35340,map__35340__$1,opts,before_jsload,on_jsload,reload_dependents,map__35341,map__35341__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35347__$1 = cljs.core.filter.call(null,inst_35346,files);
var inst_35348 = cljs.core.not_empty.call(null,inst_35347__$1);
var state_35494__$1 = (function (){var statearr_35503 = state_35494;
(statearr_35503[(14)] = inst_35344);

(statearr_35503[(13)] = inst_35347__$1);

(statearr_35503[(15)] = inst_35345);

return statearr_35503;
})();
if(cljs.core.truth_(inst_35348)){
var statearr_35504_35589 = state_35494__$1;
(statearr_35504_35589[(1)] = (2));

} else {
var statearr_35505_35590 = state_35494__$1;
(statearr_35505_35590[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (24))){
var state_35494__$1 = state_35494;
var statearr_35506_35591 = state_35494__$1;
(statearr_35506_35591[(2)] = null);

(statearr_35506_35591[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (39))){
var inst_35448 = (state_35494[(16)]);
var state_35494__$1 = state_35494;
var statearr_35507_35592 = state_35494__$1;
(statearr_35507_35592[(2)] = inst_35448);

(statearr_35507_35592[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (46))){
var inst_35489 = (state_35494[(2)]);
var state_35494__$1 = state_35494;
var statearr_35508_35593 = state_35494__$1;
(statearr_35508_35593[(2)] = inst_35489);

(statearr_35508_35593[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (4))){
var inst_35392 = (state_35494[(2)]);
var inst_35393 = cljs.core.List.EMPTY;
var inst_35394 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35393);
var inst_35395 = (function (){return ((function (inst_35392,inst_35393,inst_35394,state_val_35495,c__30529__auto__,map__35340,map__35340__$1,opts,before_jsload,on_jsload,reload_dependents,map__35341,map__35341__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35090_SHARP_){
var and__25773__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35090_SHARP_);
if(cljs.core.truth_(and__25773__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35090_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35090_SHARP_)));
} else {
return and__25773__auto__;
}
});
;})(inst_35392,inst_35393,inst_35394,state_val_35495,c__30529__auto__,map__35340,map__35340__$1,opts,before_jsload,on_jsload,reload_dependents,map__35341,map__35341__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35396 = cljs.core.filter.call(null,inst_35395,files);
var inst_35397 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35398 = cljs.core.concat.call(null,inst_35396,inst_35397);
var state_35494__$1 = (function (){var statearr_35509 = state_35494;
(statearr_35509[(17)] = inst_35394);

(statearr_35509[(12)] = inst_35398);

(statearr_35509[(18)] = inst_35392);

return statearr_35509;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35510_35594 = state_35494__$1;
(statearr_35510_35594[(1)] = (16));

} else {
var statearr_35511_35595 = state_35494__$1;
(statearr_35511_35595[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (15))){
var inst_35382 = (state_35494[(2)]);
var state_35494__$1 = state_35494;
var statearr_35512_35596 = state_35494__$1;
(statearr_35512_35596[(2)] = inst_35382);

(statearr_35512_35596[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (21))){
var inst_35408 = (state_35494[(19)]);
var inst_35408__$1 = (state_35494[(2)]);
var inst_35409 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35408__$1);
var state_35494__$1 = (function (){var statearr_35513 = state_35494;
(statearr_35513[(19)] = inst_35408__$1);

return statearr_35513;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35494__$1,(22),inst_35409);
} else {
if((state_val_35495 === (31))){
var inst_35492 = (state_35494[(2)]);
var state_35494__$1 = state_35494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35494__$1,inst_35492);
} else {
if((state_val_35495 === (32))){
var inst_35448 = (state_35494[(16)]);
var inst_35453 = inst_35448.cljs$lang$protocol_mask$partition0$;
var inst_35454 = (inst_35453 & (64));
var inst_35455 = inst_35448.cljs$core$ISeq$;
var inst_35456 = (inst_35454) || (inst_35455);
var state_35494__$1 = state_35494;
if(cljs.core.truth_(inst_35456)){
var statearr_35514_35597 = state_35494__$1;
(statearr_35514_35597[(1)] = (35));

} else {
var statearr_35515_35598 = state_35494__$1;
(statearr_35515_35598[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (40))){
var inst_35469 = (state_35494[(20)]);
var inst_35468 = (state_35494[(2)]);
var inst_35469__$1 = cljs.core.get.call(null,inst_35468,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35470 = cljs.core.get.call(null,inst_35468,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35471 = cljs.core.not_empty.call(null,inst_35469__$1);
var state_35494__$1 = (function (){var statearr_35516 = state_35494;
(statearr_35516[(21)] = inst_35470);

(statearr_35516[(20)] = inst_35469__$1);

return statearr_35516;
})();
if(cljs.core.truth_(inst_35471)){
var statearr_35517_35599 = state_35494__$1;
(statearr_35517_35599[(1)] = (41));

} else {
var statearr_35518_35600 = state_35494__$1;
(statearr_35518_35600[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (33))){
var state_35494__$1 = state_35494;
var statearr_35519_35601 = state_35494__$1;
(statearr_35519_35601[(2)] = false);

(statearr_35519_35601[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (13))){
var inst_35368 = (state_35494[(22)]);
var inst_35372 = cljs.core.chunk_first.call(null,inst_35368);
var inst_35373 = cljs.core.chunk_rest.call(null,inst_35368);
var inst_35374 = cljs.core.count.call(null,inst_35372);
var inst_35355 = inst_35373;
var inst_35356 = inst_35372;
var inst_35357 = inst_35374;
var inst_35358 = (0);
var state_35494__$1 = (function (){var statearr_35520 = state_35494;
(statearr_35520[(7)] = inst_35355);

(statearr_35520[(8)] = inst_35356);

(statearr_35520[(9)] = inst_35357);

(statearr_35520[(10)] = inst_35358);

return statearr_35520;
})();
var statearr_35521_35602 = state_35494__$1;
(statearr_35521_35602[(2)] = null);

(statearr_35521_35602[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (22))){
var inst_35411 = (state_35494[(23)]);
var inst_35416 = (state_35494[(24)]);
var inst_35408 = (state_35494[(19)]);
var inst_35412 = (state_35494[(25)]);
var inst_35411__$1 = (state_35494[(2)]);
var inst_35412__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35411__$1);
var inst_35413 = (function (){var all_files = inst_35408;
var res_SINGLEQUOTE_ = inst_35411__$1;
var res = inst_35412__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35411,inst_35416,inst_35408,inst_35412,inst_35411__$1,inst_35412__$1,state_val_35495,c__30529__auto__,map__35340,map__35340__$1,opts,before_jsload,on_jsload,reload_dependents,map__35341,map__35341__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35091_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35091_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35411,inst_35416,inst_35408,inst_35412,inst_35411__$1,inst_35412__$1,state_val_35495,c__30529__auto__,map__35340,map__35340__$1,opts,before_jsload,on_jsload,reload_dependents,map__35341,map__35341__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35414 = cljs.core.filter.call(null,inst_35413,inst_35411__$1);
var inst_35415 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35416__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35415);
var inst_35417 = cljs.core.not_empty.call(null,inst_35416__$1);
var state_35494__$1 = (function (){var statearr_35522 = state_35494;
(statearr_35522[(23)] = inst_35411__$1);

(statearr_35522[(24)] = inst_35416__$1);

(statearr_35522[(25)] = inst_35412__$1);

(statearr_35522[(26)] = inst_35414);

return statearr_35522;
})();
if(cljs.core.truth_(inst_35417)){
var statearr_35523_35603 = state_35494__$1;
(statearr_35523_35603[(1)] = (23));

} else {
var statearr_35524_35604 = state_35494__$1;
(statearr_35524_35604[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (36))){
var state_35494__$1 = state_35494;
var statearr_35525_35605 = state_35494__$1;
(statearr_35525_35605[(2)] = false);

(statearr_35525_35605[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (41))){
var inst_35469 = (state_35494[(20)]);
var inst_35473 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35474 = cljs.core.map.call(null,inst_35473,inst_35469);
var inst_35475 = cljs.core.pr_str.call(null,inst_35474);
var inst_35476 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35475)].join('');
var inst_35477 = figwheel.client.utils.log.call(null,inst_35476);
var state_35494__$1 = state_35494;
var statearr_35526_35606 = state_35494__$1;
(statearr_35526_35606[(2)] = inst_35477);

(statearr_35526_35606[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (43))){
var inst_35470 = (state_35494[(21)]);
var inst_35480 = (state_35494[(2)]);
var inst_35481 = cljs.core.not_empty.call(null,inst_35470);
var state_35494__$1 = (function (){var statearr_35527 = state_35494;
(statearr_35527[(27)] = inst_35480);

return statearr_35527;
})();
if(cljs.core.truth_(inst_35481)){
var statearr_35528_35607 = state_35494__$1;
(statearr_35528_35607[(1)] = (44));

} else {
var statearr_35529_35608 = state_35494__$1;
(statearr_35529_35608[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (29))){
var inst_35411 = (state_35494[(23)]);
var inst_35416 = (state_35494[(24)]);
var inst_35408 = (state_35494[(19)]);
var inst_35412 = (state_35494[(25)]);
var inst_35448 = (state_35494[(16)]);
var inst_35414 = (state_35494[(26)]);
var inst_35444 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35447 = (function (){var all_files = inst_35408;
var res_SINGLEQUOTE_ = inst_35411;
var res = inst_35412;
var files_not_loaded = inst_35414;
var dependencies_that_loaded = inst_35416;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35411,inst_35416,inst_35408,inst_35412,inst_35448,inst_35414,inst_35444,state_val_35495,c__30529__auto__,map__35340,map__35340__$1,opts,before_jsload,on_jsload,reload_dependents,map__35341,map__35341__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35446){
var map__35530 = p__35446;
var map__35530__$1 = ((((!((map__35530 == null)))?((((map__35530.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35530.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35530):map__35530);
var namespace = cljs.core.get.call(null,map__35530__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35411,inst_35416,inst_35408,inst_35412,inst_35448,inst_35414,inst_35444,state_val_35495,c__30529__auto__,map__35340,map__35340__$1,opts,before_jsload,on_jsload,reload_dependents,map__35341,map__35341__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35448__$1 = cljs.core.group_by.call(null,inst_35447,inst_35414);
var inst_35450 = (inst_35448__$1 == null);
var inst_35451 = cljs.core.not.call(null,inst_35450);
var state_35494__$1 = (function (){var statearr_35532 = state_35494;
(statearr_35532[(28)] = inst_35444);

(statearr_35532[(16)] = inst_35448__$1);

return statearr_35532;
})();
if(inst_35451){
var statearr_35533_35609 = state_35494__$1;
(statearr_35533_35609[(1)] = (32));

} else {
var statearr_35534_35610 = state_35494__$1;
(statearr_35534_35610[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (44))){
var inst_35470 = (state_35494[(21)]);
var inst_35483 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35470);
var inst_35484 = cljs.core.pr_str.call(null,inst_35483);
var inst_35485 = [cljs.core.str("not required: "),cljs.core.str(inst_35484)].join('');
var inst_35486 = figwheel.client.utils.log.call(null,inst_35485);
var state_35494__$1 = state_35494;
var statearr_35535_35611 = state_35494__$1;
(statearr_35535_35611[(2)] = inst_35486);

(statearr_35535_35611[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (6))){
var inst_35389 = (state_35494[(2)]);
var state_35494__$1 = state_35494;
var statearr_35536_35612 = state_35494__$1;
(statearr_35536_35612[(2)] = inst_35389);

(statearr_35536_35612[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (28))){
var inst_35414 = (state_35494[(26)]);
var inst_35441 = (state_35494[(2)]);
var inst_35442 = cljs.core.not_empty.call(null,inst_35414);
var state_35494__$1 = (function (){var statearr_35537 = state_35494;
(statearr_35537[(29)] = inst_35441);

return statearr_35537;
})();
if(cljs.core.truth_(inst_35442)){
var statearr_35538_35613 = state_35494__$1;
(statearr_35538_35613[(1)] = (29));

} else {
var statearr_35539_35614 = state_35494__$1;
(statearr_35539_35614[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (25))){
var inst_35412 = (state_35494[(25)]);
var inst_35428 = (state_35494[(2)]);
var inst_35429 = cljs.core.not_empty.call(null,inst_35412);
var state_35494__$1 = (function (){var statearr_35540 = state_35494;
(statearr_35540[(30)] = inst_35428);

return statearr_35540;
})();
if(cljs.core.truth_(inst_35429)){
var statearr_35541_35615 = state_35494__$1;
(statearr_35541_35615[(1)] = (26));

} else {
var statearr_35542_35616 = state_35494__$1;
(statearr_35542_35616[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (34))){
var inst_35463 = (state_35494[(2)]);
var state_35494__$1 = state_35494;
if(cljs.core.truth_(inst_35463)){
var statearr_35543_35617 = state_35494__$1;
(statearr_35543_35617[(1)] = (38));

} else {
var statearr_35544_35618 = state_35494__$1;
(statearr_35544_35618[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (17))){
var state_35494__$1 = state_35494;
var statearr_35545_35619 = state_35494__$1;
(statearr_35545_35619[(2)] = recompile_dependents);

(statearr_35545_35619[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (3))){
var state_35494__$1 = state_35494;
var statearr_35546_35620 = state_35494__$1;
(statearr_35546_35620[(2)] = null);

(statearr_35546_35620[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (12))){
var inst_35385 = (state_35494[(2)]);
var state_35494__$1 = state_35494;
var statearr_35547_35621 = state_35494__$1;
(statearr_35547_35621[(2)] = inst_35385);

(statearr_35547_35621[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (2))){
var inst_35347 = (state_35494[(13)]);
var inst_35354 = cljs.core.seq.call(null,inst_35347);
var inst_35355 = inst_35354;
var inst_35356 = null;
var inst_35357 = (0);
var inst_35358 = (0);
var state_35494__$1 = (function (){var statearr_35548 = state_35494;
(statearr_35548[(7)] = inst_35355);

(statearr_35548[(8)] = inst_35356);

(statearr_35548[(9)] = inst_35357);

(statearr_35548[(10)] = inst_35358);

return statearr_35548;
})();
var statearr_35549_35622 = state_35494__$1;
(statearr_35549_35622[(2)] = null);

(statearr_35549_35622[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (23))){
var inst_35411 = (state_35494[(23)]);
var inst_35416 = (state_35494[(24)]);
var inst_35408 = (state_35494[(19)]);
var inst_35412 = (state_35494[(25)]);
var inst_35414 = (state_35494[(26)]);
var inst_35419 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35421 = (function (){var all_files = inst_35408;
var res_SINGLEQUOTE_ = inst_35411;
var res = inst_35412;
var files_not_loaded = inst_35414;
var dependencies_that_loaded = inst_35416;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35411,inst_35416,inst_35408,inst_35412,inst_35414,inst_35419,state_val_35495,c__30529__auto__,map__35340,map__35340__$1,opts,before_jsload,on_jsload,reload_dependents,map__35341,map__35341__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35420){
var map__35550 = p__35420;
var map__35550__$1 = ((((!((map__35550 == null)))?((((map__35550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35550):map__35550);
var request_url = cljs.core.get.call(null,map__35550__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35411,inst_35416,inst_35408,inst_35412,inst_35414,inst_35419,state_val_35495,c__30529__auto__,map__35340,map__35340__$1,opts,before_jsload,on_jsload,reload_dependents,map__35341,map__35341__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35422 = cljs.core.reverse.call(null,inst_35416);
var inst_35423 = cljs.core.map.call(null,inst_35421,inst_35422);
var inst_35424 = cljs.core.pr_str.call(null,inst_35423);
var inst_35425 = figwheel.client.utils.log.call(null,inst_35424);
var state_35494__$1 = (function (){var statearr_35552 = state_35494;
(statearr_35552[(31)] = inst_35419);

return statearr_35552;
})();
var statearr_35553_35623 = state_35494__$1;
(statearr_35553_35623[(2)] = inst_35425);

(statearr_35553_35623[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (35))){
var state_35494__$1 = state_35494;
var statearr_35554_35624 = state_35494__$1;
(statearr_35554_35624[(2)] = true);

(statearr_35554_35624[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (19))){
var inst_35398 = (state_35494[(12)]);
var inst_35404 = figwheel.client.file_reloading.expand_files.call(null,inst_35398);
var state_35494__$1 = state_35494;
var statearr_35555_35625 = state_35494__$1;
(statearr_35555_35625[(2)] = inst_35404);

(statearr_35555_35625[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (11))){
var state_35494__$1 = state_35494;
var statearr_35556_35626 = state_35494__$1;
(statearr_35556_35626[(2)] = null);

(statearr_35556_35626[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (9))){
var inst_35387 = (state_35494[(2)]);
var state_35494__$1 = state_35494;
var statearr_35557_35627 = state_35494__$1;
(statearr_35557_35627[(2)] = inst_35387);

(statearr_35557_35627[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (5))){
var inst_35357 = (state_35494[(9)]);
var inst_35358 = (state_35494[(10)]);
var inst_35360 = (inst_35358 < inst_35357);
var inst_35361 = inst_35360;
var state_35494__$1 = state_35494;
if(cljs.core.truth_(inst_35361)){
var statearr_35558_35628 = state_35494__$1;
(statearr_35558_35628[(1)] = (7));

} else {
var statearr_35559_35629 = state_35494__$1;
(statearr_35559_35629[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (14))){
var inst_35368 = (state_35494[(22)]);
var inst_35377 = cljs.core.first.call(null,inst_35368);
var inst_35378 = figwheel.client.file_reloading.eval_body.call(null,inst_35377,opts);
var inst_35379 = cljs.core.next.call(null,inst_35368);
var inst_35355 = inst_35379;
var inst_35356 = null;
var inst_35357 = (0);
var inst_35358 = (0);
var state_35494__$1 = (function (){var statearr_35560 = state_35494;
(statearr_35560[(7)] = inst_35355);

(statearr_35560[(8)] = inst_35356);

(statearr_35560[(32)] = inst_35378);

(statearr_35560[(9)] = inst_35357);

(statearr_35560[(10)] = inst_35358);

return statearr_35560;
})();
var statearr_35561_35630 = state_35494__$1;
(statearr_35561_35630[(2)] = null);

(statearr_35561_35630[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (45))){
var state_35494__$1 = state_35494;
var statearr_35562_35631 = state_35494__$1;
(statearr_35562_35631[(2)] = null);

(statearr_35562_35631[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (26))){
var inst_35411 = (state_35494[(23)]);
var inst_35416 = (state_35494[(24)]);
var inst_35408 = (state_35494[(19)]);
var inst_35412 = (state_35494[(25)]);
var inst_35414 = (state_35494[(26)]);
var inst_35431 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35433 = (function (){var all_files = inst_35408;
var res_SINGLEQUOTE_ = inst_35411;
var res = inst_35412;
var files_not_loaded = inst_35414;
var dependencies_that_loaded = inst_35416;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35411,inst_35416,inst_35408,inst_35412,inst_35414,inst_35431,state_val_35495,c__30529__auto__,map__35340,map__35340__$1,opts,before_jsload,on_jsload,reload_dependents,map__35341,map__35341__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35432){
var map__35563 = p__35432;
var map__35563__$1 = ((((!((map__35563 == null)))?((((map__35563.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35563.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35563):map__35563);
var namespace = cljs.core.get.call(null,map__35563__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35563__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35411,inst_35416,inst_35408,inst_35412,inst_35414,inst_35431,state_val_35495,c__30529__auto__,map__35340,map__35340__$1,opts,before_jsload,on_jsload,reload_dependents,map__35341,map__35341__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35434 = cljs.core.map.call(null,inst_35433,inst_35412);
var inst_35435 = cljs.core.pr_str.call(null,inst_35434);
var inst_35436 = figwheel.client.utils.log.call(null,inst_35435);
var inst_35437 = (function (){var all_files = inst_35408;
var res_SINGLEQUOTE_ = inst_35411;
var res = inst_35412;
var files_not_loaded = inst_35414;
var dependencies_that_loaded = inst_35416;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35411,inst_35416,inst_35408,inst_35412,inst_35414,inst_35431,inst_35433,inst_35434,inst_35435,inst_35436,state_val_35495,c__30529__auto__,map__35340,map__35340__$1,opts,before_jsload,on_jsload,reload_dependents,map__35341,map__35341__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35411,inst_35416,inst_35408,inst_35412,inst_35414,inst_35431,inst_35433,inst_35434,inst_35435,inst_35436,state_val_35495,c__30529__auto__,map__35340,map__35340__$1,opts,before_jsload,on_jsload,reload_dependents,map__35341,map__35341__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35438 = setTimeout(inst_35437,(10));
var state_35494__$1 = (function (){var statearr_35565 = state_35494;
(statearr_35565[(33)] = inst_35436);

(statearr_35565[(34)] = inst_35431);

return statearr_35565;
})();
var statearr_35566_35632 = state_35494__$1;
(statearr_35566_35632[(2)] = inst_35438);

(statearr_35566_35632[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (16))){
var state_35494__$1 = state_35494;
var statearr_35567_35633 = state_35494__$1;
(statearr_35567_35633[(2)] = reload_dependents);

(statearr_35567_35633[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (38))){
var inst_35448 = (state_35494[(16)]);
var inst_35465 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35448);
var state_35494__$1 = state_35494;
var statearr_35568_35634 = state_35494__$1;
(statearr_35568_35634[(2)] = inst_35465);

(statearr_35568_35634[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (30))){
var state_35494__$1 = state_35494;
var statearr_35569_35635 = state_35494__$1;
(statearr_35569_35635[(2)] = null);

(statearr_35569_35635[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (10))){
var inst_35368 = (state_35494[(22)]);
var inst_35370 = cljs.core.chunked_seq_QMARK_.call(null,inst_35368);
var state_35494__$1 = state_35494;
if(inst_35370){
var statearr_35570_35636 = state_35494__$1;
(statearr_35570_35636[(1)] = (13));

} else {
var statearr_35571_35637 = state_35494__$1;
(statearr_35571_35637[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (18))){
var inst_35402 = (state_35494[(2)]);
var state_35494__$1 = state_35494;
if(cljs.core.truth_(inst_35402)){
var statearr_35572_35638 = state_35494__$1;
(statearr_35572_35638[(1)] = (19));

} else {
var statearr_35573_35639 = state_35494__$1;
(statearr_35573_35639[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (42))){
var state_35494__$1 = state_35494;
var statearr_35574_35640 = state_35494__$1;
(statearr_35574_35640[(2)] = null);

(statearr_35574_35640[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (37))){
var inst_35460 = (state_35494[(2)]);
var state_35494__$1 = state_35494;
var statearr_35575_35641 = state_35494__$1;
(statearr_35575_35641[(2)] = inst_35460);

(statearr_35575_35641[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (8))){
var inst_35368 = (state_35494[(22)]);
var inst_35355 = (state_35494[(7)]);
var inst_35368__$1 = cljs.core.seq.call(null,inst_35355);
var state_35494__$1 = (function (){var statearr_35576 = state_35494;
(statearr_35576[(22)] = inst_35368__$1);

return statearr_35576;
})();
if(inst_35368__$1){
var statearr_35577_35642 = state_35494__$1;
(statearr_35577_35642[(1)] = (10));

} else {
var statearr_35578_35643 = state_35494__$1;
(statearr_35578_35643[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});})(c__30529__auto__,map__35340,map__35340__$1,opts,before_jsload,on_jsload,reload_dependents,map__35341,map__35341__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30508__auto__,c__30529__auto__,map__35340,map__35340__$1,opts,before_jsload,on_jsload,reload_dependents,map__35341,map__35341__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30509__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30509__auto____0 = (function (){
var statearr_35582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35582[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30509__auto__);

(statearr_35582[(1)] = (1));

return statearr_35582;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30509__auto____1 = (function (state_35494){
while(true){
var ret_value__30510__auto__ = (function (){try{while(true){
var result__30511__auto__ = switch__30508__auto__.call(null,state_35494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30511__auto__;
}
break;
}
}catch (e35583){if((e35583 instanceof Object)){
var ex__30512__auto__ = e35583;
var statearr_35584_35644 = state_35494;
(statearr_35584_35644[(5)] = ex__30512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35645 = state_35494;
state_35494 = G__35645;
continue;
} else {
return ret_value__30510__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30509__auto__ = function(state_35494){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30509__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30509__auto____1.call(this,state_35494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30509__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30509__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30509__auto__;
})()
;})(switch__30508__auto__,c__30529__auto__,map__35340,map__35340__$1,opts,before_jsload,on_jsload,reload_dependents,map__35341,map__35341__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30531__auto__ = (function (){var statearr_35585 = f__30530__auto__.call(null);
(statearr_35585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30529__auto__);

return statearr_35585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30531__auto__);
});})(c__30529__auto__,map__35340,map__35340__$1,opts,before_jsload,on_jsload,reload_dependents,map__35341,map__35341__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30529__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35648,link){
var map__35651 = p__35648;
var map__35651__$1 = ((((!((map__35651 == null)))?((((map__35651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35651):map__35651);
var file = cljs.core.get.call(null,map__35651__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35651,map__35651__$1,file){
return (function (p1__35646_SHARP_,p2__35647_SHARP_){
if(cljs.core._EQ_.call(null,p1__35646_SHARP_,p2__35647_SHARP_)){
return p1__35646_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35651,map__35651__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35657){
var map__35658 = p__35657;
var map__35658__$1 = ((((!((map__35658 == null)))?((((map__35658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35658):map__35658);
var match_length = cljs.core.get.call(null,map__35658__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35658__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35653_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35653_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35660_SHARP_,p2__35661_SHARP_){
return cljs.core.assoc.call(null,p1__35660_SHARP_,cljs.core.get.call(null,p2__35661_SHARP_,key),p2__35661_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_35662 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35662);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35662);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35663,p__35664){
var map__35669 = p__35663;
var map__35669__$1 = ((((!((map__35669 == null)))?((((map__35669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35669):map__35669);
var on_cssload = cljs.core.get.call(null,map__35669__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35670 = p__35664;
var map__35670__$1 = ((((!((map__35670 == null)))?((((map__35670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35670):map__35670);
var files_msg = map__35670__$1;
var files = cljs.core.get.call(null,map__35670__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1543549052765