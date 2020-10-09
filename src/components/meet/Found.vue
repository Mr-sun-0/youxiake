<template>
<div>
    <div class="found">
        <span class="title">发现话题</span>
        <span class="right">话题广场 ></span>
        <div class="zhoubang">
            <span class="yujian">遇见周榜</span>
            <div class="yuan">→</div>
        </div>
        <div class="photo">
            <span>这些景点不要钱</span>
            <p class="span2">1228人浏览</p>
        </div>
    </div>
    <div class="banner">
        <img src="../../assets/images/meet/banner.jpg" alt="">
    </div>
</div>
</template>

<style lang="less" scoped>
    .found{
        width: 100%;
        height: 130px;
        .title{
            font-size: 18px;
            display: inline-block;
            margin-top: 10px;
            margin-left: 14px;
        }
        .right{
            margin-left: 200px;
            font-size: 16px;
        }
        .zhoubang{
            width: 76px;
            height: 76px;
            border-radius: 6px;
            background: #ffe76d;
            font-size: 14px;
            font-weight: bold;
            text-align: center;
            float: left;
            margin-top: 10px;
            margin-left: 20px;
            overflow: hidden;
            .yujian{
                display: inline-block;
                margin-top: 10px;
            }
            .yuan{
                width: 20px;
                height: 20px;
                background: #ffffff;
                border-radius: 10px;
                line-height: 20px;
                margin-top: 13px;
                margin-left: 28px;
            }
        }
            .photo{
                width: 100px;
                height: 76px;
                background: url("../../assets/images/meet/1.jpg");
                background-size: cover;
                border-radius: 6px;
                float: left;
                margin-top: 10px;
                margin-left: 20px;
                padding: 0 13px;
                span{
                    font-size: 14px;
                    color: #ffffff;
                }
                p{
                    font-size: 10px;
                    color: #ffffff;
                }
            }
    }
    .banner{
        img{
            display: block;
            width: 350px;
            margin: 0 auto;
        }
    }
</style>
