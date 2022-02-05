const HtmlWebPackPlugin = require ('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { Resolver, Chunk } = require('webpack');

module.exports = {
    entry:{
        home: './src/index.js',
    },
    mode: 'development',

    output: {
        path: __dirname + '/dist',
        filename: "[name].bundle.js"
        //clean: true
    },

    module: {
        
        rules: [
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'tipografia/'
                    }
                  }
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    // minimize: true,
                sources: false
                }
            },
/*             {
                test: /\.(sa|sc|c)ss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }, */
            {
                test: /\.css$/i,
                exclude: /styles.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },

            {
                 test: /\.(png|jpe?g|gif)$/i,
                 loader: 'file-loader',
                 options: {
                     name: '[name].[ext]'
                 },

            }

        ]
    },
    plugins: [

        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            chunks: ['home']
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[fullhash].css',
            ignoreOrder: false
        }),

        new CopyPlugin({
            patterns: [
                { from: "src/assets", to: "./assets" },
            ],
        }),
    ]
}