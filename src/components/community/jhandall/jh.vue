<template>
  <div>
    <section class="sec">
        <div class="cntext">
           <comm-fiv/>
           <comm-fiv/>
           <comm-fiv/>
           <comm-fiv/>
        </div>
    </section>
  </div>
</template>
<script>
import CommFiv from '../CommFivepic.vue';

export default {
  components: {
    CommFiv,
  },
};

</script>
<style lang="less" scoped>
.sec {
  width: 100%;
  height: 100%;
  background: white;
  .cntext{
      width: 95%;
      margin: auto;
      height: 100%;
      background: white;
  }
}
</style>
