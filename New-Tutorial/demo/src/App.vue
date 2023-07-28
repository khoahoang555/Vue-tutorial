<template>
  <select v-model="nameComponent">
    <option value="Home">Home</option>
    <option value="About">About</option>
  </select>

  <keep-alive>
    <component :is="nameComponent"></component>
  </keep-alive>
</template>

<script>
import Home from "./components/Home.vue";
import About from "./components/About.vue";
export default {
  name: 'App',
  components: {
    Home,
    About
  },
  data() {
    return {
      nameComponent: 'Home'
    }
  },
  watch: {
    nameComponent(newVal, oldVal) {
      // console.log(newVal);
    }
  }
}
</script>