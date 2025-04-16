
// mongoose使用手册  中文网：http://mongoosejs.net/
const mongoose = require('mongoose')

// 在mongoose对象上有两个方法
// Schema model
// 解构这两个方法
const {Schema,model} = mongoose



// 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/demo')
.then(()=>{
    console.log('数据库连接成功')
})


// 创建文档结构，设置文档的架构规范  通过 Schema
const  usersSchema = new Schema({
    name:String,
    age:Number,
    sex:String
})


// 通过文档规范创建 users 集合对象
const usersModel = model('usersModel',usersSchema,'users')



// 以下是集合对象(数据模型对象)的相关CRUD操作
// 注意CRUD这些操作都是属于异步操作
// 注意mongoose中的CRUD操作规则于mongodb shell 环境下操作是几乎一模一样的！

//  C- 创建
// usersModel.create({
//     name:'张三',
//     age:18,
//     sex:'男'
// },(err,doc)=>{
//     console.log(doc)
// })

usersModel.create({
    name:100,
    age:20,
    sex:'男',
    xxx:'100'
}).then((doc)=>{
    console.log(doc)
}).catch(err=>{
    console.log(err)
})

usersModel.insertMany()

// 注意：在mongoose中除了插入文档的方法与mongodb环境中有些差异
// 其他的delete update  find  都是差不多的！用法是一样的！除了回调函数！查询器的使用也是一样！