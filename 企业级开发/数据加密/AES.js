const CryptoJS = require('crypto-js')

// 待加密的消息
let msg = '待加密的消息'
// key 加密的密钥 只有用相同的密钥才能解密
let key = '这是一把钥匙用于解密'

// 加密
let result = CryptoJS.AES.encrypt(msg, key)
// 通过toString打印密文
result = result.toString()
console.log(result);

// 解密
result = CryptoJS.AES.decrypt(result, key)
// 解密结果在输出成字符串时需要指定编码格式对应的编码器
console.log(result.toString(CryptoJS.enc.Utf8));