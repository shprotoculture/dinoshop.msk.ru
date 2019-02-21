<template lang="pug">
    .product-qty-input
        button.product-qty-input__control(type="button" @click="minus")
            i.fal.fa-minus
        input.product-qty-input__field(type="number" min="0" max="99" :value="currentQty" @input="input")
        button.product-qty-input__control(type="button" @click="plus")
            i.fal.fa-plus
</template>

<script>
export default {
    props: ['currentQty'],
    methods: {
        plus() {
            this.$emit('qty-changed', this.currentQty + 1);
        },
        minus() {
            if (this.currentQty <= 0) return false;
            this.$emit('qty-changed', this.currentQty - 1);
        },
        input(e) {
            let qty = this.currentQty;
            if (e.target.value < 0 || e.target.value.trim() == '') {
                qty = 0;
                e.target.value = 0;
            } else if (e.target.value > 99) {
                qty = 99;
                e.target.value = 99;
            }

            qty = parseInt(e.target.value);
            this.$emit('qty-changed', qty);
        }
    }
};
</script>

<style lang="scss">
@import "~assets/scss/global/vars";

.product-qty-input {
	width: 90px;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 auto;

	&__control {
		width: 20px;
		height: 20px;
		flex: 0 0 20px;
		border-radius: 100%;
		border: none;
		background: #4aac48;
		color: #fff;
	}

	&__field {
		width: 30px;
		height: 30px;
		border: 1px solid #e5e5e5;
		text-align: center;
		transition: 0.25s ease;
		&:focus {
			border-color: #c4c4c4;
		}
	}
}
</style>
