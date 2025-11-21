const CryptoJS = require('crypto-js')

// 使用 MD5 加密
let result = CryptoJS.MD5('hello world')

// toString 得到一个 32 位长的密文
console.log(result.toString());
