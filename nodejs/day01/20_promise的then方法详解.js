
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

const fs  =  require('fs')

const p = new Promise((resolve,reject)=>{
    fs.readFile('./txt/古诗.txt','utf-8',(err,data)=>{
        if(err) reject(err)
        resolve(data)
    })
})

p.then(data=>{
    console.log(data) //南朝四百八十寺，多少楼台烟雨中！
    return new Promise((resolve,reject)=>{
        fs.readFile('./txt/古诗xxx.txt','utf-8',(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}).then(newdata =>{
    console.log(newdata,777)
},err=>{
    console.log(err,666)
})
.then()
.then()
.then()



// 注意：以上的通过then方法的特性我们就可以实现promise的链式调用