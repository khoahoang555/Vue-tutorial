<template>
<div>
  <h1>Returning Methods</h1>
  <div>Cart({{ totalItems }}) {{ formatCurrency(totalCost) }}</div>
  <ul>
    <li v-for="n in 5" :key="n">
      <button @click="addToCart(n)">Add {{ formatCurrency(n) }}</button>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      totalCost: 0,
      totalItems: 0
    }
  },
  methods: {
    addToCart(n) {
      this.totalItems = this.totalItems + 1;
      this.totalCost = this.totalCost + n;
    },
    formatCurrency(val) {
      return `$${val.toFixed(2)}`;
    }
  }
}
</script>

<style>
button {
  margin: 10px;
}
</style>