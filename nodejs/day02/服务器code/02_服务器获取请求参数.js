/* 
    通过http请求的方式不同后端获取参数的方式也不同

    http请求的类型有多种：
        常见的请求方式：GET POST PUT DELETE HEADD等
        web开发中最常用的就是GET 和 POST 这两个请求方式是重点

    
    GET方式：
        服务器获取前端请求时URL中携带的参数
        通过nodejs的URL模块，可以解析到该数据
        通过浏览器地址栏发出的http请求都是属于GET请求
        
        参数是放在URL地址中?key=value&key=value&key=value


    POST方式：
        POST请求方式无法通过地址栏请求模拟！
        对于测试POST请求我们要采用第三方测试软件 postman 或者利用from表单标签进行模拟
    

*/


const http = require('http')
const server = http.createServer()

// 引入内置的URL模块
const url = require('url')

// 引入内置模块queryString
// const queryString = require('querystring')

server.on('request',(req,res)=>{
    // console.log(req)
    console.log(req.method)  //查看客户端的请求方式
    // console.log(req.url)// /?name=%27%E5%BC%A0%E4%B8%89%27&age=18

    // GET方式获取请求时URL中携带的参数
    // console.log(url.parse(req.url,true).query)
    // let data = url.parse(req.url,true).query
    // console.log(data.name,data.age)
    // console.log(666)
    // console.log(666)

    // POST方式获取请求时请求体中所携带的参数
    let mydata = ''
    req.on('data',(data)=>{
        mydata+=data
    })
    req.on('end',()=>{
        // console.log(mydata)   uname=%E5%BC%A0%E4%B8%89&uage=18
        // console.log(queryString.parse(mydata))

        // mydata = '?'+mydata
        console.log(url.parse(mydata,true).query)
        res.end('ok')
    })

    // res.end('ok')
})

server.listen(3000,()=>{
    console.log('3000...')
})