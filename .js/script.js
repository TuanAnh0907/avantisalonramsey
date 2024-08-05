window.i18nLocale = "en-US";
/*********/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).i18next=t()}(this,function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(n){return(t="function"==typeof Symbol&&"symbol"===e(Symbol.iterator)?function(t){return e(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)})(n)}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},i=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),i.forEach(function(t){n(e,t,o[t])})}return e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?s(e):n}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var g={type:"logger",log:function(e){this.output("log",e)},warn:function(e){this.output("warn",e)},error:function(e){this.output("error",e)},output:function(e,t){var n;console&&console[e]&&(n=console)[e].apply(n,p(t))}},h=new(function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,e),this.init(t,n)}return a(e,[{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||g,this.options=t,this.debug=t.debug}},{key:"setDebug",value:function(e){this.debug=e}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"log","",!0)}},{key:"warn",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","",!0)}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"error","")}},{key:"deprecate",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(e,t,n,o){return o&&!this.debug?null:("string"==typeof e[0]&&(e[0]="".concat(n).concat(this.prefix," ").concat(e[0])),this.logger[t](e))}},{key:"create",value:function(t){return new e(this.logger,o({},{prefix:"".concat(this.prefix,":").concat(t,":")},this.options))}}]),e}()),d=function(){function e(){i(this,e),this.observers={}}return a(e,[{key:"on",value:function(e,t){var n=this;return e.split(" ").forEach(function(e){n.observers[e]=n.observers[e]||[],n.observers[e].push(t)}),this}},{key:"off",value:function(e,t){this.observers[e]&&(t?this.observers[e]=this.observers[e].filter(function(e){return e!==t}):delete this.observers[e])}},{key:"emit",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];this.observers[e]&&[].concat(this.observers[e]).forEach(function(e){e.apply(void 0,n)});this.observers["*"]&&[].concat(this.observers["*"]).forEach(function(t){t.apply(t,[e].concat(n))})}}]),e}();function v(){var e,t,n=new Promise(function(n,o){e=n,t=o});return n.resolve=e,n.reject=t,n}function y(e){return null==e?"":""+e}function m(e,t,n){function o(e){return e&&e.indexOf("###")>-1?e.replace(/###/g,"."):e}function i(){return!e||"string"==typeof e}for(var r="string"!=typeof t?[].concat(t):t.split(".");r.length>1;){if(i())return{};var a=o(r.shift());!e[a]&&n&&(e[a]=new n),e=e[a]}return i()?{}:{obj:e,k:o(r.shift())}}function b(e,t,n){var o=m(e,t,Object);o.obj[o.k]=n}function k(e,t){var n=m(e,t),o=n.obj,i=n.k;if(o)return o[i]}function x(e,t,n){var o=k(e,n);return void 0!==o?o:k(t,n)}function w(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var S={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function O(e){return"string"==typeof e?e.replace(/[&<>"'\/]/g,function(e){return S[e]}):e}var L=function(e){function t(e){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};return i(this,t),n=u(this,l(t).call(this)),d.call(s(n)),n.data=e||{},n.options=o,void 0===n.options.keySeparator&&(n.options.keySeparator="."),n}return f(t,d),a(t,[{key:"addNamespaces",value:function(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}},{key:"removeNamespaces",value:function(e){var t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}},{key:"getResource",value:function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=void 0!==o.keySeparator?o.keySeparator:this.options.keySeparator,r=[e,t];return n&&"string"!=typeof n&&(r=r.concat(n)),n&&"string"==typeof n&&(r=r.concat(i?n.split(i):n)),e.indexOf(".")>-1&&(r=e.split(".")),k(this.data,r)}},{key:"addResource",value:function(e,t,n,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1},r=this.options.keySeparator;void 0===r&&(r=".");var a=[e,t];n&&(a=a.concat(r?n.split(r):n)),e.indexOf(".")>-1&&(o=t,t=(a=e.split("."))[1]),this.addNamespaces(t),b(this.data,a,o),i.silent||this.emit("added",e,t,n,o)}},{key:"addResources",value:function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(var i in n)"string"!=typeof n[i]&&"[object Array]"!==Object.prototype.toString.apply(n[i])||this.addResource(e,t,i,n[i],{silent:!0});o.silent||this.emit("added",e,t,n)}},{key:"addResourceBundle",value:function(e,t,n,i,r){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1},s=[e,t];e.indexOf(".")>-1&&(i=n,n=t,t=(s=e.split("."))[1]),this.addNamespaces(t);var u=k(this.data,s)||{};i?function e(t,n,o){for(var i in n)i in t?"string"==typeof t[i]||t[i]instanceof String||"string"==typeof n[i]||n[i]instanceof String?o&&(t[i]=n[i]):e(t[i],n[i],o):t[i]=n[i];return t}(u,n,r):u=o({},u,n),b(this.data,s,u),a.silent||this.emit("added",e,t,n)}},{key:"removeResourceBundle",value:function(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}},{key:"hasResourceBundle",value:function(e,t){return void 0!==this.getResource(e,t)}},{key:"getResourceBundle",value:function(e,t){return t||(t=this.options.defaultNS),"v1"===this.options.compatibilityAPI?o({},{},this.getResource(e,t)):this.getResource(e,t)}},{key:"getDataByLanguage",value:function(e){return this.data[e]}},{key:"toJSON",value:function(){return this.data}}]),t}(),R={processors:{},addPostProcessor:function(e){this.processors[e.name]=e},handle:function(e,t,n,o,i){var r=this;return e.forEach(function(e){r.processors[e]&&(t=r.processors[e].process(t,n,o,i))}),t}},N=function(e){function n(e){var t,o,r,a,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i(this,n),t=u(this,l(n).call(this)),d.call(s(t)),o=["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],r=e,a=s(t),o.forEach(function(e){r[e]&&(a[e]=r[e])}),t.options=c,void 0===t.options.keySeparator&&(t.options.keySeparator="."),t.logger=h.create("translator"),t}return f(n,d),a(n,[{key:"changeLanguage",value:function(e){e&&(this.language=e)}},{key:"exists",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}},n=this.resolve(e,t);return n&&void 0!==n.res}},{key:"extractFromKey",value:function(e,t){var n=t.nsSeparator||this.options.nsSeparator;void 0===n&&(n=":");var o=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,i=t.ns||this.options.defaultNS;if(n&&e.indexOf(n)>-1){var r=e.split(n);(n!==o||n===o&&this.options.ns.indexOf(r[0])>-1)&&(i=r.shift()),e=r.join(o)}return"string"==typeof i&&(i=[i]),{key:e,namespaces:i}}},{key:"translate",value:function(e,n){var i=this;if("object"!==t(n)&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),n||(n={}),null==e)return"";Array.isArray(e)||(e=[String(e)]);var r=void 0!==n.keySeparator?n.keySeparator:this.options.keySeparator,a=this.extractFromKey(e[e.length-1],n),s=a.key,u=a.namespaces,l=u[u.length-1],c=n.lng||this.language,f=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&"cimode"===c.toLowerCase()){if(f){var p=n.nsSeparator||this.options.nsSeparator;return l+p+s}return s}var g=this.resolve(e,n),h=g&&g.res,d=g&&g.usedKey||s,v=g&&g.exactUsedKey||s,y=Object.prototype.toString.apply(h),m=void 0!==n.joinArrays?n.joinArrays:this.options.joinArrays,b=!this.i18nFormat||this.i18nFormat.handleAsObject;if(b&&h&&("string"!=typeof h&&"boolean"!=typeof h&&"number"!=typeof h)&&["[object Number]","[object Function]","[object RegExp]"].indexOf(y)<0&&("string"!=typeof m||"[object Array]"!==y)){if(!n.returnObjects&&!this.options.returnObjects)return this.logger.warn("accessing an object - but returnObjects options is not enabled!"),this.options.returnedObjectHandler?this.options.returnedObjectHandler(d,h,n):"key '".concat(s," (").concat(this.language,")' returned an object instead of string.");if(r){var k="[object Array]"===y,x=k?[]:{},w=k?v:d;for(var S in h)if(Object.prototype.hasOwnProperty.call(h,S)){var O="".concat(w).concat(r).concat(S);x[S]=this.translate(O,o({},n,{joinArrays:!1,ns:u})),x[S]===O&&(x[S]=h[S])}h=x}}else if(b&&"string"==typeof m&&"[object Array]"===y)(h=h.join(m))&&(h=this.extendTranslation(h,e,n));else{var L=!1,R=!1;if(!this.isValidLookup(h)&&void 0!==n.defaultValue){if(L=!0,void 0!==n.count){var N=this.pluralResolver.getSuffix(c,n.count);h=n["defaultValue".concat(N)]}h||(h=n.defaultValue)}this.isValidLookup(h)||(R=!0,h=s);var j=n.defaultValue&&n.defaultValue!==h&&this.options.updateMissing;if(R||L||j){this.logger.log(j?"updateKey":"missingKey",c,l,s,j?n.defaultValue:h);var P=[],C=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if("fallback"===this.options.saveMissingTo&&C&&C[0])for(var E=0;E<C.length;E++)P.push(C[E]);else"all"===this.options.saveMissingTo?P=this.languageUtils.toResolveHierarchy(n.lng||this.language):P.push(n.lng||this.language);var F=function(e,t){i.options.missingKeyHandler?i.options.missingKeyHandler(e,l,t,j?n.defaultValue:h,j,n):i.backendConnector&&i.backendConnector.saveMissing&&i.backendConnector.saveMissing(e,l,t,j?n.defaultValue:h,j,n),i.emit("missingKey",e,l,t,h)};if(this.options.saveMissing){var A=void 0!==n.count&&"string"!=typeof n.count;this.options.saveMissingPlurals&&A?P.forEach(function(e){i.pluralResolver.getPluralFormsOfKey(e,s).forEach(function(t){return F([e],t)})}):F(P,s)}}h=this.extendTranslation(h,e,n,g),R&&h===s&&this.options.appendNamespaceToMissingKey&&(h="".concat(l,":").concat(s)),R&&this.options.parseMissingKeyHandler&&(h=this.options.parseMissingKeyHandler(h))}return h}},{key:"extendTranslation",value:function(e,t,n,i){var r=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,n,i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init(o({},n,{interpolation:o({},this.options.interpolation,n.interpolation)}));var a=n.replace&&"string"!=typeof n.replace?n.replace:n;this.options.interpolation.defaultVariables&&(a=o({},this.options.interpolation.defaultVariables,a)),e=this.interpolator.interpolate(e,a,n.lng||this.language,n),!1!==n.nest&&(e=this.interpolator.nest(e,function(){return r.translate.apply(r,arguments)},n)),n.interpolation&&this.interpolator.reset()}var s=n.postProcess||this.options.postProcess,u="string"==typeof s?[s]:s;return null!=e&&u&&u.length&&!1!==n.applyPostProcessor&&(e=R.handle(u,e,t,this.options&&this.options.postProcessPassResolved?o({i18nResolved:i},n):n,this)),e}},{key:"resolve",value:function(e){var t,n,o,i,r,a=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof e&&(e=[e]),e.forEach(function(e){if(!a.isValidLookup(t)){var u=a.extractFromKey(e,s),l=u.key;n=l;var c=u.namespaces;a.options.fallbackNS&&(c=c.concat(a.options.fallbackNS));var f=void 0!==s.count&&"string"!=typeof s.count,p=void 0!==s.context&&"string"==typeof s.context&&""!==s.context,g=s.lngs?s.lngs:a.languageUtils.toResolveHierarchy(s.lng||a.language,s.fallbackLng);c.forEach(function(e){a.isValidLookup(t)||(r=e,a.utils&&a.utils.hasLoadedNamespace&&!a.utils.hasLoadedNamespace(r)&&a.logger.warn('key "'.concat(n,'" for namespace "').concat(r,"\" won't get resolved as namespace was not yet loaded"),"This means something IS WRONG in your application setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"),g.forEach(function(n){if(!a.isValidLookup(t)){i=n;var r,u,c=l,g=[c];if(a.i18nFormat&&a.i18nFormat.addLookupKeys)a.i18nFormat.addLookupKeys(g,l,n,e,s);else f&&(r=a.pluralResolver.getSuffix(n,s.count)),f&&p&&g.push(c+r),p&&g.push(c+="".concat(a.options.contextSeparator).concat(s.context)),f&&g.push(c+=r);for(;u=g.pop();)a.isValidLookup(t)||(o=u,t=a.getResource(n,e,u,s))}}))})}}),{res:t,usedKey:n,exactUsedKey:o,usedLng:i,usedNS:r}}},{key:"isValidLookup",value:function(e){return!(void 0===e||!this.options.returnNull&&null===e||!this.options.returnEmptyString&&""===e)}},{key:"getResource",value:function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,n,o):this.resourceStore.getResource(e,t,n,o)}}]),n}();function j(e){return e.charAt(0).toUpperCase()+e.slice(1)}var P=function(){function e(t){i(this,e),this.options=t,this.whitelist=this.options.whitelist||!1,this.logger=h.create("languageUtils")}return a(e,[{key:"getScriptPartFromCode",value:function(e){if(!e||e.indexOf("-")<0)return null;var t=e.split("-");return 2===t.length?null:(t.pop(),this.formatLanguageCode(t.join("-")))}},{key:"getLanguagePartFromCode",value:function(e){if(!e||e.indexOf("-")<0)return e;var t=e.split("-");return this.formatLanguageCode(t[0])}},{key:"formatLanguageCode",value:function(e){if("string"==typeof e&&e.indexOf("-")>-1){var t=["hans","hant","latn","cyrl","cans","mong","arab"],n=e.split("-");return this.options.lowerCaseLng?n=n.map(function(e){return e.toLowerCase()}):2===n.length?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=j(n[1].toLowerCase()))):3===n.length&&(n[0]=n[0].toLowerCase(),2===n[1].length&&(n[1]=n[1].toUpperCase()),"sgn"!==n[0]&&2===n[2].length&&(n[2]=n[2].toUpperCase()),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=j(n[1].toLowerCase())),t.indexOf(n[2].toLowerCase())>-1&&(n[2]=j(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}},{key:"isWhitelisted",value:function(e){return("languageOnly"===this.options.load||this.options.nonExplicitWhitelist)&&(e=this.getLanguagePartFromCode(e)),!this.whitelist||!this.whitelist.length||this.whitelist.indexOf(e)>-1}},{key:"getFallbackCodes",value:function(e,t){if(!e)return[];if("string"==typeof e&&(e=[e]),"[object Array]"===Object.prototype.toString.apply(e))return e;if(!t)return e.default||[];var n=e[t];return n||(n=e[this.getScriptPartFromCode(t)]),n||(n=e[this.formatLanguageCode(t)]),n||(n=e.default),n||[]}},{key:"toResolveHierarchy",value:function(e,t){var n=this,o=this.getFallbackCodes(t||this.options.fallbackLng||[],e),i=[],r=function(e){e&&(n.isWhitelisted(e)?i.push(e):n.logger.warn("rejecting non-whitelisted language code: ".concat(e)))};return"string"==typeof e&&e.indexOf("-")>-1?("languageOnly"!==this.options.load&&r(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&r(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&r(this.getLanguagePartFromCode(e))):"string"==typeof e&&r(this.formatLanguageCode(e)),o.forEach(function(e){i.indexOf(e)<0&&r(n.formatLanguageCode(e))}),i}}]),e}(),C=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","id","ja","jbo","ka","kk","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he"],nr:[1,2,20,21],fc:22}],E={1:function(e){return Number(e>1)},2:function(e){return Number(1!=e)},3:function(e){return 0},4:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},5:function(e){return Number(0===e?0:1==e?1:2==e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5)},6:function(e){return Number(1==e?0:e>=2&&e<=4?1:2)},7:function(e){return Number(1==e?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},8:function(e){return Number(1==e?0:2==e?1:8!=e&&11!=e?2:3)},9:function(e){return Number(e>=2)},10:function(e){return Number(1==e?0:2==e?1:e<7?2:e<11?3:4)},11:function(e){return Number(1==e||11==e?0:2==e||12==e?1:e>2&&e<20?2:3)},12:function(e){return Number(e%10!=1||e%100==11)},13:function(e){return Number(0!==e)},14:function(e){return Number(1==e?0:2==e?1:3==e?2:3)},15:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2)},16:function(e){return Number(e%10==1&&e%100!=11?0:0!==e?1:2)},17:function(e){return Number(1==e||e%10==1?0:1)},18:function(e){return Number(0==e?0:1==e?1:2)},19:function(e){return Number(1==e?0:0===e||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3)},20:function(e){return Number(1==e?0:0===e||e%100>0&&e%100<20?1:2)},21:function(e){return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)},22:function(e){return Number(1===e?0:2===e?1:(e<0||e>10)&&e%10==0?2:3)}};var F=function(){function e(t){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,e),this.languageUtils=t,this.options=o,this.logger=h.create("pluralResolver"),this.rules=(n={},C.forEach(function(e){e.lngs.forEach(function(t){n[t]={numbers:e.nr,plurals:E[e.fc]}})}),n)}return a(e,[{key:"addRule",value:function(e,t){this.rules[e]=t}},{key:"getRule",value:function(e){return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}},{key:"needsPlural",value:function(e){var t=this.getRule(e);return t&&t.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(e,t){var n=this,o=[],i=this.getRule(e);return i?(i.numbers.forEach(function(i){var r=n.getSuffix(e,i);o.push("".concat(t).concat(r))}),o):o}},{key:"getSuffix",value:function(e,t){var n=this,o=this.getRule(e);if(o){var i=o.noAbs?o.plurals(t):o.plurals(Math.abs(t)),r=o.numbers[i];this.options.simplifyPluralSuffix&&2===o.numbers.length&&1===o.numbers[0]&&(2===r?r="plural":1===r&&(r=""));var a=function(){return n.options.prepend&&r.toString()?n.options.prepend+r.toString():r.toString()};return"v1"===this.options.compatibilityJSON?1===r?"":"number"==typeof r?"_plural_".concat(r.toString()):a():"v2"===this.options.compatibilityJSON?a():this.options.simplifyPluralSuffix&&2===o.numbers.length&&1===o.numbers[0]?a():this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}return this.logger.warn("no plural rule found for: ".concat(e)),""}}]),e}(),A=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,e),this.logger=h.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||function(e){return e},this.init(t)}return a(e,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});var t=e.interpolation;this.escape=void 0!==t.escape?t.escape:O,this.escapeValue=void 0===t.escapeValue||t.escapeValue,this.useRawValueToEscape=void 0!==t.useRawValueToEscape&&t.useRawValueToEscape,this.prefix=t.prefix?w(t.prefix):t.prefixEscaped||"{{",this.suffix=t.suffix?w(t.suffix):t.suffixEscaped||"}}",this.formatSeparator=t.formatSeparator?t.formatSeparator:t.formatSeparator||",",this.unescapePrefix=t.unescapeSuffix?"":t.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":t.unescapeSuffix||"",this.nestingPrefix=t.nestingPrefix?w(t.nestingPrefix):t.nestingPrefixEscaped||w("$t("),this.nestingSuffix=t.nestingSuffix?w(t.nestingSuffix):t.nestingSuffixEscaped||w(")"),this.maxReplaces=t.maxReplaces?t.maxReplaces:1e3,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var e="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(e,"g");var t="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(t,"g");var n="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(n,"g")}},{key:"interpolate",value:function(e,t,n,o){var i,r,a,s=this,u=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function l(e){return e.replace(/\$/g,"$$$$")}var c=function(e){if(e.indexOf(s.formatSeparator)<0)return x(t,u,e);var o=e.split(s.formatSeparator),i=o.shift().trim(),r=o.join(s.formatSeparator).trim();return s.format(x(t,u,i),r,n)};this.resetRegExp();var f=o&&o.missingInterpolationHandler||this.options.missingInterpolationHandler;for(a=0;i=this.regexpUnescape.exec(e);){if(void 0===(r=c(i[1].trim())))if("function"==typeof f){var p=f(e,i,o);r="string"==typeof p?p:""}else this.logger.warn("missed to pass in variable ".concat(i[1]," for interpolating ").concat(e)),r="";else"string"==typeof r||this.useRawValueToEscape||(r=y(r));if(e=e.replace(i[0],l(r)),this.regexpUnescape.lastIndex=0,++a>=this.maxReplaces)break}for(a=0;i=this.regexp.exec(e);){if(void 0===(r=c(i[1].trim())))if("function"==typeof f){var g=f(e,i,o);r="string"==typeof g?g:""}else this.logger.warn("missed to pass in variable ".concat(i[1]," for interpolating ").concat(e)),r="";else"string"==typeof r||this.useRawValueToEscape||(r=y(r));if(r=this.escapeValue?l(this.escape(r)):l(r),e=e.replace(i[0],r),this.regexp.lastIndex=0,++a>=this.maxReplaces)break}return e}},{key:"nest",value:function(e,t){var n,i,r=o({},arguments.length>2&&void 0!==arguments[2]?arguments[2]:{});function a(e,t){if(e.indexOf(",")<0)return e;var n=e.split(",");e=n.shift();var i=n.join(",");i=(i=this.interpolate(i,r)).replace(/'/g,'"');try{r=JSON.parse(i),t&&(r=o({},t,r))}catch(t){this.logger.error("failed parsing options string in nesting for key ".concat(e),t)}return delete r.defaultValue,e}for(r.applyPostProcessor=!1,delete r.defaultValue;n=this.nestingRegexp.exec(e);){if((i=t(a.call(this,n[1].trim(),r),r))&&n[0]===e&&"string"!=typeof i)return i;"string"!=typeof i&&(i=y(i)),i||(this.logger.warn("missed to resolve ".concat(n[1]," for nesting ").concat(e)),i=""),e=e.replace(n[0],i),this.regexp.lastIndex=0}return e}}]),e}();function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{o||null==s.return||s.return()}finally{if(i)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var V=function(e){function t(e,n,o){var r,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return i(this,t),r=u(this,l(t).call(this)),d.call(s(r)),r.backend=e,r.store=n,r.services=o,r.languageUtils=o.languageUtils,r.options=a,r.logger=h.create("backendConnector"),r.state={},r.queue=[],r.backend&&r.backend.init&&r.backend.init(o,a.backend,a),r}return f(t,d),a(t,[{key:"queueLoad",value:function(e,t,n,o){var i=this,r=[],a=[],s=[],u=[];return e.forEach(function(e){var o=!0;t.forEach(function(t){var s="".concat(e,"|").concat(t);!n.reload&&i.store.hasResourceBundle(e,t)?i.state[s]=2:i.state[s]<0||(1===i.state[s]?a.indexOf(s)<0&&a.push(s):(i.state[s]=1,o=!1,a.indexOf(s)<0&&a.push(s),r.indexOf(s)<0&&r.push(s),u.indexOf(t)<0&&u.push(t)))}),o||s.push(e)}),(r.length||a.length)&&this.queue.push({pending:a,loaded:{},errors:[],callback:o}),{toLoad:r,pending:a,toLoadLanguages:s,toLoadNamespaces:u}}},{key:"loaded",value:function(e,t,n){var o=T(e.split("|"),2),i=o[0],r=o[1];t&&this.emit("failedLoading",i,r,t),n&&this.store.addResourceBundle(i,r,n),this.state[e]=t?-1:2;var a={};this.queue.forEach(function(n){var o,s,u,l,c,f;o=n.loaded,s=r,l=m(o,[i],Object),c=l.obj,f=l.k,c[f]=c[f]||[],u&&(c[f]=c[f].concat(s)),u||c[f].push(s),function(e,t){for(var n=e.indexOf(t);-1!==n;)e.splice(n,1),n=e.indexOf(t)}(n.pending,e),t&&n.errors.push(t),0!==n.pending.length||n.done||(Object.keys(n.loaded).forEach(function(e){a[e]||(a[e]=[]),n.loaded[e].length&&n.loaded[e].forEach(function(t){a[e].indexOf(t)<0&&a[e].push(t)})}),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(function(e){return!e.done})}},{key:"read",value:function(e,t,n){var o=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:250,a=arguments.length>5?arguments[5]:void 0;return e.length?this.backend[n](e,t,function(s,u){s&&u&&i<5?setTimeout(function(){o.read.call(o,e,t,n,i+1,2*r,a)},r):a(s,u)}):a(null,{})}},{key:"prepareLoading",value:function(e,t){var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();"string"==typeof e&&(e=this.languageUtils.toResolveHierarchy(e)),"string"==typeof t&&(t=[t]);var r=this.queueLoad(e,t,o,i);if(!r.toLoad.length)return r.pending.length||i(),null;r.toLoad.forEach(function(e){n.loadOne(e)})}},{key:"load",value:function(e,t,n){this.prepareLoading(e,t,{},n)}},{key:"reload",value:function(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}},{key:"loadOne",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=T(e.split("|"),2),i=o[0],r=o[1];this.read(i,r,"read",null,null,function(o,a){o&&t.logger.warn("".concat(n,"loading namespace ").concat(r," for language ").concat(i," failed"),o),!o&&a&&t.logger.log("".concat(n,"loaded namespace ").concat(r," for language ").concat(i),a),t.loaded(e,o,a)})}},{key:"saveMissing",value:function(e,t,n,i,r){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t)?this.logger.warn('did not save key "'.concat(n,'" for namespace "').concat(t,'" as the namespace was not yet loaded'),"This means something IS WRONG in your application setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"):(this.backend&&this.backend.create&&this.backend.create(e,t,n,i,null,o({},a,{isUpdate:r})),e&&e[0]&&this.store.addResource(e[0],t,n,i))}}]),t}();function U(e){return"string"==typeof e.ns&&(e.ns=[e.ns]),"string"==typeof e.fallbackLng&&(e.fallbackLng=[e.fallbackLng]),"string"==typeof e.fallbackNS&&(e.fallbackNS=[e.fallbackNS]),e.whitelist&&e.whitelist.indexOf("cimode")<0&&(e.whitelist=e.whitelist.concat(["cimode"])),e}function I(){}return new(function(e){function n(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;if(i(this,n),e=u(this,l(n).call(this)),d.call(s(e)),e.options=U(t),e.services={},e.logger=h,e.modules={external:[]},o&&!e.isInitialized&&!t.isClone){if(!e.options.initImmediate)return e.init(t,o),u(e,s(e));setTimeout(function(){e.init(t,o)},0)}return e}return f(n,d),a(n,[{key:"init",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;function r(e){return e?"function"==typeof e?new e:e:null}if("function"==typeof n&&(i=n,n={}),this.options=o({},{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,whitelist:!1,nonExplicitWhitelist:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(e){var n={};if("object"===t(e[1])&&(n=e[1]),"string"==typeof e[1]&&(n.defaultValue=e[1]),"string"==typeof e[2]&&(n.tDescription=e[2]),"object"===t(e[2])||"object"===t(e[3])){var o=e[3]||e[2];Object.keys(o).forEach(function(e){n[e]=o[e]})}return n},interpolation:{escapeValue:!0,format:function(e,t,n){return e},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",maxReplaces:1e3}},this.options,U(n)),this.format=this.options.interpolation.format,i||(i=I),!this.options.isClone){this.modules.logger?h.init(r(this.modules.logger),this.options):h.init(null,this.options);var a=new P(this.options);this.store=new L(this.options.resources,this.options);var s=this.services;s.logger=h,s.resourceStore=this.store,s.languageUtils=a,s.pluralResolver=new F(a,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),s.interpolator=new A(this.options),s.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},s.backendConnector=new V(r(this.modules.backend),s.resourceStore,s,this.options),s.backendConnector.on("*",function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];e.emit.apply(e,[t].concat(o))}),this.modules.languageDetector&&(s.languageDetector=r(this.modules.languageDetector),s.languageDetector.init(s,this.options.detection,this.options)),this.modules.i18nFormat&&(s.i18nFormat=r(this.modules.i18nFormat),s.i18nFormat.init&&s.i18nFormat.init(this)),this.translator=new N(this.services,this.options),this.translator.on("*",function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];e.emit.apply(e,[t].concat(o))}),this.modules.external.forEach(function(t){t.init&&t.init(e)})}["getResource","addResource","addResources","addResourceBundle","removeResourceBundle","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(function(t){e[t]=function(){var n;return(n=e.store)[t].apply(n,arguments)}});var u=v(),l=function(){e.changeLanguage(e.options.lng,function(t,n){e.isInitialized=!0,e.logger.log("initialized",e.options),e.emit("initialized",e.options),u.resolve(n),i(t,n)})};return this.options.resources||!this.options.initImmediate?l():setTimeout(l,0),u}},{key:"loadResources",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I;if(!this.options.resources||this.options.partialBundledLanguages){if(this.language&&"cimode"===this.language.toLowerCase())return t();var n=[],o=function(t){t&&e.services.languageUtils.toResolveHierarchy(t).forEach(function(e){n.indexOf(e)<0&&n.push(e)})};if(this.language)o(this.language);else this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(function(e){return o(e)});this.options.preload&&this.options.preload.forEach(function(e){return o(e)}),this.services.backendConnector.load(n,this.options.ns,t)}else t(null)}},{key:"reloadResources",value:function(e,t,n){var o=v();return e||(e=this.languages),t||(t=this.options.ns),n||(n=I),this.services.backendConnector.reload(e,t,function(e){o.resolve(),n(e)}),o}},{key:"use",value:function(e){return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&R.addPostProcessor(e),"3rdParty"===e.type&&this.modules.external.push(e),this}},{key:"changeLanguage",value:function(e,t){var n=this,o=v();this.emit("languageChanging",e);var i=function(e){e&&(n.language=e,n.languages=n.services.languageUtils.toResolveHierarchy(e),n.translator.language||n.translator.changeLanguage(e),n.services.languageDetector&&n.services.languageDetector.cacheUserLanguage(e)),n.loadResources(function(i){!function(e,i){n.translator.changeLanguage(i),i&&(n.emit("languageChanged",i),n.logger.log("languageChanged",i)),o.resolve(function(){return n.t.apply(n,arguments)}),t&&t(e,function(){return n.t.apply(n,arguments)})}(i,e)})};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect(i):i(e):i(this.services.languageDetector.detect()),o}},{key:"getFixedT",value:function(e,n){var i=this,r=function e(n,r){var a;if("object"!==t(r)){for(var s=arguments.length,u=new Array(s>2?s-2:0),l=2;l<s;l++)u[l-2]=arguments[l];a=i.options.overloadTranslationOptionHandler([n,r].concat(u))}else a=o({},r);return a.lng=a.lng||e.lng,a.lngs=a.lngs||e.lngs,a.ns=a.ns||e.ns,i.t(n,a)};return"string"==typeof e?r.lng=e:r.lngs=e,r.ns=n,r}},{key:"t",value:function(){var e;return this.translator&&(e=this.translator).translate.apply(e,arguments)}},{key:"exists",value:function(){var e;return this.translator&&(e=this.translator).exists.apply(e,arguments)}},{key:"setDefaultNamespace",value:function(e){this.options.defaultNS=e}},{key:"hasLoadedNamespace",value:function(e){var t=this;if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var n=this.languages[0],o=!!this.options&&this.options.fallbackLng,i=this.languages[this.languages.length-1];if("cimode"===n.toLowerCase())return!0;var r=function(e,n){var o=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===o||2===o};return!!this.hasResourceBundle(n,e)||(!this.services.backendConnector.backend||!(!r(n,e)||o&&!r(i,e)))}},{key:"loadNamespaces",value:function(e,t){var n=this,o=v();return this.options.ns?("string"==typeof e&&(e=[e]),e.forEach(function(e){n.options.ns.indexOf(e)<0&&n.options.ns.push(e)}),this.loadResources(function(e){o.resolve(),t&&t(e)}),o):(t&&t(),Promise.resolve())}},{key:"loadLanguages",value:function(e,t){var n=v();"string"==typeof e&&(e=[e]);var o=this.options.preload||[],i=e.filter(function(e){return o.indexOf(e)<0});return i.length?(this.options.preload=o.concat(i),this.loadResources(function(e){n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}},{key:"dir",value:function(e){if(e||(e=this.languages&&this.languages.length>0?this.languages[0]:this.language),!e)return"rtl";return["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e))>=0?"rtl":"ltr"}},{key:"createInstance",value:function(){return new n(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1?arguments[1]:void 0)}},{key:"cloneInstance",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:I,r=o({},this.options,t,{isClone:!0}),a=new n(r);return["store","services","language"].forEach(function(t){a[t]=e[t]}),a.translator=new N(a.services,a.options),a.translator.on("*",function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];a.emit.apply(a,[e].concat(n))}),a.init(r,i),a.translator.options=a.options,a}}]),n}())});

/*********/
(function(){

    // Copyright (c) 2005  Tom Wu
    // All Rights Reserved.
    // See "LICENSE" for details.

    // Basic JavaScript BN library - subset useful for RSA encryption.

    // Bits per digit
    var dbits;

    // JavaScript engine analysis
    var canary = 0xdeadbeefcafe;
    var j_lm = ((canary&0xffffff)==0xefcafe);

    // (public) Constructor
    function BigInteger(a,b,c) {
      if(a != null)
        if("number" == typeof a) this.fromNumber(a,b,c);
        else if(b == null && "string" != typeof a) this.fromString(a,256);
        else this.fromString(a,b);
    }

    // return new, unset BigInteger
    function nbi() { return new BigInteger(null); }

    // am: Compute w_j += (x*this_i), propagate carries,
    // c is initial carry, returns final carry.
    // c < 3*dvalue, x < 2*dvalue, this_i < dvalue
    // We need to select the fastest one that works in this environment.

    // am1: use a single mult and divide to get the high bits,
    // max digit bits should be 26 because
    // max internal value = 2*dvalue^2-2*dvalue (< 2^53)
    function am1(i,x,w,j,c,n) {
      while(--n >= 0) {
        var v = x*this[i++]+w[j]+c;
        c = Math.floor(v/0x4000000);
        w[j++] = v&0x3ffffff;
      }
      return c;
    }
    // am2 avoids a big mult-and-extract completely.
    // Max digit bits should be <= 30 because we do bitwise ops
    // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
    function am2(i,x,w,j,c,n) {
      var xl = x&0x7fff, xh = x>>15;
      while(--n >= 0) {
        var l = this[i]&0x7fff;
        var h = this[i++]>>15;
        var m = xh*l+h*xl;
        l = xl*l+((m&0x7fff)<<15)+w[j]+(c&0x3fffffff);
        c = (l>>>30)+(m>>>15)+xh*h+(c>>>30);
        w[j++] = l&0x3fffffff;
      }
      return c;
    }
    // Alternately, set max digit bits to 28 since some
    // browsers slow down when dealing with 32-bit numbers.
    function am3(i,x,w,j,c,n) {
      var xl = x&0x3fff, xh = x>>14;
      while(--n >= 0) {
        var l = this[i]&0x3fff;
        var h = this[i++]>>14;
        var m = xh*l+h*xl;
        l = xl*l+((m&0x3fff)<<14)+w[j]+c;
        c = (l>>28)+(m>>14)+xh*h;
        w[j++] = l&0xfffffff;
      }
      return c;
    }
    var inBrowser = typeof navigator !== "undefined";
    if(inBrowser && j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
      BigInteger.prototype.am = am2;
      dbits = 30;
    }
    else if(inBrowser && j_lm && (navigator.appName != "Netscape")) {
      BigInteger.prototype.am = am1;
      dbits = 26;
    }
    else { // Mozilla/Netscape seems to prefer am3
      BigInteger.prototype.am = am3;
      dbits = 28;
    }

    BigInteger.prototype.DB = dbits;
    BigInteger.prototype.DM = ((1<<dbits)-1);
    BigInteger.prototype.DV = (1<<dbits);

    var BI_FP = 52;
    BigInteger.prototype.FV = Math.pow(2,BI_FP);
    BigInteger.prototype.F1 = BI_FP-dbits;
    BigInteger.prototype.F2 = 2*dbits-BI_FP;

    // Digit conversions
    var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
    var BI_RC = new Array();
    var rr,vv;
    rr = "0".charCodeAt(0);
    for(vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
    rr = "a".charCodeAt(0);
    for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
    rr = "A".charCodeAt(0);
    for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;

    function int2char(n) { return BI_RM.charAt(n); }
    function intAt(s,i) {
      var c = BI_RC[s.charCodeAt(i)];
      return (c==null)?-1:c;
    }

    // (protected) copy this to r
    function bnpCopyTo(r) {
      for(var i = this.t-1; i >= 0; --i) r[i] = this[i];
      r.t = this.t;
      r.s = this.s;
    }

    // (protected) set from integer value x, -DV <= x < DV
    function bnpFromInt(x) {
      this.t = 1;
      this.s = (x<0)?-1:0;
      if(x > 0) this[0] = x;
      else if(x < -1) this[0] = x+this.DV;
      else this.t = 0;
    }

    // return bigint initialized to value
    function nbv(i) { var r = nbi(); r.fromInt(i); return r; }

    // (protected) set from string and radix
    function bnpFromString(s,b) {
      var k;
      if(b == 16) k = 4;
      else if(b == 8) k = 3;
      else if(b == 256) k = 8; // byte array
      else if(b == 2) k = 1;
      else if(b == 32) k = 5;
      else if(b == 4) k = 2;
      else { this.fromRadix(s,b); return; }
      this.t = 0;
      this.s = 0;
      var i = s.length, mi = false, sh = 0;
      while(--i >= 0) {
        var x = (k==8)?s[i]&0xff:intAt(s,i);
        if(x < 0) {
          if(s.charAt(i) == "-") mi = true;
          continue;
        }
        mi = false;
        if(sh == 0)
          this[this.t++] = x;
        else if(sh+k > this.DB) {
          this[this.t-1] |= (x&((1<<(this.DB-sh))-1))<<sh;
          this[this.t++] = (x>>(this.DB-sh));
        }
        else
          this[this.t-1] |= x<<sh;
        sh += k;
        if(sh >= this.DB) sh -= this.DB;
      }
      if(k == 8 && (s[0]&0x80) != 0) {
        this.s = -1;
        if(sh > 0) this[this.t-1] |= ((1<<(this.DB-sh))-1)<<sh;
      }
      this.clamp();
      if(mi) BigInteger.ZERO.subTo(this,this);
    }

    // (protected) clamp off excess high words
    function bnpClamp() {
      var c = this.s&this.DM;
      while(this.t > 0 && this[this.t-1] == c) --this.t;
    }

    // (public) return string representation in given radix
    function bnToString(b) {
      if(this.s < 0) return "-"+this.negate().toString(b);
      var k;
      if(b == 16) k = 4;
      else if(b == 8) k = 3;
      else if(b == 2) k = 1;
      else if(b == 32) k = 5;
      else if(b == 4) k = 2;
      else return this.toRadix(b);
      var km = (1<<k)-1, d, m = false, r = "", i = this.t;
      var p = this.DB-(i*this.DB)%k;
      if(i-- > 0) {
        if(p < this.DB && (d = this[i]>>p) > 0) { m = true; r = int2char(d); }
        while(i >= 0) {
          if(p < k) {
            d = (this[i]&((1<<p)-1))<<(k-p);
            d |= this[--i]>>(p+=this.DB-k);
          }
          else {
            d = (this[i]>>(p-=k))&km;
            if(p <= 0) { p += this.DB; --i; }
          }
          if(d > 0) m = true;
          if(m) r += int2char(d);
        }
      }
      return m?r:"0";
    }

    // (public) -this
    function bnNegate() { var r = nbi(); BigInteger.ZERO.subTo(this,r); return r; }

    // (public) |this|
    function bnAbs() { return (this.s<0)?this.negate():this; }

    // (public) return + if this > a, - if this < a, 0 if equal
    function bnCompareTo(a) {
      var r = this.s-a.s;
      if(r != 0) return r;
      var i = this.t;
      r = i-a.t;
      if(r != 0) return (this.s<0)?-r:r;
      while(--i >= 0) if((r=this[i]-a[i]) != 0) return r;
      return 0;
    }

    // returns bit length of the integer x
    function nbits(x) {
      var r = 1, t;
      if((t=x>>>16) != 0) { x = t; r += 16; }
      if((t=x>>8) != 0) { x = t; r += 8; }
      if((t=x>>4) != 0) { x = t; r += 4; }
      if((t=x>>2) != 0) { x = t; r += 2; }
      if((t=x>>1) != 0) { x = t; r += 1; }
      return r;
    }

    // (public) return the number of bits in "this"
    function bnBitLength() {
      if(this.t <= 0) return 0;
      return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM));
    }

    // (protected) r = this << n*DB
    function bnpDLShiftTo(n,r) {
      var i;
      for(i = this.t-1; i >= 0; --i) r[i+n] = this[i];
      for(i = n-1; i >= 0; --i) r[i] = 0;
      r.t = this.t+n;
      r.s = this.s;
    }

    // (protected) r = this >> n*DB
    function bnpDRShiftTo(n,r) {
      for(var i = n; i < this.t; ++i) r[i-n] = this[i];
      r.t = Math.max(this.t-n,0);
      r.s = this.s;
    }

    // (protected) r = this << n
    function bnpLShiftTo(n,r) {
      var bs = n%this.DB;
      var cbs = this.DB-bs;
      var bm = (1<<cbs)-1;
      var ds = Math.floor(n/this.DB), c = (this.s<<bs)&this.DM, i;
      for(i = this.t-1; i >= 0; --i) {
        r[i+ds+1] = (this[i]>>cbs)|c;
        c = (this[i]&bm)<<bs;
      }
      for(i = ds-1; i >= 0; --i) r[i] = 0;
      r[ds] = c;
      r.t = this.t+ds+1;
      r.s = this.s;
      r.clamp();
    }

    // (protected) r = this >> n
    function bnpRShiftTo(n,r) {
      r.s = this.s;
      var ds = Math.floor(n/this.DB);
      if(ds >= this.t) { r.t = 0; return; }
      var bs = n%this.DB;
      var cbs = this.DB-bs;
      var bm = (1<<bs)-1;
      r[0] = this[ds]>>bs;
      for(var i = ds+1; i < this.t; ++i) {
        r[i-ds-1] |= (this[i]&bm)<<cbs;
        r[i-ds] = this[i]>>bs;
      }
      if(bs > 0) r[this.t-ds-1] |= (this.s&bm)<<cbs;
      r.t = this.t-ds;
      r.clamp();
    }

    // (protected) r = this - a
    function bnpSubTo(a,r) {
      var i = 0, c = 0, m = Math.min(a.t,this.t);
      while(i < m) {
        c += this[i]-a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      if(a.t < this.t) {
        c -= a.s;
        while(i < this.t) {
          c += this[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c += this.s;
      }
      else {
        c += this.s;
        while(i < a.t) {
          c -= a[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c -= a.s;
      }
      r.s = (c<0)?-1:0;
      if(c < -1) r[i++] = this.DV+c;
      else if(c > 0) r[i++] = c;
      r.t = i;
      r.clamp();
    }

    // (protected) r = this * a, r != this,a (HAC 14.12)
    // "this" should be the larger one if appropriate.
    function bnpMultiplyTo(a,r) {
      var x = this.abs(), y = a.abs();
      var i = x.t;
      r.t = i+y.t;
      while(--i >= 0) r[i] = 0;
      for(i = 0; i < y.t; ++i) r[i+x.t] = x.am(0,y[i],r,i,0,x.t);
      r.s = 0;
      r.clamp();
      if(this.s != a.s) BigInteger.ZERO.subTo(r,r);
    }

    // (protected) r = this^2, r != this (HAC 14.16)
    function bnpSquareTo(r) {
      var x = this.abs();
      var i = r.t = 2*x.t;
      while(--i >= 0) r[i] = 0;
      for(i = 0; i < x.t-1; ++i) {
        var c = x.am(i,x[i],r,2*i,0,1);
        if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1)) >= x.DV) {
          r[i+x.t] -= x.DV;
          r[i+x.t+1] = 1;
        }
      }
      if(r.t > 0) r[r.t-1] += x.am(i,x[i],r,2*i,0,1);
      r.s = 0;
      r.clamp();
    }

    // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
    // r != q, this != m.  q or r may be null.
    function bnpDivRemTo(m,q,r) {
      var pm = m.abs();
      if(pm.t <= 0) return;
      var pt = this.abs();
      if(pt.t < pm.t) {
        if(q != null) q.fromInt(0);
        if(r != null) this.copyTo(r);
        return;
      }
      if(r == null) r = nbi();
      var y = nbi(), ts = this.s, ms = m.s;
      var nsh = this.DB-nbits(pm[pm.t-1]);   // normalize modulus
      if(nsh > 0) { pm.lShiftTo(nsh,y); pt.lShiftTo(nsh,r); }
      else { pm.copyTo(y); pt.copyTo(r); }
      var ys = y.t;
      var y0 = y[ys-1];
      if(y0 == 0) return;
      var yt = y0*(1<<this.F1)+((ys>1)?y[ys-2]>>this.F2:0);
      var d1 = this.FV/yt, d2 = (1<<this.F1)/yt, e = 1<<this.F2;
      var i = r.t, j = i-ys, t = (q==null)?nbi():q;
      y.dlShiftTo(j,t);
      if(r.compareTo(t) >= 0) {
        r[r.t++] = 1;
        r.subTo(t,r);
      }
      BigInteger.ONE.dlShiftTo(ys,t);
      t.subTo(y,y);  // "negative" y so we can replace sub with am later
      while(y.t < ys) y[y.t++] = 0;
      while(--j >= 0) {
        // Estimate quotient digit
        var qd = (r[--i]==y0)?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);
        if((r[i]+=y.am(0,qd,r,j,0,ys)) < qd) {   // Try it out
          y.dlShiftTo(j,t);
          r.subTo(t,r);
          while(r[i] < --qd) r.subTo(t,r);
        }
      }
      if(q != null) {
        r.drShiftTo(ys,q);
        if(ts != ms) BigInteger.ZERO.subTo(q,q);
      }
      r.t = ys;
      r.clamp();
      if(nsh > 0) r.rShiftTo(nsh,r); // Denormalize remainder
      if(ts < 0) BigInteger.ZERO.subTo(r,r);
    }

    // (public) this mod a
    function bnMod(a) {
      var r = nbi();
      this.abs().divRemTo(a,null,r);
      if(this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r,r);
      return r;
    }

    // Modular reduction using "classic" algorithm
    function Classic(m) { this.m = m; }
    function cConvert(x) {
      if(x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
      else return x;
    }
    function cRevert(x) { return x; }
    function cReduce(x) { x.divRemTo(this.m,null,x); }
    function cMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
    function cSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

    Classic.prototype.convert = cConvert;
    Classic.prototype.revert = cRevert;
    Classic.prototype.reduce = cReduce;
    Classic.prototype.mulTo = cMulTo;
    Classic.prototype.sqrTo = cSqrTo;

    // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
    // justification:
    //         xy == 1 (mod m)
    //         xy =  1+km
    //   xy(2-xy) = (1+km)(1-km)
    // x[y(2-xy)] = 1-k^2m^2
    // x[y(2-xy)] == 1 (mod m^2)
    // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
    // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
    // JS multiply "overflows" differently from C/C++, so care is needed here.
    function bnpInvDigit() {
      if(this.t < 1) return 0;
      var x = this[0];
      if((x&1) == 0) return 0;
      var y = x&3;       // y == 1/x mod 2^2
      y = (y*(2-(x&0xf)*y))&0xf; // y == 1/x mod 2^4
      y = (y*(2-(x&0xff)*y))&0xff;   // y == 1/x mod 2^8
      y = (y*(2-(((x&0xffff)*y)&0xffff)))&0xffff;    // y == 1/x mod 2^16
      // last step - calculate inverse mod DV directly;
      // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
      y = (y*(2-x*y%this.DV))%this.DV;       // y == 1/x mod 2^dbits
      // we really want the negative inverse, and -DV < y < DV
      return (y>0)?this.DV-y:-y;
    }

    // Montgomery reduction
    function Montgomery(m) {
      this.m = m;
      this.mp = m.invDigit();
      this.mpl = this.mp&0x7fff;
      this.mph = this.mp>>15;
      this.um = (1<<(m.DB-15))-1;
      this.mt2 = 2*m.t;
    }

    // xR mod m
    function montConvert(x) {
      var r = nbi();
      x.abs().dlShiftTo(this.m.t,r);
      r.divRemTo(this.m,null,r);
      if(x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r,r);
      return r;
    }

    // x/R mod m
    function montRevert(x) {
      var r = nbi();
      x.copyTo(r);
      this.reduce(r);
      return r;
    }

    // x = x/R mod m (HAC 14.32)
    function montReduce(x) {
      while(x.t <= this.mt2) // pad x so am has enough room later
        x[x.t++] = 0;
      for(var i = 0; i < this.m.t; ++i) {
        // faster way of calculating u0 = x[i]*mp mod DV
        var j = x[i]&0x7fff;
        var u0 = (j*this.mpl+(((j*this.mph+(x[i]>>15)*this.mpl)&this.um)<<15))&x.DM;
        // use am to combine the multiply-shift-add into one call
        j = i+this.m.t;
        x[j] += this.m.am(0,u0,x,i,0,this.m.t);
        // propagate carry
        while(x[j] >= x.DV) { x[j] -= x.DV; x[++j]++; }
      }
      x.clamp();
      x.drShiftTo(this.m.t,x);
      if(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
    }

    // r = "x^2/R mod m"; x != r
    function montSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

    // r = "xy/R mod m"; x,y != r
    function montMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }

    Montgomery.prototype.convert = montConvert;
    Montgomery.prototype.revert = montRevert;
    Montgomery.prototype.reduce = montReduce;
    Montgomery.prototype.mulTo = montMulTo;
    Montgomery.prototype.sqrTo = montSqrTo;

    // (protected) true iff this is even
    function bnpIsEven() { return ((this.t>0)?(this[0]&1):this.s) == 0; }

    // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
    function bnpExp(e,z) {
      if(e > 0xffffffff || e < 1) return BigInteger.ONE;
      var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e)-1;
      g.copyTo(r);
      while(--i >= 0) {
        z.sqrTo(r,r2);
        if((e&(1<<i)) > 0) z.mulTo(r2,g,r);
        else { var t = r; r = r2; r2 = t; }
      }
      return z.revert(r);
    }

    // (public) this^e % m, 0 <= e < 2^32
    function bnModPowInt(e,m) {
      var z;
      if(e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
      return this.exp(e,z);
    }

    // protected
    BigInteger.prototype.copyTo = bnpCopyTo;
    BigInteger.prototype.fromInt = bnpFromInt;
    BigInteger.prototype.fromString = bnpFromString;
    BigInteger.prototype.clamp = bnpClamp;
    BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
    BigInteger.prototype.drShiftTo = bnpDRShiftTo;
    BigInteger.prototype.lShiftTo = bnpLShiftTo;
    BigInteger.prototype.rShiftTo = bnpRShiftTo;
    BigInteger.prototype.subTo = bnpSubTo;
    BigInteger.prototype.multiplyTo = bnpMultiplyTo;
    BigInteger.prototype.squareTo = bnpSquareTo;
    BigInteger.prototype.divRemTo = bnpDivRemTo;
    BigInteger.prototype.invDigit = bnpInvDigit;
    BigInteger.prototype.isEven = bnpIsEven;
    BigInteger.prototype.exp = bnpExp;

    // public
    BigInteger.prototype.toString = bnToString;
    BigInteger.prototype.negate = bnNegate;
    BigInteger.prototype.abs = bnAbs;
    BigInteger.prototype.compareTo = bnCompareTo;
    BigInteger.prototype.bitLength = bnBitLength;
    BigInteger.prototype.mod = bnMod;
    BigInteger.prototype.modPowInt = bnModPowInt;

    // "constants"
    BigInteger.ZERO = nbv(0);
    BigInteger.ONE = nbv(1);

    // Copyright (c) 2005-2009  Tom Wu
    // All Rights Reserved.
    // See "LICENSE" for details.

    // Extended JavaScript BN functions, required for RSA private ops.

    // Version 1.1: new BigInteger("0", 10) returns "proper" zero
    // Version 1.2: square() API, isProbablePrime fix

    // (public)
    function bnClone() { var r = nbi(); this.copyTo(r); return r; }

    // (public) return value as integer
    function bnIntValue() {
      if(this.s < 0) {
        if(this.t == 1) return this[0]-this.DV;
        else if(this.t == 0) return -1;
      }
      else if(this.t == 1) return this[0];
      else if(this.t == 0) return 0;
      // assumes 16 < DB < 32
      return ((this[1]&((1<<(32-this.DB))-1))<<this.DB)|this[0];
    }

    // (public) return value as byte
    function bnByteValue() { return (this.t==0)?this.s:(this[0]<<24)>>24; }

    // (public) return value as short (assumes DB>=16)
    function bnShortValue() { return (this.t==0)?this.s:(this[0]<<16)>>16; }

    // (protected) return x s.t. r^x < DV
    function bnpChunkSize(r) { return Math.floor(Math.LN2*this.DB/Math.log(r)); }

    // (public) 0 if this == 0, 1 if this > 0
    function bnSigNum() {
      if(this.s < 0) return -1;
      else if(this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
      else return 1;
    }

    // (protected) convert to radix string
    function bnpToRadix(b) {
      if(b == null) b = 10;
      if(this.signum() == 0 || b < 2 || b > 36) return "0";
      var cs = this.chunkSize(b);
      var a = Math.pow(b,cs);
      var d = nbv(a), y = nbi(), z = nbi(), r = "";
      this.divRemTo(d,y,z);
      while(y.signum() > 0) {
        r = (a+z.intValue()).toString(b).substr(1) + r;
        y.divRemTo(d,y,z);
      }
      return z.intValue().toString(b) + r;
    }

    // (protected) convert from radix string
    function bnpFromRadix(s,b) {
      this.fromInt(0);
      if(b == null) b = 10;
      var cs = this.chunkSize(b);
      var d = Math.pow(b,cs), mi = false, j = 0, w = 0;
      for(var i = 0; i < s.length; ++i) {
        var x = intAt(s,i);
        if(x < 0) {
          if(s.charAt(i) == "-" && this.signum() == 0) mi = true;
          continue;
        }
        w = b*w+x;
        if(++j >= cs) {
          this.dMultiply(d);
          this.dAddOffset(w,0);
          j = 0;
          w = 0;
        }
      }
      if(j > 0) {
        this.dMultiply(Math.pow(b,j));
        this.dAddOffset(w,0);
      }
      if(mi) BigInteger.ZERO.subTo(this,this);
    }

    // (protected) alternate constructor
    function bnpFromNumber(a,b,c) {
      if("number" == typeof b) {
        // new BigInteger(int,int,RNG)
        if(a < 2) this.fromInt(1);
        else {
          this.fromNumber(a,c);
          if(!this.testBit(a-1))    // force MSB set
            this.bitwiseTo(BigInteger.ONE.shiftLeft(a-1),op_or,this);
          if(this.isEven()) this.dAddOffset(1,0); // force odd
          while(!this.isProbablePrime(b)) {
            this.dAddOffset(2,0);
            if(this.bitLength() > a) this.subTo(BigInteger.ONE.shiftLeft(a-1),this);
          }
        }
      }
      else {
        // new BigInteger(int,RNG)
        var x = new Array(), t = a&7;
        x.length = (a>>3)+1;
        b.nextBytes(x);
        if(t > 0) x[0] &= ((1<<t)-1); else x[0] = 0;
        this.fromString(x,256);
      }
    }

    // (public) convert to bigendian byte array
    function bnToByteArray() {
      var i = this.t, r = new Array();
      r[0] = this.s;
      var p = this.DB-(i*this.DB)%8, d, k = 0;
      if(i-- > 0) {
        if(p < this.DB && (d = this[i]>>p) != (this.s&this.DM)>>p)
          r[k++] = d|(this.s<<(this.DB-p));
        while(i >= 0) {
          if(p < 8) {
            d = (this[i]&((1<<p)-1))<<(8-p);
            d |= this[--i]>>(p+=this.DB-8);
          }
          else {
            d = (this[i]>>(p-=8))&0xff;
            if(p <= 0) { p += this.DB; --i; }
          }
          if((d&0x80) != 0) d |= -256;
          if(k == 0 && (this.s&0x80) != (d&0x80)) ++k;
          if(k > 0 || d != this.s) r[k++] = d;
        }
      }
      return r;
    }

    function bnEquals(a) { return(this.compareTo(a)==0); }
    function bnMin(a) { return(this.compareTo(a)<0)?this:a; }
    function bnMax(a) { return(this.compareTo(a)>0)?this:a; }

    // (protected) r = this op a (bitwise)
    function bnpBitwiseTo(a,op,r) {
      var i, f, m = Math.min(a.t,this.t);
      for(i = 0; i < m; ++i) r[i] = op(this[i],a[i]);
      if(a.t < this.t) {
        f = a.s&this.DM;
        for(i = m; i < this.t; ++i) r[i] = op(this[i],f);
        r.t = this.t;
      }
      else {
        f = this.s&this.DM;
        for(i = m; i < a.t; ++i) r[i] = op(f,a[i]);
        r.t = a.t;
      }
      r.s = op(this.s,a.s);
      r.clamp();
    }

    // (public) this & a
    function op_and(x,y) { return x&y; }
    function bnAnd(a) { var r = nbi(); this.bitwiseTo(a,op_and,r); return r; }

    // (public) this | a
    function op_or(x,y) { return x|y; }
    function bnOr(a) { var r = nbi(); this.bitwiseTo(a,op_or,r); return r; }

    // (public) this ^ a
    function op_xor(x,y) { return x^y; }
    function bnXor(a) { var r = nbi(); this.bitwiseTo(a,op_xor,r); return r; }

    // (public) this & ~a
    function op_andnot(x,y) { return x&~y; }
    function bnAndNot(a) { var r = nbi(); this.bitwiseTo(a,op_andnot,r); return r; }

    // (public) ~this
    function bnNot() {
      var r = nbi();
      for(var i = 0; i < this.t; ++i) r[i] = this.DM&~this[i];
      r.t = this.t;
      r.s = ~this.s;
      return r;
    }

    // (public) this << n
    function bnShiftLeft(n) {
      var r = nbi();
      if(n < 0) this.rShiftTo(-n,r); else this.lShiftTo(n,r);
      return r;
    }

    // (public) this >> n
    function bnShiftRight(n) {
      var r = nbi();
      if(n < 0) this.lShiftTo(-n,r); else this.rShiftTo(n,r);
      return r;
    }

    // return index of lowest 1-bit in x, x < 2^31
    function lbit(x) {
      if(x == 0) return -1;
      var r = 0;
      if((x&0xffff) == 0) { x >>= 16; r += 16; }
      if((x&0xff) == 0) { x >>= 8; r += 8; }
      if((x&0xf) == 0) { x >>= 4; r += 4; }
      if((x&3) == 0) { x >>= 2; r += 2; }
      if((x&1) == 0) ++r;
      return r;
    }

    // (public) returns index of lowest 1-bit (or -1 if none)
    function bnGetLowestSetBit() {
      for(var i = 0; i < this.t; ++i)
        if(this[i] != 0) return i*this.DB+lbit(this[i]);
      if(this.s < 0) return this.t*this.DB;
      return -1;
    }

    // return number of 1 bits in x
    function cbit(x) {
      var r = 0;
      while(x != 0) { x &= x-1; ++r; }
      return r;
    }

    // (public) return number of set bits
    function bnBitCount() {
      var r = 0, x = this.s&this.DM;
      for(var i = 0; i < this.t; ++i) r += cbit(this[i]^x);
      return r;
    }

    // (public) true iff nth bit is set
    function bnTestBit(n) {
      var j = Math.floor(n/this.DB);
      if(j >= this.t) return(this.s!=0);
      return((this[j]&(1<<(n%this.DB)))!=0);
    }

    // (protected) this op (1<<n)
    function bnpChangeBit(n,op) {
      var r = BigInteger.ONE.shiftLeft(n);
      this.bitwiseTo(r,op,r);
      return r;
    }

    // (public) this | (1<<n)
    function bnSetBit(n) { return this.changeBit(n,op_or); }

    // (public) this & ~(1<<n)
    function bnClearBit(n) { return this.changeBit(n,op_andnot); }

    // (public) this ^ (1<<n)
    function bnFlipBit(n) { return this.changeBit(n,op_xor); }

    // (protected) r = this + a
    function bnpAddTo(a,r) {
      var i = 0, c = 0, m = Math.min(a.t,this.t);
      while(i < m) {
        c += this[i]+a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      if(a.t < this.t) {
        c += a.s;
        while(i < this.t) {
          c += this[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c += this.s;
      }
      else {
        c += this.s;
        while(i < a.t) {
          c += a[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c += a.s;
      }
      r.s = (c<0)?-1:0;
      if(c > 0) r[i++] = c;
      else if(c < -1) r[i++] = this.DV+c;
      r.t = i;
      r.clamp();
    }

    // (public) this + a
    function bnAdd(a) { var r = nbi(); this.addTo(a,r); return r; }

    // (public) this - a
    function bnSubtract(a) { var r = nbi(); this.subTo(a,r); return r; }

    // (public) this * a
    function bnMultiply(a) { var r = nbi(); this.multiplyTo(a,r); return r; }

    // (public) this^2
    function bnSquare() { var r = nbi(); this.squareTo(r); return r; }

    // (public) this / a
    function bnDivide(a) { var r = nbi(); this.divRemTo(a,r,null); return r; }

    // (public) this % a
    function bnRemainder(a) { var r = nbi(); this.divRemTo(a,null,r); return r; }

    // (public) [this/a,this%a]
    function bnDivideAndRemainder(a) {
      var q = nbi(), r = nbi();
      this.divRemTo(a,q,r);
      return new Array(q,r);
    }

    // (protected) this *= n, this >= 0, 1 < n < DV
    function bnpDMultiply(n) {
      this[this.t] = this.am(0,n-1,this,0,0,this.t);
      ++this.t;
      this.clamp();
    }

    // (protected) this += n << w words, this >= 0
    function bnpDAddOffset(n,w) {
      if(n == 0) return;
      while(this.t <= w) this[this.t++] = 0;
      this[w] += n;
      while(this[w] >= this.DV) {
        this[w] -= this.DV;
        if(++w >= this.t) this[this.t++] = 0;
        ++this[w];
      }
    }

    // A "null" reducer
    function NullExp() {}
    function nNop(x) { return x; }
    function nMulTo(x,y,r) { x.multiplyTo(y,r); }
    function nSqrTo(x,r) { x.squareTo(r); }

    NullExp.prototype.convert = nNop;
    NullExp.prototype.revert = nNop;
    NullExp.prototype.mulTo = nMulTo;
    NullExp.prototype.sqrTo = nSqrTo;

    // (public) this^e
    function bnPow(e) { return this.exp(e,new NullExp()); }

    // (protected) r = lower n words of "this * a", a.t <= n
    // "this" should be the larger one if appropriate.
    function bnpMultiplyLowerTo(a,n,r) {
      var i = Math.min(this.t+a.t,n);
      r.s = 0; // assumes a,this >= 0
      r.t = i;
      while(i > 0) r[--i] = 0;
      var j;
      for(j = r.t-this.t; i < j; ++i) r[i+this.t] = this.am(0,a[i],r,i,0,this.t);
      for(j = Math.min(a.t,n); i < j; ++i) this.am(0,a[i],r,i,0,n-i);
      r.clamp();
    }

    // (protected) r = "this * a" without lower n words, n > 0
    // "this" should be the larger one if appropriate.
    function bnpMultiplyUpperTo(a,n,r) {
      --n;
      var i = r.t = this.t+a.t-n;
      r.s = 0; // assumes a,this >= 0
      while(--i >= 0) r[i] = 0;
      for(i = Math.max(n-this.t,0); i < a.t; ++i)
        r[this.t+i-n] = this.am(n-i,a[i],r,0,0,this.t+i-n);
      r.clamp();
      r.drShiftTo(1,r);
    }

    // Barrett modular reduction
    function Barrett(m) {
      // setup Barrett
      this.r2 = nbi();
      this.q3 = nbi();
      BigInteger.ONE.dlShiftTo(2*m.t,this.r2);
      this.mu = this.r2.divide(m);
      this.m = m;
    }

    function barrettConvert(x) {
      if(x.s < 0 || x.t > 2*this.m.t) return x.mod(this.m);
      else if(x.compareTo(this.m) < 0) return x;
      else { var r = nbi(); x.copyTo(r); this.reduce(r); return r; }
    }

    function barrettRevert(x) { return x; }

    // x = x mod m (HAC 14.42)
    function barrettReduce(x) {
      x.drShiftTo(this.m.t-1,this.r2);
      if(x.t > this.m.t+1) { x.t = this.m.t+1; x.clamp(); }
      this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3);
      this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);
      while(x.compareTo(this.r2) < 0) x.dAddOffset(1,this.m.t+1);
      x.subTo(this.r2,x);
      while(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
    }

    // r = x^2 mod m; x != r
    function barrettSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

    // r = x*y mod m; x,y != r
    function barrettMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }

    Barrett.prototype.convert = barrettConvert;
    Barrett.prototype.revert = barrettRevert;
    Barrett.prototype.reduce = barrettReduce;
    Barrett.prototype.mulTo = barrettMulTo;
    Barrett.prototype.sqrTo = barrettSqrTo;

    // (public) this^e % m (HAC 14.85)
    function bnModPow(e,m) {
      var i = e.bitLength(), k, r = nbv(1), z;
      if(i <= 0) return r;
      else if(i < 18) k = 1;
      else if(i < 48) k = 3;
      else if(i < 144) k = 4;
      else if(i < 768) k = 5;
      else k = 6;
      if(i < 8)
        z = new Classic(m);
      else if(m.isEven())
        z = new Barrett(m);
      else
        z = new Montgomery(m);

      // precomputation
      var g = new Array(), n = 3, k1 = k-1, km = (1<<k)-1;
      g[1] = z.convert(this);
      if(k > 1) {
        var g2 = nbi();
        z.sqrTo(g[1],g2);
        while(n <= km) {
          g[n] = nbi();
          z.mulTo(g2,g[n-2],g[n]);
          n += 2;
        }
      }

      var j = e.t-1, w, is1 = true, r2 = nbi(), t;
      i = nbits(e[j])-1;
      while(j >= 0) {
        if(i >= k1) w = (e[j]>>(i-k1))&km;
        else {
          w = (e[j]&((1<<(i+1))-1))<<(k1-i);
          if(j > 0) w |= e[j-1]>>(this.DB+i-k1);
        }

        n = k;
        while((w&1) == 0) { w >>= 1; --n; }
        if((i -= n) < 0) { i += this.DB; --j; }
        if(is1) {    // ret == 1, don't bother squaring or multiplying it
          g[w].copyTo(r);
          is1 = false;
        }
        else {
          while(n > 1) { z.sqrTo(r,r2); z.sqrTo(r2,r); n -= 2; }
          if(n > 0) z.sqrTo(r,r2); else { t = r; r = r2; r2 = t; }
          z.mulTo(r2,g[w],r);
        }

        while(j >= 0 && (e[j]&(1<<i)) == 0) {
          z.sqrTo(r,r2); t = r; r = r2; r2 = t;
          if(--i < 0) { i = this.DB-1; --j; }
        }
      }
      return z.revert(r);
    }

    // (public) gcd(this,a) (HAC 14.54)
    function bnGCD(a) {
      var x = (this.s<0)?this.negate():this.clone();
      var y = (a.s<0)?a.negate():a.clone();
      if(x.compareTo(y) < 0) { var t = x; x = y; y = t; }
      var i = x.getLowestSetBit(), g = y.getLowestSetBit();
      if(g < 0) return x;
      if(i < g) g = i;
      if(g > 0) {
        x.rShiftTo(g,x);
        y.rShiftTo(g,y);
      }
      while(x.signum() > 0) {
        if((i = x.getLowestSetBit()) > 0) x.rShiftTo(i,x);
        if((i = y.getLowestSetBit()) > 0) y.rShiftTo(i,y);
        if(x.compareTo(y) >= 0) {
          x.subTo(y,x);
          x.rShiftTo(1,x);
        }
        else {
          y.subTo(x,y);
          y.rShiftTo(1,y);
        }
      }
      if(g > 0) y.lShiftTo(g,y);
      return y;
    }

    // (protected) this % n, n < 2^26
    function bnpModInt(n) {
      if(n <= 0) return 0;
      var d = this.DV%n, r = (this.s<0)?n-1:0;
      if(this.t > 0)
        if(d == 0) r = this[0]%n;
        else for(var i = this.t-1; i >= 0; --i) r = (d*r+this[i])%n;
      return r;
    }

    // (public) 1/this % m (HAC 14.61)
    function bnModInverse(m) {
      var ac = m.isEven();
      if((this.isEven() && ac) || m.signum() == 0) return BigInteger.ZERO;
      var u = m.clone(), v = this.clone();
      var a = nbv(1), b = nbv(0), c = nbv(0), d = nbv(1);
      while(u.signum() != 0) {
        while(u.isEven()) {
          u.rShiftTo(1,u);
          if(ac) {
            if(!a.isEven() || !b.isEven()) { a.addTo(this,a); b.subTo(m,b); }
            a.rShiftTo(1,a);
          }
          else if(!b.isEven()) b.subTo(m,b);
          b.rShiftTo(1,b);
        }
        while(v.isEven()) {
          v.rShiftTo(1,v);
          if(ac) {
            if(!c.isEven() || !d.isEven()) { c.addTo(this,c); d.subTo(m,d); }
            c.rShiftTo(1,c);
          }
          else if(!d.isEven()) d.subTo(m,d);
          d.rShiftTo(1,d);
        }
        if(u.compareTo(v) >= 0) {
          u.subTo(v,u);
          if(ac) a.subTo(c,a);
          b.subTo(d,b);
        }
        else {
          v.subTo(u,v);
          if(ac) c.subTo(a,c);
          d.subTo(b,d);
        }
      }
      if(v.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO;
      if(d.compareTo(m) >= 0) return d.subtract(m);
      if(d.signum() < 0) d.addTo(m,d); else return d;
      if(d.signum() < 0) return d.add(m); else return d;
    }

    var lowprimes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997];
    var lplim = (1<<26)/lowprimes[lowprimes.length-1];

    // (public) test primality with certainty >= 1-.5^t
    function bnIsProbablePrime(t) {
      var i, x = this.abs();
      if(x.t == 1 && x[0] <= lowprimes[lowprimes.length-1]) {
        for(i = 0; i < lowprimes.length; ++i)
          if(x[0] == lowprimes[i]) return true;
        return false;
      }
      if(x.isEven()) return false;
      i = 1;
      while(i < lowprimes.length) {
        var m = lowprimes[i], j = i+1;
        while(j < lowprimes.length && m < lplim) m *= lowprimes[j++];
        m = x.modInt(m);
        while(i < j) if(m%lowprimes[i++] == 0) return false;
      }
      return x.millerRabin(t);
    }

    // (protected) true if probably prime (HAC 4.24, Miller-Rabin)
    function bnpMillerRabin(t) {
      var n1 = this.subtract(BigInteger.ONE);
      var k = n1.getLowestSetBit();
      if(k <= 0) return false;
      var r = n1.shiftRight(k);
      t = (t+1)>>1;
      if(t > lowprimes.length) t = lowprimes.length;
      var a = nbi();
      for(var i = 0; i < t; ++i) {
        //Pick bases at random, instead of starting at 2
        a.fromInt(lowprimes[Math.floor(Math.random()*lowprimes.length)]);
        var y = a.modPow(r,this);
        if(y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
          var j = 1;
          while(j++ < k && y.compareTo(n1) != 0) {
            y = y.modPowInt(2,this);
            if(y.compareTo(BigInteger.ONE) == 0) return false;
          }
          if(y.compareTo(n1) != 0) return false;
        }
      }
      return true;
    }

    // protected
    BigInteger.prototype.chunkSize = bnpChunkSize;
    BigInteger.prototype.toRadix = bnpToRadix;
    BigInteger.prototype.fromRadix = bnpFromRadix;
    BigInteger.prototype.fromNumber = bnpFromNumber;
    BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
    BigInteger.prototype.changeBit = bnpChangeBit;
    BigInteger.prototype.addTo = bnpAddTo;
    BigInteger.prototype.dMultiply = bnpDMultiply;
    BigInteger.prototype.dAddOffset = bnpDAddOffset;
    BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
    BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
    BigInteger.prototype.modInt = bnpModInt;
    BigInteger.prototype.millerRabin = bnpMillerRabin;

    // public
    BigInteger.prototype.clone = bnClone;
    BigInteger.prototype.intValue = bnIntValue;
    BigInteger.prototype.byteValue = bnByteValue;
    BigInteger.prototype.shortValue = bnShortValue;
    BigInteger.prototype.signum = bnSigNum;
    BigInteger.prototype.toByteArray = bnToByteArray;
    BigInteger.prototype.equals = bnEquals;
    BigInteger.prototype.min = bnMin;
    BigInteger.prototype.max = bnMax;
    BigInteger.prototype.and = bnAnd;
    BigInteger.prototype.or = bnOr;
    BigInteger.prototype.xor = bnXor;
    BigInteger.prototype.andNot = bnAndNot;
    BigInteger.prototype.not = bnNot;
    BigInteger.prototype.shiftLeft = bnShiftLeft;
    BigInteger.prototype.shiftRight = bnShiftRight;
    BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
    BigInteger.prototype.bitCount = bnBitCount;
    BigInteger.prototype.testBit = bnTestBit;
    BigInteger.prototype.setBit = bnSetBit;
    BigInteger.prototype.clearBit = bnClearBit;
    BigInteger.prototype.flipBit = bnFlipBit;
    BigInteger.prototype.add = bnAdd;
    BigInteger.prototype.subtract = bnSubtract;
    BigInteger.prototype.multiply = bnMultiply;
    BigInteger.prototype.divide = bnDivide;
    BigInteger.prototype.remainder = bnRemainder;
    BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
    BigInteger.prototype.modPow = bnModPow;
    BigInteger.prototype.modInverse = bnModInverse;
    BigInteger.prototype.pow = bnPow;
    BigInteger.prototype.gcd = bnGCD;
    BigInteger.prototype.isProbablePrime = bnIsProbablePrime;

    // JSBN-specific extension
    BigInteger.prototype.square = bnSquare;

    // Expose the Barrett function
    BigInteger.prototype.Barrett = Barrett

    // BigInteger interfaces not implemented in jsbn:

    // BigInteger(int signum, byte[] magnitude)
    // double doubleValue()
    // float floatValue()
    // int hashCode()
    // long longValue()
    // static BigInteger valueOf(long val)

    // Random number generator - requires a PRNG backend, e.g. prng4.js

    // For best results, put code like
    // <body onClick='rng_seed_time();' onKeyPress='rng_seed_time();'>
    // in your main HTML document.

    var rng_state;
    var rng_pool;
    var rng_pptr;

    // Mix in a 32-bit integer into the pool
    function rng_seed_int(x) {
      rng_pool[rng_pptr++] ^= x & 255;
      rng_pool[rng_pptr++] ^= (x >> 8) & 255;
      rng_pool[rng_pptr++] ^= (x >> 16) & 255;
      rng_pool[rng_pptr++] ^= (x >> 24) & 255;
      if(rng_pptr >= rng_psize) rng_pptr -= rng_psize;
    }

    // Mix in the current time (w/milliseconds) into the pool
    function rng_seed_time() {
      rng_seed_int(new Date().getTime());
    }

    // Initialize the pool with junk if needed.
    if(rng_pool == null) {
      rng_pool = new Array();
      rng_pptr = 0;
      var t;
      if(typeof window !== "undefined" && window.crypto) {
        if (window.crypto.getRandomValues) {
          // Use webcrypto if available
          var ua = new Uint8Array(32);
          window.crypto.getRandomValues(ua);
          for(t = 0; t < 32; ++t)
            rng_pool[rng_pptr++] = ua[t];
        }
        else if(navigator.appName == "Netscape" && navigator.appVersion < "5") {
          // Extract entropy (256 bits) from NS4 RNG if available
          var z = window.crypto.random(32);
          for(t = 0; t < z.length; ++t)
            rng_pool[rng_pptr++] = z.charCodeAt(t) & 255;
        }
      }
      while(rng_pptr < rng_psize) {  // extract some randomness from Math.random()
        t = Math.floor(65536 * Math.random());
        rng_pool[rng_pptr++] = t >>> 8;
        rng_pool[rng_pptr++] = t & 255;
      }
      rng_pptr = 0;
      rng_seed_time();
      //rng_seed_int(window.screenX);
      //rng_seed_int(window.screenY);
    }

    function rng_get_byte() {
      if(rng_state == null) {
        rng_seed_time();
        rng_state = prng_newstate();
        rng_state.init(rng_pool);
        for(rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr)
          rng_pool[rng_pptr] = 0;
        rng_pptr = 0;
        //rng_pool = null;
      }
      // TODO: allow reseeding after first request
      return rng_state.next();
    }

    function rng_get_bytes(ba) {
      var i;
      for(i = 0; i < ba.length; ++i) ba[i] = rng_get_byte();
    }

    function SecureRandom() {}

    SecureRandom.prototype.nextBytes = rng_get_bytes;

    // prng4.js - uses Arcfour as a PRNG

    function Arcfour() {
      this.i = 0;
      this.j = 0;
      this.S = new Array();
    }

    // Initialize arcfour context from key, an array of ints, each from [0..255]
    function ARC4init(key) {
      var i, j, t;
      for(i = 0; i < 256; ++i)
        this.S[i] = i;
      j = 0;
      for(i = 0; i < 256; ++i) {
        j = (j + this.S[i] + key[i % key.length]) & 255;
        t = this.S[i];
        this.S[i] = this.S[j];
        this.S[j] = t;
      }
      this.i = 0;
      this.j = 0;
    }

    function ARC4next() {
      var t;
      this.i = (this.i + 1) & 255;
      this.j = (this.j + this.S[this.i]) & 255;
      t = this.S[this.i];
      this.S[this.i] = this.S[this.j];
      this.S[this.j] = t;
      return this.S[(t + this.S[this.i]) & 255];
    }

    Arcfour.prototype.init = ARC4init;
    Arcfour.prototype.next = ARC4next;

    // Plug in your RNG constructor here
    function prng_newstate() {
      return new Arcfour();
    }

    // Pool size must be a multiple of 4 and greater than 32.
    // An array of bytes the size of the pool will be passed to init()
    var rng_psize = 256;

    if (typeof exports !== 'undefined') {
        exports = module.exports = {
            default: BigInteger,
            BigInteger: BigInteger,
            SecureRandom: SecureRandom,
        };
    } else {
        this.jsbn = {
          BigInteger: BigInteger,
          SecureRandom: SecureRandom
        };
    }

}).call(this);

/*********/
(function (factory) {
    "use strict";

    var root = (typeof self === "object" && self.self === self && self) ||
                (typeof global === "object" && global.global === global && global);


    if (typeof exports !== "undefined") {
        var BigInteger = require("jsbn").BigInteger;
        factory(root, exports, BigInteger);
    } else {
        var BigInt = root.BigInteger ? root.BigInteger : root.jsbn.BigInteger;
        root.Money = factory(root, {}, BigInt);
    }
}(function (root, Money, BigInteger) {
    "use strict";

    var Currency = function (code) {
            this.code = code;
        },

        separateThousands = function (inStr, withStr) {
            var sign = "",
                src = inStr,
                ret = "",
                appendix;

            if (inStr[0] === "-") {
                sign = "-";
                src = src.substr(1);
            }


            while (src.length > 0) {
                if (ret.length > 0) {
                    ret = withStr + ret;
                }

                if (src.length <= 3) {
                    ret = src + ret;
                    break;
                }

                appendix = src.substr(src.length - 3, 3);
                ret = appendix + ret;
                src = src.substr(0, src.length - 3);
            }

            return sign + ret;
        },

        integerValue = function (amount) {
            return (/^(\-?\d+)\.\d\d$/).exec(amount)[1];
        },

        isString = function (obj) {
            return Object.prototype.toString.call(obj) === "[object String]";
        },

        round = function (amount) {
            var fraction = parseInt(amount.substr(-2), 10),
                wholeAmount = integerValue(amount) + ".00";

            return (
                fraction < 50 ?
                    wholeAmount :
                    Money.add(wholeAmount, "1.00")
            );
        };

    Currency.prototype.format = function (amount) {
        switch (this.code) {
        case "JPY":
            return separateThousands(integerValue(amount), ",");

        case "EUR":
        case "GBP":
            return separateThousands(integerValue(amount), ".") + "," + amount.substr(-2);

        case "CHF":
        case "USD":
            return separateThousands(integerValue(amount), ",") + "." + amount.substr(-2);

        case "SEK":
        case "LTL":
        case "PLN":
        case "SKK":
        case "UAH":
            return separateThousands(integerValue(amount), " ") + "," + amount.substr(-2);

        default:
            return amount;
        }
    };

    Money.amountToCents = function (amount) {
        return amount.replace(".", "").replace(/^0+/, "");
    };

    Money.centsToAmount = function (cents) {
        var sign,
            abs;

        if (!isString(cents)) {
            return undefined;
        }

        sign = (cents[0] === "-" ? "-" : "");
        abs = (sign === "-" ? cents.substr(1) : cents);

        while (abs.length < 3) {
            abs = ["0", abs].join("");
        }

        return sign + abs.substr(0, abs.length - 2) + "." + abs.substr(-2);
    };

    Money.floatToAmount = function (f) {
        return ("" + (Math.round(f * 100.0) / 100.0))
            .replace(/^-(\d+)$/, "-$1.00")              //-xx
            .replace(/^(\d+)$/, "$1.00")                //xx
            .replace(/^-(\d+)\.(\d)$/, "-$1.$20")       //-xx.xx
            .replace(/^(\d+)\.(\d)$/, "$1.$20");        //xx.xx
    };

    Money.integralPart = function (amount) {
        return integerValue(amount);
    };

    Money.format = function (currency, amount) {
        return new Currency(currency).format(amount);
    };

    Money.add = function (a, b) {
        return Money.centsToAmount(
            new BigInteger(
                Money.amountToCents(a)
            ).add(
                new BigInteger(Money.amountToCents(b))
            ).toString()
        );
    };

    Money.subtract = function (a, b) {
        return Money.centsToAmount(
            new BigInteger(
                Money.amountToCents(a)
            ).subtract(
                new BigInteger(Money.amountToCents(b))
            ).toString()
        );
    };

    Money.mul = function (a, b) {
        var hundredthsOfCents = new BigInteger(
                Money.amountToCents(a)
            ).multiply(
                new BigInteger(Money.amountToCents(b))
            ),

            remainder = parseInt(hundredthsOfCents.toString().substr(-2), 10);

        return Money.centsToAmount(
            hundredthsOfCents.divide(
                new BigInteger("100")
            ).add(
                new BigInteger(remainder >= 50 ? "1" : "0")
            ).toString()
        );
    };

    Money.div = function (a, b) {
        var hundredthsOfCents = new BigInteger(
                Money.amountToCents(a)
            ).multiply(
                new BigInteger("10000")
            ).divide(
                new BigInteger(Money.amountToCents(b))
            ),

            remainder = parseInt(hundredthsOfCents.toString().substr(-2), 10);

        return Money.centsToAmount(
            hundredthsOfCents.divide(
                new BigInteger("100")
            ).add(
                new BigInteger(remainder >= 50 ? "1" : "0")
            ).toString()
        );
    };

    Money.percent = function (value, percent) {
        var p = new BigInteger(
                Money.amountToCents(value)
            ).multiply(
                new BigInteger(Money.amountToCents(percent))
            ),

            q = p.divide(new BigInteger("10000")),
            r = p.mod(new BigInteger("10000"));

        return Money.centsToAmount(
            (r.compareTo(new BigInteger("4999")) > 0 ? q.add(new BigInteger("1")) : q).toString()
        );
    };

    Money.roundUpTo5Cents = function (amount) {
        var lastDigit = parseInt(amount.substr(-1), 10),
            additon = "0.00";

        if ((lastDigit % 5) !== 0) {
            additon = "0.0" + (5 - (lastDigit % 5));
        }

        return Money.add(amount, additon);
    };

    Money.roundTo5Cents = function (amount) {
        return Money.div(
            round(Money.mul(amount, "20.00")),
            "20.00"
        );
    };

    Money.cmp = function (a, b) {
        return new BigInteger(a.replace(".", "")).compareTo(new BigInteger(b.replace(".", "")));
    };

    Money.isEqual = function (a, b) {
        return Money.cmp(a, b) === 0;
    };

    Money.isZero = function (a) {
        return Money.isEqual(a, "0.00");
    };

    Money.isNegative = function (a) {
        return Money.cmp(a, "0.00") < 0;
    };

    Money.isPositive = function (a) {
        return Money.cmp(a, "0.00") > 0;
    };

    return Money;
}));

/*********/
!function(){"use strict";if("undefined"!=typeof window){var t=window.navigator.userAgent.match(/Edge\/(\d{2})\./),e=t?parseInt(t[1],10):null,n=!!e&&(16<=e&&e<=18);if(!("objectFit"in document.documentElement.style!=!1)||n){var o=function(t,e,i){var n,o,l,a,d;if((i=i.split(" ")).length<2&&(i[1]=i[0]),"x"===t)n=i[0],o=i[1],l="left",a="right",d=e.clientWidth;else{if("y"!==t)return;n=i[1],o=i[0],l="top",a="bottom",d=e.clientHeight}if(n!==l&&o!==l){if(n!==a&&o!==a)return"center"===n||"50%"===n?(e.style[l]="50%",void(e.style["margin-"+l]=d/-2+"px")):void(0<=n.indexOf("%")?(n=parseInt(n,10))<50?(e.style[l]=n+"%",e.style["margin-"+l]=d*(n/-100)+"px"):(n=100-n,e.style[a]=n+"%",e.style["margin-"+a]=d*(n/-100)+"px"):e.style[l]=n);e.style[a]="0"}else e.style[l]="0"},l=function(t){var e=t.dataset?t.dataset.objectFit:t.getAttribute("data-object-fit"),i=t.dataset?t.dataset.objectPosition:t.getAttribute("data-object-position");e=e||"cover",i=i||"50% 50%";var n=t.parentNode;return function(t){var e=window.getComputedStyle(t,null),i=e.getPropertyValue("position"),n=e.getPropertyValue("overflow"),o=e.getPropertyValue("display");i&&"static"!==i||(t.style.position="relative"),"hidden"!==n&&(t.style.overflow="hidden"),o&&"inline"!==o||(t.style.display="block"),0===t.clientHeight&&(t.style.height="100%"),-1===t.className.indexOf("object-fit-polyfill")&&(t.className=t.className+" object-fit-polyfill")}(n),function(t){var e=window.getComputedStyle(t,null),i={"max-width":"none","max-height":"none","min-width":"0px","min-height":"0px",top:"auto",right:"auto",bottom:"auto",left:"auto","margin-top":"0px","margin-right":"0px","margin-bottom":"0px","margin-left":"0px"};for(var n in i)e.getPropertyValue(n)!==i[n]&&(t.style[n]=i[n])}(t),t.style.position="absolute",t.style.width="auto",t.style.height="auto","scale-down"===e&&(e=t.clientWidth<n.clientWidth&&t.clientHeight<n.clientHeight?"none":"contain"),"none"===e?(o("x",t,i),void o("y",t,i)):"fill"===e?(t.style.width="100%",t.style.height="100%",o("x",t,i),void o("y",t,i)):(t.style.height="100%",void("cover"===e&&t.clientWidth>n.clientWidth||"contain"===e&&t.clientWidth<n.clientWidth?(t.style.top="0",t.style.marginTop="0",o("x",t,i)):(t.style.width="100%",t.style.height="auto",t.style.left="0",t.style.marginLeft="0",o("y",t,i))))},i=function(t){if(void 0===t||t instanceof Event)t=document.querySelectorAll("[data-object-fit]");else if(t&&t.nodeName)t=[t];else{if("object"!=typeof t||!t.length||!t[0].nodeName)return!1;t=t}for(var e=0;e<t.length;e++)if(t[e].nodeName){var i=t[e].nodeName.toLowerCase();if("img"===i){if(n)continue;t[e].complete?l(t[e]):t[e].addEventListener("load",function(){l(this)})}else"video"===i?0<t[e].readyState?l(t[e]):t[e].addEventListener("loadedmetadata",function(){l(this)}):l(t[e])}return!0};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",i):i(),window.addEventListener("resize",i),window.objectFitPolyfill=i}else window.objectFitPolyfill=function(){return!1}}}();
/*********/
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */
(function() {
'use strict';

// Exit early if we're not running in a browser.
if (typeof window !== 'object') {
  return;
}

// Exit early if all IntersectionObserver and IntersectionObserverEntry
// features are natively supported.
if ('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

  // Minimal polyfill for Edge 15's lack of `isIntersecting`
  // See: https://github.com/w3c/IntersectionObserver/issues/211
  if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
    Object.defineProperty(window.IntersectionObserverEntry.prototype,
      'isIntersecting', {
      get: function () {
        return this.intersectionRatio > 0;
      }
    });
  }
  return;
}


/**
 * A local reference to the document.
 */
var document = window.document;


/**
 * An IntersectionObserver registry. This registry exists to hold a strong
 * reference to IntersectionObserver instances currently observing a target
 * element. Without this registry, instances without another reference may be
 * garbage collected.
 */
var registry = [];


/**
 * Creates the global IntersectionObserverEntry constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
 * @param {Object} entry A dictionary of instance properties.
 * @constructor
 */
function IntersectionObserverEntry(entry) {
  this.time = entry.time;
  this.target = entry.target;
  this.rootBounds = entry.rootBounds;
  this.boundingClientRect = entry.boundingClientRect;
  this.intersectionRect = entry.intersectionRect || getEmptyRect();
  this.isIntersecting = !!entry.intersectionRect;

  // Calculates the intersection ratio.
  var targetRect = this.boundingClientRect;
  var targetArea = targetRect.width * targetRect.height;
  var intersectionRect = this.intersectionRect;
  var intersectionArea = intersectionRect.width * intersectionRect.height;

  // Sets intersection ratio.
  if (targetArea) {
    // Round the intersection ratio to avoid floating point math issues:
    // https://github.com/w3c/IntersectionObserver/issues/324
    this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
  } else {
    // If area is zero and is intersecting, sets to 1, otherwise to 0
    this.intersectionRatio = this.isIntersecting ? 1 : 0;
  }
}


/**
 * Creates the global IntersectionObserver constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
 * @param {Function} callback The function to be invoked after intersection
 *     changes have queued. The function is not invoked if the queue has
 *     been emptied by calling the `takeRecords` method.
 * @param {Object=} opt_options Optional configuration options.
 * @constructor
 */
function IntersectionObserver(callback, opt_options) {

  var options = opt_options || {};

  if (typeof callback != 'function') {
    throw new Error('callback must be a function');
  }

  if (options.root && options.root.nodeType != 1) {
    throw new Error('root must be an Element');
  }

  // Binds and throttles `this._checkForIntersections`.
  this._checkForIntersections = throttle(
      this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);

  // Private properties.
  this._callback = callback;
  this._observationTargets = [];
  this._queuedEntries = [];
  this._rootMarginValues = this._parseRootMargin(options.rootMargin);

  // Public properties.
  this.thresholds = this._initThresholds(options.threshold);
  this.root = options.root || null;
  this.rootMargin = this._rootMarginValues.map(function(margin) {
    return margin.value + margin.unit;
  }).join(' ');
}


/**
 * The minimum interval within which the document will be checked for
 * intersection changes.
 */
IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;


/**
 * The frequency in which the polyfill polls for intersection changes.
 * this can be updated on a per instance basis and must be set prior to
 * calling `observe` on the first target.
 */
IntersectionObserver.prototype.POLL_INTERVAL = null;

/**
 * Use a mutation observer on the root element
 * to detect intersection changes.
 */
IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;


/**
 * Starts observing a target element for intersection changes based on
 * the thresholds values.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.observe = function(target) {
  var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
    return item.element == target;
  });

  if (isTargetAlreadyObserved) {
    return;
  }

  if (!(target && target.nodeType == 1)) {
    throw new Error('target must be an Element');
  }

  this._registerInstance();
  this._observationTargets.push({element: target, entry: null});
  this._monitorIntersections();
  this._checkForIntersections();
};


/**
 * Stops observing a target element for intersection changes.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.unobserve = function(target) {
  this._observationTargets =
      this._observationTargets.filter(function(item) {

    return item.element != target;
  });
  if (!this._observationTargets.length) {
    this._unmonitorIntersections();
    this._unregisterInstance();
  }
};


/**
 * Stops observing all target elements for intersection changes.
 */
IntersectionObserver.prototype.disconnect = function() {
  this._observationTargets = [];
  this._unmonitorIntersections();
  this._unregisterInstance();
};


/**
 * Returns any queue entries that have not yet been reported to the
 * callback and clears the queue. This can be used in conjunction with the
 * callback to obtain the absolute most up-to-date intersection information.
 * @return {Array} The currently queued entries.
 */
IntersectionObserver.prototype.takeRecords = function() {
  var records = this._queuedEntries.slice();
  this._queuedEntries = [];
  return records;
};


/**
 * Accepts the threshold value from the user configuration object and
 * returns a sorted array of unique threshold values. If a value is not
 * between 0 and 1 and error is thrown.
 * @private
 * @param {Array|number=} opt_threshold An optional threshold value or
 *     a list of threshold values, defaulting to [0].
 * @return {Array} A sorted list of unique and valid threshold values.
 */
IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
  var threshold = opt_threshold || [0];
  if (!Array.isArray(threshold)) threshold = [threshold];

  return threshold.sort().filter(function(t, i, a) {
    if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
      throw new Error('threshold must be a number between 0 and 1 inclusively');
    }
    return t !== a[i - 1];
  });
};


/**
 * Accepts the rootMargin value from the user configuration object
 * and returns an array of the four margin values as an object containing
 * the value and unit properties. If any of the values are not properly
 * formatted or use a unit other than px or %, and error is thrown.
 * @private
 * @param {string=} opt_rootMargin An optional rootMargin value,
 *     defaulting to '0px'.
 * @return {Array<Object>} An array of margin objects with the keys
 *     value and unit.
 */
IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
  var marginString = opt_rootMargin || '0px';
  var margins = marginString.split(/\s+/).map(function(margin) {
    var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
    if (!parts) {
      throw new Error('rootMargin must be specified in pixels or percent');
    }
    return {value: parseFloat(parts[1]), unit: parts[2]};
  });

  // Handles shorthand.
  margins[1] = margins[1] || margins[0];
  margins[2] = margins[2] || margins[0];
  margins[3] = margins[3] || margins[1];

  return margins;
};


/**
 * Starts polling for intersection changes if the polling is not already
 * happening, and if the page's visibility state is visible.
 * @private
 */
IntersectionObserver.prototype._monitorIntersections = function() {
  if (!this._monitoringIntersections) {
    this._monitoringIntersections = true;

    // If a poll interval is set, use polling instead of listening to
    // resize and scroll events or DOM mutations.
    if (this.POLL_INTERVAL) {
      this._monitoringInterval = setInterval(
          this._checkForIntersections, this.POLL_INTERVAL);
    }
    else {
      addEvent(window, 'resize', this._checkForIntersections, true);
      addEvent(document, 'scroll', this._checkForIntersections, true);

      if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
        this._domObserver = new MutationObserver(this._checkForIntersections);
        this._domObserver.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      }
    }
  }
};


/**
 * Stops polling for intersection changes.
 * @private
 */
IntersectionObserver.prototype._unmonitorIntersections = function() {
  if (this._monitoringIntersections) {
    this._monitoringIntersections = false;

    clearInterval(this._monitoringInterval);
    this._monitoringInterval = null;

    removeEvent(window, 'resize', this._checkForIntersections, true);
    removeEvent(document, 'scroll', this._checkForIntersections, true);

    if (this._domObserver) {
      this._domObserver.disconnect();
      this._domObserver = null;
    }
  }
};


/**
 * Scans each observation target for intersection changes and adds them
 * to the internal entries queue. If new entries are found, it
 * schedules the callback to be invoked.
 * @private
 */
IntersectionObserver.prototype._checkForIntersections = function() {
  var rootIsInDom = this._rootIsInDom();
  var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

  this._observationTargets.forEach(function(item) {
    var target = item.element;
    var targetRect = getBoundingClientRect(target);
    var rootContainsTarget = this._rootContainsTarget(target);
    var oldEntry = item.entry;
    var intersectionRect = rootIsInDom && rootContainsTarget &&
        this._computeTargetAndRootIntersection(target, rootRect);

    var newEntry = item.entry = new IntersectionObserverEntry({
      time: now(),
      target: target,
      boundingClientRect: targetRect,
      rootBounds: rootRect,
      intersectionRect: intersectionRect
    });

    if (!oldEntry) {
      this._queuedEntries.push(newEntry);
    } else if (rootIsInDom && rootContainsTarget) {
      // If the new entry intersection ratio has crossed any of the
      // thresholds, add a new entry.
      if (this._hasCrossedThreshold(oldEntry, newEntry)) {
        this._queuedEntries.push(newEntry);
      }
    } else {
      // If the root is not in the DOM or target is not contained within
      // root but the previous entry for this target had an intersection,
      // add a new record indicating removal.
      if (oldEntry && oldEntry.isIntersecting) {
        this._queuedEntries.push(newEntry);
      }
    }
  }, this);

  if (this._queuedEntries.length) {
    this._callback(this.takeRecords(), this);
  }
};


/**
 * Accepts a target and root rect computes the intersection between then
 * following the algorithm in the spec.
 * TODO(philipwalton): at this time clip-path is not considered.
 * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
 * @param {Element} target The target DOM element
 * @param {Object} rootRect The bounding rect of the root after being
 *     expanded by the rootMargin value.
 * @return {?Object} The final intersection rect object or undefined if no
 *     intersection is found.
 * @private
 */
IntersectionObserver.prototype._computeTargetAndRootIntersection =
    function(target, rootRect) {

  // If the element isn't displayed, an intersection can't happen.
  if (window.getComputedStyle(target).display == 'none') return;

  var targetRect = getBoundingClientRect(target);
  var intersectionRect = targetRect;
  var parent = getParentNode(target);
  var atRoot = false;

  while (!atRoot) {
    var parentRect = null;
    var parentComputedStyle = parent.nodeType == 1 ?
        window.getComputedStyle(parent) : {};

    // If the parent isn't displayed, an intersection can't happen.
    if (parentComputedStyle.display == 'none') return;

    if (parent == this.root || parent == document) {
      atRoot = true;
      parentRect = rootRect;
    } else {
      // If the element has a non-visible overflow, and it's not the <body>
      // or <html> element, update the intersection rect.
      // Note: <body> and <html> cannot be clipped to a rect that's not also
      // the document rect, so no need to compute a new intersection.
      if (parent != document.body &&
          parent != document.documentElement &&
          parentComputedStyle.overflow != 'visible') {
        parentRect = getBoundingClientRect(parent);
      }
    }

    // If either of the above conditionals set a new parentRect,
    // calculate new intersection data.
    if (parentRect) {
      intersectionRect = computeRectIntersection(parentRect, intersectionRect);

      if (!intersectionRect) break;
    }
    parent = getParentNode(parent);
  }
  return intersectionRect;
};


/**
 * Returns the root rect after being expanded by the rootMargin value.
 * @return {Object} The expanded root rect.
 * @private
 */
IntersectionObserver.prototype._getRootRect = function() {
  var rootRect;
  if (this.root) {
    rootRect = getBoundingClientRect(this.root);
  } else {
    // Use <html>/<body> instead of window since scroll bars affect size.
    var html = document.documentElement;
    var body = document.body;
    rootRect = {
      top: 0,
      left: 0,
      right: html.clientWidth || body.clientWidth,
      width: html.clientWidth || body.clientWidth,
      bottom: html.clientHeight || body.clientHeight,
      height: html.clientHeight || body.clientHeight
    };
  }
  return this._expandRectByRootMargin(rootRect);
};


/**
 * Accepts a rect and expands it by the rootMargin value.
 * @param {Object} rect The rect object to expand.
 * @return {Object} The expanded rect.
 * @private
 */
IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
  var margins = this._rootMarginValues.map(function(margin, i) {
    return margin.unit == 'px' ? margin.value :
        margin.value * (i % 2 ? rect.width : rect.height) / 100;
  });
  var newRect = {
    top: rect.top - margins[0],
    right: rect.right + margins[1],
    bottom: rect.bottom + margins[2],
    left: rect.left - margins[3]
  };
  newRect.width = newRect.right - newRect.left;
  newRect.height = newRect.bottom - newRect.top;

  return newRect;
};


/**
 * Accepts an old and new entry and returns true if at least one of the
 * threshold values has been crossed.
 * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
 *    particular target element or null if no previous entry exists.
 * @param {IntersectionObserverEntry} newEntry The current entry for a
 *    particular target element.
 * @return {boolean} Returns true if a any threshold has been crossed.
 * @private
 */
IntersectionObserver.prototype._hasCrossedThreshold =
    function(oldEntry, newEntry) {

  // To make comparing easier, an entry that has a ratio of 0
  // but does not actually intersect is given a value of -1
  var oldRatio = oldEntry && oldEntry.isIntersecting ?
      oldEntry.intersectionRatio || 0 : -1;
  var newRatio = newEntry.isIntersecting ?
      newEntry.intersectionRatio || 0 : -1;

  // Ignore unchanged ratios
  if (oldRatio === newRatio) return;

  for (var i = 0; i < this.thresholds.length; i++) {
    var threshold = this.thresholds[i];

    // Return true if an entry matches a threshold or if the new ratio
    // and the old ratio are on the opposite sides of a threshold.
    if (threshold == oldRatio || threshold == newRatio ||
        threshold < oldRatio !== threshold < newRatio) {
      return true;
    }
  }
};


/**
 * Returns whether or not the root element is an element and is in the DOM.
 * @return {boolean} True if the root element is an element and is in the DOM.
 * @private
 */
IntersectionObserver.prototype._rootIsInDom = function() {
  return !this.root || containsDeep(document, this.root);
};


/**
 * Returns whether or not the target element is a child of root.
 * @param {Element} target The target element to check.
 * @return {boolean} True if the target element is a child of root.
 * @private
 */
IntersectionObserver.prototype._rootContainsTarget = function(target) {
  return containsDeep(this.root || document, target);
};


/**
 * Adds the instance to the global IntersectionObserver registry if it isn't
 * already present.
 * @private
 */
IntersectionObserver.prototype._registerInstance = function() {
  if (registry.indexOf(this) < 0) {
    registry.push(this);
  }
};


/**
 * Removes the instance from the global IntersectionObserver registry.
 * @private
 */
IntersectionObserver.prototype._unregisterInstance = function() {
  var index = registry.indexOf(this);
  if (index != -1) registry.splice(index, 1);
};


/**
 * Returns the result of the performance.now() method or null in browsers
 * that don't support the API.
 * @return {number} The elapsed time since the page was requested.
 */
function now() {
  return window.performance && performance.now && performance.now();
}


/**
 * Throttles a function and delays its execution, so it's only called at most
 * once within a given time period.
 * @param {Function} fn The function to throttle.
 * @param {number} timeout The amount of time that must pass before the
 *     function can be called again.
 * @return {Function} The throttled function.
 */
function throttle(fn, timeout) {
  var timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(function() {
        fn();
        timer = null;
      }, timeout);
    }
  };
}


/**
 * Adds an event handler to a DOM node ensuring cross-browser compatibility.
 * @param {Node} node The DOM node to add the event handler to.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to add.
 * @param {boolean} opt_useCapture Optionally adds the even to the capture
 *     phase. Note: this only works in modern browsers.
 */
function addEvent(node, event, fn, opt_useCapture) {
  if (typeof node.addEventListener == 'function') {
    node.addEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.attachEvent == 'function') {
    node.attachEvent('on' + event, fn);
  }
}


/**
 * Removes a previously added event handler from a DOM node.
 * @param {Node} node The DOM node to remove the event handler from.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to remove.
 * @param {boolean} opt_useCapture If the event handler was added with this
 *     flag set to true, it should be set to true here in order to remove it.
 */
function removeEvent(node, event, fn, opt_useCapture) {
  if (typeof node.removeEventListener == 'function') {
    node.removeEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.detatchEvent == 'function') {
    node.detatchEvent('on' + event, fn);
  }
}


/**
 * Returns the intersection between two rect objects.
 * @param {Object} rect1 The first rect.
 * @param {Object} rect2 The second rect.
 * @return {?Object} The intersection rect or undefined if no intersection
 *     is found.
 */
function computeRectIntersection(rect1, rect2) {
  var top = Math.max(rect1.top, rect2.top);
  var bottom = Math.min(rect1.bottom, rect2.bottom);
  var left = Math.max(rect1.left, rect2.left);
  var right = Math.min(rect1.right, rect2.right);
  var width = right - left;
  var height = bottom - top;

  return (width >= 0 && height >= 0) && {
    top: top,
    bottom: bottom,
    left: left,
    right: right,
    width: width,
    height: height
  };
}


/**
 * Shims the native getBoundingClientRect for compatibility with older IE.
 * @param {Element} el The element whose bounding rect to get.
 * @return {Object} The (possibly shimmed) rect of the element.
 */
function getBoundingClientRect(el) {
  var rect;

  try {
    rect = el.getBoundingClientRect();
  } catch (err) {
    // Ignore Windows 7 IE11 "Unspecified error"
    // https://github.com/w3c/IntersectionObserver/pull/205
  }

  if (!rect) return getEmptyRect();

  // Older IE
  if (!(rect.width && rect.height)) {
    rect = {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };
  }
  return rect;
}


/**
 * Returns an empty rect object. An empty rect is returned when an element
 * is not in the DOM.
 * @return {Object} The empty rect.
 */
function getEmptyRect() {
  return {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0
  };
}

/**
 * Checks to see if a parent element contains a child element (including inside
 * shadow DOM).
 * @param {Node} parent The parent element.
 * @param {Node} child The child element.
 * @return {boolean} True if the parent node contains the child node.
 */
function containsDeep(parent, child) {
  var node = child;
  while (node) {
    if (node == parent) return true;

    node = getParentNode(node);
  }
  return false;
}


/**
 * Gets the parent node of an element or its host element if the parent node
 * is a shadow root.
 * @param {Node} node The node whose parent to get.
 * @return {Node|null} The parent node or null if no parent exists.
 */
function getParentNode(node) {
  var parent = node.parentNode;

  if (parent && parent.nodeType == 11 && parent.host) {
    // If the parent is a shadow root, return the host element.
    return parent.host;
  }

  if (parent && parent.assignedSlot) {
    // If the parent is distributed in a <slot>, return the parent of a slot.
    return parent.assignedSlot.parentNode;
  }

  return parent;
}


// Exposes the constructors globally.
window.IntersectionObserver = IntersectionObserver;
window.IntersectionObserverEntry = IntersectionObserverEntry;

}());

/*********/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define(t):t()}(0,function(){"use strict";function e(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){return t.reject(n)})})}function t(e){return new this(function(t,n){function o(e,n){if(n&&("object"==typeof n||"function"==typeof n)){var f=n.then;if("function"==typeof f)return void f.call(n,function(t){o(e,t)},function(n){r[e]={status:"rejected",reason:n},0==--i&&t(r)})}r[e]={status:"fulfilled",value:n},0==--i&&t(r)}if(!e||"undefined"==typeof e.length)return n(new TypeError(typeof e+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);for(var i=r.length,f=0;r.length>f;f++)o(f,r[f])})}function n(e){return!(!e||"undefined"==typeof e.length)}function o(){}function r(e){if(!(this instanceof r))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=undefined,this._deferreds=[],l(e,this)}function i(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,r._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var o;try{o=n(e._value)}catch(r){return void u(t.promise,r)}f(t.promise,o)}else(1===e._state?f:u)(t.promise,e._value)})):e._deferreds.push(t)}function f(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof r)return e._state=3,e._value=t,void c(e);if("function"==typeof n)return void l(function(e,t){return function(){e.apply(t,arguments)}}(n,t),e)}e._state=1,e._value=t,c(e)}catch(o){u(e,o)}}function u(e,t){e._state=2,e._value=t,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&r._immediateFn(function(){e._handled||r._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;n>t;t++)i(e,e._deferreds[t]);e._deferreds=null}function l(e,t){var n=!1;try{e(function(e){n||(n=!0,f(t,e))},function(e){n||(n=!0,u(t,e))})}catch(o){if(n)return;n=!0,u(t,o)}}var a=setTimeout,s="undefined"!=typeof setImmediate?setImmediate:null;r.prototype["catch"]=function(e){return this.then(null,e)},r.prototype.then=function(e,t){var n=new this.constructor(o);return i(this,new function(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}(e,t,n)),n},r.prototype["finally"]=e,r.all=function(e){return new r(function(t,o){function r(e,n){try{if(n&&("object"==typeof n||"function"==typeof n)){var u=n.then;if("function"==typeof u)return void u.call(n,function(t){r(e,t)},o)}i[e]=n,0==--f&&t(i)}catch(c){o(c)}}if(!n(e))return o(new TypeError("Promise.all accepts an array"));var i=Array.prototype.slice.call(e);if(0===i.length)return t([]);for(var f=i.length,u=0;i.length>u;u++)r(u,i[u])})},r.allSettled=t,r.resolve=function(e){return e&&"object"==typeof e&&e.constructor===r?e:new r(function(t){t(e)})},r.reject=function(e){return new r(function(t,n){n(e)})},r.race=function(e){return new r(function(t,o){if(!n(e))return o(new TypeError("Promise.race accepts an array"));for(var i=0,f=e.length;f>i;i++)r.resolve(e[i]).then(t,o)})},r._immediateFn="function"==typeof s&&function(e){s(e)}||function(e){a(e,0)},r._unhandledRejectionFn=function(e){void 0!==console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var d=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw Error("unable to locate global object")}();"function"!=typeof d.Promise?d.Promise=r:(d.Promise.prototype["finally"]||(d.Promise.prototype["finally"]=e),d.Promise.allSettled||(d.Promise.allSettled=t))});

