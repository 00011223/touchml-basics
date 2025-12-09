import request from './request'

// 发布
export function publish(qtId) {
    return request.post('/publish/publish', {qtId})
}

// 查询发布列表
export function list() {
    return request.post('/publish/list')
}

// 关闭题目
export function close(pqId) {
    return request.post('/publish/close', {pqId})
}

// 领卷子
export function getQtAnswer(qtId) {
    return request.post('/publish/getQtAnswer', {qtId})
}
