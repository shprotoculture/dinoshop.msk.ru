<template lang="pug">
div
    button(type="button" @click="addOrder") Add Order
</template>

<script>
    import axios from 'axios';
	var WooCommerceAPI = require("woocommerce-api");

	var WooCommerce = new WooCommerceAPI({
		url: "https://api.dinoshop.msk.ru",
		consumerKey: "ck_2f11033dd5c4d4a43f11f5c766dda92994cbd2f3",
		consumerSecret: "cs_8aee5928fc84585c665e295ff7b910e7a67f66e8",
		wpAPI: true,
		version: "wc/v3",
		queryStringAuth: true // Force Basic Authentication as query string true and using under HTTPS
	});
	export default {
		data() {
			return {
				totalPrice: 0,
				orderID: null
			};
		},
		methods: {
			addOrder() {
				var data = {
					payment_method: "Yandex Касса",
					payment_method_title: "Yandex Касса",
					set_paid: false,
					billing: {
						first_name: "John",
						last_name: "Doe",
						address_1: "969 Market",
						address_2: "",
						city: "San Francisco",
						state: "CA",
						postcode: "94103",
						country: "US",
						email: "john.doe@example.com",
						phone: "(555) 555-5555"
					},
					shipping: {
						first_name: "John",
						last_name: "Doe",
						address_1: "969 Market",
						address_2: "",
						city: "San Francisco",
						state: "CA",
						postcode: "94103",
						country: "US"
					},
					line_items: [
						{
							product_id: 9,
							quantity: 2
						}
					],
					shipping_lines: [
						{
							method_id: "flat_rate",
							method_title: "Flat Rate"
						}
					]
				};

				WooCommerce.post("orders", data, (err, data, res) => {
					
                    let payload = {
                        price: JSON.parse(res).total,
                        orderID: JSON.parse(res).id
                    };

                    payload = JSON.stringify(payload);

                    axios.post("https://api.dinoshop.msk.ru/yandex-kassa/ya.php", payload).then(response => {
                        console.log(response);
                    let redirectURL = response.data.confirmation.confirmation_url;
                    window.location.replace(redirectURL);
                    }).catch(error => {
                            console.log(error);
                    });
					
				});
            }
		}
	};
</script>

<style>
</style>
