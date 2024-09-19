<template>
  <div id="app">
    <TopBar />
    <router-view></router-view>
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
