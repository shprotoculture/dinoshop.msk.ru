<template lang="pug">
    .header-main-nav
        ul.header-main-nav__list
            li.header-main-nav__item(
                    v-for="(link, i) in siteNavigationList" 
                    :key="i" 
                    :style="{ 'max-width': linkWidth + '%', 'flex': '0 0' + linkWidth + '%' }")
                nuxt-link.header-main-nav__link(:to="link.to" exact) {{ link.title }}
</template>

<script>
export default {
    computed: {
        siteNavigationList() {
            return this.$store.state.header.siteNavigationList;
        },
        linkWidth() {
            return 100 / this.siteNavigationList.length;
        }
    }
}
</script>

<style lang="scss">
@import '~assets/scss/global/vars';

.header-main-nav {
    &__list {
        display: flex;
    }

    &__link {
        color: #000;
        display: block;
        font-size: 12px;
        font-weight: 500;
        width: 100%;
        height: 60px;
        line-height: 60px;
        text-align: center;
        text-transform: uppercase;
        position: relative;
        transition: .15s ease;
        white-space: nowrap;
        &:after {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 3px;
            background: $c-green;
            left: 0;
            bottom: 0;
            transition: .15s ease;
            transform-origin: center;
            transform: scale3d(0, 0, 0);
        }
        &:hover {
            color: $c-green;
        }
        &.nuxt-link-active {
            color: $c-green;
            &:after {
                transform: scale3d(1, 1, 1);
            } 
        }
    }
}
</style>
