// 知识点 api过多 可查看文档 http://momentjs.cn/docs/#/get-set/
// 取值
// 赋值

const moment = require('moment')


let now = moment()

// 取值
console.log(now.year()); // 年
console.log(now.month()); // 月 月份从0开始计算
console.log(now.date()); // 日 一月中的第几天
console.log(now.day()); // 一周中的第几天 从 0 开始计算，0代表周日
console.log(now.hour()); // 时
console.log(now.minute()); // 分
console.log(now.second()); // 秒
console.log(now.millisecond()); // 毫秒
console.log(now.dayOfYear()); // 一年中的第几天
console.log(now.daysInMonth()); // 获取这个月一共有多少天
console.log(now.week()); // 获取一年中的第几周


// 赋值
// 在取值函数的基础上传入参数就可以赋值
console.log(now.year(1778));
console.log(now.week(1));

now = moment('1997-07-01 20:45', 'YYYY-MM-DD HH:mm')
console.log(now);
// 不要写负数 不能做正常运算
now.hour(-1)
console.log(now);