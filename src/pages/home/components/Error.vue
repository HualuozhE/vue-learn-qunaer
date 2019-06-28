<template>
<div class="qunar-error-msg" @click="reloadHandle" v-if="show">
  <div class="msg-box">
    网络错误, 数据加载失败!
    <p class="prompt">点我刷新页面</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'qunarError',
  props: {
    show: Boolean,
  },
  methods: {
    reloadHandle() {
      window.location.reload();
    },
  },
};
</script>

<style lang="less" scoped>

.qunar-error-msg {

  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(21,21,21,.5);

  .msg-box {

    width: 5rem;
    position: absolute;
    background-color: #fff;
    border: 2px solid #ccc;
    line-height: .48rem;
    top: 50%;
    left: 50%;
    margin-top: -.24rem;
    margin-left: -2.5rem;
    text-align: center;


    .prompt {
      color: deeppink;
    }

  }

}

</style>
