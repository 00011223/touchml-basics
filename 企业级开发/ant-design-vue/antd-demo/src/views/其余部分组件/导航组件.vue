<script setup>
// 菜单点击事件
function menuClick({item, key, keyPath}) {
    console.log(item)
    console.log(key)
    console.log(keyPath)

    if (key === '0') {
        console.log('item1 被点击了')
    } else if (key === '1') {
        console.log('item2 被点击了')
    }
}

// 返回事件
function back() {
    console.log('返回')
}
</script>

<template>
    <div>
        <!-- 下拉菜单
            trigger 触发方式
        -->
        <a-dropdown :trigger="['click']">
            <!-- 显示的按钮 -->
            <!--            <a class="ant-dropdown-link" @click.prevent>
                            Click me
                            <DownOutlined />
                        </a>-->
            <a-button type="primary">菜单</a-button>

            <template #overlay>
                <a-menu @click="menuClick">
                    <a-menu-item key="0">
                        item1
                    </a-menu-item>
                    <a-menu-item key="1">
                        item2
                    </a-menu-item>
                </a-menu>
            </template>
        </a-dropdown>

        <!-- 页头 -->
        <a-page-header
            style="border: 1px solid rgb(235, 237, 240)"
            title="这是标题"
            sub-title="这是副标题"
            @back="back"
        />
    </div>
</template>

<style scoped>

</style>
