<template>
  <item-product
    v-for="product in products"
    :key="product.id"
    :product="product"
  ></item-product>
</template>

<script>
import ItemProduct from "@/components/product/ItemProduct.vue";

export default {
  components: {ItemProduct},
  data() {
    return {
      products: [
        {
          id: new Date().toISOString(),
          title: "Book Collection",
          image: "Books_HD_(8314929977).jpg",
          price: 99.99,
          description: "This is demo"
        },
        {
          id: new Date().toISOString(),
          title: "Food Book",
          image: "Good_Food_Display_-_NCI_Visuals_Online.jpg",
          price: 99.99,
          description: "This is demo"
        }
      ]
    }
  }
}
</script>

