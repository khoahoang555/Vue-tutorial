<template>
  <h1>Trigger Vue Methods</h1>
  <ul>
    <li v-for="index in 5" :key="index">
      <button @click="triggerAlert(index)">Trigger {{ index }}</button>
    </li>
  </ul>
</template>

<script setup>
const triggerAlert = (index) => {
  alert(`${index} has been clicked`)
}
</script>

<style>
button {
  margin: 10px;
}
</style>