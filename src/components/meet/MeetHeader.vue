<template>
    <div class="meet">
        <div class="header">
            <img class="icon1" src="../../assets/icon/meet/maotou@2x.png" alt="">
            <div class="inputbox">
                <img class="fangdajing" src="../../assets/icon/meet/fangdajing@2x.png" alt="">
                <input type="text" placeholder="夏日海岛推荐">
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.meet{
    display: flex;
    flex-direction: column;
    justify-content: center;
    .header{
        width: 100%;
        height: 125px;
        background: #ffdc40;
        .icon1{
            width: 20px;
            height: 20px;
            float: left;
            margin-top: 30px;
            margin-left: 25px;
        }
        .inputbox{
            width: 280px;
            height: 34px;
            background: #ffffff;
            border-radius: 17px;
            line-height: 34px;
            float: left;
            margin-top: 24px;
            margin-left: 20px;
            .fangdajing{
                width: 15px;
                height: 15px;
                float: left;
                vertical-align: middle;
            }
            input{
                margin-left: 30px;
                border: none;
                vertical-align: middle;
            }
        }
    }
}
</style>
