<template>
  <div class="container">
    <div class="pos-item">
      <p class="content">
        <span class="iconfont">&#xe611;</span>
        <span>定位失败</span>
      </p>
    </div>
    <div class="pos-item">
      <a href="#">
        <p class="content">
          <span class="iconfont">&#xe6e7;</span>
          <span>必游榜单</span>
        </p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'qunarPosList',
};
</script>

<style lang="less" scoped>
@import '~@styles/varibles.less';
@import '~@styles/mixins.less';

.container {

  .bgColor;
  overflow: hidden;
  margin-bottom: .4rem;

  .pos-item {
    width: 50%;
    text-align: center;
    float: left;
    .content {
      line-height: 1rem;
      color: @fontColor;
      position: relative;

      .iconfont {
        line-height: 1.0;
        position: absolute;
        top: .22rem;
        left: .9rem;
      }

    }
  }
  .pos-item:first-child {
    border-right: 1px solid @borderColor;
  }

}
</style>
