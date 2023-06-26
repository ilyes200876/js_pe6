<?php

// si envoi en post
// $langue = $_POST["langue"];

// si appel en get
$langue = $_GET["langue"];
if ($langue == "FR"){
  $bonjour = "Bonjour";
  $auRevoir = "Au Revoir";
} 
if ($langue == "EN"){
  $bonjour = "Hello";
  $auRevoir = "Goodbye";
} 

$response["bonjour"]= $bonjour;
$response["aurevoir"] = $auRevoir;
echo json_encode($response);