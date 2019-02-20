<template lang="pug">
    .catalog-categories
        .catalog-categories__title Категории
        ul.catalog-cateogries__list
            li.catalog-categories__item(v-for="category in filtredCategories" :key="category.id")
                app-catalog-categories-item(:category="category")
</template>

<script>
import AppCatalogCategoriesItem from '~/components/catalog/AppCatalogCategoriesItem';
export default {
    components: {
        AppCatalogCategoriesItem
    },
    computed: {
        listAllCategories() {
            return this.$store.state.catalog.categories.listAllCategories;
        },
        filtredCategories() {
            return this.listAllCategories.filter(category => category.parent === 0 && category.slug !== 'uncategorized');
        }
    }
}
</script>

<style lang="scss">
@import "~assets/scss/global/vars";

.catalog-categories {
	&__title {
		color: $c-green;
		font-size: 18px;
		font-weight: 500;
		margin-bottom: 30px;
	}

	&__item {
		margin-top: 15px;
		&:last-child {
			margin-bottom: 0;
		}
	}
}
</style>
