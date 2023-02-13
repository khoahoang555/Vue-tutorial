<template>
  <button class="btn" :class="btnClass">{{ content }}</button>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true
    },
    btnClass: {
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
</style>