(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{408:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(1),i=r(14),o=(r(0),r(475)),a={id:"react-window",title:"react-window",sidebar_label:"react-window"},c={id:"library/docs/react-window",isDocsHomePage:!1,title:"react-window",description:"react-window",source:"@site/docs/library/docs/react-window.mdx",permalink:"/docs/library/docs/react-window",sidebar_label:"react-window",sidebar:"Library",previous:{title:"README",permalink:"/docs/library/README"},next:{title:"react-vtree",permalink:"/docs/library/docs/react-vtree"}},l=[{value:"react-window",id:"react-window",children:[{value:"\u9700\u6c42",id:"\u9700\u6c42",children:[]},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[]}]}],d={rightToc:l};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"react-window"},Object(o.b)("a",Object(n.a)({parentName:"h2"},{href:"https://github.com/bvaughn/react-window"}),"react-window")),Object(o.b)("h3",{id:"\u9700\u6c42"},"\u9700\u6c42"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"requestAnimationFrame"))),Object(o.b)("h3",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport Taro from '@tarojs/taro'\nimport { View } from '@tarojs/components'\nimport { FixedSizeList } from '@tarojsx/library'\n\nconst { windowWidth, windowHeight } = Taro.getSystemInfoSync()\n\nconst Demo = () => (\n    <FixedSizeList width={windowWidth} height={windowHeight} itemCount={1000} itemSize={35}>\n        {({ index, style }) => <View style={style}>Row {index}</View>}\n    </FixedSizeList>\n)\n")))}u.isMDXComponent=!0},475:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return w}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=i.a.createContext({}),u=function(e){var t=i.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,w=p["".concat(a,".").concat(b)]||p[b]||s[b]||o;return r?i.a.createElement(w,c(c({ref:t},d),{},{components:r})):i.a.createElement(w,c({ref:t},d))}));function w(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var d=2;d<o;d++)a[d]=r[d];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);