import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
// 引入样式
import 'ant-design-vue/dist/antd.css'
// 引入 antD 插件
import AntD from 'ant-design-vue'

createApp(App)
    .use(router)
    // 安装插件
    .use(AntD)
    .mount('#app')
