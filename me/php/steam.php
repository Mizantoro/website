<?php
// By the way have I mentioned how much
// I fucking hate PHP?
// Go to projects/Hypixel-JSON-viewer/php/hypixel.php
// to see how to configure PHP.
// Fucking fuckerial fuck...
header("Content-Type: application/json");

require __DIR__ . "/key.php";


$url = "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=$API_KEY&steamids=76561198883621659";

$ch = curl_init($url);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 5);

$response = curl_exec($ch);

if ($response === false) {
    echo json_encode([
        "success" => false,
        "error" => curl_error($ch)
    ]);
    exit;
}

echo $response;