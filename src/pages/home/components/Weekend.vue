<template>
  <div class="container">
    <div class="header">
      <h3>周末去哪儿</h3>
    </div>
    <div class="item-list">
      <div class="item" v-for="item of list" :key="item.id">
        <div class="img-box">
          <img :src="item.imgUrl" />
        </div>
        <div class="content">
          <p class="title">{{ item.title }}</p>
          <p class="info">{{ item.info }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'qunarWeekend',
  props: {
    list: Array,
  },
};
</script>

<style lang="less" scoped>
@import "~@styles/varibles.less";
@import "~@styles/mixins.less";

.header {
  h3 {
    line-height: 0.8rem;
    font-size: 100%;
    padding-left: 0.26rem;
  }
}

.item-list {
  .bgColor;

  .item {
    .img-box {
      height: 0;
      box-sizing: content-box;
      padding-bottom: 37%;
      img {
        width: 100%;
      }
    }

    .content {
      line-height: 0.4rem;
      padding: 0.32rem 0.2rem;
      .info {
        color: #616161;
      }
    }
  }
}
</style>
