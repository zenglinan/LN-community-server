!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t){e.exports=require("koa-router")},function(e,t){e.exports=require("koa")},function(e,t,n){const o=n(10),r=n(12),u=n(14);e.exports=u(o,r)},function(e,t){e.exports=require("koa-helmet")},function(e,t){e.exports=require("koa-static")},function(e,t){e.exports=require("koa-body")},function(e,t){e.exports=require("koa-json")},function(e,t){e.exports=require("@koa/cors")},function(e,t){e.exports=require("koa-compose")},function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),u=n(2),i=n.n(u),c=n(3),f=n.n(c),s=n(4),a=n.n(s),p=n(5),l=n.n(p),b=n(6),d=n.n(b),x=n(7),y=n.n(x),m=n(8),k=n.n(m);const g=new r.a,q=k()([l()(),y()(),a()("./public"),f()(),d()({pretty:!1,param:"pretty"})]);g.use(q),g.use(i()()),g.listen(3e3)},function(e,t,n){const o=n(0),r=n(11),u=new o;u.get("/a",r),e.exports=u},function(e,t){e.exports=function(e){e.body={message:"hello, koa --from a"}}},function(e,t,n){const o=n(0),r=n(13),u=new o;u.get("/b",r),e.exports=u},function(e,t){e.exports=function(e){e.body={message:"hello, koa --from b"}}},function(e,t){e.exports=require("koa-combine-routers")}]);