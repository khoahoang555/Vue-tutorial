<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style>
header {
  background-color: rgb(100,0,50);
}

header h1 {
  color: #ffffff;
  text-align: center;
  padding: 25px 0px 25px 0px;
  margin: 0;
}
</style>