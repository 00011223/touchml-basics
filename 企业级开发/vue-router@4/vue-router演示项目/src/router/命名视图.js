// 知识点：
// 什么是命名视图
// 应用场景
// 使用方法
//      1. 给路由视口添加 name 属性，没有 name 属性的将被当作 default 使用
//      2. 在路由配置中添加 components 属性，为不同的路由视口添加对应的组件

// 什么是命名视图
// 当一个页面中存在多个路由视口时，需要通过name属性进行区分，这样的视图就叫命名视图

// 应用场景
// 当一个页面足够复杂 由多个路由视口组成，则需要使用命名视图来进行区分

import {createRouter, createWebHashHistory} from 'vue-router';
import NamedViews from '@/pages/命名视图/Index.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: NamedViews,
            children: [
                {
                    path: 'case1',
                    // 给命名视图分配页面
                    components: {
                        // key: 视图名称
                        // value: 要显示的页面

                        // default 代表匿名的路由视图
                        default: () => import('@/pages/命名视图/Page1.vue'),
                        other: () => import('@/pages/命名视图/Page2.vue')
                    }
                },
                {
                    path: 'case2',
                    components: {
                        default: () => import('@/pages/命名视图/Page3.vue'),
                        other: () => import('@/pages/命名视图/Page4.vue')
                    }
                }
            ]
        }
    ]
});

export default router;
