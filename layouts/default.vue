<template lang="pug">
    #app
        app-header
        transition(name="page" @after-enter="afterPageEnter()")
            nuxt
</template>

<script>
import AppHeader from '~/components/header/AppHeader';
export default {
    components: {
        AppHeader 
    },
    methods: {
      afterPageEnter() {
        this.$store.commit('header/closeMobileMenu');
      }
    }
}
</script>

<style lang="scss">
</style>

