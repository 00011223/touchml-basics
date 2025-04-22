const express = require('express')
const session = require('express-session')
const app = express()
const port = 3000


// 注册express-session中间件
app.use(session({
    secret:'this is key',
    cookie:{maxAge:100000000}
}))


app.get('/', (req, res) => {

    console.log(req.session)
    
    // if(req.session.count){
    //     req.session.count = req.session.count + 1
    // }else {
    //     req.session.count = 1
    // }

    res.send('ok')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))