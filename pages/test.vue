<template lang="pug">
    button(type="button" @click="req") req
</template>

<script>
import axios from 'axios';
export default {
    methods: {
        req() {
            axios.post('https://api.dinoshop.msk.ru/yandex-kassa/ya.php').then(response => {
                let redirectURL = response.data.confirmation.confirmation_url;
                window.location.replace(redirectURL);
            }).catch(error => {
                console.log(error);
            });
        }
    }
}
</script>

<style lang="scss">

</style>
