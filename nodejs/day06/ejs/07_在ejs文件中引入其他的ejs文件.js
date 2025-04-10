const express = require('express')
const ejs = require('ejs')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    

    ejs.renderFile('./template/A.ejs',{data_A:{a:100},data_B:{b:200}},(err,html)=>{
        res.send(html)
    })

    let data = {
        phone:[
            {
                name:'Xiaomi Civi 2',
                price:'2399元起',
                src:'//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202209261921_a1b840c267bd26bcf4dc654d52f259e5.png?thumb=1&w=250&h=250&f=webp&q=90'
            },
            {

            },
            {

            }
        ],
        computer:[
            {
                
            }
        ]
    }

})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))