/* 
    路由:代表请求的路径

    一个路由是一个路径

    多个路由是多个路劲


    路由器:是一个管理路由的容器
    作用:
     - 可以将一些相似路由进行统一管理,或者相同服务进行管理和分发
     - 代码的分离!
     - 提高代码的复用!


*/

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/user/add', (req, res) => {
    

    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
})
app.get('/user/delete', (req, res) => {
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
})
app.get('/user/update', (req, res) => res.send('Hello World!'))
app.get('/user/find', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))