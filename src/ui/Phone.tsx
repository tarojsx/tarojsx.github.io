import React, { CSSProperties } from 'react'
import classNames from 'classnames'
import useBaseUrl from '@docusaurus/useBaseUrl'
import './phone.scss'

export const Phone: React.FC = ({ children }) => {
    return (
        <div className="phone">
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
                    <div className="content">{children}</div>
                </div>
            </div>
        </div>
    )
}
