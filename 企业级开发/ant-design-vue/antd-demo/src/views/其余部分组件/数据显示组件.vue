<script setup>
import {ref} from 'vue'

const list = ref([
    {
        name: '张三',
        sex: 'male',
        age: 17
    },
    {
        name: '李四',
        sex: 'female',
        age: 24
    },
    {
        name: '老王',
        sex: 'other',
        age: 30
    },
])


// 走马灯变化事件
function onCarChange(current) {
    // 当前内容索引
    console.log(current)
}

// 当前选项卡的key
const currentTabKey = ref(1)

// 树状选择的数据
const treeData = ref([
    {
        title: '1',
        key: '1',
        children: [
            {
                title: '1-1',
                key: '1-1',
                children: [
                    {
                        title: '1-1-1',
                        key: '1-1-1',
                    }
                ]
            },
            {
                title: '1-2',
                key: '1-2'
            }
        ]
    },
    {
        title: '2',
        key: '2',
        children: [
            {
                title: '2-1',
                key: '2-1'
            },
            {
                title: '2-2',
                key: '2-2'
            }
        ]
    }
])

// 默认展开的key
const expandedKeys = ref(['2'])

// 已经选中高亮的key
const selectedKeys = ref([])

// 已经勾选的checkbox的key
const checkedKeys = ref([])

function showChecked(){
    console.log(selectedKeys.value)
    console.log(checkedKeys.value)
}
</script>

<template>
    <div>
        <a-card>
            hello world
        </a-card>

        <a-card hoverable title="标题" class="beauty">
            <template #extra><a href="#">more</a></template>
            <p>card content</p>
            <p>card content</p>
            <p>card content</p>
        </a-card>

        <!-- 走马灯 -->
        <a-carousel :after-change="onCarChange">
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
        </a-carousel>

        <!-- 空占位 -->
        <a-empty/>

        <!-- 列表 -->
        <a-list
            :data-source="list"
        >
            <!-- loadMore 预留给异步加载按钮的插槽 -->
            <!--            <template #loadMore>
                            <div
                                v-if="!initLoading && !loading"
                                :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }"
                            >
                                <a-button @click="onLoadMore">loading more</a-button>
                            </div>
                        </template>-->
            <template #renderItem="{ item }">
                <a-list-item>
                    <!-- actions 列表项右侧按钮区域 -->
                    <template #actions>
                        <a-button size="small" type="primary">编辑</a-button>
                        <a-button size="small" type="primary" danger>删除</a-button>
                    </template>
                    <a-list-item-meta
                        description="这是描述"
                    >
                        <template #title>
                            标题
                        </template>
                        <template #avatar>
                            {{ item.name }}
                        </template>
                    </a-list-item-meta>
                    <div>{{ `年龄: ${item.age}; 性别: ${item.sex}` }}</div>
                </a-list-item>
            </template>
        </a-list>


        <!-- 鼠标悬停提示 tooltip -->
        <a-tooltip>
            <template #title>
                这是 hello world 的提示信息
            </template>
            <span>
                hello world
            </span>
        </a-tooltip>

        <!-- 选项卡 -->
        <a-tabs v-model:activeKey="currentTabKey">
            <a-tab-pane :key="1" tab="选项卡 1">选项卡 1 的内容</a-tab-pane>
            <a-tab-pane :key="2" tab="选项卡 2">选项卡 2 的内容</a-tab-pane>
            <a-tab-pane :key="3" tab="选项卡 3">选项卡 3 的内容</a-tab-pane>
        </a-tabs>

        <!-- 标签 -->
        <div>
            <a-tag color="pink">pink</a-tag>
            <a-tag color="red">red</a-tag>
            <a-tag color="orange">orange</a-tag>
            <a-tag color="green">green</a-tag>
            <a-tag color="cyan">cyan</a-tag>
            <a-tag color="blue">blue</a-tag>
            <a-tag color="purple">purple</a-tag>
        </div>

        <!-- 树状选择
         expandedKeys: 展开的key
         -->
        <a-tree
            v-model:expandedKeys="expandedKeys"
            v-model:selectedKeys="selectedKeys"
            v-model:checkedKeys="checkedKeys"
            checkable
            :tree-data="treeData"
        >
            <template #title="{ title, key }">
                {{title}}
            </template>
        </a-tree>
        <a-button type="primary" @click="showChecked">查看选择的内容</a-button>
    </div>
</template>

<style scoped>
.beauty {
    width: 300px;
    border-radius: 15px;
}

/* For demo */
.ant-carousel :deep(.slick-slide) {
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
    color: #fff;
}
</style>
