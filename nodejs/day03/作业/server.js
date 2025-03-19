const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')
const { json } = require('stream/consumers')

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
    let num = Math.floor(Math.random() * (3 - 0) + 0)
    let { sign } = data
    console.log(sign, num)

    if (sign == 0) {
      switch (num) {
        case 0:
          res.end('ok')
          break
        case 1:
          res.end('ok')
          break
        case 2:
          res.end(
            JSON.stringify({
              msg: '用户赢了',
              code: 300,
            })
          )
          break
      }
    } else if (sign == 1) {
      switch (num) {
        case 0:
          res.end(
            JSON.stringify({
              msg: '平局',
              code: 200,
            })
          )
          break
        case 1:
          res.end(
            JSON.stringify({
              msg: '服务器赢了',
              code: 100,
            })
          )
          break
        case 2:
          res.end(
            JSON.stringify({
              msg: '用户赢了',
              code: 300,
            })
          )
          break
      }
    } else if (sign == 2) {
      switch (num) {
        case 0:
          res.end(
            JSON.stringify({
              msg: '平局',
              code: 200,
            })
          )
          break
        case 1:
          res.end(
            JSON.stringify({
              msg: '服务器赢了',
              code: 100,
            })
          )
          break
        case 2:
          res.end(
            JSON.stringify({
              msg: '用户赢了',
              code: 300,
            })
          )
          break
      }
    }
  }
})

server.listen(3000, () => {
  console.log('3000...')
})
