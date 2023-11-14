<?php
$servername = "localhost"; // or your server address
$username = "adminuser";
$password = "chandu2001";
$database = "my_website_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully";
?>
