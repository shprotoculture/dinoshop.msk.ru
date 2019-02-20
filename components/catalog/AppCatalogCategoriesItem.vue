<template lang="pug">
    .catalog-category-item
        nuxt-link.catalog-category-item__link(:to="'/catalog/' + category.slug") {{ category.name }}
        .catalog-category-item__subcategory
            ul.catalog-category-item__subcategory-list(v-if="subCategories.length > 0")
                li.catalog-category-item__subcategory-item(v-for="subCategory in subCategories" :key="subCategory.id")
                    nuxt-link.catalog-category-item__subcategory-link(:to="'/catalog/' + category.slug + '/' + subCategory.slug") {{ subCategory.name }}
</template>

<script>
export default {
    props: ['category'],
    computed: {
		listAllCategories() {
            return this.$store.state.catalog.categories.listAllCategories;
        },
        subCategories() {
            return this.listAllCategories.filter(subCategory => subCategory.parent === this.category.id);
        }
    }
}
</script>

<style lang="scss">
@import "~assets/scss/global/vars";

.catalog-category-item {
	&__link {
		font-size: 12px;
		font-weight: 500;
		text-transform: uppercase;

		&.nuxt-link-active {
			color: $c-green;
		}
	}

	&__subcategory {
		padding-left: 15px;
		border-left: 1px dotted $c-green;

		&-item {
			margin-top: 10px;
		}

		&-link {
			color: #000;
			font-size: 13px;
			font-weight: 500;

			&.nuxt-link-active {
				color: $c-green;
			}
		}
	}
}
</style>
