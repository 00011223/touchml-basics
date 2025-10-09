<script setup>
// 知识点
// 基础表格的创建
//    1. 绑定 dataSource 和 columns 属性
//    2. 修改自定义 rowKey
// 自定义单元格
// checkbox 多行选择
// 分页表格

import {reactive, ref} from 'vue'

const tableData = ref([
    {
        id: 1,
        name: '张三',
        sex: 'male',
        clazz: '一班',
        info: {
            balance: 10
        },
    },
    {
        id: 2,
        name: '李四',
        sex: 'female',
        clazz: '二班',
        info: {
            balance: 20
        }
    },
    {
        id: 3,
        name: '老王',
        sex: 'other',
        clazz: '三班',
        info: {
            balance: 30
        }
    },
])

const columns = [
    {
        // 表头名
        title: '序号',
        // 数据索引
        // dataIndex 代表读值的路径
        dataIndex: 'id',
        // 每个字段的标识 影响循环渲染的元素排序
        key: 'id'
    },
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex'
    },
    {
        title: '班级',
        dataIndex: 'clazz',
        key: 'clazz'
    },
    {
        title: '金额',
        // dataIndex 为数组时，可以用于检索对象属性
        dataIndex: ['info', 'balance'],
        key: 'balance'
    },
    {
        title: '操作',
        key: 'op'
    },
]

// selection 用于保存勾选的id数组
const selection = ref([])

// 多选项的配置
const rowSelection = {
    // 选项变化事件
    onChange(selectedRowKeys, selectedRows) {
        // console.log(selectedRowKeys)
        // console.log(selectedRows)
        selection.value = selectedRowKeys
    },
    // 选项选择事件
    onSelect(record, selected, selectedRows, nativeEvent) {
        // // 当前选择的数据对象
        // console.log(record)
        // // 选择状态
        // console.log(selected)
        // // 被选中的行数据
        // console.log(selectedRows)
        // // 原生事件对象
        // console.log(nativeEvent)
    },
    // 全选事件
    onSelectAll(selected, selectedRows, changeRows) {
        // 全选按钮的勾选状态
        console.log(selected)
        // 选中的行数据
        console.log(selectedRows)
        // 选择发生变化的行数据
        console.log(changeRows)
    }
}

// 分页配置
const pagination = reactive({
    // 分页组件的位置
    position: ['bottomCenter'],
    // 其余配置参考 pagination
    // 其中最重要的属性有: current pageSize total
    // https://www.antdv.com/components/pagination-cn/#API
    current: 1, // 当前页
    defaultPageSize: 2, // 默认每页显示多少条数据
    pageSize: 2, // 当前每页显示多少条数据
    pageSizeOptions: ['1', '2'], // 每页显示数据量的选项
    showQuickJumper: true, // 是否显示快捷跳转框
    showSizeChanger: true, // 是否显示每页显示数量的选项框
    total: tableData.value.length, // 总数据量
    showTotal: (total, range) => {
        // 显示总数据量
        // console.log(total) // 总数据量
        // console.log(range)
        return `总共 ${total} 条` // 返回的内容将显示到分页上
    }
})

function removeAll() {
    console.log(selection)
}

// 表格的变化事件
function onTableChange(_pagination) {
    // _pagination 当前分页的数据值，包括 当前多少页 当前每页显示多少条数据
    console.log(_pagination)
    // 重新赋值分页参数
    pagination.current = _pagination.current
    pagination.pageSize = _pagination.pageSize

    // 注意:  在此处可以发起网络请求拉去新的数据
}
</script>

<template>
    <div>
        <h1>学生信息表</h1>

        <h2>基础表格</h2>

        <!--
            data-source: 数据源
            columns: 列配置
         -->
        <a-table :data-source="tableData" :columns="columns"></a-table>

        <h2>自定义单元格</h2>

        <a-table :data-source="tableData" :columns="columns">
            <!-- headerCell 表头插槽 -->
            <template v-slot:headerCell="{column}">
                <template v-if="column.key === 'sex'">
                    <span style="color: #ff0; font-weight: bolder">{{ column.title }}</span>
                </template>
            </template>

            <!-- bodyCell 表格数据体插槽
                column 列数据
                record 当前行数据
             -->
            <template #bodyCell="{column, record}">
                <template v-if="column.key === 'sex'">
                    <a-tag v-if="record.sex === 'female'" color="pink">女</a-tag>
                    <a-tag v-else-if="record.sex === 'male'" color="blue">男</a-tag>
                    <a-tag v-else color="green">其他</a-tag>
                </template>

                <template v-else-if="column.key === 'op'">
                    <a-space>
                        <a-button>编辑</a-button>
                        <a-button type="primary" danger>删除</a-button>
                    </a-space>
                </template>
            </template>
        </a-table>

        <h2>多行选择</h2>
        <div>
            <a-button type="primary" danger @click="removeAll">批量删除</a-button>
        </div>
        <!-- row-key: 每组数据的唯一标识 -->
        <a-table :data-source="tableData" :columns="columns" row-key="id" :row-selection="rowSelection"></a-table>

        <h2>分页表格</h2>

        <a-table :data-source="tableData" :columns="columns" :pagination="pagination" @change="onTableChange"></a-table>
    </div>
</template>

<style scoped>

</style>
