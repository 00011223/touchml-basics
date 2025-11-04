<script setup>
// 知识点 https://echarts.apache.org/zh/api.html#echartsInstance
// setOption 动态更新数据
// resize 函数动态重置图像大小
// showLoading hideLoading 来开关加载状态
// getDataURL 导出图片
// clear 清空图
// dispose 销毁实例
// action 模拟触发图表功能
// 接收事件

import * as echarts from 'echarts'
import {onMounted, onUnmounted, ref} from 'vue'

const value = ref(0)
const chart = ref(null)
window.option = {
    title: {
        text: 'World Population'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
    },
    series: [
        {
            name: '2011',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
            name: '2012',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
    ]
}
window.echartsInstance = null
window.resizeName = null
onMounted(() => {
    echartsInstance = echarts.init(chart.value)
    echartsInstance.setOption(option)

    // 注册窗口事件
    window.addEventListener('resize', resizeName = () => {
        // 重置图像大小
        echartsInstance.resize()
    })

    // 给 echarts 添加事件
    echartsInstance.on('click', params => {
        // params 事件参数
        console.log(params)
    })
})

onUnmounted(() => {
    window.removeEventListener('resize', resizeName)
})

// 替换并更新图表数据
function modifyData() {
    option.series[0].data[0] = value.value
    // 调用 setOption 更新图
    echartsInstance.setOption(option)
}

function showLoading() {
    // 显示加载提示
    echartsInstance.showLoading()
}

function hideLoading() {
    // 隐藏加载提示
    echartsInstance.hideLoading()
}

function download() {
    // 获取图像的资源路径
    let url = echartsInstance.getDataURL()
    // 创建a标签来点击下载
    let a = document.createElement('a')
    a.href = url
    // download 可以赋值下载文件的名称
    a.download = 'test.png'
    a.click()
    a.remove()
}

function clear() {
    // 清空图像
    echartsInstance.clear()
}

function dispose() {
    // 销毁echarts实例对象
    echartsInstance.dispose()
}

function openTooltip() {
    echartsInstance.dispatchAction({
        // 要触发的 action 类型
        type: 'showTip',
        // 系列的 index，在 tooltip 的 trigger 为 axis 的时候可选。
        seriesIndex: 0,
        // 数据项的 index，如果不指定也可以通过 name 属性根据名称指定数据项
        dataIndex: 0,
        // 本次显示 tooltip 的位置。只在本次 action 中生效。
        // 缺省则使用 option 中定义的 tooltip 位置。
        position: ['50%', '50%'],
    })
}
</script>

<template>
    <div>
        <div ref="chart" style="height: 500px"></div>
        <div>
            <input type="number" v-model.number="value">
            <button @click="modifyData">替换数据</button>
            <button @click="showLoading">开启加载提示</button>
            <button @click="hideLoading">关闭加载提示</button>
            <button @click="download">导出图片</button>
            <button @click="clear">清空</button>
            <button @click="dispose">销毁实例</button>
            <button @click="openTooltip">通过action弹出tooltip</button>
        </div>
    </div>
</template>

<style scoped>

</style>
