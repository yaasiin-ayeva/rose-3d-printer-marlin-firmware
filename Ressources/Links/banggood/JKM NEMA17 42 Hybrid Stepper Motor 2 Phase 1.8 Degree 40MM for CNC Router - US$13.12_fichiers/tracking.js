var AT={cookie_duration:30,aff_utm_source:"accesstrade",aff_utm_sources:["accesstrade"],aff_source_param:"utm_source",aff_sid_param:"aff_sid",is_reoccur:1,is_lastclick:1,campaign_id:0,result_id:30,cookie_domain:null,init:function(a){this.cookie_duration=a.cookie_duration?a.cookie_duration:30;this.aff_utm_source=a.aff_utm_source?a.aff_utm_source:"accesstrade";this.aff_utm_sources=a.aff_utm_sources?a.aff_utm_sources:["accesstrade"];this.aff_source_param=a.aff_source_param?a.aff_source_param:"utm_source";this.aff_sid_param=a.aff_sid_param?a.aff_sid_param:"aff_sid";this.is_reoccur=a.is_reoccur==0?0:1;this.is_lastclick=a.is_lastclick==0?0:1;this.campaign_id=a.campaign_id?a.campaign_id:0;this.result_id=a.result_id?a.result_id:30;this.cookie_domain=a.cookie_domain||null},check_scope:function(){var a=this.get_cookie("_aff_network")||this.get_param(this.aff_source_param);if(a==this.aff_utm_source){return true}return false},track:function(){var a=this.get_param(this.aff_sid_param);var b=this.get_param(this.aff_source_param);if(this.is_lastclick){if(b==this.aff_utm_source||this.aff_utm_sources.indexOf(b)!=-1){this.set_cookie("_aff_network",b,this.cookie_duration);if(a){this.set_cookie("_aff_sid",a,this.cookie_duration)}}else{if(b){this.set_cookie("_aff_network","",0);this.set_cookie("_aff_sid","",0)}}}else{if(b==this.aff_utm_source||!this.get_cookie("_aff_network")){this.set_cookie("_aff_network",b,this.cookie_duration);if(a){this.set_cookie("_aff_sid",a,this.cookie_duration)}}}},is_in_app_browser:function(){var a=navigator.userAgent||"";if(a.match(/FBAN\/FBIOS/i)){return true}if(a.match(/FBAN\/MessengerForiOS/i)){return true}if(a.match(/FBMD\/iPhone/i)){return true}if(a.match(/FBSN\/iOS/i)){return true}return false},track_order:function(p){var d=p.order_items?p.order_items:[];var f=p.order_id?p.order_id:"";var k=p.amount?p.amount:0;var m=p.discount?p.discount:0;var t="";var o=this.get_cookie("_aff_network");var r=this.get_cookie("_aff_sid");var h=[];var g="";var e=d.length;for(var q=0;q<e;q++){var l=d[q].itemid;var j=d[q].quantity;var n=d[q].price;var c=d[q].catid;var s=d[q].cat_name?d[q].cat_name:"";t+=("&product[]=$id:"+l+"$quantity:"+j+"$price:"+n+"$category_id:"+c+"$category_name:"+s)}if(p.extra__phone){h.push("extra__phone="+p.extra__phone)}if(p.extra__commission){h.push("extra__commission="+p.extra__commission)}if(p.extra__share_percent){h.push("extra__share_percent="+p.extra__share_percent)}if(h.length>0){g="&"+h.join("&")}var b="https://track.accesstrade.vn/track/collector?transaction_id="+f;b+="&tracking_id="+r+"&aff_source="+o;b+="&campaign_id="+this.campaign_id+"&result_id="+this.result_id;b+="&amount="+k+"&discount="+m+t+g;if(!navigator.sendBeacon||this.is_in_app_browser()){var u=document.createElement("img");u.width=1;u.height=1;u.border=0;u.src=b;document.body.appendChild(u);console.log("[AT] Pixel tracking url: "+u.src)}else{navigator.sendBeacon(b);console.log("[AT] Postback tracking url: "+b)}if(!this.is_reoccur){this.set_cookie("_aff_network","",0);this.set_cookie("_aff_sid","",0)}},get_param:function(c,b){if(!b){b=location.href}c=c.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var a="[\\?&]"+c+"=([^&#]*)";var e=new RegExp(a);var d=e.exec(b);return d==null?null:d[1]},set_cookie:function(g,b,c){var f=new Date();f.setTime(f.getTime()+(c*24*60*60*1000));var a="expires="+f.toUTCString();cookie_domain=this.cookie_domain||window.location.hostname;document.cookie=g+"="+b+"; "+a+";domain="+cookie_domain+"; path=/"},get_cookie:function(d){var b=d+"=";var a=document.cookie.split(";");for(var e=0;e<a.length;e++){var f=a[e];while(f.charAt(0)==" "){f=f.substring(1)}if(f.indexOf(b)==0){return f.substring(b.length,f.length)}}return undefined}};
