import {createApp} from 'vue'
import App from './App.vue'
import GlobalComponent from "@/components/GlobalComponent.vue";

let app = createApp(App)

// 调用 app.component 方法进行组件的全局注册
app.component('global-component', GlobalComponent)

app.mount('#app')
