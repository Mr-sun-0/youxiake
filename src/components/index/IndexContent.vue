<template>
    <div class="content-wrap">
        <van-tabs type='line' border='true' @click="handleClick($event)" sticky >
                <van-tab v-for="(item,index) in $store.state.dataList.flowTabList"
            :key="index" :title="item.typeName" :name="item.type" >
                <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
              >
                <van-cell v-for="(value,num) in $store.state.flowData"
                :key="'flow'+num" >
                <img src="value.dataDetail.image"
                :class="{img1:value.dataDetail.handler}">
                <p>{{value.dataDetail.title}}</p>
                </van-cell>
</van-list>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      finished: false,
    };
  },
  mounted() {
    this.$store.dispatch('getflowData');
  },
  methods: {
    handleClick(event) {
      this.$store.commit('typeChange', event);
    },
    onLoad() {
      setTimeout(() => {
        this.$store.commit('pageChange', this.$store.state.page + 1);
        this.loading = false;
        // 数据全部加载完成
        if (this.$store.state.flowData.length > 50) {
          this.finished = true;
        }
      }, 1000);
    },
  },

  watch: {
    '$store.state.type': function () {
      this.$store.dispatch('getflowData');
    },
    '$store.state.page': function () {
      this.$store.dispatch('getflowData');
    },
  },
};
</script>

<style lang="less">
    .content-wrap{
        margin-top: 10px;
        .van-list{
          display: flex;
          flex-wrap:wrap ;
          .van-cell{
            flex-shrink: 0;
            width: 48%;
            height: 200px;
            p{
              overflow: hidden;
              text-overflow:ellipsis;
              -webkit-box-orient:vertical;
              -webkit-line-clamp:2;
              display:-webkit-box;
            }
          }
        }
    }
</style>
