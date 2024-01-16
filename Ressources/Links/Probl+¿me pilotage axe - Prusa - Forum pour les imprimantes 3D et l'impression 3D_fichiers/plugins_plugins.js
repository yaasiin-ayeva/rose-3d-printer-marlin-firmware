;(function($,_,undefined){"use strict";ips.controller.register('plugins.bimGiphy',{_timer:null,_ajax:null,_value:'',_type:'gifs',initialize:function(){this.on('click','[data-action="playGif"]',this.playGif);this.on('click','[data-action="selectGif"]',this.insertGif);this.on('focus','[data-role="gifSearch"]',this.focusGifSearch);this.on('blur','[data-role="gifSearch"]',this.blurGifSearch);this.on('change','[data-role="gifType"]',this._checkValue);this.on('paginationClicked paginationJump',this.paginationClicked);},playGif:function(e){var container=$(e.currentTarget).prev();var bg=container.css('background-image');bg=bg.replace('url(','').replace(')','').replace(/\"/gi,"");var gif=container.attr('data-preview');if(bg!=gif){container.css('background-image','url('+gif+')');console.log("Playing GIF");}},insertGif:function(e){var element=$(e.currentTarget).attr('class');var id=$(e.currentTarget).attr('data-gifid');var gif=$(e.currentTarget).attr('data-original');var title=$(e.currentTarget).closest('.giphyIMG').attr('title');var original=$(e.currentTarget).attr('data-original');var preview_gif=$(e.currentTarget).attr('data-preview');var still=$(e.currentTarget).attr('data-still');var eID=$(this.scope).data('editorid');if(eID.toLowerCase().indexOf("chatbox_")==0&&eID.toLowerCase().indexOf("chatbox_content_ajax")<0){var evar=eID.split("_");var cbWrapper=evar[1]=='room'?$('.room_'+evar[2]):$('.convo_'+evar[2]);cbWrapper.find('textarea').val(gif).closest('form').submit();}
else if(eID=='chatbox'){var input=$('[data-controller="bim.chatbox.free"]').find('input');input.val(gif);input.closest('form').click();}
else if(eID=='giphyCMD'){var mediaBox=this.scope.closest('.chatboxMedia');mediaBox.empty().hide();var input=mediaBox.next().find('textarea').length>0?mediaBox.next().find('textarea'):mediaBox.next().find('.bimcb_chatInput');input.val(gif).submit();}
else{var editor=CKEDITOR.instances[eID];if(ips.getSetting('bim_giphy_play')==1){editor.insertHtml('<img alt="'+title+'" class="ipsImage bimGiphyIMG" src="'+gif+'">');}
else{var element=CKEDITOR.dom.element.createFromHtml('<div class="bimGiphyContainer" contenteditable="false"></div>');element.setHtml('<img alt="'+title+'" class="ipsImage bimGiphyIMG" src="'+still+'"><div class="giphyPlayBtn"></div>');element.isEditable=false;editor.insertElement(element);editor.widgets.initOn(element,'bimGiphyContainer');$(document).trigger('contentChange',[$(element.$)]);}}
var item={'id':id,'title':title,'images':{'original':{'url':original},'preview_gif':{'url':preview_gif},'original_still':{'url':still}}};var existing=ips.utils.db.get('bimgiphy_gif','recent');if(!existing||!_.isArray(existing)){var json=[item];ips.utils.db.set('bimgiphy_gif','recent',json);}
else{for(var key in existing){var obj=existing[key];if(obj.id==item.id){this.trigger('closeDialog');return;}}
existing.unshift(item);if(existing.length>12){existing.splice((existing.length-12)*-1,existing.length-12);}
ips.utils.db.set('bimgiphy_gif','recent',existing);}
this.trigger('closeDialog');},paginationClicked:function(e,data){var self=this;var results=this.scope.find('[data-role="gifResults"]');var url=data.href;data.originalEvent.preventDefault();if(url=='#'){url=data.paginationElem.find('[data-role="pageJump"]').attr('action')+'&page='+data.pageNo;}
this._ajax=ips.getAjax()(url,{showLoading:true,data:{q:this._value,type:this._type,}}).done(function(response){results.html(response);$(document).trigger('contentChange',[results]);});},focusGifSearch:function(){this._timer=setInterval(_.bind(this._checkValue,this),700);},blurGifSearch:function(){clearInterval(this._timer);},_checkValue:function(){var value=this.scope.find('[data-role="gifSearch"]').val();var type=this.scope.find('[data-role="gifType"]').val();if(value==this._value&&type==this._type){return;}
this._value=value;this._type=type;this._loadResults();},_loadResults:function(){var self=this;var url=this.scope.attr('data-url');var recent=ips.utils.db.get('bimgiphy_gif','recent');var recentData=null;if(!this._value){if(_.isArray(recent)){recentData=JSON.stringify(recent);}}
if(this._ajax&&this._ajax.abort){this._ajax.abort();}
this.scope.find('[data-role="gifSearch"]').addClass('ipsField_loading');this._ajax=ips.getAjax()(url,{data:{q:this._value,type:this._type,offset:0,recent:recentData},type:'post',}).done(function(response){self.scope.find('[data-role="gifResults"]').html(response);$(document).trigger('contentChange',[self.scope.find('[data-role="gifResults"]')]);}).always(function(){self.scope.find('[data-role="gifSearch"]').removeClass('ipsField_loading');});}});}(jQuery,_));$(document).ready(function(){$(document).on('click touchend','.giphyPlayBtn',function(e){var container=$(this).closest('.bimGiphyContainer');var img=container.find('.bimGiphyIMG');var gifURL=img.attr('src').replace("giphy_s.gif","giphy.gif");if($(this).closest('.cke_inner').length<=0){img.attr('src',gifURL);$(this).hide();}
else{var gifID="giphy_"+makeid();container.addClass(gifID);var div=$("<div />",{html:"<style>.cke_inner ."+gifID+" .giphyPlayBtn, .cke_inner ."+gifID+" .ipsImage { visibility: hidden; } .cke_inner ."+gifID+" { background-image: url('"+gifURL+"') }</style>"}).appendTo("body");}
return false;});function makeid(){var text="";var possible="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(var i=0;i<5;i++)
text+=possible.charAt(Math.floor(Math.random()*possible.length));return text;}});;
;(function($,_,undefined){$.easing['jswing']=$.easing['swing'];$.extend($.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return $.easing[$.easing.def](x,t,b,c,d);},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b;},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b;},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b;},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b;},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b;},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b;},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b;},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b;},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b;},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;},easeInBounce:function(x,t,b,c,d){return c-$.easing.easeOutBounce(x,d-t,0,c,d)+b;},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b;}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return $.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return $.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b;}});$.fn.animatescroll=function(options){var opts=$.extend({},$.fn.animatescroll.defaults,options);if(typeof opts.onScrollStart=='function'){opts.onScrollStart.call(this);}
if(opts.element=="html,body"){var offset=this.offset().top;$(opts.element).stop().animate({scrollTop:offset-opts.padding},opts.scrollSpeed,opts.easing);}
else{$(opts.element).stop().animate({scrollTop:this.offset().top-this.parent().offset().top+this.parent().scrollTop()-opts.padding},opts.scrollSpeed,opts.easing);}
setTimeout(function(){if(typeof opts.onScrollEnd=='function'){opts.onScrollEnd.call(this);}},opts.scrollSpeed);};$.fn.animatescroll.defaults={easing:"swing",scrollSpeed:800,padding:0,element:"html,body"};$(document).scroll(function(){var y=$(this).scrollTop();if(y>600){$('#backtoTop').fadeIn();}
else{$('#backtoTop').fadeOut();}});}(jQuery,_));;