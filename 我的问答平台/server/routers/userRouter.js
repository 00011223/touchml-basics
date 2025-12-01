const CryptoJS = require('crypto-js')
const moment = require('moment')
const assert = require('assert')
const NodeRSA = require('node-rsa')
const express = require('express')
const router = express.Router()
// 用于捕获异步异常的处理器
const ah = require('express-async-handler')
const {success} = require('../utils/responseUtil.js')
const Key = require('../models/key.js')
const Account = require('../models/account.js')
const Token = require('../models/token.js')

// 登录
router.post('/signIn', ah(async (req, res) => {
    let {account, pwd, remember} = req.body
    // 查找账号
    const doc = await Account.findOne({account})
    assert.ok(doc, '账号不存在')
    // 通过账号sk解密pwd
    const key = new NodeRSA({b: 512})
    key.importKey(doc.sk, 'pkcs1-private')
    pwd = key.decrypt(Buffer.from(JSON.parse(pwd).data)).toString()
    // 再次md5加密后对比pwd
    pwd = CryptoJS.MD5(pwd).toString()
    assert.ok(pwd === doc.pwd, '密码错误')
    // 发放门票
    // 更新数据并查找数据
    // 第一个参数: 查询条件
    // 第二个参数: 更新数据
    // 第三个参数: 配置项
    const token = await Token.findOneAndUpdate({accountId: doc._id}, {
        updatedAt: new Date(),
        expired: remember === true ? moment().add(7, 'days').toDate() : moment().add(1, 'days').toDate(),
    }, {
        // 若没有查找到对应数据就添加新数据
        // 否则更新数据
        upsert: true,
        // 返回更新后的数据
        new: true
    })
    res.cookie('token', token._id.toString(), {maxAge: remember === true ? 1000 * 60 * 60 * 24 * 7 : 1000 * 60 * 60 * 24})
    res.json(success())
}))

// 注册
router.post('/signUp', ah(async (req, res) => {
    // 获取参数校验参数
    let {account, pwd, nickname, pk} = req.body
    assert.ok(account !== undefined && (account.length >= 6 && account.length <= 10), '账号长度应该为6~10位')
    assert.ok(pwd !== undefined, '密码为空')
    assert.ok(nickname !== undefined && (nickname.length >= 2 && nickname.length <= 10), '昵称长度应该为2~10位')
    assert.ok(pk !== undefined, 'pk为空')

    // 判断账号是否存在
    const exists = await Account.exists({account})
    if (exists) {
        // 已经存在
        throw new Error('账号已存在')
    }
    // 查询对应公钥的密钥
    let doc = await Key.findOne({pk})
    // 解密密码
    const key = new NodeRSA({b: 512})
    key.importKey(doc.sk, 'pkcs1-private')
    pwd = key.decrypt(Buffer.from(JSON.parse(pwd).data)).toString()
    // MD5加密密码
    pwd = CryptoJS.MD5(pwd).toString()
    // 新建账号到数据库
    doc = new Account({
        account,
        pwd,
        nickname,
        pk,
        sk: doc.sk
    })
    await doc.save()
    res.json(success({id: doc._id}))
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

// 通过账号读取pk
router.post('/getPkByAccount', ah(async (req, res) => {
    const {account} = req.body
    // 查询账号
    let doc = await Account.findOne({account})
    if (!doc) throw new Error('账号不存在')
    res.json(success({pk: doc.pk}))
}))

// 获取用户信息
router.post('/getUserInfo', ah(async (req, res) => {
    res.json(success(req.session.userInfo))
}))

// 登出
router.post('/signOut', ah(async (req, res) => {
    // 验证登录状态
    assert.ok(req.session.userInfo !== undefined, '未登录')
    // 撕票
    // 删除数据库中的token
    const tokenId = req.cookies.token
    await Token.deleteOne({_id: tokenId})
    // 删除cookie中的token
    res.cookie('token', '', {maxAge: 0})
    // 删除缓存
    req.session.userInfo = undefined
    res.json(success())
}))

module.exports = router
