const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            inputTask: "",
            statusList: true
        }
    },
    computed: {
        captionBtnHideOrShow() {
            return this.statusList ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.inputTask);
            this.inputTask = "";
        },
        hideOrShowList() {
            this.statusList = !this.statusList;
        }
    }
});

app.mount("#assignment");