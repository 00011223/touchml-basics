import {createRouter, createWebHashHistory} from 'vue-router'
import Index from '@/pages/页面切换动画/Index.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Index,
            children: [
                {
                    path: 'p1',
                    component: ()=>import('@/pages/页面切换动画/P1.vue')
                },
                {
                    path: 'p2',
                    component: ()=>import('@/pages/页面切换动画/P2.vue')
                },
            ]
        }
    ]
})

export default router
