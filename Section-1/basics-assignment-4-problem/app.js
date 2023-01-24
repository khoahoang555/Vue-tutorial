const app = Vue.createApp({
    data() {
        return {
            className: "",
            toggle: true,
            backgroundColor: ""
        }
    },
    computed: {
        classes() {
            if (this.toggle) {
                return this.className + " visible";
            }
            return this.className + " hidden";
        }
    },
    methods: {
        toggleParagraph() {
            this.toggle = !this.toggle;
        }
    }
});

app.mount("#assignment");