(()=>{"use strict";var e,t,r,o,n,a={},i={};function f(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,loaded:!1,exports:{}};return a[e].call(r.exports,r,r.exports,f),r.loaded=!0,r.exports}f.m=a,f.c=i,e=[],f.O=(t,r,o,n)=>{if(!r){var a=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],n=e[u][2];for(var i=!0,l=0;l<r.length;l++)(!1&n||a>=n)&&Object.keys(f.O).every((e=>f.O[e](r[l])))?r.splice(l--,1):(i=!1,n<a&&(a=n));if(i){e.splice(u--,1);var d=o();void 0!==d&&(t=d)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,o,n]},f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);f.r(n);var a={};t=t||[null,r({}),r([]),r(r)];for(var i=2&o&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,f.d(n,a),n},f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,r)=>(f.f[r](e,t),t)),[])),f.u=e=>"assets/js/"+({53:"935f2afb",210:"6fdce000",237:"1df93b7f",514:"1be78505",574:"15d8c5b7",655:"89dd2556",918:"17896441",935:"88b961c4"}[e]||e)+"."+{53:"33f94d69",210:"9077bcd6",237:"7835cd9b",514:"d088d80c",574:"4a60292b",655:"663dbdb8",918:"1c696f69",935:"a96e4ad2",972:"b8a5bc0d"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},n="symphony-collaboration:",f.l=(e,t,r,a)=>{if(o[e])o[e].push(t);else{var i,l;if(void 0!==r)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var c=d[u];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==n+r){i=c;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,f.nc&&i.setAttribute("nonce",f.nc),i.setAttribute("data-webpack",n+r),i.src=e),o[e]=[t];var s=(t,r)=>{i.onerror=i.onload=null,clearTimeout(b);var n=o[e];if(delete o[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(r))),t)return t(r)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),l&&document.head.appendChild(i)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/",f.gca=function(e){return e={17896441:"918","935f2afb":"53","6fdce000":"210","1df93b7f":"237","1be78505":"514","15d8c5b7":"574","89dd2556":"655","88b961c4":"935"}[e]||e,f.p+f.u(e)},(()=>{var e={303:0,532:0};f.f.j=(t,r)=>{var o=f.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var a=f.p+f.u(t),i=new Error;f.l(a,(r=>{if(f.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}}),"chunk-"+t,t)}},f.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,a=r[0],i=r[1],l=r[2],d=0;if(a.some((t=>0!==e[t]))){for(o in i)f.o(i,o)&&(f.m[o]=i[o]);if(l)var u=l(f)}for(t&&t(r);d<a.length;d++)n=a[d],f.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return f.O(u)},r=self.webpackChunksymphony_collaboration=self.webpackChunksymphony_collaboration||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();