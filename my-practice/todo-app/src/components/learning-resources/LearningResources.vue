<template>
  <control-resource :current-mode="mode" @choose-mode="changeMode"></control-resource>
  <list-resources v-if="mode === 'list'" :list-resource="resources"></list-resources>
  <KeepAlive v-else>
    <form-resource @add-resource="addNewResource"></form-resource>
  </KeepAlive>
</template>

<script>
import ListResources from "@/components/learning-resources/ListResources.vue";
import ControlResource from "@/components/learning-resources/ControlResource.vue";
import FormResource from "@/components/learning-resources/FormResource.vue";

export default {
  components: {FormResource, ControlResource, ListResources},
  data() {
    return {
      mode: 'list',
      resources: [
        {
          id: new Date().toISOString(),
          title: "Official Guide",
          description: "The official Vue.js documentation.",
          link: "https://vuejs.org/"
        }
      ]
    }
  },
  methods: {
    changeMode(value) {
      this.mode = value;
    },
    addNewResource(resource) {
      this.resources.push(resource);
      this.mode = 'list';
    }
  }
}
</script>
