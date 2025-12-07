<script setup>
import {reactive, ref} from 'vue'

const activeKey = ref('my')
const tableData = ref([
    {
        _id: '1',
        name: 'name1',
    }
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
        title: '操作',
        key: 'op'
    },
]
const model = reactive({
    name: ''
})
const listData = ref([
    {
        name: 'name'
    }
])

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

function onActiveKeyChange(key) {
    activeKey.value = key
}
</script>

<template>
    <div class="animated-container">
        <a-card size="small">
            <a-tabs v-model:active-key="activeKey" @change="onActiveKeyChange">
                <a-tab-pane key="my" tab="我的问卷">
                    <a-form layout="inline" :model="model" style="margin-bottom: 16px;">
                        <a-form-item label="问卷名" name="name">
                            <a-input v-model:value.trim="model.name"></a-input>
                        </a-form-item>
                        <a-button html-type="submit">查询</a-button>
                    </a-form>
                    <a-table :data-source="tableData" :columns="columns" :pagination="pagination">
                        <template #bodyCell="{column, record}">
                            <template v-if="column.key === 'op'">
                                <a-space>
                                    <a-button>发布</a-button>
                                    <a-button type="primary">查看</a-button>
                                </a-space>
                            </template>
                        </template>
                    </a-table>
                </a-tab-pane>
                <a-tab-pane key="published" tab="已发布">
                    <a-list item-layout="horizontal" :data-source="listData">
                        <template #renderItem="{ item }">
                            <a-list-item>
                                <a-list-item-meta>
                                    <template #title>
                                        <div>问卷名</div>
                                    </template>
                                </a-list-item-meta>
                                <template #actions>
                                    <a-space>
                                        <a-button danger>关闭</a-button>
                                        <a-button type="primary">查看</a-button>
                                    </a-space>
                                </template>

                                <div>
                                    {{item.name}}
                                </div>
                            </a-list-item>
                        </template>
                    </a-list>
                </a-tab-pane>
            </a-tabs>
        </a-card>
    </div>
</template>

<style scoped>
.ant-form-item {
    margin-right: 8px;
}
</style>
