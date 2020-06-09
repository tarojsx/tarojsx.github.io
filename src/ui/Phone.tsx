import React from 'react'
import classNames from 'classnames'
import { render, UniversalProps } from 'react-universal-interface'
import useBaseUrl from '@docusaurus/useBaseUrl'
import './phone.scss'

interface PhoneProps<R = { isPhone?: boolean }> extends UniversalProps<R> {
    className?: string
    style?: React.CSSProperties
}

export const Phone: React.FC<PhoneProps> = props => {
    const { className, style } = props

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
                    <img className="navbar" src={useBaseUrl('img/miniprogram-navigation-bar.svg')} />
                    <div className="content">{render(props, { isPhone: true })}</div>
                </div>
            </div>
        </div>
    )
}
