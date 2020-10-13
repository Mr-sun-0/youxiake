<template>
  <div class="container">
    <nav class="my-tabs">
      <div class="imgicon" @click="toindex">
        <img src="../../../assets/images/community/compic/1111.png" alt="">
        </div>
      <ul>
        <li
          v-for="(item, index) in tabsList"
          :key="index"
          :class="{ active: activeIndex === index }"
          @click="tabsChange(index, item.url)"
        >
          {{ item.title }}
          <div class="underLine" v-if="activeIndex === index"></div>
        </li>
      </ul>
    </nav>
    <router-view class="view"></router-view>
  </div>
</template>

<script>

export default {
  data() {
    return {
      tabsList: [
        {
          title: '精华',
          url: '/js',
        },
        {
          title: '全部',
          url: '/all',
        },
      ],
      activeIndex: 0,
    };
  },
  methods: {
    tabsChange(i, url) {
      this.activeIndex = i;
      this.$router.push(url);
    },
    toindex() {
      this.$router.push('/community');
    },
  },
};
</script>
<style lang='less' scope>
.container {
  width: 100%;
  min-height: fit-content;
  background: white;
  top: 0; left: 0; bottom: 0; right: 0;
  z-index: 999;
  position: absolute;;
  .my-tabs {
    position: fixed;
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 15px;
    background: #f7f7f7;
    .imgicon{
      width: 24px;
      height: 24px;
      position: relative;
      img{
         width: 26px;
      height: 20px;
      position: absolute;
      top: 0;
      }
    }
    address {
      color: #666;
    }

    ul {
      display: flex;
      align-items: center;
      color: #666;
      background: #f7f7f7;
      height: 100%;

      li {
        padding: 0 50px;
        height: 100%;
        line-height: 44px;
        padding-left: 1.26667rem;
        position: relative;

        .underLine {
          position: absolute;
          width: 100%;
          height: 3px;
          border-radius: 1.5px;
          background: #fedb35;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
      }

      .active {
        font-size: 18px;
        color: #fedb35;
        font-weight: 900;
      }
    }
  }
  .view{
      position: absolute;
      top: 42px;
      width: 100%;
      height:4000px;
  }
}
</style>
