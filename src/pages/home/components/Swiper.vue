<template>
  <div class="swiper" v-if="showSwiper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img :src="item.imgUrl" class="ele-img">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'qunarSwiper',
  props: {
    list: Array,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
        },
        width: window.innerWidth,
      },
    };
  },
  computed: {
    showSwiper() {
      return this.list.length > 0;
    },
  },
};
</script>

<style lang="less" scoped>

.swiper /deep/ .swiper-pagination-bullet-active {
  background: #fff;
}

.swiper {
  height: 0;
  overflow: hidden;
  padding-bottom: 26.6666666%;
  width: 100%;

  .ele-img {
    width: 100%;
  }

}

</style>
