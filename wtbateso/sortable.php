<?php

# echo "hello!";
# print_r($_GET);
require_once '../../cis355/crud/database.php';

$db = Database::connect();
$id = $_GET['id'];
$available = $_GET['available'];
$stmt = $db->prepare("UPDATE cis255 SET available = :available WHERE id = :id");
# $stmt = $db->prepare("INSERT INTO cis255 :available = 'test'");

$stmt->bindParam(":id", $id);
$stmt->bindParam(':available', $available);
$stmt->execute();
$db = Database::disconnect();

?>