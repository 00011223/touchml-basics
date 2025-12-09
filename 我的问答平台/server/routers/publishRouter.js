const express = require('express')
const router = express.Router()
// 用于捕获异步异常的处理器
const ah = require('express-async-handler')
const {success} = require('../utils/responseUtil.js')
const assert = require('assert')
const QuestionTemplate = require('../models/questionTemplate.js')
const PublishQuestion = require('../models/publishQuestions.js')
const QtAnswers = require('../models/qtAnswers.js')

// 发布
router.post('/publish', ah(async (req, res) => {
    let {qtId} = req.body
    // 查找问卷模板
    const qt = await QuestionTemplate.findById(qtId)
    // 判断当前发布人和出题人是否是同一人 只允许发布自己的内容
    assert.ok(req.session.userInfo.id === qt.accountId, '发布者不是出题人')
    // 当前问卷是否已经发布
    const exists = await PublishQuestion.exists({qtId: qt._id})
    assert.ok(exists === null, '问卷已存在')
    // 发布问卷
    const pq = new PublishQuestion({
        qtId: qt._id,
        name: qt.name,
        accountId: req.session.userInfo.id,
        nickname: req.session.userInfo.nickname,
        accountIdAndQtId: `${req.session.userInfo.id}${qtId}`
    })
    await pq.save()
    res.json(success({id: pq._id}))
}))

// 已发布列表
router.post('/list', ah(async (req, res) => {
    const data = await PublishQuestion.find({accountId: req.session.userInfo.id})
    res.json(success(data))
}))

// 关闭题目
router.post('/close', ah(async (req, res) => {
    let {pqId} = req.body
    // 查询对应 pqId 的发布数据
    let doc = await PublishQuestion.findById(pqId)
    assert.ok(doc, '要关闭的题目不存在')
    // 当前操作的用户是否是发布者本人
    assert.ok(req.session.userInfo.id === doc.accountId, '不能关闭别人的题目')
    // 关闭题目
    await PublishQuestion.deleteOne({_id: pqId})
    res.json(success())
}))

// 领卷子
router.post('/getQtAnswer', ah(async (req, res) => {
    let {qtId} = req.body
    // 查询问卷模板
    let qt = await QuestionTemplate.findById(qtId)
    // 复印卷子
    // 复制问题时应该将问题中的答案去掉
    let questions = qt.questions.map(q => {
        delete q.right
        delete q.rights
        return q
    })
    const qta = new QtAnswers({
        name: qt.name,
        qtId,
        creatorId: qt.accountId,
        accountId: req.session.userInfo.id,
        nickname: req.session.userInfo.nickname,
        questions,
        qtIdAndAccountId: `${qtId}${req.session.userInfo.id}`
    })
    await qta.save()
    // 返回复印后的卷子id
    res.json(success(qta._id))
}))

module.exports = router
