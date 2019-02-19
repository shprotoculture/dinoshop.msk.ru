<template lang="pug">
    .nav-wrap
        header.header
            .header-top
                .header-top__content.container
                    .row.align-items-center
                        .col-4
                            app-header-contacts
                            app-header-burger
                        .col-4
                            app-header-logo
                        .col-4
                            app-header-cart
            .header-bottom
                .header-bottom__content.container
                    app-header-main-nav
        app-header-mobile-menu
        .placeholder
        
</template>

<script>
import AppHeaderContacts from '~/components/header/AppHeaderContacts';
import AppHeaderLogo from '~/components/header/AppHeaderLogo';
import AppHeaderCart from '~/components/header/AppHeaderCart';
import AppHeaderMainNav from '~/components/header/AppHeaderMainNav';
import AppHeaderBurger from '~/components/header/AppHeaderBurger';
import AppHeaderMobileMenu from '~/components/header/AppHeaderMobileMenu';
export default {
    components: {
        AppHeaderContacts,
        AppHeaderLogo,
        AppHeaderCart,
        AppHeaderMainNav,
        AppHeaderBurger,
        AppHeaderMobileMenu
    }
}
</script>

<style lang="scss">
@import '~assets/scss/global/vars';

.header {
    background: #fff;
    box-shadow: 0 3px 7px rgba(#000, 0.07);
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 100;
    &-top {
        border-bottom: 1px solid #e5e5e5;
        padding: 10px 0;
    }
}

.placeholder {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 145px;
}

@media screen and (max-width: 991px) {
    .header {
        position: fixed;

        &-bottom {
            display: none;
        }
    }

    .placeholder {
        height: 85px;
    }
}

@media screen and (max-width: 575px) {
    .placeholder {
        height: 76px;
    }
}
</style>
