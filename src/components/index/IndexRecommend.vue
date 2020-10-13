<template>
    <div class="recommend-wrap">
        <section >
            <div @click="active=0" :class="{myClass:active==0}">周边短途</div>
            <div @click="active=1" :class="{myClass:active==1}">当地玩乐</div>
        </section>
        <van-tabs swipe-threshold=4 line-height=0>
        <van-tab  v-for="(item,index) in $store.state.weekList"
        :key='index'  :title="item.title">
            <van-swipe class="my-swipe" indicator-color="orange" loop=false>
              <van-swipe-item v-for="(item1,index1) in Math.ceil(item.productList.length/6)"
              :key="index1">
                <van-grid :column-num="3" border=false >
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
        margin-top:10px;
        background: white;
        section{
        height: 60px;
        display: flex;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        div{
            flex-grow: 1;
            background: #E8E8E8;
            text-align: center;
            line-height: 60px;
            font-size: 20px;
            font-weight: 600;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            &:nth-child(1){
            border-top-left-radius: 10px;
            }
            &:nth-child(2){
            border-top-right-radius: 10px;
            }
        }
        .myClass{
            background: #fff;
        }
    }
    .van-tab{
      border: 1px solid #ccc;
      border-radius: 15px;
      height: 30px;
      margin: auto 10px;
    }
    .van-swipe{
        .van-swipe__indicator--active{
            width: 20px;
        }
        .van-grid-item{
        border-radius: 5px;
        font-size: 15px;
        .van-image{
         height: 87px;
     }
    }
    }
    }
</style>
