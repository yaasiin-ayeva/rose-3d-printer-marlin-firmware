window.mwPerformance=(window.performance&&performance.mark)?performance:{mark:function(){}};window.mwNow=(function(){var perf=window.performance,navStart=perf&&perf.timing&&perf.timing.navigationStart;return navStart&&typeof perf.now==='function'?function(){return navStart+perf.now();}:function(){return Date.now();};}());window.isCompatible=function(str){var ua=str||navigator.userAgent;return!!((function(){'use strict';return!this&&!!Function.prototype.bind&&!!window.JSON;}())&&'querySelector'in document&&'localStorage'in window&&'addEventListener'in window&&!(ua.match(/webOS\/1\.[0-4]|SymbianOS|Series60|NetFront|Opera Mini|S40OviBrowser|MeeGo|Android.+Glass|^Mozilla\/5\.0 .+ Gecko\/$|googleweblight/)||ua.match(/PlayStation/i)));};(function(){var NORLQ,script;if(!isCompatible()){document.documentElement.className=document.documentElement.className.replace(/(^|\s)client-js(\s|$)/,'$1client-nojs$2');NORLQ=window.NORLQ||[];while(NORLQ.length){NORLQ.shift()();}window.NORLQ={push:function(
fn){fn();}};window.RLQ={push:function(){}};return;}function startUp(){mw.config=new mw.Map(true);mw.loader.addSource({"local":"/mediawiki/load.php"});mw.loader.register([["site","0dew1r4",[1]],["site.styles","0bxx32h",[],"site"],["noscript","0u8ku2h",[],"noscript"],["filepage","1o3mxve"],["user.groups","0te7jzg",[5]],["user","07yj4wk",[6],"user"],["user.styles","0h4cbc6",[],"user"],["user.defaults","19q17n2"],["user.options","0bhc5ha",[7],"private"],["user.tokens","08dmhpw",[],"private"],["mediawiki.language.data","14i3h1c",[176]],["mediawiki.skinning.elements","1bh2wzp"],["mediawiki.skinning.content","18b1dz9"],["mediawiki.skinning.interface","1thkbdd"],["mediawiki.skinning.content.parsoid","1hxni55"],["mediawiki.skinning.content.externallinks","0t73l67"],["jquery.accessKeyLabel","0kkp3u8",[25,133]],["jquery.appear","15o1dhf"],["jquery.async","0bjsbjv"],["jquery.autoEllipsis","1tmqg2k",[37]],["jquery.badge","0as2zal",[173]],["jquery.byteLength","0ac9kf0"],["jquery.byteLimit","1o8lnvm"
,[21]],["jquery.checkboxShiftClick","174pau5"],["jquery.chosen","0sm80yx"],["jquery.client","0ea6a6o"],["jquery.color","1qrr4cn",[27]],["jquery.colorUtil","1fkp4v8"],["jquery.confirmable","1ajcf99",[177]],["jquery.cookie","09xs0yc"],["jquery.expandableField","0zwby8e"],["jquery.farbtastic","09wvms5",[27]],["jquery.footHovzer","1e7uy70"],["jquery.form","0tuo78h"],["jquery.fullscreen","0y7wht1"],["jquery.getAttrs","1b05fhu"],["jquery.hidpi","0sln3o6"],["jquery.highlightText","1ix9uea",[133]],["jquery.hoverIntent","1hebklr"],["jquery.i18n","1v7hqym",[175]],["jquery.localize","0vacnee"],["jquery.makeCollapsible","0suf17e"],["jquery.mockjax","198696w"],["jquery.mw-jump","15wjqx6"],["jquery.placeholder","1k8n3wu"],["jquery.qunit","0z3x844"],["jquery.spinner","10h73zl"],["jquery.jStorage","0ma3nip"],["jquery.suggestions","1vujix2",[37]],["jquery.tabIndex","0hwdkzn"],["jquery.tablesorter","0vtgjpn",[133,178]],["jquery.textSelection","04bhjwb",[25]],["jquery.throttle-debounce","1ia9vl4"],[
"jquery.xmldom","0c548pf"],["jquery.tipsy","1es457d"],["jquery.ui.core","16zo2qd",[56],"jquery.ui"],["jquery.ui.core.styles","1urrxej",[],"jquery.ui"],["jquery.ui.accordion","1o5zbfs",[55,75],"jquery.ui"],["jquery.ui.autocomplete","1sypb9d",[64],"jquery.ui"],["jquery.ui.button","0qizgfc",[55,75],"jquery.ui"],["jquery.ui.datepicker","05gencv",[55],"jquery.ui"],["jquery.ui.dialog","074gjoo",[59,62,66,68],"jquery.ui"],["jquery.ui.draggable","1de6daq",[55,65],"jquery.ui"],["jquery.ui.droppable","1qx0e6z",[62],"jquery.ui"],["jquery.ui.menu","0k712vy",[55,66,75],"jquery.ui"],["jquery.ui.mouse","1nt1qge",[75],"jquery.ui"],["jquery.ui.position","0edd5sn",[],"jquery.ui"],["jquery.ui.progressbar","0676weg",[55,75],"jquery.ui"],["jquery.ui.resizable","0iata4x",[55,65],"jquery.ui"],["jquery.ui.selectable","03s8k2m",[55,65],"jquery.ui"],["jquery.ui.slider","0iabh4y",[55,65],"jquery.ui"],["jquery.ui.sortable","13actni",[55,65],"jquery.ui"],["jquery.ui.spinner","0i9djuu",[59],"jquery.ui"],[
"jquery.ui.tabs","16hik1h",[55,75],"jquery.ui"],["jquery.ui.tooltip","0etdwt1",[55,66,75],"jquery.ui"],["jquery.ui.widget","02kqh0u",[],"jquery.ui"],["jquery.effects.core","1x3hm8x",[],"jquery.ui"],["jquery.effects.blind","0zgsa6o",[76],"jquery.ui"],["jquery.effects.bounce","09rv32c",[76],"jquery.ui"],["jquery.effects.clip","11ny0fp",[76],"jquery.ui"],["jquery.effects.drop","01j2csp",[76],"jquery.ui"],["jquery.effects.explode","1bzode2",[76],"jquery.ui"],["jquery.effects.fade","1usimyo",[76],"jquery.ui"],["jquery.effects.fold","0eooi5g",[76],"jquery.ui"],["jquery.effects.highlight","00na6h2",[76],"jquery.ui"],["jquery.effects.pulsate","05xb746",[76],"jquery.ui"],["jquery.effects.scale","1y26aea",[76],"jquery.ui"],["jquery.effects.shake","0otmok1",[76],"jquery.ui"],["jquery.effects.slide","1xhnwqm",[76],"jquery.ui"],["jquery.effects.transfer","0dekw24",[76],"jquery.ui"],["json","0te7jzg"],["moment","14iida2",[173]],["mediawiki.apihelp","010tgf5"],["mediawiki.template","15qa9o1"],[
"mediawiki.template.mustache","1119wyd",[93]],["mediawiki.template.regexp","14yndg7",[93]],["mediawiki.apipretty","0cxjtjj"],["mediawiki.api","0sei86i",[150,9]],["mediawiki.api.category","1wjcbbk",[138,97]],["mediawiki.api.edit","0dop6pe",[138,148]],["mediawiki.api.login","173xjsk",[97]],["mediawiki.api.options","1i8s37e",[97]],["mediawiki.api.parse","0ltocxw",[97]],["mediawiki.api.upload","0t1y7vm",[99]],["mediawiki.api.user","0icrnf6",[97]],["mediawiki.api.watch","0dixerf",[97]],["mediawiki.api.messages","1vx3nea",[97]],["mediawiki.api.rollback","0qdhq08",[97]],["mediawiki.content.json","0teu8r1"],["mediawiki.confirmCloseWindow","1fnvt21"],["mediawiki.debug","0qhmk05",[32]],["mediawiki.diff.styles","1j9kpg5"],["mediawiki.feedback","0hy18mm",[138,127,273]],["mediawiki.feedlink","1317sni"],["mediawiki.filewarning","0qe4cxc",[269]],["mediawiki.ForeignApi","1c8ts0q",[116]],["mediawiki.ForeignApi.core","0bc65kq",[97,265]],["mediawiki.helplink","0ehh730"],["mediawiki.hidpi","0n5ipc0",[36],
null,null,"return'srcset'in new Image();"],["mediawiki.hlist","09tfatn"],["mediawiki.htmlform","03vzzmq",[22,133]],["mediawiki.htmlform.checker","0yoybc7",[52]],["mediawiki.htmlform.ooui","17b4iiz",[269]],["mediawiki.htmlform.styles","0cgcicv"],["mediawiki.htmlform.ooui.styles","1rpfu8i"],["mediawiki.icon","0ix10ub"],["mediawiki.inspect","1lfd6rz",[21,133]],["mediawiki.messagePoster","0avvl0z",[115]],["mediawiki.messagePoster.wikitext","1f7bdrg",[99,127]],["mediawiki.notification","00me60q",[150]],["mediawiki.notify","107thnc"],["mediawiki.notification.convertmessagebox","1jjbe45",[129]],["mediawiki.notification.convertmessagebox.styles","1shjdee"],["mediawiki.RegExp","0pqny4k"],["mediawiki.pager.tablePager","10za9p4"],["mediawiki.searchSuggest","0gf1hja",[35,48,97]],["mediawiki.sectionAnchor","1dlaxds"],["mediawiki.storage","1he7wmj"],["mediawiki.Title","1na23pi",[21,150]],["mediawiki.Upload","19ogr0g",[103]],["mediawiki.ForeignUpload","0j3qihm",[115,139]],[
"mediawiki.ForeignStructuredUpload.config","0msydx9"],["mediawiki.ForeignStructuredUpload","1bmnhf3",[141,140]],["mediawiki.Upload.Dialog","0r1yszt",[144]],["mediawiki.Upload.BookletLayout","1gen7w6",[139,177,262,91,271,273]],["mediawiki.ForeignStructuredUpload.BookletLayout","04zr4to",[142,144,106,181,254,249]],["mediawiki.toc","07yqs3c",[154]],["mediawiki.Uri","14hj2xb",[150,95]],["mediawiki.user","1sljx8y",[104,137,8]],["mediawiki.userSuggest","18rkp13",[48,97]],["mediawiki.util","0153wcw",[16,130]],["mediawiki.viewport","0uu7y3f"],["mediawiki.checkboxtoggle","0685qd1"],["mediawiki.checkboxtoggle.styles","1lh84vp"],["mediawiki.cookie","1735yxa",[29]],["mediawiki.toolbar","00t0035",[51]],["mediawiki.experiments","08sxedr"],["mediawiki.action.edit","1kx90ua",[51,158,97,251]],["mediawiki.action.edit.styles","0d6z1yc"],["mediawiki.action.edit.collapsibleFooter","084kxzn",[41,125,137]],["mediawiki.action.edit.preview","0upegxp",[33,46,51,97,111,177,269]],["mediawiki.action.history",
"1oj4iaq"],["mediawiki.action.history.styles","0o1hfoa"],["mediawiki.action.history.diff","1j9kpg5"],["mediawiki.action.view.dblClickEdit","1wmgpkx",[150,8]],["mediawiki.action.view.metadata","1r01nf7"],["mediawiki.action.view.categoryPage.styles","04czbvd"],["mediawiki.action.view.postEdit","0nk644w",[177,129]],["mediawiki.action.view.redirect","0433uup",[25]],["mediawiki.action.view.redirectPage","0mrixsd"],["mediawiki.action.view.rightClickEdit","1i9xf1l"],["mediawiki.action.edit.editWarning","1wy2v6e",[51,109,177]],["mediawiki.action.view.filepage","0mt1qt5"],["mediawiki.language","0br6s5f",[174,10]],["mediawiki.cldr","127v9g9",[175]],["mediawiki.libs.pluralruleparser","1i6rwnj"],["mediawiki.language.init","1c9wowi"],["mediawiki.jqueryMsg","09hgxfs",[173,150,8]],["mediawiki.language.months","1hm3h9h",[173]],["mediawiki.language.names","02wxp1n",[176]],["mediawiki.language.specialCharacters","0qem0v5",[173]],["mediawiki.libs.jpegmeta","19mdhdc"],["mediawiki.page.gallery","1ry8nb9",[
52,183]],["mediawiki.page.gallery.styles","0yhtjyd"],["mediawiki.page.gallery.slideshow","1h5556d",[138,97,271,286]],["mediawiki.page.ready","0j7ijl4",[16,23,43]],["mediawiki.page.startup","0m6f6ob"],["mediawiki.page.patrol.ajax","0edsw5d",[46,138,97]],["mediawiki.page.watch.ajax","0qg5fey",[138,105,177,186]],["mediawiki.page.rollback","1wd0u4f",[46,107]],["mediawiki.page.image.pagination","0qfnntr",[46,150]],["mediawiki.rcfilters.filters.base.styles","17505np"],["mediawiki.rcfilters.highlightCircles.seenunseen.styles","1d0frt4"],["mediawiki.rcfilters.filters.dm","0qt636u",[21,147,101,148,265]],["mediawiki.rcfilters.filters.ui","0wkv530",[41,193,268,280,282,284,286]],["mediawiki.special","0t1yoe9"],["mediawiki.special.apisandbox.styles","11flq2n"],["mediawiki.special.apisandbox","0qzf3ik",[41,97,177,252,268]],["mediawiki.special.block","0a4o7sv",[120,150]],["mediawiki.special.changecredentials.js","0kq1wrg",[97,122]],["mediawiki.special.changeslist","1e37atc"],[
"mediawiki.special.changeslist.enhanced","1iq1p7j"],["mediawiki.special.changeslist.legend","0ph3l3z"],["mediawiki.special.changeslist.legend.js","12990g6",[41,154]],["mediawiki.special.changeslist.visitedstatus","00o946v"],["mediawiki.special.comparepages.styles","16ruojw"],["mediawiki.special.contributions","0vz5odh",[177,249]],["mediawiki.special.edittags","0xkcvnl",[24]],["mediawiki.special.edittags.styles","0uzc3mt"],["mediawiki.special.import","0xl94u0"],["mediawiki.special.movePage","04brx50",[247,251]],["mediawiki.special.movePage.styles","0njfw5l"],["mediawiki.special.pageLanguage","1b2awmd",[269]],["mediawiki.special.pagesWithProp","0hjhbbq"],["mediawiki.special.preferences","00j8f0f",[109,173,131]],["mediawiki.special.preferences.styles","176t0ui"],["mediawiki.special.recentchanges","0v19wzu"],["mediawiki.special.search","05f4cwe",[260]],["mediawiki.special.search.commonsInterwikiWidget","0q4810r",[147,97,177]],["mediawiki.special.search.interwikiwidget.styles","0yvalyk"],[
"mediawiki.special.search.styles","0gjk4ht"],["mediawiki.special.undelete","0oanh7i"],["mediawiki.special.unwatchedPages","1ri1ilq",[138,105]],["mediawiki.special.upload","07kdsb2",[46,138,97,109,177,181,224,93]],["mediawiki.special.upload.styles","16c5uet"],["mediawiki.special.userlogin.common.styles","0udcthi"],["mediawiki.special.userlogin.login.styles","1isir27"],["mediawiki.special.userlogin.signup.js","0xd7v88",[97,121,177]],["mediawiki.special.userlogin.signup.styles","06uexmm"],["mediawiki.special.userrights","18iphsu",[131]],["mediawiki.special.watchlist","0t1vdjo",[138,105,177,269]],["mediawiki.special.watchlist.styles","0eyrzk2"],["mediawiki.special.version","0nty17h"],["mediawiki.legacy.config","0n8p9fn"],["mediawiki.legacy.commonPrint","0s5g0rs"],["mediawiki.legacy.protect","1vuj11u",[22]],["mediawiki.legacy.shared","11slmf5"],["mediawiki.legacy.oldshared","0z31j4q"],["mediawiki.legacy.wikibits","0of3ucj"],["mediawiki.ui","0tw697n"],["mediawiki.ui.checkbox","1p2n1oy"],[
"mediawiki.ui.radio","17734h0"],["mediawiki.ui.anchor","09dcnpv"],["mediawiki.ui.button","0oiyh94"],["mediawiki.ui.input","196uv3d"],["mediawiki.ui.icon","1glw1kn"],["mediawiki.ui.text","1dky5mc"],["mediawiki.widgets","0r9gm2i",[22,37,138,97,248,271]],["mediawiki.widgets.styles","1ggim9r"],["mediawiki.widgets.DateInputWidget","0n3uli4",[250,91,271]],["mediawiki.widgets.DateInputWidget.styles","1lbpeks"],["mediawiki.widgets.visibleByteLimit","0c3vpcz",[22,269]],["mediawiki.widgets.datetime","0me4n2a",[269,287,288]],["mediawiki.widgets.CategorySelector","0te7jzg",[254]],["mediawiki.widgets.CategoryMultiselectWidget","117jicv",[115,138,271]],["mediawiki.widgets.SelectWithInputWidget","0v6udvq",[256,271]],["mediawiki.widgets.SelectWithInputWidget.styles","1kbjbyx"],["mediawiki.widgets.MediaSearch","0j4v148",[115,138,271]],["mediawiki.widgets.UserInputWidget","0nr6gh4",[97,271]],["mediawiki.widgets.UsersMultiselectWidget","19d7gc7",[97,271]],["mediawiki.widgets.SearchInputWidget","05963xg",
[135,247]],["mediawiki.widgets.SearchInputWidget.styles","07jeu6t"],["mediawiki.widgets.StashedFileWidget","165d21f",[97,269]],["es5-shim","0te7jzg"],["dom-level2-shim","0te7jzg"],["oojs","07udh32"],["mediawiki.router","0df9rat",[267]],["oojs-router","0xll2at",[265]],["oojs-ui","0te7jzg",[272,271,273]],["oojs-ui-core","1kp5pku",[173,265,270,277,278,283,274,275]],["oojs-ui-core.styles","0sty7vu"],["oojs-ui-widgets","0st0efv",[269,279,287,288]],["oojs-ui-toolbars","1v16on5",[269,288]],["oojs-ui-windows","1d79e9a",[269,288]],["oojs-ui.styles.indicators","1tne6os"],["oojs-ui.styles.textures","1ux9w1v"],["oojs-ui.styles.icons-accessibility","1xw8xir"],["oojs-ui.styles.icons-alerts","0c0eijj"],["oojs-ui.styles.icons-content","1l98lb0"],["oojs-ui.styles.icons-editing-advanced","0zsclfg"],["oojs-ui.styles.icons-editing-core","030fnxo"],["oojs-ui.styles.icons-editing-list","0volko1"],["oojs-ui.styles.icons-editing-styling","0fmzafd"],["oojs-ui.styles.icons-interactions","1gqmckz"],[
"oojs-ui.styles.icons-layout","0j8x0fl"],["oojs-ui.styles.icons-location","0komg95"],["oojs-ui.styles.icons-media","04wxhzz"],["oojs-ui.styles.icons-moderation","0sxq8yo"],["oojs-ui.styles.icons-movement","12d1svy"],["oojs-ui.styles.icons-user","0f0m106"],["oojs-ui.styles.icons-wikimedia","008uldz"],["skins.vector.styles","0da42ct"],["skins.vector.styles.experimental.print","0mw50d9"],["skins.vector.styles.responsive","1h89za5"],["skins.vector.js","09qph9l",[49,52]],["ext.embedVideo","1ilxhbm"],["ext.embedVideo-evl","0xd3exx"],["ext.embedVideo.styles","0omes7v"],["ext.nuke","03ixsjo"],["ext.confirmEdit.editPreview.ipwhitelist.styles","1st28fu"],["ext.checkUser","1azzjye",[150]],["ext.checkUser.caMultiLock","0su3ors",[150]],["ext.cite.styles","1n31o4s"],["ext.cite.a11y","1r9wsn0"],["ext.cite.style","0cehu4a"],["ext.citeThisPage","1t2nnja"],["ext.abuseFilter","01f0zsd"],["ext.abuseFilter.edit","15oz2pq",[46,51,102]],["ext.abuseFilter.tools","15847sv",[46,97]],["ext.abuseFilter.examine",
"1x1ywkr",[46,97]]]);;mw.config.set({"wgLoadScript":"/mediawiki/load.php","debug":!1,"skin":"vector","stylepath":"/mediawiki/skins","wgUrlProtocols":"bitcoin\\:|ftp\\:\\/\\/|ftps\\:\\/\\/|geo\\:|git\\:\\/\\/|gopher\\:\\/\\/|http\\:\\/\\/|https\\:\\/\\/|irc\\:\\/\\/|ircs\\:\\/\\/|magnet\\:|mailto\\:|mms\\:\\/\\/|news\\:|nntp\\:\\/\\/|redis\\:\\/\\/|sftp\\:\\/\\/|sip\\:|sips\\:|sms\\:|ssh\\:\\/\\/|svn\\:\\/\\/|tel\\:|telnet\\:\\/\\/|urn\\:|worldwind\\:\\/\\/|xmpp\\:|\\/\\/","wgArticlePath":"/wiki/$1","wgScriptPath":"/mediawiki","wgScriptExtension":".php","wgScript":"/mediawiki/index.php","wgSearchType":null,"wgVariantArticlePath":!1,"wgActionPaths":{},"wgServer":"https://reprap.org","wgServerName":"reprap.org","wgUserLanguage":"en","wgContentLanguage":"en","wgTranslateNumerals":!0,"wgVersion":"1.30.0","wgEnableAPI":!0,"wgEnableWriteAPI":!0,"wgMainPageTitle":"Main Page","wgFormattedNamespaces":{"-2":"Media","-1":"Special","0":"","1":"Talk","2":"User","3":"User talk","4":
"RepRap","5":"RepRap talk","6":"File","7":"File talk","8":"MediaWiki","9":"MediaWiki talk","10":"Template","11":"Template talk","12":"Help","13":"Help talk","14":"Category","15":"Category talk","274":"Widget","275":"Widget talk"},"wgNamespaceIds":{"media":-2,"special":-1,"":0,"talk":1,"user":2,"user_talk":3,"reprap":4,"reprap_talk":5,"file":6,"file_talk":7,"mediawiki":8,"mediawiki_talk":9,"template":10,"template_talk":11,"help":12,"help_talk":13,"category":14,"category_talk":15,"widget":274,"widget_talk":275,"image":6,"image_talk":7,"project":4,"project_talk":5},"wgContentNamespaces":[0],"wgSiteName":"RepRap","wgDBname":"mediawiki","wgExtraSignatureNamespaces":[],"wgAvailableSkins":{"vector":"Vector","fallback":"Fallback","apioutput":"ApiOutput"},"wgExtensionAssetsPath":"/mediawiki/extensions","wgCookiePrefix":"mediawiki","wgCookieDomain":"","wgCookiePath":"/","wgCookieExpiration":2592000,"wgResourceLoaderMaxQueryLength":2000,"wgCaseSensitiveNamespaces":[],"wgLegalTitleChars":
" %!\"$&'()*,\\-./0-9:;=?@A-Z\\\\\\^_`a-z~+\\u0080-\\uFFFF","wgIllegalFileChars":":/\\\\","wgResourceLoaderStorageVersion":1,"wgResourceLoaderStorageEnabled":!0,"wgForeignUploadTargets":["local"],"wgEnableUploads":!0,"wgCiteVisualEditorOtherGroup":!1,"wgCiteResponsiveReferences":!0});var RLQ=window.RLQ||[];while(RLQ.length){RLQ.shift()();}window.RLQ={push:function(fn){fn();}};window.NORLQ={push:function(){}};}window.mediaWikiLoadStart=mwNow();mwPerformance.mark('mwLoadStart');script=document.createElement('script');script.src="/mediawiki/load.php?debug=false&lang=en&modules=jquery%2Cmediawiki&only=scripts&skin=vector&version=0nuf0ze";script.onload=script.onreadystatechange=function(){if(!script.readyState||/loaded|complete/.test(script.readyState)){script.onload=script.onreadystatechange=null;script=null;startUp();}};document.getElementsByTagName('head')[0].appendChild(script);}());