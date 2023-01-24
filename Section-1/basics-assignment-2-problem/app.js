const app = Vue.createApp({
    data() {
        return {
            textInputKeyDown: "",
            textInputKeyDownEntered: ""
        }
    },
    methods: {
        showAlert(event) {
            alert("Hello!");
        },
        outputKeydown(event) {
            this.textInputKeyDown = event.target.value;
        },
        outputKeydownEntered(event) {
            this.textInputKeyDownEntered = event.target.value;
        }
    }
});

app.mount("#assignment");