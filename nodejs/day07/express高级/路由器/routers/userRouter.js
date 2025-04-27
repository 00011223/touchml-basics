const express = require('express')
const router = express.Router()
// 一个router实例对象,就类似于 mini app

router.get('/add',(req,res)=>{
    res.send('用户添加服务')
})
router.get('/delete',(req,res)=>{
    res.send('用户删除服务')
})
router.get('/update',(req,res)=>{
    res.send('用户更新服务')
})
router.get('/find',(req,res)=>{
    res.send('用户查询服务')
})

module.exports = router
