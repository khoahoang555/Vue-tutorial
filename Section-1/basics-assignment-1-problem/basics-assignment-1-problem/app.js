const app = Vue.createApp({
    data() {
        return {
            myName: "Khoa",
            myAge: 21,
            randomNumber: Math.random(),
            imgHref: "864678.jpg"
        }
    }
});

app.mount("#assignment");