const express = require('express')
const history = require('connect-history-api-fallback')
const path = require('path')
const app = express()

// 添加中间件
// 在访问页面前追加中间件处理
app.use(history())

app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(80, () => {
    console.log(`server start on: http://127.0.0.1`);
})