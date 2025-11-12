import $ from 'jquery'

console.log('当前模式: ')
// 访问当前模式
console.log(process.env.NODE_ENV)

let baseURL = process.env.NODE_ENV === 'development'? 'http://127.0.0.1': 'http://127.0.0.1:1024'

function createComponent() {
    return $('<div></div>')
}

let $div = createComponent()
$div.html('hello world')

$(document.body).append($div)
