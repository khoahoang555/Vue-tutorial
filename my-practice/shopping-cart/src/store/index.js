import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            products: [
                {
                    id: 1,
                    title: "Book Collection",
                    price: 99.99,
                    description: "This is demo",
                    image: "Books_HD_(8314929977).jpg"
                },
                {
                    id: 2,
                    title: "Food Book",
                    price: 99.99,
                    description: "This is demo 2",
                    image: "Good_Food_Display_-_NCI_Visuals_Online.jpg"
                }
            ],
            cart: {
                totalAmount: 0,
                products: []
            }
        }
    },
    getters: {
        getProducts(state) {
            return state.products;
        },
        getCart(state) {
            return state.cart;
        }
    },
    mutations: {
        updateCart(state, payload) {
            // const id = payload.value;
            console.log(payload);
            const idxProduct = state.products.findIndex(product => product.id === payload);

            state.cart.totalAmount = Math.round((state.cart.totalAmount + state.products[idxProduct].price) * 100) / 100;

            // const idxProductCart = state.cart.products.findIndex(product => product.id === payload);
            // if (index) {
            //
            // }
            //console.log(index);
        }
    }
});

export default store;