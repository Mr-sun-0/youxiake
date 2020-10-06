<template>
    <div>
      <header>
        <index-header />
        <index-nav />
        <index-banner />
        <index-midnav />
        <index-function />
      </header>
    </div>
</template>

<script>
import IndexHeader from '@/components/index/IndexHeader.vue';
import IndexNav from '@/components/index/IndexNav.vue';
import IndexBanner from '@/components/index/IndexBanner.vue';
import IndexMidnav from '@/components/index/IndexMidnav.vue';
import IndexFunction from '@/components/index/IndexFunction.vue';

export default {
  components: {
    IndexHeader,
    IndexNav,
    IndexBanner,
    IndexMidnav,
    IndexFunction,
  },
};
</script>

<style lang="less" scoped>
  header{
    height: 233px;
    background: linear-gradient(to bottom, #fedb39 90%,white 10%);
  }
</style>
