// 在此文件中初始化vue-router的配置

// 1. 引入 createRouter createWebHashHistory
import {createRouter, createWebHashHistory} from 'vue-router'
// 同步加载页面
import Page1 from "@/pages/Page1.vue";

// 2. 创建 router 对象
const router = createRouter({
    // 历史模式
    history: createWebHashHistory(),
    // 路由配置
    // 此配置用于声明什么样的路径能够进入哪一个组件
    routes: [
        // 一个页面配置
        {
            // 用于匹配组件的路径
            path: '/p1',
            // 匹配到路径后要显示的组件
            component: Page1
        },
        {
            path: '/p2',
            // 异步加载页面
            component: () => import('@/pages/Page2.vue')
        }
    ]
})

// 3. 导出 router
export default router
