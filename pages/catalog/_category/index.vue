<template lang="pug">
    div
        app-catalog-products-list(:products="getProducts")
        app-catalog-pagination(:limit="10" :productsCount="productsCount")
</template>

<script>
import axios from 'axios';
import { wooConfig } from '~/api/wooConfig';

import AppCatalogProductsList from '~/components/catalog/AppCatalogProductsList';
import AppCatalogPagination from '~/components/catalog/AppCatalogPagination';

export default {
    layout: 'catalog',
    components: {
        AppCatalogProductsList,
        AppCatalogPagination
    },
    watchQuery: ['page'],
    key: to => to.fullPath,
    async asyncData({ params, query }) {

        let getCategoryID = await axios.get('products/categories?slug=' + params.category, wooConfig);
        let id = getCategoryID.data[0] ? getCategoryID.data[0].id : '';

        let page = query.page ? '&page=' + query.page : '';

        let getProductsData = await axios.get('products?category=' + id + page, wooConfig);

        return {
            getProducts: getProductsData.data,
            productsCount: getCategoryID.data[0] ? getCategoryID.data[0].count : 0
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
