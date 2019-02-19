<?php
require __DIR__ . '/lib/autoload.php';

use YandexCheckout\Client;




$client = new Client();
$client->setAuth('577595', 'test_u-GcXknY_wz7I8PE2tp2GP1_cOrfx1iwS1EpMrDyMNg');

$source = file_get_contents('php://input');
$json = json_decode($source, true);

$paymentId = $json['id'];
$idempotenceKey = uniqid('', true);
$response = $client->capturePayment(
    array(
        'amount' => array(
            'value' => $json['value'],
            'currency' => $json['currency'],
        ),
    ),
    $paymentId,
    $idempotenceKey
);