<template>
    <div class="function-wrap">
      <ul>
        <li>
          <p>亲子游</p>
          <span>寓教于乐</span>
        </li>
        <li>
           <p>摄影游</p>
           <span>记录美景</span>
        </li>
        <li>
           <p>户外游</p>
           <span>勇攀高峰</span>
        </li>
        <li>
           <p>瑜伽行</p>
           <span>无处不瑜伽</span>
        </li>
        <li>
           <p>小车团</p>
           <spam>醇享体验</spam>
        </li>
        <li>
           <p>探索星球</p>
           <span>全球踩线</span>
        </li>
        <li>
           <p>活动赛事</p>
           <span>炫酷运动</span>
        </li>
        <li>
           <p>游侠集市</p>
           <span>旅行必备</span>
        </li>
      </ul>
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

<style lang="less">
   .function-wrap{
      background: white;
      padding: 10px;
      ul{
         border-radius: 10px;
         border:solid 1PX #ccc;
         font-size: 14px;
         display: flex;
         flex-wrap: wrap;
           li{
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              flex-shrink: 0;
              width: 25%;
              height: 60px;
              border-right: 1PX solid #ccc;
              &:nth-child(-n+4){
                 border-bottom: 1PX solid #ccc;
              }
              &:nth-child(4n){
                 border-right: none;
              }
               p{
                  font-size: 16px;
               }
           }
      }
   }
</style>
