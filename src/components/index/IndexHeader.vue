<template>
    <div class="header-wrap">
        <span>杭州</span>
        <van-search
        v-model="value"
        shape="round"
        background='orange'
        />
        <img src="../../assets/images/index/saosao.png">
    </div>
</template>

<script>
export default {
  data() {
    return {
      value: '搜索全球小众目的地和创意玩法',
    };
  },
};
</script>

<style lang="less" scoped>
    .header-wrap{
        display: flex;
        justify-content: space-around;
        width: 100%;
        align-items: center;
        span{
            height: 45px;
            line-height: 45px;
            font-size: 15px;
            font-family: PingFang;
            font-weight: bold;
            color: #343434;
        }
        van-search{
            height: 96px;
            background: #FFFFFF;
            border-radius: 48px;
        }
        img{
            width: 30px;
            height: 30px;
        }
    }
</style>
