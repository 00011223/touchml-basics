// 知识点
// isBefore 判断是否是指定时间之前的时间
// isAfter 判断是否是指定时间之后的时间
// isSame 判断是否和指定时间相同

const moment = require('moment')

let time = Date.now()

let now = moment(time)

let other = moment('1997-07-01', 'YYYY-MM-DD')

let other2 = moment(time)

// isBefore 判断是否是指定时间之前的时间
console.log(now.isBefore(other));
console.log(other.isBefore(now));


// isAfter 判断是否是指定时间之后的时间
console.log(now.isAfter(other));
console.log(other.isAfter(now));

// isSame 判断是否和指定时间相同
console.log(now.isSame(other2));

// 判断是否是同一个单位所指的时间
other2 = moment('2022-11-03 0:50:13', 'YYYY-MM-DD H:m:s')
// 例如: 判断是否是同一天
console.log(now.isSame(other2, 'days'));