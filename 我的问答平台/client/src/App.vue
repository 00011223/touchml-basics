<template>
    <router-view v-slot="{Component}">
        <transition
            enter-active-class="animate__animated animate__fadeInUp"
            leave-active-class="animate__animated animate__fadeOutRight"
        >
            <component :is="Component"></component>
        </transition>
    </router-view>
</template>

<style lang="scss">
body {
    overflow: hidden;
}

.page-header {
    width: 100%;
    border: 1px solid rgb(235, 237, 240);
    background-color: #fff !important;
}

.animated-container {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
    scrollbar-width: none;
    scrollbar-color: #1890ff #e6e6e6;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
    width: 8px;
}

*::-webkit-scrollbar-track {
    background: #e6e6e6;
}

*::-webkit-scrollbar-thumb {
    background-color: #1890ff;
    border-radius: 10px;
    border: 3px none #994d4d;
}
</style>
