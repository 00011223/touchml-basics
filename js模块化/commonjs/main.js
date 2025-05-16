// 导入

// 导入函数 require 支持的路径格式有以下几种
// 1. ./ 开头的相对路径且携带文件后缀名 引入指定文件
const m2 = require('./m2.js')
// 2. ./ 开头的相对路径且不加后缀名 引入指定文件
const m1 = require('./m1')
// 3. 直接写入模块名且没有后缀名 引入一个 node_modules 文件夹下的模块
const express = require('express')
// 4. ./ 开头的相对路径且不加后缀名，该路径是一个文件夹 引入该文件夹下的 index.js 文件
const m3 = require('./m3')

// 5. 导入的同时取别名，解决命名冲突的问题
const {a: m1A} = require('./m1.js')

let a = 'this is a'

// console.log(m1);
// console.log(m2);
// console.log(m3);

console.log(a);
console.log(m1A);