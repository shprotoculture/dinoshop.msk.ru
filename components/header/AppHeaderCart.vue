<template lang="pug">
    .header-cart
        nuxt-link.header-cart__link(to="/cart")
            i.header-cart__icon.far.fa-shopping-cart
            span.header-cart__text Корзина
            span.header-cart__counter ({{ cartItemsCounter }})
</template>

<script>
export default {
    computed: {
        cartItemsCounter() {
            return Object.keys(this.$store.state.cart.productsInCart).length;
        }
    }
}
</script>

<style lang="scss">
@import "~assets/scss/global/vars";

.header-cart {
	text-align: right;
	&__link {
		color: #000;
		font-size: 16px;
		font-weight: 500;
		transition: 0.25s ease;
		&:hover {
			color: $c-green;
		}
	}
	&__text {
		display: inline-block;
		padding: 0 3px;
	}
}

@media screen and (max-width: 991px) {
	.header-cart {
		&__text {
			display: none;
		}
	}
}
</style>
