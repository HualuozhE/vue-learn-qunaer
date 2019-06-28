<template>
<div class="qunar-loading-msg" v-if="show">
  <div class="msg-box">
    正在加载数据......
  </div>
</div>
</template>

<script>
export default {
  name: 'qunarLoading',
  props: {
    show: Boolean,
  },
};
</script>

<style lang="less" scoped>

.qunar-loading-msg {

  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(21,21,21,.2);

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
