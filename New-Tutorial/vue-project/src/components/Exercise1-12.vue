<template>
<div>
  <h1 :class="$style.title">{{ title }}</h1>
  <h2 :class="$style.subtitle">{{ subtitle }}</h2>
  <p>This is test state-driven dynamic CSS</p>
</div>
</template>

<script>
export default {
  data () {
    return {
      title: 'CSS module component!',
      subtitle: 'The fourth exercise',
      dynamicStyle: {
        marginTop: '10px',
        textAlign: 'center',
        color: '#4fc08d'
      }
    }
  }
}
</script>

<style module>
h1, h2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}
.title {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
.subtitle {
  color: #4fc08d;
  font-style: italic;
}
p {
  margin-top: v-bind(dynamicStyle.marginTop);
  text-align: v-bind(dynamicStyle.textAlign);
  color: v-bind(dynamicStyle.color);
}
</style>