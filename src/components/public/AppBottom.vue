<template>
    <div class="tabbar-wrap">
      <van-tabbar route active-color="orange" placeholder >
        <van-tabbar-item replace to='/index' >
        <img src="../../assets/icon/public/icon01.png">
        <p>首页</p>
        </van-tabbar-item>
        <van-tabbar-item replace to='/hangzhou'>
        <img src="../../assets/icon/public/icon02.png">
        <p>杭州</p>
        </van-tabbar-item>
        <van-tabbar-item replace to='/meet'>
        <img src="../../assets/icon/public/icon03.png">
        <p>遇见</p>
        </van-tabbar-item>
        <van-tabbar-item replace to='/community'>
        <img src="../../assets/icon/public/icon04.png">
        <p>社区</p>
        </van-tabbar-item>
        <van-tabbar-item replace to='/mine'>
        <img src="../../assets/icon/public/icon05.png">
        <p>我的</p>
        </van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<style lang="less" scoped>
  .tabbar-wrap{
    img{
      width: 25px;
      height: 25px;
    }
  }
</style>
