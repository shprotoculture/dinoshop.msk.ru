<template lang="pug">
	main.main
		.container
			.p-15
				button(type="button" @click="hand(productID)") {{ productName }}
</template>

<script>
	import axios from 'axios';
	import { wooConfig } from '~/api/wooConfig';

	export default {
		async asyncData ({ params }) {
			const productData = await axios.get('products', wooConfig);
			return { 
				productList: productData.data,
				productName: productData.data[0].name, 
				productID: productData.data[0].id, 
			};
		},
		methods: {
			hand(id) {
				console.log(id)
			}
		}
	};
</script>

<style>
</style>

