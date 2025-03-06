const fs = require('fs')

async function fun(){
    // 注意：函数是异步的，但是代码思路和逻辑是同步的！
    let filename = await new Promise((reslove,reject)=>{
        fs.readFile('./txt/1xxxxx.txt','utf-8',(err,data)=>{
            if(err) reject(err)
            reslove(data)
        })
    })

    let data = await new Promise((reslove,reject)=>{
        fs.readFile(`./txt/${filename}`,'utf-8',(err,data)=>{
            if(err) reject(err)
            reslove(data)
        })
    })

    fs.writeFile('./txt/3.txt',data,(err)=>{
        if(err) throw err
        console.log('写入完成！')
    })

}

fun().catch(err=>{
    console.log(err,666)
})
console.log('主线程...')
