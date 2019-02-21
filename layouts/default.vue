<template lang="pug">
    #app
        keep-alive
            app-header
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
