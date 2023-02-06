<template>
  <base-card>
    <base-button
        title="Stored Resources"
        :dynamic-class="currentMode === 'list' ? 'active' : ''"
        @click="chooseMode('list')"
    ></base-button>
    <base-button
        title="Add Resources"
        :dynamic-class="currentMode === 'form' ? 'active': ''"
        @click="chooseMode('form')"
    ></base-button>
  </base-card>
</template>

<script>
export default {
  props: ['currentMode'],
  data() {
    return {
      mode: 'list'
    }
  },
  methods: {
    chooseMode(mode) {
      this.$emit('choose-mode', mode);
    }
  }
}
</script>
