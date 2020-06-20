import React from 'react'
import classNames from 'classnames'
import { render, UniversalProps } from 'react-universal-interface'

import { MiniprogramNavigationBar, MiniprogramNavigationBarProps } from './MiniprogramNavigationBar'
import './phone.scss'

export type PhoneRenderProps = { isPhone?: boolean }

export interface PhoneProps<R = PhoneRenderProps> extends UniversalProps<R>, MiniprogramNavigationBarProps {
    className?: string
    style?: React.CSSProperties
}

export const Phone: React.FC<PhoneProps> = props => {
    const { className, style, frontColor = '#ffffff', backgroundColor = '#6190E8', ...rest } = props

    return (
        <div className={classNames('phone', className)} style={style}>
            <div className="marvel-device iphone-x">
                <div className="notch">
                    <div className="camera"></div>
                    <div className="speaker"></div>
                </div>
                <div className="top-bar"></div>
                <div className="sleep"></div>
                <div className="bottom-bar"></div>
                <div className="volume"></div>
                <div className="overflow">
                    <div className="shadow shadow--tr"></div>
                    <div className="shadow shadow--tl"></div>
                    <div className="shadow shadow--br"></div>
                    <div className="shadow shadow--bl"></div>
                </div>
                <div className="inner-shadow"></div>
                <div className="screen">
                    <MiniprogramNavigationBar
                        className="miniprogram-navigation"
                        frontColor={frontColor}
                        backgroundColor={backgroundColor}
                        {...rest}
                    />
                    <div className="content">{render(props, { isPhone: true })}</div>
                </div>
            </div>
        </div>
    )
}
