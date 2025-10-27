const moment = require('moment') // 引入
// 设置中文
moment.locale('zh-cn')

let now = moment() // 创建 moment 对象
console.log(now);

console.log(now.format('YYYY/MM/DD a h:m:s'));