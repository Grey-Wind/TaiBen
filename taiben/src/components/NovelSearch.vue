<template>
  <br>
  <div>
    <h1>搜索台本</h1>
    <input class="search-box" v-model="query" @keyup.enter="search" placeholder="搜索台本..." />
    <button class="search-button" @click="search">
      <span style="font-size: larger;">🔍</span>
    </button>
    
    <div class="search-options">
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
    
    <ul>
      <li v-for="novel in results" :key="novel._id">{{ novel.title }} by {{ novel.author }}</li>
    </ul>
    <p v-if="results.length === 0 && query">未找到 "{{ query }}" 的结果。</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      query: '',
      results: [],
      searchType: 'title', // 默认搜索类型为书名
    };
  },
  methods: {
    async search() {
      if (!this.query) return; // 如果没有输入查询，则不执行搜索

      try {
        const response = await axios.get(`/search?query=${this.query}&type=${this.searchType}`);
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
  width: 700px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px;
  font-size: 16px;
}

.search-button{
  width: 45px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px;
  font-size: 16px;
  background-color: #ccc;
  margin-left: 5px;
  position: relative; /* 添加定位属性 */
  top: 2px; /* 向下移动 */
}

.search-options {
  margin: 10px 0;
}
</style>