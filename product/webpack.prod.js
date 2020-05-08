const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.config.js')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // 压缩css插件
const Uglifyjs = require('uglifyjs-webpack-plugin'); // 压缩js插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 抽离css文件
const {CleanWebpackPlugin} = require('clean-webpack-plugin') // 每次打包清空上次文件

module.exports = merge(base,{
    mode:'production',

    plugins:[
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CleanWebpackPlugin(),
    ],

    output:{
        // filename:'bundle.js',
        filename: "[name].js",
        path: path.resolve(__dirname,'dist'),// 路径必须是绝对路径
        // publicPath:'http://wen.com' //打包路径
    },
    module:{
        rules:[
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader',
                    'less-loader',
                ]
            },
        ]
    },

    optimization:{ // 优化项
        minimizer:[
            new Uglifyjs({
                cache: true,// 是否用缓存
                parallel: true, // 并发打包 
                sourceMap: true,// 源码映射
            }),
            new OptimizeCssAssetsPlugin()
        ]
    }
})