/* 
    如果只是创建了一个promise实例对象，但是没有后续的操作改变，该对象的状态，以及确定状态后
    所执行的内容，那么该promise对象就毫无意义

    通过then方法对promise实例对象指定，成功的回调，以及失败的回调，这样的promose才有其价值

*/

const fs = require("fs");

const p = new Promise((resolve,reject)=>{
    fs.readFile('./txt/古诗xxx.txt','utf-8',(err,data)=>{
        if(err) reject(err)
        resolve(data)
    })
})

// 注意：创建promise实例传入的函数，应该是处理异步任务的
p.then((data)=>{
    console.log('文件读取成功')
    console.log(data)
},(err)=>{
    console.log('文件读取失败')
    console.log(err)
    
})
console.log('主线程执行中...')