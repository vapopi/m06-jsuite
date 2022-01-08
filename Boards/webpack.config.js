const HtmlWebPackPlugin     = require ('html-webpack-plugin');
const MiniCssExtractPlugin  = require("mini-css-extract-plugin");

module.exports = {

    mode: 'development',
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
            {
                test: /ª.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

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