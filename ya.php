<?php
require __DIR__ . '/lib/autoload.php';

use YandexCheckout\Client;




$client = new Client();
$client->setAuth('577595', 'test_u-GcXknY_wz7I8PE2tp2GP1_cOrfx1iwS1EpMrDyMNg');

$source = file_get_contents('php://input');
$json = json_decode($source, true);


$idempotenceKey = uniqid('', true);
$response = $client->createPayment(
    array(
        'amount' => array(
            'value' => $json['price'],
            'currency' => 'RUB',
        ),
        'payment_method_data' => array(
            'type' => 'bank_card',
        ),
        'confirmation' => array(
            'type' => 'redirect',
            'return_url' => 'https://dinoshop.msk.ru',
        ),
        'description' => 'Заказ #' . $json['orderID'],
        'metadata' => array(
            'orderID' => $json['orderID']
        )
    ),
    $idempotenceKey
);

print json_encode($response);