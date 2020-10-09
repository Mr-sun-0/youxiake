<template>
    <div class="wrap">
         <van-nav-bar
        title="个人主页"
        left-arrow
         right-text="分享"
        @click-left="onClickLeft"
        @click-right="onClickRight"
        background='none'
        />
        <van-share-sheet
        v-model="showShare"
        title="分享给好友"
        :options="options"
        @select="onSelect"
        />
        <div class="topcontent">
             <van-image
          round
          width="100px"
          height="100px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <span>编辑</span>
        </div>
        <p>
            <span>昵称</span>
            <span>会员</span>
        </p>
         <p>
            <span>个性签名</span>
        </p>
        <p class="p1">
            <span>关注</span>
            <span>粉丝</span>
            <span>获赞</span>
        </p>


    </div>
</template>
<script>
 import { Toast } from 'vant';
export default {
   

  data() {
    return {
      showShare: false,
      options: [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
      ],
    };
  },
  methods: {
    onClickLeft() {
    //   console.log(1);
      this.$router.go(-1);
    },
    onClickRight() {
      this.showShare = true;
    },
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
  },

}
</script>

<style lang="less" scoped>
.van-nav-bar{
    background-color:none;
}
.wrap{
    height: 300px;
    background: #fff url(../../assets/images/mine/mine-bg.png) 50% no-repeat;
    background-size: cover;
}
.topcontent{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    margin-top: 20px;font-size: 20px;
}
p{
     padding: 0 10px;
    margin-top: 20px;
    font-size: 20px;
}
.p1{
    span{
        margin-right: 20px;
    }
}
</style>