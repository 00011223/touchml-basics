<script setup>

import {useStore, mapState} from 'vuex'
import {computed} from 'vue'

// 创建 store 对象
// 此对象和选项式API 中的 this.$store 用法相同
const store = useStore()

// const nickname = computed({
//     get() {
//         return store.state.nickname
//     },
//     set(value) {
//         store.dispatch('aNickname', value)
//     }
// })

// 由于组合式API中没有this关键字，不存在组件实例，所以无法使用 mapState 等辅助函数
const {nickname} = mapState(['nickname'])
console.log(nickname)
</script>

<template>
    <div>
        <!--        <div>nickname: {{ store.state.nickname }}</div>-->
        <div>nickname: {{ nickname }}</div>
        <!--        <input type="text" v-model="nickname">-->
    </div>
</template>

<style scoped>

</style>
