<template>
    <div class="recommend-wrap">
        <section >
            <div @click="active=0" :class="{myClass:active==0}">周边短途</div>
            <div @click="active=1" :class="{myClass:active==1}">当地玩乐</div>
        </section>
        <van-tabs type='line' border='true'>
        <van-tab  v-for="(item,index) in $store.state.weekList"
        :key='index'  :title="item.title">
            <van-swipe class="my-swipe" indicator-color="orange" loop=false>
              <van-swipe-item v-for="(item1,index1) in Math.ceil(item.productList.length/6)"
              :key="index1">
                <van-grid :column-num="3" >
                <van-grid-item  v-for="(value,num) in item.productList.slice(index1*6,6*index1+6)"
                :key="num" >
                <van-image  :src="value.image" />
                <p>{{value.simpleName}}</p>
                </van-grid-item>
                </van-grid>
              </van-swipe-item>
            </van-swipe>
        </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      navSelection: 0,
    };
  },
};
</script>

<style lang="less">
    .recommend-wrap{
        margin-top:20px;
        section{
        height: 67px;
        display: flex;
        div{
            flex-grow: 1;
            background: #E8E8E8;
            text-align: center;
            line-height: 67px;
            font-size: 20px;
            font-weight: 600;
        }
        .myClass{
            background: #fff;
        }
    }

    .van-swipe{
        .van-swipe__indicator--active{
            width: 20px;
        }
        .van-grid-item__content{
        font-size: 15px;
        .van-image{
         height: 80px;
     }
    }
    }
    }
</style>
