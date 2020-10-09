<template>
    <nav class="Tabs">
        <ul>
            <li v-for="(item,index) in tabsList" :key="index"
            :class="{active : activeIndex==index}" @click="tabsChange(index,item.url)">
                {{item.title}}
                <div class="underLine" v-if="activeIndex==index"></div>
            </li>

        </ul>
        <span class="iconfont icon-fangdajing"></span>
    </nav>
</template>
<script>
export default {
  data() {
    return {
      // tabsList:['热映','影院','待映','经典电影'],
      tabsList: [
        {
          title: '预定',
          url: '/rese',
        },
        {
          title: '旅途',
          url: '/trip',
        },
        {
          title: '攻略',
          url: '/strategy',
        },
        {
          title: '游记',
          url: '/note',
        },
        {
          title: '视频',
          url: '/movie',
        },
      ],
      activeIndex: 0,

    };
  },
  computed: {
  },
  methods: {
    tabsChange(i, url) {
      this.activeIndex = i;
      this.$router.push(url);
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../assets/css/var.less";
.Tabs{
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
    border-bottom: 2px solid #ccc;
    address{
        color:#666;
    }
    ul{
        display: flex;
        color: #666;
        width: 100%;
        height: 100%;
        li{
            padding: 0 20px;
            height: 100%;
            line-height: 44px;
            position: relative;
            font-weight: 500;
            z-index: 99;
            .underLine {
                position: relative;
                top: -15px;
                left: 50%;
                width: 35px;
                height: 3px;
                border-radius: 6px;
                background: orange;
                transform: translateX(-50%);
            }

        }
        .active {
                color: #000;
                font-weight: 900;
            }
    }
}
</style>
