const {Schema, model} = require('mongoose')

// 账号表
const schema = new Schema({
    // 账号
    account: {type: String, index: true, unique: true},
    // 密码
    pwd: {type: String, index: true},
    // 昵称
    nickname: {type: String, index: true},
    // 公钥
    pk: {type: String, index: true},
    // 私钥
    sk: {type: String, index: true},
}, {
    timestamps: true
})

// 导出数据模型
module.exports = model('account', schema)
