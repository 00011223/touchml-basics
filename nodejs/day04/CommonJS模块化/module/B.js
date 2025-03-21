/* 
    一个js文件就是一个模块！
    模块之间互不影响！

    因为在nodejs中每一个js文件其本质都是一个函数


    (function(exports,require,module,__filename,__dirname){


    })()
*/


// require()



// console.log(arguments)

let msg = '这是B模块'

module.exports.msg = msg
// console.log(module.exports === exports)