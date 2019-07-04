<template>
  <div>
    <div class="header">
      <div :class="['btn', {active: btnStatus}]" @click="changeArea('domestic')">境内</div>
      <div :class="['btn', {active: !btnStatus}]" @click="changeArea('overseas')">境外·港澳台</div>
    </div>

    <div class="hot-cites">
      <div class="ct-title">
        <h4>热门城市</h4>
      </div>
      <ul class="ct-list">
        <li
          class="ct-list-item"
          v-for="item of dataSet.hotCities"
          :key="item.id"
          @click="changeCity(item.name)"
        >{{ item.name }}</li>
      </ul>
    </div>

    <div class="letter">
      <div class="ct-title">
        <h4>字母排序</h4>
      </div>
      <ul class="lt-list">
        <li
          class="lt-item"
          v-for="(item, key) of dataSet.cities"
          :key="key"
          @click="jumpHandle(key)"
        >{{ key }}</li>
      </ul>
    </div>

    <div class="word" v-for="(item, key) of dataSet.cities" :key="key">
      <div class="ct-title">
        <h4 :ref="key">{{ key }}</h4>
      </div>
      <ul class="ct-list">
        <li
          class="ct-list-item"
          v-for="innerItem of item"
          :key="innerItem.id"
          @click="changeCity(innerItem.name)"
        >{{ innerItem.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ctSearch',
  data() {
    return {
      area: 'domestic',
    };
  },
  props: {
    list: Object,
  },
  methods: {
    jumpHandle(eleName) {
      window.document.documentElement.scrollTop = this.$refs[
        eleName
      ][0].offsetTop;
    },
    changeArea(areaText) {
      this.area = areaText;
    },
    changeCity(cityText) {
      this.$store.commit('changeCity', cityText);
      this.$router.push('/');
    },
  },
  computed: {
    dataSet() {
      let result = {};

      if (this.list.domestic) {
        result = this.list[this.area];
      }
      return result;
    },

    btnStatus() {
      return this.area === 'domestic';
    },
  },
};
</script>

<style lang="less" scoped>
@import '~@styles/varibles.less';
@import '~@styles/mixins.less';

.letter {
  .lt-list {
    overflow: hidden;
    text-align: center;
    background-color: #fff;
    padding: 0.2rem 0;

    .lt-item {
      float: left;
      width: 20%;
      line-height: 1rem;
    }
  }
}

.ct-list {
  overflow: hidden;
  position: relative;
  width: 100%;
  background-color: #fff;
  margin-bottom: -0.02rem;

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 0.02rem;
    height: 100%;
    left: 100/3%;
    background-color: @borderColor;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 0.02rem;
    height: 100%;
    right: 100/3%;
    background-color: @borderColor;
  }

  .ct-list-item {
    .text-ellipsis;
    float: left;
    width: 100/3%;
    line-height: 0.92rem;
    text-align: center;
    border-bottom: 1px solid @borderColor;
    margin-bottom: -0.02rem;
    padding: 0 0.26rem;
  }
}

.header {
  height: 0.6rem;
  text-align: center;
  background-color: @bgColor;
  color: #fff;

  > .btn {
    display: inline-block;
    width: 2.76rem;
    line-height: 0.44rem;
    border: 1px solid #fff;

    &.active {
      background-color: #fff;
      color: @bgColor;
    }
    &:first-child {
      border-top-left-radius: 0.04rem;
      border-bottom-left-radius: 0.04rem;
    }
    &:last-child {
      border-top-right-radius: 0.04rem;
      border-bottom-right-radius: 0.04rem;
    }
  }
}

.ct-title {
  line-height: 0.72rem;
  padding-left: 0.3rem;
  font-size: 0.24rem;
}
</style>
