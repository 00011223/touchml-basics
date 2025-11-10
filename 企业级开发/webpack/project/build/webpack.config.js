const path = require('path')

module.exports = {
    // 定义入口路径
    entry: path.join(__dirname, '../src/main.js'),
    // 定义出口路径
    output: {
        // 有几个入口文件就会输出几个结果
        filename: 'main.js',
        path: path.join(__dirname, '../output')
    }
}
