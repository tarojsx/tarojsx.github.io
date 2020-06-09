import React from 'react'
import Taro from '@tarojs/taro'
import Taro2 from '@tarojsx/ui/node_modules/@tarojs/taro'

const designWidth = 375
const pxTransformConfig = {
    designWidth,
    deviceRatio: {
        375: 1 / 2,
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
}

const ce = (tag: keyof JSX.IntrinsicElements) => ({ children, ...props }) => React.createElement(tag, props, children)

export const View = ce('div')
export const Text = ce('span')
export const Image = ce('img')
export const Button = ce('button')
export const OpenData = ce('div')
