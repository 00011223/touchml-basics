const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded())

// 搭建静态资源托管 托管/public文件夹下的内容
// use(url路径前缀,中间件)
app.use('/public',express.static(`${__dirname}/public`))

app.get('/', (req, res) => res.send('Hello World!'))


app.get('/get_form',(req,res)=>{
    res.send(req.query)
})


app.post('/post_form',(req,res)=>{
    res.send(req.body)
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))