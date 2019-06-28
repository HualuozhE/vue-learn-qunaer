<template>
  <div class="container">
      <div class="header">
        <div class="title">
          <h3><img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png">本周热门榜单</h3>
        </div>
        <div class="info">
          <a href="#">
            <span>全部榜单</span>
            <span class="iconfont">&#xe621;</span>
          </a>
        </div>
      </div>
      <div class="item-list">
        <ul class="item-container">
          <li class="item" v-for="item of list" :key="item.id">
            <div class="img">
              <img :src="item.imgUrl">
            </div>
            <p class="title">{{ item.title }}</p>
            <div class="money">
              <span>￥</span><span class="text-money">{{ item.money }}</span>起
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'qunarHotList',
  props: {
    list: Array,
  },
};
</script>


<style lang="less" scoped>

@import '~@styles/varibles.less';
@import '~@styles/mixins.less';

.container {

  padding-left: .24rem;
  padding-bottom: .2rem;
  .bgColor;

  .header {
    height: .9rem;
    line-height: .9rem;
    overflow: hidden;
    .title {
      float: left;
      img {
        width: .3rem;
        height: .3rem;
        vertical-align: .02rem;
        margin-right: .08rem;
      }
      h3 {
        font-size: .32rem;
      }
    }

    .info {
      float: right;
      margin-right: .36rem;
      span {
        color: @fontColor;
      }
    }
  }

  .item-list {

    .item-container {
      overflow: hidden;
      white-space: nowrap;
      overflow-x: scroll;
    }

    .item {

      width: 2rem;
      height: 2.8rem;
      display: inline-block;
      text-align: center;
      margin-right: .12rem;

      .img {
        height: 0;
        padding-bottom: 2rem;
        position: relative;
        img {
          width: 2rem;
          height: 2rem;
        }
      }

      .title {
        line-height: .5rem;
      }

      .money {
        span {
          color: #ff8300;
        }
      }

    }

  }

}

</style>
