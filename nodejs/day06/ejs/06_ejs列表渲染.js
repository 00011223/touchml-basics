const express = require('express')
const ejs = require('ejs')
const app = express()
const port = 3000

app.get('/', (req, res) => {

    // 假设以下数据是从数据库获取的
    let data = {
        userinfo:[
            {
                name:'唐僧',
                age:48,
                address:'河南洛阳',
                title:'团队领导者'
            },
            {
                name:'悟空',
                age:48000,
                address:'花果山',
                title:'团队kpi贡献者'
            },
            {
                name:'悟能',
                age:38000,
                address:'高老庄',
                title:'团队混子'
            },
            {
                name:'悟净',
                age:28000,
                address:'流沙河',
                title:'行李管理大师'
            }
        ]
    }


    ejs.renderFile('./template/ejs列表渲染.ejs',data,(err,html)=>{
        res.send(html)
    })

})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))