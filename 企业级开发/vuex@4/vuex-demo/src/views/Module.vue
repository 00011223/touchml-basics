<template>
    <div>
        <h1>Module</h1>
        <div>name: {{ $store.state.name }}</div>
        <div>sex: {{ $store.state.sex }}</div>
        <!-- state 中使用模块的名称访问模块里的状态 -->
        <div>age: {{ $store.state.user.age }}</div>
        <input type="number" v-model.number="age">
        <div>count: {{ $store.state.user.count }}</div>
        <input type="number" v-model.number="count">
        <div>money: {{ money }}</div>
        <input type="text" :value="money" @input="ev=>{ aMoney(ev.target.value) }">
    </div>
</template>

<script>
import {defineComponent} from 'vue'
import {createNamespacedHelpers, mapState, mapActions} from 'vuex'

// 通过 createNamespacedHelpers 创建带有命名空间的 mapState 和 mapActions
// const {mapState, mapActions} = createNamespacedHelpers('user')

export default defineComponent({
    computed: {
        // ...mapState(['money']),
        // 第一个参数: 命名空间
        ...mapState('user', ['money']),
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
        },
        count: {
            get() {
                return this.$store.state.user.count
            },
            set(value) {
                this.$store.dispatch('aCount', value)
            }
        }
    },
    methods: {
        // ...mapActions(['aMoney'])
        // 第一个参数: 命名空间
        ...mapActions('user', ['aMoney'])
    }
})
</script>

<style scoped>

</style>
