// 知识点
// toDate 获取日期对象
// format 格式化
// fromNow
// 常用模板占位符如下：
// YYYY: 占4位长度的年份
// MM: 占2位长度的月份
// DD: 占2位长度的日
// HH: 占2位长度的 24小时计时法的小时
// hh: 占2位长度的 12小时计时法的小时
// a: 如果用12小时计时法，a就是代表上下午
// mm: 占2位长度的分钟
// ss: 占2位长度的秒钟
// x: 小写x 代表格林威治毫秒时
// X: 大写X 代表格林威治秒时

const moment = require('moment')
moment.locale('zh-cn')
const now = moment()



// 转换 moment 为 日期对象 Date
const date = now.toDate()
console.log(date);

// format
// 语法 moment.format(pattern)
// moment: moment 对象
// pattern: 一个用于格式化的字符串模板
// 返回一个格式化好的字符串
console.log(now.format('MM/DD/YYYY hh:mm:ss a'));

// fromNow 判断一个时间距离现在过去了多久
// 返回一个描述性的字符串
console.log(now.fromNow());
now.minute(28)
console.log(now.fromNow());
now.month(9)
console.log(now.fromNow());