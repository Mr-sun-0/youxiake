<template>
    <div>
        <div class="loop" v-for="(item,index) in list"  :key="index">
            <span>{{item.title}}</span>
            <!-- <lazy-component> -->
            <img :src="item.imgurl" alt="" v-lazy="item.imgurl">
            <!-- </lazy-component> -->
            <!-- <div class="gl" v-if="index == 0">攻略</div>
            <div class="gl gl2" v-if="index == 1">涠洲岛</div>
            <div class="gl gl3" v-if="index == 1">攻略</div> -->
            <div class="username">
                <img src="../../assets/images/community/block2/squre-icon.png" alt="">
                <span  class="un_wz">{{item.username}}</span>
            </div>
            <div class="plly">
                <img src="../../assets/images/community/block2/eys-icon.png" alt="">
                <span>{{item.num}}</span>
                <span class="kge"></span>
                <img src="../../assets/images/community/block2/ly-icon.png" alt="">
                <span>{{item.num1}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          title: '步行栈道沿沟蜿蜒修建瀑布、清潭数不胜数...', imgurl: require('../../assets/images/community/compic/5efdb5c75ad32.jpg'), num: '2221', num1: '55', username: 'LuCPhoto  在杭州',
        },
        {
          title: '帝王同款宿坊，去日本禅宗发源地「径山」与民宿掌门人品茗问道~', imgurl: require('../../assets/images/community/compic/5f6ae91831d7e.jpg'), num: '6388', num1: '122', username: 'Miss Volare  在重庆',
        },
        {
          title: '杭州夏日建筑风景记 实杭州来过好几次了，这是一个美丽的地方，每次来...', imgurl: require('../../assets/images/community/compic/3.jpg'), num: '1233', num1: '7', username: 'LuCPhoto  在杭州',
        },
        {
          title: '避开汹涌人流，与二三好友，坐对秋日空山，入住设计美墅，嬉游露天恒温泳池', imgurl: require('../../assets/images/community/compic/4.jpg'), num: '2555', num1: '8', username: 'MissVolare  在重庆',
        },
        {
          title: '<游侠风 • 独立设计系列>独创大众户外线路！九江高铁站集合，含接送，...', imgurl: require('../../assets/images/community/compic/5.jpg'), num: '1154', num1: '8', username: '大大大雄  在武山',
        },
      ],
    };
  },
};
</script>

<style lang="less" scope>
    .loop{
        width: 95%;
        margin-left: 10px;
        height: 200px;
        border-bottom: 1px solid #E8E8E8;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        span{
            font-size: 18px;
            font-family: PingFang;
            font-weight: bold;
            color: #333333;
            line-height: 23px;
            margin-top: -25px;
        }
        img{
            width: 180px;
            height: 120px;
        }
        .plly{
            width: 100px;
            height: 30px;
            position: absolute;
            bottom: 10px;
            right: 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 15px;
                height: 12px;
            }
            span{
                font-size: 11px;
                margin-top: 0;
            }
            .kge{
                width: 20px;
            }
        }
        .gl{
            width: 30px;
            height: 20px;
            background: #FEDB35;
            position: absolute;
            left: 0;
            bottom: 20px;
            font-size: 10px;
            text-align: center;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
        }
         .gl2{
             width: 40px;
            position: absolute;
            bottom: 50px;
        }
        .gl3{
            position: absolute;
             bottom: 0px;
        }
        .username{
            width: 180px;
            position: absolute;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            bottom: 10px;
            left: 0;
            img{
                width: 30px;
                height: 30px;
                margin-right: 20px;
            }
            .un_wz{
                font-size: 14px;
                font-family: Lato;
                font-weight: bold;
                color: #818181;
                margin: 0;
            }
        }
    }
</style>
