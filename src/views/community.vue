<template>
<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
   <div>
        <comm-header/>
        <comm-mid/>
        <comm-fiv/>
    <comm-cepic/>
     <comm-fiv/>
    </div>
</van-pull-refresh>
</template>
<script>
import { Toast } from 'vant';
import CommHeader from '../components/community/CommHeader.vue';
import CommMid from '../components/community/CommMid.vue';
import CommFiv from '../components/community/CommFivepic.vue';
import CommCepic from '../components/community/Commcepic.vue';

export default {
  components: {
    CommHeader,
    CommMid,
    CommFiv,
    CommCepic,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
      }, 1000);
    },
  },
};
</script>
