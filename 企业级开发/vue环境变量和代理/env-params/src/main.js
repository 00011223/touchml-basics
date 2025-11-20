import { createApp } from 'vue'
import App from './App.vue'

// 访问环境变量
console.log(process.env.VUE_APP_NAME)
console.log(process.env.VUE_APP_SEX)
console.log(process.env.VUE_APP_AGE)
console.log(process.env.VUE_APP_URL)

createApp(App).mount('#app')
