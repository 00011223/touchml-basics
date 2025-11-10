import $ from 'jquery'

function createComponent() {
    return $('<div></div>')
}

let $div = createComponent()
$div.html('hello world')

$(document.body).append($div)
