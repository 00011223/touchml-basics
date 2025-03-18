const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')

const server = http.createServer()

server.on('request', (req, res) => {
  // 该方式只能解析get请求的参数
  let data = url.parse(req.url, true).query
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  if (req.url == '/') {
    fs.readFile('./game.html', (err, data) => {
      res.end(data)
    })
  } else if (req.url.startsWith('/jquery')) {
    fs.readFile('./jquery-3.6.1.min.js', (err, data) => {
      res.end(data)
    })
  } else if (req.url.startsWith('/game')) {
    let num = Math.floor(Math.random()*(3-0)+0)
    console.log(data,num)

    // end方法只能返回二进制数据和字符串数据
    let obj = {
        msg:'客户端赢了',
        code:200
    }
    res.end(JSON.stringify(obj))
  }
})

server.listen(3000, () => {
  console.log('3000...')
})
