<template lang="pug">
.product-item
    .product-item__image-wrapper.p-15
        a.product-item__image-link(href="#" data-fancybox)
            img.product-item__image(:src="getProductImage")
    .product-item__content.p-15
        h4.product-item__content-title {{ product.name }}
        .product-item__content-desc(v-html="product.description")
    .product-item__pricing.p-15
        span.product-item__price.product-item__price_old {{ getRegularPrice }}
        span.product-item__price.product-item__price_current.currency-label {{ getSalePrice }}
    .product-item__actions.p-15
        .product-item__add
            button.product-item__add-button(type="button" @click.prevent="addProductToCart(id)" :class="{'product-item__add-button_active': productsInCart[id]}")
                transition(name="product-item__add-button-icon" mode="out-in")
                    i.product-item__add-button-icon.fal.fa-shopping-cart(v-if="!productsInCart[id]" key="cart")
                    i.product-item__add-button-icon.fal.fa-plus(v-else key="plus")
        .product-item__qty
            app-qty-input(:currentQty="productsInCart[id] || 0" @qty-changed="changeQty")
        
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
			id: this.product.id,
        }
    },
    computed: {
        getRegularPrice() {
            return parseFloat(this.product.regular_price).toFixed(2);
        },
        getSalePrice() {
            return parseFloat(this.product.sale_price).toFixed(2);
        },
        getProductImage() {
            return this.product.images[0] ? this.product.images[0].src : '/img/product-placeholder.jpg';
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

.product-item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	border: 1px solid #e5e5e5;
	border-bottom: none;
	position: relative;
	transition: 0.4s ease;

	&:last-child {
		border-bottom: 1px solid #e5e5e5;
	}

	&__image-wrapper {
		max-width: 20%;
		flex: 0 0 20%;
	}

	&__content {
		max-width: 40%;
		flex: 0 0 40%;

		&-title {
			font-size: 16px;
			font-weight: 500;
			margin-bottom: 5px;
		}

		&-desc {
			font-size: 12px;
			font-weight: 400;
			line-height: 1.6;
			color: #4d4d4d;
		}
	}

	&__pricing {
		max-width: 20%;
		flex: 0 0 20%;
		text-align: center;
	}

	&__price {
		font-size: 14px;
		font-weight: 400;
		display: inline-block;

		&_old {
			color: #9a9a9a;
			padding-right: 5px;
			text-decoration: line-through;
		}
	}

	&__actions {
		max-width: 20%;
		flex: 0 0 20%;
		text-align: center;
	}

	&__add {
		margin-bottom: 10px;

		&-button {
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

	&__variations {
		max-width: 100%;
		flex: 0 0 100%;
		border-top: 1px solid #e5e5e5;
	}
}

@media screen and (max-width: 991px) {
	.product-item {
		&__image-wrapper {
			max-width: 30%;
			flex: 0 0 30%;
		}

		&__content {
			max-width: 70%;
			flex: 0 0 70%;
		}

		&__pricing {
			max-width: 50%;
			flex: 0 0 50%;
			text-align: left;
		}

		&__actions {
			max-width: 50%;
			flex: 0 0 50%;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		&__add {
			margin-bottom: 0;
			order: 2;
		}
	}
}

@media screen and (max-width: 575px) {
	.product-item {
		&__image-wrapper {
			max-width: 100%;
			flex: 0 0 100%;
		}

		&__content {
			max-width: 100%;
			flex: 0 0 100%;
		}

		&__pricing {
			max-width: 100%;
			flex: 0 0 100%;
		}

		&__actions {
			max-width: 100%;
			flex: 0 0 100%;
		}
	}
}
</style>
