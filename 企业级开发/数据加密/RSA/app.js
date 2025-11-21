const express = require('express')
// 引入算法模块
const NodeRSA = require('node-rsa')
const path = require('path')
const app = express()

const key = new NodeRSA({ b: 512 })
key.generateKeyPair(2048, 65537)
// 导出公钥
const pk = key.exportKey('pkcs1-public')

app.use('/', express.static(path.join(__dirname, 'public')))

// 解析post请求参数
app.use(express.json())

// 测试加密解密
app.get('/test', (req, res) => {

    // 创建rsa算法对象
    let key = new NodeRSA({ b: 512 })
    // 调用方法创建一对公钥和密钥
    key.generateKeyPair(2048, 65537)
    // 导出公钥和私钥
    // 公钥
    let pk = key.exportKey('pkcs1-public')
    let sk = key.exportKey('pkcs1-private')

    // 加密
    let r = key.encrypt('我爱中国')
    console.log(r);
    console.log(r.toString());

    // 导入密钥

    // 为了演示导入密钥 重新创建一个key对象
    key = new NodeRSA({ b: 512 })
    // 导入sk
    key.importKey(sk, 'pkcs1-private')
    // 解密
    r = key.decrypt(r)
    console.log(r.toString());


    res.json({ msg: 'ok', pk, sk })
})

// 获取公钥的接口
app.get('/getPk', (req, res) => {
    res.json({ pk })
})

// 解密接口
app.post('/decrypt', (req, res) => {
    let { r } = req.body
    // 解密
    r = key.decrypt(Buffer.from(r.data))
    res.json({ msg: r.toString() })
})

app.listen(80, () => {
    console.log('http://127.0.0.1');
})