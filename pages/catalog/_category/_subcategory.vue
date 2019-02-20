<template lang="pug">
    app-catalog-products-list(:products="products")
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
        let catId = 16;
        let page = query.page ? '&page=' + query.page : '';

        const allProductsData = await axios.get('products?category=' + catId + page, wooConfig);

        return {
            allProducts: allProductsData.data
        };
    },
    computed: {
        products() {
            let subcategory = this.$route.params.subcategory;
            return this.allProducts;
        }
    },
    mounted() {
        axios.get('products?fields=ksldf', wooConfig).then(response => {
            console.log(response.data);
        })
    }
}
</script>

<style lang="scss">
</style>
