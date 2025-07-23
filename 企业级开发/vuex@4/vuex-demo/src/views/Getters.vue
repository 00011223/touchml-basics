<template>
    <div>
        <h1>Getters</h1>
        <div>日期对象: {{ $store.state.date }}</div>
        <!-- 使用getter时类似于计算属性 -->
        <div>日期字符串: {{ $store.getters.dateString }}</div>
    </div>
</template>

<script>
export default {
    name: 'Getters',
}
</script>

<style scoped>

</style>
