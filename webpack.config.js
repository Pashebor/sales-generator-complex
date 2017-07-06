var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var root = path.resolve(__dirname, 'app');

module.exports = {
    entry: {
        complex: path.resolve(root, 'complex.js'),
        style: path.resolve(root, 'assets/sass/style.scss')
       /* saleslogo: path.resolve(root, 'assets/images/saleslogowhite.svg'),
        circle: path.resolve(root, 'assets/images/circle.svg'),
        gears: path.resolve(root, 'assets/images/gears.png'),
        cam: path.resolve(root, 'assets/images/cam.png'),
        cmsability: path.resolve(root, 'assets/images/cms-ability.png'),
        htmlvalidator: path.resolve(root, 'assets/images/html-validator.png'),
        rocket: path.resolve(root, 'assets/images/rocket.png'),
        aim: path.resolve(root, 'assets/images/aim.png'),
        firstplace: path.resolve(root, 'assets/images/firstplace.png'),
        grow: path.resolve(root, 'assets/images/grow.png'),
        id: path.resolve(root, 'assets/images/id.png'),
        tools: path.resolve(root, 'assets/images/tools.png'),
        clients: path.resolve(root, 'assets/images/clients.svg'),
        lowprice: path.resolve(root, 'assets/images/lowprice.svg'),
        schedule: path.resolve(root, 'assets/images/schedule.svg'),
        includebackground: path.resolve(root, 'assets/images/includebackground.jpg')*/
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
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!postcss-loader!sass-loader' })
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
        new ExtractTextPlugin({ filename: './style.complex.css', disable: false, allChunks: true })
   ]
};
