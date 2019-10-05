const path = require('path');
const globule = require('globule')
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');


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
        }
    },
    {
        entry: {
            main: "./src/pages/index.pug"
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            publicPath: '/',
            filename: "[name].html"
        },
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'pug-loader',
                            options: {
                                pretty: true,
                                root: path.resolve(__dirname, 'src/pages'),
                            }
                        },
                    ],
                }
            ]
        },
        plugins: [

            new HtmlWebpackPlugin({
                filename: `index.html`,
                template: "./src/pages/index.pug",
            })
        ]
    }
];

const documents = globule.find(
    './src/documents/**/*.pug', {
    ignore: [
        './src/documents/**/_*/*.pug'
    ]
}
)

