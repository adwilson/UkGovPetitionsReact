const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/index.tsx",
        vendor: ["react", "react-dom"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[chunkhash].js"
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx", ".scss", ".css"]
    },
    module: {
        rules: [{
            test: /\.tsx?/,
            use: "ts-loader"
        }, {
            test: /\.(scss|css)/,
            use: ["style-loader", "css-loader", "sass-loader"]
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.ejs"),
            title: "UK Goverment & Petitions Data"
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000
    },
    devtool: "source-map"
}