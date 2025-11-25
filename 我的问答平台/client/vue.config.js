const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    // 配置开发服务器
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1',
                pathRewrite: {
                    '^/api': ''
                },
            }
        }
    }
})
