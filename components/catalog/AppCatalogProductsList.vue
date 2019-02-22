<template lang="pug">
    .product-list
        app-catalog-product-item(v-for="product in products" :key="product.id" :product="product")
</template>

<script>
import axios from 'axios';
import { wooConfig } from '~/api/wooConfig';

import AppCatalogProductItem from '~/components/catalog/AppCatalogProductItem';
export default {
    props: ['products'],
    components: {
        AppCatalogProductItem
    },
    computed: {
        getCartProducts() {
			return this.$store.state.cart.productsInCart;
        }
    }

}
</script>

<style>
</style>
