<template>
  <div>
    <h1>{{ isUppercase ? title.toUpperCase() : title }}</h1>
  </div>
</template>
<!--<script>-->
<!--Option API-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      title: 'My first component!',-->
<!--      isUppercase: false-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->
<script setup>
// Composition API
const title = 'My first component!';
const isUppercase = false;
</script>
<style scoped>
</style>