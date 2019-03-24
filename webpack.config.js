const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');


module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: "/dist"
    },
    module: {
        rules: [{
          test:/\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/',
        },{
            test: /\.css$/,
            use: ['style-loader','css-loader']
        },{
                test: /\.less$/,
                use: ['style-loader','css-loader',"less-loader"]
        },{
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
        }]
    },

    devServer: {
        overlay: true
    },

    plugins: [
    new MiniCssExtractPlugin({
        filename:"[name].css",
    })
    ]
};
