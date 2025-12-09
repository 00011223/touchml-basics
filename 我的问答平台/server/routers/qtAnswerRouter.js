const express = require('express')
const router = express.Router()
const ah = require('express-async-handler')
const {success} = require('../utils/responseUtil.js')
const assert = require('assert')
const QtAnswers = require('../models/qtAnswers.js')
const QuestionTemplate = require('../models/questionTemplate.js')

// 查找单个卷子
router.post('/getById', ah(async (req, res) => {
    let {qtaId} = req.body
    let qta = await QtAnswers.findById(qtaId)
    res.json(success(qta))
}))

// 交卷
router.post('/submit', ah(async (req, res) => {
    let {qtaId, answers} = req.body
    // 查询卷子
    let qta = await QtAnswers.findById(qtaId)
    // 通过qtId 查询正确答案
    let qt = await QuestionTemplate.findById(qta.qtId)
    // 获取包含答案的题目
    // let {questions} = qt
    let questions = JSON.parse(JSON.stringify(qt.questions))
    // 阅卷
    // 得分
    let score = 0
    questions.forEach((q, i) => {
        // 获取答案
        let answer = answers[i]

        // 单选题
        if (q.type === 'single') {
            let r = q.right === answer
            score += r ? q.score : 0
            if (!r) {
                // 添加问题的错误标识
                q.wong = true
                q.msg = '错误'
            }
        }
        // 多选题
        else {
            // 是否全对
            let r = true
            // 只要有一道题是对的则 l 为true
            let l = false
            answer.forEach(a => {
                // 当前答案是否正确
                let z = q.rights.includes(a)
                if (r) {
                    r = z
                }
                if (!l && z) l = z
            })
            // 答案长度和选项都正确 得全分
            if (answer.length === q.rights.length && r) {
                score += q.score
            }
            // 漏选并至少正确一个 得半分
            else if (r && answer.length >= 1 && answer.length < q.rights.length) {
                score += q.score * 0.5
                // 添加问题的错误标识
                q.wong = true
                q.msg = '漏选'
            } else {
                // 多选不得分
                // 其余情况都不得分
                q.wong = true
                if (l) {
                    q.msg = '选多了'
                } else {
                    q.msg = '错误'
                }
            }
        }
    })
    // 保存卷子
    await QtAnswers.updateOne({_id: qtaId}, {
        questions,
        score,
        answers,
        done: true
    }, {timestamps: true})
    res.json(success())
}))

// 查找自己的卷子
router.post('/getMyQtAnswer', ah(async (req, res) => {
    let {name, page, pageSize} = req.body
    let regex = eval(`/^[\\s\\S]*${name}[\\s\\S]*$/`)
    let query = {name: regex, accountId: req.session.userInfo.id}
    let data = await QtAnswers.find(query, '-__v', {
        sort: {
            updatedAt: -1
        },
        skip: (page - 1) * pageSize,
        limit: pageSize
    })
    let total = await QtAnswers.count(query)
    res.json(success({data, total}))
}))

// 获取答题人列表
router.post('/getQtAnswerPeople', ah(async (req, res) => {
    let {qtId} = req.body
    let docs = await QtAnswers.find({qtId})
    docs = docs.map(doc => ({
        qtaId: doc._id,
        name: doc.name,
        nickname: doc.nickname,
        score: doc.score,
        done: doc.done
    }))
    res.json(success(docs))
}))


module.exports = router
