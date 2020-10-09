<template>
    <div class="bot">
        <my-tabs/>
        <router-view></router-view>
    </div>
</template>
<script>
import MyTabs from './Tabs.vue';

export default {
  data() {
    return {};
  },
  components: {
    MyTabs,
  },
  computed: {},
  methods: {},
};
</script>
<style lang="less" scoped>
.bot{
    width: 100%;
    height: 300px;
    position: relative;
    top: -35px;
    border-radius: 6px;
    background-color: #fff;
}
</style>
