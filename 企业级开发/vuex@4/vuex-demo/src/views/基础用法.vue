<template>
    <div>
        <h1>基础用法</h1>
        <div>
            <!-- $store 是组件对象内置的 store 仓库对象 -->
            nickname: {{ $store.state.nickname }}
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>

</style>