/*********/
/*!
 * Platform.js v1.3.6
 * Copyright 2014-2020 Benjamin Tan
 * Copyright 2011-2013 John-David Dalton
 * Available under MIT license
 */
;(function() {
  'use strict';

  /** Used to determine if values are of the language type `Object`. */
  var objectTypes = {
    'function': true,
    'object': true
  };

  /** Used as a reference to the global object. */
  var root = (objectTypes[typeof window] && window) || this;

  /** Backup possible global object. */
  var oldRoot = root;

  /** Detect free variable `exports`. */
  var freeExports = objectTypes[typeof exports] && exports;

  /** Detect free variable `module`. */
  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

  /** Detect free variable `global` from Node.js or Browserified code and use it as `root`. */
  var freeGlobal = freeExports && freeModule && typeof global == 'object' && global;
  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
    root = freeGlobal;
  }

  /**
   * Used as the maximum length of an array-like object.
   * See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
   * for more details.
   */
  var maxSafeInteger = Math.pow(2, 53) - 1;

  /** Regular expression to detect Opera. */
  var reOpera = /\bOpera/;

  /** Possible global object. */
  var thisBinding = this;

  /** Used for native method references. */
  var objectProto = Object.prototype;

  /** Used to check for own properties of an object. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Used to resolve the internal `[[Class]]` of values. */
  var toString = objectProto.toString;

  /*--------------------------------------------------------------------------*/

  /**
   * Capitalizes a string value.
   *
   * @private
   * @param {string} string The string to capitalize.
   * @returns {string} The capitalized string.
   */
  function capitalize(string) {
    string = String(string);
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
   * A utility function to clean up the OS name.
   *
   * @private
   * @param {string} os The OS name to clean up.
   * @param {string} [pattern] A `RegExp` pattern matching the OS name.
   * @param {string} [label] A label for the OS.
   */
  function cleanupOS(os, pattern, label) {
    // Platform tokens are defined at:
    // http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
    // http://web.archive.org/web/20081122053950/http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
    var data = {
      '10.0': '10',
      '6.4':  '10 Technical Preview',
      '6.3':  '8.1',
      '6.2':  '8',
      '6.1':  'Server 2008 R2 / 7',
      '6.0':  'Server 2008 / Vista',
      '5.2':  'Server 2003 / XP 64-bit',
      '5.1':  'XP',
      '5.01': '2000 SP1',
      '5.0':  '2000',
      '4.0':  'NT',
      '4.90': 'ME'
    };
    // Detect Windows version from platform tokens.
    if (pattern && label && /^Win/i.test(os) && !/^Windows Phone /i.test(os) &&
        (data = data[/[\d.]+$/.exec(os)])) {
      os = 'Windows ' + data;
    }
    // Correct character case and cleanup string.
    os = String(os);

    if (pattern && label) {
      os = os.replace(RegExp(pattern, 'i'), label);
    }

    os = format(
      os.replace(/ ce$/i, ' CE')
        .replace(/\bhpw/i, 'web')
        .replace(/\bMacintosh\b/, 'Mac OS')
        .replace(/_PowerPC\b/i, ' OS')
        .replace(/\b(OS X) [^ \d]+/i, '$1')
        .replace(/\bMac (OS X)\b/, '$1')
        .replace(/\/(\d)/, ' $1')
        .replace(/_/g, '.')
        .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '')
        .replace(/\bx86\.64\b/gi, 'x86_64')
        .replace(/\b(Windows Phone) OS\b/, '$1')
        .replace(/\b(Chrome OS \w+) [\d.]+\b/, '$1')
        .split(' on ')[0]
    );

    return os;
  }

  /**
   * An iteration utility for arrays and objects.
   *
   * @private
   * @param {Array|Object} object The object to iterate over.
   * @param {Function} callback The function called per iteration.
   */
  function each(object, callback) {
    var index = -1,
        length = object ? object.length : 0;

    if (typeof length == 'number' && length > -1 && length <= maxSafeInteger) {
      while (++index < length) {
        callback(object[index], index, object);
      }
    } else {
      forOwn(object, callback);
    }
  }

  /**
   * Trim and conditionally capitalize string values.
   *
   * @private
   * @param {string} string The string to format.
   * @returns {string} The formatted string.
   */
  function format(string) {
    string = trim(string);
    return /^(?:webOS|i(?:OS|P))/.test(string)
      ? string
      : capitalize(string);
  }

  /**
   * Iterates over an object's own properties, executing the `callback` for each.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} callback The function executed per own property.
   */
  function forOwn(object, callback) {
    for (var key in object) {
      if (hasOwnProperty.call(object, key)) {
        callback(object[key], key, object);
      }
    }
  }

  /**
   * Gets the internal `[[Class]]` of a value.
   *
   * @private
   * @param {*} value The value.
   * @returns {string} The `[[Class]]`.
   */
  function getClassOf(value) {
    return value == null
      ? capitalize(value)
      : toString.call(value).slice(8, -1);
  }

  /**
   * Host objects can return type values that are different from their actual
   * data type. The objects we are concerned with usually return non-primitive
   * types of "object", "function", or "unknown".
   *
   * @private
   * @param {*} object The owner of the property.
   * @param {string} property The property to check.
   * @returns {boolean} Returns `true` if the property value is a non-primitive, else `false`.
   */
  function isHostType(object, property) {
    var type = object != null ? typeof object[property] : 'number';
    return !/^(?:boolean|number|string|undefined)$/.test(type) &&
      (type == 'object' ? !!object[property] : true);
  }

  /**
   * Prepares a string for use in a `RegExp` by making hyphens and spaces optional.
   *
   * @private
   * @param {string} string The string to qualify.
   * @returns {string} The qualified string.
   */
  function qualify(string) {
    return String(string).replace(/([ -])(?!$)/g, '$1?');
  }

  /**
   * A bare-bones `Array#reduce` like utility function.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} callback The function called per iteration.
   * @returns {*} The accumulated result.
   */
  function reduce(array, callback) {
    var accumulator = null;
    each(array, function(value, index) {
      accumulator = callback(accumulator, value, index, array);
    });
    return accumulator;
  }

  /**
   * Removes leading and trailing whitespace from a string.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} The trimmed string.
   */
  function trim(string) {
    return String(string).replace(/^ +| +$/g, '');
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a new platform object.
   *
   * @memberOf platform
   * @param {Object|string} [ua=navigator.userAgent] The user agent string or
   *  context object.
   * @returns {Object} A platform object.
   */
  function parse(ua) {

    /** The environment context object. */
    var context = root;

    /** Used to flag when a custom context is provided. */
    var isCustomContext = ua && typeof ua == 'object' && getClassOf(ua) != 'String';

    // Juggle arguments.
    if (isCustomContext) {
      context = ua;
      ua = null;
    }

    /** Browser navigator object. */
    var nav = context.navigator || {};

    /** Browser user agent string. */
    var userAgent = nav.userAgent || '';

    ua || (ua = userAgent);

    /** Used to flag when `thisBinding` is the [ModuleScope]. */
    var isModuleScope = isCustomContext || thisBinding == oldRoot;

    /** Used to detect if browser is like Chrome. */
    var likeChrome = isCustomContext
      ? !!nav.likeChrome
      : /\bChrome\b/.test(ua) && !/internal|\n/i.test(toString.toString());

    /** Internal `[[Class]]` value shortcuts. */
    var objectClass = 'Object',
        airRuntimeClass = isCustomContext ? objectClass : 'ScriptBridgingProxyObject',
        enviroClass = isCustomContext ? objectClass : 'Environment',
        javaClass = (isCustomContext && context.java) ? 'JavaPackage' : getClassOf(context.java),
        phantomClass = isCustomContext ? objectClass : 'RuntimeObject';

    /** Detect Java environments. */
    var java = /\bJava/.test(javaClass) && context.java;

    /** Detect Rhino. */
    var rhino = java && getClassOf(context.environment) == enviroClass;

    /** A character to represent alpha. */
    var alpha = java ? 'a' : '\u03b1';

    /** A character to represent beta. */
    var beta = java ? 'b' : '\u03b2';

    /** Browser document object. */
    var doc = context.document || {};

    /**
     * Detect Opera browser (Presto-based).
     * http://www.howtocreate.co.uk/operaStuff/operaObject.html
     * http://dev.opera.com/articles/view/opera-mini-web-content-authoring-guidelines/#operamini
     */
    var opera = context.operamini || context.opera;

    /** Opera `[[Class]]`. */
    var operaClass = reOpera.test(operaClass = (isCustomContext && opera) ? opera['[[Class]]'] : getClassOf(opera))
      ? operaClass
      : (opera = null);

    /*------------------------------------------------------------------------*/

    /** Temporary variable used over the script's lifetime. */
    var data;

    /** The CPU architecture. */
    var arch = ua;

    /** Platform description array. */
    var description = [];

    /** Platform alpha/beta indicator. */
    var prerelease = null;

    /** A flag to indicate that environment features should be used to resolve the platform. */
    var useFeatures = ua == userAgent;

    /** The browser/environment version. */
    var version = useFeatures && opera && typeof opera.version == 'function' && opera.version();

    /** A flag to indicate if the OS ends with "/ Version" */
    var isSpecialCasedOS;

    /* Detectable layout engines (order is important). */
    var layout = getLayout([
      { 'label': 'EdgeHTML', 'pattern': 'Edge' },
      'Trident',
      { 'label': 'WebKit', 'pattern': 'AppleWebKit' },
      'iCab',
      'Presto',
      'NetFront',
      'Tasman',
      'KHTML',
      'Gecko'
    ]);

    /* Detectable browser names (order is important). */
    var name = getName([
      'Adobe AIR',
      'Arora',
      'Avant Browser',
      'Breach',
      'Camino',
      'Electron',
      'Epiphany',
      'Fennec',
      'Flock',
      'Galeon',
      'GreenBrowser',
      'iCab',
      'Iceweasel',
      'K-Meleon',
      'Konqueror',
      'Lunascape',
      'Maxthon',
      { 'label': 'Microsoft Edge', 'pattern': '(?:Edge|Edg|EdgA|EdgiOS)' },
      'Midori',
      'Nook Browser',
      'PaleMoon',
      'PhantomJS',
      'Raven',
      'Rekonq',
      'RockMelt',
      { 'label': 'Samsung Internet', 'pattern': 'SamsungBrowser' },
      'SeaMonkey',
      { 'label': 'Silk', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
      'Sleipnir',
      'SlimBrowser',
      { 'label': 'SRWare Iron', 'pattern': 'Iron' },
      'Sunrise',
      'Swiftfox',
      'Vivaldi',
      'Waterfox',
      'WebPositive',
      { 'label': 'Yandex Browser', 'pattern': 'YaBrowser' },
      { 'label': 'UC Browser', 'pattern': 'UCBrowser' },
      'Opera Mini',
      { 'label': 'Opera Mini', 'pattern': 'OPiOS' },
      'Opera',
      { 'label': 'Opera', 'pattern': 'OPR' },
      'Chromium',
      'Chrome',
      { 'label': 'Chrome', 'pattern': '(?:HeadlessChrome)' },
      { 'label': 'Chrome Mobile', 'pattern': '(?:CriOS|CrMo)' },
      { 'label': 'Firefox', 'pattern': '(?:Firefox|Minefield)' },
      { 'label': 'Firefox for iOS', 'pattern': 'FxiOS' },
      { 'label': 'IE', 'pattern': 'IEMobile' },
      { 'label': 'IE', 'pattern': 'MSIE' },
      'Safari'
    ]);

    /* Detectable products (order is important). */
    var product = getProduct([
      { 'label': 'BlackBerry', 'pattern': 'BB10' },
      'BlackBerry',
      { 'label': 'Galaxy S', 'pattern': 'GT-I9000' },
      { 'label': 'Galaxy S2', 'pattern': 'GT-I9100' },
      { 'label': 'Galaxy S3', 'pattern': 'GT-I9300' },
      { 'label': 'Galaxy S4', 'pattern': 'GT-I9500' },
      { 'label': 'Galaxy S5', 'pattern': 'SM-G900' },
      { 'label': 'Galaxy S6', 'pattern': 'SM-G920' },
      { 'label': 'Galaxy S6 Edge', 'pattern': 'SM-G925' },
      { 'label': 'Galaxy S7', 'pattern': 'SM-G930' },
      { 'label': 'Galaxy S7 Edge', 'pattern': 'SM-G935' },
      'Google TV',
      'Lumia',
      'iPad',
      'iPod',
      'iPhone',
      'Kindle',
      { 'label': 'Kindle Fire', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
      'Nexus',
      'Nook',
      'PlayBook',
      'PlayStation Vita',
      'PlayStation',
      'TouchPad',
      'Transformer',
      { 'label': 'Wii U', 'pattern': 'WiiU' },
      'Wii',
      'Xbox One',
      { 'label': 'Xbox 360', 'pattern': 'Xbox' },
      'Xoom'
    ]);

    /* Detectable manufacturers. */
    var manufacturer = getManufacturer({
      'Apple': { 'iPad': 1, 'iPhone': 1, 'iPod': 1 },
      'Alcatel': {},
      'Archos': {},
      'Amazon': { 'Kindle': 1, 'Kindle Fire': 1 },
      'Asus': { 'Transformer': 1 },
      'Barnes & Noble': { 'Nook': 1 },
      'BlackBerry': { 'PlayBook': 1 },
      'Google': { 'Google TV': 1, 'Nexus': 1 },
      'HP': { 'TouchPad': 1 },
      'HTC': {},
      'Huawei': {},
      'Lenovo': {},
      'LG': {},
      'Microsoft': { 'Xbox': 1, 'Xbox One': 1 },
      'Motorola': { 'Xoom': 1 },
      'Nintendo': { 'Wii U': 1,  'Wii': 1 },
      'Nokia': { 'Lumia': 1 },
      'Oppo': {},
      'Samsung': { 'Galaxy S': 1, 'Galaxy S2': 1, 'Galaxy S3': 1, 'Galaxy S4': 1 },
      'Sony': { 'PlayStation': 1, 'PlayStation Vita': 1 },
      'Xiaomi': { 'Mi': 1, 'Redmi': 1 }
    });

    /* Detectable operating systems (order is important). */
    var os = getOS([
      'Windows Phone',
      'KaiOS',
      'Android',
      'CentOS',
      { 'label': 'Chrome OS', 'pattern': 'CrOS' },
      'Debian',
      { 'label': 'DragonFly BSD', 'pattern': 'DragonFly' },
      'Fedora',
      'FreeBSD',
      'Gentoo',
      'Haiku',
      'Kubuntu',
      'Linux Mint',
      'OpenBSD',
      'Red Hat',
      'SuSE',
      'Ubuntu',
      'Xubuntu',
      'Cygwin',
      'Symbian OS',
      'hpwOS',
      'webOS ',
      'webOS',
      'Tablet OS',
      'Tizen',
      'Linux',
      'Mac OS X',
      'Macintosh',
      'Mac',
      'Windows 98;',
      'Windows '
    ]);

    /*------------------------------------------------------------------------*/

    /**
     * Picks the layout engine from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected layout engine.
     */
    function getLayout(guesses) {
      return reduce(guesses, function(result, guess) {
        return result || RegExp('\\b' + (
          guess.pattern || qualify(guess)
        ) + '\\b', 'i').exec(ua) && (guess.label || guess);
      });
    }

    /**
     * Picks the manufacturer from an array of guesses.
     *
     * @private
     * @param {Array} guesses An object of guesses.
     * @returns {null|string} The detected manufacturer.
     */
    function getManufacturer(guesses) {
      return reduce(guesses, function(result, value, key) {
        // Lookup the manufacturer by product or scan the UA for the manufacturer.
        return result || (
          value[product] ||
          value[/^[a-z]+(?: +[a-z]+\b)*/i.exec(product)] ||
          RegExp('\\b' + qualify(key) + '(?:\\b|\\w*\\d)', 'i').exec(ua)
        ) && key;
      });
    }

    /**
     * Picks the browser name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected browser name.
     */
    function getName(guesses) {
      return reduce(guesses, function(result, guess) {
        return result || RegExp('\\b' + (
          guess.pattern || qualify(guess)
        ) + '\\b', 'i').exec(ua) && (guess.label || guess);
      });
    }

    /**
     * Picks the OS name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected OS name.
     */
    function getOS(guesses) {
      return reduce(guesses, function(result, guess) {
        var pattern = guess.pattern || qualify(guess);
        if (!result && (result =
              RegExp('\\b' + pattern + '(?:/[\\d.]+|[ \\w.]*)', 'i').exec(ua)
            )) {
          result = cleanupOS(result, pattern, guess.label || guess);
        }
        return result;
      });
    }

    /**
     * Picks the product name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected product name.
     */
    function getProduct(guesses) {
      return reduce(guesses, function(result, guess) {
        var pattern = guess.pattern || qualify(guess);
        if (!result && (result =
              RegExp('\\b' + pattern + ' *\\d+[.\\w_]*', 'i').exec(ua) ||
              RegExp('\\b' + pattern + ' *\\w+-[\\w]*', 'i').exec(ua) ||
              RegExp('\\b' + pattern + '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)', 'i').exec(ua)
            )) {
          // Split by forward slash and append product version if needed.
          if ((result = String((guess.label && !RegExp(pattern, 'i').test(guess.label)) ? guess.label : result).split('/'))[1] && !/[\d.]+/.test(result[0])) {
            result[0] += ' ' + result[1];
          }
          // Correct character case and cleanup string.
          guess = guess.label || guess;
          result = format(result[0]
            .replace(RegExp(pattern, 'i'), guess)
            .replace(RegExp('; *(?:' + guess + '[_-])?', 'i'), ' ')
            .replace(RegExp('(' + guess + ')[-_.]?(\\w)', 'i'), '$1 $2'));
        }
        return result;
      });
    }

    /**
     * Resolves the version using an array of UA patterns.
     *
     * @private
     * @param {Array} patterns An array of UA patterns.
     * @returns {null|string} The detected version.
     */
    function getVersion(patterns) {
      return reduce(patterns, function(result, pattern) {
        return result || (RegExp(pattern +
          '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)', 'i').exec(ua) || 0)[1] || null;
      });
    }

    /**
     * Returns `platform.description` when the platform object is coerced to a string.
     *
     * @name toString
     * @memberOf platform
     * @returns {string} Returns `platform.description` if available, else an empty string.
     */
    function toStringPlatform() {
      return this.description || '';
    }

    /*------------------------------------------------------------------------*/

    // Convert layout to an array so we can add extra details.
    layout && (layout = [layout]);

    // Detect Android products.
    // Browsers on Android devices typically provide their product IDS after "Android;"
    // up to "Build" or ") AppleWebKit".
    // Example:
    // "Mozilla/5.0 (Linux; Android 8.1.0; Moto G (5) Plus) AppleWebKit/537.36
    // (KHTML, like Gecko) Chrome/70.0.3538.80 Mobile Safari/537.36"
    if (/\bAndroid\b/.test(os) && !product &&
        (data = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(ua))) {
      product = trim(data[1])
        // Replace any language codes (eg. "en-US").
        .replace(/^[a-z]{2}-[a-z]{2};\s*/i, '')
        || null;
    }
    // Detect product names that contain their manufacturer's name.
    if (manufacturer && !product) {
      product = getProduct([manufacturer]);
    } else if (manufacturer && product) {
      product = product
        .replace(RegExp('^(' + qualify(manufacturer) + ')[-_.\\s]', 'i'), manufacturer + ' ')
        .replace(RegExp('^(' + qualify(manufacturer) + ')[-_.]?(\\w)', 'i'), manufacturer + ' $2');
    }
    // Clean up Google TV.
    if ((data = /\bGoogle TV\b/.exec(product))) {
      product = data[0];
    }
    // Detect simulators.
    if (/\bSimulator\b/i.test(ua)) {
      product = (product ? product + ' ' : '') + 'Simulator';
    }
    // Detect Opera Mini 8+ running in Turbo/Uncompressed mode on iOS.
    if (name == 'Opera Mini' && /\bOPiOS\b/.test(ua)) {
      description.push('running in Turbo/Uncompressed mode');
    }
    // Detect IE Mobile 11.
    if (name == 'IE' && /\blike iPhone OS\b/.test(ua)) {
      data = parse(ua.replace(/like iPhone OS/, ''));
      manufacturer = data.manufacturer;
      product = data.product;
    }
    // Detect iOS.
    else if (/^iP/.test(product)) {
      name || (name = 'Safari');
      os = 'iOS' + ((data = / OS ([\d_]+)/i.exec(ua))
        ? ' ' + data[1].replace(/_/g, '.')
        : '');
    }
    // Detect Kubuntu.
    else if (name == 'Konqueror' && /^Linux\b/i.test(os)) {
      os = 'Kubuntu';
    }
    // Detect Android browsers.
    else if ((manufacturer && manufacturer != 'Google' &&
        ((/Chrome/.test(name) && !/\bMobile Safari\b/i.test(ua)) || /\bVita\b/.test(product))) ||
        (/\bAndroid\b/.test(os) && /^Chrome/.test(name) && /\bVersion\//i.test(ua))) {
      name = 'Android Browser';
      os = /\bAndroid\b/.test(os) ? os : 'Android';
    }
    // Detect Silk desktop/accelerated modes.
    else if (name == 'Silk') {
      if (!/\bMobi/i.test(ua)) {
        os = 'Android';
        description.unshift('desktop mode');
      }
      if (/Accelerated *= *true/i.test(ua)) {
        description.unshift('accelerated');
      }
    }
    // Detect UC Browser speed mode.
    else if (name == 'UC Browser' && /\bUCWEB\b/.test(ua)) {
      description.push('speed mode');
    }
    // Detect PaleMoon identifying as Firefox.
    else if (name == 'PaleMoon' && (data = /\bFirefox\/([\d.]+)\b/.exec(ua))) {
      description.push('identifying as Firefox ' + data[1]);
    }
    // Detect Firefox OS and products running Firefox.
    else if (name == 'Firefox' && (data = /\b(Mobile|Tablet|TV)\b/i.exec(ua))) {
      os || (os = 'Firefox OS');
      product || (product = data[1]);
    }
    // Detect false positives for Firefox/Safari.
    else if (!name || (data = !/\bMinefield\b/i.test(ua) && /\b(?:Firefox|Safari)\b/.exec(name))) {
      // Escape the `/` for Firefox 1.
      if (name && !product && /[\/,]|^[^(]+?\)/.test(ua.slice(ua.indexOf(data + '/') + 8))) {
        // Clear name of false positives.
        name = null;
      }
      // Reassign a generic name.
      if ((data = product || manufacturer || os) &&
          (product || manufacturer || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(os))) {
        name = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(os) ? os : data) + ' Browser';
      }
    }
    // Add Chrome version to description for Electron.
    else if (name == 'Electron' && (data = (/\bChrome\/([\d.]+)\b/.exec(ua) || 0)[1])) {
      description.push('Chromium ' + data);
    }
    // Detect non-Opera (Presto-based) versions (order is important).
    if (!version) {
      version = getVersion([
        '(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)',
        'Version',
        qualify(name),
        '(?:Firefox|Minefield|NetFront)'
      ]);
    }
    // Detect stubborn layout engines.
    if ((data =
          layout == 'iCab' && parseFloat(version) > 3 && 'WebKit' ||
          /\bOpera\b/.test(name) && (/\bOPR\b/.test(ua) ? 'Blink' : 'Presto') ||
          /\b(?:Midori|Nook|Safari)\b/i.test(ua) && !/^(?:Trident|EdgeHTML)$/.test(layout) && 'WebKit' ||
          !layout && /\bMSIE\b/i.test(ua) && (os == 'Mac OS' ? 'Tasman' : 'Trident') ||
          layout == 'WebKit' && /\bPlayStation\b(?! Vita\b)/i.test(name) && 'NetFront'
        )) {
      layout = [data];
    }
    // Detect Windows Phone 7 desktop mode.
    if (name == 'IE' && (data = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(ua) || 0)[1])) {
      name += ' Mobile';
      os = 'Windows Phone ' + (/\+$/.test(data) ? data : data + '.x');
      description.unshift('desktop mode');
    }
    // Detect Windows Phone 8.x desktop mode.
    else if (/\bWPDesktop\b/i.test(ua)) {
      name = 'IE Mobile';
      os = 'Windows Phone 8.x';
      description.unshift('desktop mode');
      version || (version = (/\brv:([\d.]+)/.exec(ua) || 0)[1]);
    }
    // Detect IE 11 identifying as other browsers.
    else if (name != 'IE' && layout == 'Trident' && (data = /\brv:([\d.]+)/.exec(ua))) {
      if (name) {
        description.push('identifying as ' + name + (version ? ' ' + version : ''));
      }
      name = 'IE';
      version = data[1];
    }
    // Leverage environment features.
    if (useFeatures) {
      // Detect server-side environments.
      // Rhino has a global function while others have a global object.
      if (isHostType(context, 'global')) {
        if (java) {
          data = java.lang.System;
          arch = data.getProperty('os.arch');
          os = os || data.getProperty('os.name') + ' ' + data.getProperty('os.version');
        }
        if (rhino) {
          try {
            version = context.require('ringo/engine').version.join('.');
            name = 'RingoJS';
          } catch(e) {
            if ((data = context.system) && data.global.system == context.system) {
              name = 'Narwhal';
              os || (os = data[0].os || null);
            }
          }
          if (!name) {
            name = 'Rhino';
          }
        }
        else if (
          typeof context.process == 'object' && !context.process.browser &&
          (data = context.process)
        ) {
          if (typeof data.versions == 'object') {
            if (typeof data.versions.electron == 'string') {
              description.push('Node ' + data.versions.node);
              name = 'Electron';
              version = data.versions.electron;
            } else if (typeof data.versions.nw == 'string') {
              description.push('Chromium ' + version, 'Node ' + data.versions.node);
              name = 'NW.js';
              version = data.versions.nw;
            }
          }
          if (!name) {
            name = 'Node.js';
            arch = data.arch;
            os = data.platform;
            version = /[\d.]+/.exec(data.version);
            version = version ? version[0] : null;
          }
        }
      }
      // Detect Adobe AIR.
      else if (getClassOf((data = context.runtime)) == airRuntimeClass) {
        name = 'Adobe AIR';
        os = data.flash.system.Capabilities.os;
      }
      // Detect PhantomJS.
      else if (getClassOf((data = context.phantom)) == phantomClass) {
        name = 'PhantomJS';
        version = (data = data.version || null) && (data.major + '.' + data.minor + '.' + data.patch);
      }
      // Detect IE compatibility modes.
      else if (typeof doc.documentMode == 'number' && (data = /\bTrident\/(\d+)/i.exec(ua))) {
        // We're in compatibility mode when the Trident version + 4 doesn't
        // equal the document mode.
        version = [version, doc.documentMode];
        if ((data = +data[1] + 4) != version[1]) {
          description.push('IE ' + version[1] + ' mode');
          layout && (layout[1] = '');
          version[1] = data;
        }
        version = name == 'IE' ? String(version[1].toFixed(1)) : version[0];
      }
      // Detect IE 11 masking as other browsers.
      else if (typeof doc.documentMode == 'number' && /^(?:Chrome|Firefox)\b/.test(name)) {
        description.push('masking as ' + name + ' ' + version);
        name = 'IE';
        version = '11.0';
        layout = ['Trident'];
        os = 'Windows';
      }
      os = os && format(os);
    }
    // Detect prerelease phases.
    if (version && (data =
          /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version) ||
          /(?:alpha|beta)(?: ?\d)?/i.exec(ua + ';' + (useFeatures && nav.appMinorVersion)) ||
          /\bMinefield\b/i.test(ua) && 'a'
        )) {
      prerelease = /b/i.test(data) ? 'beta' : 'alpha';
      version = version.replace(RegExp(data + '\\+?$'), '') +
        (prerelease == 'beta' ? beta : alpha) + (/\d+\+?/.exec(data) || '');
    }
    // Detect Firefox Mobile.
    if (name == 'Fennec' || name == 'Firefox' && /\b(?:Android|Firefox OS|KaiOS)\b/.test(os)) {
      name = 'Firefox Mobile';
    }
    // Obscure Maxthon's unreliable version.
    else if (name == 'Maxthon' && version) {
      version = version.replace(/\.[\d.]+/, '.x');
    }
    // Detect Xbox 360 and Xbox One.
    else if (/\bXbox\b/i.test(product)) {
      if (product == 'Xbox 360') {
        os = null;
      }
      if (product == 'Xbox 360' && /\bIEMobile\b/.test(ua)) {
        description.unshift('mobile mode');
      }
    }
    // Add mobile postfix.
    else if ((/^(?:Chrome|IE|Opera)$/.test(name) || name && !product && !/Browser|Mobi/.test(name)) &&
        (os == 'Windows CE' || /Mobi/i.test(ua))) {
      name += ' Mobile';
    }
    // Detect IE platform preview.
    else if (name == 'IE' && useFeatures) {
      try {
        if (context.external === null) {
          description.unshift('platform preview');
        }
      } catch(e) {
        description.unshift('embedded');
      }
    }
    // Detect BlackBerry OS version.
    // http://docs.blackberry.com/en/developers/deliverables/18169/HTTP_headers_sent_by_BB_Browser_1234911_11.jsp
    else if ((/\bBlackBerry\b/.test(product) || /\bBB10\b/.test(ua)) && (data =
          (RegExp(product.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(ua) || 0)[1] ||
          version
        )) {
      data = [data, /BB10/.test(ua)];
      os = (data[1] ? (product = null, manufacturer = 'BlackBerry') : 'Device Software') + ' ' + data[0];
      version = null;
    }
    // Detect Opera identifying/masking itself as another browser.
    // http://www.opera.com/support/kb/view/843/
    else if (this != forOwn && product != 'Wii' && (
          (useFeatures && opera) ||
          (/Opera/.test(name) && /\b(?:MSIE|Firefox)\b/i.test(ua)) ||
          (name == 'Firefox' && /\bOS X (?:\d+\.){2,}/.test(os)) ||
          (name == 'IE' && (
            (os && !/^Win/.test(os) && version > 5.5) ||
            /\bWindows XP\b/.test(os) && version > 8 ||
            version == 8 && !/\bTrident\b/.test(ua)
          ))
        ) && !reOpera.test((data = parse.call(forOwn, ua.replace(reOpera, '') + ';'))) && data.name) {
      // When "identifying", the UA contains both Opera and the other browser's name.
      data = 'ing as ' + data.name + ((data = data.version) ? ' ' + data : '');
      if (reOpera.test(name)) {
        if (/\bIE\b/.test(data) && os == 'Mac OS') {
          os = null;
        }
        data = 'identify' + data;
      }
      // When "masking", the UA contains only the other browser's name.
      else {
        data = 'mask' + data;
        if (operaClass) {
          name = format(operaClass.replace(/([a-z])([A-Z])/g, '$1 $2'));
        } else {
          name = 'Opera';
        }
        if (/\bIE\b/.test(data)) {
          os = null;
        }
        if (!useFeatures) {
          version = null;
        }
      }
      layout = ['Presto'];
      description.push(data);
    }
    // Detect WebKit Nightly and approximate Chrome/Safari versions.
    if ((data = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
      // Correct build number for numeric comparison.
      // (e.g. "532.5" becomes "532.05")
      data = [parseFloat(data.replace(/\.(\d)$/, '.0$1')), data];
      // Nightly builds are postfixed with a "+".
      if (name == 'Safari' && data[1].slice(-1) == '+') {
        name = 'WebKit Nightly';
        prerelease = 'alpha';
        version = data[1].slice(0, -1);
      }
      // Clear incorrect browser versions.
      else if (version == data[1] ||
          version == (data[2] = (/\bSafari\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
        version = null;
      }
      // Use the full Chrome version when available.
      data[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(ua) || 0)[1];
      // Detect Blink layout engine.
      if (data[0] == 537.36 && data[2] == 537.36 && parseFloat(data[1]) >= 28 && layout == 'WebKit') {
        layout = ['Blink'];
      }
      // Detect JavaScriptCore.
      // http://stackoverflow.com/questions/6768474/how-can-i-detect-which-javascript-engine-v8-or-jsc-is-used-at-runtime-in-androi
      if (!useFeatures || (!likeChrome && !data[1])) {
        layout && (layout[1] = 'like Safari');
        data = (data = data[0], data < 400 ? 1 : data < 500 ? 2 : data < 526 ? 3 : data < 533 ? 4 : data < 534 ? '4+' : data < 535 ? 5 : data < 537 ? 6 : data < 538 ? 7 : data < 601 ? 8 : data < 602 ? 9 : data < 604 ? 10 : data < 606 ? 11 : data < 608 ? 12 : '12');
      } else {
        layout && (layout[1] = 'like Chrome');
        data = data[1] || (data = data[0], data < 530 ? 1 : data < 532 ? 2 : data < 532.05 ? 3 : data < 533 ? 4 : data < 534.03 ? 5 : data < 534.07 ? 6 : data < 534.10 ? 7 : data < 534.13 ? 8 : data < 534.16 ? 9 : data < 534.24 ? 10 : data < 534.30 ? 11 : data < 535.01 ? 12 : data < 535.02 ? '13+' : data < 535.07 ? 15 : data < 535.11 ? 16 : data < 535.19 ? 17 : data < 536.05 ? 18 : data < 536.10 ? 19 : data < 537.01 ? 20 : data < 537.11 ? '21+' : data < 537.13 ? 23 : data < 537.18 ? 24 : data < 537.24 ? 25 : data < 537.36 ? 26 : layout != 'Blink' ? '27' : '28');
      }
      // Add the postfix of ".x" or "+" for approximate versions.
      layout && (layout[1] += ' ' + (data += typeof data == 'number' ? '.x' : /[.+]/.test(data) ? '' : '+'));
      // Obscure version for some Safari 1-2 releases.
      if (name == 'Safari' && (!version || parseInt(version) > 45)) {
        version = data;
      } else if (name == 'Chrome' && /\bHeadlessChrome/i.test(ua)) {
        description.unshift('headless');
      }
    }
    // Detect Opera desktop modes.
    if (name == 'Opera' &&  (data = /\bzbov|zvav$/.exec(os))) {
      name += ' ';
      description.unshift('desktop mode');
      if (data == 'zvav') {
        name += 'Mini';
        version = null;
      } else {
        name += 'Mobile';
      }
      os = os.replace(RegExp(' *' + data + '$'), '');
    }
    // Detect Chrome desktop mode.
    else if (name == 'Safari' && /\bChrome\b/.exec(layout && layout[1])) {
      description.unshift('desktop mode');
      name = 'Chrome Mobile';
      version = null;

      if (/\bOS X\b/.test(os)) {
        manufacturer = 'Apple';
        os = 'iOS 4.3+';
      } else {
        os = null;
      }
    }
    // Newer versions of SRWare Iron uses the Chrome tag to indicate its version number.
    else if (/\bSRWare Iron\b/.test(name) && !version) {
      version = getVersion('Chrome');
    }
    // Strip incorrect OS versions.
    if (version && version.indexOf((data = /[\d.]+$/.exec(os))) == 0 &&
        ua.indexOf('/' + data + '-') > -1) {
      os = trim(os.replace(data, ''));
    }
    // Ensure OS does not include the browser name.
    if (os && os.indexOf(name) != -1 && !RegExp(name + ' OS').test(os)) {
      os = os.replace(RegExp(' *' + qualify(name) + ' *'), '');
    }
    // Add layout engine.
    if (layout && !/\b(?:Avant|Nook)\b/.test(name) && (
        /Browser|Lunascape|Maxthon/.test(name) ||
        name != 'Safari' && /^iOS/.test(os) && /\bSafari\b/.test(layout[1]) ||
        /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(name) && layout[1])) {
      // Don't add layout details to description if they are falsey.
      (data = layout[layout.length - 1]) && description.push(data);
    }
    // Combine contextual information.
    if (description.length) {
      description = ['(' + description.join('; ') + ')'];
    }
    // Append manufacturer to description.
    if (manufacturer && product && product.indexOf(manufacturer) < 0) {
      description.push('on ' + manufacturer);
    }
    // Append product to description.
    if (product) {
      description.push((/^on /.test(description[description.length - 1]) ? '' : 'on ') + product);
    }
    // Parse the OS into an object.
    if (os) {
      data = / ([\d.+]+)$/.exec(os);
      isSpecialCasedOS = data && os.charAt(os.length - data[0].length - 1) == '/';
      os = {
        'architecture': 32,
        'family': (data && !isSpecialCasedOS) ? os.replace(data[0], '') : os,
        'version': data ? data[1] : null,
        'toString': function() {
          var version = this.version;
          return this.family + ((version && !isSpecialCasedOS) ? ' ' + version : '') + (this.architecture == 64 ? ' 64-bit' : '');
        }
      };
    }
    // Add browser/OS architecture.
    if ((data = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(arch)) && !/\bi686\b/i.test(arch)) {
      if (os) {
        os.architecture = 64;
        os.family = os.family.replace(RegExp(' *' + data), '');
      }
      if (
          name && (/\bWOW64\b/i.test(ua) ||
          (useFeatures && /\w(?:86|32)$/.test(nav.cpuClass || nav.platform) && !/\bWin64; x64\b/i.test(ua)))
      ) {
        description.unshift('32-bit');
      }
    }
    // Chrome 39 and above on OS X is always 64-bit.
    else if (
        os && /^OS X/.test(os.family) &&
        name == 'Chrome' && parseFloat(version) >= 39
    ) {
      os.architecture = 64;
    }

    ua || (ua = null);

    /*------------------------------------------------------------------------*/

    /**
     * The platform object.
     *
     * @name platform
     * @type Object
     */
    var platform = {};

    /**
     * The platform description.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.description = ua;

    /**
     * The name of the browser's layout engine.
     *
     * The list of common layout engines include:
     * "Blink", "EdgeHTML", "Gecko", "Trident" and "WebKit"
     *
     * @memberOf platform
     * @type string|null
     */
    platform.layout = layout && layout[0];

    /**
     * The name of the product's manufacturer.
     *
     * The list of manufacturers include:
     * "Apple", "Archos", "Amazon", "Asus", "Barnes & Noble", "BlackBerry",
     * "Google", "HP", "HTC", "LG", "Microsoft", "Motorola", "Nintendo",
     * "Nokia", "Samsung" and "Sony"
     *
     * @memberOf platform
     * @type string|null
     */
    platform.manufacturer = manufacturer;

    /**
     * The name of the browser/environment.
     *
     * The list of common browser names include:
     * "Chrome", "Electron", "Firefox", "Firefox for iOS", "IE",
     * "Microsoft Edge", "PhantomJS", "Safari", "SeaMonkey", "Silk",
     * "Opera Mini" and "Opera"
     *
     * Mobile versions of some browsers have "Mobile" appended to their name:
     * eg. "Chrome Mobile", "Firefox Mobile", "IE Mobile" and "Opera Mobile"
     *
     * @memberOf platform
     * @type string|null
     */
    platform.name = name;

    /**
     * The alpha/beta release indicator.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.prerelease = prerelease;

    /**
     * The name of the product hosting the browser.
     *
     * The list of common products include:
     *
     * "BlackBerry", "Galaxy S4", "Lumia", "iPad", "iPod", "iPhone", "Kindle",
     * "Kindle Fire", "Nexus", "Nook", "PlayBook", "TouchPad" and "Transformer"
     *
     * @memberOf platform
     * @type string|null
     */
    platform.product = product;

    /**
     * The browser's user agent string.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.ua = ua;

    /**
     * The browser/environment version.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.version = name && version;

    /**
     * The name of the operating system.
     *
     * @memberOf platform
     * @type Object
     */
    platform.os = os || {

      /**
       * The CPU architecture the OS is built for.
       *
       * @memberOf platform.os
       * @type number|null
       */
      'architecture': null,

      /**
       * The family of the OS.
       *
       * Common values include:
       * "Windows", "Windows Server 2008 R2 / 7", "Windows Server 2008 / Vista",
       * "Windows XP", "OS X", "Linux", "Ubuntu", "Debian", "Fedora", "Red Hat",
       * "SuSE", "Android", "iOS" and "Windows Phone"
       *
       * @memberOf platform.os
       * @type string|null
       */
      'family': null,

      /**
       * The version of the OS.
       *
       * @memberOf platform.os
       * @type string|null
       */
      'version': null,

      /**
       * Returns the OS string.
       *
       * @memberOf platform.os
       * @returns {string} The OS string.
       */
      'toString': function() { return 'null'; }
    };

    platform.parse = parse;
    platform.toString = toStringPlatform;

    if (platform.version) {
      description.unshift(version);
    }
    if (platform.name) {
      description.unshift(name);
    }
    if (os && name && !(os == String(os).split(' ')[0] && (os == name.split(' ')[0] || product))) {
      description.push(product ? '(' + os + ')' : 'on ' + os);
    }
    if (description.length) {
      platform.description = description.join(' ');
    }
    return platform;
  }

  /*--------------------------------------------------------------------------*/

  // Export platform.
  var platform = parse();

  // Some AMD build optimizers, like r.js, check for condition patterns like the following:
  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    // Expose platform on the global object to prevent errors when platform is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    root.platform = platform;

    // Define as an anonymous module so platform can be aliased through path mapping.
    define(function() {
      return platform;
    });
  }
  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
  else if (freeExports && freeModule) {
    // Export for CommonJS support.
    forOwn(platform, function(value, key) {
      freeExports[key] = value;
    });
  }
  else {
    // Export to the global object.
    root.platform = platform;
  }
}.call(this));

/*********/
/* eslint no-var: 0, prefer-const: 0 */
'use strict'; // The translations are hard coded here because files in the directory are
// put in the html page as raw html, therefore breaking the text here into
// json files is not possible

var i18nextInstance = window.i18next.createInstance();
i18nextInstance.init({
  nsSeparator: false,
  keySeparator: false,

  /* eslint-disable max-len */
  resources: {
    'da-DK': {
      translation: {
        'contact.requiredField': 'Dette felt skal udfyldes.',
        'contact.invalidEmail': 'Ugyldig e-mailadresse',
        'contact.error': 'Der opstod en fejl. Prøv venligst',
        'contact.error.blacklisted': 'Der opstod en fejl. E-mailadressen på hjemmesideejeren er blevet afmeldt eller sortlistet.',
        'contact.error.recaptcha.unavailable': 'Googles Recaptcha-tjeneste, der er nødvendig for at indsende formularen, er ikke tilgængelig lige nu.',
        'contact.resubmit': 'at sende beskeden igen.',
        'contact.tryAgain': 'Hvis problemet fortsætter, bedes du prøve igen om 5 minutter.',
        'lightbox.close': 'Luk lyskasse',
        'lightbox.next': 'Næste billede',
        'lightbox.previous': 'Forrige billede',
        'lightbox.pause': 'Pause',
        'lightbox.play': 'Afspil'
      }
    },
    'de-DE': {
      translation: {
        'contact.requiredField': 'Dies ist ein Pflichtfeld.',
        'contact.invalidEmail': 'Ungültige E-Mail-Adresse',
        'contact.error': 'Ein Fehler ist aufgetreten. Bitte versuchen Sie,',
        'contact.error.blacklisted': 'Ein Fehler ist aufgetreten. Die E-Mail-Adresse des Website-Eigentümers wurde abgemeldet oder gesperrt.',
        'contact.error.recaptcha.unavailable': 'Der Google-reCAPTCHA-Dienst für das Senden des Formulars ist zurzeit nicht verfügbar.',
        'contact.resubmit': 'Ihre Nachricht erneut zu senden.',
        'contact.tryAgain': 'Wenn das Problem erneut auftritt, versuchen Sie es bitte in 5 Minuten noch einmal.',
        'lightbox.close': 'Lightbox schließen',
        'lightbox.next': 'Nächstes Bild',
        'lightbox.previous': 'Vorheriges Bild',
        'lightbox.pause': 'Pause',
        'lightbox.play': 'Abspielen'
      }
    },
    'en-GB': {
      translation: {
        'contact.requiredField': 'This field is required.',
        'contact.invalidEmail': 'Invalid Email Address',
        'contact.invalidDate': 'Please enter a valid date in the format yyyy-mm-dd',
        'contact.invalidTime': 'Please enter a valid time in the 12-hour format HH:MM AM/PM',
        'contact.error': 'There was an error. Please try',
        'contact.error.blacklisted': "There was an error. The site owner's email has been unsubscribed or blacklisted.",
        'contact.error.recaptcha.unavailable': 'The Google Recaptcha service needed to submit this form is not available right now.',
        'contact.resubmit': 'resubmitting your message.',
        'contact.tryAgain': 'If the problem persists, please try again in 5 minutes.',
        'lightbox.close': 'Close lightbox',
        'lightbox.next': 'Next image',
        'lightbox.previous': 'Previous image',
        'lightbox.pause': 'Pause',
        'lightbox.play': 'Play'
      }
    },
    'en-US': {
      translation: {
        'contact.requiredField': 'This field is required.',
        'contact.invalidEmail': 'Invalid Email Address',
        'contact.invalidDate': 'Please enter a valid date in the format yyyy-mm-dd',
        'contact.invalidTime': 'Please enter a valid time in the 12-hour format HH:MM AM/PM',
        'contact.invalid24hTime': 'Please enter a valid time in the 24-hour format hh:mm',
        'contact.error': 'There was an error. Please try',
        'contact.error.blacklisted': "There was an error. The site owner's email has been unsubscribed or blacklisted.",
        'contact.error.recaptcha.unavailable': 'The Google Recaptcha service needed to submit this form is not available right now.',
        'contact.resubmit': 'resubmitting your message.',
        'contact.tryAgain': 'If the problem persists, please try again in 5 minutes.',
        'lightbox.close': 'Close lightbox',
        'lightbox.next': 'Next image',
        'lightbox.previous': 'Previous image',
        'lightbox.pause': 'Pause',
        'lightbox.play': 'Play'
      }
    },
    'es-ES': {
      translation: {
        'contact.requiredField': 'Este campo es obligatorio.',
        'contact.invalidEmail': 'Dirección de correo electrónico no válida',
        'contact.error': 'Se ha producido un error. Intenta',
        'contact.error.blacklisted': 'Se ha producido un error. El correo electrónico del propietario del sitio se ha dado de baja o ha sido bloqueado.',
        'contact.error.recaptcha.unavailable': 'El servicio Recaptcha de Google que se necesita para enviar este formulario no está disponible en este momento.',
        'contact.resubmit': 'volver a enviar tu mensaje.',
        'contact.tryAgain': 'Si el problema persiste, vuelve a intentarlo en 5 minutos.',
        'lightbox.close': 'Cerrar vista ampliada',
        'lightbox.next': 'Siguiente imagen',
        'lightbox.previous': 'Imagen anterior',
        'lightbox.pause': 'Pausar',
        'lightbox.play': 'Reproducir'
      }
    },
    'es-US': {
      translation: {
        'contact.requiredField': 'Este campo es obligatorio.',
        'contact.invalidEmail': 'Dirección de email no válida',
        'contact.error': 'Se ha producido un error. Por favor, intente',
        'contact.error.blacklisted': 'Se ha producido un error. El email del propietario del sitio se ha dado de baja o ha sido bloqueado.',
        'contact.error.recaptcha.unavailable': 'El servicio Recaptcha de Google que se necesita para enviar este formulario no está disponible en este momento.',
        'contact.resubmit': 'volver a enviar su mensaje.',
        'contact.tryAgain': 'Si el problema persiste, vuelva a intentarlo en 5 minutos.',
        'lightbox.close': 'Cerrar vista ampliada',
        'lightbox.next': 'Siguiente imagen',
        'lightbox.previous': 'Imagen anterior',
        'lightbox.pause': 'Pausar',
        'lightbox.play': 'Reproducir'
      }
    },
    'fr-CA': {
      translation: {
        'contact.requiredField': 'Ce champ est obligatoire.',
        'contact.invalidEmail': 'Adresse courriel non valide',
        'contact.error': 'Une erreur est survenue. Veuillez essayer de',
        'contact.error.blacklisted': "Une erreur est survenue. L'adresse courriel du propriétaire du site n'est plus inscrite ou a été ajoutée à la liste noire.",
        'contact.error.recaptcha.unavailable': "Le service r﻿ecaptcha de Google requis pour envoyer ce formulaire n'est pas disponible actuellement.",
        'contact.resubmit': 'renvoyer votre message.',
        'contact.tryAgain': 'Si le problème persiste, essayez à nouveau dans quelques instants.',
        'lightbox.close': "Fermer l'agrandissement",
        'lightbox.next': 'Image suivante',
        'lightbox.previous': 'Image précédente',
        'lightbox.pause': 'Pause',
        'lightbox.play': 'Lecture'
      }
    },
    'fr-FR': {
      translation: {
        'contact.requiredField': 'Ce champ est obligatoire.',
        'contact.invalidEmail': 'Adresse e-mail non valide',
        'contact.error': "Une erreur est survenue. Merci d'essayer",
        'contact.error.blacklisted': "Une erreur est survenue. L'adresse e-mail du propriétaire du site n'est plus inscrite ou a été ajoutée à la liste noire.",
        'contact.error.recaptcha.unavailable': "Le service recaptcha de Google requis pour envoyer ce formulaire n'est actuellement pas disponible.",
        'contact.resubmit': 'de renvoyer votre message.',
        'contact.tryAgain': 'Si le problème persiste, essayez à nouveau dans quelques instants.',
        'lightbox.close': "Fermer l'agrandissement",
        'lightbox.next': 'Image suivante',
        'lightbox.previous': 'Image précédente',
        'lightbox.pause': 'Pause',
        'lightbox.play': 'Lecture'
      }
    },
    'it-IT': {
      translation: {
        'contact.requiredField': 'Questo campo è obbligatorio.',
        'contact.invalidEmail': 'Indirizzo e-mail non valido',
        'contact.error': 'Si è verificato un errore. Riprova',
        'contact.error.blacklisted': "Si è verificato un errore. L'e-mail del proprietario del sito è stata rimossa o bandita.",
        'contact.error.recaptcha.unavailable': 'Il servizio Google Recaptcha necessario per inviare questo modulo al momento non è disponibile.',
        'contact.resubmit': 'nuovo invio del tuo messaggio in corso',
        'contact.tryAgain': 'Se il problema persiste, riprova tra 5 minuti.',
        'lightbox.close': 'Chiudi lightbox',
        'lightbox.next': 'Immagine successiva',
        'lightbox.previous': 'Immagine precedente',
        'lightbox.pause': 'Pausa',
        'lightbox.play': 'Avvia'
      }
    },
    'ja-JP': {
      translation: {
        'contact.requiredField': 'この欄は必須項目です。',
        'contact.invalidEmail': '無効なEメールアドレス',
        'contact.error': 'エラーが発生しました。もう一度',
        'contact.error.blacklisted': 'エラーが発生しました。ホームページ管理者のメールアドレスが配信停止、またはブロックされています。',
        'contact.error.recaptcha.unavailable': 'このフォームの送信に必要なGoogle reCAPTCHAが現在利用できません。',
        'contact.resubmit': '送信してください。',
        'contact.tryAgain': '問題が続く場合は、5分後にもう一度試してください。',
        'lightbox.close': 'ライトボックスを閉じる',
        'lightbox.next': '次の画像',
        'lightbox.previous': '前の画像',
        'lightbox.pause': '一時停止',
        'lightbox.play': '再生'
      }
    },
    'nb-NO': {
      translation: {
        'contact.requiredField': 'Dette feltet er obligatorisk.',
        'contact.invalidEmail': 'Ugyldig e-postadresse',
        'contact.error': 'Det oppsto en feil. Vennligst prøv',
        'contact.error.blacklisted': 'Det oppsto en feil. Nettstedets e-postadresse er avmeldt eller svartelistet.',
        'contact.error.recaptcha.unavailable': 'Google Recaptcha-tjenesten som trengs for å sende inn dette skjemaet, er ikke tilgjengelig akkurat nå.',
        'contact.resubmit': 'sender meldingen din på nytt.',
        'contact.tryAgain': 'Hvis problemet vedvarer, kan du prøve igjen om fem minutter.',
        'lightbox.close': 'Lukk lysboksen',
        'lightbox.next': 'Neste bilde',
        'lightbox.previous': 'Forrige bilde',
        'lightbox.pause': 'Pause',
        'lightbox.play': 'Avspill'
      }
    },
    'nl-NL': {
      translation: {
        'contact.requiredField': 'Dit veld is verplicht.',
        'contact.invalidEmail': 'Ongeldig e-mailadres',
        'contact.error': 'Er is een fout opgetreden. Probeer',
        'contact.error.blacklisted': 'Er is een fout opgetreden. Het e-mailadres van de eigenaar van de site is uitgeschreven of op de zwarte lijst geplaatst.',
        'contact.error.recaptcha.unavailable': 'De Google Recaptcha-service die nodig is om dit formulier te verzenden, is op dit moment niet beschikbaar.',
        'contact.resubmit': 'je bericht opnieuw te verzenden.',
        'contact.tryAgain': 'Probeer het nog eens over 5 minuten, als het probleem zich blijft voordoen.',
        'lightbox.close': 'Lightbox kiezen',
        'lightbox.next': 'Volgende afbeelding',
        'lightbox.previous': 'Vorige afbeelding',
        'lightbox.pause': 'Pauzeren',
        'lightbox.play': 'Afspelen'
      }
    },
    'sv-SE': {
      translation: {
        'contact.requiredField': 'Det här fältet är obligatoriskt.',
        'contact.invalidEmail': 'Ogiltig e-postadress',
        'contact.error': 'Ett fel uppstod. Försök',
        'contact.error.blacklisted': 'Ett fel uppstod. Webbplatsinnehavarens e-postadress har avanmälts eller svartlistats.',
        'contact.error.recaptcha.unavailable': 'Googles Recaptcha-tjänst som krävs för att skicka in det här formuläret är inte tillgänglig just nu.',
        'contact.resubmit': 'skicka ditt meddelande igen.',
        'contact.tryAgain': 'Försök igen om 5 minuter om problemet kvarstår.',
        'lightbox.close': 'Stäng lightbox',
        'lightbox.next': 'Nästa bild',
        'lightbox.previous': 'Föregående bild',
        'lightbox.pause': 'Pausa',
        'lightbox.play': 'Spela upp'
      }
    },
    'fi-FI': {
      translation: {
        'contact.requiredField': 'Tämä kenttä on pakollinen.',
        'contact.invalidEmail': 'Virheellinen sähköpostiosoite',
        'contact.invalidDate': 'Anna kelvollinen päivämäärä muodossa vvvv-kk-pp',
        'contact.invalidTime': 'Anna kelvollinen kellonaika 12 tunnin muodossa HH.MM',
        'contact.invalid24hTime': 'Anna kelvollinen kellonaika 24 tunnin muodossa HH.MM',
        'contact.error': 'Virhe. Yritä',
        'contact.error.blacklisted': 'Virhe. Tilaus sivuston omistajan sähköpostiosoitteeseen on peruutettu, tai osoite on mustalla listalla.',
        'contact.error.recaptcha.unavailable': 'Tämän lomakkeen lähetystä varten vaadittava Google reCAPTCHA -palvelu ei ole juuri nyt käytettävissä.',
        'contact.resubmit': 'lähettää viestisi uudelleen.',
        'contact.tryAgain': 'Jos ongelma jatkuu, yritä uudelleen 5 minuutin kuluttua.',
        'lightbox.close': 'Sulje Lightbox',
        'lightbox.next': 'Seuraava kuva',
        'lightbox.previous': 'Edellinen kuva',
        'lightbox.pause': 'Keskeytä',
        'lightbox.play': 'Toista'
      }
    }
  },

  /* eslint-enable max-len */
  lng: window.i18nLocale,
  fallbackLng: 'en-US',
  interpolation: {
    escapeValue: false,
    prefix: '__',
    suffix: '__'
  }
});
/*********/
/* eslint no-var: 0, prefer-const: 0 */
'use strict';

(function () {
  var queryParams = window.location.search;
  var isVRT = queryParams.indexOf('vrt=true') !== -1;
  var IMAGE_SELECTOR = '.imageMedia-pip';
  var SVG_SELECTOR = '.svgMedia-pip';
  var selectors = [IMAGE_SELECTOR, SVG_SELECTOR];

  function convertToArray(nodelist) {
    return [].slice.call(nodelist);
  }

  function setUpLazyLoad(target) {
    var observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        var item = entry.target; // Detect when the item intersects with the viewport

        if (entry.isIntersecting) {
          var dataLazyUrl = item.getAttribute('data-lazy-url');

          if (dataLazyUrl) {
            // We want to preload the image and only remove the blur when it's loaded
            var img = new Image();

            img.onload = function () {
              var mediaImg = item.querySelector('img');
              mediaImg.setAttribute('src', dataLazyUrl);
              item.classList.add('gaussian-blur--loaded');
              item.style.backgroundImage = '';
              item.style.backgroundSize = '';
            };

            img.src = dataLazyUrl;
          }

          observer.disconnect();
        } else if (!entry.isIntersecting && !isVRT) {
          // Apply a blur effect
          item.classList.add('gaussian-blur--initial');
          var thumbnail = item.getAttribute('data-lazy-thumbnail');

          if (thumbnail && mediaImg) {
            item.style.backgroundImage = 'url(' + thumbnail + ')';
            item.style.backgroundSize = 'cover';
          }
        }
      });
    });
    observer.observe(target);
  }

  var itemsToLazyLoad = [];

  for (var j = 0; j < selectors.length; j++) {
    itemsToLazyLoad = itemsToLazyLoad.concat(convertToArray(document.querySelectorAll(selectors[j])));
  }

  for (var i = 0; i < itemsToLazyLoad.length; i++) {
    var item = itemsToLazyLoad[i];
    var fullUrl = item.getAttribute('data-lazy-url');
    var mediaImg = item.querySelector('img'); // We may want to skip lazy loading for testing purposes

    if (isVRT && mediaImg) {
      mediaImg.setAttribute('src', fullUrl);
    } else if (!isVRT) {
      setUpLazyLoad(item);
    }
  }
})();
/*********/
"use strict";

