/** copy from taro build:h5 dist index.html */
export default function(x) {
    function w() {
        var v,
            u,
            t,
            tes,
            s = x.document,
            r = s.documentElement,
            a = r.getBoundingClientRect().width
        if (!v && !u) {
            var n = !!x.navigator.appVersion.match(/AppleWebKit.*Mobile.*/)
            v = x.devicePixelRatio
            tes = x.devicePixelRatio
            ;(v = n ? v : 1), (u = 1 / v)
        }
        if (a >= 640) {
            r.style.fontSize = '40px'
        } else {
            if (a <= 320) {
                r.style.fontSize = '20px'
            } else {
                r.style.fontSize = (a / 320) * 20 + 'px'
            }
        }
    }
    x.addEventListener('resize', function() {
        w()
    })
    w()
}
