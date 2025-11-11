import $ from 'jquery'
// 引入css
import './assets/main.css'
// 引入图片
import head from './assets/head.png'

function createComponent() {
    return $('<div></div>')
}

function createImage() {
    let $img = $('<img/>')
    $img.attr('src', head)
    $img.attr('width', '300')
    $img.attr('height', '300')
    return $img
}

let $div = createComponent()
$div.html('hello world')
$div.addClass('box')

$(document.body).append($div)
$(document.body).append(createImage())
