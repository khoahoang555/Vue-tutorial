<template>
  <button class="btn" :class="btnCustom">{{ content }}</button>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true
    },
    btnCustom: {
      type: String,
      default: "btn-default"
    }
  }
}
</script>

<style scoped>
.btn {
  padding: 10px 20px;
  border: 1px solid #45006d;
  border-radius: 20px;
  font-size: 15px;
}
.btn-default {
  background-color: #ffffff !important;
  color: #45006d;
}
.btn-default:hover {
  background-color: #f0d5ff !important;
}
.btn-cart {
  background-color: #45006d;
  color: #ffffff;
}
.btn-cart:hover {
  background-color: #760AB4 !important;
  cursor: pointer;
}
.btn-cart-remove {
  border: none;
  background-color: #8f0030;
  color: #ffffff;
}
.btn-cart-remove:hover {
  background-color: #53001c !important;
}
</style>