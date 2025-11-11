// 知识点
// loader 是什么
// 加载 css 文件
//      1. 安装 css-loader 和 style-loader (使用 npm i -D 安装)
//      2. 配置 module
// 加载图片或其他文件
//      1. 安装 file-loader
//      2. 配置 module


// loader 是什么？
// 由于webpack只知道如何处理js文件，所以项目中引入的其他文件都需要使用loader进行加载，loader的作用就是告诉webpack如何加载文件

const path = require('path')

module.exports = {
    entry: path.join(__dirname, '../src/加载器.js'),
    output: {
        filename: '加载器.js',
        path: path.join(__dirname, '../dist')
    },

    // 模块配置
    module: {
        // 打包文件的打包规则
        rules: [
            {
                // 使用正则表达式匹配对应的文件
                test: /\.css$/,
                // use 代表使用对应加载器
                use: [
                    // 按顺序配置加载器
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}
