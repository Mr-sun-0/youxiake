<template>
    <div class="city-list">
        <van-nav-bar
        title="选择城市"
        left-text=""
        right-text=""
        left-arrow
        @click-left="onClickLeft"
        />
    </div>
</template>
<script>

export default {
  data() {
    return {
      list: [],
    };
  },
  // mounted() {
  //   this.getList();
  // },
  // methods: {
  //   async getList() {
  //     console.log(2);
  //     const res = await getCitiesList();
  //     console.log(res);

  //   //   this.list = res;
  //   },
  //   // handleClick(it){
  //   //     // console.log(it);
  //   //     this.$store.commit('changeCity',it)
  //   //     this.$router.go(-1);//点击后 返回到原页面
  //   // },
  //   onClickLeft() {
  //     this.$router.go(-1);
  //   },
  // },
};
</script>
<style lang="less">
.van-nav-bar{
    background-color:#f7f7f7;
    .van-nav-bar__title{
        font-size: 18px;
        font-weight: 500;
    }
}
</style>
