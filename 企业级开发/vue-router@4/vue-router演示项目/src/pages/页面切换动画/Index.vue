<script setup>

</script>

<template>
    <div>
        <router-link to="p1">p1</router-link> | <router-link to="p2">p2</router-link>
        <div>
            <!-- 利用作用域插槽，获得 Component 对象
                Component 代表的就是当前显示的页面组件
            -->
            <router-view v-slot="{Component}">
                <!-- 播放动画可以利用transition组件间切换动画 -->
                <transition
                    mode="out-in"
                    enter-active-class="animate__animated animate__flipInX animate__slow"
                    leave-active-class="animate__animated animate__rotateOutDownLeft animate__slow"
                >
                    <component :is="Component"></component>
                </transition>
            </router-view>
        </div>
    </div>
</template>

<style scoped>

</style>
