# Echarts 简介和安装

## 简介

官网: <https://echarts.apache.org/zh/index.html>

echarts是一个数据可视化工具

数据可视化：用图表的形式反应一堆数据

AntV: 蚂蚁金服的可视化框架 G2 G6 L7

## 安装

### node.js项目安装echarts

```shell script
npm install echarts
```

### 原生js安装echarts

可以通过 [官网地址](https://echarts.apache.org/zh/download.html) 下载

还可以使用 `npm install echarts`, 在 `node_modules->echarts->dist` 目录中，复制出echarts.js文件即可

## 项目中的使用

### web原生项目

1. `<script src="js/echarts.js"></script>` 引入echarts
2. 声明一个echarts的根节点，类似于vue.js的根节点
3. 实例化echarts对象
4. 使用option对象配置echarts
5. 可以使用 setOption 来更新数据

### vue项目中使用echarts

1. `import echarts from 'echarts' // 引入echarts模块`
2. 使用 ref 声明根节点 `<div ref="myChart" style="height: 400px"></div>`
3. 在 `created` 中创建实例

    ```js
    created() {
        this.$nextTick(() => {
            let el = this.$refs.myChart
            // 实例化echarts对象
            this.myChart = echarts.init(el)
            // 使用options配置echarts
            this.myChart.setOption(this.options)
        })
    }
    ```

> 注意：创建实例的变量 `this.myChart` 和 `this.options` 均包含在 vue 对象的 data 中
