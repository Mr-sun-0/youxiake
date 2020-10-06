<template>
  <div class="wrap">
    <div class="headwrap">
      <div class="setting">
        <span>
          <van-icon name="setting-o" />
        </span>
        <span>
          <van-icon name="chat-o" />
        </span>
      </div>
      <div class="top">
        <van-image
          round
          width="1.2rem"
          height="1.2rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <span>点击登录/注册</span>
      </div>
      <ul class="headbottom">
        <li v-for="(item, index) in headList" :key="index">
          <span>{{ item.count }}</span>
          <span>{{ item.content }}</span>
        </li>
        <li>
          <p>
            <img src="../../assets/icon/mine/icon1@2x.png" alt="" />
          </p>
          <span>每日签到</span>
        </li>
      </ul>
    </div>
    
    <div class="mainwrap">
        <!-- 出行订单 -->
      <div class="travel">
        <div class="travel-top">
          <span>出行订单</span>
          <span>查看全部 > </span>
        </div>
        <div class="menu">
          <li v-for="(item, index) in travelList" :key="index">
            <img :src="item.icon" alt="" />
            <!-- <img src="../../assets/icon/mine/icon01@2x.png" alt=""> -->
            <span>{{ item.msg }}</span>
          </li>
        </div>
      </div>
       <div class="go">
        <img src="../../assets/icon/mine/iconbg@2x.png" alt="" >
        </div>
        <!-- 我的服务 -->
        <div class="myserve">
            <span>我的服务</span>
            <div class="menu menu1">
                <li v-for="(item, index) in myserveList" :key="index">
                    <img :src="item.icon" alt="" />
                    <!-- <img src="../../assets/icon/mine/icon06@2x.png" alt=""> -->
                    <span>{{ item.msg }}</span>
                </li>
            </div>
        </div>
        <div class="sel">精选推荐</div>
        <div class="recommend">
            <li v-for="(item,index) in recommendList" :key="index">
                <img :src="item.img" alt="">
                <span class="describe">{{item.describe}}</span>
                <span class="price">￥{{item.price}}</span>
            </li>
        </div>
    </div>
   
  </div>
