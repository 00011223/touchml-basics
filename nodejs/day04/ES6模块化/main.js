// 通过import语句引入模块


// 情况一：导入exprot相关的数据
// import {msg,sayHello} from './module/A.js'

// console.log(msg,sayHello)
// sayHello()


// 情况二：导入内置模块
// import http from 'http'
// console.log(http)

// 情况三：导入export相关的数据，但是指定变量该文件中已经存在同名的变量了
// let msg = 'xxxx'
// import {msg as mymsg ,sayHello} from './module/A.js'
// console.log(mymsg)


// 情况四：导入export defalut 语句的数据
import xxx from './module/A.js'
// import {msg} from './module/A.js'
// console.log(xxx,msg)


// 情况五：全部导入
import * as module_A from './module/A.js'
console.log(module_A)

