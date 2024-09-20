<template>
    <li>
        <router-link :to="{ name: 'NovelDetail', query: { id: result._id, url: result.contentUrl } }">
            {{ result.title }}
        </router-link>
        <p>{{ result.description }}</p>
        <span>by {{ result.author }}</span>
    </li>
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