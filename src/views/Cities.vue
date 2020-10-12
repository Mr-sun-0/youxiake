<template>
    <div class="city-list">
        <van-nav-bar
        title="选择城市"
        left-text=""
        right-text=""
        left-arrow
        @click-left="onClickLeft"
        />
        <div class="wrap">
          <div>
            <div class="nearbyCity">
              <p>定位/附近城市</p>
              <li @click="changeCity(item)">杭州市</li>
            </div>
            <div class="firstCity">
              <p>一级站点</p>
              <ul>
                <li v-for="(item,index) in firstList" :key="index"
                @click="handleClick(item)">{{item}}</li>
              </ul>
            </div>
            <div class="secondCity">
              <p>二级站点</p>
              <ul>
                <li v-for="(item,index) in secondList" :key="index"
                @click="handleClick(item)"
                >
                  {{item}}
                </li>
              </ul>
            </div>
            <div class="hotCity">
              <p>热门玩乐城市</p>
              <ul>
                <li v-for="(item,index) in hotList" :key="index"
                @click="handleClick(item)"
                >{{item}}</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
// import { getCitiesList } from '../utils/api';
import BScroll from '@better-scroll/core';
// 引入betterscroll

export default {
  data() {
    return {
      firstList: ['杭州', '上海', '广州', '北京', '成都', '武汉', '苏州', '南京', '重庆', '厦门', '西安', '深圳'],
      secondList: ['温州', '宁波', '无锡', '黄山', '合肥', '南昌', '长沙', '天津', '佛山', '大连', '福州', '泉州', '郑州', '太原'],
      hotList: ['舟山', '建德', '丽水', '湖州', '婺源', '昆明', '大理', '丽江', '西双版纳', '桂林', '贵阳', '青岛', '恩施', '乐山', '兰州', '西宁', '银川', '拉萨', '乌鲁木齐', '三亚', '喀什', '呼伦贝尔', '赤峰', '惠州', '珠海', '清迈', '象岛', '东京', '大阪', '尼泊尔', '巴厘岛', '纳米比亚', '蒲甘', '越南', '扬州', '塞班'],
    };
  },
  mounted() {
    // this.getList();
    const bs = new BScroll('.wrap', {
      scrollY: true,
      click: true,
    });
    console.log(bs);
  },
  methods: {
    // async getList() {
    //   console.log(2);
    //   const res = await getCitiesList();
    //   console.log(res);
    // },
    handleClick(i) {
      this.$store.commit('changeCity', i);
      this.$router.go(-1);
      // console.log(i);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="less">
.van-nav-bar{
    background-color:#f7f7f7;
    .van-nav-bar__title{
        font-size: 18px;
        font-weight: 500;
    }
}
.city-list{
  z-index: 99;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background-color: #fff;
  .wrap{
    height: 766px;
  }
  p{
    font-size: 16px;
    color: #888;
    margin-bottom: 10px;
  }
  li{
    font-size: 16px;
    width: 106px;
    height: 36px;
    background-color: #f4f4f4;
    border-radius: 20px;
    text-align: center;
    line-height: 36px;
    margin: 0px 11px 10px 0;
  }
  .nearbyCity,.firstCity,.secondCity,.hotCity{
    margin:10px 0 0 15px;
    ul{
      display: flex;
      flex-wrap: wrap;
      li{
        flex-shrink: 0;
      }
    }
  }
}
</style>
