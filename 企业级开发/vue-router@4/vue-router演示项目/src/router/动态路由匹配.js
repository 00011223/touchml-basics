// 知识点：
// 什么是动态路由匹配
// 应用场景
// 使用方法
// this.$route


// 什么是动态路由匹配？
// 通过不同的 url 路径可以跳转到同一个页面，这种 path 的设置方法就是动态路由匹配
// 动态路由匹配就是为了给页面传递参数

// 应用场景
// 同一个页面可以通过不同的 url 来获取参数，从而显示不同的内容，例如：b站的用户中心，直播间，京东的商品详情页等

import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            // 此处路径的 :name 是一个占位符, url只要符合下列path的形式，都能进入指定的页面
            // 例如如下的url都能匹配成功
            // /userInfo/张三
            // /userInfo/老王
            path: '/userInfo/:name',
            component: () => import('@/pages/UserInfo.vue')
        }
    ]
})

export default router
