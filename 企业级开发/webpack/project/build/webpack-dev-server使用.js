// 知识点
// 什么时 webpack-dev-server
// 安装 webpack-dev-server
//      npm i -D webpack-dev-server
// 配置 webpack-dev-server
// 通过命令 npx webpack-dev-server 运行，例如: npx webpack-dev-server --config build/webpack-dev-server配置.js --mode=development


// 什么时 webpack-dev-server
// 一个用于开发页面时的服务器，该服务器可以实现自动更新页面

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, '../src/webpackDevServer.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../dist')
    },
    plugins: [
        new HtmlWebpackPlugin({title: 'webpack-dev-server页面'})
    ],
    // 开发服务器配置
    devServer: {
        // 静态资源配置
        static: {
            // 静态资源文件夹路径
            directory: path.join(__dirname, '../dist')
        },
        // 资源是否压缩
        compress: true,
        // 端口号
        port: 3306
    }
}
