<template>
  <div>
<!--      <BasicComponent></BasicComponent>-->
      <RefComponent></RefComponent>
  </div>
</template>

<script>
import BasicComponent from '@/components/基本用法.vue'
import RefComponent from '@/components/响应式数据.vue'

export default {
  name: 'App',
  components: {
      BasicComponent,
      RefComponent
  }
}
</script>

<style>

</style>
