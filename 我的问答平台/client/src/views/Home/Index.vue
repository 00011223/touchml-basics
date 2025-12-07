<script setup>
import {SettingOutlined, LogoutOutlined, MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons-vue'
import {computed, reactive, ref} from 'vue'
import {signOut} from '@/api/user'
import {useRoute, useRouter} from 'vue-router'
import {message} from 'ant-design-vue'
import {useStore} from 'vuex'
import homeRoutes from '@/router/homeRoutes'

const router = useRouter()
const route = useRoute()
const store = useStore()

const userInfo = computed(() => store.state.user.userInfo.nickname)

let sk = route.path.split('/')
//  /qa/publishQuestion
//  ''  'qa'  'publishQuestion'
//  /hall
//  ''   'hall'

// 已选择菜单项
const selectedKeys = reactive([sk[sk.length - 1]])
// 已打开的子菜单key列表
const openKeys = reactive([])
// 根据路径长度 添加打开的子菜单
if (sk.length > 2) openKeys.push(sk[sk.length - 2])

// 菜单是否折叠
const collapsed = ref(false)

function toggleCollapsed() {
    collapsed.value = !collapsed.value
}

// 设置菜单项点击事件
async function onSettingClick({item, key, keyPath}) {
    if (key === 'signOut') {
        // 登出
        await signOut()
        // 跳转到登录页
        router.push('/signIn').then(() => {
            message.success('登出成功')
        })
    }
}

// 侧边栏菜单点击事件
function onMenuItemClick({item, key, keyPath}) {
    // 拼接导航路径
    let path = `/${keyPath.join('/')}`
    router.push(path)
}
</script>

<template>
    <a-layout class="container animated-container">
        <a-layout-header style="color: #fff;">
            <div class="header">
                <span>问答平台</span>
                <a-dropdown :trigger="['click']">
                    <a-button>
                        <template #icon>
                            <SettingOutlined/>
                        </template>
                        Hi! {{ userInfo }}
                    </a-button>
                    <template #overlay>
                        <a-menu @click="onSettingClick">
                            <a-menu-item key="signOut">
                                <template #icon>
                                    <LogoutOutlined/>
                                </template>
                                登出
                            </a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
            </div>
        </a-layout-header>
        <a-layout>
            <a-layout-sider style="color: #fff" v-model:collapsed="collapsed" collapsible :trigger="null">
                <a-menu
                    v-model:selectedKeys="selectedKeys"
                    v-model:openKeys="openKeys"
                    mode="inline"
                    theme="dark"
                    @click="onMenuItemClick"
                >
                    <template v-for="(route, idx) in homeRoutes" :key="idx">
                        <template v-if="route.children !== undefined">
                            <a-sub-menu :key="route.path">
                                <template #icon>
                                    <component :is="route.meta.icon"></component>
                                </template>
                                <template #title>{{ route.meta.title }}</template>
                                <a-menu-item v-for="(r, i) in route.children" :key="r.path">
                                    <template #icon>
                                        <component :is="r.meta.icon"></component>
                                    </template>
                                    {{ r.meta.title }}
                                </a-menu-item>
                            </a-sub-menu>
                        </template>
                        <template v-else>
                            <a-menu-item :key="route.path">
                                <template #icon>
                                    <component :is="route.meta.icon"></component>
                                </template>
                                {{ route.meta.title }}
                            </a-menu-item>
                        </template>
                    </template>
                </a-menu>
            </a-layout-sider>
            <a-layout>
                <a-layout-content class="content">
                    <!-- 标题行 -->
                    <a-card size="small">
                        <div class="title-row">
                            <a-button @click="toggleCollapsed">
                                <MenuUnfoldOutlined v-if="collapsed"/>
                                <MenuFoldOutlined v-else/>
                            </a-button>
                            <h1 class="title">{{ route.meta.title }}</h1>
                        </div>
                    </a-card>
                    <!-- 内容显示 -->
                    <div class="inner-content">
                        <router-view v-slot="{Component}">
                            <transition
                                enter-active-class="animate__animated animate__fadeInUp animate__faster"
                                leave-active-class="animate__animated animate__fadeOutRight animate__faster"
                            >
                                <component :is="Component"></component>
                            </transition>
                        </router-view>
                    </div>
                </a-layout-content>
                <a-layout-footer class="footer">
                    &copy; 2022 shampoo6@163.com 技术支持
                </a-layout-footer>
            </a-layout>
        </a-layout>
    </a-layout>
</template>

<style lang="scss" scoped>
.container {
    height: 100vh;

    .content {
        display: flex;
        flex-direction: column;
        background-color: #f0f2f5;

        .inner-content {
            flex-grow: 1;
            position: relative;
            overflow-x: hidden;
            overflow-y: auto;
        }
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}

.title-row {
    display: flex;
    align-items: center;
}

.title {
    font-size: 24px;
    font-weight: bolder;
    margin: 0 0 0 16px;
}

.footer {
    background-color: #f8f9fa;
    text-align: right;
}
</style>
