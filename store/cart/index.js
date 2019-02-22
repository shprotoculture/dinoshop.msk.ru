import Vue from 'vue';
import axios from 'axios';
import { wooConfig } from '~/api/wooConfig';


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
    },
    setTotalPrice(state, payload) {
        state.totalPrice = payload;
    }
};

export const actions = {

    calcTotalPrice({ state, commit }) {
        let queryString = '';
        let products = [];
        let totalPrice = 0;
        for (let key in state.productsInCart) {
            queryString += key + ',';
        }

        axios.get('products?include=' + queryString, wooConfig).then(response => {
            products = response.data;

            for (let key in products) {
                if (products[key].sale_price && products[key].sale_price !== '') {
                    totalPrice += parseFloat(products[key].sale_price) * state.productsInCart[products[key].id];
                } else {
                    totalPrice += parseFloat(products[key].regular_price) * state.productsInCart[products[key].id];
                }

            }

            commit('setTotalPrice', totalPrice);

        });
    },

    addProductToCart({ dispatch, commit }, payload) {
        commit('addProductToCart', payload);
        dispatch('calcTotalPrice');
    },

    removeProductFromCart({ dispatch, commit }, payload) {
        commit('removeProductFromCart', payload);
        dispatch('calcTotalPrice');
    },

    setProductsInCart({ dispatch, commit }, payload) {
        commit('setProductsInCart', payload);
        dispatch('calcTotalPrice');
    }

};