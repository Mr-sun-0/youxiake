<template>
    <mine-header :mineRecommend="mineRecommend"/>
</template>
<script>
import MineHeader from '@/components/mine/MineHeader.vue';
import { getMineRecommend } from '../utils/api';

export default {
  data() {
    return {
      mineRecommend: [],
    };
  },
  components: {
    MineHeader,
  },
  mounted() {
    getMineRecommend().then(((res) => {
      console.log(res.data);
      this.mineRecommend = res.data;
    }));
  },
};
</script>