/* eslint no-var: 0, prefer-const: 0 */

/* exported throttle */

/**************
 * UTILITY
 *************/
// lodash.throttle, copy/pasted here to avoid including all of lodash
var _now = Date.now || function () {
  return new Date().getTime();
};

var throttle = function (func, wait, options) {
  var context;
  var args;
  var result;
  var timeout = null;
  var previous = 0;

  if (!options) {
    options = {};
  }

  var later = function () {
    previous = options.leading === false ? 0 : _now();
    timeout = null;
    result = func.apply(context, args);

    if (!timeout) {
      context = args = null;
    }
  };

  return function () {
    var now = _now();

    if (!previous && options.leading === false) {
      previous = now;
    }

    var remaining = wait - (now - previous);
    context = this;
    args = arguments;

    if (remaining <= 0 || remaining > wait) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);

      if (!timeout) {
        context = args = null;
      }
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }

    return result;
  };
};
/*********/
/* eslint no-var: 0, prefer-const: 0 */
'use strict';
/*
 * ANIMATED INTERNAL LINK SCROLLING
 */

var anchorScrolling = function () {
  var navigationPipLinks = document.querySelectorAll('.navigation-pip .link a');
  var IE = navigator.userAgent.indexOf('Trident') >= 0;
  var FF = navigator.userAgent.indexOf('Gecko/') >= 0;

  function getViewportNode() {
    if (document.scrollingElement) {
      return document.scrollingElement;
    } else if (IE || FF) {
      return document.documentElement;
    } else {
      return document.body;
    }
  }

  function linkClickHandler(event) {
    event.preventDefault();
    var href = event.currentTarget.getAttribute('href');
    var targetName = event.currentTarget.getAttribute('data-destination-block');
    var target = document.querySelector('[name="' + targetName + '"]');

    if (!targetName) {
      targetName = href.substring(1);
      event.currentTarget.setAttribute('data-destination-block', target);
    } // The bounding rect's top is relative to the viewport, so it represents the delta
    // in scroll position (top > 0 : scroll down, top < 0 : scroll up)


    var delta = target.getBoundingClientRect().top; // Number of pixels we want to "ease" the block into view when scrolling

    var BLOCK_SCROLL_EASE_AMOUNT = 750;
    window.doScroll(getViewportNode(), delta, BLOCK_SCROLL_EASE_AMOUNT, function () {
      window.location.hash = href;
    });
  }

  for (var i = 0; i < navigationPipLinks.length; i++) {
    var link = navigationPipLinks.item(i);
    var href = link.getAttribute('href');

    if (href.indexOf('#') === 0) {
      if (link.addEventListener) {
        link.addEventListener('click', linkClickHandler);
      } else {
        // IE8
        link.attachEvent('onclick', linkClickHandler);
      }
    }
  }
};

