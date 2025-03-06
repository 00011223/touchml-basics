/* 
    promise实例对象在使用then方法时，传入回调函数的问题

    p.then(成功回调,失败回调)
    但是大多数时候我们会省略失败回调的传入！
    因为如果为每一个promise实例对象都指定一个错误回调的解决函数，那么整体的代码不便于阅读，导致整体逻辑可能混乱
    因此大多数时候都会忽略失败回调的传入，但是异常的问题我们应该也要解决，那么就引入了一个方法catch方法,
    通过该方法统一的去处理链式调用中产生的异常或者实例对象失败状态


*/

const fs = require('fs')
const p = new Promise((resolve,reject)=>{
    fs.readFile('../day01/txt/古诗.txt','utf-8',(err,data)=>{
        if(err) reject(err)
        resolve(data)
    })
})

p.then(data=>{
    console.log(data) //南朝四百八十寺，多少楼台烟雨中！
})
.then(()=>{
    throw new Error('then错误')
    // console.log('成功')
})
.catch(err=>{
    console.log(err,6666)
})



// p.then(data=>{
//     console.log(data)
//     /* 
//         XXXXX
//         XXXX
//         XXXX
//     */
// },err=>{
//     console.log(err)
// })
// .then(data=>{
    
// },err=>{

// })
// .then(data=>{

// },err=>{

// })

