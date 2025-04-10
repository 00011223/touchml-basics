const express = require('express')
const app = express()
const ejs = require('ejs')
const port = 3000

// 设置views属性  设置模板文件的路径
app.set('views',`${__dirname}/template`)


app.get('/', (req, res,next) => {
    // render('模板的名字',对模板中传入的数据,回调函数)
    res.render('demo.ejs',{name:'张三撒旦发射点发射点',age:18},(err,html)=>{
        if(err) throw err
        res.send(html)
    })
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))