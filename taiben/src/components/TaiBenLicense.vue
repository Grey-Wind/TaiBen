<template>
    <div class="taiben-license">
        <h1>License</h1>
        <div class="content">
            <p>Copyright 2024, Grey Wind</p>
            <p>特此免费授予任何人获得本软件和软件相关文档文件的副本，允许使用、复制、修改、合并、发布本软件副本的权利，并允许提供本软件的人这样做，但须符合以下条件:</p>
            <p>版权声明和本许可声明应包含在本软件的所有副本或主要部分中。</p>
            <p>本软件“按原样”提供，不提供任何形式的明示或暗示的保证，包括但不限于适销性、适用于特定目的和不侵权的保证。在任何情况下，作者或版权所有人都不承担任何索赔、损害赔偿或其他责任，无论是在合同诉讼、侵权行为或其他诉讼中，由软件、软件的使用或其他交易引起的或与之有关的。
            </p>
            <p>以上所有条款不包括内部收录的文章，<strong>收录的文章的版权由原作者所有！禁止任何非授权的台本转载！</strong></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TaiBenLicense'
};
</script>

<style scoped>
.taiben-license .content {
    display: flex;
    flex-direction: column;
    align-items: center; /* 垂直居中 */
}

.content p {
    width: 60%; /* 或者用你希望的宽度 */
    margin-left: auto;
    margin-right: auto;
    text-align: left;
}
</style>