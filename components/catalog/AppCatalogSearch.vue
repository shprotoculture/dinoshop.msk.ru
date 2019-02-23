<template lang="pug">
    .catalog-search
        form(@submit.prevent="searchProducts")
            input.catalog-search__field(type="text" ref="search-input")
            button(type="submit") Поиск
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
</style>
