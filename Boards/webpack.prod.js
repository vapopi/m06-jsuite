const HtmlWebPackPlugin     = require ('html-webpack-plugin');
const MiniCssExtractPlugin  = require("mini-css-extract-plugin");
const TerserPlugin          = require("terser-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {

    mode: 'production',

    output: {

        clean: true,
        filename: "main.[contenthash].js"
    },

    module: {

        rules: [
            {
            test: /\.html$/,
            loader: 'html-loader',
            options: {
                minimize: true,
                //sources: false
            }
            },
            {
                test: /\.css$/i,
                exclude: /styles.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /styles.css$/,
                use:[MiniCssExtractPlugin.loader, "css-loader"],
            },

        ]
    },

    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),

        ]
    },

    plugins: [

        new HtmlWebPackPlugin ({
            template: './src/index.html',
            filename: './index.html'
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[fullhash].css',
            ignoreOrder: false
        }),
    ]
}