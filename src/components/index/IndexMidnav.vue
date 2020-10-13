<template>
    <div class='midnav-wrap'>
       <router-link class="section" v-for="(view,index) in midnav" :key="index" to="/index/country">
           <img :src=view.url>
            <span> {{view.text}}</span>
       </router-link>
    </div>
</template>

<script>
export default {
  data() {
    return {
      midnav: [{ text: '周边游', url: require('@/assets/images/index/icon01.png') }, { text: '国内游', url: require('@/assets/images/index/icon02.png') }, { text: '出境游', url: require('@/assets/images/index/icon03.png') }, { text: '自由行', url: require('@/assets/images/index/icon04.png') }, { text: '主题游', url: require('@/assets/images/index/icon05.png') }],
    };
  },
};
</script>

<style lang="less" scoped>
    .midnav-wrap{
      display: flex;
      justify-content: space-around;
      font-size: 12px;
      background: #fff;
      padding: 5px 0;
      .section{
        display: flex;
        flex-direction: column;
          img{
            width:40px;
            height: 40px;
            margin-bottom:10px ;
          }
      }
    }
</style>
