// 知识点
// 如何声明路由器和路由对象

import {createRouter, createWebHashHistory} from 'vue-router'
import CombineAPI from '@/pages/组合式API.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: CombineAPI
        },
        {
            path: '/p1',
            component: ()=>import('@/pages/Page1.vue')
        }
    ]
})

export default router
