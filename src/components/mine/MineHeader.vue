<template>
  <div class="wrap">
    <div class="headwrap">
      <div class="setting">
        <span @click="toSetting">
          <van-icon name="setting-o" size="25" />
        </span>
        <span @click="toMessage">
          <van-icon name="chat-o" badge="99+" size="25" />
        </span>
      </div>
      <div class="top">
        <van-image
          round
          width="1.2rem"
          height="1.2rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
          v-if="!session"
        />
        <van-image
          round
          width="1.2rem"
          height="1.2rem"
          :src="session.avatarImg"
          v-else
        />
        <span v-if="session">{{ session.nickName }}</span>
        <span @click="toRegister" v-else>点击登录/注册</span>

        <p @click="toPerson">个人主页</p>
      </div>
      <ul class="headbottom">
        <li v-for="(item, index) in headList" :key="index">
          <span>{{ item.count }}</span>
          <span>{{ item.content }}</span>
        </li>
        <li>
          <p>
            <img src="../../assets/icon/mine/icon1@2x.png" alt="" />
          </p>
          <span>每日签到</span>
        </li>
      </ul>
    </div>

    <div class="mainwrap">
      <!-- 出行订单 -->
      <div class="travel">
        <div class="travel-top">
          <span>出行订单</span>
          <span>查看全部 > </span>
        </div>
        <div class="menu">
          <li v-for="(item, index) in travelList" :key="index">
            <img :src="item.icon" alt="" />
            <span>{{ item.msg }}</span>
          </li>
        </div>
      </div>
      <div class="go">
        <img src="../../assets/icon/mine/iconbg@2x.png" alt="" />
      </div>
      <!-- 我的服务 -->
      <div class="myserve">
        <span>我的服务</span>
        <div class="menu menu1">
          <li v-for="(item, index) in myserveList" :key="index">
            <img :src="item.icon" alt="" />
            <span>{{ item.msg }}</span>
          </li>
        </div>
      </div>
      <div class="sel">精选推荐</div>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        offset="0"
      >
        <div class="recommend">
          <li v-for="(item, index) in mineRecommend" :key="index">
            <img :src="item.img" alt="" />
            <span class="describe">{{ item.name }}</span>
            <span class="price">￥{{ item.minprice }}起</span>
            <div class="line">{{item.title}}</div>
          </li>
        </div>
      </van-list>
    </div>
  </div>
</template>
<script>
import icon1 from '@/assets/icon/mine/icon01@2x.png';
import icon2 from '@/assets/icon/mine/icon02@2x.png';
import icon3 from '@/assets/icon/mine/icon03@2x.png';
import icon4 from '@/assets/icon/mine/icon04@2x.png';
import icon5 from '@/assets/icon/mine/icon05@2x.png';
import icon6 from '@/assets/icon/mine/icon06@2x.png';
import icon7 from '@/assets/icon/mine/icon07@2x.png';
import icon8 from '@/assets/icon/mine/icon08@2x.png';
import icon9 from '@/assets/icon/mine/icon09@2x.png';
import icon10 from '@/assets/icon/mine/icon10@2x.png';
import icon11 from '@/assets/icon/mine/icon11@2x.png';
import icon12 from '@/assets/icon/mine/icon12@2x.png';
import { Toast } from 'vant';

