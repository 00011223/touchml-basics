const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded())

app.use('/public', express.static(`${__dirname}/public`))
app.get('/', (req, res) => res.send('Hello World!'))

// 原生ajax请求 '/get_xhr'接口
app.get('/get_fetch', (req, res) => {
  res.send({
    msg: '我收到你的数据啦',
    data: req.query,
  })
})

// 原生ajax请求 '/post_xhr'接口
app.post('/post_fetch', (req, res) => {
  res.send({
    msg: '我收到你的数据啦',
    data: req.body,
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
