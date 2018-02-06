<?php
$servername = "mysql873.umbler.com";
$username = "dotpegaso";
$password = "GcYvO.Cw}53";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully";
?>