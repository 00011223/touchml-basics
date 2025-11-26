const {Schema, model} = require('mongoose')

// 公钥和密钥的临时存储表
const schema = new Schema({
    pk: {type: String, index: true},
    sk: {type: String, index: true},
    createdAt: {type: Date, index: true, default: new Date()},
    updatedAt: {type: Date, index: true, default: new Date()}
})

module.exports = model('key', schema)
