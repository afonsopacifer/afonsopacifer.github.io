!function(){"use strict";var e,t,n,r,o,i={},a={};function c(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return i[e](n,n.exports,c),n.exports}c.m=i,e=[],c.O=function(t,n,r,o){if(!n){var i=1/0;for(s=0;s<e.length;s++){n=e[s][0],r=e[s][1],o=e[s][2];for(var a=!0,f=0;f<n.length;f++)(!1&o||i>=o)&&Object.keys(c.O).every((function(e){return c.O[e](n[f])}))?n.splice(f--,1):(a=!1,o<i&&(i=o));if(a){e.splice(s--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,r,o]},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,{a:t}),t},c.d=function(e,t){for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.f={},c.e=function(e){return Promise.all(Object.keys(c.f).reduce((function(t,n){return c.f[n](e,t),t}),[]))},c.u=function(e){return{58:"component---src-pages-videos-js",185:"component---src-pages-talks-js",306:"component---cache-caches-gatsby-plugin-offline-app-shell-js",374:"component---src-pages-articles-js",532:"styles",600:"51ce52bfc2238ae8803febd7b1da64d0e29ff3ff",678:"component---src-pages-index-js",821:"component---src-pages-hobbies-js",853:"component---src-pages-projects-js",883:"component---src-pages-404-js"}[e]+"-"+{58:"417f2710cfcea05b4ea7",185:"745af5971847e5dec4b5",306:"cb5e0bc73dbd7a11f632",374:"997316ad8cd6294f0204",532:"5c8e887df4f3b9855aef",600:"27f695cdbfeb5c93a103",678:"b14fd81c55993f6ef807",821:"8361eeaf10f75053eb16",853:"e2165230c877020aeecd",883:"33343a200443196717fc"}[e]+".js"},c.miniCssF=function(e){return"styles.3e80b0054fe29ef6da72.css"},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},n="afonsopacifer.github.io:",c.l=function(e,r,o,i){if(t[e])t[e].push(r);else{var a,f;if(void 0!==o)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var l=u[s];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==n+o){a=l;break}}a||(f=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,c.nc&&a.setAttribute("nonce",c.nc),a.setAttribute("data-webpack",n+o),a.src=e),t[e]=[r];var d=function(n,r){a.onerror=a.onload=null,clearTimeout(p);var o=t[e];if(delete t[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(r)})),n)return n(r)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),f&&document.head.appendChild(a)}},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/",r=function(e){return new Promise((function(t,n){var r=c.miniCssF(e),o=c.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(a=n[r]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var a;if((o=(a=i[r]).getAttribute("data-href"))===e||o===t)return a}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||t,f=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");f.code="CSS_CHUNK_LOAD_FAILED",f.type=a,f.request=c,o.parentNode.removeChild(o),r(f)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},o={658:0},c.f.miniCss=function(e,t){o[e]?t.push(o[e]):0!==o[e]&&{532:1}[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))},function(){var e={658:0};c.f.j=function(t,n){var r=c.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(532|658)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var i=c.p+c.u(t),a=new Error;c.l(i,(function(n){if(c.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,r[1](a)}}),"chunk-"+t,t)}},c.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,i=n[0],a=n[1],f=n[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in a)c.o(a,r)&&(c.m[r]=a[r]);if(f)var s=f(c)}for(t&&t(n);u<i.length;u++)o=i[u],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(s)},n=self.webpackChunkafonsopacifer_github_io=self.webpackChunkafonsopacifer_github_io||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();
//# sourceMappingURL=webpack-runtime-0cacf9c7071761e01c75.js.map