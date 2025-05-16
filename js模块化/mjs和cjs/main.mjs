import m1 from './m1.mjs'
// 在 .mjs 文件中可以引入 .cjs 文件
// 并且 .cjs 文件被当作 export default 的内容引入
import m2 from './m2.cjs'

console.log(m1);
console.log(m2);