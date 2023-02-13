<template>
  <div class="badge">{{ content }}</div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.badge {
  display: flex;
  padding: 2px 20px;
  border: 1px solid;
  border-radius: 20px;
  background-color: #45006d;
  color: #ffffff;
  margin-left: 10px;
}
</style>