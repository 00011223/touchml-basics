import {createApp} from 'vue'
import App from './App.vue'

// 引入路由器配置
// import router from "@/router/vue-router基础.js";
// import router from "@/router/动态路由匹配.js";
// import router from "@/router/嵌套路由.js";
// import router from '@/router/编程式导航.js'
// import router from '@/router/命名路由.js'
// import router from '@/router/命名视图.js'
// import router from '@/router/重定向和别名.js'
import router from '@/router/路由组件参数.js'

createApp(App)
    // 安装vue插件
    .use(router)
    .mount('#app')
