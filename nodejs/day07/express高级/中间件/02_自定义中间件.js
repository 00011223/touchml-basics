const express = require('express')
const app = express()
const port = 3000

// 中间件本质是一个函数！是一段处理请求对象的方法！
// 主要用中间件处理细节问题！

// 中间件函数中,必须设置三个形参
// req,res,next  这三个形参名字可以随意写,但是最好不要
// next:用于接收express框架自动传入的一个方法
// next的作用是调用下一个中间件或者路由!释放请求对象!
function Middl01(req, res, next) {
  console.log('经过了middl01中间件的处理...')
  next()

// 如果省略next(),客户端会处于挂着状态
// 也可以选择在中间件中,直接就res.send 响应给客户端
//   res.send('中间件01响应')
}

// 注册中间件
// use(path前缀,中间件)
// 如果省略path前缀,代表任意一个请求都会经过该中间件

app.use(Middl01)


app.get('/', (req, res) => {
  console.log('经过了前面中间件的处理...')
  res.send('ok')
})


app.get('/index',(req,res)=>{
    res.send('index...')
})

// 中间件应该放到所以的路由之前
// 中间件是具备顺序的
// app.use(Middl01)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
