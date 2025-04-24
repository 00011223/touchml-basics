const express = require('express')
const app = express()
const port = 3000



app.use((req,res,next)=>{
    console.log('middl01...')
    next()
})

app.use('/xxx',(req,res,next)=>{
    console.log('middl02...')
    next()
})

app.get('/', (req, res) => {
  console.log('经过了前面中间件的处理...')
  res.send('ok')
})


app.get('/index',(req,res)=>{
    res.send('index...')
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
