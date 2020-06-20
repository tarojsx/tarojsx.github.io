module.exports = {
    Intro: {
        '关于 TaroX': ['index'],
    },
    UI: [
        'ui/README',
        'ui/docs/components/ActivityIndicator',
        'ui/docs/components/Avatar',
        'ui/docs/components/Badge',
        'ui/docs/components/Button',
        'ui/docs/components/List',
        'ui/docs/components/InputNumber',
        'ui/docs/components/Progress',
        // 'ui/docs/components/SearchBar',
        'ui/docs/components/Steps',
        'ui/docs/components/TabBar',
        'ui/docs/components/Tag',
    ],
    Hooks: [
        'hooks/README',
        'hooks/docs/taroHooks',
        {
            type: 'category',
            label: '基础',
            collapsed: false,
            items: ['hooks/docs/useThrottleCallback'],
        },
        {
            type: 'category',
            label: '环境',
            collapsed: false,
            items: ['hooks/docs/useRouterParams'],
        },
        {
            type: 'category',
            label: '界面',
            collapsed: false,
            items: [
                'hooks/docs/useNavigationBar',
                'hooks/docs/useNavigationBarTitle',
                'hooks/docs/usePullDownRefreshing',
            ],
        },
        {
            type: 'category',
            label: '生命周期',
            collapsed: false,
            items: ['hooks/docs/useDidShowAgain', 'hooks/docs/useLogger'],
        },
    ],
    Library: [
        'library/README',
        'library/docs/react-window',
        'library/docs/react-vtree',
        'library/docs/react-spring',
        'library/docs/react-use-gesture',
    ],
    Polyfill: ['polyfill/README'],
    History: ['history/README'],
}
