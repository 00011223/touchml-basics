import {
    CopyOutlined,
    AliwangwangOutlined,
    AndroidOutlined,
    AppleOutlined,
    WindowsOutlined
} from '@ant-design/icons-vue'

// 首页的路由配置
export default [
    {
        path: 'qa',
        // 添加路由的额外信息
        meta: {title: '我的问卷', icon: CopyOutlined},
        children: [
            {
                path: 'questionTemplate',
                meta: {title: '问卷管理', icon: AndroidOutlined},
                component: () => import('@/views/Home/QuestionTemplate')
            },
            {
                path: 'publishQuestion',
                meta: {title: '发布管理', icon: AppleOutlined},
                component: () => import('@/views/Home/PublishQuestion')
            },
            {
                path: 'qtAnswer',
                meta: {title: '我的答题', icon: WindowsOutlined},
                component: () => import('@/views/Home/QtAnswer')
            },
        ]
    },
    {
        path: 'hall',
        meta: {title: '问卷大厅', icon: AliwangwangOutlined},
        component: () => import('@/views/Home/Hall')
    }
]
