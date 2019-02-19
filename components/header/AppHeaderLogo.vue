<template lang="pug">
    .header-logo
        nuxt-link.header-logo__link(to="/" title="Dinoshop")
            img.header-logo__image(src="/img/logo.png" alt="Интернет магазин Dinoshop")
</template>

<script>
export default {

}
</script>

<style lang="scss">
.header-logo {
    text-align: center;

    &__link {
        display: inline-block;
        width: 128px;
    }
}

@media screen and (max-width: 575px) {
    .header-logo {
        &__link {
            width: 96px;
        }
    }
}
</style>
