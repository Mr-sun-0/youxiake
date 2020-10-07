<template>
    <div>
        <index-header />
        <index-nav />
        <index-banner />
    </div>
</template>

<script>
import IndexHeader from '@/components/index/IndexHeader.vue';
import IndexNav from '@/components/index/IndexNav.vue';
import IndexBanner from '@/components/index/IndexBanner.vue';

export default {
  components: {
    IndexHeader,
    IndexNav,
    IndexBanner,
  },
};
</script>
