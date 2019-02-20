import axios from 'axios';
import { wooConfig } from '~/api/wooConfig';


export const actions = {
    async nuxtServerInit({ commit }) {
        const listAllCategoriesData = await axios.get('products/categories?per_page=100', wooConfig);
        commit('catalog/categories/pushCategories', listAllCategoriesData.data);
    }
};