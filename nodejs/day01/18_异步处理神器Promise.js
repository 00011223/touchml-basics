/* 
    Promise(承诺)
    Promise这个对象是ES6中为了解决回调地狱，也为了更好的处理异步问题，使得代码整体看起来像同步代码
    而引入的一种新的对象！ Promise对象

    Promise(承诺):正向其表达的意愿一样，承诺会在执行完promise自己的内容后，再触发接下来的方法！


    Promise对象会存在三种状态：未完成(pending)、成功(resolved)、失败(rejected)
    注意promise在未确定成功还是失败前其状态都是未完成状态！pending

    注意：promise的状态一旦确定后，就无法被任何手段改变！






*/

const { rejects } = require('assert')
const  fs = require('fs')
const { resolve } = require('path')

// // 创建一个Promise实例对象,通过构造函数
// const p = new Promise((resolve,reject)=>{

//     // ....执行什么什么操作 异步操作
//     if(/*异步操作成功*/){
//         resolve() //一旦调用该函数那么promise实例对象的状态就更改为成功（resolve）
//     }else {
//         reject()//一旦调用该函数那么promise实例对象的状态就更改为成功（reject）
//     }
// })


// const p = new Promise((resolve,reject)=>{
//     console.log('xxxx')
//     if(true){
//         resolve()
//     }else{
//         reject()
//     }
// })


