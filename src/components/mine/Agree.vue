<template>
    <div class="agree">
         <van-nav-bar
        title="协议服务"
        left-arrow
        @click-left="onClickLeft"
        />
        <div class="content">
           服务协议的确认和接受
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    onClickLeft() {
    //   console.log(1);
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="less" scoped>
.agree{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 99;
}
.content{
    padding: 0 10px;
}
</style>
