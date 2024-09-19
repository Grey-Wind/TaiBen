<template>
  <div>
    <h1>青衣台本搜索站</h1>
    <input class="search-box" v-model="query" @keyup.enter="search" placeholder="搜索台本..." />
    <button class="search-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
        <path
          d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7 14 5 12.01 5 9.5 5 7.99 6.01 6 7 4.99 7 3.5 7 1.99 8.01 0 9.5 0 11 0 12.01 1.01 13 2.5 13 4.5 13 6.01 13 7 12.01 11 9.5 11 7.99 11 6.01 9.99 3 7 3z" />
      </svg>
    </button>
    <ul>
      <li v-for="novel in results" :key="novel._id">{{ novel.title }} by {{ novel.author }}</li>
    </ul>
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
      const response = await axios.get(`https://taiben-backend.qingyi-studio.top/search?query=${this.query}`);
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
  width: 50px;
  height: 41px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px;
  font-size: 16px;
  background-color: #ccc;
  margin-left: 5px;
  position: relative; /* 添加定位属性 */
  top: 18px; /* 向下移动 20px */
}

</style>