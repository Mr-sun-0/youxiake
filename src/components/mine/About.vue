<template>
    <div class="about">
         <van-nav-bar
        title="关于"
        left-arrow
        @click-left="onClickLeft"
        />
        <div class="logo">
            <img src="../../assets/login.png" alt="">
            <span>关于游侠客</span>
        </div>
        <div class="content">游侠客推出的移动客户端——游侠客APP，是一款提供特色旅游目的地的深度搜索和便捷预订、记录分旅
行见闻的旅行APP。致力于打造全方位个性化旅游体验，让您随时随地来场说走就走的旅行。游侠客APP,旅行者的必备行囊。</div>
    </div>
</template>
<script>
export default {

  data() {
    return {

    };
  },
  methods: {
    onClickLeft() {
    //   console.log(1);
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="less" scoped>
.about{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 99;
}
.logo{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    border-bottom: 1px solid #cccccc;
    img{
        width: 80px;
        height: 80px;

    }
    span{
        font-size: 20px;
        font-weight: 700;
    }
}
.content{
    padding: 0 10px;
    font-size: 18px;
}
</style>
