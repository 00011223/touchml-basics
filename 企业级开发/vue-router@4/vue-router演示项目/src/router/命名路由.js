// 知识点:
// 给路由配置添加 name 属性
// 使用路由名称实现路由跳转

import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/pages/命名路由.vue'),
            children: [
                {
                    path: 'p1',
                    // name 属性可以给路由取名字
                    name: 'page1',
                    component: () => import('@/pages/Page1.vue')
                },
                {
                    path: 'p2',
                    name: 'page2',
                    component: () => import('@/pages/Page2.vue')
                },
                {
                    path: 'userInfo/:name',
                    name: 'userInfo',
                    component: () => import('@/pages/UserInfo.vue')
                }
            ]
        }
    ]
});

export default router

