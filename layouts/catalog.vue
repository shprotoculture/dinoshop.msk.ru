<template lang="pug">
    #app
        app-header
        main.main
            section.section
                .container
                    .row
                        .col-lg-3.p-15
                            app-catalog-categories
                        .col-lg-9.p-15
                            transition(name="page" @after-enter="afterPageEnter()")
                                nuxt
</template>

<script>
import AppHeader from '~/components/header/AppHeader';
import AppCatalogCategories from '~/components/catalog/AppCatalogCategories';
import AppCatalogSearch from '~/components/catalog/AppCatalogSearch';
export default {
    components: {
        AppCatalogCategories,
        AppHeader,
        AppCatalogSearch
    },
    computed: {
        listAllCategories() {
            return this.$store.state.catalog.categories.listAllCategories;
        }
    },
    methods: {
      afterPageEnter() {
        this.$store.commit('header/closeMobileMenu');
      },
      searchProduct() {

      }
    }
}
</script>

<style lang="scss">
.catalog {
	&-enter {
		opacity: 0;
		transition: 0.4s ease;
	}

	&-leave-to {
		opacity: 0;
		transition: 0.4s ease;
	}
}
</style>