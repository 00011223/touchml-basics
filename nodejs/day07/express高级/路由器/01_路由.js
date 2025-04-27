/* 
    路由:代表请求路径

    一个路由就是一个服务路劲(或者是接口API)


*/

const express = require('express')
const app = express()
const port = 3000


// 路由参数 /a/01  和 url参数不同 ?key=value
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/a/:id', (req, res) =>{
    // 路由参数一般用于先服务器传递简单的数据比如id,状态值等
    // 后端就通过这个路由参数,去对应的操作!
    // 路由参数在req.params中
    console.log(req.params)
    res.send('a')

})
app.get('/b', (req, res) => res.send('b'))
app.get('/c', (req, res) => res.send('c'))




app.listen(port, () => console.log(`Example app listening on port ${port}!`))