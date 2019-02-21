import Vue from 'vue';

export const state = () => ({
    productsInCart: {},
    totalPrice: 0
});

export const mutations = {
    addProductToCart(state, payload) {
        Vue.set(state.productsInCart, payload.id, payload.qty);
    },
    removeProductFromCart(state, payload) {
        Vue.delete(state.productsInCart, payload);
    },
    setProductsInCart(state, payload) {
        state.productsInCart = payload;
    }
};