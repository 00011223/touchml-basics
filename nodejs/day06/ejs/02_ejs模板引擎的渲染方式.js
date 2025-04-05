const express = require('express')
// 导入ejs模板引擎
const ejs = require('ejs')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // 假设以下数据是从数据库拿的
    let data = {name:'张三',age:18}

    // ejs渲染有三种方式
    // 方式一:
    // let template = ejs.compile('<h1><%= user.name %></h1>',{/* 配置项,大部分情况省略 */})
    // let html = template(data)
    

    // 方式二:
    // let html = ejs.render(`<h1><%= user.name %></h1>`,data,{})


    // 方式三:
    ejs.renderFile('./template/demo.ejs', data, function(err, str){
        // str => Rendered HTML string
        res.send(str)
    });





    // 响应个客户端渲染好的html数据
    res.send(html)


})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))