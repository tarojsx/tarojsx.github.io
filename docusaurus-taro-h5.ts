// import React from 'react'
import Taro from '@tarojs/taro'
import TaroInUI from '@tarojsx/ui/node_modules/@tarojs/taro'
import TaroInLibrary from '@tarojsx/library/node_modules/@tarojs/taro'
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

for (const taro of [Taro, TaroInUI, TaroInLibrary]) {
    taro.initPxTransform(pxTransformConfig)
    taro.pxTransform = taro.pxTransform || pxTransform
    taro.getCurrentPages = () => []
    taro.getSystemInfoSync = () => ({
        SDKVersion: '2.12.0',
        batteryLevel: 100,
        benchmarkLevel: 1,
        brand: 'devtools',
        deviceOrientation: 'portrait',
        devicePixelRatio: 3,
        fontSizeSetting: 16,
        language: 'zh_CN',
        model: 'iPhone X',
        pixelRatio: 3,
        platform: 'devtools',
        safeArea: {
            bottom: 812,
            height: 768,
            left: 0,
            right: 375,
            top: 44,
            width: 375,
        },
        screenHeight: 812,
        screenWidth: 375,
        statusBarHeight: 44,
        system: 'iOS 10.0.1',
        version: '7.0.4',
        windowHeight: 724,
        windowWidth: 375,
        albumAuthorized: false,
        bluetoothEnabled: false,
        cameraAuthorized: false,
        locationAuthorized: false,
        locationEnabled: false,
        microphoneAuthorized: false,
        notificationAlertAuthorized: false,
        notificationAuthorized: false,
        notificationBadgeAuthorized: false,
        notificationSoundAuthorized: false,
        wifiEnabled: true,
    })
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
