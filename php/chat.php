<?php
$jsonFile = "messages.json";
$today = date("Y-m-d");

if (file_exists($jsonFile)) {
    $data = json_decode(file_get_contents($jsonFile), true);
    if (!is_array($data)) {
        $data = ["date" => $today, "messages" => []];
    }
} else {
    $data = ["date" => $today, "messages" => []];
}

if (!isset($data["date"]) || $data["date"] !== $today) {
    $data["date"] = $today;
    $data["messages"] = [];
}

$messages = $data["messages"];

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (!empty($_POST["nickname"]) && !empty($_POST["message"])) {
        $nickname = htmlspecialchars($_POST["nickname"]);
        $messageText = htmlspecialchars($_POST["message"]);

        $newMessage = [
            "nickname" => $nickname,
            "message" => $messageText,
        ];

        $messages[] = $newMessage;

        $data["messages"] = $messages;
        file_put_contents($jsonFile, json_encode($data, JSON_PRETTY_PRINT));
    }
}

header('Content-Type: application/json');
echo json_encode($messages, JSON_PRETTY_PRINT);
?>
