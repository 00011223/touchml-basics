const express = require('express')
const app = express()
const port = 3000

function fun(data){
    // 预备的准备工作

    return (req,res,next)=>{
        console.log(data)
    }
}

app.use(express.json())
app.use(express.urlencoded())
app.use(fun())

app.use((req,res,next)=>{

})




app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))