<template>
  <span class="badge" :class="customBadge">
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    customBadge: {
      type: String
    }
  }
}
</script>

<style scoped>
.badge {
  display: inline-block;
  padding: 2px 20px;
  border-radius: 20px;
  background-color: #45006d;
  color: #ffffff;
}
.badge-warning {
  background-color: #F0B800 !important;
  color: #000000 !important;
  font-weight: bold;
}
</style>