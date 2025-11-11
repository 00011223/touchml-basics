// 知识点
// entry 的多入口配置
// output 的多输出配置

const path = require('path')

module.exports = {
    // 入口
    // entry: path.join(__dirname, '../src/main.js'),
    // 多入口
    entry: {
        // key 入口名称
        // value 入口路径
        entry1: path.join(__dirname, '../src/main.js'),
        entry2: path.join(__dirname, '../src/app.js')
    },
    // 出口
    output: {
        // 输出文件的名称
        // filename: 'main.js',
        // [name] 文件名占位符
        // 占位符在多文件入口的时候使用
        filename: '[name].js',
        // 文件打包后的输出路径
        path: path.join(__dirname, '../dist')
    }
}
