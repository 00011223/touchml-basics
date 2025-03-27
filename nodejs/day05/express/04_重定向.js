const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => res.send('4000 hello'))

app.get('/oldtxt',(req,res)=>{

    // 该路由之前是可以成功访问到对应的数据
    // 并且也能正常的返回数据内容

    // 资源搬迁了，更改了
    res.location('/newtxt')
    res.sendStatus(302)  //该方法就是两个点：1、设置响应的状态码  2、结束响应
})


app.get('/newtxt',(req,res)=>{
    
    // 响应文件
    res.sendFile(`${__dirname}/public/a.txt`)
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))