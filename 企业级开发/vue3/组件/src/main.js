import {createApp, ref} from 'vue'
import App from './App.vue'
import GlobalComponent from '@/components/GlobalComponent.vue'

let app = createApp(App)

// 自动解包依赖注入的响应式数据
app.config.unwrapInjectedRef = true

// 调用 app.component 方法进行组件的全局注册
app.component('global-component', GlobalComponent)

// 声明全局响应式属性
window.ggvalue = ref('这是全局注入的响应式值')

// 应用层依赖注入
// app.provide('globalValue', '这是应用层注入的值')
app.provide('globalValue', window.ggvalue)

app.mount('#app')
