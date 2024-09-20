<template>
    <div class="container">
        <li class="item">
            <h3>
                <router-link :to="{ name: 'NovelDetail', query: { id: result._id, url: result.contentUrl } }">
                    {{ result.title }}
                </router-link>
            </h3>
            <p>
                <span>by {{ result.author }}</span>
            </p>
            <p>
                <span>简介：{{ result.description }}</span>
            </p>
        </li>
        <br>
    </div>
</template>

<script>
export default {
    props: {
        result: {
            type: Object,
            default: () => ({}), // 添加默认值
        },
    },
    name: 'ResultItem'
};
</script>

<style lang="css" scoped>
li {
    left: 20%;
    list-style: none;
}

a {
    color: #000;
    text-decoration: none;
}

a:hover {
    color: grey;
    text-decoration: underline;
}
</style>

<style lang="css" scoped>
.container {
    align-items: left;
    width: 60%;
    /* 总宽度为100% - 左右各20% */
    margin: 0 auto;
    /* 上下外边距为0，左右自动 */
    margin-left: 13%;
    /* 向左偏移 */
}

.item {
    text-align: left;
    border: 2px solid darkgray;
    border-radius: 10px;
    background-color: rgb(247, 247, 247);
    padding: 1% 2%;
    padding-top: 0.5%;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    /* 添加阴影效果 */
}
</style>
