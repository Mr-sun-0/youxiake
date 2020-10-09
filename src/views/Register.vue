<template>
    <div>
        <div class="logo">
            <img src="../assets/login.png" alt="">
        </div>
        <van-nav-bar title="手机号注册/登录"/>
       <van-field v-model="tel" type="tel" label="手机号" placeholder="请输入手机号"/>
        <van-field
        v-model="sms"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
      >
        <template #button>
            <van-button size="small" type="primary">发送验证码</van-button>
        </template>
        </van-field>
         <van-button color="#e9cb30" block disabled>一键注册/登录</van-button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tel: '',
      sms: '',

    };
  },
};
</script>
<style lang="less" scoped>
.logo{
    text-align: center;
    img{
        width: 80px;
        height: 80px;

    }
}
</style>
