if(!self.define){let e,o={};const s=(s,i)=>(s=new URL(s+".js",i).href,o[s]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=o,document.head.appendChild(e)}else e=s,importScripts(s),o()})).then((()=>{let e=o[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(o[t])return;let n={};const c=e=>s(e,t),l={module:{uri:t},exports:n,require:c};o[t]=Promise.all(i.map((e=>l[e]||c(e)))).then((e=>(r(...e),n)))}}define(["./workbox-84c915bb"],(function(e){"use strict";importScripts("https://unpkg.com/workbox-sw@7.3.0/build/workbox-sw.js"),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"index.b59bcefe.js",revision:"91ff18e710c0c551208c24c07d3d7402"},{url:"index.html",revision:"fee9d0f2e7446070b3416c9ed5bebb67"},{url:"WebCell-0.a6336415.png",revision:"30396e4f6ea61dc30e12a382180f225b"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=sw.js.map