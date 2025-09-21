// 知识点
// 什么是路由组件传参
// 应用场景
// 布尔模式
// 命名视图
// 对象模式
// 函数模式
// meta 元数据


// 什么是路由组件传参
// 动态路由匹配的参数可以直接赋值给组件的 props，来达到传参的目的

// 应用场景
// 需要在组件中方便的传递路由参数

// meta 元数据
// 什么是元数据?
// 描述数据的数据叫元数据

import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/home/:id',
            component: () => import('@/pages/路由组件参数/Index.vue'),

            // 布尔模式
            // 路由参数的名称将直接变成组件的props传递给组件
            props: true,

            children: [
                {
                    path: 'child/:cId',
                    // 声明命名视图
                    components: {
                        default: () => import('@/pages/路由组件参数/P1.vue'),
                        v1: () => import('@/pages/路由组件参数/P2.vue'),
                        v2: () => import('@/pages/路由组件参数/P3.vue')
                    },
                    // 给命名视图添加路由组件传参
                    props: true
                }
            ]
        },
        {
            path: '/obj',
            component: () => import('@/pages/路由组件参数/Obj.vue'),
            // 对象类型
            // 对象类型传递的参数是静态值
            props: {x: 1, y: 2}
        },
        {
            path: '/fn',
            component: () => import('@/pages/路由组件参数/Fn.vue'),
            // 函数模式
            props: route => {
                // route 当前路由对象
                console.log(route)
                // 返回一个对象，对象属性将作为组件的props传递给组件
                return {a: Number(route.query.a), b: Number(route.query.b)}
            }
        },
        {
            path: '/meta',
            component: ()=>import('@/pages/路由组件参数/Meta.vue'),
            // 元数据
            // 此处元数据用来修饰当前路由配置
            meta: {title: '这是meta页面的标题', name: '这是一个传给meta的名称'}
        }
    ]
})

export default router
