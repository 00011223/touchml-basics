import {createApp} from 'vue'
import App from './App.vue'
// 引入插件
import ElementPlus from 'element-plus'
// 引入样式
import 'element-plus/dist/index.css'

createApp(App)
    // 安装插件
    .use(ElementPlus)
    .mount('#app')
