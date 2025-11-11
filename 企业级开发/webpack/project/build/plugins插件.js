// 知识点
// 什么是插件
// CleanWebpackPlugin 清空dist目录插件
// HtmlWebpackPlugin 用于自动创建index.html文件


// 什么是插件？
// 提供一些 webpack 的辅助功能的 js 模块就是插件

// 引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const path = require('path')

module.exports = {
    entry: path.join(__dirname, '../src/main.js'),
    output: {
        filename: '加载器.js',
        path: path.join(__dirname, '../dist')
    },
    plugins: [
        // 创建插件实例对象
        // 配置项请参考官网: https://github.com/jantimon/html-webpack-plugin#options
        new HtmlWebpackPlugin({
            title: '这是插件添加的title',
        }),
        new CleanWebpackPlugin()
    ]
}
