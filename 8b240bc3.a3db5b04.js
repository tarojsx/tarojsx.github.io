(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{174:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return s}));var r=t(240),o=t(241),a=(t(0),t(239)),c={title:"usePullDownRefreshing"},i={id:"hooks/docs/usePullDownRefreshing",title:"usePullDownRefreshing",description:"\u76d1\u542c\u7528\u6237\u4e0b\u62c9\u5237\u65b0\u4e8b\u4ef6, \u56de\u8c03\u5b8c\u6210\u540e\u81ea\u52a8\u6536\u8d77.",source:"@site/docs/hooks/docs/usePullDownRefreshing.mdx",permalink:"/docs/hooks/docs/usePullDownRefreshing",sidebar:"Hooks",previous:{title:"useNavigationBarTitle",permalink:"/docs/hooks/docs/useNavigationBarTitle"},next:{title:"useDidShowAgain",permalink:"/docs/hooks/docs/useDidShowAgain"}},u=[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",children:[]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],l={rightToc:u};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u76d1\u542c\u7528\u6237\u4e0b\u62c9\u5237\u65b0\u4e8b\u4ef6, \u56de\u8c03\u5b8c\u6210\u540e\u81ea\u52a8\u6536\u8d77."),Object(a.b)("p",null,"\u4e0b\u62c9\u6548\u679c\u9ed8\u8ba4\u505c\u7559\u6700\u77ed 300ms, \u9632\u6b62\u6536\u8d77\u8fc7\u5feb\u8ba9\u7528\u6237\u4ee5\u4e3a\u4e0b\u62c9\u4e0d\u5230\u4f4d."),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"\u5c0f\u5fc3")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"\u56de\u8c03\u51fd\u6570\u4e2d\u7684\u5f02\u5e38\u4f1a\u88ab\u629b\u51fa"))),Object(a.b)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { usePullDownRefreshing } from '@tarojsx/hooks'\n\nconst Demo = ({ id }) => {\n    usePullDownRefreshing(async () => {\n        await refresh()\n    })\n}\n")),Object(a.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"usePullDownRefreshing(fn, delay?: number)\n")))}s.isMDXComponent=!0},239:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(t),f=r,d=p["".concat(c,".").concat(f)]||p[f]||b[f]||a;return t?o.a.createElement(d,i(i({ref:n},l),{},{components:t})):o.a.createElement(d,i({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},240:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},241:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(n,"a",(function(){return r}))}}]);