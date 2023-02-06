<template>
  <base-card>
    <form @submit.prevent="addResource">
      <div class="form-group">
        <label>Title</label>
        <input type="text" class="form-control" v-model="resource.title">
      </div>
      <div class="form-group">
        <label>Description</label>
        <input type="text" class="form-control" v-model="resource.description">
      </div>
      <div class="form-group">
        <label>Link</label>
        <input type="text" class="form-control" v-model="resource.link">
      </div>
      <base-button title="Add Resource" class="active"></base-button>
    </form>
  </base-card>
  <base-dialog
      :hidden-modal="hiddenModal"
      content="Please input all field!"
      @close-modal="closeDialog"
  ></base-dialog>
</template>

<script>
import BaseCard from "@/components/UI/BaseCard.vue";
import BaseDialog from "@/components/UI/BaseDialog.vue";

export default {
  components: {BaseDialog, BaseCard},
  data() {
    return {
      hiddenModal: true,
      resource: {
        id: new Date().toISOString(),
        title: "",
        description: "",
        link: ""
      }
    }
  },
  methods: {
    addResource() {
      if (this.resource.title == '' || this.resource.description == '' || this.resource.link == '') {
        this.hiddenModal = false;
      } else {
        this.$emit('add-resource', this.resource);
      }
    },
    closeDialog(value) {
      this.hiddenModal = value;
    }
  }
}
</script>

<style>
.form-group {
  display: flex;
  flex-direction: column;
}

.form-control {
  border: 1px solid #cccccc;
  height: 25px;
}

.form-group label {
  font-weight: bold;
}

.form-control {
  margin: 5px 0px 15px 0px;

}
</style>