<script setup>
import {SettingOutlined, LogoutOutlined} from '@ant-design/icons-vue'
import {computed} from 'vue'
import {signOut} from '@/api/user'
import {useRouter} from 'vue-router'
import {message} from 'ant-design-vue'
import {useStore} from 'vuex'

const router = useRouter()
const store = useStore()

const userInfo = computed(() => store.state.user.userInfo.nickname)

// 菜单项点击事件
async function onMenuItemClick({item, key, keyPath}) {
    if (key === 'signOut') {
        // 登出
        await signOut()
        // 跳转到登录页
        router.push('/signIn').then(() => {
            message.success('登出成功')
        })
    }
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
                        <a-menu @click="onMenuItemClick">
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
            <a-layout-sider style="color: #fff">侧边栏</a-layout-sider>
            <a-layout>
                <a-layout-content class="content">
                    <div style="height: 3000px;">内容区域</div>
                </a-layout-content>
                <a-layout-footer>脚注</a-layout-footer>
            </a-layout>
        </a-layout>
    </a-layout>
</template>

<style lang="scss" scoped>
.container {
    height: 100vh;

    .content {
        background-color: #fff;
        overflow: auto;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>
