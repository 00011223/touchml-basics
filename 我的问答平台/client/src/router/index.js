import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home/Index'
import store from '@/store'
import homeRoutes from '@/router/homeRoutes'

const routes = [
    {
        path: '/',
        component: Home,
        children: [
            ...homeRoutes,
            {
                path: 'question/:id',
                meta: {title: '编辑问题'},
                component: () => import('@/views/Home/Question')
            }
        ]
    },
    {
        path: '/signIn',
        component: () => import('@/views/SignIn')
    },
    {
        path: '/signUp',
        component: () => import('@/views/SignUp')
    },
    {
        path: '/qtAnswer/:id',
        component: () => import('@/views/qtAnswer')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

// 白名单
const whiteList = ['/signIn', '/signUp']

// 添加全局导航守卫
router.beforeEach((to, from, next) => {
    if (whiteList.includes(to.path)) {
        // 命中白名单
        next()
        return
    }
    // 若不在白名单则判断是否已经登录
    store.dispatch('user/getUserInfo').then(userInfo => {
        if (userInfo) {
            // 若已登录就放行
            next()
        } else {
            // 否则踢回到登录页
            next('/signIn')
        }
    })
})

export default router
