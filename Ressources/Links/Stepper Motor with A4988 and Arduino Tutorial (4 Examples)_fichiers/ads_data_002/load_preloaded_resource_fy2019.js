(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
'use strict';let e=[];const f=()=>{const a=e;e=[];for(const b of a)try{b()}catch(c){}};var g=(a=null)=>a&&26==a.getAttribute("data-jc")?a:document.querySelector('[data-jc="26"]');var k=document;class l{constructor(){var a=k.head,b=a.querySelectorAll("link[data-reload-stylesheet][as=style][rel=preload]");for(var c=0;c<b.length;c++){const n=b[c];var d="link",h=document;d=String(d);"application/xhtml+xml"===h.contentType&&(d=d.toLowerCase());d=h.createElement(d);d.setAttribute("rel","stylesheet");d.setAttribute("href",n.getAttribute("href"));a.appendChild(d)}if(0<b.length&&!(.01<Math.random())){a=(a=g(document.currentScript))&&a.getAttribute("data-jc-version")||"unknown";a=`https://${"pagead2.googleadservices.com"}/pagead/gen_204?id=jca&jc=${26}&version=${a}&sample=${.01}`; 
b=window;if(c=b.navigator)c=b.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&b.navigator.sendBeacon?b.navigator.sendBeacon(a):(b.google_image_requests||(b.google_image_requests=[]),c=b.document.createElement("img"),c.src=a,b.google_image_requests.push(c))}}};var m=()=>{new l};"complete"===k.readyState||"interactive"===k.readyState?(e.push(m),1==e.length&&(window.Promise?Promise.resolve().then(f):window.setImmediate?setImmediate(f):setTimeout(f,0))):k.addEventListener("DOMContentLoaded",m);}).call(this);
