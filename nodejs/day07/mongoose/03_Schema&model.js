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
