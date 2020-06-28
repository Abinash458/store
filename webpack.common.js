const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: './public/index.html',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true
            }
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                  {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        modules: true
                        }
                    }
                ],
                include: /\.module\.css$/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
                exclude: /\.module\.css$/
            },
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/i,
                use: [
                    'url-loader',
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: 'assets/images'
                        }  
                    }
                ]
            },
        ]
    },

    output: {
        chunkFilename: '[name].bundle.js',
        filename: '[name].bundle.js',
    },
    optimization: {},
};