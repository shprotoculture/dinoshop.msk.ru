<template lang="pug">
    main.main
        section.section
            .container
                app-checkout(:totalPrice="totalPrice || 0")
</template>

<script>
import AppCheckout from '~/components/checkout/AppCheckout';
import axios from 'axios';
axios.defaults.baseURL = 'http://dinoshop.lo';
export default {
	components: {
		AppCheckout
    },
    computed: {
        totalPrice() {
            return parseFloat(this.$store.state.cart.totalPrice).toFixed(2);
        }
    }
}
</script>

<style lang="scss">
</style>
