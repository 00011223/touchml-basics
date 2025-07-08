// 知识点：https://router.vuejs.org/zh/guide/essentials/navigation.html
// 什么式编程式导航？
// 应用场景
// push 入栈导航
// replace 替换
// go 前进或后退指定页数
// back 返回
// forward 前进


// 什么式编程式导航？
// 使用 js 代码方式来控制页面导航
// 编程式导航对应 router-link 也有一组声明式导航: https://router.vuejs.org/zh/guide/essentials/navigation.html

// 应用场景
// 所有需要用 js 代码控制导航的地方

import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: ()=>import('@/pages/编程式导航.vue')
        },
        {
            path: '/p1',
            component: ()=>import('@/pages/Page1.vue')
        },
        {
            path: '/p2',
            component: ()=>import('@/pages/Page2.vue')
        }
    ]
})

export default router
