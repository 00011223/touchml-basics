<template>
  <div>
<!--      <BasicComponent></BasicComponent>-->
<!--      <RefComponent></RefComponent>-->
<!--      <ComputedComponent></ComputedComponent>-->
      <LifeCircleComponent></LifeCircleComponent>
  </div>
</template>

<script>
import BasicComponent from '@/components/基本用法.vue'
import RefComponent from '@/components/响应式数据.vue'
import ComputedComponent from '@/components/计算属性.vue'
import LifeCircleComponent from '@/components/生命周期.vue'

export default {
  name: 'App',
  components: {
      BasicComponent,
      RefComponent,
      ComputedComponent,
      LifeCircleComponent
  }
}
</script>

<style>

</style>
