<template>
    <div class="action-wrap">
        <section class="grid-up">
            <article>
                    <van-swipe :autoplay="3000" indicator-color="black">
                        <van-swipe-item
                        v-for="(value, num) in $store.state.dataList.saleProductList" :key="num">
                            <img class="img" :src="value.image" />
                        </van-swipe-item>
                    </van-swipe>
                </article>
                <article>
                    <p>闽南美食大全</p>
                    <p>尼泊尔徒步</p>
                </article>
        </section>
        <section class="grid-down">
            <van-grid :border="false" :column-num="3">
                <van-grid-item
                v-for="(item,index) in $store.state.dataList.activityBanner" :key="index">
                    <van-image src="item.image" />
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
            article{
                width: 187px;
                background: pink;
                padding: 5px;
                height: 200px
            }
            .img{
                width: 155px;
                height: 143px;
            }
        }
        .grid-down{
            .van-image{
            height: 100px;
        }
        }
    }
</style>
