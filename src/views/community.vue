<template>
    <div>
        <hang-header/>
        <hang-mid/>
    </div>
</template>
<script>
import HangHeader from '../components/community/CommHeader.vue';
import HangMid from '../components/community/CommMid.vue';

export default {
  components: {
    HangHeader,
    HangMid,
  },
};
</script>
