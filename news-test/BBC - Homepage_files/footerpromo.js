!function(){var e,t,n={},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={id:e,loaded:!1,exports:{}};return n[e].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}o.m=n,o.amdO={},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))},o.u=function(e){return e+".footerpromo.js"},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="navpromo:",o.l=function(n,r,i,a){if(e[n])e[n].push(r);else{var c,u;if(void 0!==i)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var d=l[s];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+i){c=d;break}}c||(u=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",t+i),c.src=n),e[n]=[r];var p=function(t,r){c.onerror=c.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(r)})),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),u&&document.head.appendChild(c)}},o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e}(),function(){var e={179:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=i);var a=o.p+o.u(t),c=new Error;o.l(a,(function(n){if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,r[1](c)}}),"chunk-"+t,t)}};var t=function(t,n){var r,i,a=n[0],c=n[1],u=n[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);u&&u(o)}for(t&&t(n);l<a.length;l++)i=a[l],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0},n=self.webpackChunknavpromo=self.webpackChunknavpromo||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),function(){var e,t,n,r=document.currentScript.getAttribute("data-base"),i=document.currentScript.getAttribute("data-variant"),a=0,c=0;function u(){clearInterval(e),o.e(138).then((function(){var e=[o(138)];(function(e){e.init(r,i)}).apply(null,e)})).catch(o.oe)}function l(){return Math.abs(window.scrollY||document.body.scrollTop||document.documentElement.scrollTop)}-1!==(n=navigator.userAgent.toLowerCase()).indexOf("msie")&&parseInt(n.split("msie")[1],10)<=10||(parseInt("ckns_nav_promofail"?decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent("ckns_nav_promofail").replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null:document.cookie)||0)>=3||window.bbcpage.getLanguage().then((function(n){"en"===n&&window.bbcuser.isUKCombined().then((function(n){n&&((c=Math.abs(document.body.offsetHeight))<window.innerHeight+300||c-l()<1500?u():(window.onscroll=function(){t=!0},e=setInterval((function(){var e;t&&(e=l(),Math.abs(a-e)<=5||(e>a&&c-e<=1500&&u(),a=e),t=!1)}),250)))}))}))}()}();