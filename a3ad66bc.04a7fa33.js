(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{670:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var o=n(1),a=n(21),r=(n(0),n(732)),c={title:"Taro Hooks"},s={id:"hooks/docs/taroHooks",isDocsHomePage:!1,title:"Taro Hooks",description:"taro 3.0.0-rc.5 \u5df2\u7ecf\u4fee\u590d\u4e86\u4f9d\u8d56\u66f4\u65b0\u95ee\u9898, \u60a8\u4e0d\u5fc5\u7406\u4f1a\u4ee5\u4e0b\u5185\u5bb9.",source:"@site/docs/hooks/docs/taroHooks.mdx",permalink:"/docs/hooks/docs/taroHooks",sidebar:"Hooks",previous:{title:"README",permalink:"/docs/hooks/README"},next:{title:"useThrottleCallback",permalink:"/docs/hooks/docs/useThrottleCallback"}},i=[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",children:[]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],l={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"\u8b66\u544a")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"taro 3.0.0-rc.5 \u5df2\u7ecf\u4fee\u590d\u4e86\u4f9d\u8d56\u66f4\u65b0\u95ee\u9898, \u60a8\u4e0d\u5fc5\u7406\u4f1a\u4ee5\u4e0b\u5185\u5bb9."))),Object(r.b)("p",null,"\u5bf9 Taro \u4e13\u6709 Hooks \u8fdb\u884c\u5305\u88c5"),Object(r.b)("p",null,"taro 3.0.0-rc.4 \u4ee5\u4e0b\u7248\u672c\u4e13\u6709 hooks \u5b58\u5728\u4f9d\u8d56\u66f4\u65b0\u95ee\u9898, \u4e00\u65e6\u4f9d\u8d56\u66f4\u65b0, \u65b0\u7684\u56de\u8c03\u4f1a\u88ab\u5408\u5e76\u5230\u6570\u7ec4\u4e2d, \u4e0b\u6b21\u8c03\u7528\u65f6\u65b0\u65e7\u56de\u8c03\u4e00\u8d77\u8c03\u7528. \u5982\u679c\u4e0d\u4f20\u4f9d\u8d56, \u56de\u8c03\u51fd\u6570\u4f1a\u505c\u7559\u5728\u7b2c\u4e00\u6b21\u4f20\u5165\u7684\u503c\u4e0d\u518d\u66f4\u65b0."),Object(r.b)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),Object(r.b)("p",null,"\u4ece ",Object(r.b)("inlineCode",{parentName:"p"},"@tarojsx/hooks")," \u5bfc\u5165, \u53ea\u80fd\u4f20\u5165 ",Object(r.b)("inlineCode",{parentName:"p"},"callback")," \u51fd\u6570, \u6ca1\u6709\u7b2c\u4e8c\u4e2a ",Object(r.b)("inlineCode",{parentName:"p"},"deps")," \u53c2\u6570."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:'{2,8} title="\u6b63\u786e\u793a\u4f8b"',"{2,8}":!0,title:'"\u6b63\u786e\u793a\u4f8b"'}),"import { useState } from 'react'\nimport { useReachBottom } from '@tarojsx/hooks'\nimport { View } from '@tarojs/components'\n\nconst Demo = () => {\n    const [page, setPage] = useState(0)\n\n    useReachBottom(() => {\n        console.log(page)\n        setPage((prev) => prev + 1)\n    })\n\n    return <View style={{ height: '111vh' }} />\n}\n\n// 0\n// 1\n// 2\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:'{2,8} title="\u4e0d\u66f4\u65b0\u9519\u8bef\u793a\u8303"',"{2,8}":!0,title:'"\u4e0d\u66f4\u65b0\u9519\u8bef\u793a\u8303"'}),"import { useState } from 'react'\nimport Taro from '@tarojs/taro'\nimport { View } from '@tarojs/components'\n\nconst IssueDemo = () => {\n    const [page, setPage] = useState(0)\n\n    Taro.useReachBottom(() => {\n        console.log(page)\n        setPage((prev) => prev + 1)\n    })\n\n    return <View style={{ height: '111vh' }} />\n}\n\n// 0\n// 0\n// 0\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:'{2,8} title="\u91cd\u590d\u8c03\u7528\u9519\u8bef\u793a\u8303"',"{2,8}":!0,title:'"\u91cd\u590d\u8c03\u7528\u9519\u8bef\u793a\u8303"'}),"import { useState } from 'react'\nimport Taro from '@tarojs/taro'\nimport { View } from '@tarojs/components'\n\nconst IssueDemo2 = () => {\n    const [page, setPage] = useState(0)\n\n    Taro.useReachBottom(() => {\n        console.log(page)\n        setPage((prev) => prev + 1)\n    }, [page])\n\n    return <View style={{ height: '111vh' }} />\n}\n\n// 0\n// 0,1\n// 0,1,2\n")),Object(r.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://taro-docs.jd.com/taro/docs/next/hooks#usedidshow"}),"useDidShow")," ","\u2014"," \u9875\u9762\u5c55\u793a\u65f6\u7684\u56de\u8c03"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://taro-docs.jd.com/taro/docs/next/hooks#usedidhide"}),"useDidHide")," ","\u2014"," \u9875\u9762\u9690\u85cf\u65f6\u7684\u56de\u8c03"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://taro-docs.jd.com/taro/docs/next/hooks#usepulldownrefresh"}),"usePullDownRefresh")," ","\u2014"," \u76d1\u542c\u7528\u6237\u4e0b\u62c9\u5237\u65b0\u4e8b\u4ef6"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://taro-docs.jd.com/taro/docs/next/hooks#usereachbottom"}),"useReachBottom")," ","\u2014"," \u76d1\u542c\u7528\u6237\u4e0a\u62c9\u89e6\u5e95\u4e8b\u4ef6"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://taro-docs.jd.com/taro/docs/next/hooks#usepagescroll"}),"usePageScroll")," ","\u2014"," \u76d1\u542c\u7528\u6237\u6ed1\u52a8\u9875\u9762\u4e8b\u4ef6"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://taro-docs.jd.com/taro/docs/next/hooks#useresize"}),"useResize")," ","\u2014"," \u5c0f\u7a0b\u5e8f\u5c4f\u5e55\u65cb\u8f6c\u65f6\u89e6\u53d1"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://taro-docs.jd.com/taro/docs/next/hooks#useshareappmessage"}),"useShareAppMessage")," ","\u2014",' \u76d1\u542c\u7528\u6237\u70b9\u51fb\u9875\u9762\u5185\u8f6c\u53d1\u6309\u94ae\uff08button \u7ec4\u4ef6 open-type="share"\uff09\u6216\u53f3\u4e0a\u89d2\u83dc\u5355\u201c\u8f6c\u53d1\u201d\u6309\u94ae\u7684\u884c\u4e3a\uff0c\u5e76\u81ea\u5b9a\u4e49\u8f6c\u53d1\u5185\u5bb9'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://taro-docs.jd.com/taro/docs/next/hooks#usetabitemtap"}),"useTabItemTap")),Object(r.b)("li",{parentName:"ul"},"useTitleClick"),Object(r.b)("li",{parentName:"ul"},"useOptionMenuClick"),Object(r.b)("li",{parentName:"ul"},"usePullIntercept"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://taro-docs.jd.com/taro/docs/next/hooks#useready"}),"useReady"))))}p.isMDXComponent=!0},732:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=p(n),m=o,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||r;return n?a.a.createElement(d,s(s({ref:t},l),{},{components:n})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<r;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);