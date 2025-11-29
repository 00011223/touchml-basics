import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/signIn',
        component: () => import('@/views/SignIn')
    },
    {
        path: '/signUp',
        component: () => import('@/views/SignUp')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
