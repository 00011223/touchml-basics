const NodeRSA = require('node-rsa')
const express = require('express')
const router = express.Router()
// 用于捕获异步异常的处理器
const ah = require('express-async-handler')
const {success} = require('../utils/responseUtil.js')
const Key = require('../models/key.js')

// 登录
router.post('/signIn', ah(async (req, res) => {

}))

// 注册
router.post('/signUp', ah(async (req, res) => {

}))

// 获取公钥
router.post('/getPk', ah(async (req, res) => {
    // 通过 nodersa 创建一个 key 对象
    let key = new NodeRSA({b: 512})
    // 导出公钥和私钥
    let pk = key.exportKey('pkcs1-public')
    let sk = key.exportKey('pkcs1-private')
    // 存储公钥和私钥到数据库
    let doc = new Key({
        pk, sk
    })
    await doc.save()
    // 返回公钥
    res.json(success({pk}))
}))

module.exports = router
