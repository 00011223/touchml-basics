const express = require('express')
const mongoose = require('mongoose')
const dbConfig = require('./dbconfig.js')
const ru = require('./utils/responseUtil.js')
const app = express()

// 注册路由器
const userRouter = require('./routers/userRouter.js')

app.use('/user', userRouter)

// 服务器的统一异常处理器
// 异常处理器总是在所有接口的最后面
app.use((err, req, res, next) => {
    console.error(err)
    res.json(ru.fail(err))
})

app.listen(80, () => {
    console.log(`server start on: http://127.0.0.1`)
    // 服务启动完成后连接数据库
    mongoose.connect(`mongodb://${dbConfig.account}:${dbConfig.pwd}@${dbConfig.ip}:${dbConfig.port}/${dbConfig.dbName}`)
    let db = mongoose.connection
    db.once('open', () => {
        console.log('数据库已连接')
    })
    db.on('error', err => {
        console.error('db error: ' + err.message)
    })
})
