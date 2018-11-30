// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args32393 = [];
var len__9664__auto___32399 = arguments.length;
var i__9665__auto___32400 = (0);
while(true){
if((i__9665__auto___32400 < len__9664__auto___32399)){
args32393.push((arguments[i__9665__auto___32400]));

var G__32401 = (i__9665__auto___32400 + (1));
i__9665__auto___32400 = G__32401;
continue;
} else {
}
break;
}

var G__32395 = args32393.length;
switch (G__32395) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32393.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async32396 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32396 = (function (f,blockable,meta32397){
this.f = f;
this.blockable = blockable;
this.meta32397 = meta32397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32398,meta32397__$1){
var self__ = this;
var _32398__$1 = this;
return (new cljs.core.async.t_cljs$core$async32396(self__.f,self__.blockable,meta32397__$1));
});

cljs.core.async.t_cljs$core$async32396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32398){
var self__ = this;
var _32398__$1 = this;
return self__.meta32397;
});

cljs.core.async.t_cljs$core$async32396.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32396.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32396.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32396.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32396.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32397","meta32397",1074915510,null)], null);
});

cljs.core.async.t_cljs$core$async32396.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32396.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32396";

cljs.core.async.t_cljs$core$async32396.cljs$lang$ctorPrWriter = (function (this__9199__auto__,writer__9200__auto__,opt__9201__auto__){
return cljs.core._write.call(null,writer__9200__auto__,"cljs.core.async/t_cljs$core$async32396");
});

cljs.core.async.__GT_t_cljs$core$async32396 = (function cljs$core$async$__GT_t_cljs$core$async32396(f__$1,blockable__$1,meta32397){
return (new cljs.core.async.t_cljs$core$async32396(f__$1,blockable__$1,meta32397));
});

}

return (new cljs.core.async.t_cljs$core$async32396(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args32405 = [];
var len__9664__auto___32408 = arguments.length;
var i__9665__auto___32409 = (0);
while(true){
if((i__9665__auto___32409 < len__9664__auto___32408)){
args32405.push((arguments[i__9665__auto___32409]));

var G__32410 = (i__9665__auto___32409 + (1));
i__9665__auto___32409 = G__32410;
continue;
} else {
}
break;
}

var G__32407 = args32405.length;
switch (G__32407) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32405.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args32412 = [];
var len__9664__auto___32415 = arguments.length;
var i__9665__auto___32416 = (0);
while(true){
if((i__9665__auto___32416 < len__9664__auto___32415)){
args32412.push((arguments[i__9665__auto___32416]));

var G__32417 = (i__9665__auto___32416 + (1));
i__9665__auto___32416 = G__32417;
continue;
} else {
}
break;
}

var G__32414 = args32412.length;
switch (G__32414) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32412.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args32419 = [];
var len__9664__auto___32422 = arguments.length;
var i__9665__auto___32423 = (0);
while(true){
if((i__9665__auto___32423 < len__9664__auto___32422)){
args32419.push((arguments[i__9665__auto___32423]));

var G__32424 = (i__9665__auto___32423 + (1));
i__9665__auto___32423 = G__32424;
continue;
} else {
}
break;
}

var G__32421 = args32419.length;
switch (G__32421) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32419.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32426 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32426);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32426,ret){
return (function (){
return fn1.call(null,val_32426);
});})(val_32426,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args32427 = [];
var len__9664__auto___32430 = arguments.length;
var i__9665__auto___32431 = (0);
while(true){
if((i__9665__auto___32431 < len__9664__auto___32430)){
args32427.push((arguments[i__9665__auto___32431]));

var G__32432 = (i__9665__auto___32431 + (1));
i__9665__auto___32431 = G__32432;
continue;
} else {
}
break;
}

var G__32429 = args32427.length;
switch (G__32429) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32427.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__9508__auto___32434 = n;
var x_32435 = (0);
while(true){
if((x_32435 < n__9508__auto___32434)){
(a[x_32435] = (0));

var G__32436 = (x_32435 + (1));
x_32435 = G__32436;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__32437 = (i + (1));
i = G__32437;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async32441 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32441 = (function (alt_flag,flag,meta32442){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta32442 = meta32442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32443,meta32442__$1){
var self__ = this;
var _32443__$1 = this;
return (new cljs.core.async.t_cljs$core$async32441(self__.alt_flag,self__.flag,meta32442__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32443){
var self__ = this;
var _32443__$1 = this;
return self__.meta32442;
});})(flag))
;

cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32441.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32442","meta32442",-422501927,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32441.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32441";

cljs.core.async.t_cljs$core$async32441.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9199__auto__,writer__9200__auto__,opt__9201__auto__){
return cljs.core._write.call(null,writer__9200__auto__,"cljs.core.async/t_cljs$core$async32441");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32441 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32441(alt_flag__$1,flag__$1,meta32442){
return (new cljs.core.async.t_cljs$core$async32441(alt_flag__$1,flag__$1,meta32442));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32441(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32447 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32447 = (function (alt_handler,flag,cb,meta32448){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta32448 = meta32448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32449,meta32448__$1){
var self__ = this;
var _32449__$1 = this;
return (new cljs.core.async.t_cljs$core$async32447(self__.alt_handler,self__.flag,self__.cb,meta32448__$1));
});

cljs.core.async.t_cljs$core$async32447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32449){
var self__ = this;
var _32449__$1 = this;
return self__.meta32448;
});

cljs.core.async.t_cljs$core$async32447.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32447.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32447.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32447.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32447.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32448","meta32448",1473482540,null)], null);
});

cljs.core.async.t_cljs$core$async32447.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32447.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32447";

cljs.core.async.t_cljs$core$async32447.cljs$lang$ctorPrWriter = (function (this__9199__auto__,writer__9200__auto__,opt__9201__auto__){
return cljs.core._write.call(null,writer__9200__auto__,"cljs.core.async/t_cljs$core$async32447");
});

cljs.core.async.__GT_t_cljs$core$async32447 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32447(alt_handler__$1,flag__$1,cb__$1,meta32448){
return (new cljs.core.async.t_cljs$core$async32447(alt_handler__$1,flag__$1,cb__$1,meta32448));
});

}

