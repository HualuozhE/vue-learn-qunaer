<template>
  <div>
    <qunarHeader></qunarHeader>
  </div>
</template>

<script>
import axios from 'axios';
import qunarHeader from './components/Header.vue';

export default {
  name: 'Home',
  components: {
    qunarHeader,
  },
  data() {
    return {
      city: '',
      carousel: [],
      icons: [],
    };
  },
  mounted() {
    axios.get('/api/index.json')
      .then(res => console.log(res));
  },
};
</script>


<style lang="less" scoped>
h1 {
  color: red;
}
</style>
