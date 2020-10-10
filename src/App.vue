<template>
  <div id="app">
    <router-view/>
    <app-bottom />
  </div>
</template>

<script>
import AppBottom from '@/components/public/AppBottom.vue';

export default {
  components: {
    AppBottom,
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color:#2c3e50;
  background:#ffffff;
}
</style>
