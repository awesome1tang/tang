/* 2019-01-07 11:01:12 joya.js @issue to lijiwen@jd.com Thanks */
try{window.fingerprint={},function t(){fingerprint.config={fpb_send_data:'body={"appname": "jdwebm_hf","jdkey": "","whwswswws": "","businness": "","body": {}}',api:{canvas_spendtime:0}},fingerprint.broswer={getNavigatorPlatform:function(){return navigator.platform?navigator.platform:"unknown"},getDeviceMemory:function(){return navigator.deviceMemory?navigator.deviceMemory:0},rB:function(){var t=[],e=["__webdriver_evaluate","__selenium_evaluate","__webdriver_script_function","__webdriver_script_func","__webdriver_script_fn","__fxdriver_evaluate","__driver_unwrapped","__webdriver_unwrapped","__driver_evaluate","__selenium_unwrapped","__fxdriver_unwrapped"],n=["_phantom","__nightmare","_selenium","callPhantom","callSelenium","_Selenium_IDE_Recorder"];for(var r in n){var i=n[r];window[i]&&t.push({key:"window",value:i})}for(var o in e){n=e[o];window.document[n]&&t.push({key:"window_document",value:n})}for(var a in window.document)a.match(/\$[a-z]dc_/)&&window.document[a].cache_&&t.push({key:"document",value:a});return window.external&&JSON.stringify(window.external)&&-1!=JSON.stringify(window.external).indexOf("Sequentum")&&t.push({key:"window_external",value:1}),window.document.documentElement.getAttribute("selenium")&&t.push({key:"document_selenium",value:1}),window.document.documentElement.getAttribute("webdriver")&&t.push({key:"document_webdriver",value:1}),window.document.documentElement.getAttribute("driver")&&t.push({key:"document_driver",value:1}),t},getHeadless:function(){return this.rB().length>0?1:navigator.userAgent.toLocaleLowerCase().indexOf("headless")>-1?1:0},getLocation:function(){return fingerprint.util.MD5.hex_md5(location.href.split("?")[0])},getUserAgent:function(){return fingerprint.util.MD5.hex_md5(navigator.userAgent)},getCanvas:function(){try{var t=new Date,e=[],n=document.createElement("canvas");n.width=2e3,n.height=200,n.style.display="inline";var r=n.getContext("2d");return r.rect(0,0,10,10),r.rect(2,2,6,6),e.push("canvas winding:"+(!1===r.isPointInPath(5,5,"evenodd")?"yes":"no")),r.textBaseline="alphabetic",r.fillStyle="#f60",r.fillRect(125,1,62,20),r.fillStyle="#069",r.font="11pt no-real-font-123",r.fillText("Cwm fjordbank glyphs vext quiz, 😃",2,15),r.fillStyle="rgba(102, 204, 0, 0.2)",r.font="18pt Arial",r.fillText("Cwm fjordbank glyphs vext quiz, 😃",4,45),r.globalCompositeOperation="multiply",r.fillStyle="rgb(255,0,255)",r.beginPath(),r.arc(50,50,50,0,2*Math.PI,!0),r.closePath(),r.fill(),r.fillStyle="rgb(0,255,255)",r.beginPath(),r.arc(100,50,50,0,2*Math.PI,!0),r.closePath(),r.fill(),r.fillStyle="rgb(255,255,0)",r.beginPath(),r.arc(75,100,50,0,2*Math.PI,!0),r.closePath(),r.fill(),r.fillStyle="rgb(255,0,255)",r.arc(75,75,75,0,2*Math.PI,!0),r.arc(75,75,25,0,2*Math.PI,!0),r.fill("evenodd"),e.push("canvas fp:"+fingerprint.util.MD5.hex_md5(n.toDataURL())),fingerprint.config.api.canvas_spendtime=(new Date).getTime()-t.getTime(),e.join("~")}catch(t){return console.log(t),""}},getPluginName:function(){var t="";if(navigator.plugins.length>0)for(i=0;i<navigator.plugins.length;i++)t+=navigator.plugins[i].name+";";return t},getPluginNum:function(){return navigator.plugins.length},getScreenResolution:function(){return window.screen.width+"*"+window.screen.height}},fingerprint.util={G:"",getCookie:function(t){var e,n=new RegExp("(^| )"+t+"=([^;]*)(;|$)");return(e=document.cookie.match(n))?unescape(e[2]):""},getStorage:function(t){if(window.Storage&&window.localStorage&&window.localStorage instanceof Storage)return JSON.parse(localStorage.getItem(t))},setStorage:function(t,e){window.Storage&&window.localStorage&&window.localStorage instanceof Storage&&localStorage.setItem(t,JSON.stringify(e))},getFpb:function(t){var e,n="";if(window.navigator.cookieEnabled){var r=window.document.cookie.indexOf(t+"=");if(-1!=r){var i=t.length+1;r+=i;var o=window.document.cookie.indexOf(";",r);-1==o&&(o=window.document.cookie.length);try{e=decodeURIComponent(window.document.cookie.substring(r,o))||""}catch(t){e=window.document.cookie.substring(r,o)||""}n||(n=e)}}try{window.localStorage&&(e=window.localStorage.getItem(t)||"",n||(n=e))}catch(t){}try{window.sessionStorage&&(e=window.sessionStorage.getItem(t)||"",n||(n=e))}catch(t){}return e=window.name,n||(n=e),n||(n=e),n||""},getDateFormat:function(t,e){var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));for(var r in n)new RegExp("("+r+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?n[r]:("00"+n[r]).substr((""+n[r]).length)));return e},MD5:{chrsz:8,G:"",hex_md5:function(t){return this.binl2hex(this.core_md5(this.str2binl(t),t.length*this.chrsz))},core_md5:function(t,e){t[e>>5]|=128<<e%32,t[14+(e+64>>>9<<4)]=e;for(var n=1732584193,r=-271733879,i=-1732584194,o=271733878,a=0;a<t.length;a+=16){var d=n,s=r,c=i,u=o;n=this.md5_ff(n,r,i,o,t[a+0],7,-680876936),o=this.md5_ff(o,n,r,i,t[a+1],12,-389564586),i=this.md5_ff(i,o,n,r,t[a+2],17,606105819),r=this.md5_ff(r,i,o,n,t[a+3],22,-1044525330),n=this.md5_ff(n,r,i,o,t[a+4],7,-176418897),o=this.md5_ff(o,n,r,i,t[a+5],12,1200080426),i=this.md5_ff(i,o,n,r,t[a+6],17,-1473231341),r=this.md5_ff(r,i,o,n,t[a+7],22,-45705983),n=this.md5_ff(n,r,i,o,t[a+8],7,1770035416),o=this.md5_ff(o,n,r,i,t[a+9],12,-1958414417),i=this.md5_ff(i,o,n,r,t[a+10],17,-42063),r=this.md5_ff(r,i,o,n,t[a+11],22,-1990404162),n=this.md5_ff(n,r,i,o,t[a+12],7,1804603682),o=this.md5_ff(o,n,r,i,t[a+13],12,-40341101),i=this.md5_ff(i,o,n,r,t[a+14],17,-1502002290),r=this.md5_ff(r,i,o,n,t[a+15],22,1236535329),n=this.md5_gg(n,r,i,o,t[a+1],5,-165796510),o=this.md5_gg(o,n,r,i,t[a+6],9,-1069501632),i=this.md5_gg(i,o,n,r,t[a+11],14,643717713),r=this.md5_gg(r,i,o,n,t[a+0],20,-373897302),n=this.md5_gg(n,r,i,o,t[a+5],5,-701558691),o=this.md5_gg(o,n,r,i,t[a+10],9,38016083),i=this.md5_gg(i,o,n,r,t[a+15],14,-660478335),r=this.md5_gg(r,i,o,n,t[a+4],20,-405537848),n=this.md5_gg(n,r,i,o,t[a+9],5,568446438),o=this.md5_gg(o,n,r,i,t[a+14],9,-1019803690),i=this.md5_gg(i,o,n,r,t[a+3],14,-187363961),r=this.md5_gg(r,i,o,n,t[a+8],20,1163531501),n=this.md5_gg(n,r,i,o,t[a+13],5,-1444681467),o=this.md5_gg(o,n,r,i,t[a+2],9,-51403784),i=this.md5_gg(i,o,n,r,t[a+7],14,1735328473),r=this.md5_gg(r,i,o,n,t[a+12],20,-1926607734),n=this.md5_hh(n,r,i,o,t[a+5],4,-378558),o=this.md5_hh(o,n,r,i,t[a+8],11,-2022574463),i=this.md5_hh(i,o,n,r,t[a+11],16,1839030562),r=this.md5_hh(r,i,o,n,t[a+14],23,-35309556),n=this.md5_hh(n,r,i,o,t[a+1],4,-1530992060),o=this.md5_hh(o,n,r,i,t[a+4],11,1272893353),i=this.md5_hh(i,o,n,r,t[a+7],16,-155497632),r=this.md5_hh(r,i,o,n,t[a+10],23,-1094730640),n=this.md5_hh(n,r,i,o,t[a+13],4,681279174),o=this.md5_hh(o,n,r,i,t[a+0],11,-358537222),i=this.md5_hh(i,o,n,r,t[a+3],16,-722521979),r=this.md5_hh(r,i,o,n,t[a+6],23,76029189),n=this.md5_hh(n,r,i,o,t[a+9],4,-640364487),o=this.md5_hh(o,n,r,i,t[a+12],11,-421815835),i=this.md5_hh(i,o,n,r,t[a+15],16,530742520),r=this.md5_hh(r,i,o,n,t[a+2],23,-995338651),n=this.md5_ii(n,r,i,o,t[a+0],6,-198630844),o=this.md5_ii(o,n,r,i,t[a+7],10,1126891415),i=this.md5_ii(i,o,n,r,t[a+14],15,-1416354905),r=this.md5_ii(r,i,o,n,t[a+5],21,-57434055),n=this.md5_ii(n,r,i,o,t[a+12],6,1700485571),o=this.md5_ii(o,n,r,i,t[a+3],10,-1894986606),i=this.md5_ii(i,o,n,r,t[a+10],15,-1051523),r=this.md5_ii(r,i,o,n,t[a+1],21,-2054922799),n=this.md5_ii(n,r,i,o,t[a+8],6,1873313359),o=this.md5_ii(o,n,r,i,t[a+15],10,-30611744),i=this.md5_ii(i,o,n,r,t[a+6],15,-1560198380),r=this.md5_ii(r,i,o,n,t[a+13],21,1309151649),n=this.md5_ii(n,r,i,o,t[a+4],6,-145523070),o=this.md5_ii(o,n,r,i,t[a+11],10,-1120210379),i=this.md5_ii(i,o,n,r,t[a+2],15,718787259),r=this.md5_ii(r,i,o,n,t[a+9],21,-343485551),n=this.safe_add(n,d),r=this.safe_add(r,s),i=this.safe_add(i,c),o=this.safe_add(o,u)}return Array(n,r,i,o)},md5_cmn:function(t,e,n,r,i,o){return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(e,t),this.safe_add(r,o)),i),n)},md5_ff:function(t,e,n,r,i,o,a){return this.md5_cmn(e&n|~e&r,t,e,i,o,a)},md5_gg:function(t,e,n,r,i,o,a){return this.md5_cmn(e&r|n&~r,t,e,i,o,a)},md5_hh:function(t,e,n,r,i,o,a){return this.md5_cmn(e^n^r,t,e,i,o,a)},md5_ii:function(t,e,n,r,i,o,a){return this.md5_cmn(n^(e|~r),t,e,i,o,a)},safe_add:function(t,e){var n=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(n>>16)<<16|65535&n},bit_rol:function(t,e){return t<<e|t>>>32-e},str2binl:function(t){for(var e=Array(),n=(1<<this.chrsz)-1,r=0;r<t.length*this.chrsz;r+=this.chrsz)e[r>>5]|=(t.charCodeAt(r/this.chrsz)&n)<<r%32;return e},binl2hex:function(t){for(var e="0123456789abcdef",n="",r=0;r<4*t.length;r++)n+=e.charAt(t[r>>2]>>r%4*8+4&15)+e.charAt(t[r>>2]>>r%4*8&15);return n}},Base64:{_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(t){var e,n,r,i,o,a,d,s="",c=0;for(t=this._utf8_encode(t);c<t.length;)i=(e=t.charCodeAt(c++))>>2,o=(3&e)<<4|(n=t.charCodeAt(c++))>>4,a=(15&n)<<2|(r=t.charCodeAt(c++))>>6,d=63&r,isNaN(n)?a=d=64:isNaN(r)&&(d=64),s=s+this._keyStr.charAt(i)+this._keyStr.charAt(o)+this._keyStr.charAt(a)+this._keyStr.charAt(d);return s},_utf8_encode:function(t){t=t.replace(/\r\n/g,"\n");for(var e="",n=0;n<t.length;n++){var r=t.charCodeAt(n);r<128?e+=String.fromCharCode(r):r>127&&r<2048?(e+=String.fromCharCode(r>>6|192),e+=String.fromCharCode(63&r|128)):(e+=String.fromCharCode(r>>12|224),e+=String.fromCharCode(r>>6&63|128),e+=String.fromCharCode(63&r|128))}return e}}},getFingerprint=function(){try{return"v001"+fingerprint.util.Base64.encode(JSON.stringify({b:fingerprint.util.getCookie("shshshfpa"),c:fingerprint.util.getFpb("shshshfpb"),d:fingerprint.broswer.getNavigatorPlatform(),f:fingerprint.broswer.getDeviceMemory(),g:fingerprint.broswer.getHeadless(),h:fingerprint.broswer.getCanvas(),i:fingerprint.config.api.canvas_spendtime,j:fingerprint.util.getDateFormat(new Date,"yyyy-MM-dd hh:mm:ss"),k:fingerprint.broswer.getLocation(),l:fingerprint.broswer.getUserAgent(),m:fingerprint.util.getCookie("pin")||fingerprint.util.getCookie("pt_pin"),n:fingerprint.broswer.getPluginName(),o:fingerprint.broswer.getPluginNum(),p:fingerprint.broswer.getScreenResolution()}))}catch(t){return console.log(t),"error :"+t}}}()}catch(e){getFingerprint=function(){return console.log(e),"error :"+e}}function privateLogJOYAJS(t,e){var n=Array.prototype.slice.call(arguments);n=n&&n.slice(2),JA&&JA.tracker.ngloader("other.000000",{t1:t,t2:e,p0:encodeURIComponent(JA.util.join(n))})}function log(t,e){var n=Array.prototype.slice.call(arguments),r=n;n=n&&n.slice(2),JA&&JA.tracker.ngloader("other.000000",{t1:t,t2:e,p0:encodeURIComponent(JA.util.join(n))}),JA&&JA.tracker.isCanPrey()&&JA&&JA.tracker.ngloader("other.000000",{t1:"logservice_check",t2:"joya",p0:encodeURIComponent(JA.util.join(r))})}function logJSON(t,e,n){if(!JA)return!1;JA.tracker.ngloaderJSON("other.000000",{t1:t,t2:e,p0:n},"toWarriors")}function expLogJSON(t,e,n){if(!JA)return!1;JA.tracker.ngloaderJSON("exp_log.100000",{t1:t,t2:e,p0:n},"toWarriors")}function nlog(t,e){JA&&JA.tracker.ngloader(t,e)}function isMeta(t){if(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)return!0;var e=t.which,n=t.button;return e||n===undefined?2===e||2===n:1&!n&&2&!n&&4&n}!function(){function t(t){return t<10?"0"+t:t}var e,n,r,i;function o(t){return e.lastIndex=0,e.test(t)?'"'+t.replace(e,function(t){var e=i[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}"object"!=typeof JSON&&(JSON={}),"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+t(this.getUTCMonth()+1)+"-"+t(this.getUTCDate())+"T"+t(this.getUTCHours())+":"+t(this.getUTCMinutes())+":"+t(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}),"function"!=typeof JSON.stringify&&(e=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,i={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e){var i;if(n="",r="","number"==typeof e)for(i=0;i<e;i+=1)r+=" ";else"string"==typeof e&&(r=e);return function a(t,e){var i,d,s,c,u,g=n,l=e[t];switch(l&&"object"==typeof l&&"function"==typeof l.toJSON&&(l=l.toJSON(t)),typeof l){case"string":return o(l);case"number":return isFinite(l)?String(l):"null";case"boolean":case"null":return String(l);case"object":if(!l)return"null";if(n+=r,u=[],"[object Array]"===Object.prototype.toString.apply(l)){for(c=l.length,i=0;i<c;i+=1)u[i]=a(i,l)||"null";return s=0===u.length?"[]":n?"[\n"+n+u.join(",\n"+n)+"\n"+g+"]":"["+u.join(",")+"]",n=g,s}for(d in l)Object.prototype.hasOwnProperty.call(l,d)&&(s=a(d,l))&&u.push(o(d)+(n?": ":":")+s);return s=0===u.length?"{}":n?"{\n"+n+u.join(",\n"+n)+"\n"+g+"}":"{"+u.join(",")+"}",n=g,s}}("",{"":t})})}(),function(){var t=window,n=document,r=encodeURIComponent,o=decodeURIComponent,a="length",d="indexOf",s="toLowerCase",c=!1,u=!1,g="",l="",h={};h.util={join:function(t){if(t instanceof Array){for(var e="",n=0,r=t.length;n<r;n++)e+=t[n]+(n==r-1?"":"|||");return e}return t},getParameter:function(t,e){var n=new RegExp("(?:^|&|[?]|[/])"+e+"=([^&]*)").exec(t);return n?r(n[1]):""},Wv:function(t,e,r,i){r=r&&r.replace(/.*?(\w+\.\w+)$/,"$1"),t=t+"="+e+"; path=/; ",i&&(t+="expires="+new Date((new Date).getTime()+i).toGMTString()+"; "),r&&(t+="domain="+r+";"),n.cookie=t},Vv:function(t){for(var e=[],r=n.cookie.split(";"),i=RegExp("^\\s*"+t+"=\\s*(.*?)\\s*$"),o=0;o<r[a];o++){var d=r[o].match(i);d&&e.push(d[1])}return e}};var f=0;function m(t){return(t?"_":"")+f++}var p=m(),v=m(),w=m(),_=m(),j=m(),b=m(),y=m(),S=m(),x=m(),C=m(),N=m(),A=m(),k=m(),J=m(),O=m(),T=m(),D=m(),E=m(),R=m(),L=m(),I=m(),M=m(),P=m(),U=m(),W=m(),Y=m(),q=m(),V=m(),z=m(),B=m(),F=m(),X=m(),H=m(),G=m(),K=m(),Q=m(),Z=m(),tt=["i.easou.com:q","m.baidu.com:word","m.sm.cn:q","m.so.com:q","wap.sogou.com:keyword","m.sogou.com:keyword","wap.sogo.com:keyword","m.sogo.com:keyword","page.roboo.com:q","ask.com:q","baidu:word","baidu:wd","bing:q","easou:q","google:q","roboo:word","roboo:q","sm.cn:q","so.com:q","sogou:keyword","sogou:query","sogo.com:keyword","sogo.com:query","yahoo:p","yandex:text","yicha:key"],et=function(){return(new Date).getTime()+""+parseInt(2147483647*Math.random())},nt=function(){return at(n.domain)},rt=function(){var e={},r=t.navigator,i=t.screen;return e.D=i?i.width+"x"+i.height:"-",e.C=i?i.colorDepth+"-bit":"-",e.language=(r&&(r.language||r.browserLanguage)||"-")[s](),e.javaEnabled=r&&r.javaEnabled()?1:0,e.characterSet=n.characterSet||n.charset||"-",e},it=function(){var t,e,n,r;if(n="ShockwaveFlash",(t=(t=window.navigator)?t.plugins:void 0)&&t[a]>0)for(e=0;e<t[a]&&!r;e++)n=t[e],n.name[d]("Shockwave Flash")>-1&&(r=n.description.split("Shockwave Flash ")[1]);else{n=n+"."+n;try{r=(e=new ActiveXObject(n+".7")).GetVariable("$version")}catch(c){}if(!r)try{e=new ActiveXObject(n+".6"),r="WIN 6,0,21,0",e.AllowScriptAccess="always",r=e.GetVariable("$version")}catch(i){}if(!r)try{r=(e=new ActiveXObject(n)).GetVariable("$version")}catch(u){}r&&(r=(r=r.split(" ")[1].split(","))[0]+"."+r[1]+" r"+r[2])}var o=h.util.Vv("_r2");t=r?r+(o[a]>0?"_"+o[0]:""):"-";var s=h.util.Vv("limgs");return t+=s[a]>0?"_"+s[0]:""},ot=function(t){return void 0==t||"-"==t||""==t},at=function(t){var e,n=1,r=0;if(!ot(t))for(n=0,e=t[a]-1;e>=0;e--)r=t.charCodeAt(e),n=(n<<6&268435455)+r+(r<<14),r=266338304&n,n=0!=r?n^r>>21:n;return n},dt=function(){var t=window.jaq||[],e={};if(t instanceof Array)for(var n=0,r=t.length;n<r;n++)e[t[n][0]]=t[n][1];return e},st=function(){var t={name:"other",version:"0"},e=navigator.userAgent.toLowerCase();browserRegExp={se360:/360se/,se360_2x:/qihu/,ie:/msie[ ]([\w.]+)/,firefox:/firefox[|\/]([\w.]+)/,chrome:/chrome[|\/]([\w.]+)/,safari:/version[|\/]([\w.]+)(\s\w.+)?\s?safari/,opera:/opera[|\/]([\w.]+)/};for(var n in browserRegExp){var r=browserRegExp[n].exec(e);if(r){t.name=n,t.version=r[1]||"0";break}}return t},ct=function(){var t=/(win|android|linux|nokia|ipad|iphone|ipod|mac|sunos|solaris)/.exec(navigator.platform.toLowerCase());return null==t?"other":t[0]},ut=function(t){t.set(x,n.location.hostname),t.set(C,n.title.replace(/\$/g,"")),t.set(N,n.location.pathname),t.set(A,n.referrer.replace(/\$/g,"")),t.set(k,n.location.href);var e=h.util.Vv("__jda"),r=e[a]>0?e[0].split("."):null;t.set(v,r&&!ot(r[1])?r[1]:et()),t.set(P,r?r[2]:t.get(j)),t.set(U,r?r[3]:t.get(j)),t.set(W,r?r[4]:t.get(j)),t.set(Y,r?r[5]:1);var i,d=h.util.Vv("__jdv");d[a]>0&&(i=(d=pt?o(d[0]):d[0]).split("|")),t.set(z,i?i[1]:"direct"),t.set(B,i?i[2]:"-"),t.set(F,i?i[3]:"none"),t.set(X,i?i[4]:"-");var s=h.util.Vv("__jdb"),c=s[a]>0?s[0].split("."):null,u=c&&4==c.length?1:0;return t.set(q,c?c[0+u]:0),t.set(G,function(){for(var t="",e=["jwotest_product","jwotest_list","jwotest_cart","jwotest_orderinfo","jwotest_homepage","jwotest_other1","jwotest_other2","jwotest_other3"],n=0,r=e.length;n<r;n++){var i=h.util.Vv(e[n]);if(0!=i[a]){var d=o(i[0]).match(/=(.*?)&/gi),s=[];if(null!=d){for(var c=0;c<d.length;c++){var u=d[c];s.push(0==c?"T"+u.substring(1,u.length-1):u.substring(1,u.length-1))}t+=s.join("-")+";"}}}return t}()||"-"),!0},gt=function(t,e){var n=e.split(".");t.set(P,n[2]),t.set(U,n[4]),t.set(W,Math.round((new Date).getTime()/1e3)),t.m(Y),t.set(q,1)},lt=function(t){t.m(q)},ht=function(t){return[t.get(w),t.get(z)||n.domain,t.get(B)||"(direct)",t.get(F)||"direct",t.get(X)||"-",(new Date).getTime()].join("|")},ft=function(t){var e,n,r=h.util.Vv("__jda");0==r.length?(n=(e=t).get(j),e.set(v,et()),e.set(P,n),e.set(U,n),e.set(W,n),e.set(Y,1),e.set(q,1)):gt(t,r[0])},mt=function(){for(var t=".jd.com",e=n.domain.toLowerCase(),r=["jd.ru","joybuy.com","joybuy.es"],i=0;i<r.length;i++){var o=r[i];if(e.substr(e.length-o.length)===o){t=".joybuy.com";break}}return t}(),pt=".joybuy.com"===mt,vt=function(t){var e=t.split("#"),n=e[0].split("?");if(u&&e[1]){var r=e[1].split("?"),i=(t=n[0].replace(/\/$/,""),r[0].replace(/^\//,""));n[0]=t+"/"+i,r[1]&&(n[1]=n[1]?n[1]+"&"+r[1]:r[1])}return n.join("?")},wt=new function(){var t={};this.set=function(e,n){t[e]=n},this.get=function(e){return void 0!==t[e]?t[e]:null},this.m=function(e){var n=this.get(e),r=void 0==n||""===n?0:1*n;t[e]=r+1};var e=dt();this.set(p,e.account),this.set(_,e.domain),this.set(w,nt()),this.set(j,Math.round((new Date).getTime()/1e3)),this.set(b,15552e6),this.set(y,1296e6),this.set(S,18e5),this.set(J,it());var n=st();this.set(O,n.name),this.set(T,n.version),this.set(D,ct());var i,o=rt();this.set(E,o.D),this.set(R,o.C),this.set(L,o.language),this.set(I,o.javaEnabled),this.set(M,o.characterSet),this.set(V,tt),this.set(H,(new Date).getTime()),i=e.erp_account?e.erp_account:(i=h.util.Vv("pin"))[a]?i[0]:"-",this.set(K,i);var d,s,g="";(d=h.util.Vv("pinId"))&&d[a]&&(g=d[0]),this.set(Q,g||"-"),e.extParams&&("object"==typeof(s=e.extParams)&&(s=JSON.stringify(s)),this.set(Z,r(s))),e.anchorpvflag&&"true"==e.anchorpvflag&&(c=!0,e.anchorToUri&&(u=!0))},_t=function(){this.a={},this.add=function(t,e){this.a[t]=e},this.get=function(t){return this.a[t]},this.toString=function(){return this.a.join("&")}},jt=function(t,e){e.add("jdac",t.get(p)),e.add("jduid",t.get(v)),e.add("jdsid",t.get(v)+"|"+t.get(Y)),e.add("jdje",t.get(I)),e.add("jdsc",t.get(R)),e.add("jdsr",t.get(E)),e.add("jdul",t.get(L)),e.add("jdcs",t.get(M)),e.add("jddt",t.get(C)||"-"),e.add("jdmr",r(t.get(A))),e.add("jdhn",t.get(x)||"-"),e.add("jdfl",t.get(J)),e.add("jdos",t.get(D)),e.add("jdbr",t.get(O)),e.add("jdbv",t.get(T)),e.add("jdwb",t.get(P)),e.add("jdxb",t.get(U)),e.add("jdyb",t.get(W)),e.add("jdzb",t.get(Y)),e.add("jdcb",t.get(q)),e.add("jdusc",t.get(z)||"direct"),e.add("jducp",t.get(B)||"-"),e.add("jdumd",t.get(F)||"-"),e.add("jduct",t.get(X)||"-"),e.add("jdlt","object"!=typeof jdpts?0:jdpts._st==undefined?0:t.get(H)-jdpts._st),e.add("jdtad",t.get(G)),e.add("pinid",t.get(Q))},bt=function(){ut(wt);var t,e,i=function(t){var e=n.location.search,r=n.referrer,i=t.get(_),o=h.util.getParameter(e,"utm_source"),c=[],u=t.get(z),g=t.get(B),l=t.get(F),f=0==h.util.Vv("__jdb")[a],m=!1;if(o){var p=h.util.getParameter(e,"utm_campaign"),v=h.util.getParameter(e,"utm_medium"),w=h.util.getParameter(e,"utm_term");c.push(o),c.push(p||"-"),c.push(v||"-"),c.push(w||"not set"),t.set(X,c[3]),m=!0}else{var j=r&&r.split("/")[2],b=!1;if(j&&j[d](i)<0){for(var y=t.get(V),S=0;S<y.length;S++){var x=y[S].split(":");if(j[d](x[0][s]())>-1&&r[d]((x[1]+"=")[s]())>-1){var C=h.util.getParameter(r,x[1]);c.push(x[0]),c.push("-"),c.push("organic"),c.push(C||"not set"),t.set(X,c[3]),b=!0;break}}b||(j[d]("zol.com.cn")>-1?(c.push("zol.com.cn"),c.push("-"),c.push("cpc"),c.push("not set")):(c.push(j),c.push("-"),c.push("referral"),c.push("-")))}}var N=c[a]>0&&(c[0]!==u||c[1]!==g||c[2]!==l)&&"referral"!==c[2];return f||!f&&N?(t.set(z,c[0]||t.get(z)),t.set(B,c[1]||t.get(B)),t.set(F,c[2]||t.get(F)),t.set(X,c[3]||t.get(X)),ft(t)):lt(t),N||m}(wt),o=h.util.Vv("__jdv"),c=new _t,u=wt.get(_);return jt(wt,c),h.util.Wv("__jda",[(t=wt).get(w),t.get(v)||"-",t.get(P)||"-",t.get(U)||"-",t.get(W)||"-",t.get(Y)||1].join("."),u,wt.get(b)),h.util.Wv("__jdb",[(e=wt).get(w),e.get(q)||1,e.get(v)+"|"+e.get(Y)||1,e.get(W)||e.get(j)].join("."),u,wt.get(S)),h.util.Wv("__jdc",wt.get(w),u),!i&&o.length||h.util.Wv("__jdv",pt?r(ht(wt)):ht(wt),u,wt.get(y)),c.a},yt=function(){var t=new _t;return jt(wt,t),t.a},St=function(t){var e,n,r=(e=t,(n=document.createElement("img")).width=1,n.height=1,n.src=e,n);r.onload=r.onerror=function(){r.onload=null,r.onerror=null}};h.tracker={sendOld:function(t,e,n,r){},sendNew:function(t,e){var i=yt(),o=("https:"==document.location.protocol?"https://mercury":"http://mercury")+mt+"/log.gif?t="+t+"&m="+wt.get(p)+"&pin="+r(wt.get(K))+"&uid="+i.jduid+"&sid="+i.jdsid;o+=u?"&ref="+r(l)+"&cul="+r(g):c?"&ref="+r(l):"&ref="+r(n.referrer),o+="&v="+r(e)+"&rm="+(new Date).getTime(),St(o)},sendToWarriors:function(t,e){var i=yt(),o=("https:"==document.location.protocol?"https://warriors":"http://warriors")+mt+"/log.gif?t="+t+"&m="+wt.get(p)+"&pin="+r(wt.get(K))+"&uid="+i.jduid+"&sid="+i.jdsi;o+=u?"&ref="+r(l)+"&cul="+r(g):c?"&ref="+r(l):"&ref="+r(n.referrer),o+="&v="+r(e)+"&rm="+(new Date).getTime(),St(o)},ngloader:function(t,e){var n=yt(),r={je:n.jdje,sc:n.jdsc,sr:n.jdsr,ul:n.jdul,cs:n.jdcs,dt:n.jddt,hn:n.jdhn,fl:n.jdfl,os:n.jdos,br:n.jdbr,bv:n.jdbv,wb:n.jdwb,xb:n.jdxb,yb:n.jdyb,zb:n.jdzb,cb:n.jdcb,usc:n.jdusc,ucp:n.jducp,umd:n.jdumd,uct:n.jduct,ct:(new Date).getTime(),lt:n.jdlt,tad:n.jdtad};this.ngaloader(t,r,e)},ngaloader:function(t,e,n,r){var i="";for(var a in e)i+=a+"="+e[a]+"$";if(n)for(var a in n)i+=a+"="+n[a]+"$";i+="pinid="+wt.get(Q)+"$";try{var d=h.util.Vv("__jdv")[0]||"";pt&&(d=o(d)),i+="jdv="+d+"$"}catch(c){}i+="dataver=0.1$",wt.get(Z)&&"magic.000001"!=t&&(i+="ext="+wt.get(Z)+"$");var s=h.util.Vv("unpl");s.length>0&&(i+="unpl="+s[0]+"$"),i=i.substring(0,i.length-1),this.sendNew(t,i)},ngloaderJSON:function(t,e,n){var r=yt();e.pinid=wt.get(Q),e.je=r.jdje,e.sc=r.jdsc,e.sr=r.jdsr,e.ul=r.jdul,e.cs=r.jdcs,e.dt=r.jddt,e.hn=r.jdhn,e.fl=r.jdfl,e.os=r.jdos,e.br=r.jdbr,e.bv=r.jdbv,e.wb=r.jdwb,e.xb=r.jdxb,e.yb=r.jdyb,e.zb=r.jdzb,e.cb=r.jdcb,e.usc=r.jdusc,e.ucp=r.jducp,e.umd=r.jdumd,e.uct=r.jduct,e.ct=(new Date).getTime(),e.lt=r.jdlt,e.tad=r.jdtad;try{var i=h.util.Vv("__jdv")[0]||"";pt&&(i=o(i)),e.jdv=i}catch(a){}e.dataver="0.1",n&&"toWarriors"==n?this.sendToWarriors(t,JSON.stringify(e)):this.sendNew(t,JSON.stringify(e))},bloading:function(t,r){var i=bt(),o=(new Date).getTime();c&&(u?g?(l=g,g=vt(n.location.href)):(g=vt(n.location.href),l=n.referrer):g?(l=g,g=n.location.href):(g=n.location.href,l=n.referrer));var a=0,d="";try{var s=(new Date).getTime();d=getFingerprint(),a=(new Date).getTime()-s}catch(e){}var h={je:i.jdje,sc:i.jdsc,sr:i.jdsr,ul:i.jdul,cs:i.jdcs,dt:i.jddt,hn:i.jdhn,fl:i.jdfl,os:i.jdos,br:i.jdbr,bv:i.jdbv,wb:i.jdwb,xb:i.jdxb,yb:i.jdyb,zb:i.jdzb,cb:i.jdcb,usc:i.jdusc,ucp:i.jducp,umd:i.jdumd,uct:i.jduct,lt:i.jdlt,ct:o,tad:i.jdtad,mba_finger:d,fpftime:a};this.ngaloader("www.100000",h),i.jduid%1e3==1&&this.ngloader("jsver.000000",{jsfile:"wl",jsver:"20141223"})},loading:function(){},aloading:function(t,e,n){},aloadingJSON:function(t,e,n){},isCanPrey:function(){var t=h.util.Vv("__jda")[0];if(t){var e=t.split(".");if(e.length>1){var n=e[1],r=e[1].length;return"2"==(n=n.substr(r-1,r))}}return!1},isDegrade:function(t,n,r){var i={"magic.000001":20,"other.000000-pv_stock":20,"other.000000-d-c":0,"other.000000":0},o=new Date(2018,5,16).getTime(),a=new Date(2018,5,20).getTime(),d=(new Date).getTime();if(d<o||d>a)return!1;var s=i[t+"-"+n+"-"+r];return s===undefined&&(s=i[t+"-"+n]),s===undefined&&(s=i[t]),function(t){try{var n=wt.get(v),r=n.length;return(n=parseInt(n.substr(r-2,r)))<t}catch(e){}return!1}(s=s||0)}},window.JA=h,h.tracker.bloading("J","A");var xt,Ct,Nt="undefined"!=typeof $&&5===$(".w .crumb a").length&&/e.jd.com\/products\/(\d*)-(\d*)-(\d*).html[\w\W]*?e.jd.com\/(\d*).html/.exec($(".w .crumb").html());(window.pageConfig&&window.pageConfig.product&&window.pageConfig.product.cat||Nt)&&h.tracker.ngloader("item.010001",{sku:Nt[4]||window.pageConfig.product.skuid,cid1:Nt[1]||window.pageConfig.product.cat[0],cid2:Nt[2]||window.pageConfig.product.cat[1],cid3:Nt[3]||window.pageConfig.product.cat[2],brand:Nt?"0":window.pageConfig.product.brand}),c&&(window.history?(xt=window.history,Ct=xt.pushState,xt.pushState=function(t){return"function"==typeof xt.onpushstate&&xt.onpushstate({state:t}),Ct.apply(xt,arguments)},window.onpopstate=history.onpushstate=function(t){setTimeout(function(){h.tracker.bloading("J","A")},0)}):window.addEventListener("hashchange",function(){h.tracker.bloading("J","A")}))}(),function(){var t,n=function(t){for(var e="",n="";t&&1==t.nodeType;t=t.parentNode){if(n="",t.parentNode)for(var r=t.parentNode.childNodes,i=0,o=0,a=r.length;i<a;i++){var d=r[i];t.tagName===d.tagName&&o++,t==d&&(n=o>1?"["+o+"]":"")}e="/"+t.tagName.toLowerCase()+n+e}return e},r=function(t){for(var e="",n="";t&&1==t.nodeType;t=t.parentNode){if(""!==t.id){e='//*[@id="'+t.id+'"]'+e;break}if(n="",t.parentNode)for(var r=t.parentNode.childNodes,i=0,o=0,a=r.length;i<a;i++){var d=r[i];t.tagName===d.tagName&&o++,t==d&&(n=o>1?"["+o+"]":"")}e="/"+t.tagName.toLowerCase()+n+e}return e},i=function(t){var e=!0;return t.children.length>0&&(e=!1),e},o=function(t){var e=!1;if(t&&t.tagName){var n=t.tagName.toLowerCase();e=!("html"===n||"body"===n||t.id&&"tol_selected_xelemts_area"===t.id||t.parentElement&&t.parentElement.id&&"tol_selected_xelemts_area"===t.parentElement.id)&&(!!function(t){a=l(t,"clstag");for(;!a&&(t=t.parentNode)&&"BODY"!=t.nodeName;)a=l(t,"clstag");return!!a}(t)||("a"===n||i(t)))}return e},a="";function d(t){var e=0;return t&&t.length>500&&(e=t.indexOf("?"))&&(t=t.substring(0,e)),t}document.getElementsByClassName||(document.getElementsByClassName=function(t){for(var e=document.getElementsByTagName("*"),n=[],r=0;r<e.length;r++)for(var i=e[r],o=i.className.split(" "),a=0;a<o.length;a++)if(o[a]==t){n.push(i);break}return n});var s=function(e){var n,r,i={};return i.scrollWidth=document.body.scrollWidth,i.scrollHeight=document.body.scrollHeight,i.offsetLeft=function(){if(!t){var e=document.domain.indexOf("jd.com")>=0?document.getElementsByClassName("w"):"";t=e&&e.length>0?e[e.length-1].offsetWidth:window.screen.width>=1210?1210:990}return document.body.clientWidth>t?Math.round((document.body.clientWidth-t)/2):0}(),i.x=parseInt((n=e).pageX?n.pageX:n.clientX?n.clientX+(document.documentElement.scrollLeft?document.documentElement.scrollLeft:document.body.scrollLeft):-1),i.y=parseInt((r=e).pageY?r.pageY:r.clientY?r.clientY+(document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop):-1),i.offsetLeft>0&&(i.x=parseInt(i.x-i.offsetLeft)),i},c=function(t){try{var e=t.target||t.srcElement;if(o(e)){var c=s(t),u=e,g=e.tagName.toLowerCase(),l=r(e)||"-",h=e.parentNode?r(e.parentNode):"-",f=e.parentNode?n(e.parentNode)+"/":"-",m=n(e)||"-",p=m?m.split("/").length:1,v="-",w="-";if(a){var _=a.split("|");v=_[2],w=_[3]}for(var j=u.tagName.toLowerCase();"a"!=j&&(u=u.parentNode)&&"BODY"!=u.nodeName;)j=u.tagName.toLowerCase();var b=u&&u.href?d(u.href):"-",y=e.innerText.substring(.2)||"-",S=e.src?d(e.src):"-";"a"!==g||i(e)||(y="-"),function(t,e){var n=Array.prototype.slice.call(arguments);n=n&&n.slice(2),JA&&JA.tracker.ngloader("magic.000001",{t1:t,t2:e,p0:encodeURIComponent(JA.util.join(n))})}("magictree","X",encodeURIComponent(l),encodeURIComponent(h),encodeURIComponent(f),p,c.x+"x"+c.y,c.scrollWidth+"x"+c.scrollHeight,c.offsetLeft,v,w,encodeURIComponent(b),encodeURIComponent(y),encodeURIComponent(S))}}catch(x){privateLogJOYAJS("ERROR","AT_xpathReport",encodeURIComponent(x))}},u=function(t){var e=document.createElement("script");e.type="application/javascript",e.src=t,e.charset="UTF-8",document.getElementsByTagName("head")[0].appendChild(e)},g=function(t){var e=document.createElement("link");e.type="text/css",e.rel="stylesheet",e.href=t,document.getElementsByTagName("head")[0].appendChild(e)},l=function(t,e){return t&&t.getAttribute?"class"==e?t.className||t.getAttribute("className")||t.getAttribute("class"):t.getAttribute(e):""};var h,f,m,p,v=(h="typepar",m=f||document.location.href,(p=new RegExp("(?:^|&|[?]|[/])"+h+"=([^&]*)").exec(m))?decodeURIComponent(p[1]):null);if(!v||"query"!==v&&"apply"!==v)document.onclick=function(t){if((t=t||event).clientX||t.clientY||t.pageX||t.pageY){try{c(t)}catch(t){privateLogJOYAJS("ERROR","AT_Document_Onclick")}for(var e=document,n=tag=t.srcElement||t.target,r=l(tag,"clstag"),i=l(tag,"href"),o="";!r&&(tag=tag.parentNode,tag&&"BODY"!=tag.nodeName);)r=l(tag,"clstag"),i||(i=l(tag,"href"),n=tag);if(r){var a=r.split("|"),d=a[1],s=a[2],u=a[3];"keycount"===d&&(o=s+"|"+u,i?privateLogJOYAJS(s,u,"Q",i):privateLogJOYAJS(s,u,"Q"),i&&/^(http:\/\/|https:\/\/|\/\/).*/.test(i)&&"_blank"!==l(n,"target")&&!isMeta(t)&&(t.preventDefault?t.preventDefault():t.returnValue=!1,setTimeout(function(){window.location.href=i},200)))}var g=this.location.hostname.toLowerCase();if(/(sale|mall|jmall|pop).(jd|360buy).(com|hk)/.test(g)||window.ja_heat_map){var h=0,f=0,m=window.screen.width>=1210&&("item.jd.com"==g||"item.jd.hk"==g)?1210:990,p=e.body.clientWidth>m?Math.round((e.body.clientWidth-m)/2):0;t.pageX||t.pageY?(h=t.pageX,f=t.pageY):(h=t.clientX+e.body.scrollLeft-e.body.clientLeft,f=t.clientY+e.body.scrollTop-e.body.clientTop),privateLogJOYAJS("d","c",o||"-",h+"x"+f,e.body.scrollWidth+"x"+e.body.scrollHeight,p)}}};else try{g("//magicforest.jd.com/x.css"),u("//magicforest.jd.com/tol.min.js")}catch(e){privateLogJOYAJS("ERROR","AT_loadCSS_OR_loadJS")}document.location.href.indexOf("__clsData=")>-1&&(g("//magicforest.jd.com/cls.css"),u("//magicforest.jd.com/cls.js"))}();