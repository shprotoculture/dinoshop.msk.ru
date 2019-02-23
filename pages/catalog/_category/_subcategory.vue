<template lang="pug">
    div
        app-catalog-search(@searchChanged="searchProduct")
        app-catalog-products-list(:products="products")
        app-catalog-pagination(:limit="10" :productsCount="productsCount")
</template>

<script>
import axios from 'axios';
import { wooConfig } from '~/api/wooConfig';

import AppCatalogProductsList from '~/components/catalog/AppCatalogProductsList';
import AppCatalogSearch from '~/components/catalog/AppCatalogSearch';
import AppCatalogPagination from '~/components/catalog/AppCatalogPagination';

export default {
    layout: 'catalog',
    transition: 'test',
    components: {
        AppCatalogProductsList,
        AppCatalogSearch,
        AppCatalogPagination
    },
    async asyncData({ params, query }) {

        let getSubcategoryID = await axios.get('products/categories?slug=' + params.subcategory, wooConfig);
        let id = getSubcategoryID.data[0] ? getSubcategoryID.data[0].id : '';

        let page = query.page ? '&page=' + query.page : '';

        let getProductsData = await axios.get('products?category=' + id + page, wooConfig);

        return {
            getProducts: getProductsData.data,
            productsCount: getSubcategoryID.data[0] ? getSubcategoryID.data[0].count : 0,
            page: page,
            id: id
        };
    },
    computed: {
        products() {
            return this.getProducts;
        }
    },
    methods: {
        searchProduct(e) {
            
            if (e.trim() == '') {
                axios.get('products?category=' + this.id + this.page, wooConfig).then(response => {
                    this.getProducts = response.data;
                });
            } else {
                axios.get('products/tags/?search=' + e, wooConfig).then(response => {

                    let tags = response.data;

                    let tagsIds = '';

                    for(let i = 0; i < tags.length; i++) {
                        tagsIds += tags[i].id + ',';
                    }

                    axios.get('products?tag=' + tagsIds, wooConfig).then(response => {
                        console.log(response.data);
                        this.getProducts = response.data;
                    });
                    
                });
            }

            
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