anchorScrolling();
/*********/
/* eslint no-var: 0, prefer-const: 0 */
'use strict';

(function () {
  var currentLightboxImage = 0;
  var lightboxVisible = false;
  var preloaded = false;
  var preloadUrls = [];
  var preloadedImages = [];
  var imagesToShowInLightbox = [];
  var NON_MEDIA_GALLERY_IMAGES_SELECTOR = 'section.lightbox-mode' + ' .graphic-pip-container:not(.force-disable-lightbox)' + ' img[data-lightbox-url], .force-lightbox img[data-lightbox-url]:not([data-media-gallery-index])';
  var MEDIA_GALLERY_IMAGES_SELECTOR = 'img[data-lightbox-url][data-media-gallery-index]';
  var MEDIA_GALLERY_COLUMNS_SELECTOR = '.media-gallery__column';
  var autoplayInterval;
  var autoplayTime;
  var autoplayOn; // Run a function for each lightbox image

  function forEachLightboxImage(images, callback) {
    for (var i = 0; i < images.length; i++) {
      callback(images[i]);
    }
  } // 1. Attach listeners to the lightbox component


  function attachListenersToLightbox() {
    var closeButton = document.querySelector('.lightbox__close-btn');
    closeButton.addEventListener('click', closeLightbox);
    closeButton.setAttribute('aria-label', window.i18next.t('lightbox.close'));
    var cover = document.querySelector('.lightbox__cover');
    cover.addEventListener('click', closeLightbox);
    var next = document.querySelector('.lightbox__nav-btn--next');
    next.addEventListener('click', nextLightboxImage);
    next.setAttribute('aria-label', window.i18next.t('lightbox.next'));
    var previous = document.querySelector('.lightbox__nav-btn--previous');
    previous.addEventListener('click', previousLightboxImage);
    previous.setAttribute('aria-label', window.i18next.t('lightbox.previous'));
    var image = document.querySelector('.lightbox__image');
    image.addEventListener('click', nextLightboxImage);
  } // 2a. Run the first time setup for all lightbox images


  function prepImagesForLightbox() {
    var nonGalleryImages = document.querySelectorAll(NON_MEDIA_GALLERY_IMAGES_SELECTOR);
    forEachLightboxImage(nonGalleryImages, setupLightboxImage);
    var galleryImages = document.querySelectorAll(MEDIA_GALLERY_IMAGES_SELECTOR);
    forEachLightboxImage(galleryImages, setupLightboxImage);
  } // 2b. Do a first time setup for lightbox images


  function setupLightboxImage(thisImage) {
    if (thisImage.dataset.lightboxUrl) {
      preloadUrls.push(thisImage.dataset.lightboxUrl);
      thisImage.addEventListener('click', getImagesForLightbox.bind(thisImage, thisImage));
      thisImage.addEventListener('mouseenter', handlePreload.bind(thisImage, thisImage));
    }
  } // Preload all lightbox images when called. Only works on first call.


  function preloadImages() {
    if (!preloaded) {
      for (var i = 0; i < preloadUrls.length; i++) {
        preloadedImages[i] = new Image();
        preloadedImages[i].src = preloadUrls[i];
      }

      preloaded = true;
    }
  } // Handler for on hover on lightbox images


  function handlePreload(thisImage) {
    thisImage.removeEventListener('mouseenter', handlePreload);
    preloadImages();
  }

  function convertToArray(nodeList) {
    return [].slice.call(nodeList);
  }
  /* e.g. 3 columns with 4 images with displayed Tower index as such:
   * 1 3 4
   * 2
   * But to the user, it should read left to right and should open the gallery like
   * 1 2 3
   * 4
   * This function picks off the top image of each column
   */


  function orderGalleryImages(columns, orderedImages = []) {
    var hasRemainingImages = false; // Go through each column and pick off the first image

    for (var i = 0; i < columns.length; i++) {
      var image = columns[i].shift();

      if (image) {
        orderedImages.push(image);
        hasRemainingImages = true;
      }
    } // If any column has remaining images, recursively call again


    if (hasRemainingImages) {
      return orderGalleryImages(columns, orderedImages);
    } else {
      return orderedImages;
    }
  } // 2c. When an image is clicked, it figures out which images should be loaded in the lightbox


  function getImagesForLightbox(imageEl) {
    var mediaGalleryIndex = imageEl.dataset.mediaGalleryIndex;

    if (mediaGalleryIndex) {
      var mediaGallery = document.querySelector('[data-tower-id="' + mediaGalleryIndex + '"]');

      if (mediaGallery.dataset.lightboxAutoplay === 'true') {
        autoplayTime = mediaGallery.dataset.lightboxAutoplayTime;
        setAutoplayOn();
        setupPauseAndPlayButton();
      }

      var mediaGalleryImages;

      if (mediaGallery.classList.contains('media-gallery--masonry')) {
        var mediaGalleryColumns = convertToArray(mediaGallery.querySelectorAll(MEDIA_GALLERY_COLUMNS_SELECTOR));
        var convertedColumns = [];

        for (var i = 0; i < mediaGalleryColumns.length; i++) {
          convertedColumns.push(convertToArray(mediaGalleryColumns[i].querySelectorAll(MEDIA_GALLERY_IMAGES_SELECTOR)));
        } // Because media gallery arranges the images in column, we need to sequentially get the first image
        // in each column to order them correctly


        mediaGalleryImages = orderGalleryImages(convertedColumns, []);
      } else {
        mediaGalleryImages = convertToArray(mediaGallery.querySelectorAll(MEDIA_GALLERY_IMAGES_SELECTOR));
      }

      for (var j = 0; j < mediaGalleryImages.length; j++) {
        var image = mediaGalleryImages[j];
        image.dataset.lightBoxImageIndex = j;
        imagesToShowInLightbox.push(constructImageData(image, j));
      }
    } else {
      var nonGalleryImages = document.querySelectorAll(NON_MEDIA_GALLERY_IMAGES_SELECTOR);

      for (var k = 0; k < nonGalleryImages.length; k++) {
        nonGalleryImages[k].dataset.lightBoxImageIndex = k;
        imagesToShowInLightbox.push(constructImageData(nonGalleryImages[k], k));
      }
    }

    currentLightboxImage = parseInt(imageEl.dataset.lightBoxImageIndex);
    showLightboxImage(imagesToShowInLightbox[currentLightboxImage]);
    updateSlideCounter(currentLightboxImage);
    var total = document.querySelector('.lightbox__slide-counter__total');
    total.innerHTML = imagesToShowInLightbox.length;
    lightboxVisible = true;
    document.querySelector('.lightbox').classList.add('lightbox--visible');
    document.querySelector('body').classList.add('overflow-hidden');
  } // 2d. Construct image data for the lightbox


  function constructImageData(imageEl, index) {
    var displayTitle = imageEl.dataset.displayTitle;
    var displayDescription = imageEl.dataset.displayDescription;
    var renderTitle = imageEl.dataset.renderTitle;
    var renderDescription = imageEl.dataset.renderDescription;
    var descriptorType = imageEl.dataset.descriptorType;
    var imageData = {
      index,
      url: imageEl.dataset.lightboxUrl,
      renderTitle,
      renderDescription,
      descriptorType
    };

    if (displayTitle) {
      imageData.displayTitle = displayTitle;
    }

    if (displayDescription) {
      imageData.displayDescription = displayDescription;
    }

    return imageData;
  } // 2e. Show a given image element in the lightbox


  function showLightboxImage(imageData) {
    document.querySelector('.lightbox__image').src = imageData.url;
    var displayTitle = imageData.displayTitle;
    var displayDescription = imageData.displayDescription;
    var renderTitle = imageData.renderTitle;
    var renderDescription = imageData.renderDescription;
    var descriptorType = imageData.descriptorType;
    var lightboxOptions = ['lightbox', 'hoverAndLightbox'];
    var shouldDisplayTitle = descriptorType !== 'overlay' || lightboxOptions.indexOf(renderTitle) !== -1;
    var shouldDisplayDescription = descriptorType !== 'overlay' || lightboxOptions.indexOf(renderDescription) !== -1;
    const titleText = displayTitle && shouldDisplayTitle ? displayTitle : '';
    document.querySelector('.lightbox__title').innerHTML = titleText;
    const descriptionText = displayDescription && shouldDisplayDescription ? displayDescription : '';
    document.querySelector('.lightbox__description').innerHTML = descriptionText;
    const lightboxInfo = document.querySelector('.lightbox__info');

    if (titleText === '' && descriptionText === '') {
      lightboxInfo.classList.add('lightbox__info--hidden');
    } else if (lightboxInfo.classList.contains('lightbox__info--hidden')) {
      lightboxInfo.classList.remove('lightbox__info--hidden');
    }
  } // Show the next lightbox image


  function nextLightboxImage() {
    currentLightboxImage += 1;

    if (autoplayOn) {
      resetAutoplay();
    }

    if (currentLightboxImage >= imagesToShowInLightbox.length) {
      currentLightboxImage = 0;
    }

    updateSlideCounter(currentLightboxImage);
    showLightboxImage(imagesToShowInLightbox.filter(function (image) {
      return image.index === currentLightboxImage;
    })[0]);
  } // Show the previous lightbox image


  function previousLightboxImage() {
    currentLightboxImage -= 1;

    if (autoplayOn) {
      resetAutoplay();
    }

    if (currentLightboxImage < 0) {
      currentLightboxImage = imagesToShowInLightbox.length - 1;
    }

    updateSlideCounter(currentLightboxImage);
    showLightboxImage(imagesToShowInLightbox.filter(function (image) {
      return image.index === currentLightboxImage;
    })[0]);
  }

  function updateSlideCounter() {
    var current = document.querySelector('.lightbox__slide-counter__current');
    current.innerHTML = currentLightboxImage + 1;
  } // Close the lightbox


  function closeLightbox() {
    autoplayOn = false;
    clearInterval(autoplayInterval);
    lightboxVisible = false;
    imagesToShowInLightbox = [];
    currentLightboxImage = 0;
    document.querySelector('.lightbox__pause-btn').classList.remove('lightbox__btn--visible');
    document.querySelector('.lightbox__play-btn').classList.remove('lightbox__btn--visible');
    document.querySelector('.lightbox__image').src = '';
    document.querySelector('.lightbox__title').innerHTML = '';
    document.querySelector('.lightbox__description').innerHTML = '';
    document.querySelector('.lightbox').classList.remove('lightbox--visible');
    document.querySelector('body').classList.remove('overflow-hidden');
  }

  function setAutoplayOn() {
    autoplayOn = true;
    autoplayInterval = setInterval(function () {
      nextLightboxImage();
    }, autoplayTime * 1000);
    document.querySelector('.lightbox__play-btn').classList.remove('lightbox__btn--visible');
    document.querySelector('.lightbox__pause-btn').classList.add('lightbox__btn--visible');
  }

  function setAutoplayOff() {
    autoplayOn = false;
    clearInterval(autoplayInterval);
    document.querySelector('.lightbox__pause-btn').classList.remove('lightbox__btn--visible');
    document.querySelector('.lightbox__play-btn').classList.add('lightbox__btn--visible');
  }

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(function () {
      nextLightboxImage();
    }, autoplayTime * 1000);
  } // Add autoplay pause/play button


  function setupPauseAndPlayButton() {
    var pause = document.querySelector('.lightbox__pause-btn');
    pause.addEventListener('click', setAutoplayOff);
    pause.setAttribute('aria-label', window.i18next.t('lightbox.pause'));
    var play = document.querySelector('.lightbox__play-btn');
    play.addEventListener('click', setAutoplayOn);
    play.setAttribute('aria-label', window.i18next.t('lightbox.play'));
  } // 4. Add the keyboard listeners


  function setupKeyboardLightboxControls() {
    window.addEventListener('keydown', function (keyboardEvent) {
      if (lightboxVisible) {
        switch (keyboardEvent.keyCode) {
          case 37:
            previousLightboxImage();
            break;

          case 39:
            nextLightboxImage();
            break;

          case 27:
            closeLightbox();
            break;

          default:
            break;
        }
      }
    });
  }

  if (document.querySelector('.lightbox')) {
    // 1. Attach the listeners to the lightbox component
    attachListenersToLightbox(); // 2. Prep each lightbox by attaching click handlers and preloading the images

    prepImagesForLightbox(); // 3. Add keyboard listeners for the lightbox

    setupKeyboardLightboxControls();
  }
})();
/*********/
/* eslint no-var: 0, prefer-const: 0 */
'use strict';

