<template>
    <div>
        <Child></Child>
    </div>
</template>

<script>
import Child from '@/components/Child.vue'

export default {
    name: 'Parent',
    components: {
        Child
    },
    setup() {
        console.log('p setup')
    },
    beforeCreate() {
        console.log('p beforeCreate')
    },
    created() {
        console.log('p created')
    },
    beforeMount() {
        console.log('p beforeMount')
    },
    mounted() {
        console.log('p mounted')
    }
}
</script>

<style scoped>

</style>
