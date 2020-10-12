<template>
<div>
    <div class="found">
        <span class="title">发现话题</span>
        <span class="right">话题广场 ></span>
        <div class="out">
            <div class="zhoubang">
                <span class="yujian">遇见周榜</span>
                <div class="yuan">→</div>
            </div>
            <div
                class="photo"
                v-for="item in msglist"
                :key="item"
                :style="{ backgroundImage: 'url(' + imgurl + ')'}"
            >
                <span>{{ msglist.msg[0] }}</span>
                <p class="span2">{{ msglist.msg[1] }}</p>
            </div>
        </div>
    </div>
    <div class="banner">
        <img src="../../assets/images/meet/banner.jpg" alt="">
    </div>
</div>
</template>

<script>

export default {
  data() {
    return {
      imgurl: require('../../assets/images/meet/1.jpg'),
      list: ['关注', '发现', '精选', '短视频'],
      msglist: {
        msg: ['这些景点要钱', '1238人浏览'],
        msg2: ['夏日海盗推荐', '541人浏览'],
        msg3: ['游侠视频集结地', '410人浏览'],
      },
    };
  },
};
</script>

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
        .out{
            display: flex;
            overflow: auto;
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
                flex-shrink: 0;
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
                // background: url("../../assets/images/meet/1.jpg");
                background-size: cover;
                border-radius: 6px;
                float: left;
                margin-top: 10px;
                margin-left: 20px;
                padding: 0 13px;
                flex-shrink: 0;
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
        }
    .banner{
        img{
            display: block;
            width: 350px;
            margin: 0 auto;
        }
    }
</style>
