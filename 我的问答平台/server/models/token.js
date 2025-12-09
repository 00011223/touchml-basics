const {model, Schema} = require('mongoose')

// 登录令牌
const schema = new Schema({
    accountId: {type: String, index: true},
    expired: {type: Date, index: true}, // 超时时间
}, {
    timestamps: true
})

module.exports = model('token', schema)
