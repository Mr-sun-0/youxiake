<template>
    <div class="banner-wrap">
     <van-swipe :autoplay="3000">
       <van-swipe-item v-for="(image, index) in BannerList" :key="index">
        <img v-lazy=image.url />
       </van-swipe-item>
      </van-swipe>
    </div>
</template>

<script>
export default {
  data() {
    return {
      BannerList: [{ url: 'https://qimg4.youxiake.com/upload/202009/29/89881601382862.jpg?imageslim' },
        { url: 'https://qimg4.youxiake.com/upload/202009/17/27601600321473.jpg?imageslim' }],
    };
  },
};
</script>

<style lang="less">
  .banner-wrap{
    text-align: center;
    height: 160px;
    .van-swipe-item{
      text-align: center;
      img{
          width: 90%;
          height: 155px;
        }
    }
  }
</style>
