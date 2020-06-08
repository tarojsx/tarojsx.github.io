import { createElement } from 'react'

const ce = (tag: string) => ({ children, ...props }) => createElement(tag, props, children)

export const View = ce('div')
export const Text = ce('span')
export const Image = ce('img')
export const Button = ce('button')
export const OpenData = ce('div')
