<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: column;
  margin: 0 auto;
  max-width: 1540px;
}
</style>