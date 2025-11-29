<script setup>

import {onMounted} from 'vue'
import {getUserInfo} from '@/api/user'

onMounted(async () => {
    // 查询用户信息
    const userInfo = await getUserInfo()
    console.log(userInfo)
})

</script>

<template>
    <a-layout class="container">
        <a-layout-header style="color: #fff;">问答平台</a-layout-header>
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
}
</style>
