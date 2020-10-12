<template>
    <div>

    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <mine-header/>
    </van-pull-refresh>
    </div>
</template>
<script>
import MineHeader from '@/components/mine/MineHeader.vue';
import { Toast } from 'vant';

export default {
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    MineHeader,
  },
  mounted() {
    this.getMineRecommend();
  },

  methods: {
    getMineRecommend() {
      this.$store.dispatch('getMineRecommend');
    },
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
      }, 1000);
    },
  },

};
</script>
