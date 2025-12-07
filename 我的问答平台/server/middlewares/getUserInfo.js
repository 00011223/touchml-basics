// 读取用户信息的中间件
const Token = require('../models/token')
const Account = require('../models/account')

module.exports = () => {
    return async (req, res, next) => {
        // 读取cookie中的tokenId
        const tokenId = req.cookies.token
        // 用户未登录或登录失效就直接跳过
        if (tokenId === undefined) {
            // 由于登录超时 清空缓存
            req.session.userInfo = undefined
            next()
            return
        }
        // 查找token
        const token = await Token.findById(tokenId)
        // 通过token的accountId 查找账户信息
        const account = await Account.findById(token.accountId)

        // 通常登录信息可以缓存到 redis 数据库
        // 此处将内容缓存到session中
        req.session.userInfo = {
            id: account._id,
            nickname: account.nickname
        }
        next()
    }
}
