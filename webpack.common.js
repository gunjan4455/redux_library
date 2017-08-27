const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.traceDeprecation = true;
module.exports = {
    devtool: 'eval-source-map',
    entry: ['whatwg-fetch','babel-polyfill',
        path.join(__dirname, 'app/main.js')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.tpl.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    "presets": ["react", "es2015", "stage-3"]
                },
                include: __dirname
            }, {
                test: /\.json?$/,
                loader: 'json-loader',
                include: __dirname
            }, {
                test: [/\.css$/,/\.less$/],
                loaders: [ 'style-loader', 'css-loader', 'less-loader' ],
                include: __dirname
            }, {
                test: /\.(png|jpg|svg|woff|woff2)?(\?v=\d+.\d+.\d+)?$/,
                loader: 'url-loader?limit=8192'
            }, {
                test: /\.(eot|ttf)$/,
                loader: 'file-loader'
            }
        ]
    }
};
