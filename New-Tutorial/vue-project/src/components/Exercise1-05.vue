<template>
<h1>Looping through arrays</h1>
<ul>
<!--  Loop by array strings-->
  <li v-for="(item, index) in interests"
      :key="index"
  >
    {{ item }}
  </li>
</ul>
</template>

<script setup>
const interests = ['TV', 'Games', 'Sports']
</script>