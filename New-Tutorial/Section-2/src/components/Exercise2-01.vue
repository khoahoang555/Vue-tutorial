<template>
  <input placeholder="First name" v-model="firstName" />
  <input placeholder="Last name" v-model="lastName" />
  <h3>{{ fullName }}</h3>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: ''
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    }
  }
}
</script>