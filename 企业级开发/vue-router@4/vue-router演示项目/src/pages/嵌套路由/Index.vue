<template>
    <div class="container">
        <!--  侧边栏  -->
        <div style="width: 300px; height: 400px; background-color: aqua">
<!--            <div><router-link to="/home/basic">基本信息</router-link></div>-->
            <div><router-link to="/home/basic">基本信息</router-link></div>
            <div><router-link to="/home/modifyPwd">修改密码</router-link></div>
        </div>
        <!-- 内容区域 -->
        <div style="flex-grow: 1;">
            <!-- 通过嵌套 router-view 显示子页面 -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "Index"
}
</script>

<style scoped>
    .container {
        display: flex;
    }
</style>
