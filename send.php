<?php
// Database configuration

error_reporting(E_ALL);
ini_set('display_errors', 1);
$host = "localhost";
$user = "root";       // change if different
$password = "sgnjsrjh231850";       // change if you have set a MySQL password
$database = "feedback";

// Create connection
$conn =  mysqli_connect($host, $user, $password, $database);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$user = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

$sql= "INSERT INTO greetings (name, email, message)VALUES ('$user' ,'$email','$message')";

if(mysqli_query($conn,$sql)){
    echo("Data added Successfully");
}

else{
    echo "Something went wrong";
}
?>
