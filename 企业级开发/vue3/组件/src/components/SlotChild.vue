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
                匿名插槽在组件中只能有一个
                slot 标签体的内容将称为插槽的默认值
             -->
<!--            <slot>content</slot>-->
            content
        </div>
        <div>
            footer


            <!-- 作用域插槽
                给普通的插槽进行属性绑定，则该插槽将变成作用域插槽
                无论是匿名插槽还是具名插槽都可以成为作用域插槽
             -->

            <!-- n: 是一个作用域插槽的变量名 是自定义的
                name: 是一个希望外部能够访问到的参数
             -->
            <slot :n="name" :s="sex"></slot>

            <slot name="footer" :a="age"></slot>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '张三',
            sex: 'female',
            age: 17
        }
    },
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
