const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')// 导入内存中生成的index文件插件
// const {CopyWebpackPlugin} = require('copy-webpack-plugin') // 拷贝进入dist
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
    mode:'development',// development开发模式 production产品模式（会压缩）
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
    plugins:[
        ...htmlPlugin,
        new webpack.ProvidePlugin({// 在每个模块注入jq
            $: 'jquery'
        }),
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
                    // MiniCssExtractPlugin.loader,
                    'style-loader',
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
                            outputPath:'img/',
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
}