const app = Vue.createApp({
    data() {
        return {
            number: 0
        }
    },
    methods: {
        add(numbIncrement) {
            console.log("add 5");
            return this.number += numbIncrement;
        }
    },
    computed: {
        result() {
            if (this.number < 37) {
                return "Not there yet";
            } else if (this.number === 37) {
                return this.number;
            } else {
                return "Too much!";
            }
        }
    },
    watch: {
        number(newValue, oldValue) {
            if (newValue == 37) {
                this.result = "Not there yet";
                setTimeout(() => {
                    this.result = "";
                    this.number = 0;
                }, 5000);
            }
            else if (newValue > 37) {
                this.result = "Too much!";
                setTimeout(() => {
                    this.result = "";
                    this.number = 0;
                }, 5000);
            }
        }
    }
});

app.mount("#assignment");