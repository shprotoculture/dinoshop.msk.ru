<template lang="pug">
    .cart-item
        .cart-item__col.cart-item__img
            img(:src="productImg")
        .cart-item__col.cart-item__name {{ product.name }}
        .cart-item__col.cart-item__price
            span.currency-label {{ productPrice }}
        .cart-item__col.cart-item__qty
            app-qty-input(:currentQty="productsInCart[id] || 0" @qty-changed="changeQty")
        .cart-item__col.cart-item__remove
            button.cart-item__remove-button(type="button" title="Удалить"  @click="removeItem(id)")
                i.fal.fa-times
</template>

<script>
import axios from 'axios';
import { wooConfig } from '~/api/wooConfig';

import AppQtyInput from '~/components/others/AppQtyInput';
export default {
	props: ['productID'],
    components: {
        AppQtyInput
	},
	data() {
		return {
			id: this.productID,
			product: {}
		}
	},
	computed: {
		productImg() {
			return this.product.images && this.product.images.length > 0 ? this.product.images[0].src : '/img/product-placeholder.jpg';
		},
		productPrice() {
			return this.product.sale_price !== '' ? parseFloat(this.product.sale_price).toFixed(2) : parseFloat(this.product.regular_price).toFixed(2);
		},
		productsInCart() {
			return this.$store.state.cart.productsInCart;
		}
	},
	methods: {
		changeQty(e) {
            if (e <= 0 || !e) {
                this.$store.dispatch("cart/removeProductFromCart", this.id);
                this.$cookies.set("products", this.productsInCart, 7);
            } else {
                this.$store.dispatch("cart/addProductToCart", {
                    id: this.id,
                    qty: e
                });
                this.$cookies.set("products", this.productsInCart, 7);
            }
		},
		removeItem (id) {
            this.$store.dispatch('cart/removeProductFromCart', id);
            this.$cookies.set('products', this.getProductsInCart, 7);
        }
	},
	mounted() {
		axios.get('/products/' + this.id, wooConfig).then(response => {
			this.product = response.data;
		});
	}
}
</script>

<style lang="scss">
@import "~assets/scss/global/vars";

.cart-item {
	display: flex;
	align-items: stretch;
	justify-content: flex-start;
	flex-wrap: wrap;
	background: #fff;
	border: 1px solid #f2f2f2;
	border-bottom: none;

	&__col {
		padding: 15px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-right: 1px solid #f2f2f2;

		&:last-child {
			border-right: none;
		}
	}

	&__img {
		width: 20%;
		flex: 0 0 20%;

		img {
			max-width: 100px;
		}
	}

	&__name {
		width: 30%;
		flex: 0 0 30%;
		text-align: center;
		font-size: 14px;
		font-weight: 500;
	}

	&__price {
		width: 20%;
		flex: 0 0 20%;
		font-size: 14px;
		font-weight: 500;
	}

	&__qty {
		width: 20%;
		flex: 0 0 20%;
	}

	&__remove {
		width: 10%;
		flex: 0 0 10%;

		&-button {
			border: none;
			background: none;
			color: #000;
			font-size: 16px;
		}
	}
}
</style>