(function () {
  /* polyfill for closest() */
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;

      do {
        if (el.matches(s)) {
          return el;
        }

        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);

      return null;
    };
  }

  var CAROUSEL_BLOCK_SELECTOR = '[data-is-carousel-block="true"]';
  var CAROUSEL_SELECTOR = '.block-content.carousel';
  var FACE_WRAPPER_SELECTOR = '.carousel-faces';
  var BACKGROUND_SELECTOR = '.block-background';
  var FACE_SELECTOR = FACE_WRAPPER_SELECTOR + ' .carousel-face';
  var CURRENT_FACE_SELECTOR = FACE_WRAPPER_SELECTOR + ' .current';
  var SWIPE_THRESHOLD = 50;

  function getCarouselBlocks() {
    return document.querySelectorAll(CAROUSEL_SELECTOR);
  }

  function getCarouselFaces(blockContent) {
    return blockContent.querySelectorAll(FACE_SELECTOR);
  } // Run a function for each element in the array


  function forEachElement(elements, callback) {
    for (var i = 0; i < elements.length; i++) {
      callback(elements[i], i);
    }
  } // Set the transitioning class on the face wrapper and attach listener for its transitionend


  function setTransitionState(block, currentFace) {
    var faceWrapper = block.querySelector(FACE_WRAPPER_SELECTOR);
    faceWrapper.classList.add('transitioning');
    currentFace.addEventListener(currentFace.style.WebkitTransition !== undefined ? 'webkitTransitionEnd' : 'transitionend', removeTransitionState.bind(null, block));
  } // Remove the transition class and event when the animation has ended


  function removeTransitionState(block, transitionEvent) {
    if (!transitionEvent.target.classList.contains('carousel-face')) {
      return;
    }

    transitionEvent.target.parentNode.classList.remove('transitioning');
    transitionEvent.target.removeEventListener(transitionEvent.type, this.removeTransitionState);
  } // Returns the currently selected block face index


  function getCurrentFaceIndex(blockContent) {
    var faces = getCarouselFaces(blockContent);
    var currentFace = blockContent.querySelector(CURRENT_FACE_SELECTOR);
    return Array.prototype.indexOf.call(faces, currentFace);
  }

  function selectNextCarouselFace(blockContent) {
    selectCarouselFace(getCurrentFaceIndex(blockContent) + 1, blockContent);
  }

  function selectPreviousCarouselFace(blockContent) {
    selectCarouselFace(getCurrentFaceIndex(blockContent) - 1, blockContent);
  } // Handles the selection of a carousel face


  function selectCarouselFace(selectedIndex, blockContent) {
    var faces = getCarouselFaces(blockContent);
    var previousFace = blockContent.querySelector(CURRENT_FACE_SELECTOR);
    var previousIndex = Array.prototype.indexOf.call(faces, previousFace);
    var backgrounds = blockContent.closest(CAROUSEL_BLOCK_SELECTOR).querySelectorAll(BACKGROUND_SELECTOR); // Cycle through faces if we're at the end

    if (selectedIndex < 0) {
      selectedIndex = faces.length - 1;
    } else if (selectedIndex >= faces.length) {
      selectedIndex = 0;
    } // only hide/show backgrounds if the carousel has multiple backgrounds set


    if (backgrounds.length > 1) {
      forEachElement(backgrounds, function (background, index) {
        if (selectedIndex === index) {
          // show current background
          background.removeAttribute('hidden');
        } else {
          // hide background
          background.setAttribute('hidden', true);
        }
      });
    }

    setTransitionState(blockContent, faces[selectedIndex]);
    forEachElement(getCarouselFaces(blockContent), function (face, index) {
      if (index === selectedIndex) {
        face.classList.add('current');
        face.classList.remove('left');
        face.classList.remove('right');
        face.classList.remove('previous');
      } else {
        face.classList.remove('current');

        if (index === previousIndex) {
          face.classList.add('previous');
        } else {
          face.classList.remove('previous');
        }

        if (index > selectedIndex) {
          face.classList.remove('left');
          face.classList.add('right');
        } else {
          face.classList.add('left');
          face.classList.remove('right');
        }
      }
    });
  }

  function setContainerHeight(blockContent) {
    // Set the height of the faces container to equal the height of the tallest face
    var maxFaceHeight = 0;
    forEachElement(blockContent.querySelectorAll('.carousel-face'), function (face) {
      var faceHeight = face.getBoundingClientRect().height;

      if (faceHeight > maxFaceHeight) {
        maxFaceHeight = faceHeight;
      }
    });
    blockContent.querySelector('.carousel-faces').style.height = maxFaceHeight + 'px';
  } // Initialize all the listeners we need for clickable elements


  forEachElement(getCarouselBlocks(), function (blockContent) {
    var swipeStartX = 0;
    blockContent.addEventListener('touchstart', function (event) {
      var touchInfo = event.changedTouches[0];
      swipeStartX = touchInfo.pageX;
    });
    blockContent.addEventListener('touchend', function (event) {
      var touchInfo = event.changedTouches[0];
      var swipeEndX = touchInfo.pageX;
      var swipeDiff = swipeStartX - swipeEndX; // Swipe right

      if (swipeDiff > SWIPE_THRESHOLD) {
        selectNextCarouselFace(blockContent);
      } else if (swipeDiff < -1 * SWIPE_THRESHOLD) {
        selectPreviousCarouselFace(blockContent);
      }
    });
    var dataset = blockContent.dataset;

    if (dataset.autoplayDelayTime) {
      var autoplayDelayTime = dataset.autoplayDelayTime;
      setInterval(selectNextCarouselFace.bind(null, blockContent), autoplayDelayTime * 1000);
    } // Attach click listners for the side controls.


    forEachElement(blockContent.querySelectorAll('.face-control-side'), function (control) {
      if (control.classList.contains('left')) {
        control.addEventListener('click', selectPreviousCarouselFace.bind(null, blockContent));
      } else if (control.classList.contains('right')) {
        control.addEventListener('click', selectNextCarouselFace.bind(null, blockContent));
      }
    });
    window.setTimeout(setContainerHeight.bind(null, blockContent), 1);
    window.addEventListener('resize', setContainerHeight.bind(null, blockContent));
    var imagesInCarousel = blockContent.querySelectorAll('.carousel-face img');
    var imagesLoaded = 0;
    forEachElement(imagesInCarousel, function (image) {
      var imageToLoad = new Image();

      imageToLoad.onload = function () {
        imagesLoaded++;

        if (imagesLoaded === imagesInCarousel.length) {
          setContainerHeight(blockContent);
        }
      };

      imageToLoad.src = image.getAttribute('src');
    });
  });
})();
/*********/
"use strict";

