const express = require('express')
// 导入express-fileupload模块
// 该模块专门用于处理文件类型的数据
const fileUpload = require('express-fileupload')

// 导入fs模块
const fs = require('fs')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded())
app.use(fileUpload())
//托管public文件夹下的资源
app.use('/public',express.static(`${__dirname}/public`))
app.post('/', (req, res) => {
    console.log(req.query)
    console.log(req.body)
    console.log(req.files)

    // 保存用户传输的文件到本地服务器中
    fs.writeFile('./public/xxx.png',req.files.img01.data,(err)=>{
        console.log('文件写入成功！')
        res.send({
            msg:'文件上传成功',
            code:200
        })
    })
 
})






app.listen(port, () => console.log(`Example app listening on port ${port}!`))