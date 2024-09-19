<template>
  <div id="app">
    <TopBar class="topbar"/>
    <router-view class="view" />
  </div>
</template>

<script>
import TopBar from './views/TopBar.vue';

export default {
  name: 'App',
  components: {
    TopBar,
  },
  mounted() {
    document.title = '青衣台本站';
  },
}
</script>

<style lang="css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-top: 10px; /* 为了给 TopBar 和 view 之间添加间隔 */
}
</style>
