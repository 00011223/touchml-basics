<template>
    <div>
        <h1>选项式API</h1>
    </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    // beforeRouteEnter
    // beforeRouteUpdate
    // beforeRouteLeave

    // 进入页面前
    beforeRouteEnter(to, from, next) {
        console.log('beforeRouteEnter')
        // 此处的 this 是 undefined
        // 因为在执行此守卫时，页面组件还没有创建
        console.log(this)
        next()
    },

    // 动态路由匹配的参数发生变化时 触发此守卫
    beforeRouteUpdate(to, from) {
        console.log('beforeRouteUpdate')
        // this 存在
        console.log(this)
    },

    // 离开页面时触发
    beforeRouteLeave(to, from) {
        console.log('beforeRouteLeave')
        // this 存在
        console.log(this)
    }
})
</script>

<style scoped>

</style>
