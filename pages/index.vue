<template lang="pug">
    .container
        h2.msg На сайте ведутся технические работы. Приносим наши извинения.
</template>

<script>
	var WooCommerceAPI = require('woocommerce-api');

    var WooCommerce = new WooCommerceAPI({
    url: 'https://api.dinoshop.msk.ru',
    consumerKey: 'ck_2f11033dd5c4d4a43f11f5c766dda92994cbd2f3',
    consumerSecret: 'cs_8aee5928fc84585c665e295ff7b910e7a67f66e8',
    wpAPI: true,
    version: 'wc/v3',
    queryStringAuth: true // Force Basic Authentication as query string true and using under HTTPS
    });
	export default {
		mounted() {
			WooCommerce.get("products", function(err, data, res) {
				console.log(res);
			});
		}
	};
</script>

<style>
	.container {
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.title {
		font-family: "Quicksand", "Source Sans Pro", -apple-system,
			BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
			sans-serif;
		/* 1 */
		display: block;
		font-weight: 300;
		font-size: 100px;
		color: #35495e;
		letter-spacing: 1px;
	}

	.subtitle {
		font-weight: 300;
		font-size: 42px;
		color: #526488;
		word-spacing: 5px;
		padding-bottom: 15px;
	}

	.links {
		padding-top: 15px;
	}
</style>

