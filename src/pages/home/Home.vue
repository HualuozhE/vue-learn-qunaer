<template>
  <div>
    <qunar-error :show="errorStatus"></qunar-error>
    <qunar-loading :show="loadingStatus"></qunar-loading>
    <qunar-header :city="city"></qunar-header>
    <qunar-swiper :list="carousel"></qunar-swiper>
    <qunar-icon :list="icons"></qunar-icon>
    <qunar-pos-list></qunar-pos-list>
    <qunar-hot-list :list="hotList"></qunar-hot-list>
    <qunar-like-list :list="likeList"></qunar-like-list>
    <qunar-weekend :list="weekend"></qunar-weekend>
  </div>
</template>

<script>
import axios from 'axios';
import qunarError from './components/Error.vue';
import qunarLoading from './components/Loading.vue';
import qunarHeader from './components/Header.vue';
import qunarSwiper from './components/Swiper.vue';
import qunarIcon from './components/Icon.vue';
import qunarPosList from './components/PosList.vue';
import qunarLikeList from './components/LikeList.vue';
import qunarHotList from './components/HotList.vue';
import qunarWeekend from './components/Weekend.vue';

export default {
  name: 'Home',
  components: {
    qunarHeader,
    qunarError,
    qunarLoading,
    qunarSwiper,
    qunarIcon,
    qunarPosList,
    qunarHotList,
    qunarLikeList,
    qunarWeekend,
  },
  data() {
    return {
      errorStatus: false,
      loadingStatus: true,
      city: '',
      carousel: [],
      icons: [],
      hotList: [],
      likeList: [],
      weekend: [],
    };
  },
  mounted() {
    axios.get('/api/index.json')

      .then((res) => {
        if (!res || res.status !== 200) {
          return Promise.reject(new Error('网络错误'));
        }

        const resData = res.data;

        if (!resData.ret || !resData.data) {
          return Promise.reject(new Error('网络错误'));
        }

        return resData.data;
      })

      .then((res) => {
        this.city = res.city;
        this.carousel = res.carousel;
        this.icons = res.icons;
        this.hotList = res.hotList;
        this.likeList = res.likeList;
        this.weekend = res.weekend;

        this.loadingStatus = false;
      })

      .catch(() => {
        this.errorStatus = true;
      });
  },
};
</script>


<style lang="less" scoped>

</style>
