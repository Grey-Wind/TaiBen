<template>
    <div class="bar-header">
        <div class="content">
            <h1><a href="https://taiben.qingyi-studio.top/">青衣台本站</a></h1>
            <router-link to="/search"><span>搜索</span></router-link>
            <router-link to="/license"><span>版权声明</span></router-link>
        </div>
    </div>
</template>

<style lang="css" scoped>
a {
    color: #000;
    text-decoration: none;
    outline: none;
}

.bar-header {
    position: fixed;
    /* 置顶 */
    top: 0;
    left: 0;
    /* 左侧从0开始 */
    right: 0;
    /* 右侧撑满 */
    display: flex;
    background-color: white;
    /* 背景颜色 */
    padding: 7px 0;
    /* 减小上下内边距，减少高度 */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    /* 阴影效果 */
}

.content {
    margin-left: 15%;
    /* 内部元素距离左侧15% */
    display: flex;
    /* 使用 Flexbox */
    align-items: center;
    /* 垂直居中 */
}

.content h1 {
    margin-right: 20px;
    /* 元素之间的间距 */
    font-size: 25px;
    /* 调整字体大小 */
}

.content router-link {
    margin-right: 20px;
    /* 元素之间的间距 */
}

.content span {
    color: DimGray;
    margin-right: 15px;
}
</style>

<script>
export default {
    name: 'TopBar'
};
</script>