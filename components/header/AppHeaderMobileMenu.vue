<template lang="pug">
    .mobile-menu(:class="{ 'mobile-menu_active': mobileMenuIsActive }")
        .mobile-menu__content
            .container
                .mobile-nav
                    ul.mobile-nav__list
                        li.mobile-nav__item(v-for="(link, i) in siteNavigationList" :key="i")
                            nuxt-link.mobile-nav__link(:to="link.to" exact) {{ link.title }}
</template>

<script>
export default {
    computed: {
        siteNavigationList() {
            return this.$store.state.header.siteNavigationList;
        },
        mobileMenuIsActive() {
            return this.$store.state.header.mobileMenuIsActive;
        }
    }
}
</script>

<style lang="scss">
@import '~assets/scss/global/vars';

.mobile-menu {
    background: #fff;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 90;
    transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
    transform: translate3d(-100%, 0, 0);
    display: none;

    &__content {
        position: absolute;
        top: 85px;
        right: 0;
        left: 0;
        bottom: 0;
        padding-top: 30px;
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }

    &_active {
        transform: translate3d(0, 0, 0);
    }
}

.mobile-nav {
    &__link {
        display: block;
        padding: 15px 0;
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
        border-bottom: 1px solid #f2f2f2;
        
        &.nuxt-link-active {
            color: $c-green;
        }
    }
}

@media screen and (max-width: 991px) {
    .mobile-menu {
        display: block;
    }
}

@media screen and (max-width: 575px) {
    .mobile-menu {
        &__content {
            top: 76px;
        }
    }
}
</style>
