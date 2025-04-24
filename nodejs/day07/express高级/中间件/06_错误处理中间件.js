/* 

    错误处理中间件,它是一个专门处理,前面其他中间件在运行时产生的错误!
    由错误处理中间件统一处理

    


*/

const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
  throw new Error('出错了')
})

app.get('/', (req, res) => res.send('Hello World!'))

// 只要错误处理中间件的前面不管是路由处理出现错误还是其他的中间件出现错误,直接将由错误处理中间件捕获
app.use((err, req, res, next) => {
  console.log(err, 6666)
  res.send('ok')
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
