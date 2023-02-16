<template>
  <header>
    <div class="header-item">
      <router-link class="icon" to="/">VueShop</router-link>
    </div>
    <div class="header-item">
      <div class="header-link">
        <router-link to="/products">Products</router-link>
      </div>
      <div class="header-link">
        <router-link to="/cart">Cart</router-link>
        <div class="margin-custom"></div>
        <base-badge>{{ getTotalProductInCart }}</base-badge>
      </div>
    </div>
    <div class="header-item">
      <base-button content="Login"></base-button>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    getTotalProductInCart() {
      return this.$store.getters.getTotalProductInCart;
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

.header-item {
  display: flex;
}

.header-link {
  display: flex;
  align-items: center;
  margin-right: 30px;
}

.header-link a {
  color: #333333;
  font-size: 16px;
  text-decoration: none;
  font-weight: bold;
}

.margin-custom {
  margin-right: 10px;
}

.icon {
  color: #333333;
  font-weight: bold;
  font-size: 32px;
  text-decoration: none;
}

.header-link a:hover,
.icon:hover,
.active {
  color: #45006d !important;
  -webkit-text-decoration: #45006d solid underline !important;
  text-decoration: #45006d solid underline !important;
  -webkit-text-underline-position: under !important;
  text-underline-position: under !important;
  text-decoration-thickness: 2px !important;
}
</style>