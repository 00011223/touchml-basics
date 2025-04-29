const {Schema,model} = require('mongoose')


// 创建user集合相关的结构

const userSchema = new Schema({
    name:String,
    age:Number,
    sex:String
})



// 创建数据模型对象 

const userModel = model('userModel',userSchema,'users')

// 导出user的数据模型对象
module.exports = userModel