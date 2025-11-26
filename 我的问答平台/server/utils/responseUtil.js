// 构造请求业务成功后的返回对象
// data: 需要返回的数据
// msg: 请求成功后返回的消息
function success(data, msg) {
    return {
        success: true,
        data,
        msg: typeof msg !== 'undefined' ? msg : '操作成功'
    }
}

// 构造请求业务失败时返回的对象
// err: 异常对象
// data: 异常时传递的参数
// msg: 异常时需要显示的消息
function fail(err, msg, data) {
    return {
        success: false,
        data: typeof data !== 'undefined' ? data : null,
        msg: typeof msg !== 'undefined' ? msg : err.message
    }
}

exports.success = success
exports.fail = fail
