<template>
    <div class="header-f">
        <div class="header-g">
            <div class="header-top">
                <span><img src="../../assets/images/hangzhou/collect.png" alt=""></span>
                <span><img src="../../assets/images/hangzhou/share.png" alt=""></span>
            </div>
            <div class="header-place" @click="changeCity">
                <p>{{city}}</p>
                <span>切换∨</span>
            </div>
            <div class="weather">
                <p>雨</p>
                <span>20℃</span>
            </div>
            <div class="photo"
            @click="toPhoto"
            ><p>摄影</p></div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    city() {
      return this.$store.state.city.name;
    },
  },
  methods: {
    changeCity() {
      this.$router.push('/cities');
    },
    toPhoto() {
      this.$router.push('/photography');
    },
  },
};
</script>
<style lang="less" scoped>
.header-f{
    width: 100%;
    height: 424px;
    .header-g{
        width: 100%;
        height: 100%;
         background-image: url("../../assets/images/hangzhou/header.png");
        background-position:-100px;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        .header-top{
            position:absolute;
            top:88px;
            right:20px;
            img{
                width:24px;
                height:24px;
                margin-left: 10px;
            }
        }
        .header-place{
            position: absolute;
            top: 219px;
            left: 20px;
            font-size: 47px;
            color: #fff;
            p{
                float: left;
            }
            span{
                display: inline-block;
                margin-left: 10px;
                text-align: center;
                line-height: 29px;
                font-size: 14px;
                font-weight: 600;
                width: 59px;
                height: 29px;
                background-color: #fff;
                color: #000;
                border-radius: 15px;
            }
        }
        .weather{
            position: absolute;
            bottom: 82px;
            left: 20px;
            font-size: 16px;
            color: #fff;
            p{
                float: left;
                margin-right:10px ;
            }
        }
        .photo{
            position: absolute;
            bottom: 55px;
            right: 0;
            width: 105px;
            height: 53px;
            background-image: url('../../assets/images/hangzhou/bag.png');
            background-size: cover;
            p{
                color: #fff;
                font-size: 18px;
                line-height: 53px;
                text-align: center;
            }
        }
    }
}
</style>
