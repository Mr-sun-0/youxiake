<template>
    <div class="cont">
        <div class="header-wrap">
            <van-search
            v-model="value"
            shape="round"
            background="none"
            />
        </div>
        <section class="sec">
            <ul class="four-icon">
                 <li v-for="(item,index) in list" :key="index">
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
    };
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
        background: #B4B4B4;
        height: 226px;
        van-search{
            width: 99%;
            height: 96px;
            background: #FFFFFF;
            border-radius: 48px;
        }
        .van-cell{
            width: 320px;
        }
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
