<template>
    <div>
      <van-tabs>
        <van-tab title="当地玩乐">
          <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          >
            <li v-for="(item,index) in list" :key="index">
              <img :src="item.imgUrl" />
              <div class="view-name">
                {{item.name}}
              </div>
              <span>{{item.type}}</span>
              <div class="tag">
                <span>{{item.tag}}</span>
              </div>
              <div class="bot">
                <p>￥<span>{{item.price}}</span>起</p>
                <span>{{item.numLabel}}人已报名</span>
              </div>
            </li>
          </van-list>
        </van-tab>
        <van-tab title="主题玩法">内容 2</van-tab>
        <van-tab title="自由行">内容 3</van-tab>
        <van-tab title="同城">内容 4</van-tab>
        <van-tab title="筛选">内容 4</van-tab>
      </van-tabs>
    </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          imgUrl: require('../../assets/images/hangzhou/view1.png'),
          name: '[游侠写真-复古]《复古时光》复古风格...',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view2.png'),
          name: '[小清新写真-和服少 女]《和服少女》',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍,小清新风格',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view1.png'),
          name: '[游侠写真-复古]《复古时光》复古风格...',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view2.png'),
          name: '[小清新写真-和服少 女]《和服少女》',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍,小清新风格',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view1.png'),
          name: '[游侠写真-复古]《复古时光》复古风格...',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view2.png'),
          name: '[小清新写真-和服少 女]《和服少女》',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍,小清新风格',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view1.png'),
          name: '[游侠写真-复古]《复古时光》复古风格...',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view2.png'),
          name: '[小清新写真-和服少 女]《和服少女》',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍,小清新风格',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view1.png'),
          name: '[游侠写真-复古]《复古时光》复古风格...',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view2.png'),
          name: '[小清新写真-和服少 女]《和服少女》',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍,小清新风格',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view1.png'),
          name: '[游侠写真-复古]《复古时光》复古风格...',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view2.png'),
          name: '[小清新写真-和服少 女]《和服少女》',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍,小清新风格',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view1.png'),
          name: '[游侠写真-复古]《复古时光》复古风格...',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view2.png'),
          name: '[小清新写真-和服少 女]《和服少女》',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍,小清新风格',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view1.png'),
          name: '[游侠写真-复古]《复古时光》复古风格...',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view2.png'),
          name: '[小清新写真-和服少 女]《和服少女》',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍,小清新风格',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view1.png'),
          name: '[游侠写真-复古]《复古时光》复古风格...',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view2.png'),
          name: '[小清新写真-和服少 女]《和服少女》',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍,小清新风格',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view1.png'),
          name: '[游侠写真-复古]《复古时光》复古风格...',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view2.png'),
          name: '[小清新写真-和服少 女]《和服少女》',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍,小清新风格',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view1.png'),
          name: '[游侠写真-复古]《复古时光》复古风格...',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view2.png'),
          name: '[小清新写真-和服少 女]《和服少女》',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍,小清新风格',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view1.png'),
          name: '[游侠写真-复古]《复古时光》复古风格...',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view2.png'),
          name: '[小清新写真-和服少 女]《和服少女》',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍,小清新风格',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view1.png'),
          name: '[游侠写真-复古]《复古时光》复古风格...',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view2.png'),
          name: '[小清新写真-和服少 女]《和服少女》',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍,小清新风格',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view1.png'),
          name: '[游侠写真-复古]《复古时光》复古风格...',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view2.png'),
          name: '[小清新写真-和服少 女]《和服少女》',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍,小清新风格',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view1.png'),
          name: '[游侠写真-复古]《复古时光》复古风格...',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view2.png'),
          name: '[小清新写真-和服少 女]《和服少女》',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍,小清新风格',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view1.png'),
          name: '[游侠写真-复古]《复古时光》复古风格...',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view2.png'),
          name: '[小清新写真-和服少 女]《和服少女》',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍,小清新风格',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view1.png'),
          name: '[游侠写真-复古]《复古时光》复古风格...',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view2.png'),
          name: '[小清新写真-和服少 女]《和服少女》',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍,小清新风格',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view1.png'),
          name: '[游侠写真-复古]《复古时光》复古风格...',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍',
          price: 598,
          numLabel: 86,
        },
        {
          imgUrl: require('../../assets/images/hangzhou/view2.png'),
          name: '[小清新写真-和服少 女]《和服少女》',
          type: '当地玩乐·写真旅拍·1天',
          tag: '杭州写真直接拍,小清新风格',
          price: 598,
          numLabel: 86,
        },
      ],
      loading: false,
      finished: false,
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      // setTimeout(() => {
      //   for (let i = 0; i < 10; i += 1) {
      //     this.list.push(this.list.length + 1);
      //   }

      //   // 加载状态结束
      //   this.loading = false;

      //   // 数据全部加载完成
      //   if (this.list.length >= 40) {
      //     this.finished = true;
      //   }
      // }, 1000);
    },
  },
};
</script>
<style lang="less" scoped>
.van-list{
  display: flex;
  flex-wrap: wrap;
  padding:0 20px 0 20px;
  justify-content: space-between;
  li{
    width: 160px;
    height: 200px;
    flex-shrink: 0;
    background-color:#F6F6F6;
    border-radius: 6px;
    margin-bottom: 15px;
    font-size: 12px;
    img{
      width: 160px;
      height: 100px;
      border-radius: 6px 6px 0 0;
    }
    .view-name{
      font-size: 16px;
    }
  }
}
</style>
