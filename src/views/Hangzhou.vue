<template>
    <div>
        <hang-header/>
        <hang-mid/>
    </div>
</template>
<script>
import HangHeader from '../components/hangzhou/HangHeader.vue';
import HangMid from '../components/hangzhou/HangMid.vue';

export default {
  components: {
    HangHeader,
    HangMid,
  },
};
</script>
