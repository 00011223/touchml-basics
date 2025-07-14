// 知识点：
// 什么是重定向和别名
// 应用场景
// 配置重定向
// 配置别名


// 什么是重定向？
// 访问一个 url 地址时，被重新要求访问了另一个地址，这个过程是重定向
// 什么是别名？
// 别名是路由的另一个名称

// 应用场景
// 重定向多用于一些地址定向到首页
// 别名多用于简化路径

import {createRouter, createWebHashHistory} from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            // 使用redirect进行重定向
            // 1. 值可以是字符串的路径
            // redirect: '/home'
            // 2. 可以使用命名路由
            // redirect: {name: 'index'}
            // 3. 还可以返回一个工厂函数
            redirect: to => {
                // to 当前的路由对象
                console.log(to)
                // 返回需要重定向的结果
                // return '/home'
                return {name: 'index'}
            }
        },

        {
            path: '/home',
            name: 'index',
            component: () => import('@/pages/Page1.vue')
        },

        {
            path: '/user/info/page2',
            // 给当前路由取别名
            alias: '/p2',
            component: () => import('@/pages/Page2.vue')
        }
    ]
});

export default router;
