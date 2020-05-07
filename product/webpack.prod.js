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
            filename: 'css/[name].css'
        }),
        new CleanWebpackPlugin()
    ],

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