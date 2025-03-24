const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  // 第一种:原生方法响应客户端 end方法
  // res.end('end_')
  // 第二种：express提供的 send方法
  // end和send方法的区别：
  // 1、end是原生提供的方法，该方法只能响应二进制数据和字符串数据其余的任何类型的数据都会报错！
  // 2、send方法是express对res对象二次封装后实现的一个新方法
  // 3、send方法是很强大的，可以响应任何类型的数据除number类型的数据外！该方法还会根据响应的内容不同自动的设置响应头的content-type的值
  //   res.send({
  //     name:'张三',
  //     age:18
  //   })

//   第三种：res.json() 以json格式响应数据到客户端
    // res.json({
    //     name:'张三'
    // })

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
