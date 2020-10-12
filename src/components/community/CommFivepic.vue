<template>
    <div>
        <div class="loop" v-for="(item,index) in list"  :key="index">
            <span>{{item.title}}</span>
            <!-- <lazy-component> -->
            <img :src="item.imgurl" alt="" v-lazy="item.imgurl">
            <!-- </lazy-component> -->
            <div class="gl" v-if="index == 0">攻略</div>
            <div class="gl gl2" v-if="index == 1">涠洲岛</div>
            <div class="gl gl3" v-if="index == 1">攻略</div>
            <div class="username" v-if="index != 0 &&index !=1">
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
          title: '来贵州一定要打卡的知名景点-亚洲最大的瀑布：黄果树...', imgurl: require('../../assets/images/community/Fiveimg/big-img1.png'), num: '1813', num1: '1', username: 'LuCPhoto  在杭州',
        },
        {
          title: '北海涠洲岛该怎么 玩？跟着攻略玩转中国最年轻的火山岛~', imgurl: require('../../assets/images/community/Fiveimg/big-img2.png'), num: '9343', num1: '13', username: 'Miss Volare  在重庆',
        },
        {
          title: '杭州夏日建筑风景记 实杭州来过好几次了，这是一个美丽的地方，每次来...', imgurl: require('../../assets/images/community/Fiveimg/big-img3.png'), num: '2321', num1: '6', username: 'LuCPhoto  在杭州',
        },
        {
          title: '纪念平凡生活中的那 些高光时刻 | 2019年终总结', imgurl: require('../../assets/images/community/Fiveimg/big-img4.png'), num: '4551', num1: '4', username: 'MissVolare  在重庆',
        },
        {
          title: '生活不是为了赶路 而 是为了感受路--武功山', imgurl: require('../../assets/images/community/Fiveimg/big-img5.png'), num: '1154', num1: '8', username: '大大大雄  在武山',
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
