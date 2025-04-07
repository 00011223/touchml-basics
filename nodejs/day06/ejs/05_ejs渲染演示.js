const express = require('express')
const ejs = require('ejs')
const app = express()
const port = 3000

app.get('/', (req, res) => {

    // 假设以下数据是从数据库获取的
    let data = {user:{name:'张三',age:17,and_father:false}}
    ejs.renderFile('./template/ejs条件渲染.ejs',data,(err,html)=>{
        res.send(html)
    })

})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))