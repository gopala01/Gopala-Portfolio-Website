<?php
// echo "<pre>";
// print_r($_SERVER);
// echo "</pre>";
// exit;

session_start();

ini_set('display_errors', 1);
error_reporting(E_ALL);

try {
   $pdo = new PDO("mysql:host=localhost;dbname=my_website_db", "root", "");
   // set the PDO error mode to exception
   $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   echo "Connected successfully";
} catch(PDOException $e) {
   echo "Connection failed: " . $e->getMessage();
}

function createUser($username, $password, $email, $pdo) {
    try {
        $sql = "INSERT INTO users (username, password, email) VALUES (:username, :password, :email)";
        $stmt = $pdo->prepare($sql);

        // Hash the password for security
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':password', $hashedPassword);
        $stmt->bindParam(':email', $email);

        $stmt->execute();
        // echo "User created successfully";
    } catch(PDOException $e) {
        echo "Error: " . $e->getMessage();
    }

    
}

if (isset($_SERVER["REQUEST_METHOD"]) && $_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['name'];
    $password = $_POST['password'];
    $email = $_POST['email']; 
    // Create PDO instance here or include it from another file
    $pdo = new PDO("mysql:host=localhost;dbname=my_website_db", "root", "");

    // Call the createUser function
    createUser($username, $password, $email, $pdo);

    // echo 'User created successfully';

    // Redirect or output a success message
    header('Location: ../website_pages/login.html'); // Redirect to login page
    //  // or just output a success message
}
?>

