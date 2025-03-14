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
      res.setHeader('Content-Type','text/html;charset=utf-8')
      res.end(data)
    })
  }else {
     // end方法只能响应二进制数据和字符串数据！
    res.end('404 not find!')
  }

 
 
})




// 设置服务器实例的端口监听
server.listen(3000, () => {
  console.log('3000...')
})
