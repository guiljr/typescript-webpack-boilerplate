!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(1),n=r(2),s=r(4),i=o.createServer(s.default),u=(e=>{const t="string"==typeof e?parseInt(e,10):e;return isNaN(t)?e:t>=0&&t})(process.env.PORT||3e3);s.default.set("port",u);i.listen(u),i.on("error",e=>{if("listen"!==e.syscall)throw e;const t="string"==typeof u?"Pipe "+u:"Port "+u;switch(e.code){case"EACCES":n.default.error(t+" requires elevated privileges"),process.exit(1);break;case"EADDRINUSE":n.default.error(t+" is already in use"),process.exit(1);break;default:throw e}}),i.on("listening",()=>{const e=i.address(),t="string"==typeof e?"pipe "+e:"port "+e.port;n.default.info("Listening on "+t)})},function(e,t){e.exports=require("http")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const{createLogger:o,transports:n}=r(3),s=new o({exitOnError:!1,level:process.env.LOG_LEVEL||"info"});t.default=s},function(e,t){e.exports=require("winston")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(5),n=r(6);t.default=(new class{constructor(){this.express=n(),this.middleware(),this.routes()}middleware(){this.express.use(o.json()),this.express.use(o.urlencoded({extended:!1}))}routes(){const e=n.Router();e.get("/",(e,t,r)=>{console.log(e),console.log(r),t.json({message:"Hello World!"})}),this.express.use("/",e)}}).express},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("express")}]);
//# sourceMappingURL=main.bundle.js.map