<template lang="pug">
    app-catalog-products-list(:products="getProducts")
</template>

<script>
import axios from 'axios';
import { wooConfig } from '~/api/wooConfig';

import AppCatalogProductsList from '~/components/catalog/AppCatalogProductsList';

export default {
    layout: 'catalog',
    components: {
        AppCatalogProductsList
    },
    async asyncData({ params, query }) {

        let getCategoryID = await axios.get('products/categories?slug=' + params.category, wooConfig);
        let id = getCategoryID.data[0] ? getCategoryID.data[0].id : '';

        let page = query.page ? '&page=' + query.page : '';

        let getProductsData = await axios.get('products?category=' + id + page, wooConfig);

        return {
            getProducts: getProductsData.data
        };
    },
    computed: {
        products() {
            return this.getProducts;
        }
    }
}
</script>

<style lang="scss">
</style>
