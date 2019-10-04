const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [
    {

        entry: {
            main: "./src/js/app.js"
        },
        output: {
            path: path.resolve(__dirname, "dist/js"),
            publicPath: '/js/',
            filename: "[name].js"
        },
        plugins: [
            /* use jQuery as Global */
            new webpack.ProvidePlugin({
                jQuery: "jquery",
                $: "jquery",
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default'],
            })
        ],
        resolve: {
            extensions: ['.js']
        }
    },
    {
        entry: {
            main: "./src/styles/app.scss"
        },
        output: {
            path: path.resolve(__dirname, "dist/css"),
            publicPath: '/css/',
            filename: "[name].css"
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                            },
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: function () {
                                    return [
                                        require('precss'),
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: './[name].css'
            })
        ],
        resolve: {
            extensions: ['.css', '.js']
        },
    }
];