export default {
  data() {
    return {
      loading: false,
      finished: false,
      session: {},
      count: 8,
      headList: [
        {
          count: 0,
          content: '收藏',
        },
        {
          count: 0,
          content: '浏览',
        },
        {
          count: 0,
          content: '动态',
        },
      ],
      travelList: [
        {
          icon: icon1,
          msg: '待付款',
        },
        {
          icon: icon2,
          msg: '报名成功',
        },
        {
          icon: icon3,
          msg: '替补',
        },
        {
          icon: icon4,
          msg: '待评价',
        },
        {
          icon: icon5,
          msg: '退款/取消',
        },
      ],
      myserveList: [
        {
          icon: icon6,
          msg: '签证订单',
        },
        {
          icon: icon7,
          msg: '集市订单',
        },
        {
          icon: icon8,
          msg: '集市购物车',
        },
        {
          icon: icon9,
          msg: '常用信息',
        },
        {
          icon: icon10,
          msg: '分享APP',
        },
        {
          icon: icon11,
          msg: '在线客服',
        },
        {
          icon: icon12,
          msg: '意见建议',
        },
      ],
    };
  },
  watch: {
    mineRecommend(val, oldVal) {
      // console.log(val);
      if (val.length - oldVal.length === this.count) {
        // 等于10请求，不等于不再请求
        this.loading = false;
      } else {
        this.loading = true;
      }
    },
  },
  mounted() {
    this.sessionlist();
    this.getMineRecommend();
  },
  methods: {
    toSetting() {
      this.$router.push('/setting');
    },
    toRegister() {
      this.$router.push('/register');
    },
    toMessage() {
      this.$router.push('/message');
    },
    toPerson() {
      if (sessionStorage.getItem('token')) {
        this.$router.push('/person');
      } else {
        Toast('您还没有登陆，请先登录');
        this.$router.push('/register');
      }
    },
    sessionlist() {
      this.session = JSON.parse(sessionStorage.getItem('res'));
      console.log(this.session);
    },
    getMineRecommend() {
      this.$store.dispatch('getMineRecommend');
    },
    onLoad() {
      if (this.$store.state.mineRecommend.length > 80) {
        this.finished = true;
      }
    },
  },
  computed: {
    mineRecommend() {
      return this.$store.state.mineRecommend;
    },
  },
};
</script>
<style lang="less" scoped>
.wrap {
  background-color: #f3f3f3;
}
.headwrap {
  //   position: relative;
  padding-left: 20px;
  padding-top: 10px;
  height: 180px;
  background: #fff url(../../assets/images/mine/mine-bg.png) 50% no-repeat;
  background-size: cover;
}
.setting {
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  > span:first-child {
    margin-right: 20px;
  }
  margin-bottom: 10px;
}
.top {
  display: flex;
  align-items: center;
  position: relative;
  // line-height:1.2rem;
  span {
    font-size: 18px;
    font-weight: 700;
    color: #000;
    margin-left: 10px;
  }
  p {
    font-size: 14px;
    position: absolute;
    top: -5px;
    right: -5px;
    border-radius: 15px;
    line-height: 14px;
    text-align: center;
    background-color: #f9f9f9;
    padding: 5px;
  }
}
.headbottom {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
      font-size: 14px;
      // font-weight: 700;
      color: #000;
    }
    > span:first-child {
      height: 25px;
      font-weight: 700;
    }
  }
  > li:last-child p img {
    width: 30px;
    height: 25px;
  }
}
.mainwrap {
  padding: 0 10px;

  .travel {
    padding: 15px;
    margin-top: 10px;
    background-color: #ffffff;
    .travel-top {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 18px;
      }
      > span:first-child {
        font-weight: 700;
      }
    }
    .menu {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;
      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 25px;
          height: 25px;
        }
        span {
          margin-top: 10px;
          font-size: 14px;
          display: block;
        }
      }
    }
  }
  .go {
    width: 100%;
    height: 60px;
    margin: 10px 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .myserve {
    background-color: #ffffff;
    padding: 15px;
    padding-top: 0;
    span {
      font-size: 18px;
      font-weight: 700;
    }
    .menu {
      display: flex;
      flex-wrap: wrap;
      margin-top: 20px;
      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 25%;
        img {
          width: 15px;
          height: 15px;
        }
        span {
          margin: 10px 0;
          font-size: 14px;
          display: block;
          font-weight: 0;
        }
      }
    }
  }
  .sel {
    height: 40px;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    line-height: 40px;
  }

  .recommend {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 48%;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      border-radius: 0.07rem;
      margin-bottom: 15px;
      position: relative;
      .line{
        position: absolute;
        left: 0;
        top: 5px;
        padding-left: .1rem;
        padding-right: .2rem;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        color: #fff;
        border-radius: 0 .16rem .16rem 0;
        background: rgba(0,0,0,.5);
      }
      img {
        width: 100%;
        height: 120px;
        border-radius: 0.07rem;
      }
      .describe {
        display: block;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 16px;
        font-weight: 700px;
        margin: 10px 0;
      }
      .price {
        font-size: 14px;
        color: orange;
      }
    }
  }
}
</style>
