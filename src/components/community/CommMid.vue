<template>
    <div>
        <div class="content">
            <span class="content_wz">侠魁日历</span>
            <img src="../../assets/images/community/block2/xkrl-icon.png" alt="">
        </div>
        <section>
            <img src="../../assets/images/community/block2/qh-img.png" alt="">
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
export default {

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
            top: 20px;
            left: 126px;
             z-index: 3;
        }
        img{
            position: absolute;
            z-index: 2;
            width: 140px;
            top: 38px;
            left: 111px;
        }
    }
    section{
        position: relative;
        img{
            width: 90%;
            height: 200px;
            position: absolute;
            left: 25px;
            top: -10px;
        }
    }
    .wz_span{
        position: relative;
        width: 100%;
        span{
            position: absolute;
            display: block;
            width: 350px;
            top:204px;
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
        height: 280px;
        position: relative;
        .div1{
            width: 100%;
            height: 80px;
            position: absolute;
            top: 230px;
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
