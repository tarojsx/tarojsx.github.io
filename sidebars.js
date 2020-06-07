module.exports = {
    Intro: {
        '关于 TaroX': ['index'],
    },
    UI: ['ui/README', 'ui/docs/components/Avatar', 'ui/docs/components/Button'],
    Hooks: [
        'hooks/README',
        {
            type: 'category',
            label: '基础',
            items: ['hooks/docs/useThrottleCallback'],
        },
        {
            type: 'category',
            label: '环境',
            items: ['hooks/docs/useRouterParams'],
        },
        {
            type: 'category',
            label: '界面',
            items: ['hooks/docs/useNavigationBar', 'hooks/docs/usePullDownRefresh'],
        },
        {
            type: 'category',
            label: '生命周期',
            items: ['hooks/docs/useDidShowAgain', 'hooks/docs/useLogger'],
        },
    ],
    Library: [],
    Polyfill: [],
    History: [],
}
