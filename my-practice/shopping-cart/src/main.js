import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";

import BaseBadge from "@/components/ui/BaseBadge";
import BaseButton from "@/components/ui/BaseButton";
import BaseContainer from "@/components/ui/BaseContainer";


const app = createApp(App);

app.component("base-badge", BaseBadge);
app.component("base-button", BaseButton);
app.component("base-container", BaseContainer);

app.use(router);

app.mount('#app')
