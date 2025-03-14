/* 

    静态资源托管服务器：将一些静态的资源、文本、文档、图片等将这些资源统一的放到服务器端！并不是存放在用户本地计算机上


    用户通过访问服务器，可以获取到对应的静态资源！并且是准确的获取！


*/

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

// 导入path路径
const path = require('path')

// 创建http服务器实例
const server = http.createServer()

// 静态资源存放的文件夹路径
const publicPath = `${__dirname}/public`

// 绑定request请求事件
server.on('request', (req, res) => {
  // 解构赋值
  const { url } = req
  if (url == '/index.html') {
    console.log(url) // /index.html
    // 读取index.html中的内容
    fs.readFile(path.join(publicPath, url), 'utf-8', (err, data) => {
      if (err) throw err
      res.setHeader('Content-Type', 'text/html;charset=utf-8')
      res.end(data)
    })
  } else if (url == '/a.txt') {
    fs.readFile(path.join(publicPath, url), 'utf-8', (err, data) => {
      if (err) throw err
      res.setHeader('Content-Type', 'text/html;charset=utf-8')
      res.end(data)
    })
    // login.html
  } else if (url == '/R-C.jpg') {
    fs.readFile(path.join(publicPath, url), (err, data) => {
      if (err) throw err
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