</template>
<script>
export default {
  data() {
    return {
      headList: [
        {
          count: 0,
          content: "收藏",
        },
        {
          count: 0,
          content: "浏览",
        },
        {
          count: 0,
          content: "动态",
        },
      ],
      travelList: [
        {
          icon: require("@/assets/icon/mine/icon01@2x.png"),
          msg: "待付款",
        },
        {
          icon: require("@/assets/icon/mine/icon02@2x.png"),
          msg: "报名成功",
        },
        {
          icon: require("@/assets/icon/mine/icon03@2x.png"),
          msg: "替补",
        },
        {
          icon: require("@/assets/icon/mine/icon04@2x.png"),
          msg: "待评价",
        },
        {
          icon: require("@/assets/icon/mine/icon05@2x.png"),
          msg: "退款/取消",
        },
      ],
      myserveList:[
          {
          icon: require("@/assets/icon/mine/icon06@2x.png"),
          msg: "签证订单",
          },
           {
          icon: require("@/assets/icon/mine/icon07@2x.png"),
          msg: "集市订单",
          },
           {
          icon: require("@/assets/icon/mine/icon08@2x.png"),
          msg: "集市购物车",
          },
           {
          icon: require("@/assets/icon/mine/icon09@2x.png"),
          msg: "常用信息",
          },
           {
          icon: require("@/assets/icon/mine/icon10@2x.png"),
          msg: "分享APP",
          },
           {
          icon:require("@/assets/icon/mine/icon11@2x.png"),
          msg: "在线客服",
          },
           {
          icon: require("@/assets/icon/mine/icon12@2x.png"),
          msg: "意见建议",
          },
      ],
      recommendList:[
          {
              img:'http://gallery.youxiake.com/Public/Data/upload/productimg/202007/02/5efd71ad3d0e4.jpg?imageslim',
              describe:'[越野派 • 羌塘无人区]游侠客获官方正规许可！世界第三极普若岗日 / 追寻野生动物足迹 / 驰骋藏地一措再措 / 泡巴岭八千万年温泉，10%挑战级路况，驶向荒野9日探险',
              price:'16800'
          },
            {
              img:'http://gallery.youxiake.com/Public/Data/upload/productimg/202005/26/5eccd5007bec8.jpg?imageslim',
              describe:'[越野派 • 羌塘无人区]游侠客获官方正规许可！世界第三极普若岗日 / 追寻野生动物足迹 / 驰骋藏地一措再措 / 泡巴岭八千万年温泉，10%挑战级路况，驶向荒野9日探险',
              price:'16800'
          },
            {
              img:'http://gallery.youxiake.com/Public/Data/upload/productimg/202007/09/5f067ef56c070.jpg?imageslim',
              describe:'[越野派 • 羌塘无人区]游侠客获官方正规许可！世界第三极普若岗日 / 追寻野生动物足迹 / 驰骋藏地一措再措 / 泡巴岭八千万年温泉，10%挑战级路况，驶向荒野9日探险',
              price:'16800'
          },
            {
              img:'http://gallery.youxiake.com/Public/Data/upload/productimg/201711/21/5a1414ece2408.jpg?imageslim',
              describe:'[越野派 • 羌塘无人区]游侠客获官方正规许可！世界第三极普若岗日 / 追寻野生动物足迹 / 驰骋藏地一措再措 / 泡巴岭八千万年温泉，10%挑战级路况，驶向荒野9日探险',
              price:'16800'
          },
            {
              img:'http://gallery.youxiake.com/Public/Data/upload/productimg/201907/16/5d2da20d4d923.jpg?imageslim',
              describe:'[越野派 • 羌塘无人区]游侠客获官方正规许可！世界第三极普若岗日 / 追寻野生动物足迹 / 驰骋藏地一措再措 / 泡巴岭八千万年温泉，10%挑战级路况，驶向荒野9日探险',
              price:'16800'
          },
             {
              img:'http://gallery.youxiake.com/Public/Data/upload/productimg/201904/24/5cbfdab65dd77.jpg?imageslim',
              describe:'[越野派 • 羌塘无人区]游侠客获官方正规许可！世界第三极普若岗日 / 追寻野生动物足迹 / 驰骋藏地一措再措 / 泡巴岭八千万年温泉，10%挑战级路况，驶向荒野9日探险',
              price:'16800'
          },
      ]
    };
  },
};
</script>
<style lang="less" scoped>
.wrap{
    background-color: #f3f3f3;
}
.headwrap {
//   position: relative;
  padding-left: 20px;
  padding-top: 40px;
  height: 200px;
  background: #fff url(../../assets/images/mine/mine-bg.png) 50% no-repeat;
  background-size: cover;
}
.setting {
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  > span:first-child {
    margin-right: 20px;
  }
  margin-bottom: 10px;
}
.top {
  display: flex;
  align-items: center;
  span {
    font-size: 18px;
    font-weight: 700;
    color: #000;
    margin-left: 10px;
  }
}
.headbottom {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
      font-size: 14px;
      // font-weight: 700;
      color: #000;
    }
    >span:first-child{
         height: 25px;
    }
    
  }
  >li:last-child p img{
      width: 30px;
      height: 25px;
  }

}
.mainwrap {
  padding: 0 10px;
  
  .travel {
    padding: 15px;
    margin-top: 10px;
      background-color: #ffffff;
    .travel-top {
      display: flex;
      justify-content: space-between;
      span{
           font-size: 18px;
      }
      >span:first-child{
          font-weight: 700;
      }
    }
    .menu {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;
      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
         img{
                 width: 40px;
                 height: 40px;
             }
        span{
            margin-top: 10px;
             font-size: 14px;
             display: block;
            
        }
      }
    }
  }
  .go{
      width: 100%;
      height: 60px;
      margin: 10px 0;
      img{
          width: 100%;
          height: 100%;
      }
  }
  .myserve{
        background-color: #ffffff;
         padding: 15px;
         padding-top: 0;
      span{
        font-size: 18px;
       font-weight: 700;
       
      }
      .menu {
      display: flex;
    //   justify-content: space-around;
      flex-wrap: wrap;
      margin-top: 20px;
      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        width: 25%;
         img{
                 width: 25px;
                 height: 25px;
             }
        span{
            margin: 10px 0;
             font-size: 14px;
              display: block;
            
        }
      }
    }
  }
  .sel{
      height: 40px;
      text-align: center;
      line-height: 40px;
  }
  .recommend{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li{
          width: 48%;
          background-color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
           border-radius: .07rem;
           margin-bottom: 15px;
          img{
            width: 100%;
            height: 120px;
            border-radius: .07rem;
          }
          .describe{
              display: block;
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 18px;
              font-weight: 700px;
              margin: 10px 0;
          }
          .price{
              font-size: 16px;
              color: orange;
          }
      }
  }
  
}
</style>