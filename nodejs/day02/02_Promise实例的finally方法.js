/* 
    Promise实例的finally方法，该方法无论在什么情况都会被执行！
*/


const p = new Promise((reslove,reject)=>{
    setTimeout(()=>{
        // reslove('ok')
        reject('err')
    },1000)
})

p.then(data=>{
    console.log(data)
},err=>{
    console.log(err)
})
.finally(()=>{
    console.log('不管怎样我都执行了！')
})