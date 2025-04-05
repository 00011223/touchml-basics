const express = require('express')
const fsp = require('fs/promises')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/public', express.static(`${__dirname}/public`))

app.get('/login', (req, res) => {
  console.log(req.query)
  let p = fsp.readFile('./public/index.html')
  p.then((data) => {
    let html = data.toString().replace('xxx',req.query.uname)
    res.send(html)
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
