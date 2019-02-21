<template lang="pug">
    #app
        keep-alive
            app-header
        main.main
            section.section
                .container
                    .row
                        .col-lg-3.p-15
                            app-catalog-categories
                        .col-lg-9.p-15
                            nuxt
</template>

<script>
import AppHeader from '~/components/header/AppHeader';
import AppCatalogCategories from '~/components/catalog/AppCatalogCategories';

export default {
    components: {
        AppCatalogCategories,
        AppHeader
    },
    computed: {
        listAllCategories() {
            return this.$store.state.catalog.categories.listAllCategories;
        }
    }
}
</script>

<style>
</style>