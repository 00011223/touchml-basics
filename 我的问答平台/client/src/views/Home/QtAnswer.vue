<script setup>
import {reactive, ref} from 'vue'

const tableData = ref([
    {
        _id: '1',
        name: 'name1',
        done: true,
        score: 66
    },
    {
        _id: '2',
        name: 'name2',
        done: false,
        score: 88
    },
])
const columns = [
    {
        title: '序号',
        dataIndex: '_id',
        key: '_id'
    },
    {
        title: '问卷名',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: '是否交卷',
        dataIndex: 'done',
        key: 'done'
    },
    {
        title: '分数',
        dataIndex: 'score',
        key: 'score'
    },
    {
        title: '操作',
        key: 'op'
    },
]
const model = reactive({
    name: ''
})
// 分页配置
const pagination = reactive({
    // 分页组件的位置
    position: ['bottomCenter'],
    current: 1, // 当前页
    defaultPageSize: 10, // 默认每页显示多少条数据
    pageSize: 10, // 当前每页显示多少条数据
    pageSizeOptions: ['10', '30', '50'], // 每页显示数据量的选项
    showQuickJumper: true, // 是否显示快捷跳转框
    showSizeChanger: true, // 是否显示每页显示数量的选项框
    total: tableData.value.length, // 总数据量
    showTotal: (total, range) => {
        // 显示总数据量
        return `总共 ${total} 条` // 返回的内容将显示到分页上
    }
})
</script>

<template>
    <div class="animated-container">
        <a-card size="small">
            <a-form layout="inline" :model="model">
                <a-form-item label="问卷名" name="name">
                    <a-input v-model:value.trim="model.name"></a-input>
                </a-form-item>
                <a-button html-type="submit">查询</a-button>
            </a-form>
        </a-card>
        <a-table :data-source="tableData" :columns="columns" :pagination="pagination">
            <template #bodyCell="{column, record}">
                <template v-if="column.key === 'done'">
                    <a-tag v-if="record.done" color="green">已交卷</a-tag>
                    <a-tag v-else color="red">未交卷</a-tag>
                </template>
                <template v-else-if="column.key === 'op'">
                    <a-space>
                        <a-button type="primary">查看</a-button>
                    </a-space>
                </template>
            </template>
        </a-table>
    </div>
</template>

<style scoped>

</style>
