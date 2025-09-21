<script setup>
defineProps(['id'])
</script>

<template>
    <div>
        <h1>id: {{ id }}</h1>
        <div>
            <router-view></router-view>
        </div>
        <div>
            <router-view name="v1"></router-view>
        </div>
        <div>
            <router-view name="v2"></router-view>
        </div>
    </div>
</template>

<style scoped>

</style>
