/* 



db.getCollection("user_info").find({})
// 对文档的查询结果进行一些处理
// limit skip sort

// limit 控制查询结果的返回条数
db.user_info.find({}).limit(2)


// skip 指定跳过文档的数量
db.user_info.find({}).skip(1)


// sort 排序 对指定的属性进行排序后展示，1升序 -1降序
db.user_info.find({}).sort({xxx:-1})
*/