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

/* 
    总结：
    Promise构造函数总结：
        1、Promise()构造函数必须传入一个函数！否则会报错
        2、该函数在实例创建前会执行！该函数中大多数情况都是用于解决异步任务的
        3、该函数接受两个形参，resolve,reject,这两个形参用于接收promis实例对象通过then方法指定的回调函数
        4、异步任务的结果可以通过resolve,reject进行传递！
        5、resolve,reject只能选择其一执行！两者不能同时执行！


*/

// 注意：创建promise实例传入的函数，应该是处理异步任务的
p.then((data)=>{
    console.log('文件读取成功')
    console.log(data)
    console.log(p)
},(err)=>{
    console.log('文件读取失败')
    console.log(err)
})

/* 
    promise实例对象的then方法总结：
        1、then方法可以接受传入两个实参 then(成功回调,失败回调),这两个回调二者选其一执行！
        2、通常在书写中只会传递成功回调,失败回调基本是忽略的！
        3、then方法的返回值由其回调函数决定,不管是成功回调还是失败回调！都具备返回值并且该返回值默认情况下
            是一个全新的成功状态的promise实例

            then方法中回调函数的返回值情况讨论：
            -返回值情况一：
                省略return 则对下个then方法的成功回调传入 undfined
            -返回值情况二：
                不省略return 并且return类型是除Promise以为的合法的js数据类型，则该数据
                将作为下一个then方法的成功回调传入的值
            -返回值情况三：
                不省略return 并且返回的是一个promise对象，则将该promise对象返回并且该promise对象是未完成状态


*/

console.log('主线程执行中...')