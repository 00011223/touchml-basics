const express = require('express')
const app = express()
const port = 8080

// express中间件
// app.use是注册中间件
app.use(express.json())  //解析body中json格式的数据 例如： '{"name":"张三"}'
app.use(express.urlencoded())//解析body中x-www-form-urlencode 例如： name='张三'&age=18


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/demo1',(req,res)=>{
    // 获取get请求时url携带的参数
    console.log(req.query)
    res.send('ok')
})

app.post('/demo2',(req,res)=>{
    // 获取post请求时存放在body中的数据
    console.log(req.body)
    res.send('ok')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))