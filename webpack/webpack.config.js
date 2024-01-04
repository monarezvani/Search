const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: path.resolve(__dirname, '..', 'src/index.tsx'),
    target: "web",
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.scss'],
    },
    mode: 'none',
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: '[name].bundle.js',
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(js)?x$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
                exclude: /node_modules/

            },
            {
                test: /\.scss$/,
                use: [

                    // fallback to style-loader in development
                    process.env.NODE_ENV !== 'production'
                        ? 'style-loader'
                        : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jp(e?)g|gif|svg)$/i,
                type: 'asset/resource',
                exclude: /node_modules/

            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
                exclude: /node_modules/

            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React App',
            // filename: 'index.html',
            template: path.resolve(__dirname, '..', 'src/template.html')
        })
    ]
}