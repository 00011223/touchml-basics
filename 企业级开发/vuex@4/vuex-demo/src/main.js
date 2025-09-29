import {createApp} from 'vue'
import App from './App.vue'
import router from '@/router'
// 引入 store 仓库
// import store from '@/store/基础用法.js'
// import store from '@/store/getters.js'
// import store from '@/store/mapState和mapActions.js'
// import store from '@/store/表单处理.js'
// import store from '@/store/module.js'
import store from '@/store/组合式API.js'

createApp(App)
    // 安装插件
    .use(store)
    .use(router)
    .mount('#app')
