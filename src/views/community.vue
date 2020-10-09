<template>
    <div>
        <comm-header/>
        <comm-mid/>
        <comm-fiv/>
    <comm-cepic/>
     <comm-fiv/>
    </div>
</template>
<script>
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
};
</script>
