<script setup>
import {ref, computed, onMounted, watch} from 'vue'

// 股票数组
const gp = ref([
    {
        name: '任天堂',
        price: 1,
        down: 0.2,
        up: 0.3,
        count: 0
    },
    {
        name: '索尼',
        price: 5,
        down: 1.2,
        up: 1.3,
        count: 0
    },
    {
        name: '微软',
        price: 10,
        down: 2,
        up: 2.5,
        count: 0
    },
])

// 用户余额
const balance = ref(1000)
// 用户资产
const assets = computed(() => {
    return myGp.value.length > 0 ? (balance.value + myGp.value.map(item => item.totalPrice).reduce((p, n) => p + n)) : balance.value
})

// 我购买的股票数组
const myGp = ref([])

// 通过股票名称获取当前价格
// 返回一个计算属性
function getCurrentPriceComputed(name) {
    let i = gp.value.findIndex(item => item.name === name)
    return computed(() => {
        return gp.value[i].price
    })
}

// 获取当前买了多少股的计算属性
// function getCountComputed(name) {
//     let i = myGp.value.findIndex(item => item.name === name)
//     return computed(() => {
//         return myGp.value[i].count
//     })
// }

// 计算市值的计算属性
// function getTotalPriceComputed(name) {
//     let i = myGp.value.findIndex(item => item.name === name)
//     return computed(() => {
//         return myGp.value[i].count * myGp.value[i].currentPrice
//     })
// }


// 买股票
// name: 股票名
function buy(name) {
    // 判断当前是否已经有该name的股票
    let i = myGp.value.findIndex(item => item.name === name)
    if (i !== -1) {
        alert(`${name} 股票已持有`)
        return
    }
    i = gp.value.findIndex(item => item.name === name)
    let {count, price} = gp.value[i]

    let total = count * price

    // 判断余额是否足够支付
    if (balance.value < total) {
        alert('余额不足')
        return
    } else {
        // 扣钱
        balance.value -= total
    }

    // 创建一个我的股票数据
    let newGp = {
        name,
        count: Number(count),
        // 买入价格
        buyPrice: Number(price),
        // 当前价格
        currentPrice: getCurrentPriceComputed(name),
        // 市值
        totalPrice: 0,
        // 自动卖出的最低价格
        lowPrice: 0,
        // 自动卖出的最高价格
        highPrice: 0
    }

    newGp.totalPrice = (() => computed(() => newGp.count * newGp.currentPrice.value))()

    console.log(newGp)

    myGp.value.push(newGp)

    // 清空输入框内容
    gp.value[i].count = 0
}

// 卖出
function sell(name) {
    let i = myGp.value.findIndex(item => item.name === name)
    console.log(myGp.value[i].totalPrice)
    // 充值市值
    balance.value += myGp.value[i].totalPrice
    // 删除股票
    myGp.value.splice(i, 1)
}

// 用于存储监听相关数据
const watchs = {
    // key: 股票名
    // '任天堂': {
    //     cancelFn: '取消监听器的函数',
    //     lowPrice: '最低价格',
    //     highPrice: '最高价格'
    // }
}

// 开启或关闭自动卖出功能
// name: 股票名
function autoSell(name) {
    // 判断 watchs 是否包含对应股票名
    if (watchs[name]) {
        // 包含就取消监听
        watchs[name].cancelFn()
        delete watchs[name]
    } else {
        // 查询持有的股票信息
        let currentGp = myGp.value.find(item => item.name === name)
        // 不含就添加监听
        const cancelFn = watch(() => {
            // 查询当前股票信息
            let currentGp = gp.value.find(item => item.name === name)
            return currentGp.price
        }, (newVal) => {

            if (newVal <= currentGp.lowPrice || newVal >= currentGp.highPrice) {
                // 卖股票
                sell(name)
                // 递归调用取消自己的监听器
                autoSell(name)
            }
        })

        // 记录数据到watchs中
        watchs[name] = {
            cancelFn,
            lowPrice: Number(currentGp.lowPrice),
            highPrice: Number(currentGp.highPrice)
        }
    }
}

onMounted(() => {
    // 开启股票自动波动
    setInterval(() => {
        gp.value.forEach(item => {
            // 随机涨跌
            // sign 为负数代表本次为跌 否则为涨
            let sign = Math.random() > 0.5 ? -1 : 1
            // 本次的波动值
            let step = sign === 1 ? (Math.random() * item.up) : (Math.random() * item.down)
            // 赋值新的价格
            item.price += sign * step
            item.price = Number(item.price.toFixed(2))
        })
    }, 2000)
})
</script>

<template>
    <div>
        <table border>
            <thead>
            <tr>
                <th>股票</th>
                <th>价格</th>
                <th>down</th>
                <th>up</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in gp" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.down }}</td>
                <td>{{ item.up }}</td>
                <td>
                    <input type="text" v-model="item.count">
                    <button @click="buy(item.name)">买入</button>
                </td>
            </tr>
            </tbody>
        </table>

        <h3>用户信息</h3>
        <div>
            余额: {{ balance }} &nbsp;&nbsp;&nbsp;&nbsp; 资产: {{ assets }}
        </div>
        <h3>拥有股票</h3>
        <table border>
            <thead>
            <tr>
                <th>股票</th>
                <th>股数</th>
                <th>买入价格</th>
                <th>当前价格</th>
                <th>市值</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in myGp" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.count }}</td>
                <td>{{ item.buyPrice }}</td>
                <td>{{ item.currentPrice }}</td>
                <td>{{ item.totalPrice }}</td>
                <td>
                    <button @click="autoSell(item.name)">{{ watchs[item.name]? '取消': '自动卖出' }}</button>
                    <input type="text" placeholder="最低金额" v-model="item.lowPrice">
                    <input type="text" placeholder="最高金额" v-model="item.highPrice">
                    <button @click="sell(item.name)">全部卖出</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>
