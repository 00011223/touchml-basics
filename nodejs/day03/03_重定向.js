/* 

    重定向：资源路径过期了，当用户访问旧的路径时无法找到对应的资源，但是服务器进过处理，会告诉客户端
    新地址的路径！这种行为就是重定向



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
  if (url == '/' || url == '/index') {
    // 读取index.html中的内容
    fs.readFile(`${__dirname}/public/index.html`, 'utf-8', (err, data) => {
      if (err) throw err
      // 将文件的内容响应给客户端
      // 响应给你index页面文件
      res.setHeader('Content-Type', 'text/html;charset=utf-8')
      res.end(data)
    })
  } else if (url == '/oldtxt') {
    // fs.readFile(`${__dirname}/public/古诗.txt`, 'utf-8', (err, data) => {
    //   if (err) throw err
    //   res.setHeader('Content-Type', 'text/html;charset=utf-8')
    //   res.end(data)
    // })
    
    // 告诉浏览器，资源已经更换地址了
    // 响应头的状态码：302 重定向去寻找资源
    res.statusCode = 302 
    res.setHeader('Location','/newtxt')
    res.end()

  } else if (url == '/newtxt') {
  fs.readFile(`${__dirname}/public/古诗.txt`, 'utf-8', (err, data) => {
      if (err) throw err
      res.setHeader('Content-Type', 'text/html;charset=utf-8')
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

