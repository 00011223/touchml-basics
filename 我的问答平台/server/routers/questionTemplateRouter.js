const express = require('express')
const router = express.Router()
// 用于捕获异步异常的处理器
const ah = require('express-async-handler')
const {success} = require('../utils/responseUtil.js')
const QuestionTemplate = require('../models/questionTemplate.js')
const assert = require('assert')

// 添加题目模板
router.post('/add', ah(async (req, res) => {
    let {name} = req.body
    assert.ok(req.session.userInfo, '未登录')
    // 出题人id
    let accountId = req.session.userInfo.id
    let nameAndAccountId = name + accountId
    let doc = new QuestionTemplate({
        name,
        accountId,
        nameAndAccountId
    })
    await doc.save()
    res.json(success({id: doc._id}))
}))

// 分页查询
router.post('/page', ah(async (req, res) => {
    let {name, page, pageSize} = req.body
    let regex = eval(`/^[\\s\\S]*${name}[\\s\\S]*$/`)
    let query = {name: regex}
    let docs = await QuestionTemplate.find(query, '-__v', {
        sort: {
            updatedAt: -1 // 大于零 升序；小于零 降序
        },
        skip: (page - 1) * pageSize,
        limit: pageSize
    })
    let count = await QuestionTemplate.count(query)
    res.json(success({data: docs, total: count}))
}))

// 批量删除
router.post('/removeAll', ah(async (req, res) => {
    let {ids} = req.body
    await QuestionTemplate.deleteMany({
        _id: {
            $in: ids
        }
    })
    res.json(success())
}))

// 获取单个数据
router.post('/getById', ah(async (req, res) => {
    let {id} = req.body
    const doc = await QuestionTemplate.findById(id)
    res.json(success(doc))
}))

// 修改
router.post('/update', ah(async (req, res) => {
    let {_id, name} = req.body
    await QuestionTemplate.updateOne({_id}, {
        name,
        updatedAt: new Date()
    })
    res.json(success())
}))

// 保存题目
router.post('/saveQuestions', ah(async (req, res) => {
    let {qtId, questions} = req.body
    await QuestionTemplate.updateOne({_id: qtId}, {
        questions,
        updatedAt: new Date()
    })
    res.json(success())
}))

module.exports = router
