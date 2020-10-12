<template>
  <div>
    <div class="wrap">
      <van-nav-bar
        title="个人主页"
        left-arrow
        right-text="分享"
        @click-left="onClickLeft"
        @click-right="onClickRight"
        background="none"
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
          width="1.2rem"
          height="1.2rem"
          :src="session.avatarImg"
          v-if="session.avatarImg"
        />
        <van-image
          round
          width="1.2rem"
          height="1.2rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
          v-else
        />
        <span>编辑</span>
      </div>
      <p>
        <span
          ><b>昵称:</b
          ><span style="font-size=18px;font-weight=700">{{
            session.nickName
          }}</span></span
        >
      </p>
      <p></p>
      <p>
        <span
          ><b>个性签名:</b
          ><span style="font-size=14px"
            >流转的时光，都成为命途中美丽的点缀</span
          ></span
        >
      </p>
      <p class="p1">
        <span>关注0</span>
        <span>粉丝0</span>
        <span>获赞0</span>
      </p>
    </div>
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
        :class="{ active: activeIndex == index }"
        @click="tabsChange(index, item.url)"
      >
        {{ item.title }}
        <div class="underLine" v-if="activeIndex == index"></div>
      </li>
    </ul>
    <router-view></router-view>
    <div class="publish">
      <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->
      <p @click="showPopup">+ 发布</p>
      <van-popup
        v-model="show"
        closeable
        position="bottom"
        :style="{ height: '30%' }"
      >
      </van-popup>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant';

export default {
  data() {
    return {
      show: false,
      activeIndex: '',
      showShare: false,
      session: [],
      options: [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
      ],
      list: [
        {
          title: '遇见0',
          url: '/metting',
        },
        {
          title: '态度0',
          url: '/attitude',
        },
        {
          title: '摄影0',
          url: '/phone',
        },
        {
          title: '游记0',
          url: '/travel',
        },
      ],
    };
  },
  mounted() {
    this.sessionlist();
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
    tabsChange(i, url) {
      this.activeIndex = i;
      this.$router.push(url);
    },
    showPopup() {
      this.show = true;
    },
    sessionlist() {
      this.session = JSON.parse(sessionStorage.getItem('res'));
      // console.log(this.session);
    },
  },
};
</script>

<style lang="less" scoped>
.van-nav-bar {
  background-color: none;
}
.wrap {
  height: 300px;
  background: #fff url(../../assets/images/mine/mine-bg.png) 50% no-repeat;
  background-size: cover;
}
.topcontent {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin-top: 20px;
  font-size: 20px;
}
p {
  padding: 0 10px;
  margin-top: 20px;
  font-size: 20px;
}
.p1 {
  span {
    margin-right: 20px;
  }
}
ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  margin-top: 10px;

  .underLine {
    position: relative;
    bottom: -5px;
    left: 50%;
    width: 40px;
    height: 3px;
    border-radius: 6px;
    background: orange;
    transform: translateX(-50%);
  }
  .active {
    color: #000;
    font-weight: 900;
  }
}
.publish {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 99;
  background-color: #fff;
  p {
    width: 80px;
    height: 40px;
    border-radius: 20px;
    background: orange;
    text-align: center;
    line-height: 40px;
    font-size: 20px;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-bottom: 20px;
  }
}
</style>
