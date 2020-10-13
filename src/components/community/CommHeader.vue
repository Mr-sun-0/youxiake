<template>
    <div class="cont">
        <div class="header-wrap">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
              <van-swipe-item v-for="(item,index) in imgUrl " :key="index">
                <img :src="item.imgurl" alt="">
                </van-swipe-item>
            </van-swipe>
        </div>
        <van-search
            v-model="value"
            shape="round"
            background="none"
            />
        <section class="sec">
            <ul class="four-icon">
                 <li v-for="(item,index) in list" :key="index" @click="totarget(index)">
                     <span>{{item.title}}</span>
                     <img :src="item.imgurl"  alt="">
                 </li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
  data() {
    return {
      value: '搜索目的地/攻略/摄影作品登',
      list: [
        { title: '目的地', imgurl: require('../../assets/images/community/-s-gl-icon03.png') },
        { title: '游记', imgurl: require('../../assets/images/community/-s-video-icon05.png') },
        { title: '攻略', imgurl: require('../../assets/images/community/mdd-icon01.png') },
        { title: '摄影', imgurl: require('../../assets/images/community/sy-icon04.png') },
        { title: '视频', imgurl: require('../../assets/images/community/youji-icon02.png') },
      ],
      imgUrl: [
        { imgurl: require('../../assets/images/community/swiper2/12581602215103.jpg') },
        { imgurl: require('../../assets/images/community/swiper2/20651592553841.jpg') },
        { imgurl: require('../../assets/images/community/swiper2/29781597202658.jpg') },
        { imgurl: require('../../assets/images/community/swiper2/41101586832070.jpg') },
        { imgurl: require('../../assets/images/community/swiper2/69191592196104.jpg') },
        { imgurl: require('../../assets/images/community/swiper2/79791589422766.jpg') },
      ],
    };
  },

  methods: {
    totarget(i) {
      switch (i) {
        case 0:
          this.$router.push('/index');
          break;
        case 1:
          this.$router.push('/community/commfiv02');
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.cont{
    width: 100%;
    height: 100%;
    .header-wrap{
        display: flex;
        justify-content:center;
        width: 100%;
        align-items: center;
        height:190px;
        // van-search{
        //     width: 99%;
        //     height: 96px;
        //     background: #FFFFFF;
        //     border-radius: 48px;
        // }
         .my-swipe .van-swipe-item {
            width: 100%;
            height:190px;
            color: #fff;
            font-size: 20px;
            line-height: 190px;
            text-align: center;
            background-color: #39a9ed;
           }
           .van-swipe{
              width: 100%;
              height:190px;
            img{
              width: 100%;
              height:190px;
            }
           }
        .van-cell{
            width: 320px;
        }
    }
    .van-search{
      position:fixed;
      top: 2px;
      left: 14px;
      width: 351px;
      height: 34px;
      padding: 0.26667rem 0.32rem;
      z-index: 10;
    }
    .sec{
        width: 100%;
        height: 160px;
        .four-icon{
            width: 100%;
            height: 160px;
            display: flex;
            justify-content: center;
            align-items: center;
           li{
               display: flex;
               justify-content: center;
                align-items: center;
               width: 80px;
               height: 80px;
               margin-left: 10px;
               border: 1px rgba(0, 0, 0, 0.281) solid;
               box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.45);
               border-radius: 12px;
               position: relative;
               span{
                   font-size:13px;
                   color: black;
                   font-weight: 900;
                  }
                img{
                    width: 20px;
                    height: 20px;
                    position: absolute;
                    top: 50px;
                    left: 38px;
                }
            }
        }
    }
}
</style>
