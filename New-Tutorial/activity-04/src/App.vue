<script>
import MessageEditor from "./components/MessageEditor.vue";
import MessageFeed from "./components/MessageFeed.vue";
export default {
  components: {MessageEditor, MessageFeed},
  data() {
    return {
      messages: []
    }
  },
  methods: {
    addMessage(value) {
      this.messages.push(value);
    }
  }
}
</script>

<template>
  <MessageFeed :messages="messages"></MessageFeed>
  <MessageEditor @send="addMessage"></MessageEditor>
</template>

<style scoped>

</style>
