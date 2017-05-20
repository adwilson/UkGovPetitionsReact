const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/index.tsx",
        vendor: ["react", "react-dom", "react-router", "react-router-dom", "moment", "lodash"]
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
            use: ExtractTextWebpackPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "sass-loader"]
            })
        }, {
            test: /\.(jpg|jpeg|png|gif|svg)/i,
            use: "file-loader"
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.ejs"),
            title: "UK Government Petitions - Data"
        }),
        new ExtractTextWebpackPlugin("styles.css")
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000
    },
    devtool: "source-map"
}