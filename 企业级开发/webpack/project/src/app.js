import $ from 'jquery'

function createComponent() {
    return $('<div></div>')
}

let $div = createComponent()
$div.html('other one')

$(document.body).append($div)
