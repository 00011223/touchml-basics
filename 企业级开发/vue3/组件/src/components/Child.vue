<template>
    <div></div>
</template>

<script>
export default {
    name: 'Child',
    setup(){
        console.log('c setup')
    },
    beforeCreate(){
        console.log('c beforeCreate')
    },
    created(){
        console.log('c created')
    },
    beforeMount(){
        console.log('c beforeMount')
    },
    mounted(){
        console.log('c mounted')
    }
}
</script>

<style scoped>

</style>
