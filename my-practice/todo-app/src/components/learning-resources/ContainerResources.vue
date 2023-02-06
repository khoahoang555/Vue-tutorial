<template>
  <base-card>
    <div class="card-title">
      <h3>{{ title }}</h3>
      <base-button dynamic-type="margin-left: auto;" title="Delete"></base-button>
    </div>
    <div class="card-content">
      <p>{{ description }}</p>
    </div>
    <a class="card-link" :href="link">View Resource</a>
  </base-card>
</template>

<script>
import BaseButton from "@/components/UI/BaseButton.vue";

export default {
  components: {BaseButton},
  props: {
    title: {
      required: true,
      type: String
    },
    description: {
      required: true,
      type: String
    },
    link: {
      required: true,
      type: String
    }
  }
}
</script>

<style scoped>
.card-content {
  margin: 15px 0px 7px 0px;
}

.card-content p {
  margin: 0;
}

.card-title {
  display: flex;
  align-items: center;
}

.card-title h3 {
  margin: 0;
}

.card-button button {
  background-color: #1D4ED8;
  color: #ffffff;
  border-radius: 10px;
  font-weight: bold;
  font-size: 14px;
}

.card-link {
  text-decoration: none;
  color: #DC8218;
}
</style>