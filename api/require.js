import axios from 'axios';
import { wooConfig } from './wooConfig';

export default function (req, res, next) {

    if (req.body.event === 'payment.waiting_for_capture') {
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

    if (req.body.event === 'payment.succeeded') {
        let data = {
            status: 'completed'
        };

        let orderID = req.body.object.metadata.orderID;

        axios.put('orders/' + orderID, data, wooConfig).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }

    next();
};