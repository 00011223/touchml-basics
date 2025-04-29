const express = require('express')
const userRouter = require('./routers/userRouter')
const mongoose = require('mongoose')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))


// user相关的服务
app.use('/user',userRouter)

app.listen(port, () => {
    // 连接数据库
    mongoose.connect('mongodb://127.0.0.1:27017/demo')
    .then(()=>{
        console.log('数据库连接成功')
        console.log('3000...')
    })
})