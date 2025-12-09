import request from './request'

// 查单个卷子
export function getById(qtaId) {
    return request.post('/qta/getById', {qtaId})
}

// 交卷
export function submit({qtaId, answers}) {
    return request.post('/qta/submit', {qtaId, answers})
}

// 获取我的卷子
export function getMyQtAnswer({name, page, pageSize}) {
    return request.post('/qta/getMyQtAnswer', {name, page, pageSize})
}

// 获取答题人列表
export function getQtAnswerPeople(qtId) {
    return request.post('/qta/getQtAnswerPeople', {qtId})
}
