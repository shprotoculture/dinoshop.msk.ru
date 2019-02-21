<template lang="pug">
    div
        .product-list
            h2 {{getCartProducts}}
            app-catalog-product-item(v-for="product in products" :key="product.id" :product="product")
        div
            nuxt-link(:to="$route.fullPath + '?page=2'") page 2
</template>

<script>
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
    },
    mounted() {
        console.log(this.products)
    }
}
</script>

<style>
</style>
