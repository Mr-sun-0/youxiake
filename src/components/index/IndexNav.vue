<template>
    <div class="nav-wrap">
        <section>热搜</section>
        <section>武功山</section>
        <section>光露山</section>
        <section>神农架</section>
        <section>涠洲岛</section>
    </div>
</template>

<style lang="less" scoped>
  .nav-wrap{
    display: flex;
    justify-content: space-around;
    margin: 10px 0;
    section{
        width: 70px;
        height: 20px;
        border-radius: 10px;
        background:rgba(255, 255, 255, 0.5);
        font-size: 13px;
        text-align: center;
        line-height: 20px;
        &:first-child{
          background: none;
        }
    }
  }
</style>
