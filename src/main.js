import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import store from './store';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

import('@styles/reset.css');
import('@styles/iconfont.css');
import('swiper/dist/css/swiper.css');


Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
