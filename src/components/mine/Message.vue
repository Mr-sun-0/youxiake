<template>
    <div>
        <van-nav-bar
        title="消息"
        left-arrow
         right-text="分享会回放"
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />
        <van-share-sheet
        v-model="showShare"
        title="立即分享给好友"
        :options="options"
        @select="onSelect"
        />
        <p>
            <van-icon name="like-o"  color="#feaa6c"/>
            <span>遇见消息</span>
        </p>
        <p>
           <van-icon name="smile-comment-o" color="#75e6ca"/>
            <span>互动消息</span>
        </p>
        <p>
            <van-icon name="label-o" color="#84bbf4"/>
            <span>订单消息</span>
        </p>
        <p>
            <van-icon name="service-o" color="#fbc273"/>
            <span>在线咨询</span>
        </p>
        <p>
            <van-icon name="volume-o" badge="9" color="#fe9290"/>
            <span>系统通知</span>
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
};
</script>
<style lang="less" scoped>

    p{
        display: flex;
        padding: 20px;
        border-bottom: 1px solid #cccccc;
        span{
            margin-left:20px;
            font-size: 20px;
            line-height: 20px;

        }

    }
</style>
