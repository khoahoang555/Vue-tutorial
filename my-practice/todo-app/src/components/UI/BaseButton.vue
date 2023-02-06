<template>
  <button class="btn" :class="dynamicClass" :style="dynamicType">{{ title }}</button>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      default: 'Button'
    },
    dynamicClass: {
      type: String
    },
    dynamicType: {
      type: String
    }
  }
}
</script>

<style scoped>
.btn {
  padding: 13px 25px 13px 25px;
  border: none;
  background-color: #ffffff;
  color: #8D3075;
}
.btn:hover {
  background-color: #edd2ff;
}
.active {
  background-color: #3A0061 !important;
  color: #ffffff !important;
}
.active:hover {
  background-color: #24003d !important;
}
</style>