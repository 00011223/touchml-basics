<template>
    <div>
        <AttrChild id="my-child" style="background-color: #f00;"></AttrChild>
    </div>
</template>

<script>
// 知识点：
// 什么是html属性继承？
// 应用场景
// 默认继承
// 指定节点继承
// this.$attrs
// $attrs 和 $props 的区别

// 什么是html属性继承？
// 给组件添加html的属性例如 id class style 等等，那么这些属性会被继承到组件内的元素上


// 应用场景
// 给组件添加一些html属性时可以使用


// 默认继承
// 默认情况 vue 会将组件的html属性继承到组件的根节点


// $attrs 和 $props 的区别
// $attrs 是 html 属性
// $props 是 组件的属性，用于接收父组件参数用的

import AttrChild from './AttrChild.vue'

export default {
    components: {
        AttrChild
    }
}
</script>

<style scoped>

</style>
