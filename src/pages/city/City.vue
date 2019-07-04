<template>
<div>
  <ct-header></ct-header>
  <ct-search :list="cites"></ct-search>
</div>
</template>

<script>

import axios from 'axios';
import ctHeader from './components/Header.vue';
import ctSearch from './components/Search.vue';

export default {
  name: 'City',
  data() {
    return {
      cites: {},
    };
  },
  components: {
    ctHeader,
    ctSearch,
  },

  mounted() {
    axios('/api/city.json')

      .then((res) => {
        if (res.status !== 200 || !res.data || !res.data.ret) {
          return Promise.reject(new Error('request error!'));
        }
        this.cites = res.data.data;
        return true;
      })

      .catch((err) => {
        throw err;
      });
  },
};
</script>

<style lang="less" scoped>

</style>
