<template lang="pug">
form(@submit.prevent="onSubmit")
    .row
        .col-lg-6.p-15
            .checkout__shipping
                .checkout__title Адрес доставки
                .chechout__shipping-body
                    .row
                        .col-lg-6.p-15
                            .input
                                input.input__field(type="text" placeholder="Имя *")
                        .col-lg-6.p-15
                            .input
                                input.input__field(type="text" placeholder="Отчество")
                        .col-lg-12.p-15
                            .input
                                input.input__field(type="text" placeholder="Телефон *")
                        .col-lg-12.p-15
                            .input
                                input.input__field(type="email" placeholder="E-mail *")
                        .col-lg-12.p-15
                            .input
                                input.input__field(type="text" placeholder="Адрес (улица, дом, квартира) *")
                        .col-lg-12.p-15(v-if="delMail")
                            .input
                                input.input__field(type="text" placeholder="Населенный пункт *")
                        .col-lg-6.p-15(v-if="delMail")
                            .input
                                input.input__field(type="text" placeholder="Область/регион *")
                        .col-lg-6.p-15(v-if="delMail")
                            .input
                                input.input__field(type="text" placeholder="Почтовый индекс *")
                        .col-lg-12.p-15
                            .textarea
                                textarea(placeholder="Комментарий к заказу")
                        .col-lg-6.p-15
                            .checkbox
                                input(type="checkbox" id="submit_pol")
                                label(for="submit_pol") Даю согласие на обработку персональных данных
                        .col-lg-6.p-15.checkout__submit
                            button(class="button button_primary button_fluid") Оформить
        .col-lg-6.p-15.checkout-pay
            .checkout__payment
                .checkout__title Детали оплаты
                .checkout__payment-body
                    .checkout__payment-block
                        .checkout__payment-block-content
                            .checkout__payment-block-left.col-lg-6.p-15 Способ доставки
                            .checkout__payment-block-right.col-lg-6.p-15
                                ul
                                    li
                                        .radio
                                            input(type="radio" id="delivery-1" value="Курьером по Москве" name="delivery" checked @change="delMethod")
                                            label(for="delivery-1") Курьером по Москве
                                    li
                                        .radio
                                            input(type="radio" id="delivery-2" value="Самовывоз" name="delivery" @change="delMethod")
                                            label(for="delivery-2") Самовывоз
                                    li
                                        .radio
                                            input(type="radio" id="delivery-3" value="Почтой" name="delivery" @change="delMethod")
                                            label(for="delivery-3") Почтовой службой
                    .checkout__payment-block
                        .checkout__payment-block-content
                            .checkout__payment-block-left.col-lg-6.p-15 Способ оплаты
                            .checkout__payment-block-right.col-lg-6.p-15
                                ul
                                    li
                                        .radio
                                            input(type="radio" id="pay-1" value="Наличными" name="payment" checked )
                                            label(for="pay-1") Наличными
                                    li
                                        .radio
                                            input(type="radio" id="pay-2" value="Банковской картой" name="payment")
                                            label(for="pay-2") Банковской картой
                    .checkout__total
                        span.cart__total-price-text Итого:
                        span.cart__total-price-num.currency-label {{ totalPrice }}
</template>

<script>
export default {
    props: ['totalPrice'],
    data() {
        return {
            delMail: false
        }
    },
    methods: {
        delMethod(e) {
            if (e.target.value == 'Почтой') {
                this.delMail = true;
            } else {
                this.delMail = false;
            }
        },
        onSubmit() {
            this.$emit('subForm', this.totalPrice);
        }
    },
}
</script>

<style lang="scss">
.checkout {
	&__title {
		font-size: 24px;
		font-weight: 300;
		color: #4d4d4d;
		margin-bottom: 15px;
	}

	&__submit {
		text-align: right;
	}

	&__payment {
		padding-left: 60px;
	}

	@media screen and (max-width: 991px) {
		&__payment {
			padding-left: 0;
		}

		&-pay {
			order: -1;
		}
	}
}

.checkout__payment-block {
	padding: 15px 0;
	height: 137px;

	&-content {
		background: #f7f7f7;
		display: flex;
		flex-wrap: wrap;
		height: 100%;
	}

	&-left {
		padding: 15px;
		font-size: 14px;
		font-weight: 400;
		border-right: 1px solid #eeeeee;
	}

	&-right {
		padding: 15px;

		li {
			margin-bottom: 10px;

			&:last-child {
				margin-bottom: 0;
			}
		}
	}

	@media screen and (max-width: 991px) {
		height: auto;
	}
}

.checkout__total {
	padding-top: 15px;
	font-weight: 500;
}

.checkout-info {
	padding-top: 60px;

	&__content {
		padding: 30px;
		background: #f7f7f7;

		p {
			font-size: 13px;
			line-height: 1.6;
			margin-bottom: 15px;
			color: #000;

			&:last-child {
				margin-bottom: 0;
			}
		}
	}
}
</style>
