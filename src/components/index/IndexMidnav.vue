<template>
    <div class='midnav-wrap'>
       <section v-for="(view,index) in midnav" :key="index">
           <img :src="view.url">
           {{view.text}}
        </section>
    </div>
</template>

<script>
export default {
  data() {
    return {
      midnav: [{ text: '周边游', url: '@/assets/images/index/icon01.png' }, { text: '国内游', url: '@/assets/images/index/icon02.png' }, { text: '出境游', url: '@/assets/images/index/icon03.png' }, { text: '自由行', url: '@/assets/images/index/icon04.png' }, { text: '主题游', url: '@/assets/images/index/icon05.png' }],
    };
  },
};
</script>

<style lang="less" scoped>
    .midnav-wrap{
      display: flex;
      justify-content: space-around;
      font-size: 12px;
      section{
        display: flex;
        flex-direction: column;
      }
    }
</style>
