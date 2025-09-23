// 知识点
// 什么是导航守卫
// 应用场景
// 全局守卫
// 路由独享守卫
// 组件内守卫
//      组合式API内使用
//      选项式API内使用


// 什么是导航守卫
// 导航守卫就是每次路由跳转时都将执行的钩子函数

// 应用场景
// 验证页面权限，没有权限将跳转默认页面（例如：登录验证，没有登录的将被踢回登录页）


import {createRouter, createWebHashHistory} from 'vue-router'
import SignIn from '@/pages/导航守卫/SignIn.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: SignIn
        },
        {
            path: '/zhs/:id',
            name: 'zhs',
            component: () => import('@/pages/导航守卫/组合式API.vue'),
        },
        {
            path: '/xxs/:id',
            component: () => import('@/pages/导航守卫/选项式API.vue'),
            // 独享路由守卫
            // 进入页面前触发该守卫
            // beforeEnter(to, from, next) {
            //     console.log('beforeEnter')
            //     next()
            // }
            // 数组的写法 可以添加多个守卫函数，守卫函数会依序执行
            beforeEnter: [
                (to, from) => {
                    console.log('独享守卫1')
                },
                (to, from) => {
                    console.log('独享守卫2')
                },
                (to, from) => {
                    console.log('独享守卫3')
                }
            ]
        },
    ]
})


// 全局导航守卫
// 全局导航守卫将影响所有的页面

// beforeEach
// 进入每个页面前触发
// router.beforeEach((to, from) => {
//     // to 到达的路由
//     // from 从哪个路由来
//     console.log('beforeEach')
//     console.log(to)
//     console.log(from)
//
//     // 可以有返回值
//     // 返回 true 或 undefined 代表正常放行
//     // return false
// })

// next 可选参数
// 除了 afterEach 外，所有的守卫函数都有最后一个可选参数，叫next
// next 是一个放行函数
// router.beforeEach((to, from, next) => {
//     console.log('beforeEach')
//     // 若已选择可选参数 next 那么必须调用 next 否则将不会进入页面
//
//     // 不带参数调用 意思是放行到下一个页面
//     // next()
//
//     // next 的参数代表强制跳转到哪个页面
//     if (to.path === '/xxs') {
//         // next('/zhs')
//         next({name: 'zhs'})
//     } else if (to.path === '/') {
//         console.log('不准通过')
//         next(false) // 参数为false代表不准通过守卫
//     } else {
//         next()
//     }
// })

// beforeResolve
// 进入页面前 且 组件的守卫处理完成后 调用 beforeResolve
router.beforeResolve((to, from) => {
    console.log('beforeResolve')
})

// afterEach
// 进入页面后
router.afterEach((to, from) => {
    // afterEach 没有 next 函数
    console.log('afterEach')
})

export default router
