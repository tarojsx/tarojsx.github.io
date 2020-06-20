(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{459:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));n(603);var a=n(1),i=n(14),r=(n(0),n(475)),o=n(804),c={id:"2020-06-08-taro3-virtual-list",title:"Taro3 \u63a2\u7d22 - \u865a\u62df\u5217\u8868 react-window",author:"Colder",author_url:"https://github.com/cncolder",author_image_url:"https://avatars1.githubusercontent.com/u/127009",tags:["Taro3","\u63a2\u7d22","\u865a\u62df\u5217\u8868"]},l={permalink:"/blog/2020-06-08-taro3-virtual-list",source:"@site/blog/2020-06-08-taro3-virtual-list.mdx",description:"First Birthday Slash",date:"2020-06-08T00:00:00.000Z",tags:[{label:"Taro3",permalink:"/blog/tags/taro-3"},{label:"\u63a2\u7d22",permalink:"/blog/tags/\u63a2\u7d22"},{label:"\u865a\u62df\u5217\u8868",permalink:"/blog/tags/\u865a\u62df\u5217\u8868"}],title:"Taro3 \u63a2\u7d22 - \u865a\u62df\u5217\u8868 react-window",readingTime:2.245,truncated:!0,nextItem:{title:"Happy Children's Day",permalink:"/blog/2020-06-01-happy-childrens-day"}},b=[{value:"react-window \u5de5\u4f5c\u539f\u7406",id:"react-window-\u5de5\u4f5c\u539f\u7406",children:[]},{value:"Taro3 \u6574\u5408",id:"taro3-\u6574\u5408",children:[]},{value:"\u771f\u5b9e\u6848\u4f8b",id:"\u771f\u5b9e\u6848\u4f8b",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],p={rightToc:b};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/taro3-virtual-list-preview.png",alt:"First Birthday Slash"}))),Object(r.b)("p",null,"\u865a\u62df\u5217\u8868\u4f5c\u4e3a\u4e00\u79cd\u5e38\u89c1\u7684\u4f18\u5316\u624b\u6bb5\uff0c\u53ef\u4ee5\u62c6\u5206\u6570\u636e\uff0c\u7f29\u51cf\u9700\u8981\u663e\u793a\u7684\u7ec4\u4ef6\u6570\u91cf\uff0c\u5728\u663e\u793a\u5927\u91cf\u6570\u636e\u65f6\u975e\u5e38\u6709\u7528\u3002\u4f8b\u5982 React Web \u9886\u57df\u5927\u540d\u9f0e\u9f0e\u7684 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/bvaughn/react-virtualized"}),"react-virtualized")," \u548c React Native \u81ea\u5e26\u7684 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnative.cn/docs/flatlist"}),"FlatList"),"\u3002"),Object(r.b)("p",null,"\u672c\u6587\u5c06\u8981\u4ecb\u7ecd\u7684\u662f\u53ef\u4ee5\u5728 Taro3 \u4e2d\u8fd0\u884c\u7684 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/bvaughn/react-window"}),"react-window"),"\u3002"),Object(r.b)("h2",{id:"react-window-\u5de5\u4f5c\u539f\u7406"},"react-window \u5de5\u4f5c\u539f\u7406"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/bvaughn/react-window"}),"react-window")," \u662f ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/bvaughn/react-virtualized"}),"react-virtualized")," \u4f5c\u8005\u91cd\u5199\u7684\u65b0\u4f5c\u54c1\uff0c\u66f4\u5c0f\uff0c\u66f4\u5feb\uff0c\u62bd\u8c61\u7a0b\u5ea6\u66f4\u9ad8\u3002")),Object(r.b)("p",null,"\u8ba9\u6211\u4eec\u5148\u4ece\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\u5f00\u59cb\uff0c\u5bf9 ",Object(r.b)("inlineCode",{parentName:"p"},"react-window")," \u6709\u4e00\u4e2a\u76f4\u89c2\u7684\u8ba4\u8bc6\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:"{4}","{4}":!0}),"import { FixedSizeList } from 'react-window'\n\nconst Demo = () => (\n    <FixedSizeList height={300} itemCount={1000} itemSize={30}>\n        {({ index, style }) => <div style={style}>\u884c\u53f7\uff1a{index + 1}</div>}\n    </FixedSizeList>\n)\n")),Object(r.b)(o.a,{style:{margin:30,border:"1px solid silver"},height:300,itemCount:1e3,itemSize:30,mdxType:"FixedSizeList"},(function(e){var t=e.index,n=e.style;return Object(r.b)("div",{style:Object.assign({},n,{paddingLeft:10})},"\u884c\u53f7\uff1a",t+1)})),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"FixedSizeList")," \u7528\u4e8e\u663e\u793a\u56fa\u5b9a\u884c\u9ad8\u7684\u5217\u8868\uff0c\u6307\u5b9a\u9ad8\u5ea6(",Object(r.b)("inlineCode",{parentName:"p"},"height"),")\u786e\u5b9a\u89c6\u53e3\uff0c\u901a\u8fc7\u957f\u5ea6(",Object(r.b)("inlineCode",{parentName:"p"},"itemCount"),")\u548c\u884c\u9ad8(",Object(r.b)("inlineCode",{parentName:"p"},"itemSize"),")\u8ba1\u7b97\u51fa\u53ef\u89c1\u533a\u57df\uff0c\u6bcf\u4e00\u884c\u6240\u9700\u663e\u793a\u7684\u5185\u5bb9\u901a\u8fc7 Render Props \u7531\u7528\u6237\u81ea\u5df1\u51b3\u5b9a\u3002"),Object(r.b)("p",null,"\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u6307\u5b9a\u5217\u8868\u7684\u9ad8\u5ea6\u4e3a 300\uff0c\u884c\u9ad8\u4e3a 30\uff0c\u867d\u7136\u6570\u636e\u6709 1000 \u6761\uff0c\u5b9e\u9645\u6e32\u67d3\u7684\u53ea\u6709 10 \u884c\u3002",Object(r.b)("em",{parentName:"p"},"\uff08\u7b97\u4e0a\u89c6\u53e3\u5916\u9884\u52a0\u8f7d\u884c\u5b9e\u9645\u8d85\u8fc7 10 \u884c\uff09")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"FixedSizeList")," \u672c\u8eab\u6e32\u67d3\u540e\u7684 DOM \u7ed3\u6784\u5171\u5206\u4e24\u5c42\uff1a"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\u5916\u90e8\u6eda\u52a8\u5143\u7d20\uff0c\u76f8\u5f53\u4e8e\u7070\u8272\u8fb9\u6846\u90e8\u5206\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5185\u90e8\u5360\u4f4d\u5143\u7d20\uff0c\u5b9e\u9645\u662f\u4e00\u4e2a\u5360\u4f4d\u533a\u5757\u3002\u5728\u4e0a\u4f8b\u4e2d\u8fd9\u4e2a\u533a\u5757\u7684\u9ad8\u5ea6\u662f 30000\uff0c\u6eda\u52a8\u65f6\u8fd9\u4e2a\u533a\u5757\u4f1a\u6574\u4f53\u5411\u4e0a\u79fb\u52a8\uff0c\u53ea\u9732\u51fa 10 \u884c\u3002")),Object(r.b)("p",null,"\u60f3\u8c61\u4e00\u4e0b\u7535\u68af\u7684\u6837\u5b50\u3002"),Object(r.b)("h2",{id:"taro3-\u6574\u5408"},"Taro3 \u6574\u5408"),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u8fd0\u884c\u65f6\u7279\u6b8a\u9700\u6c42")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u7531\u4e8e react-window \u7528\u5230\u4e86 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/bvaughn/react-window/blob/master/src/timer.js"}),"requestAnimationFrame"),"\uff0c\u9700\u8981\u5148\u5bf9 taro \u8fd0\u884c\u65f6\u6253\u8865\u4e01\uff0c\u8be6\u89c1 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/tarojsx/polyfill"}),"@tarojsx/polyfill"),"\u3002"))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"FixedSizeList")," \u63d0\u4f9b\u4e86\u4e24\u4e2a\u5c5e\u6027 ",Object(r.b)("inlineCode",{parentName:"p"},"outerElementType")," \u548c ",Object(r.b)("inlineCode",{parentName:"p"},"innerElementType"),"\uff0c\u7528\u4e8e\u81ea\u5b9a\u4e49",Object(r.b)("strong",{parentName:"p"},"\u5916\u90e8\u6eda\u52a8\u5143\u7d20"),"\u548c",Object(r.b)("strong",{parentName:"p"},"\u5185\u90e8\u5360\u4f4d\u5143\u7d20"),"\uff0c\u5bf9\u7167 ",Object(r.b)("inlineCode",{parentName:"p"},"@tarojs/components")," \u5f88\u5bb9\u6613\u53d1\u73b0\u6b64\u5904\u53ef\u4ee5\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"<ScrollView>")," \u548c ",Object(r.b)("inlineCode",{parentName:"p"},"<View>")," \u8fdb\u884c\u66ff\u6362\u3002"),Object(r.b)("p",null,"\u5176\u4e2d ",Object(r.b)("inlineCode",{parentName:"p"},"innerElementType")," \u6bd4\u8f83\u7b80\u5355\uff0c\u76f4\u63a5\u66ff\u6362\u5373\u53ef\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"innerElementType={View}"),"\u3002"),Object(r.b)("p",null,"\u5bf9\u4e8e ",Object(r.b)("inlineCode",{parentName:"p"},"outerElementType")," \u5bf9\u5e94\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"<ScrollView>"),"\uff0c\u7ecf\u8fc7\u5c1d\u8bd5\u53d1\u73b0\u8981\u6ee1\u8db3\u4ee5\u4e0b 3 \u4e2a\u6761\u4ef6\uff1a"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\u5411\u4e0b\u4f20\u9012 ",Object(r.b)("inlineCode",{parentName:"li"},"ref")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"onScroll")," \u4e8b\u4ef6\u53c2\u6570\u8981\u5177\u5907 ",Object(r.b)("inlineCode",{parentName:"li"},"{currentTarget: {clientWidth, clientHeight}}")),Object(r.b)("li",{parentName:"ol"},"\u5141\u8bb8\u6eda\u52a8\u3002\uff08\u56e0\u4e3a ",Object(r.b)("inlineCode",{parentName:"li"},"<ScrollView>")," \u9ed8\u8ba4\u662f\u4e0d\u80fd\u6eda\u52a8\u7684\u3002\u3002\u3002\uff09")),Object(r.b)("p",null,"\u6709\u4e86\u8fd9\u4e9b\u6761\u4ef6\uff0c\u5b9e\u73b0\u8d77\u6765\u5c31\u7b80\u5355\u4e86\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'{13,16,21} title="OuterScrollView.tsx"',"{13,16,21}":!0,title:'"OuterScrollView.tsx"'}),"import React from 'react'\nimport { ScrollView } from '@tarojs/components'\nimport { ScrollViewProps } from '@tarojs/components/types/ScrollView'\n\n/**\n * \u7528\u4e8e FixedSizeList \u7684\u5916\u90e8\u6eda\u52a8\u5143\u7d20\n */\nconst OuterScrollView = React.forwardRef<any, ScrollViewProps>((props, ref) => {\n    const { style, onScroll, ...rest } = props\n\n    return (\n        <ScrollView\n            ref={ref}\n            style={style}\n            // \u5141\u8bb8\u6eda\u52a8\n            scrollY\n            onScroll={e => {\n                // \u5408\u6210\u7b26\u5408\u8981\u6c42\u7684\u6eda\u52a8\u4e8b\u4ef6\u53c2\u6570\n                onScroll({\n                    ...e,\n                    currentTarget: { ...e.detail, clientWidth: style.width, clientHeight: style.height },\n                })\n            }}\n            {...rest}\n        />\n    )\n})\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="FixedSizeList.tsx"',title:'"FixedSizeList.tsx"'}),"import React from 'react'\nimport { View } from '@tarojs/components'\nimport { FixedSizeList as List, FixedSizeListProps } from 'react-window'\n\nimport { OuterScrollView } from './OuterScrollView'\n\n/**\n * FixedSizeList for Taro3\n */\nexport const FixedSizeList = React.forwardRef<List, FixedSizeListProps>((props, ref) => {\n    return (\n        <List ref={ref} outerElementType={OuterScrollView} innerElementType={View} {...props} />\n    )\n})\n")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u63d0\u793a")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u5c01\u88c5\u597d\u7684\u7ec4\u4ef6\u8be6\u89c1 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/tarojsx/library"}),"@tarojsx/library"),"\uff0c\u4e8b\u5b9e\u4e0a Taro3 \u4e2d\u7684",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://taro-docs.jd.com/taro/docs/next/virtual-list"}),"\u865a\u62df\u5217\u8868"),"\u6b63\u662f\u57fa\u4e8e\u8fd9\u4e00\u539f\u7406\u5b9e\u73b0\u7684\u3002"))),Object(r.b)("h2",{id:"\u771f\u5b9e\u6848\u4f8b"},"\u771f\u5b9e\u6848\u4f8b"),Object(r.b)("p",null,"\u5728 taro3 \u9879\u76ee\u4e2d\uff0c\u5b89\u88c5\u4e24\u4e2a\u4f9d\u8d56\u6a21\u5757\u3002"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"npm i @tarojsx/library @tarojsx/polyfill")),Object(r.b)("p",null,"\u66f4\u65b0 config/index.js \u914d\u7f6e\uff0c\u76ee\u7684\u662f\u5411\u8fd0\u884c\u73af\u5883\u4e2d\u6ce8\u5165 ",Object(r.b)("inlineCode",{parentName:"p"},"requestAnimationFrame"),"\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{6-8} title="/config/index.js"',"{6-8}":!0,title:'"/config/index.js"'}),"const { TaroProvidePlugin } = require('@tarojsx/polyfill/dist/plugins')\n\nconst config = {\n    mini: {\n        webpackChain(chain, webpack) {\n            chain\n                .plugin('taroProviderPlugin')\n                .use(TaroProvidePlugin)\n        }\n    }\n}\n")),Object(r.b)("p",null,"\u7f16\u5199\u9875\u9762\u7ec4\u4ef6"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="/src/pages/list.tsx"',title:'"/src/pages/list.tsx"'}),"import React, { useMemo, useState, useEffect } from 'react'\nimport Taro from '@tarojs/taro'\nimport { View } from '@tarojs/components'\nimport { FixedSizeList } from '@tarojsx/library/dist/react-window'\n\nexport default () => {\n    const { windowWidth, windowHeight } = useMemo(() => Taro.getSystemInfoSync(), [])\n\n    const [data, setData] = useState<{ name: string }[]>([])\n\n    useEffect(() => {\n        (async () => {\n            const res = await Taro.request({\n                url: 'https://example.com/api/users'\n            })\n            setData(res.data)\n        })()\n    }, [])\n\n    return (\n        <View>\n            <FixedSizeList\n                width={windowWidth}\n                height={windowHeight}\n                itemCount={data.length}\n                itemSize={50}\n            >\n                {({ index, style }) => (\n                    <View key={index} style={style}>{data[index].name}</View>\n                )}\n            </FixedSizeList>\n        </View>\n    )\n}\n")),Object(r.b)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),Object(r.b)("p",null,"\u865a\u62df\u5217\u8868\u672c\u8d28\u4e0a\u662f\u5728\u6eda\u52a8\u65f6\u4e0d\u65ad\u66f4\u65b0\u89c6\u53e3\u4e2d\u7684\u884c\uff0c\u7531\u4e8e\u5c4f\u5e55\u5c3a\u5bf8\u7684\u9650\u5236\uff0c\u540c\u65f6\u663e\u793a\u7684\u884c\u6570\u4e0d\u4f1a\u592a\u591a\uff0c\u5373\u4f7f\u662f 60FPS \u7684\u6eda\u52a8\u5bf9\u4e8e ",Object(r.b)("inlineCode",{parentName:"p"},"React")," \u4e5f\u6ca1\u4ec0\u4e48\u538b\u529b\u3002\u4e0d\u8fc7\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"Taro3")," \u91cc\uff0c\u7531\u4e8e\u53d6\u4ee3\u4e86 ",Object(r.b)("inlineCode",{parentName:"p"},"ReactDOM"),"\uff0cUI \u66f4\u65b0\u662f\u901a\u8fc7\u5c0f\u7a0b\u5e8f\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"setData")," \u5b9e\u73b0\u7684\uff0c\u5728\u5feb\u901f\u6eda\u52a8\u865a\u62df\u5217\u8868\u65f6\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"setData")," \u4f1a\u4ee5\u6bcf\u79d2 60 \u6b21\u7684\u901f\u5ea6\u88ab\u8c03\u7528\uff0c\u4f4e\u7aef\u673a\u578b\u6781\u6613\u51fa\u73b0\u5361\u987f\u3002\u5982\u679c\u5bf9 ",Object(r.b)("inlineCode",{parentName:"p"},"onScroll")," \u4e8b\u4ef6\u8fdb\u884c\u8282\u6d41\uff0c\u53c8\u4f1a\u9020\u6210\u5217\u8868\u66f4\u65b0\u4e0d\u53ca\u65f6\uff0c\u5e26\u6765\u7528\u6237\u611f\u89c2\u4e0a\u7684\u5ef6\u8fdf\u3002"),Object(r.b)("p",null,"\u672c\u6587\u7b80\u5355\u7684\u4ecb\u7ecd\u4e86\u56fa\u5b9a\u884c\u9ad8\u5217\u8868\uff0c\u4e8b\u5b9e\u4e0a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/bvaughn/react-window"}),"react-window")," \u8fd8\u652f\u6301\u6a2a\u5411\u6eda\u52a8\u7684\u5217\u8868\uff0c\u4ee5\u53ca\u6a2a\u7ad6\u90fd\u53ef\u6eda\u52a8\u7684\u8868\u683c\uff0c\u4f7f\u7528\u65b9\u6cd5\u548c\u56fa\u5b9a\u884c\u9ad8\u5217\u8868\u7c7b\u4f3c\uff0c\u6b64\u5904\u4e0d\u518d\u91cd\u590d\u3002"),Object(r.b)("p",null,"\u53e6\u5916 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/bvaughn/react-window"}),"react-window")," \u8fd8\u652f\u6301\u53ef\u53d8\u884c\u9ad8\u5217\u8868\uff0c\u56e0\u4e3a\u5c0f\u7a0b\u5e8f\u83b7\u53d6\u5143\u7d20\u7684\u5bbd\u9ad8\u662f\u5f02\u6b65\u64cd\u4f5c\uff0c\u6027\u80fd\u548c\u51c6\u786e\u6027\u90fd\u65e0\u6cd5\u4fdd\u969c\uff0c\u5b9e\u9645\u4ef7\u503c\u4e0d\u5927\u3002"))}s.isMDXComponent=!0}}]);