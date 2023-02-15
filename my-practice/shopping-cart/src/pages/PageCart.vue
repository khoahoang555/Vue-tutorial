<template>
  <div class="page-cart-container">
    <h2 class="page-cart-header">Your Cart</h2>
    <div class="separate"></div>
    <div class="page-cart-total">
      <h3>Total Amount: </h3>
      <base-badge custom-badge="font-bold">
        <b style="font-size: 18px">$ {{ infoCart.totalAmount }}</b>
      </base-badge>
    </div>
    <item-cart></item-cart>
  </div>
</template>

<script>
import ItemCart from "@/components/cart/ItemCart.vue";

export default {
  components: {ItemCart},
  computed: {
    infoCart() {
      return this.$store.getters.getCart;
    }
  }
}
</script>

<style scoped>
.page-cart-container {
  display: flex;
  flex-flow: column;
  width: 640px;
  align-self: center;
  justify-content: center;
  align-items: center;
}
.separate {
  width: 100%;
  height: 1px;
  background-color: #333333;
}
.page-cart-total h3 {
  display: inline-block;
  margin-right: 20px;
}
</style>