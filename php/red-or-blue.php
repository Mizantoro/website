<!-- https://choice.alwood.dev/ -->
<?php
$jsonFile = "red-blue-stat.json";

if (file_exists($jsonFile)) {
  $stats = json_decode(file_get_contents($jsonFile), true);
  if (!is_array($stats) || !isset($stats["red"]) || !isset($stats["blue"])) {
    $stats = ["red" => 0, "blue" => 0];
  }
} else {
  $stats = ["red" => 0, "blue" => 0];
}

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["pill"])) {
  $pill = $_POST["pill"];
  $stats[$pill]++;
  file_put_contents($jsonFile, json_encode($stats));
}

$color = null;
if ($pill === "red") {
  $color = "#e63535";
} elseif ($pill === "blue") {
  $color = "#1b67dc";
}


$total = $stats["red"] + $stats["blue"];

if ($total > 0 && $pill) {
  $same_pct = $pill == 'red' 
      ? round($stats["red"] / $total * 100, 1) 
      : round($stats["blue"] / $total * 100, 1);

  echo "<p style='font-size: 30px'>You have chosen the <span style='color:$color'>$pill</span> pill.</p>";
  echo "<p>$same_pct% of people agree with you.</p>";
}
?>
