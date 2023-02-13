import {createRouter, createWebHistory} from "vue-router";

import PageProducts from "@/pages/PageProducts";
import PageCart from "@/pages/PageCart";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/products' },
        {
            name: 'products',
            path: '/products',
            component: PageProducts
        },
        {
            name: 'cart',
            path: '/cart',
            component: PageCart
        }
    ],
    linkActiveClass: 'active'
});

export default router;