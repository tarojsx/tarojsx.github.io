(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{138:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return u})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return l}));var n=t(1),o=t(6),a=(t(0),t(228)),c={},u={id:"hooks/docs/useLogger",title:"useLogger",description:"useLogger",source:"@site/docs/hooks/docs/useLogger.mdx",permalink:"/docs/hooks/docs/useLogger"},i=[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",children:[]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],p={rightToc:i};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"uselogger"},Object(a.b)("inlineCode",{parentName:"h1"},"useLogger")),Object(a.b)("p",null,"\u6253\u5370\u7ec4\u4ef6\u751f\u547d\u5468\u671f."),Object(a.b)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { useLogger } from '@tarojsx/hooks'\n\nconst Demo = ({ id }) => {\n    useLogger(console.log, 'demo page')\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"mounted demo page\nupdated demo page\nunmounted demo page\n")),Object(a.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"useLogger(logger, ...rest)\n")))}l.isMDXComponent=!0},228:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},s=function(e){var r=l(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(t),d=n,f=s["".concat(c,".").concat(d)]||s[d]||b[d]||a;return t?o.a.createElement(f,u(u({ref:r},p),{},{components:t})):o.a.createElement(f,u({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=d;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var p=2;p<a;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);