// 导入express框架
const express = require('express')

// 创建一个express实例应用
const app = express()

// 创建一个get请求的路径 '/'
app.get('/',(req,res)=>{
    // req和res所代表的对象和原生服务器写法没有改变
    // 并且这两个对象还被express进行了二次的封装，增加了一些方法和属性！使其功能更加的强大！
    console.log(req.url)
    res.end('ok')
})

// 创建一个post请求的路径 '/xxx'
app.post('/xxx',(req,res)=>{
    res.end('post____')
})


// 监听app应用的端口
app.listen(3000,()=>{
    console.log('3000...')
})