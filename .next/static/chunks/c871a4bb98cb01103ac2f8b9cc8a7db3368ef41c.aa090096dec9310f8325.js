(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"1OyB":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",(function(){return n}))},BOF4:function(e,t,r){"use strict";var n=r("evrj");function o(e){this.message=e}o.prototype=new Error,o.prototype.name="InvalidTokenError",e.exports=function(e,t){if("string"!==typeof e)throw new o("Invalid token specified");var r=!0===(t=t||{}).header?0:1;try{return JSON.parse(n(e.split(".")[r]))}catch(i){throw new o("Invalid token specified: "+i.message)}},e.exports.InvalidTokenError=o},"HaE+":function(e,t,r){"use strict";function n(e,t,r,n,o,i,a){try{var s=e[i](a),u=s.value}catch(c){return void r(c)}s.done?t(u):Promise.resolve(u).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function s(e){n(a,o,i,s,u,"next",e)}function u(e){n(a,o,i,s,u,"throw",e)}s(void 0)}))}}r.d(t,"a",(function(){return o}))},JX7q:function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,"a",(function(){return n}))},Ji7U:function(e,t,r){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}r.d(t,"a",(function(){return o}))},NyWP:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.destroyCookie=t.setCookie=t.parseCookies=void 0;var o=r("iVi/"),i=r("U0US"),a=function(){return"undefined"!==typeof window};function s(e,t){var r=e.sameSite===t.sameSite;return"string"===typeof e.sameSite&&"string"===typeof t.sameSite&&(r=e.sameSite.toLowerCase()===t.sameSite.toLowerCase()),function(e,t){var r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertyNames(t);if(r.length!==n.length)return!1;for(var o=0;o<r.length;o++){var i=r[o];if(e[i]!==t[i])return!1}return!0}(n(n({},e),{sameSite:void 0}),n(n({},t),{sameSite:void 0}))&&r}function u(e,t){return e&&e.req&&e.req.headers&&e.req.headers.cookie?o.parse(e.req.headers.cookie,t):a()?o.parse(document.cookie,t):{}}function c(e,t,r,u){if(e&&e.res&&e.res.getHeader&&e.res.setHeader){var c=e.res.getHeader("Set-Cookie")||[];"string"===typeof c&&(c=[c]),"number"===typeof c&&(c=[]);var f=i.parse(c),p=[];f.forEach((function(e){s(e,function(e,t,r){var o=r.sameSite;!0===o&&(o="strict"),void 0!==o&&!1!==o||(o="lax");var i=n(n({},r),{sameSite:o});return delete i.encode,n({name:e,value:t},i)}(t,r,u))||p.push(o.serialize(e.name,e.value,n({},e)))})),p.push(o.serialize(t,r,u)),e.res.finished||e.res.setHeader("Set-Cookie",p)}if(a()){if(u&&u.httpOnly)throw new Error("Can not set a httpOnly cookie in the browser.");document.cookie=o.serialize(t,r,u)}return{}}function f(e,t,r){var i=n(n({},r||{}),{maxAge:-1});if(e&&e.res&&e.res.setHeader&&e.res.getHeader){var s=e.res.getHeader("Set-Cookie")||[];"string"===typeof s&&(s=[s]),"number"===typeof s&&(s=[]),s.push(o.serialize(t,"",i)),e.res.setHeader("Set-Cookie",s)}return a()&&(document.cookie=o.serialize(t,"",i)),{}}t.parseCookies=u,t.setCookie=c,t.destroyCookie=f,t.default={set:c,get:u,destroy:f}},U0US:function(e,t,r){"use strict";var n={decodeValues:!0,map:!1,silent:!1};function o(e){return"string"===typeof e&&!!e.trim()}function i(e,t){var r=e.split(";").filter(o),i=r.shift().split("="),a=i.shift(),s=i.join("="),u={name:a,value:(t=t?Object.assign({},n,t):n).decodeValues?decodeURIComponent(s):s};return r.forEach((function(e){var t=e.split("="),r=t.shift().trimLeft().toLowerCase(),n=t.join("=");"expires"===r?u.expires=new Date(n):"max-age"===r?u.maxAge=parseInt(n,10):"secure"===r?u.secure=!0:"httponly"===r?u.httpOnly=!0:"samesite"===r?u.sameSite=n:u[r]=n})),u}function a(e,t){if(!e)return[];if(t=t?Object.assign({},n,t):n,e.headers&&e.headers["set-cookie"])e=e.headers["set-cookie"];else if(e.headers){var r=e.headers[Object.keys(e.headers).find((function(e){return"set-cookie"===e.toLowerCase()}))];r||!e.headers.cookie||t.silent||console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."),e=r}if(Array.isArray(e)||(e=[e]),(t=t?Object.assign({},n,t):n).map){return e.filter(o).reduce((function(e,r){var n=i(r,t);return e[n.name]=n,e}),{})}return e.filter(o).map((function(e){return i(e,t)}))}e.exports=a,e.exports.parse=a,e.exports.parseString=i,e.exports.splitCookiesString=function(e){if(Array.isArray(e))return e;if("string"!==typeof e)return[];var t,r,n,o,i,a=[],s=0;function u(){for(;s<e.length&&/\s/.test(e.charAt(s));)s+=1;return s<e.length}for(;s<e.length;){for(t=s,i=!1;u();)if(","===(r=e.charAt(s))){for(n=s,s+=1,u(),o=s;s<e.length&&"="!==(r=e.charAt(s))&&";"!==r&&","!==r;)s+=1;s<e.length&&"="===e.charAt(s)?(i=!0,s=o,a.push(e.substring(t,n)),t=s):s=n+1}else s+=1;(!i||s>=e.length)&&a.push(e.substring(t,e.length))}return a}},evrj:function(e,t,r){var n=r("m4GZ");e.exports=function(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(n(e).replace(/(.)/g,(function(e,t){var r=t.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r})))}(t)}catch(r){return n(t)}}},foSv:function(e,t,r){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.d(t,"a",(function(){return n}))},"iVi/":function(e,t,r){"use strict";t.parse=function(e,t){if("string"!==typeof e)throw new TypeError("argument str must be a string");for(var r={},o=t||{},a=e.split(i),u=o.decode||n,c=0;c<a.length;c++){var f=a[c],p=f.indexOf("=");if(!(p<0)){var d=f.substr(0,p).trim(),l=f.substr(++p,f.length).trim();'"'==l[0]&&(l=l.slice(1,-1)),void 0==r[d]&&(r[d]=s(l,u))}}return r},t.serialize=function(e,t,r){var n=r||{},i=n.encode||o;if("function"!==typeof i)throw new TypeError("option encode is invalid");if(!a.test(e))throw new TypeError("argument name is invalid");var s=i(t);if(s&&!a.test(s))throw new TypeError("argument val is invalid");var u=e+"="+s;if(null!=n.maxAge){var c=n.maxAge-0;if(isNaN(c)||!isFinite(c))throw new TypeError("option maxAge is invalid");u+="; Max-Age="+Math.floor(c)}if(n.domain){if(!a.test(n.domain))throw new TypeError("option domain is invalid");u+="; Domain="+n.domain}if(n.path){if(!a.test(n.path))throw new TypeError("option path is invalid");u+="; Path="+n.path}if(n.expires){if("function"!==typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");u+="; Expires="+n.expires.toUTCString()}n.httpOnly&&(u+="; HttpOnly");n.secure&&(u+="; Secure");if(n.sameSite){switch("string"===typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:u+="; SameSite=Strict";break;case"lax":u+="; SameSite=Lax";break;case"strict":u+="; SameSite=Strict";break;case"none":u+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return u};var n=decodeURIComponent,o=encodeURIComponent,i=/; */,a=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function s(e,t){try{return t(e)}catch(r){return e}}},m4GZ:function(e,t){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function n(e){this.message=e}n.prototype=new Error,n.prototype.name="InvalidCharacterError",e.exports="undefined"!==typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new n("'atob' failed: The string to be decoded is not correctly encoded.");for(var o,i,a=0,s=0,u="";i=t.charAt(s++);~i&&(o=a%4?64*o+i:i,a++%4)?u+=String.fromCharCode(255&o>>(-2*a&6)):0)i=r.indexOf(i);return u}},md7G:function(e,t,r){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.d(t,"a",(function(){return i}));var o=r("JX7q");function i(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?Object(o.a)(e):t}},p46w:function(e,t,r){var n,o;!function(i){if(void 0===(o="function"===typeof(n=i)?n.call(t,r,t,e):n)||(e.exports=o),!0,e.exports=i(),!!0){var a=window.Cookies,s=window.Cookies=i();s.noConflict=function(){return window.Cookies=a,s}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var r=arguments[e];for(var n in r)t[n]=r[n]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function r(n){function o(){}function i(t,r,i){if("undefined"!==typeof document){"number"===typeof(i=e({path:"/"},o.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var a=JSON.stringify(r);/^[\{\[]/.test(a)&&(r=a)}catch(c){}r=n.write?n.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var s="";for(var u in i)i[u]&&(s+="; "+u,!0!==i[u]&&(s+="="+i[u].split(";")[0]));return document.cookie=t+"="+r+s}}function a(e,r){if("undefined"!==typeof document){for(var o={},i=document.cookie?document.cookie.split("; "):[],a=0;a<i.length;a++){var s=i[a].split("="),u=s.slice(1).join("=");r||'"'!==u.charAt(0)||(u=u.slice(1,-1));try{var c=t(s[0]);if(u=(n.read||n)(u,c)||t(u),r)try{u=JSON.parse(u)}catch(f){}if(o[c]=u,e===c)break}catch(f){}}return e?o[e]:o}}return o.set=i,o.get=function(e){return a(e,!1)},o.getJSON=function(e){return a(e,!0)},o.remove=function(t,r){i(t,"",e(r,{expires:-1}))},o.defaults={},o.withConverter=r,o}((function(){}))}))},"q+Fc":function(e,t,r){"use strict";r.d(t,"c",(function(){return S})),r.d(t,"d",(function(){return O})),r.d(t,"e",(function(){return x})),r.d(t,"g",(function(){return C})),r.d(t,"a",(function(){return A})),r.d(t,"f",(function(){return U})),r.d(t,"b",(function(){return R}));var n=r("o0o1"),o=r.n(n),i=r("HaE+"),a=r("1OyB"),s=r("vuIU"),u=r("Ji7U"),c=r("md7G"),f=r("foSv"),p=r("nOHt"),d=r.n(p),l=r("q1tI"),h=r.n(l),v=function(e){var t="/login?redirected=true";e?(e.writeHead(302,{Location:t}),e.end()):d.a.push(t)},y=r("NyWP"),m=r.n(y),g=r("p46w"),w=r.n(g),b=h.a.createElement;function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(f.a)(e);if(t){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var S="app.authToken";function O(e){m.a.set(null,S,e,{maxAge:604800,path:"/"}),d.a.push("/")}function x(){w.a.remove(S,{path:"/"}),window.localStorage.setItem("logout",Date.now().toString())}function C(e){return function(t){Object(u.a)(n,t);var r=k(n);function n(){return Object(a.a)(this,n),r.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return b(e,this.props)}}],[{key:"getInitialProps",value:function(){var t=Object(i.a)(o.a.mark((function t(r,n){var i,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((!(i=n.auth)||i&&i.isExpired)&&v(r.res),a={auth:i},!e.getInitialProps){t.next=5;break}return t.abrupt("return",e.getInitialProps(r,a));case 5:return t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()}]),n}(l.Component)}var j=r("rePB"),E=r("BOF4"),I=r.n(E),A=function(){function e(t){Object(a.a)(this,e),this.token=t,Object(j.a)(this,"decodedToken",void 0),this.decodedToken={id:0,exp:0,iat:0};try{t&&(this.decodedToken=I()(t))}catch(r){}}return Object(s.a)(e,[{key:"authorizationString",get:function(){return"Bearer ".concat(this.token)}},{key:"expiresAt",get:function(){return new Date(1e3*this.decodedToken.exp)}},{key:"isExpired",get:function(){return new Date>this.expiresAt}},{key:"isValid",get:function(){return!this.isExpired}}]),e}(),P=h.a.createElement,T=Object(l.createContext)(),U=function(){return Object(l.useContext)(T)};function R(e){return P(T.Provider,{value:e.auth},e.children)}},rePB:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},vuIU:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}r.d(t,"a",(function(){return o}))}}]);