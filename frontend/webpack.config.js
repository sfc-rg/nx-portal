const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleTracker = require("webpack-bundle-tracker");
const webpack = require("webpack");
const packageJson = require('./package.json');
const version = packageJson.version;

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ],
            },
            {
                test: /\.(ttf|eot|woff|woff2|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: "[name].[ext]",
                        outputPath: './webfonts',
                        publicPath: '../webfonts',
                    }
                }]
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'style/[name].css' }),
        new BundleTracker({ filename: './webpack-stats.json' }),
        new webpack.BannerPlugin(`[name] v${version} Copyright (C) 2019 Shota Shimazu`),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})],
    },
}
