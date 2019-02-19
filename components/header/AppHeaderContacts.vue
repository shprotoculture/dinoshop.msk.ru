<template lang="pug">
    .header-contacts
        .header-contacts__row
            a.header-contacts__link.header-contacts__link_phone(href="tel:+79660326666") +7 (966) 032 66 66
        .header-contacts__row
            a.header-contacts__link.header-contacts__link_email(href="mailto:info@dinoshop.msk.ru") info@dinoshop.msk.ru 
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '~assets/scss/global/vars';

.header-contacts {
    text-align: left;
    &__link {
        color: #000;
        display: inline-block;
        transition: .15s ease;
        font-size: 16px;
        font-weight: 500;
        &_phone {
            font-size: 16px;
            margin-bottom: 5px;
        }
        &_email {
            font-size: 14px;
        }
        &:hover {
            color: $c-green;
        }
    }
}

@media screen and (max-width: 991px) {
    .header-contacts {
        display: none;
    }
}
</style>
