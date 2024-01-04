const podPath = require("path")
const { merge } = require("webpack-merge")
const common = require("./webpack.config")

module.exports = merge(common, {

    mode: "production",
    output: {
        path: podPath.resolve(__dirname, '..', 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
        publicPath: "/",

    },
    resolve: {
        fallback: {
            path: false,
            fs: false,
        }
    },
    optimization: {
        minimize: true,
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
            chunks: 'all'
        }
    }
})