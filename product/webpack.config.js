const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')// 导入内存中生成的index文件插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 抽离css文件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // 压缩css插件
const Uglifyjs = require('uglifyjs-webpack-plugin'); // 压缩js插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin') // 每次打包清空上次文件
// const {CopyWebpackPlugin} = require('copy-webpack-plugin') // 拷贝进入dist
console.log(CleanWebpackPlugin)
const webpack = require('webpack'); 

const htmlPlugin = [
    new htmlWebpackPlugin({
        template: path.join(__dirname,'./src/templte/index.html'),//源文件
        filename: 'index.html'//内存中的首页
    }),
    new htmlWebpackPlugin({
        template: path.join(__dirname,'./src/templte/home.html'),//源文件
        filename: 'home.html'//内存中的首页
    }),
]

module.exports = {
    mode:'production',// development开发模式 production产品模式（会压缩）
    devServer:{//配置webpack-dev
        open:true,
        hot: true,
        port: 3000,
        progress: true, // 打包进度条
    },
    entry:{
        index:'./src/templte/index.js',
        home:'./src/templte/home.js'
    },
    output:{
        // filename:'bundle.js',
        filename: "js/[name].js",
        path: path.resolve(__dirname,'dist'),// 路径必须是绝对路径
        // publicPath:'http://wen.com' //打包路径
    },
    plugins:[
        ...htmlPlugin,
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new webpack.ProvidePlugin({// 在每个模块注入jq
            $: 'jquery'
        }),
        new CleanWebpackPlugin()
    ],
    devtool:'eval-source-map', // 生成sourcemap文件，调试源码，不会生成文件
    module:{
        rules:[// 所有第三方规则配置
            {
                test: /\.js|jsx$/,
                use:[
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-env']
                          }
                    },
                ],
                exclude: /node_modules/,
            },
            // {
            //     test: /\.css$/,
            //     use:[
            //         {
            //             loader: ['style-loader','css-loader'],
            //         }
            //     ],   
            // },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader',
                    'less-loader',
                ]
            },
            {
                test: /\.(gif|png|jpg)$/,
                use: [
                    {
                        loader: "url-loader",
                        // loader: 'file-loader',
                        options: {
                            limit:8192,
                            outputPath:'img',
                            name:'[name].[ext]',
                        }
                    }
                ]
            },
        ]
    },
    resolve:{
        extensions:['.js','.jsx','.json'], // 配置文件后缀名（可省略不写）
        alias: {
            // 'vue$': 'vue/dist/vue.esm.js',
            '@': path.join(__dirname,'./src'),
        }
    },
    // externals:{//如果从cdn引入则需屏蔽
    //     jquery:'$'
    // },
    optimization:{ // 优化项
        minimizer:[
            // new Uglifyjs({
            //     cache: true,// 是否用缓存
            //     parallel: true, // 并发打包 
            //     sourceMap: true,// 源码映射
            // }),
            new OptimizeCssAssetsPlugin()
        ]
    }
}