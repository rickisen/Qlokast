/* Thursday 3rd of March 2016 03:14:38 PM*/

/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

/*
	This is an optimized version of Dojo, built for deployment and not for
	development. To get sources and documentation, please visit:

		http://dojotoolkit.org
*/
;(function(){
  var djConfig = {
      scopeMap: [
          ["dojo", "ndojo"],
          ["dijit", "ndijit"],
          ["dojox", "ndojox"]
      ]
  };
  (function(){var _1=null;if((_1||(typeof djConfig!="undefined"&&djConfig.scopeMap))&&(typeof window!="undefined")){var _2="",_3="",_4="",_5={},_6={};_1=_1||djConfig.scopeMap;for(var i=0;i<_1.length;i++){var _7=_1[i];_2+="var "+_7[0]+" = {}; "+_7[1]+" = "+_7[0]+";"+_7[1]+"._scopeName = '"+_7[1]+"';";_3+=(i==0?"":",")+_7[0];_4+=(i==0?"":",")+_7[1];_5[_7[0]]=_7[1];_6[_7[1]]=_7[0];}eval(_2+"dojo._scopeArgs = ["+_4+"];");dojo._scopePrefixArgs=_3;dojo._scopePrefix="(function("+_3+"){";dojo._scopeSuffix="})("+_4+")";dojo._scopeMap=_5;dojo._scopeMapRev=_6;}(function(){if(typeof this["loadFirebugConsole"]=="function"){this["loadFirebugConsole"]();}else{this.console=this.console||{};var cn=["assert","count","debug","dir","dirxml","error","group","groupEnd","info","profile","profileEnd","time","timeEnd","trace","warn","log"];var i=0,tn;while((tn=cn[i++])){if(!console[tn]){(function(){var _8=tn+"";console[_8]=("log" in console)?function(){var a=Array.apply({},arguments);a.unshift(_8+":");console["log"](a.join(" "));}:function(){};console[_8]._fake=true;})();}}}if(typeof dojo=="undefined"){dojo={_scopeName:"dojo",_scopePrefix:"",_scopePrefixArgs:"",_scopeSuffix:"",_scopeMap:{},_scopeMapRev:{}};}var d=dojo;if(typeof dijit=="undefined"){dijit={_scopeName:"dijit"};}if(typeof dojox=="undefined"){dojox={_scopeName:"dojox"};}if(!d._scopeArgs){d._scopeArgs=[dojo,dijit,dojox];}d.global=this;d.config={isDebug:false,debugAtAllCosts:false};var _9=typeof djConfig!="undefined"?djConfig:typeof dojoConfig!="undefined"?dojoConfig:null;if(_9){for(var c in _9){d.config[c]=_9[c];}}dojo.locale=d.config.locale;var _a="$Rev: 24595 $".match(/\d+/);dojo.version={major:1,minor:6,patch:1,flag:"",revision:_a?+_a[0]:NaN,toString:function(){with(d.version){return major+"."+minor+"."+patch+flag+" ("+revision+")";}}};if(typeof OpenAjax!="undefined"){OpenAjax.hub.registerLibrary(dojo._scopeName,"http://dojotoolkit.org",d.version.toString());}var _b,_c,_d={};for(var i in {toString:1}){_b=[];break;}dojo._extraNames=_b=_b||["hasOwnProperty","valueOf","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","constructor"];_c=_b.length;dojo._mixin=function(_e,_f){var _10,s,i;for(_10 in _f){s=_f[_10];if(!(_10 in _e)||(_e[_10]!==s&&(!(_10 in _d)||_d[_10]!==s))){_e[_10]=s;}}if(_c&&_f){for(i=0;i<_c;++i){_10=_b[i];s=_f[_10];if(!(_10 in _e)||(_e[_10]!==s&&(!(_10 in _d)||_d[_10]!==s))){_e[_10]=s;}}}return _e;};dojo.mixin=function(obj,_11){if(!obj){obj={};}for(var i=1,l=arguments.length;i<l;i++){d._mixin(obj,arguments[i]);}return obj;};dojo._getProp=function(_12,_13,_14){var obj=_14||d.global;for(var i=0,p;obj&&(p=_12[i]);i++){if(i==0&&d._scopeMap[p]){p=d._scopeMap[p];}obj=(p in obj?obj[p]:(_13?obj[p]={}:undefined));}return obj;};dojo.setObject=function(_15,_16,_17){var _18=_15.split("."),p=_18.pop(),obj=d._getProp(_18,true,_17);return obj&&p?(obj[p]=_16):undefined;};dojo.getObject=function(_19,_1a,_1b){return d._getProp(_19.split("."),_1a,_1b);};dojo.exists=function(_1c,obj){return d.getObject(_1c,false,obj)!==undefined;};dojo["eval"]=function(_1d){return d.global.eval?d.global.eval(_1d):eval(_1d);};d.deprecated=d.experimental=function(){};})();(function(){var d=dojo,_1e;d.mixin(d,{_loadedModules:{},_inFlightCount:0,_hasResource:{},_modulePrefixes:{dojo:{name:"dojo",value:"."},doh:{name:"doh",value:"../util/doh"},tests:{name:"tests",value:"tests"}},_moduleHasPrefix:function(_1f){var mp=d._modulePrefixes;return !!(mp[_1f]&&mp[_1f].value);},_getModulePrefix:function(_20){var mp=d._modulePrefixes;if(d._moduleHasPrefix(_20)){return mp[_20].value;}return _20;},_loadedUrls:[],_postLoad:false,_loaders:[],_unloaders:[],_loadNotifying:false});dojo._loadPath=function(_21,_22,cb){var uri=((_21.charAt(0)=="/"||_21.match(/^\w+:/))?"":d.baseUrl)+_21;try{_1e=_22;return !_22?d._loadUri(uri,cb):d._loadUriAndCheck(uri,_22,cb);}catch(e){console.error(e);return false;}finally{_1e=null;}};dojo._loadUri=function(uri,cb){if(d._loadedUrls[uri]){return true;}d._inFlightCount++;var _23=d._getText(uri,true);if(_23){d._loadedUrls[uri]=true;d._loadedUrls.push(uri);if(cb){_23=/^define\(/.test(_23)?_23:"("+_23+")";}else{_23=d._scopePrefix+_23+d._scopeSuffix;}if(!d.isIE){_23+="\r\n//@ sourceURL="+uri;}var _24=d["eval"](_23);if(cb){cb(_24);}}if(--d._inFlightCount==0&&d._postLoad&&d._loaders.length){setTimeout(function(){if(d._inFlightCount==0){d._callLoaded();}},0);}return !!_23;};dojo._loadUriAndCheck=function(uri,_25,cb){var ok=false;try{ok=d._loadUri(uri,cb);}catch(e){console.error("failed loading "+uri+" with error: "+e);}return !!(ok&&d._loadedModules[_25]);};dojo.loaded=function(){d._loadNotifying=true;d._postLoad=true;var mll=d._loaders;d._loaders=[];for(var x=0;x<mll.length;x++){mll[x]();}d._loadNotifying=false;if(d._postLoad&&d._inFlightCount==0&&mll.length){d._callLoaded();}};dojo.unloaded=function(){var mll=d._unloaders;while(mll.length){(mll.pop())();}};d._onto=function(arr,obj,fn){if(!fn){arr.push(obj);}else{if(fn){var _26=(typeof fn=="string")?obj[fn]:fn;arr.push(function(){_26.call(obj);});}}};dojo.ready=dojo.addOnLoad=function(obj,_27){d._onto(d._loaders,obj,_27);if(d._postLoad&&d._inFlightCount==0&&!d._loadNotifying){d._callLoaded();}};var dca=d.config.addOnLoad;if(dca){d.addOnLoad[(dca instanceof Array?"apply":"call")](d,dca);}dojo._modulesLoaded=function(){if(d._postLoad){return;}if(d._inFlightCount>0){console.warn("files still in flight!");return;}d._callLoaded();};dojo._callLoaded=function(){if(typeof setTimeout=="object"||(d.config.useXDomain&&d.isOpera)){setTimeout(d.isAIR?function(){d.loaded();}:d._scopeName+".loaded();",0);}else{d.loaded();}};dojo._getModuleSymbols=function(_28){var _29=_28.split(".");for(var i=_29.length;i>0;i--){var _2a=_29.slice(0,i).join(".");if(i==1&&!d._moduleHasPrefix(_2a)){_29[0]="../"+_29[0];}else{var _2b=d._getModulePrefix(_2a);if(_2b!=_2a){_29.splice(0,i,_2b);break;}}}return _29;};dojo._global_omit_module_check=false;dojo.loadInit=function(_2c){_2c();};dojo._loadModule=dojo.require=function(_2d,_2e){_2e=d._global_omit_module_check||_2e;var _2f=d._loadedModules[_2d];if(_2f){return _2f;}var _30=d._getModuleSymbols(_2d).join("/")+".js";var _31=!_2e?_2d:null;var ok=d._loadPath(_30,_31);if(!ok&&!_2e){throw new Error("Could not load '"+_2d+"'; last tried '"+_30+"'");}if(!_2e&&!d._isXDomain){_2f=d._loadedModules[_2d];if(!_2f){throw new Error("symbol '"+_2d+"' is not defined after loading '"+_30+"'");}}return _2f;};dojo.provide=function(_32){_32=_32+"";return (d._loadedModules[_32]=d.getObject(_32,true));};dojo.platformRequire=function(_33){var _34=_33.common||[];var _35=_34.concat(_33[d._name]||_33["default"]||[]);for(var x=0;x<_35.length;x++){var _36=_35[x];if(_36.constructor==Array){d._loadModule.apply(d,_36);}else{d._loadModule(_36);}}};dojo.requireIf=function(_37,_38){if(_37===true){var _39=[];for(var i=1;i<arguments.length;i++){_39.push(arguments[i]);}d.require.apply(d,_39);}};dojo.requireAfterIf=d.requireIf;dojo.registerModulePath=function(_3a,_3b){d._modulePrefixes[_3a]={name:_3a,value:_3b};};dojo.requireLocalization=function(_3c,_3d,_3e,_3f){d.require("dojo.i18n");d.i18n._requireLocalization.apply(d.hostenv,arguments);};var ore=new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$"),ire=new RegExp("^((([^\\[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^\\[:]*))(:([0-9]+))?$");dojo._Url=function(){var n=null,_40=arguments,uri=[_40[0]];for(var i=1;i<_40.length;i++){if(!_40[i]){continue;}var _41=new d._Url(_40[i]+""),_42=new d._Url(uri[0]+"");if(_41.path==""&&!_41.scheme&&!_41.authority&&!_41.query){if(_41.fragment!=n){_42.fragment=_41.fragment;}_41=_42;}else{if(!_41.scheme){_41.scheme=_42.scheme;if(!_41.authority){_41.authority=_42.authority;if(_41.path.charAt(0)!="/"){var _43=_42.path.substring(0,_42.path.lastIndexOf("/")+1)+_41.path;var _44=_43.split("/");for(var j=0;j<_44.length;j++){if(_44[j]=="."){if(j==_44.length-1){_44[j]="";}else{_44.splice(j,1);j--;}}else{if(j>0&&!(j==1&&_44[0]=="")&&_44[j]==".."&&_44[j-1]!=".."){if(j==(_44.length-1)){_44.splice(j,1);_44[j-1]="";}else{_44.splice(j-1,2);j-=2;}}}}_41.path=_44.join("/");}}}}uri=[];if(_41.scheme){uri.push(_41.scheme,":");}if(_41.authority){uri.push("//",_41.authority);}uri.push(_41.path);if(_41.query){uri.push("?",_41.query);}if(_41.fragment){uri.push("#",_41.fragment);}}this.uri=uri.join("");var r=this.uri.match(ore);this.scheme=r[2]||(r[1]?"":n);this.authority=r[4]||(r[3]?"":n);this.path=r[5];this.query=r[7]||(r[6]?"":n);this.fragment=r[9]||(r[8]?"":n);if(this.authority!=n){r=this.authority.match(ire);this.user=r[3]||n;this.password=r[4]||n;this.host=r[6]||r[7];this.port=r[9]||n;}};dojo._Url.prototype.toString=function(){return this.uri;};dojo.moduleUrl=function(_45,url){var loc=d._getModuleSymbols(_45).join("/");if(!loc){return null;}if(loc.lastIndexOf("/")!=loc.length-1){loc+="/";}var _46=loc.indexOf(":");if(loc.charAt(0)!="/"&&(_46==-1||_46>loc.indexOf("/"))){loc=d.baseUrl+loc;}return new d._Url(loc,url);};})();if(typeof window!="undefined"){dojo.isBrowser=true;dojo._name="browser";(function(){var d=dojo;if(document&&document.getElementsByTagName){var _47=document.getElementsByTagName("script");var _48=/dojo(\.xd)?\.js(\W|$)/i;for(var i=0;i<_47.length;i++){var src=_47[i].getAttribute("src");if(!src){continue;}var m=src.match(_48);if(m){if(!d.config.baseUrl){d.config.baseUrl=src.substring(0,m.index);}var cfg=(_47[i].getAttribute("djConfig")||_47[i].getAttribute("data-dojo-config"));if(cfg){var _49=eval("({ "+cfg+" })");for(var x in _49){dojo.config[x]=_49[x];}}break;}}}d.baseUrl=d.config.baseUrl;var n=navigator;var dua=n.userAgent,dav=n.appVersion,tv=parseFloat(dav);if(dua.indexOf("Opera")>=0){d.isOpera=tv;}if(dua.indexOf("AdobeAIR")>=0){d.isAIR=1;}d.isKhtml=(dav.indexOf("Konqueror")>=0)?tv:0;d.isWebKit=parseFloat(dua.split("WebKit/")[1])||undefined;d.isChrome=parseFloat(dua.split("Chrome/")[1])||undefined;d.isMac=dav.indexOf("Macintosh")>=0;var _4a=Math.max(dav.indexOf("WebKit"),dav.indexOf("Safari"),0);if(_4a&&!dojo.isChrome){d.isSafari=parseFloat(dav.split("Version/")[1]);if(!d.isSafari||parseFloat(dav.substr(_4a+7))<=419.3){d.isSafari=2;}}if(dua.indexOf("Gecko")>=0&&!d.isKhtml&&!d.isWebKit){d.isMozilla=d.isMoz=tv;}if(d.isMoz){d.isFF=parseFloat(dua.split("Firefox/")[1]||dua.split("Minefield/")[1])||undefined;}if(document.all&&!d.isOpera){d.isIE=parseFloat(dav.split("MSIE ")[1])||undefined;var _4b=document.documentMode;if(_4b&&_4b!=5&&Math.floor(d.isIE)!=_4b){d.isIE=_4b;}}if(dojo.isIE&&window.location.protocol==="file:"){dojo.config.ieForceActiveXXhr=true;}d.isQuirks=document.compatMode=="BackCompat";d.locale=dojo.config.locale||(d.isIE?n.userLanguage:n.language).toLowerCase();d._XMLHTTP_PROGIDS=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"];d._xhrObj=function(){var _4c,_4d;if(!dojo.isIE||!dojo.config.ieForceActiveXXhr){try{_4c=new XMLHttpRequest();}catch(e){}}if(!_4c){for(var i=0;i<3;++i){var _4e=d._XMLHTTP_PROGIDS[i];try{_4c=new ActiveXObject(_4e);}catch(e){_4d=e;}if(_4c){d._XMLHTTP_PROGIDS=[_4e];break;}}}if(!_4c){throw new Error("XMLHTTP not available: "+_4d);}return _4c;};d._isDocumentOk=function(_4f){var _50=_4f.status||0,lp=location.protocol;return (_50>=200&&_50<300)||_50==304||_50==1223||(!_50&&(lp=="file:"||lp=="chrome:"||lp=="chrome-extension:"||lp=="app:"));};var _51=window.location+"";var _52=document.getElementsByTagName("base");var _53=(_52&&_52.length>0);d._getText=function(uri,_54){var _55=d._xhrObj();if(!_53&&dojo._Url){uri=(new dojo._Url(_51,uri)).toString();}if(d.config.cacheBust){uri+="";uri+=(uri.indexOf("?")==-1?"?":"&")+String(d.config.cacheBust).replace(/\W+/g,"");}_55.open("GET",uri,false);try{_55.send(null);if(!d._isDocumentOk(_55)){var err=Error("Unable to load "+uri+" status:"+_55.status);err.status=_55.status;err.responseText=_55.responseText;throw err;}}catch(e){if(_54){return null;}throw e;}return _55.responseText;};var _56=window;var _57=function(_58,fp){var _59=_56.attachEvent||_56.addEventListener;_58=_56.attachEvent?_58:_58.substring(2);_59(_58,function(){fp.apply(_56,arguments);},false);};d._windowUnloaders=[];d.windowUnloaded=function(){var mll=d._windowUnloaders;while(mll.length){(mll.pop())();}d=null;};var _5a=0;d.addOnWindowUnload=function(obj,_5b){d._onto(d._windowUnloaders,obj,_5b);if(!_5a){_5a=1;_57("onunload",d.windowUnloaded);}};var _5c=0;d.addOnUnload=function(obj,_5d){d._onto(d._unloaders,obj,_5d);if(!_5c){_5c=1;_57("onbeforeunload",dojo.unloaded);}};})();dojo._initFired=false;dojo._loadInit=function(e){if(dojo._scrollIntervalId){clearInterval(dojo._scrollIntervalId);dojo._scrollIntervalId=0;}if(!dojo._initFired){dojo._initFired=true;if(!dojo.config.afterOnLoad&&window.detachEvent){window.detachEvent("onload",dojo._loadInit);}if(dojo._inFlightCount==0){dojo._modulesLoaded();}}};if(!dojo.config.afterOnLoad){if(document.addEventListener){document.addEventListener("DOMContentLoaded",dojo._loadInit,false);window.addEventListener("load",dojo._loadInit,false);}else{if(window.attachEvent){window.attachEvent("onload",dojo._loadInit);if(!dojo.config.skipIeDomLoaded&&self===self.top){dojo._scrollIntervalId=setInterval(function(){try{if(document.body){document.documentElement.doScroll("left");dojo._loadInit();}}catch(e){}},30);}}}}if(dojo.isIE){try{(function(){document.namespaces.add("v","urn:schemas-microsoft-com:vml");var _5e=["*","group","roundrect","oval","shape","rect","imagedata","path","textpath","text"],i=0,l=1,s=document.createStyleSheet();if(dojo.isIE>=8){i=1;l=_5e.length;}for(;i<l;++i){s.addRule("v\\:"+_5e[i],"behavior:url(#default#VML); display:inline-block");}})();}catch(e){}}}(function(){var mp=dojo.config["modulePaths"];if(mp){for(var _5f in mp){dojo.registerModulePath(_5f,mp[_5f]);}}})();if(dojo.config.isDebug){dojo.require("dojo._firebug.firebug");}if(dojo.config.debugAtAllCosts){dojo.require("dojo._base._loader.loader_debug");dojo.require("dojo.i18n");}if(!dojo._hasResource["dojo._base.lang"]){dojo._hasResource["dojo._base.lang"]=true;dojo.provide("dojo._base.lang");(function(){var d=dojo,_60=Object.prototype.toString;dojo.isString=function(it){return (typeof it=="string"||it instanceof String);};dojo.isArray=function(it){return it&&(it instanceof Array||typeof it=="array");};dojo.isFunction=function(it){return _60.call(it)==="[object Function]";};dojo.isObject=function(it){return it!==undefined&&(it===null||typeof it=="object"||d.isArray(it)||d.isFunction(it));};dojo.isArrayLike=function(it){return it&&it!==undefined&&!d.isString(it)&&!d.isFunction(it)&&!(it.tagName&&it.tagName.toLowerCase()=="form")&&(d.isArray(it)||isFinite(it.length));};dojo.isAlien=function(it){return it&&!d.isFunction(it)&&/\{\s*\[native code\]\s*\}/.test(String(it));};dojo.extend=function(_61,_62){for(var i=1,l=arguments.length;i<l;i++){d._mixin(_61.prototype,arguments[i]);}return _61;};dojo._hitchArgs=function(_63,_64){var pre=d._toArray(arguments,2);var _65=d.isString(_64);return function(){var _66=d._toArray(arguments);var f=_65?(_63||d.global)[_64]:_64;return f&&f.apply(_63||this,pre.concat(_66));};};dojo.hitch=function(_67,_68){if(arguments.length>2){return d._hitchArgs.apply(d,arguments);}if(!_68){_68=_67;_67=null;}if(d.isString(_68)){_67=_67||d.global;if(!_67[_68]){throw (["dojo.hitch: scope[\"",_68,"\"] is null (scope=\"",_67,"\")"].join(""));}return function(){return _67[_68].apply(_67,arguments||[]);};}return !_67?_68:function(){return _68.apply(_67,arguments||[]);};};dojo.delegate=dojo._delegate=(function(){function TMP(){};return function(obj,_69){TMP.prototype=obj;var tmp=new TMP();TMP.prototype=null;if(_69){d._mixin(tmp,_69);}return tmp;};})();var _6a=function(obj,_6b,_6c){return (_6c||[]).concat(Array.prototype.slice.call(obj,_6b||0));};var _6d=function(obj,_6e,_6f){var arr=_6f||[];for(var x=_6e||0;x<obj.length;x++){arr.push(obj[x]);}return arr;};dojo._toArray=d.isIE?function(obj){return ((obj.item)?_6d:_6a).apply(this,arguments);}:_6a;dojo.partial=function(_70){var arr=[null];return d.hitch.apply(d,arr.concat(d._toArray(arguments)));};var _71=d._extraNames,_72=_71.length,_73={};dojo.clone=function(o){if(!o||typeof o!="object"||d.isFunction(o)){return o;}if(o.nodeType&&"cloneNode" in o){return o.cloneNode(true);}if(o instanceof Date){return new Date(o.getTime());}if(o instanceof RegExp){return new RegExp(o);}var r,i,l,s,_74;if(d.isArray(o)){r=[];for(i=0,l=o.length;i<l;++i){if(i in o){r.push(d.clone(o[i]));}}}else{r=o.constructor?new o.constructor():{};}for(_74 in o){s=o[_74];if(!(_74 in r)||(r[_74]!==s&&(!(_74 in _73)||_73[_74]!==s))){r[_74]=d.clone(s);}}if(_72){for(i=0;i<_72;++i){_74=_71[i];s=o[_74];if(!(_74 in r)||(r[_74]!==s&&(!(_74 in _73)||_73[_74]!==s))){r[_74]=s;}}}return r;};dojo.trim=String.prototype.trim?function(str){return str.trim();}:function(str){return str.replace(/^\s\s*/,"").replace(/\s\s*$/,"");};var _75=/\{([^\}]+)\}/g;dojo.replace=function(_76,map,_77){return _76.replace(_77||_75,d.isFunction(map)?map:function(_78,k){return d.getObject(k,false,map);});};})();}if(!dojo._hasResource["dojo._base.array"]){dojo._hasResource["dojo._base.array"]=true;dojo.provide("dojo._base.array");(function(){var _79=function(arr,obj,cb){return [(typeof arr=="string")?arr.split(""):arr,obj||dojo.global,(typeof cb=="string")?new Function("item","index","array",cb):cb];};var _7a=function(_7b,arr,_7c,_7d){var _7e=_79(arr,_7d,_7c);arr=_7e[0];for(var i=0,l=arr.length;i<l;++i){var _7f=!!_7e[2].call(_7e[1],arr[i],i,arr);if(_7b^_7f){return _7f;}}return _7b;};dojo.mixin(dojo,{indexOf:function(_80,_81,_82,_83){var _84=1,end=_80.length||0,i=0;if(_83){i=end-1;_84=end=-1;}if(_82!=undefined){i=_82;}if((_83&&i>end)||i<end){for(;i!=end;i+=_84){if(_80[i]==_81){return i;}}}return -1;},lastIndexOf:function(_85,_86,_87){return dojo.indexOf(_85,_86,_87,true);},forEach:function(arr,_88,_89){if(!arr||!arr.length){return;}var _8a=_79(arr,_89,_88);arr=_8a[0];for(var i=0,l=arr.length;i<l;++i){_8a[2].call(_8a[1],arr[i],i,arr);}},every:function(arr,_8b,_8c){return _7a(true,arr,_8b,_8c);},some:function(arr,_8d,_8e){return _7a(false,arr,_8d,_8e);},map:function(arr,_8f,_90){var _91=_79(arr,_90,_8f);arr=_91[0];var _92=(arguments[3]?(new arguments[3]()):[]);for(var i=0,l=arr.length;i<l;++i){_92.push(_91[2].call(_91[1],arr[i],i,arr));}return _92;},filter:function(arr,_93,_94){var _95=_79(arr,_94,_93);arr=_95[0];var _96=[];for(var i=0,l=arr.length;i<l;++i){if(_95[2].call(_95[1],arr[i],i,arr)){_96.push(arr[i]);}}return _96;}});})();}if(!dojo._hasResource["dojo._base.declare"]){dojo._hasResource["dojo._base.declare"]=true;dojo.provide("dojo._base.declare");(function(){var d=dojo,mix=d._mixin,op=Object.prototype,_97=op.toString,_98=new Function,_99=0,_9a="constructor";function err(msg,cls){throw new Error("declare"+(cls?" "+cls:"")+": "+msg);};function _9b(_9c,_9d){var _9e=[],_9f=[{cls:0,refs:[]}],_a0={},_a1=1,l=_9c.length,i=0,j,lin,_a2,top,_a3,rec,_a4,_a5;for(;i<l;++i){_a2=_9c[i];if(!_a2){err("mixin #"+i+" is unknown. Did you use dojo.require to pull it in?",_9d);}else{if(_97.call(_a2)!="[object Function]"){err("mixin #"+i+" is not a callable constructor.",_9d);}}lin=_a2._meta?_a2._meta.bases:[_a2];top=0;for(j=lin.length-1;j>=0;--j){_a3=lin[j].prototype;if(!_a3.hasOwnProperty("declaredClass")){_a3.declaredClass="uniqName_"+(_99++);}_a4=_a3.declaredClass;if(!_a0.hasOwnProperty(_a4)){_a0[_a4]={count:0,refs:[],cls:lin[j]};++_a1;}rec=_a0[_a4];if(top&&top!==rec){rec.refs.push(top);++top.count;}top=rec;}++top.count;_9f[0].refs.push(top);}while(_9f.length){top=_9f.pop();_9e.push(top.cls);--_a1;while(_a5=top.refs,_a5.length==1){top=_a5[0];if(!top||--top.count){top=0;break;}_9e.push(top.cls);--_a1;}if(top){for(i=0,l=_a5.length;i<l;++i){top=_a5[i];if(!--top.count){_9f.push(top);}}}}if(_a1){err("can't build consistent linearization",_9d);}_a2=_9c[0];_9e[0]=_a2?_a2._meta&&_a2===_9e[_9e.length-_a2._meta.bases.length]?_a2._meta.bases.length:1:0;return _9e;};function _a6(_a7,a,f){var _a8,_a9,_aa,_ab,_ac,_ad,_ae,opf,pos,_af=this._inherited=this._inherited||{};if(typeof _a7=="string"){_a8=_a7;_a7=a;a=f;}f=0;_ab=_a7.callee;_a8=_a8||_ab.nom;if(!_a8){err("can't deduce a name to call inherited()",this.declaredClass);}_ac=this.constructor._meta;_aa=_ac.bases;pos=_af.p;if(_a8!=_9a){if(_af.c!==_ab){pos=0;_ad=_aa[0];_ac=_ad._meta;if(_ac.hidden[_a8]!==_ab){_a9=_ac.chains;if(_a9&&typeof _a9[_a8]=="string"){err("calling chained method with inherited: "+_a8,this.declaredClass);}do{_ac=_ad._meta;_ae=_ad.prototype;if(_ac&&(_ae[_a8]===_ab&&_ae.hasOwnProperty(_a8)||_ac.hidden[_a8]===_ab)){break;}}while(_ad=_aa[++pos]);pos=_ad?pos:-1;}}_ad=_aa[++pos];if(_ad){_ae=_ad.prototype;if(_ad._meta&&_ae.hasOwnProperty(_a8)){f=_ae[_a8];}else{opf=op[_a8];do{_ae=_ad.prototype;f=_ae[_a8];if(f&&(_ad._meta?_ae.hasOwnProperty(_a8):f!==opf)){break;}}while(_ad=_aa[++pos]);}}f=_ad&&f||op[_a8];}else{if(_af.c!==_ab){pos=0;_ac=_aa[0]._meta;if(_ac&&_ac.ctor!==_ab){_a9=_ac.chains;if(!_a9||_a9.constructor!=="manual"){err("calling chained constructor with inherited",this.declaredClass);}while(_ad=_aa[++pos]){_ac=_ad._meta;if(_ac&&_ac.ctor===_ab){break;}}pos=_ad?pos:-1;}}while(_ad=_aa[++pos]){_ac=_ad._meta;f=_ac?_ac.ctor:_ad;if(f){break;}}f=_ad&&f;}_af.c=f;_af.p=pos;if(f){return a===true?f:f.apply(this,a||_a7);}};function _b0(_b1,_b2){if(typeof _b1=="string"){return this.inherited(_b1,_b2,true);}return this.inherited(_b1,true);};function _b3(cls){var _b4=this.constructor._meta.bases;for(var i=0,l=_b4.length;i<l;++i){if(_b4[i]===cls){return true;}}return this instanceof cls;};function _b5(_b6,_b7){var _b8,i=0,l=d._extraNames.length;for(_b8 in _b7){if(_b8!=_9a&&_b7.hasOwnProperty(_b8)){_b6[_b8]=_b7[_b8];}}for(;i<l;++i){_b8=d._extraNames[i];if(_b8!=_9a&&_b7.hasOwnProperty(_b8)){_b6[_b8]=_b7[_b8];}}};function _b9(_ba,_bb){var _bc,t,i=0,l=d._extraNames.length;for(_bc in _bb){t=_bb[_bc];if((t!==op[_bc]||!(_bc in op))&&_bc!=_9a){if(_97.call(t)=="[object Function]"){t.nom=_bc;}_ba[_bc]=t;}}for(;i<l;++i){_bc=d._extraNames[i];t=_bb[_bc];if((t!==op[_bc]||!(_bc in op))&&_bc!=_9a){if(_97.call(t)=="[object Function]"){t.nom=_bc;}_ba[_bc]=t;}}return _ba;};function _bd(_be){_b9(this.prototype,_be);return this;};function _bf(_c0,_c1){return function(){var a=arguments,_c2=a,a0=a[0],f,i,m,l=_c0.length,_c3;if(!(this instanceof a.callee)){return _c4(a);}if(_c1&&(a0&&a0.preamble||this.preamble)){_c3=new Array(_c0.length);_c3[0]=a;for(i=0;;){a0=a[0];if(a0){f=a0.preamble;if(f){a=f.apply(this,a)||a;}}f=_c0[i].prototype;f=f.hasOwnProperty("preamble")&&f.preamble;if(f){a=f.apply(this,a)||a;}if(++i==l){break;}_c3[i]=a;}}for(i=l-1;i>=0;--i){f=_c0[i];m=f._meta;f=m?m.ctor:f;if(f){f.apply(this,_c3?_c3[i]:a);}}f=this.postscript;if(f){f.apply(this,_c2);}};};function _c5(_c6,_c7){return function(){var a=arguments,t=a,a0=a[0],f;if(!(this instanceof a.callee)){return _c4(a);}if(_c7){if(a0){f=a0.preamble;if(f){t=f.apply(this,t)||t;}}f=this.preamble;if(f){f.apply(this,t);}}if(_c6){_c6.apply(this,a);}f=this.postscript;if(f){f.apply(this,a);}};};function _c8(_c9){return function(){var a=arguments,i=0,f,m;if(!(this instanceof a.callee)){return _c4(a);}for(;f=_c9[i];++i){m=f._meta;f=m?m.ctor:f;if(f){f.apply(this,a);break;}}f=this.postscript;if(f){f.apply(this,a);}};};function _ca(_cb,_cc,_cd){return function(){var b,m,f,i=0,_ce=1;if(_cd){i=_cc.length-1;_ce=-1;}for(;b=_cc[i];i+=_ce){m=b._meta;f=(m?m.hidden:b.prototype)[_cb];if(f){f.apply(this,arguments);}}};};function _cf(_d0){_98.prototype=_d0.prototype;var t=new _98;_98.prototype=null;return t;};function _c4(_d1){var _d2=_d1.callee,t=_cf(_d2);_d2.apply(t,_d1);return t;};d.declare=function(_d3,_d4,_d5){if(typeof _d3!="string"){_d5=_d4;_d4=_d3;_d3="";}_d5=_d5||{};var _d6,i,t,_d7,_d8,_d9,_da,_db=1,_dc=_d4;if(_97.call(_d4)=="[object Array]"){_d9=_9b(_d4,_d3);t=_d9[0];_db=_d9.length-t;_d4=_d9[_db];}else{_d9=[0];if(_d4){if(_97.call(_d4)=="[object Function]"){t=_d4._meta;_d9=_d9.concat(t?t.bases:_d4);}else{err("base class is not a callable constructor.",_d3);}}else{if(_d4!==null){err("unknown base class. Did you use dojo.require to pull it in?",_d3);}}}if(_d4){for(i=_db-1;;--i){_d6=_cf(_d4);if(!i){break;}t=_d9[i];(t._meta?_b5:mix)(_d6,t.prototype);_d7=new Function;_d7.superclass=_d4;_d7.prototype=_d6;_d4=_d6.constructor=_d7;}}else{_d6={};}_b9(_d6,_d5);t=_d5.constructor;if(t!==op.constructor){t.nom=_9a;_d6.constructor=t;}for(i=_db-1;i;--i){t=_d9[i]._meta;if(t&&t.chains){_da=mix(_da||{},t.chains);}}if(_d6["-chains-"]){_da=mix(_da||{},_d6["-chains-"]);}t=!_da||!_da.hasOwnProperty(_9a);_d9[0]=_d7=(_da&&_da.constructor==="manual")?_c8(_d9):(_d9.length==1?_c5(_d5.constructor,t):_bf(_d9,t));_d7._meta={bases:_d9,hidden:_d5,chains:_da,parents:_dc,ctor:_d5.constructor};_d7.superclass=_d4&&_d4.prototype;_d7.extend=_bd;_d7.prototype=_d6;_d6.constructor=_d7;_d6.getInherited=_b0;_d6.inherited=_a6;_d6.isInstanceOf=_b3;if(_d3){_d6.declaredClass=_d3;d.setObject(_d3,_d7);}if(_da){for(_d8 in _da){if(_d6[_d8]&&typeof _da[_d8]=="string"&&_d8!=_9a){t=_d6[_d8]=_ca(_d8,_d9,_da[_d8]==="after");t.nom=_d8;}}}return _d7;};d.safeMixin=_b9;})();}if(!dojo._hasResource["dojo._base.connect"]){dojo._hasResource["dojo._base.connect"]=true;dojo.provide("dojo._base.connect");dojo._listener={getDispatcher:function(){return function(){var ap=Array.prototype,c=arguments.callee,ls=c._listeners,t=c.target,r=t&&t.apply(this,arguments),i,lls=[].concat(ls);for(i in lls){if(!(i in ap)){lls[i].apply(this,arguments);}}return r;};},add:function(_dd,_de,_df){_dd=_dd||dojo.global;var f=_dd[_de];if(!f||!f._listeners){var d=dojo._listener.getDispatcher();d.target=f;d._listeners=[];f=_dd[_de]=d;}return f._listeners.push(_df);},remove:function(_e0,_e1,_e2){var f=(_e0||dojo.global)[_e1];if(f&&f._listeners&&_e2--){delete f._listeners[_e2];}}};dojo.connect=function(obj,_e3,_e4,_e5,_e6){var a=arguments,_e7=[],i=0;_e7.push(dojo.isString(a[0])?null:a[i++],a[i++]);var a1=a[i+1];_e7.push(dojo.isString(a1)||dojo.isFunction(a1)?a[i++]:null,a[i++]);for(var l=a.length;i<l;i++){_e7.push(a[i]);}return dojo._connect.apply(this,_e7);};dojo._connect=function(obj,_e8,_e9,_ea){var l=dojo._listener,h=l.add(obj,_e8,dojo.hitch(_e9,_ea));return [obj,_e8,h,l];};dojo.disconnect=function(_eb){if(_eb&&_eb[0]!==undefined){dojo._disconnect.apply(this,_eb);delete _eb[0];}};dojo._disconnect=function(obj,_ec,_ed,_ee){_ee.remove(obj,_ec,_ed);};dojo._topics={};dojo.subscribe=function(_ef,_f0,_f1){return [_ef,dojo._listener.add(dojo._topics,_ef,dojo.hitch(_f0,_f1))];};dojo.unsubscribe=function(_f2){if(_f2){dojo._listener.remove(dojo._topics,_f2[0],_f2[1]);}};dojo.publish=function(_f3,_f4){var f=dojo._topics[_f3];if(f){f.apply(this,_f4||[]);}};dojo.connectPublisher=function(_f5,obj,_f6){var pf=function(){dojo.publish(_f5,arguments);};return _f6?dojo.connect(obj,_f6,pf):dojo.connect(obj,pf);};}if(!dojo._hasResource["dojo._base.Deferred"]){dojo._hasResource["dojo._base.Deferred"]=true;dojo.provide("dojo._base.Deferred");(function(){var _f7=function(){};var _f8=Object.freeze||function(){};dojo.Deferred=function(_f9){var _fa,_fb,_fc,_fd,_fe;var _ff=(this.promise={});function _100(_101){if(_fb){throw new Error("This deferred has already been resolved");}_fa=_101;_fb=true;_102();};function _102(){var _103;while(!_103&&_fe){var _104=_fe;_fe=_fe.next;if((_103=(_104.progress==_f7))){_fb=false;}var func=(_fc?_104.error:_104.resolved);if(func){try{var _105=func(_fa);if(_105&&typeof _105.then==="function"){_105.then(dojo.hitch(_104.deferred,"resolve"),dojo.hitch(_104.deferred,"reject"));continue;}var _106=_103&&_105===undefined;if(_103&&!_106){_fc=_105 instanceof Error;}_104.deferred[_106&&_fc?"reject":"resolve"](_106?_fa:_105);}catch(e){_104.deferred.reject(e);}}else{if(_fc){_104.deferred.reject(_fa);}else{_104.deferred.resolve(_fa);}}}};this.resolve=this.callback=function(_107){this.fired=0;this.results=[_107,null];_100(_107);};this.reject=this.errback=function(_108){_fc=true;this.fired=1;_100(_108);this.results=[null,_108];if(!_108||_108.log!==false){(dojo.config.deferredOnError||function(x){console.error(x);})(_108);}};this.progress=function(_109){var _10a=_fe;while(_10a){var _10b=_10a.progress;_10b&&_10b(_109);_10a=_10a.next;}};this.addCallbacks=function(_10c,_10d){this.then(_10c,_10d,_f7);return this;};this.then=_ff.then=function(_10e,_10f,_110){var _111=_110==_f7?this:new dojo.Deferred(_ff.cancel);var _112={resolved:_10e,error:_10f,progress:_110,deferred:_111};if(_fe){_fd=_fd.next=_112;}else{_fe=_fd=_112;}if(_fb){_102();}return _111.promise;};var _113=this;this.cancel=_ff.cancel=function(){if(!_fb){var _114=_f9&&_f9(_113);if(!_fb){if(!(_114 instanceof Error)){_114=new Error(_114);}_114.log=false;_113.reject(_114);}}};_f8(_ff);};dojo.extend(dojo.Deferred,{addCallback:function(_115){return this.addCallbacks(dojo.hitch.apply(dojo,arguments));},addErrback:function(_116){return this.addCallbacks(null,dojo.hitch.apply(dojo,arguments));},addBoth:function(_117){var _118=dojo.hitch.apply(dojo,arguments);return this.addCallbacks(_118,_118);},fired:-1});})();dojo.when=function(_119,_11a,_11b,_11c){if(_119&&typeof _119.then==="function"){return _119.then(_11a,_11b,_11c);}return _11a(_119);};}if(!dojo._hasResource["dojo._base.json"]){dojo._hasResource["dojo._base.json"]=true;dojo.provide("dojo._base.json");dojo.fromJson=function(json){return eval("("+json+")");};dojo._escapeString=function(str){return ("\""+str.replace(/(["\\])/g,"\\$1")+"\"").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r");};dojo.toJsonIndentStr="\t";dojo.toJson=function(it,_11d,_11e){if(it===undefined){return "undefined";}var _11f=typeof it;if(_11f=="number"||_11f=="boolean"){return it+"";}if(it===null){return "null";}if(dojo.isString(it)){return dojo._escapeString(it);}var _120=arguments.callee;var _121;_11e=_11e||"";var _122=_11d?_11e+dojo.toJsonIndentStr:"";var tf=it.__json__||it.json;if(dojo.isFunction(tf)){_121=tf.call(it);if(it!==_121){return _120(_121,_11d,_122);}}if(it.nodeType&&it.cloneNode){throw new Error("Can't serialize DOM nodes");}var sep=_11d?" ":"";var _123=_11d?"\n":"";if(dojo.isArray(it)){var res=dojo.map(it,function(obj){var val=_120(obj,_11d,_122);if(typeof val!="string"){val="undefined";}return _123+_122+val;});return "["+res.join(","+sep)+_123+_11e+"]";}if(_11f=="function"){return null;}var _124=[],key;for(key in it){var _125,val;if(typeof key=="number"){_125="\""+key+"\"";}else{if(typeof key=="string"){_125=dojo._escapeString(key);}else{continue;}}val=_120(it[key],_11d,_122);if(typeof val!="string"){continue;}_124.push(_123+_122+_125+":"+sep+val);}return "{"+_124.join(","+sep)+_123+_11e+"}";};}if(!dojo._hasResource["dojo._base.Color"]){dojo._hasResource["dojo._base.Color"]=true;dojo.provide("dojo._base.Color");(function(){var d=dojo;dojo.Color=function(_126){if(_126){this.setColor(_126);}};dojo.Color.named={black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:d.config.transparentColor||[255,255,255]};dojo.extend(dojo.Color,{r:255,g:255,b:255,a:1,_set:function(r,g,b,a){var t=this;t.r=r;t.g=g;t.b=b;t.a=a;},setColor:function(_127){if(d.isString(_127)){d.colorFromString(_127,this);}else{if(d.isArray(_127)){d.colorFromArray(_127,this);}else{this._set(_127.r,_127.g,_127.b,_127.a);if(!(_127 instanceof d.Color)){this.sanitize();}}}return this;},sanitize:function(){return this;},toRgb:function(){var t=this;return [t.r,t.g,t.b];},toRgba:function(){var t=this;return [t.r,t.g,t.b,t.a];},toHex:function(){var arr=d.map(["r","g","b"],function(x){var s=this[x].toString(16);return s.length<2?"0"+s:s;},this);return "#"+arr.join("");},toCss:function(_128){var t=this,rgb=t.r+", "+t.g+", "+t.b;return (_128?"rgba("+rgb+", "+t.a:"rgb("+rgb)+")";},toString:function(){return this.toCss(true);}});dojo.blendColors=function(_129,end,_12a,obj){var t=obj||new d.Color();d.forEach(["r","g","b","a"],function(x){t[x]=_129[x]+(end[x]-_129[x])*_12a;if(x!="a"){t[x]=Math.round(t[x]);}});return t.sanitize();};dojo.colorFromRgb=function(_12b,obj){var m=_12b.toLowerCase().match(/^rgba?\(([\s\.,0-9]+)\)/);return m&&dojo.colorFromArray(m[1].split(/\s*,\s*/),obj);};dojo.colorFromHex=function(_12c,obj){var t=obj||new d.Color(),bits=(_12c.length==4)?4:8,mask=(1<<bits)-1;_12c=Number("0x"+_12c.substr(1));if(isNaN(_12c)){return null;}d.forEach(["b","g","r"],function(x){var c=_12c&mask;_12c>>=bits;t[x]=bits==4?17*c:c;});t.a=1;return t;};dojo.colorFromArray=function(a,obj){var t=obj||new d.Color();t._set(Number(a[0]),Number(a[1]),Number(a[2]),Number(a[3]));if(isNaN(t.a)){t.a=1;}return t.sanitize();};dojo.colorFromString=function(str,obj){var a=d.Color.named[str];return a&&d.colorFromArray(a,obj)||d.colorFromRgb(str,obj)||d.colorFromHex(str,obj);};})();}if(!dojo._hasResource["dojo._base.window"]){dojo._hasResource["dojo._base.window"]=true;dojo.provide("dojo._base.window");dojo.doc=window["document"]||null;dojo.body=function(){return dojo.doc.body||dojo.doc.getElementsByTagName("body")[0];};dojo.setContext=function(_12d,_12e){dojo.global=_12d;dojo.doc=_12e;};dojo.withGlobal=function(_12f,_130,_131,_132){var _133=dojo.global;try{dojo.global=_12f;return dojo.withDoc.call(null,_12f.document,_130,_131,_132);}finally{dojo.global=_133;}};dojo.withDoc=function(_134,_135,_136,_137){var _138=dojo.doc,_139=dojo._bodyLtr,oldQ=dojo.isQuirks;try{dojo.doc=_134;delete dojo._bodyLtr;dojo.isQuirks=dojo.doc.compatMode=="BackCompat";if(_136&&typeof _135=="string"){_135=_136[_135];}return _135.apply(_136,_137||[]);}finally{dojo.doc=_138;delete dojo._bodyLtr;if(_139!==undefined){dojo._bodyLtr=_139;}dojo.isQuirks=oldQ;}};}if(!dojo._hasResource["dojo._base.event"]){dojo._hasResource["dojo._base.event"]=true;dojo.provide("dojo._base.event");(function(){var del=(dojo._event_listener={add:function(node,name,fp){if(!node){return;}name=del._normalizeEventName(name);fp=del._fixCallback(name,fp);if(!dojo.isIE&&(name=="mouseenter"||name=="mouseleave")){var ofp=fp;name=(name=="mouseenter")?"mouseover":"mouseout";fp=function(e){if(!dojo.isDescendant(e.relatedTarget,node)){return ofp.call(this,e);}};}node.addEventListener(name,fp,false);return fp;},remove:function(node,_13a,_13b){if(node){_13a=del._normalizeEventName(_13a);if(!dojo.isIE&&(_13a=="mouseenter"||_13a=="mouseleave")){_13a=(_13a=="mouseenter")?"mouseover":"mouseout";}node.removeEventListener(_13a,_13b,false);}},_normalizeEventName:function(name){return name.slice(0,2)=="on"?name.slice(2):name;},_fixCallback:function(name,fp){return name!="keypress"?fp:function(e){return fp.call(this,del._fixEvent(e,this));};},_fixEvent:function(evt,_13c){switch(evt.type){case "keypress":del._setKeyChar(evt);break;}return evt;},_setKeyChar:function(evt){evt.keyChar=evt.charCode>=32?String.fromCharCode(evt.charCode):"";evt.charOrCode=evt.keyChar||evt.keyCode;},_punctMap:{106:42,111:47,186:59,187:43,188:44,189:45,190:46,191:47,192:96,219:91,220:92,221:93,222:39}});dojo.fixEvent=function(evt,_13d){return del._fixEvent(evt,_13d);};dojo.stopEvent=function(evt){evt.preventDefault();evt.stopPropagation();};var _13e=dojo._listener;dojo._connect=function(obj,_13f,_140,_141,_142){var _143=obj&&(obj.nodeType||obj.attachEvent||obj.addEventListener);var lid=_143?(_142?2:1):0,l=[dojo._listener,del,_13e][lid];var h=l.add(obj,_13f,dojo.hitch(_140,_141));return [obj,_13f,h,lid];};dojo._disconnect=function(obj,_144,_145,_146){([dojo._listener,del,_13e][_146]).remove(obj,_144,_145);};dojo.keys={BACKSPACE:8,TAB:9,CLEAR:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,META:dojo.isSafari?91:224,PAUSE:19,CAPS_LOCK:20,ESCAPE:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,INSERT:45,DELETE:46,HELP:47,LEFT_WINDOW:91,RIGHT_WINDOW:92,SELECT:93,NUMPAD_0:96,NUMPAD_1:97,NUMPAD_2:98,NUMPAD_3:99,NUMPAD_4:100,NUMPAD_5:101,NUMPAD_6:102,NUMPAD_7:103,NUMPAD_8:104,NUMPAD_9:105,NUMPAD_MULTIPLY:106,NUMPAD_PLUS:107,NUMPAD_ENTER:108,NUMPAD_MINUS:109,NUMPAD_PERIOD:110,NUMPAD_DIVIDE:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,NUM_LOCK:144,SCROLL_LOCK:145,copyKey:dojo.isMac&&!dojo.isAIR?(dojo.isSafari?91:224):17};var _147=dojo.isMac?"metaKey":"ctrlKey";dojo.isCopyKey=function(e){return e[_147];};if(dojo.isIE<9||(dojo.isIE&&dojo.isQuirks)){dojo.mouseButtons={LEFT:1,MIDDLE:4,RIGHT:2,isButton:function(e,_148){return e.button&_148;},isLeft:function(e){return e.button&1;},isMiddle:function(e){return e.button&4;},isRight:function(e){return e.button&2;}};}else{dojo.mouseButtons={LEFT:0,MIDDLE:1,RIGHT:2,isButton:function(e,_149){return e.button==_149;},isLeft:function(e){return e.button==0;},isMiddle:function(e){return e.button==1;},isRight:function(e){return e.button==2;}};}if(dojo.isIE){var _14a=function(e,code){try{return (e.keyCode=code);}catch(e){return 0;}};var iel=dojo._listener;var _14b=(dojo._ieListenersName="_"+dojo._scopeName+"_listeners");if(!dojo.config._allow_leaks){_13e=iel=dojo._ie_listener={handlers:[],add:function(_14c,_14d,_14e){_14c=_14c||dojo.global;var f=_14c[_14d];if(!f||!f[_14b]){var d=dojo._getIeDispatcher();d.target=f&&(ieh.push(f)-1);d[_14b]=[];f=_14c[_14d]=d;}return f[_14b].push(ieh.push(_14e)-1);},remove:function(_14f,_150,_151){var f=(_14f||dojo.global)[_150],l=f&&f[_14b];if(f&&l&&_151--){delete ieh[l[_151]];delete l[_151];}}};var ieh=iel.handlers;}dojo.mixin(del,{add:function(node,_152,fp){if(!node){return;}_152=del._normalizeEventName(_152);if(_152=="onkeypress"){var kd=node.onkeydown;if(!kd||!kd[_14b]||!kd._stealthKeydownHandle){var h=del.add(node,"onkeydown",del._stealthKeyDown);kd=node.onkeydown;kd._stealthKeydownHandle=h;kd._stealthKeydownRefs=1;}else{kd._stealthKeydownRefs++;}}return iel.add(node,_152,del._fixCallback(fp));},remove:function(node,_153,_154){_153=del._normalizeEventName(_153);iel.remove(node,_153,_154);if(_153=="onkeypress"){var kd=node.onkeydown;if(--kd._stealthKeydownRefs<=0){iel.remove(node,"onkeydown",kd._stealthKeydownHandle);delete kd._stealthKeydownHandle;}}},_normalizeEventName:function(_155){return _155.slice(0,2)!="on"?"on"+_155:_155;},_nop:function(){},_fixEvent:function(evt,_156){if(!evt){var w=_156&&(_156.ownerDocument||_156.document||_156).parentWindow||window;evt=w.event;}if(!evt){return (evt);}evt.target=evt.srcElement;evt.currentTarget=(_156||evt.srcElement);evt.layerX=evt.offsetX;evt.layerY=evt.offsetY;var se=evt.srcElement,doc=(se&&se.ownerDocument)||document;var _157=((dojo.isIE<6)||(doc["compatMode"]=="BackCompat"))?doc.body:doc.documentElement;var _158=dojo._getIeDocumentElementOffset();evt.pageX=evt.clientX+dojo._fixIeBiDiScrollLeft(_157.scrollLeft||0)-_158.x;evt.pageY=evt.clientY+(_157.scrollTop||0)-_158.y;if(evt.type=="mouseover"){evt.relatedTarget=evt.fromElement;}if(evt.type=="mouseout"){evt.relatedTarget=evt.toElement;}if(dojo.isIE<9||dojo.isQuirks){evt.stopPropagation=del._stopPropagation;evt.preventDefault=del._preventDefault;}return del._fixKeys(evt);},_fixKeys:function(evt){switch(evt.type){case "keypress":var c=("charCode" in evt?evt.charCode:evt.keyCode);if(c==10){c=0;evt.keyCode=13;}else{if(c==13||c==27){c=0;}else{if(c==3){c=99;}}}evt.charCode=c;del._setKeyChar(evt);break;}return evt;},_stealthKeyDown:function(evt){var kp=evt.currentTarget.onkeypress;if(!kp||!kp[_14b]){return;}var k=evt.keyCode;var _159=(k!=13||(dojo.isIE>=9&&!dojo.isQuirks))&&k!=32&&k!=27&&(k<48||k>90)&&(k<96||k>111)&&(k<186||k>192)&&(k<219||k>222);if(_159||evt.ctrlKey){var c=_159?0:k;if(evt.ctrlKey){if(k==3||k==13){return;}else{if(c>95&&c<106){c-=48;}else{if((!evt.shiftKey)&&(c>=65&&c<=90)){c+=32;}else{c=del._punctMap[c]||c;}}}}var faux=del._synthesizeEvent(evt,{type:"keypress",faux:true,charCode:c});kp.call(evt.currentTarget,faux);if(dojo.isIE<9||(dojo.isIE&&dojo.isQuirks)){evt.cancelBubble=faux.cancelBubble;}evt.returnValue=faux.returnValue;_14a(evt,faux.keyCode);}},_stopPropagation:function(){this.cancelBubble=true;},_preventDefault:function(){this.bubbledKeyCode=this.keyCode;if(this.ctrlKey){_14a(this,0);}this.returnValue=false;}});dojo.stopEvent=(dojo.isIE<9||dojo.isQuirks)?function(evt){evt=evt||window.event;del._stopPropagation.call(evt);del._preventDefault.call(evt);}:dojo.stopEvent;}del._synthesizeEvent=function(evt,_15a){var faux=dojo.mixin({},evt,_15a);del._setKeyChar(faux);faux.preventDefault=function(){evt.preventDefault();};faux.stopPropagation=function(){evt.stopPropagation();};return faux;};if(dojo.isOpera){dojo.mixin(del,{_fixEvent:function(evt,_15b){switch(evt.type){case "keypress":var c=evt.which;if(c==3){c=99;}c=c<41&&!evt.shiftKey?0:c;if(evt.ctrlKey&&!evt.shiftKey&&c>=65&&c<=90){c+=32;}return del._synthesizeEvent(evt,{charCode:c});}return evt;}});}if(dojo.isWebKit){del._add=del.add;del._remove=del.remove;dojo.mixin(del,{add:function(node,_15c,fp){if(!node){return;}var _15d=del._add(node,_15c,fp);if(del._normalizeEventName(_15c)=="keypress"){_15d._stealthKeyDownHandle=del._add(node,"keydown",function(evt){var k=evt.keyCode;var _15e=k!=13&&k!=32&&(k<48||k>90)&&(k<96||k>111)&&(k<186||k>192)&&(k<219||k>222);if(_15e||evt.ctrlKey){var c=_15e?0:k;if(evt.ctrlKey){if(k==3||k==13){return;}else{if(c>95&&c<106){c-=48;}else{if(!evt.shiftKey&&c>=65&&c<=90){c+=32;}else{c=del._punctMap[c]||c;}}}}var faux=del._synthesizeEvent(evt,{type:"keypress",faux:true,charCode:c});fp.call(evt.currentTarget,faux);}});}return _15d;},remove:function(node,_15f,_160){if(node){if(_160._stealthKeyDownHandle){del._remove(node,"keydown",_160._stealthKeyDownHandle);}del._remove(node,_15f,_160);}},_fixEvent:function(evt,_161){switch(evt.type){case "keypress":if(evt.faux){return evt;}var c=evt.charCode;c=c>=32?c:0;return del._synthesizeEvent(evt,{charCode:c,faux:true});}return evt;}});}})();if(dojo.isIE){dojo._ieDispatcher=function(args,_162){var ap=Array.prototype,h=dojo._ie_listener.handlers,c=args.callee,ls=c[dojo._ieListenersName],t=h[c.target];var r=t&&t.apply(_162,args);var lls=[].concat(ls);for(var i in lls){var f=h[lls[i]];if(!(i in ap)&&f){f.apply(_162,args);}}return r;};dojo._getIeDispatcher=function(){return new Function(dojo._scopeName+"._ieDispatcher(arguments, this)");};dojo._event_listener._fixCallback=function(fp){var f=dojo._event_listener._fixEvent;return function(e){return fp.call(this,f(e,this));};};}}if(!dojo._hasResource["dojo._base.html"]){dojo._hasResource["dojo._base.html"]=true;dojo.provide("dojo._base.html");try{document.execCommand("BackgroundImageCache",false,true);}catch(e){}if(dojo.isIE){dojo.byId=function(id,doc){if(typeof id!="string"){return id;}var _163=doc||dojo.doc,te=_163.getElementById(id);if(te&&(te.attributes.id.value==id||te.id==id)){return te;}else{var eles=_163.all[id];if(!eles||eles.nodeName){eles=[eles];}var i=0;while((te=eles[i++])){if((te.attributes&&te.attributes.id&&te.attributes.id.value==id)||te.id==id){return te;}}}};}else{dojo.byId=function(id,doc){return ((typeof id=="string")?(doc||dojo.doc).getElementById(id):id)||null;};}(function(){var d=dojo;var byId=d.byId;var _164=null,_165;d.addOnWindowUnload(function(){_164=null;});dojo._destroyElement=dojo.destroy=function(node){node=byId(node);try{var doc=node.ownerDocument;if(!_164||_165!=doc){_164=doc.createElement("div");_165=doc;}_164.appendChild(node.parentNode?node.parentNode.removeChild(node):node);_164.innerHTML="";}catch(e){}};dojo.isDescendant=function(node,_166){try{node=byId(node);_166=byId(_166);while(node){if(node==_166){return true;}node=node.parentNode;}}catch(e){}return false;};dojo.setSelectable=function(node,_167){node=byId(node);if(d.isMozilla){node.style.MozUserSelect=_167?"":"none";}else{if(d.isKhtml||d.isWebKit){node.style.KhtmlUserSelect=_167?"auto":"none";}else{if(d.isIE){var v=(node.unselectable=_167?"":"on");d.query("*",node).forEach("item.unselectable = '"+v+"'");}}}};var _168=function(node,ref){var _169=ref.parentNode;if(_169){_169.insertBefore(node,ref);}};var _16a=function(node,ref){var _16b=ref.parentNode;if(_16b){if(_16b.lastChild==ref){_16b.appendChild(node);}else{_16b.insertBefore(node,ref.nextSibling);}}};dojo.place=function(node,_16c,_16d){_16c=byId(_16c);if(typeof node=="string"){node=/^\s*</.test(node)?d._toDom(node,_16c.ownerDocument):byId(node);}if(typeof _16d=="number"){var cn=_16c.childNodes;if(!cn.length||cn.length<=_16d){_16c.appendChild(node);}else{_168(node,cn[_16d<0?0:_16d]);}}else{switch(_16d){case "before":_168(node,_16c);break;case "after":_16a(node,_16c);break;case "replace":_16c.parentNode.replaceChild(node,_16c);break;case "only":d.empty(_16c);_16c.appendChild(node);break;case "first":if(_16c.firstChild){_168(node,_16c.firstChild);break;}default:_16c.appendChild(node);}}return node;};dojo.boxModel="content-box";if(d.isIE){d.boxModel=document.compatMode=="BackCompat"?"border-box":"content-box";}var gcs;if(d.isWebKit){gcs=function(node){var s;if(node.nodeType==1){var dv=node.ownerDocument.defaultView;s=dv.getComputedStyle(node,null);if(!s&&node.style){node.style.display="";s=dv.getComputedStyle(node,null);}}return s||{};};}else{if(d.isIE){gcs=function(node){return node.nodeType==1?node.currentStyle:{};};}else{gcs=function(node){return node.nodeType==1?node.ownerDocument.defaultView.getComputedStyle(node,null):{};};}}dojo.getComputedStyle=gcs;if(!d.isIE){d._toPixelValue=function(_16e,_16f){return parseFloat(_16f)||0;};}else{d._toPixelValue=function(_170,_171){if(!_171){return 0;}if(_171=="medium"){return 4;}if(_171.slice&&_171.slice(-2)=="px"){return parseFloat(_171);}with(_170){var _172=style.left;var _173=runtimeStyle.left;runtimeStyle.left=currentStyle.left;try{style.left=_171;_171=style.pixelLeft;}catch(e){_171=0;}style.left=_172;runtimeStyle.left=_173;}return _171;};}var px=d._toPixelValue;var astr="DXImageTransform.Microsoft.Alpha";var af=function(n,f){try{return n.filters.item(astr);}catch(e){return f?{}:null;}};dojo._getOpacity=d.isIE<9?function(node){try{return af(node).Opacity/100;}catch(e){return 1;}}:function(node){return gcs(node).opacity;};dojo._setOpacity=d.isIE<9?function(node,_174){var ov=_174*100,_175=_174==1;node.style.zoom=_175?"":1;if(!af(node)){if(_175){return _174;}node.style.filter+=" progid:"+astr+"(Opacity="+ov+")";}else{af(node,1).Opacity=ov;}af(node,1).Enabled=!_175;if(node.nodeName.toLowerCase()=="tr"){d.query("> td",node).forEach(function(i){d._setOpacity(i,_174);});}return _174;}:function(node,_176){return node.style.opacity=_176;};var _177={left:true,top:true};var _178=/margin|padding|width|height|max|min|offset/;var _179=function(node,type,_17a){type=type.toLowerCase();if(d.isIE){if(_17a=="auto"){if(type=="height"){return node.offsetHeight;}if(type=="width"){return node.offsetWidth;}}if(type=="fontweight"){switch(_17a){case 700:return "bold";case 400:default:return "normal";}}}if(!(type in _177)){_177[type]=_178.test(type);}return _177[type]?px(node,_17a):_17a;};var _17b=d.isIE?"styleFloat":"cssFloat",_17c={"cssFloat":_17b,"styleFloat":_17b,"float":_17b};dojo.style=function(node,_17d,_17e){var n=byId(node),args=arguments.length,op=(_17d=="opacity");_17d=_17c[_17d]||_17d;if(args==3){return op?d._setOpacity(n,_17e):n.style[_17d]=_17e;}if(args==2&&op){return d._getOpacity(n);}var s=gcs(n);if(args==2&&typeof _17d!="string"){for(var x in _17d){d.style(node,x,_17d[x]);}return s;}return (args==1)?s:_179(n,_17d,s[_17d]||n.style[_17d]);};dojo._getPadExtents=function(n,_17f){var s=_17f||gcs(n),l=px(n,s.paddingLeft),t=px(n,s.paddingTop);return {l:l,t:t,w:l+px(n,s.paddingRight),h:t+px(n,s.paddingBottom)};};dojo._getBorderExtents=function(n,_180){var ne="none",s=_180||gcs(n),bl=(s.borderLeftStyle!=ne?px(n,s.borderLeftWidth):0),bt=(s.borderTopStyle!=ne?px(n,s.borderTopWidth):0);return {l:bl,t:bt,w:bl+(s.borderRightStyle!=ne?px(n,s.borderRightWidth):0),h:bt+(s.borderBottomStyle!=ne?px(n,s.borderBottomWidth):0)};};dojo._getPadBorderExtents=function(n,_181){var s=_181||gcs(n),p=d._getPadExtents(n,s),b=d._getBorderExtents(n,s);return {l:p.l+b.l,t:p.t+b.t,w:p.w+b.w,h:p.h+b.h};};dojo._getMarginExtents=function(n,_182){var s=_182||gcs(n),l=px(n,s.marginLeft),t=px(n,s.marginTop),r=px(n,s.marginRight),b=px(n,s.marginBottom);if(d.isWebKit&&(s.position!="absolute")){r=l;}return {l:l,t:t,w:l+r,h:t+b};};dojo._getMarginBox=function(node,_183){var s=_183||gcs(node),me=d._getMarginExtents(node,s);var l=node.offsetLeft-me.l,t=node.offsetTop-me.t,p=node.parentNode;if(d.isMoz){var sl=parseFloat(s.left),st=parseFloat(s.top);if(!isNaN(sl)&&!isNaN(st)){l=sl,t=st;}else{if(p&&p.style){var pcs=gcs(p);if(pcs.overflow!="visible"){var be=d._getBorderExtents(p,pcs);l+=be.l,t+=be.t;}}}}else{if(d.isOpera||(d.isIE>7&&!d.isQuirks)){if(p){be=d._getBorderExtents(p);l-=be.l;t-=be.t;}}}return {l:l,t:t,w:node.offsetWidth+me.w,h:node.offsetHeight+me.h};};dojo._getMarginSize=function(node,_184){node=byId(node);var me=d._getMarginExtents(node,_184||gcs(node));var size=node.getBoundingClientRect();return {w:(size.right-size.left)+me.w,h:(size.bottom-size.top)+me.h};};dojo._getContentBox=function(node,_185){var s=_185||gcs(node),pe=d._getPadExtents(node,s),be=d._getBorderExtents(node,s),w=node.clientWidth,h;if(!w){w=node.offsetWidth,h=node.offsetHeight;}else{h=node.clientHeight,be.w=be.h=0;}if(d.isOpera){pe.l+=be.l;pe.t+=be.t;}return {l:pe.l,t:pe.t,w:w-pe.w-be.w,h:h-pe.h-be.h};};dojo._getBorderBox=function(node,_186){var s=_186||gcs(node),pe=d._getPadExtents(node,s),cb=d._getContentBox(node,s);return {l:cb.l-pe.l,t:cb.t-pe.t,w:cb.w+pe.w,h:cb.h+pe.h};};dojo._setBox=function(node,l,t,w,h,u){u=u||"px";var s=node.style;if(!isNaN(l)){s.left=l+u;}if(!isNaN(t)){s.top=t+u;}if(w>=0){s.width=w+u;}if(h>=0){s.height=h+u;}};dojo._isButtonTag=function(node){return node.tagName=="BUTTON"||node.tagName=="INPUT"&&(node.getAttribute("type")||"").toUpperCase()=="BUTTON";};dojo._usesBorderBox=function(node){var n=node.tagName;return d.boxModel=="border-box"||n=="TABLE"||d._isButtonTag(node);};dojo._setContentSize=function(node,_187,_188,_189){if(d._usesBorderBox(node)){var pb=d._getPadBorderExtents(node,_189);if(_187>=0){_187+=pb.w;}if(_188>=0){_188+=pb.h;}}d._setBox(node,NaN,NaN,_187,_188);};dojo._setMarginBox=function(node,_18a,_18b,_18c,_18d,_18e){var s=_18e||gcs(node),bb=d._usesBorderBox(node),pb=bb?_18f:d._getPadBorderExtents(node,s);if(d.isWebKit){if(d._isButtonTag(node)){var ns=node.style;if(_18c>=0&&!ns.width){ns.width="4px";}if(_18d>=0&&!ns.height){ns.height="4px";}}}var mb=d._getMarginExtents(node,s);if(_18c>=0){_18c=Math.max(_18c-pb.w-mb.w,0);}if(_18d>=0){_18d=Math.max(_18d-pb.h-mb.h,0);}d._setBox(node,_18a,_18b,_18c,_18d);};var _18f={l:0,t:0,w:0,h:0};dojo.marginBox=function(node,box){var n=byId(node),s=gcs(n),b=box;return !b?d._getMarginBox(n,s):d._setMarginBox(n,b.l,b.t,b.w,b.h,s);};dojo.contentBox=function(node,box){var n=byId(node),s=gcs(n),b=box;return !b?d._getContentBox(n,s):d._setContentSize(n,b.w,b.h,s);};var _190=function(node,prop){if(!(node=(node||0).parentNode)){return 0;}var val,_191=0,_192=d.body();while(node&&node.style){if(gcs(node).position=="fixed"){return 0;}val=node[prop];if(val){_191+=val-0;if(node==_192){break;}}node=node.parentNode;}return _191;};dojo._docScroll=function(){var n=d.global;return "pageXOffset" in n?{x:n.pageXOffset,y:n.pageYOffset}:(n=d.isQuirks?d.doc.body:d.doc.documentElement,{x:d._fixIeBiDiScrollLeft(n.scrollLeft||0),y:n.scrollTop||0});};dojo._isBodyLtr=function(){return "_bodyLtr" in d?d._bodyLtr:d._bodyLtr=(d.body().dir||d.doc.documentElement.dir||"ltr").toLowerCase()=="ltr";};dojo._getIeDocumentElementOffset=function(){var de=d.doc.documentElement;if(d.isIE<8){var r=de.getBoundingClientRect();var l=r.left,t=r.top;if(d.isIE<7){l+=de.clientLeft;t+=de.clientTop;}return {x:l<0?0:l,y:t<0?0:t};}else{return {x:0,y:0};}};dojo._fixIeBiDiScrollLeft=function(_193){var ie=d.isIE;if(ie&&!d._isBodyLtr()){var qk=d.isQuirks,de=qk?d.doc.body:d.doc.documentElement;if(ie==6&&!qk&&d.global.frameElement&&de.scrollHeight>de.clientHeight){_193+=de.clientLeft;}return (ie<8||qk)?(_193+de.clientWidth-de.scrollWidth):-_193;}return _193;};dojo._abs=dojo.position=function(node,_194){node=byId(node);var db=d.body(),dh=db.parentNode,ret=node.getBoundingClientRect();ret={x:ret.left,y:ret.top,w:ret.right-ret.left,h:ret.bottom-ret.top};if(d.isIE){var _195=d._getIeDocumentElementOffset();ret.x-=_195.x+(d.isQuirks?db.clientLeft+db.offsetLeft:0);ret.y-=_195.y+(d.isQuirks?db.clientTop+db.offsetTop:0);}else{if(d.isFF==3){var cs=gcs(dh);ret.x-=px(dh,cs.marginLeft)+px(dh,cs.borderLeftWidth);ret.y-=px(dh,cs.marginTop)+px(dh,cs.borderTopWidth);}}if(_194){var _196=d._docScroll();ret.x+=_196.x;ret.y+=_196.y;}return ret;};dojo.coords=function(node,_197){var n=byId(node),s=gcs(n),mb=d._getMarginBox(n,s);var abs=d.position(n,_197);mb.x=abs.x;mb.y=abs.y;return mb;};var _198={"class":"className","for":"htmlFor",tabindex:"tabIndex",readonly:"readOnly",colspan:"colSpan",frameborder:"frameBorder",rowspan:"rowSpan",valuetype:"valueType"},_199={classname:"class",htmlfor:"for",tabindex:"tabIndex",readonly:"readOnly"},_19a={innerHTML:1,className:1,htmlFor:d.isIE,value:1};var _19b=function(name){return _199[name.toLowerCase()]||name;};var _19c=function(node,name){var attr=node.getAttributeNode&&node.getAttributeNode(name);return attr&&attr.specified;};dojo.hasAttr=function(node,name){var lc=name.toLowerCase();return _19a[_198[lc]||name]||_19c(byId(node),_199[lc]||name);};var _19d={},_19e=0,_19f=dojo._scopeName+"attrid",_1a0={col:1,colgroup:1,table:1,tbody:1,tfoot:1,thead:1,tr:1,title:1};dojo.attr=function(node,name,_1a1){node=byId(node);var args=arguments.length,prop;if(args==2&&typeof name!="string"){for(var x in name){d.attr(node,x,name[x]);}return node;}var lc=name.toLowerCase(),_1a2=_198[lc]||name,_1a3=_19a[_1a2],_1a4=_199[lc]||name;if(args==3){do{if(_1a2=="style"&&typeof _1a1!="string"){d.style(node,_1a1);break;}if(_1a2=="innerHTML"){if(d.isIE&&node.tagName.toLowerCase() in _1a0){d.empty(node);node.appendChild(d._toDom(_1a1,node.ownerDocument));}else{node[_1a2]=_1a1;}break;}if(d.isFunction(_1a1)){var _1a5=d.attr(node,_19f);if(!_1a5){_1a5=_19e++;d.attr(node,_19f,_1a5);}if(!_19d[_1a5]){_19d[_1a5]={};}var h=_19d[_1a5][_1a2];if(h){d.disconnect(h);}else{try{delete node[_1a2];}catch(e){}}_19d[_1a5][_1a2]=d.connect(node,_1a2,_1a1);break;}if(_1a3||typeof _1a1=="boolean"){node[_1a2]=_1a1;break;}node.setAttribute(_1a4,_1a1);}while(false);return node;}_1a1=node[_1a2];if(_1a3&&typeof _1a1!="undefined"){return _1a1;}if(_1a2!="href"&&(typeof _1a1=="boolean"||d.isFunction(_1a1))){return _1a1;}return _19c(node,_1a4)?node.getAttribute(_1a4):null;};dojo.removeAttr=function(node,name){byId(node).removeAttribute(_19b(name));};dojo.getNodeProp=function(node,name){node=byId(node);var lc=name.toLowerCase(),_1a6=_198[lc]||name;if((_1a6 in node)&&_1a6!="href"){return node[_1a6];}var _1a7=_199[lc]||name;return _19c(node,_1a7)?node.getAttribute(_1a7):null;};dojo.create=function(tag,_1a8,_1a9,pos){var doc=d.doc;if(_1a9){_1a9=byId(_1a9);doc=_1a9.ownerDocument;}if(typeof tag=="string"){tag=doc.createElement(tag);}if(_1a8){d.attr(tag,_1a8);}if(_1a9){d.place(tag,_1a9,pos);}return tag;};d.empty=d.isIE?function(node){node=byId(node);for(var c;c=node.lastChild;){d.destroy(c);}}:function(node){byId(node).innerHTML="";};var _1aa={option:["select"],tbody:["table"],thead:["table"],tfoot:["table"],tr:["table","tbody"],td:["table","tbody","tr"],th:["table","thead","tr"],legend:["fieldset"],caption:["table"],colgroup:["table"],col:["table","colgroup"],li:["ul"]},_1ab=/<\s*([\w\:]+)/,_1ac={},_1ad=0,_1ae="__"+d._scopeName+"ToDomId";for(var _1af in _1aa){if(_1aa.hasOwnProperty(_1af)){var tw=_1aa[_1af];tw.pre=_1af=="option"?"<select multiple=\"multiple\">":"<"+tw.join("><")+">";tw.post="</"+tw.reverse().join("></")+">";}}d._toDom=function(frag,doc){doc=doc||d.doc;var _1b0=doc[_1ae];if(!_1b0){doc[_1ae]=_1b0=++_1ad+"";_1ac[_1b0]=doc.createElement("div");}frag+="";var _1b1=frag.match(_1ab),tag=_1b1?_1b1[1].toLowerCase():"",_1b2=_1ac[_1b0],wrap,i,fc,df;if(_1b1&&_1aa[tag]){wrap=_1aa[tag];_1b2.innerHTML=wrap.pre+frag+wrap.post;for(i=wrap.length;i;--i){_1b2=_1b2.firstChild;}}else{_1b2.innerHTML=frag;}if(_1b2.childNodes.length==1){return _1b2.removeChild(_1b2.firstChild);}df=doc.createDocumentFragment();while(fc=_1b2.firstChild){df.appendChild(fc);}return df;};var _1b3="className";dojo.hasClass=function(node,_1b4){return ((" "+byId(node)[_1b3]+" ").indexOf(" "+_1b4+" ")>=0);};var _1b5=/\s+/,a1=[""],_1b6={},_1b7=function(s){if(typeof s=="string"||s instanceof String){if(s.indexOf(" ")<0){a1[0]=s;return a1;}else{return s.split(_1b5);}}return s||"";};dojo.addClass=function(node,_1b8){node=byId(node);_1b8=_1b7(_1b8);var cls=node[_1b3],_1b9;cls=cls?" "+cls+" ":" ";_1b9=cls.length;for(var i=0,len=_1b8.length,c;i<len;++i){c=_1b8[i];if(c&&cls.indexOf(" "+c+" ")<0){cls+=c+" ";}}if(_1b9<cls.length){node[_1b3]=cls.substr(1,cls.length-2);}};dojo.removeClass=function(node,_1ba){node=byId(node);var cls;if(_1ba!==undefined){_1ba=_1b7(_1ba);cls=" "+node[_1b3]+" ";for(var i=0,len=_1ba.length;i<len;++i){cls=cls.replace(" "+_1ba[i]+" "," ");}cls=d.trim(cls);}else{cls="";}if(node[_1b3]!=cls){node[_1b3]=cls;}};dojo.replaceClass=function(node,_1bb,_1bc){node=byId(node);_1b6.className=node.className;dojo.removeClass(_1b6,_1bc);dojo.addClass(_1b6,_1bb);if(node.className!==_1b6.className){node.className=_1b6.className;}};dojo.toggleClass=function(node,_1bd,_1be){if(_1be===undefined){_1be=!d.hasClass(node,_1bd);}d[_1be?"addClass":"removeClass"](node,_1bd);};})();}if(!dojo._hasResource["dojo._base.NodeList"]){dojo._hasResource["dojo._base.NodeList"]=true;dojo.provide("dojo._base.NodeList");(function(){var d=dojo;var ap=Array.prototype,aps=ap.slice,apc=ap.concat;var tnl=function(a,_1bf,_1c0){if(!a.sort){a=aps.call(a,0);}var ctor=_1c0||this._NodeListCtor||d._NodeListCtor;a.constructor=ctor;dojo._mixin(a,ctor.prototype);a._NodeListCtor=ctor;return _1bf?a._stash(_1bf):a;};var _1c1=function(f,a,o){a=[0].concat(aps.call(a,0));o=o||d.global;return function(node){a[0]=node;return f.apply(o,a);};};var _1c2=function(f,o){return function(){this.forEach(_1c1(f,arguments,o));return this;};};var _1c3=function(f,o){return function(){return this.map(_1c1(f,arguments,o));};};var _1c4=function(f,o){return function(){return this.filter(_1c1(f,arguments,o));};};var _1c5=function(f,g,o){return function(){var a=arguments,body=_1c1(f,a,o);if(g.call(o||d.global,a)){return this.map(body);}this.forEach(body);return this;};};var _1c6=function(a){return a.length==1&&(typeof a[0]=="string");};var _1c7=function(node){var p=node.parentNode;if(p){p.removeChild(node);}};dojo.NodeList=function(){return tnl(Array.apply(null,arguments));};d._NodeListCtor=d.NodeList;var nl=d.NodeList,nlp=nl.prototype;nl._wrap=nlp._wrap=tnl;nl._adaptAsMap=_1c3;nl._adaptAsForEach=_1c2;nl._adaptAsFilter=_1c4;nl._adaptWithCondition=_1c5;d.forEach(["slice","splice"],function(name){var f=ap[name];nlp[name]=function(){return this._wrap(f.apply(this,arguments),name=="slice"?this:null);};});d.forEach(["indexOf","lastIndexOf","every","some"],function(name){var f=d[name];nlp[name]=function(){return f.apply(d,[this].concat(aps.call(arguments,0)));};});d.forEach(["attr","style"],function(name){nlp[name]=_1c5(d[name],_1c6);});d.forEach(["connect","addClass","removeClass","replaceClass","toggleClass","empty","removeAttr"],function(name){nlp[name]=_1c2(d[name]);});dojo.extend(dojo.NodeList,{_normalize:function(_1c8,_1c9){var _1ca=_1c8.parse===true?true:false;if(typeof _1c8.template=="string"){var _1cb=_1c8.templateFunc||(dojo.string&&dojo.string.substitute);_1c8=_1cb?_1cb(_1c8.template,_1c8):_1c8;}var type=(typeof _1c8);if(type=="string"||type=="number"){_1c8=dojo._toDom(_1c8,(_1c9&&_1c9.ownerDocument));if(_1c8.nodeType==11){_1c8=dojo._toArray(_1c8.childNodes);}else{_1c8=[_1c8];}}else{if(!dojo.isArrayLike(_1c8)){_1c8=[_1c8];}else{if(!dojo.isArray(_1c8)){_1c8=dojo._toArray(_1c8);}}}if(_1ca){_1c8._runParse=true;}return _1c8;},_cloneNode:function(node){return node.cloneNode(true);},_place:function(ary,_1cc,_1cd,_1ce){if(_1cc.nodeType!=1&&_1cd=="only"){return;}var _1cf=_1cc,_1d0;var _1d1=ary.length;for(var i=_1d1-1;i>=0;i--){var node=(_1ce?this._cloneNode(ary[i]):ary[i]);if(ary._runParse&&dojo.parser&&dojo.parser.parse){if(!_1d0){_1d0=_1cf.ownerDocument.createElement("div");}_1d0.appendChild(node);dojo.parser.parse(_1d0);node=_1d0.firstChild;while(_1d0.firstChild){_1d0.removeChild(_1d0.firstChild);}}if(i==_1d1-1){dojo.place(node,_1cf,_1cd);}else{_1cf.parentNode.insertBefore(node,_1cf);}_1cf=node;}},_stash:function(_1d2){this._parent=_1d2;return this;},end:function(){if(this._parent){return this._parent;}else{return new this._NodeListCtor();}},concat:function(item){var t=d.isArray(this)?this:aps.call(this,0),m=d.map(arguments,function(a){return a&&!d.isArray(a)&&(typeof NodeList!="undefined"&&a.constructor===NodeList||a.constructor===this._NodeListCtor)?aps.call(a,0):a;});return this._wrap(apc.apply(t,m),this);},map:function(func,obj){return this._wrap(d.map(this,func,obj),this);},forEach:function(_1d3,_1d4){d.forEach(this,_1d3,_1d4);return this;},coords:_1c3(d.coords),position:_1c3(d.position),place:function(_1d5,_1d6){var item=d.query(_1d5)[0];return this.forEach(function(node){d.place(node,item,_1d6);});},orphan:function(_1d7){return (_1d7?d._filterQueryResult(this,_1d7):this).forEach(_1c7);},adopt:function(_1d8,_1d9){return d.query(_1d8).place(this[0],_1d9)._stash(this);},query:function(_1da){if(!_1da){return this;}var ret=this.map(function(node){return d.query(_1da,node).filter(function(_1db){return _1db!==undefined;});});return this._wrap(apc.apply([],ret),this);},filter:function(_1dc){var a=arguments,_1dd=this,_1de=0;if(typeof _1dc=="string"){_1dd=d._filterQueryResult(this,a[0]);if(a.length==1){return _1dd._stash(this);}_1de=1;}return this._wrap(d.filter(_1dd,a[_1de],a[_1de+1]),this);},addContent:function(_1df,_1e0){_1df=this._normalize(_1df,this[0]);for(var i=0,node;(node=this[i]);i++){this._place(_1df,node,_1e0,i>0);}return this;},instantiate:function(_1e1,_1e2){var c=d.isFunction(_1e1)?_1e1:d.getObject(_1e1);_1e2=_1e2||{};return this.forEach(function(node){new c(_1e2,node);});},at:function(){var t=new this._NodeListCtor();d.forEach(arguments,function(i){if(i<0){i=this.length+i;}if(this[i]){t.push(this[i]);}},this);return t._stash(this);}});nl.events=["blur","focus","change","click","error","keydown","keypress","keyup","load","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","submit"];d.forEach(nl.events,function(evt){var _1e3="on"+evt;nlp[_1e3]=function(a,b){return this.connect(_1e3,a,b);};});})();}if(!dojo._hasResource["dojo._base.query"]){dojo._hasResource["dojo._base.query"]=true;(function(){var _1e4=function(d){var trim=d.trim;var each=d.forEach;var qlc=(d._NodeListCtor=d.NodeList);var _1e5=function(){return d.doc;};var _1e6=((d.isWebKit||d.isMozilla)&&((_1e5().compatMode)=="BackCompat"));var _1e7=!!_1e5().firstChild["children"]?"children":"childNodes";var _1e8=">~+";var _1e9=false;var _1ea=function(){return true;};var _1eb=function(_1ec){if(_1e8.indexOf(_1ec.slice(-1))>=0){_1ec+=" * ";}else{_1ec+=" ";}var ts=function(s,e){return trim(_1ec.slice(s,e));};var _1ed=[];var _1ee=-1,_1ef=-1,_1f0=-1,_1f1=-1,_1f2=-1,inId=-1,_1f3=-1,lc="",cc="",_1f4;var x=0,ql=_1ec.length,_1f5=null,_1f6=null;var _1f7=function(){if(_1f3>=0){var tv=(_1f3==x)?null:ts(_1f3,x);_1f5[(_1e8.indexOf(tv)<0)?"tag":"oper"]=tv;_1f3=-1;}};var _1f8=function(){if(inId>=0){_1f5.id=ts(inId,x).replace(/\\/g,"");inId=-1;}};var _1f9=function(){if(_1f2>=0){_1f5.classes.push(ts(_1f2+1,x).replace(/\\/g,""));_1f2=-1;}};var _1fa=function(){_1f8();_1f7();_1f9();};var _1fb=function(){_1fa();if(_1f1>=0){_1f5.pseudos.push({name:ts(_1f1+1,x)});}_1f5.loops=(_1f5.pseudos.length||_1f5.attrs.length||_1f5.classes.length);_1f5.oquery=_1f5.query=ts(_1f4,x);_1f5.otag=_1f5.tag=(_1f5["oper"])?null:(_1f5.tag||"*");if(_1f5.tag){_1f5.tag=_1f5.tag.toUpperCase();}if(_1ed.length&&(_1ed[_1ed.length-1].oper)){_1f5.infixOper=_1ed.pop();_1f5.query=_1f5.infixOper.query+" "+_1f5.query;}_1ed.push(_1f5);_1f5=null;};for(;lc=cc,cc=_1ec.charAt(x),x<ql;x++){if(lc=="\\"){continue;}if(!_1f5){_1f4=x;_1f5={query:null,pseudos:[],attrs:[],classes:[],tag:null,oper:null,id:null,getTag:function(){return (_1e9)?this.otag:this.tag;}};_1f3=x;}if(_1ee>=0){if(cc=="]"){if(!_1f6.attr){_1f6.attr=ts(_1ee+1,x);}else{_1f6.matchFor=ts((_1f0||_1ee+1),x);}var cmf=_1f6.matchFor;if(cmf){if((cmf.charAt(0)=="\"")||(cmf.charAt(0)=="'")){_1f6.matchFor=cmf.slice(1,-1);}}_1f5.attrs.push(_1f6);_1f6=null;_1ee=_1f0=-1;}else{if(cc=="="){var _1fc=("|~^$*".indexOf(lc)>=0)?lc:"";_1f6.type=_1fc+cc;_1f6.attr=ts(_1ee+1,x-_1fc.length);_1f0=x+1;}}}else{if(_1ef>=0){if(cc==")"){if(_1f1>=0){_1f6.value=ts(_1ef+1,x);}_1f1=_1ef=-1;}}else{if(cc=="#"){_1fa();inId=x+1;}else{if(cc=="."){_1fa();_1f2=x;}else{if(cc==":"){_1fa();_1f1=x;}else{if(cc=="["){_1fa();_1ee=x;_1f6={};}else{if(cc=="("){if(_1f1>=0){_1f6={name:ts(_1f1+1,x),value:null};_1f5.pseudos.push(_1f6);}_1ef=x;}else{if((cc==" ")&&(lc!=cc)){_1fb();}}}}}}}}}return _1ed;};var _1fd=function(_1fe,_1ff){if(!_1fe){return _1ff;}if(!_1ff){return _1fe;}return function(){return _1fe.apply(window,arguments)&&_1ff.apply(window,arguments);};};var _200=function(i,arr){var r=arr||[];if(i){r.push(i);}return r;};var _201=function(n){return (1==n.nodeType);};var _202="";var _203=function(elem,attr){if(!elem){return _202;}if(attr=="class"){return elem.className||_202;}if(attr=="for"){return elem.htmlFor||_202;}if(attr=="style"){return elem.style.cssText||_202;}return (_1e9?elem.getAttribute(attr):elem.getAttribute(attr,2))||_202;};var _204={"*=":function(attr,_205){return function(elem){return (_203(elem,attr).indexOf(_205)>=0);};},"^=":function(attr,_206){return function(elem){return (_203(elem,attr).indexOf(_206)==0);};},"$=":function(attr,_207){var tval=" "+_207;return function(elem){var ea=" "+_203(elem,attr);return (ea.lastIndexOf(_207)==(ea.length-_207.length));};},"~=":function(attr,_208){var tval=" "+_208+" ";return function(elem){var ea=" "+_203(elem,attr)+" ";return (ea.indexOf(tval)>=0);};},"|=":function(attr,_209){var _20a=" "+_209+"-";return function(elem){var ea=" "+_203(elem,attr);return ((ea==_209)||(ea.indexOf(_20a)==0));};},"=":function(attr,_20b){return function(elem){return (_203(elem,attr)==_20b);};}};var _20c=(typeof _1e5().firstChild.nextElementSibling=="undefined");var _20d=!_20c?"nextElementSibling":"nextSibling";var _20e=!_20c?"previousElementSibling":"previousSibling";var _20f=(_20c?_201:_1ea);var _210=function(node){while(node=node[_20e]){if(_20f(node)){return false;}}return true;};var _211=function(node){while(node=node[_20d]){if(_20f(node)){return false;}}return true;};var _212=function(node){var root=node.parentNode;var i=0,tret=root[_1e7],ci=(node["_i"]||-1),cl=(root["_l"]||-1);if(!tret){return -1;}var l=tret.length;if(cl==l&&ci>=0&&cl>=0){return ci;}root["_l"]=l;ci=-1;for(var te=root["firstElementChild"]||root["firstChild"];te;te=te[_20d]){if(_20f(te)){te["_i"]=++i;if(node===te){ci=i;}}}return ci;};var _213=function(elem){return !((_212(elem))%2);};var _214=function(elem){return ((_212(elem))%2);};var _215={"checked":function(name,_216){return function(elem){return !!("checked" in elem?elem.checked:elem.selected);};},"first-child":function(){return _210;},"last-child":function(){return _211;},"only-child":function(name,_217){return function(node){if(!_210(node)){return false;}if(!_211(node)){return false;}return true;};},"empty":function(name,_218){return function(elem){var cn=elem.childNodes;var cnl=elem.childNodes.length;for(var x=cnl-1;x>=0;x--){var nt=cn[x].nodeType;if((nt===1)||(nt==3)){return false;}}return true;};},"contains":function(name,_219){var cz=_219.charAt(0);if(cz=="\""||cz=="'"){_219=_219.slice(1,-1);}return function(elem){return (elem.innerHTML.indexOf(_219)>=0);};},"not":function(name,_21a){var p=_1eb(_21a)[0];var _21b={el:1};if(p.tag!="*"){_21b.tag=1;}if(!p.classes.length){_21b.classes=1;}var ntf=_21c(p,_21b);return function(elem){return (!ntf(elem));};},"nth-child":function(name,_21d){var pi=parseInt;if(_21d=="odd"){return _214;}else{if(_21d=="even"){return _213;}}if(_21d.indexOf("n")!=-1){var _21e=_21d.split("n",2);var pred=_21e[0]?((_21e[0]=="-")?-1:pi(_21e[0])):1;var idx=_21e[1]?pi(_21e[1]):0;var lb=0,ub=-1;if(pred>0){if(idx<0){idx=(idx%pred)&&(pred+(idx%pred));}else{if(idx>0){if(idx>=pred){lb=idx-idx%pred;}idx=idx%pred;}}}else{if(pred<0){pred*=-1;if(idx>0){ub=idx;idx=idx%pred;}}}if(pred>0){return function(elem){var i=_212(elem);return (i>=lb)&&(ub<0||i<=ub)&&((i%pred)==idx);};}else{_21d=idx;}}var _21f=pi(_21d);return function(elem){return (_212(elem)==_21f);};}};var _220=(d.isIE<9||(dojo.isIE&&dojo.isQuirks))?function(cond){var clc=cond.toLowerCase();if(clc=="class"){cond="className";}return function(elem){return (_1e9?elem.getAttribute(cond):elem[cond]||elem[clc]);};}:function(cond){return function(elem){return (elem&&elem.getAttribute&&elem.hasAttribute(cond));};};var _21c=function(_221,_222){if(!_221){return _1ea;}_222=_222||{};var ff=null;if(!("el" in _222)){ff=_1fd(ff,_201);}if(!("tag" in _222)){if(_221.tag!="*"){ff=_1fd(ff,function(elem){return (elem&&(elem.tagName==_221.getTag()));});}}if(!("classes" in _222)){each(_221.classes,function(_223,idx,arr){var re=new RegExp("(?:^|\\s)"+_223+"(?:\\s|$)");ff=_1fd(ff,function(elem){return re.test(elem.className);});ff.count=idx;});}if(!("pseudos" in _222)){each(_221.pseudos,function(_224){var pn=_224.name;if(_215[pn]){ff=_1fd(ff,_215[pn](pn,_224.value));}});}if(!("attrs" in _222)){each(_221.attrs,function(attr){var _225;var a=attr.attr;if(attr.type&&_204[attr.type]){_225=_204[attr.type](a,attr.matchFor);}else{if(a.length){_225=_220(a);}}if(_225){ff=_1fd(ff,_225);}});}if(!("id" in _222)){if(_221.id){ff=_1fd(ff,function(elem){return (!!elem&&(elem.id==_221.id));});}}if(!ff){if(!("default" in _222)){ff=_1ea;}}return ff;};var _226=function(_227){return function(node,ret,bag){while(node=node[_20d]){if(_20c&&(!_201(node))){continue;}if((!bag||_228(node,bag))&&_227(node)){ret.push(node);}break;}return ret;};};var _229=function(_22a){return function(root,ret,bag){var te=root[_20d];while(te){if(_20f(te)){if(bag&&!_228(te,bag)){break;}if(_22a(te)){ret.push(te);}}te=te[_20d];}return ret;};};var _22b=function(_22c){_22c=_22c||_1ea;return function(root,ret,bag){var te,x=0,tret=root[_1e7];while(te=tret[x++]){if(_20f(te)&&(!bag||_228(te,bag))&&(_22c(te,x))){ret.push(te);}}return ret;};};var _22d=function(node,root){var pn=node.parentNode;while(pn){if(pn==root){break;}pn=pn.parentNode;}return !!pn;};var _22e={};var _22f=function(_230){var _231=_22e[_230.query];if(_231){return _231;}var io=_230.infixOper;var oper=(io?io.oper:"");var _232=_21c(_230,{el:1});var qt=_230.tag;var _233=("*"==qt);var ecs=_1e5()["getElementsByClassName"];if(!oper){if(_230.id){_232=(!_230.loops&&_233)?_1ea:_21c(_230,{el:1,id:1});_231=function(root,arr){var te=d.byId(_230.id,(root.ownerDocument||root));if(!te||!_232(te)){return;}if(9==root.nodeType){return _200(te,arr);}else{if(_22d(te,root)){return _200(te,arr);}}};}else{if(ecs&&/\{\s*\[native code\]\s*\}/.test(String(ecs))&&_230.classes.length&&!_1e6){_232=_21c(_230,{el:1,classes:1,id:1});var _234=_230.classes.join(" ");_231=function(root,arr,bag){var ret=_200(0,arr),te,x=0;var tret=root.getElementsByClassName(_234);while((te=tret[x++])){if(_232(te,root)&&_228(te,bag)){ret.push(te);}}return ret;};}else{if(!_233&&!_230.loops){_231=function(root,arr,bag){var ret=_200(0,arr),te,x=0;var tret=root.getElementsByTagName(_230.getTag());while((te=tret[x++])){if(_228(te,bag)){ret.push(te);}}return ret;};}else{_232=_21c(_230,{el:1,tag:1,id:1});_231=function(root,arr,bag){var ret=_200(0,arr),te,x=0;var tret=root.getElementsByTagName(_230.getTag());while((te=tret[x++])){if(_232(te,root)&&_228(te,bag)){ret.push(te);}}return ret;};}}}}else{var _235={el:1};if(_233){_235.tag=1;}_232=_21c(_230,_235);if("+"==oper){_231=_226(_232);}else{if("~"==oper){_231=_229(_232);}else{if(">"==oper){_231=_22b(_232);}}}}return _22e[_230.query]=_231;};var _236=function(root,_237){var _238=_200(root),qp,x,te,qpl=_237.length,bag,ret;for(var i=0;i<qpl;i++){ret=[];qp=_237[i];x=_238.length-1;if(x>0){bag={};ret.nozip=true;}var gef=_22f(qp);for(var j=0;(te=_238[j]);j++){gef(te,ret,bag);}if(!ret.length){break;}_238=ret;}return ret;};var _239={},_23a={};var _23b=function(_23c){var _23d=_1eb(trim(_23c));if(_23d.length==1){var tef=_22f(_23d[0]);return function(root){var r=tef(root,new qlc());if(r){r.nozip=true;}return r;};}return function(root){return _236(root,_23d);};};var nua=navigator.userAgent;var wk="WebKit/";var _23e=(d.isWebKit&&(nua.indexOf(wk)>0)&&(parseFloat(nua.split(wk)[1])>528));var _23f=d.isIE?"commentStrip":"nozip";var qsa="querySelectorAll";var _240=(!!_1e5()[qsa]&&(!d.isSafari||(d.isSafari>3.1)||_23e));var _241=/n\+\d|([^ ])?([>~+])([^ =])?/g;var _242=function(_243,pre,ch,post){return ch?(pre?pre+" ":"")+ch+(post?" "+post:""):_243;};var _244=function(_245,_246){_245=_245.replace(_241,_242);if(_240){var _247=_23a[_245];if(_247&&!_246){return _247;}}var _248=_239[_245];if(_248){return _248;}var qcz=_245.charAt(0);var _249=(-1==_245.indexOf(" "));if((_245.indexOf("#")>=0)&&(_249)){_246=true;}var _24a=(_240&&(!_246)&&(_1e8.indexOf(qcz)==-1)&&(!d.isIE||(_245.indexOf(":")==-1))&&(!(_1e6&&(_245.indexOf(".")>=0)))&&(_245.indexOf(":contains")==-1)&&(_245.indexOf(":checked")==-1)&&(_245.indexOf("|=")==-1));if(_24a){var tq=(_1e8.indexOf(_245.charAt(_245.length-1))>=0)?(_245+" *"):_245;return _23a[_245]=function(root){try{if(!((9==root.nodeType)||_249)){throw "";}var r=root[qsa](tq);r[_23f]=true;return r;}catch(e){return _244(_245,true)(root);}};}else{var _24b=_245.split(/\s*,\s*/);return _239[_245]=((_24b.length<2)?_23b(_245):function(root){var _24c=0,ret=[],tp;while((tp=_24b[_24c++])){ret=ret.concat(_23b(tp)(root));}return ret;});}};var _24d=0;var _24e=d.isIE?function(node){if(_1e9){return (node.getAttribute("_uid")||node.setAttribute("_uid",++_24d)||_24d);}else{return node.uniqueID;}}:function(node){return (node._uid||(node._uid=++_24d));};var _228=function(node,bag){if(!bag){return 1;}var id=_24e(node);if(!bag[id]){return bag[id]=1;}return 0;};var _24f="_zipIdx";var _250=function(arr){if(arr&&arr.nozip){return (qlc._wrap)?qlc._wrap(arr):arr;}var ret=new qlc();if(!arr||!arr.length){return ret;}if(arr[0]){ret.push(arr[0]);}if(arr.length<2){return ret;}_24d++;if(d.isIE&&_1e9){var _251=_24d+"";arr[0].setAttribute(_24f,_251);for(var x=1,te;te=arr[x];x++){if(arr[x].getAttribute(_24f)!=_251){ret.push(te);}te.setAttribute(_24f,_251);}}else{if(d.isIE&&arr.commentStrip){try{for(var x=1,te;te=arr[x];x++){if(_201(te)){ret.push(te);}}}catch(e){}}else{if(arr[0]){arr[0][_24f]=_24d;}for(var x=1,te;te=arr[x];x++){if(arr[x][_24f]!=_24d){ret.push(te);}te[_24f]=_24d;}}}return ret;};d.query=function(_252,root){qlc=d._NodeListCtor;if(!_252){return new qlc();}if(_252.constructor==qlc){return _252;}if(typeof _252!="string"){return new qlc(_252);}if(typeof root=="string"){root=d.byId(root);if(!root){return new qlc();}}root=root||_1e5();var od=root.ownerDocument||root.documentElement;_1e9=(root.contentType&&root.contentType=="application/xml")||(d.isOpera&&(root.doctype||od.toString()=="[object XMLDocument]"))||(!!od)&&(d.isIE?od.xml:(root.xmlVersion||od.xmlVersion));var r=_244(_252)(root);if(r&&r.nozip&&!qlc._wrap){return r;}return _250(r);};d.query.pseudos=_215;d._filterQueryResult=function(_253,_254,root){var _255=new d._NodeListCtor(),_256=_1eb(_254),_257=(_256.length==1&&!/[^\w#\.]/.test(_254))?_21c(_256[0]):function(node){return dojo.query(_254,root).indexOf(node)!=-1;};for(var x=0,te;te=_253[x];x++){if(_257(te)){_255.push(te);}}return _255;};};var _258=function(){acme={trim:function(str){str=str.replace(/^\s+/,"");for(var i=str.length-1;i>=0;i--){if(/\S/.test(str.charAt(i))){str=str.substring(0,i+1);break;}}return str;},forEach:function(arr,_259,_25a){if(!arr||!arr.length){return;}for(var i=0,l=arr.length;i<l;++i){_259.call(_25a||window,arr[i],i,arr);}},byId:function(id,doc){if(typeof id=="string"){return (doc||document).getElementById(id);}else{return id;}},doc:document,NodeList:Array};var n=navigator;var dua=n.userAgent;var dav=n.appVersion;var tv=parseFloat(dav);acme.isOpera=(dua.indexOf("Opera")>=0)?tv:undefined;acme.isKhtml=(dav.indexOf("Konqueror")>=0)?tv:undefined;acme.isWebKit=parseFloat(dua.split("WebKit/")[1])||undefined;acme.isChrome=parseFloat(dua.split("Chrome/")[1])||undefined;var _25b=Math.max(dav.indexOf("WebKit"),dav.indexOf("Safari"),0);if(_25b&&!acme.isChrome){acme.isSafari=parseFloat(dav.split("Version/")[1]);if(!acme.isSafari||parseFloat(dav.substr(_25b+7))<=419.3){acme.isSafari=2;}}if(document.all&&!acme.isOpera){acme.isIE=parseFloat(dav.split("MSIE ")[1])||undefined;}Array._wrap=function(arr){return arr;};return acme;};if(dojo){dojo.provide("dojo._base.query");_1e4(this["queryPortability"]||this["acme"]||dojo);}else{_1e4(this["queryPortability"]||this["acme"]||_258());}})();}if(!dojo._hasResource["dojo._base.xhr"]){dojo._hasResource["dojo._base.xhr"]=true;dojo.provide("dojo._base.xhr");(function(){var _25c=dojo,cfg=_25c.config;function _25d(obj,name,_25e){if(_25e===null){return;}var val=obj[name];if(typeof val=="string"){obj[name]=[val,_25e];}else{if(_25c.isArray(val)){val.push(_25e);}else{obj[name]=_25e;}}};dojo.fieldToObject=function(_25f){var ret=null;var item=_25c.byId(_25f);if(item){var _260=item.name;var type=(item.type||"").toLowerCase();if(_260&&type&&!item.disabled){if(type=="radio"||type=="checkbox"){if(item.checked){ret=item.value;}}else{if(item.multiple){ret=[];_25c.query("option",item).forEach(function(opt){if(opt.selected){ret.push(opt.value);}});}else{ret=item.value;}}}}return ret;};dojo.formToObject=function(_261){var ret={};var _262="file|submit|image|reset|button|";_25c.forEach(dojo.byId(_261).elements,function(item){var _263=item.name;var type=(item.type||"").toLowerCase();if(_263&&type&&_262.indexOf(type)==-1&&!item.disabled){_25d(ret,_263,_25c.fieldToObject(item));if(type=="image"){ret[_263+".x"]=ret[_263+".y"]=ret[_263].x=ret[_263].y=0;}}});return ret;};dojo.objectToQuery=function(map){var enc=encodeURIComponent;var _264=[];var _265={};for(var name in map){var _266=map[name];if(_266!=_265[name]){var _267=enc(name)+"=";if(_25c.isArray(_266)){for(var i=0;i<_266.length;i++){_264.push(_267+enc(_266[i]));}}else{_264.push(_267+enc(_266));}}}return _264.join("&");};dojo.formToQuery=function(_268){return _25c.objectToQuery(_25c.formToObject(_268));};dojo.formToJson=function(_269,_26a){return _25c.toJson(_25c.formToObject(_269),_26a);};dojo.queryToObject=function(str){var ret={};var qp=str.split("&");var dec=decodeURIComponent;_25c.forEach(qp,function(item){if(item.length){var _26b=item.split("=");var name=dec(_26b.shift());var val=dec(_26b.join("="));if(typeof ret[name]=="string"){ret[name]=[ret[name]];}if(_25c.isArray(ret[name])){ret[name].push(val);}else{ret[name]=val;}}});return ret;};dojo._blockAsync=false;var _26c=_25c._contentHandlers=dojo.contentHandlers={text:function(xhr){return xhr.responseText;},json:function(xhr){return _25c.fromJson(xhr.responseText||null);},"json-comment-filtered":function(xhr){if(!dojo.config.useCommentedJson){console.warn("Consider using the standard mimetype:application/json."+" json-commenting can introduce security issues. To"+" decrease the chances of hijacking, use the standard the 'json' handler and"+" prefix your json with: {}&&\n"+"Use djConfig.useCommentedJson=true to turn off this message.");}var _26d=xhr.responseText;var _26e=_26d.indexOf("/*");var _26f=_26d.lastIndexOf("*/");if(_26e==-1||_26f==-1){throw new Error("JSON was not comment filtered");}return _25c.fromJson(_26d.substring(_26e+2,_26f));},javascript:function(xhr){return _25c.eval(xhr.responseText);},xml:function(xhr){var _270=xhr.responseXML;if(_25c.isIE&&(!_270||!_270.documentElement)){var ms=function(n){return "MSXML"+n+".DOMDocument";};var dp=["Microsoft.XMLDOM",ms(6),ms(4),ms(3),ms(2)];_25c.some(dp,function(p){try{var dom=new ActiveXObject(p);dom.async=false;dom.loadXML(xhr.responseText);_270=dom;}catch(e){return false;}return true;});}return _270;},"json-comment-optional":function(xhr){if(xhr.responseText&&/^[^{\[]*\/\*/.test(xhr.responseText)){return _26c["json-comment-filtered"](xhr);}else{return _26c["json"](xhr);}}};dojo._ioSetArgs=function(args,_271,_272,_273){var _274={args:args,url:args.url};var _275=null;if(args.form){var form=_25c.byId(args.form);var _276=form.getAttributeNode("action");_274.url=_274.url||(_276?_276.value:null);_275=_25c.formToObject(form);}var _277=[{}];if(_275){_277.push(_275);}if(args.content){_277.push(args.content);}if(args.preventCache){_277.push({"dojo.preventCache":new Date().valueOf()});}_274.query=_25c.objectToQuery(_25c.mixin.apply(null,_277));_274.handleAs=args.handleAs||"text";var d=new _25c.Deferred(_271);d.addCallbacks(_272,function(_278){return _273(_278,d);});var ld=args.load;if(ld&&_25c.isFunction(ld)){d.addCallback(function(_279){return ld.call(args,_279,_274);});}var err=args.error;if(err&&_25c.isFunction(err)){d.addErrback(function(_27a){return err.call(args,_27a,_274);});}var _27b=args.handle;if(_27b&&_25c.isFunction(_27b)){d.addBoth(function(_27c){return _27b.call(args,_27c,_274);});}if(cfg.ioPublish&&_25c.publish&&_274.args.ioPublish!==false){d.addCallbacks(function(res){_25c.publish("/dojo/io/load",[d,res]);return res;},function(res){_25c.publish("/dojo/io/error",[d,res]);return res;});d.addBoth(function(res){_25c.publish("/dojo/io/done",[d,res]);return res;});}d.ioArgs=_274;return d;};var _27d=function(dfd){dfd.canceled=true;var xhr=dfd.ioArgs.xhr;var _27e=typeof xhr.abort;if(_27e=="function"||_27e=="object"||_27e=="unknown"){xhr.abort();}var err=dfd.ioArgs.error;if(!err){err=new Error("xhr cancelled");err.dojoType="cancel";}return err;};var _27f=function(dfd){var ret=_26c[dfd.ioArgs.handleAs](dfd.ioArgs.xhr);return ret===undefined?null:ret;};var _280=function(_281,dfd){if(!dfd.ioArgs.args.failOk){console.error(_281);}return _281;};var _282=null;var _283=[];var _284=0;var _285=function(dfd){if(_284<=0){_284=0;if(cfg.ioPublish&&_25c.publish&&(!dfd||dfd&&dfd.ioArgs.args.ioPublish!==false)){_25c.publish("/dojo/io/stop");}}};var _286=function(){var now=(new Date()).getTime();if(!_25c._blockAsync){for(var i=0,tif;i<_283.length&&(tif=_283[i]);i++){var dfd=tif.dfd;var func=function(){if(!dfd||dfd.canceled||!tif.validCheck(dfd)){_283.splice(i--,1);_284-=1;}else{if(tif.ioCheck(dfd)){_283.splice(i--,1);tif.resHandle(dfd);_284-=1;}else{if(dfd.startTime){if(dfd.startTime+(dfd.ioArgs.args.timeout||0)<now){_283.splice(i--,1);var err=new Error("timeout exceeded");err.dojoType="timeout";dfd.errback(err);dfd.cancel();_284-=1;}}}}};if(dojo.config.debugAtAllCosts){func.call(this);}else{try{func.call(this);}catch(e){dfd.errback(e);}}}}_285(dfd);if(!_283.length){clearInterval(_282);_282=null;return;}};dojo._ioCancelAll=function(){try{_25c.forEach(_283,function(i){try{i.dfd.cancel();}catch(e){}});}catch(e){}};if(_25c.isIE){_25c.addOnWindowUnload(_25c._ioCancelAll);}_25c._ioNotifyStart=function(dfd){if(cfg.ioPublish&&_25c.publish&&dfd.ioArgs.args.ioPublish!==false){if(!_284){_25c.publish("/dojo/io/start");}_284+=1;_25c.publish("/dojo/io/send",[dfd]);}};_25c._ioWatch=function(dfd,_287,_288,_289){var args=dfd.ioArgs.args;if(args.timeout){dfd.startTime=(new Date()).getTime();}_283.push({dfd:dfd,validCheck:_287,ioCheck:_288,resHandle:_289});if(!_282){_282=setInterval(_286,50);}if(args.sync){_286();}};var _28a="application/x-www-form-urlencoded";var _28b=function(dfd){return dfd.ioArgs.xhr.readyState;};var _28c=function(dfd){return 4==dfd.ioArgs.xhr.readyState;};var _28d=function(dfd){var xhr=dfd.ioArgs.xhr;if(_25c._isDocumentOk(xhr)){dfd.callback(dfd);}else{var err=new Error("Unable to load "+dfd.ioArgs.url+" status:"+xhr.status);err.status=xhr.status;err.responseText=xhr.responseText;dfd.errback(err);}};dojo._ioAddQueryToUrl=function(_28e){if(_28e.query.length){_28e.url+=(_28e.url.indexOf("?")==-1?"?":"&")+_28e.query;_28e.query=null;}};dojo.xhr=function(_28f,args,_290){var dfd=_25c._ioSetArgs(args,_27d,_27f,_280);var _291=dfd.ioArgs;var xhr=_291.xhr=_25c._xhrObj(_291.args);if(!xhr){dfd.cancel();return dfd;}if("postData" in args){_291.query=args.postData;}else{if("putData" in args){_291.query=args.putData;}else{if("rawBody" in args){_291.query=args.rawBody;}else{if((arguments.length>2&&!_290)||"POST|PUT".indexOf(_28f.toUpperCase())==-1){_25c._ioAddQueryToUrl(_291);}}}}xhr.open(_28f,_291.url,args.sync!==true,args.user||undefined,args.password||undefined);if(args.headers){for(var hdr in args.headers){if(hdr.toLowerCase()==="content-type"&&!args.contentType){args.contentType=args.headers[hdr];}else{if(args.headers[hdr]){xhr.setRequestHeader(hdr,args.headers[hdr]);}}}}xhr.setRequestHeader("Content-Type",args.contentType||_28a);if(!args.headers||!("X-Requested-With" in args.headers)){xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");}_25c._ioNotifyStart(dfd);if(dojo.config.debugAtAllCosts){xhr.send(_291.query);}else{try{xhr.send(_291.query);}catch(e){_291.error=e;dfd.cancel();}}_25c._ioWatch(dfd,_28b,_28c,_28d);xhr=null;return dfd;};dojo.xhrGet=function(args){return _25c.xhr("GET",args);};dojo.rawXhrPost=dojo.xhrPost=function(args){return _25c.xhr("POST",args,true);};dojo.rawXhrPut=dojo.xhrPut=function(args){return _25c.xhr("PUT",args,true);};dojo.xhrDelete=function(args){return _25c.xhr("DELETE",args);};})();}if(!dojo._hasResource["dojo._base.fx"]){dojo._hasResource["dojo._base.fx"]=true;dojo.provide("dojo._base.fx");(function(){var d=dojo;var _292=d._mixin;dojo._Line=function(_293,end){this.start=_293;this.end=end;};dojo._Line.prototype.getValue=function(n){return ((this.end-this.start)*n)+this.start;};dojo.Animation=function(args){_292(this,args);if(d.isArray(this.curve)){this.curve=new d._Line(this.curve[0],this.curve[1]);}};d._Animation=d.Animation;d.extend(dojo.Animation,{duration:350,repeat:0,rate:20,_percent:0,_startRepeatCount:0,_getStep:function(){var _294=this._percent,_295=this.easing;return _295?_295(_294):_294;},_fire:function(evt,args){var a=args||[];if(this[evt]){if(d.config.debugAtAllCosts){this[evt].apply(this,a);}else{try{this[evt].apply(this,a);}catch(e){console.error("exception in animation handler for:",evt);console.error(e);}}}return this;},play:function(_296,_297){var _298=this;if(_298._delayTimer){_298._clearTimer();}if(_297){_298._stopTimer();_298._active=_298._paused=false;_298._percent=0;}else{if(_298._active&&!_298._paused){return _298;}}_298._fire("beforeBegin",[_298.node]);var de=_296||_298.delay,_299=dojo.hitch(_298,"_play",_297);if(de>0){_298._delayTimer=setTimeout(_299,de);return _298;}_299();return _298;},_play:function(_29a){var _29b=this;if(_29b._delayTimer){_29b._clearTimer();}_29b._startTime=new Date().valueOf();if(_29b._paused){_29b._startTime-=_29b.duration*_29b._percent;}_29b._active=true;_29b._paused=false;var _29c=_29b.curve.getValue(_29b._getStep());if(!_29b._percent){if(!_29b._startRepeatCount){_29b._startRepeatCount=_29b.repeat;}_29b._fire("onBegin",[_29c]);}_29b._fire("onPlay",[_29c]);_29b._cycle();return _29b;},pause:function(){var _29d=this;if(_29d._delayTimer){_29d._clearTimer();}_29d._stopTimer();if(!_29d._active){return _29d;}_29d._paused=true;_29d._fire("onPause",[_29d.curve.getValue(_29d._getStep())]);return _29d;},gotoPercent:function(_29e,_29f){var _2a0=this;_2a0._stopTimer();_2a0._active=_2a0._paused=true;_2a0._percent=_29e;if(_29f){_2a0.play();}return _2a0;},stop:function(_2a1){var _2a2=this;if(_2a2._delayTimer){_2a2._clearTimer();}if(!_2a2._timer){return _2a2;}_2a2._stopTimer();if(_2a1){_2a2._percent=1;}_2a2._fire("onStop",[_2a2.curve.getValue(_2a2._getStep())]);_2a2._active=_2a2._paused=false;return _2a2;},status:function(){if(this._active){return this._paused?"paused":"playing";}return "stopped";},_cycle:function(){var _2a3=this;if(_2a3._active){var curr=new Date().valueOf();var step=(curr-_2a3._startTime)/(_2a3.duration);if(step>=1){step=1;}_2a3._percent=step;if(_2a3.easing){step=_2a3.easing(step);}_2a3._fire("onAnimate",[_2a3.curve.getValue(step)]);if(_2a3._percent<1){_2a3._startTimer();}else{_2a3._active=false;if(_2a3.repeat>0){_2a3.repeat--;_2a3.play(null,true);}else{if(_2a3.repeat==-1){_2a3.play(null,true);}else{if(_2a3._startRepeatCount){_2a3.repeat=_2a3._startRepeatCount;_2a3._startRepeatCount=0;}}}_2a3._percent=0;_2a3._fire("onEnd",[_2a3.node]);!_2a3.repeat&&_2a3._stopTimer();}}return _2a3;},_clearTimer:function(){clearTimeout(this._delayTimer);delete this._delayTimer;}});var ctr=0,_2a4=null,_2a5={run:function(){}};d.extend(d.Animation,{_startTimer:function(){if(!this._timer){this._timer=d.connect(_2a5,"run",this,"_cycle");ctr++;}if(!_2a4){_2a4=setInterval(d.hitch(_2a5,"run"),this.rate);}},_stopTimer:function(){if(this._timer){d.disconnect(this._timer);this._timer=null;ctr--;}if(ctr<=0){clearInterval(_2a4);_2a4=null;ctr=0;}}});var _2a6=d.isIE?function(node){var ns=node.style;if(!ns.width.length&&d.style(node,"width")=="auto"){ns.width="auto";}}:function(){};dojo._fade=function(args){args.node=d.byId(args.node);var _2a7=_292({properties:{}},args),_2a8=(_2a7.properties.opacity={});_2a8.start=!("start" in _2a7)?function(){return +d.style(_2a7.node,"opacity")||0;}:_2a7.start;_2a8.end=_2a7.end;var anim=d.animateProperty(_2a7);d.connect(anim,"beforeBegin",d.partial(_2a6,_2a7.node));return anim;};dojo.fadeIn=function(args){return d._fade(_292({end:1},args));};dojo.fadeOut=function(args){return d._fade(_292({end:0},args));};dojo._defaultEasing=function(n){return 0.5+((Math.sin((n+1.5)*Math.PI))/2);};var _2a9=function(_2aa){this._properties=_2aa;for(var p in _2aa){var prop=_2aa[p];if(prop.start instanceof d.Color){prop.tempColor=new d.Color();}}};_2a9.prototype.getValue=function(r){var ret={};for(var p in this._properties){var prop=this._properties[p],_2ab=prop.start;if(_2ab instanceof d.Color){ret[p]=d.blendColors(_2ab,prop.end,r,prop.tempColor).toCss();}else{if(!d.isArray(_2ab)){ret[p]=((prop.end-_2ab)*r)+_2ab+(p!="opacity"?prop.units||"px":0);}}}return ret;};dojo.animateProperty=function(args){var n=args.node=d.byId(args.node);if(!args.easing){args.easing=d._defaultEasing;}var anim=new d.Animation(args);d.connect(anim,"beforeBegin",anim,function(){var pm={};for(var p in this.properties){if(p=="width"||p=="height"){this.node.display="block";}var prop=this.properties[p];if(d.isFunction(prop)){prop=prop(n);}prop=pm[p]=_292({},(d.isObject(prop)?prop:{end:prop}));if(d.isFunction(prop.start)){prop.start=prop.start(n);}if(d.isFunction(prop.end)){prop.end=prop.end(n);}var _2ac=(p.toLowerCase().indexOf("color")>=0);function _2ad(node,p){var v={height:node.offsetHeight,width:node.offsetWidth}[p];if(v!==undefined){return v;}v=d.style(node,p);return (p=="opacity")?+v:(_2ac?v:parseFloat(v));};if(!("end" in prop)){prop.end=_2ad(n,p);}else{if(!("start" in prop)){prop.start=_2ad(n,p);}}if(_2ac){prop.start=new d.Color(prop.start);prop.end=new d.Color(prop.end);}else{prop.start=(p=="opacity")?+prop.start:parseFloat(prop.start);}}this.curve=new _2a9(pm);});d.connect(anim,"onAnimate",d.hitch(d,"style",anim.node));return anim;};dojo.anim=function(node,_2ae,_2af,_2b0,_2b1,_2b2){return d.animateProperty({node:node,duration:_2af||d.Animation.prototype.duration,properties:_2ae,easing:_2b0,onEnd:_2b1}).play(_2b2||0);};})();}if(!dojo._hasResource["dojo._base.browser"]){dojo._hasResource["dojo._base.browser"]=true;dojo.provide("dojo._base.browser");dojo.forEach(dojo.config.require,function(i){dojo["require"](i);});}if(!dojo._hasResource["dojo._base"]){dojo._hasResource["dojo._base"]=true;dojo.provide("dojo._base");}if(dojo.isBrowser&&(document.readyState==="complete"||dojo.config.afterOnLoad)){window.setTimeout(dojo._loadInit,100);}})();
  djConfig = {};
})();
/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

(function(dojo) {
if(!dojo._hasResource["dojo.window"]){
dojo._hasResource["dojo.window"]=true;
dojo.provide("dojo.window");
dojo.getObject("window",true,dojo);
dojo.window.getBox=function(){
var _1=(dojo.doc.compatMode=="BackCompat")?dojo.body():dojo.doc.documentElement;
var _2=dojo._docScroll();
return {w:_1.clientWidth,h:_1.clientHeight,l:_2.x,t:_2.y};
};
dojo.window.get=function(_3){
if(dojo.isIE&&window!==document.parentWindow){
_3.parentWindow.execScript("document._parentWindow = window;","Javascript");
var _4=_3._parentWindow;
_3._parentWindow=null;
return _4;
}
return _3.parentWindow||_3.defaultView;
};
dojo.window.scrollIntoView=function(_5,_6){
try{
_5=dojo.byId(_5);
var _7=_5.ownerDocument||dojo.doc,_8=_7.body||dojo.body(),_9=_7.documentElement||_8.parentNode,_a=dojo.isIE,_b=dojo.isWebKit;
if((!(dojo.isMoz||_a||_b||dojo.isOpera)||_5==_8||_5==_9)&&(typeof _5.scrollIntoView!="undefined")){
_5.scrollIntoView(false);
return;
}
var _c=_7.compatMode=="BackCompat",_d=(_a>=9&&_5.ownerDocument.parentWindow.frameElement)?((_9.clientHeight>0&&_9.clientWidth>0&&(_8.clientHeight==0||_8.clientWidth==0||_8.clientHeight>_9.clientHeight||_8.clientWidth>_9.clientWidth))?_9:_8):(_c?_8:_9),_e=_b?_8:_d,_f=_d.clientWidth,_10=_d.clientHeight,rtl=!dojo._isBodyLtr(),_11=_6||dojo.position(_5),el=_5.parentNode,_12=function(el){
return ((_a<=6||(_a&&_c))?false:(dojo.style(el,"position").toLowerCase()=="fixed"));
};
if(_12(_5)){
return;
}
while(el){
if(el==_8){
el=_e;
}
var _13=dojo.position(el),_14=_12(el);
if(el==_e){
_13.w=_f;
_13.h=_10;
if(_e==_9&&_a&&rtl){
_13.x+=_e.offsetWidth-_13.w;
}
if(_13.x<0||!_a){
_13.x=0;
}
if(_13.y<0||!_a){
_13.y=0;
}
}else{
var pb=dojo._getPadBorderExtents(el);
_13.w-=pb.w;
_13.h-=pb.h;
_13.x+=pb.l;
_13.y+=pb.t;
var _15=el.clientWidth,_16=_13.w-_15;
if(_15>0&&_16>0){
_13.w=_15;
_13.x+=(rtl&&(_a||el.clientLeft>pb.l))?_16:0;
}
_15=el.clientHeight;
_16=_13.h-_15;
if(_15>0&&_16>0){
_13.h=_15;
}
}
if(_14){
if(_13.y<0){
_13.h+=_13.y;
_13.y=0;
}
if(_13.x<0){
_13.w+=_13.x;
_13.x=0;
}
if(_13.y+_13.h>_10){
_13.h=_10-_13.y;
}
if(_13.x+_13.w>_f){
_13.w=_f-_13.x;
}
}
var l=_11.x-_13.x,t=_11.y-Math.max(_13.y,0),r=l+_11.w-_13.w,bot=t+_11.h-_13.h;
if(r*l>0){
var s=Math[l<0?"max":"min"](l,r);
if(rtl&&((_a==8&&!_c)||_a>=9)){
s=-s;
}
_11.x+=el.scrollLeft;
el.scrollLeft+=s;
_11.x-=el.scrollLeft;
}
if(bot*t>0){
_11.y+=el.scrollTop;
el.scrollTop+=Math[t<0?"max":"min"](t,bot);
_11.y-=el.scrollTop;
}
el=(el!=_e)&&!_14&&el.parentNode;
}
}
catch(error){
console.error("scrollIntoView: "+error);
_5.scrollIntoView(false);
}
};
}
})(ndojo);
(function(dojo) {
    dojo.require('dojo.window');
    dojo.declare("NextendWindow", null, {
        constructor: function(args) {
            dojo.mixin(this, args);
            if(typeof window.nextendwindows == 'undefined'){
                window.nextendwindows = [];
            }
            this.container = dojo.query('.nextend-window-container', this.node)[0];
            this.containerinner = dojo.query('.nextend-window-container-inner', this.node)[0];
            this.showed = false;
            this.onResize();
            dojo.connect(window, 'resize', this, 'onResize');

            dojo.connect(document, 'click', function(e) {
                window.nextendwindow = false;
            });

            dojo.connect(this.save, 'click', this, 'hideOverlay');
            if (this.button) dojo.connect(this.button, 'click', this, 'showOverlay');
        },

        onResize: function() {
            this.vs = dojo.window.getBox();
            if (this.showed) this.showOverlay();
        },

        showOverlay: function() {
            dojo.style(this.node, 'display', 'block');
            dojo.style(this.node, 'visibility', 'visible');
            dojo.addClass(this.node, 'active');
            var vs = this.vs;
            dojo.contentBox(this.node, {
                w: vs.w,
                h: vs.h
            });
            dojo.marginBox(this.container, {
                w: vs.w,
                h: vs.h
            });
            
            var h = dojo.position(this.container).h;
            dojo.marginBox(this.containerinner, {
                h: h-70
            });

            if (this.showed == false) this.onResize();
            this.showed = true;
            window.nextendwindows.push(this);
            setTimeout(dojo.hitch(this, 'fireEvent', window, 'resize'), 500);
        },

        hideOverlay: function(e) {
            if(typeof window.nextendajax != 'undefined' && window.nextendajax > 0){
                dojo.stopEvent(e);
                alert('Please wait while processing AJAX call!');
                return;
            }
            if (e) {
                if (window.nextendwindow) return;
                window.nextendwindow = true;
            }
            this.showed = false;
            window.nextendwindows.pop();
            dojo.removeClass(this.node, 'active');
            var _this = this;
            setTimeout(function(){
                dojo.style(_this.node, 'visibility', 'hidden');
                dojo.style(_this.node, 'height', '1px');
            }, 450);
            this.onHide();
        },

        onHide: function() {

        }
    });
    
    /*
     * Close top window on ESC
     */
    dojo.connect(document, 'keyup', function(e){
        if(e.which == 27 && typeof window.nextendwindows != 'undefined' && window.nextendwindows.length > 0){
            window.nextendwindows[window.nextendwindows.length-1].hideOverlay(e);
        }
    });
})(ndojo);;
window.NfireEvent = function(element, event) {
    if (document.createEventObject) {
        if (njQuery)
            return njQuery(element).trigger(event);
        // dispatch for IE
        var evt = document.createEventObject();
        return element.fireEvent('on' + event, evt);
    } else {
        // dispatch for firefox + others
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent(event, true, true); // event type,bubbling,cancelable
        return !element.dispatchEvent(evt);
    }
};
(function(dojo) {
    dojo.declare("NextendElement", null, {
        constructor: function(args) {

        },
        fireEvent: window.NfireEvent
    });
})(ndojo);(function(dojo) {
    dojo.declare("NextendElementList", NextendElement, {
        constructor: function(args) {
            dojo.mixin(this, args);
            
            this.select = dojo.byId(this.hidden+'_select');
            this.hidden = dojo.byId(this.hidden);
            
            this.select.dojohandle = dojo.connect(this.select, 'change', this, 'onSelect');
            
            this.hidden.select = this.select;
            
            dojo.connect(this.hidden, 'change', this, 'reset');
            this.reset();
        },

        reset: function() {
            if(this.hidden.value != this.value){
                this.value = this.hidden.value;
                var value = this.value.split('||');
                var items = dojo.query('option', this.select);
                for(var i = 0; i < items.length; i++){
                    if(value.indexOf(items[i].value) != -1){
                        items[i].selected = true;
                    }else{
                        items[i].selected = false;
                    }
                }
                this.fireEvent(this.hidden, 'change');
            }
            if(!this.multiple){
                var selected = this.select.options[this.select.selectedIndex].value;
                if(selected != this.hidden.value){
                    this.hidden.value = selected;
                    this.fireEvent(this.hidden, 'change');
                }
            }
        },
        
        onSelect: function(){
            var selected = [];
            var items = dojo.query('option', this.select);
            for(var i = 0; i < items.length; i++){
                if(items[i].selected){
                    selected.push(items[i].value);
                }
            }
            this.hidden.value = selected.join('||');
            this.reset();
        }
    });
})(ndojo);(function(dojo) {
    dojo.declare("NextendElementSubform", NextendElement, {
        constructor: function(args) {
            dojo.mixin(this, args);
            this.hidden = dojo.byId(this.hidden);
            this.form = this.hidden.form.nextendform;
            var name = dojo.attr(this.hidden, 'name').match(/\[(.*?)\]/g);
            
            if(name){
                this.name = name[name.length-1].substr(1,name[name.length-1].length-2);
                this.panel = dojo.byId('nextend-'+this.name+'-panel');
            }else{
                return;
            }
            
            dojo.connect(this.hidden, 'change', this, 'reset');
            this.reset();
        },

        reset: function() {
            if (this.value != this.hidden.value) {
                this.value = this.hidden.value;
                this.loadSubform();
            }
        },
        
        loadSubform: function(){
            if(typeof window.nextendajax == 'undefined') window.nextendajax = 0;
            window.nextendajax++;
            dojo.addClass(this.hidden.parentNode, 'nextend-ajax-active');
            var orig = [];
            if(this.value == this.origvalue){
                orig = dojo.clone(this.form.data);
            }
            var data = {
                orig: orig,
                control_name: this.form.control_name,
                xml: (typeof this.xml === 'undefined' ? this.form.xml : this.xml),
                tab: this.tab,
                name: this.name,
                value: this.hidden.value,
                loadedJSS: this.form.loadedJSS,
                loadedCSS: this.form.loadedCSS
            };
            var d = {};
            d.data = dojo.toJson(data);
            d.get = dojo.toJson(this.URLToArray(location.href));
            if(typeof this.form.extra != 'undefined'){
                dojo.mixin(d, this.form.extra);
            }
            dojo.mixin(d, {
                nextendajax: 1,
                mode: 'subform'
            });
            var newd = {};
            for(k in d){
                if(typeof d[k] == 'string' || typeof d[k] == 'number') newd[k] = d[k];
            }
            
            var xhrArgs = {
                url: this.form.url,
                handleAs: 'json',
                content: newd,
                load: dojo.hitch(this, 'load'),
                error: dojo.hitch(this, 'error')
            };
            var deferred = dojo.xhrPost(xhrArgs);
        },
        
        load: function(response){
            this.panel.innerHTML = response.html;
            eval(response.scripts);
            dojo.removeClass(this.hidden.parentNode, 'nextend-ajax-active');
            window.nextendajax--;
            njQuery(window).trigger("resize");
        },
        
        error: function(){
            window.nextendajax--;
            alert('There was an error with the AJAX call. Please refresh the page!');
        },
        URLToArray: function(url) {
            var request = {};
            var pairs = url.substring(url.indexOf('?') + 1).split('&');
            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i].split('=');
                request[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
            }
            return request;
        }
    });
})(ndojo);(function(dojo) {
    dojo.declare("NextendElementMenuWithItems", NextendElement, {
        constructor: function(args) {
            this.value = '';
            dojo.mixin(this, args);
            this.value = this.value.split('|*|')[0];
            this.hidden = dojo.byId(this.hidden);
            this.mixed = this.hidden.nextendmixed;
            dojo.connect(this.hidden, 'change', this, 'refreshList');
        },
        
        refreshList: function(){
            var values = this.hidden.value.split('|*|');
            if(values[0] != this.value){
                this.value = values[0];
                this.removeOptions();
                this.createOptions(this.value);
            }
        },
        
        removeOptions: function(){
            var options = dojo.query('option', this.mixed.elements[1].select);
            for(var i = 1; i < options.length; i++){
                dojo.destroy(options[i]);
            }
            dojo.attr(options[0], 'selected', 'selected');
        },
        
        createOptions: function(value){
            var select = this.mixed.elements[1].select;
            var options = this.options[value];
            for(var i = 0; i < options.length; i++){
                dojo.create('option', {value: options[i][0], innerHTML: options[i][1]}, select);
            }
        }
        
        
    });
})(ndojo);(function(dojo) {
    dojo.declare("NextendElementMixed", NextendElement, {
        constructor: function(args) {
            dojo.mixin(this, args);
            this.value = '';
            this.hidden = dojo.byId(this.hidden);
            for (var i = 0; i < this.elements.length; i++) {
                this.elements[i] = dojo.byId(this.elements[i]);
                dojo.connect(this.elements[i], 'change', this, 'change');
            }
            this.reset();
            dojo.connect(this.hidden, 'change', this, 'reset');
            this.hidden.nextendmixed = this;
        },

        reset: function() {
            if (this.value != this.hidden.value) {
                this.value = this.hidden.value;
                var parts = this.value.split(this.separator);
                for (var i = 0; i < this.elements.length; i++) {
                    if (typeof parts[i] != "undefined") {
                        this.elements[i].value = parts[i];
                    }
                }
                for (var i = 0; i < this.elements.length; i++) {
                    this.fireEvent(this.elements[i], 'change');
                }
            }
        },

        change: function() {
            var value = '';
            for (var i = 0; i < this.elements.length; i++) {
                if (i != 0) value += this.separator;
                value += this.elements[i].value;
            }
            this.value = this.hidden.value = value;
            this.fireEvent(this.hidden, 'change');
        }
    });
})(ndojo);(function(dojo) {
    dojo.declare("NextendElementOnoff", NextendElement, {
        constructor: function(args) {
            dojo.mixin(this, args);
            this.value = -1;
            this.hidden = dojo.byId(this.hidden);

            dojo.connect(this.hidden, 'change', this, 'reset');

            this.reset();
            dojo.connect(this.hidden.parentNode, 'click', this, 'switchSelected');
        },

        reset: function() {
            if (this.value != this.hidden.value) {
                this.value = this.hidden.value;
                this.setSelected(this.value);
            }
        },

        setSelected: function(x) {
            if (x == 1) {
                dojo.addClass(this.hidden.parentNode, 'nextend-onoff-on');
            } else {
                dojo.removeClass(this.hidden.parentNode, 'nextend-onoff-on');
            }
        },

        switchSelected: function() {
            var val = 0;
            if (this.value == 1) val = 0;
            else val = 1;
            this.hidden.value = val;
            this.fireEvent(this.hidden, 'change');
        }
    });
})(ndojo);(function(dojo) {
    dojo.declare("NextendElementSkin", NextendElement, {
        constructor: function(args) {
            dojo.mixin(this, args);
            
            this.hidden = dojo.byId(this.hidden);
            this.select = this.hidden.select;
            this.origText = this.select.options[0].text;
            dojo.connect(this.hidden, 'change', this, 'loadSkin');
        },
        
        loadSkin: function(){
            if(this.hidden.value != '0' && this.skins[this.hidden.value]){
                var skin = this.skins[this.hidden.value];
                for (var k in skin) {
                    if (skin.hasOwnProperty(k)) {
                        var el = dojo.byId(this.preid+k);
                        if(el){
                            if(el.value.substr(0, 2) == '{"'){ // font
                                var orig = dojo.fromJson(el.value);
                                var font = dojo.fromJson(skin[k]);
                                for (var tab in font) {
                                    if (font.hasOwnProperty(tab)) {
                                        if(typeof font[tab].reset != 'undefined'){
                                            orig[tab] = {};
                                        }
                                        if(typeof orig[tab] == 'undefined') orig[tab] = {};
                                        for (var prop in font[tab]) {
                                            if (font[tab].hasOwnProperty(prop)) {
                                                orig[tab][prop] = font[tab][prop];
                                            }
                                        }
                                    }
                                }
                                el.value = dojo.toJson(orig);
                            }else{
                                el.value = skin[k];
                            }
                            this.fireEvent(el, 'change');
                        }
                    }
                };
                
                
                this.changeText('Done');
                this.select.selectedIndex = 0;
                this.fireEvent(this.select, 'change');
                setTimeout(dojo.hitch(this, 'changeText', this.origText), 3000);
            }
        },
        
        changeText: function(text){
            this.select.options[0].text = text;
        }
    });
})(ndojo);(function(dojo) {
    dojo.declare("NextendElementFontmanager", NextendElement, {
        constructor: function(args) {
            this.base64 = 0;
            dojo.mixin(this, args);
            this.hidden = dojo.byId(this.hidden);
            this.button = dojo.byId(this.button);
            this.importbtn = dojo.byId(this.importbtn);
            dojo.connect(this.importbtn, 'click', this, 'doImport');
            this.exportbtn = dojo.byId(this.exportbtn);
            dojo.connect(this.exportbtn, 'click', this, 'doExport');
            this.message = dojo.byId(this.message);
            this.fontmanager = window.nextendfontmanager;
            dojo.connect(this.button, 'click', this, 'showFontmanager');
            
            var importbuttons = dojo.query('.nextend-font-import');
            for(var i = 0; i < importbuttons.length; i++){
                dojo.style(importbuttons[i], 'visibility', 'hidden');
            }
        },
        
        showFontmanager: function(){
            this.fontmanager.firsttab = this.firsttab;
            this.fontmanager.show(this.tabs, this.translatedTabs, this.base64 ? Base64.decode(this.hidden.value) : this.hidden.value);
            this.fontmanager.onSave = dojo.hitch(this,'save');
        },
        
        save: function(value){
            this.hidden.value = this.base64 ? Base64.encode(value) : value;
            this.fontmanager.onSave = function(){};
        },
        
        doImport: function(){
            dojo.style(this.hidden, 'width', '100%'); 
            if(typeof window.fontmanagercopy != 'undefined'){
                this.hidden.value = window.fontmanagercopy;
                this.fireEvent(this.hidden, 'change');
                this.changeMessage(this.txt.importingdone);
            }else{
                dojo.attr(this.hidden, 'type', 'text');
                this.hidden.focus();
                this.hidden.select();
            }
        },
        
        doExport: function(){
            window.fontmanagercopy = this.hidden.value;
            this.changeMessage(this.txt.youcanimport);
            var importbuttons = dojo.query('.nextend-font-import');
            for(var i = 0; i < importbuttons.length; i++){
                dojo.style(importbuttons[i], 'visibility', 'visible');
            }
            //dojo.style(this.hidden, 'width', '100%'); 
            //dojo.attr(this.hidden, 'type', 'text');

            //this.hidden.focus();
            //this.hidden.select();
        },
        
        changeMessage: function(text){
            if(this.timeout) clearTimeout(this.timeout);
            this.message.innerHTML = text;
            this.timeout = setTimeout(dojo.hitch(this, 'changeMessage', ''), 5000);
        }
    });
})(ndojo);(function(dojo) {
    dojo.declare("NextendFontmanager", NextendElement, {
        
        defaults: {
            afont: 'Arial',
            color: '000000',
            size: '12|*|px',
            lineheight: 'normal',
            bold: 0,
            italic: 0,
            underline: 0,
            paddingleft: 0,
            align: 'left',
            tshadow: '0|*|0|*|0|*|000000FF'
        },
        
        constructor: function(args) {
            this.dataset = true;
            dojo.mixin(this, args);
            this.node = dojo.byId(this.node);
            if (typeof window.nextendfontmanager != 'undefined') {
                dojo.destroy(this.node);
                return;
            }
            window.nextendfontmanager = this;
            dojo.attr(this.node, 'id', 'nextend-fontmanager-lightbox');
            this.windowel = dojo.place(this.node, dojo.body());

            this.window = new NextendWindow({
                node: dojo.byId("nextend-fontmanager-lightbox"),
                save: dojo.byId("nextend-fontmanager-save"),
                onHide: dojo.hitch(this, 'save')
            });

            this.tabsnode = dojo.byId('nextend-fontmanager-tabs');
            
            this.preview = dojo.byId('nextend-fontmanager-preview');
            
            this.cleartabnode = dojo.byId('nextend-fontmanager-cleartab');
            dojo.connect(this.cleartabnode, 'click', this, 'clearTab');

            this.family = dojo.byId('fontmanagerfamily');
            dojo.connect(this.family, 'change', this, 'changeFamily');

            this.color = dojo.byId('fontmanagercolor');
            dojo.connect(this.color, 'change', this, 'changeColor');

            this.size = dojo.byId('fontmanagersize');
            dojo.connect(this.size, 'change', this, 'changeSize');

            this.lineheight = dojo.byId('fontmanagerlineheight');
            dojo.connect(this.lineheight, 'change', this, 'changeLineheight');
            
            this.decoration = dojo.byId('fontmanagerdecoration');
            dojo.connect(this.decoration, 'change', this, 'changeDecoration');
            
            this.paddingleft = dojo.byId('fontmanagerpaddingleft');
            dojo.connect(this.paddingleft, 'change', this, 'changePaddingleft');

            this.textalign = dojo.byId('fontmanagertextalign');
            dojo.connect(this.textalign, 'change', this, 'changeAlign');

            this.textshadow = dojo.byId('fontmanagertshadow');
            dojo.connect(this.textshadow, 'change', this, 'changeTextshadow');
            
            this.backgroundcolor = dojo.byId('nextend-fontmanager-backgroundcolor');
            njQuery(this.backgroundcolor).spectrum({
                showAlpha: this.alpha,
                preferredFormat: "hex6",
                showInput: true,
                showButtons: false,
                move: dojo.hitch(this, 'backgroundChange')
            });
            dojo.style(this.backgroundcolor, 'display', 'none');
        },
        
        show: function(tabs, translatedTabs, value){
            this.tabsnode.innerHTML = '';
            this.tabs = [];
            try{
                this.data = dojo.fromJson(value);
            }catch(e){
                this.data = {};    
            }
            this.currentTab = 0;
            for(var i = 0; i < tabs.length; i++){
                var selected = (i == this.currentTab ? ' selected' : '');
                var tab = dojo.create('div', {'class': 'nextend-tab'+selected, 'innerHTML': translatedTabs[i], 'value': tabs[i]}, this.tabsnode);
                dojo.connect(tab, 'click', dojo.hitch(this, 'changeTab', i));
                this.tabs.push(tab);
                if(typeof this.data[tabs[i]] == 'undefined') this.data[tabs[i]] = {};
            }
            this.loadTabSettings(0);
            var _this = this;
            setTimeout(function(){
              _this.window.showOverlay();
            }, 100);
        },
        
        save: function(){
            this.data.firsttab = this.firsttab;
            for(var key in this.data){
                if(key == 'firsttab') continue;
                if(typeof this.data[key].paddingleft == 'undefined'){
                    this.data[key].paddingleft = 0;
                }
            }
            this.onSave(dojo.toJson(this.data));
            this.data = null;
        },
        
        onSave: function(){},
        
        changeTab: function(i){
            if(i == this.currentTab) return;
            dojo.removeClass(this.tabs[this.currentTab], 'selected');
            this.currentTab = i;
            dojo.addClass(this.tabs[i], 'selected');
            this.loadTabSettings(i);
        },
        
        loadTabSettings: function(i){
            if(this.tabs[i].value == this.firsttab){
                dojo.style(this.cleartabnode, 'display', 'none');
            }else{
                dojo.style(this.cleartabnode, 'display', 'block');
            }
            this.dataset = false;
            var tab = this.tabs[i].value;
            var family = this.getProperty(tab,'afont').split('||'); // split for a while for compatibility
            this.family.value = family[0];
            this.fireEvent(this.family, 'change');
            
            this.color.value = this.getProperty(tab,'color');
            this.fireEvent(this.color, 'change');
            
            var size = this.getProperty(tab,'size').split('||'); // split for a while for compatibility
            this.size.value = size.join('|*|');
            this.fireEvent(this.size, 'change');
            
            this.lineheight.value = this.getProperty(tab,'lineheight');
            this.fireEvent(this.lineheight, 'change');
            
            var decoration = [];
            if(this.getProperty(tab,'bold') == 1)
                decoration.push('bold');
            if(this.getProperty(tab,'italic') == 1)
                decoration.push('italic');
            if(this.getProperty(tab,'underline') == 1)
                decoration.push('underline');
            this.decoration.value = decoration.join('||');
            this.fireEvent(this.decoration, 'change');
            
            this.paddingleft.value = this.getProperty(tab,'paddingleft');
            this.fireEvent(this.paddingleft, 'change');
            
            this.textalign.value = this.getProperty(tab,'align');
            this.fireEvent(this.textalign, 'change');
            
            var shadow = this.getProperty(tab,'tshadow').replace(/\|\|px/g, '');
            this.textshadow.value = shadow;
            this.fireEvent(this.textshadow, 'change');
            this.dataset = true;
        },
        
        getProperty: function(tab, prop){
            var value = this.data[tab];
            if(value && typeof value[prop] != 'undefined'){
                return value[prop];
            }else if(tab != this.firsttab){
                return this.getProperty(this.firsttab, prop);
            }
            if(console) console.log('Undefined '+tab+' property '+prop);
            return this.defaults[prop];
            return "";
        },
        
        setProperty: function(tab, prop, value){
            if(this.dataset) this.data[tab][prop] = value;
        },
        
        getCurrentProperty: function(prop, value){
            this.getProperty(this.tabs[this.currentTab].value, prop, value);
        },
        
        setCurrentProperty: function(prop, value){
            this.setProperty(this.tabs[this.currentTab].value, prop, value);
        },
        
        clearTab: function(){
            if(this.tabs[this.currentTab].value != this.firsttab){
                this.data[this.tabs[this.currentTab].value] = {};
                this.loadTabSettings(this.currentTab);
            }
        },

        changePreview: function(prop, value) {
            try{
                dojo.style(this.preview, prop, value);
            }catch(err){}
        },

        changeFamily: function() {
            var family = this.family.value;
            var re = /google\(.*?family=(.*?)\);\)/g;
            var match = null;
            while(match = re.exec(this.family.value)){
                dojo.create('link', {
                    rel: 'stylesheet',
                    type: 'text/css',
                    href: 'http://fonts.googleapis.com/css?family=' + match[1]
                }, dojo.body());
                
                var f = match[1].replace('+', ' ').match(/[a-zA-Z ]*/);
                family = family.replace(match[0], f[0]);
            }//google(Skranji:700&subset=latin,latin-ext)
            this.setCurrentProperty('afont', this.family.value);
            this.changePreview('fontFamily', family);
        },
        
        changeColor: function(){
            this.setCurrentProperty('color', this.color.value);
            var c = this.hex2rgba(this.color.value);
            this.changePreview('color', '#'+this.color.value.substr(0,6));
            this.changePreview('color', 'RGBA('+c[0]+','+c[1]+','+c[2]+','+c[3]+')');
        },

        changeSize: function() {
            this.setCurrentProperty('size', this.size.value.replace('|*|', '||'));
            this.changePreview('fontSize', this.size.value.replace('|*|', ''));
        },

        changeLineheight: function() {
            this.setCurrentProperty('lineheight', this.lineheight.value);
            this.changePreview('lineHeight', this.lineheight.value);
        },
        
        changeDecoration: function() {
            if(this.decoration.value.indexOf('bold') != -1){
                this.setCurrentProperty('bold', 1);
                this.changePreview('fontWeight', 'bold');
            }else{
                this.setCurrentProperty('bold', 0);
                this.changePreview('fontWeight', 'normal');
            }
            
            if(this.decoration.value.indexOf('italic') != -1){
                this.setCurrentProperty('italic', 1);
                this.changePreview('fontStyle', 'italic');
            }else{
                this.setCurrentProperty('italic', 0);
                this.changePreview('fontStyle', 'normal');
            }
            
            if(this.decoration.value.indexOf('underline') != -1){
                this.setCurrentProperty('underline', 1);
                this.changePreview('textDecoration', 'underline');
            }else{
                this.setCurrentProperty('underline', 0);
                this.changePreview('textDecoration', 'none');
            }
        },
        
        changePaddingleft: function() {
            this.setCurrentProperty('paddingleft', this.paddingleft.value);
        },

        changeAlign: function() {
            this.setCurrentProperty('align', this.textalign.value);
            this.changePreview('textAlign', this.textalign.value);
        },

        changeTextshadow: function() {
            this.setCurrentProperty('tshadow', this.textshadow.value);
            var ts = this.textshadow.value.split('|*|');
            if (ts[0] == '0' && ts[1] == '0' && ts[2] == '0') {
                this.changePreview('textShadow', 'none');
            } else {
                var c = this.hex2rgba(ts[3]);
                this.changePreview('textShadow', ts[0] + 'px ' + ts[1] + 'px ' + ts[2] + 'px ' + 'RGBA('+c[0]+','+c[1]+','+c[2]+','+c[3]+')');
            }
        },
        
        backgroundChange: function(color){
            this.changePreview('backgroundColor', '#'+color.toHexString());
        },

        hex2rgba: function(str) {
            var num = parseInt(str, 16); // Convert to a number
            return [num >> 24 & 255, num >> 16 & 255, num >> 8 & 255, (num & 255)/255];
        }
    });
})(ndojo);(function(dojo) {
    dojo.declare("NextendElementText", NextendElement, {
        constructor: function(args) {
            dojo.mixin(this, args);
            this.hidden = dojo.byId(this.hidden);

            dojo.connect(this.hidden, 'focus', this, 'focus');
            dojo.connect(this.hidden, 'blur', this, 'blur');
        },

        focus: function() {
            dojo.addClass(this.hidden.parentNode, 'focus');
        },

        blur: function() {
            dojo.removeClass(this.hidden.parentNode, 'focus');
        }
    });
})(ndojo);(function(dojo) {
    dojo.declare("NextendElementColor", NextendElement, {
        constructor: function(args) {
            dojo.mixin(this, args);
            this.value = 'ffffff';
            this.hidden = dojo.byId(this.hidden);

            dojo.connect(this.hidden, 'change', this, 'reset');

            this.reset();
            if (this.alpha == 1)
                this.alpha = true;
            else
                this.alpha = false;

            njQuery(this.hidden).spectrum({
                showAlpha: this.alpha,
                preferredFormat: (this.alpha == 1 ? "hex8" : "hex6"),
                showInput: false,
                showButtons: false,
                move: dojo.hitch(this, 'onChange'),
                change: dojo.hitch(this, 'onChange')
            });

        },
        reset: function() {
            if (this.value != this.hidden.value) {
                if (this.hidden.value.charAt(0) == '#')
                    this.hidden.value = this.hidden.value.substring(1);
                if (this.hidden.value != this.value) {
                    this.value = this.hidden.value;
                    njQuery(this.hidden).spectrum("set", this.value);
                }
            }
        },
        onChange: function(color) {
            var c = color.toString((this.alpha == 1 ? "hex8" : "hex6"));
            if (c.charAt(0) == '#')
                this.hidden.value = c.substring(1);
            else
                this.hidden.value = c;
            this.fireEvent(this.hidden, 'change');
        }
    });
})(ndojo);(function(dojo) {
    dojo.declare("NextendElementSwitcher", NextendElement, {
        constructor: function(args) {
            dojo.mixin(this, args);
            this.value = '';
            this.hidden = dojo.byId(this.hidden);

            dojo.connect(this.hidden, 'change', this, 'reset');

            this.reset();
            dojo.connect(this.hidden.parentNode, 'click', this, 'switchSelected');
        },

        reset: function() {
            if (this.value != this.hidden.value) {
                this.value = this.hidden.value;
                var i = this.values.indexOf(this.value);
                if (i == -1) {
                    i = 0;
                    this.value = this.hidden.value = this.values[i];
                    this.fireEvent(this.hidden, 'change');
                }
                this.setSelected(i);
            }
        },

        setSelected: function(x) {
            this.hidden.value = this.values[x];
            if (x == 1) {
                dojo.addClass(this.hidden.parentNode, 'nextend-switcher-on');
            } else {
                dojo.removeClass(this.hidden.parentNode, 'nextend-switcher-on');
            }
        },

        switchSelected: function() {
            var i = this.values.indexOf(this.value);
            if (i == 1) i = 0;
            else i = 1;
            this.setSelected(i);
            this.fireEvent(this.hidden, 'change');
        }
    });
})(ndojo);(function(dojo) {
    dojo.declare("NextendElementCheckbox", NextendElement, {
        constructor: function(args) {
            dojo.mixin(this, args);
            this.value = '';
            this.hidden = dojo.byId(this.hidden);
            this.checkboxes = dojo.query('.nextend-checkbox-option', this.hidden.parentNode);

            dojo.connect(this.hidden, 'change', this, 'reset');

            for (var i = 0; i < this.checkboxes.length; i++) {
                dojo.connect(this.checkboxes[i], 'click', dojo.hitch(this, 'changeSelected', i));
            }

            this.reset();
        },

        reset: function() {
            if (this.value != this.hidden.value) {
                this.value = this.hidden.value;
                this.resetValue();
            }
        },
        
        resetValue: function(){
            var values = this.hidden.value.split('||');
            for (var i = 0; i < this.checkboxes.length; i++) {
                if(values.indexOf(this.values[i]) == -1){
                    dojo.removeClass(this.checkboxes[i], 'selected');
                }else{
                    dojo.addClass(this.checkboxes[i], 'selected');
                }
            }
            this.hidden.value = values.join('||');
        },
        
        refreshValue: function(){
            var values = [];
            for (var i = 0; i < this.checkboxes.length; i++) {
                if(dojo.hasClass(this.checkboxes[i], 'selected')){
                    values.push(this.values[i]);
                }
            }
            this.hidden.value = values.join('||');
        },

        setSelected: function(x) {
            for (var i = 0; i < this.checkboxes.length; i++) {
                this.checkboxes[i].removeClass('selected');
            }
            this.checkboxes[x].addClass('selected');
        },

        changeSelected: function(x) {
            this.switchOption(x);
            this.fireEvent(this.hidden, 'change');
        },
        
        switchOption: function(i){
            dojo.toggleClass(this.checkboxes[i], 'selected');
            this.refreshValue();
        }
    });
})(ndojo);(function(dojo) {
    dojo.declare("NextendElementRadio", NextendElement, {
        constructor: function(args) {
            dojo.mixin(this, args);
            this.value = '';
            this.hidden = dojo.byId(this.hidden);
            this.radios = dojo.query('.nextend-radio-option', this.hidden.parentNode);

            dojo.connect(this.hidden, 'change', this, 'reset');

            for (var i = 0; i < this.radios.length; i++) {
                dojo.connect(this.radios[i], 'click', dojo.hitch(this, 'changeSelected', i));
            }

            this.reset();
        },

        reset: function() {
            if (this.value != this.hidden.value) {
                this.value = this.hidden.value;
                var i = this.values.indexOf(this.value);
                if (i == -1) {
                    i = this.partialSearch(this.hidden.value.replace(/^.*[\\\/]/, ''));
                    this.value = this.hidden.value = this.values[i];
                    this.fireEvent(this.hidden, 'change');
                }
                this.setSelected(i);
            }
        },

        setSelected: function(x) {
            for (var i = 0; i < this.radios.length; i++) {
                dojo.removeClass(this.radios[i], 'selected');
            }
            dojo.addClass(this.radios[x],'selected');
        },

        changeSelected: function(x) {
            this.hidden.value = this.values[x];
            this.fireEvent(this.hidden, 'change');
        },
        
        partialSearch: function(text){
            for (var i = 0; i < this.values.length; i++) {
                if(this.values[i].indexOf(text) != -1) return i;
            }
            return 0;
        }
    });
})(ndojo);(function(dojo) {
    dojo.declare("NextendForm", null, {
        constructor: function(args) {
            this.form = null;
            this.data = null;
            dojo.mixin(this, args);
            this.container = dojo.byId(this.container);
            this.form = dojo.query('input', this.container)[0].form;
            this.form.nextendform = this;
            // Special fix for Joomla 1.6, 1.7 & 2.5. Speedy save!
            if(typeof document.formvalidator != "undefined"){
                document.formvalidator.isValid = function() {return true;};
            }
        }
    });
})(ndojo);window.njQuery = typeof jQuery == "undefined" ? null : jQuery;

(function ($) {
    if(typeof bindNextendQ != 'undefined'){
        $.each(bindNextendQ, function (index, a) {
            $(a[0])[a[1]](a[2]);
        });
    }
})(njQuery);/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
*/

function version_compare(e,t,n){this.php_js=this.php_js||{};this.php_js.ENV=this.php_js.ENV||{};var r=0,i=0,s=0,o={dev:-6,alpha:-5,a:-5,beta:-4,b:-4,RC:-3,rc:-3,"#":-2,p:1,pl:1},u=function(e){e=(""+e).replace(/[_\-+]/g,".");e=e.replace(/([^.\d]+)/g,".$1.").replace(/\.{2,}/g,".");return!e.length?[-8]:e.split(".")},a=function(e){return!e?0:isNaN(e)?o[e]||-7:parseInt(e,10)};e=u(e);t=u(t);i=Math.max(e.length,t.length);for(r=0;r<i;r++){if(e[r]==t[r]){continue}e[r]=a(e[r]);t[r]=a(t[r]);if(e[r]<t[r]){s=-1;break}else if(e[r]>t[r]){s=1;break}}if(!n){return s}switch(n){case">":case"gt":return s>0;case">=":case"ge":return s>=0;case"<=":case"le":return s<=0;case"==":case"=":case"eq":return s===0;case"<>":case"!=":case"ne":return s!==0;case"":case"<":case"lt":return s<0;default:return null}}

(function(){
    var tmp = window.njQuery ? jQuery : null;
    
    if(!tmp || (tmp && version_compare(jQuery.fn.jquery,'1.9.1','<'))){
    
    
    (function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.1",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=lt(),k=lt(),E=lt(),S=!1,A=function(){return 0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=bt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+xt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return At(e.replace(z,"$1"),t,n,i)}function st(e){return K.test(e+"")}function lt(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function ut(e){return e[b]=!0,e}function ct(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function pt(e,t,n){e=e.split("|");var r,i=e.length,a=n?null:t;while(i--)(r=o.attrHandle[e[i]])&&r!==t||(o.attrHandle[e[i]]=a)}function ft(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:e[t]===!0?t.toLowerCase():null}function dt(e,t){return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}function ht(e){return"input"===e.nodeName.toLowerCase()?e.defaultValue:t}function gt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function mt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function yt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function vt(e){return ut(function(t){return t=+t,ut(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.parentWindow;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.frameElement&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ct(function(e){return e.innerHTML="<a href='#'></a>",pt("type|href|height|width",dt,"#"===e.firstChild.getAttribute("href")),pt(B,ft,null==e.getAttribute("disabled")),e.className="i",!e.getAttribute("className")}),r.input=ct(function(e){return e.innerHTML="<input>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}),pt("value",ht,r.attributes&&r.input),r.getElementsByTagName=ct(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ct(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ct(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=st(n.querySelectorAll))&&(ct(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ct(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=st(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ct(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=st(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},r.sortDetached=ct(function(e){return 1&e.compareDocumentPosition(n.createElement("div"))}),A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return gt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?gt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:ut,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=bt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?ut(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ut(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?ut(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ut(function(e){return function(t){return at(e,t).length>0}}),contains:ut(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:ut(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:vt(function(){return[0]}),last:vt(function(e,t){return[t-1]}),eq:vt(function(e,t,n){return[0>n?n+t:n]}),even:vt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:vt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:vt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:vt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=mt(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=yt(n);function bt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function xt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function wt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function Tt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function Ct(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function Nt(e,t,n,r,i,o){return r&&!r[b]&&(r=Nt(r)),i&&!i[b]&&(i=Nt(i,o)),ut(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||St(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:Ct(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=Ct(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=Ct(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function kt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=wt(function(e){return e===t},s,!0),p=wt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[wt(Tt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return Nt(l>1&&Tt(f),l>1&&xt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&kt(e.slice(l,r)),i>r&&kt(e=e.slice(r)),i>r&&xt(e))}f.push(n)}return Tt(f)}function Et(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=Ct(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?ut(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=bt(e)),n=t.length;while(n--)o=kt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Et(i,r))}return o};function St(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function At(e,t,n,i){var a,s,u,c,p,f=bt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&xt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}o.pseudos.nth=o.pseudos.eq;function jt(){}jt.prototype=o.filters=o.pseudos,o.setFilters=new jt,r.sortStable=b.split("").sort(A).join("")===b,p(),[0,0].sort(A),r.detectDuplicates=S,x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!l||i&&!u||(n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)
    }),n=s=l=u=r=o=null,t}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=x(this),l=t,u=e.match(T)||[];while(o=u[a++])l=r?l:!s.hasClass(o),s[l?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
    u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);
    
    
    window.njQuery = jQuery.noConflict();
    if(tmp) jQuery = tmp;
    }
})();


(function($) {
    var uaMatch = '', 
        prefix = '',
        html = $('html'),
        dir = $(document.documentElement).attr('dir');
    if(!dir) dir = 'ltr';
    html.addClass('x-'+dir);
    window.nextendDir = dir;

    if (navigator.userAgent.match(/Windows/))
    {
        html.addClass('x-win');
    }
    else if (navigator.userAgent.match(/Mac OS X/))
    {
        html.addClass('x-mac');
    }
    else if (navigator.userAgent.match(/X11/))
    {
        html.addClass('x-x11');
    }

    if (navigator.userAgent.match(/Chrome/))
    {
        uaMatch = ' Chrome/';
        prefix = 'x-chrome';
    }
    else if (navigator.userAgent.match(/Safari/))
    {
        uaMatch = ' Version/';
        prefix = 'x-safari';
    }
    else if (navigator.userAgent.match(/Firefox/))
    {
        uaMatch = ' Firefox/';
        prefix = 'x-firefox';
    }
    else if (navigator.userAgent.match(/MSIE/))
    {
        uaMatch = ' MSIE ';
        prefix = 'x-msie';
    }else if(!!navigator.userAgent.match(/Trident/)){
        uaMatch = ' rv:';
        prefix = 'x-msie';
    }
    if (prefix)
    {
        html.addClass(prefix);

        uaMatch = new RegExp(uaMatch + '(\\d+)\.(\\d+)');
        var uaMatch = navigator.userAgent.match(uaMatch);
        if (uaMatch && uaMatch[1])
        {
            html.addClass(prefix + '-' + uaMatch[1]);
            html.addClass(prefix + '-' + uaMatch[1] + '-' + uaMatch[2]);
        }
    }
    $(window).load(function(){
        setTimeout(function(){
            html.addClass('x-ready');
        }, 500);
    });
})(njQuery);/**
 * jquery.unique-element-id.js
 *
 * A simple jQuery plugin to get a unique ID for
 * any HTML element
 *
 * Usage:
 *    $('some_element_selector').uid();
 *
 * by Jamie Rumbelow <jamie@jamierumbelow.net>
 * http://jamieonsoftware.com
 * Copyright (c)2011 Jamie Rumbelow
 *
 * Licensed under the MIT license (http://www.opensource.org/licenses/MIT)
 */

(function($){
    /**
     * Generate a new unqiue ID
     */
    function generateUniqueId() {

        // Return a unique ID
        return "nextend-element-" + Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    /**
     * Get a unique ID for an element, ensuring that the
     * element has an id="" attribute
     */
    $.fn.uid = function(){
        // We need an element! Check the selector returned something
        if (!this.length > 0) {
            return generateUniqueId();
        }

        // Act on only the first element. Also, fetch the element's ID attr
        var first_element = this.first();

        // No? Generate one!
        id_attr = generateUniqueId();

        // And set the ID attribute
        first_element.attr('id', id_attr);

        // Return it
        return id_attr;
    };
})(njQuery);/*! qTip2 v2.0.1-28- (includes: svg ajax tips modal viewport imagemap ie6 / basic css3) | qtip2.com | Licensed MIT, GPL | Fri Mar 01 2013 22:50:30 */

(function (jQuery) {

(function(e,t,n){(function(e){"use strict";typeof define=="function"&&define.amd?define(["jquery"],e):jQuery&&!jQuery.fn.qtip&&e(jQuery)})(function(r){function P(n){S={pageX:n.pageX,pageY:n.pageY,type:"mousemove",scrollX:e.pageXOffset||t.body.scrollLeft||t.documentElement.scrollLeft,scrollY:e.pageYOffset||t.body.scrollTop||t.documentElement.scrollTop}}function H(e){var t=function(e){return e===o||"object"!=typeof e},n=function(e){return!r.isFunction(e)&&(!e&&!e.attr||e.length<1||"object"==typeof e&&!e.jquery&&!e.then)};if(!e||"object"!=typeof e)return s;t(e.metadata)&&(e.metadata={type:e.metadata});if("content"in e){if(t(e.content)||e.content.jquery)e.content={text:e.content};n(e.content.text||s)&&(e.content.text=s),"title"in e.content&&(t(e.content.title)&&(e.content.title={text:e.content.title}),n(e.content.title.text||s)&&(e.content.title.text=s))}return"position"in e&&t(e.position)&&(e.position={my:e.position,at:e.position}),"show"in e&&t(e.show)&&(e.show=e.show.jquery?{target:e.show}:e.show===i?{ready:i}:{event:e.show}),"hide"in e&&t(e.hide)&&(e.hide=e.hide.jquery?{target:e.hide}:{event:e.hide}),"style"in e&&t(e.style)&&(e.style={classes:e.style}),r.each(E,function(){this.sanitize&&this.sanitize(e)}),e}function B(n,u,a,f){function R(e){var t=0,n,r=u,i=e.split(".");while(r=r[i[t++]])t<i.length&&(n=r);return[n||u,i.pop()]}function U(e){return C.concat("").join(e?"-"+e+" ":" ")}function z(){var e=u.style.widget,t=B.hasClass(F);B.removeClass(F),F=e?"ui-state-disabled":"qtip-disabled",B.toggleClass(F,t),B.toggleClass("ui-helper-reset "+U(),e).toggleClass(L,u.style.def&&!e),I.content&&I.content.toggleClass(U("content"),e),I.titlebar&&I.titlebar.toggleClass(U("header"),e),I.button&&I.button.toggleClass(x+"-icon",!e)}function W(e){I.title&&(I.titlebar.remove(),I.titlebar=I.title=I.button=o,e!==s&&l.reposition())}function X(){var e=u.content.title.button,t=typeof e=="string",n=t?e:"Close tooltip";I.button&&I.button.remove(),e.jquery?I.button=e:I.button=r("<a />",{"class":"qtip-close "+(u.style.widget?"":x+"-icon"),title:n,"aria-label":n}).prepend(r("<span />",{"class":"ui-icon ui-icon-close",html:"&times;"})),I.button.appendTo(I.titlebar||B).attr("role","button").click(function(e){return B.hasClass(F)||l.hide(e),s})}function V(){var e=g+"-title";I.titlebar&&W(),I.titlebar=r("<div />",{"class":x+"-titlebar "+(u.style.widget?U("header"):"")}).append(I.title=r("<div />",{id:e,"class":x+"-title","aria-atomic":i})).insertBefore(I.content).delegate(".qtip-close","mousedown keydown mouseup keyup mouseout",function(e){r(this).toggleClass("ui-state-active ui-state-focus",e.type.substr(-4)==="down")}).delegate(".qtip-close","mouseover mouseout",function(e){r(this).toggleClass("ui-state-hover",e.type==="mouseover")}),u.content.title.button&&X()}function $(e){var t=I.button;if(!l.rendered)return s;e?X():t.remove()}function J(e,t){var i=I.title;if(!l.rendered||!e)return s;r.isFunction(e)&&(e=e.call(n,q.event,l));if(e===s||!e&&e!=="")return W(s);e.jquery&&e.length>0?i.empty().append(e.css({display:"block"})):i.html(e),t!==s&&l.rendered&&B[0].offsetWidth>0&&l.reposition(q.event)}function K(e){e&&r.isFunction(e.done)&&e.done(function(e){Q(e,null,s)})}function Q(e,t,i){function a(e){function s(t){if(t.src===b||r.inArray(t,i)!==-1)return;i.push(t),r.data(t,"imagesLoaded",{src:t.src}),n.length===i.length&&(setTimeout(e),n.unbind(".imagesLoaded"))}var t=r(this),n=t.find("img").add(t.filter("img")),i=[];if(!n.length)return e();n.bind("load.imagesLoaded error.imagesLoaded",function(e){s(e.target)}).each(function(e,t){var n=t.src,i=r.data(t,"imagesLoaded");if(i&&i.src===n||t.complete&&t.naturalWidth)s(t);else if(t.readyState||t.complete)t.src=b,t.src=n})}var o=I.content;return!l.rendered||!e?s:(r.isFunction(e)&&(e=e.call(n,q.event,l)||""),i!==s&&K(u.content.deferred),e.jquery&&e.length>0?o.empty().append(e.css({display:"block"})):o.html(e),l.rendered<0?B.queue("fx",a):(M=0,a.call(B[0],r.noop)),l)}function G(){function p(e){if(B.hasClass(F))return s;clearTimeout(l.timers.show),clearTimeout(l.timers.hide);var t=function(){l.toggle(i,e)};u.show.delay>0?l.timers.show=setTimeout(t,u.show.delay):t()}function d(e){if(B.hasClass(F)||y||M)return s;var t=r(e.relatedTarget),n=t.closest(k)[0]===B[0],i=t[0]===f.show[0];clearTimeout(l.timers.show),clearTimeout(l.timers.hide);if(this!==t[0]&&o.target==="mouse"&&n||u.hide.fixed&&/mouse(out|leave|move)/.test(e.type)&&(n||i)){try{e.preventDefault(),e.stopImmediatePropagation()}catch(a){}return}u.hide.delay>0?l.timers.hide=setTimeout(function(){l.hide(e)},u.hide.delay):l.hide(e)}function v(e){if(B.hasClass(F))return s;clearTimeout(l.timers.inactive),l.timers.inactive=setTimeout(function(){l.hide(e)},u.hide.inactive)}function m(e){l.rendered&&B[0].offsetWidth>0&&l.reposition(e)}var o=u.position,f={show:u.show.target,hide:u.hide.target,viewport:r(o.viewport),document:r(t),body:r(t.body),window:r(e)},c={show:r.trim(""+u.show.event).split(" "),hide:r.trim(""+u.hide.event).split(" ")},h=E.ie===6;B.bind("mouseenter"+j+" mouseleave"+j,function(e){var t=e.type==="mouseenter";t&&l.focus(e),B.toggleClass(O,t)}),/mouse(out|leave)/i.test(u.hide.event)&&u.hide.leave==="window"&&f.document.bind("mouseout"+j+" blur"+j,function(e){!/select|option/.test(e.target.nodeName)&&!e.relatedTarget&&l.hide(e)}),u.hide.fixed?(f.hide=f.hide.add(B),B.bind("mouseover"+j,function(){B.hasClass(F)||clearTimeout(l.timers.hide)})):/mouse(over|enter)/i.test(u.show.event)&&f.hide.bind("mouseleave"+j,function(e){clearTimeout(l.timers.show)}),(""+u.hide.event).indexOf("unfocus")>-1&&o.container.closest("html").bind("mousedown"+j+" touchstart"+j,function(e){var t=r(e.target),i=l.rendered&&!B.hasClass(F)&&B[0].offsetWidth>0,s=t.parents(k).filter(B[0]).length>0;t[0]!==n[0]&&t[0]!==B[0]&&!s&&!n.has(t[0]).length&&i&&l.hide(e)}),"number"==typeof u.hide.inactive&&(f.show.bind("qtip-"+a+"-inactive",v),r.each(w.inactiveEvents,function(e,t){f.hide.add(I.tooltip).bind(t+j+"-inactive",v)})),r.each(c.hide,function(e,t){var n=r.inArray(t,c.show),i=r(f.hide);n>-1&&i.add(f.show).length===i.length||t==="unfocus"?(f.show.bind(t+j,function(e){B[0].offsetWidth>0?d(e):p(e)}),delete c.show[n]):f.hide.bind(t+j,d)}),r.each(c.show,function(e,t){f.show.bind(t+j,p)}),"number"==typeof u.hide.distance&&f.show.add(B).bind("mousemove"+j,function(e){var t=q.origin||{},n=u.hide.distance,r=Math.abs;(r(e.pageX-t.pageX)>=n||r(e.pageY-t.pageY)>=n)&&l.hide(e)}),o.target==="mouse"&&(f.show.bind("mousemove"+j,P),o.adjust.mouse&&(u.hide.event&&(B.bind("mouseleave"+j,function(e){(e.relatedTarget||e.target)!==f.show[0]&&l.hide(e)}),I.target.bind("mouseenter"+j+" mouseleave"+j,function(e){q.onTarget=e.type==="mouseenter"})),f.document.bind("mousemove"+j,function(e){l.rendered&&q.onTarget&&!B.hasClass(F)&&B[0].offsetWidth>0&&l.reposition(e||S)}))),(o.adjust.resize||f.viewport.length)&&(r.event.special.resize?f.viewport:f.window).bind("resize"+j,m),o.adjust.scroll&&f.window.add(o.container).bind("scroll"+j,m)}function Y(){var n=[u.show.target[0],u.hide.target[0],l.rendered&&I.tooltip[0],u.position.container[0],u.position.viewport[0],u.position.container.closest("html")[0],e,t];l.rendered?r([]).pushStack(r.grep(n,function(e){return typeof e=="object"})).unbind(j):u.show.target.unbind(j+"-create")}var l=this,m=t.body,g=x+"-"+a,y=0,M=0,B=r(),j=".qtip-"+a,F="qtip-disabled",I,q;l.id=a,l.rendered=s,l.destroyed=s,l.elements=I={target:n},l.timers={img:{}},l.options=u,l.checks={},l.plugins={},l.cache=q={event:{},target:r(),disabled:s,attr:f,onTarget:s,lastClass:""},l.checks.builtin={"^id$":function(e,t,n){var o=n===i?w.nextid:n,u=x+"-"+o;o!==s&&o.length>0&&!r("#"+u).length&&(B[0].id=u,I.content[0].id=u+"-content",I.title[0].id=u+"-title")},"^content.text$":function(e,t,n){Q(u.content.text)},"^content.deferred$":function(e,t,n){K(u.content.deferred)},"^content.title.text$":function(e,t,n){if(!n)return W();!I.title&&n&&V(),J(n)},"^content.title.button$":function(e,t,n){$(n)},"^position.(my|at)$":function(e,t,n){"string"==typeof n&&(e[t]=new E.Corner(n))},"^position.container$":function(e,t,n){l.rendered&&B.appendTo(n)},"^show.ready$":function(){l.rendered?l.toggle(i):l.render(1)},"^style.classes$":function(e,t,n){B.attr("class",x+" qtip "+n)},"^style.width|height":function(e,t,n){B.css(t,n)},"^style.widget|content.title":z,"^events.(render|show|move|hide|focus|blur)$":function(e,t,n){B[(r.isFunction(n)?"":"un")+"bind"]("tooltip"+t,n)},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){var e=u.position;B.attr("tracking",e.target==="mouse"&&e.adjust.mouse),Y(),G()}},r.extend(l,{_triggerEvent:function(e,t,n){var i=r.Event("tooltip"+e);return i.originalEvent=(n?r.extend({},n):o)||q.event||o,B.trigger(i,[l].concat(t||[])),!i.isDefaultPrevented()},render:function(e){if(l.rendered)return l;var t=u.content.text,o=u.content.title,a=u.position;return r.attr(n[0],"aria-describedby",g),B=I.tooltip=r("<div/>",{id:g,"class":[x,L,u.style.classes,x+"-pos-"+u.position.my.abbrev()].join(" "),width:u.style.width||"",height:u.style.height||"",tracking:a.target==="mouse"&&a.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":s,"aria-describedby":g+"-content","aria-hidden":i}).toggleClass(F,q.disabled).data("qtip",l).appendTo(u.position.container).append(I.content=r("<div />",{"class":x+"-content",id:g+"-content","aria-atomic":i})),l.rendered=-1,y=1,o.text?(V(),r.isFunction(o.text)||J(o.text,s)):o.button&&X(),(!r.isFunction(t)||t.then)&&Q(t,s),l.rendered=i,z(),r.each(u.events,function(e,t){r.isFunction(t)&&B.bind(e==="toggle"?"tooltipshow tooltiphide":"tooltip"+e,t)}),r.each(E,function(){this.initialize==="render"&&this(l)}),G(),B.queue("fx",function(t){l._triggerEvent("render"),y=0,(u.show.ready||e)&&l.toggle(i,q.event,s),t()}),l},get:function(e){var t,n;switch(e.toLowerCase()){case"dimensions":t={height:B.outerHeight(s),width:B.outerWidth(s)};break;case"offset":t=E.offset(B,u.position.container);break;default:n=R(e.toLowerCase()),t=n[0][n[1]],t=t.precedance?t.string():t}return t},set:function(e,t){function p(e,t){var n,r,i;for(n in c)for(r in c[n])if(i=(new RegExp(r,"i")).exec(e))t.push(i),c[n][r].apply(l,t)}var n=/^position\.(my|at|adjust|target|container)|style|content|show\.ready/i,a=/^content\.(title|attr)|style/i,f=s,c=l.checks,h;return"string"==typeof e?(h=e,e={},e[h]=t):e=r.extend(i,{},e),r.each(e,function(t,i){var s=R(t.toLowerCase()),o;o=s[0][s[1]],s[0][s[1]]="object"==typeof i&&i.nodeType?r(i):i,e[t]=[s[0],s[1],i,o],f=n.test(t)||f}),H(u),y=1,r.each(e,p),y=0,l.rendered&&B[0].offsetWidth>0&&f&&l.reposition(u.position.target==="mouse"?o:q.event),l},toggle:function(e,n){function w(){e?(E.ie&&B[0].style.removeAttribute("filter"),B.css("overflow",""),"string"==typeof f.autofocus&&r(f.autofocus,B).focus(),f.target.trigger("qtip-"+a+"-inactive")):B.css({display:"",visibility:"",opacity:"",left:"",top:""}),l._triggerEvent(e?"visible":"hidden")}if(n){if(/over|enter/.test(n.type)&&/out|leave/.test(q.event.type)&&u.show.target.add(n.target).length===u.show.target.length&&B.has(n.relatedTarget).length)return l;q.event=r.extend({},n)}if(!l.rendered)return e?l.render(1):l;var o=e?"show":"hide",f=u[o],c=u[e?"hide":"show"],h=u.position,p=u.content,d=B.css("width"),v=B[0].offsetWidth>0,m=e||f.target.length===1,g=!n||f.target.length<2||q.target[0]===n.target,y,b;return(typeof e).search("boolean|number")&&(e=!v),!B.is(":animated")&&v===e&&g?l:l._triggerEvent(o,[90])?(r.attr(B[0],"aria-hidden",!e),e?(q.origin=r.extend({},S),l.focus(n),r.isFunction(p.text)&&Q(p.text,s),r.isFunction(p.title.text)&&J(p.title.text,s),!D&&h.target==="mouse"&&h.adjust.mouse&&(r(t).bind("mousemove.qtip",P),D=i),d||B.css("width",B.outerWidth()),l.reposition(n,arguments[2]),d||B.css("width",""),!f.solo||(typeof f.solo=="string"?r(f.solo):r(k,f.solo)).not(B).not(f.target).qtip("hide",r.Event("tooltipsolo"))):(clearTimeout(l.timers.show),delete q.origin,D&&!r(k+'[tracking="true"]:visible',f.solo).not(B).length&&(r(t).unbind("mousemove.qtip"),D=s),l.blur(n)),f.effect===s||m===s?(B[o](),w.call(B)):r.isFunction(f.effect)?(B.stop(1,1),f.effect.call(B,l),B.queue("fx",function(e){w(),e()})):B.fadeTo(90,e?1:0,w),e&&f.target.trigger("qtip-"+a+"-inactive"),l):l},show:function(e){return l.toggle(i,e)},hide:function(e){return l.toggle(s,e)},focus:function(e){if(!l.rendered)return l;var t=r(k),n=parseInt(B[0].style.zIndex,10),i=w.zindex+t.length,s=r.extend({},e),o;return B.hasClass(A)||l._triggerEvent("focus",[i],s)&&(n!==i&&(t.each(function(){this.style.zIndex>n&&(this.style.zIndex=this.style.zIndex-1)}),t.filter("."+A).qtip("blur",s)),B.addClass(A)[0].style.zIndex=i),l},blur:function(e){return B.removeClass(A),l._triggerEvent("blur",[B.css("zIndex")],e),l},reposition:function(n,i){if(!l.rendered||y)return l;y=1;var o=u.position.target,a=u.position,f=a.my,m=a.at,g=a.adjust,b=g.method.split(" "),w=B.outerWidth(s),x=B.outerHeight(s),T=0,N=0,C=B.css("position"),k=a.viewport,L={left:0,top:0},A=a.container,O=B[0].offsetWidth>0,M=n&&n.type==="scroll",_=r(e),D,P;if(r.isArray(o)&&o.length===2)m={x:h,y:c},L={left:o[0],top:o[1]};else if(o==="mouse"&&(n&&n.pageX||q.event.pageX))m={x:h,y:c},n=S&&S.pageX&&(g.mouse||!n||!n.pageX)?{pageX:S.pageX,pageY:S.pageY}:(!n||n.type!=="resize"&&n.type!=="scroll"?n&&n.pageX&&n.type==="mousemove"?n:(!g.mouse||u.show.distance)&&q.origin&&q.origin.pageX?q.origin:n:q.event)||n||q.event||S||{},C!=="static"&&(L=A.offset()),L={left:n.pageX-L.left,top:n.pageY-L.top},g.mouse&&M&&(L.left-=S.scrollX-_.scrollLeft(),L.top-=S.scrollY-_.scrollTop());else{o==="event"&&n&&n.target&&n.type!=="scroll"&&n.type!=="resize"?q.target=r(n.target):o!=="event"&&(q.target=r(o.jquery?o:I.target)),o=q.target,o=r(o).eq(0);if(o.length===0)return l;o[0]===t||o[0]===e?(T=E.iOS?e.innerWidth:o.width(),N=E.iOS?e.innerHeight:o.height(),o[0]===e&&(L={top:(k||o).scrollTop(),left:(k||o).scrollLeft()})):E.imagemap&&o.is("area")?D=E.imagemap(l,o,m,E.viewport?b:s):E.svg&&o[0].ownerSVGElement?D=E.svg(l,o,m,E.viewport?b:s):(T=o.outerWidth(s),N=o.outerHeight(s),L=E.offset(o,A)),D&&(T=D.width,N=D.height,P=D.offset,L=D.position);if(E.iOS>3.1&&E.iOS<4.1||E.iOS>=4.3&&E.iOS<4.33||!E.iOS&&C==="fixed")L.left-=_.scrollLeft(),L.top-=_.scrollTop();L.left+=m.x===d?T:m.x===v?T/2:0,L.top+=m.y===p?N:m.y===v?N/2:0}return L.left+=g.x+(f.x===d?-w:f.x===v?-w/2:0),L.top+=g.y+(f.y===p?-x:f.y===v?-x/2:0),E.viewport?(L.adjusted=E.viewport(l,L,a,T,N,w,x),P&&L.adjusted.left&&(L.left+=P.left),P&&L.adjusted.top&&(L.top+=P.top)):L.adjusted={left:0,top:0},l._triggerEvent("move",[L,k.elem||k],n)?(delete L.adjusted,i===s||!O||isNaN(L.left)||isNaN(L.top)||o==="mouse"||!r.isFunction(a.effect)?B.css(L):r.isFunction(a.effect)&&(a.effect.call(B,l,r.extend({},L)),B.queue(function(e){r(this).css({opacity:"",height:""}),E.ie&&this.style.removeAttribute("filter"),e()})),y=0,l):l},disable:function(e){return"boolean"!=typeof e&&(e=!B.hasClass(F)&&!q.disabled),l.rendered?(B.toggleClass(F,e),r.attr(B[0],"aria-disabled",e)):q.disabled=!!e,l},enable:function(){return l.disable(s)},destroy:function(e){function t(){var e=n[0],t=r.attr(e,_),i=n.data("qtip");l.rendered&&(r.each(l.plugins,function(e){this.destroy&&this.destroy(),delete l.plugins[e]}),B.stop(1,0).find("*").remove().end().remove(),l.rendered=s),clearTimeout(l.timers.show),clearTimeout(l.timers.hide),Y();if(!i||l===i)n.removeData("qtip").removeAttr(T),u.suppress&&t&&(n.attr("title",t),n.removeAttr(_)),n.removeAttr("aria-describedby");n.unbind(".qtip-"+a),delete N[l.id],delete l.options,delete l.elements,delete l.cache,delete l.timers,delete l.checks}if(l.destroyed)return;return l.destroyed=i,e===i?t():(B.bind("tooltiphidden",t),l.hide()),n}})}function j(e,n,u){var a,f,l,c,h,p=r(t.body),d=e[0]===t?p:e,v=e.metadata?e.metadata(u.metadata):o,m=u.metadata.type==="html5"&&v?v[u.metadata.name]:o,g=e.data(u.metadata.name||"qtipopts");try{g=typeof g=="string"?r.parseJSON(g):g}catch(y){}c=r.extend(i,{},w.defaults,u,typeof g=="object"?H(g):o,H(m||v)),f=c.position,c.id=n;if("boolean"==typeof c.content.text){l=e.attr(c.content.attr);if(c.content.attr===s||!l)return s;c.content.text=l}f.container.length||(f.container=p),f.target===s&&(f.target=d),c.show.target===s&&(c.show.target=d),c.show.solo===i&&(c.show.solo=f.container.closest("body")),c.hide.target===s&&(c.hide.target=d),c.position.viewport===i&&(c.position.viewport=f.container),f.container=f.container.eq(0),f.at=new E.Corner(f.at),f.my=new E.Corner(f.my);if(e.data("qtip"))if(c.overwrite)e.qtip("destroy");else if(c.overwrite===s)return s;return e.attr(T,!0),c.suppress&&(h=e.attr("title"))&&e.removeAttr("title").attr(_,h).attr("title",""),a=new B(e,c,n,!!l),e.data("qtip",a),e.one("remove.qtip-"+n+" removeqtip.qtip-"+n,function(){var e;(e=r(this).data("qtip"))&&e.destroy()}),a}function R(e){var t=this,n=e.elements.tooltip,o=e.options.content.ajax,u=w.defaults.content.ajax,a=i,f=s,l;e.checks.ajax={"^content.ajax":function(e,r,i){r==="ajax"&&(o=i),r==="once"?t.init():o&&o.url?t.load():n.unbind(I)}},r.extend(t,{init:function(){return o&&o.url&&n.unbind(I)[o.once?"one":"bind"]("tooltipshow"+I,t.load),t},load:function(n){function m(){var t;if(e.destroyed)return;a=s,d&&(f=i,e.show(n.originalEvent)),(t=u.complete||o.complete)&&r.isFunction(t)&&t.apply(o.context||e,arguments)}function g(t,n,i){var s;if(e.destroyed)return;p&&"string"==typeof t&&(t=r("<div/>").append(t.replace(q,"")).find(p)),(s=u.success||o.success)&&r.isFunction(s)?s.call(o.context||e,t,n,i):e.set("content.text",t)}function y(t,n,r){if(e.destroyed||t.status===0)return;e.set("content.text",n+": "+r)}if(f){f=s;return}var c=o.url.lastIndexOf(" "),h=o.url,p,d=!o.loading&&a;if(d)try{n.preventDefault()}catch(v){}else if(n&&n.isDefaultPrevented())return t;l&&l.abort&&l.abort(),c>-1&&(p=h.substr(c),h=h.substr(0,c)),l=r.ajax(r.extend({error:u.error||y,context:e},o,{url:h,success:g,complete:m}))},destroy:function(){l&&l.abort&&l.abort(),e.destroyed=i}}),t.init()}function X(e,t,n){var r=Math.ceil(t/2),i=Math.ceil(n/2),s={bottomright:[[0,0],[t,n],[t,0]],bottomleft:[[0,0],[t,0],[0,n]],topright:[[0,n],[t,0],[t,n]],topleft:[[0,0],[0,n],[t,n]],topcenter:[[0,n],[r,0],[t,n]],bottomcenter:[[0,0],[t,0],[r,n]],rightcenter:[[0,0],[t,i],[0,n]],leftcenter:[[t,0],[t,n],[0,i]]};return s.lefttop=s.bottomright,s.righttop=s.bottomleft,s.leftbottom=s.topright,s.rightbottom=s.topleft,s[e.string()]}function V(e,t){function k(e){var t=w.is(":visible");w.show(),e(),w.toggle(t)}function L(){x.width=g.height,x.height=g.width}function A(){x.width=g.width,x.height=g.height}function O(t,r,o,f){if(!b.tip)return;var l=m.corner.clone(),w=o.adjusted,E=e.options.position.adjust.method.split(" "),x=E[0],T=E[1]||E[0],N={left:s,top:s,x:0,y:0},C,k={},L;m.corner.fixed!==i&&(x===y&&l.precedance===u&&w.left&&l.y!==v?l.precedance=l.precedance===u?a:u:x!==y&&w.left&&(l.x=l.x===v?w.left>0?h:d:l.x===h?d:h),T===y&&l.precedance===a&&w.top&&l.x!==v?l.precedance=l.precedance===a?u:a:T!==y&&w.top&&(l.y=l.y===v?w.top>0?c:p:l.y===c?p:c),l.string()!==S.corner.string()&&(S.top!==w.top||S.left!==w.left)&&m.update(l,s)),C=m.position(l,w),C[l.x]+=_(l,l.x),C[l.y]+=_(l,l.y),C.right!==n&&(C.left=-C.right),C.bottom!==n&&(C.top=-C.bottom),C.user=Math.max(0,g.offset);if(N.left=x===y&&!!w.left)l.x===v?k["margin-left"]=N.x=C["margin-left"]-w.left:(L=C.right!==n?[w.left,-C.left]:[-w.left,C.left],(N.x=Math.max(L[0],L[1]))>L[0]&&(o.left-=w.left,N.left=s),k[C.right!==n?d:h]=N.x);if(N.top=T===y&&!!w.top)l.y===v?k["margin-top"]=N.y=C["margin-top"]-w.top:(L=C.bottom!==n?[w.top,-C.top]:[-w.top,C.top],(N.y=Math.max(L[0],L[1]))>L[0]&&(o.top-=w.top,N.top=s),k[C.bottom!==n?p:c]=N.y);b.tip.css(k).toggle(!(N.x&&N.y||l.x===v&&N.y||l.y===v&&N.x)),o.left-=C.left.charAt?C.user:x!==y||N.top||!N.left&&!N.top?C.left:0,o.top-=C.top.charAt?C.user:T!==y||N.left||!N.left&&!N.top?C.top:0,S.left=w.left,S.top=w.top,S.corner=l.clone()}function M(){var t=g.corner,n=e.options.position,r=n.at,o=n.my.string?n.my.string():n.my;return t===s||o===s&&r===s?s:(t===i?m.corner=new E.Corner(o):t.string||(m.corner=new E.Corner(t),m.corner.fixed=i),S.corner=new E.Corner(m.corner.string()),m.corner.string()!=="centercenter")}function _(e,t,n){t=t?t:e[e.precedance];var r=b.titlebar&&e.y===c,i=r?b.titlebar:w,s="border-"+t+"-width",o=function(e){return parseInt(e.css(s),10)},u;return k(function(){u=(n?o(n):o(b.content)||o(i)||o(w))||0}),u}function D(e){var t=b.titlebar&&e.y===c,n=t?b.titlebar:b.content,r="-moz-",i="-webkit-",s="border-radius-"+e.y+e.x,o="border-"+e.y+"-"+e.x+"-radius",u=function(e){return parseInt(n.css(e),10)||parseInt(w.css(e),10)},a;return k(function(){a=u(o)||u(s)||u(r+o)||u(r+s)||u(i+o)||u(i+s)||0}),a}function P(e){function N(e,t,n){var r=e.css(t)||p;return n&&r===e.css(n)?s:f.test(r)?s:r}var t,n,o,u=b.tip.css("cssText",""),a=e||m.corner,f=/rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,l="border-"+a[a.precedance]+"-color",h="background-color",p="transparent",d=" !important",y=b.titlebar,E=y&&(a.y===c||a.y===v&&u.position().top+x.height/2+g.offset<y.outerHeight(i)),S=E?y:b.content;k(function(){T.fill=N(u,h)||N(S,h)||N(b.content,h)||N(w,h)||u.css(h),T.border=N(u,l,"color")||N(S,l,"color")||N(b.content,l,"color")||N(w,l,"color")||w.css(l),r("*",u).add(u).css("cssText",h+":"+p+d+";border:0"+d+";")})}function H(e){var t=e.precedance===a,n=x[t?f:l],r=x[t?l:f],i=e.string().indexOf(v)>-1,s=n*(i?.5:1),o=Math.pow,u=Math.round,c,h,p,d=Math.sqrt(o(s,2)+o(r,2)),m=[N/s*d,N/r*d];return m[2]=Math.sqrt(o(m[0],2)-o(N,2)),m[3]=Math.sqrt(o(m[1],2)-o(N,2)),c=d+m[2]+m[3]+(i?0:m[0]),h=c/d,p=[u(h*r),u(h*n)],{height:p[t?0:1],width:p[t?1:0]}}function B(e,t,n){return"<qvml:"+e+' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" '+(t||"")+' style="behavior: url(#default#VML); '+(n||"")+'" />'}var m=this,g=e.options.style.tip,b=e.elements,w=b.tooltip,S={top:0,left:0},x={width:g.width,height:g.height},T={},N=g.border||0,C;m.corner=o,m.mimic=o,m.border=N,m.offset=g.offset,m.size=x,e.checks.tip={"^position.my|style.tip.(corner|mimic|border)$":function(){m.init()||m.destroy(),e.reposition()},"^style.tip.(height|width)$":function(){x={width:g.width,height:g.height},m.create(),m.update(),e.reposition()},"^content.title.text|style.(classes|widget)$":function(){b.tip&&b.tip.length&&m.update()}},r.extend(m,{init:function(){var e=M()&&(W||E.ie);return e&&(m.create(),m.update(),w.unbind(z).bind("tooltipmove"+z,O)),e},create:function(){var e=x.width,t=x.height,n;b.tip&&b.tip.remove(),b.tip=r("<div />",{"class":"qtip-tip"}).css({width:e,height:t}).prependTo(w),W?r("<canvas />").appendTo(b.tip)[0].getContext("2d").save():(n=B("shape",'coordorigin="0,0"',"position:absolute;"),b.tip.html(n+n),r("*",b.tip).bind("click"+z+" mousedown"+z,function(e){e.stopPropagation()}))},update:function(e,t){var n=b.tip,f=n.children(),l=x.width,y=x.height,C=g.mimic,k=Math.round,O,M,D,j,F;e||(e=S.corner||m.corner),C===s?C=e:(C=new E.Corner(C),C.precedance=e.precedance,C.x==="inherit"?C.x=e.x:C.y==="inherit"?C.y=e.y:C.x===C.y&&(C[e.precedance]=e[e.precedance])),O=C.precedance,e.precedance===u?L():A(),b.tip.css({width:l=x.width,height:y=x.height}),P(e),T.border!=="transparent"?(N=_(e,o),g.border===0&&N>0&&(T.fill=T.border),m.border=N=g.border!==i?g.border:N):m.border=N=0,D=X(C,l,y),m.size=F=H(e),n.css(F).css("line-height",F.height+"px"),e.precedance===a?j=[k(C.x===h?N:C.x===d?F.width-l-N:(F.width-l)/2),k(C.y===c?F.height-y:0)]:j=[k(C.x===h?F.width-l:0),k(C.y===c?N:C.y===p?F.height-y-N:(F.height-y)/2)],W?(f.attr(F),M=f[0].getContext("2d"),M.restore(),M.save(),M.clearRect(0,0,3e3,3e3),M.fillStyle=T.fill,M.strokeStyle=T.border,M.lineWidth=N*2,M.lineJoin="miter",M.miterLimit=100,M.translate(j[0],j[1]),M.beginPath(),M.moveTo(D[0][0],D[0][1]),M.lineTo(D[1][0],D[1][1]),M.lineTo(D[2][0],D[2][1]),M.closePath(),N&&(w.css("background-clip")==="border-box"&&(M.strokeStyle=T.fill,M.stroke()),M.strokeStyle=T.border,M.stroke()),M.fill()):(D="m"+D[0][0]+","+D[0][1]+" l"+D[1][0]+","+D[1][1]+" "+D[2][0]+","+D[2][1]+" xe",j[2]=N&&/^(r|b)/i.test(e.string())?E.ie===8?2:1:0,f.css({coordsize:l+N+" "+(y+N),antialias:""+(C.string().indexOf(v)>-1),left:j[0],top:j[1],width:l+N,height:y+N}).each(function(e){var t=r(this);t[t.prop?"prop":"attr"]({coordsize:l+N+" "+(y+N),path:D,fillcolor:T.fill,filled:!!e,stroked:!e}).toggle(!!N||!!e),!e&&t.html()===""&&t.html(B("stroke",'weight="'+N*2+'px" color="'+T.border+'" miterlimit="1000" joinstyle="miter"'))})),setTimeout(function(){b.tip.css({display:"inline-block",visibility:"visible"})},1),t!==s&&m.position(e)},position:function(e){var t=b.tip,n={},i=Math.max(0,g.offset),o,p,d;return g.corner===s||!t?s:(e=e||m.corner,o=e.precedance,p=H(e),d=[e.x,e.y],o===u&&d.reverse(),r.each(d,function(t,r){var s,u,d;r===v?(s=o===a?h:c,n[s]="50%",n["margin-"+s]=-Math.round(p[o===a?f:l]/2)+i):(s=_(e,r),u=_(e,r,b.content),d=D(e),n[r]=t?u:i+(d>s?d:-s))}),n[e[o]]-=p[o===u?f:l],t.css({top:"",bottom:"",left:"",right:"",margin:""}).css(n),n)},destroy:function(){w.unbind(z),b.tip&&b.tip.find("*").remove().end().remove(),delete m.corner,delete m.mimic,delete m.size}}),m.init()}function Y(e){var n=this,o=e.options.show.modal,u=e.elements,a=u.tooltip,f=G+e.id,l;e.checks.modal={"^show.modal.(on|blur)$":function(){n.destroy(),n.init(),l.toggle(a.is(":visible"))}},r.extend(n,{init:function(){return o.on?(l=u.overlay=J.elem,a.attr(K,i).css("z-index",E.modal.zindex+r(Q).length).bind("tooltipshow"+f+" tooltiphide"+f,function(e,t,i){var s=e.originalEvent;if(e.target===a[0])if(s&&e.type==="tooltiphide"&&/mouse(leave|enter)/.test(s.type)&&r(s.relatedTarget).closest(l[0]).length)try{e.preventDefault()}catch(o){}else(!s||s&&!s.solo)&&n.toggle(e,e.type==="tooltipshow",i)}).bind("tooltipfocus"+f,function(e,t){if(e.isDefaultPrevented()||e.target!==a[0])return;var n=r(Q),i=E.modal.zindex+n.length,s=parseInt(a[0].style.zIndex,10);l[0].style.zIndex=i-1,n.each(function(){this.style.zIndex>s&&(this.style.zIndex-=1)}),n.filter("."+A).qtip("blur",e.originalEvent),a.addClass(A)[0].style.zIndex=i,J.update(t);try{e.preventDefault()}catch(o){}}).bind("tooltiphide"+f,function(e){e.target===a[0]&&r(Q).filter(":visible").not(a).last().qtip("focus",e)}),n):n},toggle:function(t,r,i){return t&&t.isDefaultPrevented()?n:(J.toggle(e,!!r,i),n)},destroy:function(){r([t,a]).removeAttr(K).unbind(f),J.toggle(e,s),delete u.overlay}}),n.init()}function et(n){var o=this,u=n.elements,a=n.options,c=u.tooltip,h=".ie6-"+n.id,p=r("select, object").length<1,d=0,v=s,m;n.checks.ie6={"^content|style$":function(e,t,n){redraw()}},r.extend(o,{init:function(){var n=r(e),s;p&&(u.bgiframe=r('<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';"  style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>'),u.bgiframe.appendTo(c),c.bind("tooltipmove"+h,o.adjustBGIFrame)),m=r("<div/>",{id:"qtip-rcontainer"}).appendTo(t.body),o.redraw(),u.overlay&&!v&&(s=function(){u.overlay[0].style.top=n.scrollTop()+"px"},n.bind("scroll.qtip-ie6, resize.qtip-ie6",s),s(),u.overlay.addClass("qtipmodal-ie6fix"),v=i)},adjustBGIFrame:function(){var e=n.get("dimensions"),t=n.plugins.tip,r=u.tip,i,s;s=parseInt(c.css("border-left-width"),10)||0,s={left:-s,top:-s},t&&r&&(i=t.corner.precedance==="x"?["width","left"]:["height","top"],s[i[1]]-=r[i[0]]()),u.bgiframe.css(s).css(e)},redraw:function(){if(n.rendered<1||d)return o;var e=a.style,t=a.position.container,r,i,s,u;return d=1,e.height&&c.css(l,e.height),e.width?c.css(f,e.width):(c.css(f,"").appendTo(m),i=c.width(),i%2<1&&(i+=1),s=c.css("max-width")||"",u=c.css("min-width")||"",r=(s+u).indexOf("%")>-1?t.width()/100:0,s=(s.indexOf("%")>-1?r:1)*parseInt(s,10)||i,u=(u.indexOf("%")>-1?r:1)*parseInt(u,10)||0,i=s+u?Math.min(Math.max(i,u),s):i,c.css(f,Math.round(i)).appendTo(t)),d=0,o},destroy:function(){p&&u.bgiframe.remove(),c.unbind(h)}}),o.init()}var i=!0,s=!1,o=null,u="x",a="y",f="width",l="height",c="top",h="left",p="bottom",d="right",v="center",m="flip",g="flipinvert",y="shift",b="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",w,E,S,x="qtip",T="data-hasqtip",N={},C=["ui-widget","ui-tooltip"],k="div.qtip."+x,L=x+"-default",A=x+"-focus",O=x+"-hover",M="_replacedByqTip",_="oldtitle",D;w=r.fn.qtip=function(e,t,u){var a=(""+e).toLowerCase(),f=o,l=r.makeArray(arguments).slice(1),c=l[l.length-1],h=this[0]?r.data(this[0],"qtip"):o;if(!arguments.length&&h||a==="api")return h;if("string"==typeof e)return this.each(function(){var e=r.data(this,"qtip");if(!e)return i;c&&c.timeStamp&&(e.cache.event=c);if(a!=="option"&&a!=="options"||!t)e[a]&&e[a].apply(e[a],l);else{if(!r.isPlainObject(t)&&u===n)return f=e.get(t),s;e.set(t,u)}}),f!==o?f:this;if("object"==typeof e||!arguments.length)return h=H(r.extend(i,{},e)),w.bind.call(this,h,c)},w.bind=function(e,t){return this.each(function(o){function p(e){function t(){c.render(typeof e=="object"||u.show.ready),a.show.add(a.hide).unbind(l)}if(c.cache.disabled)return s;c.cache.event=r.extend({},e),c.cache.target=e?r(e.target):[n],u.show.delay>0?(clearTimeout(c.timers.show),c.timers.show=setTimeout(t,u.show.delay),f.show!==f.hide&&a.hide.bind(f.hide,function(){clearTimeout(c.timers.show)})):t()}var u,a,f,l,c,h;h=r.isArray(e.id)?e.id[o]:e.id,h=!h||h===s||h.length<1||N[h]?w.nextid++:N[h]=h,l=".qtip-"+h+"-create",c=j(r(this),h,e);if(c===s)return i;u=c.options,r.each(E,function(){this.initialize==="initialize"&&this(c)}),a={show:u.show.target,hide:u.hide.target},f={show:r.trim(""+u.show.event).replace(/ /g,l+" ")+l,hide:r.trim(""+u.hide.event).replace(/ /g,l+" ")+l},/mouse(over|enter)/i.test(f.show)&&!/mouse(out|leave)/i.test(f.hide)&&(f.hide+=" mouseleave"+l),a.show.bind("mousemove"+l,function(e){P(e),c.cache.onTarget=i}),a.show.bind(f.show,p),(u.show.ready||u.prerender)&&p(t)})},E=w.plugins={Corner:function(e){e=(""+e).replace(/([A-Z])/," $1").replace(/middle/gi,v).toLowerCase(),this.x=(e.match(/left|right/i)||e.match(/center/)||["inherit"])[0].toLowerCase(),this.y=(e.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase();var t=e.charAt(0);this.precedance=t==="t"||t==="b"?a:u,this.string=function(){return this.precedance===a?this.y+this.x:this.x+this.y},this.abbrev=function(){var e=this.x.substr(0,1),t=this.y.substr(0,1);return e===t?e:this.precedance===a?t+e:e+t},this.invertx=function(e){this.x=this.x===h?d:this.x===d?h:e||this.x},this.inverty=function(e){this.y=this.y===c?p:this.y===p?c:e||this.y},this.clone=function(){return{x:this.x,y:this.y,precedance:this.precedance,string:this.string,abbrev:this.abbrev,clone:this.clone,invertx:this.invertx,inverty:this.inverty}}},offset:function(e,n){function c(e,t){i.left+=t*e.scrollLeft(),i.top+=t*e.scrollTop()}var i=e.offset(),s=e.closest("body"),o=E.ie&&t.compatMode!=="CSS1Compat",u=n,a,f,l;if(u){do u.css("position")!=="static"&&(f=u.position(),i.left-=f.left+(parseInt(u.css("borderLeftWidth"),10)||0)+(parseInt(u.css("marginLeft"),10)||0),i.top-=f.top+(parseInt(u.css("borderTopWidth"),10)||0)+(parseInt(u.css("marginTop"),10)||0),!a&&(l=u.css("overflow"))!=="hidden"&&l!=="visible"&&(a=u));while((u=r(u[0].offsetParent)).length);(a&&a[0]!==s[0]||o)&&c(a||s,1)}return i},ie:function(){var e=3,n=t.createElement("div");while(n.innerHTML="<!--[if gt IE "+ ++e+"]><i></i><![endif]-->")if(!n.getElementsByTagName("i")[0])break;return e>4?e:s}(),iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||s,fn:{attr:function(e,t){if(this.length){var n=this[0],i="title",s=r.data(n,"qtip");if(e===i&&s&&"object"==typeof s&&s.options.suppress)return arguments.length<2?r.attr(n,_):(s&&s.options.content.attr===i&&s.cache.attr&&s.set("content.text",t),this.attr(_,t))}return r.fn["attr"+M].apply(this,arguments)},clone:function(e){var t=r([]),n="title",i=r.fn["clone"+M].apply(this,arguments);return e||i.filter("["+_+"]").attr("title",function(){return r.attr(this,_)}).removeAttr(_),i}}},r.each(E.fn,function(e,t){if(!t||r.fn[e+M])return i;var n=r.fn[e+M]=r.fn[e];r.fn[e]=function(){return t.apply(this,arguments)||n.apply(this,arguments)}}),r.ui||(r["cleanData"+M]=r.cleanData,r.cleanData=function(e){for(var t=0,i;(i=e[t])!==n&&i.getAttribute(T);t++)try{r(i).triggerHandler("removeqtip")}catch(s){}r["cleanData"+M](e)}),w.version="2.0.1-28-",w.nextid=0,w.inactiveEvents="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),w.zindex=15e3,w.defaults={prerender:s,id:s,overwrite:i,suppress:i,content:{text:i,attr:"title",deferred:s,title:{text:s,button:s}},position:{my:"top left",at:"bottom right",target:s,container:s,viewport:s,adjust:{x:0,y:0,mouse:i,scroll:i,resize:i,method:"flipinvert flipinvert"},effect:function(e,t,n){r(this).animate(t,{duration:200,queue:s})}},show:{target:s,event:"mouseenter",effect:i,delay:90,solo:s,ready:s,autofocus:s},hide:{target:s,event:"mouseleave",effect:i,delay:0,fixed:s,inactive:s,leave:"window",distance:s},style:{classes:"",widget:s,width:s,height:s,def:i},events:{render:o,move:o,show:o,hide:o,toggle:o,visible:o,hidden:o,focus:o,blur:o}},E.svg=function(e,n,i,s){var o=r(t),u=n[0],a={width:0,height:0,position:{top:1e10,left:1e10}},f,l,c,h,p;while(!u.getBBox)u=u.parentNode;if(u.getBBox&&u.parentNode){f=u.getBBox(),l=u.getScreenCTM(),c=u.farthestViewportElement||u;if(!c.createSVGPoint)return a;h=c.createSVGPoint(),h.x=f.x,h.y=f.y,p=h.matrixTransform(l),a.position.left=p.x,a.position.top=p.y,h.x+=f.width,h.y+=f.height,p=h.matrixTransform(l),a.width=p.x-a.position.left,a.height=p.y-a.position.top,a.position.left+=o.scrollLeft(),a.position.top+=o.scrollTop()}return a};var F,I=".qtip-ajax",q=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;F=E.ajax=function(e){var t=e.plugins.ajax;return"object"==typeof t?t:e.plugins.ajax=new R(e)},F.initialize="render",F.sanitize=function(e){var t=e.content,n;t&&"ajax"in t&&(n=t.ajax,typeof n!="object"&&(n=e.content.ajax={url:n}),"boolean"!=typeof n.once&&n.once&&(n.once=!!n.once))},r.extend(i,w.defaults,{content:{ajax:{loading:i,once:i}}});var U,z=".qtip-tip",W=!!t.createElement("canvas").getContext;U=E.tip=function(e){var t=e.plugins.tip;return"object"==typeof t?t:e.plugins.tip=new V(e)},U.initialize="render",U.sanitize=function(e){var t=e.style,n;t&&"tip"in t&&(n=e.style.tip,typeof n!="object"&&(e.style.tip={corner:n}),/string|boolean/i.test(typeof n.corner)||(n.corner=i),typeof n.width!="number"&&delete n.width,typeof n.height!="number"&&delete n.height,typeof n.border!="number"&&n.border!==i&&delete n.border,typeof n.offset!="number"&&delete n.offset)},r.extend(i,w.defaults,{style:{tip:{corner:i,mimic:s,width:12,height:6,border:i,offset:0}}});var $,J,K="is-modal-qtip",Q=k+"["+K+"]",G=".qtipmodal";J=function(){function h(e){if(r.expr[":"].focusable)return r.expr[":"].focusable;var t=!isNaN(r.attr(e,"tabindex")),n=e.nodeName.toLowerCase(),i,s,o;return"area"===n?(i=e.parentNode,s=i.name,!e.href||!s||i.nodeName.toLowerCase()!=="map"?!1:(o=r("img[usemap=#"+s+"]")[0],!!o&&o.is(":visible"))):/input|select|textarea|button|object/.test(n)?!e.disabled:"a"===n?e.href||t:t}function p(e){u.length<1&&e.length?e.not("body").blur():u.first().focus()}function d(e){if(!c.is(":visible"))return;var t=r(e.target),n=a.elements.tooltip,i=t.closest(k),o;o=i.length<1?s:parseInt(i[0].style.zIndex,10)>parseInt(n[0].style.zIndex,10),!o&&t.closest(k)[0]!==n[0]&&p(t),f=e.target===u[u.length-1]}var n=this,u={},a,f,l,c;r.extend(n,{init:function(){function i(){var e=r(this);c.css({height:e.height(),width:e.width()})}return c=n.elem=r("<div />",{id:"qtip-overlay",html:"<div></div>",mousedown:function(){return s}}).hide(),r(e).bind("resize"+G,i),i(),r(t.body).bind("focusin"+G,d),r(t).bind("keydown"+G,function(e){a&&a.options.show.modal.escape&&e.keyCode===27&&a.hide(e)}),c.bind("click"+G,function(e){a&&a.options.show.modal.blur&&a.hide(e)}),n},update:function(e){a=e,e.options.show.modal.stealfocus!==s?u=e.elements.tooltip.find("*").filter(function(){return h(this)}):u=[]},toggle:function(e,u,f){var h=r(t.body),d=e.elements.tooltip,v=e.options.show.modal,m=v.effect,g=u?"show":"hide",y=c.is(":visible"),b=r(Q).filter(":visible:not(:animated)").not(d),w;return n.update(e),u&&v.stealfocus!==s&&p(r(":focus")),c.toggleClass("blurs",v.blur),u&&c.css({left:0,top:0}).appendTo(t.body),c.is(":animated")&&y===u&&l!==s||!u&&b.length?n:(c.stop(i,s),r.isFunction(m)?m.call(c,u):m===s?c[g]():c.fadeTo(parseInt(f,10)||90,u?1:0,function(){u||c.hide()}),u||c.queue(function(e){c.css({left:"",top:""}),b.length||c.detach(),e()}),l=u,a.destroyed&&(a=o),n)}}),n.init()},J=new J,$=E.modal=function(e){var t=e.plugins.modal;return"object"==typeof t?t:e.plugins.modal=new Y(e)},$.sanitize=function(e){e.show&&(typeof e.show.modal!="object"?e.show.modal={on:!!e.show.modal}:typeof e.show.modal.on=="undefined"&&(e.show.modal.on=i))},$.zindex=w.zindex-200,$.initialize="render",r.extend(i,w.defaults,{show:{modal:{on:s,effect:i,blur:i,stealfocus:i,escape:i}}}),E.viewport=function(n,r,i,s,o,m,b){function j(e,t,n,i,s,o,u,a,f){var l=r[s],c=S[e],h=T[e],p=n===y,d=-O.offset[s]+A.offset[s]+A["scroll"+s],m=c===s?f:c===o?-f:-f/2,b=h===s?a:h===o?-a:-a/2,w=_&&_.size?_.size[u]||0:0,E=_&&_.corner&&_.corner.precedance===e&&!p?w:0,x=d-l+E,N=l+f-A[u]-d+E,C=m-(S.precedance===e||c===S[t]?b:0)-(h===v?a/2:0);return p?(E=_&&_.corner&&_.corner.precedance===t?w:0,C=(c===s?1:-1)*m-E,r[s]+=x>0?x:N>0?-N:0,r[s]=Math.max(-O.offset[s]+A.offset[s]+(E&&_.corner[e]===v?_.offset:0),l-C,Math.min(Math.max(-O.offset[s]+A.offset[s]+A[u],l+C),r[s]))):(i*=n===g?2:0,x>0&&(c!==s||N>0)?(r[s]-=C+i,H["invert"+e](s)):N>0&&(c!==o||x>0)&&(r[s]-=(c===v?-C:C)+i,H["invert"+e](o)),r[s]<d&&-r[s]>N&&(r[s]=l,H=S.clone())),r[s]-l}var w=i.target,E=n.elements.tooltip,S=i.my,T=i.at,N=i.adjust,C=N.method.split(" "),k=C[0],L=C[1]||C[0],A=i.viewport,O=i.container,M=n.cache,_=n.plugins.tip,D={left:0,top:0},P,H,B;if(!A.jquery||w[0]===e||w[0]===t.body||N.method==="none")return D;P=E.css("position")==="fixed",A={elem:A,height:A[(A[0]===e?"h":"outerH")+"eight"](),width:A[(A[0]===e?"w":"outerW")+"idth"](),scrollleft:P?0:A.scrollLeft(),scrolltop:P?0:A.scrollTop(),offset:A.offset()||{left:0,top:0}},O={elem:O,scrollLeft:O.scrollLeft(),scrollTop:O.scrollTop(),offset:O.offset()||{left:0,top:0}};if(k!=="shift"||L!=="shift")H=S.clone();return D={left:k!=="none"?j(u,a,k,N.x,h,d,f,s,m):0,top:L!=="none"?j(a,u,L,N.y,c,p,l,o,b):0},H&&M.lastClass!==(B=x+"-pos-"+H.abbrev())&&E.removeClass(n.cache.lastClass).addClass(n.cache.lastClass=B),D},E.imagemap=function(e,t,n,i){function E(e,t,n){var r=0,i=1,s=1,o=0,u=0,a=e.width,f=e.height;while(a>0&&f>0&&i>0&&s>0){a=Math.floor(a/2),f=Math.floor(f/2),n.x===h?i=a:n.x===d?i=e.width-a:i+=Math.floor(a/2),n.y===c?s=f:n.y===p?s=e.height-f:s+=Math.floor(f/2),r=t.length;while(r--){if(t.length<2)break;o=t[r][0]-e.position.left,u=t[r][1]-e.position.top,(n.x===h&&o>=i||n.x===d&&o<=i||n.x===v&&(o<i||o>e.width-i)||n.y===c&&u>=s||n.y===p&&u<=s||n.y===v&&(u<s||u>e.height-s))&&t.splice(r,1)}}return{left:t[0][0],top:t[0][1]}}t.jquery||(t=r(t));var s=e.cache.areas={},o=(t[0].shape||t.attr("shape")).toLowerCase(),u=t[0].coords||t.attr("coords"),a=u.split(","),f=[],l=r('img[usemap="#'+t.parent("map").attr("name")+'"]'),m=l.offset(),g={width:0,height:0,position:{top:1e10,right:0,bottom:0,left:1e10}},y=0,b=0,w;m.left+=Math.ceil((l.outerWidth()-l.width())/2),m.top+=Math.ceil((l.outerHeight()-l.height())/2);if(o==="poly"){y=a.length;while(y--)b=[parseInt(a[--y],10),parseInt(a[y+1],10)],b[0]>g.position.right&&(g.position.right=b[0]),b[0]<g.position.left&&(g.position.left=b[0]),b[1]>g.position.bottom&&(g.position.bottom=b[1]),b[1]<g.position.top&&(g.position.top=b[1]),f.push(b)}else{y=-1;while(y++<a.length)f.push(parseInt(a[y],10))}switch(o){case"rect":g={width:Math.abs(f[2]-f[0]),height:Math.abs(f[3]-f[1]),position:{left:Math.min(f[0],f[2]),top:Math.min(f[1],f[3])}};break;case"circle":g={width:f[2]+2,height:f[2]+2,position:{left:f[0],top:f[1]}};break;case"poly":g.width=Math.abs(g.position.right-g.position.left),g.height=Math.abs(g.position.bottom-g.position.top),n.abbrev()==="c"?g.position={left:g.position.left+g.width/2,top:g.position.top+g.height/2}:(s[n+u]||(g.position=E(g,f.slice(),n),i&&(i[0]==="flip"||i[1]==="flip")&&(g.offset=E(g,f.slice(),{x:n.x===h?d:n.x===d?h:v,y:n.y===c?p:n.y===p?c:v}),g.offset.left-=g.position.left,g.offset.top-=g.position.top),s[n+u]=g),g=s[n+u]),g.width=g.height=0}return g.position.left+=m.left,g.position.top+=m.top,g};var Z;Z=E.ie6=function(e){var t=e.plugins.ie6;return E.ie!==6?s:"object"==typeof t?t:e.plugins.ie6=new et(e)},Z.initialize="render"})})(window,document);

})(njQuery);// Spectrum Colorpicker v1.0.9
// https://github.com/bgrins/spectrum
// Author: Brian Grinstead
// License: MIT

(function (window, $, undefined) {
    var defaultOpts = {

        // Events
        beforeShow: noop,
        move: noop,
        change: noop,
        show: noop,
        hide: noop,

        // Options
        color: false,
        flat: false,
        showInput: false,
        showButtons: true,
        clickoutFiresChange: false,
        showInitial: false,
        showPalette: false,
        showPaletteOnly: false,
        showSelectionPalette: true,
        localStorageKey: false,
        maxSelectionSize: 7,
        cancelText: "cancel",
        chooseText: "choose",
        preferredFormat: false,
        className: "",
        showAlpha: false,
        theme: "sp-light",
        palette: ['fff', '000'],
        selectionPalette: [],
        disabled: false
    },
    spectrums = [],
    IE = !!/msie/i.exec( window.navigator.userAgent ),
    rgbaSupport = (function() {
        function contains( str, substr ) {
            return !!~('' + str).indexOf(substr);
        }

        var elem = document.createElement('div');
        var style = elem.style;
        style.cssText = 'background-color:rgba(0,0,0,.5)';
        return contains(style.backgroundColor, 'rgba') || contains(style.backgroundColor, 'hsla');
    })(),
    replaceInput = [
        "<div class='sp-replacer'>",
            "<div class='sp-preview'><div class='sp-preview-inner'></div></div>",
            "<div class='sp-dd'>&#9650;</div>",
        "</div>"
    ].join(''),
    markup = (function () {

        // IE does not support gradients with multiple stops, so we need to simulate
        //  that for the rainbow slider with 8 divs that each have a single gradient
        var gradientFix = "";
        if (IE) {
            for (var i = 1; i <= 6; i++) {
                gradientFix += "<div class='sp-" + i + "'></div>";
            }
        }

        return [
            "<div class='sp-container'>",
                "<div class='sp-palette-container'>",
                    "<div class='sp-palette sp-thumb sp-cf'></div>",
                "</div>",
                "<div class='sp-picker-container'>",
                    "<div class='sp-top sp-cf'>",
                        "<div class='sp-fill'></div>",
                        "<div class='sp-top-inner'>",
                            "<div class='sp-color'>",
                                "<div class='sp-sat'>",
                                    "<div class='sp-val'>",
                                        "<div class='sp-dragger'></div>",
                                    "</div>",
                                "</div>",
                            "</div>",
                            "<div class='sp-hue'>",
                                "<div class='sp-slider'></div>",
                                gradientFix,
                            "</div>",
                        "</div>",
                        "<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>",
                    "</div>",
                    "<div class='sp-input-container sp-cf'>",
                        "<input class='sp-input' type='text' spellcheck='false'  />",
                    "</div>",
                    "<div class='sp-initial sp-thumb sp-cf'></div>",
                    "<div class='sp-button-container sp-cf'>",
                        "<a class='sp-cancel' href='#'></a>",
                        "<button class='sp-choose'></button>",
                    "</div>",
                "</div>",
            "</div>"
        ].join("");
    })();

    function paletteTemplate (p, color, className) {
        var html = [];
        for (var i = 0; i < p.length; i++) {
            var tiny = tinycolor(p[i]);
            var c = tiny.toHsl().l < 0.5 ? "sp-thumb-el sp-thumb-dark" : "sp-thumb-el sp-thumb-light";
            c += (tinycolor.equals(color, p[i])) ? " sp-thumb-active" : "";

            var swatchStyle = rgbaSupport ? ("background-color:" + tiny.toRgbString()) : "filter:" + tiny.toFilter();
            html.push('<span title="' + tiny.toRgbString() + '" data-color="' + tiny.toRgbString() + '" class="' + c + '"><span class="sp-thumb-inner" style="' + swatchStyle + ';" /></span>');
        }
        return "<div class='sp-cf " + className + "'>" + html.join('') + "</div>";
    }

    function hideAll() {
        for (var i = 0; i < spectrums.length; i++) {
            if (spectrums[i]) {
                spectrums[i].hide();
            }
        }
    }

    function instanceOptions(o, callbackContext) {
        var opts = $.extend({}, defaultOpts, o);
        opts.callbacks = {
            'move': bind(opts.move, callbackContext),
            'change': bind(opts.change, callbackContext),
            'show': bind(opts.show, callbackContext),
            'hide': bind(opts.hide, callbackContext),
            'beforeShow': bind(opts.beforeShow, callbackContext)
        };

        return opts;
    }

    function spectrum(element, o) {

        var opts = instanceOptions(o, element),
            flat = opts.flat,
            showSelectionPalette = opts.showSelectionPalette,
            localStorageKey = opts.localStorageKey,
            theme = opts.theme,
            callbacks = opts.callbacks,
            resize = throttle(reflow, 10),
            visible = false,
            dragWidth = 0,
            dragHeight = 0,
            dragHelperHeight = 0,
            slideHeight = 0,
            slideWidth = 0,
            alphaWidth = 0,
            alphaSlideHelperWidth = 0,
            slideHelperHeight = 0,
            currentHue = 0,
            currentSaturation = 0,
            currentValue = 0,
            currentAlpha = 1,
            palette = opts.palette.slice(0),
            paletteArray = $.isArray(palette[0]) ? palette : [palette],
            selectionPalette = opts.selectionPalette.slice(0),
            draggingClass = "sp-dragging";

        var doc = element.ownerDocument,
            body = doc.body,
            boundElement = $(element),
            disabled = false,
            container = $(markup, doc).addClass(theme),
            dragger = container.find(".sp-color"),
            dragHelper = container.find(".sp-dragger"),
            slider = container.find(".sp-hue"),
            slideHelper = container.find(".sp-slider"),
            alphaSliderInner = container.find(".sp-alpha-inner"),
            alphaSlider = container.find(".sp-alpha"),
            alphaSlideHelper = container.find(".sp-alpha-handle"),
            textInput = container.find(".sp-input"),
            paletteContainer = container.find(".sp-palette"),
            initialColorContainer = container.find(".sp-initial"),
            cancelButton = container.find(".sp-cancel"),
            chooseButton = container.find(".sp-choose"),
            isInput = boundElement.is("input"),
            shouldReplace = isInput && !flat,
            replacer = (shouldReplace) ? $(replaceInput).addClass(theme) : $([]),
            offsetElement = (shouldReplace) ? replacer : boundElement,
            previewElement = replacer.find(".sp-preview-inner"),
            initialColor = opts.color || (isInput && boundElement.val()),
            colorOnShow = false,
            preferredFormat = opts.preferredFormat,
            currentPreferredFormat = preferredFormat,
            clickoutFiresChange = !opts.showButtons || opts.clickoutFiresChange;


        function applyOptions() {

            container.toggleClass("sp-flat", flat);
            container.toggleClass("sp-input-disabled", !opts.showInput);
            container.toggleClass("sp-alpha-enabled", opts.showAlpha);
            container.toggleClass("sp-buttons-disabled", !opts.showButtons || flat);
            container.toggleClass("sp-palette-disabled", !opts.showPalette);
            container.toggleClass("sp-palette-only", opts.showPaletteOnly);
            container.toggleClass("sp-initial-disabled", !opts.showInitial);
            container.addClass(opts.className);

            reflow();
        }

        function initialize() {

            if (IE) {
                container.find("*:not(input)").attr("unselectable", "on");
            }

            applyOptions();

            if (shouldReplace) {
                //boundElement.hide().after(replacer);
                boundElement.parent().after(replacer);
            }

            if (flat) {
                boundElement.parent().after(container).hide();
            }
            else {
                $(body).append(container.hide());
            }

            if (localStorageKey && window.localStorage) {

                // Migrate old palettes over to new format.  May want to remove this eventually.
                try {
                    var oldPalette = window.localStorage[localStorageKey].split(",#");
                    if (oldPalette.length > 1) {
                        delete window.localStorage[localStorageKey];
                        $.each(oldPalette, function(i, c) {
                             addColorToSelectionPalette(c);
                        });
                    }
                }
                catch(e) { }

                try {
                    selectionPalette = window.localStorage[localStorageKey].split(";");
                }
                catch (e) { }
            }

            offsetElement.bind("click.spectrum touchstart.spectrum", function (e) {
                if (!disabled) {
                    toggle();
                }

                e.stopPropagation();

                if (!$(e.target).is("input")) {
                    e.preventDefault();
                }
            });

            if(boundElement.is(":disabled") || (opts.disabled === true)) {
                disable();
            }

            // Prevent clicks from bubbling up to document.  This would cause it to be hidden.
            container.click(stopPropagation);

            // Handle user typed input
            textInput.change(setFromTextInput);
            textInput.bind("paste", function () {
                setTimeout(setFromTextInput, 1);
            });
            textInput.keydown(function (e) { if (e.keyCode == 13) { setFromTextInput(); } });

            cancelButton.text(opts.cancelText);
            cancelButton.bind("click.spectrum", function (e) {
                e.stopPropagation();
                e.preventDefault();
                hide("cancel");
            });

            chooseButton.text(opts.chooseText);
            chooseButton.bind("click.spectrum", function (e) {
                e.stopPropagation();
                e.preventDefault();

                if (isValid()) {
                    updateOriginalInput(true);
                    hide();
                }
            });

            draggable(alphaSlider, function (dragX, dragY, e) {
                currentAlpha = (dragX / alphaWidth);
                if (e.shiftKey) {
                    currentAlpha = Math.round(currentAlpha * 10) / 10;
                }

                move();
            });

            draggable(slider, function (dragX, dragY) {
                currentHue = parseFloat(dragY / slideHeight);
                move();
            }, dragStart, dragStop);

            draggable(dragger, function (dragX, dragY) {
                currentSaturation = parseFloat(dragX / dragWidth);
                currentValue = parseFloat((dragHeight - dragY) / dragHeight);
                move();
            }, dragStart, dragStop);

            if (!!initialColor) {
                set(initialColor);

                // In case color was black - update the preview UI and set the format
                // since the set function will not run (default color is black).
                updateUI();
                currentPreferredFormat = preferredFormat || tinycolor(initialColor).format;

                addColorToSelectionPalette(initialColor);
            }
            else {
                updateUI();
            }

            if (flat) {
                show();
            }

            function palletElementClick(e) {
                if (e.data && e.data.ignore) {
                    set($(this).data("color"));
                    move();
                }
                else {
                    set($(this).data("color"));
                    updateOriginalInput(true);
                    move();
                    hide();
                }

                return false;
            }

            var paletteEvent = IE ? "mousedown.spectrum" : "click.spectrum touchstart.spectrum";
            paletteContainer.delegate(".sp-thumb-el", paletteEvent, palletElementClick);
            initialColorContainer.delegate(".sp-thumb-el:nth-child(1)", paletteEvent, { ignore: true }, palletElementClick);
        }

        function addColorToSelectionPalette(color) {
            if (showSelectionPalette) {
                var colorRgb = tinycolor(color).toRgbString();
                if ($.inArray(colorRgb, selectionPalette) === -1) {
                    selectionPalette.push(colorRgb);
                }

                if (localStorageKey && window.localStorage) {
                    try {
                        window.localStorage[localStorageKey] = selectionPalette.join(";");
                    }
                    catch(e) { }
                }
            }
        }

        function getUniqueSelectionPalette() {
            var unique = [];
            var p = selectionPalette;
            var paletteLookup = {};
            var rgb;

            if (opts.showPalette) {

                for (var i = 0; i < paletteArray.length; i++) {
                    for (var j = 0; j < paletteArray[i].length; j++) {
                        rgb = tinycolor(paletteArray[i][j]).toRgbString();
                        paletteLookup[rgb] = true;
                    }
                }

                for (i = 0; i < p.length; i++) {
                    rgb = tinycolor(p[i]).toRgbString();

                    if (!paletteLookup.hasOwnProperty(rgb)) {
                        unique.push(p[i]);
                        paletteLookup[rgb] = true;
                    }
                }
            }

            return unique.reverse().slice(0, opts.maxSelectionSize);
        }

        function drawPalette() {

            var currentColor = get();

            var html = $.map(paletteArray, function (palette, i) {
                return paletteTemplate(palette, currentColor, "sp-palette-row sp-palette-row-" + i);
            });

            if (selectionPalette) {
                html.push(paletteTemplate(getUniqueSelectionPalette(), currentColor, "sp-palette-row sp-palette-row-selection"));
            }

            paletteContainer.html(html.join(""));
        }

        function drawInitial() {
            if (opts.showInitial) {
                var initial = colorOnShow;
                var current = get();
                initialColorContainer.html(paletteTemplate([initial, current], current, "sp-palette-row-initial"));
            }
        }

        function dragStart() {
            if (dragHeight === 0 || dragWidth === 0 || slideHeight === 0) {
                reflow();
            }
            container.addClass(draggingClass);
        }

        function dragStop() {
            container.removeClass(draggingClass);
        }

        function setFromTextInput() {
            var tiny = tinycolor(textInput.val());
            if (tiny.ok) {
                set(tiny);
            }
            else {
                textInput.addClass("sp-validation-error");
            }
        }

        function toggle() {
            if (visible) {
                hide();
            }
            else {
                show();
            }
        }

        function show() {
            if (visible) {
                reflow();
                return;
            }
            if (callbacks.beforeShow(get()) === false) return;

            hideAll();
            visible = true;

            $(doc).bind("click.spectrum", hide);
            $(window).bind("resize.spectrum", resize);
            replacer.addClass("sp-active");
            container.show();

            if (opts.showPalette) {
                drawPalette();
            }
            reflow();
            updateUI();

            colorOnShow = get();

            drawInitial();
            callbacks.show(colorOnShow);
        }

        function hide(e) {

            // Return on right click
            if (e && e.type == "click" && e.button == 2) { return; }

            // Return if hiding is unnecessary
            if (!visible || flat) { return; }
            visible = false;

            $(doc).unbind("click.spectrum", hide);
            $(window).unbind("resize.spectrum", resize);

            replacer.removeClass("sp-active");
            container.hide();

            var colorHasChanged = !tinycolor.equals(get(), colorOnShow);

            if (colorHasChanged) {
                if (clickoutFiresChange && e !== "cancel") {
                    updateOriginalInput(true);
                }
                else {
                    revert();
                }
            }

            callbacks.hide(get());
        }

        function revert() {
            set(colorOnShow, true);
        }

        function set(color, ignoreFormatChange) {
            if (tinycolor.equals(color, get())) {
                return;
            }

            var newColor = tinycolor(color);
            var newHsv = newColor.toHsv();

            currentHue = newHsv.h;
            currentSaturation = newHsv.s;
            currentValue = newHsv.v;
            currentAlpha = newHsv.a;

            updateUI();

            if (!ignoreFormatChange) {
                currentPreferredFormat = preferredFormat || newColor.format;
            }
        }

        function get() {
            return tinycolor.fromRatio({ h: currentHue, s: currentSaturation, v: currentValue, a: Math.round(currentAlpha * 100) / 100 });
        }

        function isValid() {
            return !textInput.hasClass("sp-validation-error");
        }

        function move() {
            updateUI();

            callbacks.move(get());
        }

        function updateUI() {

            textInput.removeClass("sp-validation-error");

            updateHelperLocations();

            // Update dragger background color (gradients take care of saturation and value).
            var flatColor = tinycolor({ h: currentHue, s: "1.0", v: "1.0" });
            dragger.css("background-color", '#'+flatColor.toHexString());

            // Get a format that alpha will be included in (hex and names ignore alpha)
            var format = currentPreferredFormat;
            if (currentAlpha < 1) {
                if (format === "hex" || format === "name") {
                    format = "rgb";
                }
            }

            var realColor = get(),
                realHex = realColor.toHexString(),
                realRgb = realColor.toRgbString();


            // Update the replaced elements background color (with actual selected color)
            if (rgbaSupport || realColor.alpha === 1) {
                previewElement.css("background-color", realRgb);
            }
            else {
                previewElement.css("background-color", "transparent");
                previewElement.css("filter", realColor.toFilter());
            }

            if (opts.showAlpha) {
                var rgb = realColor.toRgb();
                rgb.a = 0;
                var realAlpha = tinycolor(rgb).toRgbString();
                var gradient = "linear-gradient(left, " + realAlpha + ", " + realHex + ")";

                if (IE) {
                    alphaSliderInner.css("filter", tinycolor(realAlpha).toFilter({ gradientType: 1 }, realHex));
                }
                else {
                    alphaSliderInner.css("background", "-webkit-" + gradient);
                    alphaSliderInner.css("background", "-moz-" + gradient);
                    alphaSliderInner.css("background", "-ms-" + gradient);
                    alphaSliderInner.css("background", gradient);
                }
            }


            // Update the text entry input as it changes happen
            if (opts.showInput) {
                if (currentAlpha < 1) {
                    if (format === "hex" || format === "name") {
                        format = "rgb";
                    }
                }
                textInput.val(realColor.toString(format));
            }

            if (opts.showPalette) {
                drawPalette();
            }

            drawInitial();
        }

        function updateHelperLocations() {
            var s = currentSaturation;
            var v = currentValue;

            // Where to show the little circle in that displays your current selected color
            var dragX = s * dragWidth;
            var dragY = dragHeight - (v * dragHeight);
            dragX = Math.max(
                -dragHelperHeight,
                Math.min(dragWidth - dragHelperHeight, dragX - dragHelperHeight)
            );
            dragY = Math.max(
                -dragHelperHeight,
                Math.min(dragHeight - dragHelperHeight, dragY - dragHelperHeight)
            );
            dragHelper.css({
                "top": dragY,
                "left": dragX
            });

            var alphaX = currentAlpha * alphaWidth;
            alphaSlideHelper.css({
                "left": alphaX - (alphaSlideHelperWidth / 2)
            });

            // Where to show the bar that displays your current selected hue
            var slideY = (currentHue) * slideHeight;
            slideHelper.css({
                "top": slideY - slideHelperHeight
            });
        }

        function updateOriginalInput(fireCallback) {
            var color = get();

            if (isInput) {
                boundElement.val(color.toString(currentPreferredFormat)).change();
            }

            //var hasChanged = !tinycolor.equals(color, colorOnShow);
            var hasChanged = 1;
            
            colorOnShow = color;

            // Update the selection palette with the current color
            addColorToSelectionPalette(color);
            if (fireCallback && hasChanged) {
                callbacks.change(color);
            }
        }

        function reflow() {
            dragWidth = dragger.width();
            dragHeight = dragger.height();
            dragHelperHeight = dragHelper.height();
            slideWidth = slider.width();
            slideHeight = slider.height();
            slideHelperHeight = slideHelper.height();
            alphaWidth = alphaSlider.width();
            alphaSlideHelperWidth = alphaSlideHelper.width();

            if (!flat) {
                container.offset(getOffset(container, offsetElement));
            }

            updateHelperLocations();
        }

        function destroy() {
            boundElement.show();
            offsetElement.unbind("click.spectrum touchstart.spectrum");
            container.remove();
            replacer.remove();
            spectrums[spect.id] = null;
        }

        function option(optionName, optionValue) {
            if (optionName === undefined) {
                return $.extend({}, opts);
            }
            if (optionValue === undefined) {
                return opts[optionName];
            }

            opts[optionName] = optionValue;
            applyOptions();
        }

        function enable() {
            disabled = false;
            boundElement.attr("disabled", false);
            offsetElement.removeClass("sp-disabled");
        }

        function disable() {
            hide();
            disabled = true;
            boundElement.attr("disabled", true);
            offsetElement.addClass("sp-disabled");
        }

        initialize();

        var spect = {
            show: show,
            hide: hide,
            toggle: toggle,
            reflow: reflow,
            option: option,
            enable: enable,
            disable: disable,
            set: function (c) {
                set(c);
                updateOriginalInput();
            },
            get: get,
            destroy: destroy,
            container: container
        };

        spect.id = spectrums.push(spect) - 1;

        return spect;
    }

    /**
    * checkOffset - get the offset below/above and left/right element depending on screen position
    * Thanks https://github.com/jquery/jquery-ui/blob/master/ui/jquery.ui.datepicker.js
    */
    function getOffset(picker, input) {
        var extraY = 0;
        var dpWidth = picker.outerWidth();
        var dpHeight = picker.outerHeight();
        var inputHeight = input.outerHeight();
        var doc = picker[0].ownerDocument;
        var docElem = doc.documentElement;
        var viewWidth = docElem.clientWidth + $(doc).scrollLeft();
        var viewHeight = docElem.clientHeight + $(doc).scrollTop();
        var offset = input.offset();
        offset.top += inputHeight;

        offset.left -=
            Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ?
            Math.abs(offset.left + dpWidth - viewWidth) : 0);

        offset.top -=
            Math.min(offset.top, ((offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ?
            Math.abs(dpHeight + inputHeight - extraY) : extraY));

        return offset;
    }

    /**
    * noop - do nothing
    */
    function noop() {

    }

    /**
    * stopPropagation - makes the code only doing this a little easier to read in line
    */
    function stopPropagation(e) {
        e.stopPropagation();
    }

    /**
    * Create a function bound to a given object
    * Thanks to underscore.js
    */
    function bind(func, obj) {
        var slice = Array.prototype.slice;
        var args = slice.call(arguments, 2);
        return function () {
            return func.apply(obj, args.concat(slice.call(arguments)));
        };
    }

    /**
    * Lightweight drag helper.  Handles containment within the element, so that
    * when dragging, the x is within [0,element.width] and y is within [0,element.height]
    */
    function draggable(element, onmove, onstart, onstop) {
        onmove = onmove || function () { };
        onstart = onstart || function () { };
        onstop = onstop || function () { };
        var doc = element.ownerDocument || document;
        var dragging = false;
        var offset = {};
        var maxHeight = 0;
        var maxWidth = 0;
        var hasTouch = ('ontouchstart' in window);

        var duringDragEvents = {};
        duringDragEvents["selectstart"] = prevent;
        duringDragEvents["dragstart"] = prevent;
        duringDragEvents[(hasTouch ? "touchmove" : "mousemove")] = move;
        duringDragEvents[(hasTouch ? "touchend" : "mouseup")] = stop;

        function prevent(e) {
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            if (e.preventDefault) {
                e.preventDefault();
            }
            e.returnValue = false;
        }

        function move(e) {
            if (dragging) {
                // Mouseup happened outside of window
                if (IE && document.documentMode < 9 && !e.button) {
                    return stop();
                }

                var touches = e.originalEvent.touches;
                var pageX = touches ? touches[0].pageX : e.pageX;
                var pageY = touches ? touches[0].pageY : e.pageY;

                var dragX = Math.max(0, Math.min(pageX - offset.left, maxWidth));
                var dragY = Math.max(0, Math.min(pageY - offset.top, maxHeight));

                if (hasTouch) {
                    // Stop scrolling in iOS
                    prevent(e);
                }

                onmove.apply(element, [dragX, dragY, e]);
            }
        }
        function start(e) {
            var rightclick = (e.which) ? (e.which == 3) : (e.button == 2);
            var touches = e.originalEvent.touches;

            if (!rightclick && !dragging) {
                if (onstart.apply(element, arguments) !== false) {
                    dragging = true;
                    maxHeight = $(element).height();
                    maxWidth = $(element).width();
                    offset = $(element).offset();

                    $(doc).bind(duringDragEvents);
                    $(doc.body).addClass("sp-dragging");

                    if (!hasTouch) {
                        move(e);
                    }

                    prevent(e);
                }
            }
        }
        function stop() {
            if (dragging) {
                $(doc).unbind(duringDragEvents);
                $(doc.body).removeClass("sp-dragging");
                onstop.apply(element, arguments);
            }
            dragging = false;
        }

        $(element).bind(hasTouch ? "touchstart" : "mousedown", start);
    }

    function throttle(func, wait, debounce) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var throttler = function () {
                timeout = null;
                func.apply(context, args);
            };
            if (debounce) clearTimeout(timeout);
            if (debounce || !timeout) timeout = setTimeout(throttler, wait);
        };
    }


    /**
    * Define a jQuery plugin
    */
    var dataID = "spectrum.id";
    $.fn.spectrum = function (opts, extra) {

        if (typeof opts == "string") {

            var returnValue = this;
            var args = Array.prototype.slice.call( arguments, 1 );

            this.each(function () {
                var spect = spectrums[$(this).data(dataID)];
                if (spect) {

                    var method = spect[opts];
                    if (!method) {
                        throw new Error( "Spectrum: no such method: '" + opts + "'" );
                    }

                    if (opts == "get") {
                        returnValue = spect.get();
                    }
                    else if (opts == "container") {
                        returnValue = spect.container;
                    }
                    else if (opts == "option") {
                        returnValue = spect.option.apply(spect, args);
                    }
                    else if (opts == "destroy") {
                        spect.destroy();
                        $(this).removeData(dataID);
                    }
                    else {
                        method.apply(spect, args);
                    }
                }
            });

            return returnValue;
        }

        // Initializing a new instance of spectrum
        return this.spectrum("destroy").each(function () {
            var spect = spectrum(this, opts);
            $(this).data(dataID, spect.id);
        });
    };

    $.fn.spectrum.load = true;
    $.fn.spectrum.loadOpts = {};
    $.fn.spectrum.draggable = draggable;
    $.fn.spectrum.defaults = defaultOpts;

    $.spectrum = { };
    $.spectrum.localization = { };
    $.spectrum.palettes = { };

    $.fn.spectrum.processNativeColorInputs = function () {
        var colorInput = $("<input type='color' value='!' />")[0];
        var supportsColor = colorInput.type === "color" && colorInput.value != "!";

        if (!supportsColor) {
            $("input[type=color]").spectrum({
                preferredFormat: "hex6"
            });
        }
    };

    // TinyColor.js - <https://github.com/bgrins/TinyColor> - 2011 Brian Grinstead - v0.5

    (function (window) {

        var trimLeft = /^[\s,#]+/,
        trimRight = /\s+$/,
        tinyCounter = 0,
        math = Math,
        mathRound = math.round,
        mathMin = math.min,
        mathMax = math.max,
        mathRandom = math.random,
        parseFloat = window.parseFloat;

        function tinycolor(color, opts) {

            // If input is already a tinycolor, return itself
            if (typeof color == "object" && color.hasOwnProperty("_tc_id")) {
                return color;
            }

            var rgb = inputToRGB(color);
            var r = rgb.r, g = rgb.g, b = rgb.b, a = parseFloat(rgb.a), format = rgb.format;

            return {
                ok: rgb.ok,
                format: format,
                _tc_id: tinyCounter++,
                alpha: a,
                toHsv: function () {
                    var hsv = rgbToHsv(r, g, b);
                    return { h: hsv.h, s: hsv.s, v: hsv.v, a: a };
                },
                toHsvString: function () {
                    var hsv = rgbToHsv(r, g, b);
                    var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
                    return (a == 1) ?
                  "hsv(" + h + ", " + s + "%, " + v + "%)" :
                  "hsva(" + h + ", " + s + "%, " + v + "%, " + a + ")";
                },
                toHsl: function () {
                    var hsl = rgbToHsl(r, g, b);
                    return { h: hsl.h, s: hsl.s, l: hsl.l, a: a };
                },
                toHslString: function () {
                    var hsl = rgbToHsl(r, g, b);
                    var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
                    return (a == 1) ?
                  "hsl(" + h + ", " + s + "%, " + l + "%)" :
                  "hsla(" + h + ", " + s + "%, " + l + "%, " + a + ")";
                },
                toHex: function () {
                    return rgbToHex(r, g, b);
                },
                toHexString: function (force6Char) {
                    return rgbToHex(r, g, b, force6Char);
                },
                toHexString8: function () {
                    return rgbToHex(r, g, b, true)+pad2(mathRound(a*255).toString(16));
                },
                toRgb: function () {
                    return { r: mathRound(r), g: mathRound(g), b: mathRound(b), a: a };
                },
                toRgbString: function () {
                    return (a == 1) ?
                  "rgb(" + mathRound(r) + ", " + mathRound(g) + ", " + mathRound(b) + ")" :
                  "rgba(" + mathRound(r) + ", " + mathRound(g) + ", " + mathRound(b) + ", " + a + ")";
                },
                toName: function () {
                    return hexNames[rgbToHex(r, g, b)] || false;
                },
                toFilter: function (opts, secondColor) {

                    var hex = rgbToHex(r, g, b, true);
                    var secondHex = hex;
                    var alphaHex = Math.round(parseFloat(a) * 255).toString(16);
                    var secondAlphaHex = alphaHex;
                    var gradientType = opts && opts.gradientType ? "GradientType = 1, " : "";

                    if (secondColor) {
                        var s = tinycolor(secondColor);
                        secondHex = s.toHex();
                        secondAlphaHex = Math.round(parseFloat(s.alpha) * 255).toString(16);
                    }

                    return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr=#" + pad2(alphaHex) + hex + ",endColorstr=#" + pad2(secondAlphaHex) + secondHex + ")";
                },
                toString: function (format) {
                    format = format || this.format;
                    var formattedString = false;
                    if (format === "rgb") {
                        formattedString = this.toRgbString();
                    }
                    if (format === "hex") {
                        formattedString = this.toHexString();
                    }
                    if (format === "hex6") {
                        formattedString = this.toHexString(true);
                    }
                    if (format === "hex8") {
                        formattedString = this.toHexString8();
                    }
                    if (format === "name") {
                        formattedString = this.toName();
                    }
                    if (format === "hsl") {
                        formattedString = this.toHslString();
                    }
                    if (format === "hsv") {
                        formattedString = this.toHsvString();
                    }

                    return formattedString || this.toHexString(true);
                }
            };
        }

        // If input is an object, force 1 into "1.0" to handle ratios properly
        // String input requires "1.0" as input, so 1 will be treated as 1
        tinycolor.fromRatio = function (color) {

            if (typeof color == "object") {
                for (var i in color) {
                    if (color[i] === 1) {
                        color[i] = "1.0";
                    }
                }
            }

            return tinycolor(color);

        };

        // Given a string or object, convert that input to RGB
        // Possible string inputs:
        //
        //     "red"
        //     "#f00" or "f00"
        //     "#ff0000" or "ff0000"
        //     "rgb 255 0 0" or "rgb (255, 0, 0)"
        //     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
        //     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
        //     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
        //     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
        //     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
        //     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
        //
        function inputToRGB(color) {

            var rgb = { r: 0, g: 0, b: 0 };
            var a = 1;
            var ok = false;
            var format = false;

            if (typeof color == "string") {
                color = stringInputToObject(color);
            }

            if (typeof color == "object") {
                if (color.hasOwnProperty("r") && color.hasOwnProperty("g") && color.hasOwnProperty("b")) {
                    rgb = rgbToRgb(color.r, color.g, color.b);
                    ok = true;
                    format = "rgb";
                }
                else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("v")) {
                    rgb = hsvToRgb(color.h, color.s, color.v);
                    ok = true;
                    format = "hsv";
                }
                else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("l")) {
                    rgb = hslToRgb(color.h, color.s, color.l);
                    ok = true;
                    format = "hsl";
                }

                if (color.hasOwnProperty("a")) {
                    a = color.a;
                }
            }

            rgb.r = mathMin(255, mathMax(rgb.r, 0));
            rgb.g = mathMin(255, mathMax(rgb.g, 0));
            rgb.b = mathMin(255, mathMax(rgb.b, 0));


            // Don't let the range of [0,255] come back in [0,1].
            // Potentially lose a little bit of precision here, but will fix issues where
            // .5 gets interpreted as half of the total, instead of half of 1.
            // If it was supposed to be 128, this was already taken care of in the conversion function
            if (rgb.r < 1) { rgb.r = mathRound(rgb.r); }
            if (rgb.g < 1) { rgb.g = mathRound(rgb.g); }
            if (rgb.b < 1) { rgb.b = mathRound(rgb.b); }

            return {
                ok: ok,
                format: (color && color.format) || format,
                r: rgb.r,
                g: rgb.g,
                b: rgb.b,
                a: a
            };
        }



        // Conversion Functions
        // --------------------

        // `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
        // <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

        // `rgbToRgb`
        // Handle bounds / percentage checking to conform to CSS color spec
        // <http://www.w3.org/TR/css3-color/>
        // *Assumes:* r, g, b in [0, 255] or [0, 1]
        // *Returns:* { r, g, b } in [0, 255]
        function rgbToRgb(r, g, b) {
            return {
                r: bound01(r, 255) * 255,
                g: bound01(g, 255) * 255,
                b: bound01(b, 255) * 255
            };
        }

        // `rgbToHsl`
        // Converts an RGB color value to HSL.
        // *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
        // *Returns:* { h, s, l } in [0,1]
        function rgbToHsl(r, g, b) {

            r = bound01(r, 255);
            g = bound01(g, 255);
            b = bound01(b, 255);

            var max = mathMax(r, g, b), min = mathMin(r, g, b);
            var h, s, l = (max + min) / 2;

            if (max == min) {
                h = s = 0; // achromatic
            }
            else {
                var d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                switch (max) {
                    case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                    case g: h = (b - r) / d + 2; break;
                    case b: h = (r - g) / d + 4; break;
                }

                h /= 6;
            }

            return { h: h, s: s, l: l };
        }

        // `hslToRgb`
        // Converts an HSL color value to RGB.
        // *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
        // *Returns:* { r, g, b } in the set [0, 255]
        function hslToRgb(h, s, l) {
            var r, g, b;

            h = bound01(h, 360);
            s = bound01(s, 100);
            l = bound01(l, 100);

            function hue2rgb(p, q, t) {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            }

            if (s === 0) {
                r = g = b = l; // achromatic
            }
            else {
                var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                var p = 2 * l - q;
                r = hue2rgb(p, q, h + 1 / 3);
                g = hue2rgb(p, q, h);
                b = hue2rgb(p, q, h - 1 / 3);
            }

            return { r: r * 255, g: g * 255, b: b * 255 };
        }

        // `rgbToHsv`
        // Converts an RGB color value to HSV
        // *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
        // *Returns:* { h, s, v } in [0,1]
        function rgbToHsv(r, g, b) {

            r = bound01(r, 255);
            g = bound01(g, 255);
            b = bound01(b, 255);

            var max = mathMax(r, g, b), min = mathMin(r, g, b);
            var h, s, v = max;

            var d = max - min;
            s = max === 0 ? 0 : d / max;

            if (max == min) {
                h = 0; // achromatic
            }
            else {
                switch (max) {
                    case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                    case g: h = (b - r) / d + 2; break;
                    case b: h = (r - g) / d + 4; break;
                }
                h /= 6;
            }
            return { h: h, s: s, v: v };
        }

        // `hsvToRgb`
        // Converts an HSV color value to RGB.
        // *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
        // *Returns:* { r, g, b } in the set [0, 255]
        function hsvToRgb(h, s, v) {
            h = bound01(h, 360) * 6;
            s = bound01(s, 100);
            v = bound01(v, 100);

            var i = math.floor(h),
                f = h - i,
                p = v * (1 - s),
                q = v * (1 - f * s),
                t = v * (1 - (1 - f) * s),
                mod = i % 6,
                r = [v, q, p, p, t, v][mod],
                g = [t, v, v, q, p, p][mod],
                b = [p, p, t, v, v, q][mod];

            return { r: r * 255, g: g * 255, b: b * 255 };
        }

        // `rgbToHex`
        // Converts an RGB color to hex
        // Assumes r, g, and b are contained in the set [0, 255]
        // Returns a 3 or 6 character hex
        function rgbToHex(r, g, b, force6Char) {

            var hex = [
                pad2(mathRound(r).toString(16)),
                pad2(mathRound(g).toString(16)),
                pad2(mathRound(b).toString(16))
            ];

            // Return a 3 character hex if possible
            if (!force6Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
                return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
            }

            return hex.join("");
        }

        // `equals`
        // Can be called with any tinycolor input
        tinycolor.equals = function (color1, color2) {
            if (!color1 || !color2) { return false; }
            return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
        };
        tinycolor.random = function () {
            return tinycolor.fromRatio({
                r: mathRandom(),
                g: mathRandom(),
                b: mathRandom()
            });
        };


        // Modification Functions
        // ----------------------
        // Thanks to less.js for some of the basics here
        // <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>


        tinycolor.desaturate = function (color, amount) {
            var hsl = tinycolor(color).toHsl();
            hsl.s -= ((amount || 10) / 100);
            hsl.s = clamp01(hsl.s);
            return tinycolor(hsl);
        };
        tinycolor.saturate = function (color, amount) {
            var hsl = tinycolor(color).toHsl();
            hsl.s += ((amount || 10) / 100);
            hsl.s = clamp01(hsl.s);
            return tinycolor(hsl);
        };
        tinycolor.greyscale = function (color) {
            return tinycolor.desaturate(color, 100);
        };
        tinycolor.lighten = function (color, amount) {
            var hsl = tinycolor(color).toHsl();
            hsl.l += ((amount || 10) / 100);
            hsl.l = clamp01(hsl.l);
            return tinycolor(hsl);
        };
        tinycolor.darken = function (color, amount) {
            var hsl = tinycolor(color).toHsl();
            hsl.l -= ((amount || 10) / 100);
            hsl.l = clamp01(hsl.l);
            return tinycolor(hsl);
        };
        tinycolor.complement = function (color) {
            var hsl = tinycolor(color).toHsl();
            hsl.h = (hsl.h + 0.5) % 1;
            return tinycolor(hsl);
        };


        // Combination Functions
        // ---------------------
        // Thanks to jQuery xColor for some of the ideas behind these
        // <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

        tinycolor.triad = function (color) {
            var hsl = tinycolor(color).toHsl();
            var h = hsl.h * 360;
            return [
            tinycolor(color),
            tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
            tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
        ];
        };
        tinycolor.tetrad = function (color) {
            var hsl = tinycolor(color).toHsl();
            var h = hsl.h * 360;
            return [
            tinycolor(color),
            tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
            tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
            tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
        ];
        };
        tinycolor.splitcomplement = function (color) {
            var hsl = tinycolor(color).toHsl();
            var h = hsl.h * 360;
            return [
            tinycolor(color),
            tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }),
            tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l })
        ];
        };
        tinycolor.analogous = function (color, results, slices) {
            results = results || 6;
            slices = slices || 30;

            var hsl = tinycolor(color).toHsl();
            var part = 360 / slices;
            var ret = [tinycolor(color)];

            hsl.h *= 360;

            for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
                hsl.h = (hsl.h + part) % 360;
                ret.push(tinycolor(hsl));
            }
            return ret;
        };
        tinycolor.monochromatic = function (color, results) {
            results = results || 6;
            var hsv = tinycolor(color).toHsv();
            var h = hsv.h, s = hsv.s, v = hsv.v;
            var ret = [];
            var modification = 1 / results;

            while (results--) {
                ret.push(tinycolor({ h: h, s: s, v: v }));
                v = (v + modification) % 1;
            }

            return ret;
        };
        tinycolor.readable = function (color1, color2) {
            var a = tinycolor(color1).toRgb(), b = tinycolor(color2).toRgb();
            return (
            (b.r - a.r) * (b.r - a.r) +
            (b.g - a.g) * (b.g - a.g) +
            (b.b - a.b) * (b.b - a.b)
        ) > 0x28A4;
        };

        // Big List of Colors
        // ---------
        // <http://www.w3.org/TR/css3-color/#svg-color>
        var names = tinycolor.names = {
            aliceblue: "f0f8ff",
            antiquewhite: "faebd7",
            aqua: "0ff",
            aquamarine: "7fffd4",
            azure: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "000",
            blanchedalmond: "ffebcd",
            blue: "00f",
            blueviolet: "8a2be2",
            brown: "a52a2a",
            burlywood: "deb887",
            burntsienna: "ea7e5d",
            cadetblue: "5f9ea0",
            chartreuse: "7fff00",
            chocolate: "d2691e",
            coral: "ff7f50",
            cornflowerblue: "6495ed",
            cornsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "0ff",
            darkblue: "00008b",
            darkcyan: "008b8b",
            darkgoldenrod: "b8860b",
            darkgray: "a9a9a9",
            darkgreen: "006400",
            darkgrey: "a9a9a9",
            darkkhaki: "bdb76b",
            darkmagenta: "8b008b",
            darkolivegreen: "556b2f",
            darkorange: "ff8c00",
            darkorchid: "9932cc",
            darkred: "8b0000",
            darksalmon: "e9967a",
            darkseagreen: "8fbc8f",
            darkslateblue: "483d8b",
            darkslategray: "2f4f4f",
            darkslategrey: "2f4f4f",
            darkturquoise: "00ced1",
            darkviolet: "9400d3",
            deeppink: "ff1493",
            deepskyblue: "00bfff",
            dimgray: "696969",
            dimgrey: "696969",
            dodgerblue: "1e90ff",
            firebrick: "b22222",
            floralwhite: "fffaf0",
            forestgreen: "228b22",
            fuchsia: "f0f",
            gainsboro: "dcdcdc",
            ghostwhite: "f8f8ff",
            gold: "ffd700",
            goldenrod: "daa520",
            gray: "808080",
            green: "008000",
            greenyellow: "adff2f",
            grey: "808080",
            honeydew: "f0fff0",
            hotpink: "ff69b4",
            indianred: "cd5c5c",
            indigo: "4b0082",
            ivory: "fffff0",
            khaki: "f0e68c",
            lavender: "e6e6fa",
            lavenderblush: "fff0f5",
            lawngreen: "7cfc00",
            lemonchiffon: "fffacd",
            lightblue: "add8e6",
            lightcoral: "f08080",
            lightcyan: "e0ffff",
            lightgoldenrodyellow: "fafad2",
            lightgray: "d3d3d3",
            lightgreen: "90ee90",
            lightgrey: "d3d3d3",
            lightpink: "ffb6c1",
            lightsalmon: "ffa07a",
            lightseagreen: "20b2aa",
            lightskyblue: "87cefa",
            lightslategray: "789",
            lightslategrey: "789",
            lightsteelblue: "b0c4de",
            lightyellow: "ffffe0",
            lime: "0f0",
            limegreen: "32cd32",
            linen: "faf0e6",
            magenta: "f0f",
            maroon: "800000",
            mediumaquamarine: "66cdaa",
            mediumblue: "0000cd",
            mediumorchid: "ba55d3",
            mediumpurple: "9370db",
            mediumseagreen: "3cb371",
            mediumslateblue: "7b68ee",
            mediumspringgreen: "00fa9a",
            mediumturquoise: "48d1cc",
            mediumvioletred: "c71585",
            midnightblue: "191970",
            mintcream: "f5fffa",
            mistyrose: "ffe4e1",
            moccasin: "ffe4b5",
            navajowhite: "ffdead",
            navy: "000080",
            oldlace: "fdf5e6",
            olive: "808000",
            olivedrab: "6b8e23",
            orange: "ffa500",
            orangered: "ff4500",
            orchid: "da70d6",
            palegoldenrod: "eee8aa",
            palegreen: "98fb98",
            paleturquoise: "afeeee",
            palevioletred: "db7093",
            papayawhip: "ffefd5",
            peachpuff: "ffdab9",
            peru: "cd853f",
            pink: "ffc0cb",
            plum: "dda0dd",
            powderblue: "b0e0e6",
            purple: "800080",
            red: "f00",
            rosybrown: "bc8f8f",
            royalblue: "4169e1",
            saddlebrown: "8b4513",
            salmon: "fa8072",
            sandybrown: "f4a460",
            seagreen: "2e8b57",
            seashell: "fff5ee",
            sienna: "a0522d",
            silver: "c0c0c0",
            skyblue: "87ceeb",
            slateblue: "6a5acd",
            slategray: "708090",
            slategrey: "708090",
            snow: "fffafa",
            springgreen: "00ff7f",
            steelblue: "4682b4",
            tan: "d2b48c",
            teal: "008080",
            thistle: "d8bfd8",
            tomato: "ff6347",
            turquoise: "40e0d0",
            violet: "ee82ee",
            wheat: "f5deb3",
            white: "fff",
            whitesmoke: "f5f5f5",
            yellow: "ff0",
            yellowgreen: "9acd32"
        };

        // Make it easy to access colors via `hexNames[hex]`
        var hexNames = tinycolor.hexNames = flip(names);


        // Utilities
        // ---------

        // `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
        function flip(o) {
            var flipped = {};
            for (var i in o) {
                if (o.hasOwnProperty(i)) {
                    flipped[o[i]] = i;
                }
            }
            return flipped;
        }

        // Take input from [0, n] and return it as [0, 1]
        function bound01(n, max) {
            if (isOnePointZero(n)) { n = "100%"; }

            var processPercent = isPercentage(n);
            n = mathMin(max, mathMax(0, parseFloat(n)));

            // Automatically convert percentage into number
            if (processPercent) {
                n = n * (max / 100);
            }

            // Handle floating point rounding errors
            if (math.abs(n - max) < 0.000001) {
                return 1;
            }
            else if (n >= 1) {
                return (n % max) / parseFloat(max);
            }
            return n;
        }

        // Force a number between 0 and 1
        function clamp01(val) {
            return mathMin(1, mathMax(0, val));
        }

        // Parse an integer into hex
        function parseHex(val) {
            return parseInt(val, 16);
        }

        // Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
        // <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
        function isOnePointZero(n) {
            return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
        }

        // Check to see if string passed in is a percentage
        function isPercentage(n) {
            return typeof n === "string" && n.indexOf('%') != -1;
        }

        // Force a hex value to have 2 characters
        function pad2(c) {
            return c.length == 1 ? '0' + c : '' + c;
        }

        var matchers = (function () {

            // <http://www.w3.org/TR/css3-values/#integers>
            var CSS_INTEGER = "[-\\+]?\\d+%?";

            // <http://www.w3.org/TR/css3-values/#number-value>
            var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

            // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
            var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

            // Actual matching.
            // Parentheses and commas are optional, but not required.
            // Whitespace can take the place of commas or opening paren
            var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
            var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

            return {
                rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
                rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
                hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
                hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
                hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
                hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
            };
        })();

        // `stringInputToObject`
        // Permissive string parsing.  Take in a number of formats, and output an object
        // based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
        function stringInputToObject(color) {

            color = color.replace(trimLeft, '').replace(trimRight, '').toLowerCase();
            var named = false;
            if (names[color]) {
                color = names[color];
                named = true;
            }
            else if (color == 'transparent') {
                return { r: 0, g: 0, b: 0, a: 0 };
            }

            // Try to match string input using regular expressions.
            // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
            // Just return an object and let the conversion functions handle that.
            // This way the result will be the same whether the tinycolor is initialized with string or object.
            var match;
            if ((match = matchers.rgb.exec(color))) {
                return { r: match[1], g: match[2], b: match[3] };
            }
            if ((match = matchers.rgba.exec(color))) {
                return { r: match[1], g: match[2], b: match[3], a: match[4] };
            }
            if ((match = matchers.hsl.exec(color))) {
                return { h: match[1], s: match[2], l: match[3] };
            }
            if ((match = matchers.hsla.exec(color))) {
                return { h: match[1], s: match[2], l: match[3], a: match[4] };
            }
            if ((match = matchers.hsv.exec(color))) {
                return { h: match[1], s: match[2], v: match[3] };
            }
            if ((match = matchers.hex6.exec(color))) {
                return {
                    r: parseHex(match[1]),
                    g: parseHex(match[2]),
                    b: parseHex(match[3]),
                    format: named ? "name" : "hex"
                };
            }
            if ((match = matchers.hex8.exec(color))) {
                return {
                    r: parseHex(match[1]),
                    g: parseHex(match[2]),
                    b: parseHex(match[3]),
                    a: parseHex(match[4])/255,
                    format: named ? "name" : "hex"
                };
            }
            if ((match = matchers.hex3.exec(color))) {
                return {
                    r: parseHex(match[1] + '' + match[1]),
                    g: parseHex(match[2] + '' + match[2]),
                    b: parseHex(match[3] + '' + match[3]),
                    format: named ? "name" : "hex"
                };
            }

            return false;
        }

        // Everything is ready, expose to window
        window.tinycolor = tinycolor;

    })(this);

    $(function () {
        if ($.fn.spectrum.load) {
            $.fn.spectrum.processNativeColorInputs();
        }
    });

})(window, njQuery);


(function(dojo){ dojo.addOnLoad(function(){
                new NextendForm({
                  container: "nextend-configurator-wp",
                  data: {"manual":"http:\/\/www.nextendweb.com\/wiki\/accordion-menu-documentation\/","support":"http:\/\/www.nextendweb.com\/accordion-menu\/#support","type":"wordpress","wordpressmenu_0":4,"wordpressmenu":"4|*|0","theme":"default","skins":"","margin":"0|*|0|*|10|*|0|*|px","level1margin":"0|*|0|*|0|*|0|*|px","level1padding":"2|*|0|*|2|*|20|*|px","level1border":"0|*|0|*|1|*|0|*|px|*|e0e0e0|*|solid","level1minus":"exp2.png|*|left|*|d66060ff|*|1","level1plus":"exp2.png|*|left|*|57883bff|*|1","level2margin":"0|*|0|*|0|*|15|*|px","level2padding":"2|*|0|*|2|*|20|*|px","level2border":"0|*|0|*|1|*|0|*|px|*|e0e0e0|*|solid","level2minus":"exp2.png|*|left|*|d66060ff|*|1","level2plus":"exp2.png|*|left|*|57883bff|*|1","level3margin":"0|*|0|*|0|*|30|*|px","level3padding":"2|*|0|*|2|*|20|*|px","level3border":"0|*|0|*|1|*|0|*|px|*|e0e0e0|*|solid","level3minus":"exp2.png|*|left|*|d66060ff|*|1","level3plus":"exp2.png|*|left|*|57883bff|*|1","level4margin":"0|*|0|*|0|*|45|*|px","level4padding":"2|*|0|*|2|*|20|*|px","level4border":"0|*|0|*|1|*|0|*|px|*|e0e0e0|*|solid","level4minus":"exp2.png|*|left|*|d66060ff|*|1","level4plus":"exp2.png|*|left|*|57883bff|*|1","level5margin":"0|*|0|*|0|*|60|*|px","level5padding":"2|*|0|*|2|*|20|*|px","level5border":"0|*|0|*|1|*|0|*|px|*|e0e0e0|*|solid","level5minus":"exp2.png|*|left|*|d66060ff|*|1","level5plus":"exp2.png|*|left|*|57883bff|*|1","slice":"0|*|0|*|0","tooltip":"0|*|Click to open!|*|Click to close!","animationskins":"","animation":"500|*|dojo.fx.easing.cubicInOut|*|dojo.fx.easing.cubicInOut","transformorigin":"center|*|center|*|0","transformtranslate":"0|*|0|*|0","transformscale":"1.0|*|1.0|*|1.0","transformrotate":"0|*|0|*|0"},
                  xml: "/plugins/nextend-accordion-menu/configuration.xml",
                  control_name: "nextend",
                  url: "http://qlokast.local/wp-admin/admin-ajax.php?action=nextend",
                  loadedJSS: ["\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/javascript\/dojo\/1.6.1\/dojo\/dojo.js","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/javascript\/dojo\/1.6.1\/dojo\/window.js","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/js\/window.js","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/js\/element.js","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/js\/element\/list.js","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/js\/element\/subform.js","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/js\/element\/menuwithitems.js","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/js\/element\/mixed.js","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/js\/element\/onoff.js","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/js\/element\/skin.js","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/js\/element\/fontmanager.js","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/js\/fontmanager.js","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/js\/element\/text.js","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/js\/element\/color.js","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/js\/element\/switcher.js","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/js\/element\/checkbox.js","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/js\/element\/radio.js","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/js\/form.js","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/javascript\/jquery\/1.9.1\/njQuery.js","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/javascript\/jquery\/1.9.1\/jQuery.js","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/javascript\/jquery\/1.9.1\/uacss.js","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/javascript\/jquery\/1.9.1\/jquery.unique-element-id.js","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/js\/jquery.qtip.min.js","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/js\/spectrum.js"],
                  loadedCSS: {"\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/wordpress\/removeslug.css":"\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/wordpress\/removeslug.css","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/common.css":"\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/common.css","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/window.css":"\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/window.css","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/configurator.css":"\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/configurator.css","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/jquery.qtip.min.css":"\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/jquery.qtip.min.css","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/form.css":"\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/form.css","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/element\/subform.css":"\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/element\/subform.css","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/element\/mixed.css":"\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/element\/mixed.css","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/element\/onoff.css":"\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/element\/onoff.css","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/element\/fontmanager.css":"\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/element\/fontmanager.css","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/fontmanager.css":"\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/fontmanager.css","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/tabs\/horizontal.css":"\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/tabs\/horizontal.css","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/element\/text.css":"\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/element\/text.css","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/spectrum.css":"\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/spectrum.css","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/element\/color.css":"\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/element\/color.css","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/element\/switcher.css":"\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/element\/switcher.css","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/element\/checkbox.css":"\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/element\/checkbox.css","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/element\/decoration.css":"\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/element\/decoration.css","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/element\/textalign.css":"\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/element\/textalign.css","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/element\/radio.css":"\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/element\/radio.css","\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/element\/imagelist.css":"\/var\/www\/public\/wp-content\/plugins\/nextend-accordion-menu\/nextend\/assets\/css\/element\/imagelist.css"}
                });
            

            new NextendElementList({
              hidden: "nextendtype",
              multiple: 0,
              value: "wordpress"
            });
        

            new NextendElementSubform({
              hidden: "nextendtype",
              origvalue: "wordpress",
              value: "wordpress",
              tab: "basic"
            });
        

            
            var a = new NextendWindow({
              button: dojo.byId("nextendtypenextend-type-button"),
              node: dojo.byId("nextendtypenextend-type-lightbox"),
              save: dojo.byId("nextendtypenextend-type-save")
            });
        

            new NextendElementList({
              hidden: "wordpressmenunextendwordpressmenu_0",
              multiple: 0,
              value: "4"
            });
        

            new NextendElementList({
              hidden: "wordpressmenunextendwordpressmenu_1",
              multiple: 1,
              value: "0"
            });
        

            new NextendElementMixed({
              hidden: "nextendwordpressmenu",
              elements: ["wordpressmenunextendwordpressmenu_0","wordpressmenunextendwordpressmenu_1"],
              separator: "|*|"
            });
        

            new NextendElementMenuWithItems({
              hidden: "nextendwordpressmenu",
              options: {"4":[[138,"- Kurser"],[146,"- - Franska"],[141,"- - Kurs Ett"],[133,"- Om Utbildningen"],[144,"- - Om Skolan"]]},
              value: "4|*|0"
            });
        

            new NextendElementOnoff({
              hidden: "nextendrootasitem"
            });
        

            new NextendElementOnoff({
              hidden: "nextenddisplaynum"
            });
        

            new NextendElementList({
              hidden: "nextendtheme",
              multiple: 0,
              value: "default"
            });
        

            new NextendElementSubform({
              hidden: "nextendtheme",
              origvalue: "default",
              value: "default",
              tab: "basic"
            });
        

            
            var a = new NextendWindow({
              button: dojo.byId("nextendthemenextend-theme-button"),
              node: dojo.byId("nextendthemenextend-theme-lightbox"),
              save: dojo.byId("nextendthemenextend-theme-save")
            });
        

            new NextendElementList({
              hidden: "skinsnextendskins_0",
              multiple: 0,
              value: ""
            });
        

            new NextendElementSkin({
              hidden: "skinsnextendskins_0",
              preid: "nextend",
              skins: {"classic":{"level1border":"0|*|0|*|1|*|0|*|px|*|e0e0e0|*|solid","level2border":"0|*|0|*|1|*|0|*|px|*|e0e0e0|*|solid","level3border":"0|*|0|*|1|*|0|*|px|*|e0e0e0|*|solid","level4border":"0|*|0|*|1|*|0|*|px|*|e0e0e0|*|solid","level5border":"0|*|0|*|5|*|0|*|px|*|e0e0e0|*|solid"}}
            });
        

            new NextendElementList({
              hidden: "skinsnextendskins_1",
              multiple: 0,
              value: ""
            });
        

            new NextendElementSkin({
              hidden: "skinsnextendskins_1",
              preid: "nextend",
              skins: {"resetleft":{"level1minus":"exp2.png|*|left|*|d66060ff|*|1","level1plus":"exp2.png|*|left|*|57883bff|*|1","level2minus":"exp2.png|*|left|*|d66060ff|*|1","level2plus":"exp2.png|*|left|*|57883bff|*|1","level3minus":"exp2.png|*|left|*|d66060ff|*|1","level3plus":"exp2.png|*|left|*|57883bff|*|1","level4minus":"exp2.png|*|left|*|d66060ff|*|1","level4plus":"exp2.png|*|left|*|57883bff|*|1","level5minus":"exp2.png|*|left|*|d66060ff|*|1","level5plus":"exp2.png|*|left|*|57883bff|*|1","level1margin":"0|*|0|*|0|*|0|*|px","level1padding":"2|*|0|*|2|*|20|*|px","level2margin":"0|*|0|*|0|*|15|*|px","level2padding":"2|*|0|*|2|*|20|*|px","level3margin":"0|*|0|*|0|*|30|*|px","level3padding":"2|*|0|*|2|*|20|*|px","level4margin":"0|*|0|*|0|*|45|*|px","level4padding":"2|*|0|*|2|*|20|*|px","level5margin":"0|*|0|*|0|*|60|*|px","level5padding":"2|*|0|*|2|*|20|*|px"},"resetright":{"level1minus":"exp2.png|*|right|*|d66060ff|*|1","level1plus":"exp2.png|*|right|*|57883bff|*|1","level2minus":"exp2.png|*|right|*|d66060ff|*|1","level2plus":"exp2.png|*|right|*|57883bff|*|1","level3minus":"exp2.png|*|right|*|d66060ff|*|1","level3plus":"exp2.png|*|right|*|57883bff|*|1","level4minus":"exp2.png|*|right|*|d66060ff|*|1","level4plus":"exp2.png|*|right|*|57883bff|*|1","level5minus":"exp2.png|*|right|*|d66060ff|*|1","level5plus":"exp2.png|*|right|*|57883bff|*|1","level1margin":"0|*|0|*|0|*|0|*|px","level1padding":"2|*|22|*|2|*|5|*|px","level2margin":"0|*|0|*|0|*|15|*|px","level2padding":"2|*|22|*|2|*|5|*|px","level3margin":"0|*|0|*|0|*|30|*|px","level3padding":"2|*|22|*|2|*|5|*|px","level4margin":"0|*|0|*|0|*|60|*|px","level4padding":"2|*|22|*|2|*|5|*|px"}}
            });
        

            new NextendElementList({
              hidden: "skinsnextendskins_2",
              multiple: 0,
              value: ""
            });
        

            new NextendElementSkin({
              hidden: "skinsnextendskins_2",
              preid: "nextend",
              skins: {"reset":{"titlefont":"{\"firsttab\":\"Text\",\"Text\":{\"color\":\"135cae\",\"size\":\"18||px\",\"tshadow\":\"0|*|0|*|0|*|000000FF\",\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Arimo);),Arial\",\"lineheight\":\"21px\",\"bold\":1,\"italic\":0,\"underline\":0,\"align\":\"center\"}}","level1textfont":"{\"firsttab\":\"Text\",\"Text\":{\"color\":\"333333ff\",\"size\":\"12||px\",\"tshadow\":\"0|*|0|*|0|*|000000FF\",\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Arimo);),Arial\",\"lineheight\":\"20px\",\"bold\":0,\"italic\":0,\"underline\":0,\"align\":\"left\",\"reset\":1},\"Active\":{\"reset\":1,\"bold\":\"1\",\"color\":\"135cae\"},\"Link\":{\"reset\":1},\"Hover\":{\"reset\":1,\"color\":\"135cae\"},\"firsttab\":\"Text\"}","level2textfont":"{\"firsttab\":\"Text\",\"Text\":{\"color\":\"333333ff\",\"size\":\"12||px\",\"tshadow\":\"0|*|0|*|0|*|000000FF\",\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Arimo);),Arial\",\"lineheight\":\"20px\",\"bold\":0,\"italic\":0,\"underline\":0,\"align\":\"left\",\"reset\":1},\"Active\":{\"reset\":1,\"bold\":\"1\",\"color\":\"135cae\"},\"Link\":{\"reset\":1},\"Hover\":{\"reset\":1,\"color\":\"135cae\"},\"firsttab\":\"Text\"}","level3textfont":"{\"firsttab\":\"Text\",\"Text\":{\"color\":\"333333ff\",\"size\":\"12||px\",\"tshadow\":\"0|*|0|*|0|*|000000FF\",\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Arimo);),Arial\",\"lineheight\":\"20px\",\"bold\":0,\"italic\":0,\"underline\":0,\"align\":\"left\",\"reset\":1},\"Active\":{\"reset\":1,\"bold\":\"1\",\"color\":\"135cae\"},\"Link\":{\"reset\":1},\"Hover\":{\"reset\":1,\"color\":\"135cae\"},\"firsttab\":\"Text\"}","level4textfont":"{\"firsttab\":\"Text\",\"Text\":{\"color\":\"333333ff\",\"size\":\"12||px\",\"tshadow\":\"0|*|0|*|0|*|000000FF\",\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Arimo);),Arial\",\"lineheight\":\"20px\",\"bold\":0,\"italic\":0,\"underline\":0,\"align\":\"left\",\"reset\":1},\"Active\":{\"reset\":1,\"bold\":\"1\",\"color\":\"135cae\"},\"Link\":{\"reset\":1},\"Hover\":{\"reset\":1,\"color\":\"135cae\"},\"firsttab\":\"Text\"}","level5textfont":"{\"firsttab\":\"Text\",\"Text\":{\"color\":\"333333ff\",\"size\":\"12||px\",\"tshadow\":\"0|*|0|*|0|*|000000FF\",\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Arimo);),Arial\",\"lineheight\":\"20px\",\"bold\":0,\"italic\":0,\"underline\":0,\"align\":\"left\",\"reset\":1},\"Active\":{\"reset\":1,\"bold\":\"1\",\"color\":\"135cae\"},\"Link\":{\"reset\":1},\"Hover\":{\"reset\":1,\"color\":\"135cae\"},\"firsttab\":\"Text\"}"},"ltr":{"level1textfont":"{\"Text\":{\"align\":\"left\"}}","level2textfont":"{\"Text\":{\"align\":\"left\"}}","level3textfont":"{\"Text\":{\"align\":\"left\"}}","level4textfont":"{\"Text\":{\"align\":\"left\"}}","level5textfont":"{\"Text\":{\"align\":\"left\"}}"},"rtl":{"level1textfont":"{\"Text\":{\"align\":\"right\"}}","level2textfont":"{\"Text\":{\"align\":\"right\"}}","level3textfont":"{\"Text\":{\"align\":\"right\"}}","level4textfont":"{\"Text\":{\"align\":\"right\"}}","level5textfont":"{\"Text\":{\"align\":\"right\"}}"},"arial":{"titlefont":"{\"Text\":{\"afont\":\"Arial\"}}","level1textfont":"{\"Text\":{\"afont\":\"Arial\"}}","level2textfont":"{\"Text\":{\"afont\":\"Arial\"}}","level3textfont":"{\"Text\":{\"afont\":\"Arial\"}}","level4textfont":"{\"Text\":{\"afont\":\"Arial\"}}","level5textfont":"{\"Text\":{\"afont\":\"Arial\"}}"},"arimo":{"titlefont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Arimo);),sans-serif\"}}","level1textfont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Arimo);),sans-serif\"}}","level2textfont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Arimo);),sans-serif\"}}","level3textfont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Arimo);),sans-serif\"}}","level4textfont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Arimo);),sans-serif\"}}","level5textfont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Arimo);),sans-serif\"}}"},"cabin":{"titlefont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Cabin);),sans-serif\"}}","level1textfont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Cabin);),sans-serif\"}}","level2textfont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Cabin);),sans-serif\"}}","level3textfont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Cabin);),sans-serif\"}}","level4textfont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Cabin);),sans-serif\"}}","level5textfont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Cabin);),sans-serif\"}}"},"opensans":{"titlefont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Open+Sans);),sans-serif\"}}","level1textfont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Open+Sans);),sans-serif\"}}","level2textfont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Open+Sans);),sans-serif\"}}","level3textfont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Open+Sans);),sans-serif\"}}","level4textfont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Open+Sans);),sans-serif\"}}","level5textfont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Open+Sans);),sans-serif\"}}"},"ptsans":{"titlefont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=PT+Sans);),sans-serif\"}}","level1textfont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=PT+Sans);),sans-serif\"}}","level2textfont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=PT+Sans);),sans-serif\"}}","level3textfont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=PT+Sans);),sans-serif\"}}","level4textfont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=PT+Sans);),sans-serif\"}}","level5textfont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=PT+Sans);),sans-serif\"}}"},"quattrocentosans":{"titlefont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Quattrocento+Sans);),sans-serif\"}}","level1textfont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Quattrocento+Sans);),sans-serif\"}}","level2textfont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Quattrocento+Sans);),sans-serif\"}}","level3textfont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Quattrocento+Sans);),sans-serif\"}}","level4textfont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Quattrocento+Sans);),sans-serif\"}}","level5textfont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Quattrocento+Sans);),sans-serif\"}}"},"rosario":{"titlefont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Rosario);),sans-serif\"}}","level1textfont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Rosario);),sans-serif\"}}","level2textfont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Rosario);),sans-serif\"}}","level3textfont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Rosario);),sans-serif\"}}","level4textfont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Rosario);),sans-serif\"}}","level5textfont":"{\"Text\":{\"afont\":\"google(@import url(http:\/\/fonts.googleapis.com\/css?family=Rosario);),sans-serif\"}}"}}
            });
        

            new NextendElementMixed({
              hidden: "nextendskins",
              elements: ["skinsnextendskins_0","skinsnextendskins_1","skinsnextendskins_2"],
              separator: "|*|"
            });
        

            new NextendElementText({
              hidden: "fontmanagerfamily"
            });
        

            new NextendElementText({
              hidden: "fontmanagercolor"
            });
        

            new NextendElementColor({
              hidden: "fontmanagercolor",
              alpha: 1
            });
        

            new NextendElementText({
              hidden: "sizefontmanagersize_0"
            });
        

            new NextendElementSwitcher({
              hidden: "sizefontmanagersize_1",
              values: ["px","%"]
            });
        

            new NextendElementMixed({
              hidden: "fontmanagersize",
              elements: ["sizefontmanagersize_0","sizefontmanagersize_1"],
              separator: "|*|"
            });
        

            new NextendElementText({
              hidden: "fontmanagerlineheight"
            });
        

            new NextendElementCheckbox({
              hidden: "fontmanagerdecoration",
              values: ["bold","italic","underline"]
            });
        

            new NextendElementText({
              hidden: "fontmanagerpaddingleft"
            });
        

            new NextendElementRadio({
              hidden: "fontmanagertextalign",
              values: ["left","center","right","justify"]
            });
        

            new NextendElementText({
              hidden: "tshadowfontmanagertshadow_0"
            });
        

            new NextendElementText({
              hidden: "tshadowfontmanagertshadow_1"
            });
        

            new NextendElementText({
              hidden: "tshadowfontmanagertshadow_2"
            });
        

            new NextendElementText({
              hidden: "tshadowfontmanagertshadow_3"
            });
        

            new NextendElementColor({
              hidden: "tshadowfontmanagertshadow_3",
              alpha: 1
            });
        

            new NextendElementMixed({
              hidden: "fontmanagertshadow",
              elements: ["tshadowfontmanagertshadow_0","tshadowfontmanagertshadow_1","tshadowfontmanagertshadow_2","tshadowfontmanagertshadow_3"],
              separator: "|*|"
            });
        

            new NextendFontmanager({
              node: "nextend-fontmanager-lightbox-4f5d331937d27394518b84f7c06eb78b"
            });
        

            new NextendElementFontmanager({
                hidden: "nextendtitlefont",
                button: "nextend-titlefont-button",
                importbtn: "nextend-titlefont-button-import",
                exportbtn: "nextend-titlefont-button-export",
                message: "nextend-titlefont-message",
                tabs: ["Text"],
                translatedTabs: ["Text"],
                firsttab: "Text",
                txt: {
                    importingdone: "Importing done...",
                    youcanimport: "Now you can import the settings of this font!"
                },
                base64: 0
            });
        

            new NextendElementText({
              hidden: "marginnextendmargin_0"
            });
        

            new NextendElementText({
              hidden: "marginnextendmargin_1"
            });
        

            new NextendElementText({
              hidden: "marginnextendmargin_2"
            });
        

            new NextendElementText({
              hidden: "marginnextendmargin_3"
            });
        

            new NextendElementSwitcher({
              hidden: "marginnextendmargin_4",
              values: ["px","em"]
            });
        

            new NextendElementMixed({
              hidden: "nextendmargin",
              elements: ["marginnextendmargin_0","marginnextendmargin_1","marginnextendmargin_2","marginnextendmargin_3","marginnextendmargin_4"],
              separator: "|*|"
            });
        

            new NextendElementText({
              hidden: "level1marginnextendlevel1margin_0"
            });
        

            new NextendElementText({
              hidden: "level1marginnextendlevel1margin_1"
            });
        

            new NextendElementText({
              hidden: "level1marginnextendlevel1margin_2"
            });
        

            new NextendElementText({
              hidden: "level1marginnextendlevel1margin_3"
            });
        

            new NextendElementSwitcher({
              hidden: "level1marginnextendlevel1margin_4",
              values: ["px","em"]
            });
        

            new NextendElementMixed({
              hidden: "nextendlevel1margin",
              elements: ["level1marginnextendlevel1margin_0","level1marginnextendlevel1margin_1","level1marginnextendlevel1margin_2","level1marginnextendlevel1margin_3","level1marginnextendlevel1margin_4"],
              separator: "|*|"
            });
        

            new NextendElementText({
              hidden: "level1paddingnextendlevel1padding_0"
            });
        

            new NextendElementText({
              hidden: "level1paddingnextendlevel1padding_1"
            });
        

            new NextendElementText({
              hidden: "level1paddingnextendlevel1padding_2"
            });
        

            new NextendElementText({
              hidden: "level1paddingnextendlevel1padding_3"
            });
        

            new NextendElementSwitcher({
              hidden: "level1paddingnextendlevel1padding_4",
              values: ["px","em"]
            });
        

            new NextendElementMixed({
              hidden: "nextendlevel1padding",
              elements: ["level1paddingnextendlevel1padding_0","level1paddingnextendlevel1padding_1","level1paddingnextendlevel1padding_2","level1paddingnextendlevel1padding_3","level1paddingnextendlevel1padding_4"],
              separator: "|*|"
            });
        

            new NextendElementText({
              hidden: "level1bordernextendlevel1border_0"
            });
        

            new NextendElementText({
              hidden: "level1bordernextendlevel1border_1"
            });
        

            new NextendElementText({
              hidden: "level1bordernextendlevel1border_2"
            });
        

            new NextendElementText({
              hidden: "level1bordernextendlevel1border_3"
            });
        

            new NextendElementSwitcher({
              hidden: "level1bordernextendlevel1border_4",
              values: ["px","em"]
            });
        

            new NextendElementText({
              hidden: "level1bordernextendlevel1border_5"
            });
        

            new NextendElementColor({
              hidden: "level1bordernextendlevel1border_5",
              alpha: 0
            });
        

            new NextendElementText({
              hidden: "level1bordernextendlevel1border_6"
            });
        

            new NextendElementMixed({
              hidden: "nextendlevel1border",
              elements: ["level1bordernextendlevel1border_0","level1bordernextendlevel1border_1","level1bordernextendlevel1border_2","level1bordernextendlevel1border_3","level1bordernextendlevel1border_4","level1bordernextendlevel1border_5","level1bordernextendlevel1border_6"],
              separator: "|*|"
            });
        

            new NextendElementRadio({
              hidden: "level1minusnextendlevel1minus_0",
              values: ["-1","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/minus\/1minus.png","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/minus\/exp2.png","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/minus\/plus.png","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/minus\/small.png"]
            });
        

            new NextendElementRadio({
              hidden: "level1minusnextendlevel1minus_1",
              values: ["left","right"]
            });
        

            new NextendElementText({
              hidden: "level1minusnextendlevel1minus_2"
            });
        

            new NextendElementColor({
              hidden: "level1minusnextendlevel1minus_2",
              alpha: 1
            });
        

            new NextendElementSwitcher({
              hidden: "level1minusnextendlevel1minus_3",
              values: ["1","0"]
            });
        

            new NextendElementMixed({
              hidden: "nextendlevel1minus",
              elements: ["level1minusnextendlevel1minus_0","level1minusnextendlevel1minus_1","level1minusnextendlevel1minus_2","level1minusnextendlevel1minus_3"],
              separator: "|*|"
            });
        

            new NextendElementRadio({
              hidden: "level1plusnextendlevel1plus_0",
              values: ["-1","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/plus\/1plus.png","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/plus\/exp2.png","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/plus\/plus.png","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/plus\/small.png"]
            });
        

            new NextendElementRadio({
              hidden: "level1plusnextendlevel1plus_1",
              values: ["left","right"]
            });
        

            new NextendElementText({
              hidden: "level1plusnextendlevel1plus_2"
            });
        

            new NextendElementColor({
              hidden: "level1plusnextendlevel1plus_2",
              alpha: 1
            });
        

            new NextendElementSwitcher({
              hidden: "level1plusnextendlevel1plus_3",
              values: ["1","0"]
            });
        

            new NextendElementMixed({
              hidden: "nextendlevel1plus",
              elements: ["level1plusnextendlevel1plus_0","level1plusnextendlevel1plus_1","level1plusnextendlevel1plus_2","level1plusnextendlevel1plus_3"],
              separator: "|*|"
            });
        

            new NextendElementFontmanager({
                hidden: "nextendlevel1textfont",
                button: "nextend-level1textfont-button",
                importbtn: "nextend-level1textfont-button-import",
                exportbtn: "nextend-level1textfont-button-export",
                message: "nextend-level1textfont-message",
                tabs: ["Text","Active","Link","Hover"],
                translatedTabs: ["Text","Active","Link","Hover"],
                firsttab: "Text",
                txt: {
                    importingdone: "Importing done...",
                    youcanimport: "Now you can import the settings of this font!"
                },
                base64: 0
            });
        

            new NextendElementText({
              hidden: "level2marginnextendlevel2margin_0"
            });
        

            new NextendElementText({
              hidden: "level2marginnextendlevel2margin_1"
            });
        

            new NextendElementText({
              hidden: "level2marginnextendlevel2margin_2"
            });
        

            new NextendElementText({
              hidden: "level2marginnextendlevel2margin_3"
            });
        

            new NextendElementSwitcher({
              hidden: "level2marginnextendlevel2margin_4",
              values: ["px","em"]
            });
        

            new NextendElementMixed({
              hidden: "nextendlevel2margin",
              elements: ["level2marginnextendlevel2margin_0","level2marginnextendlevel2margin_1","level2marginnextendlevel2margin_2","level2marginnextendlevel2margin_3","level2marginnextendlevel2margin_4"],
              separator: "|*|"
            });
        

            new NextendElementText({
              hidden: "level2paddingnextendlevel2padding_0"
            });
        

            new NextendElementText({
              hidden: "level2paddingnextendlevel2padding_1"
            });
        

            new NextendElementText({
              hidden: "level2paddingnextendlevel2padding_2"
            });
        

            new NextendElementText({
              hidden: "level2paddingnextendlevel2padding_3"
            });
        

            new NextendElementSwitcher({
              hidden: "level2paddingnextendlevel2padding_4",
              values: ["px","em"]
            });
        

            new NextendElementMixed({
              hidden: "nextendlevel2padding",
              elements: ["level2paddingnextendlevel2padding_0","level2paddingnextendlevel2padding_1","level2paddingnextendlevel2padding_2","level2paddingnextendlevel2padding_3","level2paddingnextendlevel2padding_4"],
              separator: "|*|"
            });
        

            new NextendElementText({
              hidden: "level2bordernextendlevel2border_0"
            });
        

            new NextendElementText({
              hidden: "level2bordernextendlevel2border_1"
            });
        

            new NextendElementText({
              hidden: "level2bordernextendlevel2border_2"
            });
        

            new NextendElementText({
              hidden: "level2bordernextendlevel2border_3"
            });
        

            new NextendElementSwitcher({
              hidden: "level2bordernextendlevel2border_4",
              values: ["px","em"]
            });
        

            new NextendElementText({
              hidden: "level2bordernextendlevel2border_5"
            });
        

            new NextendElementColor({
              hidden: "level2bordernextendlevel2border_5",
              alpha: 0
            });
        

            new NextendElementText({
              hidden: "level2bordernextendlevel2border_6"
            });
        

            new NextendElementMixed({
              hidden: "nextendlevel2border",
              elements: ["level2bordernextendlevel2border_0","level2bordernextendlevel2border_1","level2bordernextendlevel2border_2","level2bordernextendlevel2border_3","level2bordernextendlevel2border_4","level2bordernextendlevel2border_5","level2bordernextendlevel2border_6"],
              separator: "|*|"
            });
        

            new NextendElementRadio({
              hidden: "level2minusnextendlevel2minus_0",
              values: ["-1","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/minus\/1minus.png","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/minus\/exp2.png","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/minus\/plus.png","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/minus\/small.png"]
            });
        

            new NextendElementRadio({
              hidden: "level2minusnextendlevel2minus_1",
              values: ["left","right"]
            });
        

            new NextendElementText({
              hidden: "level2minusnextendlevel2minus_2"
            });
        

            new NextendElementColor({
              hidden: "level2minusnextendlevel2minus_2",
              alpha: 1
            });
        

            new NextendElementSwitcher({
              hidden: "level2minusnextendlevel2minus_3",
              values: ["1","0"]
            });
        

            new NextendElementMixed({
              hidden: "nextendlevel2minus",
              elements: ["level2minusnextendlevel2minus_0","level2minusnextendlevel2minus_1","level2minusnextendlevel2minus_2","level2minusnextendlevel2minus_3"],
              separator: "|*|"
            });
        

            new NextendElementRadio({
              hidden: "level2plusnextendlevel2plus_0",
              values: ["-1","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/plus\/1plus.png","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/plus\/exp2.png","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/plus\/plus.png","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/plus\/small.png"]
            });
        

            new NextendElementRadio({
              hidden: "level2plusnextendlevel2plus_1",
              values: ["left","right"]
            });
        

            new NextendElementText({
              hidden: "level2plusnextendlevel2plus_2"
            });
        

            new NextendElementColor({
              hidden: "level2plusnextendlevel2plus_2",
              alpha: 1
            });
        

            new NextendElementSwitcher({
              hidden: "level2plusnextendlevel2plus_3",
              values: ["1","0"]
            });
        

            new NextendElementMixed({
              hidden: "nextendlevel2plus",
              elements: ["level2plusnextendlevel2plus_0","level2plusnextendlevel2plus_1","level2plusnextendlevel2plus_2","level2plusnextendlevel2plus_3"],
              separator: "|*|"
            });
        

            new NextendElementFontmanager({
                hidden: "nextendlevel2textfont",
                button: "nextend-level2textfont-button",
                importbtn: "nextend-level2textfont-button-import",
                exportbtn: "nextend-level2textfont-button-export",
                message: "nextend-level2textfont-message",
                tabs: ["Text","Active","Link","Hover"],
                translatedTabs: ["Text","Active","Link","Hover"],
                firsttab: "Text",
                txt: {
                    importingdone: "Importing done...",
                    youcanimport: "Now you can import the settings of this font!"
                },
                base64: 0
            });
        

            new NextendElementText({
              hidden: "level3marginnextendlevel3margin_0"
            });
        

            new NextendElementText({
              hidden: "level3marginnextendlevel3margin_1"
            });
        

            new NextendElementText({
              hidden: "level3marginnextendlevel3margin_2"
            });
        

            new NextendElementText({
              hidden: "level3marginnextendlevel3margin_3"
            });
        

            new NextendElementSwitcher({
              hidden: "level3marginnextendlevel3margin_4",
              values: ["px","em"]
            });
        

            new NextendElementMixed({
              hidden: "nextendlevel3margin",
              elements: ["level3marginnextendlevel3margin_0","level3marginnextendlevel3margin_1","level3marginnextendlevel3margin_2","level3marginnextendlevel3margin_3","level3marginnextendlevel3margin_4"],
              separator: "|*|"
            });
        

            new NextendElementText({
              hidden: "level3paddingnextendlevel3padding_0"
            });
        

            new NextendElementText({
              hidden: "level3paddingnextendlevel3padding_1"
            });
        

            new NextendElementText({
              hidden: "level3paddingnextendlevel3padding_2"
            });
        

            new NextendElementText({
              hidden: "level3paddingnextendlevel3padding_3"
            });
        

            new NextendElementSwitcher({
              hidden: "level3paddingnextendlevel3padding_4",
              values: ["px","em"]
            });
        

            new NextendElementMixed({
              hidden: "nextendlevel3padding",
              elements: ["level3paddingnextendlevel3padding_0","level3paddingnextendlevel3padding_1","level3paddingnextendlevel3padding_2","level3paddingnextendlevel3padding_3","level3paddingnextendlevel3padding_4"],
              separator: "|*|"
            });
        

            new NextendElementText({
              hidden: "level3bordernextendlevel3border_0"
            });
        

            new NextendElementText({
              hidden: "level3bordernextendlevel3border_1"
            });
        

            new NextendElementText({
              hidden: "level3bordernextendlevel3border_2"
            });
        

            new NextendElementText({
              hidden: "level3bordernextendlevel3border_3"
            });
        

            new NextendElementSwitcher({
              hidden: "level3bordernextendlevel3border_4",
              values: ["px","em"]
            });
        

            new NextendElementText({
              hidden: "level3bordernextendlevel3border_5"
            });
        

            new NextendElementColor({
              hidden: "level3bordernextendlevel3border_5",
              alpha: 0
            });
        

            new NextendElementText({
              hidden: "level3bordernextendlevel3border_6"
            });
        

            new NextendElementMixed({
              hidden: "nextendlevel3border",
              elements: ["level3bordernextendlevel3border_0","level3bordernextendlevel3border_1","level3bordernextendlevel3border_2","level3bordernextendlevel3border_3","level3bordernextendlevel3border_4","level3bordernextendlevel3border_5","level3bordernextendlevel3border_6"],
              separator: "|*|"
            });
        

            new NextendElementRadio({
              hidden: "level3minusnextendlevel3minus_0",
              values: ["-1","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/minus\/1minus.png","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/minus\/exp2.png","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/minus\/plus.png","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/minus\/small.png"]
            });
        

            new NextendElementRadio({
              hidden: "level3minusnextendlevel3minus_1",
              values: ["left","right"]
            });
        

            new NextendElementText({
              hidden: "level3minusnextendlevel3minus_2"
            });
        

            new NextendElementColor({
              hidden: "level3minusnextendlevel3minus_2",
              alpha: 1
            });
        

            new NextendElementSwitcher({
              hidden: "level3minusnextendlevel3minus_3",
              values: ["1","0"]
            });
        

            new NextendElementMixed({
              hidden: "nextendlevel3minus",
              elements: ["level3minusnextendlevel3minus_0","level3minusnextendlevel3minus_1","level3minusnextendlevel3minus_2","level3minusnextendlevel3minus_3"],
              separator: "|*|"
            });
        

            new NextendElementRadio({
              hidden: "level3plusnextendlevel3plus_0",
              values: ["-1","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/plus\/1plus.png","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/plus\/exp2.png","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/plus\/plus.png","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/plus\/small.png"]
            });
        

            new NextendElementRadio({
              hidden: "level3plusnextendlevel3plus_1",
              values: ["left","right"]
            });
        

            new NextendElementText({
              hidden: "level3plusnextendlevel3plus_2"
            });
        

            new NextendElementColor({
              hidden: "level3plusnextendlevel3plus_2",
              alpha: 1
            });
        

            new NextendElementSwitcher({
              hidden: "level3plusnextendlevel3plus_3",
              values: ["1","0"]
            });
        

            new NextendElementMixed({
              hidden: "nextendlevel3plus",
              elements: ["level3plusnextendlevel3plus_0","level3plusnextendlevel3plus_1","level3plusnextendlevel3plus_2","level3plusnextendlevel3plus_3"],
              separator: "|*|"
            });
        

            new NextendElementFontmanager({
                hidden: "nextendlevel3textfont",
                button: "nextend-level3textfont-button",
                importbtn: "nextend-level3textfont-button-import",
                exportbtn: "nextend-level3textfont-button-export",
                message: "nextend-level3textfont-message",
                tabs: ["Text","Active","Link","Hover"],
                translatedTabs: ["Text","Active","Link","Hover"],
                firsttab: "Text",
                txt: {
                    importingdone: "Importing done...",
                    youcanimport: "Now you can import the settings of this font!"
                },
                base64: 0
            });
        

            new NextendElementText({
              hidden: "level4marginnextendlevel4margin_0"
            });
        

            new NextendElementText({
              hidden: "level4marginnextendlevel4margin_1"
            });
        

            new NextendElementText({
              hidden: "level4marginnextendlevel4margin_2"
            });
        

            new NextendElementText({
              hidden: "level4marginnextendlevel4margin_3"
            });
        

            new NextendElementSwitcher({
              hidden: "level4marginnextendlevel4margin_4",
              values: ["px","em"]
            });
        

            new NextendElementMixed({
              hidden: "nextendlevel4margin",
              elements: ["level4marginnextendlevel4margin_0","level4marginnextendlevel4margin_1","level4marginnextendlevel4margin_2","level4marginnextendlevel4margin_3","level4marginnextendlevel4margin_4"],
              separator: "|*|"
            });
        

            new NextendElementText({
              hidden: "level4paddingnextendlevel4padding_0"
            });
        

            new NextendElementText({
              hidden: "level4paddingnextendlevel4padding_1"
            });
        

            new NextendElementText({
              hidden: "level4paddingnextendlevel4padding_2"
            });
        

            new NextendElementText({
              hidden: "level4paddingnextendlevel4padding_3"
            });
        

            new NextendElementSwitcher({
              hidden: "level4paddingnextendlevel4padding_4",
              values: ["px","em"]
            });
        

            new NextendElementMixed({
              hidden: "nextendlevel4padding",
              elements: ["level4paddingnextendlevel4padding_0","level4paddingnextendlevel4padding_1","level4paddingnextendlevel4padding_2","level4paddingnextendlevel4padding_3","level4paddingnextendlevel4padding_4"],
              separator: "|*|"
            });
        

            new NextendElementText({
              hidden: "level4bordernextendlevel4border_0"
            });
        

            new NextendElementText({
              hidden: "level4bordernextendlevel4border_1"
            });
        

            new NextendElementText({
              hidden: "level4bordernextendlevel4border_2"
            });
        

            new NextendElementText({
              hidden: "level4bordernextendlevel4border_3"
            });
        

            new NextendElementSwitcher({
              hidden: "level4bordernextendlevel4border_4",
              values: ["px","em"]
            });
        

            new NextendElementText({
              hidden: "level4bordernextendlevel4border_5"
            });
        

            new NextendElementColor({
              hidden: "level4bordernextendlevel4border_5",
              alpha: 0
            });
        

            new NextendElementText({
              hidden: "level4bordernextendlevel4border_6"
            });
        

            new NextendElementMixed({
              hidden: "nextendlevel4border",
              elements: ["level4bordernextendlevel4border_0","level4bordernextendlevel4border_1","level4bordernextendlevel4border_2","level4bordernextendlevel4border_3","level4bordernextendlevel4border_4","level4bordernextendlevel4border_5","level4bordernextendlevel4border_6"],
              separator: "|*|"
            });
        

            new NextendElementRadio({
              hidden: "level4minusnextendlevel4minus_0",
              values: ["-1","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/minus\/1minus.png","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/minus\/exp2.png","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/minus\/plus.png","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/minus\/small.png"]
            });
        

            new NextendElementRadio({
              hidden: "level4minusnextendlevel4minus_1",
              values: ["left","right"]
            });
        

            new NextendElementText({
              hidden: "level4minusnextendlevel4minus_2"
            });
        

            new NextendElementColor({
              hidden: "level4minusnextendlevel4minus_2",
              alpha: 1
            });
        

            new NextendElementSwitcher({
              hidden: "level4minusnextendlevel4minus_3",
              values: ["1","0"]
            });
        

            new NextendElementMixed({
              hidden: "nextendlevel4minus",
              elements: ["level4minusnextendlevel4minus_0","level4minusnextendlevel4minus_1","level4minusnextendlevel4minus_2","level4minusnextendlevel4minus_3"],
              separator: "|*|"
            });
        

            new NextendElementRadio({
              hidden: "level4plusnextendlevel4plus_0",
              values: ["-1","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/plus\/1plus.png","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/plus\/exp2.png","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/plus\/plus.png","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/plus\/small.png"]
            });
        

            new NextendElementRadio({
              hidden: "level4plusnextendlevel4plus_1",
              values: ["left","right"]
            });
        

            new NextendElementText({
              hidden: "level4plusnextendlevel4plus_2"
            });
        

            new NextendElementColor({
              hidden: "level4plusnextendlevel4plus_2",
              alpha: 1
            });
        

            new NextendElementSwitcher({
              hidden: "level4plusnextendlevel4plus_3",
              values: ["1","0"]
            });
        

            new NextendElementMixed({
              hidden: "nextendlevel4plus",
              elements: ["level4plusnextendlevel4plus_0","level4plusnextendlevel4plus_1","level4plusnextendlevel4plus_2","level4plusnextendlevel4plus_3"],
              separator: "|*|"
            });
        

            new NextendElementFontmanager({
                hidden: "nextendlevel4textfont",
                button: "nextend-level4textfont-button",
                importbtn: "nextend-level4textfont-button-import",
                exportbtn: "nextend-level4textfont-button-export",
                message: "nextend-level4textfont-message",
                tabs: ["Text","Active","Link","Hover"],
                translatedTabs: ["Text","Active","Link","Hover"],
                firsttab: "Text",
                txt: {
                    importingdone: "Importing done...",
                    youcanimport: "Now you can import the settings of this font!"
                },
                base64: 0
            });
        

            new NextendElementText({
              hidden: "level5marginnextendlevel5margin_0"
            });
        

            new NextendElementText({
              hidden: "level5marginnextendlevel5margin_1"
            });
        

            new NextendElementText({
              hidden: "level5marginnextendlevel5margin_2"
            });
        

            new NextendElementText({
              hidden: "level5marginnextendlevel5margin_3"
            });
        

            new NextendElementSwitcher({
              hidden: "level5marginnextendlevel5margin_4",
              values: ["px","em"]
            });
        

            new NextendElementMixed({
              hidden: "nextendlevel5margin",
              elements: ["level5marginnextendlevel5margin_0","level5marginnextendlevel5margin_1","level5marginnextendlevel5margin_2","level5marginnextendlevel5margin_3","level5marginnextendlevel5margin_4"],
              separator: "|*|"
            });
        

            new NextendElementText({
              hidden: "level5paddingnextendlevel5padding_0"
            });
        

            new NextendElementText({
              hidden: "level5paddingnextendlevel5padding_1"
            });
        

            new NextendElementText({
              hidden: "level5paddingnextendlevel5padding_2"
            });
        

            new NextendElementText({
              hidden: "level5paddingnextendlevel5padding_3"
            });
        

            new NextendElementSwitcher({
              hidden: "level5paddingnextendlevel5padding_4",
              values: ["px","em"]
            });
        

            new NextendElementMixed({
              hidden: "nextendlevel5padding",
              elements: ["level5paddingnextendlevel5padding_0","level5paddingnextendlevel5padding_1","level5paddingnextendlevel5padding_2","level5paddingnextendlevel5padding_3","level5paddingnextendlevel5padding_4"],
              separator: "|*|"
            });
        

            new NextendElementText({
              hidden: "level5bordernextendlevel5border_0"
            });
        

            new NextendElementText({
              hidden: "level5bordernextendlevel5border_1"
            });
        

            new NextendElementText({
              hidden: "level5bordernextendlevel5border_2"
            });
        

            new NextendElementText({
              hidden: "level5bordernextendlevel5border_3"
            });
        

            new NextendElementSwitcher({
              hidden: "level5bordernextendlevel5border_4",
              values: ["px","em"]
            });
        

            new NextendElementText({
              hidden: "level5bordernextendlevel5border_5"
            });
        

            new NextendElementColor({
              hidden: "level5bordernextendlevel5border_5",
              alpha: 0
            });
        

            new NextendElementText({
              hidden: "level5bordernextendlevel5border_6"
            });
        

            new NextendElementMixed({
              hidden: "nextendlevel5border",
              elements: ["level5bordernextendlevel5border_0","level5bordernextendlevel5border_1","level5bordernextendlevel5border_2","level5bordernextendlevel5border_3","level5bordernextendlevel5border_4","level5bordernextendlevel5border_5","level5bordernextendlevel5border_6"],
              separator: "|*|"
            });
        

            new NextendElementRadio({
              hidden: "level5minusnextendlevel5minus_0",
              values: ["-1","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/minus\/1minus.png","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/minus\/exp2.png","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/minus\/plus.png","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/minus\/small.png"]
            });
        

            new NextendElementRadio({
              hidden: "level5minusnextendlevel5minus_1",
              values: ["left","right"]
            });
        

            new NextendElementText({
              hidden: "level5minusnextendlevel5minus_2"
            });
        

            new NextendElementColor({
              hidden: "level5minusnextendlevel5minus_2",
              alpha: 1
            });
        

            new NextendElementSwitcher({
              hidden: "level5minusnextendlevel5minus_3",
              values: ["1","0"]
            });
        

            new NextendElementMixed({
              hidden: "nextendlevel5minus",
              elements: ["level5minusnextendlevel5minus_0","level5minusnextendlevel5minus_1","level5minusnextendlevel5minus_2","level5minusnextendlevel5minus_3"],
              separator: "|*|"
            });
        

            new NextendElementRadio({
              hidden: "level5plusnextendlevel5plus_0",
              values: ["-1","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/plus\/1plus.png","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/plus\/exp2.png","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/plus\/plus.png","\/plugins\/nextend-accordion-menu\/library\/assets\/accordionmenu\/images\/default\/plus\/small.png"]
            });
        

            new NextendElementRadio({
              hidden: "level5plusnextendlevel5plus_1",
              values: ["left","right"]
            });
        

            new NextendElementText({
              hidden: "level5plusnextendlevel5plus_2"
            });
        

            new NextendElementColor({
              hidden: "level5plusnextendlevel5plus_2",
              alpha: 1
            });
        

            new NextendElementSwitcher({
              hidden: "level5plusnextendlevel5plus_3",
              values: ["1","0"]
            });
        

            new NextendElementMixed({
              hidden: "nextendlevel5plus",
              elements: ["level5plusnextendlevel5plus_0","level5plusnextendlevel5plus_1","level5plusnextendlevel5plus_2","level5plusnextendlevel5plus_3"],
              separator: "|*|"
            });
        

            new NextendElementFontmanager({
                hidden: "nextendlevel5textfont",
                button: "nextend-level5textfont-button",
                importbtn: "nextend-level5textfont-button-import",
                exportbtn: "nextend-level5textfont-button-export",
                message: "nextend-level5textfont-message",
                tabs: ["Text","Active","Link","Hover"],
                translatedTabs: ["Text","Active","Link","Hover"],
                firsttab: "Text",
                txt: {
                    importingdone: "Importing done...",
                    youcanimport: "Now you can import the settings of this font!"
                },
                base64: 0
            });
        

            new NextendElementOnoff({
              hidden: "nextendmoduleshowtitle"
            });
        

            new NextendElementOnoff({
              hidden: "nextendparentlink"
            });
        

            new NextendElementRadio({
              hidden: "nextendaccordionmode",
              values: ["1","2","0"]
            });
        

            new NextendElementRadio({
              hidden: "nextendmode",
              values: ["onclick","onmouseenter","both","mouseenterandleave"]
            });
        

            new NextendElementRadio({
              hidden: "nextendactive",
              values: ["0","1","2"]
            });
        

            new NextendElementRadio({
              hidden: "nextendopened",
              values: ["0","-1","1","2","3"]
            });
        

            new NextendElementList({
              hidden: "nextendopenedlevels",
              multiple: 1,
              value: ""
            });
        

            new NextendElementText({
              hidden: "slicenextendslice_0"
            });
        

            new NextendElementText({
              hidden: "slicenextendslice_1"
            });
        

            new NextendElementOnoff({
              hidden: "slicenextendslice_2"
            });
        

            new NextendElementMixed({
              hidden: "nextendslice",
              elements: ["slicenextendslice_0","slicenextendslice_1","slicenextendslice_2"],
              separator: "|*|"
            });
        

            new NextendElementOnoff({
              hidden: "tooltipnextendtooltip_0"
            });
        

            new NextendElementText({
              hidden: "tooltipnextendtooltip_1"
            });
        

            new NextendElementText({
              hidden: "tooltipnextendtooltip_2"
            });
        

            new NextendElementMixed({
              hidden: "nextendtooltip",
              elements: ["tooltipnextendtooltip_0","tooltipnextendtooltip_1","tooltipnextendtooltip_2"],
              separator: "|*|"
            });
        

            new NextendElementList({
              hidden: "animationskinsnextendanimationskins_0",
              multiple: 0,
              value: ""
            });
        

            new NextendElementSkin({
              hidden: "animationskinsnextendanimationskins_0",
              preid: "nextend",
              skins: {"off":{"transform":"0","transformperspective":"0","transformorigin":"center|*|center|*|0","transformtranslate":"0|*|0|*|0","transformscale":"1.0|*|1.0|*|1.0","transformrotate":"0|*|0|*|0"},"accordion":{"animation":"600|*|dojo.fx.easing.cubicInOut|*|dojo.fx.easing.cubicInOut","snaptobottom":"0","css3animation":"1","transform":"0","transformperspective":"800","transformorigin":"0|*|0|*|0","transformtranslate":"0|*|0|*|0","transformscale":"1.0|*|1.0|*|1.0","transformrotate":"0|*|0|*|0"},"accordionopacity":{"animation":"600|*|dojo.fx.easing.cubicInOut|*|dojo.fx.easing.cubicInOut","snaptobottom":"0","css3animation":"1","transform":"1","opacity":"0","transformperspective":"800","transformorigin":"0|*|0|*|0","transformtranslate":"0|*|0|*|0","transformscale":"1.0|*|1.0|*|1.0","transformrotate":"0|*|0|*|0"},"fliptop":{"animation":"600|*|dojo.fx.easing.cubicInOut|*|dojo.fx.easing.cubicInOut","snaptobottom":"0","css3animation":"1","transform":"1","opacity":"0","transformperspective":"800","transformorigin":"center|*|bottom|*|0","transformtranslate":"0|*|0|*|0","transformscale":"1.0|*|1.0|*|1.0","transformrotate":"90|*|0|*|0"},"flipleft":{"snaptobottom":"1","css3animation":"1","transform":"1","opacity":"0.5","transformperspective":"800","transformorigin":"left|*|top|*|0","transformtranslate":"0|*|0|*|0","transformscale":"1.0|*|1.0|*|1.0","transformrotate":"0|*|90|*|0"},"scaleup":{"snaptobottom":"0","css3animation":"1","transform":"1","opacity":"0.5","transformperspective":"800","transformorigin":"center|*|top|*|0","transformtranslate":"0|*|0|*|0","transformscale":"0|*|0|*|0","transformrotate":"-90|*|0|*|0"},"translateleft":{"snaptobottom":"0","css3animation":"1","transform":"1","opacity":"0","transformperspective":"800","transformorigin":"0|*|0|*|0","transformtranslate":"-300|*|0|*|0","transformscale":"1|*|1|*|1","transformrotate":"0|*|0|*|0"},"transleteright":{"snaptobottom":"0","css3animation":"1","transform":"1","opacity":"0","transformperspective":"800","transformorigin":"0|*|0|*|0","transformtranslate":"300|*|0|*|0","transformscale":"1|*|1|*|1","transformrotate":"0|*|0|*|0"},"transleteZ":{"snaptobottom":"0","css3animation":"1","transform":"1","opacity":"0","transformperspective":"800","transformorigin":"0|*|0|*|0","transformtranslate":"0|*|0|*|-300","transformscale":"1|*|1|*|1","transformrotate":"30|*|0|*|0"},"flipdown":{"snaptobottom":"0","css3animation":"1","transform":"1","opacity":"0","transformperspective":"800","transformorigin":"0|*|0|*|0","transformtranslate":"0|*|0|*|-300","transformscale":"1|*|1|*|0","transformrotate":"0|*|0|*|-90"}}
            });
        

            new NextendElementMixed({
              hidden: "nextendanimationskins",
              elements: ["animationskinsnextendanimationskins_0"],
              separator: "|*|"
            });
        

            new NextendElementText({
              hidden: "animationnextendanimation_0"
            });
        

            new NextendElementList({
              hidden: "animationnextendanimation_1",
              multiple: 0,
              value: "dojo.fx.easing.cubicInOut"
            });
        

            new NextendElementList({
              hidden: "animationnextendanimation_2",
              multiple: 0,
              value: "dojo.fx.easing.cubicInOut"
            });
        

            new NextendElementMixed({
              hidden: "nextendanimation",
              elements: ["animationnextendanimation_0","animationnextendanimation_1","animationnextendanimation_2"],
              separator: "|*|"
            });
        

            new NextendElementOnoff({
              hidden: "nextendsnaptobottom"
            });
        

            new NextendElementOnoff({
              hidden: "nextendcss3animation"
            });
        

            new NextendElementOnoff({
              hidden: "nextendtransform"
            });
        

            new NextendElementText({
              hidden: "nextendopacity"
            });
        

            new NextendElementText({
              hidden: "nextendtransformperspective"
            });
        

            new NextendElementText({
              hidden: "transformoriginnextendtransformorigin_0"
            });
        

            new NextendElementText({
              hidden: "transformoriginnextendtransformorigin_1"
            });
        

            new NextendElementText({
              hidden: "transformoriginnextendtransformorigin_2"
            });
        

            new NextendElementMixed({
              hidden: "nextendtransformorigin",
              elements: ["transformoriginnextendtransformorigin_0","transformoriginnextendtransformorigin_1","transformoriginnextendtransformorigin_2"],
              separator: "|*|"
            });
        

            new NextendElementText({
              hidden: "transformtranslatenextendtransformtranslate_0"
            });
        

            new NextendElementText({
              hidden: "transformtranslatenextendtransformtranslate_1"
            });
        

            new NextendElementText({
              hidden: "transformtranslatenextendtransformtranslate_2"
            });
        

            new NextendElementMixed({
              hidden: "nextendtransformtranslate",
              elements: ["transformtranslatenextendtransformtranslate_0","transformtranslatenextendtransformtranslate_1","transformtranslatenextendtransformtranslate_2"],
              separator: "|*|"
            });
        

            new NextendElementText({
              hidden: "transformscalenextendtransformscale_0"
            });
        

            new NextendElementText({
              hidden: "transformscalenextendtransformscale_1"
            });
        

            new NextendElementText({
              hidden: "transformscalenextendtransformscale_2"
            });
        

            new NextendElementMixed({
              hidden: "nextendtransformscale",
              elements: ["transformscalenextendtransformscale_0","transformscalenextendtransformscale_1","transformscalenextendtransformscale_2"],
              separator: "|*|"
            });
        

            new NextendElementText({
              hidden: "transformrotatenextendtransformrotate_0"
            });
        

            new NextendElementText({
              hidden: "transformrotatenextendtransformrotate_1"
            });
        

            new NextendElementText({
              hidden: "transformrotatenextendtransformrotate_2"
            });
        

            new NextendElementMixed({
              hidden: "nextendtransformrotate",
              elements: ["transformrotatenextendtransformrotate_0","transformrotatenextendtransformrotate_1","transformrotatenextendtransformrotate_2"],
              separator: "|*|"
            });
        

            new NextendElementText({
              hidden: "nextendclass_sfx"
            });
        

            new NextendElementOnoff({
              hidden: "nextendhtml5"
            });
        

            new NextendElementOnoff({
              hidden: "nextendnoscript"
            });
        
}); })(ndojo);
(function($){ $(document).ready(function() {$(".nextend-hastip").qtip({
                position: {
                    my: "bottom center",
                    at: "top right"
                },
                style: {
                    tip: {                        
                        width: 12,
                        height: 6
                    }
                }
            });
            $(".nextend-element-hastip").qtip({
                position: {
                    my: "bottom center",
                    at: "top center"
                },
                style: {
                    tip: {                        
                        width: 12,
                        height: 6
                    }
                }
            });
        
}); })(njQuery);

