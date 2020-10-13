<template>
    <div class="minority-wrap">
        <h3>{{$store.state.dataList.minority.title}}
            <span>{{$store.state.dataList.minority.subTitle}}</span>
        </h3>
        <section>
            <article v-for="(item,index) in $store.state.dataList.minority.data" :key="index">
                <img :src="item.image" >
            </article>
        </section>
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
        &::-webkit-scrollbar{
            display: none;
        }
        article{
            width: 30vw;
            flex-shrink: 0;
            margin: 0 10px;
            img{
                height: 152px;
            }
        }
    }
    }
</style>
