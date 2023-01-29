<template>
  <form @submit.prevent="addUser">
    <div>
      <label>Name: </label><input type="text" v-model="user.name">
    </div>
    <div>
      <label>Age: </label><input type="number" v-model="user.age">
    </div>
    <div>
      <button>Add user</button>
    </div>
  </form>

</template>

<script>
  export default {
    data() {
      return {
        user: {
          id: new Date().toISOString(),
          name: "",
          age: 0
        }
      }
    },
    methods: {
      addUser() {
        this.$emit("add-user", this.user);
      }
    }
  }
</script>