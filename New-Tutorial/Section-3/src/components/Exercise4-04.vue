<template>
  <div>
    <slot name="image"></slot>
    <slot name="title"></slot>
    <slot name="description"></slot>
  </div>
</template>

<script>
import * as Countable from "countable";

export default {
}
</script>

<style scoped>
div {
  text-align: center;
}
</style>