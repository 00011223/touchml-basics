// 事件模块，该模块是nodejs中核心模块
// 很多内置的其他模块都是，继承于该模块中的事件类


const events = require('events')

// // 事件发射器实列
const emitter = new events.EventEmitter()

// // 给该实例绑定事件 事件名称、事件的回调函数
// emitter.addListener('xxx',()=>{
//     console.log('xxx事件执行了')
// })

// // 通过on方法绑定事件
// emitter.on('say',()=>{
//     console.log('say...')
// })


// // once 方法为指定对象绑定一次性事件！
// // 当该事件被触发后，自动解绑对应的事件
// emitter.once('yyy',()=>{
//     console.log('yyy...')
// })



// // 实例对象，主动触发
// setTimeout(()=>{
//     // xxx事件触发代码
//     emitter.emit('xxx')

//     // say事件触发
//     emitter.emit('say')


//     // yyy事件触发
//     emitter.emit('yyy')
// },1000)


// setTimeout(()=>{
//         // xxx事件触发代码
//         emitter.emit('xxx')

//         // say事件触发
//         emitter.emit('say')
    
    
//         // yyy事件触发
//         emitter.emit('yyy')
// },2000)



//  需求  
// 1、实例化花括号对象
// 2、我想为他绑定一个事件，say事件！
// 3、定时器1秒后触发该事件！

// Object.prototype = events.EventEmitter.prototype
// Object.prototype = {xx:'xxx'}
// console.log(Object.prototype)
// console.log(events.EventEmitter.prototype)

function Peron(){

}

Peron.prototype = events.EventEmitter.prototype

console.log(Peron.prototype ===  events.EventEmitter.prototype )


let P1 = new Peron()

P1.on('xxx',()=>{
    console.log('xxx')
})


setTimeout(()=>{
    P1.emit('xxx')
},1000)






// 有一个A类有一个方法  say方法
// 只要通过A类实例化的对象都具备该方法

// class A {
//     constructor(){

//     }

//     say(){
//         console.log('say...')
//     }
// }

// let a = new A()
// a.say()

// // 有一个B类,我想要通过B类实例化的对象都具备say方法

// class B extends A {

// }

// let b = new B()
// b.say()