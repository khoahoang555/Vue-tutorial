<template>
  <div class="container">
    <h1>Shop Watcher</h1>
    <div>
      Black Friday sale <strike>Was {{ oldDiscount }}%</strike>
      <strong> Now {{ discount }}% OFF</strong>
    </div>
    <button @click="updateDiscount">Increase Discount!</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oldDiscount: 0,
      discount: 5
    }
  },
  watch: {
    discount(newValue, oldValue) {
      this.oldDiscount = oldValue;
    }
  },
  methods: {
    updateDiscount() {
      this.discount = this.discount + 5;
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
button {
  display: inline-block;
  background: rgb(235, 50, 50);
  border-radius: 10px;
  font-size: 10px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  margin-top: 20px;
}
</style>