/* eslint no-var: 0, prefer-const: 0 */

/* eslint camelcase: 0 */
(function () {
  var Money = window.Money;
  var validMoneyRegex = /^-?\d+\.\d\d$/;

  function Cart() {
    this.items = [];
    this.purchaseSuccess = false;
    this.cartNode = document.getElementsByClassName('shoppingCart')[0];
    this.pipNodes = document.getElementsByClassName('paypal-pip');
    this.business = this.cartNode && this.cartNode.getAttribute('data-publishedjs-merchant-id');
    this.currency = this.cartNode && this.cartNode.getAttribute('data-publishedjs-currency');
    this.currencySymbol = this.cartNode && this.cartNode.getAttribute('data-publishedjs-currency-symbol'); // abort cart creation in the case of no cart or business

    if (!this.cartNode || !this.business) {
      return false;
    }

    if (typeof window.localStorage !== 'undefined') {
      this.fromJSON(window.localStorage.getItem('shoppingCart'));
    } // attach event listeners to payment buttons


    for (var i = 0; i < this.pipNodes.length; i++) {
      var paypalPip = this.pipNodes[i];
      var paypalPipButton = paypalPip.getElementsByClassName('paypal-addToCart')[0];
      paypalPipButton.addEventListener('click', function (event) {
        var item = getItemData(event.target);
        this.addItem(item);
        event.preventDefault();
        return false;
      }.bind(this));
    } // attach event listener to cart widget


    var cartHandler = this.cartNode.querySelector('.shoppingCart__openHandler');
    cartHandler.addEventListener('click', this.toggleCartOpen.bind(this));
    var paypalSuccessExit = this.cartNode.querySelector('.paypal-success__exit');
    paypalSuccessExit.addEventListener('click', this.toggleCartOpen.bind(this));
    var paypalFailureAction = this.cartNode.querySelector('.paypal-fail__action');
    paypalFailureAction.addEventListener('click', this.toggleCartOpen.bind(this));
    window.paypal.Buttons({
      createOrder: function (data, actions) {
        var createData = this.getCart();
        return actions.order.create(createData);
      }.bind(this),
      onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
          this.purchaseSuccess = true;
          this.removeAllItems();
          success(this.cartNode);
        }.bind(this));
      }.bind(this),
      onError: function (err) {
        failure(this.cartNode);
      }.bind(this),
      onCancel: function (data) {
        buy(this.cartNode);
      }.bind(this)
    }).render('.shoppingCart__button__checkout');
    document.addEventListener('click', function (e) {
      if (this.cartNode.classList.contains('shoppingCart--open') && !this.cartNode.contains(e.target)) {
        this.toggleCartOpen(e);
      }
    }.bind(this));
    this.updateCartContents();
  }

  Cart.prototype.toggleCartOpen = function (event) {
    this.purchaseSuccess = false;
    this.cartNode.classList.toggle('shoppingCart--open');
    document.body.classList.toggle('no-scroll');
    this.updateCartContents();
    event.preventDefault();
    event.stopPropagation();
    return false;
  };

  Cart.prototype.fromJSON = function (json) {
    if (!json) {
      return;
    }

    if (typeof json === 'string') {
      try {
        json = JSON.parse(json);
      } catch (e) {
        console.error(e);
        return;
      }
    }

    if (json.items) {
      this.items = json.items;
    }
  };

  Cart.prototype.toJSON = function () {
    return {
      items: this.items
    };
  };

  Cart.prototype.addItem = function (item) {
    // If an entry already exists for this item, combine quantity
    var itemExists = false;

    for (var i = 0; i < this.items.length; i++) {
      var itemIsInCart = this.items[i].id === item.id;
      var noAdditionalOption = !item.textField && !item.dropdownSelection;
      var textFieldExists = item.textField && this.items[i].textField === item.textField;
      var dropdownSelectionExists = item.dropdownSelection && this.items[i].dropdownSelection === item.dropdownSelection;

      if (itemIsInCart && (noAdditionalOption || textFieldExists || dropdownSelectionExists)) {
        this.items[i].quantity += item.quantity;
        itemExists = true;
        break;
      }
    } // Otherwise add entry for item


    if (!itemExists) {
      this.items.push(item);
    }

    this.updateCartContents();
  };

  Cart.prototype.removeItemAtIndex = function (index) {
    this.items.splice(index, 1);
    this.updateCartContents();
  };

  Cart.prototype.isEmpty = function () {
    return this.items.length === 0;
  };

  Cart.prototype.removeAllItems = function () {
    this.items = [];
    this.updateCartContents();
  };

  Cart.prototype.getCart = function () {
    var currency = this.currency;
    var itemUnits = this.items.map(v => {
      let tax;

      if (v.tax) {
        tax = {
          currency_code: currency,
          value: v.tax
        };
      }

      return {
        name: v.item_name.substr(0, 127),
        quantity: v.quantity,
        unit_amount: {
          currency_code: currency,
          value: v.amount
        },
        description: v.textField || v.dropdownSelection,
        tax
      };
    });
    var itemTotal = this.items.reduce(function (sum, item) {
      return Money.add(Money.floatToAmount(sum), Money.mul(item.amount, Money.floatToAmount(item.quantity)));
    }, '0.00');
    var taxTotal = this.items.reduce(function (sum, item) {
      return Money.add(Money.floatToAmount(sum), Money.mul(item.tax || '0.00', Money.floatToAmount(item.quantity)));
    }, '0.00');
    var shippingTotal = this.items.reduce(function (sum, item) {
      return Money.add(Money.floatToAmount(sum), Money.mul(item.shipping || '0.00', Money.floatToAmount(item.quantity)));
    }, '0.00');
    var purchase_units = [{
      amount: {
        value: [itemTotal, taxTotal, shippingTotal].reduce(Money.add, '0.00'),
        currency_code: currency,
        breakdown: {
          item_total: {
            currency_code: currency,
            value: itemTotal
          },
          tax_total: {
            currency_code: currency,
            value: taxTotal
          },
          shipping: {
            currency_code: currency,
            value: shippingTotal
          }
        }
      },
      items: itemUnits
    }];
    return {
      purchase_units
    };
  };

  Cart.prototype.getQuantity = function () {
    return this.items.reduce(function (sum, item) {
      return sum + item.quantity;
    }, 0);
  };

  Cart.prototype.updateCartContents = function () {
    if (this.items.length) {
      buy(this.cartNode);
    } else if (!this.purchaseSuccess) {
      empty(this.cartNode);
    } // We want to show the purchase success message and then remove it once the user has
    // added a new item or closed the window


    this.purchaseSuccess = false;
    var itemsNode = this.cartNode.querySelector('.shoppingCart__items');
    itemsNode.innerHTML = '';

    for (var i = 0; i < this.items.length; i++) {
      var item = this.createItemNode(this.items[i], i);
      itemsNode.appendChild(item);
    }

    var removeButtons = this.cartNode.querySelectorAll('.shoppingCart__item .item-remove');

    for (i = 0; i < removeButtons.length; i++) {
      var button = removeButtons[i];
      button.addEventListener('click', function (e) {
        var itemIndex = e.target.getAttribute('data-item-index');
        this.removeItemAtIndex(itemIndex);
        e.preventDefault();
        e.stopPropagation();
        return false;
      }.bind(this));
    }

    this.updateLabel();
    this.updateTotals();

    if (this.items.length > 0) {
      if (typeof window.localStorage !== 'undefined') {
        window.localStorage.setItem('shoppingCart', JSON.stringify(this.toJSON()));
      }
    } else {
      if (typeof window.localStorage !== 'undefined') {
        window.localStorage.removeItem('shoppingCart');
      }
    }
  };

  Cart.prototype.createItemNode = function (item, index) {
    var totalItemAmount = Money.mul(item.amount, Money.floatToAmount(item.quantity));
    var itemNode = this.cartNode.querySelector('.shoppingCart__item__template').firstChild.cloneNode(true);
    itemNode.classList.add('hasQuantity');
    itemNode.querySelector('.item-quantity__value').innerHTML = item.quantity;

    if (item.textField && item.textFieldLabel) {
      var textFieldLabel = item.textFieldLabel; // Custom textbox name does not end in ':'

      if (textFieldLabel && textFieldLabel.lastIndexOf(':') !== textFieldLabel.length - 1) {
        textFieldLabel += ':';
      }

      itemNode.querySelector('.item-textField__label').innerHTML = textFieldLabel;
      itemNode.querySelector('.item-textField__value').innerHTML = item.textField;
    } else {
      itemNode.querySelector('.item-textField__label').hidden = true;
      itemNode.querySelector('.item-textField__value').hidden = true;
    }

    if (item.dropdownSelection) {
      var dropdownName = item.dropdownName; // Dropdown name does not end in ':'

      if (dropdownName && dropdownName.lastIndexOf(':') !== dropdownName.length - 1) {
        dropdownName += ':';
      }

      itemNode.querySelector('.item-dropdownMenu__label').innerHTML = dropdownName;
      itemNode.querySelector('.item-dropdownMenu__value').innerHTML = item.dropdownSelection;
    } else {
      itemNode.querySelector('.item-dropdownMenu__label').hidden = true;
      itemNode.querySelector('.item-dropdownMenu__value').hidden = true;
    }

    itemNode.querySelector('.item-name').innerHTML = item.item_name;

    if (item.amountBeforeDiscount) {
      itemNode.classList.add('shoppingCart__item--discounted');
      var totalItemAmountBeforeDiscount = Money.mul(item.amountBeforeDiscount, Money.floatToAmount(item.quantity));
      itemNode.querySelector('.item-price').innerHTML = this.currencySymbol + Money.format(this.currency_code, totalItemAmountBeforeDiscount);
      itemNode.querySelector('.item-discounted-price').innerHTML = this.currencySymbol + Money.format(this.currency_code, totalItemAmount);
    } else {
      itemNode.querySelector('.item-price').innerHTML = this.currencySymbol + Money.format(this.currency_code, totalItemAmount);
    }

    itemNode.querySelector('.item-remove').setAttribute('data-item-index', index);
    return itemNode;
  };

  Cart.prototype.updateLabel = function () {
    var quantity = this.getQuantity();
    this.cartNode.setAttribute('data-quantity', quantity);

    if (quantity >= 100) {
      this.cartNode.classList.add('shoppingCart--large');
    } else {
      this.cartNode.classList.remove('shoppingCart--large');
    }
  };

  Cart.prototype.updateTotals = function () {
    if (!this.items.length) {
      return;
    }

    var subTotal = this.items.reduce(function (sum, item) {
      return Money.add(Money.floatToAmount(sum), Money.mul(item.amount, Money.floatToAmount(item.quantity)));
    }, '0.00');
    var subTotalNode = this.cartNode.querySelector('.shoppingCart__checkout .subTotal__amount');
    subTotalNode.innerHTML = this.currencySymbol + Money.format(this.currency_code, subTotal);
    var taxTotal = this.items.reduce(function (sum, item) {
      return Money.add(Money.floatToAmount(sum), Money.mul(item.tax || '0.00', Money.floatToAmount(item.quantity)));
    }, '0.00');
    var taxTotalNode = this.cartNode.querySelector('.shoppingCart__checkout .taxTotal__amount');
    taxTotalNode.innerHTML = this.currencySymbol + Money.format(this.currency_code, taxTotal);
    var shippingTotal = this.items.reduce(function (sum, item) {
      return Money.add(Money.floatToAmount(sum), Money.mul(item.shipping || '0.00', Money.floatToAmount(item.quantity)));
    }, '0.00');
    var shippingTotalNode = this.cartNode.querySelector('.shoppingCart__checkout .shippingTotal__amount');
    shippingTotalNode.innerHTML = this.currencySymbol + Money.format(this.currency_code, shippingTotal);
    var grandTotal = Money.add(Money.add(subTotal, taxTotal), shippingTotal);
    var grandTotalNode = this.cartNode.querySelector('.shoppingCart__checkout .grandTotal__amount');
    grandTotalNode.innerHTML = this.currencySymbol + Money.format(this.currency_code, grandTotal);
  };

  function buy(cart) {
    cart.classList.add('shoppingCart--buy');
    cart.classList.remove('shoppingCart--failure');
    cart.classList.remove('shoppingCart--success');
    cart.classList.remove('shoppingCart--empty');
  }

  function failure(cart) {
    cart.classList.remove('shoppingCart--buy');
    cart.classList.add('shoppingCart--failure');
    cart.classList.remove('shoppingCart--success');
    cart.classList.remove('shoppingCart--empty');
  }

  function success(cart) {
    cart.classList.remove('shoppingCart--buy');
    cart.classList.remove('shoppingCart--failure');
    cart.classList.add('shoppingCart--success');
    cart.classList.remove('shoppingCart--empty');
  }

  function empty(cart) {
    cart.classList.remove('shoppingCart--buy');
    cart.classList.remove('shoppingCart--failure');
    cart.classList.remove('shoppingCart--success');
    cart.classList.add('shoppingCart--empty');
  }
  /*
   * Ensure that the amount is in the format xx.xx
   * This is a requirement for the money-math library.
   */


  function getMoneyAmount(value) {
    if (!value || value.match(validMoneyRegex)) {
      return value;
    }

    value = parseFloat(value);
    return Money.floatToAmount(value);
  }

  function getItemData(element) {
    let amount;
    let amountBeforeDiscount;
    var totalAmount = getMoneyAmount(element.getAttribute('data-publishedjs-amount'));

    if (element.getAttribute('data-publishedjs-discount')) {
      amount = Money.subtract(totalAmount, getMoneyAmount(element.getAttribute('data-publishedjs-discount')));
      amountBeforeDiscount = totalAmount;
    } else {
      amount = totalAmount;
    }

    return {
      id: element.getAttribute('data-publishedjs-id'),
      item_name: element.getAttribute('data-publishedjs-item-name'),
      amount,
      amountBeforeDiscount,
      shipping: getMoneyAmount(element.getAttribute('data-publishedjs-shipping')),
      tax: getMoneyAmount(element.getAttribute('data-publishedjs-tax')),
      quantity: parseInt(element.getAttribute('data-publishedjs-quantity'), 10),
      textField: element.getAttribute('data-publishedjs-text-field'),
      textFieldLabel: element.getAttribute('data-publishedjs-text-field-label'),
      dropdownName: element.getAttribute('data-publishedjs-dropdown-name'),
      dropdownSelection: element.getAttribute('data-publishedjs-dropdown-selection')
    };
  }

  new Cart();
  var cartNode = document.getElementsByClassName('shoppingCart')[0];
  var paypalPips = document.getElementsByClassName('paypal-pip');
  var showCart = paypalPips && paypalPips.length > 0 || typeof window.localStorage !== 'undefined' && window.localStorage.getItem('shoppingCart');

  if (showCart && cartNode) {
    cartNode.classList.add('shoppingCart--show');
  }
})();
/*********/
/* eslint no-var: 0, prefer-const: 0 */
'use strict';

