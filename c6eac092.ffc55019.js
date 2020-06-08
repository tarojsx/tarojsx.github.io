(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{213:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(1),o=t(6),a=(t(0),t(238)),c={title:"useDidShowAgain"},i={id:"hooks/docs/useDidShowAgain",title:"useDidShowAgain",description:"\u9875\u9762\u518d\u6b21\u663e\u793a\u65f6\u7684\u56de\u8c03",source:"@site/docs/hooks/docs/useDidShowAgain.mdx",permalink:"/docs/hooks/docs/useDidShowAgain",sidebar:"Hooks",previous:{title:"usePullDownRefreshing",permalink:"/docs/hooks/docs/usePullDownRefreshing"},next:{title:"useLogger",permalink:"/docs/hooks/docs/useLogger"}},s=[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",children:[]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],u={rightToc:s};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u9875\u9762",Object(a.b)("strong",{parentName:"p"},"\u518d\u6b21"),"\u663e\u793a\u65f6\u7684\u56de\u8c03"),Object(a.b)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\nimport { useDidShowAgain } from '@tarojsx/hooks'\n\nconst Demo = () => {\n    Taro.useDidShow(() => {\n        console.log('show')\n    })\n\n    // count \u4e3a\u9875\u9762\u663e\u793a\u8ba1\u6570, \u4ece 1 \u5f00\u59cb.\n    const count = useDidShowAgain(() => {\n        console.log('show again')\n    })\n    console.log(count)\n}\n\n/* \u9996\u6b21\u6253\u5f00\u9875\u9762 */\n// show\n// 1\n\n/* \u8fdb\u5165\u5176\u4ed6\u9875\u9762\u540e\u8fd4\u56de */\n// show\n// show again\n// 2\n")),Object(a.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"useDidShowAgain(fn)\n")))}l.isMDXComponent=!0},238:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),f=r,b=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return t?o.a.createElement(b,i(i({ref:n},u),{},{components:t})):o.a.createElement(b,i({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);