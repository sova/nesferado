// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args34238 = [];
var len__7454__auto___34244 = arguments.length;
var i__7455__auto___34245 = (0);
while(true){
if((i__7455__auto___34245 < len__7454__auto___34244)){
args34238.push((arguments[i__7455__auto___34245]));

var G__34246 = (i__7455__auto___34245 + (1));
i__7455__auto___34245 = G__34246;
continue;
} else {
}
break;
}

var G__34240 = args34238.length;
switch (G__34240) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34238.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async34241 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34241 = (function (f,blockable,meta34242){
this.f = f;
this.blockable = blockable;
this.meta34242 = meta34242;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34243,meta34242__$1){
var self__ = this;
var _34243__$1 = this;
return (new cljs.core.async.t_cljs$core$async34241(self__.f,self__.blockable,meta34242__$1));
});

cljs.core.async.t_cljs$core$async34241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34243){
var self__ = this;
var _34243__$1 = this;
return self__.meta34242;
});

cljs.core.async.t_cljs$core$async34241.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34241.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34241.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34241.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34241.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta34242], null);
});

cljs.core.async.t_cljs$core$async34241.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34241.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34241";

cljs.core.async.t_cljs$core$async34241.cljs$lang$ctorPrWriter = (function (this__6989__auto__,writer__6990__auto__,opt__6991__auto__){
return cljs.core._write(writer__6990__auto__,"cljs.core.async/t_cljs$core$async34241");
});

cljs.core.async.__GT_t_cljs$core$async34241 = (function cljs$core$async$__GT_t_cljs$core$async34241(f__$1,blockable__$1,meta34242){
return (new cljs.core.async.t_cljs$core$async34241(f__$1,blockable__$1,meta34242));
});

}

return (new cljs.core.async.t_cljs$core$async34241(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args34250 = [];
var len__7454__auto___34253 = arguments.length;
var i__7455__auto___34254 = (0);
while(true){
if((i__7455__auto___34254 < len__7454__auto___34253)){
args34250.push((arguments[i__7455__auto___34254]));

var G__34255 = (i__7455__auto___34254 + (1));
i__7455__auto___34254 = G__34255;
continue;
} else {
}
break;
}

var G__34252 = args34250.length;
switch (G__34252) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34250.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var args34257 = [];
var len__7454__auto___34260 = arguments.length;
var i__7455__auto___34261 = (0);
while(true){
if((i__7455__auto___34261 < len__7454__auto___34260)){
args34257.push((arguments[i__7455__auto___34261]));

var G__34262 = (i__7455__auto___34261 + (1));
i__7455__auto___34261 = G__34262;
continue;
} else {
}
break;
}

var G__34259 = args34257.length;
switch (G__34259) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34257.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var args34264 = [];
var len__7454__auto___34267 = arguments.length;
var i__7455__auto___34268 = (0);
while(true){
if((i__7455__auto___34268 < len__7454__auto___34267)){
args34264.push((arguments[i__7455__auto___34268]));

var G__34269 = (i__7455__auto___34268 + (1));
i__7455__auto___34268 = G__34269;
continue;
} else {
}
break;
}

var G__34266 = args34264.length;
switch (G__34266) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34264.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34271 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34271) : fn1.call(null,val_34271));
} else {
cljs.core.async.impl.dispatch.run(((function (val_34271,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34271) : fn1.call(null,val_34271));
});})(val_34271,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var args34272 = [];
var len__7454__auto___34275 = arguments.length;
var i__7455__auto___34276 = (0);
while(true){
if((i__7455__auto___34276 < len__7454__auto___34275)){
args34272.push((arguments[i__7455__auto___34276]));

var G__34277 = (i__7455__auto___34276 + (1));
i__7455__auto___34276 = G__34277;
continue;
} else {
}
break;
}

var G__34274 = args34272.length;
switch (G__34274) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34272.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
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
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7298__auto___34279 = n;
var x_34280 = (0);
while(true){
if((x_34280 < n__7298__auto___34279)){
(a[x_34280] = (0));

var G__34281 = (x_34280 + (1));
x_34280 = G__34281;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__34282 = (i + (1));
i = G__34282;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async34286 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34286 = (function (alt_flag,flag,meta34287){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta34287 = meta34287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34288,meta34287__$1){
var self__ = this;
var _34288__$1 = this;
return (new cljs.core.async.t_cljs$core$async34286(self__.alt_flag,self__.flag,meta34287__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34286.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34288){
var self__ = this;
var _34288__$1 = this;
return self__.meta34287;
});})(flag))
;

cljs.core.async.t_cljs$core$async34286.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34286.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async34286.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34286.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34286.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta34287], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34286.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34286.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34286";

cljs.core.async.t_cljs$core$async34286.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6989__auto__,writer__6990__auto__,opt__6991__auto__){
return cljs.core._write(writer__6990__auto__,"cljs.core.async/t_cljs$core$async34286");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async34286 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34286(alt_flag__$1,flag__$1,meta34287){
return (new cljs.core.async.t_cljs$core$async34286(alt_flag__$1,flag__$1,meta34287));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34286(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34292 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34292 = (function (alt_handler,flag,cb,meta34293){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta34293 = meta34293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34294,meta34293__$1){
var self__ = this;
var _34294__$1 = this;
return (new cljs.core.async.t_cljs$core$async34292(self__.alt_handler,self__.flag,self__.cb,meta34293__$1));
});

cljs.core.async.t_cljs$core$async34292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34294){
var self__ = this;
var _34294__$1 = this;
return self__.meta34293;
});

cljs.core.async.t_cljs$core$async34292.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34292.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async34292.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34292.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta34293], null);
});

cljs.core.async.t_cljs$core$async34292.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34292";

cljs.core.async.t_cljs$core$async34292.cljs$lang$ctorPrWriter = (function (this__6989__auto__,writer__6990__auto__,opt__6991__auto__){
return cljs.core._write(writer__6990__auto__,"cljs.core.async/t_cljs$core$async34292");
});

cljs.core.async.__GT_t_cljs$core$async34292 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34292(alt_handler__$1,flag__$1,cb__$1,meta34293){
return (new cljs.core.async.t_cljs$core$async34292(alt_handler__$1,flag__$1,cb__$1,meta34293));
});

}

return (new cljs.core.async.t_cljs$core$async34292(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34295_SHARP_){
var G__34299 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34295_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34299) : fret.call(null,G__34299));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34296_SHARP_){
var G__34300 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34296_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34300) : fret.call(null,G__34300));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__6383__auto__ = wport;
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34301 = (i + (1));
i = G__34301;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6383__auto__ = ret;
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__6371__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__6371__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__6371__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var args__7461__auto__ = [];
var len__7454__auto___34307 = arguments.length;
var i__7455__auto___34308 = (0);
while(true){
if((i__7455__auto___34308 < len__7454__auto___34307)){
args__7461__auto__.push((arguments[i__7455__auto___34308]));

var G__34309 = (i__7455__auto___34308 + (1));
i__7455__auto___34308 = G__34309;
continue;
} else {
}
break;
}

