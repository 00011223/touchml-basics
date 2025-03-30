const express = require('express')
const fileupload = require('express-fileupload')
// fs/promises内置模块，该模块是用promise的方式重写了fs模块的内容
const fsp = require('fs/promises')
const path = require('path')
const app = express()
const port = 3000

app.use(fileupload({
    defParamCharset:'utf-8'
}))
// 静态资源托管
app.use('/public',express.static(`${__dirname}/public`))

app.get('/', (req, res) => res.send('Hello World!'))


// 设置文件上传的接口
app.post('/upload',(req,res)=>{
    // console.log(req.files)
    let filedata = []
    for(let key in req.files ){
        // console.log(key)
        filedata.push(req.files[key])
    }
    // console.log(filedata)
    // let p1 = fsp.writeFile(path.join(__dirname,'/public',filedata[0].name),filedata[0].data)
    //  p1.then(()=>{
    //     // console.log('写入成功')
    //     res.send({
    //         msg:'写入成功'
    //     })
    //  })
    let p = []
    filedata.forEach((el)=>{
        p.push(fsp.writeFile(path.join(__dirname,'/public',el.name),el.data,err=>{
            if(err) throw err
            console.log('写入成功')
        }))
    })
    Promise.all(p)
    .then(()=>{
        res.send({
            msg:'多个文件上传成功！'
        })
    })
   
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))