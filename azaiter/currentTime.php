<?php
	$postedData = $_POST["name"];
	//$postedData = "jeee";
	echo date(DATE_RFC2822) . " (" . $_SERVER['REQUEST_METHOD'] . ")" . " Your name is : " . $postedData;
?>