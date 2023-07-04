<template>
<h1>Vue Lifecycle hooks</h1>
<ul>
  <li v-for="(item, n) in list" :key="n">
    {{ item }}
    <button @click="deleteItem(item)">Delete</button>
  </li>
</ul>
</template>

<script>
export default {
  data() {
    return {
      list: [
          'Apex Legends',
          'Lol',
          'testing unmounted hooks'
      ]
    }
  },
  methods: {
    deleteItem(value) {
      this.list = this.list.filter(item => item != value);
    }
  },
  beforeCreate() {
    alert('beforeCreate: data is static, thats it');
  },
  created() {
    alert('created: data and events ready, but no DOM');
  },
  beforeMount() {
    alert('beforeMount: $el not ready');
  },
  mounted() {
    alert('mounted: DOM ready to use');
  },
  beforeUpdate() {
    alert('beforeUpdate: We know an update is about to happen, and have the data');
  },
  updated() {
    alert('updated: virtual DOM will update after you');
  },
  beforeUnmount() {
    alert('beforeUnmount: about to blow up this component');
  },
  unmounted() {
    alert('unmounted: this component has been destroyed');
  }
}
</script>