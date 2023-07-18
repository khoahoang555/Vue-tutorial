<template>
  <div>
    <textarea cols="50" rows="7" ref="textArea">
    </textarea>
    <ul v-if="count">
      <li>Paragraphs: {{ count.paragraphs }}</li>
      <li>Sentences: {{ count.sentences }}</li>
      <li>Words: {{ count.words }}</li>
    </ul>
  </div>
</template>

<script>
import * as Countable from "countable";

export default {
  data() {
    return {
      count: null
    }
  },
  mounted() {
    Countable.on(this.$refs.textArea, (count) => {
      this.count = count;
    })
  },
  beforeUnmount() {
    Countable.off(this.$refs.textArea);
  }
}
</script>