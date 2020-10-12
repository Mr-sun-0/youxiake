<template>
    <div class="main">
        <span class="tuijian">为你推荐</span>
        <ul class="right">
            <li class="li1">热门</li>
            <li>最新</li>
        </ul>
        <ul class="neirong">
            <li class="pk">
                <div class="top">
                    <div class="inpk">PK</div>
                    <span class="pinlun">你觉得辞职去旅行值得吗?</span>
                </div>
                <div class="bottom">
                    <div class="zhide">值得</div>
                    <div class="buzhide">不值得</div>
                    <span class="canyu">已有43人参与</span>
                </div>
            </li>
            <li class="li2">
                <div class="top top2"></div>
                <div class="bottom">
                    <span class="xiuqiu">绣球花海</span>
                    <div class="yuan">
                        <img src="../../assets/icon/meet/gou2x.png" alt="">
                    </div>
                    <span class="youbian">Fiorelady</span>
                    <img class="aixin" src="../../assets/icon/meet/2x.png" alt="">
                    <span class="shuzi">1422</span>
                </div>
            </li>
        </ul>
        <div class="tupan"></div>
        <img class="xiangji" src="../../assets/icon/meet/xiangji.png" alt="">
    </div>
</template>

<style lang="less" scoped>
.main{
    width: 100%;
    background: #f2f2f2;
    overflow: hidden;
    .tuijian{
        font-size: 16px;
        font-weight: bold;
        margin-left: 10px;
    }
    .right{
        float: right;
        font-size: 14px;
        margin-top: 5px;
        margin-right: 10px;
        li{
            padding: 0 12px;
            text-align: center;
            float: left;
        }
        .li1{
            border-right: 1px solid #b0b0b0;
            color: #e5ac04;
        }
    }
    .neirong li{
        width: 178px;
        background: #989582;
        border-radius: 7px;
        margin-top: 17px;
        margin-left: 6px;
        overflow: hidden;
        float: left;
    }
    .neirong .pk .bottom{
        width: 100%;
        height: 136px;
        background: #ffffff;
        overflow: hidden;
        .zhide{
            width: 158px;
            height: 24px;
            background: #ff6762;
            border-radius: 12px;
            font-size: 14px;
            color: #f2f2f2;
            text-align: center;
            line-height: 24px;
            margin-top: 20px;
            margin-left: 11px;
        }
        .buzhide{
            width: 158px;
            height: 24px;
            background: #44a3f5;
            border-radius: 12px;
            font-size: 14px;
            color: #f2f2f2;
            text-align: center;
            line-height: 24px;
            margin-top: 8px;
            margin-left: 11px;
        }
        .canyu{
            font-size: 14px;
            color: #9d9d9d;
            text-align: center;
            display: block;
            margin: 26px auto;
        }
    }
    .neirong .top{
        width: 100%;
        height: 163px;
        background: #989582;
        overflow: hidden;
        .inpk{
            width: 32px;
            height: 20px;
            background: #6f6f67;
            border-radius: 2px;
            font-size: 10px;
            color: #f2f2f2;
            text-align: center;
            line-height: 22px;
            margin-top: 13px;
            margin-left: 14px;
        }
    }
    .neirong .top2{
        background: url(../../assets/images/meet/2.jpg);
    }
    .neirong .pk .top .pinlun{
        font-size: 14px;
        color: #f2f2f2;
        display: inline-block;
        margin-top: 27px;
    }
    .neirong .li2 .bottom{
        width: 100%;
        height: 104px;
        background: #ffffff;
        overflow: hidden;
        position: relative;
        .xiuqiu{
            font-size: 16px;
            color: #333333;
            display: block;
            margin-top: 16px;
            margin-left: 9px;
        }
        .yuan{
            width: 24px;
            height: 24px;
            border-radius: 12px;
            background: #fef9db;
            margin-top: 18px;
            margin-left: 8px;
            float: left;
            img{
                width: 10px;
                height: 10px;
                margin-left: 12px;
            }
        }
        .youbian{
            float: left;
            font-size: 11px;
            margin-top: 25px;
            margin-left: 10px;
        }
        .aixin{
            width: 14px;
            display: inline-block;
            margin-left: 27px;
            margin-top: 27px;
            vertical-align: middle;
        }
        .shuzi{
            font-size: 10px;
            display: inline-block;
            vertical-align: middle;
            position: absolute;
            top: 60px;
            bottom: -2px;
        }
    }
    .tupian{
        width: 178px;
        height: 265px;
        background: #ffffff;
    }
    .xiangji{
        width: 52px;
        position: fixed;
        top: 350px;
        left: 300px;
    }
}
</style>
