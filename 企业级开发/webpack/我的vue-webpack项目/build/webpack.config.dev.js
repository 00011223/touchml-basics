const path = require('path')
// 引入 vue loader 的插件
const {VueLoaderPlugin} = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, '../src/main.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../dist')
    },
    module: {
        // 配置 vue-loader
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // this will apply to both plain `.js` files
            // AND `<script>` blocks in `.vue` files
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            // this will apply to both plain `.css` files
            // AND `<style>` blocks in `.vue` files
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'hello vue',
            // 插件需要的 html 模板路径
            template: path.join(__dirname, '../public/index.html')
        })
    ],
    resolve: {
        extensions: ['.vue']
    },
    // 配置dev-server
    devServer: {
        static: {
            directory: path.join(__dirname, '../dist')
        },
        port: 3306
    }
}
