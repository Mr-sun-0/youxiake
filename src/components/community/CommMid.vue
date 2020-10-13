<template>
    <div>
        <div class="content">
            <span class="content_wz">侠魁日历</span>
            <img src="../../assets/images/community/block2/xkrl-icon.png" alt="">
        </div>
        <section>
            <carousel-3d class="sw">
                <slide :index="0" id="slide" style="width: 356px; height: 250px;">
                    <img src="../../assets/images/community/newpic/1.png" alt="">
                </slide>
                <slide :index="1" id="slide" style="width: 356px; height: 250px;">
                    <img src="../../assets/images/community/newpic/2.png" alt="">
                </slide>
                  <slide :index="2" id="slide" style="width: 356px; height: 250px;">
                    <img src="../../assets/images/community/newpic/3.png" alt="">
                </slide>
                 <slide :index="3" id="slide" style="width: 356px; height: 250px;">
                    <img src="../../assets/images/community/newpic/4.png" alt="">
                </slide>
                 <slide :index="4" id="slide" style="width: 356px; height: 250px;">
                    <img src="../../assets/images/community/newpic/10.jpg" alt="">
                </slide>
            </carousel-3d>
        </section>
        <div class="wz_span">
            <span>疫情过去了，我们去旅行吧！（北方）</span>
        </div>
        <article class="art">
            <div class="div1">
                <img src="../../assets/images/community/block2/squre-icon.png" alt="" class="yuan1">
                <span>空行僧   在北京</span>
                <div></div>
                <img src="../../assets/images/community/block2/eys-icon.png" alt="" class="plly">
                <span>2755</span>
                <span class="kg"></span>
                 <img src="../../assets/images/community/block2/ly-icon.png" alt="" class="plly">
                <span>51</span>
            </div>
        </article>
        <div class="more">
            <div class="btn1">更多</div>
        </div>
         <aside></aside>
    </div>
</template>
<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
  components: {
    Carousel3d,
    Slide,
  },
};
</script>
<style lang="less" scoped>
    .content{
        width: 100%;
        height: 80px;
        position: relative;
        .content_wz{
            width: 111px;
            height: 28px;
            font-size: 27px;
            font-family: PingFang;
            font-weight: bold;
            font-style: italic;
            color: #333333;
            position: absolute;
            top: -20px;
            left: 126px;
             z-index: 3;
        }
        img{
            position: absolute;
            z-index: 2;
            width: 140px;
            top: 25px;
            left: 111px;
        }
    }
    section{
        position: relative;
        height: 230px;
        .sw {
            width: 95%;
            height: 80px;
        #slide{
            border: none;
            border-radius: 5%;
            box-shadow: 1px 2px 3px 10px black inset;
            width: 200px;
            }
        }
    }
    .wz_span{
        position: relative;
        width: 100%;
        span{
            position: absolute;
            display: block;
            width: 350px;
            top:50px;
            left: 30px;
            height: 60px;
            font-size: 18px;
            font-family: PingFang;
            font-weight: bold;
            color: #333333;
        }
    }
    .art{
        width: 100%;
        height: 100px;
        position: relative;
        .div1{
            width: 100%;
            height: 80px;
            position: absolute;
            top: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            .yuan1{
                width: 30px;
                height: 30px;
            }
            span{
                font-size: 14px;
            }
            div{
                width: 123px;
            }
            .plly{
                width: 15px;
                height: 12px;
            }
            .kg{
                width: 20px;
            }
        }
    }
    .more{
        width: 100%;
        height: 60px;
        position: relative;
        .btn1{
            width: 70px;
            height: 30px;
            background: #F5F5F5;
            border: 1px solid #B5B5B5;
            border-radius: 26px;
            position: absolute;
            bottom: 0;
            left: 4.33333rem;
            font-size: 10px;
            font-family: PingFang;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #707070;
        }
    }
</style>
