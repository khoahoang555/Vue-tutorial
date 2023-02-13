<template>
  <div class="cart-container">
    <div class="cart-image">
      <img src="@/assets/images/Books_HD_(8314929977).jpg">
    </div>
    <div class="cart-content">
      <div class="cart-title">
        <h3>Book Collection</h3>
      </div>
      <div class="cart-price">
        <base-badge content="$99.99"></base-badge>
      </div>
      <div class="cart-description">
        <p>A collection of must-read books. All-time classics included!</p>
      </div>
      <div class="cart-button">
        <base-button content="Add to Cart"></base-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.cart-container {
  display: flex;
  max-width: 640px;
  padding: 20px 20px;
  margin-top: 20px;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.cart-image {
  position: relative;
  width: 140px;
  height: 140px;
}

.cart-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.cart-content {
  display: flex;
  flex-flow: column;
  margin-left: 20px;
}

</style>