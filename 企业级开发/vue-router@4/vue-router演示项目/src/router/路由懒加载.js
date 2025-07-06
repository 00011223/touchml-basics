// 知识点:
// 什么是路由懒加载？
// 应用场景
// 懒加载方法

// 什么是路由懒加载？
// 当页面未被使用的时候就不加载，使用页面的时候才加载
// 应用场景
// 多用在多个页面切换时，节约计算机性能开销和网络流量

import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '@/views/Home.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/page1',
            // 给 component 配置一个工厂函数
            // 该工厂函数返回一个由 import 函数返回的 Promise 对象
            component: () => import('@/views/Page1.vue') // 异步加载页面
        },
    ]
});

// 导出router
export default router;
