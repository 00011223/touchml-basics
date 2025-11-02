<script setup>
// 1. 引入echarts
import * as echarts from 'echarts'
import {onMounted, reactive, ref} from 'vue'

const chartRoot = ref(null)
const echartsInstance = ref(null)
// 4. 声明 option 配置参数
const option = reactive({
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'line',
            symbol: 'triangle',
            symbolSize: 20,
            lineStyle: {
                color: '#5470C6',
                width: 4,
                type: 'dashed'
            },
            itemStyle: {
                borderWidth: 3,
                borderColor: '#EE6666',
                color: 'yellow'
            }
        }
    ]
})

// 挂载完成后初始化 echarts
onMounted(() => {
    // 3. 初始化
    echartsInstance.value = echarts.init(chartRoot.value)
    // 5. 设置并渲染
    echartsInstance.value.setOption(option)
})
</script>

<template>
    <div>
        <!-- 2. 添加根节点 -->
        <div ref="chartRoot" id="charts" style="height: 500px;"></div>
    </div>
</template>

<style scoped>

</style>
