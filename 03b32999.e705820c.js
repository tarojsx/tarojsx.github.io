(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{103:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return o})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return u}));var n=t(240),a=t(241),i=(t(0),t(239)),c={id:"react-spring",title:"react-spring",sidebar_label:"react-spring"},o={id:"library/docs/react-spring",title:"react-spring",description:"react-spring",source:"@site/docs/library/docs/react-spring.mdx",permalink:"/docs/library/docs/react-spring",sidebar_label:"react-spring",sidebar:"Library",previous:{title:"react-vtree",permalink:"/docs/library/docs/react-vtree"},next:{title:"react-use-gesture",permalink:"/docs/library/docs/react-use-gesture"}},p=[{value:"react-spring",id:"react-spring",children:[{value:"\u9700\u6c42",id:"\u9700\u6c42",children:[]},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[]}]}],l={rightToc:p};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"react-spring"},Object(i.b)("a",Object(n.a)({parentName:"h2"},{href:"https://github.com/react-spring/react-spring"}),"react-spring")),Object(i.b)("h3",{id:"\u9700\u6c42"},"\u9700\u6c42"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"requestAnimationFrame")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"performance.now"))),Object(i.b)("h3",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { useSpring } from 'react-spring'\nimport { animated } from '@tarojsx/library'\n\nconst Demo = () => {\n    const spring = useSpring({\n        to: async (next, cancel) => {\n            while (true) {\n                await next({ opacity: 1, color: '#ffaaee' })\n                await next({ opacity: 0.5, color: 'rgb(14,26,19)' })\n            }\n        },\n    })\n\n    return <animated.View style={spring}>Hello spring</animated.View>\n}\n")))}u.isMDXComponent=!0},239:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=u(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(t),f=n,d=s["".concat(c,".").concat(f)]||s[f]||b[f]||i;return t?a.a.createElement(d,o(o({ref:r},l),{},{components:t})):a.a.createElement(d,o({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,c=new Array(i);c[0]=f;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},240:function(e,r,t){"use strict";function n(){return(n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}t.d(r,"a",(function(){return n}))},241:function(e,r,t){"use strict";function n(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t.d(r,"a",(function(){return n}))}}]);