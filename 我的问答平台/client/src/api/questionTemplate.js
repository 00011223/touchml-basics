import request from './request'

// 添加问卷
export function add({name}) {
    return request.post('/qtr/add', {name})
}

// 分页查询
export function page({name, page, pageSize}) {
    return request.post('/qtr/page', {name, page, pageSize})
}

// 批量删除
export function removeAll(ids) {
    return request.post('/qtr/removeAll', {ids})
}

// 查询单个数据
export function getById(id) {
    return request.post('/qtr/getById', {id})
}

// 更新数据
export function update({_id, name}) {
    return request.post('/qtr/update', {_id, name})
}

// 保存题目
export function saveQuestions({qtId, questions}) {
    return request.post('/qtr/saveQuestions', {qtId, questions})
}
