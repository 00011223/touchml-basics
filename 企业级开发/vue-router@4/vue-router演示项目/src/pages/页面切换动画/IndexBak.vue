<script setup>

</script>

<template>
    <div>
        <h1>页面切换动画</h1>
        <div>
            <router-link to="/p1">p1</router-link>
            |
            <router-link to="/p2">p2</router-link>
        </div>
        <div style="position: relative">
            <router-view v-slot="{Component}">
                <transition mode="out-in" appear name="fade">
                    <component :is="Component"></component>
                </transition>
            </router-view>
        </div>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 1s ease;
}

.fade-enter-from {
    opacity: 0;
    /*left: 100%;*/
    transform: translateX(100%);
}

.fade-enter-to {
    opacity: 1;
    /*left: 0;*/
    transform: translateX(0);
}

.fade-leave-from {
    opacity: 1;
    /*top: 0*/
    transform: translateY(0);
}

.fade-leave-to {
    opacity: 0;
    /*top: 200px;*/
    transform: translateY(200px);
}
</style>
