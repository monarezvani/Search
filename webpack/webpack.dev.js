const DevPath = require("path")
const { merge } = require("webpack-merge")
const common = require("./webpack.config")

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: DevPath.resolve(__dirname, '..', 'dist'),
        host: '0.0.0.0',
        port: 3000,
        open: true,
        compress: true,
        hot: true,
        historyApiFallback: true,
        // watchFiles: ['src/**/*']
    }

})