import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

import('@styles/reset.css');
import('@styles/iconfont.css');

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
