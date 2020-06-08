const path = require('path')
const docusaurus = require('@docusaurus/types')

/**
 * @type {docusaurus.DocusaurusConfig}
 */
module.exports = {
    title: 'TaroX',
    tagline: '致力于创建 Taro 第三方生态社区',
    url: 'https://tarojsx.github.io',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    organizationName: 'tarojsx', // Usually your GitHub org/user name.
    projectName: 'tarojsx.github.io', // Usually your repo name.
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    // It is recommended to set document id as docs home page (`docs/` path).
                    homePageId: 'index',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // editUrl: 'https://github.com/tarojsx/tarojsx.github.io/edit/master/docs',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // editUrl: 'https://github.com/tarojsx/tarojsx.github.io/edit/master/block',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    plugins: [require.resolve('docusaurus-plugin-sass'), path.resolve(__dirname, 'docusaurus-plugin-tarojsx')],
    themes: [require.resolve('@docusaurus/theme-classic'), require.resolve('@docusaurus/theme-live-codeblock')],
    themeConfig: {
        // announcementBar: {
        //     id: 'github-star',
        //     content:
        //         '<span class="text-white">⭐️ 如果你喜欢 TaroX 项目，请给一个 Star <a target="_blank" rel="noopener noreferrer" href="https://github.com/tarojsx">GitHub</a>! ⭐️</span>',
        // },
        navbar: {
            hideOnScroll: true,
            title: 'TaroX',
            logo: {
                alt: 'TaroX Logo',
                src: 'img/logo.svg',
            },
            links: [
                {
                    to: 'docs/ui/README',
                    activeBasePath: 'docs/ui', // 以此开头的路径点亮
                    label: 'UI',
                    position: 'left',
                },
                {
                    to: 'docs/hooks/README',
                    activeBasePath: 'docs/hooks',
                    label: 'Hooks',
                    position: 'left',
                },
                {
                    to: 'docs/library/README',
                    activeBasePath: 'docs/library',
                    label: 'Library',
                    position: 'left',
                },
                {
                    to: 'docs/polyfill/README',
                    activeBasePath: 'docs/polyfill',
                    label: 'Polyfill',
                    position: 'left',
                },
                {
                    to: 'docs/history/README',
                    activeBasePath: 'docs/history',
                    label: 'History',
                    position: 'left',
                },
                {
                    to: 'blog',
                    label: '博客',
                    position: 'left',
                },
                {
                    href: 'https://github.com/tarojsx',
                    className: 'octicon-mark-github',
                    position: 'right',
                },
            ],
        },
        sidebarCollapsible: false, // 侧边栏分类禁止折叠
        footer: {
            style: 'dark',
            links: [
                {
                    title: '文档',
                    items: [
                        {
                            label: '重新发明的 UI',
                            to: 'docs/ui/README',
                        },
                        {
                            label: '必备 Hooks',
                            to: 'docs/hooks/README',
                        },
                        {
                            label: '第三方 Library',
                            to: 'docs/library/README',
                        },
                        {
                            label: '运行时补丁 Polyfill',
                            to: 'docs/polyfill/README',
                        },
                        {
                            label: 'History API',
                            to: 'docs/history/README',
                        },
                    ],
                },
                {
                    title: '社区',
                    items: [
                        {
                            label: '博客',
                            to: 'blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/tarojsx',
                        },
                    ],
                },
            ],
            copyright: `Copyright © 2019-${new Date().getFullYear()} TaroX org. Built with Docusaurus.`,
        },
        prism: {
            theme: require('prism-react-renderer/themes/github'),
            darkTheme: require('prism-react-renderer/themes/vsDark'), // 黑暗模式代码高亮主题
        },
    },
}
