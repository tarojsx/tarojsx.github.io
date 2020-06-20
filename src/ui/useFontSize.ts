import { useState, useEffect } from 'react'

/**
 * get font size by device width
 *
 * inspired from taro build:h5 dist index.html
 */
export function useFontSize() {
    const [fontSize, setFontSize] = useState('40px')

    useEffect(() => {
        if (typeof window === 'undefined') return

        const handleResize = () => {
            const { width } = window.document.documentElement.getBoundingClientRect()
            // const mobile = window.navigator.appVersion.match(/AppleWebKit.*Mobile.*/)
            // const ratio = mobile ? window.devicePixelRatio : 1
            const size = width >= 640 ? '40px' : width <= 320 ? '20px' : (width / 320) * 20 + 'px'

            setFontSize(size)
        }

        window.addEventListener('resize', handleResize)

        return window.removeEventListener('resize', handleResize)
    }, [])

    return fontSize
}
