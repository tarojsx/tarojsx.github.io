(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{214:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return i}));var n=r(1),a=r(6),b=(r(0),r(238)),o={},c={id:"hooks/README",title:"README",description:"\ud83d\udc4d",source:"@site/docs/hooks/README.md",permalink:"/docs/hooks/README",sidebar:"Hooks",next:{title:"Taro Hooks",permalink:"/docs/hooks/docs/taroHooks"}},l=[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",children:[]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]},{value:"\u652f\u6301",id:"\u652f\u6301",children:[]},{value:"License",id:"license",children:[]}],s={rightToc:l};function i(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("div",{align:"center"},Object(b.b)("h1",null,Object(b.b)("br",null),Object(b.b)("br",null),"\ud83d\udc4d",Object(b.b)("br",null),"Taro3 Hooks",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("br",null)),Object(b.b)("strong",null,"Taro3 \u5fc5\u5907\u7684\u57fa\u7840 ",Object(b.b)("a",{href:"https://reactjs.org/docs/hooks-intro.html"},"React Hooks"),"."),Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("sub",null,"\u5f53\u524d\u4ee3\u7801\u63d0\u4ea4\u9891\u7e41, \u4e00\u4e9b\u7279\u6027\u65f6\u6709\u53d8\u5316."),Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("a",{href:"https://github.com/tarojsx/hooks/blob/master/LICENSE"},Object(b.b)("img",{src:"https://badgen.net/github/license/tarojsx/hooks",alt:"License"})),Object(b.b)("a",{href:"https://www.npmjs.com/package/@tarojsx/hooks"},Object(b.b)("img",{src:"https://badgen.net/npm/v/@tarojsx/hooks",alt:"npm version"})),Object(b.b)("a",{href:"https://www.npmjs.com/org/tarojsx"},Object(b.b)("img",{src:"https://badgen.net/npm/dt/@tarojsx/hooks",alt:"npm downloads"})),Object(b.b)("a",{href:"https://github.com/tarojsx/hooks/blob/master/package.json"},Object(b.b)("img",{src:"https://badgen.net/github/dependents-pkg/tarojsx/hooks",alt:"dependents"})),Object(b.b)("a",{href:"http://makeapullrequest.com"},Object(b.b)("img",{src:"https://badgen.net/badge/PRs/welcome/green",alt:"PRs welcome"})),Object(b.b)("br",null),Object(b.b)("sup",null,"Built with :purple_heart: by",Object(b.b)("a",{href:"https://github.com/cncolder"},"@Colder")," and",Object(b.b)("a",{href:"https://github.com/tarojsx/hooks/graphs/contributors"},"Contributors"),Object(b.b)("br",null),":star2: :eyes: :zap: :boom:"),Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("pre",null,"npm i ",Object(b.b)("a",{href:"https://www.npmjs.com/@tarojsx/hooks"},"@tarojsx/hooks")),Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("br",null)),Object(b.b)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),Object(b.b)("p",null,"Hooks API \u9700\u8981 React ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/blog/2019/02/06/react-v16.8.0.html"}),Object(b.b)("inlineCode",{parentName:"a"},"16.8.0"))," \u53ca\u4ee5\u4e0a\u7248\u672c."),Object(b.b)("p",null,"\u53ef\u4ee5\u5355\u72ec\u5bfc\u5165:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import useRouterParams from '@tarojsx/hooks/dist/useRouterParams'\n")),Object(b.b)("p",null,"\u6216\u4f7f\u7528 ES6 \u547d\u540d\u5bfc\u5165:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { useRouterParams } from '@tarojsx/hooks'\n")),Object(b.b)("p",null,"\u5982\u679c\u60f3\u4f7f\u7528 ES6 \u547d\u540d\u5bfc\u5165, \u53c8\u4e0d\u60f3\u5168\u90e8\u6253\u5305, \u63a8\u8350\u4f7f\u7528 ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ant-design/babel-plugin-import"}),Object(b.b)("inlineCode",{parentName:"a"},"babel-plugin-import"))," \u5e76\u5728 ",Object(b.b)("inlineCode",{parentName:"p"},"babel.config.js")," \u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n    plugins:[\n        [\n            'import',\n            {\n                libraryName: '@tarojsx/hooks',\n                libraryDirectory: 'dist',\n                camel2DashComponentName: false,\n                transformToDefaultImport: false,\n            },\n            'import @tarojsx/hooks',\n        ]\n    ]\n}\n")),Object(b.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"\u57fa\u7840")," "),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/hooks/docs/taroHooks"}),"Taro.useXXX")," ","\u2014"," \u89e3\u51b3 Taro3 \u539f\u751f Hooks \u4f9d\u8d56\u66f4\u65b0\u95ee\u9898."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/hooks/docs/useThrottleCallback"}),"useThrottleCallback")," ","\u2014"," \u51fd\u6570\u8282\u6d41."))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"\u73af\u5883")),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/hooks/docs/useRouterParams"}),"useRouterParams")," ","\u2014"," \u83b7\u53d6\u9875\u9762\u8def\u7531\u53c2\u6570."))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"\u754c\u9762")),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/hooks/docs/useNavigationBar"}),"useNavigationBar")," ","\u2014"," \u52a8\u6001\u66f4\u65b0\u5bfc\u822a\u680f\u5c5e\u6027."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/hooks/docs/useNavigationBarTitle"}),"useNavigationBarTitle")," ","\u2014"," \u52a8\u6001\u66f4\u65b0\u5bfc\u822a\u680f\u6807\u9898."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/hooks/docs/usePullDownRefreshing"}),"usePullDownRefreshing")," ","\u2014"," \u76d1\u542c\u7528\u6237\u4e0b\u62c9\u5237\u65b0\u4e8b\u4ef6, \u56de\u8c03\u5b8c\u6210\u540e\u81ea\u52a8\u6536\u8d77."))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"\u751f\u547d\u5468\u671f")),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/hooks/docs/useDidShowAgain"}),"useDidShowAgain")," ","\u2014"," \u9875\u9762",Object(b.b)("strong",{parentName:"li"},"\u518d\u6b21"),"\u663e\u793a\u65f6\u7684\u56de\u8c03."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/hooks/docs/useLogger"}),"useLogger")," ","\u2014"," \u6253\u5370\u7ec4\u4ef6\u751f\u547d\u5468\u671f.")))),Object(b.b)("h2",{id:"\u652f\u6301"},"\u652f\u6301"),Object(b.b)("p",null,"\u6b22\u8fce\u5404\u79cd\u5f62\u5f0f\u7684\u652f\u6301. \u81f3\u5c11\u53ef\u4ee5\u7ed9\u9897\u661f \u2b50"),Object(b.b)("h2",{id:"license"},"License"),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"LICENSE"}),"MIT")))}i.isMDXComponent=!0},238:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},b=Object.keys(e);for(n=0;n<b.length;n++)r=b[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)r=b[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),i=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=i(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},j=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,b=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=i(r),j=n,O=p["".concat(o,".").concat(j)]||p[j]||u[j]||b;return r?a.a.createElement(O,c(c({ref:t},s),{},{components:r})):a.a.createElement(O,c({ref:t},s))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=r.length,o=new Array(b);o[0]=j;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<b;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}j.displayName="MDXCreateElement"}}]);