<template>
    <div class="meet">
        <div class="header">
            <img class="icon1" src="../../assets/icon/meet/maotou@2x.png" alt="">
            <div class="inputbox">
                <a href="">
                   <img class="fangdajing" src="../../assets/icon/meet/fangdajing@2x.png" alt="">
                </a>
                <input type="text" placeholder="夏日海岛推荐">
            </div>
            <ul class="nav">
                <a href="">
                    <li class="li1">关注</li>
                </a>
                <a href="">
                    <li class="li2">
                        <span>发现</span>
                        <div class="line"></div>
                    </li>
                </a>
                <a href="">
                    <li class="li3">
                        <img class="icon2" src="../../assets/icon/meet/jingxuan@2x.png" alt="">
                        <span>精选</span>
                    </li>
                </a>
                <a href="">
                    <li>短视频</li>
                </a>
            </ul>
        </div>
    </div>
</template>

<style lang="less" scoped>
.meet{
    display: flex;
    flex-direction: column;
    justify-content: center;
    .header{
        width: 100%;
        height: 125px;
        background: #ffdc40;
        overflow: hidden;
        .icon1{
            width: 20px;
            height: 20px;
            float: left;
            margin-top: 30px;
            margin-left: 25px;
        }
        .inputbox{
            width: 280px;
            height: 34px;
            background: #ffffff;
            border-radius: 17px;
            float: left;
            position: relative;
            margin-top: 24px;
            margin-left: 20px;
            overflow: hidden;
            .fangdajing{
                width: 15px;
                height: 15px;
                float: left;
                position: absolute;
                top: 10px;
                left: 10px;
                vertical-align: middle;
            }
            input{
                margin-top: 4px;
                margin-left: 32px;
                border: none;
                vertical-align: middle;
            }
        }
        ul{
            margin: 40px;
            margin-left: 83px;
            float: left;
            li{
                float: left;
                font-size: 16px;
                // margin-top: 38px;
                margin-right: 20px;
                font-family: "方正黑体";
            }
            .li2{
                font-weight: 900;
                .line{
                    width: 20px;
                    height: 2px;
                    background: black;
                    margin-top: 3px;
                    margin-left: 5px;
                }
            }
            .li3{
                .icon2{
                    width: 16px;
                    height: 16px;
                    vertical-align: middle;
                    margin-bottom: 2px;
                }
            }
        }
    }
}
</style>
