// 导出

// 使用export导出
// 1. 导出的同时要声明导出的内容
export function fn() {
    console.log('this is fn');
}
export let x = 'this is x'
// 2. 导出一个类似对象的内容，里面包含要导出的变量名，用逗号分隔
let y = false
function z() {
    return 'this is z'
}
// export 后面的内容是一个导出列表并不是一个对象
export { y, z }

// 默认导出的值
// 对应的是默认导入的语法
export default {
    a: 1,
    b: true,
    c: 'hello'
}