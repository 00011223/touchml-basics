const path = require('path')
const fs = require('fs')
// 引入webpack定义插件
const {DefinePlugin} = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 读取目录
const files = fs.readdirSync(path.join(__dirname, '../txt'))

console.log(files)

module.exports = {
    entry: path.join(__dirname, '../src/node.js进程传递参数给浏览器进程.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../dist')
    },
    plugins: [
        // 创建定义插件实例
        new DefinePlugin({
            // key: 浏览器访问参数的变量名，是个全局变量
            // value: 序列化后的参数值
            'process.env.fileList': JSON.stringify(files)
        }),
        new HtmlWebpackPlugin()
    ]
}
