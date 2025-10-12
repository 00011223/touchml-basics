<script setup>

</script>

<template>
    <div>
        <a-card>
            <!-- 锚点
                路由模式不支持hash模式
             -->
            <a-anchor>
                <a-anchor-link href="#one" title="one" target="_blank"/>
                <a-anchor-link href="#two" title="two">
                    <a-anchor-link href="#three" title="three"/>
                </a-anchor-link>
            </a-anchor>
        </a-card>
        <div class="content">
            <div id="one">1</div>
            <div id="two">2</div>
            <div id="three">3</div>
        </div>

        <!-- 返回顶部 -->
        <a-back-top>
            <a-button type="primary">回到顶部</a-button>
        </a-back-top>
    </div>
</template>

<style scoped>
.content {
    /*height: 2000px;*/
}

#one {
    height: 1000px;
}

#two {
    height: 1500px;
}

#three {
    height: 500px;
}
</style>
