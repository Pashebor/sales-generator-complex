var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var JavaScriptObfuscator = require('webpack-obfuscator');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

var root = path.resolve(__dirname, 'app');

module.exports = {
    entry: {
        complex: path.resolve(root, 'complex.js'),
        style: path.resolve(root, 'assets/sass/style.scss')
        /*flower: path.resolve(root, 'assets/img/flowers.png'),
        paint: path.resolve(root, 'assets/img/paint.png'),
        loading: path.resolve(root, 'assets/img/loading.png')*/
    },
    output:{
        path: __dirname + '/build',
        filename: '[name].js'
    },

    watch: true,

    module: {
        loaders: [
            {
             test: /\.jsx?$/,
             exclude: /(node_modules)/,
             loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!autoprefixer-loader?safe=true!sass-loader' })
            },
            {
                test: /\.(svg)|(png)|(jpg)$/,
                loader: 'file-loader?name=images/[name].[ext]'
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    },
    //devtool: "eval-source-map",
    plugins: [
        new HtmlWebpackPlugin({
           template: path.resolve(root, './index.html')
        }),
        new ExtractTextPlugin({ filename: './style.complex.css', disable: false, allChunks: true }),
        new OptimizeCssAssetsPlugin(),
        new JavaScriptObfuscator ({
            rotateUnicodeArray: true
        }, ['[name].js'])
   ]
};