(function () {
  function toggleMenuClasses() {
    var mobileContent = document.querySelector('.mobile-content');
    document.body.classList.toggle('no-scroll');
    document.body.classList.toggle('mobile-menu-active');
    mobileContent.classList.toggle('active');
    mobileContent.setAttribute('aria-expanded', mobileContent.classList.contains('active'));
  }

  function handleMenuClick(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    toggleMenuClasses();
  }

  function setUpButtonHandler() {
    // Set the block containing the mobile nav to have a higher z index.
    // This guarantees that the mobile menu overlay will be above all other site content.
    var blockWithFirstNavPip = document.querySelector('.mobile-menu-button--firstnav');

    if (blockWithFirstNavPip) {
      var blockId = blockWithFirstNavPip.getAttribute('data-parent-block-id');
      var parentBlock = document.querySelector(`[data-tower-id="${blockId}"]`);
      parentBlock.style.zIndex = '10';
    }

    var menuButton = document.querySelectorAll('.pip.navigation-pip .mobile-menu-button');

    for (var m = 0; m < menuButton.length; m++) {
      menuButton[m].onclick = handleMenuClick;
    }

    var navLinks = document.querySelectorAll('.mobile-wrapper a');

    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', toggleMenuClasses);
    }
  }

  setUpButtonHandler();
})();
/*********/
/* eslint no-var: 0, prefer-const: 0 */
'use strict';

function shouldDockRight(elm) {
  if (!elm) {
    return false;
  }

  var rect = elm.getBoundingClientRect();
  var elmWidth = rect.width;
  var elmLeft = rect.left;
  return elmWidth + elmLeft > window.pageXOffset + window.innerWidth;
}

function shouldDockVerticalLeft(elm) {
  if (!elm) {
    return false;
  }

  var rect = elm.getBoundingClientRect();
  return rect.left < 0;
}

function positionChildNav(elm) {
  if (shouldDockRight(elm)) {
    elm.classList.add('nav-children--right');
  }

  if (shouldDockVerticalLeft(elm)) {
    elm.classList.add('nav-children--vertical--left');
  }
}

function applyPositionToSubnav(elm) {
  if (elm.tagName === 'LI' && elm.classList.contains('link')) {
    return positionChildNav(elm.querySelector('.nav-children'));
  } else if (elm.parentNode) {
    // recursively call to check if the parent node is `li.link`
    return applyPositionToSubnav(elm.parentNode);
  }
}

function handleSubnavEvent(event) {
  applyPositionToSubnav(event.target);
}

function setupSubNavPositioningEventHandlers() {
  var desktopLinkList = document.querySelector('.desktopLinks');

  if (!desktopLinkList) {
    return;
  }

  desktopLinkList.addEventListener('mouseover', handleSubnavEvent);
  desktopLinkList.addEventListener('click', handleSubnavEvent);
  var topLevelLinks = document.querySelectorAll('.desktopLinks > li > a');

  if (!topLevelLinks) {
    return;
  }

  for (var i = 0; i < topLevelLinks.length; i++) {
    topLevelLinks[i].addEventListener('focus', handleSubnavEvent);
  }
} // only execute when in preview or publish mode


if (typeof window !== 'undefined' && window.towerData === undefined) {
  setupSubNavPositioningEventHandlers();
}

if (typeof module !== 'undefined') {
  module.exports = {
    shouldDockRight
  };
}
/*********/
/* eslint no-var: 0, prefer-const: 0 */
'use strict';

var MEDIA_GALLERY_SLIDESHOW_SELECTOR = '.media-gallery--slideshow';
var SLIDESHOW_CONTAINER_SELECTOR = '[data-slideshow]';
var SLIDESHOW_IMAGE_SELECTOR = '.slideshow-image';
var SLIDESHOW_BELOW_IMAGE_DESCRIPTOR_SELECTOR = '.image-descriptor--below-image';
var SLIDESHOW_ARROW_LEFT_SELECTOR = '[data-slideshow-left]';
var SLIDESHOW_ARROW_RIGHT_SELECTOR = '[data-slideshow-right]';
var THUMBNAIL_CONTAINER_SELECTOR = '[data-media-gallery-list]';
var THUMBNAIL_WRAPPER_SELECTOR = '[data-slideshow-thumb-selected]';
var THUMBNAIL_IMAGE_SELECTOR = '[data-slideshow-image-selected]';
var SLIDESHOW_MARGIN_OFFSET = 10; // SVG Classlist Polyfill https://github.com/naminho/svg-classlist-polyfill/blob/master/polyfill.js

if (!('classList' in SVGElement.prototype)) {
  Object.defineProperty(SVGElement.prototype, 'classList', {
    get: function get() {
      var _this = this;

      return {
        contains: function contains(className) {
          return _this.className.baseVal.split(' ').indexOf(className) !== -1;
        },
        add: function add(className) {
          return _this.setAttribute('class', _this.getAttribute('class') + ' ' + className);
        },
        remove: function remove(className) {
          var removedClass = _this.getAttribute('class').replace(new RegExp('(\\s|^)'.concat(className, '(\\s|$)'), 'g'), '$2');

          if (_this.classList.contains(className)) {
            _this.setAttribute('class', removedClass);
          }
        },
        toggle: function toggle(className) {
          if (this.contains(className)) {
            this.remove(className);
          } else {
            this.add(className);
          }
        }
      };
    }
  });
}

function scrollToThumbnail(container) {
  const image = container.querySelector('[data-slideshow-thumb-selected="true"]');
  container.scrollLeft = image.offsetLeft - container.offsetWidth / 2 + image.offsetWidth / 2;
}

function incrementSlideCount(slideshow, increment) {
  var animation = slideshow.dataset.animation;
  var column = slideshow.querySelector(SLIDESHOW_CONTAINER_SELECTOR);
  var images = column.querySelectorAll(SLIDESHOW_IMAGE_SELECTOR);
  var numOfSlides = parseInt(column.dataset.slideCount);
  var currentSlide = parseInt(column.dataset.currentSlide);
  var newCurrentSlide = (currentSlide + increment + numOfSlides) % numOfSlides;
  scrollToSlide(slideshow, newCurrentSlide, increment);
  setTimeout(function () {
    setOrder(images, increment, animation, slideshow, newCurrentSlide);
    column.style.transform = 'none';
    column.style.transition = 'none';
  }, 200);
}

function twoImageIncrementSlideCount(slideshow, increment, autoplayOverride) {
  var animation = slideshow.dataset.animation;
  var column = slideshow.querySelector(SLIDESHOW_CONTAINER_SELECTOR);
  var images = column.querySelectorAll(SLIDESHOW_IMAGE_SELECTOR);
  var currentSlide = parseInt(column.dataset.currentSlide);
  var numOfSlides = parseInt(column.dataset.slideCount);
  var firstSlideAndMovingLeft = increment === -1 && currentSlide === 0;
  var lastSlideAndMovingRight = increment === 1 && currentSlide === 1;
  var newIncrement = firstSlideAndMovingLeft || lastSlideAndMovingRight ? -increment : increment;

  if (!firstSlideAndMovingLeft && !lastSlideAndMovingRight || autoplayOverride) {
    var newCurrentSlide = (currentSlide + newIncrement + numOfSlides) % numOfSlides;
    scrollToSlide(slideshow, newCurrentSlide, newIncrement);
    setTimeout(function () {
      setOrder(images, newIncrement, animation, slideshow, newCurrentSlide);
      column.style.transition = 'none';
    }, 200);
  }
}

function setOrder(images, increment, animation, slideshow, newCurrentSlide) {
  for (var i = 0; i < images.length; i++) {
    var image = images[i];
    var imageCount = images.length;
    var order = image.style.order;
    var newOrder;

    if (imageCount === 2) {
      newOrder = order - increment;
    } else if (imageCount === 1) {
      newOrder = 1;
    } else {
      newOrder = (order - increment + imageCount) % imageCount;
    }

    image.style.order = newOrder;

    if (animation === 'fade' && newOrder !== 1) {
      image.classList.add('slideshow-image--transparent');
    } else if (animation === 'fade' && newOrder === 1) {
      image.classList.remove('slideshow-image--transparent');
    }

    adjustArrowHeight(slideshow, images[newCurrentSlide]);
  }
}

function toggleSlideshowPause(slideshow) {
  var playButton = slideshow.querySelector('.slideshow__control--play');
  var pauseButton = slideshow.querySelector('.slideshow__control--pause');

  if (slideshow.dataset.slideshowAutoplayPaused === 'true') {
    playButton.classList.add('slideshow__control--invisible');
    pauseButton.classList.remove('slideshow__control--invisible');
    slideshow.dataset.slideshowAutoplayPaused = 'false';
  } else if (slideshow.dataset.slideshowAutoplayPaused === 'false') {
    pauseButton.classList.add('slideshow__control--invisible');
    playButton.classList.remove('slideshow__control--invisible');
    slideshow.dataset.slideshowAutoplayPaused = 'true';
  }
}

function setUpAutoPlay(slideshow) {
  var numOfSlides = findNumOfSlides(slideshow);

  if (slideshow.dataset.slideshowAutoplay === 'true') {
    var playButton = slideshow.querySelector('.slideshow__control--play');
    var pauseButton = slideshow.querySelector('.slideshow__control--pause');
    pauseButton.classList.add('slideshow__control--invisible');
    slideshow.dataset.slideshowAutoplayPaused = 'true';
    playButton.addEventListener('click', toggleSlideshowPause.bind(null, slideshow));
    pauseButton.addEventListener('click', toggleSlideshowPause.bind(null, slideshow));
    var autoplayTime = slideshow.dataset.slideshowAutoplayTime;
    setInterval(() => {
      if (slideshow.dataset.slideshowAutoplayPaused === 'false') {
        if (numOfSlides === 2) {
          twoImageIncrementSlideCount(slideshow, 1, true);
        } else {
          incrementSlideCount(slideshow, 1);
        }
      }
    }, autoplayTime * 1000);
  }
}

function scrollToSlide(slideshow, slide, increment) {
  var animation = slideshow.dataset.animation;
  var column = slideshow.querySelector(SLIDESHOW_CONTAINER_SELECTOR);
  var numOfSlides = parseInt(column.dataset.slideCount);

  if (numOfSlides === 1) {
    return;
  }

  column.dataset.currentSlide = slide;
  var slideInc = numOfSlides === 2 ? slide : increment;

  if (animation !== 'fade') {
    var percentValue = 1 / numOfSlides * 100 * -1;
    var translateValue = slideInc * percentValue;
    column.style.transform = 'translateX(' + translateValue + '%)';

    if (increment < -1) {
      const left = -100 + 100 * increment;
      column.style.left = left + '%';
    }
  }

  if (animation === 'slide') {
    column.style.transition = 'transform 0.2s ease-in 0s';
  }

  var thumbnailContainer = slideshow.querySelector(THUMBNAIL_CONTAINER_SELECTOR);
  thumbnailContainer.dataset.currentSlide = slide;
  setThumbnailHighlight(thumbnailContainer);
  scrollToThumbnail(thumbnailContainer);
}

function scrollToSelected(slideshow, slideNum) {
  var animation = slideshow.dataset.animation;
  var column = slideshow.querySelector(SLIDESHOW_CONTAINER_SELECTOR);
  var numOfSlides = findNumOfSlides(slideshow);
  var images = slideshow.querySelectorAll(SLIDESHOW_IMAGE_SELECTOR);
  var selectedImage = images[slideNum];
  var selectedImageOrder = selectedImage.style.order;
  var orderChange = selectedImageOrder - 1;
  var currentSlide = column.dataset.currentSlide;
  var increment = slideNum - currentSlide;

  if (increment < -1) {
    setOrder(images, increment, animation, slideshow, slideNum);
    images = slideshow.querySelectorAll(SLIDESHOW_IMAGE_SELECTOR);
    selectedImage = images[slideNum];
    selectedImageOrder = selectedImage.style.order;
    orderChange = selectedImageOrder - 1;
  }

  scrollToSlide(slideshow, slideNum, increment);
  setTimeout(function () {
    setOrder(images, orderChange, animation, slideshow, slideNum);
    column.style.transform = numOfSlides === 2 ? column.style.transform : 'none';
    column.style.transition = 'none';

    if (animation !== 'fade') {
      column.style.left = numOfSlides > 2 ? '-100%' : '0%';
    }
  }, 200);
}

function setThumbnailHighlight(thumbnailContainer) {
  var currentSlide = thumbnailContainer.dataset.currentSlide;
  var thumbnails = thumbnailContainer.querySelectorAll(THUMBNAIL_IMAGE_SELECTOR);
  var thumbnailButtons = thumbnailContainer.querySelectorAll(THUMBNAIL_WRAPPER_SELECTOR);

  for (var i = 0; i < thumbnails.length; i++) {
    var thumbnail = thumbnails[i];
    var slide = thumbnail.dataset.slide;
    var thumbnailButton = thumbnailButtons[i];

    if (slide === currentSlide) {
      thumbnail.classList.add('media-gallery-option--highlighted');
      thumbnailButton.dataset.slideshowThumbSelected = 'true';
    } else {
      thumbnail.classList.remove('media-gallery-option--highlighted');
      thumbnailButton.dataset.slideshowThumbSelected = 'false';
    }
  }
}

function findNumOfSlides(slideshow) {
  var column = slideshow.querySelector(SLIDESHOW_CONTAINER_SELECTOR);
  var numOfSlides = parseInt(column.dataset.slideCount);
  return numOfSlides;
}

function adjustArrowHeight(slideshow, image) {
  var imageHeight = image.querySelector('div:not(.slideshow-image--transparent) .image-media__image-container').offsetHeight;
  var imageDescriptor = image.querySelector(SLIDESHOW_BELOW_IMAGE_DESCRIPTOR_SELECTOR);
  var thumbnailHeight = slideshow.querySelector('.media-gallery-thumbnail-list').offsetHeight + SLIDESHOW_MARGIN_OFFSET;
  var slideshowHeight = slideshow.offsetHeight;
  var imageWithTitleDescriptionHeight = image.offsetHeight;
  var leftButton = slideshow.querySelector(SLIDESHOW_ARROW_LEFT_SELECTOR);
  var rightButton = slideshow.querySelector(SLIDESHOW_ARROW_RIGHT_SELECTOR); // pushArrowByTop is the value the arrows are pushed down to center itself
  // on the slideshow images. Thumbnail height and Image along with Title & Description
  // height are subtracted from the Slideshow height and the remaining whitespace is divided
  // by 2 to obtain the spacing above and below the image.

  var pushArrowByTop = (slideshowHeight - thumbnailHeight - imageWithTitleDescriptionHeight) / 2;

  if (imageDescriptor) {
    leftButton.style.height = `${imageHeight}px`;
    leftButton.style.top = `${pushArrowByTop}px`;
    rightButton.style.height = `${imageHeight}px`;
    rightButton.style.top = `${pushArrowByTop}px`;
  } else {
    leftButton.style.height = '100%';
    leftButton.style.top = '0';
    rightButton.style.height = '100%';
    rightButton.style.top = '0';
  }
}

function setUpSlideshows() {
  var slideshows = document.querySelectorAll(MEDIA_GALLERY_SLIDESHOW_SELECTOR);

  for (var i = 0; i < slideshows.length; i++) {
    var slideshow = slideshows[i];
    var numOfSlides = findNumOfSlides(slideshow);
    var images = slideshow.querySelectorAll(SLIDESHOW_IMAGE_SELECTOR);
    var animation = slideshow.dataset.animation; // eslint-disable-next-line

    Array.prototype.forEach.call(images, function (img, imgIdx) {
      if (imgIdx >= 2 && imgIdx === images.length - 1) {
        imgIdx = 0;
      } else {
        imgIdx += 1;
      }

      if (imgIdx === 1 && animation === 'fade') {
        img.classList.remove('slideshow-image--transparent');
      }

      img.style.order = imgIdx;
    });
    setUpAutoPlay(slideshow);
    var leftButton = slideshow.querySelector(SLIDESHOW_ARROW_LEFT_SELECTOR);
    var rightButton = slideshow.querySelector(SLIDESHOW_ARROW_RIGHT_SELECTOR);
    var image = slideshow.querySelector(SLIDESHOW_IMAGE_SELECTOR);

    if (leftButton && rightButton) {
      adjustArrowHeight(slideshow, image);

      if (numOfSlides === 2) {
        leftButton.addEventListener('click', twoImageIncrementSlideCount.bind(null, slideshow, -1));
        rightButton.addEventListener('click', twoImageIncrementSlideCount.bind(null, slideshow, 1));
      } else {
        leftButton.addEventListener('click', incrementSlideCount.bind(null, slideshow, -1));
        rightButton.addEventListener('click', incrementSlideCount.bind(null, slideshow, 1));
      }
    }

    var thumbnails = slideshow.querySelectorAll(THUMBNAIL_WRAPPER_SELECTOR);

    for (var j = 0; j < thumbnails.length; j++) {
      var thumbnail = thumbnails[j];
      var slideNum = thumbnail.dataset.slide;
      thumbnail.addEventListener('click', scrollToSelected.bind(null, slideshow, slideNum));
    }
  }
}

setUpSlideshows();
/*********/
/* eslint no-var: 0, prefer-const: 0 */
'use strict';

