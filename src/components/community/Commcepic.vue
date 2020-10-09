<template>
    <div class="bigdiv">
        <div class="ct">
            <img src="../../assets/images/community/newpic/pic-icon1.png" alt="">
            <span>旅游界的奥斯卡之2019游侠客国内线路颁...</span>
            <div class="ft">
                <img src="../../assets/images/community/pos-icon.png" alt="">
                <span class="wz2">华山</span>
                <span class="kg2"></span>
                 <img src="../../assets/images/community/block2/eys-icon.png" alt="" class="gk">
                <span>3683</span>
                <span class="kge"></span>
                <img src="../../assets/images/community/block2/ly-icon.png" alt="" class="gk">
                <span>54</span>
            </div>
        </div>
        <div class="kbai">
            <div class="kbai_art1">
                <span class="sp1">当季热门</span>
                <span class="sp2">当下最佳旅游地</span>
                <span class="sp3">查看更多></span>
            </div>
                <ul class="view-bot">
                    <li v-for="(item,index) in topView" :key="index">
                        <img :src="item.imgUrl" alt="" class="img1">
                        <span class="sp1">{{item.nm}}</span>
                        <img src="../../assets/images/community/hr.png" alt="" class="img2">
                        <span  class="sp2" >TOP{{index+1}}</span>
                    </li>
                </ul>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      topView: [{ imgUrl: require('../../assets/images/community/swiper/sw-icon1.png'), nm: '三江源' }, { imgUrl: require('../../assets/images/community/swiper/sw-icon2.png'), nm: '青海湖' }, { imgUrl: require('../../assets/images/community/swiper/sw-icon3.png'), nm: '西双版纳' }, { imgUrl: require('../../assets/images/community/swiper/sw-icon2.png'), nm: '青海湖' }, { imgUrl: require('../../assets/images/community/swiper/sw-icon1.png'), nm: '三江源' }, { imgUrl: require('../../assets/images/community/swiper/sw-icon3.png'), nm: '西双版纳' }],
    };
  },
};
</script>
<style lang="less" scope>
.bigdiv{
    width: 100%;
    .ct{
        width: 95%;
        margin-left: 10px;
        height: 300px;
        border-bottom: 1px solid #E8E8E8;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        img{
            width: 90%;
        }
        span{
            font-size: 18px;
            font-weight: 600;
            margin-top: 20px;
        }
        .ft{
            width: 98%;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 30px;
            img{
                width: 10px;
                height: 12px;
                 margin: 0;
            }
            .wz2{
                    font-weight: 100;
                    font-size: 15px;
                    margin: 0;
                }
            .gk{
                width: 15px;
                height: 12px;
                 margin: 0;
            }
            span{
                margin: 0;
                font-weight: 100;
                font-size: 15px;
                margin: 0;
            }
            .kg2{
                width: 200px;
            }
            .kge{
                width: 20px;
            }
        }
    }
    .kbai{
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .kbai_art1{
            width: 95%;
            height: 100px;
            margin-top: 20px;
            .sp1{
                font-size: 20px;
                font-family: PingFang;
                font-weight: bold;
                color: #333333;
            }
            .sp2{
                font-size: 14px;
                font-family: PingFang;
                font-weight: bold;
                color: #9A9A9A;
                margin-left: 10px;
            }
            .sp3{
                font-size: 18px;
                font-family: PingFang;
                font-weight: bold;
                color: #333333;
                margin-left: 80px;
            }
        }
            .view-bot{
                width: 100%;
                height: 200px;
                margin-top: -30px;
                overflow: auto;
                display: flex;
                margin-left: 10px;
                li{
                    width: 150px;
                    height: 200px;
                    background-color: #ccc;
                    flex-shrink: 0;
                    margin-left: 10px;
                    display: flex;
                    position: relative;
                    justify-content: space-around;
                    border-radius: 6px;
                    .img1{
                        width: 150px;
                        height: 200px;
                    }
                    .sp1{
                        position: absolute;
                        font-size: 16px;
                        bottom: 20px;
                        color: white;
                    }
                    .img2{
                        width: 60px;
                        height: 35px;
                        position: absolute;
                        left: 10px;
                    }
                    .sp2{
                        position: absolute;
                        font-size: 16px;
                        top: 8px;
                        left: 20px;
                        color: white;
                    }
                }
            }
        }
    }

</style>
