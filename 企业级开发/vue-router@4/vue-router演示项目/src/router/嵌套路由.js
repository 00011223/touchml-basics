// 知识点：
// 什么是嵌套路由？
// 应用场景
// 如何声明嵌套路由
//      1. 路由配置 routes 中，给需要嵌套的路由配置添加 children 属性
//      2. 创建父组件，并在父组件中声明 <router-view>

// 什么是嵌套路由？
// 在一个路由视口中，又包含一个路由视口，这样形成的嵌套效果就是嵌套路由

// 应用场景
// 多用于页面布局时的局部页面切换，例如侧边栏按钮点击后，内容的切换

import {createRouter, createWebHashHistory} from "vue-router";
import NComponent from '@/pages/嵌套路由/Index.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/home',
            component: NComponent,
            // children 配置子页面
            children: [
                {
                    // 子页面的 path 通常是写相对路径
                    path: 'basic',
                    component: () => import('@/pages/嵌套路由/基本信息.vue'),
                },
                {
                    path: 'modifyPwd',
                    component: () => import('@/pages/嵌套路由/修改密码.vue')
                }
            ]
        }
    ]
});

export default router
