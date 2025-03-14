/* 
    1、搭建一个http服务器
    2、该服务器有以下几个路由：
        /  ===> 响应index.html
        /index ==> 响应index.html文件
        /txt ==> 响应文本文件，内容自定
        /img ==> 响应图片文件,内容自定  png，jpeg...

    3、以上的文件资源是放在服务器端的public文件夹下

*/

//  导入http模块
const http = require('http')

// 导入fs模块
const fs = require('fs')

// 创建http服务器实例
const server = http.createServer()

// 绑定request请求事件
server.on('request', (req, res) => {
  // 解构赋值
  const { url } = req
  console.log(url)
  if (url == '/' || url == '/index') {
    console.log(666)
    // 读取index.html中的内容
    fs.readFile(`${__dirname}/public/index.html`, 'utf-8', (err, data) => {
      if (err) throw err

      // 将文件的内容响应给客户端
      // 响应给你index页面文件
      res.setHeader('Content-Type', 'text/html;charset=utf-8')
      res.end(data)
    })
  } else if (url == '/txt') {
    fs.readFile(`${__dirname}/public/古诗.txt`, 'utf-8', (err, data) => {
      if (err) throw err
      res.setHeader('Content-Type', 'text/html;charset=utf-8')
      res.end(data)
    })
  } else if (url == '/img') {
    fs.readFile(`${__dirname}/public/R-C.jpg`, (err, data) => {
      if (err) throw err
      // /img是图片格式
      res.setHeader('Content-Type', 'image/jpeg;charset=utf-8')
      res.end(data)
    })
  } else {
    res.end('404...')
  }
})

// 设置服务器实例的端口监听
server.listen(3000, () => {
  console.log('3000...')
})
