(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[627],{1598:function(e,a,t){Promise.resolve().then(t.bind(t,1790))},1790:function(e,a,t){"use strict";t.r(a);var s=t(7437),c=t(9222),l=t(2265);a.default=()=>{let[e,a]=(0,l.useState)([]),[t,d]=(0,l.useState)("");return(0,l.useEffect)(()=>{c.Z.get("http://localhost:1337/api/tests?populate=*",{headers:{Authorization:"Bearer ".concat("480eb70911e4b312b00ecbaac9c04d06b36fa5d3387a2b1a4be7c46fecbea205a5b625525664fd437b361a23658d7fb1e7e45019a819bfea9737e87e8e4401907b9f93f27fad4ec058308baa9e1fd843116b34ea14e2517fc36a1f6e6d900e5989ae53738f12e424ed65600b9a3a1b94dec20c1118733e8c2a3f83eb8dbf3a7f")}}).then(e=>a(e.data.data)).catch(e=>d(e.message))},[]),(0,s.jsx)("div",{children:(0,s.jsx)("section",{className:"text-gray-600 body-font",children:(0,s.jsxs)("div",{className:"container px-5 py-24 mx-auto",children:[(0,s.jsx)("div",{className:"flex flex-wrap w-full mb-20",children:(0,s.jsxs)("div",{className:"lg:w-1/2 w-full mb-6 lg:mb-0",children:[(0,s.jsx)("h1",{className:"sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900",children:"Product List - My Shop"}),(0,s.jsx)("div",{className:"h-1 w-20 bg-indigo-500 rounded"})]})}),""!=t&&(0,s.jsx)("h2",{children:t}),(0,s.jsx)("div",{className:"flex flex-wrap -m-4",children:e.map(e=>{let{id:a,attributes:t}=e,{title:c,description:l,Price:d,image:n}=t,r=n&&n.data&&n.data.attributes?"http://localhost:1337".concat(n.data.attributes.url):"";return(0,s.jsx)("div",{className:"xl:w-1/4 md:w-1/2 p-4",children:(0,s.jsxs)("div",{className:"bg-gray-100 p-6 rounded-lg",children:[r&&(0,s.jsx)("img",{className:"h-40 rounded w-full object-cover object-center mb-6",src:r,alt:"content"}),(0,s.jsx)("h2",{className:"text-lg text-gray-900 font-medium title-font mb-4",children:c}),(0,s.jsx)("p",{className:"leading-relaxed text-base",children:l})]})},a)})})]})})})}}},function(e){e.O(0,[750,971,472,744],function(){return e(e.s=1598)}),_N_E=e.O()}]);