<template>
    <div class="index-wrap">
      <header>
        <index-header />
        <index-nav />
        <index-banner />
      </header>
      <index-midnav />
      <index-function />
      <index-recommend/>
      <index-action />
      <index-minority />
    </div>
</template>

<script>
import IndexHeader from '@/components/index/IndexHeader.vue';
import IndexNav from '@/components/index/IndexNav.vue';
import IndexBanner from '@/components/index/IndexBanner.vue';
import IndexMidnav from '@/components/index/IndexMidnav.vue';
import IndexFunction from '@/components/index/IndexFunction.vue';
import IndexRecommend from '@/components/index/IndexRecommend.vue';
import IndexAction from '@/components/index/IndexAction.vue';
import IndexMinority from '@/components/index/IndexMinority.vue';

export default {
  components: {
    IndexHeader,
    IndexNav,
    IndexBanner,
    IndexMidnav,
    IndexFunction,
    IndexRecommend,
    IndexAction,
    IndexMinority,
  },
  mounted() {
    this.$store.dispatch('getIndexData');
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
