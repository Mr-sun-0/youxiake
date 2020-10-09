<template>
    <div class="hang-mid">
        <div class="top">
            <p>{{context}}</p>
            <span>→</span>
        </div>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <p class="cont-top">{{item.title}}</p>
                <p class="cont-bot">{{item.cont}}</p>
            </li>
        </ul>
        <div class="view">
            <ul class="tit">
                <li v-for="(item,index) in view"
                :key="index"
                @click="isActive=index"
                :class="{active:isActive === index}"
                >
                    {{item}}
                </li>
            </ul>
            <ul class="view-bot" v-if="isActive===0">
                <li v-for="(item,index) in hotView" :key="index">
                    <img :src="item.imgUrl" alt="">
                    <p>{{item.nm}}</p>
                </li>
            </ul>
            <ul class="view-bot" v-else>
                <li v-for="(item,index) in nearbyView" :key="index">
                    <img :src="item.imgUrl" alt="">
                    <p>{{item.nm}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      context: '杭州之美，除了集江南神韵于一身的西湖十景人文 景观同样丰富多彩，素体春晓、平湖秋月、灵隐...',
      list: [
        { title: '最佳季节', cont: '9-11月：天气秋高气 爽，满陇桂雨的桂...' },
        { title: '最佳季节', cont: '9-11月：天气秋高气 爽，满陇桂雨的桂...' },
        { title: '最佳季节', cont: '9-11月：天气秋高气 爽，满陇桂雨的桂...' },
        { title: '最佳季节', cont: '9-11月：天气秋高气 爽，满陇桂雨的桂...' },
      ],
      view: ['热门景点', '附近景点'],
      isActive: 0,
      hotView: [
        { imgUrl: '', nm: '西湖' },
        { imgUrl: '', nm: '西湖' },
        { imgUrl: '', nm: '西湖' },
        { imgUrl: '', nm: '西湖' },
        { imgUrl: '', nm: '西湖' },
      ],
      nearbyView: [
        { imgUrl: '', nm: '附近景点' },
        { imgUrl: '', nm: '附近景点' },
        { imgUrl: '', nm: '附近景点' },
        { imgUrl: '', nm: '附近景点' },
        { imgUrl: '', nm: '附近景点' },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.hang-mid{
    width: 100%;
    height: 360px;
    padding-top: 20px;
    padding-left: 20px;
    background-color: #fff;
    border-radius: 10px;
    position: relative;
    top: -50px;
    .top{
        font-size: 16px;
        width: 100%;
        height: 36px;
        display: flex;
        padding:0 50px 0 0px;
        justify-content: space-around;
        overflow: hidden;
        span{
            margin-left: 15px;
        }
    }
    ul{
        margin-top: 20px;
        display:flex;
        justify-content: space-between;
        overflow:auto;
        li{
            width: 150px;
            height: 80px;
            background-color: #ccc;
            flex-shrink: 0;
            margin-right: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding-left: 20px;
            border-radius: 6px;
            .cont-top{
                font-size: 16px;
                font-weight: 600;
            }
            .cont-bot{
                font-size: 14px;
            }
        }
    }
    ul::-webkit-scrollbar{
            display: none;
    }
    .view{
        .tit{
            width: 240px;
            li{
                display: block;
                width: 100px;
                height: 36px;
                line-height: 36px;
                font-size: 16px;
                background-color: #fff;
                border: 1px solid #ccc;
                border-radius: 36px;
            }
            .active{
                background-color: #FFE559;
            }
        }
        .view-bot{
            li{
                width: 150px;
                height: 120px;
                padding: 0;
                img{
                    width: 150px;
                    height: 90px;
                    display: block;
                    border-radius: 3px;
                    background-color: lawngreen;
                }
                p{
                    font-size: 16px;
                    font-weight: 600;
                    text-align: center;
                }
            }
        }
    }
}
</style>
