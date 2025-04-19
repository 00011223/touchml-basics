const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const port = 3000

app.use(cookieParser())
app.get('/', (req, res) => {

  if (JSON.stringify(req.cookies) === '{}') {
    res.cookie('name', req.query.name, { maxAge: 100000 })
    res.send('第一次来哇！')
  } else {
    console.log(req.cookies.name+'访问了服务器!')
    res.send(`又是你....${req.cookies.name}`)
  }
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
