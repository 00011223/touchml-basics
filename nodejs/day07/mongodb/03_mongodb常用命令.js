/* 

   mongodb中文文档手册：https://www.mongodb.org.cn/manual/

  对数据库进行操作：本质上对数据的操作主要就是增删查改(CRUD)

    //注释语句 不会被执行
db.user_info.find({})
//查看当前电脑中所有的数据库列表
show dbs

// 数据库 ：存储创建好的集合，集合容器，
// 集合： 集合，等价于mysql中表
// 文档： 文档，一条实际存储的BSON格式的数据，一个文档就等价于mysql表中的一行记录

// 创建一个数据库 
// use 数据库名
use web0703

// 创建一个集合
db.createCollection('user_info')

// 创建文档，向user_info集合中插入一条文档
// insertOne()只能向集合中插入一条文档
db.user_info.insertOne({
    name:'唐僧',
    age:56,
    address:'河南洛阳',
    title:'团队领导者'
})

// 查看user_info集合中所以的文档信息
db.user_info.find({})

// 批量插入多条文档
db.user_info.insertMany([
    {
    name:'悟空',
    age:48000,
    address:'花果山',
    title:'kpi贡献者' 
    },
    {
    name:'悟能',
    age:38000,
    address:'高老庄',
    title:'团队混子' 
    },
    {
    name:'悟净',
    age:18000,
    address:'流沙河',
    title:'行李管理师' 
    }
])


//选择性插入一条或多条文档
//该方法更灵活些
db.user_info.insert([{
    a:100
},
{
   b:200
},
{
    c:300
}
])


//注意：数据库的删除操作是敏感操作！很多时候在实际的开发中，不会真的去删除数据！
// 删除单个文档，需要传入过滤器（设置删除的条件）过滤器就等价于sql语句中 where语句
//deletOne方法会删除第一个匹配成功的文档数据
db.user_info.deleteOne({a:100})

//删除多个文档，需要传入过滤器,只有符合条件的都会被删除
db.user_info.deleteMany({b:200})

//删除全部文档内容，慎用，慎用！
db.user_info.deleteMany({})

//更新匹配成功的第一个文档，$set进行设置属性值
//更新文档中已存在的属性
db.user_info.updateOne({name:'唐僧'},{
    $set:{
        age:100
    }
})

//更新文档中不存在的属性
//如果需要修改的属性不存在，则先在文档中创建该属性！然后设置对应的值！
db.user_info.updateOne({name:'唐僧'},{
    $set:{
        xxx:100
    }
})


//同时更新匹配成功的多个文档
db.user_info.updateMany({
    age:{
        $exists:true
    }
},{
    $set:{
        age:200
    }
})


//灵活的更新，一个或多个文档
//默认是更新匹配成功的第一个文档
db.user_info.update({},{
    $set:{
        age:300
    }
})

//如果想要更新多个文档，需要设置update的参数，
db.user_info.update({},{
    $set:{
        age:300
    }
},false,true)


// save()
// save()插入、更新文档的意思
//没有指定_id属性值，就向当前集合插入一条新的数据，类似于insertOne
db.user_info.save({
    name:'白龙马',
    age:4000,
    address:'龙宫',
    title:'骑行工具'
})


//如果指定了明确的 _id值,并且 _id值已经存在！
//将全新的数据，完全替换原有的数据
db.user_info.save(
{
    "_id":ObjectId("6346373807eb1b6520549f0d"),
    xxx:100
}
)














*/