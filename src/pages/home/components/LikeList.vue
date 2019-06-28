<template>
  <div class="container">
      <div class="header">
        <div class="title">
          <h3><img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">猜你喜欢</h3>
        </div>
      </div>
      <div class="item-list">
        <div class="item" v-for="item of list" :key="item.id">
          <div class="img-box">
            <img :src="item.imgUrl">
          </div>
          <div class="content">
            <h3 class="title">{{ item.title }}</h3>
            <div class="comment">
              <span class="star iconfont">&#xe60b;&#xe60b;&#xe60b;&#xe60b;&#xe60b;</span>
              &nbsp;&nbsp;
              <span class="comment-info">
                <span class="comment-num">{{ item.comment }}</span>条评论
              </span>
            </div>
            <div class="info">
              <span class="price">¥</span>
              <span class="money">{{ item.money }}</span>起
              <span class="city">东城区</span>
            </div>
            <div class="hot-msg" v-if="item.tip">{{ item.tip }}</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'qunarLikeList',
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
  padding-right: .25rem;
  margin-top: .2rem;
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
  }

  .item-list {


    .item {
      overflow: hidden;
      position: relative;
      padding-left: 2.22rem;
      border-bottom: 1px solid @borderColor;

      .img-box {
        position: absolute;
        left: 0;
        top: .2rem;
        height: 0;
        padding-bottom: 2rem;
        img {
          width: 2rem;
          height: 2rem;
        }
      }

      .content {
        font-size: .24rem;
        .title {
          font-size: .32rem;
          line-height: .8rem;
        }
        .star {
          font-size: .24rem;
          color: @starColor;
        }

        .info {
          position: relative;
          margin-top: .38rem;
          margin-bottom: .5rem;
          .money {
            font-size: .4rem;
          }
          .price,
          .money {
            color: #ff8300;
          }

          .city {
            position: absolute;
            right: 0;
            bottom: 0
          }
        }

        .hot-msg {
          margin-top: .66rem;
          margin-bottom: .3rem;
          color: #f55;
        }
      }

    }


  }

}

</style>
