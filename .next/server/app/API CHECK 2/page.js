(()=>{var e={};e.id=627,e.ids=[627],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},2494:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>x,tree:()=>d});var s=r(7096),a=r(6132),i=r(7284),n=r.n(i),o=r(2564),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["API CHECK 2",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,7378)),"/Users/Abhinav/Downloads/render/untitled folder/frontend/app/API CHECK 2/page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,4733)),"/Users/Abhinav/Downloads/render/untitled folder/frontend/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/Abhinav/Downloads/render/untitled folder/frontend/app/API CHECK 2/page.js"],u="/API CHECK 2/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/API CHECK 2/page",pathname:"/API CHECK 2",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},5037:(e,t,r)=>{Promise.resolve().then(r.bind(r,1970))},1970:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=r(784),a=r(3258),i=r(9885);let __WEBPACK_DEFAULT_EXPORT__=()=>{let[e,t]=(0,i.useState)([]),[r,n]=(0,i.useState)("");return(0,i.useEffect)(()=>{a.Z.get("http://localhost:1337/api/tests?populate=*",{headers:{Authorization:"Bearer 480eb70911e4b312b00ecbaac9c04d06b36fa5d3387a2b1a4be7c46fecbea205a5b625525664fd437b361a23658d7fb1e7e45019a819bfea9737e87e8e4401907b9f93f27fad4ec058308baa9e1fd843116b34ea14e2517fc36a1f6e6d900e5989ae53738f12e424ed65600b9a3a1b94dec20c1118733e8c2a3f83eb8dbf3a7f"}}).then(e=>t(e.data.data)).catch(e=>n(e.message))},[]),s.jsx("div",{children:s.jsx("section",{className:"text-gray-600 body-font",children:(0,s.jsxs)("div",{className:"container px-5 py-24 mx-auto",children:[s.jsx("div",{className:"flex flex-wrap w-full mb-20",children:(0,s.jsxs)("div",{className:"lg:w-1/2 w-full mb-6 lg:mb-0",children:[s.jsx("h1",{className:"sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900",children:"Product List - My Shop"}),s.jsx("div",{className:"h-1 w-20 bg-indigo-500 rounded"})]})}),""!=r&&s.jsx("h2",{children:r}),s.jsx("div",{className:"flex flex-wrap -m-4",children:e.map(e=>{let{id:t,attributes:r}=e,{title:a,description:i,Price:n,image:o}=r,l=o&&o.data&&o.data.attributes?`http://localhost:1337${o.data.attributes.url}`:"";return s.jsx("div",{className:"xl:w-1/4 md:w-1/2 p-4",children:(0,s.jsxs)("div",{className:"bg-gray-100 p-6 rounded-lg",children:[l&&s.jsx("img",{className:"h-40 rounded w-full object-cover object-center mb-6",src:l,alt:"content"}),s.jsx("h2",{className:"text-lg text-gray-900 font-medium title-font mb-4",children:a}),s.jsx("p",{className:"leading-relaxed text-base",children:i})]})},t)})})]})})})}},7378:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>l});var s=r(5153);let a=(0,s.createProxy)(String.raw`/Users/Abhinav/Downloads/render/untitled folder/frontend/app/API CHECK 2/page.js`),{__esModule:i,$$typeof:n}=a,o=a.default,l=o},7481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=r(8531);let __WEBPACK_DEFAULT_EXPORT__=e=>{let t=(0,s.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[253,323,258,336],()=>__webpack_exec__(2494));module.exports=r})();