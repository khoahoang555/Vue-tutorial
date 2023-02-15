<template>
  <item-product
    v-for="product in listProduct"
    :key="product.id"
    :product="product"
  ></item-product>
</template>

<script>
import ItemProduct from "@/components/product/ItemProduct.vue";

export default {
  components: {ItemProduct},
  computed: {
    listProduct() {
      return this.$store.getters.getProducts;
    }
  }
}
</script>

