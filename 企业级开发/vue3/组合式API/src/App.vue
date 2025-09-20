<template>
    <div>
        <!--      <BasicComponent></BasicComponent>-->
        <!--      <RefComponent></RefComponent>-->
        <!--      <ComputedComponent></ComputedComponent>-->
        <!--      <LifeCircleComponent></LifeCircleComponent>-->
        <!--      <WatchComponent></WatchComponent>-->
        <!--      <Ref></Ref>-->
        <!--      <PropsAndEvents></PropsAndEvents>-->
<!--        <InjectComponent></InjectComponent>-->
        <NextTick></NextTick>
    </div>
</template>

<script>
import BasicComponent from '@/components/基本用法.vue'
import RefComponent from '@/components/响应式数据.vue'
import ComputedComponent from '@/components/计算属性.vue'
import LifeCircleComponent from '@/components/生命周期.vue'
import WatchComponent from '@/components/监听器.vue'
import Ref from '@/components/Ref.vue'
import PropsAndEvents from '@/components/组件props和事件.vue'
import InjectComponent from '@/components/依赖注入.vue'
import NextTick from '@/components/NextTick.vue'

export default {
    name: 'App',
    components: {
        BasicComponent,
        RefComponent,
        ComputedComponent,
        LifeCircleComponent,
        WatchComponent,
        Ref,
        PropsAndEvents,
        InjectComponent,
        NextTick
    }
}
</script>

<style>

</style>
