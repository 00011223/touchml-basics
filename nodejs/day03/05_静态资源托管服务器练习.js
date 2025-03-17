

const http = require('http')
const fs = require('fs')
const path = require('path')

const  server = http.createServer()

const filePath = __dirname
server.on('request',(req,res)=>{
    let {url} = req
    // 静态资源的路由托管
    if(url.includes('/public')){
        //  /public/index.html
        fs.readFile(path.join(filePath,url),'utf-8',(err,data)=>{
            if(err) throw err
            res.setHeader('Content-Type','text/html;charset=utf-8')
            res.end(data)
        })
    }else{
        res.end('404')
    }

})



server.listen(3000,()=>{
    console.log('3000...')
})