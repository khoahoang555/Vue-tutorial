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
                    price: 33.15,
                    description: "This is demo 2",
                    image: "Good_Food_Display_-_NCI_Visuals_Online.jpg"
                }
            ],
            cart: {
                totalAmount: 0,
                totalProduct: 0,
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
        },
        getTotalProductInCart(state) {
            return state.cart.totalProduct;
        }
    },
    mutations: {
        updateCart(state, payload) {
            const idxProduct = state.products.findIndex(product => product.id === payload);

            state.cart.totalAmount = Math.round((state.cart.totalAmount + state.products[idxProduct].price) * 100) / 100;
            state.cart.totalProduct  = state.cart.totalProduct + 1;

            const idxProductCart = state.cart.products.findIndex(product => product.id === payload);
            if (idxProductCart != -1) {
                state.cart.products[idxProductCart].quantity = state.cart.products[idxProductCart].quantity + 1;
                state.cart.products[idxProductCart].total = state.cart.products[idxProductCart].total + state.cart.products[idxProductCart].price;
            } else {
                let obj = {
                    ...state.products[idxProduct]
                }
                obj.quantity = 1;
                obj.total = state.products[idxProduct].price;
                state.cart.products.push(obj);
            }
        }
    }
});

export default store;