<template>
    <div>
        <h1>Home</h1>
        <div>
            <router-link to="/page1">to page1</router-link>
            <button @click="$router.push('/page2')">to page2</button>
            <router-link to="/page3">to page3</router-link>
        </div>
    </div>
</template>

<script>
export default {
    methods: {}
}
</script>

<style scoped>

</style>
