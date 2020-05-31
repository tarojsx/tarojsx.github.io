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
                /* colors for website */
                colors: {
                    primaryColor: '#0000c2',
                    secondaryColor: '#4a72ea',
                },
            },
        ],
    ],
    plugins: [require.resolve('docusaurus-plugin-sass'), path.resolve(__dirname, 'docusaurus-plugin-tarojsx')],
    themes: [require.resolve('@docusaurus/theme-classic'), require.resolve('@docusaurus/theme-live-codeblock')],
    themeConfig: {
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
                    label: 'UI',
                    position: 'left',
                },
                {
                    to: 'docs/hooks/README',
                    label: 'Hooks',
                    position: 'left',
                },
                {
                    to: 'docs/library/README',
                    label: 'Library',
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
        footer: {
            style: 'dark',
            // links: [
            //     {
            //         title: 'Docs',
            //         items: [
            //             {
            //                 label: 'Style Guide',
            //                 to: 'docs/doc1',
            //             },
            //             {
            //                 label: 'Second Doc',
            //                 to: 'docs/doc2',
            //             },
            //         ],
            //     },
            //     {
            //         title: 'Community',
            //         items: [
            //             {
            //                 label: 'Stack Overflow',
            //                 href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            //             },
            //             {
            //                 label: 'Discord',
            //                 href: 'https://discordapp.com/invite/docusaurus',
            //             },
            //         ],
            //     },
            //     {
            //         title: 'Social',
            //         items: [
            //             {
            //                 label: 'Blog',
            //                 to: 'blog',
            //             },
            //             {
            //                 label: 'GitHub',
            //                 href: 'https://github.com/facebook/docusaurus',
            //             },
            //             {
            //                 label: 'Twitter',
            //                 href: 'https://twitter.com/docusaurus',
            //             },
            //         ],
            //     },
            // ],
            copyright: `Copyright © 2019-${new Date().getFullYear()} TaroX org. Built with Docusaurus.`,
        },
    },
}
