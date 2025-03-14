/* 
    路由：可以将其看作是访问路径！

    路径由请求地址url体现！

    后端服务器可以根据路由的不同，响应不同的资源或者数据！




*/

const http = require('http')
const url = require('url')
const server = http.createServer()

server.on('request', (req, res) => {
  res.setHeader('Content-Type', 'text/html;charset=utf8')
  console.log(req.url)
  if (req.url == '/' || req.url == '/index') {
    res.end('主页面')
  } else if (req.url == '/login') {
    res.end('登录页面')
  } else {
    res.end('not find')
  }
})

server.listen(3000, () => {
  console.log('3000...')
})
