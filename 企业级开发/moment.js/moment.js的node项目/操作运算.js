// 知识点
// startOf
// endOf
// 加法
// 减法
// 完整单位名       单位名缩写
// years	        y 年
// quarters	        Q 季度
// months	        M 月
// weeks	        w 周
// days	            d 天
// hours	        h 小时
// minutes	        m 分钟
// seconds	        s 秒
// milliseconds	    ms 毫秒

const moment = require('moment')

let now = moment()

// startOf 获取某个指定单位起始时间对象
// console.log(now.startOf('years'));
// console.log(now.startOf('weeks'));

// endOf 获取某个指定单位结束时间对象
// console.log(now.endOf('days'));

// add 加法
// 语法 moment.add(count, unit)
// count: 数量
// unit: 单位
// now.add(2, 'years')
// 可以写负数
// now.add(-1, 'months')


// subtract 减法 用法和加法一样
// now.subtract(2, 'd')
now.subtract(-3, 'minutes')


console.log(now);