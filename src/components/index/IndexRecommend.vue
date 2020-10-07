<template>
    <div class="recommend-wrap">
        <section >
            <div @click="active=0" :class="{myClass:active==0}">周边短途</div>
            <div @click="active=1" :class="{myClass:active==1}">当地玩乐</div>
        </section>
        <nav>
            <div v-for="(item,index) in navList" :key="index"
            @click="navSelection=index" :class="{navStyle:navSelection==index}">{{item}}</div>
        </nav>
        <van-grid :column-num="3">
            <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
            </van-grid>
        </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      navList: ['本周活动', '下周活动', '清凉海岛', '亲子游玩'],
      navSelection: 0,
    };
  },
};
</script>

<style lang="less" scoped>
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
    nav{
            display: flex;
            justify-content: space-around;
            div{
                padding: 0 8px;
                height: 36px;
                border: 1px solid #E8E8E8;
                border-radius: 20px;
                font-size: 18px;
                text-align: center;
                line-height: 36px;
            }
            .navStyle{
                color: #E3AC06;
            }
        }
    }
</style>
