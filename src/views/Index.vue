<template>
    <div class="index-wrap">
      <header>
        <index-header />
        <index-nav />
        <index-banner />
        <index-midnav />
      </header>
      <index-function />
      <index-recommend/>
      <index-action />
      <index-minority />
      <index-destination />
      <index-content />
      <router-view />
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
import IndexDestination from '@/components/index/IndexDestination.vue';
import IndexContent from '@/components/index/IndexContent.vue';

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
    IndexDestination,
    IndexContent,
  },
  mounted() {
    this.$store.dispatch('getIndexData');
  },
};
</script>

<style lang="less" scoped>
  .index-wrap{
    background:#f2f2f2;
    margin-bottom: 50px;
     header{
    background: linear-gradient(to bottom, #fedb39 70%,white 30%);
  }
  }
</style>
