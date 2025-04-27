const express = require('express')
const app = express()
const port = 3000
// 导入userRouter路由器
const userRouter = require('./routers/userRouter.js')

app.get('/', (req, res) => {
    res.send('ok')
})


// 假设有一个路由器专门管理 user相关的所以服务
app.use('/user',userRouter)




app.listen(port, () => console.log(`Example app listening on port ${port}!`))