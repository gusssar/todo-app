/**
 * Created by anokhin on 04.04.2018.
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: [
        './src/entry/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'index.js',
        pathinfo: true
    },
    devtool: 'cheap-module-source-map',
    module: {
        strictExportPresence: true,
        rules: [
            {
                oneOf: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: "babel-loader"
                        }
                    },
                    {
                        test: /global\.css$/,
                        use: [
                            require.resolve('style-loader'),
                            {
                                loader: require.resolve('css-loader'),
                                options: {
                                    importLoaders: 1,
                                },
                            },
                            {
                                loader: require.resolve('postcss-loader')
                            },
                        ]
                    },
                    {
                        test: /\.css$/,
                        exclude: /global\.css$/,
                        use: [
                            require.resolve('style-loader'),
                            {
                                loader: require.resolve('css-loader'),
                                options: {
                                    modules: true,
                                    importLoaders: 1,
                                    localIdentName: '[name]_[local]__[hash:base64:5]'
                                },
                            },
                            {
                                loader: require.resolve('postcss-loader')
                            },
                        ]
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: "src/entry/index.html",
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};