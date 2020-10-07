<template>
    <div>
      <van-grid :border="true" :column-num="4" :center="true" :gutter="1">
        <van-grid-item>
          <p>亲子游</p>
          <p>寓教于乐</p>
        </van-grid-item>
        <van-grid-item>
           <p>摄影游</p>
           <p>记录美景</p>
        </van-grid-item>
        <van-grid-item>
           <p>户外游</p>
           <p>勇攀高峰</p>
        </van-grid-item>
        <van-grid-item>
           <p>瑜伽行</p>
           <p>无处不瑜伽</p>
        </van-grid-item>
        <van-grid-item>
           <p>小车团</p>
           <p>醇享体验</p>
        </van-grid-item>
        <van-grid-item>
           <p>探索星球</p>
           <p>全球踩线</p>
        </van-grid-item>
        <van-grid-item>
           <p>活动赛事</p>
           <p>炫酷运动</p>
        </van-grid-item>
        <van-grid-item>
           <p>游侠集市</p>
           <p>旅行必备</p>
        </van-grid-item>
      </van-grid>
    </div>
</template>

<script>
export default {
  data() {
    return {
      FunctionName: [],
    };
  },
};
</script>

<style lang="less" scoped>
    p{
    font-size: 16px;
    margin: 0;
    padding: 0;
    &:last-of-type{
    font-size: 14px;
    }
   }
</style>
