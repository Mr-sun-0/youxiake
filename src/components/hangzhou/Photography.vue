<template>
    <div class="photography">
        <van-nav-bar
        title="杭州相关图片">
            <template #left>
                <van-icon name="cross" @click="back"/>
            </template>
        </van-nav-bar>
        <van-tabs v-model="active">
          <van-tab title="摄影作品">作品</van-tab>
          <van-tab title="游记图片">游记</van-tab>
      </van-tabs>
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
        .van-icon-cross{
          font-weight: 600;
        }
        .van-nav-bar__title{
          font-weight: 600;
        }
    }
}
</style>
