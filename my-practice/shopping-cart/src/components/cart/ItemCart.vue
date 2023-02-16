<template>
  <base-cart style-flex="column" style-width="350">
    <div class="cart-image">
      <img src="@/assets/images/Good_Food_Display_-_NCI_Visuals_Online.jpg">
    </div>
    <div class="cart-title">
      <h3>{{ product.title }}</h3>
    </div>
    <div class="cart-detail">
      <p>Price per item: <b>${{ product.price }}</b></p>
      <p>Quantity: <b>{{ product.quantity }}</b></p>
    </div>
    <div class="separate"></div>
    <div class="cart-total">
      <b>Total: ${{ product.total }}</b>
    </div>
    <div class="separate"></div>
    <div class="custom-margin"></div>
    <div class="cart-remove">
        <base-button content="Remove" btn-custom="btn-cart-remove"></base-button>
    </div>
  </base-cart>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style scoped>
.cart-image {
  position: relative;
  overflow: hidden;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  align-self: center;
  align-self: center;
}
.cart-title {
  align-self: center;
}
.cart-image img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
}
.cart-detail {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.cart-detail p {
  margin: 0;
}

.separate {
  width: 100%;
  height: 1px;
  background-color: #000000;
}
.cart-total {
  margin: 5px 0px;
  align-self: center;
}
.custom-margin {
  margin-bottom: 10px;
}
.cart-remove {
  align-self: center;
}
</style>