<template>
    <div>
        <h1>基础用法</h1>
        <div>
            <!-- 页面中读取状态 -->
            <!-- $store 是组件对象内置的 store 仓库对象 -->
            nickname: {{ $store.state.nickname }}
        </div>
        <div>
            <input type="text" :value="$store.state.nickname" @input="onNicknameInput">
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        onNicknameInput(ev) {
            // 1. 通过commit调用mutation修改状态
            // 注意: 按规范来说，页面不应该直接调用 mutation
            // this.$store.commit('mNickname', ev.target.value)

            // 2. 通过dispatch调用action修改状态
            // this.$store.dispatch('aNickname', ev.target.value)


            // 调用异步action并获得返回值
            // dispatch 方法将返回一个promise对象
            this.$store.dispatch('aNickname', ev.target.value).then(data => {
                // 此处的data就是 aNickname action 的返回值
                console.log(data)
            })
        }
    }
}
</script>

<style scoped>

</style>
