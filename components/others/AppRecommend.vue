<template lang="pug">
    .recommend-grid
        .row
            .col-lg-3.p-15(v-for="product in products" :key="product.id")
                app-recommend-item(:product="product")
</template>

<script>
import AppRecommendItem from '~/components/others/AppRecommendItem';
export default {
    props: ['products'],
    components: {
        AppRecommendItem
    }
}
</script>

<style lang="scss">
</style>
