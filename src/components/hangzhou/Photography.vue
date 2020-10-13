<template>
    <div class="photography">
        <van-nav-bar
        title="杭州相关图片">
            <template #left>
                <van-icon name="cross" @click="back"/>
            </template>
        </van-nav-bar>
        <van-tabs>
          <van-tab title="摄影作品">
            <li v-for="(item,index) in getImg" :key="index">
              <img :src="item.imgUrl" alt="">
              <p>{{item.title}}</p>
            </li>
          </van-tab>
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
  mounted() {
    this.getPhotoUrl();
  },
  computed: {
    getImg() {
      return this.$store.state.PhotographyList;
    },
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    getPhotoUrl() {
      this.$store.dispatch('getPhotography');
    },
  },
  watch: {
    getImg() {
      console.log(this.getImg[0].imgUrl);
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
    li{
      float: left;
      margin:20px 0 0 20px;
      font-size: 20px;
      font-weight: 600;
      img{
        width: 160px;
        height: 160px;
        border-radius: 12px;
      }
    }
}
</style>
