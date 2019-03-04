<template lang="pug">
.recommend-item
        .recommend-item__image
            img(:src="productImg")
        .recommend-item__content
            h4.recommend-item__title {{ product.name }}
            .recommend-item__price
                span.recommend-item__price-old {{ getRegularPrice }}
                span.recommend-item__price-current.currency-label {{ getSalePrice }}
        .recommend-item__btm
            app-qty-input(:currentQty="productsInCart[id] || 0" @qty-changed="changeQty")
            button.recommend-item__add(type="button" @click.prevent="addProductToCart(id)" :class="{'recommend-item__add_active': productsInCart[id]}")
                transition(name="recommend-item__add-icon" mode="out-in")
                    i.recommend-item__add-icon.fal.fa-shopping-cart(v-if="!productsInCart[id]" key="cart")
                    i.recommend-item__add-icon.fal.fa-plus(v-else key="plus")
</template>

<script>
import AppQtyInput from '~/components/others/AppQtyInput';
export default {
    props: ['product'],
    components: {
        AppQtyInput
    },
    data() {
        return {
            id: this.product.id
        }
    },
    computed: {
        productImg() {
			return this.product.images && this.product.images.length > 0 ? this.product.images[0].src : '/img/product-placeholder.jpg';
		},
		getRegularPrice() {
            return parseFloat(this.product.regular_price).toFixed(2);
        },
        getSalePrice() {
            return parseFloat(this.product.sale_price).toFixed(2);
        },
		productsInCart() {
			return this.$store.state.cart.productsInCart;
		}
    },
    methods: {
        addProductToCart(id) {
            let qty = 1;
            if (!this.productsInCart[id]) {
                this.$store.dispatch("cart/addProductToCart", {
                    id,
                    qty
                });
                this.$cookies.set("products", this.productsInCart, 7);
            } else {
                this.$store.dispatch("cart/addProductToCart", {
                    id,
                    qty: this.productsInCart[id] + 1
                });
                this.$cookies.set("products", this.productsInCart, 7);
            }
        },
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
        }
	},
}
</script>

<style lang="scss">
@import "~assets/scss/global/vars";

.recommend-item {
	background: #fff;
	padding: 30px 20px;
	transition: 0.25s ease;
	border: 1px solid #f2f2f2;
	&:hover {
		box-shadow: 0px 3px 10px rgba(#000, 0.07);
	}

	&__image {
		margin-bottom: 15px;
	}

	&__title {
		font-size: 14px;
		font-weight: 500;
		margin-bottom: 15px;
		height: 35px;
	}

	&__price {
		font-size: 14px;
		font-weight: 400;
		display: inline-block;
		margin-bottom: 30px;

		&-old {
			color: #9a9a9a;
			padding-right: 5px;
			text-decoration: line-through;
		}
	}

	&__btm {
		display: flex;
		align-items: center;
		justify-content: space-between;

		.product-qty-input {
			margin: 0;
		}
	}

	&__add {
		background: $c-green;
		border: none;
		border-radius: 20px;
		color: #fff;
		display: inline-block;
		font-size: 16px;
		width: 90px;
		height: 30px;
		overflow: hidden;
		position: relative;

		&-icon {
			transition: 0.1s ease-out;

			&-enter {
				transform: translate3d(0, 100%, 0);
			}

			&-leave-to {
				transform: translate3d(0, -100%, 0);
			}
		}

		&_active {
			background: #049ce2;
		}
	}
}
</style>
