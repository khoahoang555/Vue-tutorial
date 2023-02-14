<template>
  <div class="cart-container" :style="[widthCustomStyle, flexFlowStyle]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    styleWidth: {
      type: Number,
      default: 640
    },
    styleFlex: {
      type: String,
      default: 'row'
    }
  },
  computed: {
    widthCustomStyle() {
      return { width: this.styleWidth + 'px' }
    },
    flexFlowStyle() {
      return { flexFlow: this.styleFlex }
    }
  }
}
</script>

<style scoped>
.cart-container {
  display: flex;
  width: 640px;
  padding: 20px 20px;
  margin-top: 20px;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  align-self: center;
}
</style>