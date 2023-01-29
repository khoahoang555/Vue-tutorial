<template>
  <li>
    <ul>
      <li>
        <strong>Name:</strong>
        {{ name }}
      </li>
      <li>
        <strong>Age:</strong>
        {{ age }}
      </li>
    </ul>
  </li>
</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      }
    },
    data() {
      return {}
    }
  }
</script>