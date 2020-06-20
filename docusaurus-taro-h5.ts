// import React from 'react'
import Taro from '@tarojs/taro'
import Taro2 from '@tarojsx/ui/node_modules/@tarojs/taro'
import { window as taroRuntimeWindow } from '@tarojs/runtime'
import '@tarojs/components/dist/taro-components/taro-components.css'

if (typeof window !== 'undefined') {
    const { defineCustomElements, applyPolyfills } = require('@tarojs/components/loader')
    applyPolyfills().then(() => defineCustomElements(taroRuntimeWindow))
}

const designWidth = 375
const pxTransformConfig = {
    designWidth,
    deviceRatio: {
        375: 4 / 2,
        640: 2.34 / 2,
        750: 2 / 2,
        828: 1.81 / 2,
    },
}
const pxTransform = function(size: any) {
    return Math.ceil((((parseInt(size, 10) / 40) * 640) / designWidth) * 10000) / 10000 + 'rem'
}

for (const taro of [Taro, Taro2]) {
    taro.initPxTransform(pxTransformConfig)
    taro.pxTransform = taro.pxTransform || pxTransform
    taro.getCurrentPages = () => []
}

/* 第一次尝试: 把 Taro 组件映射到 Html Tag */
// const ce = (tag: keyof JSX.IntrinsicElements) => ({ children, ...props }) => React.createElement(tag, props, children)
// export const View = ce('div')
// export const Text = ce('span')
// export const Image = ce('img')
// export const Button = ce('button')
// export const OpenData = ce('div')

/* 第二次尝试: 导入 taro h5 组件样式 */
// 导入 taro h5 样式.
// require('weui/dist/style/weui.css')
// for (const comp of [
//     'audio',
//     'button',
//     'canvas',
//     'checkbox',
//     'image',
//     'picker',
//     'pull-down-refresh',
//     'scroll-view',
//     'swiper',
//     'switch',
//     'tabbar',
//     'text',
//     'textarea',
//     'video',
//     'view',
//     'web-view',
// ]) {
//     require(`./node_modules/@tarojs/components/dist/collection/components/${comp}/style/index.css`)
// }
// require('./node_modules/@tarojs/components/dist/collection/components/input/index.css')
// require('./node_modules/@tarojs/components/dist/collection/components/navigator/navigator.css')
