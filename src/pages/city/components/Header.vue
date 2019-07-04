<template>
  <div class="container">
    <router-link tag="div" class="back-btn iconfont" to="/">&#xe605;</router-link>
    <h2 class="title">城市选择</h2>
  </div>
</template>

<script>
export default {
  name: 'ctHeader',
};
</script>

<style lang="less" scoped>
@import '~@styles/varibles.less';

.container {
  position: relative;
  width: 100%;
  line-height: 0.88rem;
  background-color: @bgColor;
  color: white;

  > .back-btn {
    position: absolute;
    top: 0;
    left: 0.28rem;
  }

  > h2.title {
    text-align: center;
    font-size: 0.34rem;
  }
}
</style>
