// 引入内置模块 http模块
const http = require('http')

// 创建一个服务器实例
const server = http.createServer()

// 未server绑定request事件，指定回调函数
// server.on(事件名称,callback(req,res))
// req ==> 客户端请求时发送过来的请求对象
// res ==> 服务端响应时所需要的一个响应对象
server.on('request',(req,res)=>{

    // 多段式响应
    res.write('hello')
    res.write('world')

    // end代表结束响应
    // 服务器必须在每次响应完成后结束响应，如果不结束响应浏览器会卡住！
    res.end()
})


server.listen(3000,()=>{
    console.log('on listen http://127.0.0.1:3000')

    // http://192.168.2.146:3000
})