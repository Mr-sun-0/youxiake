<template>
    <div class="anquan">
        <van-nav-bar
        title="账号安全"
        left-arrow
        @click-left="onClickLeft"
        />
        <van-cell-group>
            <van-cell title="手机号" is-link  />
            <van-cell title="邮箱号" is-link />
            <van-cell title="微信" is-link />
            <van-cell title="QQ" />
            <van-cell title="微博" is-link />
            <van-cell title="修改密码" is-link  />
            <van-cell title="账号注销" is-link />
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
.anquan{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 99;
}

</style>
