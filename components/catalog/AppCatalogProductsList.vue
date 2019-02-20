<template lang="pug">
    .product-list
        ul
            li(v-for="product in products" :key="product.id") {{ product.name }}
</template>

<script>
export default {
    props: ['products']
}
</script>

<style>
</style>
