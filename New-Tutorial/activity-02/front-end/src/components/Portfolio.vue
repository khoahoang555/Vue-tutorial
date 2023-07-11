<template>
  <Loading v-if="isLoading"></Loading>
  <div class="container" v-if="!isLoading">
<!--    <Loading></Loading>-->
    <div class="header">
      <h3 class="pb-5">{{ portfolio.fullName }}</h3>
      <h3 class="pb-5">{{ portfolio.job }}</h3>
      <p>{{ portfolio.description }}</p>
    </div>
    <hr>
    <div class="body">
      <h3 class="text-center p-15">Articles</h3>
      <div class="cart" v-for="(item, index) in projects" :key="index">
        <div class="cart-image">
          <img src="src/assets/images/pexels-jovana-nesic-593655.jpg">
        </div>
        <div class="cart-body">
          <p>{{ item.date }}</p>
          <p>{{ item.name }}</p>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "./Loading.vue";
import axios from "axios";

export default {
  components: {Loading},
  data() {
    return {
      isLoading: false,
      portfolio: {}
    }
  },
  methods: {
    getPortfolio() {
      this.isLoading = true;
      axios.get('https://vue-tutorial-7c9d6-default-rtdb.asia-southeast1.firebasedatabase.app/user.json').then(resp => {
        this.portfolio = resp.data;
        console.log(this.portfolio);
      }).catch(err => {
        alert('Have some errors when fetch data!');
        console.log(err);
      }).finally(() =>{
        this.isLoading = false;
      });
    }
  },
  computed: {
    projects() {
      return this.portfolio.projects;
    }
  },
  created() {
    this.getPortfolio();
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  width: 700px;
  padding: 30px;
}
h3 {
  margin: 0;
}
.header {
  text-align: center;
}
.cart-image img {
  width: 340px;
  height: 200px;
}
.text-center {
  text-align: center;
}
.cart {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
}
.cart-body {
  padding-left: 20px;
  p:first-child {
    font-size: 12px;
    font-weight: 700;
  }
  p:first-child + p {
    font-weight: bold;
  }
}
</style>