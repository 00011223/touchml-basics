const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

    // res.sendFile
    // 注意：该方法也是响应客户端的一种方式！该方式主要是响应文件
    // 文件的路径必须是绝对路径，相对路径会报错
    res.sendFile(`${__dirname}/public/index.html`)


})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))