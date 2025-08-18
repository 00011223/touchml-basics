# 组合式API

组合式API 类似 React 的函数组件，是用函数形式定义一个组件的方法

由于组合式API在调用的时候还不存在组件实例对象，所以组合式API中无法使用 `this` 关键字

## 基本用法

在配置对象的 setup 生命周期中使用组合式API

或者

在单文件组件的 `<script setup>` 标签中使用组合式API

## setup生命周期

```js
import {ref} from 'vue'

defineComponent({
    template: `<div>{{name}}</div>`,
    setup() {
        const name = ref('')
        const sex = ref('other')
        const age = ref(0)

        // 需要被组件访问的属性写在return中
        return {
            name,
            sex,
            age
        }
    },
    data() {
        return {}
    },
    methods: {}
})
```

## 单文件组件的 `<script setup>`

```vue
<script setup>
import {ref} from 'vue'

// 基本用法和 setup 声明周期一样，不过不需要返回东西
// 此处定义的内容直接就能被组件访问
const name = ref('')
const sex = ref('other')
const age = ref(0)
</script>
```
