<template>
    <div>
        <div>
            <!-- 具名插槽
                使用name属性声明插槽名称
             -->
            <slot name="header">header</slot>
        </div>
        <div>
            <!-- 匿名插槽
                slot 标签体的内容将称为插槽的默认值
             -->
            <slot>content</slot>
        </div>
        <div>
            footer
        </div>
    </div>
</template>

<script>
export default {
    // render(){
    //     return h('div', null, this.slots.default)
    // },
    created() {
        // 插槽中被赋值的内容实际上被保存到 $slots 中
        console.log(this.$slots)
    }
}
</script>

<style scoped>

</style>
