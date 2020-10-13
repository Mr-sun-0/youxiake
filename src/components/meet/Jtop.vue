<template>
    <div class="jingxuan">
        <ul class="tubiao">
            <li class="li1">
                <img src="../../assets/images/meet/3.png" alt="">
            </li>
            <li>
                <img src="../../assets/images/meet/4.png" alt="">
            </li>
            <li>
                <img src="../../assets/images/meet/5.png" alt="">
            </li>
        </ul>
        <div class="right">
            <span class="hongren">红人榜</span>
            <div class="yellow">5.31更新</div>
        </div>
        <ul class="tupian">
            <li class="li1">
                <div class="bottom">推广</div>
            </li>
            <li class="li2">
                <div class="img1">
                    <span>精选</span>
                </div>
                <p class="p1">《继续海滩随拍》</p>
                <p class="p2">以色列阿什多德海滩</p>
                <div class="left">
                    <div class="yuan"></div>
                    <span>约翰999</span>
                    <img src="../../assets/icon/meet/3x.png" alt="">
                    <span>1001</span>
                </div>
            </li>
            <li class="li3">
                <div class="img1">
                    <span>精选</span>
                </div>
                <p class="p3">#春色播报#</p>
                <p class="p1">#春色播报#这人间，</p>
                <p class="p2">终是拗不过冥冥中...</p>
                <div class="left">
                    <div class="yuan"></div>
                    <span>海凤凰</span>
                    <img src="../../assets/icon/meet/3x.png" alt="">
                    <span>1165</span>
                </div>
            </li>
            <li class="li4">
                <div class="img1">
                    <span>精选</span>
                </div>
                <p class="p1">美丽的事物总是短暂</p>
                <p class="p2">的</p>
                <div class="left">
                    <div class="yuan"></div>
                    <span>一然</span>
                    <img src="../../assets/icon/meet/3x.png" alt="">
                    <span>1036</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="less" scoped>
.jingxuan{
    width: 100%;
    // height: 680px;
    background:#f2f2f2;
    overflow: hidden;
    .tubiao{
        display: inline-flex;
        margin-top: 10px;
        margin-left: 8px;
        overflow: hidden;
        // vertical-align: middle;
        li{
            padding: 9px;
            img{
                width: 48px;
            }
        }
        .li1{
            img{
                margin-top: 4px;
            }
        }
    }
    .right{
        width: 70px;
        height: 42px;
        // background: red;
        // float: right;
        display: inline-block;
        vertical-align: middle;
        margin-left: 73px;
        .hongren{
            font-size: 16px;
            color: #333333;
            margin-left: 5px;
        }
        .yellow{
            width: 70px;
            height: 20px;
            background: #ffdc40;
            font-size: 12px;
            text-align: center;
            line-height: 20px;
            margin-top: 4px;
        }
    }
    .tupian li{
        float: left;
    }
    .tupian .li1{
        width: 174px;
        height: 232px;
        background: #acd598;
        border-radius: 8px;
        margin-top: 16px;
        margin-left: 7px;
        overflow: hidden;
        .bottom{
            width: 40px;
            height: 14px;
            background: #d3fdbe;
            font-size: 12px;
            text-align: center;
            line-height: 14px;
            color: #fefefe;
            margin-left: 127px;
            margin-top: 218px;
        }
    }
    .tupian .li2{
        width: 174px;
        height: 280px;
        background: #ffffff;
        border-radius: 8px;
        margin-top: 40px;
        margin-left: 9px;
        .img1{
            width: 100%;
            height: 177px;
            border-radius: 8px 8px 0 0;
            background: url('../../assets/images/meet/6.jpg');
            background-size: cover;
            color: #fefefe;
            font-size: 14px;
            span{
                display: inline-block;
                margin-left: 15px;
                margin-top: 13px;
                font-style: oblique;
            }
        }
        .p1{
            color: #333333;
            font-size: 16px;
            margin-top: 12px;
            margin-left: 17px;
            font-weight: bold;
        }
        .p2{
            color: #333333;
            font-size: 16px;
            margin-top: 4px;
            margin-left: 10px;
            font-weight: bold;
        }
        .left{
            height: 24px;
            margin-top: 10px;
            margin-left: 11px;
            display: inline-block;
            overflow: hidden;
            .yuan{
                width: 24px;
                height: 24px;
                border-radius: 12px;
                display: inline-block;
                background: #bfbfbf;
                margin-top: -7px;
                margin-right: 10px;
                vertical-align: middle;
            }
            span{
                font-size: 12px;
                vertical-align: middle;
            }
            img{
                width: 20px;
                margin-left: 22px;
                margin-right: 5px;
                margin-top: -5px;
                vertical-align: middle;
            }
        }
    }

    .tupian .li3{
        width: 174px;
        height: 300px;
        background: #ffffff;
        border-radius: 8px;
        margin-top: -20px;
        margin-left: 9px;
        .img1{
            width: 100%;
            height: 177px;
            border-radius: 8px 8px 0 0;
            background: url('../../assets/images/meet/7.jpg');
            background-size: cover;
            color: #fefefe;
            font-size: 14px;
            span{
                display: inline-block;
                margin-left: 15px;
                margin-top: 13px;
                font-style: oblique;
            }
        }
        .p1{
            color: #333333;
            font-size: 16px;
            margin-top: 12px;
            margin-left: 17px;
            font-weight: bold;
        }
        .p2{
            color: #333333;
            font-size: 16px;
            margin-top: 4px;
            margin-left: 10px;
            font-weight: bold;
        }
        .p3{
            font-size: 13px;
            margin-top: 11px;
            margin-left: 11px;
            font-weight: bold;
        }
        .left{
            height: 24px;
            margin-top: 10px;
            margin-left: 11px;
            display: inline-block;
            overflow: hidden;
            .yuan{
                width: 24px;
                height: 24px;
                border-radius: 12px;
                display: inline-block;
                background: #bfbfbf;
                margin-top: -7px;
                margin-right: 10px;
                vertical-align: middle;
            }
            span{
                font-size: 12px;
                vertical-align: middle;
            }
            img{
                width: 20px;
                margin-left: 22px;
                margin-right: 5px;
                margin-top: -5px;
                vertical-align: middle;
            }
        }
    }

    .tupian .li4{
        width: 174px;
        height: 280px;
        background: #ffffff;
        border-radius: 8px;
        margin-top: 40px;
        margin-left: 9px;
        .img1{
            width: 100%;
            height: 177px;
            border-radius: 8px 8px 0 0;
            background: url('../../assets/images/meet/8.jpg');
            background-size: cover;
            color: #fefefe;
            font-size: 14px;
            span{
                display: inline-block;
                margin-left: 15px;
                margin-top: 13px;
                font-style: oblique;
            }
        }
        .p1{
            color: #333333;
            font-size: 16px;
            margin-top: 12px;
            margin-left: 17px;
            font-weight: bold;
        }
        .p2{
            color: #333333;
            font-size: 16px;
            margin-top: 4px;
            margin-left: 10px;
            font-weight: bold;
        }
        .left{
            height: 24px;
            margin-top: 10px;
            margin-left: 11px;
            display: inline-block;
            overflow: hidden;
            .yuan{
                width: 24px;
                height: 24px;
                border-radius: 12px;
                display: inline-block;
                background: #bfbfbf;
                margin-top: -7px;
                margin-right: 10px;
                vertical-align: middle;
            }
            span{
                font-size: 12px;
                vertical-align: middle;
            }
            img{
                width: 20px;
                margin-left: 22px;
                margin-right: 5px;
                margin-top: -5px;
                vertical-align: middle;
            }
        }
    }
}
</style>
