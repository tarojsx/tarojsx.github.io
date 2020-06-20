(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{365:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return u})),t.d(r,"default",(function(){return l}));var n=t(1),o=t(14),a=(t(0),t(475)),c={id:"react-use-gesture",title:"react-use-gesture",sidebar_label:"react-use-gesture"},i={id:"library/docs/react-use-gesture",isDocsHomePage:!1,title:"react-use-gesture",description:"react-use-gesture",source:"@site/docs/library/docs/react-use-gesture.mdx",permalink:"/docs/library/docs/react-use-gesture",sidebar_label:"react-use-gesture",sidebar:"Library",previous:{title:"react-spring",permalink:"/docs/library/docs/react-spring"}},u=[{value:"react-use-gesture",id:"react-use-gesture",children:[{value:"\u9700\u6c42",id:"\u9700\u6c42",children:[]},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[]}]}],s={rightToc:u};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"react-use-gesture"},Object(a.b)("a",Object(n.a)({parentName:"h2"},{href:"https://github.com/react-spring/react-use-gesture"}),"react-use-gesture")),Object(a.b)("h3",{id:"\u9700\u6c42"},"\u9700\u6c42"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"requestAnimationFrame"))),Object(a.b)("h3",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { View } from '@tarojs/components'\nimport { useDrag } from 'react-use-gesture'\nimport { useGestureConfig } from '@tarojsx/library'\n\nconst Demo = () => {\n    const [gestureConfig, containerProps] = useGestureConfig()\n\n    const bind = useDrag(({ down, movement: [mx, my], direction: [xDir, yDir], distance, cancel }) => {\n        console.log('\u6309\u4e0b', down)\n        console.log('\u8f74\u79fb\u52a8\u8ddd\u79bb', mx, my)\n        console.log('\u8f74\u79fb\u52a8\u65b9\u5411', xDir, yDir)\n        console.log('\u76f4\u7ebf\u79fb\u52a8\u8ddd\u79bb', distance)\n        console.log('\u53d6\u6d88\u62d6\u52a8\u64cd\u4f5c', cancel)\n    }, gestureConfig)\n\n    return <View {...containerProps}>{<View {...bind()} />}</View>\n}\n")))}l.isMDXComponent=!0},475:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(t),f=n,m=p["".concat(c,".").concat(f)]||p[f]||b[f]||a;return t?o.a.createElement(m,i(i({ref:r},s),{},{components:t})):o.a.createElement(m,i({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);