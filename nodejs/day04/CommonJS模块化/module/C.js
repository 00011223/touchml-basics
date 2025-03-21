/* 

    exports和module.exports两者的区别：
        exports只是module.exports的一个引用！
        注意：模块在导出数据时看的是module.exports引用所指向的数据！





*/




// 情况一
// exports.xxx = 'xxx'
// module.exports.yyy = 'yyy'


// 情况二：
// exports.xxx = 'xxx'
// module.exports = 'yyy'


// 情况三：
// module.exports = 'yyy'
// exports.xxx = 'xxx'

let msg = 'C模块'


function sayHello(){
    console.log('hello')
}
// 情况四：
module.exports = {
    msg,
    sayHello
}


// 情况五：
module.exports = {
    msg,
    sayHello
}

module.exports = {
    xxx:'xxx'
}
