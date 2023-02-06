<template>
  <div class="card-container">
    <div class="card">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  margin: 20px 0px 20px 0px;
}

.card {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  padding: 15px;
  width: 600px;
}
</style>