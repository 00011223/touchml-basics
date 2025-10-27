// 知识点
// 获取系统当前时间
// 通过字符串解析时间 https://momentjs.com/docs/#/parsing/string-format/
// 通过格林威治1970毫秒数字获取时间
// 通过Date对象获取时间

const moment = require('moment')


// 获取系统当前时间
let now = moment()
console.log(now);

// 通过字符串解析时间
let str = '1997-07-01'
// 字符串作为参数，可以解析字符串为时间
let date = moment(str)
console.log(date);
// 注意: 不建议直接使用一个时间字符串，因为格式无法控制
// 所以，moment 接收一个叫做 pattern 的字符串模板 作为参数
date = moment(str, 'YYYY-MM-DD')
console.log(date);
// 自定义时间字符串
str = '6:15:24 pm 1997/01/07'
date = moment(str, 'h:m:s a YYYY/DD/MM')
console.log(date);

// 通过格林威治1970毫秒数字获取时间
date = moment(1667441758823)
console.log(date);

// 通过Date对象获取时间
date = moment(new Date())
console.log(date);
