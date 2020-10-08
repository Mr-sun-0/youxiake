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
                 <li v-for="(item,index) in text" :key="index">
                     <span>{{item}}</span>
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
      text: ['目的地', '游记', '攻略', '摄影', '视频'],
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
        height: 266px;
        van-search{
            width: 100%;
            height: 96px;
            background: #FFFFFF;
            border-radius: 48px;
        }
        .van-cell{
            width: 350px;
        }
    }
    .sec{
        width: 100%;
        height: 160px;
        background: rgb(170, 74, 74);
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
               span{
                   font-size:13px;
                   color: black;
                   font-weight: 900;
               }
            }
        }
    }
}
</style>
