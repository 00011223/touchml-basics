/* 
    异步函数：通过关键字async所声明的函数，称为异步函数

    异步函数的作用就是为了将函数内的异步程序,变成同步的，这样更利于异步程序的书写、逻辑更清晰，

    async函数中，需要与awiat关键字搭配使用，这样才能将异步代码同步化！
    注意：
        1-异步函数本身的执行是不会阻塞主线程的！
        2-如果异步函数中，并没有相关的异步任务产生，则该异步函数就与普通函数基本一致，唯一不同的是
        异步函数的返回值与普通函数不一样！
    
    async函数的返回值，永远都会返回一个promise对象的实例，但状态会根据具体情况发生改变！
    其状态改变规则参考then方法
*/

// function fun(){
//     console.log('fun...')
// }
// fun().then(()=>{
//     console.log('ok')
// })
// console.log('主线程执行中...')



// async function fun(){
//     console.log('fun...')
// }
// fun().then(()=>{
//     console.log('ok')
// })
// console.log('主线程执行中...')


async function fun(){
    console.log('fun...')
    let x = await new Promise((reslove,reject)=>{
        setTimeout(()=>{
            reject('err')
        },1000)
    })

    console.log(x)
    let y = await new Promise((reslove)=>{
        setTimeout(()=>{
            reslove(300)
        },2000)
    })
    console.log(y)
    console.log('fun end....')
}
fun()
console.log('主线程执行中....')
/* 
    await关键字注意实现：
        1、await关键字只能在async函数中使用，否则就报错
        2、await关键字发挥作用只有当后面的表达式为 Promise实例对象时，或者thenable对象（定义了then方法的对象）
        才会有效，否则无效（这个不是真的无效！）
        3、一个async函数中允许存在多个await关键字
        4、如果async关键字后的任何一个promise对象状态为失败或者异常。都会立即结束async函数，后续的代码将不再执行！
        5、async函数中遇到return语句也会立即结束函数的执行！
*/