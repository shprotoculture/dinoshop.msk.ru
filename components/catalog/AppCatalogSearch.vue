<template lang="pug">
    .catalog-search
        form(@submit.prevent="searchProducts")
            input.catalog-search__field(type="text" ref="search-input" placeholder="Поиск")
            button.catalog-search__button(type="submit")
                i.far.fa-search
</template>

<script>
export default {
    methods: {
        searchProducts(e) {
            let query = this.$refs['search-input'].value;
            let search = [
                "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ",
                "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э",
                "я", "ч", "с", "м", "и", "т", "ь", "б", "ю"
            ];
            let replace = [
                "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "\\[", "\\]",
                "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'",
                "z", "x", "c", "v", "b", "n", "m", ",", "\\."
            ];
            function autoChangeLang(str) {

                for (var i = 0; i < replace.length; i++) {
                    var reg = new RegExp(replace[i], 'mig');
                    str = str.replace(reg, function (a) {
                        return a == a.toLowerCase() ? search[i] : search[i].toUpperCase();
                    });
                }

                return str;

            }

            if (! /^[а-яё ]*$/i.test(search)) {
                query = autoChangeLang(query);
            }
            this.$emit('searchChanged', query);
        }
    }
}
</script>

<style lang="scss">
@import '~assets/scss/global/vars';

.catalog-search {
    width: 100%;
    padding: 0 0 15px;
    position: relative;

    &__field {
        width: 100%;
        height: 45px;
        padding-left: 15px;
        position: relative;
        z-index: 1;
        border: 1px solid #e5e5e5
    }

    &__button {
        position: absolute;
        z-index: 2;
        width: 45px;
        height: 45px;
        top: 0;
        right: 0;
        background: none;
        border: none;
        border-left: 1px solid #e5e5e5;
        color: $c-green;
    }
}
</style>
