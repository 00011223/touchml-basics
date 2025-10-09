import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            // component: () => import('@/views/首个AntD程序.vue')
            // component: () => import('@/views/布局组件.vue')
            // component: () => import('@/views/表单组件.vue')
            // component: () => import('@/views/表单验证.vue')
            component: () => import('@/views/分页表格.vue')
        }
    ]
})

export default router
