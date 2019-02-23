<template lang="pug">
    div
        app-catalog-search(@searchChanged="searchProduct")
        app-catalog-products-list(:products="getProducts")
        app-catalog-pagination(:limit="10" :productsCount="productsCount")
</template>

<script>
import axios from 'axios';
import { wooConfig } from '~/api/wooConfig';

import AppCatalogProductsList from '~/components/catalog/AppCatalogProductsList';
import AppCatalogPagination from '~/components/catalog/AppCatalogPagination';
import AppCatalogSearch from '~/components/catalog/AppCatalogSearch';

export default {
    layout: 'catalog',
    transition: 'test',
    components: {
        AppCatalogProductsList,
        AppCatalogPagination,
        AppCatalogSearch
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
            productsCount: getCategoryID.data[0] ? getCategoryID.data[0].count : 0,
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
    },
    mounted() {
        
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
