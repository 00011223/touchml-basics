<template>
    <div>
        <div>
            <router-view></router-view>
        </div>
        <div>
            <!-- 添加 name 属性成为一个命名视图 -->
            <router-view name="other"></router-view>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>

</style>
