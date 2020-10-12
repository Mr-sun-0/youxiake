<template>
    <div class="setting">
        <van-nav-bar
        title="设置"
        left-arrow
        @click-left="onClickLeft"
        />
        <van-cell-group>
            <van-cell title="账号安全" is-link to="/security" />
            <van-cell title="隐私设置" is-link to="/privacy"/>
            <van-cell title="关于游侠客" is-link to="/about"/>
            <van-cell title="隐私政策和用户协议" is-link to="/agree"/>
            <van-cell title="检查更新" is-link @click="update"/>
            <van-cell title="清理缓存" is-link value="55.86M>" />
            <van-cell title="意见建议" is-link />
        </van-cell-group>
        <div class="quit" @click="quit">退出当前账号</div>
        <router-view></router-view>

    </div>
</template>
<script>
import { Toast } from 'vant';

export default {
  methods: {
    onClickLeft() {
    //   console.log(1);
      this.$router.go(-1);
    },
    quit() {
      this.$router.push('/mine');
    },
    update() {
      Toast('已是最新版本');
    },
  },
};
</script>
<style lang="less" scoped>
.setting{
   position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 99;
}
.quit{
  position: fixed;
  bottom: 40px;
  width: 200px;
  height: 40px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 40px;
  margin-left: 50%;
  transform: translateX(-50%);
  border: 1px solid #cccccc;
  border-radius: 20px;
  background-color: #f1f1f1;
}
</style>
