<template>
    <div>
        <h1>依赖注入的子组件</h1>
        <div>
            parentTitle: {{ parentTitle }}
            <!-- 当注入的参数是一个响应式属性的时候，需要通过 .value 访问其值 -->
<!--            parentTitle: {{ parentTitle.value }}-->
        </div>
        <div>
            title: {{ title }}
        </div>
        <div>
            globalValue: {{globalValue}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'InjectChild',
    // 注入供应商提供的数据
    // inject: ['title'],
    inject: {
        // key: 注入参数的别名
        // value: 别名的配置
        parentTitle: {
            // 从注入的哪个属性中获取值
            from: 'title',
            // 设置默认值
            default() {
                return '默认title'
            }
        },
        globalValue: {
            // 若key值和注入的属性名一样，则可以省略from配置
        }
    },
    data() {
        return {
            title: '组件自己的title'
        }
    }
}
</script>

<style scoped>

</style>
