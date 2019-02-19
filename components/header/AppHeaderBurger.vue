<template lang="pug">
    .toggle-menu
        button.burger(type="button" @click.prevent="toggleMobileMenu" :class="{'burger_active': mobileMenuIsActive}")
            span.burger__line.burger__line_f
            span.burger__line.burger__line_s
            span.burger__line.burger__line_t
</template>

<script>
export default {
    computed: {
        mobileMenuIsActive() {
            return this.$store.state.header.mobileMenuIsActive;
        }
    },
    methods: {
        toggleMobileMenu() {
            this.$store.commit('header/toggleMobileMenu');
        }
    }
}
</script>

<style lang="scss">
@import '~assets/scss/global/vars';

.burger {
    width: 55px;
    height: 55px;
    background: none;
    border: none;
    margin-left: -15px;
    position: relative;
    display: none;
    &__line {
        display: block;
        width: 25px;
        height: 2px;
        position: absolute;
        top: 50%;
        left: 15px;
        background: #000;
        transition: .25s .25s ease margin, .25s ease transform;

        &_f {
            margin-top: -8px;
        }

        &_s {
            margin-top: -1px;
        }

        &_t {
            margin-top: 6px;
        }
    }

    &_active {
        .burger__line {
            transition: .25s ease margin, .25s .25s ease transform;

            &_f, &_s {
                margin-top: -1px;
                transform: rotate(45deg);
            }

            &_t {
                margin-top: -1px;
                transform: rotate(-45deg);
            }
        }
    }
}

@media screen and (max-width: 991px) {
    .burger {
        display: block;
    }
}
</style>