return (new cljs.core.async.t_cljs$core$async32447(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32450_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32450_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32451_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32451_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8593__auto__ = wport;
if(cljs.core.truth_(or__8593__auto__)){
return or__8593__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32452 = (i + (1));
i = G__32452;
continue;
}
} else {
return null;
}
break;
}
})();
var or__8593__auto__ = ret;
if(cljs.core.truth_(or__8593__auto__)){
return or__8593__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__8581__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__8581__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__8581__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__9671__auto__ = [];
var len__9664__auto___32458 = arguments.length;
var i__9665__auto___32459 = (0);
while(true){
if((i__9665__auto___32459 < len__9664__auto___32458)){
args__9671__auto__.push((arguments[i__9665__auto___32459]));

var G__32460 = (i__9665__auto___32459 + (1));
i__9665__auto___32459 = G__32460;
continue;
} else {
}
break;
}

var argseq__9672__auto__ = ((((1) < args__9671__auto__.length))?(new cljs.core.IndexedSeq(args__9671__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9672__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32455){
var map__32456 = p__32455;
var map__32456__$1 = ((((!((map__32456 == null)))?((((map__32456.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32456.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32456):map__32456);
var opts = map__32456__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32453){
var G__32454 = cljs.core.first.call(null,seq32453);
var seq32453__$1 = cljs.core.next.call(null,seq32453);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32454,seq32453__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args32461 = [];
var len__9664__auto___32511 = arguments.length;
var i__9665__auto___32512 = (0);
while(true){
if((i__9665__auto___32512 < len__9664__auto___32511)){
args32461.push((arguments[i__9665__auto___32512]));

var G__32513 = (i__9665__auto___32512 + (1));
i__9665__auto___32512 = G__32513;
continue;
} else {
}
break;
}

var G__32463 = args32461.length;
switch (G__32463) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32461.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32348__auto___32515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32348__auto___32515){
return (function (){
var f__32349__auto__ = (function (){var switch__32236__auto__ = ((function (c__32348__auto___32515){
return (function (state_32487){
var state_val_32488 = (state_32487[(1)]);
if((state_val_32488 === (7))){
var inst_32483 = (state_32487[(2)]);
var state_32487__$1 = state_32487;
var statearr_32489_32516 = state_32487__$1;
(statearr_32489_32516[(2)] = inst_32483);

(statearr_32489_32516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (1))){
var state_32487__$1 = state_32487;
var statearr_32490_32517 = state_32487__$1;
(statearr_32490_32517[(2)] = null);

(statearr_32490_32517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (4))){
var inst_32466 = (state_32487[(7)]);
var inst_32466__$1 = (state_32487[(2)]);
var inst_32467 = (inst_32466__$1 == null);
var state_32487__$1 = (function (){var statearr_32491 = state_32487;
(statearr_32491[(7)] = inst_32466__$1);

return statearr_32491;
})();
if(cljs.core.truth_(inst_32467)){
var statearr_32492_32518 = state_32487__$1;
(statearr_32492_32518[(1)] = (5));

} else {
var statearr_32493_32519 = state_32487__$1;
(statearr_32493_32519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (13))){
var state_32487__$1 = state_32487;
var statearr_32494_32520 = state_32487__$1;
(statearr_32494_32520[(2)] = null);

(statearr_32494_32520[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (6))){
var inst_32466 = (state_32487[(7)]);
var state_32487__$1 = state_32487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32487__$1,(11),to,inst_32466);
} else {
if((state_val_32488 === (3))){
var inst_32485 = (state_32487[(2)]);
var state_32487__$1 = state_32487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32487__$1,inst_32485);
} else {
if((state_val_32488 === (12))){
var state_32487__$1 = state_32487;
var statearr_32495_32521 = state_32487__$1;
(statearr_32495_32521[(2)] = null);

(statearr_32495_32521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (2))){
var state_32487__$1 = state_32487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32487__$1,(4),from);
} else {
if((state_val_32488 === (11))){
var inst_32476 = (state_32487[(2)]);
var state_32487__$1 = state_32487;
if(cljs.core.truth_(inst_32476)){
var statearr_32496_32522 = state_32487__$1;
(statearr_32496_32522[(1)] = (12));

} else {
var statearr_32497_32523 = state_32487__$1;
(statearr_32497_32523[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (9))){
var state_32487__$1 = state_32487;
var statearr_32498_32524 = state_32487__$1;
(statearr_32498_32524[(2)] = null);

(statearr_32498_32524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (5))){
var state_32487__$1 = state_32487;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32499_32525 = state_32487__$1;
(statearr_32499_32525[(1)] = (8));

} else {
var statearr_32500_32526 = state_32487__$1;
(statearr_32500_32526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (14))){
var inst_32481 = (state_32487[(2)]);
var state_32487__$1 = state_32487;
var statearr_32501_32527 = state_32487__$1;
(statearr_32501_32527[(2)] = inst_32481);

(statearr_32501_32527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (10))){
var inst_32473 = (state_32487[(2)]);
var state_32487__$1 = state_32487;
var statearr_32502_32528 = state_32487__$1;
(statearr_32502_32528[(2)] = inst_32473);

(statearr_32502_32528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (8))){
var inst_32470 = cljs.core.async.close_BANG_.call(null,to);
var state_32487__$1 = state_32487;
var statearr_32503_32529 = state_32487__$1;
(statearr_32503_32529[(2)] = inst_32470);

(statearr_32503_32529[(1)] = (10));


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
});})(c__32348__auto___32515))
;
return ((function (switch__32236__auto__,c__32348__auto___32515){
return (function() {
var cljs$core$async$state_machine__32237__auto__ = null;
var cljs$core$async$state_machine__32237__auto____0 = (function (){
var statearr_32507 = [null,null,null,null,null,null,null,null];
(statearr_32507[(0)] = cljs$core$async$state_machine__32237__auto__);

(statearr_32507[(1)] = (1));

return statearr_32507;
});
var cljs$core$async$state_machine__32237__auto____1 = (function (state_32487){
while(true){
var ret_value__32238__auto__ = (function (){try{while(true){
var result__32239__auto__ = switch__32236__auto__.call(null,state_32487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32239__auto__;
}
break;
}
}catch (e32508){if((e32508 instanceof Object)){
var ex__32240__auto__ = e32508;
var statearr_32509_32530 = state_32487;
(statearr_32509_32530[(5)] = ex__32240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32531 = state_32487;
state_32487 = G__32531;
continue;
} else {
return ret_value__32238__auto__;
}
break;
}
});
cljs$core$async$state_machine__32237__auto__ = function(state_32487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32237__auto____1.call(this,state_32487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32237__auto____0;
cljs$core$async$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32237__auto____1;
return cljs$core$async$state_machine__32237__auto__;
})()
;})(switch__32236__auto__,c__32348__auto___32515))
})();
var state__32350__auto__ = (function (){var statearr_32510 = f__32349__auto__.call(null);
(statearr_32510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32348__auto___32515);

return statearr_32510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32350__auto__);
});})(c__32348__auto___32515))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__32719){
var vec__32720 = p__32719;
var v = cljs.core.nth.call(null,vec__32720,(0),null);
var p = cljs.core.nth.call(null,vec__32720,(1),null);
var job = vec__32720;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32348__auto___32906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32348__auto___32906,res,vec__32720,v,p,job,jobs,results){
return (function (){
var f__32349__auto__ = (function (){var switch__32236__auto__ = ((function (c__32348__auto___32906,res,vec__32720,v,p,job,jobs,results){
return (function (state_32727){
var state_val_32728 = (state_32727[(1)]);
if((state_val_32728 === (1))){
var state_32727__$1 = state_32727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32727__$1,(2),res,v);
} else {
if((state_val_32728 === (2))){
var inst_32724 = (state_32727[(2)]);
var inst_32725 = cljs.core.async.close_BANG_.call(null,res);
var state_32727__$1 = (function (){var statearr_32729 = state_32727;
(statearr_32729[(7)] = inst_32724);

return statearr_32729;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32727__$1,inst_32725);
} else {
return null;
}
}
});})(c__32348__auto___32906,res,vec__32720,v,p,job,jobs,results))
;
return ((function (switch__32236__auto__,c__32348__auto___32906,res,vec__32720,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32237__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32237__auto____0 = (function (){
var statearr_32733 = [null,null,null,null,null,null,null,null];
(statearr_32733[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32237__auto__);

(statearr_32733[(1)] = (1));

return statearr_32733;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32237__auto____1 = (function (state_32727){
while(true){
var ret_value__32238__auto__ = (function (){try{while(true){
var result__32239__auto__ = switch__32236__auto__.call(null,state_32727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32239__auto__;
}
break;
}
}catch (e32734){if((e32734 instanceof Object)){
var ex__32240__auto__ = e32734;
var statearr_32735_32907 = state_32727;
(statearr_32735_32907[(5)] = ex__32240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32908 = state_32727;
state_32727 = G__32908;
continue;
} else {
return ret_value__32238__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32237__auto__ = function(state_32727){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32237__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32237__auto____1.call(this,state_32727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32237__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32237__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32237__auto__;
})()
;})(switch__32236__auto__,c__32348__auto___32906,res,vec__32720,v,p,job,jobs,results))
})();
var state__32350__auto__ = (function (){var statearr_32736 = f__32349__auto__.call(null);
(statearr_32736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32348__auto___32906);

return statearr_32736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32350__auto__);
});})(c__32348__auto___32906,res,vec__32720,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32737){
var vec__32738 = p__32737;
var v = cljs.core.nth.call(null,vec__32738,(0),null);
var p = cljs.core.nth.call(null,vec__32738,(1),null);
var job = vec__32738;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__9508__auto___32909 = n;
var __32910 = (0);
while(true){
if((__32910 < n__9508__auto___32909)){
var G__32741_32911 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32741_32911) {
case "compute":
var c__32348__auto___32913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32910,c__32348__auto___32913,G__32741_32911,n__9508__auto___32909,jobs,results,process,async){
return (function (){
var f__32349__auto__ = (function (){var switch__32236__auto__ = ((function (__32910,c__32348__auto___32913,G__32741_32911,n__9508__auto___32909,jobs,results,process,async){
return (function (state_32754){
var state_val_32755 = (state_32754[(1)]);
if((state_val_32755 === (1))){
var state_32754__$1 = state_32754;
var statearr_32756_32914 = state_32754__$1;
(statearr_32756_32914[(2)] = null);

(statearr_32756_32914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (2))){
var state_32754__$1 = state_32754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32754__$1,(4),jobs);
} else {
if((state_val_32755 === (3))){
var inst_32752 = (state_32754[(2)]);
var state_32754__$1 = state_32754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32754__$1,inst_32752);
} else {
if((state_val_32755 === (4))){
var inst_32744 = (state_32754[(2)]);
var inst_32745 = process.call(null,inst_32744);
var state_32754__$1 = state_32754;
if(cljs.core.truth_(inst_32745)){
var statearr_32757_32915 = state_32754__$1;
(statearr_32757_32915[(1)] = (5));

} else {
var statearr_32758_32916 = state_32754__$1;
(statearr_32758_32916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (5))){
var state_32754__$1 = state_32754;
var statearr_32759_32917 = state_32754__$1;
(statearr_32759_32917[(2)] = null);

(statearr_32759_32917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (6))){
var state_32754__$1 = state_32754;
var statearr_32760_32918 = state_32754__$1;
(statearr_32760_32918[(2)] = null);

(statearr_32760_32918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (7))){
var inst_32750 = (state_32754[(2)]);
var state_32754__$1 = state_32754;
var statearr_32761_32919 = state_32754__$1;
(statearr_32761_32919[(2)] = inst_32750);

(statearr_32761_32919[(1)] = (3));


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
});})(__32910,c__32348__auto___32913,G__32741_32911,n__9508__auto___32909,jobs,results,process,async))
;
return ((function (__32910,switch__32236__auto__,c__32348__auto___32913,G__32741_32911,n__9508__auto___32909,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32237__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32237__auto____0 = (function (){
var statearr_32765 = [null,null,null,null,null,null,null];
(statearr_32765[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32237__auto__);

(statearr_32765[(1)] = (1));

return statearr_32765;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32237__auto____1 = (function (state_32754){
while(true){
var ret_value__32238__auto__ = (function (){try{while(true){
var result__32239__auto__ = switch__32236__auto__.call(null,state_32754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32239__auto__;
}
break;
}
}catch (e32766){if((e32766 instanceof Object)){
var ex__32240__auto__ = e32766;
var statearr_32767_32920 = state_32754;
(statearr_32767_32920[(5)] = ex__32240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32921 = state_32754;
state_32754 = G__32921;
continue;
} else {
return ret_value__32238__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32237__auto__ = function(state_32754){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32237__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32237__auto____1.call(this,state_32754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32237__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32237__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32237__auto__;
})()
;})(__32910,switch__32236__auto__,c__32348__auto___32913,G__32741_32911,n__9508__auto___32909,jobs,results,process,async))
})();
var state__32350__auto__ = (function (){var statearr_32768 = f__32349__auto__.call(null);
(statearr_32768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32348__auto___32913);

return statearr_32768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32350__auto__);
});})(__32910,c__32348__auto___32913,G__32741_32911,n__9508__auto___32909,jobs,results,process,async))
);


break;
case "async":
var c__32348__auto___32922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32910,c__32348__auto___32922,G__32741_32911,n__9508__auto___32909,jobs,results,process,async){
return (function (){
var f__32349__auto__ = (function (){var switch__32236__auto__ = ((function (__32910,c__32348__auto___32922,G__32741_32911,n__9508__auto___32909,jobs,results,process,async){
return (function (state_32781){
var state_val_32782 = (state_32781[(1)]);
if((state_val_32782 === (1))){
var state_32781__$1 = state_32781;
var statearr_32783_32923 = state_32781__$1;
(statearr_32783_32923[(2)] = null);

(statearr_32783_32923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32782 === (2))){
var state_32781__$1 = state_32781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32781__$1,(4),jobs);
} else {
if((state_val_32782 === (3))){
var inst_32779 = (state_32781[(2)]);
var state_32781__$1 = state_32781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32781__$1,inst_32779);
} else {
if((state_val_32782 === (4))){
var inst_32771 = (state_32781[(2)]);
var inst_32772 = async.call(null,inst_32771);
var state_32781__$1 = state_32781;
if(cljs.core.truth_(inst_32772)){
var statearr_32784_32924 = state_32781__$1;
(statearr_32784_32924[(1)] = (5));

} else {
var statearr_32785_32925 = state_32781__$1;
(statearr_32785_32925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32782 === (5))){
var state_32781__$1 = state_32781;
var statearr_32786_32926 = state_32781__$1;
(statearr_32786_32926[(2)] = null);

(statearr_32786_32926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32782 === (6))){
var state_32781__$1 = state_32781;
var statearr_32787_32927 = state_32781__$1;
(statearr_32787_32927[(2)] = null);

(statearr_32787_32927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32782 === (7))){
var inst_32777 = (state_32781[(2)]);
var state_32781__$1 = state_32781;
var statearr_32788_32928 = state_32781__$1;
(statearr_32788_32928[(2)] = inst_32777);

(statearr_32788_32928[(1)] = (3));


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
});})(__32910,c__32348__auto___32922,G__32741_32911,n__9508__auto___32909,jobs,results,process,async))
;
return ((function (__32910,switch__32236__auto__,c__32348__auto___32922,G__32741_32911,n__9508__auto___32909,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32237__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32237__auto____0 = (function (){
var statearr_32792 = [null,null,null,null,null,null,null];
(statearr_32792[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32237__auto__);

(statearr_32792[(1)] = (1));

return statearr_32792;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32237__auto____1 = (function (state_32781){
while(true){
var ret_value__32238__auto__ = (function (){try{while(true){
var result__32239__auto__ = switch__32236__auto__.call(null,state_32781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32239__auto__;
}
break;
}
}catch (e32793){if((e32793 instanceof Object)){
var ex__32240__auto__ = e32793;
var statearr_32794_32929 = state_32781;
(statearr_32794_32929[(5)] = ex__32240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32930 = state_32781;
state_32781 = G__32930;
continue;
} else {
return ret_value__32238__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32237__auto__ = function(state_32781){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32237__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32237__auto____1.call(this,state_32781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32237__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32237__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32237__auto__;
})()
;})(__32910,switch__32236__auto__,c__32348__auto___32922,G__32741_32911,n__9508__auto___32909,jobs,results,process,async))
})();
var state__32350__auto__ = (function (){var statearr_32795 = f__32349__auto__.call(null);
(statearr_32795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32348__auto___32922);

return statearr_32795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32350__auto__);
});})(__32910,c__32348__auto___32922,G__32741_32911,n__9508__auto___32909,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__32931 = (__32910 + (1));
__32910 = G__32931;
continue;
} else {
}
break;
}

var c__32348__auto___32932 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32348__auto___32932,jobs,results,process,async){
return (function (){
var f__32349__auto__ = (function (){var switch__32236__auto__ = ((function (c__32348__auto___32932,jobs,results,process,async){
return (function (state_32817){
var state_val_32818 = (state_32817[(1)]);
if((state_val_32818 === (1))){
var state_32817__$1 = state_32817;
var statearr_32819_32933 = state_32817__$1;
(statearr_32819_32933[(2)] = null);

(statearr_32819_32933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (2))){
var state_32817__$1 = state_32817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32817__$1,(4),from);
} else {
if((state_val_32818 === (3))){
var inst_32815 = (state_32817[(2)]);
var state_32817__$1 = state_32817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32817__$1,inst_32815);
} else {
if((state_val_32818 === (4))){
var inst_32798 = (state_32817[(7)]);
var inst_32798__$1 = (state_32817[(2)]);
var inst_32799 = (inst_32798__$1 == null);
var state_32817__$1 = (function (){var statearr_32820 = state_32817;
(statearr_32820[(7)] = inst_32798__$1);

return statearr_32820;
})();
if(cljs.core.truth_(inst_32799)){
var statearr_32821_32934 = state_32817__$1;
(statearr_32821_32934[(1)] = (5));

} else {
var statearr_32822_32935 = state_32817__$1;
(statearr_32822_32935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (5))){
var inst_32801 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32817__$1 = state_32817;
var statearr_32823_32936 = state_32817__$1;
(statearr_32823_32936[(2)] = inst_32801);

(statearr_32823_32936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (6))){
var inst_32803 = (state_32817[(8)]);
var inst_32798 = (state_32817[(7)]);
var inst_32803__$1 = cljs.core.async.chan.call(null,(1));
var inst_32804 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32805 = [inst_32798,inst_32803__$1];
var inst_32806 = (new cljs.core.PersistentVector(null,2,(5),inst_32804,inst_32805,null));
var state_32817__$1 = (function (){var statearr_32824 = state_32817;
(statearr_32824[(8)] = inst_32803__$1);

return statearr_32824;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32817__$1,(8),jobs,inst_32806);
} else {
if((state_val_32818 === (7))){
var inst_32813 = (state_32817[(2)]);
var state_32817__$1 = state_32817;
var statearr_32825_32937 = state_32817__$1;
(statearr_32825_32937[(2)] = inst_32813);

(statearr_32825_32937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (8))){
var inst_32803 = (state_32817[(8)]);
var inst_32808 = (state_32817[(2)]);
var state_32817__$1 = (function (){var statearr_32826 = state_32817;
(statearr_32826[(9)] = inst_32808);

return statearr_32826;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32817__$1,(9),results,inst_32803);
} else {
if((state_val_32818 === (9))){
var inst_32810 = (state_32817[(2)]);
var state_32817__$1 = (function (){var statearr_32827 = state_32817;
(statearr_32827[(10)] = inst_32810);

return statearr_32827;
})();
var statearr_32828_32938 = state_32817__$1;
(statearr_32828_32938[(2)] = null);

(statearr_32828_32938[(1)] = (2));


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
});})(c__32348__auto___32932,jobs,results,process,async))
;
return ((function (switch__32236__auto__,c__32348__auto___32932,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32237__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32237__auto____0 = (function (){
var statearr_32832 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32832[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32237__auto__);

(statearr_32832[(1)] = (1));

return statearr_32832;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32237__auto____1 = (function (state_32817){
while(true){
var ret_value__32238__auto__ = (function (){try{while(true){
var result__32239__auto__ = switch__32236__auto__.call(null,state_32817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32239__auto__;
}
break;
}
}catch (e32833){if((e32833 instanceof Object)){
var ex__32240__auto__ = e32833;
var statearr_32834_32939 = state_32817;
(statearr_32834_32939[(5)] = ex__32240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32940 = state_32817;
state_32817 = G__32940;
continue;
} else {
return ret_value__32238__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32237__auto__ = function(state_32817){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32237__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32237__auto____1.call(this,state_32817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32237__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32237__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32237__auto__;
})()
;})(switch__32236__auto__,c__32348__auto___32932,jobs,results,process,async))
})();
var state__32350__auto__ = (function (){var statearr_32835 = f__32349__auto__.call(null);
(statearr_32835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32348__auto___32932);

return statearr_32835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32350__auto__);
});})(c__32348__auto___32932,jobs,results,process,async))
);


var c__32348__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32348__auto__,jobs,results,process,async){
return (function (){
var f__32349__auto__ = (function (){var switch__32236__auto__ = ((function (c__32348__auto__,jobs,results,process,async){
return (function (state_32873){
var state_val_32874 = (state_32873[(1)]);
if((state_val_32874 === (7))){
var inst_32869 = (state_32873[(2)]);
var state_32873__$1 = state_32873;
var statearr_32875_32941 = state_32873__$1;
(statearr_32875_32941[(2)] = inst_32869);

(statearr_32875_32941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (20))){
var state_32873__$1 = state_32873;
var statearr_32876_32942 = state_32873__$1;
(statearr_32876_32942[(2)] = null);

(statearr_32876_32942[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (1))){
var state_32873__$1 = state_32873;
var statearr_32877_32943 = state_32873__$1;
(statearr_32877_32943[(2)] = null);

(statearr_32877_32943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (4))){
var inst_32838 = (state_32873[(7)]);
var inst_32838__$1 = (state_32873[(2)]);
var inst_32839 = (inst_32838__$1 == null);
var state_32873__$1 = (function (){var statearr_32878 = state_32873;
(statearr_32878[(7)] = inst_32838__$1);

return statearr_32878;
})();
if(cljs.core.truth_(inst_32839)){
var statearr_32879_32944 = state_32873__$1;
(statearr_32879_32944[(1)] = (5));

} else {
var statearr_32880_32945 = state_32873__$1;
(statearr_32880_32945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (15))){
var inst_32851 = (state_32873[(8)]);
var state_32873__$1 = state_32873;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32873__$1,(18),to,inst_32851);
} else {
if((state_val_32874 === (21))){
var inst_32864 = (state_32873[(2)]);
var state_32873__$1 = state_32873;
var statearr_32881_32946 = state_32873__$1;
(statearr_32881_32946[(2)] = inst_32864);

(statearr_32881_32946[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (13))){
var inst_32866 = (state_32873[(2)]);
var state_32873__$1 = (function (){var statearr_32882 = state_32873;
(statearr_32882[(9)] = inst_32866);

return statearr_32882;
})();
var statearr_32883_32947 = state_32873__$1;
(statearr_32883_32947[(2)] = null);

(statearr_32883_32947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (6))){
var inst_32838 = (state_32873[(7)]);
var state_32873__$1 = state_32873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32873__$1,(11),inst_32838);
} else {
if((state_val_32874 === (17))){
var inst_32859 = (state_32873[(2)]);
var state_32873__$1 = state_32873;
if(cljs.core.truth_(inst_32859)){
var statearr_32884_32948 = state_32873__$1;
(statearr_32884_32948[(1)] = (19));

} else {
var statearr_32885_32949 = state_32873__$1;
(statearr_32885_32949[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (3))){
var inst_32871 = (state_32873[(2)]);
var state_32873__$1 = state_32873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32873__$1,inst_32871);
} else {
if((state_val_32874 === (12))){
var inst_32848 = (state_32873[(10)]);
var state_32873__$1 = state_32873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32873__$1,(14),inst_32848);
} else {
if((state_val_32874 === (2))){
var state_32873__$1 = state_32873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32873__$1,(4),results);
} else {
if((state_val_32874 === (19))){
var state_32873__$1 = state_32873;
var statearr_32886_32950 = state_32873__$1;
(statearr_32886_32950[(2)] = null);

(statearr_32886_32950[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (11))){
var inst_32848 = (state_32873[(2)]);
var state_32873__$1 = (function (){var statearr_32887 = state_32873;
(statearr_32887[(10)] = inst_32848);

return statearr_32887;
})();
var statearr_32888_32951 = state_32873__$1;
(statearr_32888_32951[(2)] = null);

(statearr_32888_32951[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (9))){
var state_32873__$1 = state_32873;
var statearr_32889_32952 = state_32873__$1;
(statearr_32889_32952[(2)] = null);

(statearr_32889_32952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (5))){
var state_32873__$1 = state_32873;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32890_32953 = state_32873__$1;
(statearr_32890_32953[(1)] = (8));

} else {
var statearr_32891_32954 = state_32873__$1;
(statearr_32891_32954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (14))){
var inst_32851 = (state_32873[(8)]);
var inst_32853 = (state_32873[(11)]);
var inst_32851__$1 = (state_32873[(2)]);
var inst_32852 = (inst_32851__$1 == null);
var inst_32853__$1 = cljs.core.not.call(null,inst_32852);
var state_32873__$1 = (function (){var statearr_32892 = state_32873;
(statearr_32892[(8)] = inst_32851__$1);

(statearr_32892[(11)] = inst_32853__$1);

return statearr_32892;
})();
if(inst_32853__$1){
var statearr_32893_32955 = state_32873__$1;
(statearr_32893_32955[(1)] = (15));

} else {
var statearr_32894_32956 = state_32873__$1;
(statearr_32894_32956[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (16))){
var inst_32853 = (state_32873[(11)]);
var state_32873__$1 = state_32873;
var statearr_32895_32957 = state_32873__$1;
(statearr_32895_32957[(2)] = inst_32853);

(statearr_32895_32957[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (10))){
var inst_32845 = (state_32873[(2)]);
var state_32873__$1 = state_32873;
var statearr_32896_32958 = state_32873__$1;
(statearr_32896_32958[(2)] = inst_32845);

(statearr_32896_32958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (18))){
var inst_32856 = (state_32873[(2)]);
var state_32873__$1 = state_32873;
var statearr_32897_32959 = state_32873__$1;
(statearr_32897_32959[(2)] = inst_32856);

(statearr_32897_32959[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (8))){
var inst_32842 = cljs.core.async.close_BANG_.call(null,to);
var state_32873__$1 = state_32873;
var statearr_32898_32960 = state_32873__$1;
(statearr_32898_32960[(2)] = inst_32842);

(statearr_32898_32960[(1)] = (10));


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
});})(c__32348__auto__,jobs,results,process,async))
;
return ((function (switch__32236__auto__,c__32348__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32237__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32237__auto____0 = (function (){
var statearr_32902 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32902[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32237__auto__);

(statearr_32902[(1)] = (1));

return statearr_32902;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32237__auto____1 = (function (state_32873){
while(true){
var ret_value__32238__auto__ = (function (){try{while(true){
var result__32239__auto__ = switch__32236__auto__.call(null,state_32873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32239__auto__;
}
break;
}
}catch (e32903){if((e32903 instanceof Object)){
var ex__32240__auto__ = e32903;
var statearr_32904_32961 = state_32873;
(statearr_32904_32961[(5)] = ex__32240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32962 = state_32873;
state_32873 = G__32962;
continue;
} else {
return ret_value__32238__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32237__auto__ = function(state_32873){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32237__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32237__auto____1.call(this,state_32873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32237__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32237__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32237__auto__;
})()
;})(switch__32236__auto__,c__32348__auto__,jobs,results,process,async))
})();
var state__32350__auto__ = (function (){var statearr_32905 = f__32349__auto__.call(null);
(statearr_32905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32348__auto__);

return statearr_32905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32350__auto__);
});})(c__32348__auto__,jobs,results,process,async))
);

return c__32348__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args32963 = [];
var len__9664__auto___32966 = arguments.length;
var i__9665__auto___32967 = (0);
while(true){
if((i__9665__auto___32967 < len__9664__auto___32966)){
args32963.push((arguments[i__9665__auto___32967]));

var G__32968 = (i__9665__auto___32967 + (1));
i__9665__auto___32967 = G__32968;
continue;
} else {
}
break;
}

var G__32965 = args32963.length;
switch (G__32965) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32963.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args32970 = [];
var len__9664__auto___32973 = arguments.length;
var i__9665__auto___32974 = (0);
while(true){
if((i__9665__auto___32974 < len__9664__auto___32973)){
args32970.push((arguments[i__9665__auto___32974]));

var G__32975 = (i__9665__auto___32974 + (1));
i__9665__auto___32974 = G__32975;
continue;
} else {
}
break;
}

var G__32972 = args32970.length;
switch (G__32972) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32970.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args32977 = [];
var len__9664__auto___33030 = arguments.length;
var i__9665__auto___33031 = (0);
while(true){
if((i__9665__auto___33031 < len__9664__auto___33030)){
args32977.push((arguments[i__9665__auto___33031]));

var G__33032 = (i__9665__auto___33031 + (1));
i__9665__auto___33031 = G__33032;
continue;
} else {
}
break;
}

var G__32979 = args32977.length;
switch (G__32979) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32977.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__32348__auto___33034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32348__auto___33034,tc,fc){
return (function (){
var f__32349__auto__ = (function (){var switch__32236__auto__ = ((function (c__32348__auto___33034,tc,fc){
return (function (state_33005){
var state_val_33006 = (state_33005[(1)]);
if((state_val_33006 === (7))){
var inst_33001 = (state_33005[(2)]);
var state_33005__$1 = state_33005;
var statearr_33007_33035 = state_33005__$1;
(statearr_33007_33035[(2)] = inst_33001);

(statearr_33007_33035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33006 === (1))){
var state_33005__$1 = state_33005;
var statearr_33008_33036 = state_33005__$1;
(statearr_33008_33036[(2)] = null);

(statearr_33008_33036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33006 === (4))){
var inst_32982 = (state_33005[(7)]);
var inst_32982__$1 = (state_33005[(2)]);
var inst_32983 = (inst_32982__$1 == null);
var state_33005__$1 = (function (){var statearr_33009 = state_33005;
(statearr_33009[(7)] = inst_32982__$1);

return statearr_33009;
})();
if(cljs.core.truth_(inst_32983)){
var statearr_33010_33037 = state_33005__$1;
(statearr_33010_33037[(1)] = (5));

} else {
var statearr_33011_33038 = state_33005__$1;
(statearr_33011_33038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33006 === (13))){
var state_33005__$1 = state_33005;
var statearr_33012_33039 = state_33005__$1;
(statearr_33012_33039[(2)] = null);

(statearr_33012_33039[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33006 === (6))){
var inst_32982 = (state_33005[(7)]);
var inst_32988 = p.call(null,inst_32982);
var state_33005__$1 = state_33005;
if(cljs.core.truth_(inst_32988)){
var statearr_33013_33040 = state_33005__$1;
(statearr_33013_33040[(1)] = (9));

} else {
var statearr_33014_33041 = state_33005__$1;
(statearr_33014_33041[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33006 === (3))){
var inst_33003 = (state_33005[(2)]);
var state_33005__$1 = state_33005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33005__$1,inst_33003);
} else {
if((state_val_33006 === (12))){
var state_33005__$1 = state_33005;
var statearr_33015_33042 = state_33005__$1;
(statearr_33015_33042[(2)] = null);

(statearr_33015_33042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33006 === (2))){
var state_33005__$1 = state_33005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33005__$1,(4),ch);
} else {
if((state_val_33006 === (11))){
var inst_32982 = (state_33005[(7)]);
var inst_32992 = (state_33005[(2)]);
var state_33005__$1 = state_33005;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33005__$1,(8),inst_32992,inst_32982);
} else {
if((state_val_33006 === (9))){
var state_33005__$1 = state_33005;
var statearr_33016_33043 = state_33005__$1;
(statearr_33016_33043[(2)] = tc);

(statearr_33016_33043[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33006 === (5))){
var inst_32985 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32986 = cljs.core.async.close_BANG_.call(null,fc);
var state_33005__$1 = (function (){var statearr_33017 = state_33005;
(statearr_33017[(8)] = inst_32985);

return statearr_33017;
})();
var statearr_33018_33044 = state_33005__$1;
(statearr_33018_33044[(2)] = inst_32986);

(statearr_33018_33044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33006 === (14))){
var inst_32999 = (state_33005[(2)]);
var state_33005__$1 = state_33005;
var statearr_33019_33045 = state_33005__$1;
(statearr_33019_33045[(2)] = inst_32999);

(statearr_33019_33045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33006 === (10))){
var state_33005__$1 = state_33005;
var statearr_33020_33046 = state_33005__$1;
(statearr_33020_33046[(2)] = fc);

(statearr_33020_33046[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33006 === (8))){
var inst_32994 = (state_33005[(2)]);
var state_33005__$1 = state_33005;
if(cljs.core.truth_(inst_32994)){
var statearr_33021_33047 = state_33005__$1;
(statearr_33021_33047[(1)] = (12));

} else {
var statearr_33022_33048 = state_33005__$1;
(statearr_33022_33048[(1)] = (13));

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
});})(c__32348__auto___33034,tc,fc))
;
return ((function (switch__32236__auto__,c__32348__auto___33034,tc,fc){
return (function() {
var cljs$core$async$state_machine__32237__auto__ = null;
var cljs$core$async$state_machine__32237__auto____0 = (function (){
var statearr_33026 = [null,null,null,null,null,null,null,null,null];
(statearr_33026[(0)] = cljs$core$async$state_machine__32237__auto__);

(statearr_33026[(1)] = (1));

return statearr_33026;
});
var cljs$core$async$state_machine__32237__auto____1 = (function (state_33005){
while(true){
var ret_value__32238__auto__ = (function (){try{while(true){
var result__32239__auto__ = switch__32236__auto__.call(null,state_33005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32239__auto__;
}
break;
}
}catch (e33027){if((e33027 instanceof Object)){
var ex__32240__auto__ = e33027;
var statearr_33028_33049 = state_33005;
(statearr_33028_33049[(5)] = ex__32240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33050 = state_33005;
state_33005 = G__33050;
continue;
} else {
return ret_value__32238__auto__;
}
break;
}
});
cljs$core$async$state_machine__32237__auto__ = function(state_33005){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32237__auto____1.call(this,state_33005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32237__auto____0;
cljs$core$async$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32237__auto____1;
return cljs$core$async$state_machine__32237__auto__;
})()
;})(switch__32236__auto__,c__32348__auto___33034,tc,fc))
})();
var state__32350__auto__ = (function (){var statearr_33029 = f__32349__auto__.call(null);
(statearr_33029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32348__auto___33034);

return statearr_33029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32350__auto__);
});})(c__32348__auto___33034,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32348__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32348__auto__){
return (function (){
var f__32349__auto__ = (function (){var switch__32236__auto__ = ((function (c__32348__auto__){
return (function (state_33114){
var state_val_33115 = (state_33114[(1)]);
if((state_val_33115 === (7))){
var inst_33110 = (state_33114[(2)]);
var state_33114__$1 = state_33114;
var statearr_33116_33137 = state_33114__$1;
(statearr_33116_33137[(2)] = inst_33110);

(statearr_33116_33137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33115 === (1))){
var inst_33094 = init;
var state_33114__$1 = (function (){var statearr_33117 = state_33114;
(statearr_33117[(7)] = inst_33094);

return statearr_33117;
})();
var statearr_33118_33138 = state_33114__$1;
(statearr_33118_33138[(2)] = null);

(statearr_33118_33138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33115 === (4))){
var inst_33097 = (state_33114[(8)]);
var inst_33097__$1 = (state_33114[(2)]);
var inst_33098 = (inst_33097__$1 == null);
var state_33114__$1 = (function (){var statearr_33119 = state_33114;
(statearr_33119[(8)] = inst_33097__$1);

return statearr_33119;
})();
if(cljs.core.truth_(inst_33098)){
var statearr_33120_33139 = state_33114__$1;
(statearr_33120_33139[(1)] = (5));

} else {
var statearr_33121_33140 = state_33114__$1;
(statearr_33121_33140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33115 === (6))){
var inst_33101 = (state_33114[(9)]);
var inst_33094 = (state_33114[(7)]);
var inst_33097 = (state_33114[(8)]);
var inst_33101__$1 = f.call(null,inst_33094,inst_33097);
var inst_33102 = cljs.core.reduced_QMARK_.call(null,inst_33101__$1);
var state_33114__$1 = (function (){var statearr_33122 = state_33114;
(statearr_33122[(9)] = inst_33101__$1);

return statearr_33122;
})();
if(inst_33102){
var statearr_33123_33141 = state_33114__$1;
(statearr_33123_33141[(1)] = (8));

} else {
var statearr_33124_33142 = state_33114__$1;
(statearr_33124_33142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33115 === (3))){
var inst_33112 = (state_33114[(2)]);
var state_33114__$1 = state_33114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33114__$1,inst_33112);
} else {
if((state_val_33115 === (2))){
var state_33114__$1 = state_33114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33114__$1,(4),ch);
} else {
if((state_val_33115 === (9))){
var inst_33101 = (state_33114[(9)]);
var inst_33094 = inst_33101;
var state_33114__$1 = (function (){var statearr_33125 = state_33114;
(statearr_33125[(7)] = inst_33094);

return statearr_33125;
})();
var statearr_33126_33143 = state_33114__$1;
(statearr_33126_33143[(2)] = null);

(statearr_33126_33143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33115 === (5))){
var inst_33094 = (state_33114[(7)]);
var state_33114__$1 = state_33114;
var statearr_33127_33144 = state_33114__$1;
(statearr_33127_33144[(2)] = inst_33094);

(statearr_33127_33144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33115 === (10))){
var inst_33108 = (state_33114[(2)]);
var state_33114__$1 = state_33114;
var statearr_33128_33145 = state_33114__$1;
(statearr_33128_33145[(2)] = inst_33108);

(statearr_33128_33145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33115 === (8))){
var inst_33101 = (state_33114[(9)]);
var inst_33104 = cljs.core.deref.call(null,inst_33101);
var state_33114__$1 = state_33114;
var statearr_33129_33146 = state_33114__$1;
(statearr_33129_33146[(2)] = inst_33104);

(statearr_33129_33146[(1)] = (10));


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
});})(c__32348__auto__))
;
return ((function (switch__32236__auto__,c__32348__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32237__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32237__auto____0 = (function (){
var statearr_33133 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33133[(0)] = cljs$core$async$reduce_$_state_machine__32237__auto__);

(statearr_33133[(1)] = (1));

return statearr_33133;
});
var cljs$core$async$reduce_$_state_machine__32237__auto____1 = (function (state_33114){
while(true){
var ret_value__32238__auto__ = (function (){try{while(true){
var result__32239__auto__ = switch__32236__auto__.call(null,state_33114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32239__auto__;
}
break;
}
}catch (e33134){if((e33134 instanceof Object)){
var ex__32240__auto__ = e33134;
var statearr_33135_33147 = state_33114;
(statearr_33135_33147[(5)] = ex__32240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33148 = state_33114;
state_33114 = G__33148;
continue;
} else {
return ret_value__32238__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32237__auto__ = function(state_33114){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32237__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32237__auto____1.call(this,state_33114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32237__auto____0;
cljs$core$async$reduce_$_state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32237__auto____1;
return cljs$core$async$reduce_$_state_machine__32237__auto__;
})()
;})(switch__32236__auto__,c__32348__auto__))
})();
var state__32350__auto__ = (function (){var statearr_33136 = f__32349__auto__.call(null);
(statearr_33136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32348__auto__);

return statearr_33136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32350__auto__);
});})(c__32348__auto__))
);

return c__32348__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32348__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32348__auto__,f__$1){
return (function (){
var f__32349__auto__ = (function (){var switch__32236__auto__ = ((function (c__32348__auto__,f__$1){
return (function (state_33168){
var state_val_33169 = (state_33168[(1)]);
if((state_val_33169 === (1))){
var inst_33163 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_33168__$1 = state_33168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33168__$1,(2),inst_33163);
} else {
if((state_val_33169 === (2))){
var inst_33165 = (state_33168[(2)]);
var inst_33166 = f__$1.call(null,inst_33165);
var state_33168__$1 = state_33168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33168__$1,inst_33166);
} else {
return null;
}
}
});})(c__32348__auto__,f__$1))
;
return ((function (switch__32236__auto__,c__32348__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32237__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32237__auto____0 = (function (){
var statearr_33173 = [null,null,null,null,null,null,null];
(statearr_33173[(0)] = cljs$core$async$transduce_$_state_machine__32237__auto__);

(statearr_33173[(1)] = (1));

return statearr_33173;
});
var cljs$core$async$transduce_$_state_machine__32237__auto____1 = (function (state_33168){
while(true){
var ret_value__32238__auto__ = (function (){try{while(true){
var result__32239__auto__ = switch__32236__auto__.call(null,state_33168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32239__auto__;
}
break;
}
}catch (e33174){if((e33174 instanceof Object)){
var ex__32240__auto__ = e33174;
var statearr_33175_33177 = state_33168;
(statearr_33175_33177[(5)] = ex__32240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33178 = state_33168;
state_33168 = G__33178;
continue;
} else {
return ret_value__32238__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32237__auto__ = function(state_33168){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32237__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32237__auto____1.call(this,state_33168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32237__auto____0;
cljs$core$async$transduce_$_state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32237__auto____1;
return cljs$core$async$transduce_$_state_machine__32237__auto__;
})()
;})(switch__32236__auto__,c__32348__auto__,f__$1))
})();
var state__32350__auto__ = (function (){var statearr_33176 = f__32349__auto__.call(null);
(statearr_33176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32348__auto__);

return statearr_33176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32350__auto__);
});})(c__32348__auto__,f__$1))
);

return c__32348__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args33179 = [];
var len__9664__auto___33231 = arguments.length;
var i__9665__auto___33232 = (0);
while(true){
if((i__9665__auto___33232 < len__9664__auto___33231)){
args33179.push((arguments[i__9665__auto___33232]));

var G__33233 = (i__9665__auto___33232 + (1));
i__9665__auto___33232 = G__33233;
continue;
} else {
}
break;
}

var G__33181 = args33179.length;
switch (G__33181) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33179.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32348__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32348__auto__){
return (function (){
var f__32349__auto__ = (function (){var switch__32236__auto__ = ((function (c__32348__auto__){
return (function (state_33206){
var state_val_33207 = (state_33206[(1)]);
if((state_val_33207 === (7))){
var inst_33188 = (state_33206[(2)]);
var state_33206__$1 = state_33206;
var statearr_33208_33235 = state_33206__$1;
(statearr_33208_33235[(2)] = inst_33188);

(statearr_33208_33235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (1))){
var inst_33182 = cljs.core.seq.call(null,coll);
var inst_33183 = inst_33182;
var state_33206__$1 = (function (){var statearr_33209 = state_33206;
(statearr_33209[(7)] = inst_33183);

return statearr_33209;
})();
var statearr_33210_33236 = state_33206__$1;
(statearr_33210_33236[(2)] = null);

(statearr_33210_33236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (4))){
var inst_33183 = (state_33206[(7)]);
var inst_33186 = cljs.core.first.call(null,inst_33183);
var state_33206__$1 = state_33206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33206__$1,(7),ch,inst_33186);
} else {
if((state_val_33207 === (13))){
var inst_33200 = (state_33206[(2)]);
var state_33206__$1 = state_33206;
var statearr_33211_33237 = state_33206__$1;
(statearr_33211_33237[(2)] = inst_33200);

(statearr_33211_33237[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (6))){
var inst_33191 = (state_33206[(2)]);
var state_33206__$1 = state_33206;
if(cljs.core.truth_(inst_33191)){
var statearr_33212_33238 = state_33206__$1;
(statearr_33212_33238[(1)] = (8));

} else {
var statearr_33213_33239 = state_33206__$1;
(statearr_33213_33239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (3))){
var inst_33204 = (state_33206[(2)]);
var state_33206__$1 = state_33206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33206__$1,inst_33204);
} else {
if((state_val_33207 === (12))){
var state_33206__$1 = state_33206;
var statearr_33214_33240 = state_33206__$1;
(statearr_33214_33240[(2)] = null);

(statearr_33214_33240[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (2))){
var inst_33183 = (state_33206[(7)]);
var state_33206__$1 = state_33206;
if(cljs.core.truth_(inst_33183)){
var statearr_33215_33241 = state_33206__$1;
(statearr_33215_33241[(1)] = (4));

} else {
var statearr_33216_33242 = state_33206__$1;
(statearr_33216_33242[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (11))){
var inst_33197 = cljs.core.async.close_BANG_.call(null,ch);
var state_33206__$1 = state_33206;
var statearr_33217_33243 = state_33206__$1;
(statearr_33217_33243[(2)] = inst_33197);

(statearr_33217_33243[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (9))){
var state_33206__$1 = state_33206;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33218_33244 = state_33206__$1;
(statearr_33218_33244[(1)] = (11));

} else {
var statearr_33219_33245 = state_33206__$1;
(statearr_33219_33245[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (5))){
var inst_33183 = (state_33206[(7)]);
var state_33206__$1 = state_33206;
var statearr_33220_33246 = state_33206__$1;
(statearr_33220_33246[(2)] = inst_33183);

(statearr_33220_33246[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (10))){
var inst_33202 = (state_33206[(2)]);
var state_33206__$1 = state_33206;
var statearr_33221_33247 = state_33206__$1;
(statearr_33221_33247[(2)] = inst_33202);

(statearr_33221_33247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (8))){
var inst_33183 = (state_33206[(7)]);
var inst_33193 = cljs.core.next.call(null,inst_33183);
var inst_33183__$1 = inst_33193;
var state_33206__$1 = (function (){var statearr_33222 = state_33206;
(statearr_33222[(7)] = inst_33183__$1);

return statearr_33222;
})();
var statearr_33223_33248 = state_33206__$1;
(statearr_33223_33248[(2)] = null);

(statearr_33223_33248[(1)] = (2));


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
});})(c__32348__auto__))
;
return ((function (switch__32236__auto__,c__32348__auto__){
return (function() {
var cljs$core$async$state_machine__32237__auto__ = null;
var cljs$core$async$state_machine__32237__auto____0 = (function (){
var statearr_33227 = [null,null,null,null,null,null,null,null];
(statearr_33227[(0)] = cljs$core$async$state_machine__32237__auto__);

(statearr_33227[(1)] = (1));

return statearr_33227;
});
var cljs$core$async$state_machine__32237__auto____1 = (function (state_33206){
while(true){
var ret_value__32238__auto__ = (function (){try{while(true){
var result__32239__auto__ = switch__32236__auto__.call(null,state_33206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32239__auto__;
}
break;
}
}catch (e33228){if((e33228 instanceof Object)){
var ex__32240__auto__ = e33228;
var statearr_33229_33249 = state_33206;
(statearr_33229_33249[(5)] = ex__32240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33250 = state_33206;
state_33206 = G__33250;
continue;
} else {
return ret_value__32238__auto__;
}
break;
}
});
cljs$core$async$state_machine__32237__auto__ = function(state_33206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32237__auto____1.call(this,state_33206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32237__auto____0;
cljs$core$async$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32237__auto____1;
return cljs$core$async$state_machine__32237__auto__;
})()
;})(switch__32236__auto__,c__32348__auto__))
})();
var state__32350__auto__ = (function (){var statearr_33230 = f__32349__auto__.call(null);
(statearr_33230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32348__auto__);

return statearr_33230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32350__auto__);
});})(c__32348__auto__))
);

return c__32348__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__9256__auto__ = (((_ == null))?null:_);
var m__9257__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9256__auto__)]);
if(!((m__9257__auto__ == null))){
return m__9257__auto__.call(null,_);
} else {
var m__9257__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__9257__auto____$1 == null))){
return m__9257__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__9256__auto__ = (((m == null))?null:m);
var m__9257__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9256__auto__)]);
if(!((m__9257__auto__ == null))){
return m__9257__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__9257__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__9257__auto____$1 == null))){
return m__9257__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__9256__auto__ = (((m == null))?null:m);
var m__9257__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9256__auto__)]);
if(!((m__9257__auto__ == null))){
return m__9257__auto__.call(null,m,ch);
} else {
var m__9257__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__9257__auto____$1 == null))){
return m__9257__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__9256__auto__ = (((m == null))?null:m);
var m__9257__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9256__auto__)]);
if(!((m__9257__auto__ == null))){
return m__9257__auto__.call(null,m);
} else {
var m__9257__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__9257__auto____$1 == null))){
return m__9257__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33476 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33476 = (function (mult,ch,cs,meta33477){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta33477 = meta33477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33478,meta33477__$1){
var self__ = this;
var _33478__$1 = this;
return (new cljs.core.async.t_cljs$core$async33476(self__.mult,self__.ch,self__.cs,meta33477__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33476.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33478){
var self__ = this;
var _33478__$1 = this;
return self__.meta33477;
});})(cs))
;

cljs.core.async.t_cljs$core$async33476.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33476.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33476.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async33476.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33476.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33476.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33476.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33477","meta33477",-117574657,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33476.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33476";

cljs.core.async.t_cljs$core$async33476.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9199__auto__,writer__9200__auto__,opt__9201__auto__){
return cljs.core._write.call(null,writer__9200__auto__,"cljs.core.async/t_cljs$core$async33476");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33476 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33476(mult__$1,ch__$1,cs__$1,meta33477){
return (new cljs.core.async.t_cljs$core$async33476(mult__$1,ch__$1,cs__$1,meta33477));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33476(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__32348__auto___33701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32348__auto___33701,cs,m,dchan,dctr,done){
return (function (){
var f__32349__auto__ = (function (){var switch__32236__auto__ = ((function (c__32348__auto___33701,cs,m,dchan,dctr,done){
return (function (state_33613){
var state_val_33614 = (state_33613[(1)]);
if((state_val_33614 === (7))){
var inst_33609 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
var statearr_33615_33702 = state_33613__$1;
(statearr_33615_33702[(2)] = inst_33609);

(statearr_33615_33702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (20))){
var inst_33512 = (state_33613[(7)]);
var inst_33524 = cljs.core.first.call(null,inst_33512);
var inst_33525 = cljs.core.nth.call(null,inst_33524,(0),null);
var inst_33526 = cljs.core.nth.call(null,inst_33524,(1),null);
var state_33613__$1 = (function (){var statearr_33616 = state_33613;
(statearr_33616[(8)] = inst_33525);

return statearr_33616;
})();
if(cljs.core.truth_(inst_33526)){
var statearr_33617_33703 = state_33613__$1;
(statearr_33617_33703[(1)] = (22));

} else {
var statearr_33618_33704 = state_33613__$1;
(statearr_33618_33704[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (27))){
var inst_33561 = (state_33613[(9)]);
var inst_33554 = (state_33613[(10)]);
var inst_33481 = (state_33613[(11)]);
var inst_33556 = (state_33613[(12)]);
var inst_33561__$1 = cljs.core._nth.call(null,inst_33554,inst_33556);
var inst_33562 = cljs.core.async.put_BANG_.call(null,inst_33561__$1,inst_33481,done);
var state_33613__$1 = (function (){var statearr_33619 = state_33613;
(statearr_33619[(9)] = inst_33561__$1);

return statearr_33619;
})();
if(cljs.core.truth_(inst_33562)){
var statearr_33620_33705 = state_33613__$1;
(statearr_33620_33705[(1)] = (30));

} else {
var statearr_33621_33706 = state_33613__$1;
(statearr_33621_33706[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (1))){
var state_33613__$1 = state_33613;
var statearr_33622_33707 = state_33613__$1;
(statearr_33622_33707[(2)] = null);

(statearr_33622_33707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (24))){
var inst_33512 = (state_33613[(7)]);
var inst_33531 = (state_33613[(2)]);
var inst_33532 = cljs.core.next.call(null,inst_33512);
var inst_33490 = inst_33532;
var inst_33491 = null;
var inst_33492 = (0);
var inst_33493 = (0);
var state_33613__$1 = (function (){var statearr_33623 = state_33613;
(statearr_33623[(13)] = inst_33531);

(statearr_33623[(14)] = inst_33492);

(statearr_33623[(15)] = inst_33491);

(statearr_33623[(16)] = inst_33490);

(statearr_33623[(17)] = inst_33493);

return statearr_33623;
})();
var statearr_33624_33708 = state_33613__$1;
(statearr_33624_33708[(2)] = null);

(statearr_33624_33708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (39))){
var state_33613__$1 = state_33613;
var statearr_33628_33709 = state_33613__$1;
(statearr_33628_33709[(2)] = null);

(statearr_33628_33709[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (4))){
var inst_33481 = (state_33613[(11)]);
var inst_33481__$1 = (state_33613[(2)]);
var inst_33482 = (inst_33481__$1 == null);
var state_33613__$1 = (function (){var statearr_33629 = state_33613;
(statearr_33629[(11)] = inst_33481__$1);

return statearr_33629;
})();
if(cljs.core.truth_(inst_33482)){
var statearr_33630_33710 = state_33613__$1;
(statearr_33630_33710[(1)] = (5));

} else {
var statearr_33631_33711 = state_33613__$1;
(statearr_33631_33711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (15))){
var inst_33492 = (state_33613[(14)]);
var inst_33491 = (state_33613[(15)]);
var inst_33490 = (state_33613[(16)]);
var inst_33493 = (state_33613[(17)]);
var inst_33508 = (state_33613[(2)]);
var inst_33509 = (inst_33493 + (1));
var tmp33625 = inst_33492;
var tmp33626 = inst_33491;
var tmp33627 = inst_33490;
var inst_33490__$1 = tmp33627;
var inst_33491__$1 = tmp33626;
var inst_33492__$1 = tmp33625;
var inst_33493__$1 = inst_33509;
var state_33613__$1 = (function (){var statearr_33632 = state_33613;
(statearr_33632[(18)] = inst_33508);

(statearr_33632[(14)] = inst_33492__$1);

(statearr_33632[(15)] = inst_33491__$1);

(statearr_33632[(16)] = inst_33490__$1);

(statearr_33632[(17)] = inst_33493__$1);

return statearr_33632;
})();
var statearr_33633_33712 = state_33613__$1;
(statearr_33633_33712[(2)] = null);

(statearr_33633_33712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (21))){
var inst_33535 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
var statearr_33637_33713 = state_33613__$1;
(statearr_33637_33713[(2)] = inst_33535);

(statearr_33637_33713[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (31))){
var inst_33561 = (state_33613[(9)]);
var inst_33565 = done.call(null,null);
var inst_33566 = cljs.core.async.untap_STAR_.call(null,m,inst_33561);
var state_33613__$1 = (function (){var statearr_33638 = state_33613;
(statearr_33638[(19)] = inst_33565);

return statearr_33638;
})();
var statearr_33639_33714 = state_33613__$1;
(statearr_33639_33714[(2)] = inst_33566);

(statearr_33639_33714[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (32))){
var inst_33554 = (state_33613[(10)]);
var inst_33553 = (state_33613[(20)]);
var inst_33555 = (state_33613[(21)]);
var inst_33556 = (state_33613[(12)]);
var inst_33568 = (state_33613[(2)]);
var inst_33569 = (inst_33556 + (1));
var tmp33634 = inst_33554;
var tmp33635 = inst_33553;
var tmp33636 = inst_33555;
var inst_33553__$1 = tmp33635;
var inst_33554__$1 = tmp33634;
var inst_33555__$1 = tmp33636;
var inst_33556__$1 = inst_33569;
var state_33613__$1 = (function (){var statearr_33640 = state_33613;
(statearr_33640[(10)] = inst_33554__$1);

(statearr_33640[(20)] = inst_33553__$1);

(statearr_33640[(21)] = inst_33555__$1);

(statearr_33640[(12)] = inst_33556__$1);

(statearr_33640[(22)] = inst_33568);

return statearr_33640;
})();
var statearr_33641_33715 = state_33613__$1;
(statearr_33641_33715[(2)] = null);

(statearr_33641_33715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (40))){
var inst_33581 = (state_33613[(23)]);
var inst_33585 = done.call(null,null);
var inst_33586 = cljs.core.async.untap_STAR_.call(null,m,inst_33581);
var state_33613__$1 = (function (){var statearr_33642 = state_33613;
(statearr_33642[(24)] = inst_33585);

return statearr_33642;
})();
var statearr_33643_33716 = state_33613__$1;
(statearr_33643_33716[(2)] = inst_33586);

(statearr_33643_33716[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (33))){
var inst_33572 = (state_33613[(25)]);
var inst_33574 = cljs.core.chunked_seq_QMARK_.call(null,inst_33572);
var state_33613__$1 = state_33613;
if(inst_33574){
var statearr_33644_33717 = state_33613__$1;
(statearr_33644_33717[(1)] = (36));

} else {
var statearr_33645_33718 = state_33613__$1;
(statearr_33645_33718[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (13))){
var inst_33502 = (state_33613[(26)]);
var inst_33505 = cljs.core.async.close_BANG_.call(null,inst_33502);
var state_33613__$1 = state_33613;
var statearr_33646_33719 = state_33613__$1;
(statearr_33646_33719[(2)] = inst_33505);

(statearr_33646_33719[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (22))){
var inst_33525 = (state_33613[(8)]);
var inst_33528 = cljs.core.async.close_BANG_.call(null,inst_33525);
var state_33613__$1 = state_33613;
var statearr_33647_33720 = state_33613__$1;
(statearr_33647_33720[(2)] = inst_33528);

(statearr_33647_33720[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (36))){
var inst_33572 = (state_33613[(25)]);
var inst_33576 = cljs.core.chunk_first.call(null,inst_33572);
var inst_33577 = cljs.core.chunk_rest.call(null,inst_33572);
var inst_33578 = cljs.core.count.call(null,inst_33576);
var inst_33553 = inst_33577;
var inst_33554 = inst_33576;
var inst_33555 = inst_33578;
var inst_33556 = (0);
var state_33613__$1 = (function (){var statearr_33648 = state_33613;
(statearr_33648[(10)] = inst_33554);

(statearr_33648[(20)] = inst_33553);

(statearr_33648[(21)] = inst_33555);

(statearr_33648[(12)] = inst_33556);

return statearr_33648;
})();
var statearr_33649_33721 = state_33613__$1;
(statearr_33649_33721[(2)] = null);

(statearr_33649_33721[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (41))){
var inst_33572 = (state_33613[(25)]);
var inst_33588 = (state_33613[(2)]);
var inst_33589 = cljs.core.next.call(null,inst_33572);
var inst_33553 = inst_33589;
var inst_33554 = null;
var inst_33555 = (0);
var inst_33556 = (0);
var state_33613__$1 = (function (){var statearr_33650 = state_33613;
(statearr_33650[(27)] = inst_33588);

(statearr_33650[(10)] = inst_33554);

(statearr_33650[(20)] = inst_33553);

(statearr_33650[(21)] = inst_33555);

(statearr_33650[(12)] = inst_33556);

return statearr_33650;
})();
var statearr_33651_33722 = state_33613__$1;
(statearr_33651_33722[(2)] = null);

(statearr_33651_33722[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (43))){
var state_33613__$1 = state_33613;
var statearr_33652_33723 = state_33613__$1;
(statearr_33652_33723[(2)] = null);

(statearr_33652_33723[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (29))){
var inst_33597 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
var statearr_33653_33724 = state_33613__$1;
(statearr_33653_33724[(2)] = inst_33597);

(statearr_33653_33724[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (44))){
var inst_33606 = (state_33613[(2)]);
var state_33613__$1 = (function (){var statearr_33654 = state_33613;
(statearr_33654[(28)] = inst_33606);

return statearr_33654;
})();
var statearr_33655_33725 = state_33613__$1;
(statearr_33655_33725[(2)] = null);

(statearr_33655_33725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (6))){
var inst_33545 = (state_33613[(29)]);
var inst_33544 = cljs.core.deref.call(null,cs);
var inst_33545__$1 = cljs.core.keys.call(null,inst_33544);
var inst_33546 = cljs.core.count.call(null,inst_33545__$1);
var inst_33547 = cljs.core.reset_BANG_.call(null,dctr,inst_33546);
var inst_33552 = cljs.core.seq.call(null,inst_33545__$1);
var inst_33553 = inst_33552;
var inst_33554 = null;
var inst_33555 = (0);
var inst_33556 = (0);
var state_33613__$1 = (function (){var statearr_33656 = state_33613;
(statearr_33656[(29)] = inst_33545__$1);

(statearr_33656[(10)] = inst_33554);

(statearr_33656[(20)] = inst_33553);

(statearr_33656[(21)] = inst_33555);

(statearr_33656[(12)] = inst_33556);

(statearr_33656[(30)] = inst_33547);

return statearr_33656;
})();
var statearr_33657_33726 = state_33613__$1;
(statearr_33657_33726[(2)] = null);

(statearr_33657_33726[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (28))){
var inst_33572 = (state_33613[(25)]);
var inst_33553 = (state_33613[(20)]);
var inst_33572__$1 = cljs.core.seq.call(null,inst_33553);
var state_33613__$1 = (function (){var statearr_33658 = state_33613;
(statearr_33658[(25)] = inst_33572__$1);

return statearr_33658;
})();
if(inst_33572__$1){
var statearr_33659_33727 = state_33613__$1;
(statearr_33659_33727[(1)] = (33));

} else {
var statearr_33660_33728 = state_33613__$1;
(statearr_33660_33728[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (25))){
var inst_33555 = (state_33613[(21)]);
var inst_33556 = (state_33613[(12)]);
var inst_33558 = (inst_33556 < inst_33555);
var inst_33559 = inst_33558;
var state_33613__$1 = state_33613;
if(cljs.core.truth_(inst_33559)){
var statearr_33661_33729 = state_33613__$1;
(statearr_33661_33729[(1)] = (27));

} else {
var statearr_33662_33730 = state_33613__$1;
(statearr_33662_33730[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (34))){
var state_33613__$1 = state_33613;
var statearr_33663_33731 = state_33613__$1;
(statearr_33663_33731[(2)] = null);

(statearr_33663_33731[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (17))){
var state_33613__$1 = state_33613;
var statearr_33664_33732 = state_33613__$1;
(statearr_33664_33732[(2)] = null);

(statearr_33664_33732[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (3))){
var inst_33611 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33613__$1,inst_33611);
} else {
if((state_val_33614 === (12))){
var inst_33540 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
var statearr_33665_33733 = state_33613__$1;
(statearr_33665_33733[(2)] = inst_33540);

(statearr_33665_33733[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (2))){
var state_33613__$1 = state_33613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33613__$1,(4),ch);
} else {
if((state_val_33614 === (23))){
var state_33613__$1 = state_33613;
var statearr_33666_33734 = state_33613__$1;
(statearr_33666_33734[(2)] = null);

(statearr_33666_33734[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (35))){
var inst_33595 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
var statearr_33667_33735 = state_33613__$1;
(statearr_33667_33735[(2)] = inst_33595);

(statearr_33667_33735[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (19))){
var inst_33512 = (state_33613[(7)]);
var inst_33516 = cljs.core.chunk_first.call(null,inst_33512);
var inst_33517 = cljs.core.chunk_rest.call(null,inst_33512);
var inst_33518 = cljs.core.count.call(null,inst_33516);
var inst_33490 = inst_33517;
var inst_33491 = inst_33516;
var inst_33492 = inst_33518;
var inst_33493 = (0);
var state_33613__$1 = (function (){var statearr_33668 = state_33613;
(statearr_33668[(14)] = inst_33492);

(statearr_33668[(15)] = inst_33491);

(statearr_33668[(16)] = inst_33490);

(statearr_33668[(17)] = inst_33493);

return statearr_33668;
})();
var statearr_33669_33736 = state_33613__$1;
(statearr_33669_33736[(2)] = null);

(statearr_33669_33736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (11))){
var inst_33512 = (state_33613[(7)]);
var inst_33490 = (state_33613[(16)]);
var inst_33512__$1 = cljs.core.seq.call(null,inst_33490);
var state_33613__$1 = (function (){var statearr_33670 = state_33613;
(statearr_33670[(7)] = inst_33512__$1);

return statearr_33670;
})();
if(inst_33512__$1){
var statearr_33671_33737 = state_33613__$1;
(statearr_33671_33737[(1)] = (16));

} else {
var statearr_33672_33738 = state_33613__$1;
(statearr_33672_33738[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (9))){
var inst_33542 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
var statearr_33673_33739 = state_33613__$1;
(statearr_33673_33739[(2)] = inst_33542);

(statearr_33673_33739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (5))){
var inst_33488 = cljs.core.deref.call(null,cs);
var inst_33489 = cljs.core.seq.call(null,inst_33488);
var inst_33490 = inst_33489;
var inst_33491 = null;
var inst_33492 = (0);
var inst_33493 = (0);
var state_33613__$1 = (function (){var statearr_33674 = state_33613;
(statearr_33674[(14)] = inst_33492);

(statearr_33674[(15)] = inst_33491);

(statearr_33674[(16)] = inst_33490);

(statearr_33674[(17)] = inst_33493);

return statearr_33674;
})();
var statearr_33675_33740 = state_33613__$1;
(statearr_33675_33740[(2)] = null);

(statearr_33675_33740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (14))){
var state_33613__$1 = state_33613;
var statearr_33676_33741 = state_33613__$1;
(statearr_33676_33741[(2)] = null);

(statearr_33676_33741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (45))){
var inst_33603 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
var statearr_33677_33742 = state_33613__$1;
(statearr_33677_33742[(2)] = inst_33603);

(statearr_33677_33742[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (26))){
var inst_33545 = (state_33613[(29)]);
var inst_33599 = (state_33613[(2)]);
var inst_33600 = cljs.core.seq.call(null,inst_33545);
var state_33613__$1 = (function (){var statearr_33678 = state_33613;
(statearr_33678[(31)] = inst_33599);

return statearr_33678;
})();
if(inst_33600){
var statearr_33679_33743 = state_33613__$1;
(statearr_33679_33743[(1)] = (42));

} else {
var statearr_33680_33744 = state_33613__$1;
(statearr_33680_33744[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (16))){
var inst_33512 = (state_33613[(7)]);
var inst_33514 = cljs.core.chunked_seq_QMARK_.call(null,inst_33512);
var state_33613__$1 = state_33613;
if(inst_33514){
var statearr_33681_33745 = state_33613__$1;
(statearr_33681_33745[(1)] = (19));

} else {
var statearr_33682_33746 = state_33613__$1;
(statearr_33682_33746[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (38))){
var inst_33592 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
var statearr_33683_33747 = state_33613__$1;
(statearr_33683_33747[(2)] = inst_33592);

(statearr_33683_33747[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (30))){
var state_33613__$1 = state_33613;
var statearr_33684_33748 = state_33613__$1;
(statearr_33684_33748[(2)] = null);

(statearr_33684_33748[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (10))){
var inst_33491 = (state_33613[(15)]);
var inst_33493 = (state_33613[(17)]);
var inst_33501 = cljs.core._nth.call(null,inst_33491,inst_33493);
var inst_33502 = cljs.core.nth.call(null,inst_33501,(0),null);
var inst_33503 = cljs.core.nth.call(null,inst_33501,(1),null);
var state_33613__$1 = (function (){var statearr_33685 = state_33613;
(statearr_33685[(26)] = inst_33502);

return statearr_33685;
})();
if(cljs.core.truth_(inst_33503)){
var statearr_33686_33749 = state_33613__$1;
(statearr_33686_33749[(1)] = (13));

} else {
var statearr_33687_33750 = state_33613__$1;
(statearr_33687_33750[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (18))){
var inst_33538 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
var statearr_33688_33751 = state_33613__$1;
(statearr_33688_33751[(2)] = inst_33538);

(statearr_33688_33751[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (42))){
var state_33613__$1 = state_33613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33613__$1,(45),dchan);
} else {
if((state_val_33614 === (37))){
var inst_33572 = (state_33613[(25)]);
var inst_33581 = (state_33613[(23)]);
var inst_33481 = (state_33613[(11)]);
var inst_33581__$1 = cljs.core.first.call(null,inst_33572);
var inst_33582 = cljs.core.async.put_BANG_.call(null,inst_33581__$1,inst_33481,done);
var state_33613__$1 = (function (){var statearr_33689 = state_33613;
(statearr_33689[(23)] = inst_33581__$1);

return statearr_33689;
})();
if(cljs.core.truth_(inst_33582)){
var statearr_33690_33752 = state_33613__$1;
(statearr_33690_33752[(1)] = (39));

} else {
var statearr_33691_33753 = state_33613__$1;
(statearr_33691_33753[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (8))){
var inst_33492 = (state_33613[(14)]);
var inst_33493 = (state_33613[(17)]);
var inst_33495 = (inst_33493 < inst_33492);
var inst_33496 = inst_33495;
var state_33613__$1 = state_33613;
if(cljs.core.truth_(inst_33496)){
var statearr_33692_33754 = state_33613__$1;
(statearr_33692_33754[(1)] = (10));

} else {
var statearr_33693_33755 = state_33613__$1;
(statearr_33693_33755[(1)] = (11));

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
});})(c__32348__auto___33701,cs,m,dchan,dctr,done))
;
return ((function (switch__32236__auto__,c__32348__auto___33701,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32237__auto__ = null;
var cljs$core$async$mult_$_state_machine__32237__auto____0 = (function (){
var statearr_33697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33697[(0)] = cljs$core$async$mult_$_state_machine__32237__auto__);

(statearr_33697[(1)] = (1));

return statearr_33697;
});
var cljs$core$async$mult_$_state_machine__32237__auto____1 = (function (state_33613){
while(true){
var ret_value__32238__auto__ = (function (){try{while(true){
var result__32239__auto__ = switch__32236__auto__.call(null,state_33613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32239__auto__;
}
break;
}
}catch (e33698){if((e33698 instanceof Object)){
var ex__32240__auto__ = e33698;
var statearr_33699_33756 = state_33613;
(statearr_33699_33756[(5)] = ex__32240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33757 = state_33613;
state_33613 = G__33757;
continue;
} else {
return ret_value__32238__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32237__auto__ = function(state_33613){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32237__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32237__auto____1.call(this,state_33613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32237__auto____0;
cljs$core$async$mult_$_state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32237__auto____1;
return cljs$core$async$mult_$_state_machine__32237__auto__;
})()
;})(switch__32236__auto__,c__32348__auto___33701,cs,m,dchan,dctr,done))
})();
var state__32350__auto__ = (function (){var statearr_33700 = f__32349__auto__.call(null);
(statearr_33700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32348__auto___33701);

return statearr_33700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32350__auto__);
});})(c__32348__auto___33701,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args33758 = [];
var len__9664__auto___33761 = arguments.length;
var i__9665__auto___33762 = (0);
while(true){
if((i__9665__auto___33762 < len__9664__auto___33761)){
args33758.push((arguments[i__9665__auto___33762]));

var G__33763 = (i__9665__auto___33762 + (1));
i__9665__auto___33762 = G__33763;
continue;
} else {
}
break;
}

var G__33760 = args33758.length;
switch (G__33760) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33758.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__9256__auto__ = (((m == null))?null:m);
var m__9257__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9256__auto__)]);
if(!((m__9257__auto__ == null))){
return m__9257__auto__.call(null,m,ch);
} else {
var m__9257__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__9257__auto____$1 == null))){
return m__9257__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__9256__auto__ = (((m == null))?null:m);
var m__9257__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9256__auto__)]);
if(!((m__9257__auto__ == null))){
return m__9257__auto__.call(null,m,ch);
} else {
var m__9257__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__9257__auto____$1 == null))){
return m__9257__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__9256__auto__ = (((m == null))?null:m);
var m__9257__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9256__auto__)]);
if(!((m__9257__auto__ == null))){
return m__9257__auto__.call(null,m);
} else {
var m__9257__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__9257__auto____$1 == null))){
return m__9257__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__9256__auto__ = (((m == null))?null:m);
var m__9257__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9256__auto__)]);
if(!((m__9257__auto__ == null))){
return m__9257__auto__.call(null,m,state_map);
} else {
var m__9257__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__9257__auto____$1 == null))){
return m__9257__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__9256__auto__ = (((m == null))?null:m);
var m__9257__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9256__auto__)]);
if(!((m__9257__auto__ == null))){
return m__9257__auto__.call(null,m,mode);
} else {
var m__9257__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__9257__auto____$1 == null))){
return m__9257__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__9671__auto__ = [];
var len__9664__auto___33775 = arguments.length;
var i__9665__auto___33776 = (0);
while(true){
if((i__9665__auto___33776 < len__9664__auto___33775)){
args__9671__auto__.push((arguments[i__9665__auto___33776]));

var G__33777 = (i__9665__auto___33776 + (1));
i__9665__auto___33776 = G__33777;
continue;
} else {
}
break;
}

var argseq__9672__auto__ = ((((3) < args__9671__auto__.length))?(new cljs.core.IndexedSeq(args__9671__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9672__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33769){
var map__33770 = p__33769;
var map__33770__$1 = ((((!((map__33770 == null)))?((((map__33770.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33770.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33770):map__33770);
var opts = map__33770__$1;
var statearr_33772_33778 = state;
(statearr_33772_33778[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__33770,map__33770__$1,opts){
return (function (val){
var statearr_33773_33779 = state;
(statearr_33773_33779[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33770,map__33770__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_33774_33780 = state;
(statearr_33774_33780[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33765){
var G__33766 = cljs.core.first.call(null,seq33765);
var seq33765__$1 = cljs.core.next.call(null,seq33765);
var G__33767 = cljs.core.first.call(null,seq33765__$1);
var seq33765__$2 = cljs.core.next.call(null,seq33765__$1);
var G__33768 = cljs.core.first.call(null,seq33765__$2);
var seq33765__$3 = cljs.core.next.call(null,seq33765__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33766,G__33767,G__33768,seq33765__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33946 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33946 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33947){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33947 = meta33947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33948,meta33947__$1){
var self__ = this;
var _33948__$1 = this;
return (new cljs.core.async.t_cljs$core$async33946(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33947__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33946.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33948){
var self__ = this;
var _33948__$1 = this;
return self__.meta33947;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33946.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33946.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33946.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async33946.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33946.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33946.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33946.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33946.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33946.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33947","meta33947",1420497978,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33946.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33946.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33946";

cljs.core.async.t_cljs$core$async33946.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9199__auto__,writer__9200__auto__,opt__9201__auto__){
return cljs.core._write.call(null,writer__9200__auto__,"cljs.core.async/t_cljs$core$async33946");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async33946 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33946(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33947){
return (new cljs.core.async.t_cljs$core$async33946(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33947));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33946(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32348__auto___34111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32348__auto___34111,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32349__auto__ = (function (){var switch__32236__auto__ = ((function (c__32348__auto___34111,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34048){
var state_val_34049 = (state_34048[(1)]);
if((state_val_34049 === (7))){
var inst_33964 = (state_34048[(2)]);
var state_34048__$1 = state_34048;
var statearr_34050_34112 = state_34048__$1;
(statearr_34050_34112[(2)] = inst_33964);

(statearr_34050_34112[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (20))){
var inst_33976 = (state_34048[(7)]);
var state_34048__$1 = state_34048;
var statearr_34051_34113 = state_34048__$1;
(statearr_34051_34113[(2)] = inst_33976);

(statearr_34051_34113[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (27))){
var state_34048__$1 = state_34048;
var statearr_34052_34114 = state_34048__$1;
(statearr_34052_34114[(2)] = null);

(statearr_34052_34114[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (1))){
var inst_33952 = (state_34048[(8)]);
var inst_33952__$1 = calc_state.call(null);
var inst_33954 = (inst_33952__$1 == null);
var inst_33955 = cljs.core.not.call(null,inst_33954);
var state_34048__$1 = (function (){var statearr_34053 = state_34048;
(statearr_34053[(8)] = inst_33952__$1);

return statearr_34053;
})();
if(inst_33955){
var statearr_34054_34115 = state_34048__$1;
(statearr_34054_34115[(1)] = (2));

} else {
var statearr_34055_34116 = state_34048__$1;
(statearr_34055_34116[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (24))){
var inst_33999 = (state_34048[(9)]);
var inst_34022 = (state_34048[(10)]);
var inst_34008 = (state_34048[(11)]);
var inst_34022__$1 = inst_33999.call(null,inst_34008);
var state_34048__$1 = (function (){var statearr_34056 = state_34048;
(statearr_34056[(10)] = inst_34022__$1);

return statearr_34056;
})();
if(cljs.core.truth_(inst_34022__$1)){
var statearr_34057_34117 = state_34048__$1;
(statearr_34057_34117[(1)] = (29));

} else {
var statearr_34058_34118 = state_34048__$1;
(statearr_34058_34118[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (4))){
var inst_33967 = (state_34048[(2)]);
var state_34048__$1 = state_34048;
if(cljs.core.truth_(inst_33967)){
var statearr_34059_34119 = state_34048__$1;
(statearr_34059_34119[(1)] = (8));

} else {
var statearr_34060_34120 = state_34048__$1;
(statearr_34060_34120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (15))){
var inst_33993 = (state_34048[(2)]);
var state_34048__$1 = state_34048;
if(cljs.core.truth_(inst_33993)){
var statearr_34061_34121 = state_34048__$1;
(statearr_34061_34121[(1)] = (19));

} else {
var statearr_34062_34122 = state_34048__$1;
(statearr_34062_34122[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (21))){
var inst_33998 = (state_34048[(12)]);
var inst_33998__$1 = (state_34048[(2)]);
var inst_33999 = cljs.core.get.call(null,inst_33998__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34000 = cljs.core.get.call(null,inst_33998__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34001 = cljs.core.get.call(null,inst_33998__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34048__$1 = (function (){var statearr_34063 = state_34048;
(statearr_34063[(13)] = inst_34000);

(statearr_34063[(9)] = inst_33999);

(statearr_34063[(12)] = inst_33998__$1);

return statearr_34063;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34048__$1,(22),inst_34001);
} else {
if((state_val_34049 === (31))){
var inst_34030 = (state_34048[(2)]);
var state_34048__$1 = state_34048;
if(cljs.core.truth_(inst_34030)){
var statearr_34064_34123 = state_34048__$1;
(statearr_34064_34123[(1)] = (32));

} else {
var statearr_34065_34124 = state_34048__$1;
(statearr_34065_34124[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (32))){
var inst_34007 = (state_34048[(14)]);
var state_34048__$1 = state_34048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34048__$1,(35),out,inst_34007);
} else {
if((state_val_34049 === (33))){
var inst_33998 = (state_34048[(12)]);
var inst_33976 = inst_33998;
var state_34048__$1 = (function (){var statearr_34066 = state_34048;
(statearr_34066[(7)] = inst_33976);

return statearr_34066;
})();
var statearr_34067_34125 = state_34048__$1;
(statearr_34067_34125[(2)] = null);

(statearr_34067_34125[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (13))){
var inst_33976 = (state_34048[(7)]);
var inst_33983 = inst_33976.cljs$lang$protocol_mask$partition0$;
var inst_33984 = (inst_33983 & (64));
var inst_33985 = inst_33976.cljs$core$ISeq$;
var inst_33986 = (inst_33984) || (inst_33985);
var state_34048__$1 = state_34048;
if(cljs.core.truth_(inst_33986)){
var statearr_34068_34126 = state_34048__$1;
(statearr_34068_34126[(1)] = (16));

} else {
var statearr_34069_34127 = state_34048__$1;
(statearr_34069_34127[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (22))){
var inst_34007 = (state_34048[(14)]);
var inst_34008 = (state_34048[(11)]);
var inst_34006 = (state_34048[(2)]);
var inst_34007__$1 = cljs.core.nth.call(null,inst_34006,(0),null);
var inst_34008__$1 = cljs.core.nth.call(null,inst_34006,(1),null);
var inst_34009 = (inst_34007__$1 == null);
var inst_34010 = cljs.core._EQ_.call(null,inst_34008__$1,change);
var inst_34011 = (inst_34009) || (inst_34010);
var state_34048__$1 = (function (){var statearr_34070 = state_34048;
(statearr_34070[(14)] = inst_34007__$1);

(statearr_34070[(11)] = inst_34008__$1);

return statearr_34070;
})();
if(cljs.core.truth_(inst_34011)){
var statearr_34071_34128 = state_34048__$1;
(statearr_34071_34128[(1)] = (23));

} else {
var statearr_34072_34129 = state_34048__$1;
(statearr_34072_34129[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (36))){
var inst_33998 = (state_34048[(12)]);
var inst_33976 = inst_33998;
var state_34048__$1 = (function (){var statearr_34073 = state_34048;
(statearr_34073[(7)] = inst_33976);

return statearr_34073;
})();
var statearr_34074_34130 = state_34048__$1;
(statearr_34074_34130[(2)] = null);

(statearr_34074_34130[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (29))){
var inst_34022 = (state_34048[(10)]);
var state_34048__$1 = state_34048;
var statearr_34075_34131 = state_34048__$1;
(statearr_34075_34131[(2)] = inst_34022);

(statearr_34075_34131[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (6))){
var state_34048__$1 = state_34048;
var statearr_34076_34132 = state_34048__$1;
(statearr_34076_34132[(2)] = false);

(statearr_34076_34132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (28))){
var inst_34018 = (state_34048[(2)]);
var inst_34019 = calc_state.call(null);
var inst_33976 = inst_34019;
var state_34048__$1 = (function (){var statearr_34077 = state_34048;
(statearr_34077[(7)] = inst_33976);

(statearr_34077[(15)] = inst_34018);

return statearr_34077;
})();
var statearr_34078_34133 = state_34048__$1;
(statearr_34078_34133[(2)] = null);

(statearr_34078_34133[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (25))){
var inst_34044 = (state_34048[(2)]);
var state_34048__$1 = state_34048;
var statearr_34079_34134 = state_34048__$1;
(statearr_34079_34134[(2)] = inst_34044);

(statearr_34079_34134[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (34))){
var inst_34042 = (state_34048[(2)]);
var state_34048__$1 = state_34048;
var statearr_34080_34135 = state_34048__$1;
(statearr_34080_34135[(2)] = inst_34042);

(statearr_34080_34135[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (17))){
var state_34048__$1 = state_34048;
var statearr_34081_34136 = state_34048__$1;
(statearr_34081_34136[(2)] = false);

(statearr_34081_34136[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (3))){
var state_34048__$1 = state_34048;
var statearr_34082_34137 = state_34048__$1;
(statearr_34082_34137[(2)] = false);

(statearr_34082_34137[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (12))){
var inst_34046 = (state_34048[(2)]);
var state_34048__$1 = state_34048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34048__$1,inst_34046);
} else {
if((state_val_34049 === (2))){
var inst_33952 = (state_34048[(8)]);
var inst_33957 = inst_33952.cljs$lang$protocol_mask$partition0$;
var inst_33958 = (inst_33957 & (64));
var inst_33959 = inst_33952.cljs$core$ISeq$;
var inst_33960 = (inst_33958) || (inst_33959);
var state_34048__$1 = state_34048;
if(cljs.core.truth_(inst_33960)){
var statearr_34083_34138 = state_34048__$1;
(statearr_34083_34138[(1)] = (5));

} else {
var statearr_34084_34139 = state_34048__$1;
(statearr_34084_34139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (23))){
var inst_34007 = (state_34048[(14)]);
var inst_34013 = (inst_34007 == null);
var state_34048__$1 = state_34048;
if(cljs.core.truth_(inst_34013)){
var statearr_34085_34140 = state_34048__$1;
(statearr_34085_34140[(1)] = (26));

} else {
var statearr_34086_34141 = state_34048__$1;
(statearr_34086_34141[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (35))){
var inst_34033 = (state_34048[(2)]);
var state_34048__$1 = state_34048;
if(cljs.core.truth_(inst_34033)){
var statearr_34087_34142 = state_34048__$1;
(statearr_34087_34142[(1)] = (36));

} else {
var statearr_34088_34143 = state_34048__$1;
(statearr_34088_34143[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (19))){
var inst_33976 = (state_34048[(7)]);
var inst_33995 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33976);
var state_34048__$1 = state_34048;
var statearr_34089_34144 = state_34048__$1;
(statearr_34089_34144[(2)] = inst_33995);

(statearr_34089_34144[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (11))){
var inst_33976 = (state_34048[(7)]);
var inst_33980 = (inst_33976 == null);
var inst_33981 = cljs.core.not.call(null,inst_33980);
var state_34048__$1 = state_34048;
if(inst_33981){
var statearr_34090_34145 = state_34048__$1;
(statearr_34090_34145[(1)] = (13));

} else {
var statearr_34091_34146 = state_34048__$1;
(statearr_34091_34146[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (9))){
var inst_33952 = (state_34048[(8)]);
var state_34048__$1 = state_34048;
var statearr_34092_34147 = state_34048__$1;
(statearr_34092_34147[(2)] = inst_33952);

(statearr_34092_34147[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (5))){
var state_34048__$1 = state_34048;
var statearr_34093_34148 = state_34048__$1;
(statearr_34093_34148[(2)] = true);

(statearr_34093_34148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (14))){
var state_34048__$1 = state_34048;
var statearr_34094_34149 = state_34048__$1;
(statearr_34094_34149[(2)] = false);

(statearr_34094_34149[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (26))){
var inst_34008 = (state_34048[(11)]);
var inst_34015 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34008);
var state_34048__$1 = state_34048;
var statearr_34095_34150 = state_34048__$1;
(statearr_34095_34150[(2)] = inst_34015);

(statearr_34095_34150[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (16))){
var state_34048__$1 = state_34048;
var statearr_34096_34151 = state_34048__$1;
(statearr_34096_34151[(2)] = true);

(statearr_34096_34151[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (38))){
var inst_34038 = (state_34048[(2)]);
var state_34048__$1 = state_34048;
var statearr_34097_34152 = state_34048__$1;
(statearr_34097_34152[(2)] = inst_34038);

(statearr_34097_34152[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (30))){
var inst_34000 = (state_34048[(13)]);
var inst_33999 = (state_34048[(9)]);
var inst_34008 = (state_34048[(11)]);
var inst_34025 = cljs.core.empty_QMARK_.call(null,inst_33999);
var inst_34026 = inst_34000.call(null,inst_34008);
var inst_34027 = cljs.core.not.call(null,inst_34026);
var inst_34028 = (inst_34025) && (inst_34027);
var state_34048__$1 = state_34048;
var statearr_34098_34153 = state_34048__$1;
(statearr_34098_34153[(2)] = inst_34028);

(statearr_34098_34153[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (10))){
var inst_33952 = (state_34048[(8)]);
var inst_33972 = (state_34048[(2)]);
var inst_33973 = cljs.core.get.call(null,inst_33972,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33974 = cljs.core.get.call(null,inst_33972,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33975 = cljs.core.get.call(null,inst_33972,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33976 = inst_33952;
var state_34048__$1 = (function (){var statearr_34099 = state_34048;
(statearr_34099[(16)] = inst_33973);

(statearr_34099[(17)] = inst_33974);

(statearr_34099[(18)] = inst_33975);

(statearr_34099[(7)] = inst_33976);

return statearr_34099;
})();
var statearr_34100_34154 = state_34048__$1;
(statearr_34100_34154[(2)] = null);

(statearr_34100_34154[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (18))){
var inst_33990 = (state_34048[(2)]);
var state_34048__$1 = state_34048;
var statearr_34101_34155 = state_34048__$1;
(statearr_34101_34155[(2)] = inst_33990);

(statearr_34101_34155[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (37))){
var state_34048__$1 = state_34048;
var statearr_34102_34156 = state_34048__$1;
(statearr_34102_34156[(2)] = null);

(statearr_34102_34156[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (8))){
var inst_33952 = (state_34048[(8)]);
var inst_33969 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33952);
var state_34048__$1 = state_34048;
var statearr_34103_34157 = state_34048__$1;
(statearr_34103_34157[(2)] = inst_33969);

(statearr_34103_34157[(1)] = (10));


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
});})(c__32348__auto___34111,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32236__auto__,c__32348__auto___34111,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32237__auto__ = null;
var cljs$core$async$mix_$_state_machine__32237__auto____0 = (function (){
var statearr_34107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34107[(0)] = cljs$core$async$mix_$_state_machine__32237__auto__);

(statearr_34107[(1)] = (1));

return statearr_34107;
});
var cljs$core$async$mix_$_state_machine__32237__auto____1 = (function (state_34048){
while(true){
var ret_value__32238__auto__ = (function (){try{while(true){
var result__32239__auto__ = switch__32236__auto__.call(null,state_34048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32239__auto__;
}
break;
}
}catch (e34108){if((e34108 instanceof Object)){
var ex__32240__auto__ = e34108;
var statearr_34109_34158 = state_34048;
(statearr_34109_34158[(5)] = ex__32240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34159 = state_34048;
state_34048 = G__34159;
continue;
} else {
return ret_value__32238__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32237__auto__ = function(state_34048){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32237__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32237__auto____1.call(this,state_34048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32237__auto____0;
cljs$core$async$mix_$_state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32237__auto____1;
return cljs$core$async$mix_$_state_machine__32237__auto__;
})()
;})(switch__32236__auto__,c__32348__auto___34111,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32350__auto__ = (function (){var statearr_34110 = f__32349__auto__.call(null);
(statearr_34110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32348__auto___34111);

return statearr_34110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32350__auto__);
});})(c__32348__auto___34111,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__9256__auto__ = (((p == null))?null:p);
var m__9257__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9256__auto__)]);
if(!((m__9257__auto__ == null))){
return m__9257__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__9257__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__9257__auto____$1 == null))){
return m__9257__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__9256__auto__ = (((p == null))?null:p);
var m__9257__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9256__auto__)]);
if(!((m__9257__auto__ == null))){
return m__9257__auto__.call(null,p,v,ch);
} else {
var m__9257__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__9257__auto____$1 == null))){
return m__9257__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args34160 = [];
var len__9664__auto___34163 = arguments.length;
var i__9665__auto___34164 = (0);
while(true){
if((i__9665__auto___34164 < len__9664__auto___34163)){
args34160.push((arguments[i__9665__auto___34164]));

var G__34165 = (i__9665__auto___34164 + (1));
i__9665__auto___34164 = G__34165;
continue;
} else {
}
break;
}

var G__34162 = args34160.length;
switch (G__34162) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34160.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__9256__auto__ = (((p == null))?null:p);
var m__9257__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9256__auto__)]);
if(!((m__9257__auto__ == null))){
return m__9257__auto__.call(null,p);
} else {
var m__9257__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9257__auto____$1 == null))){
return m__9257__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__9256__auto__ = (((p == null))?null:p);
var m__9257__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9256__auto__)]);
if(!((m__9257__auto__ == null))){
return m__9257__auto__.call(null,p,v);
} else {
var m__9257__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9257__auto____$1 == null))){
return m__9257__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args34168 = [];
var len__9664__auto___34293 = arguments.length;
var i__9665__auto___34294 = (0);
while(true){
if((i__9665__auto___34294 < len__9664__auto___34293)){
args34168.push((arguments[i__9665__auto___34294]));

var G__34295 = (i__9665__auto___34294 + (1));
i__9665__auto___34294 = G__34295;
continue;
} else {
}
break;
}

var G__34170 = args34168.length;
switch (G__34170) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34168.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__8593__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__8593__auto__)){
return or__8593__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8593__auto__,mults){
return (function (p1__34167_SHARP_){
if(cljs.core.truth_(p1__34167_SHARP_.call(null,topic))){
return p1__34167_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34167_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8593__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34171 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34171 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34172){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34172 = meta34172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34173,meta34172__$1){
var self__ = this;
var _34173__$1 = this;
return (new cljs.core.async.t_cljs$core$async34171(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34172__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34173){
var self__ = this;
var _34173__$1 = this;
return self__.meta34172;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34171.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34172","meta34172",135807637,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34171.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34171";

cljs.core.async.t_cljs$core$async34171.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9199__auto__,writer__9200__auto__,opt__9201__auto__){
return cljs.core._write.call(null,writer__9200__auto__,"cljs.core.async/t_cljs$core$async34171");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async34171 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34171(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34172){
return (new cljs.core.async.t_cljs$core$async34171(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34172));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34171(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32348__auto___34297 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32348__auto___34297,mults,ensure_mult,p){
return (function (){
var f__32349__auto__ = (function (){var switch__32236__auto__ = ((function (c__32348__auto___34297,mults,ensure_mult,p){
return (function (state_34245){
var state_val_34246 = (state_34245[(1)]);
if((state_val_34246 === (7))){
var inst_34241 = (state_34245[(2)]);
var state_34245__$1 = state_34245;
var statearr_34247_34298 = state_34245__$1;
(statearr_34247_34298[(2)] = inst_34241);

(statearr_34247_34298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34246 === (20))){
var state_34245__$1 = state_34245;
var statearr_34248_34299 = state_34245__$1;
(statearr_34248_34299[(2)] = null);

(statearr_34248_34299[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34246 === (1))){
var state_34245__$1 = state_34245;
var statearr_34249_34300 = state_34245__$1;
(statearr_34249_34300[(2)] = null);

(statearr_34249_34300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34246 === (24))){
var inst_34224 = (state_34245[(7)]);
var inst_34233 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34224);
var state_34245__$1 = state_34245;
var statearr_34250_34301 = state_34245__$1;
(statearr_34250_34301[(2)] = inst_34233);

(statearr_34250_34301[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34246 === (4))){
var inst_34176 = (state_34245[(8)]);
var inst_34176__$1 = (state_34245[(2)]);
var inst_34177 = (inst_34176__$1 == null);
var state_34245__$1 = (function (){var statearr_34251 = state_34245;
(statearr_34251[(8)] = inst_34176__$1);

return statearr_34251;
})();
if(cljs.core.truth_(inst_34177)){
var statearr_34252_34302 = state_34245__$1;
(statearr_34252_34302[(1)] = (5));

} else {
var statearr_34253_34303 = state_34245__$1;
(statearr_34253_34303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34246 === (15))){
var inst_34218 = (state_34245[(2)]);
var state_34245__$1 = state_34245;
var statearr_34254_34304 = state_34245__$1;
(statearr_34254_34304[(2)] = inst_34218);

(statearr_34254_34304[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34246 === (21))){
var inst_34238 = (state_34245[(2)]);
var state_34245__$1 = (function (){var statearr_34255 = state_34245;
(statearr_34255[(9)] = inst_34238);

return statearr_34255;
})();
var statearr_34256_34305 = state_34245__$1;
(statearr_34256_34305[(2)] = null);

(statearr_34256_34305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34246 === (13))){
var inst_34200 = (state_34245[(10)]);
var inst_34202 = cljs.core.chunked_seq_QMARK_.call(null,inst_34200);
var state_34245__$1 = state_34245;
if(inst_34202){
var statearr_34257_34306 = state_34245__$1;
(statearr_34257_34306[(1)] = (16));

} else {
var statearr_34258_34307 = state_34245__$1;
(statearr_34258_34307[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34246 === (22))){
var inst_34230 = (state_34245[(2)]);
var state_34245__$1 = state_34245;
if(cljs.core.truth_(inst_34230)){
var statearr_34259_34308 = state_34245__$1;
(statearr_34259_34308[(1)] = (23));

} else {
var statearr_34260_34309 = state_34245__$1;
(statearr_34260_34309[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34246 === (6))){
var inst_34224 = (state_34245[(7)]);
var inst_34176 = (state_34245[(8)]);
var inst_34226 = (state_34245[(11)]);
var inst_34224__$1 = topic_fn.call(null,inst_34176);
var inst_34225 = cljs.core.deref.call(null,mults);
var inst_34226__$1 = cljs.core.get.call(null,inst_34225,inst_34224__$1);
var state_34245__$1 = (function (){var statearr_34261 = state_34245;
(statearr_34261[(7)] = inst_34224__$1);

(statearr_34261[(11)] = inst_34226__$1);

return statearr_34261;
})();
if(cljs.core.truth_(inst_34226__$1)){
var statearr_34262_34310 = state_34245__$1;
(statearr_34262_34310[(1)] = (19));

} else {
var statearr_34263_34311 = state_34245__$1;
(statearr_34263_34311[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34246 === (25))){
var inst_34235 = (state_34245[(2)]);
var state_34245__$1 = state_34245;
var statearr_34264_34312 = state_34245__$1;
(statearr_34264_34312[(2)] = inst_34235);

(statearr_34264_34312[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34246 === (17))){
var inst_34200 = (state_34245[(10)]);
var inst_34209 = cljs.core.first.call(null,inst_34200);
var inst_34210 = cljs.core.async.muxch_STAR_.call(null,inst_34209);
var inst_34211 = cljs.core.async.close_BANG_.call(null,inst_34210);
var inst_34212 = cljs.core.next.call(null,inst_34200);
var inst_34186 = inst_34212;
var inst_34187 = null;
var inst_34188 = (0);
var inst_34189 = (0);
var state_34245__$1 = (function (){var statearr_34265 = state_34245;
(statearr_34265[(12)] = inst_34211);

(statearr_34265[(13)] = inst_34186);

(statearr_34265[(14)] = inst_34188);

(statearr_34265[(15)] = inst_34189);

(statearr_34265[(16)] = inst_34187);

return statearr_34265;
})();
var statearr_34266_34313 = state_34245__$1;
(statearr_34266_34313[(2)] = null);

(statearr_34266_34313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34246 === (3))){
var inst_34243 = (state_34245[(2)]);
var state_34245__$1 = state_34245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34245__$1,inst_34243);
} else {
if((state_val_34246 === (12))){
var inst_34220 = (state_34245[(2)]);
var state_34245__$1 = state_34245;
var statearr_34267_34314 = state_34245__$1;
(statearr_34267_34314[(2)] = inst_34220);

(statearr_34267_34314[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34246 === (2))){
var state_34245__$1 = state_34245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34245__$1,(4),ch);
} else {
if((state_val_34246 === (23))){
var state_34245__$1 = state_34245;
var statearr_34268_34315 = state_34245__$1;
(statearr_34268_34315[(2)] = null);

(statearr_34268_34315[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34246 === (19))){
var inst_34176 = (state_34245[(8)]);
var inst_34226 = (state_34245[(11)]);
var inst_34228 = cljs.core.async.muxch_STAR_.call(null,inst_34226);
var state_34245__$1 = state_34245;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34245__$1,(22),inst_34228,inst_34176);
} else {
if((state_val_34246 === (11))){
var inst_34200 = (state_34245[(10)]);
var inst_34186 = (state_34245[(13)]);
var inst_34200__$1 = cljs.core.seq.call(null,inst_34186);
var state_34245__$1 = (function (){var statearr_34269 = state_34245;
(statearr_34269[(10)] = inst_34200__$1);

return statearr_34269;
})();
if(inst_34200__$1){
var statearr_34270_34316 = state_34245__$1;
(statearr_34270_34316[(1)] = (13));

} else {
var statearr_34271_34317 = state_34245__$1;
(statearr_34271_34317[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34246 === (9))){
var inst_34222 = (state_34245[(2)]);
var state_34245__$1 = state_34245;
var statearr_34272_34318 = state_34245__$1;
(statearr_34272_34318[(2)] = inst_34222);

(statearr_34272_34318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34246 === (5))){
var inst_34183 = cljs.core.deref.call(null,mults);
var inst_34184 = cljs.core.vals.call(null,inst_34183);
var inst_34185 = cljs.core.seq.call(null,inst_34184);
var inst_34186 = inst_34185;
var inst_34187 = null;
var inst_34188 = (0);
var inst_34189 = (0);
var state_34245__$1 = (function (){var statearr_34273 = state_34245;
(statearr_34273[(13)] = inst_34186);

(statearr_34273[(14)] = inst_34188);

(statearr_34273[(15)] = inst_34189);

(statearr_34273[(16)] = inst_34187);

return statearr_34273;
})();
var statearr_34274_34319 = state_34245__$1;
(statearr_34274_34319[(2)] = null);

(statearr_34274_34319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34246 === (14))){
var state_34245__$1 = state_34245;
var statearr_34278_34320 = state_34245__$1;
(statearr_34278_34320[(2)] = null);

(statearr_34278_34320[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34246 === (16))){
var inst_34200 = (state_34245[(10)]);
var inst_34204 = cljs.core.chunk_first.call(null,inst_34200);
var inst_34205 = cljs.core.chunk_rest.call(null,inst_34200);
var inst_34206 = cljs.core.count.call(null,inst_34204);
var inst_34186 = inst_34205;
var inst_34187 = inst_34204;
var inst_34188 = inst_34206;
var inst_34189 = (0);
var state_34245__$1 = (function (){var statearr_34279 = state_34245;
(statearr_34279[(13)] = inst_34186);

(statearr_34279[(14)] = inst_34188);

(statearr_34279[(15)] = inst_34189);

(statearr_34279[(16)] = inst_34187);

return statearr_34279;
})();
var statearr_34280_34321 = state_34245__$1;
(statearr_34280_34321[(2)] = null);

(statearr_34280_34321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34246 === (10))){
var inst_34186 = (state_34245[(13)]);
var inst_34188 = (state_34245[(14)]);
var inst_34189 = (state_34245[(15)]);
var inst_34187 = (state_34245[(16)]);
var inst_34194 = cljs.core._nth.call(null,inst_34187,inst_34189);
var inst_34195 = cljs.core.async.muxch_STAR_.call(null,inst_34194);
var inst_34196 = cljs.core.async.close_BANG_.call(null,inst_34195);
var inst_34197 = (inst_34189 + (1));
var tmp34275 = inst_34186;
var tmp34276 = inst_34188;
var tmp34277 = inst_34187;
var inst_34186__$1 = tmp34275;
var inst_34187__$1 = tmp34277;
var inst_34188__$1 = tmp34276;
var inst_34189__$1 = inst_34197;
var state_34245__$1 = (function (){var statearr_34281 = state_34245;
(statearr_34281[(17)] = inst_34196);

(statearr_34281[(13)] = inst_34186__$1);

(statearr_34281[(14)] = inst_34188__$1);

(statearr_34281[(15)] = inst_34189__$1);

(statearr_34281[(16)] = inst_34187__$1);

return statearr_34281;
})();
var statearr_34282_34322 = state_34245__$1;
(statearr_34282_34322[(2)] = null);

(statearr_34282_34322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34246 === (18))){
var inst_34215 = (state_34245[(2)]);
var state_34245__$1 = state_34245;
var statearr_34283_34323 = state_34245__$1;
(statearr_34283_34323[(2)] = inst_34215);

(statearr_34283_34323[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34246 === (8))){
var inst_34188 = (state_34245[(14)]);
var inst_34189 = (state_34245[(15)]);
var inst_34191 = (inst_34189 < inst_34188);
var inst_34192 = inst_34191;
var state_34245__$1 = state_34245;
if(cljs.core.truth_(inst_34192)){
var statearr_34284_34324 = state_34245__$1;
(statearr_34284_34324[(1)] = (10));

} else {
var statearr_34285_34325 = state_34245__$1;
(statearr_34285_34325[(1)] = (11));

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
});})(c__32348__auto___34297,mults,ensure_mult,p))
;
return ((function (switch__32236__auto__,c__32348__auto___34297,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32237__auto__ = null;
var cljs$core$async$state_machine__32237__auto____0 = (function (){
var statearr_34289 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34289[(0)] = cljs$core$async$state_machine__32237__auto__);

(statearr_34289[(1)] = (1));

return statearr_34289;
});
var cljs$core$async$state_machine__32237__auto____1 = (function (state_34245){
while(true){
var ret_value__32238__auto__ = (function (){try{while(true){
var result__32239__auto__ = switch__32236__auto__.call(null,state_34245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32239__auto__;
}
break;
}
}catch (e34290){if((e34290 instanceof Object)){
var ex__32240__auto__ = e34290;
var statearr_34291_34326 = state_34245;
(statearr_34291_34326[(5)] = ex__32240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34327 = state_34245;
state_34245 = G__34327;
continue;
} else {
return ret_value__32238__auto__;
}
break;
}
});
cljs$core$async$state_machine__32237__auto__ = function(state_34245){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32237__auto____1.call(this,state_34245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32237__auto____0;
cljs$core$async$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32237__auto____1;
return cljs$core$async$state_machine__32237__auto__;
})()
;})(switch__32236__auto__,c__32348__auto___34297,mults,ensure_mult,p))
})();
var state__32350__auto__ = (function (){var statearr_34292 = f__32349__auto__.call(null);
(statearr_34292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32348__auto___34297);

return statearr_34292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32350__auto__);
});})(c__32348__auto___34297,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args34328 = [];
var len__9664__auto___34331 = arguments.length;
var i__9665__auto___34332 = (0);
while(true){
if((i__9665__auto___34332 < len__9664__auto___34331)){
args34328.push((arguments[i__9665__auto___34332]));

var G__34333 = (i__9665__auto___34332 + (1));
i__9665__auto___34332 = G__34333;
continue;
} else {
}
break;
}

var G__34330 = args34328.length;
switch (G__34330) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34328.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args34335 = [];
var len__9664__auto___34338 = arguments.length;
var i__9665__auto___34339 = (0);
while(true){
if((i__9665__auto___34339 < len__9664__auto___34338)){
args34335.push((arguments[i__9665__auto___34339]));

var G__34340 = (i__9665__auto___34339 + (1));
i__9665__auto___34339 = G__34340;
continue;
} else {
}
break;
}

var G__34337 = args34335.length;
switch (G__34337) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34335.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args34342 = [];
var len__9664__auto___34413 = arguments.length;
var i__9665__auto___34414 = (0);
while(true){
if((i__9665__auto___34414 < len__9664__auto___34413)){
args34342.push((arguments[i__9665__auto___34414]));

var G__34415 = (i__9665__auto___34414 + (1));
i__9665__auto___34414 = G__34415;
continue;
} else {
}
break;
}

var G__34344 = args34342.length;
switch (G__34344) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34342.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__32348__auto___34417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32348__auto___34417,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32349__auto__ = (function (){var switch__32236__auto__ = ((function (c__32348__auto___34417,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34383){
var state_val_34384 = (state_34383[(1)]);
if((state_val_34384 === (7))){
var state_34383__$1 = state_34383;
var statearr_34385_34418 = state_34383__$1;
(statearr_34385_34418[(2)] = null);

(statearr_34385_34418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (1))){
var state_34383__$1 = state_34383;
var statearr_34386_34419 = state_34383__$1;
(statearr_34386_34419[(2)] = null);

(statearr_34386_34419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (4))){
var inst_34347 = (state_34383[(7)]);
var inst_34349 = (inst_34347 < cnt);
var state_34383__$1 = state_34383;
if(cljs.core.truth_(inst_34349)){
var statearr_34387_34420 = state_34383__$1;
(statearr_34387_34420[(1)] = (6));

} else {
var statearr_34388_34421 = state_34383__$1;
(statearr_34388_34421[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (15))){
var inst_34379 = (state_34383[(2)]);
var state_34383__$1 = state_34383;
var statearr_34389_34422 = state_34383__$1;
(statearr_34389_34422[(2)] = inst_34379);

(statearr_34389_34422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (13))){
var inst_34372 = cljs.core.async.close_BANG_.call(null,out);
var state_34383__$1 = state_34383;
var statearr_34390_34423 = state_34383__$1;
(statearr_34390_34423[(2)] = inst_34372);

(statearr_34390_34423[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (6))){
var state_34383__$1 = state_34383;
var statearr_34391_34424 = state_34383__$1;
(statearr_34391_34424[(2)] = null);

(statearr_34391_34424[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (3))){
var inst_34381 = (state_34383[(2)]);
var state_34383__$1 = state_34383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34383__$1,inst_34381);
} else {
if((state_val_34384 === (12))){
var inst_34369 = (state_34383[(8)]);
var inst_34369__$1 = (state_34383[(2)]);
var inst_34370 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34369__$1);
var state_34383__$1 = (function (){var statearr_34392 = state_34383;
(statearr_34392[(8)] = inst_34369__$1);

return statearr_34392;
})();
if(cljs.core.truth_(inst_34370)){
var statearr_34393_34425 = state_34383__$1;
(statearr_34393_34425[(1)] = (13));

} else {
var statearr_34394_34426 = state_34383__$1;
(statearr_34394_34426[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (2))){
var inst_34346 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34347 = (0);
var state_34383__$1 = (function (){var statearr_34395 = state_34383;
(statearr_34395[(9)] = inst_34346);

(statearr_34395[(7)] = inst_34347);

return statearr_34395;
})();
var statearr_34396_34427 = state_34383__$1;
(statearr_34396_34427[(2)] = null);

(statearr_34396_34427[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (11))){
var inst_34347 = (state_34383[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34383,(10),Object,null,(9));
var inst_34356 = chs__$1.call(null,inst_34347);
var inst_34357 = done.call(null,inst_34347);
var inst_34358 = cljs.core.async.take_BANG_.call(null,inst_34356,inst_34357);
var state_34383__$1 = state_34383;
var statearr_34397_34428 = state_34383__$1;
(statearr_34397_34428[(2)] = inst_34358);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34383__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (9))){
var inst_34347 = (state_34383[(7)]);
var inst_34360 = (state_34383[(2)]);
var inst_34361 = (inst_34347 + (1));
var inst_34347__$1 = inst_34361;
var state_34383__$1 = (function (){var statearr_34398 = state_34383;
(statearr_34398[(10)] = inst_34360);

(statearr_34398[(7)] = inst_34347__$1);

return statearr_34398;
})();
var statearr_34399_34429 = state_34383__$1;
(statearr_34399_34429[(2)] = null);

(statearr_34399_34429[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (5))){
var inst_34367 = (state_34383[(2)]);
var state_34383__$1 = (function (){var statearr_34400 = state_34383;
(statearr_34400[(11)] = inst_34367);

return statearr_34400;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34383__$1,(12),dchan);
} else {
if((state_val_34384 === (14))){
var inst_34369 = (state_34383[(8)]);
var inst_34374 = cljs.core.apply.call(null,f,inst_34369);
var state_34383__$1 = state_34383;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34383__$1,(16),out,inst_34374);
} else {
if((state_val_34384 === (16))){
var inst_34376 = (state_34383[(2)]);
var state_34383__$1 = (function (){var statearr_34401 = state_34383;
(statearr_34401[(12)] = inst_34376);

return statearr_34401;
})();
var statearr_34402_34430 = state_34383__$1;
(statearr_34402_34430[(2)] = null);

(statearr_34402_34430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (10))){
var inst_34351 = (state_34383[(2)]);
var inst_34352 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34383__$1 = (function (){var statearr_34403 = state_34383;
(statearr_34403[(13)] = inst_34351);

return statearr_34403;
})();
var statearr_34404_34431 = state_34383__$1;
(statearr_34404_34431[(2)] = inst_34352);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34383__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (8))){
var inst_34365 = (state_34383[(2)]);
var state_34383__$1 = state_34383;
var statearr_34405_34432 = state_34383__$1;
(statearr_34405_34432[(2)] = inst_34365);

(statearr_34405_34432[(1)] = (5));


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
});})(c__32348__auto___34417,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32236__auto__,c__32348__auto___34417,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32237__auto__ = null;
var cljs$core$async$state_machine__32237__auto____0 = (function (){
var statearr_34409 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34409[(0)] = cljs$core$async$state_machine__32237__auto__);

(statearr_34409[(1)] = (1));

return statearr_34409;
});
var cljs$core$async$state_machine__32237__auto____1 = (function (state_34383){
while(true){
var ret_value__32238__auto__ = (function (){try{while(true){
var result__32239__auto__ = switch__32236__auto__.call(null,state_34383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32239__auto__;
}
break;
}
}catch (e34410){if((e34410 instanceof Object)){
var ex__32240__auto__ = e34410;
var statearr_34411_34433 = state_34383;
(statearr_34411_34433[(5)] = ex__32240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34434 = state_34383;
state_34383 = G__34434;
continue;
} else {
return ret_value__32238__auto__;
}
break;
}
});
cljs$core$async$state_machine__32237__auto__ = function(state_34383){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32237__auto____1.call(this,state_34383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32237__auto____0;
cljs$core$async$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32237__auto____1;
return cljs$core$async$state_machine__32237__auto__;
})()
;})(switch__32236__auto__,c__32348__auto___34417,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32350__auto__ = (function (){var statearr_34412 = f__32349__auto__.call(null);
(statearr_34412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32348__auto___34417);

return statearr_34412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32350__auto__);
});})(c__32348__auto___34417,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args34436 = [];
var len__9664__auto___34494 = arguments.length;
var i__9665__auto___34495 = (0);
while(true){
if((i__9665__auto___34495 < len__9664__auto___34494)){
args34436.push((arguments[i__9665__auto___34495]));

var G__34496 = (i__9665__auto___34495 + (1));
i__9665__auto___34495 = G__34496;
continue;
} else {
}
break;
}

var G__34438 = args34436.length;
switch (G__34438) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34436.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32348__auto___34498 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32348__auto___34498,out){
return (function (){
var f__32349__auto__ = (function (){var switch__32236__auto__ = ((function (c__32348__auto___34498,out){
return (function (state_34470){
var state_val_34471 = (state_34470[(1)]);
if((state_val_34471 === (7))){
var inst_34450 = (state_34470[(7)]);
var inst_34449 = (state_34470[(8)]);
var inst_34449__$1 = (state_34470[(2)]);
var inst_34450__$1 = cljs.core.nth.call(null,inst_34449__$1,(0),null);
var inst_34451 = cljs.core.nth.call(null,inst_34449__$1,(1),null);
var inst_34452 = (inst_34450__$1 == null);
var state_34470__$1 = (function (){var statearr_34472 = state_34470;
(statearr_34472[(9)] = inst_34451);

(statearr_34472[(7)] = inst_34450__$1);

(statearr_34472[(8)] = inst_34449__$1);

return statearr_34472;
})();
if(cljs.core.truth_(inst_34452)){
var statearr_34473_34499 = state_34470__$1;
(statearr_34473_34499[(1)] = (8));

} else {
var statearr_34474_34500 = state_34470__$1;
(statearr_34474_34500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34471 === (1))){
var inst_34439 = cljs.core.vec.call(null,chs);
var inst_34440 = inst_34439;
var state_34470__$1 = (function (){var statearr_34475 = state_34470;
(statearr_34475[(10)] = inst_34440);

return statearr_34475;
})();
var statearr_34476_34501 = state_34470__$1;
(statearr_34476_34501[(2)] = null);

(statearr_34476_34501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34471 === (4))){
var inst_34440 = (state_34470[(10)]);
var state_34470__$1 = state_34470;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34470__$1,(7),inst_34440);
} else {
if((state_val_34471 === (6))){
var inst_34466 = (state_34470[(2)]);
var state_34470__$1 = state_34470;
var statearr_34477_34502 = state_34470__$1;
(statearr_34477_34502[(2)] = inst_34466);

(statearr_34477_34502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34471 === (3))){
var inst_34468 = (state_34470[(2)]);
var state_34470__$1 = state_34470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34470__$1,inst_34468);
} else {
if((state_val_34471 === (2))){
var inst_34440 = (state_34470[(10)]);
var inst_34442 = cljs.core.count.call(null,inst_34440);
var inst_34443 = (inst_34442 > (0));
var state_34470__$1 = state_34470;
if(cljs.core.truth_(inst_34443)){
var statearr_34479_34503 = state_34470__$1;
(statearr_34479_34503[(1)] = (4));

} else {
var statearr_34480_34504 = state_34470__$1;
(statearr_34480_34504[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34471 === (11))){
var inst_34440 = (state_34470[(10)]);
var inst_34459 = (state_34470[(2)]);
var tmp34478 = inst_34440;
var inst_34440__$1 = tmp34478;
var state_34470__$1 = (function (){var statearr_34481 = state_34470;
(statearr_34481[(10)] = inst_34440__$1);

(statearr_34481[(11)] = inst_34459);

return statearr_34481;
})();
var statearr_34482_34505 = state_34470__$1;
(statearr_34482_34505[(2)] = null);

(statearr_34482_34505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34471 === (9))){
var inst_34450 = (state_34470[(7)]);
var state_34470__$1 = state_34470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34470__$1,(11),out,inst_34450);
} else {
if((state_val_34471 === (5))){
var inst_34464 = cljs.core.async.close_BANG_.call(null,out);
var state_34470__$1 = state_34470;
var statearr_34483_34506 = state_34470__$1;
(statearr_34483_34506[(2)] = inst_34464);

(statearr_34483_34506[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34471 === (10))){
var inst_34462 = (state_34470[(2)]);
var state_34470__$1 = state_34470;
var statearr_34484_34507 = state_34470__$1;
(statearr_34484_34507[(2)] = inst_34462);

(statearr_34484_34507[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34471 === (8))){
var inst_34451 = (state_34470[(9)]);
var inst_34440 = (state_34470[(10)]);
var inst_34450 = (state_34470[(7)]);
var inst_34449 = (state_34470[(8)]);
var inst_34454 = (function (){var cs = inst_34440;
var vec__34445 = inst_34449;
var v = inst_34450;
var c = inst_34451;
return ((function (cs,vec__34445,v,c,inst_34451,inst_34440,inst_34450,inst_34449,state_val_34471,c__32348__auto___34498,out){
return (function (p1__34435_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34435_SHARP_);
});
;})(cs,vec__34445,v,c,inst_34451,inst_34440,inst_34450,inst_34449,state_val_34471,c__32348__auto___34498,out))
})();
var inst_34455 = cljs.core.filterv.call(null,inst_34454,inst_34440);
var inst_34440__$1 = inst_34455;
var state_34470__$1 = (function (){var statearr_34485 = state_34470;
(statearr_34485[(10)] = inst_34440__$1);

return statearr_34485;
})();
var statearr_34486_34508 = state_34470__$1;
(statearr_34486_34508[(2)] = null);

(statearr_34486_34508[(1)] = (2));


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
});})(c__32348__auto___34498,out))
;
return ((function (switch__32236__auto__,c__32348__auto___34498,out){
return (function() {
var cljs$core$async$state_machine__32237__auto__ = null;
var cljs$core$async$state_machine__32237__auto____0 = (function (){
var statearr_34490 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34490[(0)] = cljs$core$async$state_machine__32237__auto__);

(statearr_34490[(1)] = (1));

return statearr_34490;
});
var cljs$core$async$state_machine__32237__auto____1 = (function (state_34470){
while(true){
var ret_value__32238__auto__ = (function (){try{while(true){
var result__32239__auto__ = switch__32236__auto__.call(null,state_34470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32239__auto__;
}
break;
}
}catch (e34491){if((e34491 instanceof Object)){
var ex__32240__auto__ = e34491;
var statearr_34492_34509 = state_34470;
(statearr_34492_34509[(5)] = ex__32240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34510 = state_34470;
state_34470 = G__34510;
continue;
} else {
return ret_value__32238__auto__;
}
break;
}
});
cljs$core$async$state_machine__32237__auto__ = function(state_34470){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32237__auto____1.call(this,state_34470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32237__auto____0;
cljs$core$async$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32237__auto____1;
return cljs$core$async$state_machine__32237__auto__;
})()
;})(switch__32236__auto__,c__32348__auto___34498,out))
})();
var state__32350__auto__ = (function (){var statearr_34493 = f__32349__auto__.call(null);
(statearr_34493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32348__auto___34498);

return statearr_34493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32350__auto__);
});})(c__32348__auto___34498,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args34511 = [];
var len__9664__auto___34560 = arguments.length;
var i__9665__auto___34561 = (0);
while(true){
if((i__9665__auto___34561 < len__9664__auto___34560)){
args34511.push((arguments[i__9665__auto___34561]));

var G__34562 = (i__9665__auto___34561 + (1));
i__9665__auto___34561 = G__34562;
continue;
} else {
}
break;
}

var G__34513 = args34511.length;
switch (G__34513) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34511.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32348__auto___34564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32348__auto___34564,out){
return (function (){
var f__32349__auto__ = (function (){var switch__32236__auto__ = ((function (c__32348__auto___34564,out){
return (function (state_34537){
var state_val_34538 = (state_34537[(1)]);
if((state_val_34538 === (7))){
var inst_34519 = (state_34537[(7)]);
var inst_34519__$1 = (state_34537[(2)]);
var inst_34520 = (inst_34519__$1 == null);
var inst_34521 = cljs.core.not.call(null,inst_34520);
var state_34537__$1 = (function (){var statearr_34539 = state_34537;
(statearr_34539[(7)] = inst_34519__$1);

return statearr_34539;
})();
if(inst_34521){
var statearr_34540_34565 = state_34537__$1;
(statearr_34540_34565[(1)] = (8));

} else {
var statearr_34541_34566 = state_34537__$1;
(statearr_34541_34566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (1))){
var inst_34514 = (0);
var state_34537__$1 = (function (){var statearr_34542 = state_34537;
(statearr_34542[(8)] = inst_34514);

return statearr_34542;
})();
var statearr_34543_34567 = state_34537__$1;
(statearr_34543_34567[(2)] = null);

(statearr_34543_34567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (4))){
var state_34537__$1 = state_34537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34537__$1,(7),ch);
} else {
if((state_val_34538 === (6))){
var inst_34532 = (state_34537[(2)]);
var state_34537__$1 = state_34537;
var statearr_34544_34568 = state_34537__$1;
(statearr_34544_34568[(2)] = inst_34532);

(statearr_34544_34568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (3))){
var inst_34534 = (state_34537[(2)]);
var inst_34535 = cljs.core.async.close_BANG_.call(null,out);
var state_34537__$1 = (function (){var statearr_34545 = state_34537;
(statearr_34545[(9)] = inst_34534);

return statearr_34545;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34537__$1,inst_34535);
} else {
if((state_val_34538 === (2))){
var inst_34514 = (state_34537[(8)]);
var inst_34516 = (inst_34514 < n);
var state_34537__$1 = state_34537;
if(cljs.core.truth_(inst_34516)){
var statearr_34546_34569 = state_34537__$1;
(statearr_34546_34569[(1)] = (4));

} else {
var statearr_34547_34570 = state_34537__$1;
(statearr_34547_34570[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (11))){
var inst_34514 = (state_34537[(8)]);
var inst_34524 = (state_34537[(2)]);
var inst_34525 = (inst_34514 + (1));
var inst_34514__$1 = inst_34525;
var state_34537__$1 = (function (){var statearr_34548 = state_34537;
(statearr_34548[(8)] = inst_34514__$1);

(statearr_34548[(10)] = inst_34524);

return statearr_34548;
})();
var statearr_34549_34571 = state_34537__$1;
(statearr_34549_34571[(2)] = null);

(statearr_34549_34571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (9))){
var state_34537__$1 = state_34537;
var statearr_34550_34572 = state_34537__$1;
(statearr_34550_34572[(2)] = null);

(statearr_34550_34572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (5))){
var state_34537__$1 = state_34537;
var statearr_34551_34573 = state_34537__$1;
(statearr_34551_34573[(2)] = null);

(statearr_34551_34573[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (10))){
var inst_34529 = (state_34537[(2)]);
var state_34537__$1 = state_34537;
var statearr_34552_34574 = state_34537__$1;
(statearr_34552_34574[(2)] = inst_34529);

(statearr_34552_34574[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (8))){
var inst_34519 = (state_34537[(7)]);
var state_34537__$1 = state_34537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34537__$1,(11),out,inst_34519);
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
});})(c__32348__auto___34564,out))
;
return ((function (switch__32236__auto__,c__32348__auto___34564,out){
return (function() {
var cljs$core$async$state_machine__32237__auto__ = null;
var cljs$core$async$state_machine__32237__auto____0 = (function (){
var statearr_34556 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34556[(0)] = cljs$core$async$state_machine__32237__auto__);

(statearr_34556[(1)] = (1));

return statearr_34556;
});
var cljs$core$async$state_machine__32237__auto____1 = (function (state_34537){
while(true){
var ret_value__32238__auto__ = (function (){try{while(true){
var result__32239__auto__ = switch__32236__auto__.call(null,state_34537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32239__auto__;
}
break;
}
}catch (e34557){if((e34557 instanceof Object)){
var ex__32240__auto__ = e34557;
var statearr_34558_34575 = state_34537;
(statearr_34558_34575[(5)] = ex__32240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34576 = state_34537;
state_34537 = G__34576;
continue;
} else {
return ret_value__32238__auto__;
}
break;
}
});
cljs$core$async$state_machine__32237__auto__ = function(state_34537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32237__auto____1.call(this,state_34537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32237__auto____0;
cljs$core$async$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32237__auto____1;
return cljs$core$async$state_machine__32237__auto__;
})()
;})(switch__32236__auto__,c__32348__auto___34564,out))
})();
var state__32350__auto__ = (function (){var statearr_34559 = f__32349__auto__.call(null);
(statearr_34559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32348__auto___34564);

return statearr_34559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32350__auto__);
});})(c__32348__auto___34564,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34584 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34584 = (function (map_LT_,f,ch,meta34585){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34585 = meta34585;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34586,meta34585__$1){
var self__ = this;
var _34586__$1 = this;
return (new cljs.core.async.t_cljs$core$async34584(self__.map_LT_,self__.f,self__.ch,meta34585__$1));
});

cljs.core.async.t_cljs$core$async34584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34586){
var self__ = this;
var _34586__$1 = this;
return self__.meta34585;
});

cljs.core.async.t_cljs$core$async34584.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34584.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34584.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34584.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34584.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34587 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34587 = (function (map_LT_,f,ch,meta34585,_,fn1,meta34588){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34585 = meta34585;
this._ = _;
this.fn1 = fn1;
this.meta34588 = meta34588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34589,meta34588__$1){
var self__ = this;
var _34589__$1 = this;
return (new cljs.core.async.t_cljs$core$async34587(self__.map_LT_,self__.f,self__.ch,self__.meta34585,self__._,self__.fn1,meta34588__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34587.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34589){
var self__ = this;
var _34589__$1 = this;
return self__.meta34588;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34587.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34587.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34587.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34587.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34577_SHARP_){
return f1.call(null,(((p1__34577_SHARP_ == null))?null:self__.f.call(null,p1__34577_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34587.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34585","meta34585",-706290182,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34584","cljs.core.async/t_cljs$core$async34584",709679921,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34588","meta34588",-1222179752,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34587.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34587.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34587";

cljs.core.async.t_cljs$core$async34587.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9199__auto__,writer__9200__auto__,opt__9201__auto__){
return cljs.core._write.call(null,writer__9200__auto__,"cljs.core.async/t_cljs$core$async34587");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34587 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34587(map_LT___$1,f__$1,ch__$1,meta34585__$1,___$2,fn1__$1,meta34588){
return (new cljs.core.async.t_cljs$core$async34587(map_LT___$1,f__$1,ch__$1,meta34585__$1,___$2,fn1__$1,meta34588));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34587(self__.map_LT_,self__.f,self__.ch,self__.meta34585,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__8581__auto__ = ret;
if(cljs.core.truth_(and__8581__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__8581__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34584.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34584.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34584.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34585","meta34585",-706290182,null)], null);
});

cljs.core.async.t_cljs$core$async34584.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34584.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34584";

cljs.core.async.t_cljs$core$async34584.cljs$lang$ctorPrWriter = (function (this__9199__auto__,writer__9200__auto__,opt__9201__auto__){
return cljs.core._write.call(null,writer__9200__auto__,"cljs.core.async/t_cljs$core$async34584");
});

cljs.core.async.__GT_t_cljs$core$async34584 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34584(map_LT___$1,f__$1,ch__$1,meta34585){
return (new cljs.core.async.t_cljs$core$async34584(map_LT___$1,f__$1,ch__$1,meta34585));
});

}

return (new cljs.core.async.t_cljs$core$async34584(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34593 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34593 = (function (map_GT_,f,ch,meta34594){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta34594 = meta34594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34595,meta34594__$1){
var self__ = this;
var _34595__$1 = this;
return (new cljs.core.async.t_cljs$core$async34593(self__.map_GT_,self__.f,self__.ch,meta34594__$1));
});

cljs.core.async.t_cljs$core$async34593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34595){
var self__ = this;
var _34595__$1 = this;
return self__.meta34594;
});

cljs.core.async.t_cljs$core$async34593.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34593.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34593.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34593.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34593.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34593.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34593.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34594","meta34594",-2134028756,null)], null);
});

cljs.core.async.t_cljs$core$async34593.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34593.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34593";

cljs.core.async.t_cljs$core$async34593.cljs$lang$ctorPrWriter = (function (this__9199__auto__,writer__9200__auto__,opt__9201__auto__){
return cljs.core._write.call(null,writer__9200__auto__,"cljs.core.async/t_cljs$core$async34593");
});

cljs.core.async.__GT_t_cljs$core$async34593 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34593(map_GT___$1,f__$1,ch__$1,meta34594){
return (new cljs.core.async.t_cljs$core$async34593(map_GT___$1,f__$1,ch__$1,meta34594));
});

}

return (new cljs.core.async.t_cljs$core$async34593(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34599 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34599 = (function (filter_GT_,p,ch,meta34600){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta34600 = meta34600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34601,meta34600__$1){
var self__ = this;
var _34601__$1 = this;
return (new cljs.core.async.t_cljs$core$async34599(self__.filter_GT_,self__.p,self__.ch,meta34600__$1));
});

cljs.core.async.t_cljs$core$async34599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34601){
var self__ = this;
var _34601__$1 = this;
return self__.meta34600;
});

cljs.core.async.t_cljs$core$async34599.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34599.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34599.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34599.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34599.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34599.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34599.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34599.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34600","meta34600",-1652511712,null)], null);
});

cljs.core.async.t_cljs$core$async34599.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34599.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34599";

cljs.core.async.t_cljs$core$async34599.cljs$lang$ctorPrWriter = (function (this__9199__auto__,writer__9200__auto__,opt__9201__auto__){
return cljs.core._write.call(null,writer__9200__auto__,"cljs.core.async/t_cljs$core$async34599");
});

cljs.core.async.__GT_t_cljs$core$async34599 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34599(filter_GT___$1,p__$1,ch__$1,meta34600){
return (new cljs.core.async.t_cljs$core$async34599(filter_GT___$1,p__$1,ch__$1,meta34600));
});

}

return (new cljs.core.async.t_cljs$core$async34599(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args34602 = [];
var len__9664__auto___34646 = arguments.length;
var i__9665__auto___34647 = (0);
while(true){
if((i__9665__auto___34647 < len__9664__auto___34646)){
args34602.push((arguments[i__9665__auto___34647]));

var G__34648 = (i__9665__auto___34647 + (1));
i__9665__auto___34647 = G__34648;
continue;
} else {
}
break;
}

var G__34604 = args34602.length;
switch (G__34604) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34602.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32348__auto___34650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32348__auto___34650,out){
return (function (){
var f__32349__auto__ = (function (){var switch__32236__auto__ = ((function (c__32348__auto___34650,out){
return (function (state_34625){
var state_val_34626 = (state_34625[(1)]);
if((state_val_34626 === (7))){
var inst_34621 = (state_34625[(2)]);
var state_34625__$1 = state_34625;
var statearr_34627_34651 = state_34625__$1;
(statearr_34627_34651[(2)] = inst_34621);

(statearr_34627_34651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34626 === (1))){
var state_34625__$1 = state_34625;
var statearr_34628_34652 = state_34625__$1;
(statearr_34628_34652[(2)] = null);

(statearr_34628_34652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34626 === (4))){
var inst_34607 = (state_34625[(7)]);
var inst_34607__$1 = (state_34625[(2)]);
var inst_34608 = (inst_34607__$1 == null);
var state_34625__$1 = (function (){var statearr_34629 = state_34625;
(statearr_34629[(7)] = inst_34607__$1);

return statearr_34629;
})();
if(cljs.core.truth_(inst_34608)){
var statearr_34630_34653 = state_34625__$1;
(statearr_34630_34653[(1)] = (5));

} else {
var statearr_34631_34654 = state_34625__$1;
(statearr_34631_34654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34626 === (6))){
var inst_34607 = (state_34625[(7)]);
var inst_34612 = p.call(null,inst_34607);
var state_34625__$1 = state_34625;
if(cljs.core.truth_(inst_34612)){
var statearr_34632_34655 = state_34625__$1;
(statearr_34632_34655[(1)] = (8));

} else {
var statearr_34633_34656 = state_34625__$1;
(statearr_34633_34656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34626 === (3))){
var inst_34623 = (state_34625[(2)]);
var state_34625__$1 = state_34625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34625__$1,inst_34623);
} else {
if((state_val_34626 === (2))){
var state_34625__$1 = state_34625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34625__$1,(4),ch);
} else {
if((state_val_34626 === (11))){
var inst_34615 = (state_34625[(2)]);
var state_34625__$1 = state_34625;
var statearr_34634_34657 = state_34625__$1;
(statearr_34634_34657[(2)] = inst_34615);

(statearr_34634_34657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34626 === (9))){
var state_34625__$1 = state_34625;
var statearr_34635_34658 = state_34625__$1;
(statearr_34635_34658[(2)] = null);

(statearr_34635_34658[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34626 === (5))){
var inst_34610 = cljs.core.async.close_BANG_.call(null,out);
var state_34625__$1 = state_34625;
var statearr_34636_34659 = state_34625__$1;
(statearr_34636_34659[(2)] = inst_34610);

(statearr_34636_34659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34626 === (10))){
var inst_34618 = (state_34625[(2)]);
var state_34625__$1 = (function (){var statearr_34637 = state_34625;
(statearr_34637[(8)] = inst_34618);

return statearr_34637;
})();
var statearr_34638_34660 = state_34625__$1;
(statearr_34638_34660[(2)] = null);

(statearr_34638_34660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34626 === (8))){
var inst_34607 = (state_34625[(7)]);
var state_34625__$1 = state_34625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34625__$1,(11),out,inst_34607);
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
});})(c__32348__auto___34650,out))
;
return ((function (switch__32236__auto__,c__32348__auto___34650,out){
return (function() {
var cljs$core$async$state_machine__32237__auto__ = null;
var cljs$core$async$state_machine__32237__auto____0 = (function (){
var statearr_34642 = [null,null,null,null,null,null,null,null,null];
(statearr_34642[(0)] = cljs$core$async$state_machine__32237__auto__);

(statearr_34642[(1)] = (1));

return statearr_34642;
});
var cljs$core$async$state_machine__32237__auto____1 = (function (state_34625){
while(true){
var ret_value__32238__auto__ = (function (){try{while(true){
var result__32239__auto__ = switch__32236__auto__.call(null,state_34625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32239__auto__;
}
break;
}
}catch (e34643){if((e34643 instanceof Object)){
var ex__32240__auto__ = e34643;
var statearr_34644_34661 = state_34625;
(statearr_34644_34661[(5)] = ex__32240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34662 = state_34625;
state_34625 = G__34662;
continue;
} else {
return ret_value__32238__auto__;
}
break;
}
});
cljs$core$async$state_machine__32237__auto__ = function(state_34625){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32237__auto____1.call(this,state_34625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32237__auto____0;
cljs$core$async$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32237__auto____1;
return cljs$core$async$state_machine__32237__auto__;
})()
;})(switch__32236__auto__,c__32348__auto___34650,out))
})();
var state__32350__auto__ = (function (){var statearr_34645 = f__32349__auto__.call(null);
(statearr_34645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32348__auto___34650);

return statearr_34645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32350__auto__);
});})(c__32348__auto___34650,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args34663 = [];
var len__9664__auto___34666 = arguments.length;
var i__9665__auto___34667 = (0);
while(true){
if((i__9665__auto___34667 < len__9664__auto___34666)){
args34663.push((arguments[i__9665__auto___34667]));

var G__34668 = (i__9665__auto___34667 + (1));
i__9665__auto___34667 = G__34668;
continue;
} else {
}
break;
}

var G__34665 = args34663.length;
switch (G__34665) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34663.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32348__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32348__auto__){
return (function (){
var f__32349__auto__ = (function (){var switch__32236__auto__ = ((function (c__32348__auto__){
return (function (state_34835){
var state_val_34836 = (state_34835[(1)]);
if((state_val_34836 === (7))){
var inst_34831 = (state_34835[(2)]);
var state_34835__$1 = state_34835;
var statearr_34837_34878 = state_34835__$1;
(statearr_34837_34878[(2)] = inst_34831);

(statearr_34837_34878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34836 === (20))){
var inst_34801 = (state_34835[(7)]);
var inst_34812 = (state_34835[(2)]);
var inst_34813 = cljs.core.next.call(null,inst_34801);
var inst_34787 = inst_34813;
var inst_34788 = null;
var inst_34789 = (0);
var inst_34790 = (0);
var state_34835__$1 = (function (){var statearr_34838 = state_34835;
(statearr_34838[(8)] = inst_34787);

(statearr_34838[(9)] = inst_34789);

(statearr_34838[(10)] = inst_34790);

(statearr_34838[(11)] = inst_34812);

(statearr_34838[(12)] = inst_34788);

return statearr_34838;
})();
var statearr_34839_34879 = state_34835__$1;
(statearr_34839_34879[(2)] = null);

(statearr_34839_34879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34836 === (1))){
var state_34835__$1 = state_34835;
var statearr_34840_34880 = state_34835__$1;
(statearr_34840_34880[(2)] = null);

(statearr_34840_34880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34836 === (4))){
var inst_34776 = (state_34835[(13)]);
var inst_34776__$1 = (state_34835[(2)]);
var inst_34777 = (inst_34776__$1 == null);
var state_34835__$1 = (function (){var statearr_34841 = state_34835;
(statearr_34841[(13)] = inst_34776__$1);

return statearr_34841;
})();
if(cljs.core.truth_(inst_34777)){
var statearr_34842_34881 = state_34835__$1;
(statearr_34842_34881[(1)] = (5));

} else {
var statearr_34843_34882 = state_34835__$1;
(statearr_34843_34882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34836 === (15))){
var state_34835__$1 = state_34835;
var statearr_34847_34883 = state_34835__$1;
(statearr_34847_34883[(2)] = null);

(statearr_34847_34883[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34836 === (21))){
var state_34835__$1 = state_34835;
var statearr_34848_34884 = state_34835__$1;
(statearr_34848_34884[(2)] = null);

(statearr_34848_34884[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34836 === (13))){
var inst_34787 = (state_34835[(8)]);
var inst_34789 = (state_34835[(9)]);
var inst_34790 = (state_34835[(10)]);
var inst_34788 = (state_34835[(12)]);
var inst_34797 = (state_34835[(2)]);
var inst_34798 = (inst_34790 + (1));
var tmp34844 = inst_34787;
var tmp34845 = inst_34789;
var tmp34846 = inst_34788;
var inst_34787__$1 = tmp34844;
var inst_34788__$1 = tmp34846;
var inst_34789__$1 = tmp34845;
var inst_34790__$1 = inst_34798;
var state_34835__$1 = (function (){var statearr_34849 = state_34835;
(statearr_34849[(8)] = inst_34787__$1);

(statearr_34849[(9)] = inst_34789__$1);

(statearr_34849[(14)] = inst_34797);

(statearr_34849[(10)] = inst_34790__$1);

(statearr_34849[(12)] = inst_34788__$1);

return statearr_34849;
})();
var statearr_34850_34885 = state_34835__$1;
(statearr_34850_34885[(2)] = null);

(statearr_34850_34885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34836 === (22))){
var state_34835__$1 = state_34835;
var statearr_34851_34886 = state_34835__$1;
(statearr_34851_34886[(2)] = null);

(statearr_34851_34886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34836 === (6))){
var inst_34776 = (state_34835[(13)]);
var inst_34785 = f.call(null,inst_34776);
var inst_34786 = cljs.core.seq.call(null,inst_34785);
var inst_34787 = inst_34786;
var inst_34788 = null;
var inst_34789 = (0);
var inst_34790 = (0);
var state_34835__$1 = (function (){var statearr_34852 = state_34835;
(statearr_34852[(8)] = inst_34787);

(statearr_34852[(9)] = inst_34789);

(statearr_34852[(10)] = inst_34790);

(statearr_34852[(12)] = inst_34788);

return statearr_34852;
})();
var statearr_34853_34887 = state_34835__$1;
(statearr_34853_34887[(2)] = null);

(statearr_34853_34887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34836 === (17))){
var inst_34801 = (state_34835[(7)]);
var inst_34805 = cljs.core.chunk_first.call(null,inst_34801);
var inst_34806 = cljs.core.chunk_rest.call(null,inst_34801);
var inst_34807 = cljs.core.count.call(null,inst_34805);
var inst_34787 = inst_34806;
var inst_34788 = inst_34805;
var inst_34789 = inst_34807;
var inst_34790 = (0);
var state_34835__$1 = (function (){var statearr_34854 = state_34835;
(statearr_34854[(8)] = inst_34787);

(statearr_34854[(9)] = inst_34789);

(statearr_34854[(10)] = inst_34790);

(statearr_34854[(12)] = inst_34788);

return statearr_34854;
})();
var statearr_34855_34888 = state_34835__$1;
(statearr_34855_34888[(2)] = null);

(statearr_34855_34888[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34836 === (3))){
var inst_34833 = (state_34835[(2)]);
var state_34835__$1 = state_34835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34835__$1,inst_34833);
} else {
if((state_val_34836 === (12))){
var inst_34821 = (state_34835[(2)]);
var state_34835__$1 = state_34835;
var statearr_34856_34889 = state_34835__$1;
(statearr_34856_34889[(2)] = inst_34821);

(statearr_34856_34889[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34836 === (2))){
var state_34835__$1 = state_34835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34835__$1,(4),in$);
} else {
if((state_val_34836 === (23))){
var inst_34829 = (state_34835[(2)]);
var state_34835__$1 = state_34835;
var statearr_34857_34890 = state_34835__$1;
(statearr_34857_34890[(2)] = inst_34829);

(statearr_34857_34890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34836 === (19))){
var inst_34816 = (state_34835[(2)]);
var state_34835__$1 = state_34835;
var statearr_34858_34891 = state_34835__$1;
(statearr_34858_34891[(2)] = inst_34816);

(statearr_34858_34891[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34836 === (11))){
var inst_34787 = (state_34835[(8)]);
var inst_34801 = (state_34835[(7)]);
var inst_34801__$1 = cljs.core.seq.call(null,inst_34787);
var state_34835__$1 = (function (){var statearr_34859 = state_34835;
(statearr_34859[(7)] = inst_34801__$1);

return statearr_34859;
})();
if(inst_34801__$1){
var statearr_34860_34892 = state_34835__$1;
(statearr_34860_34892[(1)] = (14));

} else {
var statearr_34861_34893 = state_34835__$1;
(statearr_34861_34893[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34836 === (9))){
var inst_34823 = (state_34835[(2)]);
var inst_34824 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34835__$1 = (function (){var statearr_34862 = state_34835;
(statearr_34862[(15)] = inst_34823);

return statearr_34862;
})();
if(cljs.core.truth_(inst_34824)){
var statearr_34863_34894 = state_34835__$1;
(statearr_34863_34894[(1)] = (21));

} else {
var statearr_34864_34895 = state_34835__$1;
(statearr_34864_34895[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34836 === (5))){
var inst_34779 = cljs.core.async.close_BANG_.call(null,out);
var state_34835__$1 = state_34835;
var statearr_34865_34896 = state_34835__$1;
(statearr_34865_34896[(2)] = inst_34779);

(statearr_34865_34896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34836 === (14))){
var inst_34801 = (state_34835[(7)]);
var inst_34803 = cljs.core.chunked_seq_QMARK_.call(null,inst_34801);
var state_34835__$1 = state_34835;
if(inst_34803){
var statearr_34866_34897 = state_34835__$1;
(statearr_34866_34897[(1)] = (17));

} else {
var statearr_34867_34898 = state_34835__$1;
(statearr_34867_34898[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34836 === (16))){
var inst_34819 = (state_34835[(2)]);
var state_34835__$1 = state_34835;
var statearr_34868_34899 = state_34835__$1;
(statearr_34868_34899[(2)] = inst_34819);

(statearr_34868_34899[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34836 === (10))){
var inst_34790 = (state_34835[(10)]);
var inst_34788 = (state_34835[(12)]);
var inst_34795 = cljs.core._nth.call(null,inst_34788,inst_34790);
var state_34835__$1 = state_34835;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34835__$1,(13),out,inst_34795);
} else {
if((state_val_34836 === (18))){
var inst_34801 = (state_34835[(7)]);
var inst_34810 = cljs.core.first.call(null,inst_34801);
var state_34835__$1 = state_34835;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34835__$1,(20),out,inst_34810);
} else {
if((state_val_34836 === (8))){
var inst_34789 = (state_34835[(9)]);
var inst_34790 = (state_34835[(10)]);
var inst_34792 = (inst_34790 < inst_34789);
var inst_34793 = inst_34792;
var state_34835__$1 = state_34835;
if(cljs.core.truth_(inst_34793)){
var statearr_34869_34900 = state_34835__$1;
(statearr_34869_34900[(1)] = (10));

} else {
var statearr_34870_34901 = state_34835__$1;
(statearr_34870_34901[(1)] = (11));

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
});})(c__32348__auto__))
;
return ((function (switch__32236__auto__,c__32348__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32237__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32237__auto____0 = (function (){
var statearr_34874 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34874[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32237__auto__);

(statearr_34874[(1)] = (1));

return statearr_34874;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32237__auto____1 = (function (state_34835){
while(true){
var ret_value__32238__auto__ = (function (){try{while(true){
var result__32239__auto__ = switch__32236__auto__.call(null,state_34835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32239__auto__;
}
break;
}
}catch (e34875){if((e34875 instanceof Object)){
var ex__32240__auto__ = e34875;
var statearr_34876_34902 = state_34835;
(statearr_34876_34902[(5)] = ex__32240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34903 = state_34835;
state_34835 = G__34903;
continue;
} else {
return ret_value__32238__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32237__auto__ = function(state_34835){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32237__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32237__auto____1.call(this,state_34835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32237__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32237__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32237__auto__;
})()
;})(switch__32236__auto__,c__32348__auto__))
})();
var state__32350__auto__ = (function (){var statearr_34877 = f__32349__auto__.call(null);
(statearr_34877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32348__auto__);

return statearr_34877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32350__auto__);
});})(c__32348__auto__))
);

return c__32348__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args34904 = [];
var len__9664__auto___34907 = arguments.length;
var i__9665__auto___34908 = (0);
while(true){
if((i__9665__auto___34908 < len__9664__auto___34907)){
args34904.push((arguments[i__9665__auto___34908]));

var G__34909 = (i__9665__auto___34908 + (1));
i__9665__auto___34908 = G__34909;
continue;
} else {
}
break;
}

var G__34906 = args34904.length;
switch (G__34906) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34904.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args34911 = [];
var len__9664__auto___34914 = arguments.length;
var i__9665__auto___34915 = (0);
while(true){
if((i__9665__auto___34915 < len__9664__auto___34914)){
args34911.push((arguments[i__9665__auto___34915]));

var G__34916 = (i__9665__auto___34915 + (1));
i__9665__auto___34915 = G__34916;
continue;
} else {
}
break;
}

var G__34913 = args34911.length;
switch (G__34913) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34911.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args34918 = [];
var len__9664__auto___34969 = arguments.length;
var i__9665__auto___34970 = (0);
while(true){
if((i__9665__auto___34970 < len__9664__auto___34969)){
args34918.push((arguments[i__9665__auto___34970]));

var G__34971 = (i__9665__auto___34970 + (1));
i__9665__auto___34970 = G__34971;
continue;
} else {
}
break;
}

var G__34920 = args34918.length;
switch (G__34920) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34918.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32348__auto___34973 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32348__auto___34973,out){
return (function (){
var f__32349__auto__ = (function (){var switch__32236__auto__ = ((function (c__32348__auto___34973,out){
return (function (state_34944){
var state_val_34945 = (state_34944[(1)]);
if((state_val_34945 === (7))){
var inst_34939 = (state_34944[(2)]);
var state_34944__$1 = state_34944;
var statearr_34946_34974 = state_34944__$1;
(statearr_34946_34974[(2)] = inst_34939);

(statearr_34946_34974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34945 === (1))){
var inst_34921 = null;
var state_34944__$1 = (function (){var statearr_34947 = state_34944;
(statearr_34947[(7)] = inst_34921);

return statearr_34947;
})();
var statearr_34948_34975 = state_34944__$1;
(statearr_34948_34975[(2)] = null);

(statearr_34948_34975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34945 === (4))){
var inst_34924 = (state_34944[(8)]);
var inst_34924__$1 = (state_34944[(2)]);
var inst_34925 = (inst_34924__$1 == null);
var inst_34926 = cljs.core.not.call(null,inst_34925);
var state_34944__$1 = (function (){var statearr_34949 = state_34944;
(statearr_34949[(8)] = inst_34924__$1);

return statearr_34949;
})();
if(inst_34926){
var statearr_34950_34976 = state_34944__$1;
(statearr_34950_34976[(1)] = (5));

} else {
var statearr_34951_34977 = state_34944__$1;
(statearr_34951_34977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34945 === (6))){
var state_34944__$1 = state_34944;
var statearr_34952_34978 = state_34944__$1;
(statearr_34952_34978[(2)] = null);

(statearr_34952_34978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34945 === (3))){
var inst_34941 = (state_34944[(2)]);
var inst_34942 = cljs.core.async.close_BANG_.call(null,out);
var state_34944__$1 = (function (){var statearr_34953 = state_34944;
(statearr_34953[(9)] = inst_34941);

return statearr_34953;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34944__$1,inst_34942);
} else {
if((state_val_34945 === (2))){
var state_34944__$1 = state_34944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34944__$1,(4),ch);
} else {
if((state_val_34945 === (11))){
var inst_34924 = (state_34944[(8)]);
var inst_34933 = (state_34944[(2)]);
var inst_34921 = inst_34924;
var state_34944__$1 = (function (){var statearr_34954 = state_34944;
(statearr_34954[(10)] = inst_34933);

(statearr_34954[(7)] = inst_34921);

return statearr_34954;
})();
var statearr_34955_34979 = state_34944__$1;
(statearr_34955_34979[(2)] = null);

(statearr_34955_34979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34945 === (9))){
var inst_34924 = (state_34944[(8)]);
var state_34944__$1 = state_34944;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34944__$1,(11),out,inst_34924);
} else {
if((state_val_34945 === (5))){
var inst_34924 = (state_34944[(8)]);
var inst_34921 = (state_34944[(7)]);
var inst_34928 = cljs.core._EQ_.call(null,inst_34924,inst_34921);
var state_34944__$1 = state_34944;
if(inst_34928){
var statearr_34957_34980 = state_34944__$1;
(statearr_34957_34980[(1)] = (8));

} else {
var statearr_34958_34981 = state_34944__$1;
(statearr_34958_34981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34945 === (10))){
var inst_34936 = (state_34944[(2)]);
var state_34944__$1 = state_34944;
var statearr_34959_34982 = state_34944__$1;
(statearr_34959_34982[(2)] = inst_34936);

(statearr_34959_34982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34945 === (8))){
var inst_34921 = (state_34944[(7)]);
var tmp34956 = inst_34921;
var inst_34921__$1 = tmp34956;
var state_34944__$1 = (function (){var statearr_34960 = state_34944;
(statearr_34960[(7)] = inst_34921__$1);

return statearr_34960;
})();
var statearr_34961_34983 = state_34944__$1;
(statearr_34961_34983[(2)] = null);

(statearr_34961_34983[(1)] = (2));


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
});})(c__32348__auto___34973,out))
;
return ((function (switch__32236__auto__,c__32348__auto___34973,out){
return (function() {
var cljs$core$async$state_machine__32237__auto__ = null;
var cljs$core$async$state_machine__32237__auto____0 = (function (){
var statearr_34965 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34965[(0)] = cljs$core$async$state_machine__32237__auto__);

(statearr_34965[(1)] = (1));

return statearr_34965;
});
var cljs$core$async$state_machine__32237__auto____1 = (function (state_34944){
while(true){
var ret_value__32238__auto__ = (function (){try{while(true){
var result__32239__auto__ = switch__32236__auto__.call(null,state_34944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32239__auto__;
}
break;
}
}catch (e34966){if((e34966 instanceof Object)){
var ex__32240__auto__ = e34966;
var statearr_34967_34984 = state_34944;
(statearr_34967_34984[(5)] = ex__32240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34985 = state_34944;
state_34944 = G__34985;
continue;
} else {
return ret_value__32238__auto__;
}
break;
}
});
cljs$core$async$state_machine__32237__auto__ = function(state_34944){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32237__auto____1.call(this,state_34944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32237__auto____0;
cljs$core$async$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32237__auto____1;
return cljs$core$async$state_machine__32237__auto__;
})()
;})(switch__32236__auto__,c__32348__auto___34973,out))
})();
var state__32350__auto__ = (function (){var statearr_34968 = f__32349__auto__.call(null);
(statearr_34968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32348__auto___34973);

return statearr_34968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32350__auto__);
});})(c__32348__auto___34973,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args34986 = [];
var len__9664__auto___35056 = arguments.length;
var i__9665__auto___35057 = (0);
while(true){
if((i__9665__auto___35057 < len__9664__auto___35056)){
args34986.push((arguments[i__9665__auto___35057]));

var G__35058 = (i__9665__auto___35057 + (1));
i__9665__auto___35057 = G__35058;
continue;
} else {
}
break;
}

var G__34988 = args34986.length;
switch (G__34988) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34986.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32348__auto___35060 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32348__auto___35060,out){
return (function (){
var f__32349__auto__ = (function (){var switch__32236__auto__ = ((function (c__32348__auto___35060,out){
return (function (state_35026){
var state_val_35027 = (state_35026[(1)]);
if((state_val_35027 === (7))){
var inst_35022 = (state_35026[(2)]);
var state_35026__$1 = state_35026;
var statearr_35028_35061 = state_35026__$1;
(statearr_35028_35061[(2)] = inst_35022);

(statearr_35028_35061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (1))){
var inst_34989 = (new Array(n));
var inst_34990 = inst_34989;
var inst_34991 = (0);
var state_35026__$1 = (function (){var statearr_35029 = state_35026;
(statearr_35029[(7)] = inst_34990);

(statearr_35029[(8)] = inst_34991);

return statearr_35029;
})();
var statearr_35030_35062 = state_35026__$1;
(statearr_35030_35062[(2)] = null);

(statearr_35030_35062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (4))){
var inst_34994 = (state_35026[(9)]);
var inst_34994__$1 = (state_35026[(2)]);
var inst_34995 = (inst_34994__$1 == null);
var inst_34996 = cljs.core.not.call(null,inst_34995);
var state_35026__$1 = (function (){var statearr_35031 = state_35026;
(statearr_35031[(9)] = inst_34994__$1);

return statearr_35031;
})();
if(inst_34996){
var statearr_35032_35063 = state_35026__$1;
(statearr_35032_35063[(1)] = (5));

} else {
var statearr_35033_35064 = state_35026__$1;
(statearr_35033_35064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (15))){
var inst_35016 = (state_35026[(2)]);
var state_35026__$1 = state_35026;
var statearr_35034_35065 = state_35026__$1;
(statearr_35034_35065[(2)] = inst_35016);

(statearr_35034_35065[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (13))){
var state_35026__$1 = state_35026;
var statearr_35035_35066 = state_35026__$1;
(statearr_35035_35066[(2)] = null);

(statearr_35035_35066[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (6))){
var inst_34991 = (state_35026[(8)]);
var inst_35012 = (inst_34991 > (0));
var state_35026__$1 = state_35026;
if(cljs.core.truth_(inst_35012)){
var statearr_35036_35067 = state_35026__$1;
(statearr_35036_35067[(1)] = (12));

} else {
var statearr_35037_35068 = state_35026__$1;
(statearr_35037_35068[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (3))){
var inst_35024 = (state_35026[(2)]);
var state_35026__$1 = state_35026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35026__$1,inst_35024);
} else {
if((state_val_35027 === (12))){
var inst_34990 = (state_35026[(7)]);
var inst_35014 = cljs.core.vec.call(null,inst_34990);
var state_35026__$1 = state_35026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35026__$1,(15),out,inst_35014);
} else {
if((state_val_35027 === (2))){
var state_35026__$1 = state_35026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35026__$1,(4),ch);
} else {
if((state_val_35027 === (11))){
var inst_35006 = (state_35026[(2)]);
var inst_35007 = (new Array(n));
var inst_34990 = inst_35007;
var inst_34991 = (0);
var state_35026__$1 = (function (){var statearr_35038 = state_35026;
(statearr_35038[(7)] = inst_34990);

(statearr_35038[(8)] = inst_34991);

(statearr_35038[(10)] = inst_35006);

return statearr_35038;
})();
var statearr_35039_35069 = state_35026__$1;
(statearr_35039_35069[(2)] = null);

(statearr_35039_35069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (9))){
var inst_34990 = (state_35026[(7)]);
var inst_35004 = cljs.core.vec.call(null,inst_34990);
var state_35026__$1 = state_35026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35026__$1,(11),out,inst_35004);
} else {
if((state_val_35027 === (5))){
var inst_34999 = (state_35026[(11)]);
var inst_34990 = (state_35026[(7)]);
var inst_34991 = (state_35026[(8)]);
var inst_34994 = (state_35026[(9)]);
var inst_34998 = (inst_34990[inst_34991] = inst_34994);
var inst_34999__$1 = (inst_34991 + (1));
var inst_35000 = (inst_34999__$1 < n);
var state_35026__$1 = (function (){var statearr_35040 = state_35026;
(statearr_35040[(11)] = inst_34999__$1);

(statearr_35040[(12)] = inst_34998);

return statearr_35040;
})();
if(cljs.core.truth_(inst_35000)){
var statearr_35041_35070 = state_35026__$1;
(statearr_35041_35070[(1)] = (8));

} else {
var statearr_35042_35071 = state_35026__$1;
(statearr_35042_35071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (14))){
var inst_35019 = (state_35026[(2)]);
var inst_35020 = cljs.core.async.close_BANG_.call(null,out);
var state_35026__$1 = (function (){var statearr_35044 = state_35026;
(statearr_35044[(13)] = inst_35019);

return statearr_35044;
})();
var statearr_35045_35072 = state_35026__$1;
(statearr_35045_35072[(2)] = inst_35020);

(statearr_35045_35072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (10))){
var inst_35010 = (state_35026[(2)]);
var state_35026__$1 = state_35026;
var statearr_35046_35073 = state_35026__$1;
(statearr_35046_35073[(2)] = inst_35010);

(statearr_35046_35073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (8))){
var inst_34999 = (state_35026[(11)]);
var inst_34990 = (state_35026[(7)]);
var tmp35043 = inst_34990;
var inst_34990__$1 = tmp35043;
var inst_34991 = inst_34999;
var state_35026__$1 = (function (){var statearr_35047 = state_35026;
(statearr_35047[(7)] = inst_34990__$1);

(statearr_35047[(8)] = inst_34991);

return statearr_35047;
})();
var statearr_35048_35074 = state_35026__$1;
(statearr_35048_35074[(2)] = null);

(statearr_35048_35074[(1)] = (2));


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
});})(c__32348__auto___35060,out))
;
return ((function (switch__32236__auto__,c__32348__auto___35060,out){
return (function() {
var cljs$core$async$state_machine__32237__auto__ = null;
var cljs$core$async$state_machine__32237__auto____0 = (function (){
var statearr_35052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35052[(0)] = cljs$core$async$state_machine__32237__auto__);

(statearr_35052[(1)] = (1));

return statearr_35052;
});
var cljs$core$async$state_machine__32237__auto____1 = (function (state_35026){
while(true){
var ret_value__32238__auto__ = (function (){try{while(true){
var result__32239__auto__ = switch__32236__auto__.call(null,state_35026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32239__auto__;
}
break;
}
}catch (e35053){if((e35053 instanceof Object)){
var ex__32240__auto__ = e35053;
var statearr_35054_35075 = state_35026;
(statearr_35054_35075[(5)] = ex__32240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35076 = state_35026;
state_35026 = G__35076;
continue;
} else {
return ret_value__32238__auto__;
}
break;
}
});
cljs$core$async$state_machine__32237__auto__ = function(state_35026){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32237__auto____1.call(this,state_35026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32237__auto____0;
cljs$core$async$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32237__auto____1;
return cljs$core$async$state_machine__32237__auto__;
})()
;})(switch__32236__auto__,c__32348__auto___35060,out))
})();
var state__32350__auto__ = (function (){var statearr_35055 = f__32349__auto__.call(null);
(statearr_35055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32348__auto___35060);

return statearr_35055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32350__auto__);
});})(c__32348__auto___35060,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args35077 = [];
var len__9664__auto___35151 = arguments.length;
var i__9665__auto___35152 = (0);
while(true){
if((i__9665__auto___35152 < len__9664__auto___35151)){
args35077.push((arguments[i__9665__auto___35152]));

var G__35153 = (i__9665__auto___35152 + (1));
i__9665__auto___35152 = G__35153;
continue;
} else {
}
break;
}

var G__35079 = args35077.length;
switch (G__35079) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35077.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32348__auto___35155 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32348__auto___35155,out){
return (function (){
var f__32349__auto__ = (function (){var switch__32236__auto__ = ((function (c__32348__auto___35155,out){
return (function (state_35121){
var state_val_35122 = (state_35121[(1)]);
if((state_val_35122 === (7))){
var inst_35117 = (state_35121[(2)]);
var state_35121__$1 = state_35121;
var statearr_35123_35156 = state_35121__$1;
(statearr_35123_35156[(2)] = inst_35117);

(statearr_35123_35156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35122 === (1))){
var inst_35080 = [];
var inst_35081 = inst_35080;
var inst_35082 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35121__$1 = (function (){var statearr_35124 = state_35121;
(statearr_35124[(7)] = inst_35081);

(statearr_35124[(8)] = inst_35082);

return statearr_35124;
})();
var statearr_35125_35157 = state_35121__$1;
(statearr_35125_35157[(2)] = null);

(statearr_35125_35157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35122 === (4))){
var inst_35085 = (state_35121[(9)]);
var inst_35085__$1 = (state_35121[(2)]);
var inst_35086 = (inst_35085__$1 == null);
var inst_35087 = cljs.core.not.call(null,inst_35086);
var state_35121__$1 = (function (){var statearr_35126 = state_35121;
(statearr_35126[(9)] = inst_35085__$1);

return statearr_35126;
})();
if(inst_35087){
var statearr_35127_35158 = state_35121__$1;
(statearr_35127_35158[(1)] = (5));

} else {
var statearr_35128_35159 = state_35121__$1;
(statearr_35128_35159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35122 === (15))){
var inst_35111 = (state_35121[(2)]);
var state_35121__$1 = state_35121;
var statearr_35129_35160 = state_35121__$1;
(statearr_35129_35160[(2)] = inst_35111);

(statearr_35129_35160[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35122 === (13))){
var state_35121__$1 = state_35121;
var statearr_35130_35161 = state_35121__$1;
(statearr_35130_35161[(2)] = null);

(statearr_35130_35161[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35122 === (6))){
var inst_35081 = (state_35121[(7)]);
var inst_35106 = inst_35081.length;
var inst_35107 = (inst_35106 > (0));
var state_35121__$1 = state_35121;
if(cljs.core.truth_(inst_35107)){
var statearr_35131_35162 = state_35121__$1;
(statearr_35131_35162[(1)] = (12));

} else {
var statearr_35132_35163 = state_35121__$1;
(statearr_35132_35163[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35122 === (3))){
var inst_35119 = (state_35121[(2)]);
var state_35121__$1 = state_35121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35121__$1,inst_35119);
} else {
if((state_val_35122 === (12))){
var inst_35081 = (state_35121[(7)]);
var inst_35109 = cljs.core.vec.call(null,inst_35081);
var state_35121__$1 = state_35121;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35121__$1,(15),out,inst_35109);
} else {
if((state_val_35122 === (2))){
var state_35121__$1 = state_35121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35121__$1,(4),ch);
} else {
if((state_val_35122 === (11))){
var inst_35085 = (state_35121[(9)]);
var inst_35089 = (state_35121[(10)]);
var inst_35099 = (state_35121[(2)]);
var inst_35100 = [];
var inst_35101 = inst_35100.push(inst_35085);
var inst_35081 = inst_35100;
var inst_35082 = inst_35089;
var state_35121__$1 = (function (){var statearr_35133 = state_35121;
(statearr_35133[(7)] = inst_35081);

(statearr_35133[(11)] = inst_35101);

(statearr_35133[(12)] = inst_35099);

(statearr_35133[(8)] = inst_35082);

return statearr_35133;
})();
var statearr_35134_35164 = state_35121__$1;
(statearr_35134_35164[(2)] = null);

(statearr_35134_35164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35122 === (9))){
var inst_35081 = (state_35121[(7)]);
var inst_35097 = cljs.core.vec.call(null,inst_35081);
var state_35121__$1 = state_35121;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35121__$1,(11),out,inst_35097);
} else {
if((state_val_35122 === (5))){
var inst_35085 = (state_35121[(9)]);
var inst_35089 = (state_35121[(10)]);
var inst_35082 = (state_35121[(8)]);
var inst_35089__$1 = f.call(null,inst_35085);
var inst_35090 = cljs.core._EQ_.call(null,inst_35089__$1,inst_35082);
var inst_35091 = cljs.core.keyword_identical_QMARK_.call(null,inst_35082,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35092 = (inst_35090) || (inst_35091);
var state_35121__$1 = (function (){var statearr_35135 = state_35121;
(statearr_35135[(10)] = inst_35089__$1);

return statearr_35135;
})();
if(cljs.core.truth_(inst_35092)){
var statearr_35136_35165 = state_35121__$1;
(statearr_35136_35165[(1)] = (8));

} else {
var statearr_35137_35166 = state_35121__$1;
(statearr_35137_35166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35122 === (14))){
var inst_35114 = (state_35121[(2)]);
var inst_35115 = cljs.core.async.close_BANG_.call(null,out);
var state_35121__$1 = (function (){var statearr_35139 = state_35121;
(statearr_35139[(13)] = inst_35114);

return statearr_35139;
})();
var statearr_35140_35167 = state_35121__$1;
(statearr_35140_35167[(2)] = inst_35115);

(statearr_35140_35167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35122 === (10))){
var inst_35104 = (state_35121[(2)]);
var state_35121__$1 = state_35121;
var statearr_35141_35168 = state_35121__$1;
(statearr_35141_35168[(2)] = inst_35104);

(statearr_35141_35168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35122 === (8))){
var inst_35081 = (state_35121[(7)]);
var inst_35085 = (state_35121[(9)]);
var inst_35089 = (state_35121[(10)]);
var inst_35094 = inst_35081.push(inst_35085);
var tmp35138 = inst_35081;
var inst_35081__$1 = tmp35138;
var inst_35082 = inst_35089;
var state_35121__$1 = (function (){var statearr_35142 = state_35121;
(statearr_35142[(7)] = inst_35081__$1);

(statearr_35142[(14)] = inst_35094);

(statearr_35142[(8)] = inst_35082);

return statearr_35142;
})();
var statearr_35143_35169 = state_35121__$1;
(statearr_35143_35169[(2)] = null);

(statearr_35143_35169[(1)] = (2));


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
});})(c__32348__auto___35155,out))
;
return ((function (switch__32236__auto__,c__32348__auto___35155,out){
return (function() {
var cljs$core$async$state_machine__32237__auto__ = null;
var cljs$core$async$state_machine__32237__auto____0 = (function (){
var statearr_35147 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35147[(0)] = cljs$core$async$state_machine__32237__auto__);

(statearr_35147[(1)] = (1));

return statearr_35147;
});
var cljs$core$async$state_machine__32237__auto____1 = (function (state_35121){
while(true){
var ret_value__32238__auto__ = (function (){try{while(true){
var result__32239__auto__ = switch__32236__auto__.call(null,state_35121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32239__auto__;
}
break;
}
}catch (e35148){if((e35148 instanceof Object)){
var ex__32240__auto__ = e35148;
var statearr_35149_35170 = state_35121;
(statearr_35149_35170[(5)] = ex__32240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35171 = state_35121;
state_35121 = G__35171;
continue;
} else {
return ret_value__32238__auto__;
}
break;
}
});
cljs$core$async$state_machine__32237__auto__ = function(state_35121){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32237__auto____1.call(this,state_35121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32237__auto____0;
cljs$core$async$state_machine__32237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32237__auto____1;
return cljs$core$async$state_machine__32237__auto__;
})()
;})(switch__32236__auto__,c__32348__auto___35155,out))
})();
var state__32350__auto__ = (function (){var statearr_35150 = f__32349__auto__.call(null);
(statearr_35150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32348__auto___35155);

return statearr_35150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32350__auto__);
});})(c__32348__auto___35155,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map