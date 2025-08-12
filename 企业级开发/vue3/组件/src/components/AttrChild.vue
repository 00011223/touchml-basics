<template>
    <div>
        1
    </div>
    <!-- 使用 v-bind="$attrs" 来决定继承html属性到哪一个根节点上  -->
    <div v-bind="$attrs">
        2
    </div>
    <div>
        3
    </div>
</template>

<script>
export default {
    name: 'AttrChild',
    mounted() {
        console.log(this.$attrs)
    }
}
</script>

<style scoped>

</style>
