<template>
    <div class="meet">
        <div class="header">
            <img class="icon1" src="../../assets/icon/meet/maotou@2x.png" alt="">
            <div class="inputbox">
                <a href="">
                   <img class="fangdajing" src="../../assets/icon/meet/fangdajing@2x.png" alt="">
                </a>
                <input type="text" :placeholder="msg">
            </div>
            <ul class="nav">
                    <li class="li1">{{ list[0] }}</li>
                    <router-link to="shouye">
                        <li class="li2">
                            <span>发现</span>
                            <div class="line"></div>
                        </li>
                    </router-link>
                    <router-link to="jingxuan">
                        <li class="li3">
                            <img class="icon2" src="../../assets/icon/meet/jingxuan@2x.png" alt="">
                            <span>精选</span>
                            <div class="line"></div>
                        </li>
                    </router-link>
                <li>短视频</li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
      msg: '夏日海岛推荐',
      list: ['关注', '发现', '精选', '短视频'],
    };
  },
};
</script>

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
                margin-top: 6px;
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
                margin-right: 20px;
                font-family: "方正黑体";
            }
            :hover li{
                font-weight: 900;
                .line{
                    width: 20px;
                    height: 2px;
                    background: black;
                    margin-top: 3px;
                    margin-left: 5px;
                }
            }
            :hover .li2{
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
                font-weight: normal;
                .icon2{
                    width: 16px;
                    height: 16px;
                    vertical-align: middle;
                    margin-bottom: 2px;
                }
            }
            :hover .li3{
                font-weight: 900;
                .line{
                    width: 20px;
                    height: 2px;
                    background: black;
                    margin-top: 3px;
                    margin-left: 21px;
                }
            }
        }
    }
}
</style>
