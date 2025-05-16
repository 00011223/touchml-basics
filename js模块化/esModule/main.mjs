// 导入

// 1. 导入 m1.js 文件中 默认导出的内容
// import m1 from './m1.mjs'

// 2. 导入 m1.js 中 export 导出的内容
// import { x, y, z, fn } from './m1.mjs'

// 3. 同时导入 export default 和 export 的内容
// import m1, { x, y, z, fn } from './m1.mjs'

// 4. 使用 通配符 * 导入模块的所有内容
// as 就是 “当作” 的意思
// 下面的引入语句相当于: 将模块 m1.mjs 当作 m1 变量导入
// import * as m1 from './m1.mjs'

// 5. 若已有一个变量和模块中的内容同名
// 那么导入的时候需要添加别名
import { fn as m1Fn } from './m1.mjs'

let fn = 'this is my fn string'

// console.log(m1);
// console.log(x);
// console.log(y);
// console.log(z());
// fn()

console.log(fn);
m1Fn()
