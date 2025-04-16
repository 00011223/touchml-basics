const mongoose = require('mongoose')


// 连接数据库

// 连接写法一：

// connect(数据库服务路径,回调函数)
// 如果在连接的时候不指定确定的数据库名，那么它会新建一个test数据库！

// mongoose.connect('mongodb://127.0.0.1:27017',(err)=>{
//     console.log('数据库连接成功')
// })


//连接写法二：
// 注意连接数据库的操作是属于异步操作！connect它会返回一promise实例
// mongoose.connect('mongodb://127.0.0.1:27017')
// .then(()=>{
//     console.log('连接成功二')
// })

// 连接写法三：
// mongoose.connect('mongodb://127.0.0.1:27017/web0703')
// const db = mongoose.connection
// db.on('err',(err)=>{
//     console.log(err)
// })
// db.on('open',()=>{
//     console.log(db)
//     console.log('数据库连接成功！三')
// })