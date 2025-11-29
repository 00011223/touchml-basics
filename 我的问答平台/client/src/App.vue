<template>
  <router-view/>
</template>

<style lang="scss">
.page-header {
    width: 100%;
    border: 1px solid rgb(235, 237, 240);
    background-color: #fff !important;
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
