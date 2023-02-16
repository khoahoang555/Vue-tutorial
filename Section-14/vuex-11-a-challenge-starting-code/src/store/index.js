import {createStore} from "vuex";

import productsModule from '@/store/modules/products';

const store = createStore({
    modules: {
        prods: productsModule
    }
});

export default store;