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
