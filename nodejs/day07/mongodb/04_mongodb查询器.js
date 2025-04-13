/* 
    use web0703

// 查询器：类似于mysql数据库中的where语句，主要是通过查询器去设置匹配条件
// 在mongodb中查询器是一个对象形式

// 查询器运算符：通过运算符，可以设置更灵活查询器！
// mongodb中运算符语法格式：  $运算属性

// 比较运算符： >  <  >=  <=  !=  == 

// 在mongodb中无法直接去写比较运算的符合，必须通过特有运算属性来设置！
use web0703
// $eq : 相等、等于
// 查询唐僧的个人信息  name == '唐僧'、
// 等于的写法一：
db.user_info.find({
    name:{
        $eq:'唐僧'
    }
})

// 等于的写法二：
db.user_info.find({name:'唐僧'})



// $ne: 匹配不相等的记录  !=
// 查询除唐僧以外的个人信息  name != '唐僧'
db.user_info.find({
    name:{
        $ne:'唐僧'
    }
})


//$gt $gte 匹配大于、大于等于的文档记录
//查询age大于200的文档记录
db.user_info.find({
    age:{
        $gt:200
    }
})

//查询age大于等于200的文档记录
db.user_info.find({
    age:{
        $gte:100
    }
})


//$lt  $lte 匹配小于、小于等于的记录
db.user_info.find({
    age:{
        $lt:200
    }
})

db.user_info.find({
    age:{
        $lte:300
    }
})

// $in  匹配在指定范围中的记录
// 查询address的值在 ['流沙河','高老庄']
db.user_info.find({
    address:{
        $in:['流沙河','高老庄']
    }
})

// $nin  匹配不在指定范围中的记录
db.user_info.find({
    address:{
        $nin:['流沙河','高老庄']
    }
})

// 逻辑运算： and 、 or
// $and 、 $or
// 查询name='唐僧' and  age == 300
db.user_info.find({
    $and:[
        {
            age:{
                $eq:300
            }
        },
        {
            name:'唐僧'
        }
    ]
})

// and的简写方式
db.user_info.find({name:'唐僧',age:300})




// $or   查询name='唐僧' or  age == 300
db.user_info.find({
    $or:[
        {
            age:{
                $eq:300
            }
        },
        {
            name:'唐僧'
        }
    ]
})









*/