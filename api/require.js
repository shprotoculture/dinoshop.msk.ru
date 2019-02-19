import axios from 'axios';

var WooCommerceAPI = require('woocommerce-api');

var WooCommerce = new WooCommerceAPI({
    url: 'https://api.dinoshop.msk.ru',
    consumerKey: 'ck_2f11033dd5c4d4a43f11f5c766dda92994cbd2f3',
    consumerSecret: 'cs_8aee5928fc84585c665e295ff7b910e7a67f66e8',
    wpAPI: true,
    version: 'wc/v3',
    queryStringAuth: true // Force Basic Authentication as query string true and using under HTTPS
});
export default function (req, res, next) {
    // req is the Node.js http request object

    console.log(req.body);

    if(req.body.event === 'payment.waiting_for_capture') {
        let data = {
            id: req.body.object.id,
            value: req.body.object.amount.value,
            currency: req.body.object.amount.currency
        };

        let payload = JSON.stringify(data);

        axios.post('https://api.dinoshop.msk.ru/yandex-kassa/capture.php', payload).then(response => {
            console.log('good');
        }).catch(error => {
            console.log(error);
        });
    }

    if(req.body.event === 'payment.succeeded') {
        let data = {
            status: 'completed'
        };

        WooCommerce.put('orders/' + req.body.object.metadata.orderID, data, function(err, data, res) {
            console.log(res);
        });
    }

    // res is the Node.js http response object

    // next is a function to call to invoke the next middleware
    // Don't forget to call next at the end if your middleware is not an endpoint!
    next();
};