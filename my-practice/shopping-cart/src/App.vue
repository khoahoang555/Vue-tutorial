<template>
  <base-container>
    <the-header></the-header>
  </base-container>
  <base-container>
    <router-view></router-view>
  </base-container>
</template>

<script>

import TheHeader from "@/components/layouts/TheHeader";
export default {
  components: {TheHeader}
}
</script>

<style>
body {
  margin: 0;
  font-family: Arial;
}
</style>
