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

export default {
    components: {
        AppCatalogCategories,
        AppHeader
    },
    computed: {
        listAllCategories() {
            return this.$store.state.catalog.categories.listAllCategories;
        }
    },
    methods: {
      afterPageEnter() {
        this.$store.commit('header/closeMobileMenu');
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