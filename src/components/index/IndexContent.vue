<template>
    <div class="content-wrap">
        <van-tabs type='line' border='true' @click="handleClick()" sticky >
                <van-tab v-for="(item,index) in $store.state.dataList.flowTabList"
            :key="index" :title="item.typeName" :tabType="item.type" ref="tabChild" >
                <section v-for="(value,num) in $store.state.flowData"
                :key="'flow'+num">
                    <img src="value.dataDetail.image"
                    :class="{img1:value.dataDetail.handler}">
                </section>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('getflowData');
  },
  methods: {
    handleClick() {
      this.$store.commit('typeChange', this.$refs.tabChild.tabType);
    },
  },
  watch: {
    '$store.state.type': function () {
      this.$store.dispatch('getflowData');
    },
  },
};
</script>

<style lang="less" scoped>
    .content-wrap{
        margin-top: 10px;
        section{
            height: 229px;
            width: 48%;
            float: left;
            margin-left: 1vw;
        }
    }
</style>
