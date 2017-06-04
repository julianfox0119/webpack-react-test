var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app/main.js')],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 8181
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                use :[
                    "style-loader",
                    'css-loader'                    
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                exclude: /(node_modules)/,
                loaders: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};