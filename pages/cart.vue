<template lang="pug">
main.main
    section.section
        .container
            .cart
                .cart-table(v-if="cartItemsCounter > 0")
                    transition(name="cart-table__preloader")
                        .cart-table__preloader(v-show="preload")
                            .cart-table__preloader-roter
                    .cart-table__header
                        .cart-table__header-col.cart-table__header-img
                        .cart-table__header-col.cart-table__header-name Наименование
                        .cart-table__header-col.cart-table__header-price Цена
                        .cart-table__header-col.cart-table__header-qty Кол-во
                        .cart-table__header-col.cart-table__header-remove
                    .cart-table__body
                        app-cart-item(v-for="(product, key) in productsInCart" :key="key" :productID="key")
                    .cart-table__footer
                        .cart__total-price
                            span.cart__total-price-text Итого:
                            span.cart__total-price-num.currency-label {{ totalPrice }}
                .cart-empty(v-else) Ваша корзина пуста.
</template>

<script>
import axios from 'axios';
import {
    wooConfig
} from '~/api/wooConfig';

import AppCartItem from '~/components/cart/AppCartItem';
export default {
    components: {
        AppCartItem
    },
    data() {
        return {
            preload: true
        }
    },
    computed: {
        productsInCart() {
            return this.$store.state.cart.productsInCart;
        },
        totalPrice() {
            return this.$store.state.cart.totalPrice.toFixed(2);
		},
		cartItemsCounter() {
            return Object.keys(this.$store.state.cart.productsInCart).length;
        }
    },
    mounted() {
        setTimeout(() => {
            this.preload = false;
        }, 1000);
    }

}
</script>

<style lang="scss">
@import "~assets/scss/global/vars";

.cart {
	&-table {
		position: relative;

		&__preloader {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: rgba(#fff, 0.99);
			transition: 0.4s ease;
			min-height: 200px;

			&-enter {
				opacity: 0;
			}

			&-leave-to {
				opacity: 0;
			}

			&-roter {
				position: absolute;
				width: 50px;
				height: 50px;
				border-radius: 100%;
				border: 3px solid $c-green;
				border-top-color: transparent;
				left: 50%;
				margin-left: -25px;
				top: 50px;
				animation: cart_preloader 1s ease infinite;
			}
		}

		&__header {
			display: flex;
			align-items: stretch;
			justify-content: flex-start;
			background: #fff;
			border: 1px solid #e5e5e5;
			border-bottom: none;

			&-col {
				padding: 15px;
				text-align: center;
				border-right: 1px solid #e5e5e5;
				font-size: 14px;
				font-weight: 500;

				&:last-child {
					border-right: none;
				}
			}

			&-img {
				width: 20%;
				flex: 0 0 20%;
			}

			&-name {
				width: 30%;
				flex: 0 0 30%;
			}

			&-price {
				width: 20%;
				flex: 0 0 20%;
			}

			&-qty {
				width: 20%;
				flex: 0 0 20%;
			}

			&-remove {
				width: 10%;
				flex: 0 0 10%;
			}
		}

		&__footer {
			padding: 15px;
			background: #fff;
			text-align: right;
			border: 1px solid #e5e5e5;
		}
	}

	&__total-price {
		text-align: right;
		font-size: 14px;
		font-weight: 500;

		&-text {
			display: inline-block;
			padding-right: 5px;
		}
	}
}

@keyframes cart_preloader {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}
</style>
