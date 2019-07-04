import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({

  strict: process.env.NODE_ENV !== 'production',

  state: {
    city: '北京',
  },

  mutations: {
    changeCity(state, cityText) {
      const copyState = state;
      copyState.city = cityText;
    },
  },

});

export default store;
