const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let mode = "development"

if(process.env.NODE_ENV == "production") mode = "production"

module.exports = {
    mode, 
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index.bundle.js"
    },
    devServer: {
        port: 8080,
        // watchContentBase: true,
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g)$/i,
                type: "asset/resource"
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.svg$/,
                use: [
                  {
                    loader: 'svg-url-loader',
                    options: {
                      limit: 10000,
                    },
                  },
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "/src/public/index.html")
        }),
        new CopyWebpackPlugin({
            patterns: [ 
                {
                    from:  path.join(__dirname, "/src/public/img"),
                    to: 'img'
                },
                {
                    from:  path.join(__dirname, "/src/public/icon"),
                    to: 'icon'
                },
            ]
        }),
    ],
    resolve: {
        extensions: [".js",".jsx"]
    }
}