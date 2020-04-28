const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')// 导入内存中生成的index文件插件

const htmlPlugin = new htmlWebpackPlugin({
    template: path.join(__dirname,'./src/index.html'),//源文件
    filename: 'index.html'//内存中的首页
})

module.exports = {
    mode:'development',// development开发模式 production产品模式（会压缩）
    devServer:{//配置webpack-dev
        open:true,
        hot: true
    },
    plugins:[
        htmlPlugin
    ],
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
                    }
                ],
                // use: 'babel-loader',
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
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ]
            },
            {
                test: /\.(gif|png|jpg|woff|svg|ttf|eot|cur|pdf)$/,
                use: [
                    {
                        loader: "file-loader",
                        // options: {
                        //     limit:8192,
                        //     name:'[name].[ext]',
                        // }
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
}