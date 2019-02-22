<template lang="pug">
    #app
        app-header
        transition(name="page")
            nuxt
</template>

<script>
import AppHeader from '~/components/header/AppHeader';
export default {
    components: {
        AppHeader 
    }
}
</script>

<style lang="scss">
</style>

