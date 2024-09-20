<template>
  <div>
    <h1>青衣台本站</h1>
    <input class="search-box" v-model="query" @keyup.enter="search" placeholder="搜索台本..." />
    <button class="search-button" @click="search">
      <span style="font-size: larger;">🔍</span>
    </button>

    <div class="search-settings">
      <div class="search-options">
        <h3>搜索类型</h3>
        <label>
          <input type="radio" value="title" v-model="searchType" />
          书名
        </label>
        <label>
          <input type="radio" value="author" v-model="searchType" />
          作者
        </label>
        <label>
          <input type="radio" value="tag" v-model="searchType" />
          标签
        </label>
      </div>

      <div class="source-options">
        <h3>搜索源</h3>
        <label>
          <input type="radio" value="site" v-model="searchSource" />
          <span>站点数据库</span>
        </label>
        <label>
          <input type="radio" value="twitter" v-model="searchSource" />
          <span>X (Twitter)</span>
        </label>
      </div>
    </div>

    <div>
        <ul>
            <ResultItem v-for="result in results" :key="result._id" :result="result" />
        </ul>
        <p v-if="results.length === 0 && query">未找到 "{{ query }}" 的结果。</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ResultItem from '../views/ResultItem.vue';

export default {
  components: {
    ResultItem,
  },
  data() {
    return {
      query: '',
      results: [],
      searchType: 'title', // 默认搜索类型为书名
      searchSource: 'site', // 默认搜索源为站点数据库
    };
  },
  methods: {
    async search() {
      if (!this.query) return; // 如果没有输入查询，则不执行搜索

      try {
        axios.defaults.withCredentials = true;
        const response = await axios.get(`https://taiben-backend.qingyi-studio.top/search?query=${this.query}&source=${this.searchSource}`);
        this.results = response.data;
      } catch (error) {
        console.error('搜索失败:', error);
      }
    },
  },
};
</script>

<style lang="css" scoped>
.search-box {
  width: 65%;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px;
  font-size: 16px;
}

.search-button {
  width: 45px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px;
  font-size: 16px;
  background-color: #ccc;
  margin-left: 5px;
  position: relative;
  /* 添加定位属性 */
  top: 0px;
  /* 向下移动 */
}

.search-settings {
  display: flex;
  justify-content: center; /* 居中对齐 */
  align-items: center; /* 垂直居中 */
  margin: 10px 0;
}

.search-options, .source-options {
  display: flex;
  align-items: center;
  margin: 0 20px; /* 左右间距 */
  text-align: center; /* 内容居中 */
}

label {
  margin-right: 10px; /* 单选框和标签之间的间距 */
}
</style>