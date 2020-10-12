<template>
    <div class="photography">
        <van-nav-bar
        title="杭州相关图片">
            <template #left>
                <span @click="back">X</span>
            </template>
        </van-nav-bar>
    </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="less" scoped>
.photography{
    z-index: 99;
    background-color:  #F8F9F4;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    min-height: 812px;
    .van-nav-bar{
        font-weight: 600;
    }
    .van-nav-bar__title{
        font-weight: 600;
        color: red;
    }
}
</style>
