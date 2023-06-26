<template>
  <div>
    <h1 v-if="false" v-once v-text="text"></h1>
    <h2 v-else-if="false" v-html="html"></h2>
    <a v-else
       :href="link.url"
       :target="link.target"
       :tabindex="link.tabindex"
    >{{ link.title }}</a>
  </div>
</template>

<script setup>
const text = 'Directive text';
const html = 'Stylise</br>HTML in<br/><b>your data</b>';
const link = {
  title: 'Go to google',
  url: 'https://google.com',
  tabindex: 1,
  target: '_blank'
};
</script>

<style></style>