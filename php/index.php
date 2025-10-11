<?php
$jsonFile = "index_views.json";
$date = new DateTime("now", new DateTimeZone("UTC"));
$today = $date->format("Y-m-d");

if (file_exists($jsonFile)) {
  $stats = json_decode(file_get_contents($jsonFile), true);
  if (!is_array($stats) || !isset($stats["total"]) || !isset($stats["daily"]) || !isset($stats["last_call_date"])) {
    $stats = ["total" => 0, "daily" => 0, "last_call_date" => ""];
  }
}
else {
  $stats = ["total" => 0, "daily" => 0, "last_call_date" => ""];
}

if ($_SERVER["REQUEST_METHOD"] === "POST" && array_key_exists("views", $_POST)) {
  $post = $_POST["views"];
  if ($today != $stats["last_call_date"]) {
    $stats["daily"] = 0;
    $stats["last_call_date"] = $today;
  }
  $stats["total"]++;
  $stats["daily"]++;
  file_put_contents($jsonFile, json_encode($stats));
}

  $total = $stats["total"];
  $daily = $stats["daily"];
  
  echo "Total visits: $total<br>";
  echo "Visits today: $daily";
?>
