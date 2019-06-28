<template>
<div class="container">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) of viewData" :key="index">
        <div class="icon" v-for="res of item" :key="res.id">
          <a href="#">
            <div class="icon-img">
              <img :src="res.imgUrl">
            </div>
            <p class="description">{{ res.title }}</p>
          </a>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</div>
</template>

<script>
export default {
  name: 'qunarIcon',
  props: {
    list: Array,
  },
  data() {
    return {
      swiperOption: {
        width: window.innerWidth,
        pagination: {
          el: '.swiper-pagination',
        },
      },
    };
  },
  computed: {
    viewData() {
      let arr = [];
      arr = []; // 编辑器报错，所以才无效赋值
      this.list.forEach((item, index) => {
        const sub = Math.floor(index / 8);
        if (!arr[sub]) {
          arr.push([]);
        }
        arr[sub].push(item);
      });
      return arr;
    },
  },
};
</script>

<style lang="less" scoped>
@import '~@styles/varibles.less';
@import '~@styles/mixins.less';
.container /deep/ .swiper-container {
  padding-bottom: .6rem;
}
.container /deep/ .swiper-pagination {
  bottom: .2rem !important;
}
.container /deep/ .swiper-pagination-bullet-active {
  background: #33bfcb !important;
}
.container {
  border-bottom: 1px solid #e0e0e0;
  .bgColor;
}
.icon {
  box-sizing: content-box;
  width: 25%;
  height: 1.5rem;
  padding-top: .1rem;
  float: left;

  .icon-img {
    width: 1.1rem;
    height: 0;
    padding-bottom: 1.1rem;
    margin: 0 auto;

    img {
      width: 100%;
      height: 1.1rem;
    }
  }

  .description {
    text-align: center;
    color: @fontColor;
  }

}
</style>
