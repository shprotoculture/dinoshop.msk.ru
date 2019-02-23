<template lang="pug">
    app-catalog-products-list(:products="products")
</template>

<script>
import axios from 'axios';
import { wooConfig } from '~/api/wooConfig';

import AppCatalogProductsList from '~/components/catalog/AppCatalogProductsList';

export default {
    layout: 'catalog',
    transition: 'test',
    components: {
        AppCatalogProductsList
    },
    async asyncData({ params, query }) {

        let getSubcategoryID = await axios.get('products/categories?slug=' + params.subcategory, wooConfig);
        let id = getSubcategoryID.data[0] ? getSubcategoryID.data[0].id : '';

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
.test {
	&-enter {
		opacity: 0;
	}
	&-enter-active {
		transition: 0.5s ease;
	}
	&-leave-to {
		transition: 0.5s ease;
		opacity: 0;
	}
}
</style>
