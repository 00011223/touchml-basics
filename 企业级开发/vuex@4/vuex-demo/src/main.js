import {createApp} from 'vue'
import App from './App.vue'
import router from '@/router'
// 引入 store 仓库
import store from '@/store/基础用法.js'

createApp(App)
    // 安装插件
    .use(store)
    .use(router)
    .mount('#app')
