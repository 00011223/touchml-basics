<template>
    <div>
        <div ref="charts" style="height: 500px"></div>
    </div>
</template>

<script>
import {defineComponent} from 'vue'
import * as echarts from 'echarts'

export default defineComponent({
    data() {
        return {
            // echartsInstance: null,
            option: {
                // 图例
                legend: {
                    data: ['重百', '永辉']
                },
                // 调整图表位置的配置
                grid: {
                    top: 100,
                    left: 200,
                    right: 200
                },
                // 标题
                title: {
                    show: false,
                    text: '重百永辉销售对比图',
                    subtext: '副标题',
                    textAlign: 'center',
                    left: 'center',
                    top: 50
                },
                // 横轴
                xAxis: {
                    // 轴名称
                    name: '产品分类',
                    // 轴类型
                    // category 类目轴
                    type: 'category',
                    // 轴数据
                    data: ['日化', '电器', '副食', '冻货', '水果', '小商品', '床上用品']
                },
                // 竖轴
                yAxis: {
                    name: '销量(单位: 件)',
                    // 轴类型
                    // value 值轴
                    type: 'value'
                },
                // 数据系列
                series: [
                    // 每个数组成员是一个系列的数据
                    {
                        // 系列名
                        name: '重百',
                        // 值轴的数据
                        data: [120, 200, 150, 80, 70, 110, 130],
                        // 系列类型，影响图表
                        // bar line pie
                        type: 'bar',
                        // 是否显示背景
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(180, 180, 180, 0.2)'
                        },
                        // 显示在图上的文字标签
                        label: {
                            show: true,
                            position: 'top',
                            rotate: 270
                        },
                        // 每个柱条的配置
                        itemStyle: {
                            color: '#f00',
                            shadowColor: 'rgba(0, 0, 0, 0.8)',
                            shadowBlur: 30
                        }
                    },
                    {
                        name: '永辉',
                        data: [90, 150, 120, 100, 60, 48, 110],
                        type: 'bar',
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(180, 180, 180, 0.2)'
                        }
                    },
                ],
                // 鼠标悬停提示
                tooltip: {
                    // 格式化提示显示的内容
                    formatter: `<span style="color: #f00;">系列: {a}</span><br/>类名: {b}<br/>值: {c}`
                }
            },
        }
    },
    mounted() {
        this.echartsInstance = echarts.init(this.$refs.charts)
        this.echartsInstance.setOption(this.option)
    }
})
</script>

<style scoped>

</style>
