const express = require('express')
const app = express()
const ejs = require('ejs')
const port = 3000

app.get('/', (req, res) => {
    let data = {name:'张三',age:18}

    ejs.renderFile('./template/04_ejs模板语法展示.ejs',data,(err,html)=>{
        console.log(html)
        res.send(html)
    })

})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))