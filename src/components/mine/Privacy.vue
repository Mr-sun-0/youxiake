<template>
    <div class="security">
        <van-nav-bar
        title="隐私设置"
        left-arrow
        @click-left="onClickLeft"
        />
        <van-cell-group>
            <van-cell title="已开启新通知">
            </van-cell>

            <van-cell title="显示活动报名" center>
                <template #right-icon>
                    <van-switch v-model="checked1" size="24px" active-color="#07c160"/>
                </template>
            </van-cell>
            <van-cell title="允许他人通过报名名单查看个人信息" center>
                 <template #right-icon>
                     <van-switch v-model="checked2" size="24px" active-color="#07c160"/>
                </template>

            </van-cell>
            <van-cell title="允许评价内容被推荐后同步至我的遇见" center>
                    <template #right-icon>
                     <van-switch v-model="checked3" size="24px" active-color="#07c160"/>
                </template>
            </van-cell>
        </van-cell-group>
    </div>
</template>
<script>
export default {
  data() {
    return {
      checked1: true,
      checked2: true,
      checked3: true,
    };
  },
  methods: {
    onClickLeft() {
    //   console.log(1);
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="less" scoped>
.security{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 99;
}

</style>
