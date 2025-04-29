// 导入user的数据模型
const userModel = require('../modules/userModel')
const ejs = require('ejs')
const path = require('path')
// user控制层,对查询服务的相关逻辑
exports.find = function(req,res){
    // 通过数据模型对象，去数据库中查询数据
    userModel.find({},(err,docs)=>{
        // 访问视图层
        ejs.renderFile(path.join(__dirname,'../','views/userView.ejs'),{data:docs},(err,html)=>{
            console.log(err)
            res.send(html)
        })
    })
}

exports.delete = function(){

}

exports.update = function(){

}




