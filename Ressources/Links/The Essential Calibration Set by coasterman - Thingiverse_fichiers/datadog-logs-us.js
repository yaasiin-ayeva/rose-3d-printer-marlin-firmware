!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([,function(e,t,n){"use strict";n.r(t),n.d(t,"datadogLogs",(function(){return Xe}));var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}function i(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r}var a,s,u=6e4,c=60*u;!function(e){e.BEFORE_UNLOAD="beforeunload",e.CLICK="click",e.KEY_DOWN="keydown",e.LOAD="load",e.POP_STATE="popstate",e.SCROLL="scroll",e.TOUCH_START="touchstart",e.VISIBILITY_CHANGE="visibilitychange"}(a||(a={})),function(e){e.DOCUMENT="document",e.XHR="xhr",e.BEACON="beacon",e.FETCH="fetch",e.CSS="css",e.JS="js",e.IMAGE="image",e.FONT="font",e.MEDIA="media",e.OTHER="other"}(s||(s={}));var l,f=function(e){return Array.isArray(e)},d=function(e){return!Array.isArray(e)&&"object"==typeof e};function p(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(e,t){return f(e)&&f(t)?i(Array(Math.max(e.length,t.length))).map((function(n,r){return p(e[r],t[r])})):d(e)&&d(t)?Object.keys(t).reduce((function(n,o){var i;return r(r({},n),((i={})[o]=p(e[o],t[o]),i))}),e):void 0===t?e:t}),e)}function h(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];t.forEach((function(t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}))}function g(e){return e?(parseInt(e,10)^16*Math.random()>>parseInt(e,10)/4).toString(16):(1e7+"-1000-4000-8000-100000000000").replace(/[018]/g,g)}function v(){}function m(e,t,n){if(null==e)return JSON.stringify(e);var r=[!1,void 0];y(e)&&(r=[!0,e.toJSON],delete e.toJSON);var o,i,a=[!1,void 0];"object"==typeof e&&y(o=Object.getPrototypeOf(e))&&(a=[!0,o.toJSON],delete o.toJSON);try{i=JSON.stringify(e,void 0,n)}catch(e){i="<error: unable to serialize object>"}finally{r[0]&&(e.toJSON=r[1]),a[0]&&(o.toJSON=a[1])}return i}function y(e){return"object"==typeof e&&null!==e&&e.hasOwnProperty("toJSON")}function b(){return void 0===l&&(l=performance.timing.navigationStart),l}function w(e){if(e.origin)return e.origin;var t=e.host.replace(/(:80|:443)$/,"");return e.protocol+"//"+t}var E={isCollectingError:!0,maxErrorsByMinute:3e3,maxInternalMonitoringMessagesPerPage:15,resourceSampleRate:100,sampleRate:100,silentMultipleInit:!1,trackInteractions:!1,requestErrorResponseLengthLimit:32768,flushTimeout:3e4,maxBatchSize:50,maxMessageSize:262144,batchBytesLimit:16384};function x(e,t,n){var r=t.datacenter===te.US?"com":"eu",o=t.sdkEnv===ne.PRODUCTION?"datadoghq."+r:"datad0g."+r,i="sdk_version:"+t.sdkVersion+(t.env?",env:"+t.env:"")+(t.service?",service:"+t.service:"")+(t.version?",version:"+t.version:""),a=e+"-http-intake.logs."+o,s=t.proxyHost?t.proxyHost:a,u=t.proxyHost?"ddhost="+a+"&":"",c=""+(t.applicationId?"_dd.application_id="+t.applicationId+"&":"")+u+"ddsource="+(n||"browser")+"&ddtags="+i;return"https://"+s+"/v1/input/"+t.clientToken+"?"+c}var T=1e3;function O(e,t,n){var r=new Date;r.setTime(r.getTime()+n);var o="expires="+r.toUTCString();document.cookie=e+"="+t+";"+o+";path=/;samesite=strict"}function S(e){var t=document.cookie.match("(^|;)\\s*"+e+"\\s*=\\s*([^;]+)");return t?t.pop():void 0}function C(){if(void 0===document.cookie||null===document.cookie)return!1;try{return O("dd_rum_test","test",1e3),"test"===S("dd_rum_test")}catch(e){return console.error(e),!1}}var L="?",k=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;function I(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var R=function(){var e,t,n,r,o,i,a=[];function s(e,t,n){var r;for(var o in a)if(I(a,o))try{a[o](e,t,n)}catch(e){r=e}if(r)throw r}function u(e,r,o,i,a){if(t)M.augmentStackTraceWithInitialElement(t,r,o,""+e),l();else if(a)s(M(a),!0,a);else{var u,c={url:r,column:i,line:o},f=e;if("[object String]"==={}.toString.call(e)){var d=f.match(k);d&&(u=d[1],f=d[2])}s({name:u,message:f,stack:[c]},!0)}return!!n&&n.apply(this,arguments)}function c(e){var t=e.reason||"Empty reason";s(M(t),!0,t)}function l(){var n=t,r=e;t=void 0,e=void 0,s(n,!1,r)}function f(n){if(t){if(e===n)return;l()}var r=M(n);throw t=r,e=n,setTimeout((function(){e===n&&l()}),r.incomplete?2e3:0),n}return f.subscribe=function(e){!function(){if(r)return;n=window.onerror,window.onerror=z(u),r=!0}(),function(){if(i)return;o=null!==window.onunhandledrejection?window.onunhandledrejection:void 0,window.onunhandledrejection=z(c),i=!0}(),a.push(e)},f.unsubscribe=function(e){for(var t=a.length-1;t>=0;t-=1)a[t]===e&&a.splice(t,1);0===a.length&&(r&&(window.onerror=n,r=!1),i&&(window.onunhandledrejection=o,i=!1))},f.traceKitWindowOnError=u,f}(),M=function(){var e=!1;function t(e){if(e.stack){for(var t,n,r,o,i=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,a=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,s=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,u=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,c=/\((\S*)(?::(\d+))(?::(\d+))\)/,l=e.stack.split("\n"),f=[],d=0,p=l.length;d<p;d+=1){if(i.exec(l[d])){var h=(r=i.exec(l[d]))[2]&&0===r[2].indexOf("native");t=r[2]&&0===r[2].indexOf("eval"),n=c.exec(r[2]),t&&n&&(r[2]=n[1],r[3]=n[2],r[4]=n[3]),o={args:h?[r[2]]:[],column:r[4]?+r[4]:void 0,func:r[1]||L,line:r[3]?+r[3]:void 0,url:h?void 0:r[2]}}else if(s.exec(l[d]))o={args:[],column:(r=s.exec(l[d]))[4]?+r[4]:void 0,func:r[1]||L,line:+r[3],url:r[2]};else{if(!a.exec(l[d]))continue;t=(r=a.exec(l[d]))[3]&&r[3].indexOf(" > eval")>-1,n=u.exec(r[3]),t&&n?(r[3]=n[1],r[4]=n[2],r[5]=void 0):0!==d||r[5]||void 0===e.columnNumber||(f[0].column=e.columnNumber+1),o={args:r[2]?r[2].split(","):[],column:r[5]?+r[5]:void 0,func:r[1]||L,line:r[4]?+r[4]:void 0,url:r[3]}}!o.func&&o.line&&(o.func=L),f.push(o)}if(f.length)return{stack:f,message:e.message,name:e.name}}}function n(e,t,n,r){var o={url:t,line:n?+n:void 0};if(o.url&&o.line){e.incomplete=!1;var i=e.stack;if(i.length>0&&i[0].url===o.url){if(i[0].line===o.line)return!1;if(!i[0].line&&i[0].func===o.func)return i[0].line=o.line,i[0].context=o.context,!1}return i.unshift(o),e.partial=!0,!0}return e.incomplete=!0,!1}function r(e,t){for(var o,i,a=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,s=[],u={},c=!1,l=r.caller;l&&!c;l=l.caller)l!==M&&l!==R&&(i={args:[],column:void 0,func:L,line:void 0,url:void 0},o=a.exec(l.toString()),l.name?i.func=l.name:o&&(i.func=o[1]),void 0===i.func&&(i.func=o?o.input.substring(0,o.input.indexOf("{")):void 0),u[""+l]?c=!0:u[""+l]=!0,s.push(i));t&&s.splice(0,t);var f={stack:s,message:e.message,name:e.name};return n(f,e.sourceURL||e.fileName,e.line||e.lineNumber,e.message||e.description),f}function o(n,o){var i,a=void 0===o?0:+o;try{if(i=function(e){var t=e.stacktrace;if(t){for(var n,r=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,o=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i,i=t.split("\n"),a=[],s=0;s<i.length;s+=2){var u=void 0;r.exec(i[s])?u={args:[],column:void 0,func:(n=r.exec(i[s]))[3],line:+n[1],url:n[2]}:o.exec(i[s])&&(u={args:(n=o.exec(i[s]))[5]?n[5].split(","):[],column:+n[2],func:n[3]||n[4],line:+n[1],url:n[6]}),u&&(!u.func&&u.line&&(u.func=L),u.context=[i[s+1]],a.push(u))}if(a.length)return{stack:a,message:e.message,name:e.name}}}(n))return i}catch(t){if(e)throw t}try{if(i=t(n))return i}catch(t){if(e)throw t}try{if(i=function(e){var t=e.message.split("\n");if(!(t.length<4)){var n,r=/^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,o=/^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,i=/^\s*Line (\d+) of function script\s*$/i,a=[],s=window&&window.document&&window.document.getElementsByTagName("script"),u=[];for(var c in s)I(s,c)&&!s[c].src&&u.push(s[c]);for(var l=2;l<t.length;l+=2){var f=void 0;if(r.exec(t[l]))f={args:[],column:void 0,func:(n=r.exec(t[l]))[3],line:+n[1],url:n[2]};else if(o.exec(t[l]))f={args:[],column:void 0,func:(n=o.exec(t[l]))[4],line:+n[1],url:n[3]};else if(i.exec(t[l])){n=i.exec(t[l]),f={url:window.location.href.replace(/#.*$/,""),args:[],column:void 0,func:"",line:+n[1]}}f&&(f.func||(f.func=L),f.context=[t[l+1]],a.push(f))}if(a.length)return{stack:a,message:t[0],name:e.name}}}(n))return i}catch(t){if(e)throw t}try{if(i=r(n,a+1))return i}catch(t){if(e)throw t}return{message:n.message,name:n.name,stack:[]}}return o.augmentStackTraceWithInitialElement=n,o.computeStackTraceFromStackProp=t,o.ofCaller=function(e){var t=1+(void 0===e?0:+e);try{throw new Error}catch(e){return M(e,t+1)}},o}();var _=/[^\u0000-\u007F]/,B=function(){function e(e,t,n){void 0===n&&(n=!1),this.endpointUrl=e,this.bytesLimit=t,this.withBatchTime=n}return e.prototype.send=function(e,t){var n=this.withBatchTime?function(e){return e+(-1===e.indexOf("?")?"?":"&")+"batch_time="+(new Date).getTime()}(this.endpointUrl):this.endpointUrl;if(navigator.sendBeacon&&t<this.bytesLimit&&navigator.sendBeacon(n,e))return;var r=new XMLHttpRequest;r.open("POST",n,!0),r.send(e)},e}();var A,N=function(){function e(e,t,n,r,o,i,a){void 0===a&&(a=v),this.request=e,this.maxSize=t,this.bytesLimit=n,this.maxMessageSize=r,this.flushTimeout=o,this.contextProvider=i,this.beforeUnloadCallback=a,this.pushOnlyBuffer=[],this.upsertBuffer={},this.bufferBytesSize=0,this.bufferMessageCount=0,this.flushOnVisibilityHidden(),this.flushPeriodically()}return e.prototype.add=function(e){this.addOrUpdate(e)},e.prototype.upsert=function(e,t){this.addOrUpdate(e,t)},e.prototype.flush=function(){if(0!==this.bufferMessageCount){var e=i(this.pushOnlyBuffer,(t=this.upsertBuffer,n=[],Object.keys(t).forEach((function(e){n.push(t[e])})),n));this.request.send(e.join("\n"),this.bufferBytesSize),this.pushOnlyBuffer=[],this.upsertBuffer={},this.bufferBytesSize=0,this.bufferMessageCount=0}var t,n},e.prototype.sizeInBytes=function(e){return _.test(e)?void 0!==window.TextEncoder?(new TextEncoder).encode(e).length:new Blob([e]).size:e.length},e.prototype.addOrUpdate=function(e,t){var n=this.process(e),r=n.processedMessage,o=n.messageBytesSize;o>=this.maxMessageSize?console.warn("Discarded a message whose size was bigger than the maximum allowed size "+this.maxMessageSize+"KB."):(this.hasMessageFor(t)&&this.remove(t),this.willReachedBytesLimitWith(o)&&this.flush(),this.push(r,o,t),this.isFull()&&this.flush())},e.prototype.process=function(e){var t=m(p({},this.contextProvider(),e));return{processedMessage:t,messageBytesSize:this.sizeInBytes(t)}},e.prototype.push=function(e,t,n){this.bufferMessageCount>0&&(this.bufferBytesSize+=1),void 0!==n?this.upsertBuffer[n]=e:this.pushOnlyBuffer.push(e),this.bufferBytesSize+=t,this.bufferMessageCount+=1},e.prototype.remove=function(e){var t=this.upsertBuffer[e];delete this.upsertBuffer[e];var n=this.sizeInBytes(t);this.bufferBytesSize-=n,this.bufferMessageCount-=1,this.bufferMessageCount>0&&(this.bufferBytesSize-=1)},e.prototype.hasMessageFor=function(e){return void 0!==e&&void 0!==this.upsertBuffer[e]},e.prototype.willReachedBytesLimitWith=function(e){return this.bufferBytesSize+e+1>=this.bytesLimit},e.prototype.isFull=function(){return this.bufferMessageCount===this.maxSize||this.bufferBytesSize>=this.bytesLimit},e.prototype.flushPeriodically=function(){var e=this;setTimeout((function(){e.flush(),e.flushPeriodically()}),this.flushTimeout)},e.prototype.flushOnVisibilityHidden=function(){var e=this;navigator.sendBeacon&&(window.addEventListener(a.BEFORE_UNLOAD,z(this.beforeUnloadCallback)),document.addEventListener(a.VISIBILITY_CHANGE,z((function(){"hidden"===document.visibilityState&&e.flush()}))),window.addEventListener(a.BEFORE_UNLOAD,z((function(){return e.flush()}))))},e}();!function(e){e.info="info",e.error="error"}(A||(A={}));var j,D={maxMessagesPerPage:0,sentMessageCount:0};function P(e){if(e.internalMonitoringEndpoint){var t=function(e){var t,n=r(e.internalMonitoringEndpoint);void 0!==e.replica&&(t=r(e.replica.internalMonitoringEndpoint));function r(t){return new N(new B(t,e.batchBytesLimit),e.maxBatchSize,e.batchBytesLimit,e.maxMessageSize,e.flushTimeout,(function(){return p({date:(new Date).getTime(),view:{referrer:document.referrer,url:window.location.href}},void 0!==j?j():{})}))}return{add:function(e){n.add(e),t&&t.add(e)}}}(e);h(D,{batch:t,maxMessagesPerPage:e.maxInternalMonitoringMessagesPerPage,sentMessageCount:0})}return{setExternalContextProvider:function(e){j=e}}}function U(e,t,n){var r=n.value;n.value=function(){var e=D.batch?z(r):r;return e.apply(this,arguments)}}function z(e){return function(){try{return e.apply(this,arguments)}catch(e){K(e);try{H(e)}catch(e){K(e)}}}}function H(e){G(r(r({},function(e){if(e instanceof Error){var t=M(e);return{error:{kind:t.name,stack:le(t)},message:t.message}}return{error:{stack:"Not an instance of error"},message:"Uncaught "+m(e)}}(e)),{status:A.error}))}function G(e){D.batch&&D.sentMessageCount<D.maxMessagesPerPage&&(D.sentMessageCount+=1,D.batch.add(e))}function F(e){D.debugMode=e}function K(e){D.debugMode&&console.warn("[INTERNAL ERROR]",e)}var q,$,V=function(){function e(){this.observers=[]}return e.prototype.subscribe=function(e){this.observers.push(e)},e.prototype.notify=function(e){this.observers.forEach((function(t){return t(e)}))},e}();function X(e){return J(e,w(window.location)).href}function J(e,t){if(function(){if(void 0!==q)return q;try{var e=new URL("http://test/path");return q="http://test/path"===e.href}catch(e){q=!1}return q}())return void 0!==t?new URL(e,t):new URL(e);if(void 0===t&&!/:/.test(e))throw new Error("Invalid URL: '"+e+"'");var n=document,r=n.createElement("a");if(void 0!==t){var o=(n=document.implementation.createHTMLDocument("")).createElement("base");o.href=t,n.head.appendChild(o),n.body.appendChild(r)}return r.href=e,r}!function(e){e.FETCH="fetch",e.XHR="xhr"}($||($={}));var W,Y,Z,Q,ee,te,ne,re,oe=1;function ie(){var e=oe;return oe+=1,e}function ae(){return W||(function(e){var t=e[0],n=e[1],r=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=z((function(e,t){return this._datadog_xhr={method:e,url:t},r.apply(this,arguments)}));var o=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.send=function(e){var r=this,i=performance.now(),a=ie();t.notify({requestId:a});var s=!1,u=function(){s||(s=!0,n.notify({requestId:a,startTime:i,duration:performance.now()-i,method:r._datadog_xhr.method,response:r.response,status:r.status,traceId:se(),type:$.XHR,url:X(r._datadog_xhr.url)}))},c=this.onreadystatechange;return this.onreadystatechange=function(){this.readyState===XMLHttpRequest.DONE&&z(u)(),c&&c.apply(this,arguments)},this.addEventListener("loadend",z(u)),o.apply(this,arguments)}}(W=[new V,new V]),function(e){var t=e[0],n=e[1];if(!window.fetch)return;var r=window.fetch;window.fetch=z((function(e,i){var a=this,s=i&&i.method||"object"==typeof e&&e.method||"GET",u=performance.now(),c=ie();t.notify({requestId:c});var l=function(t){return r=a,i=void 0,f=function(){var r,i,a,l,f;return o(this,(function(o){switch(o.label){case 0:return r=performance.now()-u,i=X("object"==typeof e&&e.url||e),"stack"in t||t instanceof Error?(a=M(t),n.notify({duration:r,method:s,requestId:c,startTime:u,url:i,response:le(a),status:0,traceId:se(),type:$.FETCH}),[3,6]):[3,1];case 1:if(!("status"in t))return[3,6];l=void 0,o.label=2;case 2:return o.trys.push([2,4,,5]),[4,t.clone().text()];case 3:return l=o.sent(),[3,5];case 4:return f=o.sent(),l="Unable to retrieve response: "+f,[3,5];case 5:n.notify({duration:r,method:s,requestId:c,startTime:u,url:i,response:l,responseType:t.type,status:t.status,traceId:se(),type:$.FETCH}),o.label=6;case 6:return[2]}}))},new((l=void 0)||(l=Promise))((function(e,t){function n(e){try{a(f.next(e))}catch(e){t(e)}}function o(e){try{a(f.throw(e))}catch(e){t(e)}}function a(t){t.done?e(t.value):new l((function(e){e(t.value)})).then(n,o)}a((f=f.apply(r,i||[])).next())}));var r,i,l,f},f=r.call(this,e,i);return f.then(z(l),z(l)),f}))}(W)),W}function se(){return"ddtrace"in window&&window.ddtrace.tracer.scope().active()?window.ddtrace.tracer.scope().active().context().toTraceId():void 0}function ue(e){if(!Z){var t=new V;if(e.isCollectingError)!function(e,t,n){n.subscribe((function(n){(function(e){return 0===e.status&&"opaque"!==e.responseType}(n)||function(e){return e.status>=500}(n))&&t.notify({context:{error:{origin:Y.NETWORK,stack:fe(n.response,e)||"Failed to load"},http:{method:n.method,status_code:n.status,url:n.url}},message:de(n.type)+" error "+n.method+" "+n.url,startTime:n.startTime})}))}(e,t,ae()[1]),function(e){Q=console.error,console.error=z((function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];Q.apply(console,i([t],n)),e.notify({context:{error:{origin:Y.CONSOLE}},message:i(["console error:",t],n).map(ce).join(" "),startTime:performance.now()})}))}(t),function(e){ee=function(t,n,r){e.notify(function(e,t){var n,r;void 0!==e.message||t instanceof Error?(n=e.message||"Empty message",r=le(e)):(n="Uncaught "+m(t),r="No stack, consider using an instance of Error");return{message:n,context:{error:{stack:r,kind:e.name,origin:Y.SOURCE}},startTime:performance.now()}}(t,r))},R.subscribe(ee)}(t);Z=function(e,t){var n=0,r=new V;return t.subscribe((function(t){n<e.maxErrorsByMinute?(n+=1,r.notify(t)):n===e.maxErrorsByMinute&&(n+=1,r.notify({context:{error:{origin:Y.AGENT}},message:"Reached max number of errors by minute: "+e.maxErrorsByMinute,startTime:performance.now()}))})),setInterval((function(){return n=0}),u),r}(e,t)}return Z}function ce(e){return"string"==typeof e?e:e instanceof Error?le(M(e)):m(e,0,2)}function le(e){var t=(e.name||"Error")+": "+e.message;return e.stack.forEach((function(e){var n="?"===e.func?"<anonymous>":e.func,r=e.args&&e.args.length>0?"("+e.args.join(", ")+")":"",o=e.line?":"+e.line:"",i=e.line&&e.column?":"+e.column:"";t+="\n  at "+n+r+" @ "+e.url+o+i})),t}function fe(e,t){return e&&e.length>t.requestErrorResponseLengthLimit?e.substring(0,t.requestErrorResponseLengthLimit)+"...":e}function de(e){return $.XHR===e?"XHR":"Fetch"}function pe(e){console.warn("'"+e+"' not yet available, please call '.init()' first.")}function he(e,t){var n=function(e,t){var n={applicationId:e.applicationId,buildMode:t.buildMode,clientToken:e.clientToken,datacenter:e.datacenter||t.datacenter,env:e.env,proxyHost:e.proxyHost,sdkEnv:t.sdkEnv,sdkVersion:t.sdkVersion,service:e.service,version:e.version},o=Array.isArray(e.enableExperimentalFeatures)?e.enableExperimentalFeatures:[],i=r({isEnabled:function(e){return t=e,-1!==o.indexOf(t);var t},logsEndpoint:x("browser",n),rumEndpoint:x("rum",n),traceEndpoint:x("public-trace",n)},E);if(e.internalMonitoringApiKey&&(i.internalMonitoringEndpoint=x("browser",n,"browser-agent-internal-monitoring")),"isCollectingError"in e&&(i.isCollectingError=!!e.isCollectingError),"sampleRate"in e&&(i.sampleRate=e.sampleRate),"resourceSampleRate"in e&&(i.resourceSampleRate=e.resourceSampleRate),"trackInteractions"in e&&(i.trackInteractions=!!e.trackInteractions),n.buildMode===re.E2E_TEST&&(void 0!==e.internalMonitoringEndpoint&&(i.internalMonitoringEndpoint=e.internalMonitoringEndpoint),void 0!==e.logsEndpoint&&(i.logsEndpoint=e.logsEndpoint),void 0!==e.rumEndpoint&&(i.rumEndpoint=e.rumEndpoint)),n.buildMode===re.STAGING&&void 0!==e.replica){var a=r(r({},n),{applicationId:e.replica.applicationId,clientToken:e.replica.clientToken,sdkEnv:ne.PRODUCTION});i.replica={applicationId:e.replica.applicationId,internalMonitoringEndpoint:x("browser",a,"browser-agent-internal-monitoring"),logsEndpoint:x("browser",a),rumEndpoint:x("rum",a)}}return i}(e,t),o=P(n);return{configuration:n,errorObservable:ue(n),internalMonitoring:o}}function ge(){return"file:"!==window.location.protocol||(console.error("Execution is not allowed in the current context."),!1)}!function(e){e.AGENT="agent",e.CONSOLE="console",e.NETWORK="network",e.SOURCE="source",e.LOGGER="logger"}(Y||(Y={})),function(e){e.US="us",e.EU="eu"}(te||(te={})),function(e){e.PRODUCTION="production",e.STAGING="staging"}(ne||(ne={})),function(e){e.RELEASE="release",e.STAGING="staging",e.E2E_TEST="e2e-test"}(re||(re={}));var ve,me,ye={buildMode:"release",datacenter:"us",sdkEnv:"production",sdkVersion:"1.12.8"};!function(e){e.debug="debug",e.info="info",e.warn="warn",e.error="error"}(me||(me={}));var be,we,Ee=((ve={})[me.debug]=0,ve[me.info]=1,ve[me.warn]=2,ve[me.error]=3,ve);Object.keys(me);function xe(e,t,n,o){var i,a={};o.setExternalContextProvider((function(){return p({session_id:n.getId()},a,Se())}));var s=function(e,t,n){var r,o=i(e.logsEndpoint);void 0!==e.replica&&(r=i(e.replica.logsEndpoint));function i(r){return new N(new B(r,e.batchBytesLimit),e.maxBatchSize,e.batchBytesLimit,e.maxMessageSize,e.flushTimeout,(function(){return p({date:(new Date).getTime(),session_id:t.getId(),view:{referrer:document.referrer,url:window.location.href}},n(),Se())}))}return{add:function(e){o.add(e),r&&r.add(e)}}}(t,n,(function(){return a})),u=((i={})[be.console]=function(e){return console.log(e.status+": "+e.message)},i[be.http]=function(e){return s.add(e)},i[be.silent]=v,i),c=new Oe(n,u);we={},e.subscribe((function(e){return c.error(e.message,r({date:(t=e.startTime,Math.floor(b()+t))},e.context));var t}));var l={setLoggerGlobalContext:function(e){a=e},addLoggerGlobalContext:function(e,t){a[e]=t}};return l.createLogger=function(e,t){return function(n,o){return void 0===o&&(o={}),we[n]=new Oe(e,t,o.handler,o.level,r(r({},o.context),{logger:{name:n}})),we[n]}}(n,u),l.getLogger=Te,l.logger=c,l}function Te(e){return we[e]}!function(e){e.http="http",e.console="console",e.silent="silent"}(be||(be={}));var Oe=function(){function e(e,t,n,r,o){void 0===n&&(n=be.http),void 0===r&&(r=me.debug),void 0===o&&(o={}),this.session=e,this.handlers=t,this.level=r,this.loggerContext=o,this.handler=this.handlers[n]}return e.prototype.log=function(e,t,n){void 0===t&&(t={}),void 0===n&&(n=me.info),this.session.isTracked()&&Ee[n]>=Ee[this.level]&&this.handler(r({message:e,status:n},p({},this.loggerContext,t)))},e.prototype.debug=function(e,t){void 0===t&&(t={}),this.log(e,t,me.debug)},e.prototype.info=function(e,t){void 0===t&&(t={}),this.log(e,t,me.info)},e.prototype.warn=function(e,t){void 0===t&&(t={}),this.log(e,t,me.warn)},e.prototype.error=function(e,t){void 0===t&&(t={});var n={error:{origin:Y.LOGGER}};this.log(e,p({},n,t),me.error)},e.prototype.setContext=function(e){this.loggerContext=e},e.prototype.addContext=function(e,t){this.loggerContext[e]=t},e.prototype.setHandler=function(e){this.handler=this.handlers[e]},e.prototype.setLevel=function(e){this.level=e},function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);i>3&&a&&Object.defineProperty(t,n,a)}([U],e.prototype,"log",null),e}();function Se(){var e=window.DD_RUM;return e&&e.getInternalContext?e.getInternalContext():void 0}var Ce="_dd",Le="_dd_r",ke="_dd_l",Ie="rum",Re="logs";var Me="_dd_s",_e=15*u,Be=4*c,Ae=u;function Ne(e,t){var n,r,o,i,s,u=(n=Me,i=!1,s=function(){i=!0,window.clearTimeout(r),r=window.setTimeout((function(){i=!1}),T)},{get:function(){return i?o:(o=S(n),s(),o)},set:function(e,t){O(n,e,t),o=e,s()}});!function(e){var t=e.get(),n=S(Ce),r=S(Le),o=S(ke);if(!t){var i={};n&&(i.id=n),o&&/^[01]$/.test(o)&&(i[Re]=o),r&&/^[012]$/.test(r)&&(i[Ie]=r),Ue(i,e)}}(u);var c,l,f,d,p,h,v,m,y,b=new V,w=Pe(u).id,E=(c=function(){var n=Pe(u),r=t(n[e]),o=r.trackingType,i=r.isTracked;n[e]=o,i&&!n.id&&(n.id=g(),n.created=String(Date.now())),Ue(n,u),i&&w!==n.id&&(w=n.id,b.notify())},l=T,p=!f||void 0===f.leading||f.leading,h=!f||void 0===f.trailing||f.trailing,v=!1,m=!1,y=!1,{throttled:function(){var e=this;y||(v?m=!0:(p?c.apply(this):m=!0,v=!0,d=window.setTimeout((function(){h&&m&&c.apply(e),v=!1,m=!1}),l)))},stop:function(){window.clearTimeout(d),y=!0}}).throttled;return E(),function(e){var t=z(e),n={capture:!0,passive:!0};[a.CLICK,a.TOUCH_START,a.KEY_DOWN,a.SCROLL].forEach((function(e){document.addEventListener(e,t,n),He.push((function(){return document.removeEventListener(e,t,n)}))}))}(E),function(e){var t=z((function(){"visible"===document.visibilityState&&e()})),n=window.setInterval(t,Ae);document.addEventListener(a.VISIBILITY_CHANGE,t),He.push((function(){clearInterval(n),document.removeEventListener(a.VISIBILITY_CHANGE,t)}))}((function(){Ue(Pe(u),u)})),{getId:function(){return Pe(u).id},getTrackingType:function(){return Pe(u)[e]},renewObservable:b}}var je=/^([a-z]+)=([a-z0-9-]+)$/,De="&";function Pe(e){var t=function(e){var t=e.get(),n={};(function(e){return void 0!==e&&(-1!==e.indexOf(De)||je.test(e))})(t)&&t.split(De).forEach((function(e){var t=je.exec(e);if(null!==t){var r=t[1],o=t[2];n[r]=o}}));return n}(e);return function(e){return(void 0===e.created||Date.now()-Number(e.created)<Be)&&(void 0===e.expire||Date.now()<Number(e.expire))}(t)?t:(ze(e),{})}function Ue(e,t){if(n=e,0!==Object.keys(n).length){var n;e.expire=String(Date.now()+_e);var r=function(e){return Object.keys(e).map((function(t){return[t,e[t]]}))}(e).map((function(e){return e[0]+"="+e[1]})).join(De);t.set(r,_e)}else ze(t)}function ze(e){e.set("",0)}var He=[];var Ge,Fe="logs";function Ke(e,t){if(!t){var n=qe(e)===Ge.TRACKED;return{getId:function(){},isTracked:function(){return n}}}var r=Ne(Fe,(function(t){return function(e,t){var n=function(e){return e===Ge.NOT_TRACKED||e===Ge.TRACKED}(t)?t:qe(e);return{trackingType:n,isTracked:n===Ge.TRACKED}}(e,t)}));return{getId:r.getId,isTracked:function(){return r.getTrackingType()===Ge.TRACKED}}}function qe(e){return 0!==(t=e.sampleRate)&&100*Math.random()<=t?Ge.TRACKED:Ge.NOT_TRACKED;var t}!function(e){e.NOT_TRACKED="0",e.TRACKED="1"}(Ge||(Ge={}));var $e,Ve={debug:function(e,t){pe("logs.logger.debug")},error:function(e,t){pe("logs.logger.error")},info:function(e,t){pe("logs.logger.info")},log:function(e,t,n){pe("logs.logger.log")},warn:function(e,t){pe("logs.logger.warn")},setContext:function(e){pe("logs.logger.setContext")},addContext:function(e,t){pe("logs.logger.addContext")},setHandler:function(e){pe("logs.logger.setHandler")},setLevel:function(e){pe("logs.logger.setLevel")}},Xe=($e=r({},{logger:Ve,init:function(e){pe("core.init")},addLoggerGlobalContext:function(e,t){pe("addLoggerGlobalContext")},setLoggerGlobalContext:function(e){pe("setLoggerGlobalContext")},createLogger:function(e,t){return pe("createLogger"),Ve},getLogger:function(e){pe("getLogger")}}),Object.defineProperty($e,"_setDebug",{get:function(){return F},enumerable:!1}),$e),Je=!1;Xe.init=z((function(e){if(ge()&&function(e){if(Je)return e.silentMultipleInit||console.error("DD_LOGS is already initialized."),!1;if(!e||!e.publicApiKey&&!e.clientToken)return console.error("Client Token is not configured, we will not send any data."),!1;if(void 0!==e.sampleRate&&(t=e.sampleRate,!(function(e){return"number"==typeof e}(t)&&t>=0&&t<=100)))return console.error("Sample Rate should be a number between 0 and 100"),!1;var t;return!0}(e)){e.publicApiKey&&(e.clientToken=e.publicApiKey,console.warn("Public API Key is deprecated. Please use Client Token instead."));var t=!1!==e.forwardErrorsToLogs,n=he(r(r({},e),{isCollectingError:t}),ye),o=n.errorObservable,i=n.configuration,a=n.internalMonitoring,s=xe(o,i,Ke(i,C()),a);h(Xe,s),Je=!0}})),(function(){if("object"==typeof globalThis)return globalThis;Object.defineProperty(Object.prototype,"_dd_temp_",{get:function(){return this},configurable:!0});var e=_dd_temp_;return delete Object.prototype._dd_temp_,"object"!=typeof e&&(e="object"==typeof self?self:"object"==typeof window?window:{}),e}()).DD_LOGS=Xe}]);