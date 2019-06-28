<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe605;</span>
    </div>
    <div class="header-middle">
      <span class="iconfont">&#xe60e;</span>
      <input type="text" placeholder="输入城市/景点/游玩主题" class="search-box">
    </div>
    <div class="header-right">
      {{ city }}
      <span class="iconfont">&#xe6aa;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'qunaerHeader',
  props: {
    city: String,
  },
};
</script>

<style lang="less" scoped>
@import "~@styles/varibles.less";

.header {
  line-height: 0.86rem;
  background-color: @bgColor;
  position: relative;
  color: #fff;
  text-align: center;

  .header-left {
    width: 0.85rem;
    position: absolute;
    top: 0;
    left: 0;
  }

  .header-middle {
    padding: 0 1.24rem 0 0.85rem;
    position: relative;

    span.iconfont {
      position: absolute;
      left: 3.2em;
      top: 0.04rem;
      color: #ccc;
    }

    .search-box {
      width: 100%;
      height: 0.65rem;
      border-radius: 0.1rem;
      padding-left: 0.61rem;
    }
  }

  .header-right {
    width: 1.24rem;
    height: 0.86rem;

    position: absolute;
    top: 0;
    right: 0;

    span.iconfont {
      font-size: 0.24rem;
      margin-left: 0.05rem;
    }
  }
}
</style>
