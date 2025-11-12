// 知识点 https://webpack.docschina.org/configuration/resolve/
// 什么是resolve
// alias 配置别名
// extensions 配置扩展名

// 什么是resolve
// resolve 的作用就是告诉 webpack 如何解析模块

const path = require('path')

module.exports = {
    entry: path.join(__dirname, '../src/resolve使用.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../dist')
    },
    // 告诉webpack如何解析模块
    resolve: {
        // 别名
        alias: {
            // key: 别名名称
            // value: 别名对应的路径
            '@': path.join(__dirname, '../src')
        },
        // 配置扩展名
        // 在此处配置的扩展名，在源文件中引入文件时就可以省略扩展名
        extensions: ['.mjs', '.js']
    }
}
