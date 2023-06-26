<template>
  <div>
    <h1>Looping through array of objects</h1>
    <ul>
      <li v-for="(item, n) in interests" :key="n">
        {{ item.title }}
        <ol v-if="item.favorites.length > 0">
          <li v-for="(fav, m) in item.favorites" key="m">
            {{ fav }}
          </li>
        </ol>
      </li>
    </ul>
  </div>
</template>

<script setup>
const interests = [
  {
    title: 'TV',
    favorites: ['Designated Survivor', 'Spongebob']
  },
  {
    title: 'Games',
    favorites: ['LOL']
  },
  {
    title: 'Sports',
    favorites: []
  }
]
</script>