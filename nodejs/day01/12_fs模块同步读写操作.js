// 文件模块fs 
// 通过该模块可以进行文件的读、写操作
const fs = require('fs')


// 文件读取的同步操作
// readFileSync(path,encode)
// path 文件的路径
// 字符编码 可以省略,如果省略文件读取后的格式是buffer格式的二进制数据！
const data = fs.readFileSync('./txt/古诗.txt','utf-8')
console.log(data)

// 转换buffer数据 toSting()
console.log(data.toString())// utf-8格式


// 文件写入的同步操作
// writeFileSync(path,data)
fs.writeFileSync('./txt/古诗02.txt','好诗！很有意境！')
console.log('文件写入成功！')


// 路径坑问题



