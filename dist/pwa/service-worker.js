if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return i[e]||(c=new Promise(async c=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=c}else importScripts(e),c()})),c.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},c=(c,i)=>{Promise.all(c.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(c)};self.define=(c,s,n)=>{i[c]||(i[c]=Promise.resolve().then(()=>{let i={};const f={uri:location.origin+c.slice(1)};return Promise.all(s.map(c=>{switch(c){case"exports":return i;case"module":return f;default:return e(c)}})).then(e=>{const c=n(...e);return i.default||(i.default=c),i})}))}}define("./service-worker.js",["./workbox-56b7c574"],(function(e){"use strict";e.setCacheNameDetails({prefix:"simple-todo"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"css/2.35404676.css",revision:"b460018acfa646082bab499451da81b0"},{url:"css/3.222f0fd8.css",revision:"16b7a52b93923d76af41d3c42bc17333"},{url:"css/4.2ecb5190.css",revision:"ee937cfe12a7573402f472b467a12e07"},{url:"css/app.0e433876.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/vendor.200019fa.css",revision:"5aa66ba3834038cc4d049dd475f34b61"},{url:"favicon.ico",revision:"8b9eb314ff597f6f7c7bf8c7a5f717ec"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:"5cb7edfceb233100075dc9a1e12e8da3"},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:"87284894879f5b1c229cb49c8ff6decc"},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:"b00849e00f4c2331cddd8ffb44a6720b"},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:"adcde98f1d584de52060ad7b16373da3"},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:"bb1e4dc6333675d11ada2e857e7f95d7"},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:"60fa3c0614b8fb2f394fa29944c21540"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.2d36eb59.woff",revision:"463cfa6bda38af7123b1770d4982ad3c"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.492281ee.woff2",revision:"8ff0ce021911cf276edc22fb8ca59ec7"},{url:"icons/apple-icon-120x120.png",revision:"c9920835d2adb9f6ab6a79a27f220a3a"},{url:"icons/apple-icon-152x152.png",revision:"9df9e65a1d2c6df3bd9143666b0e8c63"},{url:"icons/apple-icon-167x167.png",revision:"4300c6c136c06abcd781aa18644dd7a3"},{url:"icons/apple-icon-180x180.png",revision:"88dbf3d9e8269f1298486d103e22a57c"},{url:"icons/favicon-128x128.png",revision:"1be07e62226c8f6a7086f132d9be1642"},{url:"icons/favicon-16x16.png",revision:"df5ff7f4728c4ef4b951d46b4136906f"},{url:"icons/favicon-32x32.png",revision:"64aa9e88dd6545f64226c1e2230f66cc"},{url:"icons/favicon-96x96.png",revision:"d22664397060743b24e8956a5a3fcdec"},{url:"icons/icon-128x128.png",revision:"1be07e62226c8f6a7086f132d9be1642"},{url:"icons/icon-192x192.png",revision:"a1b423855a450ae7adbd9d2a782e0dfb"},{url:"icons/icon-256x256.png",revision:"9f33ebc999e51d0dc2975fc573d53a0b"},{url:"icons/icon-384x384.png",revision:"a126be0d50ed682c3129e0b8b31f680a"},{url:"icons/icon-512x512.png",revision:"02abd24e7c8638e848d96a6bf78d2c27"},{url:"icons/ms-icon-144x144.png",revision:"f256ec55be616f32ae486ab7571eb936"},{url:"icons/safari-pinned-tab.svg",revision:"de8107bed7f087fb443d8e36855e7467"},{url:"index.html",revision:"a4a7e7064e6d7c2ecff338aecd371d2e"},{url:"js/2.30c2644f.js",revision:"2bb325d0be7ce5581697e991a3d98187"},{url:"js/3.71d87170.js",revision:"2bba1d67e1efba59c1b493adb43d3904"},{url:"js/4.28e16bf1.js",revision:"be099695341b26d93d3b0a715ecea167"},{url:"js/5.80bbe6db.js",revision:"8bba2b886b9ce08acb675056a0a8e011"},{url:"js/app.9ae4b94a.js",revision:"45432af7fd7b4d64c2aa36ae8eb9f4d7"},{url:"js/vendor.1e83736c.js",revision:"cf18135c2af91dd32b8c133dea8eb82c"},{url:"manifest.json",revision:"4992f0d2216753350b6ec8680ad536eb"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
