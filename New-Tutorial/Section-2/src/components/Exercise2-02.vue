<template>
  <input type="number" v-model="incrementOne" />
  <h3>Get input: {{ incrementOne }}</h3>
  <h5>Set division: {{ divideByTwo }}</h5>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
      divideByTwo: 0
    }
  },
  computed: {
    incrementOne: {
      get() {
        return this.count + 1;
      },
      set(val) {
        this.count = val - 1;
        this.divideByTwo = val / 2;
        // console.log(this.count);
      }
    }
  }
}
</script>