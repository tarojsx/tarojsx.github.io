import React, { useEffect } from 'react'

export interface MiniprogramNavigationBarProps {
    className?: string
    title: string
    frontColor: '#000000' | '#ffffff'
    backgroundColor: string
    back: boolean
    time: string
}

const getTime = () => {
    const now = new Date()
    const fmt = (n: number) => n.toString().padStart(2, '0')
    return `${fmt(now.getHours())}:${fmt(now.getMinutes())}`
}

export const MiniprogramNavigationBar: React.FC<MiniprogramNavigationBarProps> = props => {
    const {
        className,
        title = '',
        frontColor = '#ffffff',
        backgroundColor = '#000000',
        // backgroundColor = '#EDEDED',
        back = false,
        time = '',
    } = props

    const light = frontColor.toLowerCase() === '#ffffff'

    const timeNodeId = 'miniprogramNavigationStatusBarTime'

    useEffect(() => {
        const timer =
            !time &&
            setInterval(() => {
                try {
                    document.getElementById(timeNodeId).innerHTML = getTime()
                } catch (err) {}
            }, 500)

        return () => clearInterval(timer)
    }, [time])

    return (
        <svg className={className} width="750" height="176" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
                {/* 背景 */}
                <path d="M0 0h750v176H0z" fill={backgroundColor} fillOpacity=".9" />
                {/* 下边框 */}
                <path d="M0 175h750v1H0z" fill="#000" fillOpacity=".1" />

                {/* 时间 */}
                <g fill={frontColor} fontFamily="Helvetica" fontSize="30" fontWeight="bold">
                    <text transform="translate(42 28)">
                        <tspan id={timeNodeId} x="26.006" y="29.66">
                            {time || getTime()}
                        </tspan>
                    </text>
                </g>

                {/* 网络 */}
                <path
                    d="M680.085 38.667h29.163c1.189 0 1.62.123 2.054.356.435.232.776.573 1.008 1.008.233.434.357.865.357 2.054v7.83c0 1.189-.124 1.62-.357 2.054a2.423 2.423 0 01-1.008 1.008c-.434.233-.865.356-2.054.356h-29.163c-1.189 0-1.62-.123-2.054-.356a2.423 2.423 0 01-1.008-1.008c-.233-.434-.356-.865-.356-2.054v-7.83c0-1.189.123-1.62.356-2.054a2.423 2.423 0 011.008-1.008c.434-.233.865-.356 2.054-.356zM647.334 39.23c4.45 0 8.729 1.709 11.954 4.772a.619.619 0 00.87-.007l2.321-2.34a.645.645 0 00-.005-.915c-8.464-8.105-21.817-8.105-30.28 0a.645.645 0 00-.007.915l2.322 2.34c.24.24.628.244.87.007a17.359 17.359 0 0111.955-4.772zm0 7.615c2.445 0 4.802.908 6.614 2.548a.624.624 0 00.87-.012l2.32-2.34a.647.647 0 00-.01-.921c-5.519-5.129-14.064-5.129-19.583 0a.646.646 0 00-.008.92l2.317 2.341a.624.624 0 00.87.012 9.858 9.858 0 016.61-2.548zm4.456 5.587a.63.63 0 00-.019-.917 6.875 6.875 0 00-8.874 0 .63.63 0 00-.02.917l4.012 4.044a.626.626 0 00.89 0l4.01-4.044zM590 48.667h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4a2 2 0 012-2zm9.333-4h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2v-8a2 2 0 012-2zM608.667 40h2a2 2 0 012 2v12.667a2 2 0 01-2 2h-2a2 2 0 01-2-2V42a2 2 0 012-2zM618 35.333h2a2 2 0 012 2v17.334a2 2 0 01-2 2h-2a2 2 0 01-2-2V37.333a2 2 0 012-2z"
                    fill={frontColor}
                    fillRule="nonzero"
                />
                {/* 电量 */}
                <path
                    d="M709.83 35.667h-30.326c-2.095 0-2.868.182-3.637.594a3.86 3.86 0 00-1.606 1.606c-.412.77-.594 1.543-.594 3.637v8.992c0 2.094.182 2.868.594 3.637a3.86 3.86 0 001.606 1.606c.769.412 1.542.594 3.637.594h30.326c2.094 0 2.867-.182 3.637-.594a3.86 3.86 0 001.605-1.606c.412-.77.595-1.543.595-3.637v-8.992c0-2.094-.183-2.868-.595-3.637a3.86 3.86 0 00-1.605-1.606c-.77-.412-1.543-.594-3.637-.594z"
                    stroke={frontColor}
                    strokeWidth="2"
                    opacity=".35"
                />
                {/* 电池正极 */}
                <path d="M718.667 42v8a4.34 4.34 0 000-8" fill={frontColor} fillRule="nonzero" opacity=".4" />

                {/* 返回 */}
                {!!back && (
                    <path
                        d="M52 146.875L49.91 149l-15.331-15.58a2.031 2.031 0 010-2.84L49.909 115 52 117.125 37.363 132 52 146.875z"
                        fill={frontColor}
                        fillOpacity="0.9"
                    />
                )}

                {/* 标题 */}
                <text
                    transform="translate(375 144)"
                    fill={frontColor}
                    textAnchor="middle"
                    fontFamily="PingFangSC-Regular, PingFang SC"
                    fontSize="34"
                    fontWeight="bold"
                    opacity=".9"
                >
                    {title}
                </text>

                {/* 胶囊 */}
                <g transform="translate(564 100)">
                    {/* 胶囊背景 */}
                    <rect
                        strokeOpacity=".201"
                        stroke="#979797"
                        fillOpacity=".597"
                        fill={!light ? '#fff' : 'rgba(0,0,0,.25)'}
                        x=".5"
                        y=".5"
                        width="173"
                        height="63"
                        rx="31.5"
                    />
                    {/* 菜单 */}
                    <path
                        d="M45.5 26a6.5 6.5 0 110 13 6.5 6.5 0 010-13zM31 29a4 4 0 110 8 4 4 0 010-8zm29 0a4 4 0 110 8 4 4 0 010-8z"
                        fill={frontColor}
                    />
                    {/* 分隔 */}
                    <path fillOpacity=".199" fill={frontColor} d="M87 13h1v37h-1z" />
                    {/* 关闭 */}
                    <path
                        d="M130.819 14.667c8.903 0 16.514 7.61 16.514 16.514 0 9.875-7.61 17.486-16.514 17.486-9.875 0-17.486-7.611-17.486-17.486 0-8.903 7.611-16.514 17.486-16.514zm-.004 4c-7.661 0-13.482 5.82-13.482 13.481 0 6.698 5.82 12.519 13.482 12.519 6.698 0 12.518-5.82 12.518-12.519 0-7.661-5.82-13.481-12.518-13.481zm-.482 7a6 6 0 110 12 6 6 0 010-12z"
                        fill={frontColor}
                    />
                </g>
            </g>
        </svg>
    )
}
