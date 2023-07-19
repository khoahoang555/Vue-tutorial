<template>
  <textarea rows="3" cols="20" v-model="message" ref="textArea">
  </textarea>
  <button @click="send">Send</button>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  },
  methods: {
    changeValue() {
      this.message = this.$refs.textArea.value;
    },
    send() {
      this.$emit('send', this.message);
      this.$refs.textArea.focus();
      this.$refs.textArea.value = '';
    }
  }
}
</script>

<style scoped>

</style>