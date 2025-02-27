/* 
    global是nodejs环境下的全局对象，在该对象上保存着很大我们所需要的全家属性和全局方法

    浏览器中全局对象是 window,但是在nodejs中没有window

    几个特殊的全局变量（假全局变量）：
        require()方法，引入模块
        __filename 当前执行文件的文件路径
        __dirname 当前执行文件所在的目录路径



        console 控制台对象

    



*/

// console.log(window) // err
// console.log(global)
console.log(setTimeout === global.setTimeout) // true

// 添加全局属性
// 浏览器中
// window.xx = 'xxx'

// 1-直接给global添加属性
// global.xx = 'xxx'
// console.log(xx)

// 2-给为定义的变量进行赋值，该变量也会挂载到global对象身上
// yy = '666'
// console.log(yy,global.yy)
// console.log(global === globalThis)


console.log(__dirname)
console.log(__filename)

console.log(globalThis.__dirname)//undifined
