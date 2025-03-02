const fs = require('fs')
const path = require('path')


/* 
    文件所在路径
    文件运行环境路径
*/
// 文件所在路径
console.log(__filename)


// 文件运行时路径
console.log(process.cwd())

let data = fs.readFileSync(path.join(__dirname,'txt','古诗.txt'),'utf-8')
console.log(data)
// 通过run code插件运行
// c:\Users\JiangJJ\Desktop\20220703-h5\nodejs\day01\13_解决路径坑.js

// c:\Users\JiangJJ\Desktop\20220703-h5


// cmd终端方式运行
// C:\Users\JiangJJ\Desktop\20220703-h5\nodejs\day01\13_解决路径坑.js
// C:\Users\JiangJJ\Desktop\20220703-h5\nodejs\day01


// 总结:
// nodejs中只有require方法是根据当前文件所在路径去寻找其他文件的
// 除了require方法以外任何填写路径时的方法，在运行时都是以文件执行环境的路径为基准去寻找其他路径

// 解决方式：只要你分不清该怎么使用路径时，一律采用绝对路径表示！