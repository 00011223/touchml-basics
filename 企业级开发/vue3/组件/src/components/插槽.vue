<template>
    <div>
        <SlotChild>

            <!-- 在组件标签体里写的内容 默认被插入匿名插槽 -->
            <!-- 插槽内若不提供内容 则将使用插槽的默认值 -->

            <!-- this is content -->


            <!-- 若已经使用了具名插槽 又想使用匿名插槽的话， 请使用template标签
                插槽名使用 default
             -->
<!--            <template #default>
                this is content
            </template>-->


            <!-- 使用template标签来使用具名插槽
                使用 v-slot 指令来提供插槽的名称
                v-slot 缩写为 #
             -->
            <!--            <template v-slot:header>-->
            <template #header>
                <!-- template标签内填入要插入插槽的内容 -->
                <span>
                    <span style="color: #f00">hello</span>
                    &nbsp;
                    具名插槽
                </span>
            </template>




            <!-- 使用匿名的作用域插槽 -->
            <!-- props 是变量名可以自定义
                props 代表的是 slot 标签上的属性
             -->
            <template #default="props">
                <ul>
                    <li>姓名: {{props.n}}</li>
                    <li>性别: {{props.s}}</li>
                </ul>
            </template>

            <template #footer="props">
                年龄: {{props.a}}
            </template>
        </SlotChild>
    </div>
</template>

<script>
// 知识点:
// 什么是插槽？
// 匿名插槽
// 插槽的默认值
// 具名插槽
// 作用域插槽
// this.$slots


// 什么是插槽？
// 插槽用来描述组件的标签体内能够填充哪些内容，并且插槽规定了组件标签体填入到组件的哪个地方

// 什么是作用域插槽
// 当自定义组件的标签体内想要访问该自定义组件的属性时，可以使用作用域插槽


import SlotChild from "@/components/SlotChild.vue";

export default {
    components: {
        SlotChild
    }
}
</script>

<style scoped>

</style>
