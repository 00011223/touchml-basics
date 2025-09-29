<template>
    <div>
        <h1>Module</h1>
        <div>name: {{ $store.state.name }}</div>
        <div>sex: {{ $store.state.sex }}</div>
        <!-- state 中使用模块的名称访问模块里的状态 -->
        <div>age: {{ $store.state.user.age }}</div>
        <input type="number" v-model.number="age">
    </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    computed: {
        age: {
            get() {
                return this.$store.state.user.age
            },
            set(value) {
                // 调用根节点的 action
                // this.$store.dispatch('aAge', value)
                // 访问 user 模块中带有命名空间的 action
                this.$store.dispatch('user/aAge', value)
            }
        }
    }
})
</script>

<style scoped>

</style>