(function () {
  var buttons = document.querySelectorAll('.button-quark');
  var popovers = document.querySelectorAll('.is-popover');
  var closeIcons = document.querySelectorAll('.is-popover .popover-close-button');
  var popoverOverlay = document.getElementById('document-popover-overlay');
  var popoverOpen = false;
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var popoverId = button.getAttribute('data-popover-id');

      if (!popoverOpen && popoverId) {
        if (popoverId !== undefined) {
          var popoverBlock = document.querySelector(`.${popoverId}`);
          popoverBlock.classList.add('popover-visible');
          popoverOverlay.classList.add('visible');
          popoverOpen = true;
          document.body.style.overflow = 'hidden';
          stickPopoverHeader(popoverBlock.querySelector('div[data-pip-type="subGrid"]'));
        }
      }
    });
  });

  const closePopover = function () {
    popovers.forEach(dialog => dialog.classList.remove('popover-visible'));
    popoverOverlay.classList.remove('visible');
    popoverOpen = false;
    document.body.style.overflow = 'initial';
  };

  closeIcons.forEach(function (closeButton) {
    closeButton.addEventListener('click', closePopover);
  });
  popoverOverlay.addEventListener('click', closePopover);

  function stickPopoverHeader(popoverHeader) {
    if (popoverHeader) {
      popoverHeader.style.position = 'sticky';
      popoverHeader.style.top = 0;
      popoverHeader.style.background = 'white';
      popoverHeader.style.zIndex = 2;
    }
  }
})();
/*********/
var tower = {"document":{"documentStyle":{"backgroundColor":"#fff4a8","colorPalette":{"slug":"custom","colors":{"color1":{"value":"#fff4a8","name":"Soothing - Navy"},"color2":{"value":"#e3d475","name":"Soothing - Blue"},"color3":{"value":"#e3d475","name":"Soothing - Teal"},"color4":{"value":"#ffffff","name":"Soothing - White"},"color5":{"value":"#000000","name":"Soothing - Black"}},"name":"Soothing","matchingDefault":false},"customColorPalette":["#fff4a8","#e3d475","#e3d475"],"fontPack":{"userSet":true,"fontSizes":{"fontSize1":{"name":"Smallest","value":"60%"},"fontSize2":{"name":"Smaller","value":"80%"},"fontSize3":{"name":"Normal","value":"100%"},"fontSize4":{"name":"Larger","value":"120%"},"fontSize5":{"name":"Largest","value":"140%"}},"fonts":{"font1":{"name":"Merriweather","value":"Merriweather"},"font2":{"name":"Merriweather","value":"Merriweather"}},"imports":{"google":["Merriweather","Merriweather"]},"name":"Merriweather & Merriweather","slug":"merriweather-merriweather"},"width":"1100px","align":"center","layout":{"slug":"standard"},"buttonStyle":{"style":"flat","radius":"soft","userSet":true},"siteAlignment":"center","backgroundImage":{"url":"https://assets.digital.vistaprint.com/production/5181c527-433e-4858-9695-9685b34a11b1","tile":true,"fixed":false,"cropData":{"x":0,"y":0,"width":215,"height":195},"rotation":0},"backgroundOpacity":0,"customFont":{"userSet":true,"fontSizes":{"fontSize1":{"name":"Smallest","value":"60%"},"fontSize2":{"name":"Smaller","value":"80%"},"fontSize3":{"name":"Normal","value":"100%"},"fontSize4":{"name":"Larger","value":"120%"},"fontSize5":{"name":"Largest","value":"140%"}},"fonts":{"font1":{"name":"Merriweather","value":"Merriweather"},"font2":{"name":"Merriweather","value":"Merriweather"}},"imports":{"google":["Merriweather","Merriweather"]},"name":"Merriweather & Merriweather","slug":"merriweather-merriweather"}},"headerBlock":{"slug":"grid-navigation-normal","props":{"name":"","type":"header","fluid":false,"layout":"left","moveable":false,"nameable":true,"position":"top","background":{"color":{"value":"color5","opacity":0},"image":{"url":"https://assets.digital.vistaprint.com/production/0bf93d76-0cb9-4302-904a-9dc8e54c4240","style":"tiled","parallax":true,"originalUrl":"https://assets.digital.vistaprint.com/production/0bf93d76-0cb9-4302-904a-9dc8e54c4240"},"className":"h-auto","backgroundType":"image","imageTransparency":true},"userHeight":{"top":5,"bottom":39},"layoutConfig":{"id":0,"label":"Line (top)","embellishments":{"elements":{"topEdges":[{"width":"100%","height":5,"zIndex":1,"backgroundColor":"#E3D475"}],"leftEdges":[],"rightEdges":[],"bottomEdges":[],"topLeftCorners":[],"topRightCorners":[],"bottomLeftCorners":[],"bottomRightCorners":[]},"container":{}},"userSelectable":true}},"version":3,"children":[{"pip":"grid","props":{"uid":"fba6fac8ced14e6faf0597b00d0f9024"},"children":[{"pip":"gridCol","props":{"size":12,"spacing":{},"alignment":"center","backgrounds":[],"contentPadding":{"top":10,"left":10,"right":10,"bottom":20},"pipToHighlight":[],"pipToMoveIndex":[],"mobileOverrides":{"spacing":{"top":0,"left":0,"right":0,"bottom":0},"contentPadding":{"top":10,"left":10,"right":10,"bottom":10}},"uid":"e9caafcdcc1f48c997e9114d717bd7c9","tabletOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0},"backgrounds":[]}},"children":[{"pip":"title","props":{"level":2,"content":"<p style=\"text-align: left;\"><span class=\"font-size10\"><span data-font-required=\"google:Dancing Script\" class=\"font-dancing_script\"><span style=\"color:#e3d475\" data-color=\"#e3d475\" class=\"font-custom-color-#e3d475\"><b>Avanti Salon</b></span></span></span></p>","className":"","customized":true,"defaultFont":"font1","fontRequired":["google:Dancing Script"],"websafeFonts":[],"contentMargin":{"top":0,"left":"auto","right":"auto","bottom":0},"contentBinding":null,"defaultFontSize":"size8","mobileOverrides":{},"tabletOverrides":{},"requiresCustomization":true,"paragraphWrappedContent":true,"uid":"569b24f2f2b64cc4bc8f3fb2bb339ad8","pageMetadata":{},"documentStyle":{},"blockData":{},"index":[]}}]},{"pip":"gridCol","props":{"size":12,"border":{"top":{"color":"#000","style":"solid","width":0},"left":{"color":"#000","style":"solid","width":0},"right":{"color":"#000","style":"solid","width":0},"bottom":{"color":"#000","style":"solid","width":0},"radius":7},"spacing":{},"alignment":"center","backgrounds":[{"size":"cover","color":"rgb(41, 41, 41)","position":{"x":"center","y":"center"}}],"contentPadding":{"top":10,"left":10,"right":10,"bottom":10},"pipToHighlight":[],"pipToMoveIndex":[],"mobileOverrides":{"spacing":{"top":0,"left":0,"right":0,"bottom":0},"contentPadding":{"top":10,"left":10,"right":10,"bottom":10}},"uid":"43c35417a7894d2aab408bacfaf8202e","tabletOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0},"backgrounds":[]}},"children":[{"pip":"navigation","props":{"bold":false,"italic":false,"spacing":10,"fontSize":"size2","linkColor":"","decoration":"underscore","mobileMenu":"tablet","defaultFont":"font2","contentMargin":{"top":0,"left":0,"right":"auto","bottom":20},"backgroundColor":"","decorationColor":"#fff4a8","defaultFontSize":"fontSize3","mobileOverrides":{"contentMargin":{"top":0,"left":"auto","right":"auto","bottom":0}},"tabletOverrides":{"contentMargin":{"top":0,"left":"auto","right":"auto","bottom":0}},"adjustableMobileMenuColor":true,"uid":"9b4a2e3789db4c05ae43deaa21d9db71","fontFamily":"websafe:Arial","activeLinkColor":"#ffffff"}}]}]}],"displayName":"Normal Navigation","_uid":"425d34f92acb4c1faf717f51bea515c0"},"footerBlock":{"slug":"grid-footer-social-links","props":{"type":"footer","moveable":false,"nameable":false,"position":"bottom","background":{"color":{"value":"color5","opacity":0},"image":{"url":"","style":"","parallax":false,"savedUrl":"","originalUrl":"","savedOriginalUrl":""},"backgroundType":"none","imageTransparency":true},"userHeight":{"top":10,"bottom":10},"layoutConfig":{"id":0,"label":"Line (top)","embellishments":{"elements":{"topEdges":[{"width":"100%","height":5,"zIndex":1,"backgroundColor":"#E3D475"}],"leftEdges":[],"rightEdges":[],"bottomEdges":[],"topLeftCorners":[],"topRightCorners":[],"bottomLeftCorners":[],"bottomRightCorners":[]},"container":{}},"userSelectable":true},"positionOverlay":true},"version":3,"children":[{"pip":"grid","props":{"uid":"6d1ab1180e824459838194b0f81ae27f"},"children":[{"pip":"gridCol","props":{"size":12,"spacing":{},"alignment":"center","backgrounds":[],"contentPadding":{"top":10,"left":20,"right":20,"bottom":10},"pipToHighlight":[],"pipToMoveIndex":[],"mobileOverrides":{"spacing":{"top":0,"left":0,"right":0,"bottom":0},"contentPadding":{"top":10,"left":10,"right":10,"bottom":10}},"uid":"f5ebb31f5cad4234a535238df69683fc","tabletOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0},"backgrounds":[]}},"children":[{"pip":"title","props":{"level":5,"content":"<p><br></p>","className":"","customized":true,"defaultFont":"font2","fontRequired":[],"websafeFonts":[],"contentMargin":{"top":0,"left":"auto","right":"auto","bottom":20},"contentBinding":null,"mobileOverrides":{},"tabletOverrides":{},"defaultAlignment":"left","requiresCustomization":true,"paragraphWrappedContent":true,"uid":"4b24e5c18d41480eba699fea6efe48e0","pageMetadata":{},"documentStyle":{},"blockData":{},"index":[]}}]}]}],"displayName":"Social Links Footer","_uid":"04545c5c577d4f2d8fd5a12ad58d5e71"},"sidebarBlock":{"slug":"default-sidebar","props":{"type":"sidebar","fluid":true,"background":{"color":{"value":"#dbe8a5","opacity":1},"backgroundType":"color","imageTransparency":true},"userHeight":{"top":40,"bottom":40},"showGridLinesInSidebar":true},"version":3,"children":[{"pip":"grid","props":{"uid":"7317f628b6e64208b8b1bd1d0e0aa85d"},"children":[{"pip":"gridCol","props":{"size":12,"spacing":{},"alignment":"top","backgrounds":[],"contentPadding":{"top":10,"left":10,"right":10,"bottom":10},"pipToHighlight":[],"pipToMoveIndex":[],"mobileOverrides":{"spacing":{"top":0,"left":0,"right":0,"bottom":0},"contentPadding":{"top":10,"left":10,"right":10,"bottom":10}},"uid":"881fc4ceabbc46a4825dd085d36673fc"},"children":[{"pip":"title","props":{"level":1,"content":"<p>Global right sidebar</p>","className":"","customized":true,"defaultFont":"font1","fontRequired":[],"websafeFonts":[],"contentMargin":{"top":0,"left":"auto","right":"auto","bottom":20},"contentBinding":null,"defaultFontSize":"size9","mobileOverrides":{},"tabletOverrides":{},"requiresCustomization":true,"paragraphWrappedContent":true,"uid":"2616fc8401e24f279adfb5746dcbd749"}},{"pip":"navigation","props":{"bold":false,"italic":false,"spacing":10,"fontSize":"size1","alignment":"left","decoration":"underscore","mobileMenu":"tablet","defaultFont":"font2","orientation":"vertical","contentMargin":{"top":0,"left":"auto","right":"auto","bottom":20},"defaultFontSize":"fontSize3","mobileOverrides":{"contentMargin":{"top":0,"left":"auto","right":"auto","bottom":0}},"tabletOverrides":{"contentMargin":{"top":0,"left":"auto","right":"auto","bottom":0}},"adjustableMobileMenuColor":true,"uid":"a7819ca7c0c046558e66a4d51c73cff2"}}]}]}],"displayName":"Default Sidebar","_uid":"fed7d9e0a22b4f4e9b0dfa78a58d0c2f"},"homePageId":2685062710,"multipage":true,"pages":{"2685062710":{"id":2685062710,"name":"HOME","path":"","order":0,"hidden":false,"seoTitle":"Home","blockLinks":[],"currentLayoutSlug":"default"},"1663856290735609":{"id":1663856290735609,"name":"ABOUT","path":"about-us","order":2,"hidden":false,"seoTitle":"ABOUT","blockLinks":[],"currentLayoutSlug":"default"},"1663856290903551":{"id":1663856290903551,"name":"CONTACT","path":"contact-us","order":1,"hidden":false,"seoTitle":"CONTACT","blockLinks":[],"currentLayoutSlug":"default"},"1663856728532005":{"id":1663856728532005,"name":"PHOTO GALLERY","path":"apps/photos","order":3,"hidden":false,"external":false,"url":"","seoTitle":"PHOTO GALLERY","currentLayoutSlug":"default","hideGlobalBlocks":false,"appId":"com.vistaprint.sb3-photos","passwordProtected":false,"blockLinks":[]},"1663856746703780":{"id":1663856746703780,"name":"SERVICES","path":"services","order":4,"hidden":false,"external":false,"url":"","seoTitle":"SERVICES","currentLayoutSlug":"default","hideGlobalBlocks":false,"passwordProtected":false,"blockLinks":[]}},"metadata":{"email":"salonavanti124@gmail.com","industry":null,"businessName":null,"paypalCurrency":"USD","paypalDonateCurrency":"USD","hasBeenEdited":true,"recentColors":["#999999","#c2c2c2","#e3d475","#fff4a8","#ffffff"],"publishedUrl":"http://5avl3b1tqitgczq8.vistaprintdigital.com","contentBinding":{},"hideGlobalBlocks":false,"pageSidebarBlock":{"_uid":"af640a5c2c344f7982e705cf9cbbef8c","slug":"grid-1x1","props":{"fluid":true,"background":{"color":{"value":"#dbe8a5","opacity":1},"backgroundType":"color","imageTransparency":true},"userHeight":{"top":40,"bottom":40},"sidebarSlot":"left","showGridLinesInSidebar":true},"version":3,"children":[{"pip":"grid","props":{"uid":"9950465f93fa4325b127a8a93b93040a"},"children":[{"pip":"gridCol","props":{"uid":"1821979191fa4bb9958b572d1ec1ec91","size":12,"spacing":{},"alignment":"top","backgrounds":[],"contentPadding":{"top":10,"left":10,"right":10,"bottom":10},"pipToHighlight":[],"pipToMoveIndex":[],"mobileOverrides":{"spacing":{"top":0,"left":0,"right":0,"bottom":0},"contentPadding":{"top":10,"left":10,"right":10,"bottom":10}}},"children":[{"pip":"paragraph","props":{"uid":"d9e9c70ca82442b9baa0cbc389ea69df","content":"<p>Page-only left sidebar</p>","customized":true,"defaultFont":"font2","fontRequired":[],"contentMargin":{"top":0,"left":"auto","right":"auto","bottom":20},"defaultFontSize":"size3","mobileOverrides":{},"tabletOverrides":{},"paragraphWrappedContent":true}}]}]}],"metadata":{},"displayName":"Grid 1 x 1"},"headerStyle":"full","towerVersion":"17.0.0"},"builderData":{"recentFonts":[{"name":"Arial","slug":"arial","public":true,"source":"websafe","fontFamily":"Arial","imageUrl":"/images/fonts/arial.png"},{"name":"Dancing Script","slug":"dancing_script","public":true,"source":"google","imageUrl":"/images/fonts/dancing_script.png","fontFamily":"Dancing Script"}]},"id":2685062710,"blocks":[{"slug":"grid-image-bucket-carousel","faces":[{"children":[{"pip":"grid","children":[{"pip":"gridCol","props":{"size":12,"spacing":{"top":0,"left":0,"right":0},"backgrounds":[],"contentPadding":{"top":0,"left":25,"right":25,"bottom":0},"uid":"0e8ff5bc1b6549beb60888203f43537a","alignment":"top","mobileOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0},"backgrounds":[]},"tabletOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0},"backgrounds":[]},"pipToHighlight":[],"pipToMoveIndex":[]},"children":[{"pip":"imageMedia","props":{"previousTab":2,"openLinkInNewTab":false,"percentWidth":100,"contentMargin":{"top":0,"left":"auto","right":"auto","bottom":20},"tabletOverrides":{"contentMargin":{"top":0,"left":"auto","right":"auto"}},"mobileOverrides":{"percentWidth":100,"contentMargin":{"top":0,"left":"auto","right":"auto"}},"url":"https://imageprocessor.digital.vistaprint.com/crop/0,0,748x420/https://uploads.documents.cimpress.io/v1/uploads/98d06a5b-90c5-404c-a89c-e29906d2d8c8~110/original?tenant=vbu-digital","originalUrl":"https://uploads.documents.cimpress.io/v1/uploads/98d06a5b-90c5-404c-a89c-e29906d2d8c8~110/original?tenant=vbu-digital","cropData":{"x":0,"y":0,"width":748,"height":420},"rotation":0,"alt":"","title":"","displayDescription":"","displayTitle":"","uid":"3c42d93d5b14480ea2e02b115bbd134a","tag":"div","mode":{},"documentStyle":{},"blockData":{}}}]}],"props":{"uid":"813fb488bf654c259b1891c29c3287c8"}}]}],"props":{"fluid":true,"carousel":true,"background":{"color":{"value":"#F1F1F1","opacity":0},"image":{"url":"https://assets.digital.vistaprint.com/production/0bf93d76-0cb9-4302-904a-9dc8e54c4240","style":"tiled","imageId":"","cropData":{"verticalOffset":50},"parallax":true,"originalUrl":"https://assets.digital.vistaprint.com/production/0bf93d76-0cb9-4302-904a-9dc8e54c4240","previousTab":1,"imageSearchText":"","forceChangeImage":false},"backgroundType":"image","imageTransparency":true},"userHeight":{"bottom":0,"top":0},"autoplayDelayTime":7},"version":3,"displayName":"Image Carousel","_uid":"c95d101f6edc4abab06ea22f0c652b09"},{"slug":"grid-1x1","props":{"background":{"color":{"value":"color5","opacity":0},"image":{"url":"https://assets.digital.vistaprint.com/production/0bf93d76-0cb9-4302-904a-9dc8e54c4240","style":"tiled","imageId":"","cropData":{"verticalOffset":50},"parallax":true,"originalUrl":"https://assets.digital.vistaprint.com/production/0bf93d76-0cb9-4302-904a-9dc8e54c4240","previousTab":1,"imageSearchText":"","forceChangeImage":false},"backgroundType":"image","imageTransparency":true},"userHeight":{"bottom":80,"top":12},"showGridLinesInSidebar":true,"fluid":true},"version":3,"children":[{"pip":"grid","props":{"uid":"97a216a6b0974839b071b2e053c150a0"},"children":[{"pip":"gridCol","props":{"size":12,"spacing":{},"alignment":"top","backgrounds":[],"contentPadding":{"top":10,"left":30,"right":10,"bottom":10},"pipToHighlight":[],"pipToMoveIndex":[],"mobileOverrides":{"spacing":{"top":0,"left":0,"right":0,"bottom":0},"contentPadding":{"top":10,"left":10,"right":10,"bottom":10}},"uid":"a816e95b49964576931d5d127d97d746","tabletOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0},"backgrounds":[]}},"children":[{"pip":"title","props":{"uid":"e829cf882ea8493f9a5fe25f8b1a7ba6","defaultFontSize":"size6","defaultFont":"font1","defaultAlignment":"left","lineHeightClassName":"lineHeight-1-4","level":3,"content":"<p><span style=\"color:#999999\" data-color=\"#999999\" class=\"font-custom-color-#999999\">Thanks for visiting!</span></p>","contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":{},"mobileOverrides":{},"paragraphWrappedContent":true,"customized":true,"fontRequired":[],"requiresCustomization":true,"contentBinding":null,"websafeFonts":[],"className":"","pageMetadata":{},"documentStyle":{},"blockData":{},"index":[]}},{"pip":"paragraph","props":{"uid":"2d4a183ac40940acbf5ca1878c958a6b","defaultFontSize":"size2","defaultFont":"font2","defaultAlignment":"left","lineHeightClassName":"lineHeight-1-6","content":"<p><span style=\"color:#999999\" data-color=\"#999999\" class=\"font-custom-color-#999999\">&nbsp;\"A Client is the most important visitor on our premises. They are not dependent on us, We are dependent on them. They are not an interruption in our work, they are the purpose of it. They are not an outsider in our business, they are a part of it. We are not doing them a favor by serving them, they are doing us a favor by giving us an opportunity to do so\".- Gandhi</span></p>","contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":{},"mobileOverrides":{},"paragraphWrappedContent":true,"customized":true,"fontRequired":[]}},{"pip":"paragraph","props":{"uid":"cd9eba696ebe478c9f8588acea0e1c6c","defaultFontSize":"size2","defaultFont":"font2","defaultAlignment":"left","lineHeightClassName":"lineHeight-1-6","content":"<p><span style=\"color:#999999\" data-color=\"#999999\" class=\"font-custom-color-#999999\">Here at Avanti, we pride ourselves in delivering exceptional service to our clients . Our talented and passionate staff are happy to have the opportunity to provide you with the best beauty services and treatments in the Bergen County area.</span></p>","contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":{},"mobileOverrides":{},"paragraphWrappedContent":true,"customized":true,"fontRequired":[]}},{"pip":"paragraph","props":{"uid":"5ad82effd02f4c39b52ba0450a3766de","defaultFontSize":"size2","defaultFont":"font2","defaultAlignment":"left","lineHeightClassName":"lineHeight-1-6","content":"<p><span style=\"color:#999999\" data-color=\"#999999\" class=\"font-custom-color-#999999\">Our Services Include:</span></p>","contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":{},"mobileOverrides":{},"paragraphWrappedContent":true,"customized":true,"fontRequired":[]}},{"pip":"paragraph","props":{"uid":"23571c74130440bd942ce2e7feaeb177","defaultFontSize":"size2","defaultFont":"font2","defaultAlignment":"left","lineHeightClassName":"lineHeight-1-6","content":"<p></p><ul><li><span style=\"color:#999999\" data-color=\"#999999\" class=\"font-custom-color-#999999\">Haircuts and styles for men, women and children</span></li><li><span style=\"color:#999999\" data-color=\"#999999\" class=\"font-custom-color-#999999\">Up-dos and formal hair</span></li><li><span style=\"color:#999999\" data-color=\"#999999\" class=\"font-custom-color-#999999\">Color services</span></li><li><span style=\"color:#999999\" data-color=\"#999999\" class=\"font-custom-color-#999999\">Perms &amp; Keratin treatments</span></li><li><span style=\"color:#999999\" data-color=\"#999999\" class=\"font-custom-color-#999999\">Hair Extensions</span></li><li><span style=\"color:#999999\" data-color=\"#999999\" class=\"font-custom-color-#999999\">Makeup</span></li><li><span style=\"color:#999999\" data-color=\"#999999\" class=\"font-custom-color-#999999\">Wedding Parties</span></li></ul><p></p>","contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":{},"mobileOverrides":{},"paragraphWrappedContent":true,"customized":true,"fontRequired":[]}},{"pip":"subGrid","props":{"contentMargin":{"top":0,"left":"auto","right":"auto","bottom":20},"uid":"a326cde76811462191de2c1b3208c73b","mobileOverrides":{"layout":"vertical"},"tabletOverrides":{"layout":"horizontal"}},"children":[{"pip":"subGridCol","props":{"size":6,"spacing":{},"alignment":"top","backgrounds":[],"contentPadding":{"top":10,"left":0,"right":10,"bottom":10},"pipToHighlight":[],"pipToMoveIndex":[],"mobileOverrides":{"spacing":{"top":0,"left":0,"right":0,"bottom":0},"contentPadding":{"top":10,"left":10,"right":10,"bottom":10},"size":6},"uid":"c66705d7a2a748049d4a28118b5bca22","tabletOverrides":{"size":6}},"children":[{"pip":"imageMedia","props":{"uid":"c488a06b518c4c228fe81fecc81ae1d4","previousTab":2,"linkUrl":"","percentWidth":100,"contentMargin":{"top":0,"left":"auto","right":"auto","bottom":20},"tabletOverrides":{"contentMargin":{"top":0,"left":"auto","right":"auto"}},"mobileOverrides":{"percentWidth":100,"contentMargin":{"top":0,"left":"auto","right":"auto"}},"frameStyle":"basic","framePrimaryColor":"#fff","url":"https://imageprocessor.digital.vistaprint.com/crop/0,2,370x354/https://uploads.documents.cimpress.io/v1/uploads/2b9775d4-06e0-419c-8fa1-71986de291e3~110/original?tenant=vbu-digital","originalUrl":"https://uploads.documents.cimpress.io/v1/uploads/2b9775d4-06e0-419c-8fa1-71986de291e3~110/original?tenant=vbu-digital","cropData":{"x":0,"y":2,"width":370,"height":354},"rotation":0,"alt":"","title":"","displayDescription":"","displayTitle":"","tag":"div","mode":{},"documentStyle":{},"blockData":{}}}]},{"pip":"subGridCol","props":{"size":6,"spacing":{},"alignment":"top","backgrounds":[],"contentPadding":{"top":10,"left":10,"right":10,"bottom":10},"pipToHighlight":[],"pipToMoveIndex":[],"mobileOverrides":{"spacing":{"top":0,"left":0,"right":0,"bottom":0},"contentPadding":{"top":10,"left":10,"right":10,"bottom":10},"size":6},"uid":"34c658a4d5964be6a5b6dfaeed6da011","tabletOverrides":{"size":6}},"children":[{"pip":"imageMedia","props":{"uid":"6ad1bb738d4f4f65baf23e12bba44329","previousTab":2,"linkUrl":"","percentWidth":100,"contentMargin":{"top":0,"left":"auto","right":"auto","bottom":20},"tabletOverrides":{"contentMargin":{"top":0,"left":"auto","right":"auto"}},"mobileOverrides":{"percentWidth":100,"contentMargin":{"top":0,"left":"auto","right":"auto"}},"frameStyle":"basic","framePrimaryColor":"#fff","url":"https://imageprocessor.digital.vistaprint.com/crop/0,0,493x480/https://uploads.documents.cimpress.io/v1/uploads/1173bf96-56db-4390-852d-5fb48da8bf4f~110/original?tenant=vbu-digital","originalUrl":"https://uploads.documents.cimpress.io/v1/uploads/1173bf96-56db-4390-852d-5fb48da8bf4f~110/original?tenant=vbu-digital","cropData":{"x":0,"y":0,"width":493,"height":480},"rotation":0,"alt":"","title":"","displayDescription":"","displayTitle":"","tag":"div","mode":{},"documentStyle":{},"blockData":{}}}]}]},{"pip":"paragraph","props":{"uid":"3a7725daa3174f15abad81217e9d0486","defaultFontSize":"size2","defaultFont":"font2","defaultAlignment":"left","lineHeightClassName":"lineHeight-1-6","content":"<p><span style=\"color:#999999\" data-color=\"#999999\" class=\"font-custom-color-#999999\">201-934-0444</span></p>","contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":{},"mobileOverrides":{},"paragraphWrappedContent":true,"customized":true,"fontRequired":[]}}]}]}],"displayName":"Grid 1 × 1","_uid":"1274fdf237464ad4ab4e28b7e911a381"},{"slug":"grid-navigation-normal","props":{"name":"","type":"header","fluid":false,"layout":"left","moveable":false,"nameable":true,"position":"top","background":{"color":{"value":"color5","opacity":0},"image":{"url":"https://assets.digital.vistaprint.com/production/0bf93d76-0cb9-4302-904a-9dc8e54c4240","style":"tiled","parallax":true,"originalUrl":"https://assets.digital.vistaprint.com/production/0bf93d76-0cb9-4302-904a-9dc8e54c4240"},"className":"h-auto","backgroundType":"image","imageTransparency":true},"userHeight":{"top":5,"bottom":39},"layoutConfig":{"id":0,"label":"Line (top)","embellishments":{"elements":{"topEdges":[{"width":"100%","height":5,"zIndex":1,"backgroundColor":"#E3D475"}],"leftEdges":[],"rightEdges":[],"bottomEdges":[],"topLeftCorners":[],"topRightCorners":[],"bottomLeftCorners":[],"bottomRightCorners":[]},"container":{}},"userSelectable":true}},"version":3,"children":[{"pip":"grid","props":{"uid":"fba6fac8ced14e6faf0597b00d0f9024"},"children":[{"pip":"gridCol","props":{"size":12,"spacing":{},"alignment":"center","backgrounds":[],"contentPadding":{"top":10,"left":10,"right":10,"bottom":20},"pipToHighlight":[],"pipToMoveIndex":[],"mobileOverrides":{"spacing":{"top":0,"left":0,"right":0,"bottom":0},"contentPadding":{"top":10,"left":10,"right":10,"bottom":10}},"uid":"e9caafcdcc1f48c997e9114d717bd7c9","tabletOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0},"backgrounds":[]}},"children":[{"pip":"title","props":{"level":2,"content":"<p style=\"text-align: left;\"><span class=\"font-size10\"><span data-font-required=\"google:Dancing Script\" class=\"font-dancing_script\"><span style=\"color:#e3d475\" data-color=\"#e3d475\" class=\"font-custom-color-#e3d475\"><b>Avanti Salon</b></span></span></span></p>","className":"","customized":true,"defaultFont":"font1","fontRequired":["google:Dancing Script"],"websafeFonts":[],"contentMargin":{"top":0,"left":"auto","right":"auto","bottom":0},"contentBinding":null,"defaultFontSize":"size8","mobileOverrides":{},"tabletOverrides":{},"requiresCustomization":true,"paragraphWrappedContent":true,"uid":"569b24f2f2b64cc4bc8f3fb2bb339ad8","pageMetadata":{},"documentStyle":{},"blockData":{},"index":[]}}]},{"pip":"gridCol","props":{"size":12,"border":{"top":{"color":"#000","style":"solid","width":0},"left":{"color":"#000","style":"solid","width":0},"right":{"color":"#000","style":"solid","width":0},"bottom":{"color":"#000","style":"solid","width":0},"radius":7},"spacing":{},"alignment":"center","backgrounds":[{"size":"cover","color":"rgb(41, 41, 41)","position":{"x":"center","y":"center"}}],"contentPadding":{"top":10,"left":10,"right":10,"bottom":10},"pipToHighlight":[],"pipToMoveIndex":[],"mobileOverrides":{"spacing":{"top":0,"left":0,"right":0,"bottom":0},"contentPadding":{"top":10,"left":10,"right":10,"bottom":10}},"uid":"43c35417a7894d2aab408bacfaf8202e","tabletOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0},"backgrounds":[]}},"children":[{"pip":"navigation","props":{"bold":false,"italic":false,"spacing":10,"fontSize":"size2","linkColor":"","decoration":"underscore","mobileMenu":"tablet","defaultFont":"font2","contentMargin":{"top":0,"left":0,"right":"auto","bottom":20},"backgroundColor":"","decorationColor":"#fff4a8","defaultFontSize":"fontSize3","mobileOverrides":{"contentMargin":{"top":0,"left":"auto","right":"auto","bottom":0}},"tabletOverrides":{"contentMargin":{"top":0,"left":"auto","right":"auto","bottom":0}},"adjustableMobileMenuColor":true,"uid":"9b4a2e3789db4c05ae43deaa21d9db71","fontFamily":"websafe:Arial","activeLinkColor":"#ffffff"}}]}]}],"displayName":"Normal Navigation","_uid":"425d34f92acb4c1faf717f51bea515c0"},{"slug":"grid-footer-social-links","props":{"type":"footer","moveable":false,"nameable":false,"position":"bottom","background":{"color":{"value":"color5","opacity":0},"image":{"url":"","style":"","parallax":false,"savedUrl":"","originalUrl":"","savedOriginalUrl":""},"backgroundType":"none","imageTransparency":true},"userHeight":{"top":10,"bottom":10},"layoutConfig":{"id":0,"label":"Line (top)","embellishments":{"elements":{"topEdges":[{"width":"100%","height":5,"zIndex":1,"backgroundColor":"#E3D475"}],"leftEdges":[],"rightEdges":[],"bottomEdges":[],"topLeftCorners":[],"topRightCorners":[],"bottomLeftCorners":[],"bottomRightCorners":[]},"container":{}},"userSelectable":true},"positionOverlay":true},"version":3,"children":[{"pip":"grid","props":{"uid":"6d1ab1180e824459838194b0f81ae27f"},"children":[{"pip":"gridCol","props":{"size":12,"spacing":{},"alignment":"center","backgrounds":[],"contentPadding":{"top":10,"left":20,"right":20,"bottom":10},"pipToHighlight":[],"pipToMoveIndex":[],"mobileOverrides":{"spacing":{"top":0,"left":0,"right":0,"bottom":0},"contentPadding":{"top":10,"left":10,"right":10,"bottom":10}},"uid":"f5ebb31f5cad4234a535238df69683fc","tabletOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0},"backgrounds":[]}},"children":[{"pip":"title","props":{"level":5,"content":"<p><br></p>","className":"","customized":true,"defaultFont":"font2","fontRequired":[],"websafeFonts":[],"contentMargin":{"top":0,"left":"auto","right":"auto","bottom":20},"contentBinding":null,"mobileOverrides":{},"tabletOverrides":{},"defaultAlignment":"left","requiresCustomization":true,"paragraphWrappedContent":true,"uid":"4b24e5c18d41480eba699fea6efe48e0","pageMetadata":{},"documentStyle":{},"blockData":{},"index":[]}}]}]}],"displayName":"Social Links Footer","_uid":"04545c5c577d4f2d8fd5a12ad58d5e71"},{"slug":"default-sidebar","props":{"type":"sidebar","fluid":true,"background":{"color":{"value":"#dbe8a5","opacity":1},"backgroundType":"color","imageTransparency":true},"userHeight":{"top":40,"bottom":40},"showGridLinesInSidebar":true},"version":3,"children":[{"pip":"grid","props":{"uid":"7317f628b6e64208b8b1bd1d0e0aa85d"},"children":[{"pip":"gridCol","props":{"size":12,"spacing":{},"alignment":"top","backgrounds":[],"contentPadding":{"top":10,"left":10,"right":10,"bottom":10},"pipToHighlight":[],"pipToMoveIndex":[],"mobileOverrides":{"spacing":{"top":0,"left":0,"right":0,"bottom":0},"contentPadding":{"top":10,"left":10,"right":10,"bottom":10}},"uid":"881fc4ceabbc46a4825dd085d36673fc","tabletOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0},"backgrounds":[]}},"children":[{"pip":"title","props":{"level":1,"content":"<p>Global right sidebar</p>","className":"","customized":true,"defaultFont":"font1","fontRequired":[],"websafeFonts":[],"contentMargin":{"top":0,"left":"auto","right":"auto","bottom":20},"contentBinding":null,"defaultFontSize":"size9","mobileOverrides":{},"tabletOverrides":{},"requiresCustomization":true,"paragraphWrappedContent":true,"uid":"2616fc8401e24f279adfb5746dcbd749","pageMetadata":{},"documentStyle":{},"blockData":{},"index":[]}},{"pip":"navigation","props":{"bold":false,"italic":false,"spacing":10,"fontSize":"size1","alignment":"left","decoration":"underscore","mobileMenu":"tablet","defaultFont":"font2","orientation":"vertical","contentMargin":{"top":0,"left":"auto","right":"auto","bottom":20},"defaultFontSize":"fontSize3","mobileOverrides":{"contentMargin":{"top":0,"left":"auto","right":"auto","bottom":0}},"tabletOverrides":{"contentMargin":{"top":0,"left":"auto","right":"auto","bottom":0}},"adjustableMobileMenuColor":true,"uid":"a7819ca7c0c046558e66a4d51c73cff2"}}]}]}],"displayName":"Default Sidebar","_uid":"fed7d9e0a22b4f4e9b0dfa78a58d0c2f"}],"title":"Home"},"service":{}};
/*********/
window.doScroll = function scroll(element, change, easeAmount, callback) {
    // Maximum scroll duration to ensure that scrolling doesn't take forever on long sites
    const MAX_SCROLL_DURATION = 2500;

    if (typeof easeAmount === 'function') {
      callback = easeAmount;
      easeAmount = undefined;
    }

    if (easeAmount) {
      /*
       * We may not want to fully animate the scroll.
       * On long documents, this can be dizzying. Instead, we can
       *  jump to just before the element, then scroll the rest of the way.
       */
      if (Math.abs(change) < easeAmount) {
        easeAmount = change;
      }

      if (change < 0) {
        easeAmount = -easeAmount;
      }

      element.scrollTop += change - easeAmount;
      change = easeAmount;
    }

    const move = function (amount) {
      element.scrollTop = amount;
    }; // quadratic easing in/out - acceleration until halfway, then deceleration


    const ease = function (t, b, c, d) {
      t = t / (d / 2);

      if (t < 1) {
        return c / 2 * t * t + b;
      }

      t = t - 1;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (cb) {
      window.setTimeout(cb, 1000 / 60);
    };

    const start = element.scrollTop;
    let currentTime = 0;
    const increment = 20;
    let duration = Math.abs(change) * 500 / 1000;

    if (duration > MAX_SCROLL_DURATION) {
      duration = MAX_SCROLL_DURATION;
    }

    const animateScroll = function () {
      currentTime = currentTime + increment; // Don't call ease if currentTime > duration, it gives wacky results.

      if (currentTime < duration) {
        move(ease(currentTime, start, change, duration));
        requestAnimationFrame.call(window, animateScroll);
      } else {
        move(start + change);

        if (typeof callback === 'function') {
          callback();
        }
      }
    };

    requestAnimationFrame.call(window, animateScroll);
  }