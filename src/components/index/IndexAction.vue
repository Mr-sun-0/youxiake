<template>
    <div class="action-wrap">
        <section class="grid-up">
            <article class="art-left">
                    <van-swipe :autoplay="3000" indicator-color="black">
                        <van-swipe-item
                        v-for="(value, num) in $store.state.dataList.saleProductList" :key="num">
                            <h4>限时特惠</h4>
                            <div>
                            <img class="img" :src="value.image" />
                             <aside>
                                 <span class="van-multi-ellipsis--l2">{{value.productName}}</span>
                                 <span>{{value.priceLabel}}起</span>
                             </aside>
                            </div>
                        </van-swipe-item>
                    </van-swipe>
                </article>
                <article class="art-right">
                    <li>{{$store.state.dataList.kingProduct.title}}</li>
                    <li>{{$store.state.dataList.newProduct.title}}</li>
                </article>
        </section>
        <section class="grid-down">
            <van-grid :border="false" :column-num="3">
                <van-grid-item
                v-for="(item,index) in $store.state.dataList.activityBanner"
                :key="index" style="{background:item.image}">
                 <h4>{{item.title}}</h4>
                 <p>{{item.subTitle}}</p>
                </van-grid-item>
            </van-grid>
        </section>
    </div>
</template>

<style lang="less" scoped>
    .action-wrap{
        margin-top: 20px;
        .grid-up{
            display: flex;
            justify-content: center;
            .art-left{
                width: 50%;
                background:#FF5C5C;
                height: 200px;
                font-size: 12px;
            }
            .van-swipe-item{
                  width: 155px;
                  height: 143px;
                  margin: auto;
                  padding: 10px;
                  h4{
                      color: white;
                  }
                  div{
                    display: flex;
                    flex-direction: column;
                    img{
                      height: 70px;
                    }
                    aside{
                        width: 140px;
                        height: 70px;
                    }
                  }
                }
            .art-right{
                background: #FFD14A;
                width: 50%;
                display: flex;
                flex-direction: column;
                padding: 5px;
                color: white;
                  li{
                      flex-shrink: 0;
                      flex-grow: 1;
                  }
            }
        }
        .grid-down{
           font-size: 15px;
        }
    }
</style>
