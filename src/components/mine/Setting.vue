<template>
    <div>
        <van-nav-bar
        title="设置"
        left-arrow
        @click-left="onClickLeft"
        />
        <van-cell-group>
            <van-cell title="账号安全" value=">" />
            <van-cell title="隐私设置" value=">" />
            <van-cell title="关于游侠客" value=">" />
            <van-cell title="隐私政策和用户协议" value=">" />
            <van-cell title="检查更新" value=">" />
            <van-cell title="清理缓存" value="55.86M>" />
            <van-cell title="意见建议" value=">" />
        </van-cell-group>
    </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
    //   console.log(1);
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="less" scoped>

</style>
