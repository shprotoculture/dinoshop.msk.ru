const WooCommerceAPI = require('woocommerce-api');

export const WooCommerce = new WooCommerceAPI({
  url: 'https://api.dinoshop.msk.ru/wordpress',
  consumerKey: 'ck_2f11033dd5c4d4a43f11f5c766dda92994cbd2f3',
  consumerSecret: 'cs_8aee5928fc84585c665e295ff7b910e7a67f66e8',
  wpAPI: true,
  version: 'wc/v3',
  queryStringAuth: true
});