<template>
  <div class="container">
    <div class="header">
      <h2>Shopping List</h2>
      <form v-on:submit.prevent>
        <input placeholder="Press enter to add new item" type="text" v-model="product"/>
        <button type="button" @click="addProduct">Add item</button>
      </form>
    </div>
    <div class="body">
      <ul>
        <li v-for="(item, index) in products" :key="index" v-if="products.length > 0">
          <p>{{ item }}</p>
          <a href="#" @click="removeProduct(index)">REMOVE</a>
        </li>
        <li v-else>
          <p>List empty!</p>
        </li>
      </ul>
      <button type="button" @click="removeAllProduct">Delete all</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: [
          'Apples', 'Banana', 'Lemon'
      ],
      product: ''
    }
  },
  methods: {
    addProduct() {
      if (!this.validate()) {
        return;
      }
      this.products.push(this.product);
      this.clearProduct();
    },
    removeProduct(index) {
      this.products.splice(index, 1);
      this.clearProduct();
    },
    removeAllProduct() {
      this.products.splice(0, this.products.length);
      this.clearProduct();
    },
    validate() {
      if (this.product.trim() === '') {
        alert('Please input product!');
        return false;
      }
      return true;
    },
    clearProduct() {
      this.product = '';
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 50px auto;
  width: 700px;
  .header {
    margin: 0 auto;
    width: 600px;
    h2 {
      margin: 10px 0px 20px;
      text-align: center;
    }
    form {
      display: flex;
      justify-content: space-between;
      input {
        width: 85%;
        height: 30px;
      }
      button {
        width: 15%;
        margin-left: 15px;
        background-color: #2D3E50;
        color: #ffffff;
        font-weight: bold;
        border: none;
        border-radius: 8px;
        cursor: pointer;
      }
    }
  }
  .body {
    width: 600px;
    margin: 0 auto;
    text-align: center;
    ul {
      border: 1px solid #C7C7C7;
      list-style: none;
      padding: 30px 25px;
      li {
        display: flex;
        justify-content: space-between;
        padding: 10px 0px;
        p {
          margin: 0;
        }
        a {
          text-decoration: none;
          color: red;
          font-weight: bold;
          font-size: 14px;
        }
      }
    }
    button {
      width: 90px;
      height: 40px;
      background-color: #FF1016;
      border: none;
      border-radius: 8px;
      color: #ffffff;
      font-weight: bold;
      cursor: pointer;
    }
  }
}
</style>