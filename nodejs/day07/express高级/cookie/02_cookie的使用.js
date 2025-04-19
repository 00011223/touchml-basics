const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const port = 3000


// 注册中间件

// 设置一些签名密钥
app.use(cookieParser('this is key'))

app.get('/', (req, res) => {
    
    console.log(req.cookies)
    if(JSON.stringify(req.cookies) === '{}'){
        // res.cookie(key,value,[options])
        // key: 代表cookie的键名
        // value：对应的值
        // options：是配置项，额外配置cookie的一些相关内容，比如 有效期 路径 加密等
        //  options:{
        //    maxAge:cookie的有效期
        //    httpOnly：ture
        //    signed:true
        // }
        res.cookie('name','jiangjunjie',{
            maxAge:100000,
            httpOnly:true,
            signed:true
        })

        res.cookie('age',18,{ maxAge:100000,
            httpOnly:true,
            signed:true})
        res.cookie('xxxx',{x:123,y:456},{ maxAge:100000,
            httpOnly:true,
            signed:true})

        res.send('ok')
    }else {
        res.send('ok...')
    }

})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))