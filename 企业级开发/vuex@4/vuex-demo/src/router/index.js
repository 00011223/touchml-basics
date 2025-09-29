import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            // component: () => import('@/views/基础用法.vue')
            // component: () => import('@/views/Getters.vue')
            // component: () => import('@/views/mapState和mapActions.vue')
            // component: () => import('@/views/表单处理.vue')
            component: () => import('@/views/Module.vue')
        }
    ]
})

export default router
