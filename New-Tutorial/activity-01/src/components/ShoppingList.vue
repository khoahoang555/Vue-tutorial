<template>
  <div class="container">
    <h1>Shopping list</h1>
    <form>
      <input placeholder="Please enter to add new item">
      <button>Add item</button>
    </form>
    <ul>
      <li>
        <p>Apples</p>
        <button>Remove</button>
      </li>
      <li>
        <p>Bananas</p>
        <button>Remove</button>
      </li>
      <li>
        <p>Carrots</p>
        <button>Remove</button>
      </li>
    </ul>
    <button>Delete All</button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 40%;
  border: 1px solid #000000;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>