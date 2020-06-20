const path = require('path')
const child = require('child_process')
const util = require('util')
const docusaurus = require('@docusaurus/types')
const webpack = require('webpack')

const babelConfig = require('./babel.config')

// @ts-ignore
const log = (...args) => console.log(...args.map(arg => util.inspect(arg, { depth: null })))

/**
 *
 * @param {docusaurus.LoadContext} context
 * @param {*} opts
 * @returns {docusaurus.Plugin}
 */
module.exports = function pluginSyncDocs(context, opts) {
    return {
        // A compulsory field used as the namespace for directories to cache
        // the intermediate data for each plugin.
        // If you're writing your own local plugin, you will want it to
        // be unique in order not to potentially conflict with imported plugins.
        // A good way will be to add your own project name within.
        name: 'docusaurus-plugin-tarojsx',

        async loadContent() {
            // The loadContent hook is executed after siteConfig and env has been loaded
            // You can return a JavaScript object that will be passed to contentLoaded hook
            console.log('loadContent', 'rsync docs')
            child.spawnSync('npm', ['run', 'prestart'])
        },

        // async contentLoaded({ content, actions }) {
        // console.log('contentLoaded', content, actions)
        // contentLoaded hook is done after loadContent hook is done
        // actions are set of functional API provided by Docusaurus. e.g: addRoute
        // },

        // async postBuild(props) {
        //     // after docusaurus <build> finish
        // },

        // // TODO
        // async postStart(props) {
        //     // docusaurus <start> finish
        // },

        // // TODO
        // afterDevServer(app, server) {
        //     // https://webpack.js.org/configuration/dev-server/#devserverbefore
        // },

        // // TODO
        // beforeDevServer(app, server) {
        //     // https://webpack.js.org/configuration/dev-server/#devserverafter
        // },

        /**
         * @param {webpack.Configuration} config
         * @param {boolean} isServer
         * @param {docusaurus.ConfigureWebpackUtils} utils
         * @returns {webpack.Configuration}
         */
        configureWebpack(config, isServer, { getCacheLoader, getBabelLoader }) {
            // Modify internal webpack config. If returned value is an Object, it
            // will be merged into the final config using webpack-merge;
            // If the returned value is a function, it will receive the config as the 1st argument and an isServer flag as the 2nd argument.

            config.devServer.open = false

            config.resolve.alias['@tarojs/components'] = path.resolve('docusaurus-taro-runtime.ts')
            config.resolve.alias['@/ui'] = path.resolve(__dirname, 'src', 'ui')

            config.module.rules
                .filter(({ test }) => test.source.includes('.mdx'))
                .forEach(rule => {
                    const babelLoader = rule.use.find(({ loader }) => loader.includes('babel-loader'))
                    // log(babelLoader)
                    babelLoader.options.presets = babelConfig.presets
                    babelLoader.options.plugins = [...(babelLoader.options.plugins || []), ...babelConfig.plugins]
                })

            config.plugins.push(new webpack.EnvironmentPlugin({ TARO_ENV: 'h5' }))
        },

        getPathsToWatch() {
            // Path to watch
            const contentPath = path.resolve(context.siteDir, 'node_modules', '@tarojsx')
            const paths = [`${contentPath}/**/*.{md,mdx}`]
            console.log('getPathsToWatch', paths)
            return paths
        },

        // getThemePath() {
        //     // Returns the path to the directory where the theme components can
        //     // be found.
        // },

        // getClientModules() {
        //     // Return an array of paths to the modules that are to be imported
        //     // in the client bundle. These modules are imported globally before
        //     // React even renders the initial UI.
        // },

        // extendCli(cli) {
        //     // Register an extra command to enhance the CLI of docusaurus
        // },

        // injectHtmlTags() {
        //     // Inject head and/or body html tags
        // },
    }
}
