<template>
  <container-resources
      v-for="resource in listResource"
      :key="resource.id"
      :title="resource.title"
      :link="resource.link"
      :description="resource.description"
  ></container-resources>
</template>

<script>
import ContainerResources from "@/components/learning-resources/ContainerResources.vue";

export default {
  components: {ContainerResources},
  props: ['listResource']
}
</script>
