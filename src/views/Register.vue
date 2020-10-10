<template>
  <div>
    <div class="logo">
      <img src="../assets/login.png" alt="" />
    </div>
    <van-nav-bar title="手机号注册/登录" />
    <van-field
      v-model="phone"
      type="phone"
      label="手机号"
      placeholder="请输入手机号"
    />
    <van-field
      v-model="code"
      center
      clearable
      label="短信验证码"
      placeholder="请输入短信验证码"
    >
      <template #button>
        <van-button size="small" type="primary" @click="send"
          >发送验证码</van-button
        >
      </template>
    </van-field>
    <van-button type="primary" size="normal" block @click="login"
      >登录</van-button
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      phone: '',
      code: '',
      token: '',
    };
  },
  // computed: {
  //   registerList() {
  //     return this.$store.state.registerList;
  //   },
  // },
  // watch: {
  //   registerList() {
  //     this.token = this.$store.state.registerList.token;
  //     sessionStorage.setItem('token', this.token);
  //   },
  // },
  methods: {
    send() {
      this.$store.dispatch('getCode', this.phone);
    },
    login() {
      this.$store
        .dispatch('login', {
          phone: this.phone,
          code: this.code,
        })
        .then(() => {
          sessionStorage.setItem('token', this.$store.state.registerList.token);
          if (this.$store.state.registerList.length !== 0) {
            this.$router.push('/community');
          }
        });
    },
  },
};
</script>
<style lang="less" scoped>
.logo {
  text-align: center;
  img {
    width: 80px;
    height: 80px;
  }
}
</style>
