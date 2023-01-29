<template>
  <form @submit.prevent="addFriend">
<!--    <div>-->
<!--      <label>Id: </label> <input v-model="friend.id">-->
<!--    </div>-->
    <div>
      <label>Name: </label> <input v-model="friend.name" />
    </div>
    <div>
      <label>Phone: </label> <input type="tel" v-model="friend.phone" />
    </div>
    <div>
      <label>Email: </label> <input v-model="friend.email" />
    </div>
<!--    <div>-->
<!--      <label>Favorite: </label> <input type="checkbox" v-model="friend.isFavorite" />-->
<!--    </div>-->
    <div>
      <button>Add Friend</button>
    </div>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        friend: {
          id: Math.random(),
          name: "",
          phone: "",
          email: "",
          isFavorite: false
        }
      }
    },
    methods: {
      addFriend() {
        this.$emit('add-new-friend', this.friend);
        // this.friend.id = Math.random();
        // this.friend.name = "";
        // this.friend.phone = "";
        // this.friend.email = "";
        // this.friend.isFavorite = false;
      }
    }
  }
</script>