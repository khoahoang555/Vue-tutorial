<template>
  <base-cart>
    <div class="cart-image">
      <img :src="loadImage">
    </div>
    <div class="cart-content">
      <a href="/" class="cart-title">{{ product.title }}</a>
      <br>
      <base-badge custom-badge="badge-warning">
        {{ '$' + product.price }}
      </base-badge>
      <p class="cart-description">{{ product.description }}</p>
      <base-button
          btn-custom="btn-cart"
          content="Add to Cart"
          @click="addProduct(product.id)"
      ></base-button>
    </div>
  </base-cart>
</template>

<script>
export default {
  props: ['product'],
  computed: {
    loadImage() {
      return require('@/assets/images/' + this.product.image);
    }
  },
  methods: {
    addProduct(id) {
      this.$store.commit('updateCart', id);
      this.$router.push({name : "cart"});
    }
  }
}
</script>

<style scoped>
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
  margin-left: 20px;
}

.cart-title {
  margin: 0px 0px 5px 0px;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  display: inline-block;
  color: #000000;
}

.cart-title:hover {
  color: #45006d;
}

.cart-description {
  min-height: 19px;
  max-height: 19px;
  line-height: 19px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-word;
  white-space: normal;
  width: 450px;
}

</style>