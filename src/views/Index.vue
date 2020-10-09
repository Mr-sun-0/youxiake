<template>
    <div class="index-wrap">
      <header>
        <index-header />
        <index-nav />
        <index-banner />
      </header>
      <index-midnav />
      <index-function />
      <index-recommend :aroundLump='dataList.aroundLump'/>
    </div>
</template>

<script>
import IndexHeader from '@/components/index/IndexHeader.vue';
import IndexNav from '@/components/index/IndexNav.vue';
import IndexBanner from '@/components/index/IndexBanner.vue';
import IndexMidnav from '@/components/index/IndexMidnav.vue';
import IndexFunction from '@/components/index/IndexFunction.vue';
import IndexRecommend from '@/components/index/IndexRecommend.vue';
import { getData } from '../utils/api';

export default {
  components: {
    IndexHeader,
    IndexNav,
    IndexBanner,
    IndexMidnav,
    IndexFunction,
    IndexRecommend,
  },
  data() {
    return {
      dataList: [],
    };
  },
  mounted() {
    getData().then((res) => {
      if (res.data.msg === 'Succ') {
        this.dataList = res.data.data;
      }
    });
  },
};
</script>

<style lang="less" scoped>
  .index-wrap{
    background:#ddd;
    margin-bottom: 50px;
     header{
    height: 233px;
    background: linear-gradient(to bottom, #fedb39 90%,white 10%);
  }
  }
</style>
