const {model, Schema} = require('mongoose')

// 登录令牌
const schema = new Schema({
    accountId: {type: String, index: true},
    expired: {type: Date, index: true}, // 超时时间
    createdAt: {type: Date, index: true, default: new Date()},
    updatedAt: {type: Date, index: true, default: new Date()}
})

module.exports = model('token', schema)
