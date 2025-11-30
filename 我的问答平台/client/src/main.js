import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入 ui 框架
import AntD from 'ant-design-vue'
// 引入样式
import 'ant-design-vue/dist/antd.css'
// 引入 node-rsa
import '@/assets/node-rsa'
// 引入 animate.css
import 'animate.css/animate.css'

createApp(App)
    .use(store)
    .use(router)
    .use(AntD)
    .mount('#app')
