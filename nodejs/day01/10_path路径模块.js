// path处理文件路径相关的模块
// path是内置模块
// 导入path模块，通过 require()
const path = require('path')

// path模块相关常用的一些方法
let p = 'd:/abc/e.txt'

// console.log(path.dirname(p))  // 该方法返回文件所在的目录路径
// console.log(path.basename(p)) // 该方法是返回文件的全程包括后缀名
// console.log(path.extname(p)) // 该方法是返回文件的后缀名，文件名忽略


// path.join()方法
// console.log(path.join('c\\','xxx','abc','day01')) // 将所接受到的字符串拼接成一个完整的文件路径
// 并且该方法会根据当前系统去指定分隔符

// ./sdfs/sdfsdf/sdfs

//  全局变量 __dirname
// console.log(__dirname)

// let p2 = path.join(__dirname,'a.txt')
// console.log(p2)


// path.rseolve()方法
console.log(path.resolve('c','/d','../abc'))
// 终端环境下 通过命令式切换路径
// cd c:   c:/ 。。。。
// cd /d   c:/d
// cd ../abc  c/abc

console.log(path.resolve(__dirname,'../','../','../../'))