import $ from 'jquery'
// 使用 @ 别名代表 src 目录
import m1 from '@/m1'

console.log(m1.name)

function createComponent() {
    return $('<div></div>')
}

let $div = createComponent()
$div.html('hello world')

$(document.body).append($div)
