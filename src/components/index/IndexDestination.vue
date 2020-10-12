<template>
    <div class="minority-wrap">
        <h3>{{$store.state.dataList.destination.title}}
            <span>{{$store.state.dataList.destination.subTitle}}</span>
        </h3>
        <van-tabs type='line' border='true'>
            <van-tab  v-for="(item,index) in $store.state.dataList.destination.tabList"
        :key='index'  :title="item.tabName">
                <section>
                    <article v-for="(value,num) in item.data.slice(0,3) " :key="num">
                        <img :src="value.image" >
                    </article>
                    <a v-for="(item1,index1) in item.data.slice(3,)"
                    :key="'text'+index1" :href="item1.redirct_url">
                       {{ item1.title}}
                    </a>
                </section>
            </van-tab>
        </van-tabs>
    </div>
</template>

<style lang="less" scoped>
    .minority-wrap{
        margin-top: 10px;
        background: white;
        h3{
            span{
                background: pink;
                font-size: 15px;
                border-radius: 10px;
                vertical-align: middle;
            }
        }
        section{
        display: flex ;
        overflow: auto;
        flex-wrap: wrap;
        justify-content: center;
        &::-webkit-scrollbar{
            display: none;
        }
        article{
            width: 30vw;
            flex-shrink: 0;
            margin: 1vw;
            img{
                width: 116px;
                height: 116px;
            }
        }
        a{
            flex-shrink: 0;
            border: 1px solid black;
            width: 30vw;
            margin: 1vw;
            font-size: 15px;
            text-align: center;
            font-weight: 600;
            height: 45px;
            line-height: 45px;
        }
    }
    }
</style>
