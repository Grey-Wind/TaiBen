<template>
  <div id="app">
    <NovelSearch />
  </div>
</template>

<script>
import NovelSearch from './components/NovelSearch.vue';

export default {
  components: {
    NovelSearch,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
