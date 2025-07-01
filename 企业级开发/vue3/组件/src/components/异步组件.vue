<template>
    <div>
        <h1>异步组件</h1>
        <MyAsyncComponent v-if="show"></MyAsyncComponent>
        <button @click="()=>{ show = !show }">显示异步组件</button>
    </div>
</template>

<script>
// 知识点：
// 什么是异步组件？
// 应用场景
// 声明异步组件


// 什么是异步组件？
// 异步组件用于异步加载，并非页面打开立即加载，只有当使用该组件时才会加载
// 应用场景
// 只要不是打开页面时立即需要加载的内容，都可以成为异步组件
// 特别常见的一个异步组件的应用场景就是配合 vue-router 实现页面懒加载
// 组件代码源自于服务器，需要通过异步组件取访问组件内容


// 定义异步组件
// 1. 引入 defineAsyncComponent
import {h, defineAsyncComponent} from "vue";


// 2. 调用 defineAsyncComponent 来创建一个组件
// 参数是一个函数，函数需要返回一个promise对象
// defineAsyncComponent 返回一个异步组件
let MyAsyncComponent = defineAsyncComponent(() => {
    // return new Promise(resolve => {
    //     // 此处可以从服务器拉去组件
    //     resolve({
    //         render() {
    //             return h('div', null, 'hello async component')
    //         }
    //     })
    // })

    // 还可以使用 import() 函数来引入本地组件，成为异步组件
    // import(): 该方法时 es 模块化的 异步导入方法，且该方法返回 promise 对象
    return import('@/components/LocalAsyncComponent.vue')
})

export default {
    components: {
        MyAsyncComponent
    },
    data() {
        return {
            show: false
        }
    }
}
</script>

<style scoped>

</style>
