<template>
    <div class="headwrap">
        <div class="setting">
            <span> 
                <van-icon name="setting-o" />
            </span>
            <span>
                <van-icon name="chat-o" />
            </span>
        </div>
        <div class="top">
            <van-image
            round
            width="1.2rem"
            height="1.2rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <span>点击登录/注册</span>
        </div>
        <ul class="headbottom">
            <li>
                <span>0</span>
                <span>收藏</span>
            </li>
            <li>
                <span>0</span>
                <span>浏览</span>
            </li>
            <li>
                <span>0</span>
                <span>动态</span>
            </li>
            <li>
                <span>0</span>
                <span>每日签到</span>
            </li>
        </ul>
    </div>
</template>
<style lang="less" scoped>
   .headwrap{
    position: relative;
    padding-left: 20px;
    padding-top: 40px;
    height: 200px;
    background: #FFF url(../../assets/images/mine/mine-bg.png) 50% no-repeat;
    background-size: cover;
   }
   .setting{
       display: flex;
       justify-content: flex-end;
       padding-right: 10px;
      >span:first-child{
          margin-right: 20px;
      }
       margin-bottom: 10px;
   }
   .top{
       display: flex;
       align-items: center;
       span{
        font-size: 18px;
        font-weight: 700;
        color: #000;
        margin-left: 10px;
       }
   }
   .headbottom{
       display: flex;
       justify-content: space-around;
       align-items: center;
       margin-top: 15px;
       li{
           display: flex;
           flex-direction: column;
           justify-content: center;
           align-items: center;
            span{
            font-size: 14px;
            // font-weight: 700;
            color: #000;
       }
       }
   }
</style>