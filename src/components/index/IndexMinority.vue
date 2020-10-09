<template>
    <div>
        <h4>小众种草</h4>
        <section>
            <article v-for="(item,index) in $store.state.dataList.minority" :key="index">
                <img src="item.image" >
            </article>
        </section>
    </div>
</template>

<style lang="less" scoped>
    section{
        display: flex ;
        overflow: auto;
        &::-webkit-scrollbar{
            display: none;
        }
        article{
            width: 30vw;
            flex-shrink: 0;
        }
    }
</style>
