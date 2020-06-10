import React from 'react'
import classNames from 'classnames'
import { render, UniversalProps } from 'react-universal-interface'

import { Phone, PhoneProps, PhoneRenderProps } from './Phone'
import styles from './UI.module.scss'

type UIRenderProps = { isBlock?: boolean } & PhoneRenderProps

interface UIProps<R = UIRenderProps> extends UniversalProps<R>, PhoneProps<R> {
    className?: string
    style?: React.CSSProperties
    block?: boolean
    phone?: boolean
}

export const UI: React.FC<UIProps> = props => {
    const { className, style, block, phone, ...rest } = props

    if (phone) return <Phone className={className} style={style} {...rest} />

    return (
        <div className={classNames(styles.ui, { [styles.block]: block }, className)} style={style}>
            <div className={styles.content}>{render(props, { isBlock: block })}</div>
        </div>
    )
}