var argseq__7462__auto__ = ((((1) < args__7461__auto__.length))?(new cljs.core.IndexedSeq(args__7461__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7462__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34304){
var map__34305 = p__34304;
var map__34305__$1 = ((((!((map__34305 == null)))?((((map__34305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34305):map__34305);
var opts = map__34305__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34302){
var G__34303 = cljs.core.first(seq34302);
var seq34302__$1 = cljs.core.next(seq34302);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34303,seq34302__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
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
var args34310 = [];
var len__7454__auto___34360 = arguments.length;
var i__7455__auto___34361 = (0);
while(true){
if((i__7455__auto___34361 < len__7454__auto___34360)){
args34310.push((arguments[i__7455__auto___34361]));

var G__34362 = (i__7455__auto___34361 + (1));
i__7455__auto___34361 = G__34362;
continue;
} else {
}
break;
}

var G__34312 = args34310.length;
switch (G__34312) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34310.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34193__auto___34364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34193__auto___34364){
return (function (){
var f__34194__auto__ = (function (){var switch__34069__auto__ = ((function (c__34193__auto___34364){
return (function (state_34336){
var state_val_34337 = (state_34336[(1)]);
if((state_val_34337 === (7))){
var inst_34332 = (state_34336[(2)]);
var state_34336__$1 = state_34336;
var statearr_34338_34365 = state_34336__$1;
(statearr_34338_34365[(2)] = inst_34332);

(statearr_34338_34365[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34337 === (1))){
var state_34336__$1 = state_34336;
var statearr_34339_34366 = state_34336__$1;
(statearr_34339_34366[(2)] = null);

(statearr_34339_34366[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34337 === (4))){
var inst_34315 = (state_34336[(7)]);
var inst_34315__$1 = (state_34336[(2)]);
var inst_34316 = (inst_34315__$1 == null);
var state_34336__$1 = (function (){var statearr_34340 = state_34336;
(statearr_34340[(7)] = inst_34315__$1);

return statearr_34340;
})();
if(cljs.core.truth_(inst_34316)){
var statearr_34341_34367 = state_34336__$1;
(statearr_34341_34367[(1)] = (5));

} else {
var statearr_34342_34368 = state_34336__$1;
(statearr_34342_34368[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34337 === (13))){
var state_34336__$1 = state_34336;
var statearr_34343_34369 = state_34336__$1;
(statearr_34343_34369[(2)] = null);

(statearr_34343_34369[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34337 === (6))){
var inst_34315 = (state_34336[(7)]);
var state_34336__$1 = state_34336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34336__$1,(11),to,inst_34315);
} else {
if((state_val_34337 === (3))){
var inst_34334 = (state_34336[(2)]);
var state_34336__$1 = state_34336;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34336__$1,inst_34334);
} else {
if((state_val_34337 === (12))){
var state_34336__$1 = state_34336;
var statearr_34344_34370 = state_34336__$1;
(statearr_34344_34370[(2)] = null);

(statearr_34344_34370[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34337 === (2))){
var state_34336__$1 = state_34336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34336__$1,(4),from);
} else {
if((state_val_34337 === (11))){
var inst_34325 = (state_34336[(2)]);
var state_34336__$1 = state_34336;
if(cljs.core.truth_(inst_34325)){
var statearr_34345_34371 = state_34336__$1;
(statearr_34345_34371[(1)] = (12));

} else {
var statearr_34346_34372 = state_34336__$1;
(statearr_34346_34372[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34337 === (9))){
var state_34336__$1 = state_34336;
var statearr_34347_34373 = state_34336__$1;
(statearr_34347_34373[(2)] = null);

(statearr_34347_34373[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34337 === (5))){
var state_34336__$1 = state_34336;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34348_34374 = state_34336__$1;
(statearr_34348_34374[(1)] = (8));

} else {
var statearr_34349_34375 = state_34336__$1;
(statearr_34349_34375[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34337 === (14))){
var inst_34330 = (state_34336[(2)]);
var state_34336__$1 = state_34336;
var statearr_34350_34376 = state_34336__$1;
(statearr_34350_34376[(2)] = inst_34330);

(statearr_34350_34376[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34337 === (10))){
var inst_34322 = (state_34336[(2)]);
var state_34336__$1 = state_34336;
var statearr_34351_34377 = state_34336__$1;
(statearr_34351_34377[(2)] = inst_34322);

(statearr_34351_34377[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34337 === (8))){
var inst_34319 = cljs.core.async.close_BANG_(to);
var state_34336__$1 = state_34336;
var statearr_34352_34378 = state_34336__$1;
(statearr_34352_34378[(2)] = inst_34319);

(statearr_34352_34378[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__34193__auto___34364))
;
return ((function (switch__34069__auto__,c__34193__auto___34364){
return (function() {
var cljs$core$async$state_machine__34070__auto__ = null;
var cljs$core$async$state_machine__34070__auto____0 = (function (){
var statearr_34356 = [null,null,null,null,null,null,null,null];
(statearr_34356[(0)] = cljs$core$async$state_machine__34070__auto__);

(statearr_34356[(1)] = (1));

return statearr_34356;
});
var cljs$core$async$state_machine__34070__auto____1 = (function (state_34336){
while(true){
var ret_value__34071__auto__ = (function (){try{while(true){
var result__34072__auto__ = switch__34069__auto__(state_34336);
if(cljs.core.keyword_identical_QMARK_(result__34072__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34072__auto__;
}
break;
}
}catch (e34357){if((e34357 instanceof Object)){
var ex__34073__auto__ = e34357;
var statearr_34358_34379 = state_34336;
(statearr_34358_34379[(5)] = ex__34073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34336);

return cljs.core.cst$kw$recur;
} else {
throw e34357;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34071__auto__,cljs.core.cst$kw$recur)){
var G__34380 = state_34336;
state_34336 = G__34380;
continue;
} else {
return ret_value__34071__auto__;
}
break;
}
});
cljs$core$async$state_machine__34070__auto__ = function(state_34336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34070__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34070__auto____1.call(this,state_34336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34070__auto____0;
cljs$core$async$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34070__auto____1;
return cljs$core$async$state_machine__34070__auto__;
})()
;})(switch__34069__auto__,c__34193__auto___34364))
})();
var state__34195__auto__ = (function (){var statearr_34359 = (f__34194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34194__auto__.cljs$core$IFn$_invoke$arity$0() : f__34194__auto__.call(null));
(statearr_34359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34193__auto___34364);

return statearr_34359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34195__auto__);
});})(c__34193__auto___34364))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__34568){
var vec__34569 = p__34568;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34569,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34569,(1),null);
var job = vec__34569;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34193__auto___34755 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34193__auto___34755,res,vec__34569,v,p,job,jobs,results){
return (function (){
var f__34194__auto__ = (function (){var switch__34069__auto__ = ((function (c__34193__auto___34755,res,vec__34569,v,p,job,jobs,results){
return (function (state_34576){
var state_val_34577 = (state_34576[(1)]);
if((state_val_34577 === (1))){
var state_34576__$1 = state_34576;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34576__$1,(2),res,v);
} else {
if((state_val_34577 === (2))){
var inst_34573 = (state_34576[(2)]);
var inst_34574 = cljs.core.async.close_BANG_(res);
var state_34576__$1 = (function (){var statearr_34578 = state_34576;
(statearr_34578[(7)] = inst_34573);

return statearr_34578;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34576__$1,inst_34574);
} else {
return null;
}
}
});})(c__34193__auto___34755,res,vec__34569,v,p,job,jobs,results))
;
return ((function (switch__34069__auto__,c__34193__auto___34755,res,vec__34569,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34070__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34070__auto____0 = (function (){
var statearr_34582 = [null,null,null,null,null,null,null,null];
(statearr_34582[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34070__auto__);

(statearr_34582[(1)] = (1));

return statearr_34582;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34070__auto____1 = (function (state_34576){
while(true){
var ret_value__34071__auto__ = (function (){try{while(true){
var result__34072__auto__ = switch__34069__auto__(state_34576);
if(cljs.core.keyword_identical_QMARK_(result__34072__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34072__auto__;
}
break;
}
}catch (e34583){if((e34583 instanceof Object)){
var ex__34073__auto__ = e34583;
var statearr_34584_34756 = state_34576;
(statearr_34584_34756[(5)] = ex__34073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34576);

return cljs.core.cst$kw$recur;
} else {
throw e34583;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34071__auto__,cljs.core.cst$kw$recur)){
var G__34757 = state_34576;
state_34576 = G__34757;
continue;
} else {
return ret_value__34071__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34070__auto__ = function(state_34576){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34070__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34070__auto____1.call(this,state_34576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34070__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34070__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34070__auto__;
})()
;})(switch__34069__auto__,c__34193__auto___34755,res,vec__34569,v,p,job,jobs,results))
})();
var state__34195__auto__ = (function (){var statearr_34585 = (f__34194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34194__auto__.cljs$core$IFn$_invoke$arity$0() : f__34194__auto__.call(null));
(statearr_34585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34193__auto___34755);

return statearr_34585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34195__auto__);
});})(c__34193__auto___34755,res,vec__34569,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34586){
var vec__34587 = p__34586;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34587,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34587,(1),null);
var job = vec__34587;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__7298__auto___34758 = n;
var __34759 = (0);
while(true){
if((__34759 < n__7298__auto___34758)){
var G__34590_34760 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__34590_34760) {
case "compute":
var c__34193__auto___34762 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34759,c__34193__auto___34762,G__34590_34760,n__7298__auto___34758,jobs,results,process,async){
return (function (){
var f__34194__auto__ = (function (){var switch__34069__auto__ = ((function (__34759,c__34193__auto___34762,G__34590_34760,n__7298__auto___34758,jobs,results,process,async){
return (function (state_34603){
var state_val_34604 = (state_34603[(1)]);
if((state_val_34604 === (1))){
var state_34603__$1 = state_34603;
var statearr_34605_34763 = state_34603__$1;
(statearr_34605_34763[(2)] = null);

(statearr_34605_34763[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34604 === (2))){
var state_34603__$1 = state_34603;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34603__$1,(4),jobs);
} else {
if((state_val_34604 === (3))){
var inst_34601 = (state_34603[(2)]);
var state_34603__$1 = state_34603;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34603__$1,inst_34601);
} else {
if((state_val_34604 === (4))){
var inst_34593 = (state_34603[(2)]);
var inst_34594 = process(inst_34593);
var state_34603__$1 = state_34603;
if(cljs.core.truth_(inst_34594)){
var statearr_34606_34764 = state_34603__$1;
(statearr_34606_34764[(1)] = (5));

} else {
var statearr_34607_34765 = state_34603__$1;
(statearr_34607_34765[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34604 === (5))){
var state_34603__$1 = state_34603;
var statearr_34608_34766 = state_34603__$1;
(statearr_34608_34766[(2)] = null);

(statearr_34608_34766[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34604 === (6))){
var state_34603__$1 = state_34603;
var statearr_34609_34767 = state_34603__$1;
(statearr_34609_34767[(2)] = null);

(statearr_34609_34767[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34604 === (7))){
var inst_34599 = (state_34603[(2)]);
var state_34603__$1 = state_34603;
var statearr_34610_34768 = state_34603__$1;
(statearr_34610_34768[(2)] = inst_34599);

(statearr_34610_34768[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__34759,c__34193__auto___34762,G__34590_34760,n__7298__auto___34758,jobs,results,process,async))
;
return ((function (__34759,switch__34069__auto__,c__34193__auto___34762,G__34590_34760,n__7298__auto___34758,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34070__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34070__auto____0 = (function (){
var statearr_34614 = [null,null,null,null,null,null,null];
(statearr_34614[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34070__auto__);

(statearr_34614[(1)] = (1));

return statearr_34614;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34070__auto____1 = (function (state_34603){
while(true){
var ret_value__34071__auto__ = (function (){try{while(true){
var result__34072__auto__ = switch__34069__auto__(state_34603);
if(cljs.core.keyword_identical_QMARK_(result__34072__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34072__auto__;
}
break;
}
}catch (e34615){if((e34615 instanceof Object)){
var ex__34073__auto__ = e34615;
var statearr_34616_34769 = state_34603;
(statearr_34616_34769[(5)] = ex__34073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34603);

return cljs.core.cst$kw$recur;
} else {
throw e34615;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34071__auto__,cljs.core.cst$kw$recur)){
var G__34770 = state_34603;
state_34603 = G__34770;
continue;
} else {
return ret_value__34071__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34070__auto__ = function(state_34603){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34070__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34070__auto____1.call(this,state_34603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34070__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34070__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34070__auto__;
})()
;})(__34759,switch__34069__auto__,c__34193__auto___34762,G__34590_34760,n__7298__auto___34758,jobs,results,process,async))
})();
var state__34195__auto__ = (function (){var statearr_34617 = (f__34194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34194__auto__.cljs$core$IFn$_invoke$arity$0() : f__34194__auto__.call(null));
(statearr_34617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34193__auto___34762);

return statearr_34617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34195__auto__);
});})(__34759,c__34193__auto___34762,G__34590_34760,n__7298__auto___34758,jobs,results,process,async))
);


break;
case "async":
var c__34193__auto___34771 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34759,c__34193__auto___34771,G__34590_34760,n__7298__auto___34758,jobs,results,process,async){
return (function (){
var f__34194__auto__ = (function (){var switch__34069__auto__ = ((function (__34759,c__34193__auto___34771,G__34590_34760,n__7298__auto___34758,jobs,results,process,async){
return (function (state_34630){
var state_val_34631 = (state_34630[(1)]);
if((state_val_34631 === (1))){
var state_34630__$1 = state_34630;
var statearr_34632_34772 = state_34630__$1;
(statearr_34632_34772[(2)] = null);

(statearr_34632_34772[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34631 === (2))){
var state_34630__$1 = state_34630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34630__$1,(4),jobs);
} else {
if((state_val_34631 === (3))){
var inst_34628 = (state_34630[(2)]);
var state_34630__$1 = state_34630;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34630__$1,inst_34628);
} else {
if((state_val_34631 === (4))){
var inst_34620 = (state_34630[(2)]);
var inst_34621 = async(inst_34620);
var state_34630__$1 = state_34630;
if(cljs.core.truth_(inst_34621)){
var statearr_34633_34773 = state_34630__$1;
(statearr_34633_34773[(1)] = (5));

} else {
var statearr_34634_34774 = state_34630__$1;
(statearr_34634_34774[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34631 === (5))){
var state_34630__$1 = state_34630;
var statearr_34635_34775 = state_34630__$1;
(statearr_34635_34775[(2)] = null);

(statearr_34635_34775[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34631 === (6))){
var state_34630__$1 = state_34630;
var statearr_34636_34776 = state_34630__$1;
(statearr_34636_34776[(2)] = null);

(statearr_34636_34776[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34631 === (7))){
var inst_34626 = (state_34630[(2)]);
var state_34630__$1 = state_34630;
var statearr_34637_34777 = state_34630__$1;
(statearr_34637_34777[(2)] = inst_34626);

(statearr_34637_34777[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__34759,c__34193__auto___34771,G__34590_34760,n__7298__auto___34758,jobs,results,process,async))
;
return ((function (__34759,switch__34069__auto__,c__34193__auto___34771,G__34590_34760,n__7298__auto___34758,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34070__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34070__auto____0 = (function (){
var statearr_34641 = [null,null,null,null,null,null,null];
(statearr_34641[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34070__auto__);

(statearr_34641[(1)] = (1));

return statearr_34641;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34070__auto____1 = (function (state_34630){
while(true){
var ret_value__34071__auto__ = (function (){try{while(true){
var result__34072__auto__ = switch__34069__auto__(state_34630);
if(cljs.core.keyword_identical_QMARK_(result__34072__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34072__auto__;
}
break;
}
}catch (e34642){if((e34642 instanceof Object)){
var ex__34073__auto__ = e34642;
var statearr_34643_34778 = state_34630;
(statearr_34643_34778[(5)] = ex__34073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34630);

return cljs.core.cst$kw$recur;
} else {
throw e34642;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34071__auto__,cljs.core.cst$kw$recur)){
var G__34779 = state_34630;
state_34630 = G__34779;
continue;
} else {
return ret_value__34071__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34070__auto__ = function(state_34630){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34070__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34070__auto____1.call(this,state_34630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34070__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34070__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34070__auto__;
})()
;})(__34759,switch__34069__auto__,c__34193__auto___34771,G__34590_34760,n__7298__auto___34758,jobs,results,process,async))
})();
var state__34195__auto__ = (function (){var statearr_34644 = (f__34194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34194__auto__.cljs$core$IFn$_invoke$arity$0() : f__34194__auto__.call(null));
(statearr_34644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34193__auto___34771);

return statearr_34644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34195__auto__);
});})(__34759,c__34193__auto___34771,G__34590_34760,n__7298__auto___34758,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__34780 = (__34759 + (1));
__34759 = G__34780;
continue;
} else {
}
break;
}

var c__34193__auto___34781 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34193__auto___34781,jobs,results,process,async){
return (function (){
var f__34194__auto__ = (function (){var switch__34069__auto__ = ((function (c__34193__auto___34781,jobs,results,process,async){
return (function (state_34666){
var state_val_34667 = (state_34666[(1)]);
if((state_val_34667 === (1))){
var state_34666__$1 = state_34666;
var statearr_34668_34782 = state_34666__$1;
(statearr_34668_34782[(2)] = null);

(statearr_34668_34782[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34667 === (2))){
var state_34666__$1 = state_34666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34666__$1,(4),from);
} else {
if((state_val_34667 === (3))){
var inst_34664 = (state_34666[(2)]);
var state_34666__$1 = state_34666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34666__$1,inst_34664);
} else {
if((state_val_34667 === (4))){
var inst_34647 = (state_34666[(7)]);
var inst_34647__$1 = (state_34666[(2)]);
var inst_34648 = (inst_34647__$1 == null);
var state_34666__$1 = (function (){var statearr_34669 = state_34666;
(statearr_34669[(7)] = inst_34647__$1);

return statearr_34669;
})();
if(cljs.core.truth_(inst_34648)){
var statearr_34670_34783 = state_34666__$1;
(statearr_34670_34783[(1)] = (5));

} else {
var statearr_34671_34784 = state_34666__$1;
(statearr_34671_34784[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34667 === (5))){
var inst_34650 = cljs.core.async.close_BANG_(jobs);
var state_34666__$1 = state_34666;
var statearr_34672_34785 = state_34666__$1;
(statearr_34672_34785[(2)] = inst_34650);

(statearr_34672_34785[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34667 === (6))){
var inst_34647 = (state_34666[(7)]);
var inst_34652 = (state_34666[(8)]);
var inst_34652__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34653 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34654 = [inst_34647,inst_34652__$1];
var inst_34655 = (new cljs.core.PersistentVector(null,2,(5),inst_34653,inst_34654,null));
var state_34666__$1 = (function (){var statearr_34673 = state_34666;
(statearr_34673[(8)] = inst_34652__$1);

return statearr_34673;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34666__$1,(8),jobs,inst_34655);
} else {
if((state_val_34667 === (7))){
var inst_34662 = (state_34666[(2)]);
var state_34666__$1 = state_34666;
var statearr_34674_34786 = state_34666__$1;
(statearr_34674_34786[(2)] = inst_34662);

(statearr_34674_34786[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34667 === (8))){
var inst_34652 = (state_34666[(8)]);
var inst_34657 = (state_34666[(2)]);
var state_34666__$1 = (function (){var statearr_34675 = state_34666;
(statearr_34675[(9)] = inst_34657);

return statearr_34675;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34666__$1,(9),results,inst_34652);
} else {
if((state_val_34667 === (9))){
var inst_34659 = (state_34666[(2)]);
var state_34666__$1 = (function (){var statearr_34676 = state_34666;
(statearr_34676[(10)] = inst_34659);

return statearr_34676;
})();
var statearr_34677_34787 = state_34666__$1;
(statearr_34677_34787[(2)] = null);

(statearr_34677_34787[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__34193__auto___34781,jobs,results,process,async))
;
return ((function (switch__34069__auto__,c__34193__auto___34781,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34070__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34070__auto____0 = (function (){
var statearr_34681 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34681[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34070__auto__);

(statearr_34681[(1)] = (1));

return statearr_34681;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34070__auto____1 = (function (state_34666){
while(true){
var ret_value__34071__auto__ = (function (){try{while(true){
var result__34072__auto__ = switch__34069__auto__(state_34666);
if(cljs.core.keyword_identical_QMARK_(result__34072__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34072__auto__;
}
break;
}
}catch (e34682){if((e34682 instanceof Object)){
var ex__34073__auto__ = e34682;
var statearr_34683_34788 = state_34666;
(statearr_34683_34788[(5)] = ex__34073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34666);

return cljs.core.cst$kw$recur;
} else {
throw e34682;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34071__auto__,cljs.core.cst$kw$recur)){
var G__34789 = state_34666;
state_34666 = G__34789;
continue;
} else {
return ret_value__34071__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34070__auto__ = function(state_34666){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34070__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34070__auto____1.call(this,state_34666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34070__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34070__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34070__auto__;
})()
;})(switch__34069__auto__,c__34193__auto___34781,jobs,results,process,async))
})();
var state__34195__auto__ = (function (){var statearr_34684 = (f__34194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34194__auto__.cljs$core$IFn$_invoke$arity$0() : f__34194__auto__.call(null));
(statearr_34684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34193__auto___34781);

return statearr_34684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34195__auto__);
});})(c__34193__auto___34781,jobs,results,process,async))
);


var c__34193__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34193__auto__,jobs,results,process,async){
return (function (){
var f__34194__auto__ = (function (){var switch__34069__auto__ = ((function (c__34193__auto__,jobs,results,process,async){
return (function (state_34722){
var state_val_34723 = (state_34722[(1)]);
if((state_val_34723 === (7))){
var inst_34718 = (state_34722[(2)]);
var state_34722__$1 = state_34722;
var statearr_34724_34790 = state_34722__$1;
(statearr_34724_34790[(2)] = inst_34718);

(statearr_34724_34790[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34723 === (20))){
var state_34722__$1 = state_34722;
var statearr_34725_34791 = state_34722__$1;
(statearr_34725_34791[(2)] = null);

(statearr_34725_34791[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34723 === (1))){
var state_34722__$1 = state_34722;
var statearr_34726_34792 = state_34722__$1;
(statearr_34726_34792[(2)] = null);

(statearr_34726_34792[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34723 === (4))){
var inst_34687 = (state_34722[(7)]);
var inst_34687__$1 = (state_34722[(2)]);
var inst_34688 = (inst_34687__$1 == null);
var state_34722__$1 = (function (){var statearr_34727 = state_34722;
(statearr_34727[(7)] = inst_34687__$1);

return statearr_34727;
})();
if(cljs.core.truth_(inst_34688)){
var statearr_34728_34793 = state_34722__$1;
(statearr_34728_34793[(1)] = (5));

} else {
var statearr_34729_34794 = state_34722__$1;
(statearr_34729_34794[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34723 === (15))){
var inst_34700 = (state_34722[(8)]);
var state_34722__$1 = state_34722;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34722__$1,(18),to,inst_34700);
} else {
if((state_val_34723 === (21))){
var inst_34713 = (state_34722[(2)]);
var state_34722__$1 = state_34722;
var statearr_34730_34795 = state_34722__$1;
(statearr_34730_34795[(2)] = inst_34713);

(statearr_34730_34795[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34723 === (13))){
var inst_34715 = (state_34722[(2)]);
var state_34722__$1 = (function (){var statearr_34731 = state_34722;
(statearr_34731[(9)] = inst_34715);

return statearr_34731;
})();
var statearr_34732_34796 = state_34722__$1;
(statearr_34732_34796[(2)] = null);

(statearr_34732_34796[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34723 === (6))){
var inst_34687 = (state_34722[(7)]);
var state_34722__$1 = state_34722;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34722__$1,(11),inst_34687);
} else {
if((state_val_34723 === (17))){
var inst_34708 = (state_34722[(2)]);
var state_34722__$1 = state_34722;
if(cljs.core.truth_(inst_34708)){
var statearr_34733_34797 = state_34722__$1;
(statearr_34733_34797[(1)] = (19));

} else {
var statearr_34734_34798 = state_34722__$1;
(statearr_34734_34798[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34723 === (3))){
var inst_34720 = (state_34722[(2)]);
var state_34722__$1 = state_34722;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34722__$1,inst_34720);
} else {
if((state_val_34723 === (12))){
var inst_34697 = (state_34722[(10)]);
var state_34722__$1 = state_34722;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34722__$1,(14),inst_34697);
} else {
if((state_val_34723 === (2))){
var state_34722__$1 = state_34722;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34722__$1,(4),results);
} else {
if((state_val_34723 === (19))){
var state_34722__$1 = state_34722;
var statearr_34735_34799 = state_34722__$1;
(statearr_34735_34799[(2)] = null);

(statearr_34735_34799[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34723 === (11))){
var inst_34697 = (state_34722[(2)]);
var state_34722__$1 = (function (){var statearr_34736 = state_34722;
(statearr_34736[(10)] = inst_34697);

return statearr_34736;
})();
var statearr_34737_34800 = state_34722__$1;
(statearr_34737_34800[(2)] = null);

(statearr_34737_34800[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34723 === (9))){
var state_34722__$1 = state_34722;
var statearr_34738_34801 = state_34722__$1;
(statearr_34738_34801[(2)] = null);

(statearr_34738_34801[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34723 === (5))){
var state_34722__$1 = state_34722;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34739_34802 = state_34722__$1;
(statearr_34739_34802[(1)] = (8));

} else {
var statearr_34740_34803 = state_34722__$1;
(statearr_34740_34803[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34723 === (14))){
var inst_34700 = (state_34722[(8)]);
var inst_34702 = (state_34722[(11)]);
var inst_34700__$1 = (state_34722[(2)]);
var inst_34701 = (inst_34700__$1 == null);
var inst_34702__$1 = cljs.core.not(inst_34701);
var state_34722__$1 = (function (){var statearr_34741 = state_34722;
(statearr_34741[(8)] = inst_34700__$1);

(statearr_34741[(11)] = inst_34702__$1);

return statearr_34741;
})();
if(inst_34702__$1){
var statearr_34742_34804 = state_34722__$1;
(statearr_34742_34804[(1)] = (15));

} else {
var statearr_34743_34805 = state_34722__$1;
(statearr_34743_34805[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34723 === (16))){
var inst_34702 = (state_34722[(11)]);
var state_34722__$1 = state_34722;
var statearr_34744_34806 = state_34722__$1;
(statearr_34744_34806[(2)] = inst_34702);

(statearr_34744_34806[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34723 === (10))){
var inst_34694 = (state_34722[(2)]);
var state_34722__$1 = state_34722;
var statearr_34745_34807 = state_34722__$1;
(statearr_34745_34807[(2)] = inst_34694);

(statearr_34745_34807[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34723 === (18))){
var inst_34705 = (state_34722[(2)]);
var state_34722__$1 = state_34722;
var statearr_34746_34808 = state_34722__$1;
(statearr_34746_34808[(2)] = inst_34705);

(statearr_34746_34808[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34723 === (8))){
var inst_34691 = cljs.core.async.close_BANG_(to);
var state_34722__$1 = state_34722;
var statearr_34747_34809 = state_34722__$1;
(statearr_34747_34809[(2)] = inst_34691);

(statearr_34747_34809[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__34193__auto__,jobs,results,process,async))
;
return ((function (switch__34069__auto__,c__34193__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34070__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34070__auto____0 = (function (){
var statearr_34751 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34751[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34070__auto__);

(statearr_34751[(1)] = (1));

return statearr_34751;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34070__auto____1 = (function (state_34722){
while(true){
var ret_value__34071__auto__ = (function (){try{while(true){
var result__34072__auto__ = switch__34069__auto__(state_34722);
if(cljs.core.keyword_identical_QMARK_(result__34072__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34072__auto__;
}
break;
}
}catch (e34752){if((e34752 instanceof Object)){
var ex__34073__auto__ = e34752;
var statearr_34753_34810 = state_34722;
(statearr_34753_34810[(5)] = ex__34073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34722);

return cljs.core.cst$kw$recur;
} else {
throw e34752;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34071__auto__,cljs.core.cst$kw$recur)){
var G__34811 = state_34722;
state_34722 = G__34811;
continue;
} else {
return ret_value__34071__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34070__auto__ = function(state_34722){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34070__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34070__auto____1.call(this,state_34722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34070__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34070__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34070__auto__;
})()
;})(switch__34069__auto__,c__34193__auto__,jobs,results,process,async))
})();
var state__34195__auto__ = (function (){var statearr_34754 = (f__34194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34194__auto__.cljs$core$IFn$_invoke$arity$0() : f__34194__auto__.call(null));
(statearr_34754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34193__auto__);

return statearr_34754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34195__auto__);
});})(c__34193__auto__,jobs,results,process,async))
);

return c__34193__auto__;
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
var args34812 = [];
var len__7454__auto___34815 = arguments.length;
var i__7455__auto___34816 = (0);
while(true){
if((i__7455__auto___34816 < len__7454__auto___34815)){
args34812.push((arguments[i__7455__auto___34816]));

var G__34817 = (i__7455__auto___34816 + (1));
i__7455__auto___34816 = G__34817;
continue;
} else {
}
break;
}

var G__34814 = args34812.length;
switch (G__34814) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34812.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
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
var args34819 = [];
var len__7454__auto___34822 = arguments.length;
var i__7455__auto___34823 = (0);
while(true){
if((i__7455__auto___34823 < len__7454__auto___34822)){
args34819.push((arguments[i__7455__auto___34823]));

var G__34824 = (i__7455__auto___34823 + (1));
i__7455__auto___34823 = G__34824;
continue;
} else {
}
break;
}

var G__34821 = args34819.length;
switch (G__34821) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34819.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
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
var args34826 = [];
var len__7454__auto___34879 = arguments.length;
var i__7455__auto___34880 = (0);
while(true){
if((i__7455__auto___34880 < len__7454__auto___34879)){
args34826.push((arguments[i__7455__auto___34880]));

var G__34881 = (i__7455__auto___34880 + (1));
i__7455__auto___34880 = G__34881;
continue;
} else {
}
break;
}

var G__34828 = args34826.length;
switch (G__34828) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34826.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__34193__auto___34883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34193__auto___34883,tc,fc){
return (function (){
var f__34194__auto__ = (function (){var switch__34069__auto__ = ((function (c__34193__auto___34883,tc,fc){
return (function (state_34854){
var state_val_34855 = (state_34854[(1)]);
if((state_val_34855 === (7))){
var inst_34850 = (state_34854[(2)]);
var state_34854__$1 = state_34854;
var statearr_34856_34884 = state_34854__$1;
(statearr_34856_34884[(2)] = inst_34850);

(statearr_34856_34884[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34855 === (1))){
var state_34854__$1 = state_34854;
var statearr_34857_34885 = state_34854__$1;
(statearr_34857_34885[(2)] = null);

(statearr_34857_34885[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34855 === (4))){
var inst_34831 = (state_34854[(7)]);
var inst_34831__$1 = (state_34854[(2)]);
var inst_34832 = (inst_34831__$1 == null);
var state_34854__$1 = (function (){var statearr_34858 = state_34854;
(statearr_34858[(7)] = inst_34831__$1);

return statearr_34858;
})();
if(cljs.core.truth_(inst_34832)){
var statearr_34859_34886 = state_34854__$1;
(statearr_34859_34886[(1)] = (5));

} else {
var statearr_34860_34887 = state_34854__$1;
(statearr_34860_34887[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34855 === (13))){
var state_34854__$1 = state_34854;
var statearr_34861_34888 = state_34854__$1;
(statearr_34861_34888[(2)] = null);

(statearr_34861_34888[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34855 === (6))){
var inst_34831 = (state_34854[(7)]);
var inst_34837 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34831) : p.call(null,inst_34831));
var state_34854__$1 = state_34854;
if(cljs.core.truth_(inst_34837)){
var statearr_34862_34889 = state_34854__$1;
(statearr_34862_34889[(1)] = (9));

} else {
var statearr_34863_34890 = state_34854__$1;
(statearr_34863_34890[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34855 === (3))){
var inst_34852 = (state_34854[(2)]);
var state_34854__$1 = state_34854;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34854__$1,inst_34852);
} else {
if((state_val_34855 === (12))){
var state_34854__$1 = state_34854;
var statearr_34864_34891 = state_34854__$1;
(statearr_34864_34891[(2)] = null);

(statearr_34864_34891[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34855 === (2))){
var state_34854__$1 = state_34854;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34854__$1,(4),ch);
} else {
if((state_val_34855 === (11))){
var inst_34831 = (state_34854[(7)]);
var inst_34841 = (state_34854[(2)]);
var state_34854__$1 = state_34854;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34854__$1,(8),inst_34841,inst_34831);
} else {
if((state_val_34855 === (9))){
var state_34854__$1 = state_34854;
var statearr_34865_34892 = state_34854__$1;
(statearr_34865_34892[(2)] = tc);

(statearr_34865_34892[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34855 === (5))){
var inst_34834 = cljs.core.async.close_BANG_(tc);
var inst_34835 = cljs.core.async.close_BANG_(fc);
var state_34854__$1 = (function (){var statearr_34866 = state_34854;
(statearr_34866[(8)] = inst_34834);

return statearr_34866;
})();
var statearr_34867_34893 = state_34854__$1;
(statearr_34867_34893[(2)] = inst_34835);

(statearr_34867_34893[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34855 === (14))){
var inst_34848 = (state_34854[(2)]);
var state_34854__$1 = state_34854;
var statearr_34868_34894 = state_34854__$1;
(statearr_34868_34894[(2)] = inst_34848);

(statearr_34868_34894[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34855 === (10))){
var state_34854__$1 = state_34854;
var statearr_34869_34895 = state_34854__$1;
(statearr_34869_34895[(2)] = fc);

(statearr_34869_34895[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34855 === (8))){
var inst_34843 = (state_34854[(2)]);
var state_34854__$1 = state_34854;
if(cljs.core.truth_(inst_34843)){
var statearr_34870_34896 = state_34854__$1;
(statearr_34870_34896[(1)] = (12));

} else {
var statearr_34871_34897 = state_34854__$1;
(statearr_34871_34897[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__34193__auto___34883,tc,fc))
;
return ((function (switch__34069__auto__,c__34193__auto___34883,tc,fc){
return (function() {
var cljs$core$async$state_machine__34070__auto__ = null;
var cljs$core$async$state_machine__34070__auto____0 = (function (){
var statearr_34875 = [null,null,null,null,null,null,null,null,null];
(statearr_34875[(0)] = cljs$core$async$state_machine__34070__auto__);

(statearr_34875[(1)] = (1));

return statearr_34875;
});
var cljs$core$async$state_machine__34070__auto____1 = (function (state_34854){
while(true){
var ret_value__34071__auto__ = (function (){try{while(true){
var result__34072__auto__ = switch__34069__auto__(state_34854);
if(cljs.core.keyword_identical_QMARK_(result__34072__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34072__auto__;
}
break;
}
}catch (e34876){if((e34876 instanceof Object)){
var ex__34073__auto__ = e34876;
var statearr_34877_34898 = state_34854;
(statearr_34877_34898[(5)] = ex__34073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34854);

return cljs.core.cst$kw$recur;
} else {
throw e34876;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34071__auto__,cljs.core.cst$kw$recur)){
var G__34899 = state_34854;
state_34854 = G__34899;
continue;
} else {
return ret_value__34071__auto__;
}
break;
}
});
cljs$core$async$state_machine__34070__auto__ = function(state_34854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34070__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34070__auto____1.call(this,state_34854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34070__auto____0;
cljs$core$async$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34070__auto____1;
return cljs$core$async$state_machine__34070__auto__;
})()
;})(switch__34069__auto__,c__34193__auto___34883,tc,fc))
})();
var state__34195__auto__ = (function (){var statearr_34878 = (f__34194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34194__auto__.cljs$core$IFn$_invoke$arity$0() : f__34194__auto__.call(null));
(statearr_34878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34193__auto___34883);

return statearr_34878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34195__auto__);
});})(c__34193__auto___34883,tc,fc))
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
var c__34193__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34193__auto__){
return (function (){
var f__34194__auto__ = (function (){var switch__34069__auto__ = ((function (c__34193__auto__){
return (function (state_34963){
var state_val_34964 = (state_34963[(1)]);
if((state_val_34964 === (7))){
var inst_34959 = (state_34963[(2)]);
var state_34963__$1 = state_34963;
var statearr_34965_34986 = state_34963__$1;
(statearr_34965_34986[(2)] = inst_34959);

(statearr_34965_34986[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34964 === (1))){
var inst_34943 = init;
var state_34963__$1 = (function (){var statearr_34966 = state_34963;
(statearr_34966[(7)] = inst_34943);

return statearr_34966;
})();
var statearr_34967_34987 = state_34963__$1;
(statearr_34967_34987[(2)] = null);

(statearr_34967_34987[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34964 === (4))){
var inst_34946 = (state_34963[(8)]);
var inst_34946__$1 = (state_34963[(2)]);
var inst_34947 = (inst_34946__$1 == null);
var state_34963__$1 = (function (){var statearr_34968 = state_34963;
(statearr_34968[(8)] = inst_34946__$1);

return statearr_34968;
})();
if(cljs.core.truth_(inst_34947)){
var statearr_34969_34988 = state_34963__$1;
(statearr_34969_34988[(1)] = (5));

} else {
var statearr_34970_34989 = state_34963__$1;
(statearr_34970_34989[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34964 === (6))){
var inst_34946 = (state_34963[(8)]);
var inst_34950 = (state_34963[(9)]);
var inst_34943 = (state_34963[(7)]);
var inst_34950__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34943,inst_34946) : f.call(null,inst_34943,inst_34946));
var inst_34951 = cljs.core.reduced_QMARK_(inst_34950__$1);
var state_34963__$1 = (function (){var statearr_34971 = state_34963;
(statearr_34971[(9)] = inst_34950__$1);

return statearr_34971;
})();
if(inst_34951){
var statearr_34972_34990 = state_34963__$1;
(statearr_34972_34990[(1)] = (8));

} else {
var statearr_34973_34991 = state_34963__$1;
(statearr_34973_34991[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34964 === (3))){
var inst_34961 = (state_34963[(2)]);
var state_34963__$1 = state_34963;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34963__$1,inst_34961);
} else {
if((state_val_34964 === (2))){
var state_34963__$1 = state_34963;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34963__$1,(4),ch);
} else {
if((state_val_34964 === (9))){
var inst_34950 = (state_34963[(9)]);
var inst_34943 = inst_34950;
var state_34963__$1 = (function (){var statearr_34974 = state_34963;
(statearr_34974[(7)] = inst_34943);

return statearr_34974;
})();
var statearr_34975_34992 = state_34963__$1;
(statearr_34975_34992[(2)] = null);

(statearr_34975_34992[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34964 === (5))){
var inst_34943 = (state_34963[(7)]);
var state_34963__$1 = state_34963;
var statearr_34976_34993 = state_34963__$1;
(statearr_34976_34993[(2)] = inst_34943);

(statearr_34976_34993[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34964 === (10))){
var inst_34957 = (state_34963[(2)]);
var state_34963__$1 = state_34963;
var statearr_34977_34994 = state_34963__$1;
(statearr_34977_34994[(2)] = inst_34957);

(statearr_34977_34994[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34964 === (8))){
var inst_34950 = (state_34963[(9)]);
var inst_34953 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_34950) : cljs.core.deref.call(null,inst_34950));
var state_34963__$1 = state_34963;
var statearr_34978_34995 = state_34963__$1;
(statearr_34978_34995[(2)] = inst_34953);

(statearr_34978_34995[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__34193__auto__))
;
return ((function (switch__34069__auto__,c__34193__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__34070__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34070__auto____0 = (function (){
var statearr_34982 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34982[(0)] = cljs$core$async$reduce_$_state_machine__34070__auto__);

(statearr_34982[(1)] = (1));

return statearr_34982;
});
var cljs$core$async$reduce_$_state_machine__34070__auto____1 = (function (state_34963){
while(true){
var ret_value__34071__auto__ = (function (){try{while(true){
var result__34072__auto__ = switch__34069__auto__(state_34963);
if(cljs.core.keyword_identical_QMARK_(result__34072__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34072__auto__;
}
break;
}
}catch (e34983){if((e34983 instanceof Object)){
var ex__34073__auto__ = e34983;
var statearr_34984_34996 = state_34963;
(statearr_34984_34996[(5)] = ex__34073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34963);

return cljs.core.cst$kw$recur;
} else {
throw e34983;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34071__auto__,cljs.core.cst$kw$recur)){
var G__34997 = state_34963;
state_34963 = G__34997;
continue;
} else {
return ret_value__34071__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34070__auto__ = function(state_34963){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34070__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34070__auto____1.call(this,state_34963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34070__auto____0;
cljs$core$async$reduce_$_state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34070__auto____1;
return cljs$core$async$reduce_$_state_machine__34070__auto__;
})()
;})(switch__34069__auto__,c__34193__auto__))
})();
var state__34195__auto__ = (function (){var statearr_34985 = (f__34194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34194__auto__.cljs$core$IFn$_invoke$arity$0() : f__34194__auto__.call(null));
(statearr_34985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34193__auto__);

return statearr_34985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34195__auto__);
});})(c__34193__auto__))
);

return c__34193__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34193__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34193__auto__,f__$1){
return (function (){
var f__34194__auto__ = (function (){var switch__34069__auto__ = ((function (c__34193__auto__,f__$1){
return (function (state_35017){
var state_val_35018 = (state_35017[(1)]);
if((state_val_35018 === (1))){
var inst_35012 = cljs.core.async.reduce(f__$1,init,ch);
var state_35017__$1 = state_35017;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35017__$1,(2),inst_35012);
} else {
if((state_val_35018 === (2))){
var inst_35014 = (state_35017[(2)]);
var inst_35015 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_35014) : f__$1.call(null,inst_35014));
var state_35017__$1 = state_35017;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35017__$1,inst_35015);
} else {
return null;
}
}
});})(c__34193__auto__,f__$1))
;
return ((function (switch__34069__auto__,c__34193__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__34070__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34070__auto____0 = (function (){
var statearr_35022 = [null,null,null,null,null,null,null];
(statearr_35022[(0)] = cljs$core$async$transduce_$_state_machine__34070__auto__);

(statearr_35022[(1)] = (1));

return statearr_35022;
});
var cljs$core$async$transduce_$_state_machine__34070__auto____1 = (function (state_35017){
while(true){
var ret_value__34071__auto__ = (function (){try{while(true){
var result__34072__auto__ = switch__34069__auto__(state_35017);
if(cljs.core.keyword_identical_QMARK_(result__34072__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34072__auto__;
}
break;
}
}catch (e35023){if((e35023 instanceof Object)){
var ex__34073__auto__ = e35023;
var statearr_35024_35026 = state_35017;
(statearr_35024_35026[(5)] = ex__34073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35017);

return cljs.core.cst$kw$recur;
} else {
throw e35023;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34071__auto__,cljs.core.cst$kw$recur)){
var G__35027 = state_35017;
state_35017 = G__35027;
continue;
} else {
return ret_value__34071__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34070__auto__ = function(state_35017){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34070__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34070__auto____1.call(this,state_35017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34070__auto____0;
cljs$core$async$transduce_$_state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34070__auto____1;
return cljs$core$async$transduce_$_state_machine__34070__auto__;
})()
;})(switch__34069__auto__,c__34193__auto__,f__$1))
})();
var state__34195__auto__ = (function (){var statearr_35025 = (f__34194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34194__auto__.cljs$core$IFn$_invoke$arity$0() : f__34194__auto__.call(null));
(statearr_35025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34193__auto__);

return statearr_35025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34195__auto__);
});})(c__34193__auto__,f__$1))
);

return c__34193__auto__;
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
var args35028 = [];
var len__7454__auto___35080 = arguments.length;
var i__7455__auto___35081 = (0);
while(true){
if((i__7455__auto___35081 < len__7454__auto___35080)){
args35028.push((arguments[i__7455__auto___35081]));

var G__35082 = (i__7455__auto___35081 + (1));
i__7455__auto___35081 = G__35082;
continue;
} else {
}
break;
}

var G__35030 = args35028.length;
switch (G__35030) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35028.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34193__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34193__auto__){
return (function (){
var f__34194__auto__ = (function (){var switch__34069__auto__ = ((function (c__34193__auto__){
return (function (state_35055){
var state_val_35056 = (state_35055[(1)]);
if((state_val_35056 === (7))){
var inst_35037 = (state_35055[(2)]);
var state_35055__$1 = state_35055;
var statearr_35057_35084 = state_35055__$1;
(statearr_35057_35084[(2)] = inst_35037);

(statearr_35057_35084[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35056 === (1))){
var inst_35031 = cljs.core.seq(coll);
var inst_35032 = inst_35031;
var state_35055__$1 = (function (){var statearr_35058 = state_35055;
(statearr_35058[(7)] = inst_35032);

return statearr_35058;
})();
var statearr_35059_35085 = state_35055__$1;
(statearr_35059_35085[(2)] = null);

(statearr_35059_35085[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35056 === (4))){
var inst_35032 = (state_35055[(7)]);
var inst_35035 = cljs.core.first(inst_35032);
var state_35055__$1 = state_35055;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35055__$1,(7),ch,inst_35035);
} else {
if((state_val_35056 === (13))){
var inst_35049 = (state_35055[(2)]);
var state_35055__$1 = state_35055;
var statearr_35060_35086 = state_35055__$1;
(statearr_35060_35086[(2)] = inst_35049);

(statearr_35060_35086[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35056 === (6))){
var inst_35040 = (state_35055[(2)]);
var state_35055__$1 = state_35055;
if(cljs.core.truth_(inst_35040)){
var statearr_35061_35087 = state_35055__$1;
(statearr_35061_35087[(1)] = (8));

} else {
var statearr_35062_35088 = state_35055__$1;
(statearr_35062_35088[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35056 === (3))){
var inst_35053 = (state_35055[(2)]);
var state_35055__$1 = state_35055;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35055__$1,inst_35053);
} else {
if((state_val_35056 === (12))){
var state_35055__$1 = state_35055;
var statearr_35063_35089 = state_35055__$1;
(statearr_35063_35089[(2)] = null);

(statearr_35063_35089[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35056 === (2))){
var inst_35032 = (state_35055[(7)]);
var state_35055__$1 = state_35055;
if(cljs.core.truth_(inst_35032)){
var statearr_35064_35090 = state_35055__$1;
(statearr_35064_35090[(1)] = (4));

} else {
var statearr_35065_35091 = state_35055__$1;
(statearr_35065_35091[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35056 === (11))){
var inst_35046 = cljs.core.async.close_BANG_(ch);
var state_35055__$1 = state_35055;
var statearr_35066_35092 = state_35055__$1;
(statearr_35066_35092[(2)] = inst_35046);

(statearr_35066_35092[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35056 === (9))){
var state_35055__$1 = state_35055;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35067_35093 = state_35055__$1;
(statearr_35067_35093[(1)] = (11));

} else {
var statearr_35068_35094 = state_35055__$1;
(statearr_35068_35094[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35056 === (5))){
var inst_35032 = (state_35055[(7)]);
var state_35055__$1 = state_35055;
var statearr_35069_35095 = state_35055__$1;
(statearr_35069_35095[(2)] = inst_35032);

(statearr_35069_35095[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35056 === (10))){
var inst_35051 = (state_35055[(2)]);
var state_35055__$1 = state_35055;
var statearr_35070_35096 = state_35055__$1;
(statearr_35070_35096[(2)] = inst_35051);

(statearr_35070_35096[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35056 === (8))){
var inst_35032 = (state_35055[(7)]);
var inst_35042 = cljs.core.next(inst_35032);
var inst_35032__$1 = inst_35042;
var state_35055__$1 = (function (){var statearr_35071 = state_35055;
(statearr_35071[(7)] = inst_35032__$1);

return statearr_35071;
})();
var statearr_35072_35097 = state_35055__$1;
(statearr_35072_35097[(2)] = null);

(statearr_35072_35097[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__34193__auto__))
;
return ((function (switch__34069__auto__,c__34193__auto__){
return (function() {
var cljs$core$async$state_machine__34070__auto__ = null;
var cljs$core$async$state_machine__34070__auto____0 = (function (){
var statearr_35076 = [null,null,null,null,null,null,null,null];
(statearr_35076[(0)] = cljs$core$async$state_machine__34070__auto__);

(statearr_35076[(1)] = (1));

return statearr_35076;
});
var cljs$core$async$state_machine__34070__auto____1 = (function (state_35055){
while(true){
var ret_value__34071__auto__ = (function (){try{while(true){
var result__34072__auto__ = switch__34069__auto__(state_35055);
if(cljs.core.keyword_identical_QMARK_(result__34072__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34072__auto__;
}
break;
}
}catch (e35077){if((e35077 instanceof Object)){
var ex__34073__auto__ = e35077;
var statearr_35078_35098 = state_35055;
(statearr_35078_35098[(5)] = ex__34073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35055);

return cljs.core.cst$kw$recur;
} else {
throw e35077;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34071__auto__,cljs.core.cst$kw$recur)){
var G__35099 = state_35055;
state_35055 = G__35099;
continue;
} else {
return ret_value__34071__auto__;
}
break;
}
});
cljs$core$async$state_machine__34070__auto__ = function(state_35055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34070__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34070__auto____1.call(this,state_35055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34070__auto____0;
cljs$core$async$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34070__auto____1;
return cljs$core$async$state_machine__34070__auto__;
})()
;})(switch__34069__auto__,c__34193__auto__))
})();
var state__34195__auto__ = (function (){var statearr_35079 = (f__34194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34194__auto__.cljs$core$IFn$_invoke$arity$0() : f__34194__auto__.call(null));
(statearr_35079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34193__auto__);

return statearr_35079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34195__auto__);
});})(c__34193__auto__))
);

return c__34193__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

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
var x__7046__auto__ = (((_ == null))?null:_);
var m__7047__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7046__auto__)]);
if(!((m__7047__auto__ == null))){
return (m__7047__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7047__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7047__auto__.call(null,_));
} else {
var m__7047__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7047__auto____$1 == null))){
return (m__7047__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7047__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7047__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
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
var x__7046__auto__ = (((m == null))?null:m);
var m__7047__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7046__auto__)]);
if(!((m__7047__auto__ == null))){
return (m__7047__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7047__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7047__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__7047__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7047__auto____$1 == null))){
return (m__7047__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7047__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7047__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7046__auto__ = (((m == null))?null:m);
var m__7047__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7046__auto__)]);
if(!((m__7047__auto__ == null))){
return (m__7047__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7047__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7047__auto__.call(null,m,ch));
} else {
var m__7047__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7047__auto____$1 == null))){
return (m__7047__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7047__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7047__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7046__auto__ = (((m == null))?null:m);
var m__7047__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7046__auto__)]);
if(!((m__7047__auto__ == null))){
return (m__7047__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7047__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7047__auto__.call(null,m));
} else {
var m__7047__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7047__auto____$1 == null))){
return (m__7047__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7047__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7047__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = (function (){var G__35328 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35328) : cljs.core.atom.call(null,G__35328));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async35329 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35329 = (function (mult,ch,cs,meta35330){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta35330 = meta35330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35331,meta35330__$1){
var self__ = this;
var _35331__$1 = this;
return (new cljs.core.async.t_cljs$core$async35329(self__.mult,self__.ch,self__.cs,meta35330__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async35329.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35331){
var self__ = this;
var _35331__$1 = this;
return self__.meta35330;
});})(cs))
;

cljs.core.async.t_cljs$core$async35329.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async35329.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async35329.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async35329.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35329.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35329.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__35332_35556 = self__.cs;
var G__35333_35557 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35332_35556,G__35333_35557) : cljs.core.reset_BANG_.call(null,G__35332_35556,G__35333_35557));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35329.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta35330], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async35329.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35329.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35329";

cljs.core.async.t_cljs$core$async35329.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6989__auto__,writer__6990__auto__,opt__6991__auto__){
return cljs.core._write(writer__6990__auto__,"cljs.core.async/t_cljs$core$async35329");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async35329 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async35329(mult__$1,ch__$1,cs__$1,meta35330){
return (new cljs.core.async.t_cljs$core$async35329(mult__$1,ch__$1,cs__$1,meta35330));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async35329(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__34193__auto___35558 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34193__auto___35558,cs,m,dchan,dctr,done){
return (function (){
var f__34194__auto__ = (function (){var switch__34069__auto__ = ((function (c__34193__auto___35558,cs,m,dchan,dctr,done){
return (function (state_35468){
var state_val_35469 = (state_35468[(1)]);
if((state_val_35469 === (7))){
var inst_35464 = (state_35468[(2)]);
var state_35468__$1 = state_35468;
var statearr_35470_35559 = state_35468__$1;
(statearr_35470_35559[(2)] = inst_35464);

(statearr_35470_35559[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (20))){
var inst_35367 = (state_35468[(7)]);
var inst_35379 = cljs.core.first(inst_35367);
var inst_35380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35379,(0),null);
var inst_35381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35379,(1),null);
var state_35468__$1 = (function (){var statearr_35471 = state_35468;
(statearr_35471[(8)] = inst_35380);

return statearr_35471;
})();
if(cljs.core.truth_(inst_35381)){
var statearr_35472_35560 = state_35468__$1;
(statearr_35472_35560[(1)] = (22));

} else {
var statearr_35473_35561 = state_35468__$1;
(statearr_35473_35561[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (27))){
var inst_35411 = (state_35468[(9)]);
var inst_35416 = (state_35468[(10)]);
var inst_35409 = (state_35468[(11)]);
var inst_35336 = (state_35468[(12)]);
var inst_35416__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35409,inst_35411);
var inst_35417 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35416__$1,inst_35336,done);
var state_35468__$1 = (function (){var statearr_35474 = state_35468;
(statearr_35474[(10)] = inst_35416__$1);

return statearr_35474;
})();
if(cljs.core.truth_(inst_35417)){
var statearr_35475_35562 = state_35468__$1;
(statearr_35475_35562[(1)] = (30));

} else {
var statearr_35476_35563 = state_35468__$1;
(statearr_35476_35563[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (1))){
var state_35468__$1 = state_35468;
var statearr_35477_35564 = state_35468__$1;
(statearr_35477_35564[(2)] = null);

(statearr_35477_35564[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (24))){
var inst_35367 = (state_35468[(7)]);
var inst_35386 = (state_35468[(2)]);
var inst_35387 = cljs.core.next(inst_35367);
var inst_35345 = inst_35387;
var inst_35346 = null;
var inst_35347 = (0);
var inst_35348 = (0);
var state_35468__$1 = (function (){var statearr_35478 = state_35468;
(statearr_35478[(13)] = inst_35346);

(statearr_35478[(14)] = inst_35347);

(statearr_35478[(15)] = inst_35348);

(statearr_35478[(16)] = inst_35345);

(statearr_35478[(17)] = inst_35386);

return statearr_35478;
})();
var statearr_35479_35565 = state_35468__$1;
(statearr_35479_35565[(2)] = null);

(statearr_35479_35565[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (39))){
var state_35468__$1 = state_35468;
var statearr_35483_35566 = state_35468__$1;
(statearr_35483_35566[(2)] = null);

(statearr_35483_35566[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (4))){
var inst_35336 = (state_35468[(12)]);
var inst_35336__$1 = (state_35468[(2)]);
var inst_35337 = (inst_35336__$1 == null);
var state_35468__$1 = (function (){var statearr_35484 = state_35468;
(statearr_35484[(12)] = inst_35336__$1);

return statearr_35484;
})();
if(cljs.core.truth_(inst_35337)){
var statearr_35485_35567 = state_35468__$1;
(statearr_35485_35567[(1)] = (5));

} else {
var statearr_35486_35568 = state_35468__$1;
(statearr_35486_35568[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (15))){
var inst_35346 = (state_35468[(13)]);
var inst_35347 = (state_35468[(14)]);
var inst_35348 = (state_35468[(15)]);
var inst_35345 = (state_35468[(16)]);
var inst_35363 = (state_35468[(2)]);
var inst_35364 = (inst_35348 + (1));
var tmp35480 = inst_35346;
var tmp35481 = inst_35347;
var tmp35482 = inst_35345;
var inst_35345__$1 = tmp35482;
var inst_35346__$1 = tmp35480;
var inst_35347__$1 = tmp35481;
var inst_35348__$1 = inst_35364;
var state_35468__$1 = (function (){var statearr_35487 = state_35468;
(statearr_35487[(13)] = inst_35346__$1);

(statearr_35487[(14)] = inst_35347__$1);

(statearr_35487[(15)] = inst_35348__$1);

(statearr_35487[(16)] = inst_35345__$1);

(statearr_35487[(18)] = inst_35363);

return statearr_35487;
})();
var statearr_35488_35569 = state_35468__$1;
(statearr_35488_35569[(2)] = null);

(statearr_35488_35569[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (21))){
var inst_35390 = (state_35468[(2)]);
var state_35468__$1 = state_35468;
var statearr_35492_35570 = state_35468__$1;
(statearr_35492_35570[(2)] = inst_35390);

(statearr_35492_35570[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (31))){
var inst_35416 = (state_35468[(10)]);
var inst_35420 = done(null);
var inst_35421 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35416);
var state_35468__$1 = (function (){var statearr_35493 = state_35468;
(statearr_35493[(19)] = inst_35420);

return statearr_35493;
})();
var statearr_35494_35571 = state_35468__$1;
(statearr_35494_35571[(2)] = inst_35421);

(statearr_35494_35571[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (32))){
var inst_35411 = (state_35468[(9)]);
var inst_35408 = (state_35468[(20)]);
var inst_35409 = (state_35468[(11)]);
var inst_35410 = (state_35468[(21)]);
var inst_35423 = (state_35468[(2)]);
var inst_35424 = (inst_35411 + (1));
var tmp35489 = inst_35408;
var tmp35490 = inst_35409;
var tmp35491 = inst_35410;
var inst_35408__$1 = tmp35489;
var inst_35409__$1 = tmp35490;
var inst_35410__$1 = tmp35491;
var inst_35411__$1 = inst_35424;
var state_35468__$1 = (function (){var statearr_35495 = state_35468;
(statearr_35495[(9)] = inst_35411__$1);

(statearr_35495[(22)] = inst_35423);

(statearr_35495[(20)] = inst_35408__$1);

(statearr_35495[(11)] = inst_35409__$1);

(statearr_35495[(21)] = inst_35410__$1);

return statearr_35495;
})();
var statearr_35496_35572 = state_35468__$1;
(statearr_35496_35572[(2)] = null);

(statearr_35496_35572[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (40))){
var inst_35436 = (state_35468[(23)]);
var inst_35440 = done(null);
var inst_35441 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35436);
var state_35468__$1 = (function (){var statearr_35497 = state_35468;
(statearr_35497[(24)] = inst_35440);

return statearr_35497;
})();
var statearr_35498_35573 = state_35468__$1;
(statearr_35498_35573[(2)] = inst_35441);

(statearr_35498_35573[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (33))){
var inst_35427 = (state_35468[(25)]);
var inst_35429 = cljs.core.chunked_seq_QMARK_(inst_35427);
var state_35468__$1 = state_35468;
if(inst_35429){
var statearr_35499_35574 = state_35468__$1;
(statearr_35499_35574[(1)] = (36));

} else {
var statearr_35500_35575 = state_35468__$1;
(statearr_35500_35575[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (13))){
var inst_35357 = (state_35468[(26)]);
var inst_35360 = cljs.core.async.close_BANG_(inst_35357);
var state_35468__$1 = state_35468;
var statearr_35501_35576 = state_35468__$1;
(statearr_35501_35576[(2)] = inst_35360);

(statearr_35501_35576[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (22))){
var inst_35380 = (state_35468[(8)]);
var inst_35383 = cljs.core.async.close_BANG_(inst_35380);
var state_35468__$1 = state_35468;
var statearr_35502_35577 = state_35468__$1;
(statearr_35502_35577[(2)] = inst_35383);

(statearr_35502_35577[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (36))){
var inst_35427 = (state_35468[(25)]);
var inst_35431 = cljs.core.chunk_first(inst_35427);
var inst_35432 = cljs.core.chunk_rest(inst_35427);
var inst_35433 = cljs.core.count(inst_35431);
var inst_35408 = inst_35432;
var inst_35409 = inst_35431;
var inst_35410 = inst_35433;
var inst_35411 = (0);
var state_35468__$1 = (function (){var statearr_35503 = state_35468;
(statearr_35503[(9)] = inst_35411);

(statearr_35503[(20)] = inst_35408);

(statearr_35503[(11)] = inst_35409);

(statearr_35503[(21)] = inst_35410);

return statearr_35503;
})();
var statearr_35504_35578 = state_35468__$1;
(statearr_35504_35578[(2)] = null);

(statearr_35504_35578[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (41))){
var inst_35427 = (state_35468[(25)]);
var inst_35443 = (state_35468[(2)]);
var inst_35444 = cljs.core.next(inst_35427);
var inst_35408 = inst_35444;
var inst_35409 = null;
var inst_35410 = (0);
var inst_35411 = (0);
var state_35468__$1 = (function (){var statearr_35505 = state_35468;
(statearr_35505[(9)] = inst_35411);

(statearr_35505[(20)] = inst_35408);

(statearr_35505[(11)] = inst_35409);

(statearr_35505[(27)] = inst_35443);

(statearr_35505[(21)] = inst_35410);

return statearr_35505;
})();
var statearr_35506_35579 = state_35468__$1;
(statearr_35506_35579[(2)] = null);

(statearr_35506_35579[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (43))){
var state_35468__$1 = state_35468;
var statearr_35507_35580 = state_35468__$1;
(statearr_35507_35580[(2)] = null);

(statearr_35507_35580[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (29))){
var inst_35452 = (state_35468[(2)]);
var state_35468__$1 = state_35468;
var statearr_35508_35581 = state_35468__$1;
(statearr_35508_35581[(2)] = inst_35452);

(statearr_35508_35581[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (44))){
var inst_35461 = (state_35468[(2)]);
var state_35468__$1 = (function (){var statearr_35509 = state_35468;
(statearr_35509[(28)] = inst_35461);

return statearr_35509;
})();
var statearr_35510_35582 = state_35468__$1;
(statearr_35510_35582[(2)] = null);

(statearr_35510_35582[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (6))){
var inst_35400 = (state_35468[(29)]);
var inst_35399 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_35400__$1 = cljs.core.keys(inst_35399);
var inst_35401 = cljs.core.count(inst_35400__$1);
var inst_35402 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_35401) : cljs.core.reset_BANG_.call(null,dctr,inst_35401));
var inst_35407 = cljs.core.seq(inst_35400__$1);
var inst_35408 = inst_35407;
var inst_35409 = null;
var inst_35410 = (0);
var inst_35411 = (0);
var state_35468__$1 = (function (){var statearr_35511 = state_35468;
(statearr_35511[(9)] = inst_35411);

(statearr_35511[(20)] = inst_35408);

(statearr_35511[(30)] = inst_35402);

(statearr_35511[(11)] = inst_35409);

(statearr_35511[(21)] = inst_35410);

(statearr_35511[(29)] = inst_35400__$1);

return statearr_35511;
})();
var statearr_35512_35583 = state_35468__$1;
(statearr_35512_35583[(2)] = null);

(statearr_35512_35583[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (28))){
var inst_35408 = (state_35468[(20)]);
var inst_35427 = (state_35468[(25)]);
var inst_35427__$1 = cljs.core.seq(inst_35408);
var state_35468__$1 = (function (){var statearr_35513 = state_35468;
(statearr_35513[(25)] = inst_35427__$1);

return statearr_35513;
})();
if(inst_35427__$1){
var statearr_35514_35584 = state_35468__$1;
(statearr_35514_35584[(1)] = (33));

} else {
var statearr_35515_35585 = state_35468__$1;
(statearr_35515_35585[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (25))){
var inst_35411 = (state_35468[(9)]);
var inst_35410 = (state_35468[(21)]);
var inst_35413 = (inst_35411 < inst_35410);
var inst_35414 = inst_35413;
var state_35468__$1 = state_35468;
if(cljs.core.truth_(inst_35414)){
var statearr_35516_35586 = state_35468__$1;
(statearr_35516_35586[(1)] = (27));

} else {
var statearr_35517_35587 = state_35468__$1;
(statearr_35517_35587[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (34))){
var state_35468__$1 = state_35468;
var statearr_35518_35588 = state_35468__$1;
(statearr_35518_35588[(2)] = null);

(statearr_35518_35588[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (17))){
var state_35468__$1 = state_35468;
var statearr_35519_35589 = state_35468__$1;
(statearr_35519_35589[(2)] = null);

(statearr_35519_35589[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (3))){
var inst_35466 = (state_35468[(2)]);
var state_35468__$1 = state_35468;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35468__$1,inst_35466);
} else {
if((state_val_35469 === (12))){
var inst_35395 = (state_35468[(2)]);
var state_35468__$1 = state_35468;
var statearr_35520_35590 = state_35468__$1;
(statearr_35520_35590[(2)] = inst_35395);

(statearr_35520_35590[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (2))){
var state_35468__$1 = state_35468;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35468__$1,(4),ch);
} else {
if((state_val_35469 === (23))){
var state_35468__$1 = state_35468;
var statearr_35521_35591 = state_35468__$1;
(statearr_35521_35591[(2)] = null);

(statearr_35521_35591[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (35))){
var inst_35450 = (state_35468[(2)]);
var state_35468__$1 = state_35468;
var statearr_35522_35592 = state_35468__$1;
(statearr_35522_35592[(2)] = inst_35450);

(statearr_35522_35592[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (19))){
var inst_35367 = (state_35468[(7)]);
var inst_35371 = cljs.core.chunk_first(inst_35367);
var inst_35372 = cljs.core.chunk_rest(inst_35367);
var inst_35373 = cljs.core.count(inst_35371);
var inst_35345 = inst_35372;
var inst_35346 = inst_35371;
var inst_35347 = inst_35373;
var inst_35348 = (0);
var state_35468__$1 = (function (){var statearr_35523 = state_35468;
(statearr_35523[(13)] = inst_35346);

(statearr_35523[(14)] = inst_35347);

(statearr_35523[(15)] = inst_35348);

(statearr_35523[(16)] = inst_35345);

return statearr_35523;
})();
var statearr_35524_35593 = state_35468__$1;
(statearr_35524_35593[(2)] = null);

(statearr_35524_35593[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (11))){
var inst_35367 = (state_35468[(7)]);
var inst_35345 = (state_35468[(16)]);
var inst_35367__$1 = cljs.core.seq(inst_35345);
var state_35468__$1 = (function (){var statearr_35525 = state_35468;
(statearr_35525[(7)] = inst_35367__$1);

return statearr_35525;
})();
if(inst_35367__$1){
var statearr_35526_35594 = state_35468__$1;
(statearr_35526_35594[(1)] = (16));

} else {
var statearr_35527_35595 = state_35468__$1;
(statearr_35527_35595[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (9))){
var inst_35397 = (state_35468[(2)]);
var state_35468__$1 = state_35468;
var statearr_35528_35596 = state_35468__$1;
(statearr_35528_35596[(2)] = inst_35397);

(statearr_35528_35596[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (5))){
var inst_35343 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_35344 = cljs.core.seq(inst_35343);
var inst_35345 = inst_35344;
var inst_35346 = null;
var inst_35347 = (0);
var inst_35348 = (0);
var state_35468__$1 = (function (){var statearr_35529 = state_35468;
(statearr_35529[(13)] = inst_35346);

(statearr_35529[(14)] = inst_35347);

(statearr_35529[(15)] = inst_35348);

(statearr_35529[(16)] = inst_35345);

return statearr_35529;
})();
var statearr_35530_35597 = state_35468__$1;
(statearr_35530_35597[(2)] = null);

(statearr_35530_35597[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (14))){
var state_35468__$1 = state_35468;
var statearr_35531_35598 = state_35468__$1;
(statearr_35531_35598[(2)] = null);

(statearr_35531_35598[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (45))){
var inst_35458 = (state_35468[(2)]);
var state_35468__$1 = state_35468;
var statearr_35532_35599 = state_35468__$1;
(statearr_35532_35599[(2)] = inst_35458);

(statearr_35532_35599[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (26))){
var inst_35400 = (state_35468[(29)]);
var inst_35454 = (state_35468[(2)]);
var inst_35455 = cljs.core.seq(inst_35400);
var state_35468__$1 = (function (){var statearr_35533 = state_35468;
(statearr_35533[(31)] = inst_35454);

return statearr_35533;
})();
if(inst_35455){
var statearr_35534_35600 = state_35468__$1;
(statearr_35534_35600[(1)] = (42));

} else {
var statearr_35535_35601 = state_35468__$1;
(statearr_35535_35601[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (16))){
var inst_35367 = (state_35468[(7)]);
var inst_35369 = cljs.core.chunked_seq_QMARK_(inst_35367);
var state_35468__$1 = state_35468;
if(inst_35369){
var statearr_35536_35602 = state_35468__$1;
(statearr_35536_35602[(1)] = (19));

} else {
var statearr_35537_35603 = state_35468__$1;
(statearr_35537_35603[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (38))){
var inst_35447 = (state_35468[(2)]);
var state_35468__$1 = state_35468;
var statearr_35538_35604 = state_35468__$1;
(statearr_35538_35604[(2)] = inst_35447);

(statearr_35538_35604[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (30))){
var state_35468__$1 = state_35468;
var statearr_35539_35605 = state_35468__$1;
(statearr_35539_35605[(2)] = null);

(statearr_35539_35605[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (10))){
var inst_35346 = (state_35468[(13)]);
var inst_35348 = (state_35468[(15)]);
var inst_35356 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35346,inst_35348);
var inst_35357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35356,(0),null);
var inst_35358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35356,(1),null);
var state_35468__$1 = (function (){var statearr_35540 = state_35468;
(statearr_35540[(26)] = inst_35357);

return statearr_35540;
})();
if(cljs.core.truth_(inst_35358)){
var statearr_35541_35606 = state_35468__$1;
(statearr_35541_35606[(1)] = (13));

} else {
var statearr_35542_35607 = state_35468__$1;
(statearr_35542_35607[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (18))){
var inst_35393 = (state_35468[(2)]);
var state_35468__$1 = state_35468;
var statearr_35543_35608 = state_35468__$1;
(statearr_35543_35608[(2)] = inst_35393);

(statearr_35543_35608[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (42))){
var state_35468__$1 = state_35468;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35468__$1,(45),dchan);
} else {
if((state_val_35469 === (37))){
var inst_35436 = (state_35468[(23)]);
var inst_35427 = (state_35468[(25)]);
var inst_35336 = (state_35468[(12)]);
var inst_35436__$1 = cljs.core.first(inst_35427);
var inst_35437 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35436__$1,inst_35336,done);
var state_35468__$1 = (function (){var statearr_35544 = state_35468;
(statearr_35544[(23)] = inst_35436__$1);

return statearr_35544;
})();
if(cljs.core.truth_(inst_35437)){
var statearr_35545_35609 = state_35468__$1;
(statearr_35545_35609[(1)] = (39));

} else {
var statearr_35546_35610 = state_35468__$1;
(statearr_35546_35610[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35469 === (8))){
var inst_35347 = (state_35468[(14)]);
var inst_35348 = (state_35468[(15)]);
var inst_35350 = (inst_35348 < inst_35347);
var inst_35351 = inst_35350;
var state_35468__$1 = state_35468;
if(cljs.core.truth_(inst_35351)){
var statearr_35547_35611 = state_35468__$1;
(statearr_35547_35611[(1)] = (10));

} else {
var statearr_35548_35612 = state_35468__$1;
(statearr_35548_35612[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__34193__auto___35558,cs,m,dchan,dctr,done))
;
return ((function (switch__34069__auto__,c__34193__auto___35558,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__34070__auto__ = null;
var cljs$core$async$mult_$_state_machine__34070__auto____0 = (function (){
var statearr_35552 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35552[(0)] = cljs$core$async$mult_$_state_machine__34070__auto__);

(statearr_35552[(1)] = (1));

return statearr_35552;
});
var cljs$core$async$mult_$_state_machine__34070__auto____1 = (function (state_35468){
while(true){
var ret_value__34071__auto__ = (function (){try{while(true){
var result__34072__auto__ = switch__34069__auto__(state_35468);
if(cljs.core.keyword_identical_QMARK_(result__34072__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34072__auto__;
}
break;
}
}catch (e35553){if((e35553 instanceof Object)){
var ex__34073__auto__ = e35553;
var statearr_35554_35613 = state_35468;
(statearr_35554_35613[(5)] = ex__34073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35468);

return cljs.core.cst$kw$recur;
} else {
throw e35553;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34071__auto__,cljs.core.cst$kw$recur)){
var G__35614 = state_35468;
state_35468 = G__35614;
continue;
} else {
return ret_value__34071__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34070__auto__ = function(state_35468){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34070__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34070__auto____1.call(this,state_35468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34070__auto____0;
cljs$core$async$mult_$_state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34070__auto____1;
return cljs$core$async$mult_$_state_machine__34070__auto__;
})()
;})(switch__34069__auto__,c__34193__auto___35558,cs,m,dchan,dctr,done))
})();
var state__34195__auto__ = (function (){var statearr_35555 = (f__34194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34194__auto__.cljs$core$IFn$_invoke$arity$0() : f__34194__auto__.call(null));
(statearr_35555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34193__auto___35558);

return statearr_35555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34195__auto__);
});})(c__34193__auto___35558,cs,m,dchan,dctr,done))
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
var args35615 = [];
var len__7454__auto___35618 = arguments.length;
var i__7455__auto___35619 = (0);
while(true){
if((i__7455__auto___35619 < len__7454__auto___35618)){
args35615.push((arguments[i__7455__auto___35619]));

var G__35620 = (i__7455__auto___35619 + (1));
i__7455__auto___35619 = G__35620;
continue;
} else {
}
break;
}

var G__35617 = args35615.length;
switch (G__35617) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35615.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7046__auto__ = (((m == null))?null:m);
var m__7047__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7046__auto__)]);
if(!((m__7047__auto__ == null))){
return (m__7047__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7047__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7047__auto__.call(null,m,ch));
} else {
var m__7047__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7047__auto____$1 == null))){
return (m__7047__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7047__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7047__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7046__auto__ = (((m == null))?null:m);
var m__7047__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7046__auto__)]);
if(!((m__7047__auto__ == null))){
return (m__7047__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7047__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7047__auto__.call(null,m,ch));
} else {
var m__7047__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7047__auto____$1 == null))){
return (m__7047__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7047__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7047__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7046__auto__ = (((m == null))?null:m);
var m__7047__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7046__auto__)]);
if(!((m__7047__auto__ == null))){
return (m__7047__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7047__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7047__auto__.call(null,m));
} else {
var m__7047__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7047__auto____$1 == null))){
return (m__7047__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7047__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7047__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7046__auto__ = (((m == null))?null:m);
var m__7047__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7046__auto__)]);
if(!((m__7047__auto__ == null))){
return (m__7047__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7047__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7047__auto__.call(null,m,state_map));
} else {
var m__7047__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7047__auto____$1 == null))){
return (m__7047__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7047__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7047__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7046__auto__ = (((m == null))?null:m);
var m__7047__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7046__auto__)]);
if(!((m__7047__auto__ == null))){
return (m__7047__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7047__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7047__auto__.call(null,m,mode));
} else {
var m__7047__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7047__auto____$1 == null))){
return (m__7047__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7047__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7047__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7461__auto__ = [];
var len__7454__auto___35632 = arguments.length;
var i__7455__auto___35633 = (0);
while(true){
if((i__7455__auto___35633 < len__7454__auto___35632)){
args__7461__auto__.push((arguments[i__7455__auto___35633]));

var G__35634 = (i__7455__auto___35633 + (1));
i__7455__auto___35633 = G__35634;
continue;
} else {
}
break;
}

var argseq__7462__auto__ = ((((3) < args__7461__auto__.length))?(new cljs.core.IndexedSeq(args__7461__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7462__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35626){
var map__35627 = p__35626;
var map__35627__$1 = ((((!((map__35627 == null)))?((((map__35627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35627):map__35627);
var opts = map__35627__$1;
var statearr_35629_35635 = state;
(statearr_35629_35635[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__35627,map__35627__$1,opts){
return (function (val){
var statearr_35630_35636 = state;
(statearr_35630_35636[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__35627,map__35627__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_35631_35637 = state;
(statearr_35631_35637[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35622){
var G__35623 = cljs.core.first(seq35622);
var seq35622__$1 = cljs.core.next(seq35622);
var G__35624 = cljs.core.first(seq35622__$1);
var seq35622__$2 = cljs.core.next(seq35622__$1);
var G__35625 = cljs.core.first(seq35622__$2);
var seq35622__$3 = cljs.core.next(seq35622__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35623,G__35624,G__35625,seq35622__$3);
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
var cs = (function (){var G__35807 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35807) : cljs.core.atom.call(null,G__35807));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__35808 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35808) : cljs.core.atom.call(null,G__35808));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async35809 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35809 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35810){
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
this.meta35810 = meta35810;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35811,meta35810__$1){
var self__ = this;
var _35811__$1 = this;
return (new cljs.core.async.t_cljs$core$async35809(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35810__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35809.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35811){
var self__ = this;
var _35811__$1 = this;
return self__.meta35810;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35809.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async35809.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35809.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async35809.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35809.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35809.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__35812_35976 = self__.cs;
var G__35813_35977 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35812_35976,G__35813_35977) : cljs.core.reset_BANG_.call(null,G__35812_35976,G__35813_35977));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35809.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35809.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35809.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta35810], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35809.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35809.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35809";

cljs.core.async.t_cljs$core$async35809.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6989__auto__,writer__6990__auto__,opt__6991__auto__){
return cljs.core._write(writer__6990__auto__,"cljs.core.async/t_cljs$core$async35809");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async35809 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35809(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35810){
return (new cljs.core.async.t_cljs$core$async35809(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35810));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35809(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34193__auto___35978 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34193__auto___35978,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34194__auto__ = (function (){var switch__34069__auto__ = ((function (c__34193__auto___35978,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35913){
var state_val_35914 = (state_35913[(1)]);
if((state_val_35914 === (7))){
var inst_35829 = (state_35913[(2)]);
var state_35913__$1 = state_35913;
var statearr_35915_35979 = state_35913__$1;
(statearr_35915_35979[(2)] = inst_35829);

(statearr_35915_35979[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (20))){
var inst_35841 = (state_35913[(7)]);
var state_35913__$1 = state_35913;
var statearr_35916_35980 = state_35913__$1;
(statearr_35916_35980[(2)] = inst_35841);

(statearr_35916_35980[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (27))){
var state_35913__$1 = state_35913;
var statearr_35917_35981 = state_35913__$1;
(statearr_35917_35981[(2)] = null);

(statearr_35917_35981[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (1))){
var inst_35817 = (state_35913[(8)]);
var inst_35817__$1 = calc_state();
var inst_35819 = (inst_35817__$1 == null);
var inst_35820 = cljs.core.not(inst_35819);
var state_35913__$1 = (function (){var statearr_35918 = state_35913;
(statearr_35918[(8)] = inst_35817__$1);

return statearr_35918;
})();
if(inst_35820){
var statearr_35919_35982 = state_35913__$1;
(statearr_35919_35982[(1)] = (2));

} else {
var statearr_35920_35983 = state_35913__$1;
(statearr_35920_35983[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (24))){
var inst_35873 = (state_35913[(9)]);
var inst_35887 = (state_35913[(10)]);
var inst_35864 = (state_35913[(11)]);
var inst_35887__$1 = (inst_35864.cljs$core$IFn$_invoke$arity$1 ? inst_35864.cljs$core$IFn$_invoke$arity$1(inst_35873) : inst_35864.call(null,inst_35873));
var state_35913__$1 = (function (){var statearr_35921 = state_35913;
(statearr_35921[(10)] = inst_35887__$1);

return statearr_35921;
})();
if(cljs.core.truth_(inst_35887__$1)){
var statearr_35922_35984 = state_35913__$1;
(statearr_35922_35984[(1)] = (29));

} else {
var statearr_35923_35985 = state_35913__$1;
(statearr_35923_35985[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (4))){
var inst_35832 = (state_35913[(2)]);
var state_35913__$1 = state_35913;
if(cljs.core.truth_(inst_35832)){
var statearr_35924_35986 = state_35913__$1;
(statearr_35924_35986[(1)] = (8));

} else {
var statearr_35925_35987 = state_35913__$1;
(statearr_35925_35987[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (15))){
var inst_35858 = (state_35913[(2)]);
var state_35913__$1 = state_35913;
if(cljs.core.truth_(inst_35858)){
var statearr_35926_35988 = state_35913__$1;
(statearr_35926_35988[(1)] = (19));

} else {
var statearr_35927_35989 = state_35913__$1;
(statearr_35927_35989[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (21))){
var inst_35863 = (state_35913[(12)]);
var inst_35863__$1 = (state_35913[(2)]);
var inst_35864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35863__$1,cljs.core.cst$kw$solos);
var inst_35865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35863__$1,cljs.core.cst$kw$mutes);
var inst_35866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35863__$1,cljs.core.cst$kw$reads);
var state_35913__$1 = (function (){var statearr_35928 = state_35913;
(statearr_35928[(12)] = inst_35863__$1);

(statearr_35928[(13)] = inst_35865);

(statearr_35928[(11)] = inst_35864);

return statearr_35928;
})();
return cljs.core.async.ioc_alts_BANG_(state_35913__$1,(22),inst_35866);
} else {
if((state_val_35914 === (31))){
var inst_35895 = (state_35913[(2)]);
var state_35913__$1 = state_35913;
if(cljs.core.truth_(inst_35895)){
var statearr_35929_35990 = state_35913__$1;
(statearr_35929_35990[(1)] = (32));

} else {
var statearr_35930_35991 = state_35913__$1;
(statearr_35930_35991[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (32))){
var inst_35872 = (state_35913[(14)]);
var state_35913__$1 = state_35913;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35913__$1,(35),out,inst_35872);
} else {
if((state_val_35914 === (33))){
var inst_35863 = (state_35913[(12)]);
var inst_35841 = inst_35863;
var state_35913__$1 = (function (){var statearr_35931 = state_35913;
(statearr_35931[(7)] = inst_35841);

return statearr_35931;
})();
var statearr_35932_35992 = state_35913__$1;
(statearr_35932_35992[(2)] = null);

(statearr_35932_35992[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (13))){
var inst_35841 = (state_35913[(7)]);
var inst_35848 = inst_35841.cljs$lang$protocol_mask$partition0$;
var inst_35849 = (inst_35848 & (64));
var inst_35850 = inst_35841.cljs$core$ISeq$;
var inst_35851 = (inst_35849) || (inst_35850);
var state_35913__$1 = state_35913;
if(cljs.core.truth_(inst_35851)){
var statearr_35933_35993 = state_35913__$1;
(statearr_35933_35993[(1)] = (16));

} else {
var statearr_35934_35994 = state_35913__$1;
(statearr_35934_35994[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (22))){
var inst_35872 = (state_35913[(14)]);
var inst_35873 = (state_35913[(9)]);
var inst_35871 = (state_35913[(2)]);
var inst_35872__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35871,(0),null);
var inst_35873__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35871,(1),null);
var inst_35874 = (inst_35872__$1 == null);
var inst_35875 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35873__$1,change);
var inst_35876 = (inst_35874) || (inst_35875);
var state_35913__$1 = (function (){var statearr_35935 = state_35913;
(statearr_35935[(14)] = inst_35872__$1);

(statearr_35935[(9)] = inst_35873__$1);

return statearr_35935;
})();
if(cljs.core.truth_(inst_35876)){
var statearr_35936_35995 = state_35913__$1;
(statearr_35936_35995[(1)] = (23));

} else {
var statearr_35937_35996 = state_35913__$1;
(statearr_35937_35996[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (36))){
var inst_35863 = (state_35913[(12)]);
var inst_35841 = inst_35863;
var state_35913__$1 = (function (){var statearr_35938 = state_35913;
(statearr_35938[(7)] = inst_35841);

return statearr_35938;
})();
var statearr_35939_35997 = state_35913__$1;
(statearr_35939_35997[(2)] = null);

(statearr_35939_35997[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (29))){
var inst_35887 = (state_35913[(10)]);
var state_35913__$1 = state_35913;
var statearr_35940_35998 = state_35913__$1;
(statearr_35940_35998[(2)] = inst_35887);

(statearr_35940_35998[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (6))){
var state_35913__$1 = state_35913;
var statearr_35941_35999 = state_35913__$1;
(statearr_35941_35999[(2)] = false);

(statearr_35941_35999[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (28))){
var inst_35883 = (state_35913[(2)]);
var inst_35884 = calc_state();
var inst_35841 = inst_35884;
var state_35913__$1 = (function (){var statearr_35942 = state_35913;
(statearr_35942[(15)] = inst_35883);

(statearr_35942[(7)] = inst_35841);

return statearr_35942;
})();
var statearr_35943_36000 = state_35913__$1;
(statearr_35943_36000[(2)] = null);

(statearr_35943_36000[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (25))){
var inst_35909 = (state_35913[(2)]);
var state_35913__$1 = state_35913;
var statearr_35944_36001 = state_35913__$1;
(statearr_35944_36001[(2)] = inst_35909);

(statearr_35944_36001[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (34))){
var inst_35907 = (state_35913[(2)]);
var state_35913__$1 = state_35913;
var statearr_35945_36002 = state_35913__$1;
(statearr_35945_36002[(2)] = inst_35907);

(statearr_35945_36002[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (17))){
var state_35913__$1 = state_35913;
var statearr_35946_36003 = state_35913__$1;
(statearr_35946_36003[(2)] = false);

(statearr_35946_36003[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (3))){
var state_35913__$1 = state_35913;
var statearr_35947_36004 = state_35913__$1;
(statearr_35947_36004[(2)] = false);

(statearr_35947_36004[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (12))){
var inst_35911 = (state_35913[(2)]);
var state_35913__$1 = state_35913;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35913__$1,inst_35911);
} else {
if((state_val_35914 === (2))){
var inst_35817 = (state_35913[(8)]);
var inst_35822 = inst_35817.cljs$lang$protocol_mask$partition0$;
var inst_35823 = (inst_35822 & (64));
var inst_35824 = inst_35817.cljs$core$ISeq$;
var inst_35825 = (inst_35823) || (inst_35824);
var state_35913__$1 = state_35913;
if(cljs.core.truth_(inst_35825)){
var statearr_35948_36005 = state_35913__$1;
(statearr_35948_36005[(1)] = (5));

} else {
var statearr_35949_36006 = state_35913__$1;
(statearr_35949_36006[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (23))){
var inst_35872 = (state_35913[(14)]);
var inst_35878 = (inst_35872 == null);
var state_35913__$1 = state_35913;
if(cljs.core.truth_(inst_35878)){
var statearr_35950_36007 = state_35913__$1;
(statearr_35950_36007[(1)] = (26));

} else {
var statearr_35951_36008 = state_35913__$1;
(statearr_35951_36008[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (35))){
var inst_35898 = (state_35913[(2)]);
var state_35913__$1 = state_35913;
if(cljs.core.truth_(inst_35898)){
var statearr_35952_36009 = state_35913__$1;
(statearr_35952_36009[(1)] = (36));

} else {
var statearr_35953_36010 = state_35913__$1;
(statearr_35953_36010[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (19))){
var inst_35841 = (state_35913[(7)]);
var inst_35860 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35841);
var state_35913__$1 = state_35913;
var statearr_35954_36011 = state_35913__$1;
(statearr_35954_36011[(2)] = inst_35860);

(statearr_35954_36011[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (11))){
var inst_35841 = (state_35913[(7)]);
var inst_35845 = (inst_35841 == null);
var inst_35846 = cljs.core.not(inst_35845);
var state_35913__$1 = state_35913;
if(inst_35846){
var statearr_35955_36012 = state_35913__$1;
(statearr_35955_36012[(1)] = (13));

} else {
var statearr_35956_36013 = state_35913__$1;
(statearr_35956_36013[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (9))){
var inst_35817 = (state_35913[(8)]);
var state_35913__$1 = state_35913;
var statearr_35957_36014 = state_35913__$1;
(statearr_35957_36014[(2)] = inst_35817);

(statearr_35957_36014[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (5))){
var state_35913__$1 = state_35913;
var statearr_35958_36015 = state_35913__$1;
(statearr_35958_36015[(2)] = true);

(statearr_35958_36015[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (14))){
var state_35913__$1 = state_35913;
var statearr_35959_36016 = state_35913__$1;
(statearr_35959_36016[(2)] = false);

(statearr_35959_36016[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (26))){
var inst_35873 = (state_35913[(9)]);
var inst_35880 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35873);
var state_35913__$1 = state_35913;
var statearr_35960_36017 = state_35913__$1;
(statearr_35960_36017[(2)] = inst_35880);

(statearr_35960_36017[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (16))){
var state_35913__$1 = state_35913;
var statearr_35961_36018 = state_35913__$1;
(statearr_35961_36018[(2)] = true);

(statearr_35961_36018[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (38))){
var inst_35903 = (state_35913[(2)]);
var state_35913__$1 = state_35913;
var statearr_35962_36019 = state_35913__$1;
(statearr_35962_36019[(2)] = inst_35903);

(statearr_35962_36019[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (30))){
var inst_35873 = (state_35913[(9)]);
var inst_35865 = (state_35913[(13)]);
var inst_35864 = (state_35913[(11)]);
var inst_35890 = cljs.core.empty_QMARK_(inst_35864);
var inst_35891 = (inst_35865.cljs$core$IFn$_invoke$arity$1 ? inst_35865.cljs$core$IFn$_invoke$arity$1(inst_35873) : inst_35865.call(null,inst_35873));
var inst_35892 = cljs.core.not(inst_35891);
var inst_35893 = (inst_35890) && (inst_35892);
var state_35913__$1 = state_35913;
var statearr_35963_36020 = state_35913__$1;
(statearr_35963_36020[(2)] = inst_35893);

(statearr_35963_36020[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (10))){
var inst_35817 = (state_35913[(8)]);
var inst_35837 = (state_35913[(2)]);
var inst_35838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35837,cljs.core.cst$kw$solos);
var inst_35839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35837,cljs.core.cst$kw$mutes);
var inst_35840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35837,cljs.core.cst$kw$reads);
var inst_35841 = inst_35817;
var state_35913__$1 = (function (){var statearr_35964 = state_35913;
(statearr_35964[(16)] = inst_35838);

(statearr_35964[(17)] = inst_35839);

(statearr_35964[(7)] = inst_35841);

(statearr_35964[(18)] = inst_35840);

return statearr_35964;
})();
var statearr_35965_36021 = state_35913__$1;
(statearr_35965_36021[(2)] = null);

(statearr_35965_36021[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (18))){
var inst_35855 = (state_35913[(2)]);
var state_35913__$1 = state_35913;
var statearr_35966_36022 = state_35913__$1;
(statearr_35966_36022[(2)] = inst_35855);

(statearr_35966_36022[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (37))){
var state_35913__$1 = state_35913;
var statearr_35967_36023 = state_35913__$1;
(statearr_35967_36023[(2)] = null);

(statearr_35967_36023[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35914 === (8))){
var inst_35817 = (state_35913[(8)]);
var inst_35834 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35817);
var state_35913__$1 = state_35913;
var statearr_35968_36024 = state_35913__$1;
(statearr_35968_36024[(2)] = inst_35834);

(statearr_35968_36024[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__34193__auto___35978,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__34069__auto__,c__34193__auto___35978,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__34070__auto__ = null;
var cljs$core$async$mix_$_state_machine__34070__auto____0 = (function (){
var statearr_35972 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35972[(0)] = cljs$core$async$mix_$_state_machine__34070__auto__);

(statearr_35972[(1)] = (1));

return statearr_35972;
});
var cljs$core$async$mix_$_state_machine__34070__auto____1 = (function (state_35913){
while(true){
var ret_value__34071__auto__ = (function (){try{while(true){
var result__34072__auto__ = switch__34069__auto__(state_35913);
if(cljs.core.keyword_identical_QMARK_(result__34072__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34072__auto__;
}
break;
}
}catch (e35973){if((e35973 instanceof Object)){
var ex__34073__auto__ = e35973;
var statearr_35974_36025 = state_35913;
(statearr_35974_36025[(5)] = ex__34073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35913);

return cljs.core.cst$kw$recur;
} else {
throw e35973;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34071__auto__,cljs.core.cst$kw$recur)){
var G__36026 = state_35913;
state_35913 = G__36026;
continue;
} else {
return ret_value__34071__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34070__auto__ = function(state_35913){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34070__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34070__auto____1.call(this,state_35913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34070__auto____0;
cljs$core$async$mix_$_state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34070__auto____1;
return cljs$core$async$mix_$_state_machine__34070__auto__;
})()
;})(switch__34069__auto__,c__34193__auto___35978,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34195__auto__ = (function (){var statearr_35975 = (f__34194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34194__auto__.cljs$core$IFn$_invoke$arity$0() : f__34194__auto__.call(null));
(statearr_35975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34193__auto___35978);

return statearr_35975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34195__auto__);
});})(c__34193__auto___35978,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7046__auto__ = (((p == null))?null:p);
var m__7047__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7046__auto__)]);
if(!((m__7047__auto__ == null))){
return (m__7047__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7047__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7047__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__7047__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7047__auto____$1 == null))){
return (m__7047__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7047__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7047__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7046__auto__ = (((p == null))?null:p);
var m__7047__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7046__auto__)]);
if(!((m__7047__auto__ == null))){
return (m__7047__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7047__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7047__auto__.call(null,p,v,ch));
} else {
var m__7047__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7047__auto____$1 == null))){
return (m__7047__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7047__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7047__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args36027 = [];
var len__7454__auto___36030 = arguments.length;
var i__7455__auto___36031 = (0);
while(true){
if((i__7455__auto___36031 < len__7454__auto___36030)){
args36027.push((arguments[i__7455__auto___36031]));

var G__36032 = (i__7455__auto___36031 + (1));
i__7455__auto___36031 = G__36032;
continue;
} else {
}
break;
}

var G__36029 = args36027.length;
switch (G__36029) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36027.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7046__auto__ = (((p == null))?null:p);
var m__7047__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7046__auto__)]);
if(!((m__7047__auto__ == null))){
return (m__7047__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7047__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__7047__auto__.call(null,p));
} else {
var m__7047__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7047__auto____$1 == null))){
return (m__7047__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7047__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__7047__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7046__auto__ = (((p == null))?null:p);
var m__7047__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7046__auto__)]);
if(!((m__7047__auto__ == null))){
return (m__7047__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7047__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__7047__auto__.call(null,p,v));
} else {
var m__7047__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7047__auto____$1 == null))){
return (m__7047__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7047__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__7047__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var args36035 = [];
var len__7454__auto___36163 = arguments.length;
var i__7455__auto___36164 = (0);
while(true){
if((i__7455__auto___36164 < len__7454__auto___36163)){
args36035.push((arguments[i__7455__auto___36164]));

var G__36165 = (i__7455__auto___36164 + (1));
i__7455__auto___36164 = G__36165;
continue;
} else {
}
break;
}

var G__36037 = args36035.length;
switch (G__36037) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36035.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__36038 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36038) : cljs.core.atom.call(null,G__36038));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6383__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6383__auto__)){
return or__6383__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6383__auto__,mults){
return (function (p1__36034_SHARP_){
if(cljs.core.truth_((p1__36034_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__36034_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__36034_SHARP_.call(null,topic)))){
return p1__36034_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__36034_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6383__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async36039 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36039 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36040){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36040 = meta36040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36041,meta36040__$1){
var self__ = this;
var _36041__$1 = this;
return (new cljs.core.async.t_cljs$core$async36039(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36040__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36039.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36041){
var self__ = this;
var _36041__$1 = this;
return self__.meta36040;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36039.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async36039.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36039.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async36039.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36039.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36039.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__36042 = self__.mults;
var G__36043 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36042,G__36043) : cljs.core.reset_BANG_.call(null,G__36042,G__36043));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36039.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36039.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta36040], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36039.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36039.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36039";

cljs.core.async.t_cljs$core$async36039.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6989__auto__,writer__6990__auto__,opt__6991__auto__){
return cljs.core._write(writer__6990__auto__,"cljs.core.async/t_cljs$core$async36039");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async36039 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async36039(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36040){
return (new cljs.core.async.t_cljs$core$async36039(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36040));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async36039(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34193__auto___36167 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34193__auto___36167,mults,ensure_mult,p){
return (function (){
var f__34194__auto__ = (function (){var switch__34069__auto__ = ((function (c__34193__auto___36167,mults,ensure_mult,p){
return (function (state_36115){
var state_val_36116 = (state_36115[(1)]);
if((state_val_36116 === (7))){
var inst_36111 = (state_36115[(2)]);
var state_36115__$1 = state_36115;
var statearr_36117_36168 = state_36115__$1;
(statearr_36117_36168[(2)] = inst_36111);

(statearr_36117_36168[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36116 === (20))){
var state_36115__$1 = state_36115;
var statearr_36118_36169 = state_36115__$1;
(statearr_36118_36169[(2)] = null);

(statearr_36118_36169[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36116 === (1))){
var state_36115__$1 = state_36115;
var statearr_36119_36170 = state_36115__$1;
(statearr_36119_36170[(2)] = null);

(statearr_36119_36170[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36116 === (24))){
var inst_36094 = (state_36115[(7)]);
var inst_36103 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_36094);
var state_36115__$1 = state_36115;
var statearr_36120_36171 = state_36115__$1;
(statearr_36120_36171[(2)] = inst_36103);

(statearr_36120_36171[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36116 === (4))){
var inst_36046 = (state_36115[(8)]);
var inst_36046__$1 = (state_36115[(2)]);
var inst_36047 = (inst_36046__$1 == null);
var state_36115__$1 = (function (){var statearr_36121 = state_36115;
(statearr_36121[(8)] = inst_36046__$1);

return statearr_36121;
})();
if(cljs.core.truth_(inst_36047)){
var statearr_36122_36172 = state_36115__$1;
(statearr_36122_36172[(1)] = (5));

} else {
var statearr_36123_36173 = state_36115__$1;
(statearr_36123_36173[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36116 === (15))){
var inst_36088 = (state_36115[(2)]);
var state_36115__$1 = state_36115;
var statearr_36124_36174 = state_36115__$1;
(statearr_36124_36174[(2)] = inst_36088);

(statearr_36124_36174[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36116 === (21))){
var inst_36108 = (state_36115[(2)]);
var state_36115__$1 = (function (){var statearr_36125 = state_36115;
(statearr_36125[(9)] = inst_36108);

return statearr_36125;
})();
var statearr_36126_36175 = state_36115__$1;
(statearr_36126_36175[(2)] = null);

(statearr_36126_36175[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36116 === (13))){
var inst_36070 = (state_36115[(10)]);
var inst_36072 = cljs.core.chunked_seq_QMARK_(inst_36070);
var state_36115__$1 = state_36115;
if(inst_36072){
var statearr_36127_36176 = state_36115__$1;
(statearr_36127_36176[(1)] = (16));

} else {
var statearr_36128_36177 = state_36115__$1;
(statearr_36128_36177[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36116 === (22))){
var inst_36100 = (state_36115[(2)]);
var state_36115__$1 = state_36115;
if(cljs.core.truth_(inst_36100)){
var statearr_36129_36178 = state_36115__$1;
(statearr_36129_36178[(1)] = (23));

} else {
var statearr_36130_36179 = state_36115__$1;
(statearr_36130_36179[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36116 === (6))){
var inst_36046 = (state_36115[(8)]);
var inst_36096 = (state_36115[(11)]);
var inst_36094 = (state_36115[(7)]);
var inst_36094__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_36046) : topic_fn.call(null,inst_36046));
var inst_36095 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_36096__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36095,inst_36094__$1);
var state_36115__$1 = (function (){var statearr_36131 = state_36115;
(statearr_36131[(11)] = inst_36096__$1);

(statearr_36131[(7)] = inst_36094__$1);

return statearr_36131;
})();
if(cljs.core.truth_(inst_36096__$1)){
var statearr_36132_36180 = state_36115__$1;
(statearr_36132_36180[(1)] = (19));

} else {
var statearr_36133_36181 = state_36115__$1;
(statearr_36133_36181[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36116 === (25))){
var inst_36105 = (state_36115[(2)]);
var state_36115__$1 = state_36115;
var statearr_36134_36182 = state_36115__$1;
(statearr_36134_36182[(2)] = inst_36105);

(statearr_36134_36182[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36116 === (17))){
var inst_36070 = (state_36115[(10)]);
var inst_36079 = cljs.core.first(inst_36070);
var inst_36080 = cljs.core.async.muxch_STAR_(inst_36079);
var inst_36081 = cljs.core.async.close_BANG_(inst_36080);
var inst_36082 = cljs.core.next(inst_36070);
var inst_36056 = inst_36082;
var inst_36057 = null;
var inst_36058 = (0);
var inst_36059 = (0);
var state_36115__$1 = (function (){var statearr_36135 = state_36115;
(statearr_36135[(12)] = inst_36059);

(statearr_36135[(13)] = inst_36058);

(statearr_36135[(14)] = inst_36057);

(statearr_36135[(15)] = inst_36081);

(statearr_36135[(16)] = inst_36056);

return statearr_36135;
})();
var statearr_36136_36183 = state_36115__$1;
(statearr_36136_36183[(2)] = null);

(statearr_36136_36183[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36116 === (3))){
var inst_36113 = (state_36115[(2)]);
var state_36115__$1 = state_36115;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36115__$1,inst_36113);
} else {
if((state_val_36116 === (12))){
var inst_36090 = (state_36115[(2)]);
var state_36115__$1 = state_36115;
var statearr_36137_36184 = state_36115__$1;
(statearr_36137_36184[(2)] = inst_36090);

(statearr_36137_36184[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36116 === (2))){
var state_36115__$1 = state_36115;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36115__$1,(4),ch);
} else {
if((state_val_36116 === (23))){
var state_36115__$1 = state_36115;
var statearr_36138_36185 = state_36115__$1;
(statearr_36138_36185[(2)] = null);

(statearr_36138_36185[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36116 === (19))){
var inst_36046 = (state_36115[(8)]);
var inst_36096 = (state_36115[(11)]);
var inst_36098 = cljs.core.async.muxch_STAR_(inst_36096);
var state_36115__$1 = state_36115;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36115__$1,(22),inst_36098,inst_36046);
} else {
if((state_val_36116 === (11))){
var inst_36070 = (state_36115[(10)]);
var inst_36056 = (state_36115[(16)]);
var inst_36070__$1 = cljs.core.seq(inst_36056);
var state_36115__$1 = (function (){var statearr_36139 = state_36115;
(statearr_36139[(10)] = inst_36070__$1);

return statearr_36139;
})();
if(inst_36070__$1){
var statearr_36140_36186 = state_36115__$1;
(statearr_36140_36186[(1)] = (13));

} else {
var statearr_36141_36187 = state_36115__$1;
(statearr_36141_36187[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36116 === (9))){
var inst_36092 = (state_36115[(2)]);
var state_36115__$1 = state_36115;
var statearr_36142_36188 = state_36115__$1;
(statearr_36142_36188[(2)] = inst_36092);

(statearr_36142_36188[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36116 === (5))){
var inst_36053 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_36054 = cljs.core.vals(inst_36053);
var inst_36055 = cljs.core.seq(inst_36054);
var inst_36056 = inst_36055;
var inst_36057 = null;
var inst_36058 = (0);
var inst_36059 = (0);
var state_36115__$1 = (function (){var statearr_36143 = state_36115;
(statearr_36143[(12)] = inst_36059);

(statearr_36143[(13)] = inst_36058);

(statearr_36143[(14)] = inst_36057);

(statearr_36143[(16)] = inst_36056);

return statearr_36143;
})();
var statearr_36144_36189 = state_36115__$1;
(statearr_36144_36189[(2)] = null);

(statearr_36144_36189[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36116 === (14))){
var state_36115__$1 = state_36115;
var statearr_36148_36190 = state_36115__$1;
(statearr_36148_36190[(2)] = null);

(statearr_36148_36190[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36116 === (16))){
var inst_36070 = (state_36115[(10)]);
var inst_36074 = cljs.core.chunk_first(inst_36070);
var inst_36075 = cljs.core.chunk_rest(inst_36070);
var inst_36076 = cljs.core.count(inst_36074);
var inst_36056 = inst_36075;
var inst_36057 = inst_36074;
var inst_36058 = inst_36076;
var inst_36059 = (0);
var state_36115__$1 = (function (){var statearr_36149 = state_36115;
(statearr_36149[(12)] = inst_36059);

(statearr_36149[(13)] = inst_36058);

(statearr_36149[(14)] = inst_36057);

(statearr_36149[(16)] = inst_36056);

return statearr_36149;
})();
var statearr_36150_36191 = state_36115__$1;
(statearr_36150_36191[(2)] = null);

(statearr_36150_36191[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36116 === (10))){
var inst_36059 = (state_36115[(12)]);
var inst_36058 = (state_36115[(13)]);
var inst_36057 = (state_36115[(14)]);
var inst_36056 = (state_36115[(16)]);
var inst_36064 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36057,inst_36059);
var inst_36065 = cljs.core.async.muxch_STAR_(inst_36064);
var inst_36066 = cljs.core.async.close_BANG_(inst_36065);
var inst_36067 = (inst_36059 + (1));
var tmp36145 = inst_36058;
var tmp36146 = inst_36057;
var tmp36147 = inst_36056;
var inst_36056__$1 = tmp36147;
var inst_36057__$1 = tmp36146;
var inst_36058__$1 = tmp36145;
var inst_36059__$1 = inst_36067;
var state_36115__$1 = (function (){var statearr_36151 = state_36115;
(statearr_36151[(12)] = inst_36059__$1);

(statearr_36151[(13)] = inst_36058__$1);

(statearr_36151[(17)] = inst_36066);

(statearr_36151[(14)] = inst_36057__$1);

(statearr_36151[(16)] = inst_36056__$1);

return statearr_36151;
})();
var statearr_36152_36192 = state_36115__$1;
(statearr_36152_36192[(2)] = null);

(statearr_36152_36192[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36116 === (18))){
var inst_36085 = (state_36115[(2)]);
var state_36115__$1 = state_36115;
var statearr_36153_36193 = state_36115__$1;
(statearr_36153_36193[(2)] = inst_36085);

(statearr_36153_36193[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36116 === (8))){
var inst_36059 = (state_36115[(12)]);
var inst_36058 = (state_36115[(13)]);
var inst_36061 = (inst_36059 < inst_36058);
var inst_36062 = inst_36061;
var state_36115__$1 = state_36115;
if(cljs.core.truth_(inst_36062)){
var statearr_36154_36194 = state_36115__$1;
(statearr_36154_36194[(1)] = (10));

} else {
var statearr_36155_36195 = state_36115__$1;
(statearr_36155_36195[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__34193__auto___36167,mults,ensure_mult,p))
;
return ((function (switch__34069__auto__,c__34193__auto___36167,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__34070__auto__ = null;
var cljs$core$async$state_machine__34070__auto____0 = (function (){
var statearr_36159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36159[(0)] = cljs$core$async$state_machine__34070__auto__);

(statearr_36159[(1)] = (1));

return statearr_36159;
});
var cljs$core$async$state_machine__34070__auto____1 = (function (state_36115){
while(true){
var ret_value__34071__auto__ = (function (){try{while(true){
var result__34072__auto__ = switch__34069__auto__(state_36115);
if(cljs.core.keyword_identical_QMARK_(result__34072__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34072__auto__;
}
break;
}
}catch (e36160){if((e36160 instanceof Object)){
var ex__34073__auto__ = e36160;
var statearr_36161_36196 = state_36115;
(statearr_36161_36196[(5)] = ex__34073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36115);

return cljs.core.cst$kw$recur;
} else {
throw e36160;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34071__auto__,cljs.core.cst$kw$recur)){
var G__36197 = state_36115;
state_36115 = G__36197;
continue;
} else {
return ret_value__34071__auto__;
}
break;
}
});
cljs$core$async$state_machine__34070__auto__ = function(state_36115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34070__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34070__auto____1.call(this,state_36115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34070__auto____0;
cljs$core$async$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34070__auto____1;
return cljs$core$async$state_machine__34070__auto__;
})()
;})(switch__34069__auto__,c__34193__auto___36167,mults,ensure_mult,p))
})();
var state__34195__auto__ = (function (){var statearr_36162 = (f__34194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34194__auto__.cljs$core$IFn$_invoke$arity$0() : f__34194__auto__.call(null));
(statearr_36162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34193__auto___36167);

return statearr_36162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34195__auto__);
});})(c__34193__auto___36167,mults,ensure_mult,p))
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
var args36198 = [];
var len__7454__auto___36201 = arguments.length;
var i__7455__auto___36202 = (0);
while(true){
if((i__7455__auto___36202 < len__7454__auto___36201)){
args36198.push((arguments[i__7455__auto___36202]));

var G__36203 = (i__7455__auto___36202 + (1));
i__7455__auto___36202 = G__36203;
continue;
} else {
}
break;
}

var G__36200 = args36198.length;
switch (G__36200) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36198.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args36205 = [];
var len__7454__auto___36208 = arguments.length;
var i__7455__auto___36209 = (0);
while(true){
if((i__7455__auto___36209 < len__7454__auto___36208)){
args36205.push((arguments[i__7455__auto___36209]));

var G__36210 = (i__7455__auto___36209 + (1));
i__7455__auto___36209 = G__36210;
continue;
} else {
}
break;
}

var G__36207 = args36205.length;
switch (G__36207) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36205.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var args36212 = [];
var len__7454__auto___36283 = arguments.length;
var i__7455__auto___36284 = (0);
while(true){
if((i__7455__auto___36284 < len__7454__auto___36283)){
args36212.push((arguments[i__7455__auto___36284]));

var G__36285 = (i__7455__auto___36284 + (1));
i__7455__auto___36284 = G__36285;
continue;
} else {
}
break;
}

var G__36214 = args36212.length;
switch (G__36214) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36212.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__34193__auto___36287 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34193__auto___36287,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34194__auto__ = (function (){var switch__34069__auto__ = ((function (c__34193__auto___36287,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_36253){
var state_val_36254 = (state_36253[(1)]);
if((state_val_36254 === (7))){
var state_36253__$1 = state_36253;
var statearr_36255_36288 = state_36253__$1;
(statearr_36255_36288[(2)] = null);

(statearr_36255_36288[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36254 === (1))){
var state_36253__$1 = state_36253;
var statearr_36256_36289 = state_36253__$1;
(statearr_36256_36289[(2)] = null);

(statearr_36256_36289[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36254 === (4))){
var inst_36217 = (state_36253[(7)]);
var inst_36219 = (inst_36217 < cnt);
var state_36253__$1 = state_36253;
if(cljs.core.truth_(inst_36219)){
var statearr_36257_36290 = state_36253__$1;
(statearr_36257_36290[(1)] = (6));

} else {
var statearr_36258_36291 = state_36253__$1;
(statearr_36258_36291[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36254 === (15))){
var inst_36249 = (state_36253[(2)]);
var state_36253__$1 = state_36253;
var statearr_36259_36292 = state_36253__$1;
(statearr_36259_36292[(2)] = inst_36249);

(statearr_36259_36292[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36254 === (13))){
var inst_36242 = cljs.core.async.close_BANG_(out);
var state_36253__$1 = state_36253;
var statearr_36260_36293 = state_36253__$1;
(statearr_36260_36293[(2)] = inst_36242);

(statearr_36260_36293[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36254 === (6))){
var state_36253__$1 = state_36253;
var statearr_36261_36294 = state_36253__$1;
(statearr_36261_36294[(2)] = null);

(statearr_36261_36294[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36254 === (3))){
var inst_36251 = (state_36253[(2)]);
var state_36253__$1 = state_36253;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36253__$1,inst_36251);
} else {
if((state_val_36254 === (12))){
var inst_36239 = (state_36253[(8)]);
var inst_36239__$1 = (state_36253[(2)]);
var inst_36240 = cljs.core.some(cljs.core.nil_QMARK_,inst_36239__$1);
var state_36253__$1 = (function (){var statearr_36262 = state_36253;
(statearr_36262[(8)] = inst_36239__$1);

return statearr_36262;
})();
if(cljs.core.truth_(inst_36240)){
var statearr_36263_36295 = state_36253__$1;
(statearr_36263_36295[(1)] = (13));

} else {
var statearr_36264_36296 = state_36253__$1;
(statearr_36264_36296[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36254 === (2))){
var inst_36216 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_36217 = (0);
var state_36253__$1 = (function (){var statearr_36265 = state_36253;
(statearr_36265[(9)] = inst_36216);

(statearr_36265[(7)] = inst_36217);

return statearr_36265;
})();
var statearr_36266_36297 = state_36253__$1;
(statearr_36266_36297[(2)] = null);

(statearr_36266_36297[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36254 === (11))){
var inst_36217 = (state_36253[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36253,(10),Object,null,(9));
var inst_36226 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36217) : chs__$1.call(null,inst_36217));
var inst_36227 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36217) : done.call(null,inst_36217));
var inst_36228 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36226,inst_36227);
var state_36253__$1 = state_36253;
var statearr_36267_36298 = state_36253__$1;
(statearr_36267_36298[(2)] = inst_36228);


cljs.core.async.impl.ioc_helpers.process_exception(state_36253__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_36254 === (9))){
var inst_36217 = (state_36253[(7)]);
var inst_36230 = (state_36253[(2)]);
var inst_36231 = (inst_36217 + (1));
var inst_36217__$1 = inst_36231;
var state_36253__$1 = (function (){var statearr_36268 = state_36253;
(statearr_36268[(7)] = inst_36217__$1);

(statearr_36268[(10)] = inst_36230);

return statearr_36268;
})();
var statearr_36269_36299 = state_36253__$1;
(statearr_36269_36299[(2)] = null);

(statearr_36269_36299[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36254 === (5))){
var inst_36237 = (state_36253[(2)]);
var state_36253__$1 = (function (){var statearr_36270 = state_36253;
(statearr_36270[(11)] = inst_36237);

return statearr_36270;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36253__$1,(12),dchan);
} else {
if((state_val_36254 === (14))){
var inst_36239 = (state_36253[(8)]);
var inst_36244 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36239);
var state_36253__$1 = state_36253;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36253__$1,(16),out,inst_36244);
} else {
if((state_val_36254 === (16))){
var inst_36246 = (state_36253[(2)]);
var state_36253__$1 = (function (){var statearr_36271 = state_36253;
(statearr_36271[(12)] = inst_36246);

return statearr_36271;
})();
var statearr_36272_36300 = state_36253__$1;
(statearr_36272_36300[(2)] = null);

(statearr_36272_36300[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36254 === (10))){
var inst_36221 = (state_36253[(2)]);
var inst_36222 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36253__$1 = (function (){var statearr_36273 = state_36253;
(statearr_36273[(13)] = inst_36221);

return statearr_36273;
})();
var statearr_36274_36301 = state_36253__$1;
(statearr_36274_36301[(2)] = inst_36222);


cljs.core.async.impl.ioc_helpers.process_exception(state_36253__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_36254 === (8))){
var inst_36235 = (state_36253[(2)]);
var state_36253__$1 = state_36253;
var statearr_36275_36302 = state_36253__$1;
(statearr_36275_36302[(2)] = inst_36235);

(statearr_36275_36302[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__34193__auto___36287,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__34069__auto__,c__34193__auto___36287,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__34070__auto__ = null;
var cljs$core$async$state_machine__34070__auto____0 = (function (){
var statearr_36279 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36279[(0)] = cljs$core$async$state_machine__34070__auto__);

(statearr_36279[(1)] = (1));

return statearr_36279;
});
var cljs$core$async$state_machine__34070__auto____1 = (function (state_36253){
while(true){
var ret_value__34071__auto__ = (function (){try{while(true){
var result__34072__auto__ = switch__34069__auto__(state_36253);
if(cljs.core.keyword_identical_QMARK_(result__34072__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34072__auto__;
}
break;
}
}catch (e36280){if((e36280 instanceof Object)){
var ex__34073__auto__ = e36280;
var statearr_36281_36303 = state_36253;
(statearr_36281_36303[(5)] = ex__34073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36253);

return cljs.core.cst$kw$recur;
} else {
throw e36280;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34071__auto__,cljs.core.cst$kw$recur)){
var G__36304 = state_36253;
state_36253 = G__36304;
continue;
} else {
return ret_value__34071__auto__;
}
break;
}
});
cljs$core$async$state_machine__34070__auto__ = function(state_36253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34070__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34070__auto____1.call(this,state_36253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34070__auto____0;
cljs$core$async$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34070__auto____1;
return cljs$core$async$state_machine__34070__auto__;
})()
;})(switch__34069__auto__,c__34193__auto___36287,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34195__auto__ = (function (){var statearr_36282 = (f__34194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34194__auto__.cljs$core$IFn$_invoke$arity$0() : f__34194__auto__.call(null));
(statearr_36282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34193__auto___36287);

return statearr_36282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34195__auto__);
});})(c__34193__auto___36287,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args36306 = [];
var len__7454__auto___36364 = arguments.length;
var i__7455__auto___36365 = (0);
while(true){
if((i__7455__auto___36365 < len__7454__auto___36364)){
args36306.push((arguments[i__7455__auto___36365]));

var G__36366 = (i__7455__auto___36365 + (1));
i__7455__auto___36365 = G__36366;
continue;
} else {
}
break;
}

var G__36308 = args36306.length;
switch (G__36308) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36306.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34193__auto___36368 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34193__auto___36368,out){
return (function (){
var f__34194__auto__ = (function (){var switch__34069__auto__ = ((function (c__34193__auto___36368,out){
return (function (state_36340){
var state_val_36341 = (state_36340[(1)]);
if((state_val_36341 === (7))){
var inst_36320 = (state_36340[(7)]);
var inst_36319 = (state_36340[(8)]);
var inst_36319__$1 = (state_36340[(2)]);
var inst_36320__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36319__$1,(0),null);
var inst_36321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36319__$1,(1),null);
var inst_36322 = (inst_36320__$1 == null);
var state_36340__$1 = (function (){var statearr_36342 = state_36340;
(statearr_36342[(7)] = inst_36320__$1);

(statearr_36342[(8)] = inst_36319__$1);

(statearr_36342[(9)] = inst_36321);

return statearr_36342;
})();
if(cljs.core.truth_(inst_36322)){
var statearr_36343_36369 = state_36340__$1;
(statearr_36343_36369[(1)] = (8));

} else {
var statearr_36344_36370 = state_36340__$1;
(statearr_36344_36370[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36341 === (1))){
var inst_36309 = cljs.core.vec(chs);
var inst_36310 = inst_36309;
var state_36340__$1 = (function (){var statearr_36345 = state_36340;
(statearr_36345[(10)] = inst_36310);

return statearr_36345;
})();
var statearr_36346_36371 = state_36340__$1;
(statearr_36346_36371[(2)] = null);

(statearr_36346_36371[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36341 === (4))){
var inst_36310 = (state_36340[(10)]);
var state_36340__$1 = state_36340;
return cljs.core.async.ioc_alts_BANG_(state_36340__$1,(7),inst_36310);
} else {
if((state_val_36341 === (6))){
var inst_36336 = (state_36340[(2)]);
var state_36340__$1 = state_36340;
var statearr_36347_36372 = state_36340__$1;
(statearr_36347_36372[(2)] = inst_36336);

(statearr_36347_36372[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36341 === (3))){
var inst_36338 = (state_36340[(2)]);
var state_36340__$1 = state_36340;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36340__$1,inst_36338);
} else {
if((state_val_36341 === (2))){
var inst_36310 = (state_36340[(10)]);
var inst_36312 = cljs.core.count(inst_36310);
var inst_36313 = (inst_36312 > (0));
var state_36340__$1 = state_36340;
if(cljs.core.truth_(inst_36313)){
var statearr_36349_36373 = state_36340__$1;
(statearr_36349_36373[(1)] = (4));

} else {
var statearr_36350_36374 = state_36340__$1;
(statearr_36350_36374[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36341 === (11))){
var inst_36310 = (state_36340[(10)]);
var inst_36329 = (state_36340[(2)]);
var tmp36348 = inst_36310;
var inst_36310__$1 = tmp36348;
var state_36340__$1 = (function (){var statearr_36351 = state_36340;
(statearr_36351[(11)] = inst_36329);

(statearr_36351[(10)] = inst_36310__$1);

return statearr_36351;
})();
var statearr_36352_36375 = state_36340__$1;
(statearr_36352_36375[(2)] = null);

(statearr_36352_36375[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36341 === (9))){
var inst_36320 = (state_36340[(7)]);
var state_36340__$1 = state_36340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36340__$1,(11),out,inst_36320);
} else {
if((state_val_36341 === (5))){
var inst_36334 = cljs.core.async.close_BANG_(out);
var state_36340__$1 = state_36340;
var statearr_36353_36376 = state_36340__$1;
(statearr_36353_36376[(2)] = inst_36334);

(statearr_36353_36376[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36341 === (10))){
var inst_36332 = (state_36340[(2)]);
var state_36340__$1 = state_36340;
var statearr_36354_36377 = state_36340__$1;
(statearr_36354_36377[(2)] = inst_36332);

(statearr_36354_36377[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36341 === (8))){
var inst_36320 = (state_36340[(7)]);
var inst_36319 = (state_36340[(8)]);
var inst_36310 = (state_36340[(10)]);
var inst_36321 = (state_36340[(9)]);
var inst_36324 = (function (){var cs = inst_36310;
var vec__36315 = inst_36319;
var v = inst_36320;
var c = inst_36321;
return ((function (cs,vec__36315,v,c,inst_36320,inst_36319,inst_36310,inst_36321,state_val_36341,c__34193__auto___36368,out){
return (function (p1__36305_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36305_SHARP_);
});
;})(cs,vec__36315,v,c,inst_36320,inst_36319,inst_36310,inst_36321,state_val_36341,c__34193__auto___36368,out))
})();
var inst_36325 = cljs.core.filterv(inst_36324,inst_36310);
var inst_36310__$1 = inst_36325;
var state_36340__$1 = (function (){var statearr_36355 = state_36340;
(statearr_36355[(10)] = inst_36310__$1);

return statearr_36355;
})();
var statearr_36356_36378 = state_36340__$1;
(statearr_36356_36378[(2)] = null);

(statearr_36356_36378[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__34193__auto___36368,out))
;
return ((function (switch__34069__auto__,c__34193__auto___36368,out){
return (function() {
var cljs$core$async$state_machine__34070__auto__ = null;
var cljs$core$async$state_machine__34070__auto____0 = (function (){
var statearr_36360 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36360[(0)] = cljs$core$async$state_machine__34070__auto__);

(statearr_36360[(1)] = (1));

return statearr_36360;
});
var cljs$core$async$state_machine__34070__auto____1 = (function (state_36340){
while(true){
var ret_value__34071__auto__ = (function (){try{while(true){
var result__34072__auto__ = switch__34069__auto__(state_36340);
if(cljs.core.keyword_identical_QMARK_(result__34072__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34072__auto__;
}
break;
}
}catch (e36361){if((e36361 instanceof Object)){
var ex__34073__auto__ = e36361;
var statearr_36362_36379 = state_36340;
(statearr_36362_36379[(5)] = ex__34073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36340);

return cljs.core.cst$kw$recur;
} else {
throw e36361;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34071__auto__,cljs.core.cst$kw$recur)){
var G__36380 = state_36340;
state_36340 = G__36380;
continue;
} else {
return ret_value__34071__auto__;
}
break;
}
});
cljs$core$async$state_machine__34070__auto__ = function(state_36340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34070__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34070__auto____1.call(this,state_36340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34070__auto____0;
cljs$core$async$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34070__auto____1;
return cljs$core$async$state_machine__34070__auto__;
})()
;})(switch__34069__auto__,c__34193__auto___36368,out))
})();
var state__34195__auto__ = (function (){var statearr_36363 = (f__34194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34194__auto__.cljs$core$IFn$_invoke$arity$0() : f__34194__auto__.call(null));
(statearr_36363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34193__auto___36368);

return statearr_36363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34195__auto__);
});})(c__34193__auto___36368,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args36381 = [];
var len__7454__auto___36430 = arguments.length;
var i__7455__auto___36431 = (0);
while(true){
if((i__7455__auto___36431 < len__7454__auto___36430)){
args36381.push((arguments[i__7455__auto___36431]));

var G__36432 = (i__7455__auto___36431 + (1));
i__7455__auto___36431 = G__36432;
continue;
} else {
}
break;
}

var G__36383 = args36381.length;
switch (G__36383) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36381.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34193__auto___36434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34193__auto___36434,out){
return (function (){
var f__34194__auto__ = (function (){var switch__34069__auto__ = ((function (c__34193__auto___36434,out){
return (function (state_36407){
var state_val_36408 = (state_36407[(1)]);
if((state_val_36408 === (7))){
var inst_36389 = (state_36407[(7)]);
var inst_36389__$1 = (state_36407[(2)]);
var inst_36390 = (inst_36389__$1 == null);
var inst_36391 = cljs.core.not(inst_36390);
var state_36407__$1 = (function (){var statearr_36409 = state_36407;
(statearr_36409[(7)] = inst_36389__$1);

return statearr_36409;
})();
if(inst_36391){
var statearr_36410_36435 = state_36407__$1;
(statearr_36410_36435[(1)] = (8));

} else {
var statearr_36411_36436 = state_36407__$1;
(statearr_36411_36436[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36408 === (1))){
var inst_36384 = (0);
var state_36407__$1 = (function (){var statearr_36412 = state_36407;
(statearr_36412[(8)] = inst_36384);

return statearr_36412;
})();
var statearr_36413_36437 = state_36407__$1;
(statearr_36413_36437[(2)] = null);

(statearr_36413_36437[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36408 === (4))){
var state_36407__$1 = state_36407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36407__$1,(7),ch);
} else {
if((state_val_36408 === (6))){
var inst_36402 = (state_36407[(2)]);
var state_36407__$1 = state_36407;
var statearr_36414_36438 = state_36407__$1;
(statearr_36414_36438[(2)] = inst_36402);

(statearr_36414_36438[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36408 === (3))){
var inst_36404 = (state_36407[(2)]);
var inst_36405 = cljs.core.async.close_BANG_(out);
var state_36407__$1 = (function (){var statearr_36415 = state_36407;
(statearr_36415[(9)] = inst_36404);

return statearr_36415;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36407__$1,inst_36405);
} else {
if((state_val_36408 === (2))){
var inst_36384 = (state_36407[(8)]);
var inst_36386 = (inst_36384 < n);
var state_36407__$1 = state_36407;
if(cljs.core.truth_(inst_36386)){
var statearr_36416_36439 = state_36407__$1;
(statearr_36416_36439[(1)] = (4));

} else {
var statearr_36417_36440 = state_36407__$1;
(statearr_36417_36440[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36408 === (11))){
var inst_36384 = (state_36407[(8)]);
var inst_36394 = (state_36407[(2)]);
var inst_36395 = (inst_36384 + (1));
var inst_36384__$1 = inst_36395;
var state_36407__$1 = (function (){var statearr_36418 = state_36407;
(statearr_36418[(10)] = inst_36394);

(statearr_36418[(8)] = inst_36384__$1);

return statearr_36418;
})();
var statearr_36419_36441 = state_36407__$1;
(statearr_36419_36441[(2)] = null);

(statearr_36419_36441[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36408 === (9))){
var state_36407__$1 = state_36407;
var statearr_36420_36442 = state_36407__$1;
(statearr_36420_36442[(2)] = null);

(statearr_36420_36442[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36408 === (5))){
var state_36407__$1 = state_36407;
var statearr_36421_36443 = state_36407__$1;
(statearr_36421_36443[(2)] = null);

(statearr_36421_36443[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36408 === (10))){
var inst_36399 = (state_36407[(2)]);
var state_36407__$1 = state_36407;
var statearr_36422_36444 = state_36407__$1;
(statearr_36422_36444[(2)] = inst_36399);

(statearr_36422_36444[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36408 === (8))){
var inst_36389 = (state_36407[(7)]);
var state_36407__$1 = state_36407;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36407__$1,(11),out,inst_36389);
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
});})(c__34193__auto___36434,out))
;
return ((function (switch__34069__auto__,c__34193__auto___36434,out){
return (function() {
var cljs$core$async$state_machine__34070__auto__ = null;
var cljs$core$async$state_machine__34070__auto____0 = (function (){
var statearr_36426 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36426[(0)] = cljs$core$async$state_machine__34070__auto__);

(statearr_36426[(1)] = (1));

return statearr_36426;
});
var cljs$core$async$state_machine__34070__auto____1 = (function (state_36407){
while(true){
var ret_value__34071__auto__ = (function (){try{while(true){
var result__34072__auto__ = switch__34069__auto__(state_36407);
if(cljs.core.keyword_identical_QMARK_(result__34072__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34072__auto__;
}
break;
}
}catch (e36427){if((e36427 instanceof Object)){
var ex__34073__auto__ = e36427;
var statearr_36428_36445 = state_36407;
(statearr_36428_36445[(5)] = ex__34073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36407);

return cljs.core.cst$kw$recur;
} else {
throw e36427;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34071__auto__,cljs.core.cst$kw$recur)){
var G__36446 = state_36407;
state_36407 = G__36446;
continue;
} else {
return ret_value__34071__auto__;
}
break;
}
});
cljs$core$async$state_machine__34070__auto__ = function(state_36407){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34070__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34070__auto____1.call(this,state_36407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34070__auto____0;
cljs$core$async$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34070__auto____1;
return cljs$core$async$state_machine__34070__auto__;
})()
;})(switch__34069__auto__,c__34193__auto___36434,out))
})();
var state__34195__auto__ = (function (){var statearr_36429 = (f__34194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34194__auto__.cljs$core$IFn$_invoke$arity$0() : f__34194__auto__.call(null));
(statearr_36429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34193__auto___36434);

return statearr_36429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34195__auto__);
});})(c__34193__auto___36434,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36456 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36456 = (function (map_LT_,f,ch,meta36457){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta36457 = meta36457;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36458,meta36457__$1){
var self__ = this;
var _36458__$1 = this;
return (new cljs.core.async.t_cljs$core$async36456(self__.map_LT_,self__.f,self__.ch,meta36457__$1));
});

cljs.core.async.t_cljs$core$async36456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36458){
var self__ = this;
var _36458__$1 = this;
return self__.meta36457;
});

cljs.core.async.t_cljs$core$async36456.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async36456.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async36456.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async36456.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async36456.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async36459 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36459 = (function (map_LT_,f,ch,meta36457,_,fn1,meta36460){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta36457 = meta36457;
this._ = _;
this.fn1 = fn1;
this.meta36460 = meta36460;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36461,meta36460__$1){
var self__ = this;
var _36461__$1 = this;
return (new cljs.core.async.t_cljs$core$async36459(self__.map_LT_,self__.f,self__.ch,self__.meta36457,self__._,self__.fn1,meta36460__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async36459.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36461){
var self__ = this;
var _36461__$1 = this;
return self__.meta36460;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36459.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36459.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36459.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36459.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__36447_SHARP_){
var G__36462 = (((p1__36447_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36447_SHARP_) : self__.f.call(null,p1__36447_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36462) : f1.call(null,G__36462));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async36459.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta36457,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async36456], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta36460], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36459.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36459.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36459";

cljs.core.async.t_cljs$core$async36459.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6989__auto__,writer__6990__auto__,opt__6991__auto__){
return cljs.core._write(writer__6990__auto__,"cljs.core.async/t_cljs$core$async36459");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async36459 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36459(map_LT___$1,f__$1,ch__$1,meta36457__$1,___$2,fn1__$1,meta36460){
return (new cljs.core.async.t_cljs$core$async36459(map_LT___$1,f__$1,ch__$1,meta36457__$1,___$2,fn1__$1,meta36460));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async36459(self__.map_LT_,self__.f,self__.ch,self__.meta36457,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6371__auto__ = ret;
if(cljs.core.truth_(and__6371__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6371__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36463 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36463) : self__.f.call(null,G__36463));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async36456.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async36456.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async36456.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta36457], null);
});

cljs.core.async.t_cljs$core$async36456.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36456.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36456";

cljs.core.async.t_cljs$core$async36456.cljs$lang$ctorPrWriter = (function (this__6989__auto__,writer__6990__auto__,opt__6991__auto__){
return cljs.core._write(writer__6990__auto__,"cljs.core.async/t_cljs$core$async36456");
});

cljs.core.async.__GT_t_cljs$core$async36456 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36456(map_LT___$1,f__$1,ch__$1,meta36457){
return (new cljs.core.async.t_cljs$core$async36456(map_LT___$1,f__$1,ch__$1,meta36457));
});

}

return (new cljs.core.async.t_cljs$core$async36456(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36467 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36467 = (function (map_GT_,f,ch,meta36468){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta36468 = meta36468;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36469,meta36468__$1){
var self__ = this;
var _36469__$1 = this;
return (new cljs.core.async.t_cljs$core$async36467(self__.map_GT_,self__.f,self__.ch,meta36468__$1));
});

cljs.core.async.t_cljs$core$async36467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36469){
var self__ = this;
var _36469__$1 = this;
return self__.meta36468;
});

cljs.core.async.t_cljs$core$async36467.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async36467.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async36467.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async36467.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36467.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async36467.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async36467.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta36468], null);
});

cljs.core.async.t_cljs$core$async36467.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36467.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36467";

cljs.core.async.t_cljs$core$async36467.cljs$lang$ctorPrWriter = (function (this__6989__auto__,writer__6990__auto__,opt__6991__auto__){
return cljs.core._write(writer__6990__auto__,"cljs.core.async/t_cljs$core$async36467");
});

cljs.core.async.__GT_t_cljs$core$async36467 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36467(map_GT___$1,f__$1,ch__$1,meta36468){
return (new cljs.core.async.t_cljs$core$async36467(map_GT___$1,f__$1,ch__$1,meta36468));
});

}

return (new cljs.core.async.t_cljs$core$async36467(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async36473 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36473 = (function (filter_GT_,p,ch,meta36474){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta36474 = meta36474;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36475,meta36474__$1){
var self__ = this;
var _36475__$1 = this;
return (new cljs.core.async.t_cljs$core$async36473(self__.filter_GT_,self__.p,self__.ch,meta36474__$1));
});

cljs.core.async.t_cljs$core$async36473.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36475){
var self__ = this;
var _36475__$1 = this;
return self__.meta36474;
});

cljs.core.async.t_cljs$core$async36473.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async36473.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async36473.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async36473.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async36473.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36473.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async36473.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async36473.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta36474], null);
});

cljs.core.async.t_cljs$core$async36473.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36473.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36473";

cljs.core.async.t_cljs$core$async36473.cljs$lang$ctorPrWriter = (function (this__6989__auto__,writer__6990__auto__,opt__6991__auto__){
return cljs.core._write(writer__6990__auto__,"cljs.core.async/t_cljs$core$async36473");
});

cljs.core.async.__GT_t_cljs$core$async36473 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36473(filter_GT___$1,p__$1,ch__$1,meta36474){
return (new cljs.core.async.t_cljs$core$async36473(filter_GT___$1,p__$1,ch__$1,meta36474));
});

}

return (new cljs.core.async.t_cljs$core$async36473(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args36476 = [];
var len__7454__auto___36520 = arguments.length;
var i__7455__auto___36521 = (0);
while(true){
if((i__7455__auto___36521 < len__7454__auto___36520)){
args36476.push((arguments[i__7455__auto___36521]));

var G__36522 = (i__7455__auto___36521 + (1));
i__7455__auto___36521 = G__36522;
continue;
} else {
}
break;
}

var G__36478 = args36476.length;
switch (G__36478) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36476.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34193__auto___36524 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34193__auto___36524,out){
return (function (){
var f__34194__auto__ = (function (){var switch__34069__auto__ = ((function (c__34193__auto___36524,out){
return (function (state_36499){
var state_val_36500 = (state_36499[(1)]);
if((state_val_36500 === (7))){
var inst_36495 = (state_36499[(2)]);
var state_36499__$1 = state_36499;
var statearr_36501_36525 = state_36499__$1;
(statearr_36501_36525[(2)] = inst_36495);

(statearr_36501_36525[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36500 === (1))){
var state_36499__$1 = state_36499;
var statearr_36502_36526 = state_36499__$1;
(statearr_36502_36526[(2)] = null);

(statearr_36502_36526[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36500 === (4))){
var inst_36481 = (state_36499[(7)]);
var inst_36481__$1 = (state_36499[(2)]);
var inst_36482 = (inst_36481__$1 == null);
var state_36499__$1 = (function (){var statearr_36503 = state_36499;
(statearr_36503[(7)] = inst_36481__$1);

return statearr_36503;
})();
if(cljs.core.truth_(inst_36482)){
var statearr_36504_36527 = state_36499__$1;
(statearr_36504_36527[(1)] = (5));

} else {
var statearr_36505_36528 = state_36499__$1;
(statearr_36505_36528[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36500 === (6))){
var inst_36481 = (state_36499[(7)]);
var inst_36486 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36481) : p.call(null,inst_36481));
var state_36499__$1 = state_36499;
if(cljs.core.truth_(inst_36486)){
var statearr_36506_36529 = state_36499__$1;
(statearr_36506_36529[(1)] = (8));

} else {
var statearr_36507_36530 = state_36499__$1;
(statearr_36507_36530[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36500 === (3))){
var inst_36497 = (state_36499[(2)]);
var state_36499__$1 = state_36499;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36499__$1,inst_36497);
} else {
if((state_val_36500 === (2))){
var state_36499__$1 = state_36499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36499__$1,(4),ch);
} else {
if((state_val_36500 === (11))){
var inst_36489 = (state_36499[(2)]);
var state_36499__$1 = state_36499;
var statearr_36508_36531 = state_36499__$1;
(statearr_36508_36531[(2)] = inst_36489);

(statearr_36508_36531[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36500 === (9))){
var state_36499__$1 = state_36499;
var statearr_36509_36532 = state_36499__$1;
(statearr_36509_36532[(2)] = null);

(statearr_36509_36532[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36500 === (5))){
var inst_36484 = cljs.core.async.close_BANG_(out);
var state_36499__$1 = state_36499;
var statearr_36510_36533 = state_36499__$1;
(statearr_36510_36533[(2)] = inst_36484);

(statearr_36510_36533[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36500 === (10))){
var inst_36492 = (state_36499[(2)]);
var state_36499__$1 = (function (){var statearr_36511 = state_36499;
(statearr_36511[(8)] = inst_36492);

return statearr_36511;
})();
var statearr_36512_36534 = state_36499__$1;
(statearr_36512_36534[(2)] = null);

(statearr_36512_36534[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36500 === (8))){
var inst_36481 = (state_36499[(7)]);
var state_36499__$1 = state_36499;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36499__$1,(11),out,inst_36481);
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
});})(c__34193__auto___36524,out))
;
return ((function (switch__34069__auto__,c__34193__auto___36524,out){
return (function() {
var cljs$core$async$state_machine__34070__auto__ = null;
var cljs$core$async$state_machine__34070__auto____0 = (function (){
var statearr_36516 = [null,null,null,null,null,null,null,null,null];
(statearr_36516[(0)] = cljs$core$async$state_machine__34070__auto__);

(statearr_36516[(1)] = (1));

return statearr_36516;
});
var cljs$core$async$state_machine__34070__auto____1 = (function (state_36499){
while(true){
var ret_value__34071__auto__ = (function (){try{while(true){
var result__34072__auto__ = switch__34069__auto__(state_36499);
if(cljs.core.keyword_identical_QMARK_(result__34072__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34072__auto__;
}
break;
}
}catch (e36517){if((e36517 instanceof Object)){
var ex__34073__auto__ = e36517;
var statearr_36518_36535 = state_36499;
(statearr_36518_36535[(5)] = ex__34073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36499);

return cljs.core.cst$kw$recur;
} else {
throw e36517;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34071__auto__,cljs.core.cst$kw$recur)){
var G__36536 = state_36499;
state_36499 = G__36536;
continue;
} else {
return ret_value__34071__auto__;
}
break;
}
});
cljs$core$async$state_machine__34070__auto__ = function(state_36499){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34070__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34070__auto____1.call(this,state_36499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34070__auto____0;
cljs$core$async$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34070__auto____1;
return cljs$core$async$state_machine__34070__auto__;
})()
;})(switch__34069__auto__,c__34193__auto___36524,out))
})();
var state__34195__auto__ = (function (){var statearr_36519 = (f__34194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34194__auto__.cljs$core$IFn$_invoke$arity$0() : f__34194__auto__.call(null));
(statearr_36519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34193__auto___36524);

return statearr_36519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34195__auto__);
});})(c__34193__auto___36524,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args36537 = [];
var len__7454__auto___36540 = arguments.length;
var i__7455__auto___36541 = (0);
while(true){
if((i__7455__auto___36541 < len__7454__auto___36540)){
args36537.push((arguments[i__7455__auto___36541]));

var G__36542 = (i__7455__auto___36541 + (1));
i__7455__auto___36541 = G__36542;
continue;
} else {
}
break;
}

var G__36539 = args36537.length;
switch (G__36539) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36537.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34193__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34193__auto__){
return (function (){
var f__34194__auto__ = (function (){var switch__34069__auto__ = ((function (c__34193__auto__){
return (function (state_36709){
var state_val_36710 = (state_36709[(1)]);
if((state_val_36710 === (7))){
var inst_36705 = (state_36709[(2)]);
var state_36709__$1 = state_36709;
var statearr_36711_36752 = state_36709__$1;
(statearr_36711_36752[(2)] = inst_36705);

(statearr_36711_36752[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36710 === (20))){
var inst_36675 = (state_36709[(7)]);
var inst_36686 = (state_36709[(2)]);
var inst_36687 = cljs.core.next(inst_36675);
var inst_36661 = inst_36687;
var inst_36662 = null;
var inst_36663 = (0);
var inst_36664 = (0);
var state_36709__$1 = (function (){var statearr_36712 = state_36709;
(statearr_36712[(8)] = inst_36661);

(statearr_36712[(9)] = inst_36663);

(statearr_36712[(10)] = inst_36686);

(statearr_36712[(11)] = inst_36664);

(statearr_36712[(12)] = inst_36662);

return statearr_36712;
})();
var statearr_36713_36753 = state_36709__$1;
(statearr_36713_36753[(2)] = null);

(statearr_36713_36753[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36710 === (1))){
var state_36709__$1 = state_36709;
var statearr_36714_36754 = state_36709__$1;
(statearr_36714_36754[(2)] = null);

(statearr_36714_36754[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36710 === (4))){
var inst_36650 = (state_36709[(13)]);
var inst_36650__$1 = (state_36709[(2)]);
var inst_36651 = (inst_36650__$1 == null);
var state_36709__$1 = (function (){var statearr_36715 = state_36709;
(statearr_36715[(13)] = inst_36650__$1);

return statearr_36715;
})();
if(cljs.core.truth_(inst_36651)){
var statearr_36716_36755 = state_36709__$1;
(statearr_36716_36755[(1)] = (5));

} else {
var statearr_36717_36756 = state_36709__$1;
(statearr_36717_36756[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36710 === (15))){
var state_36709__$1 = state_36709;
var statearr_36721_36757 = state_36709__$1;
(statearr_36721_36757[(2)] = null);

(statearr_36721_36757[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36710 === (21))){
var state_36709__$1 = state_36709;
var statearr_36722_36758 = state_36709__$1;
(statearr_36722_36758[(2)] = null);

(statearr_36722_36758[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36710 === (13))){
var inst_36661 = (state_36709[(8)]);
var inst_36663 = (state_36709[(9)]);
var inst_36664 = (state_36709[(11)]);
var inst_36662 = (state_36709[(12)]);
var inst_36671 = (state_36709[(2)]);
var inst_36672 = (inst_36664 + (1));
var tmp36718 = inst_36661;
var tmp36719 = inst_36663;
var tmp36720 = inst_36662;
var inst_36661__$1 = tmp36718;
var inst_36662__$1 = tmp36720;
var inst_36663__$1 = tmp36719;
var inst_36664__$1 = inst_36672;
var state_36709__$1 = (function (){var statearr_36723 = state_36709;
(statearr_36723[(8)] = inst_36661__$1);

(statearr_36723[(9)] = inst_36663__$1);

(statearr_36723[(14)] = inst_36671);

(statearr_36723[(11)] = inst_36664__$1);

(statearr_36723[(12)] = inst_36662__$1);

return statearr_36723;
})();
var statearr_36724_36759 = state_36709__$1;
(statearr_36724_36759[(2)] = null);

(statearr_36724_36759[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36710 === (22))){
var state_36709__$1 = state_36709;
var statearr_36725_36760 = state_36709__$1;
(statearr_36725_36760[(2)] = null);

(statearr_36725_36760[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36710 === (6))){
var inst_36650 = (state_36709[(13)]);
var inst_36659 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36650) : f.call(null,inst_36650));
var inst_36660 = cljs.core.seq(inst_36659);
var inst_36661 = inst_36660;
var inst_36662 = null;
var inst_36663 = (0);
var inst_36664 = (0);
var state_36709__$1 = (function (){var statearr_36726 = state_36709;
(statearr_36726[(8)] = inst_36661);

(statearr_36726[(9)] = inst_36663);

(statearr_36726[(11)] = inst_36664);

(statearr_36726[(12)] = inst_36662);

return statearr_36726;
})();
var statearr_36727_36761 = state_36709__$1;
(statearr_36727_36761[(2)] = null);

(statearr_36727_36761[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36710 === (17))){
var inst_36675 = (state_36709[(7)]);
var inst_36679 = cljs.core.chunk_first(inst_36675);
var inst_36680 = cljs.core.chunk_rest(inst_36675);
var inst_36681 = cljs.core.count(inst_36679);
var inst_36661 = inst_36680;
var inst_36662 = inst_36679;
var inst_36663 = inst_36681;
var inst_36664 = (0);
var state_36709__$1 = (function (){var statearr_36728 = state_36709;
(statearr_36728[(8)] = inst_36661);

(statearr_36728[(9)] = inst_36663);

(statearr_36728[(11)] = inst_36664);

(statearr_36728[(12)] = inst_36662);

return statearr_36728;
})();
var statearr_36729_36762 = state_36709__$1;
(statearr_36729_36762[(2)] = null);

(statearr_36729_36762[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36710 === (3))){
var inst_36707 = (state_36709[(2)]);
var state_36709__$1 = state_36709;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36709__$1,inst_36707);
} else {
if((state_val_36710 === (12))){
var inst_36695 = (state_36709[(2)]);
var state_36709__$1 = state_36709;
var statearr_36730_36763 = state_36709__$1;
(statearr_36730_36763[(2)] = inst_36695);

(statearr_36730_36763[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36710 === (2))){
var state_36709__$1 = state_36709;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36709__$1,(4),in$);
} else {
if((state_val_36710 === (23))){
var inst_36703 = (state_36709[(2)]);
var state_36709__$1 = state_36709;
var statearr_36731_36764 = state_36709__$1;
(statearr_36731_36764[(2)] = inst_36703);

(statearr_36731_36764[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36710 === (19))){
var inst_36690 = (state_36709[(2)]);
var state_36709__$1 = state_36709;
var statearr_36732_36765 = state_36709__$1;
(statearr_36732_36765[(2)] = inst_36690);

(statearr_36732_36765[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36710 === (11))){
var inst_36661 = (state_36709[(8)]);
var inst_36675 = (state_36709[(7)]);
var inst_36675__$1 = cljs.core.seq(inst_36661);
var state_36709__$1 = (function (){var statearr_36733 = state_36709;
(statearr_36733[(7)] = inst_36675__$1);

return statearr_36733;
})();
if(inst_36675__$1){
var statearr_36734_36766 = state_36709__$1;
(statearr_36734_36766[(1)] = (14));

} else {
var statearr_36735_36767 = state_36709__$1;
(statearr_36735_36767[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36710 === (9))){
var inst_36697 = (state_36709[(2)]);
var inst_36698 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36709__$1 = (function (){var statearr_36736 = state_36709;
(statearr_36736[(15)] = inst_36697);

return statearr_36736;
})();
if(cljs.core.truth_(inst_36698)){
var statearr_36737_36768 = state_36709__$1;
(statearr_36737_36768[(1)] = (21));

} else {
var statearr_36738_36769 = state_36709__$1;
(statearr_36738_36769[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36710 === (5))){
var inst_36653 = cljs.core.async.close_BANG_(out);
var state_36709__$1 = state_36709;
var statearr_36739_36770 = state_36709__$1;
(statearr_36739_36770[(2)] = inst_36653);

(statearr_36739_36770[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36710 === (14))){
var inst_36675 = (state_36709[(7)]);
var inst_36677 = cljs.core.chunked_seq_QMARK_(inst_36675);
var state_36709__$1 = state_36709;
if(inst_36677){
var statearr_36740_36771 = state_36709__$1;
(statearr_36740_36771[(1)] = (17));

} else {
var statearr_36741_36772 = state_36709__$1;
(statearr_36741_36772[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36710 === (16))){
var inst_36693 = (state_36709[(2)]);
var state_36709__$1 = state_36709;
var statearr_36742_36773 = state_36709__$1;
(statearr_36742_36773[(2)] = inst_36693);

(statearr_36742_36773[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36710 === (10))){
var inst_36664 = (state_36709[(11)]);
var inst_36662 = (state_36709[(12)]);
var inst_36669 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36662,inst_36664);
var state_36709__$1 = state_36709;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36709__$1,(13),out,inst_36669);
} else {
if((state_val_36710 === (18))){
var inst_36675 = (state_36709[(7)]);
var inst_36684 = cljs.core.first(inst_36675);
var state_36709__$1 = state_36709;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36709__$1,(20),out,inst_36684);
} else {
if((state_val_36710 === (8))){
var inst_36663 = (state_36709[(9)]);
var inst_36664 = (state_36709[(11)]);
var inst_36666 = (inst_36664 < inst_36663);
var inst_36667 = inst_36666;
var state_36709__$1 = state_36709;
if(cljs.core.truth_(inst_36667)){
var statearr_36743_36774 = state_36709__$1;
(statearr_36743_36774[(1)] = (10));

} else {
var statearr_36744_36775 = state_36709__$1;
(statearr_36744_36775[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__34193__auto__))
;
return ((function (switch__34069__auto__,c__34193__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34070__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34070__auto____0 = (function (){
var statearr_36748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36748[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34070__auto__);

(statearr_36748[(1)] = (1));

return statearr_36748;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34070__auto____1 = (function (state_36709){
while(true){
var ret_value__34071__auto__ = (function (){try{while(true){
var result__34072__auto__ = switch__34069__auto__(state_36709);
if(cljs.core.keyword_identical_QMARK_(result__34072__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34072__auto__;
}
break;
}
}catch (e36749){if((e36749 instanceof Object)){
var ex__34073__auto__ = e36749;
var statearr_36750_36776 = state_36709;
(statearr_36750_36776[(5)] = ex__34073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36709);

return cljs.core.cst$kw$recur;
} else {
throw e36749;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34071__auto__,cljs.core.cst$kw$recur)){
var G__36777 = state_36709;
state_36709 = G__36777;
continue;
} else {
return ret_value__34071__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34070__auto__ = function(state_36709){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34070__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34070__auto____1.call(this,state_36709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34070__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34070__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34070__auto__;
})()
;})(switch__34069__auto__,c__34193__auto__))
})();
var state__34195__auto__ = (function (){var statearr_36751 = (f__34194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34194__auto__.cljs$core$IFn$_invoke$arity$0() : f__34194__auto__.call(null));
(statearr_36751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34193__auto__);

return statearr_36751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34195__auto__);
});})(c__34193__auto__))
);

return c__34193__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args36778 = [];
var len__7454__auto___36781 = arguments.length;
var i__7455__auto___36782 = (0);
while(true){
if((i__7455__auto___36782 < len__7454__auto___36781)){
args36778.push((arguments[i__7455__auto___36782]));

var G__36783 = (i__7455__auto___36782 + (1));
i__7455__auto___36782 = G__36783;
continue;
} else {
}
break;
}

var G__36780 = args36778.length;
switch (G__36780) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36778.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args36785 = [];
var len__7454__auto___36788 = arguments.length;
var i__7455__auto___36789 = (0);
while(true){
if((i__7455__auto___36789 < len__7454__auto___36788)){
args36785.push((arguments[i__7455__auto___36789]));

var G__36790 = (i__7455__auto___36789 + (1));
i__7455__auto___36789 = G__36790;
continue;
} else {
}
break;
}

var G__36787 = args36785.length;
switch (G__36787) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36785.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args36792 = [];
var len__7454__auto___36843 = arguments.length;
var i__7455__auto___36844 = (0);
while(true){
if((i__7455__auto___36844 < len__7454__auto___36843)){
args36792.push((arguments[i__7455__auto___36844]));

var G__36845 = (i__7455__auto___36844 + (1));
i__7455__auto___36844 = G__36845;
continue;
} else {
}
break;
}

var G__36794 = args36792.length;
switch (G__36794) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36792.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34193__auto___36847 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34193__auto___36847,out){
return (function (){
var f__34194__auto__ = (function (){var switch__34069__auto__ = ((function (c__34193__auto___36847,out){
return (function (state_36818){
var state_val_36819 = (state_36818[(1)]);
if((state_val_36819 === (7))){
var inst_36813 = (state_36818[(2)]);
var state_36818__$1 = state_36818;
var statearr_36820_36848 = state_36818__$1;
(statearr_36820_36848[(2)] = inst_36813);

(statearr_36820_36848[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36819 === (1))){
var inst_36795 = null;
var state_36818__$1 = (function (){var statearr_36821 = state_36818;
(statearr_36821[(7)] = inst_36795);

return statearr_36821;
})();
var statearr_36822_36849 = state_36818__$1;
(statearr_36822_36849[(2)] = null);

(statearr_36822_36849[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36819 === (4))){
var inst_36798 = (state_36818[(8)]);
var inst_36798__$1 = (state_36818[(2)]);
var inst_36799 = (inst_36798__$1 == null);
var inst_36800 = cljs.core.not(inst_36799);
var state_36818__$1 = (function (){var statearr_36823 = state_36818;
(statearr_36823[(8)] = inst_36798__$1);

return statearr_36823;
})();
if(inst_36800){
var statearr_36824_36850 = state_36818__$1;
(statearr_36824_36850[(1)] = (5));

} else {
var statearr_36825_36851 = state_36818__$1;
(statearr_36825_36851[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36819 === (6))){
var state_36818__$1 = state_36818;
var statearr_36826_36852 = state_36818__$1;
(statearr_36826_36852[(2)] = null);

(statearr_36826_36852[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36819 === (3))){
var inst_36815 = (state_36818[(2)]);
var inst_36816 = cljs.core.async.close_BANG_(out);
var state_36818__$1 = (function (){var statearr_36827 = state_36818;
(statearr_36827[(9)] = inst_36815);

return statearr_36827;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36818__$1,inst_36816);
} else {
if((state_val_36819 === (2))){
var state_36818__$1 = state_36818;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36818__$1,(4),ch);
} else {
if((state_val_36819 === (11))){
var inst_36798 = (state_36818[(8)]);
var inst_36807 = (state_36818[(2)]);
var inst_36795 = inst_36798;
var state_36818__$1 = (function (){var statearr_36828 = state_36818;
(statearr_36828[(10)] = inst_36807);

(statearr_36828[(7)] = inst_36795);

return statearr_36828;
})();
var statearr_36829_36853 = state_36818__$1;
(statearr_36829_36853[(2)] = null);

(statearr_36829_36853[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36819 === (9))){
var inst_36798 = (state_36818[(8)]);
var state_36818__$1 = state_36818;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36818__$1,(11),out,inst_36798);
} else {
if((state_val_36819 === (5))){
var inst_36798 = (state_36818[(8)]);
var inst_36795 = (state_36818[(7)]);
var inst_36802 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36798,inst_36795);
var state_36818__$1 = state_36818;
if(inst_36802){
var statearr_36831_36854 = state_36818__$1;
(statearr_36831_36854[(1)] = (8));

} else {
var statearr_36832_36855 = state_36818__$1;
(statearr_36832_36855[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36819 === (10))){
var inst_36810 = (state_36818[(2)]);
var state_36818__$1 = state_36818;
var statearr_36833_36856 = state_36818__$1;
(statearr_36833_36856[(2)] = inst_36810);

(statearr_36833_36856[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36819 === (8))){
var inst_36795 = (state_36818[(7)]);
var tmp36830 = inst_36795;
var inst_36795__$1 = tmp36830;
var state_36818__$1 = (function (){var statearr_36834 = state_36818;
(statearr_36834[(7)] = inst_36795__$1);

return statearr_36834;
})();
var statearr_36835_36857 = state_36818__$1;
(statearr_36835_36857[(2)] = null);

(statearr_36835_36857[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__34193__auto___36847,out))
;
return ((function (switch__34069__auto__,c__34193__auto___36847,out){
return (function() {
var cljs$core$async$state_machine__34070__auto__ = null;
var cljs$core$async$state_machine__34070__auto____0 = (function (){
var statearr_36839 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36839[(0)] = cljs$core$async$state_machine__34070__auto__);

(statearr_36839[(1)] = (1));

return statearr_36839;
});
var cljs$core$async$state_machine__34070__auto____1 = (function (state_36818){
while(true){
var ret_value__34071__auto__ = (function (){try{while(true){
var result__34072__auto__ = switch__34069__auto__(state_36818);
if(cljs.core.keyword_identical_QMARK_(result__34072__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34072__auto__;
}
break;
}
}catch (e36840){if((e36840 instanceof Object)){
var ex__34073__auto__ = e36840;
var statearr_36841_36858 = state_36818;
(statearr_36841_36858[(5)] = ex__34073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36818);

return cljs.core.cst$kw$recur;
} else {
throw e36840;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34071__auto__,cljs.core.cst$kw$recur)){
var G__36859 = state_36818;
state_36818 = G__36859;
continue;
} else {
return ret_value__34071__auto__;
}
break;
}
});
cljs$core$async$state_machine__34070__auto__ = function(state_36818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34070__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34070__auto____1.call(this,state_36818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34070__auto____0;
cljs$core$async$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34070__auto____1;
return cljs$core$async$state_machine__34070__auto__;
})()
;})(switch__34069__auto__,c__34193__auto___36847,out))
})();
var state__34195__auto__ = (function (){var statearr_36842 = (f__34194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34194__auto__.cljs$core$IFn$_invoke$arity$0() : f__34194__auto__.call(null));
(statearr_36842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34193__auto___36847);

return statearr_36842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34195__auto__);
});})(c__34193__auto___36847,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args36860 = [];
var len__7454__auto___36930 = arguments.length;
var i__7455__auto___36931 = (0);
while(true){
if((i__7455__auto___36931 < len__7454__auto___36930)){
args36860.push((arguments[i__7455__auto___36931]));

var G__36932 = (i__7455__auto___36931 + (1));
i__7455__auto___36931 = G__36932;
continue;
} else {
}
break;
}

var G__36862 = args36860.length;
switch (G__36862) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36860.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34193__auto___36934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34193__auto___36934,out){
return (function (){
var f__34194__auto__ = (function (){var switch__34069__auto__ = ((function (c__34193__auto___36934,out){
return (function (state_36900){
var state_val_36901 = (state_36900[(1)]);
if((state_val_36901 === (7))){
var inst_36896 = (state_36900[(2)]);
var state_36900__$1 = state_36900;
var statearr_36902_36935 = state_36900__$1;
(statearr_36902_36935[(2)] = inst_36896);

(statearr_36902_36935[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36901 === (1))){
var inst_36863 = (new Array(n));
var inst_36864 = inst_36863;
var inst_36865 = (0);
var state_36900__$1 = (function (){var statearr_36903 = state_36900;
(statearr_36903[(7)] = inst_36864);

(statearr_36903[(8)] = inst_36865);

return statearr_36903;
})();
var statearr_36904_36936 = state_36900__$1;
(statearr_36904_36936[(2)] = null);

(statearr_36904_36936[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36901 === (4))){
var inst_36868 = (state_36900[(9)]);
var inst_36868__$1 = (state_36900[(2)]);
var inst_36869 = (inst_36868__$1 == null);
var inst_36870 = cljs.core.not(inst_36869);
var state_36900__$1 = (function (){var statearr_36905 = state_36900;
(statearr_36905[(9)] = inst_36868__$1);

return statearr_36905;
})();
if(inst_36870){
var statearr_36906_36937 = state_36900__$1;
(statearr_36906_36937[(1)] = (5));

} else {
var statearr_36907_36938 = state_36900__$1;
(statearr_36907_36938[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36901 === (15))){
var inst_36890 = (state_36900[(2)]);
var state_36900__$1 = state_36900;
var statearr_36908_36939 = state_36900__$1;
(statearr_36908_36939[(2)] = inst_36890);

(statearr_36908_36939[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36901 === (13))){
var state_36900__$1 = state_36900;
var statearr_36909_36940 = state_36900__$1;
(statearr_36909_36940[(2)] = null);

(statearr_36909_36940[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36901 === (6))){
var inst_36865 = (state_36900[(8)]);
var inst_36886 = (inst_36865 > (0));
var state_36900__$1 = state_36900;
if(cljs.core.truth_(inst_36886)){
var statearr_36910_36941 = state_36900__$1;
(statearr_36910_36941[(1)] = (12));

} else {
var statearr_36911_36942 = state_36900__$1;
(statearr_36911_36942[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36901 === (3))){
var inst_36898 = (state_36900[(2)]);
var state_36900__$1 = state_36900;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36900__$1,inst_36898);
} else {
if((state_val_36901 === (12))){
var inst_36864 = (state_36900[(7)]);
var inst_36888 = cljs.core.vec(inst_36864);
var state_36900__$1 = state_36900;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36900__$1,(15),out,inst_36888);
} else {
if((state_val_36901 === (2))){
var state_36900__$1 = state_36900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36900__$1,(4),ch);
} else {
if((state_val_36901 === (11))){
var inst_36880 = (state_36900[(2)]);
var inst_36881 = (new Array(n));
var inst_36864 = inst_36881;
var inst_36865 = (0);
var state_36900__$1 = (function (){var statearr_36912 = state_36900;
(statearr_36912[(7)] = inst_36864);

(statearr_36912[(10)] = inst_36880);

(statearr_36912[(8)] = inst_36865);

return statearr_36912;
})();
var statearr_36913_36943 = state_36900__$1;
(statearr_36913_36943[(2)] = null);

(statearr_36913_36943[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36901 === (9))){
var inst_36864 = (state_36900[(7)]);
var inst_36878 = cljs.core.vec(inst_36864);
var state_36900__$1 = state_36900;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36900__$1,(11),out,inst_36878);
} else {
if((state_val_36901 === (5))){
var inst_36864 = (state_36900[(7)]);
var inst_36873 = (state_36900[(11)]);
var inst_36865 = (state_36900[(8)]);
var inst_36868 = (state_36900[(9)]);
var inst_36872 = (inst_36864[inst_36865] = inst_36868);
var inst_36873__$1 = (inst_36865 + (1));
var inst_36874 = (inst_36873__$1 < n);
var state_36900__$1 = (function (){var statearr_36914 = state_36900;
(statearr_36914[(12)] = inst_36872);

(statearr_36914[(11)] = inst_36873__$1);

return statearr_36914;
})();
if(cljs.core.truth_(inst_36874)){
var statearr_36915_36944 = state_36900__$1;
(statearr_36915_36944[(1)] = (8));

} else {
var statearr_36916_36945 = state_36900__$1;
(statearr_36916_36945[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36901 === (14))){
var inst_36893 = (state_36900[(2)]);
var inst_36894 = cljs.core.async.close_BANG_(out);
var state_36900__$1 = (function (){var statearr_36918 = state_36900;
(statearr_36918[(13)] = inst_36893);

return statearr_36918;
})();
var statearr_36919_36946 = state_36900__$1;
(statearr_36919_36946[(2)] = inst_36894);

(statearr_36919_36946[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36901 === (10))){
var inst_36884 = (state_36900[(2)]);
var state_36900__$1 = state_36900;
var statearr_36920_36947 = state_36900__$1;
(statearr_36920_36947[(2)] = inst_36884);

(statearr_36920_36947[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36901 === (8))){
var inst_36864 = (state_36900[(7)]);
var inst_36873 = (state_36900[(11)]);
var tmp36917 = inst_36864;
var inst_36864__$1 = tmp36917;
var inst_36865 = inst_36873;
var state_36900__$1 = (function (){var statearr_36921 = state_36900;
(statearr_36921[(7)] = inst_36864__$1);

(statearr_36921[(8)] = inst_36865);

return statearr_36921;
})();
var statearr_36922_36948 = state_36900__$1;
(statearr_36922_36948[(2)] = null);

(statearr_36922_36948[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__34193__auto___36934,out))
;
return ((function (switch__34069__auto__,c__34193__auto___36934,out){
return (function() {
var cljs$core$async$state_machine__34070__auto__ = null;
var cljs$core$async$state_machine__34070__auto____0 = (function (){
var statearr_36926 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36926[(0)] = cljs$core$async$state_machine__34070__auto__);

(statearr_36926[(1)] = (1));

return statearr_36926;
});
var cljs$core$async$state_machine__34070__auto____1 = (function (state_36900){
while(true){
var ret_value__34071__auto__ = (function (){try{while(true){
var result__34072__auto__ = switch__34069__auto__(state_36900);
if(cljs.core.keyword_identical_QMARK_(result__34072__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34072__auto__;
}
break;
}
}catch (e36927){if((e36927 instanceof Object)){
var ex__34073__auto__ = e36927;
var statearr_36928_36949 = state_36900;
(statearr_36928_36949[(5)] = ex__34073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36900);

return cljs.core.cst$kw$recur;
} else {
throw e36927;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34071__auto__,cljs.core.cst$kw$recur)){
var G__36950 = state_36900;
state_36900 = G__36950;
continue;
} else {
return ret_value__34071__auto__;
}
break;
}
});
cljs$core$async$state_machine__34070__auto__ = function(state_36900){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34070__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34070__auto____1.call(this,state_36900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34070__auto____0;
cljs$core$async$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34070__auto____1;
return cljs$core$async$state_machine__34070__auto__;
})()
;})(switch__34069__auto__,c__34193__auto___36934,out))
})();
var state__34195__auto__ = (function (){var statearr_36929 = (f__34194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34194__auto__.cljs$core$IFn$_invoke$arity$0() : f__34194__auto__.call(null));
(statearr_36929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34193__auto___36934);

return statearr_36929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34195__auto__);
});})(c__34193__auto___36934,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args36951 = [];
var len__7454__auto___37025 = arguments.length;
var i__7455__auto___37026 = (0);
while(true){
if((i__7455__auto___37026 < len__7454__auto___37025)){
args36951.push((arguments[i__7455__auto___37026]));

var G__37027 = (i__7455__auto___37026 + (1));
i__7455__auto___37026 = G__37027;
continue;
} else {
}
break;
}

var G__36953 = args36951.length;
switch (G__36953) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36951.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34193__auto___37029 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34193__auto___37029,out){
return (function (){
var f__34194__auto__ = (function (){var switch__34069__auto__ = ((function (c__34193__auto___37029,out){
return (function (state_36995){
var state_val_36996 = (state_36995[(1)]);
if((state_val_36996 === (7))){
var inst_36991 = (state_36995[(2)]);
var state_36995__$1 = state_36995;
var statearr_36997_37030 = state_36995__$1;
(statearr_36997_37030[(2)] = inst_36991);

(statearr_36997_37030[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36996 === (1))){
var inst_36954 = [];
var inst_36955 = inst_36954;
var inst_36956 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_36995__$1 = (function (){var statearr_36998 = state_36995;
(statearr_36998[(7)] = inst_36956);

(statearr_36998[(8)] = inst_36955);

return statearr_36998;
})();
var statearr_36999_37031 = state_36995__$1;
(statearr_36999_37031[(2)] = null);

(statearr_36999_37031[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36996 === (4))){
var inst_36959 = (state_36995[(9)]);
var inst_36959__$1 = (state_36995[(2)]);
var inst_36960 = (inst_36959__$1 == null);
var inst_36961 = cljs.core.not(inst_36960);
var state_36995__$1 = (function (){var statearr_37000 = state_36995;
(statearr_37000[(9)] = inst_36959__$1);

return statearr_37000;
})();
if(inst_36961){
var statearr_37001_37032 = state_36995__$1;
(statearr_37001_37032[(1)] = (5));

} else {
var statearr_37002_37033 = state_36995__$1;
(statearr_37002_37033[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36996 === (15))){
var inst_36985 = (state_36995[(2)]);
var state_36995__$1 = state_36995;
var statearr_37003_37034 = state_36995__$1;
(statearr_37003_37034[(2)] = inst_36985);

(statearr_37003_37034[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36996 === (13))){
var state_36995__$1 = state_36995;
var statearr_37004_37035 = state_36995__$1;
(statearr_37004_37035[(2)] = null);

(statearr_37004_37035[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36996 === (6))){
var inst_36955 = (state_36995[(8)]);
var inst_36980 = inst_36955.length;
var inst_36981 = (inst_36980 > (0));
var state_36995__$1 = state_36995;
if(cljs.core.truth_(inst_36981)){
var statearr_37005_37036 = state_36995__$1;
(statearr_37005_37036[(1)] = (12));

} else {
var statearr_37006_37037 = state_36995__$1;
(statearr_37006_37037[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36996 === (3))){
var inst_36993 = (state_36995[(2)]);
var state_36995__$1 = state_36995;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36995__$1,inst_36993);
} else {
if((state_val_36996 === (12))){
var inst_36955 = (state_36995[(8)]);
var inst_36983 = cljs.core.vec(inst_36955);
var state_36995__$1 = state_36995;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36995__$1,(15),out,inst_36983);
} else {
if((state_val_36996 === (2))){
var state_36995__$1 = state_36995;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36995__$1,(4),ch);
} else {
if((state_val_36996 === (11))){
var inst_36959 = (state_36995[(9)]);
var inst_36963 = (state_36995[(10)]);
var inst_36973 = (state_36995[(2)]);
var inst_36974 = [];
var inst_36975 = inst_36974.push(inst_36959);
var inst_36955 = inst_36974;
var inst_36956 = inst_36963;
var state_36995__$1 = (function (){var statearr_37007 = state_36995;
(statearr_37007[(11)] = inst_36973);

(statearr_37007[(12)] = inst_36975);

(statearr_37007[(7)] = inst_36956);

(statearr_37007[(8)] = inst_36955);

return statearr_37007;
})();
var statearr_37008_37038 = state_36995__$1;
(statearr_37008_37038[(2)] = null);

(statearr_37008_37038[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36996 === (9))){
var inst_36955 = (state_36995[(8)]);
var inst_36971 = cljs.core.vec(inst_36955);
var state_36995__$1 = state_36995;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36995__$1,(11),out,inst_36971);
} else {
if((state_val_36996 === (5))){
var inst_36959 = (state_36995[(9)]);
var inst_36956 = (state_36995[(7)]);
var inst_36963 = (state_36995[(10)]);
var inst_36963__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36959) : f.call(null,inst_36959));
var inst_36964 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36963__$1,inst_36956);
var inst_36965 = cljs.core.keyword_identical_QMARK_(inst_36956,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_36966 = (inst_36964) || (inst_36965);
var state_36995__$1 = (function (){var statearr_37009 = state_36995;
(statearr_37009[(10)] = inst_36963__$1);

return statearr_37009;
})();
if(cljs.core.truth_(inst_36966)){
var statearr_37010_37039 = state_36995__$1;
(statearr_37010_37039[(1)] = (8));

} else {
var statearr_37011_37040 = state_36995__$1;
(statearr_37011_37040[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36996 === (14))){
var inst_36988 = (state_36995[(2)]);
var inst_36989 = cljs.core.async.close_BANG_(out);
var state_36995__$1 = (function (){var statearr_37013 = state_36995;
(statearr_37013[(13)] = inst_36988);

return statearr_37013;
})();
var statearr_37014_37041 = state_36995__$1;
(statearr_37014_37041[(2)] = inst_36989);

(statearr_37014_37041[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36996 === (10))){
var inst_36978 = (state_36995[(2)]);
var state_36995__$1 = state_36995;
var statearr_37015_37042 = state_36995__$1;
(statearr_37015_37042[(2)] = inst_36978);

(statearr_37015_37042[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36996 === (8))){
var inst_36959 = (state_36995[(9)]);
var inst_36963 = (state_36995[(10)]);
var inst_36955 = (state_36995[(8)]);
var inst_36968 = inst_36955.push(inst_36959);
var tmp37012 = inst_36955;
var inst_36955__$1 = tmp37012;
var inst_36956 = inst_36963;
var state_36995__$1 = (function (){var statearr_37016 = state_36995;
(statearr_37016[(14)] = inst_36968);

(statearr_37016[(7)] = inst_36956);

(statearr_37016[(8)] = inst_36955__$1);

return statearr_37016;
})();
var statearr_37017_37043 = state_36995__$1;
(statearr_37017_37043[(2)] = null);

(statearr_37017_37043[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__34193__auto___37029,out))
;
return ((function (switch__34069__auto__,c__34193__auto___37029,out){
return (function() {
var cljs$core$async$state_machine__34070__auto__ = null;
var cljs$core$async$state_machine__34070__auto____0 = (function (){
var statearr_37021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37021[(0)] = cljs$core$async$state_machine__34070__auto__);

(statearr_37021[(1)] = (1));

return statearr_37021;
});
var cljs$core$async$state_machine__34070__auto____1 = (function (state_36995){
while(true){
var ret_value__34071__auto__ = (function (){try{while(true){
var result__34072__auto__ = switch__34069__auto__(state_36995);
if(cljs.core.keyword_identical_QMARK_(result__34072__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34072__auto__;
}
break;
}
}catch (e37022){if((e37022 instanceof Object)){
var ex__34073__auto__ = e37022;
var statearr_37023_37044 = state_36995;
(statearr_37023_37044[(5)] = ex__34073__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36995);

return cljs.core.cst$kw$recur;
} else {
throw e37022;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34071__auto__,cljs.core.cst$kw$recur)){
var G__37045 = state_36995;
state_36995 = G__37045;
continue;
} else {
return ret_value__34071__auto__;
}
break;
}
});
cljs$core$async$state_machine__34070__auto__ = function(state_36995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34070__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34070__auto____1.call(this,state_36995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34070__auto____0;
cljs$core$async$state_machine__34070__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34070__auto____1;
return cljs$core$async$state_machine__34070__auto__;
})()
;})(switch__34069__auto__,c__34193__auto___37029,out))
})();
var state__34195__auto__ = (function (){var statearr_37024 = (f__34194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34194__auto__.cljs$core$IFn$_invoke$arity$0() : f__34194__auto__.call(null));
(statearr_37024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34193__auto___37029);

return statearr_37024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34195__auto__);
});})(c__34193__auto___37029,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

