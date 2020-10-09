<template>
    <div class="main">
        <span class="tuijian">为你推荐</span>
        <ul class="right">
            <li class="li1">热门</li>
            <li>最新</li>
        </ul>
    </div>
</template>

<style lang="less" scoped>
.main{
    width: 100%;
    height: 80px;
    background: #f2f2f2;
    .tuijian{
        font-size: 16px;
        font-weight: bold;
        margin-left: 10px;
    }
    .right{
        float: right;
        font-size: 14px;
        margin-top: 5px;
        margin-right: 10px;
        li{
            padding: 0 12px;
            text-align: center;
            float: left;
        }
        .li1{
            border-right: 1px solid #b0b0b0;
            color: #e5ac04;
        }
    }
}
</style>
