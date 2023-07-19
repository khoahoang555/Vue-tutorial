<template>
  <p v-for="message in messages" :key="message">{{ message }}</p>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>