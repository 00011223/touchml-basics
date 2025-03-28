/* 
    异步程序确实带来了程序运行效率的提升，但是本身异步问题是需要解决的，
    js最开始也是围绕着这个异步问题来设计

    但是在实际的开发中，使用回调函数解决异步任务有有对应的问题出现

    这个问题就是---- 回调地狱

    回调地狱：在处理一个异步任务的操作中，又出现了异步任务，依此迭代！最终就产生了回调地狱！

    回调地狱的情况产生对编程来说是不友好的、不方便程序员对程序进行阅读、整理的代码逻辑是混乱的！
    并且代码书写会呈现 '>' 形状！




*/

// 目前已知的文件只有 1.txt 的路径

// 需求：
// 1、通过读取1.txt文件的内容拿到2.txt文件的路径
// 2、通过2.txt文件的路径，读取该文件中的古诗内容
// 3、将古诗内容写入到3.txt中


// 同步操作来完成以上需求
const fs = require('fs')

// let filename = fs.readFileSync('./txt/1.txt','utf-8')
// let data = fs.readFileSync(`./txt/${filename}`,'utf-8')
// fs.writeFileSync('./txt/3.txt',data)
// console.log('任务完成！')



// 异步操作来完成以上需求
fs.readFile('./txt/1.txt','utf-8',(err,data)=>{
    if(err) throw err
    console.log(data) //2.txt
    fs.readFile(`./txt/${data}`,'utf-8',(err,data)=>{
        if(err) throw err
        console.log(data)//南朝四百八十寺，多少楼台烟雨中！
        fs.writeFile('./txt/3.txt',data,err=>{
            if(err) throw err
            console.log('任务完成！')
        })
    })
    
})
