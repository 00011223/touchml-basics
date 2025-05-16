
// 可以使用 exports 对象导出内容

exports.x = 9
exports.y = function () {
    console.log('this is y');
}
exports.z = false

// 默认情况 exports 是一个对象
// exports 是 module.exports 的引用 两者完全相同
console.log(exports === module.exports)