<template>
  <div class="modal" v-if="!hiddenModal">
    <div class="modal-content">
      <span class="close" @click="closeDialog">&times;</span>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hiddenModal: {
      default: true
    },
    content: {
      type: String,
      required: true
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close-modal', true);
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  width: 100%;
  overflow: auto;
  height: 100%;
}

.modal-content {
  background-color: #ffffff;
  color: #000000;
  padding: 20px;
  width: 30%;
  margin: 80px auto;
  opacity: 100% !important;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000000;
  cursor: pointer;
  text-decoration: none;
}
</style>