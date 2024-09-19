<template>
  <div>
    <h1>青衣台本搜索站</h1>
    <input class="search-box" v-model="query" @keyup.enter="search" placeholder="搜索台本..." />
    <button class="search-button" @click="search">
      <span style="font-size: larger;">🔍</span>
    </button>
    <ul>
      <li v-for="novel in results" :key="novel._id">{{ novel.title }} by {{ novel.author }}</li>
    </ul>
    <p v-if="results.length === 0 && query">No results found for "{{ query }}".</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      query: '',
      results: []
    };
  },
  methods: {
    async search() {
      const response = await axios.get(`/search?query=${this.query}`);
      this.results = response.data;
    }
  }
};
</script>

<style lang="css">
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
  top: 1px; /* 向下移动 20px */
}

</style>