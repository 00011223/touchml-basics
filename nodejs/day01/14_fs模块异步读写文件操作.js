const fs = require('fs')


// 异步操作最大的特点是无需等待！异步操作不会阻塞线程
// 异步文件读取操作
// readFile(path,encode,callback)
fs.readFile('./txt/古诗.txt','utf-8',(err,data)=>{
    if(err){
        throw err
    }
    console.log(data)
})

console.log('主线程继续执行中1...')


// 异步文件的写入操作
// writeFile(path,data,callback)
fs.writeFile('txt/a.txt','这是通过异步操作写入的内容',err=>{
    if(err) throw err
    console.log('文件写入成功！')
})
console.log('主线程继续执行中2...')