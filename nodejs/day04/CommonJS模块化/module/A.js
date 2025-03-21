let msg = '我是A模块中的msg'

function sayHello(){
    console.log('hello!main.js')
}



/* 
    首先如果你要让其他的js文件能够使用该模块中的一些变量或者方法或者其他的数据等

    应该先将其导出！这样其他文件才能正常的引入并且使用

    如何导出：
        - exports 
        - module.exports 

*/


exports.msg = msg

exports.sayHello = sayHello

// console.log(exports)
