<template>
  <div>
    <h1>青衣台本站</h1>
    <input class="search-box" v-model="query" @input="search" @keyup.enter="search" placeholder="搜索台本..." />
    <button class="search-button" @click="search">
      <span style="font-size: larger;">🔍</span>
    </button>

    <div class="search-settings">
      <div class="search-options">
        <h3>搜索类型</h3>
        <label>
          <input type="radio" value="title" v-model="searchType" />
          <span>书名</span>
        </label>
        <label>
          <input type="radio" value="author" disabled v-model="searchType" />
          <span style="color: grey;">作者</span>
          <span style="font-size: smaller; vertical-align: super;" title="暂不支持">ℹ</span>
        </label>
        <label>
          <input type="radio" value="tag" disabled v-model="searchType" />
          <span style="color: grey;">标签</span>
          <span style="font-size: smaller; vertical-align: super;" title="暂不支持">ℹ</span>
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

    <div class="search-results">
      <ul>
        <ResultItem v-for="result in results" :key="result._id" :result="result" />
      </ul>
      <p v-if="results.length === 0 && query">未找到 "{{ query }}" 的结果。</p>
      <!-- <SuperMarioLoading v-if="loading" /> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ResultItem from '../views/ResultItem.vue';
// import SuperMarioLoading from '../views/SuperMarioLoading.vue';

export default {
  components: {
    ResultItem,
  },
  data() {
    return {
      query: '',
      results: [],
      searchType: 'title',
      searchSource: 'site',
      // loading: false, // 添加加载状态
    };
  },
  methods: {
    async search() {
      if (!this.query) {
        this.results = [];
        return;
      }

      // this.loading = true; // 开始加载
      try {
        axios.defaults.withCredentials = true;
        const response = await axios.get(`https://taiben-backend.qingyi-studio.top/search?query=${this.query}&source=${this.searchSource}`);
        this.results = response.data;
      } catch (error) {
        console.error('搜索失败:', error);
      } finally {
        // this.loading = false; // 结束加载
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
  top: 2px;
  /* 向下移动 */
}

.search-settings {
  display: flex;
  justify-content: center;
  /* 居中对齐 */
  align-items: center;
  /* 垂直居中 */
  margin: 10px 0;
}

.search-options,
.source-options {
  display: flex;
  align-items: center;
  margin: 0 20px;
  /* 左右间距 */
  text-align: center;
  /* 内容居中 */
}

label {
  margin-right: 10px;
  /* 单选框和标签之间的间距 */
}
</style>