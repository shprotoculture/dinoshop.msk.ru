<template lang="pug">
    .catalog-pagination(v-if="pagesCount > 1")
        ul.catalog-pagination__list
            li.catalog-pagination__item(v-for="(page, i) in pagesCount" :key="i")
                nuxt-link.catalog-pagination__link(
                    :to="`?page=` + (i + 1)"
                    :class="{'catalog-pagination__link_active': getActiveLink == (i + 1)}"
                    ) {{ i + 1 }}
</template>

<script>
export default {
    props: ['limit', 'productsCount'],
    computed: {
        pagesCount() {
            return Math.ceil(this.productsCount / this.limit);
        },
        getActiveLink() {
            return this.$route.query.page ? this.$route.query.page : 1;
        }
    }
}
</script>

<style lang="scss">
@import '~assets/scss/global/vars';

.catalog-pagination {
    margin-top: 30px;

    &__list {
        display: flex;
    }

    &__item {
        margin: 0 10px;
    }

    &__link {
        display: inline-block;
        width: 30px;
        height: 30px;
        border-radius: 100%;
        text-align: center;
        line-height: 30px;

        &_active {
            background: $c-green;
            color: #fff;
        }
    }
}
</style>
