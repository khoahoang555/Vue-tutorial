const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ""
    };
  },
  computed: {
    fullName() {
      if (this.name === '') return "";
      return "Phạm Hoàng " + this.name
    }
  },
  methods: {
    add() {
      this.counter++;
    },
    reduce() {
      this.counter--;
    }
  }
});

app.mount('#events');
