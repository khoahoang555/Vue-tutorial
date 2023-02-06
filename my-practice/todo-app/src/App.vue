<template>
  <the-header title="RememberMe"></the-header>
  <learning-resources></learning-resources>
</template>

<script>
import TheHeader from "@/components/layouts/TheHeader.vue";
import LearningResources from "@/components/learning-resources/LearningResources.vue";
export default {
  components: {
    LearningResources,
    TheHeader
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
