<template>
    <div>
        <hang-header/>
        <hang-mid/>
        <hang-bot/>
    </div>
</template>
<script>
import HangHeader from '../components/hangzhou/HangHeader.vue';
import HangMid from '../components/hangzhou/HangMid.vue';
import HangBot from '../components/hangzhou/HangBot.vue';

export default {
  components: {
    HangHeader,
    HangMid,
    HangBot,
  },
};
</script>
<style lang="less" scoped>
div{
  padding-bottom: 50px;
  background-color: #ccc;
}
</style>
