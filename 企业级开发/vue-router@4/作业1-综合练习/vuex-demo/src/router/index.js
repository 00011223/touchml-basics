import {createRouter, createWebHashHistory} from "vue-router";
import Home from "@/views/Home.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            // redirect: '/home',
            // redirect: {name: 'home'},
            redirect(to) {
                console.log(to)
                // return '/home'
                return {name: 'home'}
            }
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/page1',
            component: () => import('@/views/Page1.vue')
        },
        {
            path: '/page2',
            component: () => import('@/views/Page2.vue'),
            children: [
                {
                    path: '',
                    components: {
                        v1: () => import('@/views/P1.vue'),
                        v2: () => import('@/views/P2.vue')
                    }
                }
            ]
        },
        {
            path: '/page3',
            component: () => import('@/views/Page3.vue'),
            children: [
                {
                    path: '',
                    components: {
                        v1: () => import('@/views/P2.vue'),
                        v2: () => import('@/views/P1.vue'),
                    }
                }
            ]
        },
    ]
})

export default router
