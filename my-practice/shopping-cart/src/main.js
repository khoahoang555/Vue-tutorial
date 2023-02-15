import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";

import BaseBadge from "@/components/ui/BaseBadge";
import BaseButton from "@/components/ui/BaseButton";
import BaseContainer from "@/components/ui/BaseContainer";
import BaseCart from "@/components/ui/BaseCart.vue";
import store from "@/store";

const app = createApp(App);

app.component("base-badge", BaseBadge);
app.component("base-button", BaseButton);
app.component("base-container", BaseContainer);
app.component("base-cart", BaseCart);

app.use(router);
app.use(store);

app.mount('#app')
