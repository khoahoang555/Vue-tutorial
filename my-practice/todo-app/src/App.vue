<template>
  <header>
    <h1>To-Do App</h1>
  </header>
  <div class="card">
    <button>Stored Resources</button>
    <button>Add Resources</button>
  </div>
</template>

<script>
export default {}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

/** {*/
/*  box-sizing: border-box;*/
/*}*/

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

header {
  background-color: rgb(100,0,50);
}

header h1 {
  color: #ffffff;
  text-align: center;
  padding: 25px 0px 25px 0px;
  margin: 0;
}

.card {
  /*border: 1px solid #000000;*/
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 20px;
  margin: 20px 0px 20px 0px;
}

.card button {
  
}
</style>
