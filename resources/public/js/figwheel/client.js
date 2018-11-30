// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (cljs.core.some_QMARK_.call(null,JSON.stringify)))?(function (x){
return [cljs.core.str("#js "),cljs.core.str(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str(x)].join('');
}catch (e37163){if((e37163 instanceof Error)){
var e = e37163;
return "Error: Unable to stringify";
} else {
throw e37163;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args37165 = [];
var len__26860__auto___37168 = arguments.length;
var i__26861__auto___37169 = (0);
while(true){
if((i__26861__auto___37169 < len__26860__auto___37168)){
args37165.push((arguments[i__26861__auto___37169]));

var G__37170 = (i__26861__auto___37169 + (1));
i__26861__auto___37169 = G__37170;
continue;
} else {
}
break;
}

var G__37167 = args37165.length;
switch (G__37167) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37165.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37164_SHARP_){
if(typeof p1__37164_SHARP_ === 'string'){
return p1__37164_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37164_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__26867__auto__ = [];
var len__26860__auto___37173 = arguments.length;
var i__26861__auto___37174 = (0);
while(true){
if((i__26861__auto___37174 < len__26860__auto___37173)){
args__26867__auto__.push((arguments[i__26861__auto___37174]));

var G__37175 = (i__26861__auto___37174 + (1));
i__26861__auto___37174 = G__37175;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37172){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37172));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26867__auto__ = [];
var len__26860__auto___37177 = arguments.length;
var i__26861__auto___37178 = (0);
while(true){
if((i__26861__auto___37178 < len__26860__auto___37177)){
args__26867__auto__.push((arguments[i__26861__auto___37178]));

var G__37179 = (i__26861__auto___37178 + (1));
i__26861__auto___37178 = G__37179;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37176){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37176));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37180){
var map__37183 = p__37180;
var map__37183__$1 = ((((!((map__37183 == null)))?((((map__37183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37183):map__37183);
var message = cljs.core.get.call(null,map__37183__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37183__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25785__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25785__auto__)){
return or__25785__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25773__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25773__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25773__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__30529__auto___37345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30529__auto___37345,ch){
return (function (){
var f__30530__auto__ = (function (){var switch__30508__auto__ = ((function (c__30529__auto___37345,ch){
return (function (state_37314){
var state_val_37315 = (state_37314[(1)]);
if((state_val_37315 === (7))){
var inst_37310 = (state_37314[(2)]);
var state_37314__$1 = state_37314;
var statearr_37316_37346 = state_37314__$1;
(statearr_37316_37346[(2)] = inst_37310);

(statearr_37316_37346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37315 === (1))){
var state_37314__$1 = state_37314;
var statearr_37317_37347 = state_37314__$1;
(statearr_37317_37347[(2)] = null);

(statearr_37317_37347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37315 === (4))){
var inst_37267 = (state_37314[(7)]);
var inst_37267__$1 = (state_37314[(2)]);
var state_37314__$1 = (function (){var statearr_37318 = state_37314;
(statearr_37318[(7)] = inst_37267__$1);

return statearr_37318;
})();
if(cljs.core.truth_(inst_37267__$1)){
var statearr_37319_37348 = state_37314__$1;
(statearr_37319_37348[(1)] = (5));

} else {
var statearr_37320_37349 = state_37314__$1;
(statearr_37320_37349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37315 === (15))){
var inst_37274 = (state_37314[(8)]);
var inst_37289 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37274);
var inst_37290 = cljs.core.first.call(null,inst_37289);
var inst_37291 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37290);
var inst_37292 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_37291)].join('');
var inst_37293 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37292);
var state_37314__$1 = state_37314;
var statearr_37321_37350 = state_37314__$1;
(statearr_37321_37350[(2)] = inst_37293);

(statearr_37321_37350[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37315 === (13))){
var inst_37298 = (state_37314[(2)]);
var state_37314__$1 = state_37314;
var statearr_37322_37351 = state_37314__$1;
(statearr_37322_37351[(2)] = inst_37298);

(statearr_37322_37351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37315 === (6))){
var state_37314__$1 = state_37314;
var statearr_37323_37352 = state_37314__$1;
(statearr_37323_37352[(2)] = null);

(statearr_37323_37352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37315 === (17))){
var inst_37296 = (state_37314[(2)]);
var state_37314__$1 = state_37314;
var statearr_37324_37353 = state_37314__$1;
(statearr_37324_37353[(2)] = inst_37296);

(statearr_37324_37353[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37315 === (3))){
var inst_37312 = (state_37314[(2)]);
var state_37314__$1 = state_37314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37314__$1,inst_37312);
} else {
if((state_val_37315 === (12))){
var inst_37273 = (state_37314[(9)]);
var inst_37287 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37273,opts);
var state_37314__$1 = state_37314;
if(cljs.core.truth_(inst_37287)){
var statearr_37325_37354 = state_37314__$1;
(statearr_37325_37354[(1)] = (15));

} else {
var statearr_37326_37355 = state_37314__$1;
(statearr_37326_37355[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37315 === (2))){
var state_37314__$1 = state_37314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37314__$1,(4),ch);
} else {
if((state_val_37315 === (11))){
var inst_37274 = (state_37314[(8)]);
var inst_37279 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37280 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37274);
var inst_37281 = cljs.core.async.timeout.call(null,(1000));
var inst_37282 = [inst_37280,inst_37281];
var inst_37283 = (new cljs.core.PersistentVector(null,2,(5),inst_37279,inst_37282,null));
var state_37314__$1 = state_37314;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37314__$1,(14),inst_37283);
} else {
if((state_val_37315 === (9))){
var inst_37274 = (state_37314[(8)]);
var inst_37300 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37301 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37274);
var inst_37302 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37301);
var inst_37303 = [cljs.core.str("Not loading: "),cljs.core.str(inst_37302)].join('');
var inst_37304 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37303);
var state_37314__$1 = (function (){var statearr_37327 = state_37314;
(statearr_37327[(10)] = inst_37300);

return statearr_37327;
})();
var statearr_37328_37356 = state_37314__$1;
(statearr_37328_37356[(2)] = inst_37304);

(statearr_37328_37356[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37315 === (5))){
var inst_37267 = (state_37314[(7)]);
var inst_37269 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37270 = (new cljs.core.PersistentArrayMap(null,2,inst_37269,null));
var inst_37271 = (new cljs.core.PersistentHashSet(null,inst_37270,null));
var inst_37272 = figwheel.client.focus_msgs.call(null,inst_37271,inst_37267);
var inst_37273 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37272);
var inst_37274 = cljs.core.first.call(null,inst_37272);
var inst_37275 = figwheel.client.autoload_QMARK_.call(null);
var state_37314__$1 = (function (){var statearr_37329 = state_37314;
(statearr_37329[(8)] = inst_37274);

(statearr_37329[(9)] = inst_37273);

return statearr_37329;
})();
if(cljs.core.truth_(inst_37275)){
var statearr_37330_37357 = state_37314__$1;
(statearr_37330_37357[(1)] = (8));

} else {
var statearr_37331_37358 = state_37314__$1;
(statearr_37331_37358[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37315 === (14))){
var inst_37285 = (state_37314[(2)]);
var state_37314__$1 = state_37314;
var statearr_37332_37359 = state_37314__$1;
(statearr_37332_37359[(2)] = inst_37285);

(statearr_37332_37359[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37315 === (16))){
var state_37314__$1 = state_37314;
var statearr_37333_37360 = state_37314__$1;
(statearr_37333_37360[(2)] = null);

(statearr_37333_37360[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37315 === (10))){
var inst_37306 = (state_37314[(2)]);
var state_37314__$1 = (function (){var statearr_37334 = state_37314;
(statearr_37334[(11)] = inst_37306);

return statearr_37334;
})();
var statearr_37335_37361 = state_37314__$1;
(statearr_37335_37361[(2)] = null);

(statearr_37335_37361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37315 === (8))){
var inst_37273 = (state_37314[(9)]);
var inst_37277 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37273,opts);
var state_37314__$1 = state_37314;
if(cljs.core.truth_(inst_37277)){
var statearr_37336_37362 = state_37314__$1;
(statearr_37336_37362[(1)] = (11));

} else {
var statearr_37337_37363 = state_37314__$1;
(statearr_37337_37363[(1)] = (12));

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
});})(c__30529__auto___37345,ch))
;
return ((function (switch__30508__auto__,c__30529__auto___37345,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30509__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30509__auto____0 = (function (){
var statearr_37341 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37341[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30509__auto__);

(statearr_37341[(1)] = (1));

return statearr_37341;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30509__auto____1 = (function (state_37314){
while(true){
var ret_value__30510__auto__ = (function (){try{while(true){
var result__30511__auto__ = switch__30508__auto__.call(null,state_37314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30511__auto__;
}
break;
}
}catch (e37342){if((e37342 instanceof Object)){
var ex__30512__auto__ = e37342;
var statearr_37343_37364 = state_37314;
(statearr_37343_37364[(5)] = ex__30512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37365 = state_37314;
state_37314 = G__37365;
continue;
} else {
return ret_value__30510__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30509__auto__ = function(state_37314){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30509__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30509__auto____1.call(this,state_37314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30509__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30509__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30509__auto__;
})()
;})(switch__30508__auto__,c__30529__auto___37345,ch))
})();
var state__30531__auto__ = (function (){var statearr_37344 = f__30530__auto__.call(null);
(statearr_37344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30529__auto___37345);

return statearr_37344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30531__auto__);
});})(c__30529__auto___37345,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37366_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37366_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37373 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37373){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_37371 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_37372 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_37371,_STAR_print_fn_STAR_37372,sb,base_path_37373){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_37371,_STAR_print_fn_STAR_37372,sb,base_path_37373))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_37372;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_37371;
}}catch (e37370){if((e37370 instanceof Error)){
var e = e37370;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37373], null));
} else {
var e = e37370;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_37373))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37374){
var map__37383 = p__37374;
var map__37383__$1 = ((((!((map__37383 == null)))?((((map__37383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37383):map__37383);
var opts = map__37383__$1;
var build_id = cljs.core.get.call(null,map__37383__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37383,map__37383__$1,opts,build_id){
return (function (p__37385){
var vec__37386 = p__37385;
var seq__37387 = cljs.core.seq.call(null,vec__37386);
var first__37388 = cljs.core.first.call(null,seq__37387);
var seq__37387__$1 = cljs.core.next.call(null,seq__37387);
var map__37389 = first__37388;
var map__37389__$1 = ((((!((map__37389 == null)))?((((map__37389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37389):map__37389);
var msg = map__37389__$1;
var msg_name = cljs.core.get.call(null,map__37389__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37387__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37386,seq__37387,first__37388,seq__37387__$1,map__37389,map__37389__$1,msg,msg_name,_,map__37383,map__37383__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37386,seq__37387,first__37388,seq__37387__$1,map__37389,map__37389__$1,msg,msg_name,_,map__37383,map__37383__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37383,map__37383__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37397){
var vec__37398 = p__37397;
var seq__37399 = cljs.core.seq.call(null,vec__37398);
var first__37400 = cljs.core.first.call(null,seq__37399);
var seq__37399__$1 = cljs.core.next.call(null,seq__37399);
var map__37401 = first__37400;
var map__37401__$1 = ((((!((map__37401 == null)))?((((map__37401.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37401.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37401):map__37401);
var msg = map__37401__$1;
var msg_name = cljs.core.get.call(null,map__37401__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37399__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37403){
var map__37415 = p__37403;
var map__37415__$1 = ((((!((map__37415 == null)))?((((map__37415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37415):map__37415);
var on_compile_warning = cljs.core.get.call(null,map__37415__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37415__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37415,map__37415__$1,on_compile_warning,on_compile_fail){
return (function (p__37417){
var vec__37418 = p__37417;
var seq__37419 = cljs.core.seq.call(null,vec__37418);
var first__37420 = cljs.core.first.call(null,seq__37419);
var seq__37419__$1 = cljs.core.next.call(null,seq__37419);
var map__37421 = first__37420;
var map__37421__$1 = ((((!((map__37421 == null)))?((((map__37421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37421):map__37421);
var msg = map__37421__$1;
var msg_name = cljs.core.get.call(null,map__37421__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37419__$1;
var pred__37423 = cljs.core._EQ_;
var expr__37424 = msg_name;
if(cljs.core.truth_(pred__37423.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37424))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37423.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37424))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37415,map__37415__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__30529__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30529__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30530__auto__ = (function (){var switch__30508__auto__ = ((function (c__30529__auto__,msg_hist,msg_names,msg){
return (function (state_37652){
var state_val_37653 = (state_37652[(1)]);
if((state_val_37653 === (7))){
var inst_37572 = (state_37652[(2)]);
var state_37652__$1 = state_37652;
if(cljs.core.truth_(inst_37572)){
var statearr_37654_37704 = state_37652__$1;
(statearr_37654_37704[(1)] = (8));

} else {
var statearr_37655_37705 = state_37652__$1;
(statearr_37655_37705[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (20))){
var inst_37646 = (state_37652[(2)]);
var state_37652__$1 = state_37652;
var statearr_37656_37706 = state_37652__$1;
(statearr_37656_37706[(2)] = inst_37646);

(statearr_37656_37706[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (27))){
var inst_37642 = (state_37652[(2)]);
var state_37652__$1 = state_37652;
var statearr_37657_37707 = state_37652__$1;
(statearr_37657_37707[(2)] = inst_37642);

(statearr_37657_37707[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (1))){
var inst_37565 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37652__$1 = state_37652;
if(cljs.core.truth_(inst_37565)){
var statearr_37658_37708 = state_37652__$1;
(statearr_37658_37708[(1)] = (2));

} else {
var statearr_37659_37709 = state_37652__$1;
(statearr_37659_37709[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (24))){
var inst_37644 = (state_37652[(2)]);
var state_37652__$1 = state_37652;
var statearr_37660_37710 = state_37652__$1;
(statearr_37660_37710[(2)] = inst_37644);

(statearr_37660_37710[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (4))){
var inst_37650 = (state_37652[(2)]);
var state_37652__$1 = state_37652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37652__$1,inst_37650);
} else {
if((state_val_37653 === (15))){
var inst_37648 = (state_37652[(2)]);
var state_37652__$1 = state_37652;
var statearr_37661_37711 = state_37652__$1;
(statearr_37661_37711[(2)] = inst_37648);

(statearr_37661_37711[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (21))){
var inst_37601 = (state_37652[(2)]);
var inst_37602 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37603 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37602);
var state_37652__$1 = (function (){var statearr_37662 = state_37652;
(statearr_37662[(7)] = inst_37601);

return statearr_37662;
})();
var statearr_37663_37712 = state_37652__$1;
(statearr_37663_37712[(2)] = inst_37603);

(statearr_37663_37712[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (31))){
var inst_37631 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37652__$1 = state_37652;
if(cljs.core.truth_(inst_37631)){
var statearr_37664_37713 = state_37652__$1;
(statearr_37664_37713[(1)] = (34));

} else {
var statearr_37665_37714 = state_37652__$1;
(statearr_37665_37714[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (32))){
var inst_37640 = (state_37652[(2)]);
var state_37652__$1 = state_37652;
var statearr_37666_37715 = state_37652__$1;
(statearr_37666_37715[(2)] = inst_37640);

(statearr_37666_37715[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (33))){
var inst_37627 = (state_37652[(2)]);
var inst_37628 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37629 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37628);
var state_37652__$1 = (function (){var statearr_37667 = state_37652;
(statearr_37667[(8)] = inst_37627);

return statearr_37667;
})();
var statearr_37668_37716 = state_37652__$1;
(statearr_37668_37716[(2)] = inst_37629);

(statearr_37668_37716[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (13))){
var inst_37586 = figwheel.client.heads_up.clear.call(null);
var state_37652__$1 = state_37652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37652__$1,(16),inst_37586);
} else {
if((state_val_37653 === (22))){
var inst_37607 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37608 = figwheel.client.heads_up.append_warning_message.call(null,inst_37607);
var state_37652__$1 = state_37652;
var statearr_37669_37717 = state_37652__$1;
(statearr_37669_37717[(2)] = inst_37608);

(statearr_37669_37717[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (36))){
var inst_37638 = (state_37652[(2)]);
var state_37652__$1 = state_37652;
var statearr_37670_37718 = state_37652__$1;
(statearr_37670_37718[(2)] = inst_37638);

(statearr_37670_37718[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (29))){
var inst_37618 = (state_37652[(2)]);
var inst_37619 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37620 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37619);
var state_37652__$1 = (function (){var statearr_37671 = state_37652;
(statearr_37671[(9)] = inst_37618);

return statearr_37671;
})();
var statearr_37672_37719 = state_37652__$1;
(statearr_37672_37719[(2)] = inst_37620);

(statearr_37672_37719[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (6))){
var inst_37567 = (state_37652[(10)]);
var state_37652__$1 = state_37652;
var statearr_37673_37720 = state_37652__$1;
(statearr_37673_37720[(2)] = inst_37567);

(statearr_37673_37720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (28))){
var inst_37614 = (state_37652[(2)]);
var inst_37615 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37616 = figwheel.client.heads_up.display_warning.call(null,inst_37615);
var state_37652__$1 = (function (){var statearr_37674 = state_37652;
(statearr_37674[(11)] = inst_37614);

return statearr_37674;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37652__$1,(29),inst_37616);
} else {
if((state_val_37653 === (25))){
var inst_37612 = figwheel.client.heads_up.clear.call(null);
var state_37652__$1 = state_37652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37652__$1,(28),inst_37612);
} else {
if((state_val_37653 === (34))){
var inst_37633 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37652__$1 = state_37652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37652__$1,(37),inst_37633);
} else {
if((state_val_37653 === (17))){
var inst_37592 = (state_37652[(2)]);
var inst_37593 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37594 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37593);
var state_37652__$1 = (function (){var statearr_37675 = state_37652;
(statearr_37675[(12)] = inst_37592);

return statearr_37675;
})();
var statearr_37676_37721 = state_37652__$1;
(statearr_37676_37721[(2)] = inst_37594);

(statearr_37676_37721[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (3))){
var inst_37584 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37652__$1 = state_37652;
if(cljs.core.truth_(inst_37584)){
var statearr_37677_37722 = state_37652__$1;
(statearr_37677_37722[(1)] = (13));

} else {
var statearr_37678_37723 = state_37652__$1;
(statearr_37678_37723[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (12))){
var inst_37580 = (state_37652[(2)]);
var state_37652__$1 = state_37652;
var statearr_37679_37724 = state_37652__$1;
(statearr_37679_37724[(2)] = inst_37580);

(statearr_37679_37724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (2))){
var inst_37567 = (state_37652[(10)]);
var inst_37567__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37652__$1 = (function (){var statearr_37680 = state_37652;
(statearr_37680[(10)] = inst_37567__$1);

return statearr_37680;
})();
if(cljs.core.truth_(inst_37567__$1)){
var statearr_37681_37725 = state_37652__$1;
(statearr_37681_37725[(1)] = (5));

} else {
var statearr_37682_37726 = state_37652__$1;
(statearr_37682_37726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (23))){
var inst_37610 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37652__$1 = state_37652;
if(cljs.core.truth_(inst_37610)){
var statearr_37683_37727 = state_37652__$1;
(statearr_37683_37727[(1)] = (25));

} else {
var statearr_37684_37728 = state_37652__$1;
(statearr_37684_37728[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (35))){
var state_37652__$1 = state_37652;
var statearr_37685_37729 = state_37652__$1;
(statearr_37685_37729[(2)] = null);

(statearr_37685_37729[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (19))){
var inst_37605 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37652__$1 = state_37652;
if(cljs.core.truth_(inst_37605)){
var statearr_37686_37730 = state_37652__$1;
(statearr_37686_37730[(1)] = (22));

} else {
var statearr_37687_37731 = state_37652__$1;
(statearr_37687_37731[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (11))){
var inst_37576 = (state_37652[(2)]);
var state_37652__$1 = state_37652;
var statearr_37688_37732 = state_37652__$1;
(statearr_37688_37732[(2)] = inst_37576);

(statearr_37688_37732[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (9))){
var inst_37578 = figwheel.client.heads_up.clear.call(null);
var state_37652__$1 = state_37652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37652__$1,(12),inst_37578);
} else {
if((state_val_37653 === (5))){
var inst_37569 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37652__$1 = state_37652;
var statearr_37689_37733 = state_37652__$1;
(statearr_37689_37733[(2)] = inst_37569);

(statearr_37689_37733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (14))){
var inst_37596 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37652__$1 = state_37652;
if(cljs.core.truth_(inst_37596)){
var statearr_37690_37734 = state_37652__$1;
(statearr_37690_37734[(1)] = (18));

} else {
var statearr_37691_37735 = state_37652__$1;
(statearr_37691_37735[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (26))){
var inst_37622 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37652__$1 = state_37652;
if(cljs.core.truth_(inst_37622)){
var statearr_37692_37736 = state_37652__$1;
(statearr_37692_37736[(1)] = (30));

} else {
var statearr_37693_37737 = state_37652__$1;
(statearr_37693_37737[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (16))){
var inst_37588 = (state_37652[(2)]);
var inst_37589 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37590 = figwheel.client.heads_up.display_exception.call(null,inst_37589);
var state_37652__$1 = (function (){var statearr_37694 = state_37652;
(statearr_37694[(13)] = inst_37588);

return statearr_37694;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37652__$1,(17),inst_37590);
} else {
if((state_val_37653 === (30))){
var inst_37624 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37625 = figwheel.client.heads_up.display_warning.call(null,inst_37624);
var state_37652__$1 = state_37652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37652__$1,(33),inst_37625);
} else {
if((state_val_37653 === (10))){
var inst_37582 = (state_37652[(2)]);
var state_37652__$1 = state_37652;
var statearr_37695_37738 = state_37652__$1;
(statearr_37695_37738[(2)] = inst_37582);

(statearr_37695_37738[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (18))){
var inst_37598 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37599 = figwheel.client.heads_up.display_exception.call(null,inst_37598);
var state_37652__$1 = state_37652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37652__$1,(21),inst_37599);
} else {
if((state_val_37653 === (37))){
var inst_37635 = (state_37652[(2)]);
var state_37652__$1 = state_37652;
var statearr_37696_37739 = state_37652__$1;
(statearr_37696_37739[(2)] = inst_37635);

(statearr_37696_37739[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (8))){
var inst_37574 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37652__$1 = state_37652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37652__$1,(11),inst_37574);
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
});})(c__30529__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30508__auto__,c__30529__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30509__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30509__auto____0 = (function (){
var statearr_37700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37700[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30509__auto__);

(statearr_37700[(1)] = (1));

return statearr_37700;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30509__auto____1 = (function (state_37652){
while(true){
var ret_value__30510__auto__ = (function (){try{while(true){
var result__30511__auto__ = switch__30508__auto__.call(null,state_37652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30511__auto__;
}
break;
}
}catch (e37701){if((e37701 instanceof Object)){
var ex__30512__auto__ = e37701;
var statearr_37702_37740 = state_37652;
(statearr_37702_37740[(5)] = ex__30512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37741 = state_37652;
state_37652 = G__37741;
continue;
} else {
return ret_value__30510__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30509__auto__ = function(state_37652){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30509__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30509__auto____1.call(this,state_37652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30509__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30509__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30509__auto__;
})()
;})(switch__30508__auto__,c__30529__auto__,msg_hist,msg_names,msg))
})();
var state__30531__auto__ = (function (){var statearr_37703 = f__30530__auto__.call(null);
(statearr_37703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30529__auto__);

return statearr_37703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30531__auto__);
});})(c__30529__auto__,msg_hist,msg_names,msg))
);

return c__30529__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30529__auto___37804 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30529__auto___37804,ch){
return (function (){
var f__30530__auto__ = (function (){var switch__30508__auto__ = ((function (c__30529__auto___37804,ch){
return (function (state_37787){
var state_val_37788 = (state_37787[(1)]);
if((state_val_37788 === (1))){
var state_37787__$1 = state_37787;
var statearr_37789_37805 = state_37787__$1;
(statearr_37789_37805[(2)] = null);

(statearr_37789_37805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37788 === (2))){
var state_37787__$1 = state_37787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37787__$1,(4),ch);
} else {
if((state_val_37788 === (3))){
var inst_37785 = (state_37787[(2)]);
var state_37787__$1 = state_37787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37787__$1,inst_37785);
} else {
if((state_val_37788 === (4))){
var inst_37775 = (state_37787[(7)]);
var inst_37775__$1 = (state_37787[(2)]);
var state_37787__$1 = (function (){var statearr_37790 = state_37787;
(statearr_37790[(7)] = inst_37775__$1);

return statearr_37790;
})();
if(cljs.core.truth_(inst_37775__$1)){
var statearr_37791_37806 = state_37787__$1;
(statearr_37791_37806[(1)] = (5));

} else {
var statearr_37792_37807 = state_37787__$1;
(statearr_37792_37807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37788 === (5))){
var inst_37775 = (state_37787[(7)]);
var inst_37777 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37775);
var state_37787__$1 = state_37787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37787__$1,(8),inst_37777);
} else {
if((state_val_37788 === (6))){
var state_37787__$1 = state_37787;
var statearr_37793_37808 = state_37787__$1;
(statearr_37793_37808[(2)] = null);

(statearr_37793_37808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37788 === (7))){
var inst_37783 = (state_37787[(2)]);
var state_37787__$1 = state_37787;
var statearr_37794_37809 = state_37787__$1;
(statearr_37794_37809[(2)] = inst_37783);

(statearr_37794_37809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37788 === (8))){
var inst_37779 = (state_37787[(2)]);
var state_37787__$1 = (function (){var statearr_37795 = state_37787;
(statearr_37795[(8)] = inst_37779);

return statearr_37795;
})();
var statearr_37796_37810 = state_37787__$1;
(statearr_37796_37810[(2)] = null);

(statearr_37796_37810[(1)] = (2));


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
});})(c__30529__auto___37804,ch))
;
return ((function (switch__30508__auto__,c__30529__auto___37804,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30509__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30509__auto____0 = (function (){
var statearr_37800 = [null,null,null,null,null,null,null,null,null];
(statearr_37800[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30509__auto__);

(statearr_37800[(1)] = (1));

return statearr_37800;
});
var figwheel$client$heads_up_plugin_$_state_machine__30509__auto____1 = (function (state_37787){
while(true){
var ret_value__30510__auto__ = (function (){try{while(true){
var result__30511__auto__ = switch__30508__auto__.call(null,state_37787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30511__auto__;
}
break;
}
}catch (e37801){if((e37801 instanceof Object)){
var ex__30512__auto__ = e37801;
var statearr_37802_37811 = state_37787;
(statearr_37802_37811[(5)] = ex__30512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37812 = state_37787;
state_37787 = G__37812;
continue;
} else {
return ret_value__30510__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30509__auto__ = function(state_37787){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30509__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30509__auto____1.call(this,state_37787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30509__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30509__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30509__auto__;
})()
;})(switch__30508__auto__,c__30529__auto___37804,ch))
})();
var state__30531__auto__ = (function (){var statearr_37803 = f__30530__auto__.call(null);
(statearr_37803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30529__auto___37804);

return statearr_37803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30531__auto__);
});})(c__30529__auto___37804,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30529__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30529__auto__){
return (function (){
var f__30530__auto__ = (function (){var switch__30508__auto__ = ((function (c__30529__auto__){
return (function (state_37833){
var state_val_37834 = (state_37833[(1)]);
if((state_val_37834 === (1))){
var inst_37828 = cljs.core.async.timeout.call(null,(3000));
var state_37833__$1 = state_37833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37833__$1,(2),inst_37828);
} else {
if((state_val_37834 === (2))){
var inst_37830 = (state_37833[(2)]);
var inst_37831 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37833__$1 = (function (){var statearr_37835 = state_37833;
(statearr_37835[(7)] = inst_37830);

return statearr_37835;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37833__$1,inst_37831);
} else {
return null;
}
}
});})(c__30529__auto__))
;
return ((function (switch__30508__auto__,c__30529__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30509__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30509__auto____0 = (function (){
var statearr_37839 = [null,null,null,null,null,null,null,null];
(statearr_37839[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30509__auto__);

(statearr_37839[(1)] = (1));

return statearr_37839;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30509__auto____1 = (function (state_37833){
while(true){
var ret_value__30510__auto__ = (function (){try{while(true){
var result__30511__auto__ = switch__30508__auto__.call(null,state_37833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30511__auto__;
}
break;
}
}catch (e37840){if((e37840 instanceof Object)){
var ex__30512__auto__ = e37840;
var statearr_37841_37843 = state_37833;
(statearr_37841_37843[(5)] = ex__30512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37844 = state_37833;
state_37833 = G__37844;
continue;
} else {
return ret_value__30510__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30509__auto__ = function(state_37833){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30509__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30509__auto____1.call(this,state_37833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30509__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30509__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30509__auto__;
})()
;})(switch__30508__auto__,c__30529__auto__))
})();
var state__30531__auto__ = (function (){var statearr_37842 = f__30530__auto__.call(null);
(statearr_37842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30529__auto__);

return statearr_37842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30531__auto__);
});})(c__30529__auto__))
);

return c__30529__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30529__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30529__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__30530__auto__ = (function (){var switch__30508__auto__ = ((function (c__30529__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37867){
var state_val_37868 = (state_37867[(1)]);
if((state_val_37868 === (1))){
var inst_37861 = cljs.core.async.timeout.call(null,(2000));
var state_37867__$1 = state_37867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37867__$1,(2),inst_37861);
} else {
if((state_val_37868 === (2))){
var inst_37863 = (state_37867[(2)]);
var inst_37864 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37865 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37864);
var state_37867__$1 = (function (){var statearr_37869 = state_37867;
(statearr_37869[(7)] = inst_37863);

return statearr_37869;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37867__$1,inst_37865);
} else {
return null;
}
}
});})(c__30529__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__30508__auto__,c__30529__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30509__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30509__auto____0 = (function (){
var statearr_37873 = [null,null,null,null,null,null,null,null];
(statearr_37873[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30509__auto__);

(statearr_37873[(1)] = (1));

return statearr_37873;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30509__auto____1 = (function (state_37867){
while(true){
var ret_value__30510__auto__ = (function (){try{while(true){
var result__30511__auto__ = switch__30508__auto__.call(null,state_37867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30511__auto__;
}
break;
}
}catch (e37874){if((e37874 instanceof Object)){
var ex__30512__auto__ = e37874;
var statearr_37875_37877 = state_37867;
(statearr_37875_37877[(5)] = ex__30512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37878 = state_37867;
state_37867 = G__37878;
continue;
} else {
return ret_value__30510__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30509__auto__ = function(state_37867){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30509__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30509__auto____1.call(this,state_37867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30509__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30509__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30509__auto__;
})()
;})(switch__30508__auto__,c__30529__auto__,figwheel_version,temp__4657__auto__))
})();
var state__30531__auto__ = (function (){var statearr_37876 = f__30530__auto__.call(null);
(statearr_37876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30529__auto__);

return statearr_37876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30531__auto__);
});})(c__30529__auto__,figwheel_version,temp__4657__auto__))
);

return c__30529__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37879){
var map__37883 = p__37879;
var map__37883__$1 = ((((!((map__37883 == null)))?((((map__37883.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37883.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37883):map__37883);
var file = cljs.core.get.call(null,map__37883__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37883__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37883__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37885 = "";
var G__37885__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__37885),cljs.core.str("file "),cljs.core.str(file)].join(''):G__37885);
var G__37885__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__37885__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__37885__$1);
if(cljs.core.truth_((function (){var and__25773__auto__ = line;
if(cljs.core.truth_(and__25773__auto__)){
return column;
} else {
return and__25773__auto__;
}
})())){
return [cljs.core.str(G__37885__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__37885__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37886){
var map__37893 = p__37886;
var map__37893__$1 = ((((!((map__37893 == null)))?((((map__37893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37893):map__37893);
var ed = map__37893__$1;
var formatted_exception = cljs.core.get.call(null,map__37893__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37893__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37893__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37895_37899 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37896_37900 = null;
var count__37897_37901 = (0);
var i__37898_37902 = (0);
while(true){
if((i__37898_37902 < count__37897_37901)){
var msg_37903 = cljs.core._nth.call(null,chunk__37896_37900,i__37898_37902);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37903);

var G__37904 = seq__37895_37899;
var G__37905 = chunk__37896_37900;
var G__37906 = count__37897_37901;
var G__37907 = (i__37898_37902 + (1));
seq__37895_37899 = G__37904;
chunk__37896_37900 = G__37905;
count__37897_37901 = G__37906;
i__37898_37902 = G__37907;
continue;
} else {
var temp__4657__auto___37908 = cljs.core.seq.call(null,seq__37895_37899);
if(temp__4657__auto___37908){
var seq__37895_37909__$1 = temp__4657__auto___37908;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37895_37909__$1)){
var c__26596__auto___37910 = cljs.core.chunk_first.call(null,seq__37895_37909__$1);
var G__37911 = cljs.core.chunk_rest.call(null,seq__37895_37909__$1);
var G__37912 = c__26596__auto___37910;
var G__37913 = cljs.core.count.call(null,c__26596__auto___37910);
var G__37914 = (0);
seq__37895_37899 = G__37911;
chunk__37896_37900 = G__37912;
count__37897_37901 = G__37913;
i__37898_37902 = G__37914;
continue;
} else {
var msg_37915 = cljs.core.first.call(null,seq__37895_37909__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37915);

var G__37916 = cljs.core.next.call(null,seq__37895_37909__$1);
var G__37917 = null;
var G__37918 = (0);
var G__37919 = (0);
seq__37895_37899 = G__37916;
chunk__37896_37900 = G__37917;
count__37897_37901 = G__37918;
i__37898_37902 = G__37919;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37920){
var map__37923 = p__37920;
var map__37923__$1 = ((((!((map__37923 == null)))?((((map__37923.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37923.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37923):map__37923);
var w = map__37923__$1;
var message = cljs.core.get.call(null,map__37923__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25773__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25773__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25773__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37935 = cljs.core.seq.call(null,plugins);
var chunk__37936 = null;
var count__37937 = (0);
var i__37938 = (0);
while(true){
if((i__37938 < count__37937)){
var vec__37939 = cljs.core._nth.call(null,chunk__37936,i__37938);
var k = cljs.core.nth.call(null,vec__37939,(0),null);
var plugin = cljs.core.nth.call(null,vec__37939,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37945 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37935,chunk__37936,count__37937,i__37938,pl_37945,vec__37939,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37945.call(null,msg_hist);
});})(seq__37935,chunk__37936,count__37937,i__37938,pl_37945,vec__37939,k,plugin))
);
} else {
}

var G__37946 = seq__37935;
var G__37947 = chunk__37936;
var G__37948 = count__37937;
var G__37949 = (i__37938 + (1));
seq__37935 = G__37946;
chunk__37936 = G__37947;
count__37937 = G__37948;
i__37938 = G__37949;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37935);
if(temp__4657__auto__){
var seq__37935__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37935__$1)){
var c__26596__auto__ = cljs.core.chunk_first.call(null,seq__37935__$1);
var G__37950 = cljs.core.chunk_rest.call(null,seq__37935__$1);
var G__37951 = c__26596__auto__;
var G__37952 = cljs.core.count.call(null,c__26596__auto__);
var G__37953 = (0);
seq__37935 = G__37950;
chunk__37936 = G__37951;
count__37937 = G__37952;
i__37938 = G__37953;
continue;
} else {
var vec__37942 = cljs.core.first.call(null,seq__37935__$1);
var k = cljs.core.nth.call(null,vec__37942,(0),null);
var plugin = cljs.core.nth.call(null,vec__37942,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37954 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37935,chunk__37936,count__37937,i__37938,pl_37954,vec__37942,k,plugin,seq__37935__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37954.call(null,msg_hist);
});})(seq__37935,chunk__37936,count__37937,i__37938,pl_37954,vec__37942,k,plugin,seq__37935__$1,temp__4657__auto__))
);
} else {
}

var G__37955 = cljs.core.next.call(null,seq__37935__$1);
var G__37956 = null;
var G__37957 = (0);
var G__37958 = (0);
seq__37935 = G__37955;
chunk__37936 = G__37956;
count__37937 = G__37957;
i__37938 = G__37958;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args37959 = [];
var len__26860__auto___37966 = arguments.length;
var i__26861__auto___37967 = (0);
while(true){
if((i__26861__auto___37967 < len__26860__auto___37966)){
args37959.push((arguments[i__26861__auto___37967]));

var G__37968 = (i__26861__auto___37967 + (1));
i__26861__auto___37967 = G__37968;
continue;
} else {
}
break;
}

var G__37961 = args37959.length;
switch (G__37961) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37959.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37962_37970 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37963_37971 = null;
var count__37964_37972 = (0);
var i__37965_37973 = (0);
while(true){
if((i__37965_37973 < count__37964_37972)){
var msg_37974 = cljs.core._nth.call(null,chunk__37963_37971,i__37965_37973);
figwheel.client.socket.handle_incoming_message.call(null,msg_37974);

var G__37975 = seq__37962_37970;
var G__37976 = chunk__37963_37971;
var G__37977 = count__37964_37972;
var G__37978 = (i__37965_37973 + (1));
seq__37962_37970 = G__37975;
chunk__37963_37971 = G__37976;
count__37964_37972 = G__37977;
i__37965_37973 = G__37978;
continue;
} else {
var temp__4657__auto___37979 = cljs.core.seq.call(null,seq__37962_37970);
if(temp__4657__auto___37979){
var seq__37962_37980__$1 = temp__4657__auto___37979;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37962_37980__$1)){
var c__26596__auto___37981 = cljs.core.chunk_first.call(null,seq__37962_37980__$1);
var G__37982 = cljs.core.chunk_rest.call(null,seq__37962_37980__$1);
var G__37983 = c__26596__auto___37981;
var G__37984 = cljs.core.count.call(null,c__26596__auto___37981);
var G__37985 = (0);
seq__37962_37970 = G__37982;
chunk__37963_37971 = G__37983;
count__37964_37972 = G__37984;
i__37965_37973 = G__37985;
continue;
} else {
var msg_37986 = cljs.core.first.call(null,seq__37962_37980__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37986);

var G__37987 = cljs.core.next.call(null,seq__37962_37980__$1);
var G__37988 = null;
var G__37989 = (0);
var G__37990 = (0);
seq__37962_37970 = G__37987;
chunk__37963_37971 = G__37988;
count__37964_37972 = G__37989;
i__37965_37973 = G__37990;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__26867__auto__ = [];
var len__26860__auto___37995 = arguments.length;
var i__26861__auto___37996 = (0);
while(true){
if((i__26861__auto___37996 < len__26860__auto___37995)){
args__26867__auto__.push((arguments[i__26861__auto___37996]));

var G__37997 = (i__26861__auto___37996 + (1));
i__26861__auto___37996 = G__37997;
continue;
} else {
}
break;
}

var argseq__26868__auto__ = ((((0) < args__26867__auto__.length))?(new cljs.core.IndexedSeq(args__26867__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26868__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37992){
var map__37993 = p__37992;
var map__37993__$1 = ((((!((map__37993 == null)))?((((map__37993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37993):map__37993);
var opts = map__37993__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37991){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37991));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37999){if((e37999 instanceof Error)){
var e = e37999;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37999;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__38003){
var map__38004 = p__38003;
var map__38004__$1 = ((((!((map__38004 == null)))?((((map__38004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38004):map__38004);
var msg_name = cljs.core.get.call(null,map__38004__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1543549071504