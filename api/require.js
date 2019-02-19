import axios from 'axios';
export default function (req, res, next) {
    // req is the Node.js http request object

    if(req.body.event === 'payment.waiting_for_capture') {
        let data = {
            id: req.body.object.id,
            value: req.body.object.amount.value,
            currency: req.body.object.amount.currency
        };

        let payload = JSON.stringify(data);

        axios.post('https://api.dinoshop.msk.ru/yandex-kassa/capture.php', payload).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }

    // res is the Node.js http response object

    // next is a function to call to invoke the next middleware
    // Don't forget to call next at the end if your middleware is not an endpoint!
    next();
};