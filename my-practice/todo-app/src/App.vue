<template>
  <header>
    <h1>To-Do App</h1>
  </header>
  <div class="card-container">
    <div class="card">
      <button class="active">Stored Resources</button>
      <button>Add Resources</button>
    </div>
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

.card-container {
  display: flex;
  justify-content: center;
  margin: 20px 0px 20px 0px;
}

.card {
  /*border: 1px solid #000000;*/
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  padding: 15px 0px 15px 15px;
  width: 600px;
}

.card button {
  /*width: 150px;*/
  /*height: 40px;*/
  padding: 13px 25px 13px 25px;
  border: none;
  background-color: #ffffff;
  color: #8D3075;
}

.card button:hover {
  background-color: #edd2ff;
}

.card .active {
  background-color: #3A0061;
  color: #ffffff;
}

.card .active:hover {
  background-color: #24003d;
}

</style>
