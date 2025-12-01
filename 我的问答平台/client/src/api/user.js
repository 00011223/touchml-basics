import request from '@/api/request'

// 登录
export function signIn({account, pwd, remember}) {
    return request.post('/user/signIn', {account, pwd, remember})
}

// 登出
export function signOut() {
    return request.post('/user/signOut')
}

// 注册
export function signUp({account, pwd, nickname, pk}) {
    return request.post('/user/signUp', {account, pwd, nickname, pk})
}

// 获取公钥
export function getPk() {
    return request.post('/user/getPk')
}

// 通过账号查询公钥
export function getPkByAccount(account) {
    return request.post('/user/getPkByAccount', {account})
}

// 获取用户的信息
export function getUserInfo() {
    return request.post('/user/getUserInfo')
}
